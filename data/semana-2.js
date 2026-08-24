/* ============================================================
   SEMANA 2 — De la estrategia al artefacto
   3 sesiones de 2 horas (martes a jueves)
   Caso integrador de la semana: alta de proveedores (72 h → 8 h)
   ============================================================ */

EA.registrarSemana({
  id: 2,
  estado: "publicada",
  titulo: "Estrategia, marcos de gobierno y artefactos",
  subtitulo: "De la necesidad de negocio al artefacto de arquitectura, con evidencia cuantitativa.",
  sesiones: 3,

  objetivos: [
    "Explicar por qué un proyecto de TI no comienza seleccionando tecnología.",
    "Distinguir automatización, digitalización y transformación digital sobre un mismo proceso.",
    "Reconocer los tipos de aplicaciones empresariales y el problema del ecosistema fragmentado.",
    "Elegir el marco, estándar o metodología adecuado según el problema: TOGAF, Zachman, COBIT, ITIL, ISO, BPMN, Lean/Six Sigma.",
    "Construir artefactos de arquitectura: SIPOC, process map, application landscape, matriz proceso-aplicación, flujo de datos, TO-BE, gap y roadmap.",
    "Distinguir deliverable de artefacto y view de viewpoint.",
    "Sustentar la mejora con datos duros: lead time, processing time, costo por transacción y tasa de error."
  ],

  dias: [

    /* ---------- MARTES ---------- */
    {
      id: "martes",
      nombre: "Martes · Sesión 1",
      tema: "De la estrategia al proyecto tecnológico",
      proposito: "Entender que un proyecto de TI no comienza seleccionando tecnología, y aprender a levantar los datos duros que demuestran dónde está realmente el problema.",
      bloques: [
        {
          tipo: "clave",
          titulo: "La secuencia correcta",
          cuerpo: "<p>Necesidad del negocio → Proceso → Problema u oportunidad → Datos → Capacidades → Requerimientos → Arquitectura → Tecnología.</p>"
                + "<p><b>Y no:</b> «encontré una herramienta de IA, ¿dónde la podemos usar?».</p>"
        },
        {
          tipo: "tabla",
          titulo: "Del objetivo estratégico a la tecnología",
          encabezados: ["Nivel", "Ejemplo"],
          filas: [
            ["Objetivo estratégico", "Reducir el tiempo de entrega al cliente"],
            ["KPI", "Lead time"],
            ["Meta", "5 días → 2 días"],
            ["Proceso afectado", "Order-to-Cash"],
            ["Problema", "Captura manual y cadena de aprobaciones"],
            ["Capacidad requerida", "Procesamiento automático de pedidos"],
            ["Aplicaciones", "ERP + WMS + portal de clientes"],
            ["Datos", "Cliente, pedido, inventario"],
            ["Tecnología", "APIs, workflow, nube"]
          ]
        },
        {
          tipo: "nota",
          titulo: "Idea central",
          cuerpo: "<p>La tecnología es <b>consecuencia</b> de una decisión de negocio, no el punto de partida.</p>"
        },
        {
          tipo: "texto",
          titulo: "Un mismo caso, tres niveles: solicitud de vacaciones",
          cuerpo: "<p><b>Situación original.</b> Empleado llena formato en papel → firma el jefe → RH captura → archiva.</p>"
                + "<p><b>Digitalización.</b> El formato se vuelve PDF. Ya no hay papel, pero el flujo es idéntico: empleado llena PDF → manda correo → jefe firma → RH captura.</p>"
                + "<p><b>Automatización.</b> El empleado captura la solicitud, el sistema consulta el saldo, envía la aprobación y actualiza automáticamente. Se elimina trabajo manual.</p>"
                + "<p><b>Transformación digital.</b> Se cuestiona el proceso completo: ¿por qué debe intervenir RH? El empleado solicita desde una app, el sistema conoce saldo, calendario, cobertura del equipo y políticas, y autoriza automáticamente determinados casos.</p>"
        },
        {
          tipo: "nota",
          titulo: "Pregunta para el grupo",
          cuerpo: "<p>Si reemplazo un Excel por una pantalla web pero mantengo exactamente el mismo proceso, ¿transformé el negocio? <b>No necesariamente.</b></p>"
        },
        {
          tipo: "diagrama",
          titulo: "Ecosistema de aplicaciones empresariales",
          cuerpo:
"                         EMPRESA\n" +
" Ventas        Operación       Finanzas       Personas\n" +
"   |               |              |              |\n" +
" CRM             MES             ERP            HCM\n" +
"   |               |              |              |\n" +
"   +-------------- ERP / Integración ------------+\n" +
"                       |\n" +
"                  Data Platform\n" +
"                       |\n" +
"                    BI / AI"
        },
        {
          tipo: "defs",
          titulo: "Tipos de aplicaciones empresariales",
          items: [
            { termino: "ERP", definicion: "Enterprise Resource Planning: recursos y transacciones centrales." },
            { termino: "CRM", definicion: "Customer Relationship Management: clientes y ventas." },
            { termino: "HCM / HRM", definicion: "Gestión del capital humano y personas." },
            { termino: "SCM", definicion: "Supply Chain Management: cadena de suministro." },
            { termino: "MES", definicion: "Manufacturing Execution System: ejecución de manufactura en planta." },
            { termino: "WMS", definicion: "Warehouse Management System: almacenes." },
            { termino: "PLM", definicion: "Product Lifecycle Management: ciclo de vida del producto." },
            { termino: "ECM / DMS", definicion: "Gestión de contenido y documentos." },
            { termino: "BI / Analytics", definicion: "Análisis de información y tableros." },
            { termino: "BPM / Workflow", definicion: "Orquestación y automatización de procesos." },
            { termino: "ITSM", definicion: "IT Service Management: gestión de servicios de TI." }
          ]
        },
        {
          tipo: "clave",
          titulo: "El problema «tutti frutti»",
          cuerpo: "<p>Una empresa grande no tiene «un sistema». Tiene un <b>ecosistema de aplicaciones</b>, y de ahí nacen la fragmentación, la duplicidad y la falta de trazabilidad.</p>"
        },
        {
          tipo: "defs",
          titulo: "Clasificación de procesos",
          items: [
            { termino: "Proceso", definicion: "Conjunto de actividades que transforma entradas en salidas que generan valor." },
            { termino: "Estratégicos", definicion: "Definen rumbo, políticas y objetivos." },
            { termino: "Core u operativos", definicion: "Producen el valor que percibe el cliente." },
            { termino: "De soporte", definicion: "Habilitan a los anteriores: RH, TI, finanzas, legal." }
          ]
        },
        {
          tipo: "flujo",
          titulo: "SIPOC",
          pasos: ["Supplier", "Input", "Process", "Output", "Customer"]
        },
        {
          tipo: "flujo",
          titulo: "Ejemplo: proceso de compras",
          pasos: ["Usuario", "Solicitud", "Aprobación", "Cotización", "Orden de compra", "Recepción", "Factura", "Pago"]
        },
        {
          tipo: "tabla",
          titulo: "Datos duros del proceso: dónde está el problema real",
          encabezados: ["Actividad", "Proceso (trabajo real)", "Espera", "Responsable"],
          filas: [
            ["Crear solicitud", "10 min", "—", "Usuario"],
            ["Aprobación", "2 min", "18 h", "Gerente"],
            ["Crear orden de compra", "8 min", "4 h", "Compras"],
            ["Enviar a proveedor", "2 min", "1 h", "Compras"],
            ["<b>Total</b>", "<b>22 min</b>", "<b>23 h</b>", "—"]
          ]
        },
        {
          tipo: "clave",
          titulo: "La lectura correcta",
          cuerpo: "<p>Tiempo trabajando realmente: <b>22 minutos</b>. Lead time: <b>23 h 22 min</b>.</p>"
                + "<p>El problema no está en acelerar los 22 minutos, sino en las <b>23 horas de espera</b>. Ahí entra Lean.</p>"
        },
        {
          tipo: "defs",
          titulo: "Lean, Six Sigma y Kaizen",
          items: [
            { termino: "Lean", definicion: "Eliminar desperdicio: espera, retrabajo, movimiento, sobreproceso, inventario, transporte, defectos." },
            { termino: "Six Sigma", definicion: "Reducir variación y defectos mediante análisis estadístico." },
            { termino: "Kaizen", definicion: "Mejora continua incremental, con participación de quienes ejecutan el proceso." }
          ]
        },
        {
          tipo: "flujo",
          titulo: "DMAIC",
          pasos: ["Define", "Measure", "Analyze", "Improve", "Control"]
        },
        {
          tipo: "nota",
          titulo: "Actividad del martes",
          cuerpo: "<p>Una empresa tarda 72 horas en dar de alta un proveedor. Intervienen Compras, Finanzas, Legal y TI. El proceso usa Excel, correo, ERP y documentos PDF.</p>"
                + "<p>En equipos: objetivo → proceso → problemas → KPI → posibles mejoras → tecnología que podría intervenir. <b>Todavía no pueden escoger producto</b>: eso los obliga a pensar como arquitectos.</p>"
        }
      ]
    },

    /* ---------- MIÉRCOLES ---------- */
    {
      id: "miercoles",
      nombre: "Miércoles · Sesión 2",
      tema: "Marcos, estándares y gobierno",
      proposito: "Resolver una confusión muy frecuente: no todo es un «framework» para lo mismo. Cada uno responde a una pregunta distinta y pueden coexistir.",
      bloques: [
        {
          tipo: "tabla",
          titulo: "Cada marco responde a una pregunta distinta",
          encabezados: ["Marco o estándar", "Pregunta principal que responde"],
          filas: [
            ["TOGAF", "¿Cómo diseño y hago evolucionar la arquitectura empresarial?"],
            ["Zachman", "¿Cómo clasifico y describo la empresa desde distintas perspectivas?"],
            ["COBIT", "¿Cómo gobierno y controlo TI?"],
            ["ITIL", "¿Cómo gestiono los servicios de TI?"],
            ["ISO/IEC 27001", "¿Cómo gestiono la seguridad de la información?"],
            ["ISO/IEC 20000-1", "¿Cómo gestiono formalmente los servicios de TI?"],
            ["ISO 9001", "¿Cómo gestiono la calidad?"],
            ["BPMN", "¿Cómo modelo un proceso?"],
            ["Lean / Six Sigma", "¿Cómo mejoro un proceso?"]
          ]
        },
        {
          tipo: "clave",
          titulo: "No se elige uno y se descartan los demás",
          cuerpo: "<p>Pueden coexistir porque resuelven problemas diferentes. Una empresa con varios problemas simultáneos usará varios marcos de manera complementaria.</p>"
        },
        {
          tipo: "texto",
          titulo: "TOGAF: por qué existe la arquitectura empresarial",
          cuerpo: "<p><b>Problema:</b> «quiero implementar e-commerce». El alumno normalmente piensa en la aplicación: Shopify.</p>"
                + "<p>El arquitecto pregunta por los cuatro dominios:</p>"
                + "<ul><li><b>Business:</b> ¿cómo cambia el proceso Order-to-Cash?</li>"
                + "<li><b>Data:</b> ¿dónde viven cliente, producto, precio e inventario?</li>"
                + "<li><b>Application:</b> ¿el e-commerce habla con ERP, CRM, WMS?</li>"
                + "<li><b>Technology:</b> ¿nube, API gateway, identidad, red?</li></ul>"
                + "<p>Esa sola discusión explica por qué existe la Arquitectura Empresarial.</p>"
        },
        {
          tipo: "flujo",
          titulo: "Lógica del ADM (sin memorizar todavía)",
          pasos: ["Vision", "Business", "Information Systems (Data + Applications)", "Technology", "Opportunities & Solutions", "Migration Planning", "Implementation Governance", "Change Management"]
        },
        {
          tipo: "texto",
          titulo: "Zachman: la matriz",
          cuerpo: "<p>Seis preguntas: <b>What</b> (datos), <b>How</b> (función), <b>Where</b> (red), <b>Who</b> (personas), <b>When</b> (tiempo), <b>Why</b> (motivación), observadas desde diferentes perspectivas.</p>"
                + "<p><b>TOGAF</b> se parece más a un <i>método</i> para desarrollar arquitectura. <b>Zachman</b> se parece más a una <i>taxonomía</i> para asegurarnos de que estamos describiendo todos los aspectos y perspectivas de la organización.</p>"
        },
        {
          tipo: "texto",
          titulo: "COBIT frente a ITIL",
          cuerpo: "<p><b>COBIT — gobierno.</b> ¿Estamos haciendo las cosas correctas, controlando riesgos y generando valor?</p>"
                + "<p><b>ITIL — gestión del servicio.</b> ¿Cómo diseñamos, entregamos, soportamos y mejoramos el servicio?</p>"
        },
        {
          tipo: "tabla",
          titulo: "Ejemplo: se cae SAP",
          encabezados: ["Con lente ITIL", "Con lente COBIT"],
          filas: [
            ["¿Cómo registramos el incidente?", "¿Quién es accountable?"],
            ["¿Cómo lo priorizamos?", "¿Tenemos controles definidos?"],
            ["¿Cómo restauramos el servicio?", "¿El riesgo es aceptable?"],
            ["¿Es un problema recurrente?", "¿Tenemos métricas de desempeño?"],
            ["¿Requiere un change?", "¿Está alineado con los objetivos de negocio?"]
          ]
        },
        {
          tipo: "clave",
          titulo: "ISO frente a los marcos",
          cuerpo: "<p><b>ISO puede establecer requisitos certificables.</b> TOGAF, COBIT o ITIL funcionan generalmente como marcos, metodologías o buenas prácticas con propósitos distintos. No se trata de memorizar números de norma, sino de saber qué problema resuelve cada uno.</p>"
        },
        {
          tipo: "tabla",
          titulo: "Actividad del miércoles: ¿qué usarías?",
          encabezados: ["Caso", "Respuesta"],
          filas: [
            ["A · Rediseñar la arquitectura global después de adquirir tres empresas", "TOGAF"],
            ["B · Una auditoría detectó controles de TI deficientes", "COBIT"],
            ["C · Los usuarios se quejan de incidentes que tardan días", "ITIL"],
            ["D · Se necesita implementar un SGSI certificable", "ISO/IEC 27001"],
            ["E · Representar gráficamente el proceso Order-to-Cash", "BPMN"],
            ["F · El proceso tiene demasiado tiempo de espera y retrabajo", "Lean / Six Sigma"]
          ]
        },
        {
          tipo: "nota",
          titulo: "La pregunta interesante",
          cuerpo: "<p>¿Qué pasa si nuestra empresa tiene todos esos problemas simultáneamente? <b>Probablemente utilizará varios marcos de manera complementaria.</b></p>"
        }
      ]
    },

    /* ---------- JUEVES ---------- */
    {
      id: "jueves",
      nombre: "Jueves · Sesión 3",
      tema: "Artefactos de Arquitectura Empresarial y reto",
      proposito: "Aprender a documentar el AS-IS, diseñar el TO-BE y demostrar cuantitativamente la mejora. Esta es la sesión más importante para la entrega del reto.",
      bloques: [
        {
          tipo: "clave",
          titulo: "¿Qué es un artefacto?",
          cuerpo: "<p>Un artefacto de arquitectura es una <b>representación estructurada de algún aspecto relevante de la empresa o de su arquitectura</b>, creada para analizarla, comunicarla, decidir sobre ella o gobernarla.</p>"
                + "<p>No tiene que ser un diagrama: puede ser catálogo, matriz, mapa, modelo, diagrama, estándar, principio, roadmap, assessment o heatmap.</p>"
        },
        {
          tipo: "diagrama",
          titulo: "Artefacto 1 · Process Map AS-IS (alta de proveedores)",
          cuerpo:
"Proveedor\n" +
"   |\n" +
"Compras\n" +
"   |\n" +
"Excel\n" +
"   |\n" +
"Email al gerente\n" +
"   |\n" +
"Legal\n" +
"   |\n" +
"Finanzas\n" +
"   |\n" +
"Captura en ERP"
        },
        {
          tipo: "tabla",
          titulo: "Artefacto 2 · Application Portfolio",
          encabezados: ["Aplicación", "Función", "Owner", "Criticidad", "Problema"],
          filas: [
            ["Excel", "Captura", "Compras", "Media", "Manual"],
            ["Outlook", "Workflow de facto", "TI", "Alta", "Sin trazabilidad"],
            ["ERP", "Maestro de proveedor", "Finanzas", "Crítica", "Captura manual"],
            ["SharePoint", "Documentos", "Legal", "Media", "Duplicidad"]
          ]
        },
        {
          tipo: "tabla",
          titulo: "Artefacto 3 · Matriz proceso-aplicación",
          encabezados: ["Etapa del proceso", "Excel", "Email", "ERP", "SharePoint"],
          filas: [
            ["Solicitud", "●", "", "", ""],
            ["Aprobación", "", "●", "", ""],
            ["Validación", "", "●", "", "●"],
            ["Alta", "", "", "●", ""],
            ["Documentación", "", "", "", "●"]
          ]
        },
        {
          tipo: "nota",
          titulo: "Para qué sirve esta matriz",
          cuerpo: "<p>Permite <b>descubrir la fragmentación</b>: ninguna aplicación cubre el proceso completo y la información salta de herramienta en herramienta.</p>"
        },
        {
          tipo: "diagrama",
          titulo: "Artefacto 4 · Diagrama de integración TO-BE",
          cuerpo:
"Portal proveedor\n" +
"       |\n" +
"       v\n" +
"Workflow / BPM\n" +
"       |\n" +
" +-----+------+\n" +
" v     v      v\n" +
"ERP   DMS   Compliance\n" +
"       |\n" +
"       v\n" +
"     Data"
        },
        {
          tipo: "flujo",
          titulo: "La secuencia que hay que dominar",
          pasos: ["AS-IS", "Gap analysis", "TO-BE", "Roadmap"]
        },
        {
          tipo: "tabla",
          titulo: "Los 8 artefactos que se piden para el reto",
          encabezados: ["#", "Artefacto", "Para qué sirve"],
          filas: [
            ["1", "Problem Statement", "Definir el problema"],
            ["2", "SIPOC / Process Map", "Entender el proceso"],
            ["3", "AS-IS Process", "Documentar la situación actual"],
            ["4", "Application Landscape", "Identificar los sistemas involucrados"],
            ["5", "Process-Application Matrix", "Relacionar proceso y tecnología"],
            ["6", "Data / Information Flow", "Mostrar el movimiento de la información"],
            ["7", "TO-BE Architecture / Process", "Diseñar la solución futura"],
            ["8", "Gap Analysis + Roadmap", "Definir cómo se llega del AS-IS al TO-BE"]
          ]
        },
        {
          tipo: "tabla",
          titulo: "Capa cuantitativa obligatoria · baseline y meta",
          encabezados: ["KPI", "AS-IS", "TO-BE", "Mejora"],
          filas: [
            ["Lead time", "72 h", "8 h", "−89 %"],
            ["Processing time", "45 min", "15 min", "−67 %"],
            ["Personas involucradas", "6", "3", "−50 %"],
            ["Capturas manuales", "3", "1", "−67 %"],
            ["Tasa de error", "8 %", "1 %", "−87.5 %"],
            ["Costo por transacción", "$180", "$70", "−61 %"]
          ]
        },
        {
          tipo: "clave",
          titulo: "El criterio de evaluación",
          cuerpo: "<p><b>Un diagrama demuestra cómo entendieron el proceso; los datos demuestran si su propuesta realmente lo mejora.</b></p>"
        },
        {
          tipo: "defs",
          titulo: "Deliverable frente a artifact",
          items: [
            { termino: "Deliverable (entregable)", definicion: "Algo que formalmente se entrega. Ejemplo: «Documento de Arquitectura de Solución»." },
            { termino: "Artifact (artefacto)", definicion: "Una pieza estructurada de información arquitectónica: process map, matriz de aplicaciones, data flow, diagrama de integración, gap analysis, roadmap." },
            { termino: "Relación", definicion: "<b>Un deliverable puede contener múltiples artefactos.</b>" }
          ]
        },
        {
          tipo: "tabla",
          titulo: "View y viewpoint: la misma arquitectura no se presenta igual",
          encabezados: ["Stakeholder", "Qué le interesa"],
          filas: [
            ["CEO", "Valor, riesgo, inversión"],
            ["CFO", "Costos, ROI"],
            ["CISO", "Riesgos y controles"],
            ["Arquitecto", "Sistemas, interfaces, datos"],
            ["Developer", "APIs, componentes, protocolos"]
          ]
        },
        {
          tipo: "nota",
          titulo: "Ejercicio de 30 segundos",
          cuerpo: "<p>«Explícale la arquitectura del proyecto al CEO.» Treinta segundos. Después: «Ahora explícasela al arquitecto de integración.» El grupo descubre de inmediato por qué necesitamos distintas vistas.</p>"
        },
        {
          tipo: "diagrama",
          titulo: "Imagen conceptual que amarra toda la semana",
          cuerpo:
"                     ESTRATEGIA\n" +
"                         |\n" +
"                    CAPACIDADES\n" +
"                         |\n" +
"                      PROCESOS\n" +
"              +----------+----------+\n" +
"              v          v          v\n" +
"            DATOS   APLICACIONES  PERSONAS\n" +
"              +----------+----------+\n" +
"                         |\n" +
"                    TECNOLOGÍA\n" +
"                         |\n" +
"                     SERVICIOS\n" +
"                         |\n" +
"                    RESULTADOS\n" +
"                         |\n" +
"                        KPI\n" +
"\n" +
"Alrededor de todo:\n" +
"  TOGAF  — arquitectura\n" +
"  COBIT  — gobierno\n" +
"  ITIL   — servicios\n" +
"  ISO    — requisitos y estándares\n" +
"  Lean / Six Sigma — mejora\n" +
"  BPMN   — representación del proceso"
        }
      ]
    }
  ],

  /* ==================== GLOSARIO ==================== */
  terminos: [
    { termino: "SIPOC", sigla: "Supplier, Input, Process, Output, Customer", definicion: "Artefacto que delimita un proceso identificando quién provee, qué entra, qué se hace, qué sale y quién lo recibe." },
    { termino: "Lead time", definicion: "Tiempo total transcurrido de extremo a extremo del proceso, incluyendo esperas." },
    { termino: "Processing time", definicion: "Tiempo de trabajo real invertido en las actividades, sin contar esperas." },
    { termino: "Lean", definicion: "Enfoque de mejora centrado en eliminar desperdicio: espera, retrabajo, sobreproceso, transporte, inventario, movimiento y defectos." },
    { termino: "Six Sigma", definicion: "Enfoque de mejora centrado en reducir variación y defectos con base estadística." },
    { termino: "Kaizen", definicion: "Mejora continua incremental con participación de quienes ejecutan el proceso." },
    { termino: "DMAIC", sigla: "Define, Measure, Analyze, Improve, Control", definicion: "Ciclo de mejora de Six Sigma." },
    { termino: "COBIT", definicion: "Marco de gobierno y control de TI: responsabilidad, controles, riesgo, métricas y alineación con objetivos." },
    { termino: "ITIL", definicion: "Marco de gestión de servicios de TI: diseño, entrega, soporte y mejora del servicio; incidentes, problemas y cambios." },
    { termino: "SGSI", definicion: "Sistema de Gestión de Seguridad de la Información; certificable bajo ISO/IEC 27001." },
    { termino: "ERP", sigla: "Enterprise Resource Planning", definicion: "Sistema de recursos y transacciones centrales de la empresa." },
    { termino: "CRM", sigla: "Customer Relationship Management", definicion: "Sistema de gestión de clientes y ventas." },
    { termino: "MES", sigla: "Manufacturing Execution System", definicion: "Sistema de ejecución de manufactura en planta." },
    { termino: "WMS", sigla: "Warehouse Management System", definicion: "Sistema de gestión de almacenes." },
    { termino: "PLM", sigla: "Product Lifecycle Management", definicion: "Gestión del ciclo de vida del producto." },
    { termino: "ITSM", sigla: "IT Service Management", definicion: "Gestión de servicios de TI." },
    { termino: "Order-to-Cash", definicion: "Proceso end-to-end que va del pedido del cliente hasta el cobro." },
    { termino: "Artefacto", definicion: "Representación estructurada de un aspecto de la empresa o su arquitectura, creada para analizar, comunicar, decidir o gobernar." },
    { termino: "Deliverable", definicion: "Entregable formal; puede contener múltiples artefactos." },
    { termino: "View", definicion: "Representación de la arquitectura dirigida a un conjunto de interesados y sus preocupaciones." },
    { termino: "Viewpoint", definicion: "Convención o plantilla que define cómo se construye e interpreta una vista." },
    { termino: "Gap analysis", definicion: "Comparación entre AS-IS y TO-BE para determinar qué falta, qué cambia, qué se elimina y qué se conserva." },
    { termino: "Application landscape", definicion: "Panorama de las aplicaciones existentes con su función, responsable, criticidad y problemas." },
    { termino: "Problem statement", definicion: "Enunciado formal del problema: qué ocurre, a quién afecta, con qué magnitud y qué pasa si no se resuelve." },
    { termino: "Baseline", definicion: "Medición inicial de los indicadores del proceso, contra la cual se compara la mejora propuesta." }
  ],

  /* ==================== PRÁCTICA ==================== */
  practica: {

    opcionMultiple: [
      {
        tema: "Estrategia y TI",
        pregunta: "El negocio dice: «necesitamos reducir el tiempo de entrega de 5 a 2 días». ¿Cuál es la primera respuesta correcta desde arquitectura?",
        opciones: [
          "Descubrir qué impide llegar a los 2 días: qué proceso, qué esperas, qué datos y qué capacidades faltan",
          "Proponer la implementación de un ERP moderno",
          "Evaluar tres proveedores de software de logística",
          "Automatizar con IA la etapa más lenta del proceso"
        ],
        correcta: 0,
        explicacion: "La secuencia es: necesidad → proceso → problema → datos → capacidades → requerimientos → arquitectura → tecnología. La tecnología es consecuencia, no punto de partida.",
        porQueNo: {
          1: "Elegir producto antes de conocer la causa raíz es exactamente el error que la EA busca evitar.",
          2: "Evaluar proveedores presupone que la solución es comprar software.",
          3: "Automatizar sin diagnóstico puede acelerar una actividad que no es el cuello de botella."
        }
      },
      {
        tema: "Digitalización",
        pregunta: "Un formato en papel se convierte en PDF que se manda por correo; el jefe firma y RH sigue capturando. ¿Qué nivel es?",
        opciones: [
          "Digitalización",
          "Automatización",
          "Transformación digital",
          "Rediseño de proceso"
        ],
        correcta: 0,
        explicacion: "Desapareció el papel, pero el flujo es idéntico. Digitalizar es llevar información o actividades a medios digitales sin cambiar el proceso.",
        porQueNo: {
          1: "Automatizar implica que el sistema ejecute la actividad: consultar el saldo, enviar la aprobación, actualizar el registro.",
          2: "La transformación cuestiona el proceso completo y cambia capacidades, experiencia o modelo.",
          3: "El proceso no fue rediseñado: conserva las mismas etapas y responsables."
        }
      },
      {
        tema: "Transformación digital",
        pregunta: "En el caso de vacaciones, ¿cuál es el ejemplo de transformación digital?",
        opciones: [
          "El empleado solicita desde una app y el sistema, conociendo saldo, calendario, cobertura y políticas, autoriza automáticamente determinados casos",
          "El formato pasa a PDF y se envía por correo",
          "RH captura la solicitud en el sistema en lugar de archivarla en papel",
          "El jefe firma electrónicamente en lugar de a mano"
        ],
        correcta: 0,
        explicacion: "Se cuestionó el proceso completo: ¿por qué debe intervenir RH? Cambió la capacidad, el flujo y la experiencia del empleado.",
        porQueNo: {
          1: "Eso es digitalización.",
          2: "Cambia el medio de registro, no el proceso.",
          3: "Sustituye un mecanismo de firma; el flujo de aprobación sigue igual."
        }
      },
      {
        tema: "Aplicaciones empresariales",
        pregunta: "El sistema que ejecuta y controla la manufactura en piso de planta es…",
        opciones: ["MES", "WMS", "PLM", "ITSM"],
        correcta: 0,
        explicacion: "MES (Manufacturing Execution System) opera la ejecución de manufactura; WMS gestiona almacenes; PLM, el ciclo de vida del producto; ITSM, los servicios de TI.",
        porQueNo: {
          1: "WMS administra almacenes e inventario físico.",
          2: "PLM administra el ciclo de vida del producto, del diseño al retiro.",
          3: "ITSM administra servicios de TI, no manufactura."
        }
      },
      {
        tema: "Datos duros",
        pregunta: "Un proceso tiene 22 minutos de trabajo real y 23 horas de espera. ¿Dónde debe concentrarse la mejora?",
        opciones: [
          "En eliminar las esperas: aprobaciones, transferencias y colas",
          "En acelerar las actividades de captura para bajar los 22 minutos",
          "En contratar más personal para ejecutar las actividades",
          "En migrar el ERP a la nube para ganar desempeño"
        ],
        correcta: 0,
        explicacion: "El lead time está dominado por la espera. Reducir a la mitad los 22 minutos mejora el total en 11 minutos sobre 23 horas: irrelevante.",
        porQueNo: {
          1: "Optimizar el 1.6 % del tiempo total no mueve el indicador.",
          2: "Más personas no eliminan una espera de aprobación secuencial.",
          3: "El desempeño técnico no es la restricción; la restricción es organizativa."
        }
      },
      {
        tema: "Lead time",
        pregunta: "¿Cuál es la diferencia entre lead time y processing time?",
        opciones: [
          "Lead time es el tiempo total transcurrido incluyendo esperas; processing time es solo el trabajo real",
          "Lead time es el trabajo real y processing time incluye las esperas",
          "Son sinónimos medidos en unidades distintas",
          "Lead time aplica a manufactura y processing time a servicios"
        ],
        correcta: 0,
        explicacion: "La distancia entre ambos indicadores revela cuánto desperdicio de espera contiene el proceso.",
        porQueNo: {
          1: "Está invertido.",
          2: "Miden cosas distintas, no la misma cosa.",
          3: "Ambos aplican a cualquier tipo de proceso."
        }
      },
      {
        tema: "Lean y Six Sigma",
        pregunta: "Un proceso entrega resultados con demasiada variación: unas veces tarda 2 días y otras 9, sin causa aparente. ¿Qué enfoque ataca ese problema?",
        opciones: ["Six Sigma", "Lean", "Kaizen", "BPMN"],
        correcta: 0,
        explicacion: "Six Sigma se enfoca en reducir variación y defectos; Lean, en eliminar desperdicio; Kaizen, en mejora continua incremental.",
        porQueNo: {
          1: "Lean ataca el desperdicio, no la variabilidad estadística.",
          2: "Kaizen es la filosofía de mejora incremental, no una herramienta de análisis de variación.",
          3: "BPMN solo representa el proceso gráficamente."
        }
      },
      {
        tema: "DMAIC",
        pregunta: "¿Cuál es el orden correcto de DMAIC?",
        opciones: [
          "Define, Measure, Analyze, Improve, Control",
          "Design, Model, Analyze, Implement, Check",
          "Define, Model, Automate, Integrate, Control",
          "Discover, Measure, Adjust, Implement, Close"
        ],
        correcta: 0,
        explicacion: "Definir el problema, medir el baseline, analizar causas, mejorar y controlar para que la mejora se sostenga.",
        porQueNo: {
          1: "No corresponde a las siglas de DMAIC.",
          2: "Confunde el ciclo con etapas de automatización.",
          3: "No es el ciclo estándar."
        }
      },
      {
        tema: "COBIT e ITIL",
        pregunta: "«¿Quién es accountable, tenemos controles, el riesgo es aceptable y está alineado con los objetivos?» son preguntas propias de…",
        opciones: ["COBIT", "ITIL", "TOGAF", "ISO 9001"],
        correcta: 0,
        explicacion: "COBIT es gobierno: responsabilidad, control, riesgo, métricas y alineación con objetivos de negocio.",
        porQueNo: {
          1: "ITIL preguntaría cómo se registra, prioriza y restaura el servicio.",
          2: "TOGAF preguntaría cómo debe evolucionar la arquitectura.",
          3: "ISO 9001 se enfoca en el sistema de gestión de calidad."
        }
      },
      {
        tema: "COBIT e ITIL",
        pregunta: "Se cae SAP. «¿Cómo registramos el incidente, cómo lo priorizamos, cómo restauramos el servicio, es recurrente, requiere un change?» corresponde a…",
        opciones: ["ITIL", "COBIT", "Zachman", "Lean"],
        correcta: 0,
        explicacion: "ITIL es gestión del servicio: incidentes, problemas, cambios y mejora continua del servicio.",
        porQueNo: {
          1: "COBIT preguntaría por accountability, controles y riesgo.",
          2: "Zachman clasifica descripciones de la empresa.",
          3: "Lean elimina desperdicio en procesos."
        }
      },
      {
        tema: "ISO",
        pregunta: "¿Cuál es la diferencia esencial entre una norma ISO y un marco como TOGAF, COBIT o ITIL?",
        opciones: [
          "La ISO puede establecer requisitos certificables; los marcos funcionan como metodologías o buenas prácticas",
          "La ISO es gratuita y los marcos son de pago",
          "La ISO aplica solo a manufactura y los marcos solo a TI",
          "Los marcos son obligatorios por ley y las ISO son opcionales"
        ],
        correcta: 0,
        explicacion: "La obligatoriedad de cualquiera de ellos depende de leyes, contratos, regulación o decisiones organizacionales.",
        porQueNo: {
          1: "El modelo de licenciamiento no es la diferencia conceptual.",
          2: "Existen normas ISO de TI (20000-1, 27001) y marcos aplicables fuera de TI.",
          3: "Ningún marco de arquitectura es obligatorio por ley por sí mismo."
        }
      },
      {
        tema: "Artefactos",
        pregunta: "¿Cuál es la definición correcta de artefacto de arquitectura?",
        opciones: [
          "Una representación estructurada de un aspecto relevante de la empresa o de su arquitectura, creada para analizar, comunicar, decidir o gobernar",
          "Cualquier diagrama que se entrega al cliente al final del proyecto",
          "El documento formal que se firma al cerrar una fase del ADM",
          "Un componente de software reutilizable"
        ],
        correcta: 0,
        explicacion: "Un artefacto no tiene que ser un diagrama: puede ser catálogo, matriz, mapa, modelo, principio, roadmap, assessment o heatmap.",
        porQueNo: {
          1: "Limitarlo a diagramas deja fuera catálogos, matrices y principios.",
          2: "Eso describe un deliverable, no un artefacto.",
          3: "Un componente reutilizable de arquitectura es un building block (ABB/SBB)."
        }
      },
      {
        tema: "Deliverable vs artifact",
        pregunta: "¿Cuál es la relación entre deliverable y artifact?",
        opciones: [
          "Un deliverable puede contener múltiples artefactos",
          "Un artefacto puede contener múltiples deliverables",
          "Son sinónimos en TOGAF",
          "El deliverable es interno y el artefacto se entrega al cliente"
        ],
        correcta: 0,
        explicacion: "El «Documento de Arquitectura de Solución» es un deliverable; dentro puede haber process map, matriz de aplicaciones, data flow, gap analysis y roadmap.",
        porQueNo: {
          1: "Está invertido: el entregable es el contenedor.",
          2: "Son cosas distintas: uno es entrega formal, el otro pieza de información.",
          3: "La distinción no es interno/externo."
        }
      },
      {
        tema: "View y viewpoint",
        pregunta: "¿Por qué la misma arquitectura se presenta distinto al CEO y al arquitecto de integración?",
        opciones: [
          "Porque cada stakeholder tiene preocupaciones distintas y la arquitectura se comunica mediante vistas dirigidas a esas preocupaciones",
          "Porque al CEO no se le puede mostrar información técnica por confidencialidad",
          "Porque el arquitecto usa una arquitectura diferente a la del CEO",
          "Porque el CEO solo necesita el roadmap y nada más"
        ],
        correcta: 0,
        explicacion: "El CEO atiende valor, riesgo e inversión; el CFO, costos y ROI; el CISO, riesgos y controles; el arquitecto, sistemas, interfaces y datos; el developer, APIs y protocolos.",
        porQueNo: {
          1: "No es un tema de confidencialidad sino de pertinencia.",
          2: "La arquitectura es la misma; cambian las vistas sobre ella.",
          3: "El CEO también necesita entender riesgo, valor e implicaciones."
        }
      },
      {
        tema: "Secuencia del reto",
        pregunta: "¿Cuál es la secuencia correcta para el reto?",
        opciones: [
          "AS-IS → Gap analysis → TO-BE → Roadmap",
          "TO-BE → AS-IS → Roadmap → Gap analysis",
          "Roadmap → AS-IS → TO-BE → Gap analysis",
          "AS-IS → TO-BE → Roadmap, sin gap analysis"
        ],
        correcta: 0,
        explicacion: "Sin AS-IS documentado no hay brecha demostrable; sin brecha, el TO-BE es una lista de deseos y el roadmap no tiene justificación.",
        porQueNo: {
          1: "Diseñar el futuro sin conocer el presente impide cuantificar la mejora.",
          2: "El roadmap es la última pieza, no la primera.",
          3: "Omitir el gap analysis elimina la justificación de cada iniciativa."
        }
      },
      {
        tema: "Evidencia cuantitativa",
        pregunta: "El equipo entrega diagramas impecables del AS-IS y del TO-BE, pero sin ningún indicador medido. ¿Qué falta?",
        opciones: [
          "El baseline cuantitativo: lead time, processing time, personas, capturas, tasa de error y costo por transacción",
          "Nada: el diagrama es suficiente evidencia de comprensión",
          "El diagrama BPMN en notación formal",
          "La firma del patrocinador del proyecto"
        ],
        correcta: 0,
        explicacion: "«Un diagrama demuestra cómo entendieron el proceso; los datos demuestran si su propuesta realmente lo mejora.»",
        porQueNo: {
          1: "El diagrama demuestra comprensión, no mejora.",
          2: "La notación formal ayuda a comunicar, pero no cuantifica el beneficio.",
          3: "El patrocinio no sustituye la evidencia técnica."
        }
      },
      {
        tema: "Matriz proceso-aplicación",
        pregunta: "¿Qué revela principalmente una matriz proceso-aplicación?",
        opciones: [
          "La fragmentación: qué etapas dependen de qué herramientas y dónde salta la información",
          "El costo total de licenciamiento del portafolio",
          "El orden cronológico de implementación de los sistemas",
          "La capacidad de cómputo requerida por cada aplicación"
        ],
        correcta: 0,
        explicacion: "En el caso de alta de proveedores, la matriz muestra que ninguna aplicación cubre el proceso completo y que la información salta entre Excel, correo, ERP y SharePoint.",
        porQueNo: {
          1: "El costo se documenta en el portafolio de aplicaciones, no en la matriz.",
          2: "La cronología es materia del roadmap.",
          3: "Los requisitos de cómputo pertenecen al dominio tecnológico."
        }
      },
      {
        tema: "Problem statement",
        pregunta: "¿Cuál de estos enunciados sirve como problem statement del reto?",
        opciones: [
          "El alta de un proveedor tarda 72 h con 6 personas, 4 sistemas, 3 capturas manuales y 8 % de error, lo que retrasa compras críticas",
          "Necesitamos implementar un portal de proveedores con workflow",
          "El proceso de compras es ineficiente y hay que mejorarlo",
          "Compras, Finanzas, Legal y TI participan en el alta de proveedores"
        ],
        correcta: 0,
        explicacion: "Un problem statement dice qué ocurre, con qué magnitud medida y qué consecuencia tiene. Es la base para justificar el TO-BE.",
        porQueNo: {
          1: "Eso es una solución propuesta, no un problema.",
          2: "«Ineficiente» sin magnitud no permite medir mejora alguna.",
          3: "Eso describe participantes; no enuncia el problema ni su impacto."
        }
      },
      {
        tema: "Marcos complementarios",
        pregunta: "Una empresa tiene simultáneamente: arquitectura fragmentada tras adquisiciones, hallazgos de auditoría de TI, incidentes que tardan días y necesidad de certificar seguridad. ¿Qué hace?",
        opciones: [
          "Usar varios marcos de manera complementaria: TOGAF, COBIT, ITIL e ISO/IEC 27001",
          "Elegir el marco más completo y descartar los demás",
          "Esperar a resolver un problema antes de atender el siguiente",
          "Adoptar únicamente ISO 9001, que cubre todo lo relacionado con gestión"
        ],
        correcta: 0,
        explicacion: "Cada marco responde una pregunta distinta y pueden coexistir. No se trata de elegir un ganador.",
        porQueNo: {
          1: "Ningún marco cubre bien las cuatro preguntas a la vez.",
          2: "Los problemas son de naturaleza distinta y pueden atenderse en paralelo con responsables distintos.",
          3: "ISO 9001 gestiona calidad; no resuelve arquitectura, gobierno de TI ni seguridad."
        }
      },
      {
        tema: "TOGAF aplicado",
        pregunta: "Ante «quiero implementar e-commerce», ¿cuál es la pregunta del dominio de datos?",
        opciones: [
          "¿Dónde viven y quién gobierna cliente, producto, precio e inventario?",
          "¿El e-commerce se integra con ERP, CRM y WMS?",
          "¿Necesitamos API gateway e identidad en la nube?",
          "¿Cómo cambia el proceso Order-to-Cash?"
        ],
        correcta: 0,
        explicacion: "Datos: qué información se necesita, dónde se origina, quién responde por ella y con qué calidad.",
        porQueNo: {
          1: "Esa es la pregunta del dominio de aplicaciones.",
          2: "Esa es la pregunta del dominio tecnológico.",
          3: "Esa es la pregunta del dominio de negocio."
        }
      }
    ],

    escenarios: [
      {
        escenario: "Después de adquirir tres empresas hay que rediseñar la arquitectura global y decidir qué se integra, qué se estandariza y qué se retira.",
        opciones: ["TOGAF", "COBIT", "ITIL", "ISO 9001"],
        correcta: 0,
        explicacion: "TOGAF responde a «¿cómo diseño y hago evolucionar la arquitectura empresarial?».",
        porQueNo: { 1: "COBIT gobierna y controla TI.", 2: "ITIL gestiona servicios de TI.", 3: "ISO 9001 gestiona calidad." }
      },
      {
        escenario: "Una auditoría detectó controles de TI deficientes: no hay responsables claros, ni métricas, ni evidencia de que el riesgo esté acotado.",
        opciones: ["COBIT", "ITIL", "TOGAF", "BPMN"],
        correcta: 0,
        explicacion: "COBIT responde a «¿cómo gobierno y controlo TI?»: accountability, controles, riesgo, métricas y alineación.",
        porQueNo: { 1: "ITIL diseña y opera servicios, no el sistema de control.", 2: "TOGAF diseña la arquitectura.", 3: "BPMN dibuja procesos." }
      },
      {
        escenario: "Los usuarios se quejan de que los incidentes tardan días en resolverse y de que el mismo problema se repite cada mes.",
        opciones: ["ITIL", "COBIT", "Zachman", "ISO 9001"],
        correcta: 0,
        explicacion: "ITIL responde a «¿cómo diseño, entrego, soporto y mejoro el servicio?»: incidentes, problemas, cambios y mejora continua.",
        porQueNo: { 1: "COBIT preguntaría por controles y responsabilidad, no por la operación del servicio.", 2: "Zachman clasifica vistas.", 3: "ISO 9001 es calidad en general." }
      },
      {
        escenario: "El corporativo necesita implementar un sistema de gestión de seguridad de la información que sea certificable ante un tercero.",
        opciones: ["ISO/IEC 27001", "ISO/IEC 20000-1", "COBIT", "TOGAF"],
        correcta: 0,
        explicacion: "ISO/IEC 27001 establece los requisitos certificables de un SGSI.",
        porQueNo: { 1: "ISO/IEC 20000-1 certifica gestión de servicios de TI, no seguridad.", 2: "COBIT es marco de gobierno, no norma certificable.", 3: "TOGAF es marco de arquitectura." }
      },
      {
        escenario: "Se necesita representar gráficamente el proceso Order-to-Cash con eventos, compuertas y carriles por participante.",
        opciones: ["BPMN", "Zachman", "DMAIC", "COBIT"],
        correcta: 0,
        explicacion: "BPMN es la notación estandarizada para modelar procesos con eventos, actividades, compuertas, flujos y participantes.",
        porQueNo: { 1: "Zachman es una taxonomía de vistas.", 2: "DMAIC es un ciclo de mejora, no una notación.", 3: "COBIT es gobierno de TI." }
      },
      {
        escenario: "El proceso de alta de proveedores tiene 72 horas de duración, con esperas largas, tres capturas del mismo dato y 8 % de errores que obligan a rehacer trabajo.",
        opciones: ["Lean y Six Sigma", "ITIL", "Zachman", "ISO/IEC 27001"],
        correcta: 0,
        explicacion: "Lean elimina el desperdicio (esperas, capturas duplicadas, retrabajo) y Six Sigma ataca la tasa de error y la variación.",
        porQueNo: { 1: "ITIL aplica a servicios de TI, no a este proceso de negocio.", 2: "Zachman no mejora procesos.", 3: "La seguridad no es el problema planteado." }
      },
      {
        escenario: "Hay muchos diagramas técnicos pero la dirección no encuentra respuesta a quién es responsable, cuándo ocurren los eventos y por qué existe cada capacidad.",
        opciones: ["Zachman", "ITIL", "Lean", "DMAIC"],
        correcta: 0,
        explicacion: "Zachman comprueba que estén cubiertas las seis preguntas: What, How, Where, Who, When y Why, desde distintas perspectivas.",
        porQueNo: { 1: "ITIL gestiona servicios.", 2: "Lean elimina desperdicio.", 3: "DMAIC estructura un proyecto de mejora." }
      },
      {
        escenario: "El equipo debe entregar un documento formal de arquitectura de solución que incluya process map, matriz de aplicaciones, data flow, gap analysis y roadmap.",
        opciones: ["Un deliverable que contiene varios artefactos", "Un artefacto que contiene varios deliverables", "Cinco deliverables independientes", "Un viewpoint"],
        correcta: 0,
        explicacion: "El deliverable es el entregable formal; los artefactos son las piezas estructuradas de información que contiene.",
        porQueNo: { 1: "Está invertido.", 2: "Se entrega un documento, no cinco entregables separados.", 3: "Un viewpoint es la convención para construir una vista, no un documento." }
      }
    ],

    clasificar: [
      {
        consigna: "Asigna cada situación al marco, norma o metodología que la resuelve.",
        categorias: ["TOGAF", "COBIT", "ITIL", "Lean / Six Sigma", "BPMN"],
        items: [
          { texto: "Rediseñar la arquitectura tras tres adquisiciones", categoria: "TOGAF" },
          { texto: "Definir el TO-BE y el roadmap de migración", categoria: "TOGAF" },
          { texto: "Auditoría halló controles de TI deficientes", categoria: "COBIT" },
          { texto: "Definir accountability y métricas de TI", categoria: "COBIT" },
          { texto: "Incidentes que tardan días en resolverse", categoria: "ITIL" },
          { texto: "Gestionar problemas recurrentes y cambios", categoria: "ITIL" },
          { texto: "23 h de espera y 3 capturas duplicadas", categoria: "Lean / Six Sigma" },
          { texto: "Tasa de error del 8 % con alta variación", categoria: "Lean / Six Sigma" },
          { texto: "Dibujar Order-to-Cash con carriles y compuertas", categoria: "BPMN" }
        ],
        explicacion: "Regla mnemotécnica: <b>TOGAF</b> diseña la arquitectura, <b>COBIT</b> gobierna, <b>ITIL</b> opera el servicio, <b>Lean/Six Sigma</b> mejora el proceso y <b>BPMN</b> lo dibuja."
      },
      {
        consigna: "Clasifica cada elemento del caso «alta de proveedores» según el tipo de artefacto.",
        categorias: ["Catálogo o inventario", "Matriz", "Diagrama o mapa", "Análisis o plan"],
        items: [
          { texto: "Application Portfolio con owner y criticidad", categoria: "Catálogo o inventario" },
          { texto: "Inventario de datos maestros de proveedor", categoria: "Catálogo o inventario" },
          { texto: "Proceso × Aplicación", categoria: "Matriz" },
          { texto: "Capacidad × Área responsable", categoria: "Matriz" },
          { texto: "Process Map AS-IS", categoria: "Diagrama o mapa" },
          { texto: "Diagrama de integración TO-BE", categoria: "Diagrama o mapa" },
          { texto: "Data / Information Flow", categoria: "Diagrama o mapa" },
          { texto: "Gap Analysis", categoria: "Análisis o plan" },
          { texto: "Roadmap de implementación", categoria: "Análisis o plan" }
        ],
        explicacion: "Catálogo: lista organizada. Matriz: relación entre dos dimensiones. Diagrama o mapa: representación visual de componentes y flujos. Análisis o plan: interpretación y secuencia de acción."
      },
      {
        consigna: "Clasifica cada indicador del reto según lo que mide.",
        categorias: ["Tiempo", "Esfuerzo o recursos", "Calidad", "Costo"],
        items: [
          { texto: "Lead time (72 h → 8 h)", categoria: "Tiempo" },
          { texto: "Processing time (45 min → 15 min)", categoria: "Tiempo" },
          { texto: "Personas involucradas (6 → 3)", categoria: "Esfuerzo o recursos" },
          { texto: "Capturas manuales (3 → 1)", categoria: "Esfuerzo o recursos" },
          { texto: "Tasa de error (8 % → 1 %)", categoria: "Calidad" },
          { texto: "Retrabajos por dato incorrecto", categoria: "Calidad" },
          { texto: "Costo por transacción ($180 → $70)", categoria: "Costo" }
        ],
        explicacion: "Un baseline completo cubre las cuatro dimensiones. Presentar solo tiempo deja fuera la mitad del argumento de valor."
      },
      {
        consigna: "Clasifica cada aplicación empresarial por el área que atiende principalmente.",
        categorias: ["Ventas y clientes", "Operación y manufactura", "Finanzas y transacciones", "Personas y soporte"],
        items: [
          { texto: "CRM", categoria: "Ventas y clientes" },
          { texto: "Portal de e-commerce", categoria: "Ventas y clientes" },
          { texto: "MES", categoria: "Operación y manufactura" },
          { texto: "WMS", categoria: "Operación y manufactura" },
          { texto: "PLM", categoria: "Operación y manufactura" },
          { texto: "ERP", categoria: "Finanzas y transacciones" },
          { texto: "HCM", categoria: "Personas y soporte" },
          { texto: "ITSM", categoria: "Personas y soporte" },
          { texto: "ECM / DMS", categoria: "Personas y soporte" }
        ],
        explicacion: "Una empresa grande no tiene «un sistema»: tiene un ecosistema. Reconocer a qué área sirve cada pieza es el primer paso para detectar duplicidad."
      }
    ],

    ordenar: [
      {
        consigna: "Ordena la secuencia que debe seguir un proyecto de TI desde la necesidad hasta la tecnología.",
        pasos: ["Necesidad del negocio", "Proceso", "Problema u oportunidad", "Datos", "Capacidades", "Requerimientos", "Arquitectura", "Tecnología"],
        explicacion: "Empezar por la tecnología («encontré una herramienta de IA, ¿dónde la usamos?») invierte la lógica y produce soluciones sin justificación de negocio."
      },
      {
        consigna: "Ordena las cinco etapas del SIPOC.",
        pasos: ["Supplier", "Input", "Process", "Output", "Customer"],
        explicacion: "SIPOC delimita el alcance del proceso antes de modelarlo en detalle: quién provee, qué entra, qué se hace, qué sale y quién lo recibe."
      },
      {
        consigna: "Ordena el ciclo DMAIC.",
        pasos: ["Define", "Measure", "Analyze", "Improve", "Control"],
        explicacion: "Medir antes de analizar es lo que produce el baseline; controlar al final es lo que evita que el proceso regrese a su estado anterior."
      },
      {
        consigna: "Ordena los ocho artefactos del reto en el orden en que conviene construirlos.",
        pasos: [
          "Problem Statement",
          "SIPOC / Process Map",
          "AS-IS Process",
          "Application Landscape",
          "Process-Application Matrix",
          "Data / Information Flow",
          "TO-BE Architecture / Process",
          "Gap Analysis + Roadmap"
        ],
        explicacion: "Primero se enuncia y delimita el problema, después se documenta la realidad, luego se diseña el futuro y al final se planea la transición."
      },
      {
        consigna: "Ordena el flujo del proceso de compras del ejemplo.",
        pasos: ["Solicitud del usuario", "Aprobación", "Cotización", "Orden de compra", "Recepción", "Factura", "Pago"],
        explicacion: "Documentar el flujo real es el paso previo a medir dónde se acumulan las esperas."
      }
    ],

    flashcards: [
      { frente: "La secuencia correcta de un proyecto de TI", reverso: "Necesidad del negocio → Proceso → Problema → Datos → Capacidades → Requerimientos → Arquitectura → Tecnología." },
      { frente: "Digitalización", reverso: "La información o actividad pasa a medios digitales, sin cambiar el proceso. Un PDF en lugar de papel sigue siendo el mismo flujo." },
      { frente: "Automatización", reverso: "El sistema ejecuta la actividad: consulta el saldo, envía la aprobación, actualiza el registro." },
      { frente: "Transformación digital", reverso: "Se cuestiona el proceso completo y cambian capacidades, experiencia del cliente o modelo de negocio." },
      { frente: "SIPOC", reverso: "Supplier → Input → Process → Output → Customer. Delimita el alcance del proceso antes de modelarlo." },
      { frente: "Lead time vs. processing time", reverso: "Lead time: tiempo total transcurrido, incluidas las esperas. Processing time: solo el trabajo real. 22 min de trabajo frente a 23 h de lead time revela dónde está el problema." },
      { frente: "Lean", reverso: "Eliminar desperdicio: espera, retrabajo, captura duplicada, traslado innecesario, sobreproceso." },
      { frente: "Six Sigma", reverso: "Reducir variación y defectos con base estadística." },
      { frente: "Kaizen", reverso: "Mejora continua incremental con participación de quienes ejecutan el proceso." },
      { frente: "DMAIC", reverso: "Define → Measure → Analyze → Improve → Control." },
      { frente: "COBIT", reverso: "Gobierno de TI: ¿estamos haciendo lo correcto, controlando riesgos y generando valor? Accountability, controles, riesgo, métricas y alineación." },
      { frente: "ITIL", reverso: "Gestión del servicio de TI: ¿cómo diseñamos, entregamos, soportamos y mejoramos el servicio? Incidentes, problemas y cambios." },
      { frente: "ISO frente a marcos", reverso: "La ISO puede establecer requisitos certificables; TOGAF, COBIT e ITIL funcionan como marcos y buenas prácticas. La obligatoriedad depende de leyes, contratos o decisiones organizacionales." },
      { frente: "Artefacto", reverso: "Representación estructurada de un aspecto de la empresa o su arquitectura, creada para analizar, comunicar, decidir o gobernar. Puede ser catálogo, matriz, mapa, modelo, principio, roadmap o heatmap." },
      { frente: "Deliverable vs. artifact", reverso: "El deliverable es la entrega formal; un deliverable puede contener múltiples artefactos." },
      { frente: "View y viewpoint", reverso: "La misma arquitectura se presenta distinto al CEO (valor, riesgo, inversión), al CFO (costos, ROI), al CISO (riesgos, controles), al arquitecto (sistemas, interfaces, datos) y al developer (APIs, componentes, protocolos)." },
      { frente: "La secuencia del reto", reverso: "AS-IS → Gap analysis → TO-BE → Roadmap." },
      { frente: "Los 8 artefactos del reto", reverso: "Problem statement · SIPOC/Process map · AS-IS · Application landscape · Matriz proceso-aplicación · Data flow · TO-BE · Gap analysis + roadmap." },
      { frente: "Baseline cuantitativo", reverso: "Lead time, processing time, personas involucradas, sistemas, capturas manuales, tasa de error y costo por transacción." },
      { frente: "El criterio de evaluación", reverso: "Un diagrama demuestra cómo entendieron el proceso; los datos demuestran si su propuesta realmente lo mejora." },
      { frente: "Ecosistema de aplicaciones", reverso: "ERP, CRM, HCM, SCM, MES, WMS, PLM, ECM/DMS, BI, BPM/Workflow, ITSM. Una empresa grande no tiene «un sistema»." },
      { frente: "Problem statement", reverso: "Qué ocurre, a quién afecta, con qué magnitud medida y qué consecuencia tiene si no se resuelve." }
    ]
  }
});
