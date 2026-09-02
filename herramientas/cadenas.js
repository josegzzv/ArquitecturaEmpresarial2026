#!/usr/bin/env node
/* ============================================================
   cadenas.js — extrae e inyecta las cadenas traducibles

   La traducción NO reescribe los archivos de datos a mano: eso
   rompería la sintaxis o movería un número tarde o temprano.
   En vez de eso:

     extraer   → saca cada cadena traducible con su ruta exacta
     inyectar  → reconstruye data/en/<archivo>.js clonando la
                 estructura española y sustituyendo solo el texto

   Así la estructura, los índices y todos los números son idénticos
   por construcción, no por disciplina.

   Uso:
     node herramientas/cadenas.js extraer  <archivo>
     node herramientas/cadenas.js inyectar <archivo>

   <archivo> es curso | semana-1 … semana-5 | casos
   ============================================================ */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const RAIZ = path.resolve(__dirname, "..");
const BORRADOR = path.join(RAIZ, "herramientas", "traduccion");

/* Claves cuyo valor es un identificador o un valor centinela:
   traducirlas rompería anclas, filtros o la lógica del sitio. */
const NO_TRADUCIR = new Set(
  ["id", "estado", "tipo", "sigla", "icono", "clave", "categoria", "casoEstado"]);

const REGISTRO = {
  curso: ["registrarCurso", "registrarCursoEn"],
  casos: ["registrarCasos", "registrarCasosEn"],
  taller: ["registrarTaller", "registrarTallerEn"],
  semana: ["registrarSemana", "registrarSemanaEn"]
};

function familia(nombre) {
  if (nombre === "curso" || nombre === "casos" || nombre === "taller") return nombre;
  return "semana";
}

/* ---------- Carga del objeto español ---------- */

function cargarEs(nombre) {
  const ruta = path.join(RAIZ, "data", nombre + ".js");
  let capturado = null;
  const recoger = (d) => { capturado = d; };
  const EA = {
    registrarCurso: recoger, registrarCasos: recoger, registrarSemana: recoger,
    registrarTaller: recoger, registrarTallerEn: recoger,
    registrarCursoEn: recoger, registrarCasosEn: recoger, registrarSemanaEn: recoger
  };
  vm.runInContext(fs.readFileSync(ruta, "utf8"),
                  vm.createContext({ EA, window: { EA }, console }), { filename: ruta });
  if (!capturado) throw new Error(nombre + ": el archivo no registró nada");
  return capturado;
}

/* ---------- Texto dentro de un SVG ----------
   Solo se traduce lo que hay entre <text> y </text> (o <tspan>).
   La geometría, las clases y los identificadores no se tocan. */

const RE_TEXTO_SVG = /(<(?:text|tspan)\b[^>]*>)([^<]*)(<\/(?:text|tspan)>)/g;

function textosDeSvg(svg) {
  const fuera = [];
  let m;
  RE_TEXTO_SVG.lastIndex = 0;
  while ((m = RE_TEXTO_SVG.exec(svg)) !== null) fuera.push(m[2]);
  return fuera;
}

function reemplazarTextosDeSvg(svg, nuevos) {
  let i = 0;
  RE_TEXTO_SVG.lastIndex = 0;
  return svg.replace(RE_TEXTO_SVG, (todo, abre, dentro, cierra) => {
    const n = nuevos[i++];
    return abre + (n === undefined ? dentro : n) + cierra;
  });
}

/* ---------- Recorrido ---------- */

function recorrer(nodo, ruta, visitar) {
  if (Array.isArray(nodo)) {
    nodo.forEach((v, i) => recorrer(v, ruta.concat(String(i)), visitar));
    return;
  }
  if (nodo && typeof nodo === "object") {
    Object.keys(nodo).forEach((k) => {
      if (NO_TRADUCIR.has(k)) return;
      recorrer(nodo[k], ruta.concat(k), visitar);
    });
    return;
  }
  if (typeof nodo === "string") visitar(nodo, ruta);
}

/* ---------- extraer ---------- */

function extraer(nombre) {
  const es = cargarEs(nombre);
  const unidades = [];

  recorrer(es, [], (texto, ruta) => {
    if (!texto.trim()) return;
    const clave = ruta[ruta.length - 1];

    if (clave === "svg") {
      textosDeSvg(texto).forEach((t, i) => {
        if (t.trim()) unidades.push({ ruta: ruta.join("/") + "#" + i, es: t, en: "" });
      });
      return;
    }
    unidades.push({ ruta: ruta.join("/"), es: texto, en: "" });
  });

  fs.mkdirSync(BORRADOR, { recursive: true });
  const salida = path.join(BORRADOR, nombre + ".json");
  fs.writeFileSync(salida, JSON.stringify(unidades, null, 1));

  const caracteres = unidades.reduce((a, u) => a + u.es.length, 0);
  console.log(`${nombre}: ${unidades.length} cadenas · ${caracteres.toLocaleString("es-MX")} caracteres → ${path.relative(RAIZ, salida)}`);
}

