#!/usr/bin/env node
/* ============================================================
   verificar-traduccion.js — contrato entre /data y /data/en

   Traducir NO puede cambiar la aritmética. Este script carga el
   archivo español y su contraparte en inglés, y falla si:

     · faltan o sobran claves
     · un arreglo cambia de longitud
     · un número cambia (respuesta, tolerancia, correcta, id…)
     · un booleano cambia
     · una cadena quedó vacía
     · quedó texto sin traducir en un campo visible (aviso, no error)

   Uso:  node herramientas/verificar-traduccion.js
   ============================================================ */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const RAIZ = path.resolve(__dirname, "..");
const ARCHIVOS = ["curso", "semana-1", "semana-2", "semana-3", "semana-4", "semana-5", "casos"];

/* ---------- Carga aislada de un archivo de datos ---------- */

function cargar(rutaRelativa) {
  const ruta = path.join(RAIZ, rutaRelativa);
  if (!fs.existsSync(ruta)) return null;

  const capturado = {};
  const registrar = (nombre) => (def) => { capturado[nombre] = def; };

  const EA = {
    registrarCurso:    registrar("curso"),
    registrarCursoEn:  registrar("curso"),
    registrarSemana:   registrar("semana"),
    registrarSemanaEn: registrar("semana"),
    registrarCasos:    registrar("casos"),
    registrarCasosEn:  registrar("casos")
  };

  const contexto = vm.createContext({ EA, window: { EA }, console });
  try {
    vm.runInContext(fs.readFileSync(ruta, "utf8"), contexto, { filename: ruta });
  } catch (e) {
    return { error: e.message };
  }
  return capturado;
}

/* ---------- Comparación estructural ---------- */

const errores = [];
const avisos = [];

/* Campos donde una cadena idéntica al español es sospechosa pero no fatal:
   muchos términos técnicos y nombres propios no se traducen. */
const PALABRAS_ES = /\b(el|la|los|las|de|del|que|para|con|una|por|más|según|cuál|qué|proceso|tiempo|cliente|semana)\b/i;

function comparar(es, en, ruta) {
  const tEs = tipo(es), tEn = tipo(en);

  if (tEs !== tEn) {
    errores.push(`${ruta}: el español es ${tEs} y el inglés es ${tEn}`);
    return;
  }

  switch (tEs) {
    case "number":
      if (es !== en) errores.push(`${ruta}: número distinto — es=${es} en=${en}`);
      break;

    case "boolean":
      if (es !== en) errores.push(`${ruta}: booleano distinto — es=${es} en=${en}`);
      break;

    case "string":
      if (es.trim() !== "" && en.trim() === "") {
        errores.push(`${ruta}: la cadena en inglés quedó vacía`);
        break;
      }
      /* Los números dentro del texto son el corazón de este curso:
         si uno se movió al traducir, el ejercicio deja de cuadrar. */
      compararNumeros(es, en, ruta);
      /* La estructura HTML tiene que sobrevivir intacta. */
      compararEtiquetas(es, en, ruta);
      if (es.length > 40 && es === en && PALABRAS_ES.test(es)) {
        avisos.push(`${ruta}: parece sin traducir — "${es.slice(0, 70)}…"`);
      }
      break;

    case "array":
      if (es.length !== en.length) {
        errores.push(`${ruta}: el arreglo cambió de tamaño — es=${es.length} en=${en.length}`);
        return;
      }
      es.forEach((v, i) => comparar(v, en[i], `${ruta}[${i}]`));
      break;

    case "object": {
      const kEs = Object.keys(es).sort();
      const kEn = Object.keys(en).sort();
      kEs.filter((k) => kEn.indexOf(k) < 0)
         .forEach((k) => errores.push(`${ruta}: falta la clave "${k}" en inglés`));
      kEn.filter((k) => kEs.indexOf(k) < 0)
         .forEach((k) => errores.push(`${ruta}: sobra la clave "${k}" en inglés`));
      kEs.filter((k) => kEn.indexOf(k) > -1)
         .forEach((k) => comparar(es[k], en[k], `${ruta}.${k}`));
      break;
    }

    default:
      if (es !== en) errores.push(`${ruta}: valor distinto`);
  }
}

