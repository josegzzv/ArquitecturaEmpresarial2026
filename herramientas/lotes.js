#!/usr/bin/env node
/* Parte los archivos de cadenas en lotes traducibles y los vuelve a unir.
   node herramientas/lotes.js partir [tamaño]
   node herramientas/lotes.js unir                */

const fs = require("fs");
const path = require("path");

const RAIZ = path.resolve(__dirname, "..");
const BORRADOR = path.join(RAIZ, "herramientas", "traduccion");
const PARTES = path.join(BORRADOR, "partes");
const ARCHIVOS = ["semana-1", "semana-2", "semana-3", "semana-4", "semana-5", "casos"];

function partir(tam) {
  fs.mkdirSync(PARTES, { recursive: true });
  const indice = [];
  ARCHIVOS.forEach((nombre) => {
    const todo = JSON.parse(fs.readFileSync(path.join(BORRADOR, nombre + ".json"), "utf8"));
    for (let i = 0, n = 1; i < todo.length; i += tam, n++) {
      const trozo = todo.slice(i, i + tam);
      const archivo = `${nombre}-${String(n).padStart(2, "0")}.json`;
      fs.writeFileSync(path.join(PARTES, archivo), JSON.stringify(trozo, null, 1));
      indice.push({
        archivo,
        cadenas: trozo.length,
        caracteres: trozo.reduce((a, u) => a + u.es.length, 0)
      });
    }
  });
  fs.writeFileSync(path.join(PARTES, "_indice.json"), JSON.stringify(indice, null, 1));
  console.log(`${indice.length} lotes`);
  indice.forEach((x) => console.log(`  ${x.archivo}  ${x.cadenas} cadenas  ${x.caracteres} car.`));
}

function unir() {
  const problemas = [];
  ARCHIVOS.forEach((nombre) => {
    const todo = JSON.parse(fs.readFileSync(path.join(BORRADOR, nombre + ".json"), "utf8"));
    const porRuta = {};
    fs.readdirSync(PARTES)
      .filter((f) => f.indexOf(nombre + "-") === 0 && f.endsWith(".json"))
      .forEach((f) => {
        JSON.parse(fs.readFileSync(path.join(PARTES, f), "utf8"))
          .forEach((u) => { if (u.en) porRuta[u.ruta] = u.en; });
      });
    let faltan = 0;
    todo.forEach((u) => {
      if (porRuta[u.ruta]) u.en = porRuta[u.ruta];
      else faltan++;
    });
    if (faltan) problemas.push(`${nombre}: faltan ${faltan} de ${todo.length}`);
    fs.writeFileSync(path.join(BORRADOR, nombre + ".json"), JSON.stringify(todo, null, 1));
    console.log(`${nombre}: ${todo.length - faltan}/${todo.length} traducidas`);
  });
  if (problemas.length) { console.log("\nPendientes:\n  " + problemas.join("\n  ")); process.exit(1); }
}

const [, , accion, tam] = process.argv;
if (accion === "partir") partir(Number(tam) || 300);
else if (accion === "unir") unir();
else { console.log("Uso: node herramientas/lotes.js partir [tamaño] | unir"); process.exit(1); }
