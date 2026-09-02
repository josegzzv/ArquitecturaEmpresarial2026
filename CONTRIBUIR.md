# Documentación técnica

Cómo está construido el sitio y cómo se le agrega contenido.
Para el propósito del material, ver [`README.md`](README.md).

Sin dependencias, sin build, sin servidor. Se publica tal cual en GitHub Pages.

## Estructura

```
index.html              Portada: tarjetas de las 5 semanas
semana.html             Página genérica de semana (semana.html?s=1)
casos.html              Catálogo de casos + banco de práctica propio
taller.html             Taller integrador: un caso de punta a punta
glosario.html           Glosario buscable, alimentado por todas las semanas
aviso-legal.html        Autoría, atribuciones, marcas de terceros, condiciones de uso
publicar.sh             Publica o actualiza el sitio en GitHub Pages

assets/css/styles.css   Único archivo de estilos (tema claro y oscuro)
assets/js/nucleo.js     Registro de contenido, tema, idioma, progreso, utilidades
assets/js/idioma.js     Motor ES/EN: diccionario de interfaz y carga del contenido
assets/js/vistas.js     Render de portada, conceptos y glosario
assets/js/practica.js   Motor de práctica: 6 modos
assets/js/casos.js      Render del catálogo de casos
assets/js/taller.js     Motor del taller: etapas, campos, rúbricas y entregable

data/curso.js           Metadatos generales del curso
data/semana-1..5.js     Contenido y reactivos de cada semana
data/casos.js           Catálogo de casos y su banco de reactivos
data/taller.js          Caso y etapas del taller integrador
data/en/*.js            Los mismos archivos, en inglés
```

Los archivos de `data/` son JavaScript (no JSON puro) por una sola razón
práctica: así el sitio funciona al abrir `index.html` directamente desde el
disco, sin levantar un servidor local. El contenido interno es JSON literal.

## Cómo agregar una semana nueva

1. Abre `data/semana-N.js`.
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
| `svg`      | `titulo`, `svg` (markup), `pie` | Diagrama vectorial |
| `defs`     | `titulo`, `items[{termino, definicion}]` | Definiciones |
| `nota`     | `titulo`, `cuerpo` (HTML)       | Caja ámbar: advertencias, preguntas al grupo |
| `clave`    | `titulo`, `cuerpo` (HTML)       | Caja de acento: idea central del tema |

### Diagramas vectoriales (`tipo: "svg"`)

El SVG se escribe **sin colores literales**: se pinta con clases de CSS para que
cambie con el tema claro/oscuro.

| Clase | Para qué |
|-------|----------|
| `caja` / `caja-viva` / `caja-alt` | Rectángulos: neutro, de acento, secundario |
| `rotulo` / `rotulo-sm` / `rotulo-viva` | Texto normal, chico y de acento |
| `arista` / `arista-viva` / `arista-punteada` | Conectores |
| `punta` / `punta-viva` | Relleno de las puntas de flecha (`marker`) |
| `zona` | Región agrupadora de fondo |

Usa siempre `viewBox` y **nunca** `width`/`height` fijos: la figura escala sola
dentro de `.figura-lienzo` y no desborda en móvil.

