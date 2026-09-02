/* ============================================================
   idioma.js — motor bilingüe español / inglés
   Se carga INMEDIATAMENTE DESPUÉS de nucleo.js y ANTES de /data.

   Responsabilidades:
     1. Resolver el idioma activo (localStorage > navegador > español).
     2. Servir el diccionario de interfaz con EA.t("clave", {…}).
     3. Cargar data/en/*.js cuando el idioma activo es inglés.
     4. Traducir los nodos marcados con data-t / data-t-attr.
     5. Dibujar el conmutador ES · EN.

   El contenido del curso NO vive aquí: vive en /data (español) y
   /data/en (inglés). Si falta una traducción se muestra el español.
   ============================================================ */

(function (EA) {
  "use strict";

  const CLAVE = "ea:idioma";
  const IDIOMAS = ["es", "en"];

  /* ---------- Resolución del idioma ---------- */

  function guardado() {
    try {
      const v = localStorage.getItem(CLAVE);
      return IDIOMAS.indexOf(v) > -1 ? v : null;
    } catch (e) { return null; }
  }

  function delNavegador() {
    const n = (navigator.language || "es").toLowerCase();
    return n.indexOf("en") === 0 ? "en" : "es";
  }

  const idiomaActivo = guardado() || delNavegador();

  document.documentElement.setAttribute("data-idioma", idiomaActivo);
  document.documentElement.lang = idiomaActivo;

  function idioma() { return idiomaActivo; }
  function esIngles() { return idiomaActivo === "en"; }

  function cambiar(nuevo) {
    if (IDIOMAS.indexOf(nuevo) < 0 || nuevo === idiomaActivo) return;
    try { localStorage.setItem(CLAVE, nuevo); } catch (e) { /* modo privado */ }
    window.location.reload();
  }

  /* ---------- Diccionario de interfaz ----------
     Toda cadena visible que no sea contenido del curso vive aquí.
     Marcadores: {n}, {a}, {b}, {i}, {titulo}… se sustituyen con EA.t(clave, {n: 3}).
  */

  const TEXTOS = {

    /* ---- Barra, marca y pie ---- */
    "marca.titulo":        ["Arquitectura Empresarial", "Enterprise Architecture"],
    "nav.inicio":          ["Inicio", "Home"],
    "nav.casos":           ["Casos", "Cases"],
    "nav.taller":          ["Taller", "Workshop"],
    "nav.glosario":        ["Glosario", "Glossary"],
    "nav.proximamente":    ["Próximamente", "Coming soon"],
    "tema.aClaro":         ["Cambiar a tema claro", "Switch to light theme"],
    "tema.aOscuro":        ["Cambiar a tema oscuro", "Switch to dark theme"],
    "idioma.etiqueta":     ["Idioma", "Language"],
    "idioma.aEspanol":     ["Ver el sitio en español", "View this site in Spanish"],
    "idioma.aIngles":      ["Ver el sitio en inglés", "View this site in English"],
    "pie.generadoPor":     ["Material generado por ", "Material created by "],
    "pie.aviso":           ["Aviso legal y atribuciones", "Legal notice and attributions"],
    "pie.apoyo":           ["Material de apoyo para estudiantes · {anio}",
                            "Study material for students · {anio}"],

    /* ---- Portada ---- */
    "portada.semana":      ["Semana {n}", "Week {n}"],
    "portada.sesiones":    ["{n} sesiones", "{n} sessions"],
    "portada.reactivos":   ["{n} reactivos", "{n} items"],
    "portada.proximamente":["Próximamente", "Coming soon"],
    "portada.mejor":       ["Mejor: {n}%", "Best: {n}%"],

    /* ---- Página de semana ---- */
    "semana.kicker":       ["Semana {n} · {s} sesiones", "Week {n} · {s} sessions"],
    "semana.objetivos":    ["Al terminar la semana el estudiante podrá",
                            "By the end of this week you will be able to"],
    "semana.tituloDoc":    ["Semana {n} · {t}", "Week {n} · {t}"],
    "semana.noEncontrada": ["Semana no encontrada", "Week not found"],
    "semana.noDisponible": ["Contenido no disponible", "Content unavailable"],
    "semana.volver":       ['Vuelve al <a href="index.html">índice del curso</a>.',
                            'Go back to the <a href="index.html">course index</a>.'],
    "semana.proxTitulo":   ["Próximamente", "Coming soon"],
    "semana.proxCuerpo":   ["El material de esta semana se publicará antes de la sesión correspondiente.",
                            "This week's material will be published before the corresponding session."],
    "tab.conceptos":       ["Conceptos", "Concepts"],
    "tab.practica":        ["Práctica", "Practice"],

    /* ---- Glosario ---- */
    "glosario.sinResultados": ["Sin resultados", "No results"],
    "glosario.pista":      ["Prueba con otra palabra: TOGAF, proceso, dato, gobierno…",
                            "Try another word: TOGAF, process, data, governance…"],
    "glosario.buscar":     ["Buscar: TOGAF, proceso, gobierno, artefacto…",
                            "Search: TOGAF, process, governance, artifact…"],

    /* ---- Modos de práctica ---- */
    "modo.opcionMultiple.nombre": ["Opción múltiple", "Multiple choice"],
    "modo.opcionMultiple.desc":   ["Reactivos con retroalimentación de por qué cada opción es o no correcta.",
                                   "Items with feedback on why each option is or isn't correct."],
    "modo.escenarios.nombre":     ["Escenario → marco", "Scenario → framework"],
    "modo.escenarios.desc":       ["Lee la situación y decide qué marco, estándar o metodología aplica.",
                                   "Read the situation and decide which framework, standard or method applies."],
    "modo.clasificar.nombre":     ["Clasificar", "Classify"],
    "modo.clasificar.desc":       ["Arrastra cada elemento a la categoría o dominio que le corresponde.",
                                   "Drag each item into the category or domain where it belongs."],
    "modo.ordenar.nombre":        ["Ordenar secuencia", "Put in order"],
    "modo.ordenar.desc":          ["Coloca las fases o pasos en el orden correcto.",
                                   "Arrange the phases or steps in the correct order."],
    "modo.calculos.nombre":       ["Cálculo de tiempos y capacidad", "Time and capacity calculations"],
    "modo.calculos.desc":         ["Ejercicios numéricos: CT, TCT, eficiencia, takt, cuello de botella y capacidad, con solución paso a paso.",
                                   "Numeric exercises: CT, TCT, efficiency, takt, bottleneck and capacity, with step-by-step solutions."],
    "modo.flashcards.nombre":     ["Tarjetas de repaso", "Flashcards"],
    "modo.flashcards.desc":       ["Concepto de un lado, definición del otro. Repaso rápido.",
                                   "Concept on one side, definition on the other. Quick review."],

    "unidad.reactivos":    ["{n} reactivos", "{n} items"],
    "unidad.ejercicios":   ["{n} ejercicios", "{n} exercises"],
    "unidad.tarjetas":     ["{n} tarjetas", "{n} cards"],

    /* ---- Motor de práctica ---- */
    "practica.elegirTitulo": ["Elige un modo de práctica", "Choose a practice mode"],
    "practica.elegirDesc":   ["Cada modo entrena una habilidad distinta: reconocer conceptos, decidir qué marco aplicar, clasificar por dominio, ordenar un método o repasar vocabulario.",
                              "Each mode trains a different skill: recognizing concepts, deciding which framework to apply, classifying by domain, sequencing a method or reviewing vocabulary."],
    "practica.elegirCorta":  ["Cada modo entrena una habilidad distinta.",
                              "Each mode trains a different skill."],
    "practica.sinTitulo":    ["Aún no hay reactivos para esta semana",
                              "No practice items for this week yet"],
    "practica.sinCuerpo":    ["El material de práctica se publicará junto con las sesiones.",
                              "Practice material will be published along with the sessions."],
    "practica.deTotal":      ["{i} de {n}", "{i} of {n}"],
    "practica.aciertos":     [" aciertos", " correct"],
    "practica.correcto":     ["✓ Correcto", "✓ Correct"],
    "practica.incorrecto":   ["✗ Incorrecto", "✗ Incorrect"],
    "practica.sobreTu":      ["<b>Sobre tu respuesta:</b> ", "<b>About your answer:</b> "],
    "practica.lasDemas":     ["<b>Las demás opciones:</b>", "<b>The other options:</b>"],
    "practica.siguiente":    ["Siguiente →", "Next →"],
    "practica.siguienteEj":  ["Siguiente ejercicio →", "Next exercise →"],
    "practica.verResultado": ["Ver resultado", "See result"],
    "practica.revisar":      ["Revisar", "Check"],
    "practica.revisarOrden": ["Revisar orden", "Check order"],
    "practica.revisarResp":  ["Revisar respuestas", "Check answers"],
    "practica.escenarioPreg":["¿Qué marco, estándar o metodología usarías?",
                              "Which framework, standard or methodology would you use?"],
    "practica.arrastra":     ["Arrastra cada elemento a su columna, o toca el elemento y después la columna.",
                              "Drag each item into its column, or tap the item and then the column."],
    "practica.bienClasif":   ["{a} de {b} bien clasificados", "{a} of {b} correctly classified"],
    "practica.sinClasificar":["sin clasificar → ", "not classified → "],
    "practica.posCorrecta":  ["{a} de {b} en la posición correcta", "{a} of {b} in the correct position"],
    "practica.vaEn":         ["(va en {n})", "(goes in {n})"],
    "practica.valoresOk":    ["{a} de {b} valores correctos", "{a} of {b} values correct"],
    "practica.solucion":     ["Solución paso a paso", "Step-by-step solution"],
    "practica.subir":        ["Subir", "Move up"],
    "practica.bajar":        ["Bajar", "Move down"],

    /* ---- Tarjetas ---- */
    "flash.concepto":        ["Concepto", "Concept"],
    "flash.definicion":      ["Definición", "Definition"],
    "flash.clicRevelar":     ["Clic para revelar", "Click to reveal"],
    "flash.clicVolver":      ["Clic para volver", "Click to flip back"],
    "flash.laSabia":         ["✓ La sabía", "✓ I knew it"],
    "flash.repasar":         ["↻ Repasar después", "↻ Review later"],
    "flash.revelar":         ["Revelar definición", "Reveal definition"],

    /* ---- Resultado ---- */
    "resultado.alta":        ["Dominio sólido del tema.", "Solid command of the topic."],
    "resultado.media":       ["Vas bien; revisa los conceptos que fallaste.",
                              "Good progress; review the concepts you missed."],
    "resultado.baja":        ["Conviene volver a la sección de conceptos antes de repetir.",
                              "Go back to the concepts section before trying again."],
    "resultado.linea":       ["{a} de {b} · {m}", "{a} of {b} · {m}"],
    "resultado.paraRepasar": ["Para repasar", "To review"],
    "resultado.respCorrecta":["Respuesta correcta: ", "Correct answer: "],
    "resultado.otraVez":     ["Intentar de nuevo", "Try again"],
    "resultado.otroModo":    ["Elegir otro modo", "Choose another mode"],

    /* ---- Catálogo de casos ---- */
    "casos.kicker":          ["Catálogo", "Catalog"],
    "casos.titulo":          ["Casos para analizar", "Cases to analyze"],
    "casos.lead":            ["Situaciones reconocibles de empresas reales, analizadas con las herramientas del curso: cuellos de botella, tiempo de ciclo, rutas del proceso, capacidad, orquestación y continuidad.",
                              "Recognizable situations from real companies, analyzed with the tools of the course: bottlenecks, cycle time, process routes, capacity, orchestration and continuity."],
    "casos.tab":             ["Catálogo", "Catalog"],
    "casos.avisoTitulo":     ["Sobre las cifras de estos casos", "About the figures in these cases"],
    "casos.avisoP1":         ["Las empresas son reales y los procesos son reconocibles, pero <b>los números son ilustrativos</b>: se construyeron para poder practicar el cálculo y <b>no corresponden a la operación real</b> de ninguna de estas organizaciones. Están marcados como tales en cada ficha.",
                              "The companies are real and the processes are recognizable, but <b>the numbers are illustrative</b>: they were built so the calculations can be practiced and <b>do not reflect the actual operations</b> of any of these organizations. Each case marks them as such."],
    "casos.avisoP2":         ["El análisis es una lectura académica desde afuera, con fines didácticos. Ninguna de estas empresas participó ni avaló este material.",
                              "The analysis is an outside academic reading for teaching purposes. None of these companies took part in or endorsed this material."],
    "casos.buscar":          ["Buscar: cola, capacidad, pago, incidente, cita…",
                              "Search: queue, capacity, payment, incident, appointment…"],
    "casos.todos":           ["Todos", "All"],
    "casos.contador":        ["{n} casos", "{n} cases"],
    "casos.contadorFiltro":  ["{v} de {n} casos", "{v} of {n} cases"],
    "casos.sinResultados":   ["Sin resultados", "No results"],
    "casos.pista":           ["Prueba con otra palabra: cola, capacidad, pago, incidente, cita…",
                              "Try another word: queue, capacity, payment, incident, appointment…"],
    "ficha.contexto":        ["Contexto", "Context"],
    "ficha.flujo":           ["El proceso, a grandes rasgos", "The process, in broad strokes"],
    "ficha.analisis":        ["Qué hay que ver aquí", "What to look at here"],
    "ficha.cifras":          ["Cifras del caso", "Case figures"],
    "ficha.ilustrativas":    ["cifras ilustrativas", "illustrative figures"],
    "ficha.indicadores":     ["Qué mediría un analista", "What an analyst would measure"],
    "ficha.preguntas":       ["Para discutir en clase", "For class discussion"],

    /* ---- Taller integrador ---- */
    "taller.tituloDoc":   ["Taller integrador · Arquitectura Empresarial",
                           "Integrative workshop · Enterprise Architecture"],
    "taller.kicker":      ["Taller", "Workshop"],
    "taller.h1":          ["Taller integrador", "Integrative workshop"],
    "taller.lead":        ["Un solo caso recorrido de punta a punta: entrevistas, medición, valor, rediseño, dinero, acta de constitución y presentación a la gerencia. Lo que respondes se guarda y se arrastra a las etapas siguientes.",
                           "A single case worked end to end: interviews, measurement, value, redesign, money, project charter and the presentation to management. What you write is saved and carried into the later stages."],
    "taller.avisoTitulo": ["Sobre este caso", "About this case"],
    "taller.avisoCuerpo": ["La empresa es ficticia y las cifras se construyeron para que los cálculos cierren y el ejercicio se pueda resolver completo. El proceso, en cambio, es el de cualquier distribuidor industrial que cotiza a solicitud.",
                           "The company is fictional and the figures were built so the calculations work out and the exercise can be solved end to end. The process, on the other hand, is that of any industrial distributor that quotes on request."],
    "taller.avisoPrivacidad": ["Tus respuestas se guardan solo en este navegador. No viajan a ningún servidor y el profesor no las ve: para entregarlas, descarga el documento al final.",
                           "Your answers are stored only in this browser. They never reach a server and the instructor cannot see them: to hand them in, download the document at the end."],

    "taller.etapaN":      ["Etapa {n} de {total}", "Stage {n} of {total}"],
    "taller.completadas": ["{a} de {b} etapas completas", "{a} of {b} stages complete"],
    "taller.anterior":    ["← Etapa anterior", "← Previous stage"],
    "taller.siguiente":   ["Siguiente etapa →", "Next stage →"],
    "taller.armar":       ["Armar mi entregable →", "Build my deliverable →"],
    "taller.revisar":     ["Revisar mis valores", "Check my values"],
    "taller.valores":     ["{a} de {b} valores correctos", "{a} of {b} values correct"],
    "taller.faltan":      ["Quedan {n} sin contestar.", "{n} still unanswered."],
    "taller.verSolucion": ["Ver el desarrollo", "Show the working"],
    "taller.ocultarSolucion": ["Ocultar el desarrollo", "Hide the working"],
    "taller.comoSale":    ["Cómo sale", "How it works out"],
    "taller.rubrica":     ["Revísate con esta lista", "Check yourself against this list"],
    "taller.rubricaNota": ["Lo que escribes no se puede calificar solo. Esto sí: márcalo tú, con honestidad.",
                           "What you write cannot be graded automatically. This can: tick it yourself, honestly."],
    "taller.verModelo":   ["Ver una respuesta de referencia", "Show a reference answer"],
    "taller.ocultarModelo": ["Ocultar la referencia", "Hide the reference"],
    "taller.modelo":      ["Respuesta de referencia", "Reference answer"],
    "taller.modeloNota":  ["No es la única correcta. Compárala con la tuya y quédate con las diferencias que te convenzan.",
                           "It is not the only correct one. Compare it with yours and keep the differences that convince you."],
    "taller.pendiente":   ["Aún no lo has calculado", "You have not calculated this yet"],
    "taller.palabras":    ["{n} palabras", "{n} words"],
    "taller.palabrasDe":  ["{n} palabras · sugerido {min}", "{n} words · suggested {min}"],
    "taller.elige":       ["Elige…", "Choose…"],
    "taller.cierre":      ["Cierre", "Wrap-up"],
    "taller.tuEntregable":["Tu entregable", "Your deliverable"],
    "taller.entregableNota": ["Esto es lo que llevas escrito, en un solo documento. Descárgalo y entrégalo como te lo pida tu profesor.",
                           "This is everything you have written, in a single document. Download it and hand it in as your instructor asks."],
    "taller.descargar":   ["Descargar como .md", "Download as .md"],
    "taller.descargado":  ["✓ Descargado", "✓ Downloaded"],
    "taller.noDescargo":  ["No se pudo descargar — copia el texto", "Download failed — copy the text instead"],
    "taller.copiar":      ["Copiar al portapapeles", "Copy to clipboard"],
    "taller.copiado":     ["✓ Copiado", "✓ Copied"],
    "taller.noCopio":     ["No se pudo copiar — selecciónalo a mano", "Copy failed — select it manually"],
    "taller.volver":      ["Volver a la última etapa", "Back to the last stage"],
    "taller.reiniciar":   ["Empezar de nuevo", "Start over"],
    "taller.confirmarReinicio": ["Esto borra todo lo que has escrito en el taller. ¿Seguro?",
                           "This erases everything you have written in the workshop. Are you sure?"],

    "ficha.conecta":         ["<b>Conecta con:</b> ", "<b>Connects to:</b> "],

    /* ---- Portada (marcado estático) ---- */
    "inicio.tituloDoc":  ["Diseño de Procesos y Arquitectura Empresarial",
                          "Process Design and Enterprise Architecture"],
    "inicio.kicker":     ["Curso · 5 semanas", "Course · 5 weeks"],
    "inicio.h1":         ["Diseño de Procesos y Arquitectura Empresarial",
                          "Process Design and Enterprise Architecture"],
    "inicio.lead":       ["Conceptos, marcos de referencia y práctica interactiva. Estudia el material de cada semana y comprueba lo que entendiste con reactivos, escenarios y ejercicios de clasificación.",
                          "Concepts, reference frameworks and interactive practice. Study each week's material and check your understanding with questions, scenarios and classification exercises."],
    "inicio.firma":      ['Material elaborado por <b>Antonio González</b> · <a href="mailto:antonio.gonzalez@tec.mx">antonio.gonzalez@tec.mx</a>',
                          'Created by <b>Antonio González</b> · <a href="mailto:antonio.gonzalez@tec.mx">antonio.gonzalez@tec.mx</a>'],
    "inicio.semanas":    ["Semanas del curso", "Course weeks"],
    "inicio.semanasSub": ["Selecciona una semana para revisar los conceptos y entrar a la zona de práctica.",
                          "Pick a week to review the concepts and enter the practice area."],
    "inicio.comoUsar":   ["Cómo usar este sitio", "How to use this site"],
    "inicio.comoUsarSub":["Cuatro tipos de material, cada uno para un momento distinto del estudio.",
                          "Four kinds of material, each for a different moment in your studying."],
    "inicio.hiloSub":    ["Seis niveles que el curso recorre de arriba abajo. Cada uno acota al siguiente.",
                          "Six levels the course works through from the top down. Each one constrains the next."],
    "hilo.pregunta":     ["La pregunta que responde", "The question it answers"],
    "hilo.ejemplo":      ["Un ejemplo concreto", "A concrete example"],
    "hilo.error":        ["El error clásico", "The classic mistake"],
    "hilo.pista":        ["Pasa el cursor, toca o usa las flechas del teclado sobre cada nivel.",
                          "Hover, tap, or use the arrow keys on each level."],
    "guia.consejos":     ["Cómo sacarle provecho", "How to get the most out of it"],
    "guia.nSemanas":     ["{n} semanas", "{n} weeks"],
    "guia.nReactivos":   ["{n} reactivos", "{n} items"],
    "guia.nCasos":       ["{n} casos", "{n} cases"],
    "guia.nEtapas":      ["{n} etapas", "{n} stages"],
    "guia.nTerminos":    ["{n} términos", "{n} terms"],

    "inicio.hilo":       ["Hilo conductor del curso", "The thread running through the course"],
    "inicio.hiloTexto":  ["La Arquitectura Empresarial no comienza preguntando qué tecnología comprar, sino qué resultados necesita alcanzar la organización y cómo deben coordinarse sus capacidades, procesos, información, aplicaciones y tecnología para lograrlos.",
                          "Enterprise Architecture does not start by asking what technology to buy, but what outcomes the organization needs to reach and how its capabilities, processes, information, applications and technology must be coordinated to get there."],

    /* ---- Glosario (marcado estático) ---- */
    "glosario.tituloDoc": ["Glosario · Arquitectura Empresarial", "Glossary · Enterprise Architecture"],
    "glosario.kicker":    ["Referencia", "Reference"],
    "glosario.h1":        ["Glosario del curso", "Course glossary"],
    "glosario.lead":      ["Todos los términos, siglas y marcos que aparecen en el curso, con la semana en la que se ven.",
                           "Every term, acronym and framework used in the course, with the week where it appears."],

    /* ---- Casos y semana (títulos de documento) ---- */
    "casos.tituloDoc":    ["Casos · Arquitectura Empresarial", "Cases · Enterprise Architecture"],
    "semana.tituloBase":  ["Semana · Arquitectura Empresarial", "Week · Enterprise Architecture"],

    /* ---- Aviso legal ---- */
    "legal.tituloDoc":  ["Aviso legal y atribuciones · Arquitectura Empresarial",
                         "Legal notice and attributions · Enterprise Architecture"],
    "legal.kicker":     ["Información legal", "Legal information"],
    "legal.h1":         ["Aviso legal y atribuciones", "Legal notice and attributions"],
    "legal.lead":       ["Autoría del material, créditos de terceros, marcas registradas y condiciones de uso de este sitio.",
                         "Authorship of the material, third-party credits, trademarks and terms of use for this site."],

    "legal.autoria.h":  ["Autoría", "Authorship"],
    "legal.autoria.p1": ["Este sitio fue <b>diseñado, redactado y desarrollado por Antonio González</b> como material de apoyo para los estudiantes del curso <i>Diseño de Procesos y Arquitectura Empresarial</i>.",
                         "This site was <b>designed, written and developed by Antonio González</b> as supporting material for students of the course <i>Process Design and Enterprise Architecture</i>."],
    "legal.autoria.p2": ["La estructura del sitio, la redacción de las explicaciones, el diseño de los reactivos de práctica, los ejercicios numéricos, las soluciones paso a paso y el código que hace funcionar la plataforma son obra del autor.",
                         "The structure of the site, the wording of the explanations, the design of the practice items, the numeric exercises, the step-by-step solutions and the code that runs the platform are the author's own work."],
    "legal.autoria.p3": ['Contacto: <a href="mailto:antonio.gonzalez@tec.mx">antonio.gonzalez@tec.mx</a>',
                         'Contact: <a href="mailto:antonio.gonzalez@tec.mx">antonio.gonzalez@tec.mx</a>'],

    "legal.atrib.h":    ["Atribuciones", "Attributions"],
    "legal.atrib.p1":   ["Este material es de naturaleza didáctica y, como todo material académico, se apoya en cuerpos de conocimiento desarrollados por terceros. En particular:",
                         "This is teaching material and, like all academic material, it builds on bodies of knowledge developed by others. Specifically:"],
    "legal.atrib.li1":  ["Los <b>marcos de referencia, metodologías y estándares</b> que aquí se explican —TOGAF, ADM, Zachman, COBIT, ITIL, BPMN, las normas ISO/IEC, Lean, Six Sigma, la teoría de restricciones— son creación y propiedad de sus respectivas organizaciones. Aquí se describen con fines educativos y de estudio.",
                         "The <b>frameworks, methodologies and standards</b> explained here —TOGAF, ADM, Zachman, COBIT, ITIL, BPMN, the ISO/IEC standards, Lean, Six Sigma, the theory of constraints— are the creation and property of their respective organizations. They are described here for educational and study purposes."],
    "legal.atrib.li2":  ["Algunos <b>ejercicios de cálculo de tiempo de ciclo y capacidad</b> se basan en planteamientos y datos utilizados en el material de clase de la institución, cuya autoría corresponde a sus respectivos elaboradores. Las soluciones paso a paso, la redacción y la implementación interactiva son del autor de este sitio.",
                         "Some <b>cycle-time and capacity exercises</b> are based on problems and data used in the institution's class material, authored by their respective creators. The step-by-step solutions, the wording and the interactive implementation are the work of this site's author."],
    "legal.atrib.li3":  ["Las <b>fórmulas, definiciones y procedimientos de cálculo</b> pertenecen al dominio general de la ingeniería de procesos y no se reclama titularidad sobre ellos.",
                         "The <b>formulas, definitions and calculation procedures</b> belong to the general domain of process engineering and no ownership is claimed over them."],
    "legal.atrib.p2":   ['Si eres autor de algún material que consideras reflejado aquí y deseas que se ajuste el crédito o se retire el contenido, escribe a <a href="mailto:antonio.gonzalez@tec.mx">antonio.gonzalez@tec.mx</a> y se atenderá a la brevedad.',
                         'If you are the author of material you believe is reflected here and want the credit adjusted or the content removed, write to <a href="mailto:antonio.gonzalez@tec.mx">antonio.gonzalez@tec.mx</a> and it will be handled promptly.'],

    "legal.marcas.h":   ["Marcas y nombres comerciales de terceros", "Third-party trademarks and trade names"],
    "legal.marcas.sub": ["Todas las marcas, nombres comerciales, logotipos y marcas de servicio mencionados en este sitio son propiedad de sus respectivos titulares.",
                         "All trademarks, trade names, logos and service marks mentioned on this site are the property of their respective owners."],
    "legal.marcas.th1": ["Marca o denominación", "Mark or name"],
    "legal.marcas.th2": ["Titular", "Owner"],
    "legal.marcas.iso": ["Normas ISO e ISO/IEC", "ISO and ISO/IEC standards"],
    "legal.marcas.six": ["Sus respectivos titulares según jurisdicción", "Their respective owners by jurisdiction"],
    "legal.marcas.p":   ["Esta lista es enunciativa y no limitativa. La mención de cualquier marca en este sitio se hace únicamente con <b>fines descriptivos, informativos y educativos</b>, y no constituye uso comercial, apropiación ni sugerencia de origen empresarial.",
                         "This list is illustrative, not exhaustive. Any trademark mentioned on this site is used solely for <b>descriptive, informational and educational purposes</b>, and does not constitute commercial use, appropriation or a suggestion of commercial origin."],

    "legal.afil.h":     ["Ausencia de afiliación, patrocinio y certificación",
                         "No affiliation, sponsorship or certification"],
    "legal.afil.p1":    ["Este sitio es un <b>material de apoyo académico independiente</b>. No está afiliado, patrocinado, acreditado, revisado ni avalado por The Open Group, Zachman International, ISACA, PeopleCert, el Object Management Group, ISO, Gartner ni por ninguna de las organizaciones mencionadas.",
                         "This site is <b>independent academic support material</b>. It is not affiliated with, sponsored, accredited, reviewed or endorsed by The Open Group, Zachman International, ISACA, PeopleCert, the Object Management Group, ISO, Gartner or any of the organizations mentioned."],
    "legal.afil.p2":    ["El contenido <b>no constituye material oficial de preparación para ninguna certificación</b>, ni sustituye la lectura de los estándares originales. Quien requiera precisión normativa debe consultar la publicación oficial vigente del organismo correspondiente.",
                         "The content <b>is not official preparation material for any certification</b>, nor does it replace reading the original standards. Anyone who needs normative precision should consult the current official publication of the relevant body."],

    "legal.uso.h":      ["Condiciones de uso", "Terms of use"],
    "legal.uso.li1":    ["El contenido se pone a disposición <b>con fines educativos y sin costo</b> para los estudiantes del curso y para cualquier persona interesada en el tema.",
                         "The content is made available <b>for educational purposes and free of charge</b> to students of the course and to anyone interested in the subject."],
    "legal.uso.li2":    ["Se permite <b>consultarlo, estudiarlo y citarlo</b> dando crédito al autor y enlazando a este sitio.",
                         "You may <b>read, study and cite it</b> giving credit to the author and linking back to this site."],
    "legal.uso.li3":    ["No se autoriza su <b>reproducción total con fines comerciales</b> ni su presentación como obra propia por parte de terceros.",
                         "<b>Wholesale reproduction for commercial purposes</b> is not authorized, nor is presenting it as one's own work."],
    "legal.uso.li4":    ["El código fuente del sitio está disponible públicamente en su repositorio; su reutilización debe conservar el crédito de autoría.",
                         "The site's source code is publicly available in its repository; reuse must preserve the authorship credit."],

    "legal.exact.h":    ["Exactitud del contenido y limitación de responsabilidad",
                         "Accuracy of content and limitation of liability"],
    "legal.exact.p1":   ["El material se ofrece <b>“tal cual”</b>, con propósitos exclusivamente didácticos. Aunque se ha procurado la exactitud de conceptos, fórmulas y resultados numéricos, pueden existir errores, simplificaciones pedagógicas u omisiones, y los estándares citados se actualizan periódicamente.",
                         "The material is provided <b>“as is”</b>, for teaching purposes only. Although care has been taken with the accuracy of concepts, formulas and numeric results, errors, pedagogical simplifications or omissions may remain, and the standards cited are updated periodically."],
    "legal.exact.p2":   ["El autor <b>no asume responsabilidad</b> por decisiones profesionales, técnicas, financieras o de negocio que se tomen con base en este contenido. Los casos, empresas y cifras que aquí aparecen son <b>ilustrativos</b>, salvo mención expresa, y no describen la operación real de ninguna organización identificable.",
                         "The author <b>accepts no liability</b> for professional, technical, financial or business decisions made on the basis of this content. The cases, companies and figures shown here are <b>illustrative</b>, unless expressly stated otherwise, and do not describe the actual operations of any identifiable organization."],

    "legal.priv.h":     ["Privacidad", "Privacy"],
    "legal.priv.p1":    ["Este sitio es estático y <b>no recolecta datos personales</b>. No tiene formularios de registro, analítica, cookies de seguimiento ni publicidad.",
                         "This site is static and <b>collects no personal data</b>. It has no registration forms, analytics, tracking cookies or advertising."],
    "legal.priv.p2":    ["El avance en los ejercicios de práctica se guarda únicamente en el <b>almacenamiento local del navegador</b> de cada persona (<code>localStorage</code>). Esa información no se transmite a ningún servidor, no es visible para el profesor ni para terceros, y se elimina al borrar los datos del sitio en el navegador.",
                         "Progress in the practice exercises is stored only in each person's <b>browser local storage</b> (<code>localStorage</code>). That information is never sent to any server, is not visible to the instructor or to third parties, and is erased when the site's data is cleared in the browser."],
    "legal.priv.p3":    ["El sitio carga tipografías desde Google Fonts; esa solicitud se rige por las políticas de dicho proveedor. Si no hay conexión, la página se muestra con las tipografías del sistema.",
                         "The site loads fonts from Google Fonts; that request is governed by that provider's policies. With no connection, the page renders with system fonts."],

    "legal.enlaces.h":  ["Enlaces a sitios de terceros", "Links to third-party sites"],
    "legal.enlaces.p":  ["Cuando el material remite a sitios externos —organismos de estandarización, documentación oficial o publicaciones—, dichos sitios se rigen por sus propios términos y políticas. El autor no controla ni se responsabiliza por su contenido ni por su disponibilidad.",
                         "Where the material points to external sites —standards bodies, official documentation or publications— those sites are governed by their own terms and policies. The author neither controls nor is responsible for their content or availability."],

    "legal.contacto.h": ["Contacto", "Contact"],
    "legal.contacto.p": ['Para dudas, correcciones, solicitudes de atribución o de retiro de contenido: <a href="mailto:antonio.gonzalez@tec.mx">antonio.gonzalez@tec.mx</a>',
                         'For questions, corrections, attribution requests or content removal: <a href="mailto:antonio.gonzalez@tec.mx">antonio.gonzalez@tec.mx</a>']
  };

  /* ---------- Acceso al diccionario ---------- */

  const indice = idiomaActivo === "en" ? 1 : 0;

  function t(clave, vars) {
    const par = TEXTOS[clave];
    if (!par) {
      if (window.console) console.warn("Falta la cadena de idioma:", clave);
      return clave;
    }
    let s = par[indice] !== undefined && par[indice] !== null && par[indice] !== ""
      ? par[indice] : par[0];
    if (vars) {
      for (const k in vars) s = s.split("{" + k + "}").join(String(vars[k]));
    }
    return s;
  }

  /* ---------- Carga del contenido en inglés ----------
     Se inyecta con document.write durante el parseo del <head>: es
     síncrono y conserva el orden, así que las traducciones ya están
     registradas cuando el <body> ejecuta su script de arranque.
     Reutiliza el sello de versión del propio <script> para no servir
     archivos viejos desde la caché del navegador o del CDN.
  */

  const ARCHIVOS_EN = [
    "curso", "semana-1", "semana-2", "semana-3", "semana-4", "semana-5", "casos", "taller"
  ];

  function sello() {
    const propio = document.currentScript && document.currentScript.src;
    if (!propio) return "";
    const i = propio.indexOf("?");
    return i > -1 ? propio.slice(i) : "";
  }

  if (esIngles() && document.currentScript) {
    const v = sello();
    let marcado = "";
    ARCHIVOS_EN.forEach(function (n) {
      marcado += '<script src="data/en/' + n + '.js' + v + '"><\/script>';
    });
    document.write(marcado);
  }

  /* ---------- Traducción de nodos estáticos ----------
     data-t="clave"                 → reemplaza el contenido del nodo
     data-t-attr="placeholder:clave" → reemplaza un atributo
     Varios atributos se separan con coma.
  */

  function traducirDocumento(raiz) {
    const ambito = raiz || document;

    ambito.querySelectorAll("[data-t]").forEach(function (n) {
      n.innerHTML = t(n.getAttribute("data-t"));
    });

    ambito.querySelectorAll("[data-t-attr]").forEach(function (n) {
      n.getAttribute("data-t-attr").split(",").forEach(function (par) {
        const p = par.split(":");
        if (p.length === 2) n.setAttribute(p[0].trim(), t(p[1].trim()));
      });
    });

    const titulo = document.querySelector("title[data-t-titulo]");
    if (titulo) document.title = t(titulo.getAttribute("data-t-titulo"));
  }

  /* ---------- Conmutador ES · EN ---------- */

  function conmutador() {
    const caja = EA.el("div", {
      class: "conmutador-idioma",
      role: "group",
      "aria-label": t("idioma.etiqueta")
    });
    IDIOMAS.forEach(function (lg) {
      const activo = lg === idiomaActivo;
      const b = EA.el("button", {
        type: "button",
        class: "opcion-idioma",
        "aria-pressed": String(activo),
        lang: lg,
        title: lg === "es" ? t("idioma.aEspanol") : t("idioma.aIngles"),
        text: lg.toUpperCase()
      });
      b.addEventListener("click", function () { cambiar(lg); });
      caja.appendChild(b);
    });
    return caja;
  }

  /* ---------- API ---------- */

  EA.idioma = idioma;
  EA.esIngles = esIngles;
  EA.cambiarIdioma = cambiar;
  EA.t = t;
  EA.traducirDocumento = traducirDocumento;
  EA.conmutadorIdioma = conmutador;
  EA.TEXTOS = TEXTOS;

})(window.EA);