function tipo(v) {
  if (Array.isArray(v)) return "array";
  if (v === null) return "null";
  return typeof v;
}

/* ---------- Números dentro del texto ---------- */

const RE_NUM = /\d+(?:[.,]\d+)*/g;

function compararNumeros(es, en, ruta) {
  const a = es.match(RE_NUM) || [];
  const b = en.match(RE_NUM) || [];
  if (a.length !== b.length || a.some((v, i) => v !== b[i])) {
    errores.push(`${ruta}: cambiaron los números del texto\n      es: [${a.join(", ")}]\n      en: [${b.join(", ")}]`);
  }
}

/* ---------- Estructura HTML ---------- */

const RE_ETIQUETA = /<\/?([a-z][a-z0-9]*)\b/gi;

function compararEtiquetas(es, en, ruta) {
  const a = (es.match(RE_ETIQUETA) || []).map((t) => t.toLowerCase());
  const b = (en.match(RE_ETIQUETA) || []).map((t) => t.toLowerCase());
  if (a.length !== b.length || a.some((v, i) => v !== b[i])) {
    errores.push(`${ruta}: cambió el marcado HTML — es tiene ${a.length} etiquetas, en tiene ${b.length}`);
  }
}

/* ---------- Coherencia del modo "clasificar" ----------
   Cada items[].categoria debe existir en categorias[]; si no,
   el reactivo se vuelve imposible de contestar bien. */

function revisarClasificar(en, origen) {
  const lista = (en.practica && en.practica.clasificar) || [];
  lista.forEach((ej, i) => {
    const validas = ej.categorias || [];
    (ej.items || []).forEach((it, j) => {
      if (validas.indexOf(it.categoria) < 0) {
        errores.push(`${origen}.practica.clasificar[${i}].items[${j}]: la categoría `
          + `"${it.categoria}" no está en [${validas.join(" | ")}]`);
      }
    });
  });
}

/* ---------- Recorrido ---------- */

let traducidos = 0;
let pendientes = [];

ARCHIVOS.forEach((nombre) => {
  const es = cargar(`data/${nombre}.js`);
  const en = cargar(`data/en/${nombre}.js`);

  if (!es) { errores.push(`data/${nombre}.js: no existe`); return; }
  if (es.error) { errores.push(`data/${nombre}.js: ${es.error}`); return; }

  if (!en) { pendientes.push(nombre); return; }
  if (en.error) { errores.push(`data/en/${nombre}.js: ${en.error}`); return; }

  traducidos++;
  Object.keys(es).forEach((k) => {
    if (!en[k]) { errores.push(`data/en/${nombre}.js: no registró "${k}"`); return; }
    comparar(es[k], en[k], `${nombre}.${k}`);
    revisarClasificar(en[k], nombre);
  });
});

/* ---------- Informe ---------- */

console.log(`\nArchivos traducidos: ${traducidos} de ${ARCHIVOS.length}`);
if (pendientes.length) console.log(`Pendientes: ${pendientes.join(", ")}`);

if (avisos.length) {
  console.log(`\n⚠ Avisos (${avisos.length}) — revisar, no bloquean:`);
  avisos.slice(0, 40).forEach((a) => console.log("  ·", a));
  if (avisos.length > 40) console.log(`  … y ${avisos.length - 40} más`);
}

if (errores.length) {
  console.log(`\n✗ Errores (${errores.length}):`);
  errores.slice(0, 60).forEach((e) => console.log("  ·", e));
  if (errores.length > 60) console.log(`  … y ${errores.length - 60} más`);
  console.log("");
  process.exit(1);
}

console.log("\n✓ La estructura y todos los valores numéricos coinciden.\n");
