/* ============================================================
   SEMANA 4 — Marcos de referencia, selección y la función de TI
   4 sesiones de 2 horas
   Cubre los puntos 1.1, 1.6, 1.7, 1.8, 2.1, 2.3 del temario oficial
   y el bloque de gobierno, servicios y herramientas del listado de conceptos.
   ============================================================ */

EA.registrarSemana({
  id: 4,
  estado: "publicada",
  titulo: "Marcos de referencia, selección y la función de TI",
  subtitulo: "El universo completo de marcos, cómo se elige uno con criterio, y cómo opera el área que sostiene la arquitectura.",
  sesiones: 4,

  objetivos: [
    "Describir los marcos de arquitectura del temario: TOGAF, Zachman, DoDAF, IAF y ATOM, y qué aporta cada uno.",
    "Evaluar y comparar marcos con criterios explícitos, y sustentar la selección con una matriz de decisión ponderada.",
    "Distinguir gobierno de TI (COBIT) de gestión del servicio (ITIL), y explicar el cambio de ITIL 3 a ITIL 4.",
    "Explicar qué funciones cumple un departamento de TI y qué es ITSM y BRM.",
    "Relacionar la estrategia de TI con la estrategia del negocio y con la arquitectura empresarial.",
    "Reconocer las metodologías de desarrollo de aplicaciones empresariales y cuándo aplica cada una.",
    "Ubicar las herramientas del mercado —SAP LeanIX, SAP Signavio, ServiceNow— y las tecnologías emergentes en el mapa de la arquitectura."
  ],

  dias: [

    /* ================= SESIÓN 1 ================= */
    {
      id: "s1",
      nombre: "Sesión 1",
      tema: "El universo de los marcos de arquitectura",
      proposito: "Completar el panorama más allá de TOGAF y Zachman: conocer DoDAF, IAF y ATOM, entender de dónde vienen y qué problema resuelve cada uno.",
      bloques: [
        {
          tipo: "clave",
          titulo: "Por qué existen varios marcos",
          cuerpo: "<p>Ningún marco es universalmente mejor. Cada uno nació en un contexto —consultoría, defensa, gobierno, industria— y arrastra las prioridades de ese contexto. "
                + "Conocerlos sirve para dos cosas: <b>elegir con criterio</b> y <b>tomar prestado</b> lo que sirve de cada uno.</p>"
        },
        {
          tipo: "tabla",
          titulo: "Panorama de un vistazo",
          encabezados: ["Marco", "Origen", "Naturaleza", "Fortaleza principal"],
          filas: [
            ["<b>TOGAF</b>", "The Open Group, industria abierta", "Método + metamodelo + gobierno", "El ADM: un ciclo completo de transformación"],
            ["<b>Zachman</b>", "John Zachman, IBM (1987)", "Ontología / taxonomía", "Verificar que no falten vistas ni perspectivas"],
            ["<b>DoDAF</b>", "Departamento de Defensa de EE. UU.", "Conjunto de vistas normadas", "Interoperabilidad y adquisiciones a gran escala"],
            ["<b>IAF</b>", "Capgemini (1996)", "Marco de consultoría", "Matriz de dominios × niveles de abstracción"],
            ["<b>ATOM</b>", "Uso académico y de proveedores", "Modelo piramidal de alineación", "Bajar de la estrategia a la infraestructura"]
          ]
        },
        {
          tipo: "texto",
          titulo: "DoDAF — Department of Defense Architecture Framework",
          cuerpo: "<p>Marco creado y mantenido por el <b>Departamento de Defensa de Estados Unidos</b>, hoy bajo su CIO. Su propósito es soportar seis procesos internos: "
                + "integración de capacidades conjuntas, presupuesto, adquisiciones, ingeniería de sistemas, planeación operativa y gestión de portafolio.</p>"
                + "<p>Su aporte distintivo es que <b>normaliza las vistas</b>: en lugar de dejar libre la representación, define ocho <i>viewpoints</i> con productos específicos, "
                + "de modo que dos organizaciones distintas puedan intercambiar arquitecturas y entenderse.</p>"
        },
        {
          tipo: "tabla",
          titulo: "Los ocho viewpoints de DoDAF 2.0",
          encabezados: ["Viewpoint", "Qué articula"],
          filas: [
            ["<b>AV</b> · All Viewpoint", "Aspectos generales del contexto que aplican a todas las demás vistas"],
            ["<b>CV</b> · Capability", "Requerimientos de capacidad, calendario de entrega y capacidad desplegada"],
            ["<b>DIV</b> · Data and Information", "Relaciones de datos y estructuras de alineación que soportan las capacidades"],
            ["<b>OV</b> · Operational", "Escenarios operativos, actividades y requerimientos que soportan las capacidades"],
            ["<b>PV</b> · Project", "Relación entre requerimientos operativos y de capacidad, y los proyectos que los implementan"],
            ["<b>SvcV</b> · Services", "Diseño de la solución: ejecutores, actividades, servicios y sus intercambios"],
            ["<b>StdV</b> · Standards", "Políticas, estándares, guías, restricciones y pronósticos aplicables"],
            ["<b>SV</b> · Systems", "Diseño, composición, interconexión y contexto de los sistemas"]
          ]
        },
        {
          tipo: "nota",
          titulo: "Qué tomar de DoDAF si no eres el ejército",
          cuerpo: "<p>La idea de <b>normalizar las vistas</b> es transferible: en una empresa con muchas plantas o filiales, acordar qué diagramas se producen y con qué contenido evita que cada área documente a su manera y nada sea comparable.</p>"
        },
        {
          tipo: "texto",
          titulo: "IAF — Integrated Architecture Framework",
          cuerpo: "<p>Desarrollado por <b>Capgemini</b> desde los años noventa (primera versión en 1996), tomando como base el marco de Zachman y la planeación de arquitectura empresarial. "
                + "Es un marco nacido en la consultoría: su objetivo es dar un lenguaje común a equipos que entran a proyectos distintos en empresas distintas.</p>"
                + "<p>Su estructura es una <b>matriz</b>: cuatro áreas de aspecto por cuatro niveles de abstracción, más aspectos transversales.</p>"
        },
        {
          tipo: "tabla",
          titulo: "La matriz de IAF",
          encabezados: ["", "Contextual · ¿Por qué?", "Conceptual · ¿Qué?", "Lógico · ¿Cómo?", "Físico · ¿Con qué?"],
          filas: [
            ["<b>Negocio</b><br><small>personas, procesos, organización</small>", "Motivos y drivers", "Servicios de negocio", "Diseño de procesos", "Implementación operativa"],
            ["<b>Información</b>", "Necesidades de información", "Objetos de información", "Modelos lógicos de datos", "Bases de datos concretas"],
            ["<b>Sistemas de información</b><br><small>aplicaciones</small>", "Necesidad de soporte", "Servicios de aplicación", "Componentes lógicos", "Productos y software elegidos"],
            ["<b>Infraestructura tecnológica</b>", "Restricciones y drivers técnicos", "Servicios de infraestructura", "Diseño lógico de plataforma", "Equipos, redes y nube"]
          ]
        },
        {
          tipo: "lista",
          titulo: "Aspectos transversales de IAF",
          items: [
            "<b>Gobernanza:</b> quién decide, con qué autoridad y bajo qué principios, en todos los niveles y áreas.",
            "<b>Seguridad:</b> no es una capa al final, atraviesa las cuatro áreas y los cuatro niveles.",
            "<b>Sostenibilidad:</b> incorporada en ediciones recientes; el marco va en su sexta edición."
          ]
        },
        {
          tipo: "clave",
          titulo: "La aportación conceptual de IAF",
          cuerpo: "<p>Separar el <b>nivel lógico</b> del <b>físico</b>. El nivel lógico dice <i>qué componente hace falta</i> (una plataforma de gestión de clientes); el físico dice <i>con qué producto</i> se implementa (Salesforce, Dynamics, uno propio). "
                + "Es la misma distinción de TOGAF entre <b>ABB</b> —Architecture Building Block— y <b>SBB</b> —Solution Building Block—, y evita casarse con un proveedor antes de tiempo.</p>"
        },
        {
          tipo: "texto",
          titulo: "ATOM",
          cuerpo: "<p>Es el marco <b>menos estandarizado</b> de los que aparecen en el temario, y conviene decirlo con claridad: la sigla se usa con más de un significado según la fuente.</p>"
                + "<p>En el uso académico más difundido, ATOM organiza la alineación en cuatro dimensiones —<b>A</b>rquitectura, <b>T</b>ecnología, <b>O</b>rganización y <b>M</b>anagement— "
                + "y las despliega en una pirámide de cinco niveles que baja de la estrategia a la infraestructura:</p>"
        },
        {
          tipo: "pasos",
          titulo: "La pirámide de ATOM",
          items: [
            "Formulación de la <b>estrategia y dirección corporativa</b>, a partir de misión y visión.",
            "<b>Modelos de negocio y procesos</b> que crean valor para el cliente.",
            "<b>Alineación de TI</b> para asegurar la ejecución operativa.",
            "<b>Artefactos de información</b>: diseño de sistemas y bases de datos.",
            "<b>Infraestructura de TI</b> que sostiene todas las capas anteriores."
          ]
        },
        {
          tipo: "nota",
          titulo: "Advertencia metodológica",
          cuerpo: "<p>Algunos proveedores usan ATOM para <i>Architecture Team Operating Model</i>, un modelo operativo del equipo de arquitectura, con un enfoque distinto. "
                + "Si lo citas en un trabajo académico, <b>declara qué acepción estás usando y con qué fuente</b>. Es buena práctica general: cuando un término no tiene un cuerpo normativo detrás, la fuente es parte de la definición.</p>"
        },
        {
          tipo: "defs",
          titulo: "Metodologías para el desarrollo de aplicaciones empresariales",
          items: [
            { termino: "Cascada", definicion: "Fases secuenciales con entregables formales entre ellas. Útil cuando el alcance es estable y el cumplimiento normativo exige documentación previa." },
            { termino: "Ágil (Scrum, Kanban)", definicion: "Desarrollo iterativo con entregas frecuentes y retroalimentación continua. Útil cuando el requerimiento se descubre al usarlo." },
            { termino: "DevOps", definicion: "Colaboración entre desarrollo y operación, con automatización de construcción, prueba y despliegue. Reduce el tiempo entre idea y producción." },
            { termino: "Implantación de paquete (COTS)", definicion: "En lugar de construir, se configura un producto de mercado —ERP, CRM—. El esfuerzo se mueve de programar a parametrizar y a cambiar el proceso." },
            { termino: "Low-code / No-code", definicion: "Construcción sobre plataformas visuales. Acelera casos simples, pero exige gobierno para no generar aplicaciones fuera de la arquitectura." }
          ]
        },
        {
          tipo: "clave",
          titulo: "Relación con la arquitectura",
          cuerpo: "<p>La arquitectura empresarial <b>no elige por ti la metodología de desarrollo</b>: define la dirección, las restricciones y las interfaces que la solución debe respetar. La metodología organiza cómo se construye y se entrega dentro de esos límites.</p>"
        }
      ]
    },

    /* ================= SESIÓN 2 ================= */
    {
      id: "s2",
      nombre: "Sesión 2",
      tema: "Evaluación, comparación y selección del marco",
      proposito: "Pasar de «conozco los marcos» a «puedo justificar cuál conviene aquí». La selección se sustenta con criterios explícitos, no con preferencia personal.",
      bloques: [
        {
          tipo: "tabla",
          titulo: "Comparación por dimensión",
          encabezados: ["Dimensión", "TOGAF", "Zachman", "DoDAF", "IAF"],
          filas: [
            ["¿Ofrece método paso a paso?", "Sí (ADM)", "No", "Parcial", "Sí"],
            ["¿Ofrece taxonomía de vistas?", "Parcial", "Sí, es su núcleo", "Sí, normada", "Sí (matriz)"],
            ["¿Incluye gobierno?", "Sí (fase G)", "No", "Sí, por normativa", "Sí, transversal"],
            ["¿Prescribe artefactos concretos?", "Sugiere", "No", "Sí, obligatorios", "Sí"],
            ["Curva de aprendizaje", "Alta", "Media", "Alta", "Media-alta"],
            ["Talento certificado en el mercado", "Amplio", "Limitado", "Nicho (defensa)", "Ligado a Capgemini"],
            ["Mejor ajuste", "Transformación empresarial", "Auditoría de completitud", "Interoperabilidad y adquisiciones", "Consultoría multiproyecto"]
          ]
        },
        {
          tipo: "lista",
          titulo: "Criterios para evaluar un marco",
          items: [
            "<b>Ajuste al objetivo:</b> ¿qué pregunta necesito responder — cómo transformar, cómo clasificar, cómo gobernar?",
            "<b>Cobertura de dominios:</b> ¿cubre negocio, datos, aplicaciones y tecnología, o solo una parte?",
            "<b>Madurez de la organización:</b> un marco pesado en una empresa sin práctica de arquitectura se vuelve burocracia y muere.",
            "<b>Curva de aprendizaje y talento disponible:</b> ¿hay gente que lo sepa usar, o hay que formarla?",
            "<b>Costo de adopción:</b> licenciamiento, capacitación, certificación, herramientas.",
            "<b>Soporte del ecosistema:</b> herramientas, comunidad, documentación, consultoras.",
            "<b>Requisitos externos:</b> a veces el cliente, el corporativo o el regulador ya impusieron uno.",
            "<b>Compatibilidad con lo existente:</b> con COBIT, ITIL, ISO o metodologías de proyecto ya implantadas."
          ]
        },
        {
          tipo: "clave",
          titulo: "La matriz de decisión ponderada",
          cuerpo: "<p>Se asigna un <b>peso</b> a cada criterio (deben sumar 100 %) y se califica cada alternativa (por ejemplo de 1 a 5). "
                + "El puntaje de cada opción es <b>Σ (peso × calificación)</b>. El valor del método no está en el número final, sino en que <b>obliga a explicitar los pesos</b>: ahí es donde se discute de verdad.</p>"
        },
        {
          tipo: "tabla",
          titulo: "Ejemplo de matriz de selección",
          encabezados: ["Criterio", "Peso", "TOGAF", "Zachman", "DoDAF"],
          filas: [
            ["Ajuste al objetivo (transformar)", "30 %", "5", "2", "3"],
            ["Cobertura de dominios", "20 %", "5", "5", "4"],
            ["Curva de aprendizaje", "15 %", "2", "4", "2"],
            ["Talento certificado disponible", "15 %", "5", "3", "2"],
            ["Costo de adopción", "10 %", "4", "5", "5"],
            ["Herramientas de soporte", "10 %", "5", "3", "2"],
            ["<b>Puntaje ponderado</b>", "<b>100 %</b>", "<b>4.45</b>", "<b>3.45</b>", "<b>3.00</b>"]
          ]
        },
        {
          tipo: "nota",
          titulo: "Cómo se lee el resultado",
          cuerpo: "<p>TOGAF gana, pero su punto débil es evidente: <b>curva de aprendizaje 2 de 5</b>. Una recomendación honesta no oculta eso: propone TOGAF <i>y</i> un plan de mitigación —adoptar el ADM por iteraciones, empezar con un alcance acotado, capacitar a un núcleo pequeño primero—.</p>"
                + "<p>Un análisis que solo entrega el ganador es la mitad del trabajo. El otro medio es qué hacer con sus debilidades.</p>"
        },
        {
          tipo: "clave",
          titulo: "Los marcos se combinan",
          cuerpo: "<p>La respuesta profesional casi nunca es «usamos TOGAF puro». Es más bien: <b>TOGAF</b> como método, <b>Zachman</b> para verificar que no falten vistas, <b>BPMN</b> para modelar procesos, "
                + "<b>COBIT</b> para el gobierno de TI, <b>ITIL</b> para los servicios e <b>ISO</b> para lo certificable. Cada uno responde una pregunta distinta.</p>"
        },
        {
          tipo: "defs",
          titulo: "Tipos de aplicaciones empresariales · repaso ampliado",
          items: [
            { termino: "Sistemas de registro", definicion: "Guardan la verdad transaccional: ERP, HCM, sistemas core. Cambian poco y son críticos." },
            { termino: "Sistemas de diferenciación", definicion: "Soportan procesos que distinguen a la empresa: CRM configurado, MES, plataformas propias. Cambian a ritmo medio." },
            { termino: "Sistemas de innovación", definicion: "Experimentos y capacidades nuevas: analítica avanzada, IA, apps de cliente. Cambian rápido y pueden fallar sin daño mayor." },
            { termino: "Por qué importa la distinción", definicion: "Cada categoría admite un ritmo de cambio, un nivel de riesgo y una metodología distintos. Tratar un ERP como un experimento —o al revés— es un error de gobierno." }
          ]
        }
      ]
    },

    /* ================= SESIÓN 3 ================= */
    {
      id: "s3",
      nombre: "Sesión 3",
      tema: "Gobierno de TI, servicios y la función del departamento",
      proposito: "Entender qué hace realmente un área de TI, cómo se gobierna y cómo se relaciona con el negocio. Antes de ser consultor hay que conocer la operación del área que da servicio a la empresa.",
      bloques: [
        {
          tipo: "tabla",
          titulo: "COBIT frente a ITIL · repaso y profundización",
          encabezados: ["", "COBIT", "ITIL"],
          filas: [
            ["Pregunta central", "¿Estamos haciendo lo correcto, controlando riesgos y generando valor?", "¿Cómo diseñamos, entregamos, soportamos y mejoramos el servicio?"],
            ["Naturaleza", "Marco de gobierno y control", "Marco de gestión del servicio"],
            ["Audiencia", "Consejo, dirección, auditoría", "Operación de TI, mesa de servicio"],
            ["Aporta", "Objetivos de control, responsabilidades, métricas, madurez", "Prácticas de operación: incidentes, problemas, cambios"],
            ["Titular", "ISACA", "PeopleCert / AXELOS"]
          ]
        },
        {
          tipo: "texto",
          titulo: "ITIL 3 frente a ITIL 4",
          cuerpo: "<p><b>ITIL v3</b> organizaba la práctica como un <b>ciclo de vida del servicio</b> en cinco etapas: estrategia, diseño, transición, operación y mejora continua. "
                + "Era una estructura secuencial y muy orientada a procesos.</p>"
                + "<p><b>ITIL 4</b> reemplaza esa estructura por el <b>Service Value System</b>, con la <i>Service Value Chain</i> en el centro y 34 <b>prácticas</b> en lugar de 26 procesos. "
                + "Incorpora explícitamente Agile, Lean y DevOps, y se apoya en siete <b>principios guía</b>.</p>"
        },
        {
          tipo: "lista",
          titulo: "Los siete principios guía de ITIL 4",
          items: [
            "Enfocarse en el valor.",
            "Empezar donde se está.",
            "Progresar iterativamente con retroalimentación.",
            "Colaborar y promover la visibilidad.",
            "Pensar y trabajar holísticamente.",
            "Mantenerlo simple y práctico.",
            "Optimizar y automatizar."
          ]
        },
        {
          tipo: "nota",
          titulo: "Por qué cambió",
          cuerpo: "<p>La crítica a v3 era que producía <b>procesos pesados y silos</b>. ITIL 4 responde a un entorno donde el software se entrega continuamente y la frontera entre desarrollo y operación se borró. "
                + "El cambio de <i>proceso</i> a <i>práctica</i> no es cosmético: una práctica incluye personas, información, tecnología y socios, no solo el flujo de actividades.</p>"
        },
        {
          tipo: "defs",
          titulo: "ITSM y BRM",
          items: [
            { termino: "ITSM — IT Service Management", definicion: "Disciplina de gestionar TI <b>como un servicio al negocio</b>, no como un conjunto de tecnologías. Incluye catálogo de servicios, niveles de servicio (SLA), mesa de ayuda, gestión de incidentes, problemas, cambios, configuración y activos." },
            { termino: "BRM — Business Relationship Management", definicion: "Rol y disciplina que <b>conecta al área de TI con las áreas de negocio</b>. No levanta requerimientos como capturista: entiende la estrategia del área, moldea la demanda, prioriza el portafolio y comunica el valor entregado." },
            { termino: "Por qué existe BRM", definicion: "Sin él, TI recibe una lista de peticiones inconexas y el negocio percibe a TI como un proveedor de tickets. El BRM convierte peticiones en demanda alineada a la estrategia." }
          ]
        },
        {
          tipo: "lista",
          titulo: "Funciones de un departamento de Tecnologías de Información",
          items: [
            "<b>Estrategia y arquitectura:</b> definir hacia dónde evoluciona el ecosistema tecnológico.",
            "<b>Desarrollo y proyectos:</b> construir o implantar soluciones.",
            "<b>Operación e infraestructura:</b> servidores, nube, redes, telecomunicaciones, dispositivos.",
            "<b>Soporte y mesa de servicio:</b> atención a usuarios, incidentes y solicitudes.",
            "<b>Seguridad de la información y ciberseguridad:</b> protección, monitoreo y respuesta.",
            "<b>Gestión de datos:</b> gobierno, calidad, integración y analítica.",
            "<b>Gobierno, riesgo y cumplimiento:</b> políticas, auditoría, continuidad del negocio.",
            "<b>Gestión de proveedores y contratos:</b> licenciamiento, servicios administrados, nube.",
            "<b>Relación con el negocio (BRM):</b> demanda, portafolio y comunicación de valor."
          ]
        },
        {
          tipo: "clave",
          titulo: "Estrategia del departamento de TI",
          cuerpo: "<p>Una estrategia de TI responde: <b>¿qué capacidades tecnológicas necesita el negocio en los próximos años y cómo las vamos a construir, comprar o rentar?</b></p>"
                + "<p>No es una lista de compras ni un catálogo de proyectos: define principios (nube primero, comprar antes que construir, dato único), el modelo operativo del área, el portafolio priorizado y las métricas con las que se juzgará.</p>"
        },
        {
          tipo: "pasos",
          titulo: "Cómo se arranca un proyecto tecnológico nuevo",
          items: [
            "<b>Necesidad de negocio</b> enunciada con magnitud: qué duele, cuánto cuesta, a quién afecta.",
            "<b>Caso de negocio preliminar:</b> beneficio esperado, costo estimado, riesgo.",
            "<b>Análisis de factibilidad</b> técnica, operativa y económica.",
            "<b>Revisión de arquitectura:</b> ¿ya existe una capacidad que lo resuelva? ¿respeta los principios?",
            "<b>Priorización en el portafolio</b> contra las demás iniciativas.",
            "<b>Autorización y asignación</b> de patrocinador, presupuesto y equipo.",
            "<b>Ejecución</b> con la metodología que corresponda, bajo gobierno de arquitectura.",
            "<b>Puesta en operación</b> y medición del beneficio prometido."
          ]
        },
        {
          tipo: "nota",
          titulo: "La pregunta incómoda del paso 4",
          cuerpo: "<p>«¿Ya existe una capacidad que lo resuelva?» es la pregunta que más dinero ahorra y la que menos se hace. Sin catálogo de aplicaciones ni arquitectura, la respuesta siempre es «no lo sé», y la empresa termina comprando tres veces lo mismo.</p>"
        },
        {
          tipo: "tabla",
          titulo: "Estándares internacionales de procesos computacionales",
          encabezados: ["Norma", "Ámbito", "¿Certificable?"],
          filas: [
            ["ISO 9000 / 9001", "Sistema de gestión de la calidad", "Sí (9001)"],
            ["ISO/IEC 20000-1", "Gestión de servicios de TI", "Sí"],
            ["ISO/IEC 27000 / 27001", "Seguridad de la información (SGSI)", "Sí (27001)"],
            ["ISO/IEC 33000", "Evaluación de procesos de software (sucede a ISO 15504 / SPICE)", "Evaluación de capacidad, no certificación de empresa"],
            ["ISO/IEC/IEEE 12207", "Procesos del ciclo de vida del software", "No prescriptiva"],
            ["ISO/IEC/IEEE 29148", "Ingeniería de requerimientos", "No prescriptiva"],
            ["ISO 19510 (BPMN)", "Notación de modelado de procesos", "No aplica"]
          ]
        },
        {
          tipo: "clave",
          titulo: "Marco, norma y ley",
          cuerpo: "<p>Un <b>marco</b> orienta y ofrece método. Una <b>norma</b> puede establecer requisitos y ser certificable. Una <b>ley</b> obliga. "
                + "La obligatoriedad de cualquiera de ellos depende de leyes, contratos, regulación sectorial o decisión de la propia organización — nunca del prestigio del marco.</p>"
        }
      ]
    },

    /* ================= SESIÓN 4 ================= */
    {
      id: "s4",
      nombre: "Sesión 4",
      tema: "Herramientas del arquitecto y tecnologías habilitadoras",
      proposito: "Conocer con qué software se hace este trabajo en la industria y dónde encajan las tecnologías emergentes, sin perder de vista que la herramienta no sustituye al análisis.",
      bloques: [
        {
          tipo: "tabla",
          titulo: "Categorías de herramienta y para qué sirve cada una",
          encabezados: ["Categoría", "Para qué sirve", "Ejemplos del mercado"],
          filas: [
            ["<b>Gestión del portafolio de arquitectura (EAM)</b>", "Catálogo de aplicaciones, capacidades, dependencias, ciclo de vida y racionalización", "SAP LeanIX, Orbus, Ardoq, Bizzdesign"],
            ["<b>Modelado y minería de procesos</b>", "Modelar en BPMN, documentar el AS-IS y descubrir el proceso real desde los logs de los sistemas", "SAP Signavio, Celonis, Bizagi, Camunda"],
            ["<b>Gestión de servicios de TI (ITSM)</b>", "Catálogo de servicios, incidentes, problemas, cambios, activos y CMDB", "ServiceNow, Jira Service Management, BMC"],
            ["<b>Modelado libre / diagramación</b>", "Diagramas rápidos sin repositorio ni gobierno", "draw.io, Visio, Lucidchart"],
            ["<b>Simulación de procesos</b>", "Ejecutar el modelo con variabilidad y comparar escenarios", "Bizagi Modeler, Simul8, Arena, módulos de Signavio"]
          ]
        },
        {
          tipo: "defs",
          titulo: "Tres herramientas que conviene ubicar por nombre",
          items: [
            { termino: "SAP LeanIX", definicion: "Plataforma de <b>gestión del portafolio de arquitectura</b>. Responde: qué aplicaciones tengo, quién las usa, qué capacidad de negocio soportan, cuánto cuestan, qué tan obsoletas están y cuáles se pueden retirar. Es el catálogo y la matriz de la fase C del ADM, vivos y con dueño." },
            { termino: "SAP Signavio", definicion: "Plataforma de <b>gestión de procesos</b>: modelado en BPMN colaborativo, repositorio de procesos y <i>process mining</i>, que reconstruye el proceso real a partir de los registros del ERP en lugar de a partir de entrevistas." },
            { termino: "ServiceNow", definicion: "Plataforma de <b>ITSM y flujos de trabajo</b>. Nació en mesa de servicio y hoy orquesta procesos de TI, RH, legal y operaciones sobre una base de datos de configuración (CMDB)." }
          ]
        },
        {
          tipo: "clave",
          titulo: "Process mining: por qué cambia el juego",
          cuerpo: "<p>El AS-IS levantado por entrevistas es <b>lo que la gente cree que hace</b>. El AS-IS reconstruido desde los logs del sistema es <b>lo que realmente pasó</b>, con sus tiempos reales, sus rutas excepcionales y sus retrabajos.</p>"
                + "<p>Casi siempre son distintos, y la diferencia es material: variantes de proceso que nadie documentó, aprobaciones que se saltan, ciclos que se repiten. Cuando hay logs disponibles, esta es la fuente más confiable para el diagnóstico.</p>"
        },
        {
          tipo: "nota",
          titulo: "La herramienta no sustituye el análisis",
          cuerpo: "<p>Un repositorio de arquitectura sin gobierno se convierte en un inventario desactualizado y caro. La herramienta amplifica una práctica que ya existe; <b>no crea la práctica</b>. Primero el método y el dueño del dato, después la licencia.</p>"
        },
        {
          tipo: "defs",
          titulo: "Tecnologías emergentes en el mapa de la arquitectura",
          items: [
            { termino: "SaaS — Software as a Service", definicion: "Aplicación rentada y operada por el proveedor. Cambia la arquitectura tecnológica (menos infraestructura propia) y traslada el esfuerzo a integración, identidad y gestión de contratos." },
            { termino: "IoT — Internet de las cosas", definicion: "Sensores y dispositivos conectados que generan datos de la operación física. Es el habilitador de la visibilidad en tiempo real del inventario y del mantenimiento predictivo." },
            { termino: "IA y Machine Learning", definicion: "Modelos que predicen o clasifican a partir de datos históricos. En procesos: pronóstico de demanda, detección de anomalías, clasificación documental, mantenimiento predictivo." },
            { termino: "Requisito previo, siempre", definicion: "Las tres dependen de la arquitectura de datos: sin datos íntegros, con dueño y con significado acordado, ninguna de ellas produce valor. La IA amplifica la calidad del dato — en ambos sentidos." }
          ]
        },
        {
          tipo: "clave",
          titulo: "El criterio para adoptar una tecnología emergente",
          cuerpo: "<p>Un proyecto de transformación digital no se justifica por usar una tecnología de moda, sino porque <b>reduce costo, acelera un tiempo o genera valor demostrable</b>. "
                + "La pregunta correcta nunca es «¿dónde podemos usar IA?», sino «¿cuál es nuestro problema y qué lo resuelve mejor?».</p>"
        },
        {
          tipo: "texto",
          titulo: "Supply Chain Management y el ecosistema SAP",
          cuerpo: "<p><b>SCM — Supply Chain Management</b> es la gestión del proceso end-to-end de la cadena de suministro: planeación de la demanda, abastecimiento, producción, almacén, transporte y devoluciones. "
                + "Es el ejemplo por excelencia de proceso <b>cross-functional</b> y de por qué la visión por departamentos falla: el cliente percibe una sola entrega.</p>"
                + "<p>En el ecosistema SAP conviven piezas que conviene no confundir: <b>S/4HANA</b> (el ERP), <b>Ariba</b> (compras y proveedores), <b>SuccessFactors</b> (capital humano), "
                + "<b>Concur</b> (gastos de viaje), <b>Integrated Business Planning</b> (planeación de la cadena), <b>Business Technology Platform</b> (integración y extensión), "
                + "más <b>Signavio</b> y <b>LeanIX</b> ya mencionados.</p>"
        },
        {
          tipo: "lista",
          titulo: "Parámetros de la arquitectura de infraestructura tecnológica",
          items: [
            "<b>Disponibilidad:</b> porcentaje de tiempo operativo comprometido y esquema de redundancia.",
            "<b>Desempeño y latencia:</b> especialmente crítico en punto de venta, piso de planta y sucursales remotas.",
            "<b>Escalabilidad:</b> cómo crece ante picos de demanda, y a qué costo.",
            "<b>Seguridad:</b> identidad, segmentación de red, cifrado, respaldo y recuperación.",
            "<b>Continuidad:</b> RTO (cuánto tarda en restablecerse) y RPO (cuánta información se puede perder).",
            "<b>Conectividad:</b> enlaces, ancho de banda y redundancia entre sitios — la restricción más subestimada.",
            "<b>Costo y modelo de consumo:</b> capital contra operativo, nube contra propio, licenciamiento.",
            "<b>Ubicación del dato:</b> requisitos legales de residencia y transferencia entre países."
          ]
        },
        {
          tipo: "clave",
          titulo: "El recordatorio del supermercado",
          cuerpo: "<p>De nada sirve diseñar para vender más si la conectividad de la tienda es mala y el punto de venta no puede operar. "
                + "<b>La infraestructura no es un detalle de implementación: es una restricción de diseño</b> que se valida antes de prometer un beneficio.</p>"
        }
      ]
    }
  ],

  /* ==================== GLOSARIO ==================== */
  terminos: [
    { termino: "DoDAF", sigla: "Department of Defense Architecture Framework", definicion: "Marco del Departamento de Defensa de EE. UU. que normaliza ocho viewpoints (AV, CV, DIV, OV, PV, SvcV, StdV, SV) para asegurar interoperabilidad y soportar adquisiciones." },
    { termino: "IAF", sigla: "Integrated Architecture Framework", definicion: "Marco de Capgemini (1996) organizado como matriz de cuatro áreas —negocio, información, sistemas de información e infraestructura— por cuatro niveles —contextual, conceptual, lógico y físico—, con gobernanza, seguridad y sostenibilidad como aspectos transversales." },
    { termino: "ATOM", definicion: "Marco de alineación en cuatro dimensiones (Arquitectura, Tecnología, Organización y Management) desplegado como pirámide de cinco niveles, de la estrategia a la infraestructura. Es el menos estandarizado del temario: la sigla se usa con más de un significado." },
    { termino: "Viewpoint (DoDAF)", definicion: "Vista normada de la arquitectura con productos específicos; DoDAF 2.0 define ocho." },
    { termino: "Nivel lógico y nivel físico", definicion: "El lógico dice qué componente hace falta; el físico, con qué producto se implementa. Equivale a la distinción entre ABB y SBB de TOGAF." },
    { termino: "ABB / SBB", sigla: "Architecture / Solution Building Block", definicion: "Bloque de arquitectura: capacidad requerida sin producto definido. Bloque de solución: el producto concreto que la implementa." },
    { termino: "Matriz de decisión ponderada", definicion: "Método de selección: se asignan pesos a los criterios (suman 100 %) y se califica cada alternativa; el puntaje es Σ (peso × calificación)." },
    { termino: "Sistemas de registro, diferenciación e innovación", definicion: "Clasificación del portafolio por ritmo de cambio y tolerancia al riesgo; cada categoría admite una metodología y un gobierno distintos." },
    { termino: "COTS", sigla: "Commercial Off-The-Shelf", definicion: "Producto de mercado que se configura en lugar de construirse; el esfuerzo se mueve de programar a parametrizar y a cambiar el proceso." },
    { termino: "ITIL 4", definicion: "Edición que sustituye el ciclo de vida de v3 por el Service Value System, con la Service Value Chain al centro, 34 prácticas y siete principios guía; incorpora Agile, Lean y DevOps." },
    { termino: "Service Value System", definicion: "Estructura central de ITIL 4: cómo los componentes y actividades de la organización trabajan juntos para crear valor mediante servicios." },
    { termino: "ITSM", sigla: "IT Service Management", definicion: "Gestionar TI como servicio al negocio: catálogo, SLA, mesa de ayuda, incidentes, problemas, cambios, configuración y activos." },
    { termino: "BRM", sigla: "Business Relationship Management", definicion: "Rol y disciplina que conecta TI con las áreas de negocio: entiende la estrategia del área, moldea la demanda, prioriza el portafolio y comunica el valor entregado." },
    { termino: "SLA", sigla: "Service Level Agreement", definicion: "Acuerdo de nivel de servicio: compromiso medible de disponibilidad, tiempo de respuesta o resolución." },
    { termino: "CMDB", sigla: "Configuration Management Database", definicion: "Repositorio de los elementos de configuración de TI y sus relaciones; base para evaluar el impacto de un cambio." },
    { termino: "Estrategia de TI", definicion: "Define qué capacidades tecnológicas necesita el negocio y cómo se construirán, comprarán o rentarán; incluye principios, modelo operativo, portafolio priorizado y métricas." },
    { termino: "ISO/IEC 33000", definicion: "Familia de normas para la evaluación de procesos de software; sucede a ISO/IEC 15504 (SPICE). Evalúa capacidad de proceso, no certifica a la empresa." },
    { termino: "SAP LeanIX", definicion: "Plataforma de gestión del portafolio de arquitectura: catálogo de aplicaciones, capacidades, dependencias, costos y ciclo de vida." },
    { termino: "SAP Signavio", definicion: "Plataforma de gestión de procesos: modelado BPMN colaborativo, repositorio y process mining." },
    { termino: "ServiceNow", definicion: "Plataforma de ITSM y flujos de trabajo, construida sobre una CMDB; orquesta procesos de TI y de otras áreas." },
    { termino: "Process mining", definicion: "Reconstrucción del proceso real a partir de los registros de los sistemas, en lugar de a partir de entrevistas. Revela variantes, tiempos y retrabajos que nadie documentó." },
    { termino: "SaaS", sigla: "Software as a Service", definicion: "Aplicación rentada y operada por el proveedor; traslada el esfuerzo a integración, identidad y gestión de contratos." },
    { termino: "SCM", sigla: "Supply Chain Management", definicion: "Gestión del proceso end-to-end de la cadena de suministro: demanda, abastecimiento, producción, almacén, transporte y devoluciones." },
    { termino: "RTO / RPO", definicion: "Recovery Time Objective: cuánto puede tardar el restablecimiento. Recovery Point Objective: cuánta información se puede perder. Parámetros de continuidad." },
    { termino: "Residencia del dato", definicion: "Requisito legal sobre en qué país puede almacenarse o procesarse la información; restricción de diseño en arquitecturas multinacionales." }
  ],

  /* ==================== PRÁCTICA ==================== */
  practica: {

    calculos: [
      {
        tema: "Selección de marco",
        titulo: "Matriz de decisión ponderada",
        enunciado: "Un corporativo debe elegir el marco con el que conducirá su transformación. El comité acordó seis criterios con sus pesos y calificó cada alternativa de 1 a 5. Calcula el puntaje ponderado de cada marco.",
        datos: {
          tipo: "tabla",
          titulo: "Criterios, pesos y calificaciones",
          encabezados: ["Criterio", "Peso", "TOGAF", "Zachman", "DoDAF"],
          filas: [
            ["Ajuste al objetivo (transformar)", "30 %", "5", "2", "3"],
            ["Cobertura de dominios", "20 %", "5", "5", "4"],
            ["Curva de aprendizaje", "15 %", "2", "4", "2"],
            ["Talento certificado disponible", "15 %", "5", "3", "2"],
            ["Costo de adopción", "10 %", "4", "5", "5"],
            ["Herramientas de soporte", "10 %", "5", "3", "2"]
          ]
        },
        preguntas: [
          { etiqueta: "Puntaje ponderado de TOGAF", respuesta: 4.45, unidad: "pts", tolerancia: 0.03,
            pista: "Σ (peso × calificación), con los pesos en decimal." },
          { etiqueta: "Puntaje ponderado de Zachman", respuesta: 3.45, unidad: "pts", tolerancia: 0.03 },
          { etiqueta: "Puntaje ponderado de DoDAF", respuesta: 3.00, unidad: "pts", tolerancia: 0.03 }
        ],
        solucion:
          '<div class="paso-calc">TOGAF  = 0.30×5 + 0.20×5 + 0.15×2 + 0.15×5 + 0.10×4 + 0.10×5\n       = 1.50 + 1.00 + 0.30 + 0.75 + 0.40 + 0.50 = <span class="resaltado">4.45</span>\n\nZachman= 0.30×2 + 0.20×5 + 0.15×4 + 0.15×3 + 0.10×5 + 0.10×3\n       = 0.60 + 1.00 + 0.60 + 0.45 + 0.50 + 0.30 = <span class="resaltado">3.45</span>\n\nDoDAF  = 0.30×3 + 0.20×4 + 0.15×2 + 0.15×2 + 0.10×5 + 0.10×2\n       = 0.90 + 0.80 + 0.30 + 0.30 + 0.50 + 0.20 = <span class="resaltado">3.00</span></div>'
          + "<p><b>Cómo se defiende el resultado.</b> TOGAF gana, pero su calificación más baja es curva de aprendizaje (2 de 5). Una recomendación completa incluye el plan de mitigación: adoptar el ADM por iteraciones, empezar con un alcance acotado y formar primero a un núcleo pequeño.</p>"
          + "<p>El valor del método no está en el número: está en que <b>obliga a explicitar los pesos</b>. Si alguien no está de acuerdo con el resultado, la discusión se da sobre los pesos —que es donde debe darse— y no sobre preferencias personales.</p>"
      },
      {
        tema: "Sensibilidad de la decisión",
        titulo: "¿Qué tan robusta es la elección?",
        enunciado: "El director de TI argumenta que la curva de aprendizaje debería pesar mucho más: propone subirla de <b>15 % a 35 %</b>, bajando el ajuste al objetivo de <b>30 % a 10 %</b>. Los demás pesos y todas las calificaciones se mantienen. Recalcula.",
        preguntas: [
          { etiqueta: "Nuevo puntaje de TOGAF", respuesta: 3.85, unidad: "pts", tolerancia: 0.03 },
          { etiqueta: "Nuevo puntaje de Zachman", respuesta: 3.85, unidad: "pts", tolerancia: 0.03 },
          { etiqueta: "Nuevo puntaje de DoDAF", respuesta: 2.80, unidad: "pts", tolerancia: 0.03 }
        ],
        solucion:
          '<div class="paso-calc">Pesos nuevos: ajuste 0.10 · cobertura 0.20 · curva 0.35\n              talento 0.15 · costo 0.10 · herramientas 0.10\n\nTOGAF  = 0.10×5 + 0.20×5 + 0.35×2 + 0.15×5 + 0.10×4 + 0.10×5\n       = 0.50 + 1.00 + 0.70 + 0.75 + 0.40 + 0.50 = <span class="resaltado">3.85</span>\n\nZachman= 0.10×2 + 0.20×5 + 0.35×4 + 0.15×3 + 0.10×5 + 0.10×3\n       = 0.20 + 1.00 + 1.40 + 0.45 + 0.50 + 0.30 = <span class="resaltado">3.85</span>\n\nDoDAF  = 0.10×3 + 0.20×4 + 0.35×2 + 0.15×2 + 0.10×5 + 0.10×2\n       = 0.30 + 0.80 + 0.70 + 0.30 + 0.50 + 0.20 = <span class="resaltado">2.80</span></div>'
          + "<p><b>El punto del ejercicio:</b> con el nuevo juego de pesos TOGAF y Zachman quedan <b>exactamente empatados en 3.85</b>. La ventaja de un punto entero que TOGAF tenía en el primer cálculo se evaporó al mover dos pesos.</p>"
          + "<p>La decisión <b>no era robusta</b>: dependía por completo de cuánto pesara el ajuste al objetivo frente a la facilidad de adopción. Ese es exactamente el tipo de hallazgo que hay que llevar al comité.</p>"
          + "<p>Ese es el análisis de sensibilidad, y es lo que separa una recomendación profesional de una tabla bonita. Cuando el resultado cambia con un ajuste razonable de pesos, hay que decirlo y llevar la discusión al comité, no esconderlo.</p>"
          + "<p>Nota de método: comparar marcos que responden preguntas distintas —TOGAF transforma, Zachman clasifica— tiene un límite. Muchas veces la respuesta correcta es usarlos de forma complementaria.</p>"
      },
      {
        tema: "Racionalización del portafolio",
        titulo: "Ahorro por retiro de aplicaciones redundantes",
        enunciado: "El catálogo de aplicaciones revela <b>4 sistemas</b> que cubren la misma capacidad de gestión documental, con costos anuales de licenciamiento de <b>$420,000</b>, <b>$310,000</b>, <b>$180,000</b> y <b>$95,000</b>. Se decide consolidar en el de $420,000, que ya soporta a la mayoría de los usuarios. Migrar los otros tres cuesta <b>$650,000</b> por única vez.",
        preguntas: [
          { etiqueta: "Costo anual actual del conjunto", respuesta: 1005000, unidad: "$", tolerancia: 500 },
          { etiqueta: "Ahorro anual tras consolidar", respuesta: 585000, unidad: "$", tolerancia: 500 },
          { etiqueta: "Periodo de recuperación de la migración", respuesta: 13.33, unidad: "meses", tolerancia: 0.2 },
          { etiqueta: "Ahorro neto acumulado a 3 años", respuesta: 1105000, unidad: "$", tolerancia: 1000 }
        ],
        solucion:
          '<div class="paso-calc">Costo actual = 420,000 + 310,000 + 180,000 + 95,000 = <span class="resaltado">$1,005,000/año</span>\nCosto futuro = 420,000\nAhorro anual = 1,005,000 − 420,000 = <span class="resaltado">$585,000/año</span>\n\nPayback = 650,000 / 585,000 = 1.111 años = <span class="resaltado">13.3 meses</span>\n\nAhorro neto 3 años = (585,000 × 3) − 650,000\n                   = 1,755,000 − 650,000 = <span class="resaltado">$1,105,000</span></div>'
          + "<p><b>Por qué esto es arquitectura y no solo ahorro.</b> El catálogo de aplicaciones —un artefacto de la fase C del ADM— es lo que hizo visible la redundancia. Sin él, nadie sabía que había cuatro sistemas para lo mismo.</p>"
          + "<p><b>Y la advertencia:</b> el cálculo solo cuenta licencias. Un caso completo debe sumar el costo de capacitación, la pérdida temporal de productividad durante la migración, el riesgo de funcionalidad no cubierta por el sistema que se conserva, y el costo de mantener los datos históricos accesibles.</p>"
      }
    ],

    opcionMultiple: [
      {
        tema: "DoDAF",
        pregunta: "¿Cuál es la aportación distintiva de DoDAF frente a otros marcos?",
        opciones: [
          "Normaliza las vistas: define viewpoints con productos específicos para que arquitecturas de organizaciones distintas sean comparables e interoperables",
          "Ofrece un ciclo iterativo de transformación equivalente al ADM",
          "Es una ontología de seis preguntas y varias perspectivas",
          "Es una plataforma de software para gestionar el portafolio de aplicaciones"
        ],
        correcta: 0,
        explicacion: "DoDAF nació para soportar adquisiciones e integración de capacidades conjuntas en el Departamento de Defensa de EE. UU., donde la interoperabilidad entre proveedores distintos es el problema central.",
        porQueNo: {
          1: "El ciclo de transformación es la aportación de TOGAF con su ADM.",
          2: "Esa es la descripción de Zachman.",
          3: "Eso describe una herramienta como SAP LeanIX, no un marco."
        }
      },
      {
        tema: "DoDAF",
        pregunta: "En DoDAF 2.0, ¿qué articula el <i>Capability Viewpoint</i> (CV)?",
        opciones: [
          "Los requerimientos de capacidad, el calendario de entrega y la capacidad desplegada",
          "Los escenarios y actividades operativas",
          "Las políticas, estándares y restricciones aplicables",
          "El diseño y la interconexión de los sistemas"
        ],
        correcta: 0,
        explicacion: "CV responde qué capacidades se requieren y cuándo estarán disponibles. Es la vista que conecta la estrategia con la planeación de entregas.",
        porQueNo: {
          1: "Eso corresponde al Operational Viewpoint (OV).",
          2: "Eso corresponde al Standards Viewpoint (StdV).",
          3: "Eso corresponde al Systems Viewpoint (SV)."
        }
      },
      {
        tema: "IAF",
        pregunta: "¿Cómo está estructurado el marco IAF de Capgemini?",
        opciones: [
          "Como una matriz de cuatro áreas —negocio, información, sistemas de información e infraestructura— por cuatro niveles —contextual, conceptual, lógico y físico—",
          "Como un ciclo de nueve fases con gestión de requerimientos al centro",
          "Como ocho viewpoints normados con productos obligatorios",
          "Como una pirámide de cinco niveles de la estrategia a la infraestructura"
        ],
        correcta: 0,
        explicacion: "IAF cruza dominios con niveles de abstracción, y añade gobernanza, seguridad y sostenibilidad como aspectos transversales a toda la matriz.",
        porQueNo: {
          1: "Ese es el ADM de TOGAF.",
          2: "Esa es la estructura de DoDAF.",
          3: "Esa es la estructura de ATOM."
        }
      },
      {
        tema: "IAF",
        pregunta: "En IAF, la diferencia entre el nivel lógico y el nivel físico es que…",
        opciones: [
          "El lógico define qué componente se necesita; el físico, con qué producto concreto se implementa",
          "El lógico describe el software y el físico el hardware",
          "El lógico es el AS-IS y el físico el TO-BE",
          "El lógico corresponde a datos y el físico a infraestructura"
        ],
        correcta: 0,
        explicacion: "Es la misma distinción entre ABB (bloque de arquitectura) y SBB (bloque de solución) de TOGAF, y sirve para no comprometerse con un proveedor antes de haber definido la necesidad.",
        porQueNo: {
          1: "Ambos niveles aplican a las cuatro áreas, incluido software e infraestructura.",
          2: "AS-IS y TO-BE son estados temporales, no niveles de abstracción.",
          3: "Los niveles cruzan todas las áreas; no son áreas en sí mismos."
        }
      },
      {
        tema: "ATOM",
        pregunta: "¿Qué precaución conviene tomar al citar el marco ATOM en un trabajo académico?",
        opciones: [
          "Declarar qué acepción se está usando y con qué fuente, porque la sigla se emplea con más de un significado y no tiene un cuerpo normativo único",
          "Ninguna: está estandarizado por The Open Group igual que TOGAF",
          "Usarlo solo para proyectos de defensa, como DoDAF",
          "Citarlo únicamente en su versión certificada por ISO"
        ],
        correcta: 0,
        explicacion: "Cuando un término no tiene un organismo normativo detrás, la fuente forma parte de la definición. Es buena práctica general, no solo para ATOM.",
        porQueNo: {
          1: "The Open Group publica TOGAF y ArchiMate, no ATOM.",
          2: "El marco de defensa es DoDAF; ATOM no tiene ese ámbito.",
          3: "ATOM no es una norma ISO."
        }
      },
      {
        tema: "Selección de marco",
        pregunta: "En una matriz de decisión ponderada, ¿dónde está el verdadero valor del método?",
        opciones: [
          "En que obliga a explicitar y discutir los pesos de los criterios",
          "En que el puntaje final elimina la subjetividad de la decisión",
          "En que produce un número que la dirección debe acatar",
          "En que permite comparar alternativas sin conocerlas a fondo"
        ],
        correcta: 0,
        explicacion: "Las calificaciones siguen siendo juicios. Lo que aporta el método es que la discusión se dé sobre los pesos —que es donde debe darse— y quede documentada.",
        porQueNo: {
          1: "La subjetividad se hace explícita, no desaparece: pesos y calificaciones son juicios.",
          2: "Es un insumo para decidir, no un veredicto automático.",
          3: "Calificar sin conocer las alternativas produce números sin sustento."
        }
      },
      {
        tema: "Selección de marco",
        pregunta: "El puntaje del marco ganador cambia de posición al ajustar razonablemente un peso. ¿Qué debe hacer el analista?",
        opciones: [
          "Reportarlo: la decisión no es robusta y la discusión debe subir al comité",
          "Conservar los pesos originales y no mencionar el ejercicio",
          "Elegir el marco que gane en el mayor número de escenarios y omitir el detalle",
          "Descartar la matriz y decidir por experiencia"
        ],
        correcta: 0,
        explicacion: "El análisis de sensibilidad es parte del entregable. Una recomendación que oculta su fragilidad no es una recomendación profesional.",
        porQueNo: {
          1: "Ocultar el hallazgo compromete la credibilidad de todo el análisis.",
          2: "Contar victorias sin explicar de qué dependen esconde la información relevante.",
          3: "La matriz sigue siendo útil: lo que revela es que hay que discutir prioridades."
        }
      },
      {
        tema: "COBIT e ITIL",
        pregunta: "¿Cuál es el cambio estructural principal de ITIL v3 a ITIL 4?",
        opciones: [
          "Se sustituye el ciclo de vida del servicio en cinco etapas por el Service Value System, con la cadena de valor al centro y prácticas en lugar de procesos",
          "Se elimina la gestión de incidentes y de cambios",
          "Se convierte en una norma ISO certificable",
          "Se fusiona con COBIT en un solo marco de gobierno"
        ],
        correcta: 0,
        explicacion: "ITIL 4 responde a un entorno de entrega continua: incorpora Agile, Lean y DevOps, y define 34 prácticas más siete principios guía.",
        porQueNo: {
          1: "Ambas siguen existiendo, ahora como prácticas.",
          2: "La norma certificable de gestión de servicios es ISO/IEC 20000-1, no ITIL.",
          3: "Son marcos distintos con titulares distintos: PeopleCert e ISACA."
        }
      },
      {
        tema: "ITIL 4",
        pregunta: "¿Por qué ITIL 4 habla de «prácticas» en lugar de «procesos»?",
        opciones: [
          "Porque una práctica incluye personas, información, tecnología y socios, no solo el flujo de actividades",
          "Porque es un cambio de nombre sin implicación conceptual",
          "Porque los procesos quedaron prohibidos por la norma ISO",
          "Porque las prácticas son opcionales y los procesos obligatorios"
        ],
        correcta: 0,
        explicacion: "La crítica a v3 era que producía procesos pesados y silos. El concepto de práctica es deliberadamente más amplio que el de proceso.",
        porQueNo: {
          1: "El cambio es conceptual: amplía el alcance de lo que se gestiona.",
          2: "Ninguna norma prohíbe los procesos.",
          3: "La obligatoriedad no es el criterio que los distingue."
        }
      },
      {
        tema: "BRM",
        pregunta: "¿Cuál es la función de un Business Relationship Manager?",
        opciones: [
          "Entender la estrategia del área de negocio, moldear la demanda, priorizar el portafolio y comunicar el valor entregado por TI",
          "Levantar requerimientos y capturarlos en el sistema de tickets",
          "Administrar los contratos con los proveedores de tecnología",
          "Supervisar la mesa de servicio y los tiempos de respuesta"
        ],
        correcta: 0,
        explicacion: "Sin BRM, TI recibe una lista de peticiones inconexas y el negocio la percibe como un proveedor de tickets. El BRM convierte peticiones en demanda alineada a la estrategia.",
        porQueNo: {
          1: "Eso es tomar pedidos; el BRM moldea la demanda, no solo la registra.",
          2: "Esa es la gestión de proveedores.",
          3: "Esa es una función de ITSM y de la operación del servicio."
        }
      },
      {
        tema: "ITSM",
        pregunta: "¿Qué significa gestionar TI «como servicio»?",
        opciones: [
          "Definir un catálogo de servicios con niveles comprometidos, y gestionar incidentes, problemas, cambios y activos alrededor de ellos",
          "Tercerizar la operación de TI a un proveedor externo",
          "Cobrar internamente a las áreas por el uso de la tecnología",
          "Sustituir los sistemas propios por soluciones SaaS"
        ],
        correcta: 0,
        explicacion: "ITSM es un cambio de unidad de gestión: de tecnologías a servicios que el negocio consume y cuyo desempeño se puede comprometer y medir.",
        porQueNo: {
          1: "La tercerización es una decisión de abastecimiento, independiente de ITSM.",
          2: "El cobro interno es una práctica posible, no la definición.",
          3: "El modelo de despliegue no determina si se gestiona como servicio."
        }
      },
      {
        tema: "Estrategia de TI",
        pregunta: "¿Qué distingue una estrategia de TI de un portafolio de proyectos?",
        opciones: [
          "La estrategia define qué capacidades necesita el negocio y cómo se construirán, comprarán o rentarán, con principios y métricas; el portafolio es la lista priorizada que se deriva de ella",
          "Son lo mismo con distinto nombre",
          "La estrategia la define TI y el portafolio el negocio",
          "La estrategia es anual y el portafolio quinquenal"
        ],
        correcta: 0,
        explicacion: "Una lista de proyectos sin principios ni capacidades objetivo es un presupuesto, no una estrategia. La estrategia es lo que permite decir que no a un proyecto.",
        porQueNo: {
          1: "Uno es la dirección; el otro, la ejecución priorizada.",
          2: "Ambos requieren participación conjunta del negocio y de TI.",
          3: "Los horizontes suelen ser al revés, y en todo caso no es lo que los distingue."
        }
      },
      {
        tema: "Arranque de proyectos",
        pregunta: "Antes de aprobar un proyecto tecnológico nuevo, ¿cuál es la pregunta que más dinero ahorra y menos se hace?",
        opciones: [
          "¿Ya existe una capacidad o una aplicación en la empresa que resuelva esto?",
          "¿Qué proveedor ofrece el mejor precio?",
          "¿Cuánto tardará el desarrollo?",
          "¿Quién será el líder técnico del proyecto?"
        ],
        correcta: 0,
        explicacion: "Sin catálogo de aplicaciones ni arquitectura, la respuesta siempre es «no lo sé», y la empresa termina comprando tres veces lo mismo.",
        porQueNo: {
          1: "Es relevante solo después de confirmar que hace falta comprar algo.",
          2: "El plazo importa, pero no evita la duplicidad.",
          3: "Es una decisión de ejecución, posterior a la de invertir."
        }
      },
      {
        tema: "Normas",
        pregunta: "¿Qué ámbito cubre la familia ISO/IEC 33000?",
        opciones: [
          "Evaluación de procesos de software; sucede a ISO/IEC 15504 (SPICE)",
          "Seguridad de la información",
          "Gestión de servicios de TI",
          "Notación para el modelado de procesos de negocio"
        ],
        correcta: 0,
        explicacion: "Evalúa la capacidad de los procesos de software; no es una certificación de empresa como ISO 9001 o ISO/IEC 27001.",
        porQueNo: {
          1: "Esa es ISO/IEC 27001.",
          2: "Esa es ISO/IEC 20000-1.",
          3: "Esa es BPMN / ISO 19510."
        }
      },
      {
        tema: "Herramientas",
        pregunta: "¿Qué problema resuelve una plataforma como SAP LeanIX?",
        opciones: [
          "Mantener vivo el portafolio de arquitectura: qué aplicaciones existen, qué capacidad soportan, qué cuestan, qué tan obsoletas están y cuáles se pueden retirar",
          "Modelar procesos en notación BPMN de forma colaborativa",
          "Gestionar incidentes y cambios de la mesa de servicio",
          "Simular el proceso con variabilidad para comparar escenarios"
        ],
        correcta: 0,
        explicacion: "Es, en esencia, el catálogo de aplicaciones y las matrices de la fase C del ADM convertidos en un repositorio vivo y con dueño.",
        porQueNo: {
          1: "Eso corresponde a SAP Signavio, Bizagi o Camunda.",
          2: "Eso corresponde a ServiceNow o Jira Service Management.",
          3: "Eso corresponde a herramientas de simulación."
        }
      },
      {
        tema: "Process mining",
        pregunta: "¿Por qué el process mining suele ser más confiable que las entrevistas para levantar el AS-IS?",
        opciones: [
          "Porque reconstruye lo que realmente ocurrió a partir de los registros del sistema, con tiempos reales, rutas excepcionales y retrabajos que nadie documentó",
          "Porque es más rápido de ejecutar que una entrevista",
          "Porque no requiere involucrar a las áreas de negocio",
          "Porque elimina la necesidad de modelar el proceso en BPMN"
        ],
        correcta: 0,
        explicacion: "El AS-IS por entrevistas es lo que la gente cree que hace; el de los logs es lo que pasó. Casi siempre son distintos, y la diferencia es material.",
        porQueNo: {
          1: "La velocidad no es lo que lo hace confiable; además requiere preparar los datos.",
          2: "Interpretar los hallazgos exige al negocio: los logs dicen qué pasó, no por qué.",
          3: "El modelo sigue siendo necesario para comunicar y rediseñar."
        }
      },
      {
        tema: "Herramientas",
        pregunta: "«El repositorio de arquitectura lleva dos años sin actualizarse y nadie confía en él.» ¿Cuál es el diagnóstico?",
        opciones: [
          "Falta gobierno: la herramienta amplifica una práctica existente, no la crea. Sin dueño del dato y sin proceso de actualización, se degrada",
          "La herramienta elegida no era la adecuada; hay que migrar a otra",
          "El problema es de licenciamiento insuficiente",
          "Falta capacitación técnica en el uso de la plataforma"
        ],
        correcta: 0,
        explicacion: "Primero el método y el dueño del dato, después la licencia. Un repositorio sin gobierno se convierte en un inventario desactualizado y caro.",
        porQueNo: {
          1: "Migrar reproduce el mismo problema en otra plataforma.",
          2: "El número de licencias no explica la falta de actualización.",
          3: "La capacitación ayuda, pero sin responsable ni proceso el dato igual se degrada."
        }
      },
      {
        tema: "Tecnologías emergentes",
        pregunta: "¿Cuál es el requisito previo común a IoT, IA y machine learning para generar valor?",
        opciones: [
          "Una arquitectura de datos sólida: datos íntegros, con dueño y con significado acordado",
          "Migrar previamente toda la infraestructura a la nube",
          "Contar con licenciamiento SAP",
          "Haber certificado a la organización en ISO/IEC 27001"
        ],
        correcta: 0,
        explicacion: "Las tres dependen del dato. La IA amplifica la calidad del dato en ambos sentidos: un modelo entrenado con datos inconsistentes produce decisiones inconsistentes a escala.",
        porQueNo: {
          1: "La nube ayuda, pero no es condición necesaria ni suficiente.",
          2: "Ningún proveedor específico es requisito.",
          3: "La certificación gestiona seguridad, no calidad del dato."
        }
      },
      {
        tema: "Metodologías de desarrollo",
        pregunta: "Se va a implantar un ERP de mercado en lugar de construir un sistema. ¿Dónde se concentra el esfuerzo?",
        opciones: [
          "En parametrizar el producto y en cambiar el proceso de la empresa para ajustarse a él",
          "En programar los módulos faltantes desde cero",
          "En el diseño de la base de datos",
          "En la selección del lenguaje de programación"
        ],
        correcta: 0,
        explicacion: "En una implantación COTS el esfuerzo se mueve de programar a configurar y, sobre todo, a gestionar el cambio organizacional. Personalizar en exceso anula la ventaja del paquete.",
        porQueNo: {
          1: "Programar mucho sobre un ERP encarece cada actualización futura.",
          2: "El modelo de datos viene dado por el producto.",
          3: "Es una decisión que el producto ya tomó."
        }
      },
      {
        tema: "Infraestructura",
        pregunta: "¿Qué significan RTO y RPO?",
        opciones: [
          "RTO: cuánto puede tardar el restablecimiento del servicio. RPO: cuánta información se puede perder",
          "RTO: retorno sobre la operación. RPO: retorno sobre el portafolio",
          "RTO: tiempo de respuesta objetivo. RPO: prioridad de resolución objetivo",
          "Son dos niveles de acuerdo de servicio con proveedores de nube"
        ],
        correcta: 0,
        explicacion: "Son los dos parámetros de continuidad. Definen cuánta redundancia y qué frecuencia de respaldo se requieren, y por tanto cuánto cuesta la arquitectura.",
        porQueNo: {
          1: "No son indicadores financieros.",
          2: "El tiempo de respuesta y la prioridad son parámetros de mesa de servicio, no de continuidad.",
          3: "Aplican a cualquier arquitectura, propia o en nube."
        }
      },
      {
        tema: "Portafolio",
        pregunta: "¿Para qué sirve clasificar las aplicaciones en sistemas de registro, de diferenciación y de innovación?",
        opciones: [
          "Porque cada categoría admite un ritmo de cambio, un nivel de riesgo y una metodología distintos",
          "Para calcular el costo total de licenciamiento",
          "Para determinar qué proveedor atiende cada sistema",
          "Para asignar los sistemas a los cuatro dominios de TOGAF"
        ],
        correcta: 0,
        explicacion: "Tratar un ERP como un experimento —o un experimento con el gobierno de un ERP— es un error de gobierno con consecuencias caras en ambos sentidos.",
        porQueNo: {
          1: "El costo se documenta en el portafolio, pero no es el criterio de esta clasificación.",
          2: "El proveedor es un dato del catálogo, no una categoría de gobierno.",
          3: "Todas las aplicaciones pertenecen al dominio de aplicaciones."
        }
      },
      {
        tema: "SCM",
        pregunta: "¿Por qué la cadena de suministro es el ejemplo por excelencia de proceso cross-functional?",
        opciones: [
          "Porque atraviesa planeación, compras, producción, almacén, transporte y servicio, y el cliente percibe una sola entrega",
          "Porque es el proceso más costoso de cualquier empresa",
          "Porque siempre se opera con un solo sistema integrado",
          "Porque está regulado por una norma ISO específica"
        ],
        correcta: 0,
        explicacion: "Cada área puede cumplir su indicador y aun así el pedido llega tarde: eficiencia local sin efectividad integral.",
        porQueNo: {
          1: "El costo varía por industria y no es lo que la hace cross-functional.",
          2: "Es justo lo contrario: suele involucrar ERP, WMS, TMS y sistemas de proveedores.",
          3: "Hay normas aplicables, pero no es eso lo que define el carácter cross-functional."
        }
      }
    ],

    escenarios: [
      {
        escenario: "Una dependencia gubernamental debe intercambiar arquitecturas con tres proveedores distintos y necesita que los productos sean comparables entre sí.",
        pregunta: "¿Qué marco aporta más en esta situación?",
        opciones: ["DoDAF", "TOGAF", "ITIL", "Lean"],
        correcta: 0,
        explicacion: "DoDAF normaliza las vistas y sus productos precisamente para soportar interoperabilidad y adquisiciones entre organizaciones distintas.",
        porQueNo: { 1: "TOGAF da método, pero sugiere artefactos en lugar de normarlos.", 2: "ITIL gestiona servicios de TI.", 3: "Lean mejora procesos." }
      },
      {
        escenario: "Una consultora necesita que sus equipos hablen el mismo lenguaje al entrar a proyectos de clientes muy distintos, distinguiendo con claridad qué se necesita de con qué producto se implementará.",
        pregunta: "¿Qué marco encaja mejor?",
        opciones: ["IAF", "DoDAF", "COBIT", "BPMN"],
        correcta: 0,
        explicacion: "IAF nació en la consultoría y su matriz separa explícitamente los niveles lógico y físico, que es justo esa distinción.",
        porQueNo: { 1: "DoDAF está orientado a defensa y adquisiciones.", 2: "COBIT gobierna TI.", 3: "BPMN solo modela procesos." }
      },
      {
        escenario: "El comité seleccionó TOGAF, pero su calificación más baja fue curva de aprendizaje: el equipo no tiene experiencia previa en arquitectura.",
        pregunta: "¿Qué debe incluir la recomendación?",
        opciones: [
          "Un plan de mitigación: adoptar el ADM por iteraciones, alcance acotado y formar primero a un núcleo pequeño",
          "Cambiar la elección al marco con mejor curva de aprendizaje",
          "Contratar de inmediato a un equipo externo certificado y dejarles todo",
          "Omitir esa calificación para no debilitar la propuesta"
        ],
        correcta: 0,
        explicacion: "Una recomendación completa no oculta la debilidad del ganador: propone cómo neutralizarla.",
        porQueNo: {
          1: "El criterio de mayor peso era el ajuste al objetivo; cambiar por comodidad sacrifica el propósito.",
          2: "Sin transferencia de conocimiento, la capacidad no queda en la organización.",
          3: "Ocultar información compromete todo el análisis."
        }
      },
      {
        escenario: "Los usuarios reportan que el mismo error de facturación se repite cada mes; se resuelve el incidente pero vuelve a ocurrir.",
        pregunta: "¿Qué práctica corresponde activar?",
        opciones: ["Gestión de problemas (ITIL)", "Gestión de incidentes (ITIL)", "Matriz de decisión ponderada", "Process mining sobre el catálogo de aplicaciones"],
        correcta: 0,
        explicacion: "La gestión de incidentes restablece el servicio; la gestión de problemas busca y elimina la causa raíz de la recurrencia.",
        porQueNo: {
          1: "Es lo que ya se está haciendo, y por eso el error regresa.",
          2: "Es un método de selección de alternativas.",
          3: "Podría ayudar al diagnóstico, pero la práctica que corresponde activar es la de problemas."
        }
      },
      {
        escenario: "Auditoría pregunta quién es responsable de cada decisión de TI, qué controles existen y con qué métricas se evalúa el desempeño del área.",
        pregunta: "¿Qué marco responde a esas preguntas?",
        opciones: ["COBIT", "ITIL", "IAF", "ISO 19510"],
        correcta: 0,
        explicacion: "COBIT es gobierno: responsabilidad, objetivos de control, riesgo, métricas y alineación con los objetivos de negocio.",
        porQueNo: { 1: "ITIL responde cómo se opera el servicio, no quién responde por él ante el consejo.", 2: "IAF es un marco de arquitectura.", 3: "ISO 19510 es la notación BPMN." }
      },
      {
        escenario: "El área de negocio manda solicitudes sueltas a TI durante todo el año, sin prioridad ni relación con la estrategia, y percibe a TI como un proveedor de tickets.",
        pregunta: "¿Qué función falta en la organización?",
        opciones: ["Business Relationship Management (BRM)", "Mesa de servicio", "Gestión de proveedores", "Oficina de proyectos"],
        correcta: 0,
        explicacion: "El BRM entiende la estrategia del área, moldea la demanda, prioriza el portafolio y comunica el valor entregado.",
        porQueNo: {
          1: "La mesa de servicio atiende lo que llega; no moldea la demanda.",
          2: "La gestión de proveedores mira hacia afuera, no hacia el negocio interno.",
          3: "La PMO ejecuta el portafolio ya priorizado."
        }
      },
      {
        escenario: "El corporativo quiere saber cuántas aplicaciones tiene, cuáles se traslapan, cuánto cuestan y cuáles conviene retirar tras adquirir dos empresas.",
        pregunta: "¿Qué categoría de herramienta corresponde?",
        opciones: [
          "Gestión del portafolio de arquitectura (EAM), como SAP LeanIX",
          "Gestión de servicios de TI (ITSM), como ServiceNow",
          "Modelado de procesos, como Signavio",
          "Simulación de procesos, como Simul8"
        ],
        correcta: 0,
        explicacion: "Racionalización de portafolio es el caso de uso central de una plataforma EAM: catálogo, capacidades, dependencias, costos y ciclo de vida.",
        porQueNo: {
          1: "ITSM gestiona la operación del servicio, no el portafolio de aplicaciones.",
          2: "Signavio modela procesos; el portafolio no es su objeto principal.",
          3: "La simulación evalúa desempeño de un proceso, no redundancia de sistemas."
        }
      },
      {
        escenario: "La dirección pide «un proyecto de inteligencia artificial para este año» sin haber definido qué problema resolverá.",
        pregunta: "¿Cuál es la respuesta correcta desde arquitectura?",
        opciones: [
          "Reconducir la conversación al problema de negocio y verificar la arquitectura de datos antes de comprometer una tecnología",
          "Elegir el caso de uso de IA más común en la industria y proponerlo",
          "Contratar la plataforma de IA y buscar aplicaciones después",
          "Rechazar la petición porque la IA no pertenece a ningún dominio de arquitectura"
        ],
        correcta: 0,
        explicacion: "La pregunta correcta no es «¿dónde usamos IA?» sino «¿cuál es el problema y qué lo resuelve mejor?». Y sin datos íntegros, con dueño y con significado acordado, ningún modelo produce valor.",
        porQueNo: {
          1: "Copiar un caso de uso ajeno no garantiza que resuelva un problema propio.",
          2: "Es exactamente el patrón que la arquitectura empresarial existe para evitar.",
          3: "La IA sí pertenece a los dominios de aplicaciones y tecnología; el problema es la ausencia de necesidad."
        }
      }
    ],

    clasificar: [
      {
        consigna: "Clasifica cada característica según el marco al que corresponde.",
        categorias: ["TOGAF", "Zachman", "DoDAF", "IAF"],
        items: [
          { texto: "El ADM: ciclo de fases A–H", categoria: "TOGAF" },
          { texto: "Gestión de requerimientos al centro", categoria: "TOGAF" },
          { texto: "Ontología de seis preguntas y varias perspectivas", categoria: "Zachman" },
          { texto: "Verificar que no falten vistas", categoria: "Zachman" },
          { texto: "Ocho viewpoints normados (AV, CV, OV, SV…)", categoria: "DoDAF" },
          { texto: "Orientado a interoperabilidad y adquisiciones", categoria: "DoDAF" },
          { texto: "Matriz de 4 áreas × 4 niveles de abstracción", categoria: "IAF" },
          { texto: "Niveles contextual, conceptual, lógico y físico", categoria: "IAF" }
        ],
        explicacion: "TOGAF aporta método; Zachman, taxonomía; DoDAF, vistas normadas para interoperar; IAF, la matriz dominio × nivel de abstracción."
      },
      {
        consigna: "Cada pregunta pertenece a un marco distinto. Clasifícalas.",
        categorias: ["COBIT (gobierno)", "ITIL (servicio)", "TOGAF (arquitectura)", "ISO (norma certificable)"],
        items: [
          { texto: "¿Quién es accountable de esta decisión?", categoria: "COBIT (gobierno)" },
          { texto: "¿El riesgo es aceptable y está medido?", categoria: "COBIT (gobierno)" },
          { texto: "¿Cómo restauramos el servicio caído?", categoria: "ITIL (servicio)" },
          { texto: "¿Este incidente es un problema recurrente?", categoria: "ITIL (servicio)" },
          { texto: "¿Cómo debe evolucionar el ecosistema de aplicaciones?", categoria: "TOGAF (arquitectura)" },
          { texto: "¿Qué brechas hay entre el AS-IS y el TO-BE?", categoria: "TOGAF (arquitectura)" },
          { texto: "¿Podemos certificar nuestro SGSI ante un tercero?", categoria: "ISO (norma certificable)" },
          { texto: "¿Cumplimos los requisitos auditables de calidad?", categoria: "ISO (norma certificable)" }
        ],
        explicacion: "Los cuatro coexisten porque responden preguntas distintas. La respuesta profesional casi nunca es «usamos uno solo»."
      },
      {
        consigna: "Clasifica cada herramienta según la categoría a la que pertenece.",
        categorias: ["Portafolio de arquitectura (EAM)", "Modelado y minería de procesos", "Gestión de servicios (ITSM)", "Diagramación libre"],
        items: [
          { texto: "SAP LeanIX", categoria: "Portafolio de arquitectura (EAM)" },
          { texto: "Ardoq / Bizzdesign", categoria: "Portafolio de arquitectura (EAM)" },
          { texto: "SAP Signavio", categoria: "Modelado y minería de procesos" },
          { texto: "Celonis", categoria: "Modelado y minería de procesos" },
          { texto: "Bizagi / Camunda", categoria: "Modelado y minería de procesos" },
          { texto: "ServiceNow", categoria: "Gestión de servicios (ITSM)" },
          { texto: "Jira Service Management", categoria: "Gestión de servicios (ITSM)" },
          { texto: "draw.io / Visio", categoria: "Diagramación libre" }
        ],
        explicacion: "La diagramación libre produce imágenes; las plataformas EAM y de procesos producen un repositorio con relaciones consultables. Es la diferencia entre un dibujo y un modelo."
      },
      {
        consigna: "Clasifica cada elemento según la función del departamento de TI a la que pertenece.",
        categorias: ["Estrategia y arquitectura", "Operación e infraestructura", "Seguridad y cumplimiento", "Relación con el negocio"],
        items: [
          { texto: "Definir principios y arquitecturas objetivo", categoria: "Estrategia y arquitectura" },
          { texto: "Construir el roadmap tecnológico", categoria: "Estrategia y arquitectura" },
          { texto: "Administrar servidores, nube y redes", categoria: "Operación e infraestructura" },
          { texto: "Atender incidentes en la mesa de servicio", categoria: "Operación e infraestructura" },
          { texto: "Monitoreo y respuesta ante ciberamenazas", categoria: "Seguridad y cumplimiento" },
          { texto: "Continuidad del negocio y auditoría", categoria: "Seguridad y cumplimiento" },
          { texto: "Moldear la demanda y priorizar el portafolio", categoria: "Relación con el negocio" },
          { texto: "Comunicar el valor entregado a las áreas", categoria: "Relación con el negocio" }
        ],
        explicacion: "Antes de asesorar a una empresa hay que conocer cómo opera el área que le da servicio. Las cuatro funciones existen aunque en empresas pequeñas las cubra la misma persona."
      }
    ],

    ordenar: [
      {
        consigna: "Ordena los pasos para seleccionar un marco de referencia con sustento.",
        pasos: [
          "Definir qué pregunta necesita responder la organización",
          "Identificar los marcos candidatos y descartar los que no aplican",
          "Acordar los criterios de evaluación con los interesados",
          "Asignar pesos a los criterios (deben sumar 100 %)",
          "Calificar cada alternativa contra cada criterio",
          "Calcular el puntaje ponderado de cada opción",
          "Hacer análisis de sensibilidad sobre los pesos críticos",
          "Recomendar, con plan de mitigación para las debilidades del ganador"
        ],
        explicacion: "Acordar los criterios antes de calificar evita el sesgo de elegir primero y justificar después, que es el vicio más común de estas matrices."
      },
      {
        consigna: "Ordena las etapas para arrancar un proyecto tecnológico nuevo.",
        pasos: [
          "Necesidad de negocio enunciada con magnitud",
          "Caso de negocio preliminar",
          "Análisis de factibilidad técnica, operativa y económica",
          "Revisión de arquitectura: ¿ya existe la capacidad?",
          "Priorización en el portafolio",
          "Autorización, patrocinador y presupuesto",
          "Ejecución bajo gobierno de arquitectura",
          "Puesta en operación y medición del beneficio"
        ],
        explicacion: "La revisión de arquitectura va antes de la priorización: no tiene sentido priorizar un proyecto que duplica una capacidad existente."
      },
      {
        consigna: "Ordena los niveles de abstracción de IAF, del más general al más concreto.",
        pasos: ["Contextual · ¿Por qué?", "Conceptual · ¿Qué?", "Lógico · ¿Cómo?", "Físico · ¿Con qué?"],
        explicacion: "Cada nivel se responde antes de bajar al siguiente. Saltar del contextual al físico es elegir producto sin haber definido la necesidad."
      },
      {
        consigna: "Ordena la pirámide de ATOM, de la cúspide a la base.",
        pasos: [
          "Estrategia y dirección corporativa",
          "Modelos de negocio y procesos que crean valor",
          "Alineación de TI",
          "Artefactos de información: sistemas y bases de datos",
          "Infraestructura de TI"
        ],
        explicacion: "Es la misma lógica descendente de todos los marcos serios: la tecnología está al final porque responde a lo de arriba."
      }
    ],

    flashcards: [
      { frente: "DoDAF", reverso: "Marco del Departamento de Defensa de EE. UU. Normaliza ocho viewpoints para soportar interoperabilidad, adquisiciones y gestión de portafolio." },
      { frente: "Los ocho viewpoints de DoDAF", reverso: "AV (All) · CV (Capability) · DIV (Data & Information) · OV (Operational) · PV (Project) · SvcV (Services) · StdV (Standards) · SV (Systems)." },
      { frente: "IAF", reverso: "Integrated Architecture Framework, de Capgemini (1996). Matriz de 4 áreas —negocio, información, sistemas, infraestructura— por 4 niveles —contextual, conceptual, lógico, físico—. Transversales: gobernanza, seguridad y sostenibilidad." },
      { frente: "Nivel lógico vs. físico (IAF)", reverso: "El lógico dice qué componente se necesita; el físico, con qué producto se implementa. Equivale a ABB vs. SBB en TOGAF." },
      { frente: "ATOM", reverso: "Arquitectura, Tecnología, Organización y Management, en pirámide de cinco niveles de la estrategia a la infraestructura. Es el menos estandarizado: declara siempre tu fuente." },
      { frente: "Matriz de decisión ponderada", reverso: "Σ (peso × calificación). Los pesos suman 100 %. Su valor está en obligar a explicitar los pesos, no en el número final." },
      { frente: "Análisis de sensibilidad", reverso: "Recalcular con pesos alternativos razonables. Si el ganador cambia, la decisión no es robusta y hay que reportarlo." },
      { frente: "ITIL 3 vs. ITIL 4", reverso: "v3: ciclo de vida en cinco etapas y 26 procesos. ITIL 4: Service Value System con la cadena de valor al centro, 34 prácticas, siete principios guía, e integración con Agile, Lean y DevOps." },
      { frente: "Los 7 principios guía de ITIL 4", reverso: "Enfocarse en el valor · Empezar donde se está · Progresar iterativamente · Colaborar y dar visibilidad · Pensar holísticamente · Mantenerlo simple · Optimizar y automatizar." },
      { frente: "ITSM", reverso: "Gestionar TI como servicio al negocio: catálogo, SLA, mesa de ayuda, incidentes, problemas, cambios, configuración y activos." },
      { frente: "BRM", reverso: "Business Relationship Management: conecta TI con el negocio. Entiende la estrategia del área, moldea la demanda, prioriza el portafolio y comunica el valor. Sin él, TI es un proveedor de tickets." },
      { frente: "Incidente vs. problema (ITIL)", reverso: "El incidente interrumpe el servicio y se resuelve restableciéndolo. El problema es la causa raíz de incidentes recurrentes y se resuelve eliminándola." },
      { frente: "Estrategia de TI", reverso: "Qué capacidades tecnológicas necesita el negocio y cómo se construirán, comprarán o rentarán. Incluye principios, modelo operativo, portafolio priorizado y métricas. No es una lista de compras." },
      { frente: "La pregunta que más dinero ahorra", reverso: "«¿Ya existe una capacidad o aplicación que resuelva esto?» Sin catálogo ni arquitectura la respuesta es siempre «no lo sé», y la empresa compra tres veces lo mismo." },
      { frente: "ISO/IEC 33000", reverso: "Evaluación de procesos de software; sucede a ISO/IEC 15504 (SPICE). Evalúa capacidad de proceso, no certifica a la empresa." },
      { frente: "SAP LeanIX", reverso: "Plataforma EAM: portafolio de aplicaciones, capacidades, dependencias, costos y ciclo de vida. El catálogo y las matrices de la fase C del ADM, vivos." },
      { frente: "SAP Signavio", reverso: "Plataforma de procesos: modelado BPMN colaborativo, repositorio y process mining." },
      { frente: "ServiceNow", reverso: "Plataforma de ITSM y flujos de trabajo sobre una CMDB; orquesta procesos de TI y de otras áreas." },
      { frente: "Process mining", reverso: "Reconstruye el proceso real desde los logs del sistema. El AS-IS por entrevistas es lo que la gente cree que hace; el de los logs es lo que pasó." },
      { frente: "COTS", reverso: "Producto de mercado que se configura en lugar de construirse. El esfuerzo se mueve de programar a parametrizar y a cambiar el proceso. Personalizar en exceso anula la ventaja." },
      { frente: "Sistemas de registro / diferenciación / innovación", reverso: "Ritmos de cambio y tolerancia al riesgo distintos: el ERP no se gobierna como un experimento, ni el experimento como un ERP." },
      { frente: "RTO / RPO", reverso: "Recovery Time Objective: cuánto puede tardar el restablecimiento. Recovery Point Objective: cuánta información se puede perder." },
      { frente: "Requisito previo de IA, IoT y ML", reverso: "Una arquitectura de datos sólida. La IA amplifica la calidad del dato en ambos sentidos." },
      { frente: "SCM", reverso: "Supply Chain Management: demanda, abastecimiento, producción, almacén, transporte y devoluciones. El ejemplo por excelencia de proceso cross-functional." },
      { frente: "Marco, norma y ley", reverso: "El marco orienta y da método. La norma puede establecer requisitos certificables. La ley obliga. La obligatoriedad nunca viene del prestigio del marco." }
    ]
  }
});
