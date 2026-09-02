/* Metadatos generales del curso */
EA.registrarCurso({
  titulo: "Diseño de Procesos y Arquitectura Empresarial",
  subtitulo: "Curso de 5 semanas",
  totalSemanas: 5,
  autor: "Antonio González",
  correo: "antonio.gonzalez@tec.mx",
  // Descripción del reto o caso conductor.
  //   · Deja "casoEstado" en "pendiente" mientras no haya texto definitivo:
  //     el recuadro se muestra atenuado como marcador de posición.
  //   · Cuando llegue la descripción, escríbela en "caso" y borra la línea
  //     de "casoEstado" para que el recuadro tome su estilo normal.
  //   · Si prefieres no mostrar ningún recuadro, deja caso en "".
  caso: "<b>Caso conductor del curso.</b> Pendiente por definir.",
  casoEstado: "pendiente",

  /* ------------------------------------------------------------------
     Hilo conductor: los seis niveles que el curso recorre de arriba
     abajo. Cada eslabón se despliega en la portada al pasar el cursor,
     al enfocarlo con el teclado o al tocarlo.

     Para agregar o cambiar un eslabón basta con editar este arreglo:
     la portada se redibuja sola.
     ------------------------------------------------------------------ */
  hilo: [
    {
      id: "estrategia",
      nombre: "Estrategia",
      resumen: "El resultado que la organización necesita alcanzar, dicho de forma que se pueda verificar.",
      pregunta: "¿Qué resultado necesita el negocio, y cómo sabremos que lo logró?",
      ejemplo: "«Ganar participación entre clientes industriales respondiendo el mismo día», no «modernizarnos».",
      error: "Confundir la estrategia con una lista de proyectos. Un proyecto es un medio; la estrategia es el resultado.",
      donde: "Semana 1"
    },
    {
      id: "capacidades",
      nombre: "Capacidades",
      resumen: "Lo que la empresa tiene que saber hacer para lograr ese resultado, sin importar quién lo haga ni con qué sistema.",
      pregunta: "¿Qué debe saber hacer la organización, independientemente de su estructura actual?",
      ejemplo: "«Cotizar con precio y disponibilidad confiables» es una capacidad. «El área de Ventas» es un departamento.",
      error: "Nombrar departamentos en vez de capacidades. Las capacidades sobreviven a las reorganizaciones; los organigramas no.",
      donde: "Semana 1"
    },
    {
      id: "procesos",
      nombre: "Procesos",
      resumen: "Cómo se ejecuta esa capacidad paso a paso, con tiempos, rutas, esperas y responsables reales.",
      pregunta: "¿Cómo se hace hoy, cuánto tarda de verdad y dónde se atora?",
      ejemplo: "Cotizar toma 79 minutos de trabajo y 14 horas de lead time: el 91 % del tiempo el expediente está esperando.",
      error: "Documentar el proceso como alguien cree que debería ser, en vez de medir el que realmente ocurre.",
      donde: "Semanas 2 y 3"
    },
    {
      id: "datos",
      nombre: "Datos y aplicaciones",
      resumen: "La información que cada paso necesita y los sistemas que la producen, la guardan y la entregan.",
      pregunta: "¿Qué información necesita cada paso, y qué sistema es dueño de ella?",
      ejemplo: "El criterio técnico ya se había emitido antes, pero no vivía en ningún sistema: por eso se repetía el trabajo.",
      error: "Comprar una aplicación antes de saber qué dato le falta al proceso. La aplicación llega; el dato sigue sin existir.",
      donde: "Semanas 2 y 4"
    },
    {
      id: "tecnologia",
      nombre: "Tecnología",
      resumen: "La infraestructura y los servicios que sostienen a las aplicaciones y a los datos de forma confiable y segura.",
      pregunta: "¿Qué se necesita para que todo eso opere sin caerse, y qué pasa cuando se cae?",
      ejemplo: "Un ERP configurado, respaldado, con tiempos de recuperación definidos y alguien responsable de mantenerlo.",
      error: "Tratarla como el punto de partida. La tecnología es el habilitador de la eficiencia operativa, no la estrategia.",
      donde: "Semana 4"
    },
    {
      id: "resultado",
      nombre: "Resultado y valor",
      resumen: "La comprobación de que el rediseño movió el número que dijimos que iba a mover.",
      pregunta: "¿Cambió el indicador que prometimos, y cuánto valió el cambio?",
      ejemplo: "Lead time de 14 h a menos de 8 h, y el margen que se estaba perdiendo, recuperado y medido.",
      error: "Declarar el éxito por haber implantado el sistema. Implantar no es mejorar: mejorar es que el indicador se mueva.",
      donde: "Semana 5"
    }
  ],

  /* ------------------------------------------------------------------
     Guía de la portada: qué es cada sección del sitio y cuándo usarla.
     Los conteos NO se escriben aquí — se calculan del contenido real,
     así que no se desactualizan al agregar semanas, casos o etapas.
     ------------------------------------------------------------------ */
  guia: [
    {
      id: "semanas",
      icono: "◆",
      nombre: "Las semanas del curso",
      cuando: "Antes de cada sesión, y otra vez antes del examen.",
      cuerpo: "Los conceptos explicados en prosa, con diagramas, tablas comparativas y definiciones, "
        + "organizados por sesión. Cada semana cierra con su zona de práctica.",
      enlace: "semana.html?s=1",
      accion: "Empezar por la Semana 1"
    },
    {
      id: "practica",
      icono: "◉",
      nombre: "Los seis modos de práctica",
      cuando: "Después de leer, para comprobar si de verdad entendiste.",
      cuerpo: "Opción múltiple, escenario → marco, clasificar arrastrando, ordenar una secuencia, "
        + "ejercicios de cálculo con solución paso a paso y tarjetas de repaso. Cada reactivo explica "
        + "por qué la respuesta correcta lo es <b>y por qué las demás no</b>.",
      enlace: "semana.html?s=1&v=practica",
      accion: "Ir a la práctica"
    },
    {
      id: "casos",
      icono: "▦",
      nombre: "El catálogo de casos",
      cuando: "Cuando quieras ver el concepto fuera del salón.",
      cuerpo: "Empresas reconocibles agrupadas no por industria sino por el <b>patrón de proceso</b> que "
        + "enseñan. La idea es que reconozcas el mismo problema estructural en una cafetería, un banco "
        + "y una línea de ensamble.",
      enlace: "casos.html",
      accion: "Ver los casos"
    },
    {
      id: "taller",
      icono: "∑",
      nombre: "El taller integrador",
      cuando: "Cuando ya tengas las piezas y quieras armarlas.",
      cuerpo: "Un solo caso recorrido de punta a punta: entrevistas, medición, valor, rediseño, caso de "
        + "negocio, acta de constitución y presentación a la gerencia. Lo que calculas en una etapa "
        + "reaparece en las siguientes, y al final descargas todo como un documento.",
      enlace: "taller.html",
      accion: "Entrar al taller"
    },
    {
      id: "glosario",
      icono: "▤",
      nombre: "El glosario",
      cuando: "Cada vez que una sigla te detenga la lectura.",
      cuerpo: "Todos los términos del curso en un solo lugar, buscables, con la semana en la que se "
        + "introdujo cada uno.",
      enlace: "glosario.html",
      accion: "Abrir el glosario"
    }
  ],

  /* Consejos de estudio: cortos, accionables, sin relleno. */
  consejos: [
    "<b>Lee antes de la sesión, no después.</b> El material está escrito para que llegues con preguntas, no para sustituir la clase.",
    "<b>En los ejercicios de cálculo, resuelve antes de ver el desarrollo.</b> Equivocarte y luego comparar enseña más que leer la solución correcta de entrada.",
    "<b>Repite hasta 80 % o más.</b> Tu mejor resultado se guarda en tu propio navegador: no viaja a ningún servidor y el profesor no lo ve.",
    "<b>Si un número no te cuadra, dilo.</b> Cada cálculo del sitio fue verificado, pero una discrepancia encontrada por un alumno es un hallazgo legítimo."
  ]
});