### Los seis modos de práctica

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

  // 5 · Ejercicios numéricos
  calculos: [{
    tema: "Rutas múltiples",
    titulo: "Título del ejercicio",
    enunciado: "Planteamiento en HTML…",
    datos:    { tipo: "tabla", titulo: "…", encabezados: [...], filas: [[...]] },  // opcional
    diagrama: { titulo: "…", svg: "…" },                                          // opcional
    preguntas: [
      { etiqueta: "Tiempo de ciclo (CT)", respuesta: 31.22, unidad: "min",
        tolerancia: 0.05, pista: "texto opcional" }
    ],
    solucion: "<p>…</p><div class='paso-calc'>desarrollo monoespaciado</div>"
  }],

  // 6 · Tarjetas de repaso
  flashcards: [{ frente: "TOGAF", reverso: "The Open Group Architecture Framework…" }]
}
```

**Sobre el modo `calculos`.** Acepta punto o coma decimal y tolera `%`, `$`,
separador de miles y espacios. `tolerancia` es absoluta (si se omite, 0.01); usa
un valor holgado para porcentajes (0.5–0.8) y estrecho para enteros (0.01). A
diferencia de los demás modos, los ejercicios **no se barajan**: se presentan en
el orden del arreglo, para que puedan construirse uno sobre otro. Dentro de
`solucion`, la clase `paso-calc` da formato monoespaciado al desarrollo y
`resaltado` marca el resultado.

En los demás modos, las opciones y el orden de los reactivos se barajan
automáticamente en cada intento: escribe la respuesta correcta donde quieras y
apunta a ella con `correcta`.

## Catálogo de casos

`data/casos.js` registra el catálogo con
`EA.registrarCasos({ categorias, casos, practica })`.

```js
categorias: [{ id: "capacidad", nombre: "Capacidad y cuellos de botella", resumen: "…" }],
casos: [{
  id: "starbucks",                 // ancla de URL: casos.html#caso-starbucks
  titulo: "…", subtitulo: "…",
  categoria: "capacidad",
  semanas: [3],                    // pastillas S3, S4…
  patrones: ["cuello de botella"], // pastillas de acento y términos de búsqueda
  flujo: ["Paso 1", "Paso 2"],
  contexto: "HTML",
  analisis: "HTML",
  cifras: { titulo, encabezados: [...], filas: [[...]] },
  indicadores: ["…"],
  preguntas: ["…"],
  conecta: "texto corto"
}],
practica: { /* mismo esquema que el de una semana */ }
```

Para agregar casos basta con añadir objetos al arreglo `casos`: los chips de
filtro, el contador y la búsqueda se recalculan solos. Si el caso es de una
categoría nueva, agrega primero su entrada en `categorias`.

**Cifras ilustrativas.** Cada tabla se etiqueta automáticamente y la página lleva
un aviso general. No quites eso sin tener antes cifras públicas verificables.

## Taller integrador

`data/taller.js` registra el taller con `EA.registrarTaller({ titulo, caso, etapas })`.
A diferencia de la práctica, aquí el alumno **produce un entregable**, así que el
motor solo califica lo que tiene respuesta objetiva y para lo demás da una rúbrica
de autoevaluación y un modelo de referencia.

```js
etapas: [{
  id: "negocio",                    // ancla y clave de guardado
  titulo: "…", objetivo: "…",
  bloques: [ /* mismos tipos que una semana: texto, tabla, nota, clave… */ ],
  campos: [
    // numérico: se autocalifica
    { id: "cnh", etiqueta: "Costo de no hacer nada", respuesta: 534600,
      unidad: "$/año", tolerancia: 600, pista: "…" },
    // opción: se autocalifica
    { id: "cuello", tipo: "opcion", etiqueta: "¿Cuál es el cuello de botella?",
      opciones: ["Ingeniería", "Ventas", "Gerencia"], correcta: 0 },
    // redacción: NO se califica sola
    { id: "recomendacion", tipo: "texto", etiqueta: "Tu recomendación",
      ayuda: "…", marcador: "…", minimoPalabras: 40, lineas: 5 }
  ],
  solucion: "<div class='paso-calc'>…</div>",   // desarrollo de los numéricos
  rubrica: ["…", "…"],                          // el alumno se marca a sí mismo
  modelo: "<p>…</p>"                            // respuesta de referencia
}]
```

**Arrastre entre etapas.** En cualquier texto de una etapa, `{{etapa.campo}}` se
sustituye por lo que el alumno respondió antes — `{{tiempos.lt}}` trae el lead
time que él mismo calculó. Si aún no lo contesta se muestra un hueco marcado, no
un error. Es lo que convierte ocho ejercicios sueltos en un solo caso.

**Guardado.** Todo vive en `localStorage` bajo `ea:taller`, envuelto en try/catch:
si el navegador lo bloquea, el taller sigue funcionando sin memoria. Nada viaja a
ningún servidor.

**Entregable.** El alumno entrega en Word, así que el cierre no produce texto
plano: arma un **documento con formato** —título, tabla de identificación,
un encabezado por etapa, tabla de dos columnas para los valores numéricos y
párrafos para la redacción— y lo ofrece de tres maneras:

- **Copiar con formato.** Escribe `text/html` y `text/plain` al portapapeles con
  `ClipboardItem`, así que al pegar en Word llegan los títulos, las negritas y
  las tablas. Si la API no está disponible —contexto no seguro, navegador
  viejo— cae a seleccionar el nodo y `execCommand("copy")`, que también
  conserva el formato.
- **Descargar para Word.** Un `.doc` que en realidad es HTML con el bloque de
  espacios de nombres de Office; Word lo abre como documento, no como página.
- **Imprimir o guardar en PDF.** Con estilos de impresión que ocultan todo
  menos el documento.

El nombre y el grupo del alumno se piden en esa pantalla y se guardan con el
resto del avance.

**Al agregar campos numéricos**, verifica el resultado de forma independiente
antes de escribirlo en `respuesta`, y ajusta `tolerancia` al redondeo que esperas
del alumno (holgada en porcentajes y montos, estrecha en enteros).

## Idiomas

El sitio es bilingüe. `assets/js/idioma.js` guarda la preferencia en
`localStorage` bajo `ea:idioma` y respeta `navigator.language` la primera vez.
El conmutador **ES · EN** vive en la barra superior, junto al botón de tema.

Hay dos capas y se tratan distinto:

**1 · Interfaz.** El diccionario `TEXTOS` dentro de `idioma.js`, con los dos
idiomas en la misma línea. Toda cadena visible se pide con `EA.t("clave")`; no se
escribe texto suelto en el JS de vistas. En el HTML estático se marcan los nodos:

```html
<h1 data-t="inicio.h1">Diseño de Procesos y Arquitectura Empresarial</h1>
<input data-t-attr="placeholder:glosario.buscar" placeholder="Buscar: TOGAF…">
<title data-t-titulo="inicio.tituloDoc">…</title>
```

El español queda escrito en el HTML como respaldo si el JS no carga.

**2 · Contenido del curso.** `data/en/` replica cada archivo de `data/`. Se
cargan **solo** cuando el idioma activo es inglés: `idioma.js` los inyecta
durante el parseo del `<head>`, reutilizando el sello de versión de su propia
etiqueta `<script>`. Un lector en español no descarga ni un byte de inglés.

El respaldo es por archivo completo: una semana sin traducir se muestra en
español en lugar de quedar vacía.

### Cómo se traduce (no a mano)

Los archivos de `data/en/` **se generan**. Editarlos a mano rompería la
estructura o movería un número tarde o temprano. El flujo es:

```bash
node herramientas/cadenas.js extraer todos    # saca las cadenas con su ruta
node herramientas/lotes.js partir 320         # las parte en lotes traducibles
#   … se traduce el campo "en" de cada lote …
node herramientas/lotes.js unir               # los vuelve a juntar
node herramientas/cadenas.js inyectar todos   # reconstruye data/en/*.js
node herramientas/verificar-traduccion.js     # y esto tiene que pasar
```

`cadenas.js` clona el objeto español y sustituye **solo texto**, así que la
estructura, los índices y todos los números son idénticos por construcción.
Nunca extrae los valores centinela (`id`, `estado`, `tipo`, `sigla`, `categoria`,
`casoEstado`): traducirlos rompería anclas, filtros o el render. De un campo
`svg` extrae únicamente el contenido de los nodos `<text>` y `<tspan>`; la
geometría no se toca.

Para corregir una traducción suelta: edita su entrada en
`herramientas/traduccion/<archivo>.json` y vuelve a ejecutar `inyectar`.

### El verificador

`node herramientas/verificar-traduccion.js` falla —y debe fallar— si:

- faltan o sobran claves, o un arreglo cambió de longitud;
- cambió un número: `correcta`, `respuesta`, `tolerancia`, `id`;
- **cambió un número dentro del texto** — las cifras de las tablas y de las
  soluciones paso a paso se comparan token por token;
- cambió el marcado HTML de una cadena;
- una traducción quedó vacía;
- en el modo `clasificar`, un `items[].categoria` dejó de existir en
  `categorias[]` (el remapeo por posición lo evita, pero se comprueba igual).

También avisa —sin bloquear— cuando una cadena larga quedó idéntica al español.

### Terminología

El contrato está en [`herramientas/terminologia.md`](herramientas/terminologia.md)
y es obligatorio. Fija el núcleo (*cuello de botella* → bottleneck, *tiempo de
ciclo* → cycle time, *tiempo teórico de ciclo* → theoretical cycle time,
*retrabajo* → rework, *punto de equilibrio* → break-even point…), la lista de
siglas y nombres propios que **no** se traducen, y las decisiones que ya se
tomaron una vez y no se vuelven a abrir.

## Glosario

Cada semana aporta su arreglo `terminos: [{ termino, sigla, definicion }]`. El
glosario los reúne, ordena alfabéticamente y marca la semana de origen. No hay
que editar `glosario.html`.

## Publicación

```bash
bash publicar.sh "mensaje del commit"
```

El script detecta si el repositorio ya está configurado y hace `add` + `commit` +
`push` conservando el historial. Antes de cada push aplica un **sello de versión**
(`?v=AAAAMMDDhhmm`) a todas las referencias de `assets/` y `data/` en cada
`*.html` de la raíz; sin eso, los navegadores y el CDN de GitHub Pages sirven JS
y CSS viejos durante horas.

La máquina tiene dos identidades SSH en `~/.ssh/config`, así que el remote
**debe usar el alias** o el push puede salir con la llave equivocada:

```
git@github.com-personal:josegzzv/ArquitecturaEmpresarial2026.git
```

El archivo `.nojekyll` evita que GitHub procese el sitio con Jekyll.
El sitio queda en `https://josegzzv.github.io/ArquitecturaEmpresarial2026/`.
