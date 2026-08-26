/* ============================================================
   SEMANA 1 — Arquitectura Empresarial: fundamentos
   4 sesiones de 2 horas (lunes a jueves)
   ============================================================ */

EA.registrarSemana({
  id: 1,
  estado: "publicada",
  titulo: "Fundamentos de Arquitectura Empresarial",
  subtitulo: "Dominios, procesos, marcos de referencia y roles profesionales.",
  sesiones: 4,

  objetivos: [
    "Explicar qué es la Arquitectura Empresarial y por qué comienza con las necesidades del negocio.",
    "Distinguir arquitectura empresarial, arquitectura de soluciones, TI y Transformación Digital.",
    "Reconocer los dominios de negocio, datos, aplicaciones y tecnología.",
    "Diferenciar TOGAF, ADM, Zachman y el enfoque de Gartner.",
    "Explicar BPM, BPMN, procesos end-to-end y cadena de valor.",
    "Elaborar un diagnóstico básico AS-IS y una propuesta TO-BE."
  ],

  /* ==================== CONCEPTOS POR DÍA ==================== */
  dias: [

    /* ---------- LUNES ---------- */
    {
      id: "lunes",
      nombre: "Lunes · Sesión 1",
      tema: "Introducción a la Arquitectura Empresarial",
      proposito: "Entender que la Arquitectura Empresarial no es solamente tecnología: es una forma de conectar estrategia, operación, información y sistemas para transformar una organización.",
      bloques: [
        {
          tipo: "texto",
          titulo: "Pregunta detonadora",
          cuerpo: "<p>Una empresa acerera mexicana compra varias plantas en Argentina. Cada empresa utiliza procesos, aplicaciones, bases de datos, proveedores y tecnologías diferentes. El corporativo desea operar como una sola organización.</p>"
                + "<p><b>¿Qué problemas podrían aparecer?</b> Datos duplicados o incompatibles; definiciones distintas de cliente, producto o inventario; procesos distintos para comprar, producir y vender; aplicaciones que no se comunican; riesgos de seguridad y cumplimiento; interrupciones operativas; decisiones tecnológicas sin justificación de negocio.</p>"
        },
        {
          tipo: "clave",
          titulo: "Definición",
          cuerpo: "<p>La Arquitectura Empresarial es una <b>disciplina que describe cómo funciona actualmente una organización y diseña cómo deberá funcionar en el futuro</b>, alineando sus capacidades, procesos, datos, aplicaciones y tecnología con sus objetivos estratégicos.</p>"
        },
        {
          tipo: "lista",
          titulo: "Lo que NO es Arquitectura Empresarial",
          items: [
            "No es solamente un inventario de sistemas.",
            "No es un organigrama.",
            "No es comprar tecnología nueva.",
            "No sustituye la estrategia empresarial.",
            "No es un único diagrama.",
            "Sí es una práctica continua de análisis, diseño, priorización y gobierno."
          ]
        },
        {
          tipo: "flujo",
          titulo: "La cadena de alineación",
          pasos: ["Estrategia", "Capacidades", "Procesos", "Datos y aplicaciones", "Tecnología"]
        },
        {
          tipo: "nota",
          titulo: "Pregunta de comprobación",
          cuerpo: "<p>Si una empresa compra inteligencia artificial pero no tiene un problema de negocio claramente definido, ¿está haciendo Arquitectura Empresarial?</p>"
                + "<p><b>No necesariamente.</b> Está adquiriendo tecnología, pero no demuestra alineación estratégica ni generación de valor.</p>"
        },
        {
          tipo: "defs",
          titulo: "Los cuatro dominios",
          items: [
            { termino: "1 · Arquitectura de negocio", definicion: "Objetivos y estrategias, productos y servicios, capacidades, procesos, estructura organizacional, actores, clientes, proveedores, reglas y políticas. <br><i>Pregunta que responde:</i> ¿qué necesita hacer la empresa para cumplir su estrategia?" },
            { termino: "2 · Arquitectura de datos", definicion: "Qué datos existen, quién es responsable, dónde se originan y almacenan, cómo se comparten, su calidad, seguridad, significado y posibles duplicidades. <br><i>Pregunta que responde:</i> ¿qué información necesita la empresa para operar y decidir?" },
            { termino: "3 · Arquitectura de aplicaciones", definicion: "Sistemas que apoyan los procesos, funciones de cada aplicación, integraciones, interfaces, dependencias y aplicaciones redundantes u obsoletas. <br><i>Pregunta que responde:</i> ¿qué sistemas utilizan o producen los datos necesarios para operar?" },
            { termino: "4 · Arquitectura tecnológica", definicion: "Servidores, nube, redes y telecomunicaciones, dispositivos, sistemas operativos, plataformas y mecanismos de seguridad. <br><i>Pregunta que responde:</i> ¿sobre qué infraestructura funcionan las aplicaciones?" }
          ]
        },
        {
          tipo: "tabla",
          titulo: "Mapa inicial de la acerera",
          encabezados: ["Negocio", "Datos", "Aplicaciones", "Tecnología"],
          filas: [
            ["Producción y venta de acero", "Clientes, inventario, calidad", "ERP, CRM, sistema de producción", "Servidores, nube, redes"],
            ["Compras y logística", "Proveedores, pedidos", "Sistema logístico", "Telecomunicaciones"],
            ["Control de calidad", "Lotes y pruebas", "Sistema de calidad", "Sensores industriales"]
          ]
        },
        {
          tipo: "nota",
          titulo: "Conclusión de la actividad",
          cuerpo: "<p>Ningún dominio debe analizarse de manera aislada. Cambiar un proceso puede exigir nuevos datos; esos datos pueden requerir aplicaciones y las aplicaciones, nueva infraestructura.</p>"
        },
        {
          tipo: "defs",
          titulo: "AS-IS, TO-BE, brecha y roadmap",
          items: [
            { termino: "AS-IS", definicion: "Situación actual. Cómo opera realmente la organización hoy." },
            { termino: "TO-BE", definicion: "Situación futura deseada." },
            { termino: "Brecha (gap)", definicion: "Diferencia entre el estado actual y el deseado." },
            { termino: "Roadmap", definicion: "Iniciativas ordenadas y priorizadas para cerrar las brechas." }
          ]
        },
        {
          tipo: "tabla",
          titulo: "Ejemplo AS-IS / TO-BE en la acerera",
          encabezados: ["Elemento", "AS-IS", "TO-BE", "Brecha"],
          filas: [
            ["Clientes", "Bases separadas por país", "Visión única del cliente", "Integrar y depurar datos"],
            ["Inventario", "Actualización manual", "Visibilidad casi en tiempo real", "Sensores e integración"],
            ["Compras", "Procesos distintos", "Política regional común", "Rediseñar el proceso"],
            ["Aplicaciones", "ERP diferentes", "Ecosistema interoperable", "Interfaces y estándares"]
          ]
        },
        {
          tipo: "clave",
          titulo: "Aclaración importante",
          cuerpo: "<p>El TO-BE <b>no siempre implica reemplazar todos los sistemas</b>. Puede consistir en integrar, estandarizar, reutilizar o retirar únicamente aquello que no genera valor.</p>"
        },
        {
          tipo: "lista",
          titulo: "Beneficios de la Arquitectura Empresarial",
          items: [
            "Alinea inversiones tecnológicas con objetivos de negocio.",
            "Reduce duplicidades y costos innecesarios.",
            "Facilita fusiones y adquisiciones.",
            "Mejora la interoperabilidad.",
            "Hace visibles riesgos y dependencias.",
            "Ayuda a priorizar proyectos y fortalece la continuidad operativa.",
            "Permite decidir con visión integral y apoya la transformación digital."
          ]
        },
        {
          tipo: "lista",
          titulo: "Limitaciones",
          items: [
            "No genera valor si se queda como documentación.",
            "Puede volverse burocrática si intenta modelarlo todo.",
            "Necesita participación del negocio, no solamente de TI.",
            "Requiere gobierno y actualización continua."
          ]
        }
      ]
    },

    /* ---------- MARTES ---------- */
    {
      id: "martes",
      nombre: "Martes · Sesión 2",
      tema: "Procesos, BPM y generación de valor",
      proposito: "Comprender cómo los procesos conectan diferentes áreas de la empresa y cómo se mide el valor que reciben el cliente y la organización.",
      bloques: [
        {
          tipo: "defs",
          titulo: "Proceso frente a proyecto",
          items: [
            { termino: "Proceso", definicion: "Conjunto <b>repetible</b> de actividades que transforma entradas en resultados para un cliente. Ejemplo: recibir, preparar y entregar un pedido." },
            { termino: "Proyecto", definicion: "Esfuerzo <b>temporal</b> realizado para producir un resultado único. Ejemplo: implementar un nuevo sistema de pedidos." },
            { termino: "Idea clave", definicion: "El proyecto termina; el proceso continúa operando." }
          ]
        },
        {
          tipo: "lista",
          titulo: "Componentes de un proceso",
          items: ["Cliente", "Proveedor", "Entrada", "Actividades", "Roles y responsables", "Reglas", "Recursos", "Datos", "Aplicaciones", "Controles", "Salidas", "Indicadores"]
        },
        {
          tipo: "texto",
          titulo: "Proceso end-to-end y trabajo cross-functional",
          cuerpo: "<p>Un proceso <b>end-to-end</b> se analiza desde la necesidad inicial hasta el resultado recibido por el cliente. <b>Cross-functional</b> significa que el trabajo atraviesa varias funciones o departamentos.</p>"
                + "<p>El cliente no percibe departamentos; percibe una sola experiencia.</p>"
        },
        {
          tipo: "flujo",
          titulo: "Ejemplo end-to-end",
          pasos: ["Cliente solicita", "Ventas registra", "Crédito valida", "Producción fabrica", "Logística entrega", "Finanzas factura"]
        },
        {
          tipo: "nota",
          titulo: "Pregunta detonadora",
          cuerpo: "<p>Si cada departamento cumple sus propios indicadores, pero el pedido llega tarde, ¿el proceso fue exitoso?</p>"
                + "<p><b>No.</b> Hubo eficiencia local, pero falta de efectividad integral.</p>"
        },
        {
          tipo: "defs",
          titulo: "Cliente, valor y cadena de valor",
          items: [
            { termino: "Cliente", definicion: "Receptor del resultado del proceso; puede ser externo o interno." },
            { termino: "Customer value", definicion: "Beneficio que el cliente percibe frente al costo, tiempo o esfuerzo realizado." },
            { termino: "Actividad con valor", definicion: "Transforma el producto o servicio, el cliente reconoce su utilidad, se realiza correctamente y contribuye al resultado esperado." },
            { termino: "Actividad necesaria", definicion: "No agrega valor al cliente, pero el negocio o el cumplimiento la exigen (por ejemplo, un control regulatorio)." },
            { termino: "Actividad sin valor", definicion: "Espera, retrabajo, captura duplicada, traslado innecesario." }
          ]
        },
        {
          tipo: "texto",
          titulo: "BPM y BPMN no son lo mismo",
          cuerpo: "<p><b>BPM — Business Process Management</b> es la <b>disciplina</b> para identificar, diseñar, ejecutar, medir, controlar y mejorar procesos.</p>"
                + "<p><b>BPMN — Business Process Model and Notation</b> es una <b>notación gráfica estandarizada</b> para representarlos. Sus elementos básicos incluyen eventos, actividades, compuertas, flujos y participantes, y busca que un mismo modelo sea comprensible tanto para usuarios del negocio como para equipos técnicos.</p>"
                + "<p>Frase para clase: <i>“BPM es administrar cómo se realiza el trabajo de principio a fin. BPMN es una forma estandarizada de dibujar ese trabajo.”</i></p>"
        },
        {
          tipo: "pasos",
          titulo: "Ciclo BPM simplificado",
          items: ["Identificar", "Descubrir y documentar", "Analizar", "Rediseñar", "Implementar", "Monitorear", "Mejorar nuevamente"]
        },
        {
          tipo: "defs",
          titulo: "Efectividad, eficiencia y calidad",
          items: [
            { termino: "Efectividad", definicion: "Grado en que se logra el resultado esperado." },
            { termino: "Eficiencia", definicion: "Relación entre el resultado obtenido y los recursos utilizados." },
            { termino: "Calidad", definicion: "Cumplimiento de requisitos y ausencia de defectos." }
          ]
        },
        {
          tipo: "lista",
          titulo: "Indicadores posibles",
          items: ["Tiempo total del proceso (lead time)", "Costo por transacción", "Porcentaje de pedidos a tiempo", "Tasa de errores", "Retrabajos", "Satisfacción del cliente", "Tiempo de espera", "Productividad"]
        },
        {
          tipo: "defs",
          titulo: "Automatización, digitalización y transformación digital",
          items: [
            { termino: "Automatización", definicion: "La tecnología ejecuta una actividad que antes hacía una persona." },
            { termino: "Digitalización", definicion: "Información o actividades pasan a medios digitales." },
            { termino: "Transformación digital", definicion: "Cambian capacidades, procesos, experiencia del cliente o modelo de negocio mediante tecnología." }
          ]
        },
        {
          tipo: "clave",
          titulo: "Advertencia",
          cuerpo: "<p>Digitalizar un formato defectuoso no mejora necesariamente el proceso: puede producir <b>un proceso defectuoso más rápido</b>.</p>"
        },
        {
          tipo: "tabla",
          titulo: "Evolución industrial",
          encabezados: ["Etapa", "Elemento principal", "Ejemplo"],
          filas: [
            ["Industria 2.0", "Electricidad y producción en masa", "Línea de ensamblaje"],
            ["Industria 3.0", "Electrónica, computación y automatización", "Robot industrial programado, PLC, ERP"],
            ["Industria 4.0", "Conectividad, datos e inteligencia (IoT, nube, IA, gemelos digitales)", "Mantenimiento predictivo"],
            ["Industria 5.0", "Personas, sostenibilidad y resiliencia", "Colaboración humano-robot responsable"]
          ]
        },
        {
          tipo: "nota",
          titulo: "3.0 frente a 4.0",
          cuerpo: "<p>En la Industria 3.0 <b>una máquina está automatizada</b>. En la Industria 4.0 <b>las máquinas, los sistemas y las personas están conectados y comparten datos</b> para tomar mejores decisiones.</p>"
        }
      ]
    },

    /* ---------- MIÉRCOLES ---------- */
    {
      id: "miercoles",
      nombre: "Miércoles · Sesión 3",
      tema: "Marcos de Arquitectura Empresarial y estándares",
      proposito: "Diferenciar los principales marcos y comprender que un marco organiza el trabajo, mientras que un estándar establece criterios comunes.",
      bloques: [
        {
          tipo: "lista",
          titulo: "¿Qué proporciona un marco de referencia?",
          items: ["Conceptos compartidos", "Método o estructura de trabajo", "Productos o artefactos", "Roles", "Principios", "Mecanismos de gobierno"]
        },
        {
          tipo: "nota",
          titulo: "Analogía",
          cuerpo: "<p>El marco es como una guía para planear una ciudad: ayuda a decidir qué estudiar, cómo representarlo y cómo coordinar a los participantes, <b>pero no diseña automáticamente cada edificio</b>.</p>"
        },
        {
          tipo: "texto",
          titulo: "TOGAF",
          cuerpo: "<p><b>TOGAF</b> significa <i>The Open Group Architecture Framework</i>. Es un estándar y marco para desarrollar y gobernar la Arquitectura Empresarial; The Open Group publica actualmente su décima edición.</p>"
                + "<p>Mensaje fundamental: <b>TOGAF comienza con el negocio</b>. La tecnología se justifica por los resultados, capacidades y requerimientos que debe soportar.</p>"
        },
        {
          tipo: "pasos",
          titulo: "ADM — Architecture Development Method",
          items: [
            "<b>Preliminar:</b> preparar la capacidad de arquitectura (principios, roles, gobierno, herramientas).",
            "<b>A · Visión de arquitectura:</b> alcance, interesados, objetivos, riesgos, visión inicial AS-IS/TO-BE.",
            "<b>B · Arquitectura de negocio:</b> capacidades, cadena de valor, procesos, organización, indicadores.",
            "<b>C · Arquitecturas de sistemas de información:</b> datos primero, después aplicaciones.",
            "<b>D · Arquitectura tecnológica:</b> infraestructura, nube, redes, plataformas, seguridad.",
            "<b>E · Oportunidades y soluciones:</b> convertir brechas en iniciativas y paquetes de trabajo.",
            "<b>F · Planeación de la migración:</b> priorizar y construir el roadmap.",
            "<b>G · Gobierno de implementación:</b> verificar que los proyectos respeten la arquitectura.",
            "<b>H · Administración del cambio:</b> adaptar la arquitectura cuando cambia el entorno.",
            "<b>Gestión de requerimientos:</b> actividad central y continua, presente en todas las fases."
          ]
        },
        {
          tipo: "svg",
          titulo: "El ciclo ADM",
          pie: "Las fases se recorren en ciclo: al terminar H se vuelve a empezar. La gestión de requerimientos está al centro porque todas las fases identifican, revisan y actualizan requerimientos.",
          svg:
'<svg viewBox="0 0 720 445" role="img" aria-label="Ciclo ADM de TOGAF: fase preliminar y ocho fases A a H dispuestas en círculo, con la gestión de requerimientos al centro">'
+ '<defs><marker id="pa-adm" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path class="punta" d="M0,0 L10,5 L0,10 z"/></marker><marker id="pa-adm-v" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path class="punta-viva" d="M0,0 L10,5 L0,10 z"/></marker></defs>'
+ '<rect class="caja-alt" x="30" y="20" width="160" height="38" rx="10"/>'
+ '<text class="rotulo" x="110" y="44" text-anchor="middle">Preliminar</text>'
+ '<path class="arista" d="M192,40 C240,30 252,48 281,64" marker-end="url(#pa-adm)"/>'
+ '<path class="arista" d="M423.9,77.8 A232,150 0 0 1 472.5,90.8" marker-end="url(#pa-adm)"/>'
+ '<path class="arista" d="M562.9,149.3 A232,150 0 0 1 583,180.7" marker-end="url(#pa-adm)"/>'
+ '<path class="arista" d="M583,263.3 A232,150 0 0 1 562.9,294.7" marker-end="url(#pa-adm)"/>'
+ '<path class="arista" d="M472.5,353.2 A232,150 0 0 1 423.9,366.2" marker-end="url(#pa-adm)"/>'
+ '<path class="arista" d="M296.1,366.2 A232,150 0 0 1 247.5,353.2" marker-end="url(#pa-adm)"/>'
+ '<path class="arista" d="M157.1,294.7 A232,150 0 0 1 137,263.3" marker-end="url(#pa-adm)"/>'
+ '<path class="arista" d="M137,180.7 A232,150 0 0 1 157.1,149.3" marker-end="url(#pa-adm)"/>'
+ '<path class="arista-viva" d="M277,122 C302,138 326,128 334,102" marker-end="url(#pa-adm-v)"/>'
+ '<text class="rotulo-viva" x="306" y="156" text-anchor="middle">cierra el ciclo</text>'
+ '<rect class="caja" x="281" y="48" width="158" height="48" rx="10"/>'
+ '<text class="rotulo" x="360" y="69" text-anchor="middle">A · Visión</text>'
+ '<text class="rotulo-sm" x="360" y="85" text-anchor="middle">alcance e interesados</text>'
+ '<rect class="caja" x="445" y="92" width="158" height="48" rx="10"/>'
+ '<text class="rotulo" x="524" y="113" text-anchor="middle">B · Negocio</text>'
+ '<text class="rotulo-sm" x="524" y="129" text-anchor="middle">capacidades y procesos</text>'
+ '<rect class="caja" x="513" y="198" width="158" height="48" rx="10"/>'
+ '<text class="rotulo" x="592" y="219" text-anchor="middle">C · Datos y apps</text>'
+ '<text class="rotulo-sm" x="592" y="235" text-anchor="middle">datos primero</text>'
+ '<rect class="caja" x="445" y="304" width="158" height="48" rx="10"/>'
+ '<text class="rotulo" x="524" y="325" text-anchor="middle">D · Tecnología</text>'
+ '<text class="rotulo-sm" x="524" y="341" text-anchor="middle">infraestructura</text>'
+ '<rect class="caja" x="281" y="348" width="158" height="48" rx="10"/>'
+ '<text class="rotulo" x="360" y="369" text-anchor="middle">E · Soluciones</text>'
+ '<text class="rotulo-sm" x="360" y="385" text-anchor="middle">brechas → iniciativas</text>'
+ '<rect class="caja" x="117" y="304" width="158" height="48" rx="10"/>'
+ '<text class="rotulo" x="196" y="325" text-anchor="middle">F · Migración</text>'
+ '<text class="rotulo-sm" x="196" y="341" text-anchor="middle">priorizar y roadmap</text>'
+ '<rect class="caja" x="49" y="198" width="158" height="48" rx="10"/>'
+ '<text class="rotulo" x="128" y="219" text-anchor="middle">G · Gobierno</text>'
+ '<text class="rotulo-sm" x="128" y="235" text-anchor="middle">de implementación</text>'
+ '<rect class="caja" x="117" y="92" width="158" height="48" rx="10"/>'
+ '<text class="rotulo" x="196" y="113" text-anchor="middle">H · Cambio</text>'
+ '<text class="rotulo-sm" x="196" y="129" text-anchor="middle">¿sigue vigente?</text>'
+ '<rect class="caja-viva" x="252" y="191" width="216" height="62" rx="12"/>'
+ '<text class="rotulo" x="360" y="216" text-anchor="middle">Gestión de requerimientos</text>'
+ '<text class="rotulo-sm" x="360" y="234" text-anchor="middle">atraviesa todas las fases</text>'
+ '</svg>'
        },
        {
          tipo: "defs",
          titulo: "Artefactos: catálogo, matriz, diagrama",
          items: [
            { termino: "Catálogo", definicion: "Lista organizada. Ejemplo: catálogo de aplicaciones." },
            { termino: "Matriz", definicion: "Muestra relaciones entre dos dimensiones. Ejemplo: matriz proceso-aplicación." },
            { termino: "Diagrama", definicion: "Representa visualmente componentes y relaciones." },
            { termino: "Principio", definicion: "Regla que orienta decisiones. Ejemplo: “se reutilizarán capacidades existentes antes de adquirir nuevas soluciones”." },
            { termino: "Roadmap", definicion: "Secuencia priorizada de iniciativas de transformación." }
          ]
        },
        {
          tipo: "texto",
          titulo: "Zachman",
          cuerpo: "<p>Es principalmente una <b>estructura de clasificación u ontología</b>. Organiza las descripciones de la empresa mediante seis preguntas: "
                + "<b>Qué</b> (datos), <b>Cómo</b> (funciones y procesos), <b>Dónde</b> (ubicaciones y redes), <b>Quién</b> (personas y responsabilidades), "
                + "<b>Cuándo</b> (eventos y ciclos) y <b>Por qué</b> (motivaciones y estrategias), observadas desde distintas perspectivas.</p>"
                + "<p>Zachman ayuda a comprobar que no falten vistas, pero <b>no ofrece una secuencia de transformación</b> equivalente al ADM.</p>"
        },
        {
          tipo: "texto",
          titulo: "Gartner",
          cuerpo: "<p>Su planteamiento se concentra en <b>conectar inversiones y decisiones tecnológicas con resultados empresariales</b>. Destaca la colaboración con los interesados y un gobierno adaptable, en lugar de convertir la arquitectura en una función puramente de control.</p>"
        },
        {
          tipo: "tabla",
          titulo: "Comparación de enfoques",
          encabezados: ["Enfoque", "Principal utilidad"],
          filas: [
            ["TOGAF", "Método para desarrollar y gobernar la arquitectura"],
            ["ADM", "Ciclo operativo de TOGAF"],
            ["Zachman", "Clasificar y ordenar las distintas vistas de la empresa"],
            ["Gartner", "Orientar la arquitectura a resultados de negocio"]
          ]
        },
        {
          tipo: "clave",
          titulo: "Los marcos se complementan",
          cuerpo: "<p>No es obligatorio utilizar un marco de forma pura. Pueden coexistir porque resuelven problemas diferentes.</p>"
        },
        {
          tipo: "lista",
          titulo: "Estándares relacionados",
          items: [
            "<b>ISO/IEC 20000-1:</b> gestión de servicios de TI (planeación, diseño, transición, entrega y mejora).",
            "<b>ISO/IEC 27001:</b> seguridad de la información.",
            "<b>ISO 9001:</b> gestión de calidad.",
            "<b>ISO/IEC/IEEE 12207:</b> procesos del ciclo de vida del software; no obliga a una metodología de desarrollo específica.",
            "<b>ISO/IEC/IEEE 29148:</b> ingeniería de requerimientos.",
            "<b>BPMN / ISO 19510:</b> representación gráfica de procesos."
          ]
        },
        {
          tipo: "nota",
          titulo: "Obligatoriedad",
          cuerpo: "<p>Los estándares orientan o establecen requisitos, pero <b>no todos son obligatorios</b>. Su obligatoriedad depende de leyes, contratos, regulación o decisiones organizacionales.</p>"
        },
        {
          tipo: "clave",
          titulo: "Cierre del día",
          cuerpo: "<p>¿Qué usarías para indicar <b>cómo desarrollar</b> una arquitectura, qué usarías para <b>organizar sus vistas</b> y qué usarías para <b>dibujar un proceso</b>?<br>TOGAF/ADM, Zachman y BPMN, respectivamente.</p>"
        }
      ]
    },

    /* ---------- JUEVES ---------- */
    {
      id: "jueves",
      nombre: "Jueves · Sesión 4",
      tema: "Roles, Transformación Digital e integración",
      proposito: "Integrar estrategia, arquitectura, procesos y desarrollo de soluciones, aclarando responsabilidades profesionales.",
      bloques: [
        {
          tipo: "tabla",
          titulo: "Arquitecto empresarial frente a arquitecto de soluciones",
          encabezados: ["Arquitecto empresarial", "Arquitecto de soluciones"],
          filas: [
            ["Trabaja con alcance organizacional", "Trabaja sobre una necesidad o iniciativa concreta"],
            ["Conecta estrategia y capacidades", "Diseña los componentes de una solución"],
            ["Analiza varios dominios y áreas", "Define integraciones, seguridad y decisiones técnicas"],
            ["Define principios y arquitecturas objetivo", "Evalúa restricciones de costo, tiempo y calidad"],
            ["Identifica duplicidades y dependencias", "Coordina equipos técnicos"],
            ["Construye roadmaps y participa en el gobierno", "Verifica que la solución respete la arquitectura empresarial"],
            ["<i>¿Cómo debe evolucionar la organización como un sistema completo?</i>", "<i>¿Cómo construiremos esta solución específica?</i>"]
          ]
        },
        {
          tipo: "nota",
          titulo: "Ejemplo",
          cuerpo: "<p>El <b>arquitecto empresarial</b> establece una visión regional de clientes. El <b>arquitecto de soluciones</b> diseña la integración entre CRM, ERP y plataforma de datos.</p>"
        },
        {
          tipo: "tabla",
          titulo: "TI frente a Transformación Digital",
          encabezados: ["Departamento de TI", "Área de Transformación Digital"],
          filas: [
            ["Opera servicios y sistemas", "Impulsa cambios en el negocio y la experiencia"],
            ["Administra infraestructura y soporte", "Explora modelos, productos y capacidades"],
            ["Gestiona disponibilidad y seguridad", "Coordina innovación y adopción"],
            ["Mantiene la continuidad operativa", "Busca resultados de transformación"],
            ["Implementa y gobierna tecnología", "Articula negocio, datos, tecnología y cambio"]
          ]
        },
        {
          tipo: "clave",
          titulo: "No son rivales",
          cuerpo: "<p>TI aporta estabilidad y capacidad técnica; Transformación Digital moviliza el cambio; <b>Arquitectura Empresarial ayuda a orquestar ambas perspectivas</b>.</p>"
        },
        {
          tipo: "defs",
          titulo: "Estrategias y transformación",
          items: [
            { termino: "Estrategia comercial", definicion: "Clientes, mercados, canales, productos, ingresos y posicionamiento." },
            { termino: "Estrategia organizacional", definicion: "Capacidades, estructura, talento, operación, cultura y gobierno." },
            { termino: "Transformación empresarial", definicion: "Iniciativas que cambian capacidades, procesos, productos o modelos operativos." }
          ]
        },
        {
          tipo: "lista",
          titulo: "Preguntas para identificar requerimientos estratégicos",
          items: [
            "¿Qué resultado desea la organización?",
            "¿Cómo se medirá?",
            "¿Qué capacidad necesita desarrollar?",
            "¿Qué proceso debe cambiar?",
            "¿Qué datos requiere?",
            "¿Qué aplicaciones lo apoyarán?",
            "¿Qué infraestructura y seguridad serán necesarias?",
            "¿Qué personas y reglas deben cambiar?"
          ]
        },
        {
          tipo: "flujo",
          titulo: "Ejemplo: reducir 20 % el tiempo de entrega",
          pasos: ["Estrategia: −20 % lead time", "Capacidad: planeación integrada", "Proceso: pedido a entrega", "Datos: inventario y producción en tiempo real", "Aplicación: plataforma de planeación", "Tecnología: integración, nube y sensores"]
        },
        {
          tipo: "defs",
          titulo: "Metodologías de desarrollo",
          items: [
            { termino: "Cascada", definicion: "Fases secuenciales; útil cuando el alcance es estable." },
            { termino: "Ágil", definicion: "Desarrollo iterativo con entregas frecuentes." },
            { termino: "DevOps", definicion: "Colaboración entre desarrollo y operación, automatización y retroalimentación continua." }
          ]
        },
        {
          tipo: "clave",
          titulo: "Arquitectura y metodología no compiten",
          cuerpo: "<p>La Arquitectura Empresarial define <b>dirección, restricciones y relaciones</b>; la metodología de desarrollo organiza <b>cómo construir y entregar</b> la solución.</p>"
        },
        {
          tipo: "svg",
          titulo: "Formato de la actividad integradora",
          pie: "Cada equipo entrega una hoja con esta cadena completa: la tecnología aparece al final porque responde a todo lo anterior, y el valor para el cliente es el resultado que justifica la cadena.",
          svg:
'<svg viewBox="0 0 520 424" role="img" aria-label="Cadena descendente: estrategia, capacidad de negocio, proceso end-to-end, datos y aplicaciones, infraestructura, resultado y valor para el cliente">'
+ '<defs><marker id="pa-int" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path class="punta" d="M0,0 L10,5 L0,10 z"/></marker>'
+ '<marker id="pa-int2" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path class="punta" d="M0,0 L10,5 L0,10 z"/></marker></defs>'
+ '<rect class="caja-alt" x="140" y="14" width="240" height="42" rx="10"/>'
+ '<text class="rotulo" x="260" y="40" text-anchor="middle">Estrategia</text>'
+ '<path class="arista" d="M260,58 L260,78" marker-end="url(#pa-int)"/>'
+ '<rect class="caja" x="140" y="82" width="240" height="42" rx="10"/>'
+ '<text class="rotulo" x="260" y="108" text-anchor="middle">Capacidad de negocio</text>'
+ '<path class="arista" d="M260,126 L260,146" marker-end="url(#pa-int)"/>'
+ '<rect class="caja" x="140" y="150" width="240" height="42" rx="10"/>'
+ '<text class="rotulo" x="260" y="176" text-anchor="middle">Proceso end-to-end</text>'
+ '<path class="arista" d="M245,194 C226,206 192,206 175,214" marker-end="url(#pa-int)"/>'
+ '<path class="arista" d="M275,194 C294,206 328,206 345,214" marker-end="url(#pa-int)"/>'
+ '<rect class="caja" x="104" y="220" width="138" height="42" rx="10"/>'
+ '<text class="rotulo" x="173" y="246" text-anchor="middle">Datos</text>'
+ '<rect class="caja" x="278" y="220" width="138" height="42" rx="10"/>'
+ '<text class="rotulo" x="347" y="246" text-anchor="middle">Aplicaciones</text>'
+ '<path class="arista" d="M248,241 L272,241" marker-end="url(#pa-int2)" marker-start="url(#pa-int2)"/>'
+ '<text class="rotulo-sm" x="260" y="212" text-anchor="middle">se necesitan mutuamente</text>'
+ '<path class="arista" d="M173,264 C173,278 238,278 252,288" marker-end="url(#pa-int)"/>'
+ '<path class="arista" d="M347,264 C347,278 282,278 268,288" marker-end="url(#pa-int)"/>'
+ '<rect class="caja" x="140" y="292" width="240" height="42" rx="10"/>'
+ '<text class="rotulo" x="260" y="318" text-anchor="middle">Infraestructura</text>'
+ '<path class="arista" d="M260,336 L260,356" marker-end="url(#pa-int)"/>'
+ '<rect class="caja-viva" x="112" y="360" width="296" height="46" rx="12"/>'
+ '<text class="rotulo" x="260" y="381" text-anchor="middle">Resultado y valor</text>'
+ '<text class="rotulo-sm" x="260" y="397" text-anchor="middle">medido con un indicador que el cliente percibe</text>'
+ '</svg>'
        }
      ]
    }
  ],

  /* ==================== GLOSARIO ==================== */
  terminos: [
    { termino: "Arquitectura Empresarial", sigla: "EA", definicion: "Disciplina que describe cómo funciona hoy una organización y diseña cómo deberá funcionar, alineando capacidades, procesos, datos, aplicaciones y tecnología con la estrategia." },
    { termino: "AS-IS", definicion: "Estado actual: cómo opera realmente la organización hoy." },
    { termino: "TO-BE", definicion: "Estado futuro deseado de la arquitectura." },
    { termino: "Brecha", sigla: "gap", definicion: "Diferencia entre el AS-IS y el TO-BE; es lo que hay que cerrar." },
    { termino: "Roadmap", definicion: "Secuencia priorizada de iniciativas que llevan del AS-IS al TO-BE." },
    { termino: "Arquitectura de negocio", definicion: "Dominio que describe estrategia, capacidades, procesos, organización, reglas, clientes y proveedores." },
    { termino: "Arquitectura de datos", definicion: "Dominio que describe qué datos existen, quién los gobierna, dónde se originan, cómo se comparten y con qué calidad." },
    { termino: "Arquitectura de aplicaciones", definicion: "Dominio que describe los sistemas que apoyan los procesos, sus funciones, integraciones y dependencias." },
    { termino: "Arquitectura tecnológica", definicion: "Dominio que describe infraestructura, redes, nube, plataformas, dispositivos y seguridad técnica." },
    { termino: "TOGAF", sigla: "The Open Group Architecture Framework", definicion: "Marco y estándar para desarrollar y gobernar la Arquitectura Empresarial; su edición vigente es la 10.ª." },
    { termino: "ADM", sigla: "Architecture Development Method", definicion: "Método central de TOGAF: ciclo iterativo de fases Preliminar y A a H, con gestión de requerimientos en el centro." },
    { termino: "Zachman", definicion: "Ontología o esquema de clasificación que organiza las descripciones de la empresa con las preguntas Qué, Cómo, Dónde, Quién, Cuándo y Por qué desde distintas perspectivas." },
    { termino: "Enfoque Gartner", definicion: "Planteamiento de arquitectura centrado en conectar inversiones tecnológicas con resultados de negocio, con gobierno adaptable." },
    { termino: "BPM", sigla: "Business Process Management", definicion: "Disciplina para identificar, documentar, analizar, rediseñar, implementar, monitorear y mejorar procesos." },
    { termino: "BPMN", sigla: "Business Process Model and Notation / ISO 19510", definicion: "Notación gráfica estandarizada para modelar procesos: eventos, actividades, compuertas, flujos y participantes." },
    { termino: "Proceso end-to-end", definicion: "Proceso analizado desde la necesidad inicial hasta el resultado recibido por el cliente, atravesando departamentos." },
    { termino: "Cross-functional", definicion: "Trabajo que atraviesa varias funciones o departamentos de la organización." },
    { termino: "Customer value", definicion: "Beneficio que el cliente percibe frente al costo, tiempo o esfuerzo que le implica." },
    { termino: "Efectividad", definicion: "Grado en que se logra el resultado esperado." },
    { termino: "Eficiencia", definicion: "Relación entre el resultado obtenido y los recursos utilizados." },
    { termino: "Automatización", definicion: "La tecnología ejecuta una actividad que antes realizaba una persona." },
    { termino: "Digitalización", definicion: "Información o actividades pasan a medios digitales, sin que necesariamente cambie el proceso." },
    { termino: "Transformación digital", definicion: "Cambio de capacidades, procesos, experiencia del cliente o modelo de negocio habilitado por tecnología." },
    { termino: "Industria 4.0", definicion: "Integración del mundo físico y digital: IoT, sensores, sistemas ciberfísicos, nube, IA, analítica, gemelos digitales y decisiones en tiempo real." },
    { termino: "Industria 5.0", definicion: "Complemento de Industria 4.0 centrado en las personas, la sostenibilidad y la resiliencia." },
    { termino: "Arquitecto empresarial", definicion: "Rol con alcance organizacional que conecta estrategia y capacidades, define principios y arquitecturas objetivo y construye roadmaps." },
    { termino: "Arquitecto de soluciones", definicion: "Rol que diseña una solución concreta: componentes, integraciones, seguridad y decisiones técnicas, respetando la arquitectura empresarial." }
  ],

  /* ==================== PRÁCTICA ==================== */
  practica: {

    /* ---------- Opción múltiple ---------- */
    opcionMultiple: [
      {
        tema: "Definición de EA",
        pregunta: "¿Cuál de las siguientes describe mejor a la Arquitectura Empresarial?",
        opciones: [
          "Una disciplina que describe cómo funciona hoy la organización y diseña cómo deberá funcionar, alineando capacidades, procesos, datos, aplicaciones y tecnología con la estrategia",
          "El inventario actualizado de todos los sistemas y servidores de la empresa",
          "El organigrama de la organización con sus áreas y reportes",
          "El plan de compra de tecnología para los próximos tres años"
        ],
        correcta: 0,
        explicacion: "La EA es una práctica continua de análisis, diseño, priorización y gobierno que conecta la estrategia con la operación, la información y los sistemas.",
        porQueNo: {
          1: "Un inventario es un insumo (un catálogo, que sí es un artefacto), pero por sí solo no describe relaciones, reglas ni evolución.",
          2: "El organigrama describe estructura de reporte, no capacidades, procesos, datos ni tecnología.",
          3: "Un plan de compras es una consecuencia posible, nunca el punto de partida."
        }
      },
      {
        tema: "Alineación estratégica",
        pregunta: "Una empresa adquiere una plataforma de inteligencia artificial sin haber definido qué problema de negocio resolverá. ¿Está haciendo Arquitectura Empresarial?",
        opciones: [
          "No necesariamente: adquiere tecnología, pero no demuestra alineación estratégica ni generación de valor",
          "Sí, porque incorporar tecnología moderna es en sí mismo arquitectura",
          "Sí, siempre que la plataforma se integre con el ERP",
          "No, porque la IA no forma parte de ningún dominio de arquitectura"
        ],
        correcta: 0,
        explicacion: "La decisión tecnológica debe comenzar con un resultado de negocio esperado. Sin necesidad definida no hay alineación ni valor demostrable.",
        porQueNo: {
          1: "Comprar tecnología no es diseñar la evolución de la organización como sistema.",
          2: "La integración técnica no sustituye la justificación de negocio.",
          3: "La IA sí puede pertenecer a los dominios de aplicaciones y tecnología; el problema es la ausencia de necesidad."
        }
      },
      {
        tema: "Dominios",
        pregunta: "«Definir qué significa <i>cliente activo</i> y quién es responsable de ese dato en México y en Argentina» corresponde principalmente al dominio de…",
        opciones: ["Datos", "Negocio", "Aplicaciones", "Tecnología"],
        correcta: 0,
        explicacion: "Significado, propiedad, calidad y responsabilidad del dato son materia de la arquitectura de datos.",
        porQueNo: {
          1: "Negocio definiría la capacidad y el proceso comercial, no la semántica y gobierno del dato.",
          2: "Aplicaciones diría qué sistema lo almacena, no qué significa ni quién responde por él.",
          3: "Tecnología describiría dónde corre la base de datos, no su significado."
        }
      },
      {
        tema: "Dominios",
        pregunta: "«Una planta usa SAP y otra un sistema local de producción; hay que decidir si se integran, migran o retiran» es una decisión del dominio de…",
        opciones: ["Aplicaciones", "Datos", "Tecnología", "Negocio"],
        correcta: 0,
        explicacion: "La arquitectura de aplicaciones analiza qué sistemas existen, qué función cumplen, cómo se integran y cuáles conservar, integrar, reemplazar o retirar.",
        porQueNo: {
          1: "Datos definiría qué información deben compartir, no el destino de cada sistema.",
          2: "Tecnología definiría la infraestructura sobre la que corren.",
          3: "Negocio definiría el proceso que ambos sistemas deben soportar."
        }
      },
      {
        tema: "Dominios",
        pregunta: "Los sensores industriales instalados en la línea de producción pertenecen al dominio de…",
        opciones: ["Tecnología", "Aplicaciones", "Datos", "Negocio"],
        correcta: 0,
        explicacion: "Dispositivos, redes, servidores, nube y plataformas forman la arquitectura tecnológica: la infraestructura sobre la que operan las aplicaciones.",
        porQueNo: {
          1: "Una aplicación es el sistema que procesa la información que los sensores generan.",
          2: "El dato es la lectura de temperatura o vibración, no el dispositivo.",
          3: "El negocio define para qué se mide (por ejemplo, control de calidad)."
        }
      },
      {
        tema: "AS-IS / TO-BE",
        pregunta: "«Bases de clientes separadas por país» frente a «visión única del cliente». ¿Qué representa cada elemento?",
        opciones: [
          "El primero es el AS-IS y el segundo el TO-BE; integrar y depurar datos es la brecha",
          "El primero es el TO-BE y el segundo el AS-IS",
          "Ambos son estados TO-BE alternativos",
          "El primero es la brecha y el segundo el roadmap"
        ],
        correcta: 0,
        explicacion: "AS-IS es la situación actual, TO-BE la deseada, la brecha es la diferencia entre ambas y el roadmap la secuencia de iniciativas para cerrarla.",
        porQueNo: {
          1: "El estado deseado nunca es el punto de partida del diagnóstico.",
          2: "Solo uno de los dos describe el futuro deseado.",
          3: "La brecha no es un estado, es la diferencia; el roadmap es la ruta, no el destino."
        }
      },
      {
        tema: "AS-IS / TO-BE",
        pregunta: "¿Cuál afirmación sobre el TO-BE es correcta?",
        opciones: [
          "Puede consistir en integrar, estandarizar, reutilizar o retirar solo aquello que no genera valor",
          "Siempre implica reemplazar todos los sistemas heredados",
          "Debe alcanzarse en un único proyecto para evitar estados intermedios",
          "Se define antes de conocer los objetivos del negocio"
        ],
        correcta: 0,
        explicacion: "El TO-BE responde a valor, costo y riesgo. Reemplazar todo rara vez es la decisión con mejor relación entre esos tres.",
        porQueNo: {
          1: "Reemplazar todo es una opción entre varias, no la regla.",
          2: "La fase F de migración existe precisamente porque hay estados intermedios y dependencias.",
          3: "Sin objetivos de negocio no hay criterio para decidir el estado futuro."
        }
      },
      {
        tema: "Proceso y proyecto",
        pregunta: "¿Cuál es la diferencia esencial entre un proceso y un proyecto?",
        opciones: [
          "El proyecto es temporal y produce un resultado único; el proceso es repetible y continúa operando",
          "El proceso lo ejecuta TI y el proyecto el negocio",
          "El proyecto siempre involucra tecnología y el proceso no",
          "El proceso tiene presupuesto y el proyecto no"
        ],
        correcta: 0,
        explicacion: "«El proyecto termina; el proceso continúa operando.» Implementar un sistema de pedidos es proyecto; atender pedidos es proceso.",
        porQueNo: {
          1: "Ambos involucran al negocio y a TI en distinta medida.",
          2: "Existen proyectos sin tecnología y procesos intensivos en tecnología.",
          3: "Ambos consumen recursos y pueden tener presupuesto."
        }
      },
      {
        tema: "Procesos end-to-end",
        pregunta: "Cada departamento cumple sus indicadores, pero el pedido del cliente llega tarde. ¿Cómo se interpreta?",
        opciones: [
          "Hubo eficiencia local pero falta de efectividad integral en el proceso end-to-end",
          "El proceso fue exitoso porque todos los indicadores se cumplieron",
          "Es un problema de calidad del producto, no del proceso",
          "Significa que los indicadores departamentales eran demasiado exigentes"
        ],
        correcta: 0,
        explicacion: "El cliente no percibe departamentos, percibe una sola experiencia. Optimizar cada función por separado puede degradar el resultado global.",
        porQueNo: {
          1: "El resultado esperado por el cliente no se logró: no hubo efectividad.",
          2: "El defecto está en el tiempo de ciclo del flujo, no en el producto.",
          3: "El problema no es su exigencia sino que miden partes aisladas del flujo."
        }
      },
      {
        tema: "Valor",
        pregunta: "Capturar dos veces el mismo pedido en dos sistemas distintos es una actividad…",
        opciones: [
          "Sin valor: es captura duplicada, uno de los desperdicios típicos",
          "Con valor para el cliente, porque garantiza el registro",
          "Necesaria para el negocio por razones de cumplimiento",
          "Con valor porque transforma el producto"
        ],
        correcta: 0,
        explicacion: "Espera, retrabajo, captura duplicada y traslado innecesario son actividades sin valor. El cliente no reconoce utilidad en ellas.",
        porQueNo: {
          1: "El cliente no percibe beneficio alguno por capturar dos veces.",
          2: "Ninguna regulación exige duplicar captura; exigiría trazabilidad, no duplicidad.",
          3: "No transforma el producto ni el servicio."
        }
      },
      {
        tema: "BPM y BPMN",
        pregunta: "¿Cuál es la distinción correcta entre BPM y BPMN?",
        opciones: [
          "BPM es la disciplina para administrar y mejorar procesos; BPMN es la notación gráfica estandarizada para representarlos",
          "BPM es la notación y BPMN la disciplina",
          "BPM es un software y BPMN un estándar ISO de calidad",
          "Son sinónimos; BPMN es solo la abreviatura en inglés"
        ],
        correcta: 0,
        explicacion: "«BPM es administrar cómo se realiza el trabajo de principio a fin; BPMN es una forma estandarizada de dibujar ese trabajo.»",
        porQueNo: {
          1: "Está invertido.",
          2: "BPM no es un producto; BPMN corresponde a ISO 19510, no a un estándar de calidad.",
          3: "Son cosas distintas: una disciplina y una notación."
        }
      },
      {
        tema: "BPM",
        pregunta: "En el ciclo BPM simplificado, ¿qué actividad sigue inmediatamente después de «Analizar»?",
        opciones: ["Rediseñar", "Identificar", "Monitorear", "Documentar"],
        correcta: 0,
        explicacion: "El ciclo es: identificar → descubrir y documentar → analizar → rediseñar → implementar → monitorear → mejorar nuevamente.",
        porQueNo: {
          1: "Identificar es el primer paso del ciclo.",
          2: "Monitorear ocurre después de implementar.",
          3: "Documentar es previo al análisis."
        }
      },
      {
        tema: "Efectividad y eficiencia",
        pregunta: "Un proceso entrega el resultado esperado pero consumiendo el doble de recursos previstos. Este proceso es…",
        opciones: [
          "Efectivo pero poco eficiente",
          "Eficiente pero poco efectivo",
          "Ni efectivo ni eficiente",
          "De calidad deficiente por definición"
        ],
        correcta: 0,
        explicacion: "Efectividad es lograr el resultado esperado; eficiencia es la relación entre resultado y recursos utilizados.",
        porQueNo: {
          1: "Está invertido: sí logró el resultado.",
          2: "Sí fue efectivo, porque el resultado se alcanzó.",
          3: "La calidad es cumplimiento de requisitos y ausencia de defectos; puede ser alta aun con baja eficiencia."
        }
      },
      {
        tema: "Transformación digital",
        pregunta: "La empresa cambia un formato de papel por un PDF que se envía por correo, conservando exactamente las mismas firmas y capturas. Esto es…",
        opciones: [
          "Digitalización, no transformación digital",
          "Transformación digital, porque desapareció el papel",
          "Automatización, porque el sistema ejecuta la actividad",
          "Industria 4.0, porque hay medios digitales"
        ],
        correcta: 0,
        explicacion: "Digitalizar un formato defectuoso no mejora el proceso: puede producir un proceso defectuoso más rápido. La transformación digital cambia capacidades, procesos, experiencia o modelo de negocio.",
        porQueNo: {
          1: "No cambiaron capacidades, proceso, experiencia ni modelo de negocio.",
          2: "Sigue habiendo intervención manual en cada paso; la tecnología no ejecuta la actividad.",
          3: "Industria 4.0 implica conectividad, datos y decisiones integradas, no solo medios digitales."
        }
      },
      {
        tema: "Industria 3.0 / 4.0",
        pregunta: "¿Cuál es la diferencia central entre Industria 3.0 e Industria 4.0?",
        opciones: [
          "En 3.0 una máquina está automatizada; en 4.0 máquinas, sistemas y personas están conectados y comparten datos para decidir",
          "En 3.0 se usa electricidad y en 4.0 electrónica",
          "En 3.0 hay robots y en 4.0 desaparecen los robots",
          "En 4.0 se elimina la intervención humana por completo"
        ],
        correcta: 0,
        explicacion: "La 3.0 automatiza con electrónica, PLC y computación; la 4.0 conecta el mundo físico y digital con IoT, nube, analítica e IA.",
        porQueNo: {
          1: "La electricidad y la producción en masa corresponden a la Industria 2.0.",
          2: "En 4.0 hay más robótica, ahora autónoma o colaborativa.",
          3: "La Industria 5.0 justamente reincorpora a la persona al centro; la 4.0 no la elimina."
        }
      },
      {
        tema: "Industria 5.0",
        pregunta: "¿Cuáles son los tres pilares de la Industria 5.0?",
        opciones: [
          "Centrada en las personas, sostenible y resiliente",
          "Automatización, digitalización y conectividad",
          "Nube, inteligencia artificial y analítica",
          "Calidad, costo y tiempo de entrega"
        ],
        correcta: 0,
        explicacion: "La Industria 5.0 complementa a la 4.0 orientando la digitalización hacia el bienestar humano, la sostenibilidad y la capacidad de responder ante crisis.",
        porQueNo: {
          1: "Esos son rasgos de las etapas 3.0 y 4.0.",
          2: "Son tecnologías habilitadoras de la 4.0, no pilares de la 5.0.",
          3: "Es el triángulo clásico de gestión de proyectos."
        }
      },
      {
        tema: "TOGAF",
        pregunta: "¿Qué significa TOGAF y qué es?",
        opciones: [
          "The Open Group Architecture Framework: marco y estándar para desarrollar y gobernar la Arquitectura Empresarial",
          "Total Organizational Governance and Architecture Framework: modelo de gobierno de TI",
          "Un software de modelado de procesos publicado por The Open Group",
          "Una certificación ISO obligatoria para arquitecturas de empresas industriales"
        ],
        correcta: 0,
        explicacion: "TOGAF es un marco de referencia adaptable, no un software ni una certificación obligatoria. Su edición vigente es la 10.ª.",
        porQueNo: {
          1: "El gobierno de TI corresponde más bien a COBIT.",
          2: "TOGAF no es una herramienta; existen herramientas que lo soportan.",
          3: "No es una norma ISO ni es obligatorio."
        }
      },
      {
        tema: "ADM",
        pregunta: "En el ciclo ADM, ¿qué se coloca en el centro del diagrama y por qué?",
        opciones: [
          "La gestión de requerimientos, porque todas las fases identifican, revisan y actualizan requerimientos",
          "La arquitectura tecnológica, porque toda la empresa depende de la infraestructura",
          "La fase A, porque es la primera del ciclo",
          "El gobierno de implementación, porque supervisa a las demás fases"
        ],
        correcta: 0,
        explicacion: "Los requerimientos se identifican, documentan, priorizan, validan y cambian a lo largo de todo el ciclo; por eso son la actividad central y continua.",
        porQueNo: {
          1: "La tecnología es la fase D y se justifica por las fases anteriores.",
          2: "Ser la primera fase no la coloca en el centro; A está en el perímetro del ciclo.",
          3: "El gobierno es la fase G, con alcance sobre la implementación, no sobre todo el método."
        }
      },
      {
        tema: "ADM",
        pregunta: "¿En qué fase del ADM se agrupan las brechas en iniciativas y paquetes de trabajo?",
        opciones: ["E · Oportunidades y soluciones", "F · Planeación de la migración", "B · Arquitectura de negocio", "G · Gobierno de la implementación"],
        correcta: 0,
        explicacion: "La fase E convierte brechas en iniciativas; la fase F las prioriza y ordena en el roadmap.",
        porQueNo: {
          1: "F prioriza y secuencia lo que E ya identificó.",
          2: "B diseña cómo debe operar el negocio.",
          3: "G verifica que lo construido respete la arquitectura."
        }
      },
      {
        tema: "ADM",
        pregunta: "Dentro de la fase C del ADM, ¿qué se define primero?",
        opciones: [
          "Los datos, y después las aplicaciones que los utilizarán",
          "Las aplicaciones, y después los datos que necesitan",
          "La infraestructura que soportará ambos",
          "Los proveedores de software candidatos"
        ],
        correcta: 0,
        explicacion: "La fase C cubre arquitectura de datos (C1) y de aplicaciones (C2). Primero se determina qué información necesita el negocio y luego qué sistemas la producirán y compartirán.",
        porQueNo: {
          1: "Elegir aplicaciones antes de conocer la información necesaria lleva a duplicidad y sistemas mal justificados.",
          2: "La infraestructura corresponde a la fase D.",
          3: "La selección de productos es una decisión de solución, posterior."
        }
      },
      {
        tema: "Zachman",
        pregunta: "¿Cuál es la utilidad principal del marco de Zachman?",
        opciones: [
          "Clasificar y ordenar las distintas vistas de la empresa mediante las preguntas Qué, Cómo, Dónde, Quién, Cuándo y Por qué",
          "Proporcionar una secuencia de fases para desarrollar la arquitectura",
          "Gobernar la entrega de servicios de TI",
          "Modelar gráficamente procesos de negocio"
        ],
        correcta: 0,
        explicacion: "Zachman es principalmente una ontología o esquema de clasificación: ayuda a comprobar que no falten vistas, pero no ofrece un ciclo de transformación como el ADM.",
        porQueNo: {
          1: "Esa es la función del ADM de TOGAF.",
          2: "Eso corresponde a ITIL o ISO/IEC 20000-1.",
          3: "Para modelar procesos se usa BPMN."
        }
      },
      {
        tema: "Artefactos",
        pregunta: "Una lista organizada de todas las aplicaciones de la empresa con su función y responsable es un…",
        opciones: ["Catálogo", "Matriz", "Diagrama", "Principio"],
        correcta: 0,
        explicacion: "Catálogo = lista organizada; matriz = relaciones entre dos dimensiones; diagrama = representación visual; principio = regla que orienta decisiones.",
        porQueNo: {
          1: "Una matriz cruzaría, por ejemplo, procesos contra aplicaciones.",
          2: "Un diagrama mostraría componentes y relaciones gráficamente.",
          3: "Un principio es una regla, no un inventario."
        }
      },
      {
        tema: "Roles",
        pregunta: "«Definir la visión regional única de clientes y el roadmap para lograrla» corresponde a…",
        opciones: [
          "El arquitecto empresarial",
          "El arquitecto de soluciones",
          "El líder de infraestructura",
          "El gerente de proyecto"
        ],
        correcta: 0,
        explicacion: "El arquitecto empresarial trabaja con alcance organizacional: conecta estrategia y capacidades, define arquitecturas objetivo y construye roadmaps.",
        porQueNo: {
          1: "El arquitecto de soluciones diseñaría después la integración concreta entre CRM, ERP y plataforma de datos.",
          2: "Infraestructura opera el dominio tecnológico.",
          3: "El gerente de proyecto administra alcance, tiempo y costo de una iniciativa."
        }
      },
      {
        tema: "TI y Transformación Digital",
        pregunta: "¿Cuál es la relación correcta entre TI, Transformación Digital y Arquitectura Empresarial?",
        opciones: [
          "TI aporta estabilidad y capacidad técnica, Transformación Digital moviliza el cambio y la Arquitectura Empresarial orquesta ambas perspectivas",
          "Transformación Digital sustituye al departamento de TI",
          "La Arquitectura Empresarial es un área dentro de Transformación Digital que no interactúa con TI",
          "TI debe decidir la estrategia de transformación por ser dueña de la tecnología"
        ],
        correcta: 0,
        explicacion: "No deben presentarse como rivales: cumplen funciones distintas y complementarias.",
        porQueNo: {
          1: "La continuidad operativa y la seguridad siguen siendo indispensables.",
          2: "La EA necesita participación del negocio y de TI, no aislamiento.",
          3: "La estrategia la define el negocio; TI la habilita."
        }
      },
      {
        tema: "Metodologías",
        pregunta: "¿Qué relación existe entre la Arquitectura Empresarial y metodologías como Ágil o DevOps?",
        opciones: [
          "La arquitectura define dirección, restricciones y relaciones; la metodología organiza cómo construir y entregar la solución",
          "La arquitectura sustituye a la metodología de desarrollo",
          "Ágil elimina la necesidad de arquitectura empresarial",
          "DevOps es un marco de arquitectura empresarial equivalente a TOGAF"
        ],
        correcta: 0,
        explicacion: "Son capas distintas y complementarias: una decide el rumbo y los límites, la otra organiza la construcción y la entrega.",
        porQueNo: {
          1: "Son complementarias, no sustitutas.",
          2: "Ágil entrega iterativamente dentro de las restricciones que la arquitectura define.",
          3: "DevOps es una práctica de colaboración y automatización entre desarrollo y operación."
        }
      }
    ],

    /* ---------- Escenario → marco ---------- */
    escenarios: [
      {
        escenario: "El corporativo necesita rediseñar y gobernar la arquitectura completa después de adquirir tres plantas en Argentina, y quiere un método que vaya de la visión al roadmap.",
        opciones: ["TOGAF y su ADM", "BPMN", "ISO 9001", "Six Sigma"],
        correcta: 0,
        explicacion: "TOGAF ofrece el marco y el ADM el ciclo de fases para desarrollar y gobernar la arquitectura de extremo a extremo.",
        porQueNo: {
          1: "BPMN sirve para dibujar procesos, no para conducir una transformación completa.",
          2: "ISO 9001 gestiona calidad, no arquitectura.",
          3: "Six Sigma reduce variación y defectos en procesos específicos."
        }
      },
      {
        escenario: "Quieren representar gráficamente el proceso «pedido a entrega» de modo que lo entiendan tanto el área comercial como los desarrolladores.",
        opciones: ["BPMN", "Zachman", "TOGAF", "ISO/IEC 27001"],
        correcta: 0,
        explicacion: "BPMN es una notación estandarizada pensada precisamente para que un mismo modelo sea comprensible por el negocio y por los equipos técnicos.",
        porQueNo: {
          1: "Zachman clasifica vistas, no es una notación de procesos.",
          2: "TOGAF orienta el desarrollo de la arquitectura completa.",
          3: "ISO/IEC 27001 gestiona la seguridad de la información."
        }
      },
      {
        escenario: "La dirección sospecha que faltan perspectivas en la documentación: hay muchos diagramas de sistemas pero nadie sabe si están cubiertos el «quién», el «cuándo» y el «por qué».",
        opciones: ["Zachman", "ADM", "BPM", "DevOps"],
        correcta: 0,
        explicacion: "Zachman es una ontología de clasificación: sirve justamente para comprobar que las seis preguntas y las distintas perspectivas estén cubiertas.",
        porQueNo: {
          1: "El ADM da secuencia de trabajo, no una comprobación de completitud de vistas.",
          2: "BPM administra procesos, no el conjunto de descripciones de la empresa.",
          3: "DevOps es una práctica de construcción y operación de software."
        }
      },
      {
        escenario: "Antes de integrar sistemas, el corporativo quiere establecer una definición única de «cliente activo», un responsable por cada dato maestro y reglas de calidad y protección.",
        opciones: ["Arquitectura de datos y gobierno de datos", "Arquitectura tecnológica", "Metodología ágil", "Arquitectura de aplicaciones"],
        correcta: 0,
        explicacion: "Significado, propiedad, calidad, seguridad y compartición del dato pertenecen a la arquitectura de datos.",
        porQueNo: {
          1: "La tecnología define la infraestructura donde reside el dato, no su gobierno.",
          2: "Ágil organiza la entrega, no define semántica de datos.",
          3: "Aplicaciones definiría qué sistema es fuente de ese dato, después de acordar su significado."
        }
      },
      {
        escenario: "El proceso de compras tiene 23 horas de espera contra 22 minutos de trabajo real, con retrabajos y capturas duplicadas.",
        opciones: ["Lean y mejora de procesos (BPM)", "ISO/IEC 20000-1", "Zachman", "Arquitectura tecnológica"],
        correcta: 0,
        explicacion: "El problema es desperdicio: espera, retrabajo y captura duplicada. Lean y el ciclo BPM atacan exactamente eso.",
        porQueNo: {
          1: "ISO/IEC 20000-1 gestiona servicios de TI, no el proceso de compras.",
          2: "Zachman clasifica vistas; no elimina desperdicio.",
          3: "Comprar más infraestructura no elimina esperas de aprobación."
        }
      },
      {
        escenario: "Una iniciativa concreta requiere diseñar cómo se integrarán el CRM, el ERP y la plataforma de datos, con qué interfaces, qué controles de seguridad y bajo qué restricciones de costo y tiempo.",
        opciones: ["Arquitecto de soluciones", "Arquitecto empresarial", "Área de Transformación Digital", "Comité de dirección"],
        correcta: 0,
        explicacion: "El arquitecto de soluciones trabaja sobre una necesidad concreta: componentes, integraciones, seguridad y decisiones técnicas, respetando la arquitectura empresarial.",
        porQueNo: {
          1: "El arquitecto empresarial ya definió la visión regional; no baja al diseño de esta solución.",
          2: "Transformación Digital moviliza el cambio, no diseña la integración técnica.",
          3: "El comité prioriza y autoriza, no diseña."
        }
      },
      {
        escenario: "Un proyecto quiere crear su propia base de datos aislada de clientes, aunque la arquitectura ya definió una fuente única de datos de cliente.",
        opciones: ["Fase G · Gobierno de la implementación", "Fase B · Arquitectura de negocio", "Fase H · Gestión del cambio", "Fase A · Visión"],
        correcta: 0,
        explicacion: "La fase G verifica que lo que se está construyendo cumpla los principios y el diseño acordados, y administra las excepciones justificadas.",
        porQueNo: {
          1: "B diseña cómo debe operar el negocio, no supervisa proyectos.",
          2: "H evalúa cambios del entorno que obliguen a actualizar la arquitectura.",
          3: "A define alcance y visión al inicio del ciclo."
        }
      },
      {
        escenario: "Cambió la regulación ambiental en Argentina y aparecieron nuevos competidores regionales; hay que evaluar si la arquitectura objetivo sigue siendo válida.",
        opciones: ["Fase H · Administración del cambio de arquitectura", "Fase F · Planeación de la migración", "Fase D · Arquitectura tecnológica", "Fase Preliminar"],
        correcta: 0,
        explicacion: "La fase H evalúa cambios internos y externos —estrategias, regulaciones, tecnologías, competidores, riesgos— y decide si se inicia otro ciclo.",
        porQueNo: {
          1: "F ordena y prioriza iniciativas ya definidas.",
          2: "D define infraestructura y plataformas.",
          3: "La preliminar prepara la capacidad de arquitectura al inicio."
        }
      }
    ],

    /* ---------- Clasificar ---------- */
    clasificar: [
      {
        consigna: "Clasifica cada elemento de la acerera en el dominio de arquitectura que le corresponde.",
        categorias: ["Negocio", "Datos", "Aplicaciones", "Tecnología"],
        items: [
          { texto: "Proceso de compras regional", categoria: "Negocio" },
          { texto: "Capacidad de control de calidad", categoria: "Negocio" },
          { texto: "Política de crédito a clientes", categoria: "Negocio" },
          { texto: "Definición de «cliente activo»", categoria: "Datos" },
          { texto: "Catálogo maestro de proveedores", categoria: "Datos" },
          { texto: "Resultados de pruebas por lote", categoria: "Datos" },
          { texto: "SAP ERP", categoria: "Aplicaciones" },
          { texto: "CRM comercial", categoria: "Aplicaciones" },
          { texto: "Sistema local de producción", categoria: "Aplicaciones" },
          { texto: "Sensores industriales de vibración", categoria: "Tecnología" },
          { texto: "Enlace de telecomunicaciones México–Argentina", categoria: "Tecnología" },
          { texto: "Nube y servidores", categoria: "Tecnología" }
        ],
        explicacion: "Regla práctica: el <b>negocio</b> dice qué hay que hacer; los <b>datos</b>, qué información se necesita; las <b>aplicaciones</b>, qué sistemas la producen y procesan; la <b>tecnología</b>, sobre qué infraestructura corren."
      },
      {
        consigna: "Clasifica cada actividad del proceso «pedido a entrega» según su aporte de valor.",
        categorias: ["Con valor para el cliente", "Necesaria para el negocio", "Sin valor (desperdicio)"],
        items: [
          { texto: "Fabricar el producto conforme a especificación", categoria: "Con valor para el cliente" },
          { texto: "Entregar el pedido en la planta del cliente", categoria: "Con valor para el cliente" },
          { texto: "Realizar la prueba de calidad del lote", categoria: "Con valor para el cliente" },
          { texto: "Validar el crédito del cliente", categoria: "Necesaria para el negocio" },
          { texto: "Emitir la factura fiscal", categoria: "Necesaria para el negocio" },
          { texto: "Registrar la trazabilidad exigida por norma", categoria: "Necesaria para el negocio" },
          { texto: "Esperar 18 horas la firma del gerente", categoria: "Sin valor (desperdicio)" },
          { texto: "Capturar el pedido en Excel y luego en el ERP", categoria: "Sin valor (desperdicio)" },
          { texto: "Rehacer la orden por un dato mal capturado", categoria: "Sin valor (desperdicio)" }
        ],
        explicacion: "Una actividad agrega valor cuando transforma el producto o servicio, el cliente reconoce su utilidad y contribuye al resultado esperado. Espera, retrabajo y captura duplicada nunca lo hacen."
      },
      {
        consigna: "¿A qué corresponde cada elemento: al marco/método, o al lenguaje y los estándares?",
        categorias: ["Marco o método de arquitectura", "Notación o estándar", "Disciplina de procesos"],
        items: [
          { texto: "TOGAF", categoria: "Marco o método de arquitectura" },
          { texto: "ADM", categoria: "Marco o método de arquitectura" },
          { texto: "Zachman", categoria: "Marco o método de arquitectura" },
          { texto: "Enfoque Gartner", categoria: "Marco o método de arquitectura" },
          { texto: "BPMN / ISO 19510", categoria: "Notación o estándar" },
          { texto: "ISO/IEC 27001", categoria: "Notación o estándar" },
          { texto: "ISO/IEC 20000-1", categoria: "Notación o estándar" },
          { texto: "ISO 9001", categoria: "Notación o estándar" },
          { texto: "BPM", categoria: "Disciplina de procesos" }
        ],
        explicacion: "Un marco organiza el trabajo y aporta método, roles y gobierno. Un estándar establece criterios comunes o requisitos, y una notación define cómo representar. BPM es la disciplina de administración de procesos: no es notación ni norma."
      }
    ],

    /* ---------- Ordenar ---------- */
    ordenar: [
      {
        consigna: "Ordena las fases del ciclo ADM de TOGAF, desde la preparación hasta la administración del cambio.",
        pasos: [
          "Preliminar · preparar la capacidad de arquitectura",
          "A · Visión de arquitectura",
          "B · Arquitectura de negocio",
          "C · Arquitecturas de datos y aplicaciones",
          "D · Arquitectura tecnológica",
          "E · Oportunidades y soluciones",
          "F · Planeación de la migración",
          "G · Gobierno de la implementación",
          "H · Administración del cambio"
        ],
        explicacion: "La gestión de requerimientos no ocupa una posición en la secuencia: está en el centro porque atraviesa todas las fases."
      },
      {
        consigna: "Ordena la cadena de alineación que debe seguir toda decisión tecnológica.",
        pasos: ["Estrategia", "Capacidades", "Procesos", "Datos", "Aplicaciones", "Tecnología"],
        explicacion: "La tecnología está al final porque debe responder a una necesidad del negocio, no al revés."
      },
      {
        consigna: "Ordena el ciclo BPM simplificado.",
        pasos: ["Identificar", "Descubrir y documentar", "Analizar", "Rediseñar", "Implementar", "Monitorear", "Mejorar nuevamente"],
        explicacion: "El ciclo es continuo: monitorear alimenta la siguiente mejora, y el proceso vuelve a analizarse."
      },
      {
        consigna: "Ordena la secuencia de diagnóstico y transformación.",
        pasos: ["AS-IS · situación actual", "Análisis de brechas", "TO-BE · situación deseada", "Roadmap · iniciativas priorizadas", "Implementación y gobierno"],
        explicacion: "Sin AS-IS documentado no hay brecha demostrable, y sin brecha el TO-BE es una lista de deseos."
      }
    ],

    /* ---------- Flashcards ---------- */
    flashcards: [
      { frente: "Arquitectura Empresarial", reverso: "Disciplina que describe cómo funciona hoy la organización y diseña cómo deberá funcionar, alineando capacidades, procesos, datos, aplicaciones y tecnología con la estrategia." },
      { frente: "Los cuatro dominios", reverso: "Negocio · Datos · Aplicaciones · Tecnología." },
      { frente: "AS-IS", reverso: "Situación actual: cómo opera realmente la organización hoy." },
      { frente: "TO-BE", reverso: "Situación futura deseada. No implica necesariamente reemplazar todos los sistemas." },
      { frente: "Brecha (gap)", reverso: "Diferencia entre el estado actual y el deseado." },
      { frente: "Roadmap", reverso: "Iniciativas ordenadas y priorizadas para cerrar las brechas." },
      { frente: "TOGAF", reverso: "The Open Group Architecture Framework: marco y estándar para desarrollar y gobernar la Arquitectura Empresarial. Edición vigente: 10.ª." },
      { frente: "ADM", reverso: "Architecture Development Method: método central de TOGAF; ciclo Preliminar y fases A–H con gestión de requerimientos en el centro." },
      { frente: "Fase A del ADM", reverso: "Visión de arquitectura: problema u oportunidad, objetivos, alcance, interesados, riesgos y visión inicial AS-IS/TO-BE." },
      { frente: "Fase C del ADM", reverso: "Arquitecturas de sistemas de información: primero datos (C1), después aplicaciones (C2)." },
      { frente: "Fase G del ADM", reverso: "Gobierno de la implementación: verificar que lo que se construye respete principios, estándares y el TO-BE." },
      { frente: "Zachman", reverso: "Ontología de clasificación: Qué, Cómo, Dónde, Quién, Cuándo, Por qué, desde distintas perspectivas. No es un método de transformación." },
      { frente: "Enfoque Gartner", reverso: "Arquitectura orientada a resultados de negocio, con colaboración con interesados y gobierno adaptable." },
      { frente: "BPM", reverso: "Business Process Management: disciplina para identificar, documentar, analizar, rediseñar, implementar, monitorear y mejorar procesos." },
      { frente: "BPMN", reverso: "Notación gráfica estandarizada (ISO 19510) para modelar procesos: eventos, actividades, compuertas, flujos y participantes." },
      { frente: "Proceso frente a proyecto", reverso: "El proyecto es temporal y produce un resultado único; el proceso es repetible y sigue operando." },
      { frente: "Proceso end-to-end", reverso: "Se analiza desde la necesidad inicial hasta el resultado que recibe el cliente, atravesando departamentos." },
      { frente: "Efectividad vs. eficiencia", reverso: "Efectividad: se logra el resultado esperado. Eficiencia: relación entre resultado y recursos utilizados." },
      { frente: "Actividad sin valor", reverso: "Espera, retrabajo, captura duplicada, traslado innecesario." },
      { frente: "Automatización / digitalización / transformación digital", reverso: "Automatizar: la tecnología ejecuta la actividad. Digitalizar: la información pasa a medios digitales. Transformar: cambian capacidades, procesos, experiencia o modelo de negocio." },
      { frente: "Industria 4.0", reverso: "Automatización + conectividad + datos: IoT, sistemas ciberfísicos, nube, IA, analítica, gemelos digitales, decisiones en tiempo real." },
      { frente: "Industria 5.0", reverso: "Complementa a la 4.0: centrada en las personas, sostenible y resiliente." },
      { frente: "Arquitecto empresarial", reverso: "Alcance organizacional: conecta estrategia y capacidades, define principios y arquitecturas objetivo, construye roadmaps y participa en el gobierno." },
      { frente: "Arquitecto de soluciones", reverso: "Alcance de una iniciativa: diseña componentes, integraciones, seguridad y decisiones técnicas respetando la arquitectura empresarial." },
      { frente: "Catálogo, matriz y diagrama", reverso: "Catálogo: lista organizada. Matriz: relaciones entre dos dimensiones. Diagrama: representación visual de componentes y relaciones." }
    ]
  }
});
