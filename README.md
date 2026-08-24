# Diseño de Procesos y Arquitectura Empresarial

Sitio de apoyo para estudiantes: conceptos por semana y práctica interactiva.
Sin dependencias, sin build, sin servidor. Se publica tal cual en GitHub Pages.

## Estructura

```
index.html            Portada: tarjetas de las 5 semanas
semana.html           Página genérica de semana (semana.html?s=1)
glosario.html         Glosario buscable, alimentado por todas las semanas
assets/css/styles.css Único archivo de estilos (tema claro y oscuro)
assets/js/nucleo.js   Registro de contenido, tema, progreso local, utilidades
assets/js/vistas.js   Render de portada, conceptos y glosario
assets/js/practica.js Motor de práctica: 5 modos
data/curso.js         Metadatos generales del curso
data/semana-1.js      Contenido y reactivos de la Semana 1
data/semana-2.js      Contenido y reactivos de la Semana 2
data/semana-3.js      Plantilla vacía (estado: "proximamente")
data/semana-4.js      Plantilla vacía
data/semana-5.js      Plantilla vacía
```

Los archivos de `data/` son JavaScript (no JSON puro) por una sola razón práctica:
así el sitio funciona también al abrir `index.html` directamente desde el disco,
sin necesidad de levantar un servidor local. El contenido interno es JSON literal.

## Cómo agregar una semana nueva

1. Abre `data/semana-3.js` (o la que corresponda).
2. Cambia `estado: "proximamente"` por `estado: "publicada"`.
3. Llena `titulo`, `subtitulo`, `sesiones`, `objetivos`, `dias`, `terminos` y `practica`.
4. Guarda y haz push. No hay que tocar HTML, CSS ni JS.

Las semanas con `estado: "proximamente"` aparecen en la portada como tarjeta
atenuada y no son navegables.

### Bloques disponibles dentro de cada día

| `tipo`     | Campos                          | Uso |
|------------|---------------------------------|-----|
| `texto`    | `titulo`, `cuerpo` (HTML)       | Explicación en prosa |
| `lista`    | `titulo`, `items[]` (HTML)      | Viñetas |
| `pasos`    | `titulo`, `items[]` (HTML)      | Lista numerada |
| `tabla`    | `titulo`, `encabezados[]`, `filas[][]` | Comparaciones, AS-IS/TO-BE |
| `flujo`    | `titulo`, `pasos[]`             | Cadena horizontal con flechas |
| `diagrama` | `titulo`, `cuerpo` (texto plano)| Diagrama ASCII monoespaciado |
| `defs`     | `titulo`, `items[{termino, definicion}]` | Definiciones |
| `nota`     | `titulo`, `cuerpo` (HTML)       | Caja ámbar: advertencias, preguntas al grupo |
| `clave`    | `titulo`, `cuerpo` (HTML)       | Caja de acento: idea central del tema |

### Los cinco modos de práctica

```js
practica: {
  // 1 · Opción múltiple con retroalimentación
  opcionMultiple: [{
    tema: "Dominios",
    pregunta: "…",
    opciones: ["correcta", "distractor 1", "distractor 2", "distractor 3"],
    correcta: 0,                       // índice en el arreglo `opciones`
    explicacion: "por qué la correcta lo es",
    porQueNo: { 1: "…", 2: "…", 3: "…" }   // opcional, por índice
  }],

  // 2 · Escenario → marco correcto
  escenarios: [{
    escenario: "situación de la empresa…",
    opciones: ["TOGAF", "COBIT", "ITIL", "BPMN"],
    correcta: 0,
    explicacion: "…",
    porQueNo: { 1: "…" }
  }],

  // 3 · Clasificar (arrastrar y soltar, con alternativa por toque)
  clasificar: [{
    consigna: "…",
    categorias: ["Negocio", "Datos", "Aplicaciones", "Tecnología"],
    items: [{ texto: "SAP ERP", categoria: "Aplicaciones" }],
    explicacion: "…"
  }],

  // 4 · Ordenar secuencia
  ordenar: [{
    consigna: "…",
    pasos: ["primero", "segundo", "tercero"],   // en el orden CORRECTO
    explicacion: "…"
  }],

  // 5 · Tarjetas de repaso
  flashcards: [{ frente: "TOGAF", reverso: "The Open Group Architecture Framework…" }]
}
```

Las opciones y el orden de los reactivos se barajan automáticamente en cada
intento: escribe siempre la respuesta correcta en la posición que quieras y
apunta a ella con `correcta`.

### Glosario

Cada semana aporta su arreglo `terminos: [{ termino, sigla, definicion }]`.
El glosario los reúne, ordena alfabéticamente y marca la semana de origen.
No hay que editar `glosario.html`.

## Publicación en GitHub Pages

Repositorio destino: `josegzzv/ArquitecturaEmpresarial2026` (cuenta personal).
La máquina tiene dos identidades SSH configuradas en `~/.ssh/config`, así que el
remote **debe usar el alias**, no `github.com` a secas — de lo contrario el push
puede salir con la llave de trabajo:

```bash
git remote add origin git@github.com-personal:josegzzv/ArquitecturaEmpresarial2026.git
```

Todo el proceso está en `publicar.sh`:

```bash
cd ea-curso
bash publicar.sh
```

El script verifica con qué cuenta responde el alias, reinicia el historial con tu
identidad de Git, agrega el remote con el alias correcto y hace push.
**Requisito previo:** el repositorio debe existir en GitHub y estar vacío
(sin README, sin `.gitignore`, sin licencia).

Después, activar Pages: **Settings → Pages → Source: Deploy from a branch →
`main` / `(root)`**, o bien:

```bash
gh api -X POST repos/josegzzv/ArquitecturaEmpresarial2026/pages \
  -f 'source[branch]=main' -f 'source[path]=/'
```

El sitio queda en `https://josegzzv.github.io/ArquitecturaEmpresarial2026/`.
El archivo `.nojekyll` evita que GitHub procese el sitio con Jekyll.

### Actualizaciones posteriores

```bash
git add -A && git commit -m "Semana 3" && git push
```

Pages redespliega solo, en menos de un minuto.

## Notas

- El progreso de cada estudiante se guarda solo en su navegador (`localStorage`);
  no se envía a ningún servidor y el profesor no lo ve.
- El tema claro/oscuro respeta la preferencia del sistema y puede cambiarse
  con el botón de la barra superior.
- El sitio no usa librerías ni frameworks. La única dependencia externa son dos
  tipografías de Google Fonts (Archivo para títulos, IBM Plex Mono para los
  diagramas), cargadas con `display=swap`: si no hay red, la página se muestra
  igual con las tipografías del sistema.
