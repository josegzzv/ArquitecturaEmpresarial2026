/* ============================================================
   SEMANA 3 — Análisis, diseño y mejora de procesos
   4 sesiones de 2 horas
   Núcleo del módulo: justificación DURA (matemática) de la mejora
   ============================================================ */

EA.registrarSemana({
  id: 3,
  estado: "publicada",
  titulo: "Análisis, diseño y mejora de procesos",
  subtitulo: "Tiempo de ciclo, capacidad, cuello de botella y rediseño con evidencia numérica.",
  sesiones: 4,

  objetivos: [
    "Explicar la administración por procesos (BPM), su ciclo de vida y su relación con BPMN y el modelo AS-IS.",
    "Distinguir automatización, digitalización y transformación digital, y ubicar a la tecnología como habilitador de la eficiencia operativa.",
    "Calcular el tiempo de ciclo (CT) de un proceso con rutas múltiples, rutas paralelas y retrabajo.",
    "Calcular el tiempo teórico de ciclo (TCT) y la eficiencia del ciclo, y explicar qué revela la diferencia.",
    "Calcular el takt time y contrastarlo con el tiempo de ciclo.",
    "Calcular la capacidad de un proceso, identificar el cuello de botella y determinar la capacidad en uso.",
    "Aplicar la teoría de restricciones para decidir dónde invertir.",
    "Diseñar una propuesta de mejora y sustentarla con reducción de tiempo, de costo o aumento de capacidad."
  ],

  dias: [

    /* ================= SESIÓN 1 ================= */
    {
      id: "s1",
      nombre: "Sesión 1",
      tema: "Administración por procesos, BPM y el modelo AS-IS",
      proposito: "Establecer el vocabulario y el método antes de tocar números: qué es administrar por procesos, cómo se modela la situación actual y por qué la tecnología es habilitador, no punto de partida.",
      bloques: [
        {
          tipo: "clave",
          titulo: "La idea que organiza toda la semana",
          cuerpo: "<p>De nada sirve ampliar las cajas de pago del supermercado si no hay cajeros suficientes, o si cada producto a granel que se pesa alarga el cobro. "
                + "<b>La tecnología es el habilitador de la eficiencia operativa, no la estrategia.</b> Un proyecto de transformación digital se justifica porque reduce costo, acelera un tiempo o genera valor — no porque la tecnología esté de moda.</p>"
        },
        {
          tipo: "defs",
          titulo: "Administración por procesos (BPM)",
          items: [
            { termino: "Administración por procesos", definicion: "Forma de gestionar la organización tomando los <b>procesos end-to-end</b> como unidad de análisis y mejora, en lugar de las funciones o departamentos." },
            { termino: "BPM — Business Process Management", definicion: "Disciplina para identificar, modelar, ejecutar, medir, controlar y mejorar los procesos de negocio de manera continua." },
            { termino: "BPM — Business Process Modeling", definicion: "En este módulo el acrónimo también se usa para el <b>modelado</b> de procesos: representar el proceso para poder analizarlo. Por el contexto se distingue de la disciplina de administración." },
            { termino: "BPMN — Business Process Model and Notation", definicion: "La <b>notación</b> estándar (ISO 19510) con la que se dibuja: eventos, actividades, compuertas, flujos y carriles. BPM es la disciplina; BPMN es el lenguaje." }
          ]
        },
        {
          tipo: "pasos",
          titulo: "Ciclo de vida de la administración de procesos",
          items: [
            "<b>Identificación:</b> qué procesos existen y cuáles importan (arquitectura de procesos).",
            "<b>Descubrimiento:</b> levantar cómo opera hoy → <b>modelo AS-IS</b>.",
            "<b>Análisis:</b> medir tiempos, costos, capacidad; detectar desperdicio y cuellos de botella.",
            "<b>Rediseño:</b> proponer el modelo TO-BE y evaluar alternativas.",
            "<b>Implementación:</b> cambios organizacionales y automatización.",
            "<b>Monitoreo y control:</b> indicadores en operación; el desvío regresa a análisis."
          ]
        },
        {
          tipo: "nota",
          titulo: "Secuencia de aprendizaje del reto",
          cuerpo: "<p>1. Selección del proceso a analizar · 2. Conocer los elementos del proceso · 3. Análisis de la situación actual · 4. Métricas de desempeño · 5. Diseño de la propuesta de mejora.</p>"
                + "<p>Los pasos 3 y 4 son los que esta semana convierte en <b>números defendibles</b>.</p>"
        },
        {
          tipo: "lista",
          titulo: "Componentes del proceso (process components)",
          items: [
            "<b>Entradas y salidas:</b> qué recibe y qué entrega.",
            "<b>Actividades:</b> el trabajo propiamente dicho.",
            "<b>Recursos:</b> personas, máquinas, sistemas — y <b>cuántas unidades</b> hay de cada uno. Este dato decide la capacidad.",
            "<b>Roles y responsables:</b> quién ejecuta y quién autoriza.",
            "<b>Reglas y controles:</b> políticas, inspecciones, umbrales de aprobación.",
            "<b>Datos y aplicaciones:</b> qué información se crea, se consulta y dónde vive.",
            "<b>Eventos:</b> qué dispara el proceso y qué lo interrumpe.",
            "<b>Indicadores:</b> cómo se sabe si el proceso está bien."
          ]
        },
        {
          tipo: "tabla",
          titulo: "Proyectos frente a procesos",
          encabezados: ["Proceso", "Proyecto"],
          filas: [
            ["Repetible; se ejecuta muchas veces", "Temporal; tiene inicio y fin"],
            ["Produce un resultado recurrente", "Produce un resultado único"],
            ["Se mide con tiempo de ciclo, capacidad, costo por transacción", "Se mide con alcance, tiempo, costo del entregable"],
            ["Se mejora", "Se entrega y se cierra"],
            ["Ejemplo: atender pedidos", "Ejemplo: implementar el sistema que atenderá pedidos"]
          ]
        },
        {
          tipo: "defs",
          titulo: "Modelo AS-IS y diagrama de precedencia",
          items: [
            { termino: "Modelo AS-IS", definicion: "Representación del proceso <b>tal como opera hoy</b>, con sus tiempos, esperas, retrabajos y recursos reales. No es cómo debería operar ni cómo dice el manual." },
            { termino: "Diagrama de precedencia", definicion: "Representación que muestra qué actividad depende de cuál. Es el paso previo indispensable al cálculo: sin saber qué va en serie, en paralelo o en ramas, no se puede calcular el tiempo de ciclo." },
            { termino: "Tabla de precedencias", definicion: "Actividad · predecesor · tiempo de procesamiento · tiempo de espera · recurso. Es el formato mínimo para poder calcular." }
          ]
        },
        {
          tipo: "lista",
          titulo: "Técnicas de modelación usadas en la industria",
          items: [
            "<b>BPMN (ISO 19510):</b> el estándar de facto para procesos de negocio; comprensible para negocio y para TI.",
            "<b>Diagrama de flujo / flowchart:</b> sencillo, útil para procesos lineales.",
            "<b>SIPOC:</b> delimita alcance antes de modelar el detalle.",
            "<b>Value Stream Mapping (VSM):</b> propio de Lean; hace visible el tiempo que agrega valor frente al que no.",
            "<b>Diagrama de carriles (swimlanes):</b> deja ver los <i>handoffs</i> entre áreas, que es donde se acumulan las esperas.",
            "<b>UML de actividades:</b> más frecuente en contextos de ingeniería de software.",
            "<b>Diagrama de precedencia / red de actividades:</b> el que se usa para calcular tiempos y rutas."
          ]
        },
        {
          tipo: "defs",
          titulo: "Automatización, digitalización y transformación digital",
          items: [
            { termino: "Digitalización", definicion: "La información o la actividad pasa a medios digitales. El proceso puede seguir siendo idéntico." },
            { termino: "Automatización", definicion: "La tecnología <b>ejecuta</b> la actividad: valida, calcula, notifica, actualiza." },
            { termino: "Transformación digital", definicion: "Se cuestiona el proceso completo y cambian capacidades, experiencia del cliente o modelo de negocio." },
            { termino: "Industria 4.0", definicion: "Integración del mundo físico y digital: sensores, IoT, sistemas ciberfísicos, nube, analítica e IA, con decisiones basadas en datos integrados en tiempo real." }
          ]
        },
        {
          tipo: "clave",
          titulo: "Advertencia recurrente",
          cuerpo: "<p>Automatizar un proceso malo produce un proceso malo más rápido y más caro de mantener. <b>Primero se rediseña, después se automatiza.</b></p>"
        },
        {
          tipo: "lista",
          titulo: "Marcos, normas y regulación aplicables al proceso",
          items: [
            "<b>Corporativas:</b> políticas internas, matriz de autorizaciones, segregación de funciones.",
            "<b>Legales y nacionales:</b> obligaciones fiscales (CFDI), protección de datos personales, requisitos laborales.",
            "<b>Industriales:</b> normas sectoriales del giro (automotriz, alimentos, acero, farmacéutico).",
            "<b>Internacionales:</b> ISO 9001 (calidad), ISO/IEC 27001 (seguridad de la información), ISO/IEC 20000-1 (servicios de TI), BPMN/ISO 19510 (modelado).",
            "<b>Marcos de gestión:</b> BPM, Lean, Six Sigma, teoría de restricciones para la mejora; COBIT e ITIL cuando el proceso es de TI."
          ]
        },
        {
          tipo: "nota",
          titulo: "Regla práctica al rediseñar",
          cuerpo: "<p>Una actividad de control que existe por <b>regulación o norma</b> no se elimina aunque no agregue valor al cliente: se rediseña para que cueste menos tiempo (automatizarla, moverla, hacerla por muestreo cuando la norma lo permite).</p>"
        },
        {
          tipo: "texto",
          titulo: "Infraestructura tecnológica como habilitador",
          cuerpo: "<p>La capacidad del proceso está acotada por su recurso más limitado, y ese recurso muchas veces <b>no</b> es la aplicación: es el enlace de red de la sucursal, el número de terminales, la disponibilidad del ERP o la latencia del punto de venta.</p>"
                + "<p>Al proponer una mejora hay que verificar que la infraestructura soporte el nuevo volumen: de nada sirve un portal de autoservicio si el canal de datos o el número de licencias limita la operación.</p>"
        }
      ]
    },

    /* ================= SESIÓN 2 ================= */
    {
      id: "s2",
      nombre: "Sesión 2",
      tema: "Análisis del tiempo de ciclo",
      proposito: "Calcular cuánto tarda realmente un trabajo en atravesar el proceso, cuánto de ese tiempo es trabajo y cuánto es espera, y cómo se manejan las rutas múltiples, las rutas paralelas y el retrabajo.",
      bloques: [
        {
          tipo: "defs",
          titulo: "Los cinco tiempos que hay que distinguir",
          items: [
            { termino: "Tiempo de procesamiento", definicion: "Tiempo en que <b>alguien o algo está efectivamente trabajando</b> en el job. Es el único que consume capacidad del recurso." },
            { termino: "Tiempo de espera", definicion: "Tiempo en que el job <b>está en el proceso pero nadie trabaja en él</b>: cola, aprobación pendiente, traslado, almacenamiento, inspección en fila. Alarga el reloj sin ocupar al recurso." },
            { termino: "Lead time — tiempo de entrega", definicion: "Tiempo total transcurrido <b>desde que el cliente lo pide hasta que lo recibe</b>. Es tiempo de calendario medido con reloj de pared: incluye procesamiento, espera, noches, fines de semana y todo lo que ocurra en medio. Es el tiempo que el cliente percibe." },
            { termino: "Tiempo de ciclo — CT (Cycle Time)", definicion: "Tiempo promedio que toma el <b>proceso</b> en completar un trabajo, de principio a fin. Incluye procesamiento y espera. Se puede medir con cronómetro." },
            { termino: "Tiempo teórico de ciclo — TCT", definicion: "El mismo cálculo pero con <b>solo el tiempo de procesamiento</b>, suponiendo cero esperas. Es el piso al que el proceso podría aspirar sin cambiar la tecnología." },
            { termino: "Takt time", definicion: "Ritmo al que hay que producir para satisfacer la demanda. <b>No se mide con cronómetro: se calcula.</b> Del alemán <i>Takt</i>, compás o ritmo." }
          ]
        },
        {
          tipo: "nota",
          titulo: "Lead time y tiempo de ciclo: la confusión más común del módulo",
          cuerpo: "<p>En muchos textos —y en este curso— se usan casi como sinónimos, y en la mayoría de los ejercicios <b>dan el mismo número</b>. Pero no son lo mismo, y conviene tener clara la diferencia:</p>"
                + "<ul>"
                + "<li>El <b>tiempo de ciclo</b> mira hacia adentro: cuánto tarda <i>el proceso</i> en producir una unidad, contando solo el tiempo en que el trabajo está dentro de sus fronteras.</li>"
                + "<li>El <b>lead time</b> mira hacia afuera: cuánto espera <i>el cliente</i> desde que pide hasta que recibe, en tiempo de calendario.</li>"
                + "</ul>"
                + "<p><b>Ejemplo.</b> El alta de un proveedor tiene un tiempo de ciclo de 45 minutos de trabajo más esperas internas. Pero si la solicitud llega un viernes a las 6 de la tarde y nadie la toca hasta el lunes, el <b>lead time</b> que el proveedor percibe es de 72 horas. El proceso no fue más lento: el calendario sí.</p>"
                + "<p>Regla práctica: cuando el proceso opera de forma continua y el trabajo entra al proceso en el momento en que se solicita, <b>lead time ≈ tiempo de ciclo</b>, y es válido usarlos indistintamente. Cuando hay horarios, turnos, colas previas al arranque o el cliente espera fuera del proceso, <b>hay que medir y reportar el lead time</b>: es el número que le duele al cliente.</p>"
                + "<p>En tu entrega, <b>declara cuál estás midiendo</b> y desde qué evento hasta qué evento. Un indicador sin sus fronteras definidas no es comparable con nada.</p>"
        },
        {
          tipo: "clave",
          titulo: "Tiempo de actividad",
          cuerpo: "<p><b>Tiempo de actividad = tiempo de procesamiento + tiempo de espera</b></p>"
                + "<p>Los tiempos “extra” al procesamiento son inspección, transporte, almacenamiento y espera. Ahí es donde vive el desperdicio.</p>"
        },
        {
          tipo: "clave",
          titulo: "Eficiencia del ciclo",
          cuerpo: "<p><b>Eficiencia del ciclo = TCT / CT</b></p>"
                + "<p>Un proceso con 22 minutos de trabajo real y 23 horas de duración total tiene una eficiencia cercana al 1.6 %. Ese número, por sí solo, ya justifica un proyecto de mejora.</p>"
        },
        {
          tipo: "tabla",
          titulo: "Las cuatro reglas de cálculo",
          encabezados: ["Situación", "Cómo se calcula", "Por qué"],
          filas: [
            ["Actividades <b>secuenciales</b>", "Suma: T₁ + T₂ + … + Tₙ", "El trabajo pasa por todas, una tras otra"],
            ["<b>Rutas múltiples</b> (compuerta exclusiva)", "Σ pᵢ · Tᵢ &nbsp;→&nbsp; p₁T₁ + p₂T₂ + … + pₙTₙ", "Cada trabajo toma solo una rama; se pondera por su probabilidad"],
            ["<b>Rutas paralelas</b> (compuerta AND)", "máx(T₁ … Tₙ)", "Aunque una rama termine antes, debe esperar a la más lenta para converger"],
            ["<b>Retrabajo</b>, una sola repetición", "CT = (1 + r) · T", "Una fracción r de los trabajos repite el ciclo una vez"],
            ["<b>Retrabajo</b>, repeticiones ilimitadas", "CT = T / (1 − r)", "Serie geométrica: puede repetirse tantas veces como sea necesario"]
          ]
        },
        {
          tipo: "nota",
          titulo: "Cuidado con las dos fórmulas de retrabajo",
          cuerpo: "<p>Con r = 0.15 y T = 20 min: una sola repetición da <b>23 min</b> (1.15 × 20); repeticiones ilimitadas dan <b>23.53 min</b> (20 / 0.85). La diferencia crece rápido cuando r sube: con r = 0.4 son 28 min contra 33.3 min.</p>"
                + "<p>Elige la fórmula según lo que diga el proceso real, y <b>declara el supuesto</b> en tu entrega.</p>"
        },
        {
          tipo: "clave",
          titulo: "Takt time",
          cuerpo: "<p><b>Takt = Tiempo neto disponible / Demanda del cliente</b></p>"
                + "<p>Regla mnemotécnica del <i>touchdown</i>: <b>T / D</b>. Si el cliente quiere 240 tostadoras y hay 480 minutos de producción, el takt es de 2 minutos por tostadora.</p>"
        },
        {
          tipo: "tabla",
          titulo: "Takt frente a tiempo de ciclo: qué significa cada comparación",
          encabezados: ["Relación", "Interpretación", "Acción"],
          filas: [
            ["CT &lt; Takt", "El proceso produce más rápido de lo que el cliente pide", "Hay holgura; cuidado con la sobreproducción"],
            ["CT ≈ Takt", "El proceso está sincronizado con la demanda", "Situación objetivo; vigilar la variación"],
            ["CT &gt; Takt", "El proceso es más lento que la demanda", "No se cumplirá la entrega: hay que reducir CT o aumentar capacidad"]
          ]
        },
        {
          tipo: "defs",
          titulo: "Carga, WIP y throughput",
          items: [
            { termino: "Job", definicion: "Un trabajo o unidad que atraviesa el proceso: un pedido, un alta de proveedor, una tostadora." },
            { termino: "WIP — Work in Process", definicion: "Todos los jobs que están dentro del proceso en un momento dado, terminados o no. Se mide en <b>unidades</b> (30 solicitudes, 120 piezas)." },
            { termino: "Throughput", definicion: "Cantidad de jobs que el proceso completa por unidad de tiempo. Es la capacidad efectivamente alcanzada. Se mide en <b>unidades por tiempo</b> (18 solicitudes/hora)." },
            { termino: "Lead time", definicion: "Tiempo total que un job permanece dentro del proceso, desde que entra hasta que sale. Se mide en <b>tiempo</b> (2.5 horas)." },
            { termino: "Ley de Little", definicion: "<b>WIP = Throughput × Lead time.</b> Las unidades cuadran: unidades = (unidades/tiempo) × tiempo. Relaciona los tres: si el WIP sube y la capacidad no, el lead time se alarga proporcionalmente." }
          ]
        },
        {
          tipo: "clave",
          titulo: "Las tres lecturas de la ley de Little",
          cuerpo: "<p>La misma ecuación se despeja de tres formas, y cada una responde una pregunta distinta:</p>"
                + "<ul>"
                + "<li><b>WIP = Throughput × Lead time</b> → ¿cuánto trabajo tengo atorado dentro?</li>"
                + "<li><b>Lead time = WIP / Throughput</b> → ¿cuánto tarda un job si hay tanto trabajo en curso? Es la que usarás casi siempre.</li>"
                + "<li><b>Throughput = WIP / Lead time</b> → ¿a qué ritmo estoy realmente completando trabajo?</li>"
                + "</ul>"
                + "<p><b>La consecuencia que importa:</b> si el throughput está topado por el cuello de botella, meter más trabajo al proceso <b>no produce más</b> — solo alarga el tiempo que cada job pasa esperando. Es la justificación matemática de los límites de WIP en un tablero Kanban.</p>"
        },
        {
          tipo: "svg",
          titulo: "Proceso de referencia con los tres patrones",
          pie: "Los tres patrones en un solo proceso. Cada zona punteada se calcula con su propia regla y el tiempo de ciclo es la suma de los cinco tramos: 10 + 29 + 38.5 + 13 + 2 = 92.5 minutos.",
          svg:
            '<svg viewBox="0 0 1090 352" role="img" aria-label="Proceso de referencia: la actividad A alimenta una compuerta exclusiva que envía 70 por ciento a C y 30 por ciento a B y luego a C; sigue un ciclo D, E e inspección I con 10 por ciento de retrabajo; después una compuerta paralela ejecuta G y F simultáneamente y converge en H">'
            + '<defs><marker id="pa-proc" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path class="punta" d="M0,0 L10,5 L0,10 z"/></marker>'
            + '<marker id="pa-proc-v" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path class="punta-viva" d="M0,0 L10,5 L0,10 z"/></marker></defs>'
            + '<rect class="zona" x="138" y="150" width="280" height="178" rx="16"/>'
            + '<text class="rotulo-viva" x="278" y="142" text-anchor="middle">RUTAS MÚLTIPLES · Σ p·T</text>'
            + '<rect class="zona" x="432" y="96" width="258" height="138" rx="16"/>'
            + '<text class="rotulo-viva" x="561" y="88" text-anchor="middle">RETRABAJO · (1+r)·T</text>'
            + '<rect class="zona" x="714" y="96" width="236" height="214" rx="16"/>'
            + '<text class="rotulo-viva" x="832" y="88" text-anchor="middle">RUTAS PARALELAS · máx</text>'
            + '<circle class="caja" cx="26" cy="200" r="12"/>'
            + '<path class="arista" d="M40,200 L48,200" marker-end="url(#pa-proc)"/>'
            + '<rect class="caja" x="52" y="174" width="76" height="52" rx="9"/>'
            + '<text class="rotulo" x="90" y="196" text-anchor="middle">A</text>'
            + '<text class="rotulo-sm" x="90" y="212" text-anchor="middle">10 min</text>'
            + '<path class="arista" d="M128,200 L142,200" marker-end="url(#pa-proc)"/>'
            + '<polygon class="caja-viva" points="168,177 191,200 168,223 145,200"/>'
            + '<text class="rotulo" x="168" y="205" text-anchor="middle">×</text>'
            + '<path class="arista" d="M191,200 L326,200" marker-end="url(#pa-proc)"/>'
            + '<text class="rotulo-sm" x="258" y="192" text-anchor="middle">0.7</text>'
            + '<path class="arista" d="M168,223 C168,266 196,292 222,292" marker-end="url(#pa-proc)"/>'
            + '<text class="rotulo-sm" x="150" y="262" text-anchor="middle">0.3</text>'
            + '<rect class="caja" x="227" y="266" width="76" height="52" rx="9"/>'
            + '<text class="rotulo" x="265" y="288" text-anchor="middle">B</text>'
            + '<text class="rotulo-sm" x="265" y="304" text-anchor="middle">20 min</text>'
            + '<path class="arista" d="M303,292 C332,292 350,262 358,230" marker-end="url(#pa-proc)"/>'
            + '<rect class="caja" x="332" y="174" width="76" height="52" rx="9"/>'
            + '<text class="rotulo" x="370" y="196" text-anchor="middle">C</text>'
            + '<text class="rotulo-sm" x="370" y="212" text-anchor="middle">23 min</text>'
            + '<path class="arista" d="M408,200 L434,200" marker-end="url(#pa-proc)"/>'
            + '<rect class="caja" x="440" y="174" width="76" height="52" rx="9"/>'
            + '<text class="rotulo" x="478" y="196" text-anchor="middle">D</text>'
            + '<text class="rotulo-sm" x="478" y="212" text-anchor="middle">10 min</text>'
            + '<path class="arista" d="M516,200 L524,200" marker-end="url(#pa-proc)"/>'
            + '<rect class="caja" x="530" y="174" width="76" height="52" rx="9"/>'
            + '<text class="rotulo" x="568" y="196" text-anchor="middle">E</text>'
            + '<text class="rotulo-sm" x="568" y="212" text-anchor="middle">20 min</text>'
            + '<path class="arista" d="M606,200 L630,200" marker-end="url(#pa-proc)"/>'
            + '<polygon class="caja-viva" points="658,176 681,200 658,224 635,200"/>'
            + '<text class="rotulo-sm" x="658" y="204" text-anchor="middle">I · 5</text>'
            + '<path class="arista-viva" d="M652,178 C630,126 520,112 478,170" marker-end="url(#pa-proc-v)"/>'
            + '<text class="rotulo-viva" x="566" y="112" text-anchor="middle">0.1 rechazo → regresa a D</text>'
            + '<path class="arista" d="M681,200 L716,200" marker-end="url(#pa-proc)"/>'
            + '<text class="rotulo-sm" x="700" y="192" text-anchor="middle">0.9</text>'
            + '<polygon class="caja-viva" points="740,180 758,200 740,220 722,200"/>'
            + '<text class="rotulo" x="740" y="205" text-anchor="middle">+</text>'
            + '<path class="arista" d="M740,180 C740,148 776,138 790,133" marker-end="url(#pa-proc)"/>'
            + '<path class="arista" d="M740,220 C740,252 776,262 790,267" marker-end="url(#pa-proc)"/>'
            + '<rect class="caja" x="794" y="104" width="76" height="52" rx="9"/>'
            + '<text class="rotulo" x="832" y="126" text-anchor="middle">G</text>'
            + '<text class="rotulo-sm" x="832" y="142" text-anchor="middle">13 min</text>'
            + '<rect class="caja" x="794" y="244" width="76" height="52" rx="9"/>'
            + '<text class="rotulo" x="832" y="266" text-anchor="middle">F</text>'
            + '<text class="rotulo-sm" x="832" y="282" text-anchor="middle">9 min</text>'
            + '<path class="arista" d="M870,130 C898,140 906,160 916,186" marker-end="url(#pa-proc)"/>'
            + '<path class="arista" d="M870,270 C898,260 906,240 916,214" marker-end="url(#pa-proc)"/>'
            + '<polygon class="caja-viva" points="924,180 942,200 924,220 906,200"/>'
            + '<text class="rotulo" x="924" y="205" text-anchor="middle">+</text>'
            + '<path class="arista" d="M942,200 L954,200" marker-end="url(#pa-proc)"/>'
            + '<rect class="caja" x="958" y="174" width="76" height="52" rx="9"/>'
            + '<text class="rotulo" x="996" y="196" text-anchor="middle">H</text>'
            + '<text class="rotulo-sm" x="996" y="212" text-anchor="middle">2 min</text>'
            + '<path class="arista" d="M1034,200 L1044,200" marker-end="url(#pa-proc)"/>'
            + '<circle class="caja" cx="1060" cy="200" r="12"/><circle class="caja" cx="1060" cy="200" r="7"/>'
            + '</svg>'
        },
        {
          tipo: "texto",
          titulo: "Cómo se arma la expresión del CT",
          cuerpo: "<p>Se recorre el proceso de principio a fin y se aplica la regla que corresponde a cada tramo:</p>"
                + "<ol>"
                + "<li>Actividad común al inicio: <code>A</code></li>"
                + "<li>Tramo de rutas múltiples: <code>0.3 × B + C</code> (C es común a las dos ramas)</li>"
                + "<li>Tramo con retrabajo: <code>T = D + E + I</code>, luego <code>(1+r)·T</code> o <code>T/(1−r)</code></li>"
                + "<li>Tramo paralelo: <code>máx(G, F)</code></li>"
                + "<li>Actividad común al final: <code>H</code></li>"
                + "</ol>"
                + "<p>El total es la suma de los cinco tramos. En la zona de práctica está este ejercicio resuelto paso a paso.</p>"
        },
        {
          tipo: "nota",
          titulo: "Error frecuente",
          cuerpo: "<p>Cuando una actividad es <b>común a varias ramas</b> (como F en el ejercicio de clase, que sigue tanto a C como a D), debe aparecer en <b>cada</b> término ponderado — o factorizarse fuera de la ponderación. Olvidarlo es la causa número uno de un CT mal calculado.</p>"
        },
        {
          tipo: "lista",
          titulo: "Palancas para reducir el tiempo de ciclo",
          items: [
            "Eliminar esperas y aprobaciones secuenciales innecesarias.",
            "Paralelizar actividades que hoy están en serie sin necesidad.",
            "Reducir la tasa de retrabajo r atacando la causa del defecto (aquí entra Six Sigma).",
            "Eliminar capturas duplicadas mediante integración de sistemas.",
            "Reducir handoffs entre áreas: cada transferencia es una cola potencial.",
            "Aplicar <i>triage</i>: separar los casos simples de los complejos y darles rutas distintas."
          ]
        }
      ]
    },

    /* ================= SESIÓN 3 ================= */
    {
      id: "s3",
      nombre: "Sesión 3",
      tema: "Capacidad, cuello de botella y costos",
      proposito: "Determinar cuántas unidades puede realmente procesar el proceso al día, qué recurso lo limita y cuánto cuesta cada transacción. Es la parte del módulo que da justificación dura a la propuesta.",
      bloques: [
        {
          tipo: "clave",
          titulo: "La capacidad no la define el proceso: la define su recurso más limitado",
          cuerpo: "<p>El tiempo de ciclo dice cuánto tarda <b>un</b> trabajo. La capacidad dice cuántos trabajos caben <b>por día</b>. Son preguntas distintas y se calculan distinto.</p>"
        },
        {
          tipo: "pasos",
          titulo: "Procedimiento de cálculo de capacidad",
          items: [
            "<b>Asignar cada actividad a su recurso</b> (R1, R2, R3…). Un recurso puede atender varias actividades.",
            "<b>Calcular el factor de carga de cada actividad:</b> qué fracción de los trabajos pasa por ella. Una actividad común tiene factor 1; una que está en una rama del 40 % con 15 % de reproceso tiene 0.4 × 1.15 = 0.46.",
            "<b>Carga por job de cada recurso:</b> Σ (tiempo de procesamiento × factor de carga) de todas sus actividades. <b>Se usa el tiempo de procesamiento, no el de espera:</b> el recurso solo está ocupado mientras trabaja.",
            "<b>Capacidad por unidad de recurso:</b> 1 / carga por job (jobs por minuto).",
            "<b>Capacidad del pool:</b> unidades disponibles / carga por job.",
            "<b>Capacidad por día:</b> capacidad del pool × 60 × horas de operación.",
            "<b>Capacidad teórica del proceso:</b> el <b>mínimo</b> entre las capacidades de todos los recursos.",
            "<b>Cuello de botella:</b> el recurso que produjo ese mínimo.",
            "<b>Capacidad en uso:</b> demanda / capacidad teórica."
          ]
        },
        {
          tipo: "nota",
          titulo: "Por qué se usa el tiempo de procesamiento y no el de actividad",
          cuerpo: "<p>Mientras un trabajo <b>espera</b>, el recurso está libre para atender otro. La espera alarga el tiempo de ciclo pero <b>no consume capacidad</b>. Confundir ambos infla artificialmente la carga y desplaza el cuello de botella al recurso equivocado.</p>"
        },
        {
          tipo: "tabla",
          titulo: "Ejemplo resuelto: carga por recurso (8 h de operación)",
          encabezados: ["Recurso", "Actividades", "Carga por job", "Unidades", "Capacidad / día"],
          filas: [
            ["R1", "A (4×1) + E (4×0.46) + H (3×0.46)", "7.22 min", "2", "<b>132.96</b>"],
            ["R2", "C (6×0.35) + F (5×0.60) + I (4×0.46)", "6.94 min", "2", "138.33"],
            ["R3", "B (3×0.46) + D (3×0.25) + G (2×0.46) + J (5×1)", "8.05 min", "3", "178.88"]
          ]
        },
        {
          tipo: "clave",
          titulo: "Lectura del ejemplo",
          cuerpo: "<p>Capacidad teórica = mín(132.96 · 138.33 · 178.88) = <b>132.96 unidades/día</b>. Cuello de botella = <b>R1</b>.</p>"
                + "<p>Si la producción requerida es de 100 unidades, la capacidad en uso es 100 / 132.96 = <b>75.2 %</b>. Todavía hay holgura, pero no mucha.</p>"
        },
        {
          tipo: "nota",
          titulo: "La pregunta interesante: ¿y si se necesitan 150?",
          cuerpo: "<p>150 / 132.96 = 112.8 % — no alcanza. Añadir una unidad de R1 lo lleva a 199.5 u/día, <b>pero entonces el cuello de botella se mueve a R2</b> (138.33), que sigue por debajo de 150.</p>"
                + "<p>Con la configuración actual hay que sumar una unidad a R1 <b>y</b> una a R2. R3 con sus 3 unidades ya alcanza. Este es el comportamiento típico: <b>eliminar un cuello de botella lo desplaza, no lo elimina del proceso</b>.</p>"
        },
        {
          tipo: "pasos",
          titulo: "Teoría de restricciones — los cinco pasos de enfoque",
          items: [
            "<b>Identificar</b> la restricción del sistema (el cuello de botella).",
            "<b>Explotar</b> la restricción: sacarle todo el rendimiento posible sin invertir (eliminar paros, cambiar secuencia, quitarle trabajo que no le corresponde).",
            "<b>Subordinar</b> todo lo demás a la restricción: el resto del proceso trabaja al ritmo de ella, no más rápido.",
            "<b>Elevar</b> la restricción: ahora sí, invertir — añadir una unidad de recurso, automatizar, capacitar.",
            "<b>Repetir</b>: si la restricción se rompió, hay una nueva en otro lado. No dejar que la inercia se convierta en la restricción."
          ]
        },
        {
          tipo: "clave",
          titulo: "Consecuencia práctica",
          cuerpo: "<p>Invertir en un recurso que <b>no</b> es el cuello de botella no aumenta ni un job la capacidad del proceso. Solo aumenta el inventario frente a la restricción.</p>"
        },
        {
          tipo: "defs",
          titulo: "Análisis de costos del proceso",
          items: [
            { termino: "Costo por transacción", definicion: "Costo total de operar el proceso dividido entre el número de jobs completados. Es el indicador que la dirección entiende de inmediato." },
            { termino: "Costo de un recurso por job", definicion: "Carga por job (en horas) × costo por hora del recurso. Sumado sobre todos los recursos da el costo directo de procesar un trabajo." },
            { termino: "Costo del retrabajo", definicion: "Fracción r de los trabajos × costo del ciclo que se repite. Suele ser la partida más grande y la más invisible." },
            { termino: "Costo de la capacidad ociosa", definicion: "Recursos pagados que no se usan porque el cuello de botella los limita. Justifica reubicar en lugar de contratar." },
            { termino: "Costeo por actividad (ABC)", definicion: "Asignar el costo a las actividades y de ahí al producto o servicio, en lugar de repartirlo por prorrateo. Hace visible qué actividad es cara." }
          ]
        },
        {
          tipo: "tabla",
          titulo: "Indicadores por tipo",
          encabezados: ["Tipo", "Ejemplos", "Pregunta que responde"],
          filas: [
            ["Operativos", "Tiempo de ciclo, throughput, WIP, capacidad en uso, cumplimiento del takt", "¿El proceso opera al ritmo requerido?"],
            ["De calidad", "Tasa de error, retrabajos, first pass yield, defectos por millón", "¿Se hace bien a la primera?"],
            ["Financieros", "Costo por transacción, costo de retrabajo, costo de capacidad ociosa, ROI de la iniciativa", "¿Conviene económicamente?"],
            ["De servicio", "Tiempo de respuesta, entregas a tiempo (OTIF), NPS, quejas", "¿El cliente percibe valor?"]
          ]
        },
        {
          tipo: "nota",
          titulo: "¿Cómo se mide la efectividad de un proceso?",
          cuerpo: "<p><b>Efectividad</b> = grado en que el proceso logra el resultado esperado por el cliente (pedidos entregados completos y a tiempo). "
                + "<b>Eficiencia</b> = relación entre ese resultado y los recursos consumidos. Un proceso puede ser efectivo y carísimo, o barato e inútil. La propuesta de mejora debe declarar cuál de las dos está atacando.</p>"
        }
      ]
    },

    /* ================= SESIÓN 4 ================= */
    {
      id: "s4",
      nombre: "Sesión 4",
      tema: "Rediseño, ideación creativa y simulación",
      proposito: "Convertir el diagnóstico numérico en una propuesta TO-BE defendible: qué se rediseña, con qué principio, cómo se prueba antes de implementar y qué escenarios se anticipan.",
      bloques: [
        {
          tipo: "defs",
          titulo: "Innovación de procesos: dos intensidades",
          items: [
            { termino: "Mejora incremental (Kaizen)", definicion: "Cambios pequeños y continuos sobre el proceso existente. Bajo riesgo, resultados acumulativos, no requiere detener la operación." },
            { termino: "Rediseño radical (BPR)", definicion: "Repensar el proceso desde cero cuestionando por qué existe cada actividad. Alto impacto y alto riesgo; requiere patrocinio de dirección." },
            { termino: "Criterio de elección", definicion: "Si la brecha entre AS-IS y la meta es de 10–20 %, incremental. Si es de 80 % (72 h → 8 h), incremental no llega: hay que rediseñar el flujo, no acelerarlo." }
          ]
        },
        {
          tipo: "tabla",
          titulo: "Metodologías de rediseño y cuándo usarlas",
          encabezados: ["Metodología", "Ataca", "Señal de que aplica"],
          filas: [
            ["Lean", "Desperdicio: espera, retrabajo, transporte, sobreproceso, inventario", "El lead time es enorme frente al processing time"],
            ["Six Sigma / DMAIC", "Variación y defectos", "El resultado es inconsistente o la tasa de error es alta"],
            ["Teoría de restricciones", "El cuello de botella", "La capacidad no alcanza la demanda"],
            ["BPR", "El diseño completo del flujo", "La meta exige un orden de magnitud, no un porcentaje"],
            ["Automatización / RPA / workflow", "Trabajo manual repetitivo y capturas duplicadas", "El mismo dato se teclea en varios sistemas"]
          ]
        },
        {
          tipo: "lista",
          titulo: "Principios y heurísticas de rediseño",
          items: [
            "<b>Eliminar:</b> quitar la actividad que no agrega valor y que ninguna norma exige.",
            "<b>Simplificar:</b> reducir pasos, campos, firmas y excepciones.",
            "<b>Integrar:</b> que el dato se capture una sola vez y se comparta.",
            "<b>Paralelizar:</b> ejecutar en simultáneo lo que hoy está en serie sin dependencia real.",
            "<b>Triage:</b> rutas distintas para casos simples y complejos, en lugar de una sola ruta pesada para todos.",
            "<b>Empoderar:</b> mover la decisión a quien ejecuta, con reglas y umbrales claros, para eliminar esperas de aprobación.",
            "<b>Mover el control:</b> validar en el origen (el proveedor captura sus propios datos) en lugar de inspeccionar al final.",
            "<b>Automatizar al último:</b> primero el flujo correcto, después la tecnología que lo ejecuta."
          ]
        },
        {
          tipo: "clave",
          titulo: "Regla de oro del rediseño",
          cuerpo: "<p>Cada cambio propuesto debe poder expresarse como un efecto sobre un número: <b>reduce CT</b>, <b>reduce costo por transacción</b> o <b>aumenta capacidad</b>. Si no mueve ninguno de los tres, es una opinión, no una propuesta.</p>"
        },
        {
          tipo: "pasos",
          titulo: "Ideación creativa: del cliente a la alternativa",
          items: [
            "<b>Identificar la necesidad del cliente:</b> qué resultado espera y cómo lo mide él, no cómo lo mide el área.",
            "<b>Detectar oportunidades de valor:</b> dónde el proceso le cuesta tiempo, esfuerzo o incertidumbre al cliente.",
            "<b>Retar el pensamiento convencional:</b> preguntar por qué existe cada actividad y qué pasaría si no existiera. «¿Por qué tiene que intervenir RH?»",
            "<b>Generar alternativas múltiples:</b> no una solución, varias; incluir al menos una sin tecnología nueva.",
            "<b>Evaluar contra criterios explícitos:</b> impacto en CT, costo, capacidad, riesgo, esfuerzo de implementación y cumplimiento normativo.",
            "<b>Seleccionar y justificar:</b> con los números del AS-IS como línea base."
          ]
        },
        {
          tipo: "defs",
          titulo: "Orientación del proceso: producto o servicio",
          items: [
            { termino: "Orientación a producto", definicion: "El resultado es tangible y estandarizable; el foco está en la repetibilidad, el costo unitario y la calidad de conformidad. La capacidad se mide en unidades por período." },
            { termino: "Orientación a servicio", definicion: "El resultado se produce y se consume con participación del cliente; el foco está en el tiempo de respuesta, la variabilidad de la demanda y la experiencia. La capacidad se mide en atenciones por período y depende de la disponibilidad de personal." },
            { termino: "Por qué importa", definicion: "Determina qué indicadores son válidos: en servicio, el inventario amortiguador casi no existe, así que la variación de la demanda golpea directamente al tiempo de espera del cliente." }
          ]
        },
        {
          tipo: "texto",
          titulo: "Simulación de procesos",
          cuerpo: "<p>El cálculo analítico entrega <b>promedios</b>. La simulación permite ver qué pasa con la <b>variabilidad</b>: llegadas irregulares, tiempos que no son constantes, turnos, ausencias, picos estacionales.</p>"
                + "<p>Para simular hace falta: el modelo del proceso, la distribución de llegadas, la distribución de los tiempos de cada actividad, la cantidad de unidades de cada recurso, los horarios y las reglas de prioridad de la cola.</p>"
                + "<p>Lo que se obtiene: distribución del tiempo de ciclo (no solo el promedio), utilización de cada recurso, longitud de las colas y sensibilidad ante cambios de demanda.</p>"
        },
        {
          tipo: "nota",
          titulo: "Cuándo la simulación aporta y cuándo no",
          cuerpo: "<p><b>Aporta</b> cuando hay colas, recursos compartidos, demanda variable o se quiere comparar escenarios antes de invertir.</p>"
                + "<p><b>No aporta</b> si el modelo AS-IS está mal levantado: una simulación construida sobre tiempos inventados produce resultados precisos y falsos.</p>"
        },
        {
          tipo: "lista",
          titulo: "Pruebas y adecuación antes de implementar",
          items: [
            "<b>Validación del modelo:</b> ¿el AS-IS simulado reproduce los tiempos y volúmenes reales observados?",
            "<b>Prueba piloto:</b> aplicar el TO-BE en una sucursal, una planta o un tipo de trabajo antes de todo el alcance.",
            "<b>Prueba de carga:</b> verificar que sistemas e infraestructura soporten el nuevo volumen.",
            "<b>Adecuación:</b> ajustar reglas, umbrales y capacitación con lo aprendido en el piloto.",
            "<b>Medición post-implementación:</b> volver a levantar los mismos indicadores del baseline para demostrar la mejora."
          ]
        },
        {
          tipo: "tabla",
          titulo: "Planteamiento de escenarios",
          encabezados: ["Escenario", "Supuesto", "Qué hay que tener listo"],
          filas: [
            ["Base", "La demanda se mantiene", "El TO-BE propuesto y su roadmap"],
            ["Crecimiento", "La demanda sube 50 %", "Qué recurso se satura primero y cuánto cuesta elevarlo"],
            ["Contracción", "La demanda cae", "Qué capacidad es fija y cuál es flexible"],
            ["Disrupción", "Falla un sistema o un proveedor clave", "Ruta alterna y capacidad mínima de operación"]
          ]
        },
        {
          tipo: "clave",
          titulo: "Estructura de la propuesta de mejora",
          cuerpo: "<p>Problema con magnitud medida → AS-IS con sus números (CT, TCT, eficiencia, capacidad, cuello de botella, costo por transacción) → causas identificadas → alternativas evaluadas → TO-BE elegido → <b>los mismos indicadores recalculados</b> → inversión requerida → escenarios y riesgos → roadmap.</p>"
        }
      ]
    }
  ],

  /* ==================== GLOSARIO ==================== */
  terminos: [
    { termino: "Tiempo de ciclo", sigla: "CT — Cycle Time", definicion: "Tiempo promedio que toma completar un trabajo de principio a fin, incluyendo procesamiento y espera. Se puede medir con cronómetro." },
    { termino: "Tiempo teórico de ciclo", sigla: "TCT", definicion: "Tiempo de ciclo calculado considerando solo el tiempo de procesamiento, es decir, con cero esperas." },
    { termino: "Eficiencia del ciclo", definicion: "TCT / CT. Qué proporción del tiempo total es trabajo real; el resto es desperdicio de espera." },
    { termino: "Tiempo de actividad", definicion: "Tiempo de procesamiento + tiempo de espera de una actividad." },
    { termino: "Tiempo de procesamiento", definicion: "Tiempo en que alguien o algo está efectivamente trabajando en el job. Es el único que consume capacidad del recurso, y por eso es el que entra en el cálculo de carga." },
    { termino: "Tiempo de espera", definicion: "Tiempo en que el job está dentro del proceso pero nadie trabaja en él: cola, aprobación pendiente, traslado, almacenamiento. Alarga el tiempo de ciclo sin ocupar al recurso." },
    { termino: "Lead time frente a tiempo de ciclo", definicion: "El tiempo de ciclo mira hacia adentro (cuánto tarda el proceso); el lead time mira hacia afuera (cuánto espera el cliente, en tiempo de calendario). Coinciden cuando el proceso opera de forma continua; difieren cuando hay horarios, turnos o colas previas al arranque. Declara siempre cuál mides y entre qué dos eventos." },
    { termino: "Takt time", definicion: "Tiempo neto disponible / demanda del cliente. Ritmo al que hay que producir. No se mide: se calcula." },
    { termino: "Rutas múltiples", definicion: "Compuerta exclusiva: el tiempo esperado es Σ pᵢ·Tᵢ, la suma de cada rama por su probabilidad." },
    { termino: "Rutas paralelas", definicion: "Compuerta AND: el tiempo es máx(T₁…Tₙ), porque la convergencia espera a la rama más lenta." },
    { termino: "Retrabajo", definicion: "Repetición de un ciclo por no cumplir una inspección. Una sola repetición: CT = (1+r)·T. Repeticiones ilimitadas: CT = T/(1−r)." },
    { termino: "Tasa de rechazo", sigla: "r", definicion: "Porcentaje de trabajos que no pasan el control y deben repetir el ciclo." },
    { termino: "WIP", sigla: "Work in Process", definicion: "Todos los jobs que se encuentran dentro del proceso en un momento dado." },
    { termino: "Job", definicion: "Un trabajo o unidad que atraviesa el proceso: un pedido, un alta, una pieza." },
    { termino: "Throughput", definicion: "Jobs completados por unidad de tiempo; la capacidad efectivamente alcanzada." },
    { termino: "Ley de Little", definicion: "WIP = Throughput × Lead time. Se despeja de tres formas: WIP = Th × LT (cuánto hay atorado), LT = WIP / Th (cuánto tarda un job) y Th = WIP / LT (a qué ritmo se completa). Las unidades cuadran: unidades = (unidades/tiempo) × tiempo." },
    { termino: "Factor de carga", definicion: "Fracción de los trabajos que pasa por una actividad. Común = 1; rama del 40 % con 15 % de reproceso = 0.4 × 1.15 = 0.46." },
    { termino: "Carga por job", definicion: "Σ (tiempo de procesamiento × factor de carga) de las actividades que atiende un recurso. Usa procesamiento, no espera." },
    { termino: "Capacidad teórica", definicion: "Mínimo entre las capacidades de todos los recursos del proceso." },
    { termino: "Cuello de botella", definicion: "Recurso cuya capacidad es la menor y por tanto determina la capacidad de todo el proceso." },
    { termino: "Capacidad en uso", definicion: "Demanda / capacidad teórica. Qué porcentaje de la capacidad disponible está comprometido." },
    { termino: "Teoría de restricciones", sigla: "TOC", definicion: "Enfoque de mejora en cinco pasos: identificar, explotar, subordinar, elevar y repetir sobre la restricción del sistema." },
    { termino: "Balance de flujo", definicion: "Ajustar la capacidad de las etapas para que ninguna quede muy por encima o por debajo de la restricción." },
    { termino: "Modelo AS-IS", definicion: "Representación del proceso tal como opera hoy, con sus tiempos, esperas, retrabajos y recursos reales." },
    { termino: "Diagrama de precedencia", definicion: "Representación de qué actividad depende de cuál; paso previo indispensable al cálculo de tiempos." },
    { termino: "Ciclo de vida BPM", definicion: "Identificación, descubrimiento, análisis, rediseño, implementación y monitoreo, de forma continua." },
    { termino: "Handoff", definicion: "Transferencia del trabajo de un área o rol a otro. Cada handoff es una cola potencial." },
    { termino: "Triage", definicion: "Heurística de rediseño: separar casos simples de complejos y darles rutas distintas." },
    { termino: "BPR", sigla: "Business Process Reengineering", definicion: "Rediseño radical del proceso desde cero, frente a la mejora incremental." },
    { termino: "Costo por transacción", definicion: "Costo total de operar el proceso entre el número de jobs completados." },
    { termino: "Costeo por actividad", sigla: "ABC", definicion: "Asignar costos a las actividades y de ahí al producto o servicio, en lugar de prorratear." },
    { termino: "First pass yield", definicion: "Porcentaje de trabajos que salen bien a la primera, sin retrabajo." },
    { termino: "Simulación de procesos", definicion: "Ejecución del modelo con distribuciones de llegadas y tiempos para observar variabilidad, colas y utilización, no solo promedios." },
    { termino: "Value Stream Mapping", sigla: "VSM", definicion: "Técnica Lean de modelado que hace visible el tiempo que agrega valor frente al que no." }
  ],

  /* ==================== PRÁCTICA ==================== */
  practica: {

    /* ---------- Ejercicios numéricos ---------- */
    calculos: [
      {
        tema: "Rutas múltiples",
        titulo: "Tiempo esperado de un tramo con compuerta exclusiva",
        enunciado: "Después de la actividad A, una compuerta exclusiva envía el <b>70 %</b> de los trabajos directamente a <b>C (23 min)</b> y el <b>30 %</b> a <b>B (20 min)</b>, que después también pasa por C. Calcula el tiempo esperado del tramo completo, contando B y C.",
        preguntas: [
          { etiqueta: "Tiempo esperado del tramo B–C", respuesta: 29, unidad: "min", tolerancia: 0.05,
            pista: "C es común a las dos ramas: se paga siempre." }
        ],
        solucion:
          "<p>En rutas múltiples se pondera cada rama por su probabilidad: <b>Σ pᵢ · Tᵢ</b>.</p>"
          + '<div class="paso-calc">Rama alta (70 %): solo C   → 0.70 × 23 = 16.10\nRama baja (30 %): B y luego C → 0.30 × (20 + 23) = 0.30 × 43 = 12.90\nTramo = 16.10 + 12.90 = <span class="resaltado">29 min</span></div>'
          + '<p>Forma equivalente y más rápida, factorizando lo que es común:</p>'
          + '<div class="paso-calc">Tramo = 0.30 × 20 + 23 = 6 + 23 = <span class="resaltado">29 min</span></div>'
          + "<p><b>Lo que hay que retener:</b> lo que se pondera es únicamente lo que <i>difiere</i> entre ramas. C, por ser común, entra completa una sola vez.</p>"
      },
      {
        tema: "Rutas paralelas",
        titulo: "Tiempo de un tramo con compuerta AND",
        enunciado: "Tras la inspección, el proceso se divide en dos ramas simultáneas: <b>G (13 min)</b> y <b>F (9 min)</b>. Ambas deben terminar antes de continuar a H. Calcula el tiempo del tramo paralelo y el tiempo que la rama rápida pasa esperando.",
        preguntas: [
          { etiqueta: "Tiempo del tramo paralelo", respuesta: 13, unidad: "min", tolerancia: 0.01 },
          { etiqueta: "Tiempo de espera de la rama F", respuesta: 4, unidad: "min", tolerancia: 0.01,
            pista: "F termina antes, pero no puede avanzar sola." }
        ],
        solucion:
          "<p>En rutas paralelas <b>no se suma</b>: la convergencia espera a la rama más lenta.</p>"
          + '<div class="paso-calc">Tramo = máx(G, F) = máx(13, 9) = <span class="resaltado">13 min</span>\nEspera de F = 13 − 9 = <span class="resaltado">4 min</span></div>'
          + "<p>Error frecuente: sumar 13 + 9 = 22. Eso solo sería correcto si las actividades fueran secuenciales.</p>"
          + "<p>Esos 4 minutos de espera de F son tiempo sin valor: si el recurso de F queda ocioso, es una oportunidad de rebalanceo.</p>"
      },
      {
        tema: "Retrabajo",
        titulo: "Las dos fórmulas de reproceso",
        enunciado: "Un ciclo de inspección abarca <b>D (10 min) + E (20 min) + I (5 min)</b>. La inspección rechaza el <b>10 %</b> de los trabajos y los devuelve a D. Calcula el tiempo del tramo bajo los dos supuestos.",
        preguntas: [
          { etiqueta: "T — suma de las actividades del ciclo", respuesta: 35, unidad: "min", tolerancia: 0.01 },
          { etiqueta: "CT si se reprocesa una sola vez", respuesta: 38.5, unidad: "min", tolerancia: 0.05 },
          { etiqueta: "CT si se reprocesa cuantas veces sea necesario", respuesta: 38.8889, unidad: "min", tolerancia: 0.05 }
        ],
        solucion:
          '<div class="paso-calc">T = D + E + I = 10 + 20 + 5 = <span class="resaltado">35 min</span>\n\nUna sola repetición:  CT = (1 + r)·T = 1.10 × 35 = <span class="resaltado">38.50 min</span>\nRepeticiones ilimitadas: CT = T / (1 − r) = 35 / 0.90 = <span class="resaltado">38.89 min</span></div>'
          + "<p>Con r pequeña las dos fórmulas casi coinciden. La diferencia se dispara cuando r crece: con r = 0.40, (1+r)T = 49 min contra T/(1−r) = 58.33 min.</p>"
          + "<p><b>En tu entrega, declara explícitamente cuál supuesto usaste.</b> No es un detalle: cambia la justificación económica de la propuesta.</p>"
      },
      {
        tema: "Ejercicio integrador",
        titulo: "Tiempo de ciclo del proceso completo",
        enunciado: "Calcula el tiempo de ciclo del proceso de referencia, que combina los tres patrones. Usa el supuesto de <b>una sola repetición</b> en el retrabajo. Tiempos en minutos.",
        diagrama: {
          titulo: "Proceso de referencia",
          svg:
            '<svg viewBox="0 0 1090 352" role="img" aria-label="Proceso de referencia: la actividad A alimenta una compuerta exclusiva que envía 70 por ciento a C y 30 por ciento a B y luego a C; sigue un ciclo D, E e inspección I con 10 por ciento de retrabajo; después una compuerta paralela ejecuta G y F simultáneamente y converge en H">'
            + '<defs><marker id="pa-proc" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path class="punta" d="M0,0 L10,5 L0,10 z"/></marker>'
            + '<marker id="pa-proc-v" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path class="punta-viva" d="M0,0 L10,5 L0,10 z"/></marker></defs>'
            + '<rect class="zona" x="138" y="150" width="280" height="178" rx="16"/>'
            + '<text class="rotulo-viva" x="278" y="142" text-anchor="middle">RUTAS MÚLTIPLES · Σ p·T</text>'
            + '<rect class="zona" x="432" y="96" width="258" height="138" rx="16"/>'
            + '<text class="rotulo-viva" x="561" y="88" text-anchor="middle">RETRABAJO · (1+r)·T</text>'
            + '<rect class="zona" x="714" y="96" width="236" height="214" rx="16"/>'
            + '<text class="rotulo-viva" x="832" y="88" text-anchor="middle">RUTAS PARALELAS · máx</text>'
            + '<circle class="caja" cx="26" cy="200" r="12"/>'
            + '<path class="arista" d="M40,200 L48,200" marker-end="url(#pa-proc)"/>'
            + '<rect class="caja" x="52" y="174" width="76" height="52" rx="9"/>'
            + '<text class="rotulo" x="90" y="196" text-anchor="middle">A</text>'
            + '<text class="rotulo-sm" x="90" y="212" text-anchor="middle">10 min</text>'
            + '<path class="arista" d="M128,200 L142,200" marker-end="url(#pa-proc)"/>'
            + '<polygon class="caja-viva" points="168,177 191,200 168,223 145,200"/>'
            + '<text class="rotulo" x="168" y="205" text-anchor="middle">×</text>'
            + '<path class="arista" d="M191,200 L326,200" marker-end="url(#pa-proc)"/>'
            + '<text class="rotulo-sm" x="258" y="192" text-anchor="middle">0.7</text>'
            + '<path class="arista" d="M168,223 C168,266 196,292 222,292" marker-end="url(#pa-proc)"/>'
            + '<text class="rotulo-sm" x="150" y="262" text-anchor="middle">0.3</text>'
            + '<rect class="caja" x="227" y="266" width="76" height="52" rx="9"/>'
            + '<text class="rotulo" x="265" y="288" text-anchor="middle">B</text>'
            + '<text class="rotulo-sm" x="265" y="304" text-anchor="middle">20 min</text>'
            + '<path class="arista" d="M303,292 C332,292 350,262 358,230" marker-end="url(#pa-proc)"/>'
            + '<rect class="caja" x="332" y="174" width="76" height="52" rx="9"/>'
            + '<text class="rotulo" x="370" y="196" text-anchor="middle">C</text>'
            + '<text class="rotulo-sm" x="370" y="212" text-anchor="middle">23 min</text>'
            + '<path class="arista" d="M408,200 L434,200" marker-end="url(#pa-proc)"/>'
            + '<rect class="caja" x="440" y="174" width="76" height="52" rx="9"/>'
            + '<text class="rotulo" x="478" y="196" text-anchor="middle">D</text>'
            + '<text class="rotulo-sm" x="478" y="212" text-anchor="middle">10 min</text>'
            + '<path class="arista" d="M516,200 L524,200" marker-end="url(#pa-proc)"/>'
            + '<rect class="caja" x="530" y="174" width="76" height="52" rx="9"/>'
            + '<text class="rotulo" x="568" y="196" text-anchor="middle">E</text>'
            + '<text class="rotulo-sm" x="568" y="212" text-anchor="middle">20 min</text>'
            + '<path class="arista" d="M606,200 L630,200" marker-end="url(#pa-proc)"/>'
            + '<polygon class="caja-viva" points="658,176 681,200 658,224 635,200"/>'
            + '<text class="rotulo-sm" x="658" y="204" text-anchor="middle">I · 5</text>'
            + '<path class="arista-viva" d="M652,178 C630,126 520,112 478,170" marker-end="url(#pa-proc-v)"/>'
            + '<text class="rotulo-viva" x="566" y="112" text-anchor="middle">0.1 rechazo → regresa a D</text>'
            + '<path class="arista" d="M681,200 L716,200" marker-end="url(#pa-proc)"/>'
            + '<text class="rotulo-sm" x="700" y="192" text-anchor="middle">0.9</text>'
            + '<polygon class="caja-viva" points="740,180 758,200 740,220 722,200"/>'
            + '<text class="rotulo" x="740" y="205" text-anchor="middle">+</text>'
            + '<path class="arista" d="M740,180 C740,148 776,138 790,133" marker-end="url(#pa-proc)"/>'
            + '<path class="arista" d="M740,220 C740,252 776,262 790,267" marker-end="url(#pa-proc)"/>'
            + '<rect class="caja" x="794" y="104" width="76" height="52" rx="9"/>'
            + '<text class="rotulo" x="832" y="126" text-anchor="middle">G</text>'
            + '<text class="rotulo-sm" x="832" y="142" text-anchor="middle">13 min</text>'
            + '<rect class="caja" x="794" y="244" width="76" height="52" rx="9"/>'
            + '<text class="rotulo" x="832" y="266" text-anchor="middle">F</text>'
            + '<text class="rotulo-sm" x="832" y="282" text-anchor="middle">9 min</text>'
            + '<path class="arista" d="M870,130 C898,140 906,160 916,186" marker-end="url(#pa-proc)"/>'
            + '<path class="arista" d="M870,270 C898,260 906,240 916,214" marker-end="url(#pa-proc)"/>'
            + '<polygon class="caja-viva" points="924,180 942,200 924,220 906,200"/>'
            + '<text class="rotulo" x="924" y="205" text-anchor="middle">+</text>'
            + '<path class="arista" d="M942,200 L954,200" marker-end="url(#pa-proc)"/>'
            + '<rect class="caja" x="958" y="174" width="76" height="52" rx="9"/>'
            + '<text class="rotulo" x="996" y="196" text-anchor="middle">H</text>'
            + '<text class="rotulo-sm" x="996" y="212" text-anchor="middle">2 min</text>'
            + '<path class="arista" d="M1034,200 L1044,200" marker-end="url(#pa-proc)"/>'
            + '<circle class="caja" cx="1060" cy="200" r="12"/><circle class="caja" cx="1060" cy="200" r="7"/>'
            + '</svg>'
        },
        preguntas: [
          { etiqueta: "Tramo de rutas múltiples (B, C)", respuesta: 29, unidad: "min", tolerancia: 0.05 },
          { etiqueta: "Tramo con retrabajo (D, E, I), una repetición", respuesta: 38.5, unidad: "min", tolerancia: 0.05 },
          { etiqueta: "Tramo paralelo (G, F)", respuesta: 13, unidad: "min", tolerancia: 0.01 },
          { etiqueta: "Tiempo de ciclo total del proceso", respuesta: 92.5, unidad: "min", tolerancia: 0.1 }
        ],
        solucion:
          "<p>Se recorre el proceso tramo por tramo y se aplica la regla de cada patrón:</p>"
          + '<div class="paso-calc">1. A, común                 = 10.00\n2. Rutas múltiples: 0.3×20 + 23 = 29.00\n3. Retrabajo: 1.10 × (10+20+5)  = 38.50\n4. Paralelas: máx(13, 9)        = 13.00\n5. H, común                     =  2.00\n                                  ───────\nCT                              = <span class="resaltado">92.50 min</span></div>'
          + "<p>Con el supuesto de repeticiones ilimitadas el tramo 3 sería 35/0.9 = 38.89 y el CT total <b>92.89 min</b>: menos de medio minuto de diferencia, porque r es baja.</p>"
      },
      {
        tema: "Takt time",
        titulo: "Ritmo requerido por la demanda",
        enunciado: "Una línea opera un turno de <b>8 horas</b> con <b>30 minutos</b> de comida y <b>2 paros programados de 10 minutos</b> cada uno. El cliente pide <b>200 unidades</b> al día. El tiempo de ciclo medido de la línea es de <b>2.5 minutos</b> por unidad.",
        preguntas: [
          { etiqueta: "Tiempo neto disponible", respuesta: 430, unidad: "min", tolerancia: 0.5,
            pista: "Neto = tiempo del turno menos los paros y la comida." },
          { etiqueta: "Takt time", respuesta: 2.15, unidad: "min/unidad", tolerancia: 0.02 },
          { etiqueta: "Unidades que la línea alcanza a producir con CT = 2.5 min", respuesta: 172, unidad: "unidades", tolerancia: 0.5 }
        ],
        solucion:
          '<div class="paso-calc">Tiempo neto = (8 × 60) − 30 − (2 × 10) = 480 − 30 − 20 = <span class="resaltado">430 min</span>\nTakt = T / D = 430 / 200 = <span class="resaltado">2.15 min/unidad</span>\nProducción alcanzable = 430 / 2.5 = <span class="resaltado">172 unidades</span></div>'
          + "<p><b>Diagnóstico:</b> CT (2.5) &gt; Takt (2.15), así que la línea <b>no cumple</b> la demanda: se quedan cortos por 28 unidades.</p>"
          + "<p>Hay dos caminos: bajar el CT a 2.15 min o menos, o aumentar el tiempo neto disponible (recuperar paros, ampliar el turno). Cuál conviene depende del costo de cada opción.</p>"
      },
      {
        tema: "Ejercicio de clase — parte 1",
        titulo: "CT, TCT y eficiencia del proceso",
        enunciado: "Con la tabla de precedencias siguiente: el <b>40 %</b> de los trabajos toma la ruta A→B, el <b>25 %</b> la ruta A→D y el <b>35 %</b> restante la ruta A→C. La inspección <b>I</b> tiene un reproceso del <b>15 %</b> que regresa a B (una sola repetición). Nota que <b>F sigue tanto a C como a D</b>, y que <b>J es común a todas las rutas</b>.",
        datos: {
          tipo: "tabla",
          titulo: "Tabla de precedencias (minutos)",
          encabezados: ["Actividad", "Predecesor", "Procesamiento", "Espera", "Tiempo de actividad"],
          filas: [
            ["A", "—", "4", "0", "4"], ["B", "A", "3", "2", "5"],
            ["C", "A", "6", "4", "10"], ["D", "A", "3", "3", "6"],
            ["E", "B", "4", "7", "11"], ["F", "C, D", "5", "3", "8"],
            ["G", "E", "2", "0", "2"], ["H", "E", "3", "1", "4"],
            ["I", "G, H", "4", "3", "7"], ["J", "F, I", "5", "0", "5"]
          ]
        },
        preguntas: [
          { etiqueta: "Tiempo de ciclo (CT)", respuesta: 31.22, unidad: "min", tolerancia: 0.05,
            pista: "Usa el tiempo de actividad (procesamiento + espera). G y H son paralelas." },
          { etiqueta: "Tiempo teórico de ciclo (TCT)", respuesta: 21.29, unidad: "min", tolerancia: 0.05,
            pista: "Mismo cálculo, pero solo con el tiempo de procesamiento." },
          { etiqueta: "Eficiencia del proceso", respuesta: 68.19, unidad: "%", tolerancia: 0.6,
            pista: "TCT / CT, expresado en porcentaje." }
        ],
        solucion:
          "<p>La expresión general del proceso, armada tramo por tramo:</p>"
          + '<div class="paso-calc">CT = A + 0.40·[1.15·(B + E + máx(G,H) + I)] + 0.35·(C + F) + 0.25·(D + F) + J</div>'
          + "<p>Tres cosas que hay que ver en esa fórmula: el <b>1.15</b> aplica solo a la rama que pasa por la inspección; <b>máx(G,H)</b> porque son paralelas; y <b>F aparece en los dos términos ponderados</b> porque sigue tanto a C como a D.</p>"
          + "<p><b>CT — con tiempo de actividad:</b></p>"
          + '<div class="paso-calc">A                                    =  4.00\n0.40 × 1.15 × (5 + 11 + máx(2,4) + 7)\n  = 0.46 × 27                        = 12.42\n0.35 × (10 + 8) = 0.35 × 18          =  6.30\n0.25 × ( 6 + 8) = 0.25 × 14          =  3.50\nJ                                    =  5.00\n                                       ───────\nCT                                   = <span class="resaltado">31.22 min</span></div>'
          + "<p><b>TCT — solo procesamiento:</b></p>"
          + '<div class="paso-calc">A                                    =  4.00\n0.46 × (3 + 4 + máx(2,3) + 4) = 0.46 × 14 =  6.44\n0.35 × (6 + 5) = 0.35 × 11           =  3.85\n0.25 × (3 + 5) = 0.25 ×  8           =  2.00\nJ                                    =  5.00\n                                       ───────\nTCT                                  = <span class="resaltado">21.29 min</span></div>'
          + '<div class="paso-calc">Eficiencia = TCT / CT = 21.29 / 31.22 = <span class="resaltado">68.19 %</span></div>'
          + "<p><b>Lectura:</b> casi un tercio del tiempo de ciclo es espera pura. La actividad E, con 7 minutos de espera contra 4 de procesamiento, es el primer lugar donde buscar.</p>"
      },
      {
        tema: "Ejercicio de clase — parte 2",
        titulo: "Carga por recurso",
        enunciado: "Mismo proceso. Ahora se asignan los recursos: <b>R1</b> atiende A, E y H; <b>R2</b> atiende C, F e I; <b>R3</b> atiende B, D, G y J. Calcula la carga por job de cada recurso. Recuerda: <b>solo cuenta el tiempo de procesamiento</b>, y cada actividad se pondera por su factor de carga.",
        datos: {
          tipo: "tabla",
          titulo: "Factores de carga por actividad",
          encabezados: ["Actividad", "Recurso", "Procesamiento", "Factor de carga", "Razón del factor"],
          filas: [
            ["A", "R1", "4", "1.00", "Común a todos los trabajos"],
            ["B", "R3", "3", "0.46", "0.40 × 1.15 (rama con reproceso)"],
            ["C", "R2", "6", "0.35", "Rama del 35 %"],
            ["D", "R3", "3", "0.25", "Rama del 25 %"],
            ["E", "R1", "4", "0.46", "0.40 × 1.15"],
            ["F", "R2", "5", "0.60", "0.35 + 0.25 (sigue a C y a D)"],
            ["G", "R3", "2", "0.46", "0.40 × 1.15"],
            ["H", "R1", "3", "0.46", "0.40 × 1.15"],
            ["I", "R2", "4", "0.46", "0.40 × 1.15"],
            ["J", "R3", "5", "1.00", "Común a todos los trabajos"]
          ]
        },
        preguntas: [
          { etiqueta: "Carga por job de R1", respuesta: 7.22, unidad: "min", tolerancia: 0.02 },
          { etiqueta: "Carga por job de R2", respuesta: 6.94, unidad: "min", tolerancia: 0.02 },
          { etiqueta: "Carga por job de R3", respuesta: 8.05, unidad: "min", tolerancia: 0.02 }
        ],
        solucion:
          '<div class="paso-calc">R1 = A + E + H = 4×1.00 + 4×0.46 + 3×0.46\n   = 4.00 + 1.84 + 1.38 = <span class="resaltado">7.22 min/job</span>\n\nR2 = C + F + I = 6×0.35 + 5×0.60 + 4×0.46\n   = 2.10 + 3.00 + 1.84 = <span class="resaltado">6.94 min/job</span>\n\nR3 = B + D + G + J = 3×0.46 + 3×0.25 + 2×0.46 + 5×1.00\n   = 1.38 + 0.75 + 0.92 + 5.00 = <span class="resaltado">8.05 min/job</span></div>'
          + "<p><b>Dos detalles que deciden el resultado.</b> Primero, F tiene factor 0.60 porque sigue a C (35 %) y a D (25 %): las dos ramas convergen en ella. Segundo, se usó procesamiento y no tiempo de actividad — mientras un trabajo espera, el recurso está libre para atender otro, así que la espera no consume capacidad.</p>"
      },
      {
        tema: "Ejercicio de clase — parte 3",
        titulo: "Capacidad, cuello de botella y capacidad en uso",
        enunciado: "Continuando: <b>R1 y R2 tienen 2 unidades</b> cada uno y <b>R3 tiene 3</b>. La jornada es de <b>8 horas</b> y la producción diaria requerida es de <b>100 unidades</b>. Cargas por job: R1 = 7.22, R2 = 6.94, R3 = 8.05 min.",
        preguntas: [
          { etiqueta: "Capacidad diaria de R1", respuesta: 132.96, unidad: "u/día", tolerancia: 0.6,
            pista: "(unidades / carga) × 60 × 8" },
          { etiqueta: "Capacidad diaria de R2", respuesta: 138.33, unidad: "u/día", tolerancia: 0.6 },
          { etiqueta: "Capacidad diaria de R3", respuesta: 178.88, unidad: "u/día", tolerancia: 0.6 },
          { etiqueta: "Capacidad teórica del proceso", respuesta: 132.96, unidad: "u/día", tolerancia: 0.6 },
          { etiqueta: "Capacidad en uso con 100 unidades", respuesta: 75.21, unidad: "%", tolerancia: 0.6 }
        ],
        solucion:
          '<div class="paso-calc">R1: (2 / 7.22) × 60 × 8 = 0.27701 × 480 = <span class="resaltado">132.96 u/día</span>\nR2: (2 / 6.94) × 60 × 8 = 0.28818 × 480 = <span class="resaltado">138.33 u/día</span>\nR3: (3 / 8.05) × 60 × 8 = 0.37267 × 480 = <span class="resaltado">178.88 u/día</span>\n\nCapacidad teórica = mín(132.96 , 138.33 , 178.88) = <span class="resaltado">132.96 u/día</span>\nCuello de botella = <span class="resaltado">R1</span>\nCapacidad en uso  = 100 / 132.96 = <span class="resaltado">75.21 %</span></div>'
          + "<p><b>Observación importante:</b> R3 tiene la mayor carga por job (8.05 min), pero <b>no</b> es el cuello de botella, porque tiene 3 unidades en lugar de 2. El cuello de botella no lo determina la carga sola, sino la carga <b>frente a las unidades disponibles</b>.</p>"
          + "<p>Con 75 % de capacidad en uso hay holgura, pero es la holgura de R1: cualquier ausencia o paro en ese recurso pega directo a la entrega.</p>"
      },
      {
        tema: "Ejercicio de clase — parte 4",
        titulo: "¿Y si hay que producir 150 unidades?",
        enunciado: "La dirección quiere subir la producción de 100 a <b>150 unidades diarias</b> con la misma jornada de 8 horas. Cargas por job: R1 = 7.22, R2 = 6.94, R3 = 8.05 min. Unidades actuales: R1 = 2, R2 = 2, R3 = 3.",
        preguntas: [
          { etiqueta: "Capacidad en uso que exigirían las 150 unidades", respuesta: 112.81, unidad: "%", tolerancia: 0.8,
            pista: "150 dividido entre la capacidad teórica actual." },
          { etiqueta: "Unidades de R1 necesarias para 150 u/día", respuesta: 3, unidad: "unidades", tolerancia: 0.01 },
          { etiqueta: "Unidades de R2 necesarias para 150 u/día", respuesta: 3, unidad: "unidades", tolerancia: 0.01 },
          { etiqueta: "Unidades de R3 necesarias para 150 u/día", respuesta: 3, unidad: "unidades", tolerancia: 0.01 },
          { etiqueta: "Capacidad teórica resultante con esa configuración", respuesta: 178.88, unidad: "u/día", tolerancia: 0.8 }
        ],
        solucion:
          '<div class="paso-calc">150 / 132.96 = <span class="resaltado">112.81 %</span>  →  la demanda excede la capacidad</div>'
          + "<p>Unidades requeridas por recurso: se despeja de la fórmula de capacidad.</p>"
          + '<div class="paso-calc">unidades = (demanda × carga) / (60 × horas)\n\nR1: (150 × 7.22) / 480 = 2.256  →  se redondea a <span class="resaltado">3</span> (tiene 2)\nR2: (150 × 6.94) / 480 = 2.169  →  se redondea a <span class="resaltado">3</span> (tiene 2)\nR3: (150 × 8.05) / 480 = 2.516  →  se redondea a <span class="resaltado">3</span> (ya tiene 3)</div>'
          + "<p><b>El punto de la lección:</b> el instinto es «agrego una unidad a R1 y listo». Pero al hacerlo R1 sube a 199.5 u/día y <b>el cuello de botella se muda a R2</b>, que con sus 2 unidades solo llega a 138.33 — todavía por debajo de 150.</p>"
          + '<div class="paso-calc">Con R1=3, R2=3, R3=3:\n  R1 = (3/7.22)×480 = 199.45\n  R2 = (3/6.94)×480 = 207.49\n  R3 = (3/8.05)×480 = 178.88\nCapacidad teórica = mín = <span class="resaltado">178.88 u/día</span>  ≥ 150 ✓</div>'
          + "<p>Eliminar un cuello de botella no lo elimina del proceso: lo <b>desplaza</b>. Por eso el quinto paso de la teoría de restricciones es <i>repetir</i>.</p>"
          + "<p>Antes de comprar recursos, la TOC obliga a agotar el paso de <b>explotar</b>: ¿se le puede quitar a R1 alguna actividad que otro recurso pueda hacer? Rebalancear suele ser gratis; comprar una unidad, no.</p>"
      },
      {
        tema: "Ley de Little",
        titulo: "WIP, throughput y lead time",
        enunciado: "Un centro de servicio completa <b>18 solicitudes por hora</b> y el tiempo promedio que una solicitud pasa dentro del proceso es de <b>2.5 horas</b>. Después de una mejora, el WIP se reduce a 30 solicitudes manteniendo el mismo throughput.",
        preguntas: [
          { etiqueta: "WIP promedio actual", respuesta: 45, unidad: "solicitudes", tolerancia: 0.5,
            pista: "WIP = Throughput × Lead time" },
          { etiqueta: "Lead time después de la mejora", respuesta: 1.6667, unidad: "h", tolerancia: 0.02 },
          { etiqueta: "Reducción del lead time", respuesta: 33.33, unidad: "%", tolerancia: 0.6 }
        ],
        solucion:
          '<div class="paso-calc">WIP = Throughput × Lead time = 18 × 2.5 = <span class="resaltado">45 solicitudes</span>\n\nDespués:  Lead time = WIP / Throughput = 30 / 18 = <span class="resaltado">1.667 h ≈ 1 h 40 min</span>\nReducción = (2.5 − 1.667) / 2.5 = <span class="resaltado">33.33 %</span></div>'
          + "<p><b>Consecuencia práctica:</b> si la capacidad no cambia, limitar el trabajo en curso reduce el tiempo de ciclo de forma proporcional. Es la justificación matemática de los límites de WIP en un tablero Kanban.</p>"
          + "<p>Y al revés: meter más trabajo al proceso sin aumentar capacidad no produce más — solo alarga el tiempo que cada trabajo pasa esperando.</p>"
      },
      {
        tema: "Costos del proceso",
        titulo: "Costo por transacción y costo del retrabajo",
        enunciado: "El proceso de alta de proveedores procesa <b>400 altas al mes</b>. Intervienen tres roles: analista de compras (<b>$180/h</b>, 25 min por alta), abogado (<b>$450/h</b>, 12 min por alta) y analista de finanzas (<b>$220/h</b>, 18 min por alta). El <b>8 %</b> de las altas se rehace por completo.",
        preguntas: [
          { etiqueta: "Costo de mano de obra por alta (sin retrabajo)", respuesta: 231, unidad: "$", tolerancia: 1.5,
            pista: "Convierte los minutos a horas y multiplica por la tarifa." },
          { etiqueta: "Costo por transacción incluyendo el retrabajo", respuesta: 249.48, unidad: "$", tolerancia: 1.5 },
          { etiqueta: "Costo mensual del retrabajo", respuesta: 7392, unidad: "$", tolerancia: 40 }
        ],
        solucion:
          '<div class="paso-calc">Compras : 25/60 × 180 = 0.4167 × 180 =  75.00\nLegal   : 12/60 × 450 = 0.2000 × 450 =  90.00\nFinanzas: 18/60 × 220 = 0.3000 × 220 =  66.00\n                                        ───────\nCosto por alta                        = <span class="resaltado">$231.00</span></div>'
          + '<div class="paso-calc">Con retrabajo (una repetición):\n  231 × (1 + 0.08) = <span class="resaltado">$249.48 por transacción</span>\n\nCosto mensual del retrabajo:\n  400 × 231 × 0.08 = <span class="resaltado">$7,392 al mes</span>  (≈ $88,704 al año)</div>'
          + "<p><b>Cómo se usa esto en la propuesta:</b> los $88 mil anuales de retrabajo son el presupuesto contra el cual se justifica la inversión. Si bajar la tasa de error del 8 % al 1 % cuesta menos que eso en el primer año, la decisión se defiende sola frente al CFO.</p>"
          + "<p>Nota metodológica: este cálculo cubre solo mano de obra directa. Un costeo completo agregaría licencias, infraestructura y el costo de oportunidad del proveedor que espera 72 horas para poder facturar.</p>"
      }
    ],

    /* ---------- Opción múltiple ---------- */
    opcionMultiple: [
      {
        tema: "CT y TCT",
        pregunta: "¿Cuál es la diferencia entre el tiempo de ciclo (CT) y el tiempo teórico de ciclo (TCT)?",
        opciones: [
          "El CT incluye procesamiento y espera; el TCT considera únicamente el tiempo de procesamiento",
          "El CT se calcula y el TCT se mide con cronómetro",
          "El CT aplica a manufactura y el TCT a servicios",
          "El TCT incluye el retrabajo y el CT no"
        ],
        correcta: 0,
        explicacion: "El TCT representa el piso al que el proceso podría llegar si desaparecieran todas las esperas. La distancia entre ambos es el tamaño de la oportunidad.",
        porQueNo: {
          1: "Está invertido: el CT se puede medir con cronómetro; el takt time es el que solo se calcula.",
          2: "Ambos aplican a cualquier tipo de proceso.",
          3: "El retrabajo se incorpora a los dos por igual, mediante la tasa r."
        }
      },
      {
        tema: "Eficiencia del ciclo",
        pregunta: "Un proceso tiene TCT = 21.29 min y CT = 31.22 min. ¿Cuál es su eficiencia de ciclo y cómo se interpreta?",
        opciones: [
          "68.2 %: casi un tercio del tiempo total es espera, no trabajo",
          "146.6 %: el proceso rinde más de lo esperado",
          "9.93 %: la eficiencia es la diferencia entre ambos tiempos",
          "31.8 %: la eficiencia es el complemento de TCT/CT"
        ],
        correcta: 0,
        explicacion: "Eficiencia = TCT / CT = 21.29 / 31.22 = 0.682. El 31.8 % restante es tiempo de espera: inspección, transporte, almacenamiento y cola.",
        porQueNo: {
          1: "Ese es CT/TCT, que siempre da más de 100 % y no es un indicador de eficiencia.",
          2: "La diferencia absoluta en minutos no es un porcentaje de eficiencia.",
          3: "El complemento es la proporción de desperdicio, no la eficiencia."
        }
      },
      {
        tema: "Rutas paralelas",
        pregunta: "Dos actividades paralelas duran 13 y 9 minutos y deben converger. ¿Cuánto aporta ese tramo al tiempo de ciclo?",
        opciones: ["13 minutos", "22 minutos", "11 minutos", "9 minutos"],
        correcta: 0,
        explicacion: "En rutas paralelas se toma el valor máximo: aunque la rama de 9 minutos termine antes, debe esperar a la de 13 para que el flujo continúe.",
        porQueNo: {
          1: "Sumar 13 + 9 solo sería correcto si las actividades fueran secuenciales.",
          2: "El promedio no tiene sentido: la convergencia no ocurre en el promedio, ocurre cuando termina la última.",
          3: "Tomar el mínimo supondría que el proceso avanza sin esperar a la otra rama."
        }
      },
      {
        tema: "Rutas múltiples",
        pregunta: "Una compuerta exclusiva envía 30 % de los trabajos a una actividad de 20 min y 70 % a otra de 10 min. ¿Cuál es el tiempo esperado del tramo?",
        opciones: ["13 minutos", "30 minutos", "15 minutos", "20 minutos"],
        correcta: 0,
        explicacion: "Σ pᵢ·Tᵢ = 0.30 × 20 + 0.70 × 10 = 6 + 7 = 13 minutos.",
        porQueNo: {
          1: "Sumar ambas ramas supondría que cada trabajo pasa por las dos, y la compuerta es exclusiva.",
          2: "El promedio simple ignora que las ramas no son igual de probables.",
          3: "Tomar el máximo es la regla de rutas paralelas, no de rutas múltiples."
        }
      },
      {
        tema: "Retrabajo",
        pregunta: "Un ciclo de 40 minutos tiene una tasa de rechazo del 20 % y puede reprocesarse tantas veces como sea necesario. ¿Cuál es su tiempo de ciclo?",
        opciones: ["50 minutos", "48 minutos", "32 minutos", "40 minutos"],
        correcta: 0,
        explicacion: "Para repeticiones ilimitadas: CT = T/(1−r) = 40 / 0.80 = 50 minutos.",
        porQueNo: {
          1: "48 min es (1+r)·T = 1.20 × 40, la fórmula de una sola repetición.",
          2: "Multiplicar por (1−r) reduciría el tiempo, cuando el retrabajo lo aumenta.",
          3: "Ignorar el retrabajo deja el tiempo sin el efecto de la tasa de rechazo."
        }
      },
      {
        tema: "Takt time",
        pregunta: "¿Cuál de estas afirmaciones sobre el takt time es correcta?",
        opciones: [
          "No se mide con cronómetro: se calcula dividiendo el tiempo neto disponible entre la demanda del cliente",
          "Es el tiempo promedio que tarda una actividad en ejecutarse",
          "Se obtiene cronometrando la estación más lenta de la línea",
          "Es sinónimo de tiempo de ciclo cuando el proceso está balanceado"
        ],
        correcta: 0,
        explicacion: "Takt = Tiempo neto disponible / Demanda. Es un ritmo requerido por el mercado, no una duración observada en el piso.",
        porQueNo: {
          1: "Eso describe el tiempo de procesamiento de una actividad.",
          2: "La estación más lenta define el cuello de botella, no el takt.",
          3: "Que CT ≈ Takt es el objetivo, pero no los vuelve el mismo concepto: uno se mide y el otro se calcula."
        }
      },
      {
        tema: "Takt time",
        pregunta: "El takt time es de 2.15 min/unidad y el tiempo de ciclo medido es de 2.5 min/unidad. ¿Qué significa?",
        opciones: [
          "El proceso es más lento que la demanda y no cumplirá la entrega",
          "El proceso tiene holgura y puede reducir turnos",
          "El proceso está perfectamente balanceado",
          "El cuello de botella está en la demanda, no en el proceso"
        ],
        correcta: 0,
        explicacion: "CT > Takt significa que cada unidad tarda más de lo que el ritmo de la demanda permite. Hay que reducir el CT o aumentar el tiempo neto disponible.",
        porQueNo: {
          1: "La holgura existiría en el caso contrario, CT < Takt.",
          2: "El balance sería CT ≈ Takt.",
          3: "La demanda es el requisito; la restricción está del lado del proceso."
        }
      },
      {
        tema: "Capacidad",
        pregunta: "Al calcular la carga de un recurso, ¿qué tiempo se usa y por qué?",
        opciones: [
          "El de procesamiento, porque mientras un trabajo espera el recurso queda libre para atender otro",
          "El de actividad (procesamiento + espera), porque es el tiempo real que el trabajo permanece ahí",
          "Solo el de espera, porque es donde está el desperdicio",
          "El mayor de los dos, para tener un cálculo conservador"
        ],
        correcta: 0,
        explicacion: "La espera alarga el tiempo de ciclo pero no consume capacidad del recurso. Usar el tiempo de actividad infla la carga y puede señalar el cuello de botella equivocado.",
        porQueNo: {
          1: "Confunde permanencia del trabajo con ocupación del recurso: son cosas distintas.",
          2: "La espera no ocupa al recurso; ocupa al trabajo.",
          3: "Un 'conservador' mal fundamentado lleva a invertir en el recurso incorrecto."
        }
      },
      {
        tema: "Cuello de botella",
        pregunta: "R1 tiene carga de 7.22 min/job con 2 unidades; R3 tiene 8.05 min/job con 3 unidades. ¿Cuál es el cuello de botella?",
        opciones: [
          "R1, porque su capacidad de pool (132.96 u/día) es menor que la de R3 (178.88)",
          "R3, porque tiene la mayor carga por job",
          "Ninguno: al tener distinto número de unidades no son comparables",
          "R3, porque atiende más actividades del proceso"
        ],
        correcta: 0,
        explicacion: "El cuello de botella no lo determina la carga por sí sola, sino la carga frente a las unidades disponibles: (unidades / carga) × tiempo disponible.",
        porQueNo: {
          1: "R3 compensa su mayor carga con una tercera unidad, así que rinde más.",
          2: "Sí son comparables: para eso se calcula la capacidad del pool, no la carga.",
          3: "El número de actividades es irrelevante; lo que cuenta es el tiempo total ponderado."
        }
      },
      {
        tema: "Teoría de restricciones",
        pregunta: "Se invierte en aumentar la capacidad de un recurso que no es el cuello de botella. ¿Qué ocurre con la capacidad del proceso?",
        opciones: [
          "No aumenta: solo crece el inventario acumulado frente a la restricción",
          "Aumenta proporcionalmente a la inversión realizada",
          "Aumenta, pero solo si ese recurso está al inicio del proceso",
          "Disminuye, porque se desbalancea el flujo"
        ],
        correcta: 0,
        explicacion: "La capacidad del sistema es la de su restricción. Todo lo demás produciendo más rápido solo genera trabajo en cola esperando al cuello de botella.",
        porQueNo: {
          1: "La inversión no se traduce en throughput si no toca la restricción.",
          2: "La posición en el flujo no cambia el principio.",
          3: "No disminuye la capacidad; lo que crece es el WIP y con él el tiempo de ciclo."
        }
      },
      {
        tema: "Teoría de restricciones",
        pregunta: "¿Cuál es el orden correcto de los cinco pasos de enfoque de la teoría de restricciones?",
        opciones: [
          "Identificar, explotar, subordinar, elevar, repetir",
          "Identificar, elevar, explotar, subordinar, repetir",
          "Medir, analizar, invertir, controlar, repetir",
          "Explotar, identificar, elevar, medir, subordinar"
        ],
        correcta: 0,
        explicacion: "Explotar (sacar el máximo sin invertir) va antes que elevar (invertir). Es el orden que evita comprar capacidad que no hacía falta.",
        porQueNo: {
          1: "Elevar antes de explotar significa invertir sin haber agotado lo gratuito.",
          2: "Ese es aproximadamente DMAIC, no TOC.",
          3: "No se puede explotar una restricción que aún no se identificó."
        }
      },
      {
        tema: "Cuello de botella",
        pregunta: "Se añade una unidad al recurso cuello de botella y la capacidad del proceso sube, pero mucho menos de lo esperado. ¿Cuál es la explicación más probable?",
        opciones: [
          "El cuello de botella se desplazó a otro recurso, que ahora es la nueva restricción",
          "El cálculo original de la carga estaba mal",
          "Las unidades adicionales siempre rinden menos que las originales",
          "La capacidad no depende del número de unidades del recurso"
        ],
        correcta: 0,
        explicacion: "Eliminar una restricción la desplaza: el mínimo pasa a ser otro recurso. Por eso el quinto paso de TOC es repetir el ciclo.",
        porQueNo: {
          1: "Puede ocurrir, pero el desplazamiento del cuello de botella es el comportamiento esperado del sistema.",
          2: "No hay rendimientos decrecientes por unidad en este modelo.",
          3: "Sí depende: la capacidad del pool es unidades / carga por job."
        }
      },
      {
        tema: "Factor de carga",
        pregunta: "Una actividad está en una rama que recibe el 40 % de los trabajos y forma parte de un ciclo con 15 % de reproceso. ¿Cuál es su factor de carga?",
        opciones: ["0.46", "0.55", "0.40", "0.06"],
        correcta: 0,
        explicacion: "0.40 × 1.15 = 0.46. La probabilidad de la rama se multiplica por el efecto del reproceso.",
        porQueNo: {
          1: "Sumar 0.40 + 0.15 mezcla una probabilidad de ruta con una tasa de repetición.",
          2: "Ignorar el reproceso subestima la carga real del recurso.",
          3: "0.40 × 0.15 no representa nada del proceso."
        }
      },
      {
        tema: "Factor de carga",
        pregunta: "La actividad F sigue tanto a C (rama del 35 %) como a D (rama del 25 %). ¿Cuál es su factor de carga?",
        opciones: ["0.60", "0.35", "0.0875", "1.00"],
        correcta: 0,
        explicacion: "0.35 + 0.25 = 0.60. Las dos ramas convergen en F, así que el 60 % de los trabajos pasa por ella.",
        porQueNo: {
          1: "Tomar solo una rama olvida que la otra también desemboca en F.",
          2: "Multiplicar las probabilidades supondría que ambas condiciones ocurren a la vez, y son excluyentes.",
          3: "F no es común a todos: el 40 % restante sigue la otra ruta del proceso."
        }
      },
      {
        tema: "Lead time",
        pregunta: "¿Qué mide el lead time?",
        opciones: [
          "El tiempo total transcurrido desde que el cliente lo pide hasta que lo recibe, en tiempo de calendario",
          "Únicamente el tiempo en que alguien está trabajando en el job",
          "El ritmo al que hay que producir para satisfacer la demanda",
          "El tiempo que el recurso cuello de botella está ocupado por cada job"
        ],
        correcta: 0,
        explicacion: "El lead time es el tiempo que el cliente percibe: incluye procesamiento, esperas y todo lo que ocurra en medio, noches y fines de semana incluidos.",
        porQueNo: {
          1: "Eso es el tiempo de procesamiento, que es solo una parte del lead time.",
          2: "Ese es el takt time, y se calcula a partir de la demanda, no se mide.",
          3: "Esa es la carga por job del recurso, que se usa para calcular capacidad."
        }
      },
      {
        tema: "Lead time",
        pregunta: "Una solicitud llega el viernes a las 18:00 y nadie la toca hasta el lunes. El proceso, una vez iniciado, tarda 45 minutos de trabajo y 3 horas de espera interna. ¿Qué se concluye?",
        opciones: [
          "El tiempo de ciclo no cambió, pero el lead time que percibe el cliente es de aproximadamente 72 horas",
          "El tiempo de ciclo fue de 72 horas porque incluye toda la espera",
          "El lead time es de 3 horas 45 minutos, igual que el tiempo de ciclo",
          "No se puede calcular ninguno de los dos sin conocer el takt time"
        ],
        correcta: 0,
        explicacion: "El tiempo de ciclo mira hacia adentro del proceso; el lead time mira hacia afuera, en tiempo de calendario. El proceso no fue más lento: el calendario sí.",
        porQueNo: {
          1: "El tiempo de ciclo cuenta el tiempo dentro de las fronteras del proceso, que no arrancó hasta el lunes.",
          2: "Ese es el tiempo de ciclo; el cliente esperó mucho más.",
          3: "El takt time depende de la demanda y no interviene en este cálculo."
        }
      },
      {
        tema: "Lead time",
        pregunta: "En tu entrega reportas «tiempo de proceso: 8 horas». ¿Qué le falta al indicador para ser defendible?",
        opciones: [
          "Declarar cuál de los tiempos es y entre qué dos eventos se mide",
          "Convertirlo a minutos para mayor precisión",
          "Compararlo contra el takt time del proceso",
          "Expresarlo como porcentaje del tiempo total disponible"
        ],
        correcta: 0,
        explicacion: "«Tiempo de proceso» puede significar procesamiento, tiempo de ciclo o lead time, y las tres dan números muy distintos. Un indicador sin sus fronteras definidas no es comparable con nada.",
        porQueNo: {
          1: "La unidad no resuelve la ambigüedad de qué se está midiendo.",
          2: "Es útil, pero solo después de saber qué mide el número.",
          3: "Un porcentaje sobre una base indefinida arrastra la misma ambigüedad."
        }
      },
      {
        tema: "WIP y Ley de Little",
        pregunta: "Un proceso completa 18 solicitudes por hora y cada una permanece 2.5 horas dentro. ¿Cuál es el WIP promedio?",
        opciones: ["45 solicitudes", "7.2 solicitudes", "20.5 solicitudes", "No se puede saber sin conocer la capacidad"],
        correcta: 0,
        explicacion: "Ley de Little: WIP = Throughput × Lead time = 18 × 2.5 = 45.",
        porQueNo: {
          1: "18 / 2.5 invierte la relación.",
          2: "Sumar throughput y lead time mezcla unidades distintas.",
          3: "La ley de Little relaciona exactamente esas tres variables; la capacidad no hace falta."
        }
      },
      {
        tema: "WIP",
        pregunta: "Se duplica el WIP de un proceso sin cambiar su capacidad. Según la ley de Little, ¿qué ocurre?",
        opciones: [
          "El lead time se duplica: cada trabajo pasa el doble de tiempo dentro del proceso",
          "El throughput se duplica y se entrega el doble",
          "No cambia nada; el WIP es independiente del tiempo",
          "El lead time se reduce a la mitad por efecto de escala"
        ],
        correcta: 0,
        explicacion: "Si WIP = Throughput × Lead time y el throughput está fijo por la capacidad, aumentar el WIP solo alarga el lead time. Es la justificación de los límites de WIP en Kanban.",
        porQueNo: {
          1: "El throughput está limitado por el cuello de botella, no por cuánto trabajo se empuje.",
          2: "Las tres variables están ligadas por la ecuación.",
          3: "Meter más trabajo nunca acorta el tiempo de cada trabajo."
        }
      },
      {
        tema: "Automatización",
        pregunta: "Se automatiza un proceso con 8 % de retrabajo y tres capturas duplicadas, sin rediseñarlo antes. ¿Cuál es el riesgo principal?",
        opciones: [
          "Se obtiene un proceso defectuoso más rápido, con el defecto ahora incrustado en el sistema y más caro de corregir",
          "El proceso mejora igual, solo que más lentamente",
          "La automatización elimina el retrabajo por sí sola",
          "No hay riesgo: automatizar siempre reduce el tiempo de ciclo"
        ],
        correcta: 0,
        explicacion: "Primero se rediseña, después se automatiza. Codificar un flujo defectuoso lo vuelve rígido y su corrección pasa a requerir un proyecto de sistemas.",
        porQueNo: {
          1: "No es una cuestión de velocidad de mejora: la causa del defecto sigue intacta.",
          2: "El retrabajo viene de la causa raíz del error, que la automatización no toca.",
          3: "Puede reducir el tiempo de las actividades sin tocar las esperas, que suelen ser el grueso."
        }
      },
      {
        tema: "Modelo AS-IS",
        pregunta: "¿Qué debe representar un modelo AS-IS?",
        opciones: [
          "Cómo opera realmente el proceso hoy, con sus esperas, retrabajos y excepciones",
          "Cómo debería operar el proceso según el manual de procedimientos",
          "Cómo operará una vez implementada la mejora",
          "Únicamente las actividades que agregan valor al cliente"
        ],
        correcta: 0,
        explicacion: "El AS-IS documenta la realidad, no la norma ni el deseo. Si se modela el manual en lugar de la operación, la brecha calculada será ficticia.",
        porQueNo: {
          1: "El manual describe lo prescrito; casi nunca coincide con lo que ocurre.",
          2: "Ese es el TO-BE.",
          3: "Justamente lo que no agrega valor es lo que hay que documentar para poder eliminarlo."
        }
      },
      {
        tema: "Rediseño",
        pregunta: "La meta es reducir un proceso de 72 h a 8 h. ¿Qué enfoque corresponde?",
        opciones: [
          "Rediseño del flujo: una reducción de casi 90 % no se alcanza acelerando actividades",
          "Mejora incremental: ajustes sucesivos hasta llegar a la meta",
          "Automatizar cada actividad conservando la secuencia actual",
          "Contratar más personal en cada etapa del proceso"
        ],
        correcta: 0,
        explicacion: "Cuando la brecha es de un orden de magnitud, el problema está en el diseño del flujo —secuencia, handoffs, aprobaciones— y no en la velocidad de las actividades.",
        porQueNo: {
          1: "Lo incremental sirve para brechas de 10 a 20 %, no de 90 %.",
          2: "Automatizar la misma secuencia conserva las esperas, que son el grueso de las 72 h.",
          3: "Más personal no elimina una espera de aprobación secuencial."
        }
      },
      {
        tema: "Simulación",
        pregunta: "¿Qué aporta la simulación que no aporta el cálculo analítico?",
        opciones: [
          "El comportamiento ante la variabilidad: distribución del tiempo de ciclo, colas y utilización, no solo promedios",
          "Mayor precisión en el cálculo del promedio",
          "La eliminación de la necesidad de levantar el AS-IS",
          "La certeza de que la mejora funcionará al implementarse"
        ],
        correcta: 0,
        explicacion: "El cálculo analítico entrega promedios. La simulación muestra qué pasa cuando las llegadas son irregulares y los tiempos varían: ahí aparecen las colas.",
        porQueNo: {
          1: "Para el promedio, el cálculo analítico es suficiente y más barato.",
          2: "La simulación se alimenta del AS-IS; sin él, produce resultados precisos y falsos.",
          3: "Reduce el riesgo, no lo elimina; por eso existen el piloto y la adecuación."
        }
      },
      {
        tema: "Valor",
        pregunta: "Una inspección exigida por una norma sectorial no agrega valor al cliente. ¿Qué corresponde hacer en el rediseño?",
        opciones: [
          "Conservarla pero rediseñarla para que cueste menos tiempo: automatizarla, moverla al origen o hacerla por muestreo si la norma lo permite",
          "Eliminarla, porque el criterio es el valor percibido por el cliente",
          "Conservarla intacta: las actividades normativas no se tocan",
          "Trasladarla al cliente para que él la realice"
        ],
        correcta: 0,
        explicacion: "Las actividades necesarias para el negocio o el cumplimiento no se eliminan, pero sí se optimizan. El marco normativo es una restricción de diseño, no una excusa para no rediseñar.",
        porQueNo: {
          1: "Eliminar un control obligatorio genera un riesgo de incumplimiento mayor que el ahorro.",
          2: "La obligación es sobre el control, no sobre la forma de ejecutarlo.",
          3: "Trasladar al cliente un control de cumplimiento propio no traslada la responsabilidad legal."
        }
      },
      {
        tema: "Indicadores",
        pregunta: "¿Cuál de estos indicadores es de servicio y no operativo?",
        opciones: [
          "Porcentaje de entregas completas y a tiempo (OTIF)",
          "Capacidad en uso del cuello de botella",
          "Work in process promedio",
          "Throughput por turno"
        ],
        correcta: 0,
        explicacion: "Los indicadores de servicio miden lo que el cliente percibe; los operativos miden cómo se comporta el proceso por dentro.",
        porQueNo: {
          1: "Mide la utilización interna de un recurso.",
          2: "Mide la carga interna del proceso.",
          3: "Mide el rendimiento interno por unidad de tiempo."
        }
      },
      {
        tema: "Proyectos y procesos",
        pregunta: "«Implementar el portal de proveedores» frente a «dar de alta un proveedor». ¿Cómo se clasifican?",
        opciones: [
          "El primero es un proyecto y el segundo un proceso",
          "Ambos son procesos, con distinta frecuencia",
          "El primero es un proceso porque tiene actividades repetibles internas",
          "Ambos son proyectos porque tienen inicio y fin definidos"
        ],
        correcta: 0,
        explicacion: "El proyecto es temporal y produce un resultado único; el proceso es repetible y sigue operando después de que el proyecto cerró.",
        porQueNo: {
          1: "La implementación ocurre una sola vez y termina.",
          2: "Tener actividades internas repetibles no lo vuelve un proceso de negocio recurrente.",
          3: "Dar de alta proveedores no termina: se ejecuta indefinidamente."
        }
      },
      {
        tema: "Ciclo BPM",
        pregunta: "En el ciclo de vida de la administración de procesos, ¿qué etapa produce el modelo AS-IS?",
        opciones: ["Descubrimiento", "Rediseño", "Monitoreo", "Implementación"],
        correcta: 0,
        explicacion: "El ciclo es identificación → descubrimiento → análisis → rediseño → implementación → monitoreo, y el monitoreo realimenta el análisis.",
        porQueNo: {
          1: "El rediseño produce el TO-BE, a partir del AS-IS ya levantado.",
          2: "El monitoreo mide el proceso ya implementado.",
          3: "La implementación ejecuta el cambio diseñado."
        }
      }
    ],

    /* ---------- Escenario → técnica ---------- */
    escenarios: [
      {
        escenario: "Tres actividades ocurren simultáneamente después de una compuerta AND y duran 8, 12 y 5 minutos. Hay que determinar cuánto aporta el tramo al tiempo de ciclo.",
        pregunta: "¿Qué regla de cálculo aplica?",
        opciones: ["Tomar el máximo: máx(8, 12, 5)", "Sumar los tres tiempos", "Ponderar por probabilidad", "Aplicar T/(1−r)"],
        correcta: 0,
        explicacion: "Rutas paralelas: la convergencia espera a la rama más lenta, así que el tramo aporta 12 minutos.",
        porQueNo: { 1: "Sumar aplica a actividades secuenciales.", 2: "Ponderar aplica a compuertas exclusivas.", 3: "Esa fórmula es para retrabajo." }
      },
      {
        escenario: "Una compuerta exclusiva reparte los trabajos: 50 % a una revisión rápida de 5 min y 50 % a una revisión completa de 25 min.",
        pregunta: "¿Qué regla de cálculo aplica?",
        opciones: ["Σ pᵢ·Tᵢ = 0.5×5 + 0.5×25", "máx(5, 25)", "5 + 25", "(1+0.5)×25"],
        correcta: 0,
        explicacion: "Rutas múltiples: cada trabajo toma solo una rama, así que se pondera por probabilidad. El tramo aporta 15 minutos.",
        porQueNo: { 1: "El máximo aplica a rutas paralelas, donde ambas ocurren.", 2: "Sumar supondría que todos pasan por las dos revisiones.", 3: "No hay repetición del ciclo, hay bifurcación." }
      },
      {
        escenario: "Un control de calidad rechaza el 12 % de las piezas y las devuelve al inicio del ciclo, que puede repetirse las veces que haga falta hasta pasar.",
        pregunta: "¿Qué fórmula corresponde?",
        opciones: ["CT = T / (1 − 0.12)", "CT = (1 + 0.12) × T", "CT = máx(T, 0.12T)", "CT = 0.12 × T"],
        correcta: 0,
        explicacion: "Repeticiones ilimitadas se modelan con T/(1−r), que es la suma de la serie geométrica de repeticiones.",
        porQueNo: { 1: "(1+r)T supone una sola repetición.", 2: "El máximo es la regla de rutas paralelas.", 3: "0.12×T solo cuantifica la parte que se repite, no el ciclo completo." }
      },
      {
        escenario: "La demanda del cliente es de 320 unidades y el turno neto disponible es de 440 minutos. Hay que saber a qué ritmo debe salir cada unidad.",
        pregunta: "¿Qué se calcula?",
        opciones: ["Takt time = 440 / 320", "Tiempo de ciclo = 440 × 320", "Capacidad = 320 / 440", "Eficiencia = 320 / 440"],
        correcta: 0,
        explicacion: "Takt = Tiempo neto disponible / Demanda = 1.375 min por unidad. Es el ritmo que impone el mercado.",
        porQueNo: { 1: "Multiplicar no produce una unidad interpretable.", 2: "La capacidad se calcula desde los recursos, no desde la demanda.", 3: "La eficiencia del ciclo es TCT/CT." }
      },
      {
        escenario: "La capacidad calculada es de 133 unidades/día y la dirección pide 150. El equipo propone comprar una unidad más del recurso con mayor carga por job.",
        pregunta: "¿Qué debe verificarse antes de aprobar la inversión?",
        opciones: [
          "Que ese recurso sea efectivamente el cuello de botella y a dónde se desplazará la restricción después",
          "Que el proveedor entregue el recurso a tiempo",
          "Que el tiempo de ciclo del proceso baje proporcionalmente",
          "Que la eficiencia del ciclo supere el 80 %"
        ],
        correcta: 0,
        explicacion: "La mayor carga por job no implica ser el cuello de botella: depende de las unidades disponibles. Y al elevar la restricción, esta se desplaza a otro recurso que puede seguir por debajo de la meta.",
        porQueNo: {
          1: "Es logística de compra, no análisis de capacidad.",
          2: "Aumentar capacidad no reduce el tiempo de ciclo de un trabajo individual.",
          3: "La eficiencia del ciclo mide espera, no capacidad."
        }
      },
      {
        escenario: "El proceso cumple la capacidad requerida, pero el tiempo que cada solicitud pasa dentro creció de 2 a 4 horas sin que aumentara la demanda ni cambiara el personal.",
        pregunta: "¿Qué explica mejor el fenómeno y con qué se analiza?",
        opciones: [
          "Aumentó el WIP; se analiza con la ley de Little",
          "Bajó el takt time; se analiza recalculando la demanda",
          "Subió la tasa de retrabajo; se analiza con máx(T₁…Tₙ)",
          "Se desbalancearon las rutas paralelas; se analiza con Σ pᵢ·Tᵢ"
        ],
        correcta: 0,
        explicacion: "WIP = Throughput × Lead time. Con throughput constante, un lead time que se duplica implica que el WIP se duplicó: se está soltando más trabajo al proceso del que puede absorber.",
        porQueNo: {
          1: "El takt lo fija la demanda, que no cambió.",
          2: "Un aumento de retrabajo es posible, pero no se analiza con la regla de rutas paralelas.",
          3: "Σ pᵢ·Tᵢ es la regla de rutas múltiples, no de balance."
        }
      },
      {
        escenario: "Las llegadas de solicitudes son muy irregulares: hay horas con 3 y horas con 40. El cálculo analítico da un tiempo de ciclo promedio aceptable, pero los clientes se quejan de esperas largas.",
        pregunta: "¿Qué herramienta corresponde usar?",
        opciones: [
          "Simulación de procesos, para ver la distribución y las colas y no solo el promedio",
          "Recalcular el tiempo de ciclo con más decimales",
          "Aplicar la fórmula de rutas paralelas al tramo más lento",
          "Aumentar el takt time hasta que coincida con el promedio"
        ],
        correcta: 0,
        explicacion: "El promedio esconde la variabilidad. La simulación muestra la distribución del tiempo de ciclo, la longitud de las colas y la utilización de cada recurso ante llegadas irregulares.",
        porQueNo: {
          1: "La precisión decimal no resuelve un problema de variabilidad.",
          2: "No hay un tramo paralelo involucrado en el planteamiento.",
          3: "El takt lo impone la demanda; no es un parámetro que se ajuste a conveniencia."
        }
      },
      {
        escenario: "El proceso tiene 45 minutos de trabajo real y 71 horas de duración total, con seis handoffs entre áreas y tres capturas del mismo dato.",
        pregunta: "¿Por dónde debe empezar el rediseño?",
        opciones: [
          "Por eliminar esperas y handoffs, y por integrar la captura: ahí está el 99 % del tiempo",
          "Por acelerar las actividades para bajar los 45 minutos",
          "Por aumentar el número de unidades de cada recurso",
          "Por implementar un sistema nuevo que reemplace a los actuales"
        ],
        correcta: 0,
        explicacion: "Con una eficiencia de ciclo cercana al 1 %, optimizar el trabajo real no mueve el indicador. El problema está en el diseño del flujo.",
        porQueNo: {
          1: "Reducir los 45 minutos a la mitad mejora el total en 22 minutos sobre 71 horas.",
          2: "Más recursos atacarían un problema de capacidad, y el problema descrito es de flujo.",
          3: "Comprar sistema antes de rediseñar el flujo automatiza el desorden."
        }
      }
    ],

    /* ---------- Clasificar ---------- */
    clasificar: [
      {
        consigna: "Clasifica cada situación según la regla de cálculo que le corresponde.",
        categorias: ["Suma secuencial", "Rutas múltiples (Σ p·T)", "Rutas paralelas (máx)", "Retrabajo"],
        items: [
          { texto: "Actividades encadenadas una tras otra", categoria: "Suma secuencial" },
          { texto: "Recepción → validación → registro", categoria: "Suma secuencial" },
          { texto: "Compuerta exclusiva con 30 % / 70 %", categoria: "Rutas múltiples (Σ p·T)" },
          { texto: "Pedido nacional o de exportación, según el cliente", categoria: "Rutas múltiples (Σ p·T)" },
          { texto: "Compuerta AND que se abre y luego converge", categoria: "Rutas paralelas (máx)" },
          { texto: "Revisión legal y revisión financiera al mismo tiempo", categoria: "Rutas paralelas (máx)" },
          { texto: "Inspección que rechaza el 15 % y devuelve al inicio del ciclo", categoria: "Retrabajo" },
          { texto: "Pieza que se vuelve a maquinar hasta cumplir tolerancia", categoria: "Retrabajo" }
        ],
        explicacion: "Las cuatro reglas: secuencial suma; exclusiva pondera por probabilidad; AND toma el máximo; el reproceso usa (1+r)·T o T/(1−r) según se repita una vez o las que hagan falta."
      },
      {
        consigna: "Clasifica cada indicador según lo que mide.",
        categorias: ["Operativo", "De calidad", "Financiero", "De servicio"],
        items: [
          { texto: "Tiempo de ciclo (CT)", categoria: "Operativo" },
          { texto: "Throughput por turno", categoria: "Operativo" },
          { texto: "Capacidad en uso del cuello de botella", categoria: "Operativo" },
          { texto: "WIP promedio", categoria: "Operativo" },
          { texto: "Tasa de error", categoria: "De calidad" },
          { texto: "First pass yield", categoria: "De calidad" },
          { texto: "Número de retrabajos por mes", categoria: "De calidad" },
          { texto: "Costo por transacción", categoria: "Financiero" },
          { texto: "Costo anual del retrabajo", categoria: "Financiero" },
          { texto: "Entregas completas y a tiempo (OTIF)", categoria: "De servicio" },
          { texto: "Tiempo de respuesta al cliente", categoria: "De servicio" },
          { texto: "Net Promoter Score", categoria: "De servicio" }
        ],
        explicacion: "Una propuesta sólida presenta las cuatro dimensiones. Mostrar solo operativos deja al CFO sin argumento financiero y al cliente sin evidencia de que algo mejora para él."
      },
      {
        consigna: "El problema es distinto en cada caso. Clasifica según la metodología de mejora que corresponde.",
        categorias: ["Lean", "Six Sigma", "Teoría de restricciones", "BPR (rediseño radical)"],
        items: [
          { texto: "22 min de trabajo contra 23 h de lead time", categoria: "Lean" },
          { texto: "Tres capturas del mismo dato y seis handoffs", categoria: "Lean" },
          { texto: "El resultado varía entre 2 y 9 días sin causa aparente", categoria: "Six Sigma" },
          { texto: "Tasa de error del 8 % que obliga a rehacer", categoria: "Six Sigma" },
          { texto: "La demanda es de 150 y la capacidad de 133", categoria: "Teoría de restricciones" },
          { texto: "Un recurso saturado mientras los demás están ociosos", categoria: "Teoría de restricciones" },
          { texto: "La meta exige pasar de 72 h a 8 h", categoria: "BPR (rediseño radical)" },
          { texto: "Hay que cuestionar por qué existe cada actividad del flujo", categoria: "BPR (rediseño radical)" }
        ],
        explicacion: "Lean ataca desperdicio, Six Sigma ataca variación y defectos, TOC ataca la restricción de capacidad y BPR ataca el diseño completo del flujo cuando la meta exige un orden de magnitud."
      },
      {
        consigna: "Clasifica cada elemento según si consume capacidad del recurso o solo alarga el tiempo de ciclo.",
        categorias: ["Consume capacidad del recurso", "Solo alarga el tiempo de ciclo", "Ambos"],
        items: [
          { texto: "Tiempo de procesamiento de la actividad", categoria: "Consume capacidad del recurso" },
          { texto: "Tiempo de máquina en operación", categoria: "Consume capacidad del recurso" },
          { texto: "Espera en cola antes de la aprobación", categoria: "Solo alarga el tiempo de ciclo" },
          { texto: "Documento almacenado esperando revisión", categoria: "Solo alarga el tiempo de ciclo" },
          { texto: "Traslado del expediente entre áreas", categoria: "Solo alarga el tiempo de ciclo" },
          { texto: "Retrabajo de una pieza rechazada", categoria: "Ambos" },
          { texto: "Inspección ejecutada por un recurso del proceso", categoria: "Ambos" }
        ],
        explicacion: "Esta distinción es la que decide qué tiempo entra en el cálculo de carga. La espera alarga el CT pero deja al recurso libre; el retrabajo hace las dos cosas, y por eso es tan caro."
      }
    ],

    /* ---------- Ordenar ---------- */
    ordenar: [
      {
        consigna: "Ordena las etapas del ciclo de vida de la administración de procesos (BPM).",
        pasos: ["Identificación de procesos", "Descubrimiento (modelo AS-IS)", "Análisis del proceso", "Rediseño (modelo TO-BE)", "Implementación", "Monitoreo y control"],
        explicacion: "Es un ciclo: el monitoreo detecta desvíos que regresan al análisis. No termina con la implementación."
      },
      {
        consigna: "Ordena los cinco pasos de enfoque de la teoría de restricciones.",
        pasos: [
          "Identificar la restricción del sistema",
          "Explotar la restricción (sacarle el máximo sin invertir)",
          "Subordinar todo lo demás al ritmo de la restricción",
          "Elevar la restricción (ahora sí, invertir)",
          "Repetir: si se rompió, hay una nueva en otro lado"
        ],
        explicacion: "Explotar va antes que elevar: primero se agota lo que no cuesta dinero. Invertir sin haber explotado es la forma más común de comprar capacidad innecesaria."
      },
      {
        consigna: "Ordena el procedimiento para calcular la capacidad de un proceso.",
        pasos: [
          "Asignar cada actividad a su recurso",
          "Calcular el factor de carga de cada actividad",
          "Calcular la carga por job de cada recurso (Σ procesamiento × factor)",
          "Calcular la capacidad del pool: unidades / carga por job",
          "Convertir a capacidad diaria: × 60 × horas de operación",
          "Tomar el mínimo entre recursos: capacidad teórica y cuello de botella",
          "Comparar contra la demanda: capacidad en uso"
        ],
        explicacion: "Saltarse el factor de carga es el error más frecuente: cargar cada actividad al 100 % cuando solo el 40 % de los trabajos pasa por ella infla la carga y desplaza el cuello de botella."
      },
      {
        consigna: "Ordena los tramos del proceso de referencia tal como se recorren para armar la expresión del tiempo de ciclo.",
        pasos: [
          "A — actividad común inicial",
          "Tramo de rutas múltiples: 0.3 × B + C",
          "Tramo con retrabajo: (1 + r) × (D + E + I)",
          "Tramo paralelo: máx(G, F)",
          "H — actividad común final"
        ],
        explicacion: "El CT se arma recorriendo el proceso de principio a fin y aplicando a cada tramo la regla de su patrón. El total es la suma de los tramos: 10 + 29 + 38.5 + 13 + 2 = 92.5 min."
      },
      {
        consigna: "Ordena la estructura de la propuesta de mejora que se entrega al final del módulo.",
        pasos: [
          "Problem statement con magnitud medida",
          "AS-IS documentado y sus indicadores base",
          "Análisis: CT, TCT, eficiencia, capacidad, cuello de botella, costo",
          "Causas identificadas",
          "Alternativas evaluadas contra criterios explícitos",
          "TO-BE elegido con los mismos indicadores recalculados",
          "Inversión requerida y escenarios",
          "Roadmap de implementación"
        ],
        explicacion: "El TO-BE se presenta con los mismos indicadores del AS-IS. Cambiar de métrica entre el diagnóstico y la propuesta hace incomparable la mejora y destruye la credibilidad del análisis."
      },
      {
        consigna: "Ordena las heurísticas de rediseño de menor a mayor costo y riesgo de implementación.",
        pasos: [
          "Eliminar la actividad que no agrega valor ni exige norma",
          "Simplificar pasos, campos y firmas",
          "Paralelizar lo que hoy está en serie sin dependencia real",
          "Empoderar con reglas y umbrales para quitar esperas de aprobación",
          "Integrar sistemas para capturar el dato una sola vez",
          "Automatizar el flujo ya rediseñado"
        ],
        explicacion: "Automatizar al final no es una preferencia estética: es lo más caro, lo más lento de revertir y lo que más daño hace si se aplica sobre un flujo defectuoso."
      }
    ],

    /* ---------- Flashcards ---------- */
    flashcards: [
      { frente: "Tiempo de ciclo (CT)", reverso: "Tiempo promedio que toma completar un trabajo de principio a fin. Incluye procesamiento y espera. Se puede medir con cronómetro." },
      { frente: "Tiempo teórico de ciclo (TCT)", reverso: "El mismo cálculo pero solo con tiempo de procesamiento, suponiendo cero esperas. Es el piso alcanzable sin cambiar la tecnología." },
      { frente: "Eficiencia del ciclo", reverso: "TCT / CT. Qué proporción del tiempo total es trabajo real; el resto es espera." },
      { frente: "Tiempo de actividad", reverso: "Tiempo de procesamiento + tiempo de espera." },
      { frente: "Takt time", reverso: "Tiempo neto disponible / demanda del cliente. Regla del touchdown: T / D. No se mide: se calcula." },
      { frente: "Rutas múltiples", reverso: "Compuerta exclusiva. Tiempo esperado = Σ pᵢ · Tᵢ. Solo se pondera lo que difiere entre ramas; lo común entra completo." },
      { frente: "Rutas paralelas", reverso: "Compuerta AND. Tiempo = máx(T₁ … Tₙ), porque la convergencia espera a la rama más lenta." },
      { frente: "Retrabajo, una repetición", reverso: "CT = (1 + r) · T, donde T es la suma de las actividades del ciclo y r la tasa de rechazo." },
      { frente: "Retrabajo, repeticiones ilimitadas", reverso: "CT = T / (1 − r). Con r = 0.15 y T = 20: 23.53 min, contra 23 min de la fórmula de una sola repetición." },
      { frente: "Factor de carga", reverso: "Fracción de los trabajos que pasa por una actividad. Común = 1. Rama del 40 % con 15 % de reproceso = 0.4 × 1.15 = 0.46. Dos ramas que convergen = suma de sus probabilidades." },
      { frente: "Carga por job de un recurso", reverso: "Σ (tiempo de PROCESAMIENTO × factor de carga) de sus actividades. La espera no cuenta: mientras el trabajo espera, el recurso está libre." },
      { frente: "Capacidad de un recurso por día", reverso: "(unidades del pool / carga por job) × 60 × horas de operación." },
      { frente: "Capacidad teórica del proceso", reverso: "El mínimo entre las capacidades de todos los recursos." },
      { frente: "Cuello de botella", reverso: "El recurso cuya capacidad es la menor. No lo determina la carga sola, sino la carga frente a las unidades disponibles." },
      { frente: "Capacidad en uso", reverso: "Demanda / capacidad teórica. Con 100 unidades sobre 132.96 de capacidad: 75.2 %." },
      { frente: "Los 5 pasos de la teoría de restricciones", reverso: "Identificar → Explotar → Subordinar → Elevar → Repetir. Explotar (gratis) siempre antes que elevar (caro)." },
      { frente: "Qué pasa al eliminar un cuello de botella", reverso: "Se desplaza a otro recurso; no desaparece del proceso. Por eso el quinto paso de TOC es repetir." },
      { frente: "Lead time", reverso: "Tiempo total transcurrido desde que el cliente lo pide hasta que lo recibe, en tiempo de calendario: procesamiento + esperas + noches y fines de semana. Es el tiempo que el cliente percibe." },
      { frente: "Lead time vs. tiempo de ciclo", reverso: "El tiempo de ciclo mira hacia adentro (cuánto tarda el proceso); el lead time mira hacia afuera (cuánto espera el cliente). Coinciden si el proceso opera de forma continua; difieren si hay horarios, turnos o colas previas. Declara siempre cuál mides y entre qué eventos." },
      { frente: "Los cinco tiempos", reverso: "Procesamiento (se trabaja) · Espera (nadie trabaja) · Tiempo de ciclo (procesamiento + espera dentro del proceso) · Lead time (lo que percibe el cliente, en calendario) · Takt (ritmo que exige la demanda, se calcula)." },
      { frente: "Ley de Little", reverso: "WIP = Throughput × Lead time. Si el throughput está fijo por la capacidad, más WIP significa más lead time." },
      { frente: "Las tres lecturas de la ley de Little", reverso: "WIP = Th × LT (cuánto hay atorado) · LT = WIP / Th (cuánto tarda un job) · Th = WIP / LT (a qué ritmo se completa). Las unidades cuadran: unidades = (unidades/tiempo) × tiempo." },
      { frente: "WIP", reverso: "Work in Process: todos los jobs que están dentro del proceso en un momento dado." },
      { frente: "Throughput", reverso: "Jobs completados por unidad de tiempo. Es la capacidad efectivamente alcanzada." },
      { frente: "Modelo AS-IS", reverso: "El proceso tal como opera hoy, con esperas, retrabajos y excepciones reales. No es el manual de procedimientos." },
      { frente: "Ciclo de vida BPM", reverso: "Identificación → Descubrimiento → Análisis → Rediseño → Implementación → Monitoreo, de forma continua." },
      { frente: "Heurísticas de rediseño", reverso: "Eliminar · Simplificar · Integrar · Paralelizar · Triage · Empoderar · Mover el control al origen · Automatizar al final." },
      { frente: "Regla de oro del rediseño", reverso: "Todo cambio propuesto debe expresarse como efecto sobre un número: reduce CT, reduce costo por transacción o aumenta capacidad. Si no, es una opinión." },
      { frente: "Costo por transacción", reverso: "Costo total de operar el proceso / jobs completados. Es el indicador que la dirección entiende de inmediato." },
      { frente: "Cuándo aporta la simulación", reverso: "Cuando hay colas, recursos compartidos o demanda variable, y se quieren comparar escenarios. No aporta si el AS-IS está mal levantado." },
      { frente: "Actividad exigida por norma que no agrega valor", reverso: "No se elimina: se rediseña para que cueste menos tiempo — automatizarla, moverla al origen o hacerla por muestreo si la norma lo permite." },
      { frente: "Primero rediseñar, después automatizar", reverso: "Automatizar un proceso defectuoso lo vuelve rígido: el defecto queda incrustado en el sistema y corregirlo pasa a requerir un proyecto." }
    ]
  }
});