/* ---------- inyectar ---------- */

function fijar(raiz, ruta, valor) {
  const partes = ruta.split("/");
  const svg = partes[partes.length - 1].indexOf("#") > -1;
  let indiceSvg = -1;
  if (svg) {
    const ultimo = partes.pop();
    const corte = ultimo.split("#");
    partes.push(corte[0]);
    indiceSvg = Number(corte[1]);
  }

  let n = raiz;
  for (let i = 0; i < partes.length - 1; i++) {
    n = n[partes[i]];
    if (n === undefined) throw new Error("ruta inexistente: " + ruta);
  }
  const hoja = partes[partes.length - 1];

  if (indiceSvg >= 0) {
    const pendiente = n["__svg__" + hoja] || (n["__svg__" + hoja] = []);
    pendiente[indiceSvg] = valor;
  } else {
    n[hoja] = valor;
  }
}

/* Aplica los textos SVG acumulados y limpia los campos auxiliares. */
function consolidarSvg(nodo) {
  if (Array.isArray(nodo)) { nodo.forEach(consolidarSvg); return; }
  if (!nodo || typeof nodo !== "object") return;
  Object.keys(nodo).forEach((k) => {
    if (k.indexOf("__svg__") === 0) {
      const destino = k.slice(7);
      nodo[destino] = reemplazarTextosDeSvg(nodo[destino], nodo[k]);
      delete nodo[k];
    } else {
      consolidarSvg(nodo[k]);
    }
  });
}

/* En el modo "clasificar", items[].categoria debe coincidir EXACTAMENTE
   con una entrada de categorias[]. Como categorias[] sí se traduce y
   items[].categoria no, aquí se remapea por posición. */
function remapearClasificar(es, en) {
  const lista = (en.practica && en.practica.clasificar) || [];
  const listaEs = (es.practica && es.practica.clasificar) || [];
  lista.forEach((ej, i) => {
    const catsEs = (listaEs[i] && listaEs[i].categorias) || [];
    const catsEn = ej.categorias || [];
    const mapa = {};
    catsEs.forEach((c, k) => { mapa[c] = catsEn[k]; });
    (ej.items || []).forEach((it) => {
      if (mapa[it.categoria] !== undefined) it.categoria = mapa[it.categoria];
    });
  });
}

function inyectar(nombre) {
  const es = cargarEs(nombre);
  const fuente = path.join(BORRADOR, nombre + ".json");
  if (!fs.existsSync(fuente)) throw new Error("falta " + path.relative(RAIZ, fuente));

  const unidades = JSON.parse(fs.readFileSync(fuente, "utf8"));
  const en = JSON.parse(JSON.stringify(es));

  let sinTraducir = 0;
  unidades.forEach((u) => {
    const v = (u.en === undefined || u.en === null || u.en === "") ? u.es : u.en;
    if (u.en === undefined || u.en === null || u.en === "") sinTraducir++;
    fijar(en, u.ruta, v);
  });

  consolidarSvg(en);
  remapearClasificar(es, en);

  const fn = REGISTRO[familia(nombre)][1];
  const cuerpo = "/* Generado por herramientas/cadenas.js — no editar a mano la estructura.\n"
    + "   Para corregir una traducción: edita herramientas/traduccion/" + nombre + ".json\n"
    + "   y vuelve a ejecutar:  node herramientas/cadenas.js inyectar " + nombre + " */\n"
    + "EA." + fn + "(\n" + JSON.stringify(en, null, 1) + "\n);\n";

  fs.mkdirSync(path.join(RAIZ, "data", "en"), { recursive: true });
  fs.writeFileSync(path.join(RAIZ, "data", "en", nombre + ".js"), cuerpo);

  console.log(`${nombre}: ${unidades.length - sinTraducir}/${unidades.length} traducidas`
    + (sinTraducir ? ` · ${sinTraducir} quedaron en español` : "")
    + ` → data/en/${nombre}.js`);
}

/* ---------- Entrada ---------- */

const [, , accion, nombre] = process.argv;
const TODOS = ["curso", "semana-1", "semana-2", "semana-3", "semana-4", "semana-5", "casos", "taller"];
const lista = nombre && nombre !== "todos" ? [nombre] : TODOS;

if (accion === "extraer") lista.forEach(extraer);
else if (accion === "inyectar") lista.forEach(inyectar);
else {
  console.log("Uso: node herramientas/cadenas.js extraer|inyectar [archivo|todos]");
  process.exit(1);
}
