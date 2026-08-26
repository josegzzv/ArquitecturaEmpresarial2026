/* ============================================================
   SEMANA 5 — Del caso de negocio a la operación
   4 sesiones de 2 horas
   Cubre los puntos 3.4, 3.6, 3.7 y todo el capítulo 4 del temario oficial,
   más el bloque de valor, factibilidad, finanzas y madurez del listado.
   ============================================================ */

EA.registrarSemana({
  id: 5,
  estado: "publicada",
  titulo: "Del caso de negocio a la operación",
  subtitulo: "Descubrir la necesidad, justificarla con dinero, presentarla a la dirección e implantarla sin que se caiga.",
  sesiones: 4,

  objetivos: [
    "Aplicar técnicas de recopilación de información para levantar requerimientos con evidencia.",
    "Usar Design Thinking y el concepto de pain point para idear soluciones centradas en el usuario.",
    "Clasificar actividades en VA, ENVA y NVA y explicar la cadena de valor.",
    "Reconocer las filosofías de mejora: 5S, Just in Time, Kaizen, Kanban, Poka-Yoke, Six Sigma e ISO 9000.",
    "Realizar un análisis de factibilidad técnica, operativa y económica.",
    "Calcular costeo, punto de equilibrio, ROI, periodo de recuperación, VPN y TIR para justificar una propuesta.",
    "Explicar el rediseño dirigido por un ERP y el papel de la simulación con herramienta computacional.",
    "Presentar la situación deseada ante la gerencia con el nivel y el lenguaje adecuados.",
    "Planear la implantación: administración del cambio, puesta en operación, mejora continua y madurez BPM."
  ],

  dias: [

    /* ================= SESIÓN 1 ================= */
    {
      id: "s1",
      nombre: "Sesión 1",
      tema: "Descubrimiento, requerimientos y valor",
      proposito: "Antes de proponer hay que entender. Cómo se levanta información con evidencia, cómo se identifica lo que realmente le duele al usuario y cómo se separa el valor del desperdicio.",
      bloques: [
        {
          tipo: "tabla",
          titulo: "Técnicas de recopilación de información",
          encabezados: ["Técnica", "Cuándo conviene", "Riesgo que tiene"],
          filas: [
            ["<b>Entrevista</b>", "Explorar el proceso con quien lo conoce a fondo", "Se obtiene lo que la persona <i>cree</i> que hace"],
            ["<b>Observación directa</b> (<i>gemba</i>)", "Ver la operación real en el lugar donde ocurre", "El observado modifica su conducta"],
            ["<b>Taller / workshop</b>", "Alinear a varias áreas y resolver contradicciones en vivo", "El de mayor jerarquía impone su versión"],
            ["<b>Encuesta</b>", "Cubrir muchas personas o sitios con poco tiempo", "Poca profundidad; sesgo de quien responde"],
            ["<b>Análisis documental</b>", "Políticas, manuales, contratos, normativa", "Documenta lo prescrito, no lo real"],
            ["<b>Análisis de datos y logs</b>", "Medir tiempos, volúmenes y variantes reales", "Requiere calidad y acceso a los datos"],
            ["<b>Process mining</b>", "Reconstruir el proceso real desde el ERP", "Necesita registros completos y con marca de tiempo"],
            ["<b>Shadowing</b>", "Acompañar a un usuario durante su jornada completa", "Consume mucho tiempo del analista"],
            ["<b>Prototipo / mockup</b>", "Validar una idea antes de construirla", "Puede generar expectativa de entrega inmediata"]
          ]
        },
        {
          tipo: "clave",
          titulo: "La regla de la triangulación",
          cuerpo: "<p>Nunca sustentes un diagnóstico en una sola fuente. <b>Entrevista + observación + dato</b> es el mínimo defendible: la entrevista da el porqué, la observación da el cómo, y el dato da la magnitud.</p>"
                + "<p>Cuando las tres coinciden, tienes un hallazgo. Cuando no coinciden, tienes algo todavía más valioso: descubriste dónde la organización no sabe lo que hace.</p>"
        },
        {
          tipo: "defs",
          titulo: "Pain point y necesidad del cliente",
          items: [
            { termino: "Pain point", definicion: "Punto concreto donde el proceso le cuesta al usuario tiempo, esfuerzo, dinero o incertidumbre. Se enuncia con evidencia: «el proveedor llama tres veces a preguntar el estatus porque no tiene visibilidad»." },
            { termino: "Síntoma frente a causa", definicion: "«El sistema es lento» es un síntoma. «Se capturan tres veces los mismos datos porque los sistemas no están integrados» es una causa. Solo la causa se puede rediseñar." },
            { termino: "Necesidad del cliente", definicion: "El resultado que el cliente espera, expresado en <b>sus</b> términos y medido con <b>su</b> criterio, no con el indicador interno del área." },
            { termino: "Voz del cliente (VOC)", definicion: "Recolección estructurada de lo que el cliente pide, con la que se derivan los requerimientos y los criterios de aceptación." }
          ]
        },
        {
          tipo: "pasos",
          titulo: "Design Thinking aplicado a procesos",
          items: [
            "<b>Empatizar:</b> observar y entrevistar a quien vive el proceso; construir el usuario-persona.",
            "<b>Definir:</b> enunciar el problema desde la perspectiva del usuario, no desde la del área.",
            "<b>Idear:</b> generar muchas alternativas sin filtrarlas todavía; retar el pensamiento convencional.",
            "<b>Prototipar:</b> materializar la idea de forma barata — un mockup, un flujo en papel, un piloto acotado.",
            "<b>Probar:</b> ponerla frente al usuario real, aprender y regresar al paso que corresponda."
          ]
        },
        {
          tipo: "nota",
          titulo: "Ideación creativa: la pregunta que desbloquea",
          cuerpo: "<p>«<b>¿Por qué tiene que intervenir esta área?</b>» Cuestionar la existencia de cada actividad —no su velocidad— es lo que produce alternativas de orden de magnitud. Es la misma pregunta que convirtió la solicitud de vacaciones en una autorización automática.</p>"
                + "<p>Regla del taller de ideación: <b>generar sin juzgar</b>. Evaluar y generar al mismo tiempo mata las ideas incómodas, que suelen ser las buenas.</p>"
        },
        {
          tipo: "texto",
          titulo: "Cadena de valor",
          cuerpo: "<p>La <b>cadena de valor</b> descompone a la empresa en las actividades que crean valor para el cliente y las que las soportan. Las <b>primarias</b> tocan directamente el producto o servicio: "
                + "logística de entrada, operaciones, logística de salida, comercialización y servicio. Las <b>de apoyo</b> las habilitan: infraestructura de la empresa, recursos humanos, "
                + "desarrollo tecnológico y abastecimiento.</p>"
                + "<p>Sirve para dos cosas en arquitectura: ubicar <b>dónde vive el proceso que estás analizando</b> dentro del negocio, y distinguir qué capacidades son diferenciadoras —y merecen inversión— de cuáles son de soporte y podrían estandarizarse o tercerizarse.</p>"
        },
        {
          tipo: "defs",
          titulo: "Lean thinking: VA, ENVA y NVA",
          items: [
            { termino: "VA — Value Added", definicion: "Transforma el producto o servicio, el cliente lo reconoce y está dispuesto a pagarlo, y se hace bien a la primera." },
            { termino: "ENVA — Essential Non Value Added", definicion: "No agrega valor al cliente, pero es <b>necesaria</b>: exigida por norma, ley, contrato o por el control interno. No se elimina; se optimiza." },
            { termino: "NVA — Non Value Added", definicion: "Puro desperdicio: espera, retrabajo, captura duplicada, traslado, inspección redundante, sobreproceso. Se elimina." },
            { termino: "Eficiencia de valor", definicion: "VA / tiempo total. Es un indicador más exigente que la eficiencia del ciclo, porque separa lo esencial-no-valor del valor real." }
          ]
        },
        {
          tipo: "tabla",
          titulo: "Ejemplo de clasificación en una línea de confección",
          encabezados: ["Actividad", "Minutos", "Tipo"],
          filas: [
            ["Cortar tela", "12", "VA"],
            ["Confeccionar", "35", "VA"],
            ["Lavado y acabado", "18", "VA"],
            ["Inspección de calidad exigida por norma", "6", "ENVA"],
            ["Registro fiscal del lote", "4", "ENVA"],
            ["Espera entre estaciones", "40", "NVA"],
            ["Traslado al almacén", "9", "NVA"],
            ["Recaptura de datos en Excel", "6", "NVA"],
            ["<b>Total</b>", "<b>130</b>", "VA 50 % · ENVA 7.7 % · NVA 42.3 %"]
          ]
        },
        {
          tipo: "clave",
          titulo: "Cómo se lee",
          cuerpo: "<p>El 42 % del tiempo es desperdicio puro y es atacable de inmediato. El 7.7 % de ENVA no se elimina, pero sí se puede automatizar el registro fiscal y hacer la inspección por muestreo si la norma lo permite. "
                + "<b>Distinguir ENVA de NVA evita dos errores caros:</b> eliminar un control obligatorio, o resignarse a un desperdicio creyendo que era obligatorio.</p>"
        },
        {
          tipo: "defs",
          titulo: "Filosofías de mejora que conviene ubicar",
          items: [
            { termino: "5S", definicion: "Seiri (clasificar), Seiton (ordenar), Seiso (limpiar), Seiketsu (estandarizar), Shitsuke (disciplina). Base de cualquier mejora: sin orden, lo demás no se sostiene." },
            { termino: "JIT — Just in Time", definicion: "Producir y abastecer solo lo necesario, cuando se necesita. Reduce inventario y expone los problemas que el inventario escondía." },
            { termino: "Kaizen", definicion: "Mejora continua incremental con participación de quien ejecuta el proceso." },
            { termino: "Kanban", definicion: "Señal visual que <b>limita el trabajo en curso</b> y dispara el reabastecimiento. Su fundamento matemático es la ley de Little: menos WIP, menos lead time." },
            { termino: "Poka-Yoke", definicion: "Dispositivo o diseño a prueba de errores: hace <b>imposible</b> cometer el error, en lugar de detectarlo después. Un campo obligatorio con validación es un poka-yoke digital." },
            { termino: "Six Sigma", definicion: "Reducción de variación y defectos con base estadística, estructurada en DMAIC." },
            { termino: "ISO 9000 / 9001", definicion: "Familia de normas de gestión de la calidad; 9001 es la certificable. Aporta el marco documental y de auditoría sobre el que se apoya la mejora." },
            { termino: "Manufactura esbelta (Lean)", definicion: "El paraguas que integra 5S, JIT, Kanban, Poka-Yoke y Kaizen alrededor de un objetivo: entregar valor eliminando desperdicio." }
          ]
        },
        {
          tipo: "nota",
          titulo: "Poka-Yoke frente a inspección",
          cuerpo: "<p>Inspeccionar detecta el error <b>después</b> de cometerlo y cuesta tiempo cada vez. Un poka-yoke lo impide <b>antes</b> y cuesta una sola vez, al diseñarlo. "
                + "En términos del análisis de tiempo de ciclo: la inspección es ENVA permanente; el poka-yoke reduce la tasa de rechazo <b>r</b> y con ella todo el ciclo de retrabajo.</p>"
        }
      ]
    },

    /* ================= SESIÓN 2 ================= */
    {
      id: "s2",
      nombre: "Sesión 2",
      tema: "Factibilidad y justificación económica",
      proposito: "Convertir la propuesta en dinero. Una mejora que no se puede expresar en costo, tiempo o capacidad no se aprueba, y con razón.",
      bloques: [
        {
          tipo: "defs",
          titulo: "Las tres factibilidades",
          items: [
            { termino: "Factibilidad técnica", definicion: "¿Se puede construir con la tecnología, la infraestructura y las capacidades disponibles? ¿Los sistemas se integran? ¿La red y la seguridad lo soportan? ¿Hay talento para operarlo?" },
            { termino: "Factibilidad operativa", definicion: "¿La organización lo va a usar? ¿Las personas aceptarán el cambio? ¿Existen los roles y las competencias? ¿Es compatible con la cultura, los turnos y la carga de trabajo real?" },
            { termino: "Factibilidad económica", definicion: "¿Los beneficios superan a los costos en un horizonte razonable? Es donde entran ROI, payback, VPN y TIR." },
            { termino: "Factibilidad legal y normativa", definicion: "Complemento indispensable: ¿cumple con la regulación fiscal, laboral, de protección de datos y con las normas del sector?" }
          ]
        },
        {
          tipo: "clave",
          titulo: "La que más proyectos mata",
          cuerpo: "<p>No es la técnica: casi todo es técnicamente posible. Es la <b>operativa</b>. Un sistema impecable que nadie usa tiene beneficio cero, y el costo ya se pagó. "
                + "Por eso la administración del cambio no es un adorno del final: es un supuesto del caso de negocio.</p>"
        },
        {
          tipo: "defs",
          titulo: "Conceptos de costeo",
          items: [
            { termino: "Costo variable unitario", definicion: "Lo que cuesta producir una unidad más: materiales, insumos, maquila, energía directa." },
            { termino: "Costos fijos", definicion: "No cambian con el volumen en el corto plazo: renta, nómina administrativa, licencias, depreciación." },
            { termino: "Margen de contribución", definicion: "Precio − costo variable unitario. Es lo que cada unidad aporta para cubrir los fijos y después generar utilidad." },
            { termino: "Punto de equilibrio", definicion: "Costos fijos / margen de contribución. Volumen en el que la utilidad es cero." },
            { termino: "Costo por transacción", definicion: "Costo total de operar el proceso entre los jobs completados. El indicador que la dirección entiende de inmediato." },
            { termino: "Costeo por actividad (ABC)", definicion: "Asigna el costo a las actividades y de ahí al producto, en vez de prorratear. Hace visible qué actividad es cara." }
          ]
        },
        {
          tipo: "clave",
          titulo: "Por qué el margen de contribución manda",
          cuerpo: "<p>Una mejora de proceso que baja el costo variable unitario <b>aumenta el margen de contribución</b>, y eso mueve dos cosas a la vez: baja el punto de equilibrio y sube la utilidad de cada unidad vendida por encima de él. "
                + "Es la traducción exacta entre «reduje 20 minutos de proceso» y «gané dinero».</p>"
        },
        {
          tipo: "defs",
          titulo: "Métodos de evaluación de inversiones",
          items: [
            { termino: "ROI — Retorno sobre la inversión", definicion: "(Beneficio − Inversión) / Inversión. Simple y comunicable, pero <b>ignora el momento</b> en que ocurren los flujos." },
            { termino: "Periodo de recuperación (payback)", definicion: "Cuánto tarda la inversión en recuperarse. Mide riesgo y liquidez, no rentabilidad; tampoco considera lo que pasa después." },
            { termino: "VPN — Valor Presente Neto", definicion: "Suma de los flujos futuros descontados menos la inversión. <b>Criterio: si VPN &gt; 0, el proyecto crea valor</b> a la tasa exigida." },
            { termino: "TIR — Tasa Interna de Retorno", definicion: "Tasa a la que el VPN se hace cero. Se compara contra la tasa mínima exigida (TREMA o costo de capital)." },
            { termino: "Índice de rentabilidad", definicion: "Valor presente de los flujos / inversión. Útil para ordenar proyectos cuando el presupuesto es limitado." },
            { termino: "Análisis costo-beneficio", definicion: "Comparación estructurada de todos los costos y beneficios, incluidos los no monetarios, que se declaran aparte en lugar de inventarles un precio." }
          ]
        },
        {
          tipo: "tabla",
          titulo: "Fórmulas de referencia",
          encabezados: ["Indicador", "Fórmula", "Cómo se lee"],
          filas: [
            ["Margen de contribución", "<code>MC = Precio − Costo variable unitario</code>", "Lo que aporta cada unidad para cubrir fijos"],
            ["Punto de equilibrio", "<code>PE = Costos fijos / MC</code>", "Volumen en el que la utilidad es cero"],
            ["Retorno sobre la inversión", "<code>ROI = (Beneficio total − Inversión) / Inversión</code>", "Cuánto gano por cada peso invertido"],
            ["Periodo de recuperación", "<code>PB = Inversión / Flujo por periodo</code>", "En cuánto tiempo recupero lo invertido"],
            ["Factor de anualidad", "<code>FA = [1 − (1 + k)<sup>−n</sup>] / k</code>", "Atajo para descontar <i>n</i> flujos iguales a la tasa <i>k</i>"],
            ["Valor Presente Neto", "<code>VPN = Flujo × FA − Inversión</code>", "Si es mayor que cero, el proyecto crea valor"],
            ["VPN, forma general", "<code>VPN = Σ [ F<sub>t</sub> / (1 + k)<sup>t</sup> ] − Inversión</code>", "Cuando los flujos son distintos entre sí"],
            ["Tasa Interna de Retorno", "<code>TIR = la tasa k que hace VPN = 0</code>", "Se compara contra la TREMA exigida"],
            ["Índice de rentabilidad", "<code>IR = (Flujo × FA) / Inversión</code>", "Para priorizar con presupuesto limitado"]
          ]
        },
        {
          tipo: "tabla",
          titulo: "Qué método usar y para qué",
          encabezados: ["Método", "Responde", "Limitación"],
          filas: [
            ["ROI", "¿Cuánto gano por cada peso invertido?", "Ignora el valor del dinero en el tiempo"],
            ["Payback", "¿En cuánto tiempo recupero?", "Ignora todo lo que pasa después de recuperar"],
            ["VPN", "¿Crea valor a la tasa que exijo?", "Sensible al supuesto de la tasa de descuento"],
            ["TIR", "¿Qué rendimiento implícito tiene?", "Puede dar resultados múltiples con flujos irregulares"],
            ["Índice de rentabilidad", "¿Cuál priorizo con presupuesto limitado?", "No indica el tamaño absoluto del beneficio"]
          ]
        },
        {
          tipo: "nota",
          titulo: "Regla práctica para la entrega",
          cuerpo: "<p>Presenta <b>al menos VPN y payback juntos</b>. El VPN dice si crea valor; el payback dice qué tan expuesto estás mientras tanto. Un proyecto con buen VPN y payback de cinco años puede ser inaceptable para una empresa con problemas de liquidez.</p>"
                + "<p>Y declara siempre la <b>tasa de descuento</b> que usaste y de dónde salió. Cambiarla es la forma más fácil de manipular un VPN.</p>"
        },
        {
          tipo: "clave",
          titulo: "Beneficios de estrategias alternativas",
          cuerpo: "<p>Nunca presentes una sola opción: presenta <b>dos o tres alternativas evaluadas con los mismos criterios</b>, incluida la de <i>no hacer nada</i>. "
                + "El costo de no hacer nada casi nunca es cero — es el desperdicio que se sigue pagando cada mes — y calcularlo suele ser el argumento más contundente de toda la propuesta.</p>"
        }
      ]
    },

    /* ================= SESIÓN 3 ================= */
    {
      id: "s3",
      nombre: "Sesión 3",
      tema: "Rediseño con ERP, simulación y presentación a la gerencia",
      proposito: "Tres temas que cierran el diseño: cuando el rediseño lo dirige un sistema empresarial, cómo se prueba la propuesta antes de invertir, y cómo se presenta a quien decide.",
      bloques: [
        {
          tipo: "texto",
          titulo: "Rediseño dirigido por un ERP",
          cuerpo: "<p>Cuando una empresa implanta un ERP, el rediseño de procesos deja de ser libre: el sistema trae <b>procesos de referencia</b> —las llamadas mejores prácticas del producto— "
                + "y adaptarse a ellos es más barato que modificarlos.</p>"
                + "<p>Se abre entonces la decisión más importante del proyecto, y hay que tomarla proceso por proceso, no de forma global.</p>"
        },
        {
          tipo: "tabla",
          titulo: "Las dos posturas frente al proceso estándar del ERP",
          encabezados: ["", "Adoptar el estándar", "Personalizar el sistema"],
          filas: [
            ["Costo de implantación", "Menor", "Mayor"],
            ["Costo de cada actualización futura", "Bajo", "Alto y recurrente"],
            ["Velocidad", "Mayor", "Menor"],
            ["Ajuste a la operación actual", "Obliga a cambiar el proceso", "Conserva el proceso actual"],
            ["Riesgo", "Resistencia al cambio", "Deuda técnica y dependencia del proveedor"],
            ["Cuándo conviene", "Procesos de soporte y estándares del sector", "Solo donde el proceso es fuente real de diferenciación"]
          ]
        },
        {
          tipo: "clave",
          titulo: "El criterio, en una frase",
          cuerpo: "<p><b>Personaliza solo donde el proceso te diferencia en el mercado. En todo lo demás, adopta el estándar.</b></p>"
                + "<p>Aquí es donde la cadena de valor y la clasificación del portafolio dejan de ser teoría: son exactamente el criterio que separa lo diferenciador de lo commodity.</p>"
        },
        {
          tipo: "nota",
          titulo: "El error clásico",
          cuerpo: "<p>Configurar el ERP para replicar el proceso actual con todos sus vicios. La empresa paga la implantación completa, conserva las 23 horas de espera, y además queda atada a personalizaciones que encarecen cada actualización durante los próximos diez años.</p>"
        },
        {
          tipo: "texto",
          titulo: "Simulación con herramienta computacional",
          cuerpo: "<p>El cálculo analítico entrega <b>promedios</b>; la simulación muestra qué pasa con la <b>variabilidad</b>. Es la diferencia entre «el tiempo de ciclo promedio es de 31 minutos» y «el 15 % de los casos supera las 4 horas», que es lo que el cliente realmente percibe y reclama.</p>"
        },
        {
          tipo: "tabla",
          titulo: "Qué entra y qué sale de una simulación",
          encabezados: ["Entradas del modelo", "Resultados que produce"],
          filas: [
            ["Modelo del proceso (BPMN)", "Distribución del tiempo de ciclo, no solo el promedio"],
            ["Distribución de llegadas", "Longitud y tiempo de las colas"],
            ["Distribución de tiempos por actividad", "Utilización de cada recurso"],
            ["Unidades de cada recurso y calendarios", "Identificación del cuello de botella dinámico"],
            ["Probabilidades de las rutas y tasa de retrabajo", "Comparación cuantitativa entre escenarios"],
            ["Reglas de prioridad de la cola", "Sensibilidad ante cambios de demanda"]
          ]
        },
        {
          tipo: "pasos",
          titulo: "Cómo se conduce un estudio de simulación",
          items: [
            "Definir la pregunta que debe responder. Sin pregunta, la simulación produce datos y no decisiones.",
            "Construir el modelo del AS-IS con los tiempos y volúmenes reales.",
            "<b>Validarlo:</b> ¿el modelo reproduce lo que se observa en la operación? Si no, el modelo está mal y todo lo demás sobra.",
            "Definir los escenarios TO-BE que se van a comparar.",
            "Ejecutar con suficientes réplicas para que los resultados sean estadísticamente estables.",
            "Comparar escenarios con los mismos indicadores del baseline.",
            "Documentar supuestos y limitaciones junto con los resultados."
          ]
        },
        {
          tipo: "clave",
          titulo: "La advertencia que hay que repetir",
          cuerpo: "<p>Una simulación construida sobre un AS-IS mal levantado produce resultados <b>precisos y falsos</b>. La precisión decimal de la herramienta no valida los datos de entrada. Validar el modelo contra la realidad observada no es opcional.</p>"
        },
        {
          tipo: "texto",
          titulo: "Pruebas y adecuación",
          cuerpo: "<p>Antes de liberar a toda la organización se prueba en pequeño y se ajusta. Es más barato descubrir el error en una sucursal que en cuarenta.</p>"
        },
        {
          tipo: "lista",
          titulo: "Secuencia de pruebas",
          items: [
            "<b>Prueba del modelo:</b> validar que el AS-IS simulado reproduce la operación real.",
            "<b>Prueba funcional:</b> el flujo hace lo que debe, incluidos los casos de excepción.",
            "<b>Prueba de integración:</b> los sistemas se comunican y los datos llegan íntegros.",
            "<b>Prueba de carga:</b> el sistema y la infraestructura soportan el volumen esperado y el pico.",
            "<b>Prueba de aceptación del usuario (UAT):</b> quien ejecuta el proceso confirma que le sirve.",
            "<b>Piloto controlado:</b> una planta, una sucursal o un tipo de trabajo, con métricas comparables.",
            "<b>Adecuación:</b> ajustar reglas, umbrales, pantallas y capacitación con lo aprendido."
          ]
        },
        {
          tipo: "clave",
          titulo: "Presentación de la situación deseada ante la gerencia",
          cuerpo: "<p>La dirección no compra diagramas: compra <b>resultados, riesgo y decisión</b>. La misma arquitectura se presenta distinto al CEO, al CFO, al CISO y al arquitecto de integración — es la diferencia entre <i>view</i> y <i>viewpoint</i> llevada a la sala de juntas.</p>"
        },
        {
          tipo: "pasos",
          titulo: "Estructura de la presentación ejecutiva",
          items: [
            "<b>El problema con magnitud</b> (30 segundos): «el alta de proveedores tarda 72 horas y cuesta $88 mil al año en retrabajo».",
            "<b>Qué encontramos</b>: dos o tres hallazgos, con el dato que los sustenta.",
            "<b>Qué proponemos</b>: la situación deseada en una sola imagen.",
            "<b>Cuánto mejora</b>: la tabla AS-IS / TO-BE con los mismos indicadores.",
            "<b>Cuánto cuesta y cuándo retorna</b>: inversión, VPN, payback.",
            "<b>Qué riesgos tiene y cómo se mitigan</b>: incluida la resistencia al cambio.",
            "<b>Qué decisión se necesita hoy</b>: enunciada de forma explícita.",
            "<b>Anexos</b>: todo el detalle técnico, para las preguntas que surjan."
          ]
        },
        {
          tipo: "tabla",
          titulo: "Qué le importa a cada interlocutor",
          encabezados: ["Interlocutor", "Le interesa", "Enunciado que funciona"],
          filas: [
            ["CEO", "Valor, riesgo, posición competitiva", "«Entregamos al cliente en 8 horas en lugar de 72»"],
            ["CFO", "Costo, ROI, flujo, payback", "«$1.1 M de ahorro neto a 3 años, VPN positivo, recupera en 13 meses»"],
            ["CIO", "Arquitectura, deuda técnica, portafolio", "«Retira 3 sistemas redundantes y evita una integración nueva»"],
            ["CISO", "Riesgo, controles, cumplimiento", "«Elimina el manejo de datos de proveedor por correo»"],
            ["Director de operación", "Carga de trabajo, personal, transición", "«Libera 3 personas para actividades de mayor valor»"],
            ["Arquitecto de soluciones", "Interfaces, datos, componentes", "«Portal + BPM + API al ERP, dato maestro único»"]
          ]
        },
        {
          tipo: "nota",
          titulo: "Errores frecuentes al presentar",
          cuerpo: "<p>Abrir con el diagrama BPMN completo · hablar de tecnología antes que de resultado · presentar una sola alternativa · omitir el costo de no hacer nada · no decir qué decisión se necesita · esconder los riesgos.</p>"
                + "<p>Y el más grave: <b>cambiar de indicadores entre el diagnóstico y la propuesta</b>. Si mediste lead time en el AS-IS, mide lead time en el TO-BE. Cambiar la métrica hace incomparable la mejora y destruye la credibilidad de todo el análisis.</p>"
        }
      ]
    },

    /* ================= SESIÓN 4 ================= */
    {
      id: "s4",
      nombre: "Sesión 4",
      tema: "Implantación, operación y madurez",
      proposito: "Lo que separa una buena propuesta de una mejora real: administrar el cambio, poner en operación sin romper el negocio y sostener la mejora en el tiempo.",
      bloques: [
        {
          tipo: "clave",
          titulo: "Por qué fracasan los proyectos que estaban bien diseñados",
          cuerpo: "<p>Rara vez por la tecnología. Fracasan porque <b>la gente siguió trabajando como antes</b>: el sistema nuevo convive con el Excel viejo, la regla no se aplica, el proceso se salta «por urgencia» y a los seis meses la organización volvió a su estado anterior con un sistema caro encima.</p>"
        },
        {
          tipo: "defs",
          titulo: "Administración del cambio",
          items: [
            { termino: "Qué es", definicion: "Disciplina para llevar a las personas y a la organización del estado actual al deseado, atendiendo conciencia, deseo, conocimiento, capacidad y refuerzo." },
            { termino: "ADKAR", definicion: "Modelo por persona: <b>A</b>wareness (saber por qué), <b>D</b>esire (querer), <b>K</b>nowledge (saber cómo), <b>A</b>bility (poder hacerlo), <b>R</b>einforcement (que se sostenga). Si falla un eslabón, falla el cambio." },
            { termino: "Kotter", definicion: "Modelo organizacional en ocho pasos, que arranca creando sentido de urgencia y termina anclando el cambio en la cultura." },
            { termino: "Patrocinador (sponsor)", definicion: "El directivo que responde por el cambio ante la organización. Sin patrocinio visible y activo, ninguna metodología compensa." },
            { termino: "Resistencia al cambio", definicion: "No es necedad: suele ser información. Quien se resiste a veces conoce un caso de excepción que el diseño no contempló. Escucharla mejora el diseño." }
          ]
        },
        {
          tipo: "lista",
          titulo: "Palancas concretas de gestión del cambio",
          items: [
            "Comunicar <b>el porqué</b> antes que el qué, y con la voz del patrocinador, no la del proyecto.",
            "Involucrar a los usuarios desde el diseño: quien participó no se resiste igual.",
            "Identificar <b>campeones</b> por área: pares que ayudan y traducen, no jefes que vigilan.",
            "Capacitar en el momento oportuno — ni tan pronto que se olvide, ni tan tarde que estorbe.",
            "Ajustar incentivos e indicadores: si el bono sigue premiando la conducta anterior, gana el bono.",
            "<b>Cerrar la puerta de atrás:</b> retirar el sistema o el formato viejo. Mientras exista, se usará.",
            "Acompañar en la operación las primeras semanas (<i>hypercare</i>), no solo el día del arranque."
          ]
        },
        {
          tipo: "tabla",
          titulo: "Estrategias de puesta en operación",
          encabezados: ["Estrategia", "En qué consiste", "Cuándo conviene", "Riesgo"],
          filas: [
            ["<b>Big bang</b>", "Todo cambia en una fecha", "Procesos muy acoplados; imposible operar en paralelo", "Alto: si falla, falla completo"],
            ["<b>Por fases</b>", "Módulo por módulo o proceso por proceso", "Alcance grande y separable", "Interfaces temporales entre lo viejo y lo nuevo"],
            ["<b>Piloto</b>", "Una planta o sucursal primero", "Muchos sitios similares", "Retrasa el beneficio total"],
            ["<b>Paralelo</b>", "Ambos sistemas operan a la vez y se comparan", "Procesos críticos e irreversibles (nómina, facturación)", "Doble carga de trabajo, costoso"]
          ]
        },
        {
          tipo: "pasos",
          titulo: "Puesta en operación (go-live)",
          items: [
            "<b>Criterios de entrada acordados:</b> qué debe estar listo para autorizar el arranque.",
            "<b>Migración y validación de datos:</b> la causa número uno de arranques fallidos.",
            "<b>Plan de reversa (rollback):</b> qué se hace si hay que regresar, y hasta qué momento es posible.",
            "<b>Congelamiento de cambios</b> en los días previos.",
            "<b>Hypercare:</b> soporte reforzado las primeras semanas, con vía rápida de escalamiento.",
            "<b>Medición temprana:</b> los indicadores del baseline, desde el primer día.",
            "<b>Transferencia a operación:</b> documentación, capacitación de soporte y dueño del proceso designado.",
            "<b>Cierre y evaluación de beneficios:</b> comparar lo prometido contra lo obtenido."
          ]
        },
        {
          tipo: "nota",
          titulo: "El paso que todos saltan",
          cuerpo: "<p>La <b>evaluación de beneficios</b> posterior. Se aprueba un proyecto porque prometía bajar el lead time de 72 a 8 horas, y nadie vuelve a medirlo. Sin ese cierre, la organización no aprende a estimar y el siguiente caso de negocio vale menos.</p>"
        },
        {
          tipo: "clave",
          titulo: "Mejora continua: el proceso tiene dueño",
          cuerpo: "<p>Un proceso sin <b>process owner</b> se degrada. El dueño responde por su desempeño de extremo a extremo —atravesando departamentos—, revisa los indicadores, autoriza cambios y detona la mejora cuando el indicador se desvía.</p>"
                + "<p>Es el eslabón que convierte un proyecto que terminó en un proceso que sigue mejorando.</p>"
        },
        {
          tipo: "pasos",
          titulo: "Ciclo de mejora continua en operación",
          items: [
            "Medir contra el objetivo comprometido.",
            "Detectar la desviación y su causa.",
            "Priorizar por impacto y esfuerzo.",
            "Implementar el ajuste (Kaizen para lo pequeño, proyecto para lo grande).",
            "Estandarizar lo que funcionó, para que no se pierda.",
            "Volver a medir."
          ]
        },
        {
          tipo: "texto",
          titulo: "Madurez de la administración de procesos (BPMM)",
          cuerpo: "<p>Los modelos de madurez describen qué tan capaz es una organización de administrar sus procesos. Sirven para dos cosas: <b>diagnosticar dónde estás</b> y <b>fijar una meta realista</b> — porque no se salta de nivel 1 a nivel 4 en un proyecto.</p>"
        },
        {
          tipo: "tabla",
          titulo: "Niveles de madurez en la administración de procesos",
          encabezados: ["Nivel", "Nombre", "Cómo se ve en la práctica"],
          filas: [
            ["1", "Inicial", "Procesos no documentados; el resultado depende de las personas y del heroísmo individual"],
            ["2", "Gestionado / repetible", "Se documentan y repiten dentro de cada área, pero sin visión end-to-end"],
            ["3", "Definido / estandarizado", "Procesos estandarizados en toda la organización, con dueños designados"],
            ["4", "Medido / gestionado cuantitativamente", "Se controlan con indicadores y datos; la desviación dispara acción"],
            ["5", "Optimizado", "Mejora continua institucionalizada e innovación sistemática de procesos"]
          ]
        },
        {
          tipo: "nota",
          titulo: "Uso honesto de un modelo de madurez",
          cuerpo: "<p>La mayoría de las organizaciones está entre 1 y 2, y eso está bien como punto de partida. El valor del diagnóstico no es la calificación: es <b>identificar qué falta para el siguiente nivel</b>. "
                + "Prometer nivel 5 en un plan a un año es una señal de que nadie entendió el modelo.</p>"
        },
        {
          tipo: "defs",
          titulo: "Madurez de una iniciativa o idea",
          items: [
            { termino: "Qué mide", definicion: "Qué tan lista está una idea para invertir en ella: desde una ocurrencia sin evidencia hasta una solución probada y lista para escalar." },
            { termino: "Niveles típicos", definicion: "<b>1 Idea</b> (enunciada, sin evidencia) · <b>2 Concepto</b> (problema y beneficio estimados) · <b>3 Prueba de concepto</b> (viabilidad técnica demostrada) · <b>4 Piloto</b> (probada con usuarios reales y medida) · <b>5 Escalable</b> (lista para desplegar con caso de negocio validado)." },
            { termino: "Para qué sirve", definicion: "Para no exigirle a una idea de nivel 1 un caso de negocio de nivel 5, ni desplegar una de nivel 2 a toda la empresa. Cada nivel merece un tipo de inversión y de evidencia distinto." },
            { termino: "Relación con Design Thinking", definicion: "El prototipo y la prueba son justamente el mecanismo que sube una idea de nivel 2 a nivel 4, con evidencia y sin comprometer una inversión mayor." }
          ]
        },
        {
          tipo: "defs",
          titulo: "El proyecto según PMI",
          items: [
            { termino: "Definición", definicion: "Esfuerzo temporal emprendido para crear un producto, servicio o resultado único." },
            { termino: "Grupos de procesos", definicion: "Inicio · Planeación · Ejecución · Monitoreo y control · Cierre." },
            { termino: "Acta de constitución (project charter)", definicion: "Documento que autoriza formalmente el proyecto, nombra al gerente y define objetivos de alto nivel. Sin acta no hay proyecto: hay actividad." },
            { termino: "Triple restricción", definicion: "Alcance, tiempo y costo, con la calidad al centro. Cambiar uno afecta a los otros: es la conversación que hay que tener con el patrocinador, no evitar." },
            { termino: "Relación con el proceso", definicion: "El proyecto implanta la mejora y cierra; el proceso sigue operando y mejorando bajo su dueño. Confundirlos deja procesos huérfanos cuando el proyecto termina." }
          ]
        },
        {
          tipo: "clave",
          titulo: "El cierre del curso",
          cuerpo: "<p>Una propuesta completa recorre todo el camino: <b>necesidad del negocio → proceso → diagnóstico con números → alternativas evaluadas → arquitectura objetivo → justificación económica → plan de implantación → operación y mejora continua</b>.</p>"
                + "<p>La tecnología aparece en el séptimo lugar de esa lista, no en el primero. Ese es el aprendizaje que debe quedar de las cinco semanas.</p>"
        }
      ]
    }
  ],

  /* ==================== GLOSARIO ==================== */
  terminos: [
    { termino: "Pain point", definicion: "Punto concreto donde el proceso le cuesta al usuario tiempo, esfuerzo, dinero o incertidumbre. Se enuncia con evidencia." },
    { termino: "Triangulación", definicion: "Sustentar un hallazgo con al menos tres fuentes: entrevista (el porqué), observación (el cómo) y dato (la magnitud)." },
    { termino: "Gemba", definicion: "El lugar real donde ocurre el trabajo; la observación directa en sitio como técnica de levantamiento." },
    { termino: "Design Thinking", definicion: "Método de ideación centrado en el usuario: empatizar, definir, idear, prototipar y probar." },
    { termino: "Voz del cliente", sigla: "VOC", definicion: "Recolección estructurada de lo que el cliente pide, base de los requerimientos y criterios de aceptación." },
    { termino: "Cadena de valor", definicion: "Descomposición de la empresa en actividades primarias (logística de entrada, operaciones, logística de salida, comercialización y servicio) y de apoyo (infraestructura, recursos humanos, tecnología y abastecimiento)." },
    { termino: "VA / ENVA / NVA", definicion: "Valor agregado · esencial sin valor agregado (exigido por norma o control) · sin valor agregado (desperdicio puro, se elimina)." },
    { termino: "5S", definicion: "Seiri, Seiton, Seiso, Seiketsu, Shitsuke: clasificar, ordenar, limpiar, estandarizar y disciplina." },
    { termino: "Just in Time", sigla: "JIT", definicion: "Producir y abastecer solo lo necesario cuando se necesita; reduce inventario y expone los problemas que este ocultaba." },
    { termino: "Kanban", definicion: "Señal visual que limita el trabajo en curso y dispara el reabastecimiento; su fundamento es la ley de Little." },
    { termino: "Poka-Yoke", definicion: "Diseño a prueba de errores: hace imposible cometer el error en lugar de detectarlo después. Reduce la tasa de rechazo r." },
    { termino: "Factibilidad técnica", definicion: "¿Se puede construir con la tecnología, infraestructura y capacidades disponibles?" },
    { termino: "Factibilidad operativa", definicion: "¿La organización lo va a usar? Es la factibilidad que más proyectos mata." },
    { termino: "Factibilidad económica", definicion: "¿Los beneficios superan los costos en un horizonte razonable?" },
    { termino: "Margen de contribución", definicion: "Precio − costo variable unitario. Lo que cada unidad aporta para cubrir fijos y generar utilidad." },
    { termino: "Punto de equilibrio", definicion: "Costos fijos / margen de contribución. Volumen en el que la utilidad es cero." },
    { termino: "ROI", definicion: "(Beneficio − Inversión) / Inversión. Simple y comunicable, pero ignora el momento de los flujos." },
    { termino: "Periodo de recuperación", sigla: "payback", definicion: "Inversión / flujo por periodo. Mide riesgo y liquidez, no rentabilidad." },
    { termino: "VPN", sigla: "Valor Presente Neto", definicion: "Suma de flujos futuros descontados menos la inversión. Si VPN > 0, el proyecto crea valor a la tasa exigida." },
    { termino: "TIR", sigla: "Tasa Interna de Retorno", definicion: "Tasa a la que el VPN se hace cero; se compara contra la tasa mínima exigida." },
    { termino: "Factor de anualidad", definicion: "[1 − (1+k)^-n] / k. Permite calcular el VPN de flujos iguales sin descontar uno por uno." },
    { termino: "Costo de no hacer nada", definicion: "El desperdicio que se sigue pagando si no se actúa. Casi nunca es cero y suele ser el argumento más contundente." },
    { termino: "Proceso de referencia del ERP", definicion: "Flujo estándar que trae el producto. Adoptarlo es más barato que personalizarlo; se personaliza solo donde el proceso diferencia en el mercado." },
    { termino: "Validación del modelo de simulación", definicion: "Comprobar que el AS-IS simulado reproduce la operación real observada. Sin ella, los resultados son precisos y falsos." },
    { termino: "UAT", sigla: "User Acceptance Testing", definicion: "Prueba en la que quien ejecuta el proceso confirma que la solución le sirve." },
    { termino: "ADKAR", definicion: "Modelo de cambio por persona: Awareness, Desire, Knowledge, Ability, Reinforcement. Si falla un eslabón, falla el cambio." },
    { termino: "Patrocinador", sigla: "sponsor", definicion: "Directivo que responde por el cambio ante la organización. Sin patrocinio visible ninguna metodología compensa." },
    { termino: "Big bang / fases / piloto / paralelo", definicion: "Las cuatro estrategias de puesta en operación, con distinto perfil de riesgo y costo." },
    { termino: "Hypercare", definicion: "Soporte reforzado durante las primeras semanas posteriores al arranque." },
    { termino: "Rollback", definicion: "Plan de reversa: qué se hace si hay que regresar al estado anterior, y hasta qué momento es posible." },
    { termino: "Process owner", definicion: "Dueño del proceso: responde por su desempeño end-to-end, revisa indicadores y detona la mejora. Sin él, el proceso se degrada." },
    { termino: "BPMM", sigla: "Business Process Maturity Model", definicion: "Modelo de cinco niveles —inicial, gestionado, definido, medido, optimizado— que describe la capacidad de la organización para administrar sus procesos." },
    { termino: "Madurez de una iniciativa", definicion: "Qué tan lista está una idea para invertir: idea, concepto, prueba de concepto, piloto, escalable. Cada nivel merece un tipo distinto de evidencia e inversión." },
    { termino: "Project charter", definicion: "Acta de constitución que autoriza formalmente el proyecto, nombra al gerente y define objetivos de alto nivel." },
    { termino: "Triple restricción", definicion: "Alcance, tiempo y costo, con la calidad al centro; cambiar uno afecta a los demás." }
  ],

  /* ==================== PRÁCTICA ==================== */
  practica: {

    calculos: [
      {
        tema: "Lean thinking",
        titulo: "Clasificación VA / ENVA / NVA",
        enunciado: "Con los tiempos de la línea de confección, calcula cuánto tiempo corresponde a cada categoría y la eficiencia de valor del proceso.",
        datos: {
          tipo: "tabla",
          titulo: "Actividades del proceso (minutos)",
          encabezados: ["Actividad", "Minutos", "Tipo"],
          filas: [
            ["Cortar tela", "12", "VA"], ["Confeccionar", "35", "VA"], ["Lavado y acabado", "18", "VA"],
            ["Inspección exigida por norma", "6", "ENVA"], ["Registro fiscal del lote", "4", "ENVA"],
            ["Espera entre estaciones", "40", "NVA"], ["Traslado al almacén", "9", "NVA"],
            ["Recaptura de datos en Excel", "6", "NVA"]
          ]
        },
        preguntas: [
          { etiqueta: "Tiempo total del proceso", respuesta: 130, unidad: "min", tolerancia: 0.5 },
          { etiqueta: "Tiempo VA", respuesta: 65, unidad: "min", tolerancia: 0.5 },
          { etiqueta: "Tiempo ENVA", respuesta: 10, unidad: "min", tolerancia: 0.5 },
          { etiqueta: "Tiempo NVA", respuesta: 55, unidad: "min", tolerancia: 0.5 },
          { etiqueta: "Eficiencia de valor (VA / total)", respuesta: 50, unidad: "%", tolerancia: 0.6 }
        ],
        solucion:
          '<div class="paso-calc">VA   = 12 + 35 + 18 = <span class="resaltado">65 min</span>  (50.0 %)\nENVA =  6 +  4      = <span class="resaltado">10 min</span>  ( 7.7 %)\nNVA  = 40 +  9 +  6 = <span class="resaltado">55 min</span>  (42.3 %)\nTotal               = <span class="resaltado">130 min</span>\n\nEficiencia de valor = 65 / 130 = <span class="resaltado">50 %</span></div>'
          + "<p><b>Qué se hace con cada categoría.</b> Los 55 minutos de NVA son atacables de inmediato: la espera entre estaciones se ataca con balanceo o Kanban, el traslado con distribución de planta, y la recaptura con integración de sistemas.</p>"
          + "<p>Los 10 minutos de ENVA <b>no se eliminan</b>, pero sí se optimizan: el registro fiscal se puede automatizar y la inspección puede pasar a muestreo si la norma lo permite.</p>"
          + "<p>Distinguir ENVA de NVA evita dos errores caros y simétricos: eliminar un control obligatorio, o resignarse a un desperdicio creyendo que era obligatorio.</p>"
      },
      {
        tema: "Costeo",
        titulo: "Costeo y punto de equilibrio de un taller de denim",
        enunciado: "Un taller fabrica pantalones de mezclilla. Por cada par: <b>tela</b> $152, <b>avíos</b> $38, <b>corte y confección</b> $145, <b>lavado y acabado</b> $65. El precio de mayoreo es de <b>$650</b>. Los costos fijos mensuales son: renta $85,000, nómina administrativa $120,000 y otros $45,000.",
        preguntas: [
          { etiqueta: "Costo variable unitario", respuesta: 400, unidad: "$", tolerancia: 1 },
          { etiqueta: "Margen de contribución por par", respuesta: 250, unidad: "$", tolerancia: 1 },
          { etiqueta: "Margen de contribución como % del precio", respuesta: 38.46, unidad: "%", tolerancia: 0.5 },
          { etiqueta: "Costos fijos mensuales", respuesta: 250000, unidad: "$", tolerancia: 500 },
          { etiqueta: "Punto de equilibrio", respuesta: 1000, unidad: "pares/mes", tolerancia: 2 },
          { etiqueta: "Utilidad mensual vendiendo 1,600 pares", respuesta: 150000, unidad: "$", tolerancia: 500 }
        ],
        solucion:
          '<div class="paso-calc">Costo variable = 152 + 38 + 145 + 65 = <span class="resaltado">$400/par</span>\nMargen de contribución = 650 − 400 = <span class="resaltado">$250/par</span>  (250/650 = <span class="resaltado">38.46 %</span>)\n\nCostos fijos = 85,000 + 120,000 + 45,000 = <span class="resaltado">$250,000/mes</span>\n\nPunto de equilibrio = 250,000 / 250 = <span class="resaltado">1,000 pares/mes</span>\n\nUtilidad con 1,600 pares = (1,600 × 250) − 250,000\n                         = 400,000 − 250,000 = <span class="resaltado">$150,000/mes</span></div>'
          + "<p><b>Lectura del negocio:</b> los primeros 1,000 pares del mes no dejan utilidad, solo pagan la estructura. Del par 1,001 en adelante, cada uno aporta $250 completos.</p>"
          + "<p>Por eso la palanca del margen de contribución es tan poderosa: no reparte el beneficio proporcionalmente, lo concentra por encima del punto de equilibrio.</p>"
      },
      {
        tema: "Costeo",
        titulo: "Impacto de una mejora de proceso en el resultado",
        enunciado: "Se identifica que el <b>lavado y acabado</b> puede bajar de <b>$65 a $45</b> por par con un nuevo proceso, sin afectar la calidad. La inversión en equipo es de <b>$180,000</b>. Todo lo demás se mantiene: precio $650, otros costos variables $335, fijos $250,000, volumen 1,600 pares.",
        preguntas: [
          { etiqueta: "Nuevo costo variable unitario", respuesta: 380, unidad: "$", tolerancia: 1 },
          { etiqueta: "Nuevo margen de contribución", respuesta: 270, unidad: "$", tolerancia: 1 },
          { etiqueta: "Nuevo punto de equilibrio", respuesta: 926, unidad: "pares/mes", tolerancia: 2,
            pista: "Redondea hacia arriba: no se venden fracciones de par." },
          { etiqueta: "Utilidad mensual con 1,600 pares", respuesta: 182000, unidad: "$", tolerancia: 500 },
          { etiqueta: "Incremento mensual de utilidad", respuesta: 32000, unidad: "$", tolerancia: 500 },
          { etiqueta: "Periodo de recuperación de la inversión", respuesta: 5.63, unidad: "meses", tolerancia: 0.15 },
          { etiqueta: "ROI a 12 meses", respuesta: 113.33, unidad: "%", tolerancia: 1 }
        ],
        solucion:
          '<div class="paso-calc">Nuevo costo variable = 152 + 38 + 145 + 45 = <span class="resaltado">$380</span>\nNuevo margen = 650 − 380 = <span class="resaltado">$270</span>  (41.54 % del precio)\n\nNuevo punto de equilibrio = 250,000 / 270 = 925.9 → <span class="resaltado">926 pares</span>\n\nUtilidad = (1,600 × 270) − 250,000 = 432,000 − 250,000 = <span class="resaltado">$182,000</span>\nIncremento = 182,000 − 150,000 = <span class="resaltado">$32,000/mes</span>\n\nPayback = 180,000 / 32,000 = <span class="resaltado">5.6 meses</span>\nROI 12 meses = (32,000×12 − 180,000) / 180,000\n             = (384,000 − 180,000) / 180,000 = <span class="resaltado">113.33 %</span></div>'
          + "<p><b>Así se traduce una mejora de proceso a lenguaje de dirección.</b> «Bajamos $20 el costo de lavado» no mueve a nadie. «Recuperamos la inversión en menos de seis meses y el punto de equilibrio baja 74 pares al mes» sí.</p>"
          + "<p><b>Y la honestidad del análisis:</b> este cálculo supone que el volumen se mantiene y que la calidad no cae. Ambos son supuestos que hay que declarar — si el nuevo proceso aumenta la tasa de rechazo aunque sea 2 %, el beneficio se erosiona rápido.</p>"
      },
      {
        tema: "Evaluación de inversiones",
        titulo: "VPN, TIR, payback y ROI de un proyecto de automatización",
        enunciado: "Se evalúa automatizar el alta de proveedores. <b>Inversión inicial: $1,200,000.</b> Ahorro anual estimado: <b>$450,000</b> durante <b>4 años</b>. La tasa de descuento exigida por la empresa (TREMA) es del <b>12 % anual</b>.",
        preguntas: [
          { etiqueta: "Factor de anualidad (12 %, 4 años)", respuesta: 3.0373, unidad: "", tolerancia: 0.01,
            pista: "FA = [1 − (1+k)^-n] / k" },
          { etiqueta: "Valor Presente Neto", respuesta: 166807, unidad: "$", tolerancia: 2000 },
          { etiqueta: "Periodo de recuperación simple", respuesta: 2.67, unidad: "años", tolerancia: 0.05 },
          { etiqueta: "ROI acumulado a 4 años", respuesta: 50, unidad: "%", tolerancia: 1 },
          { etiqueta: "Tasa Interna de Retorno", respuesta: 18.45, unidad: "%", tolerancia: 0.6 }
        ],
        solucion:
          '<div class="paso-calc">FA = [1 − (1.12)^-4] / 0.12 = (1 − 0.635518) / 0.12 = <span class="resaltado">3.0373</span>\n\nVPN = 450,000 × 3.0373 − 1,200,000\n    = 1,366,807 − 1,200,000 = <span class="resaltado">$166,807</span>   → VPN > 0 ✓\n\nPayback = 1,200,000 / 450,000 = <span class="resaltado">2.67 años</span> (32 meses)\n\nROI 4 años = (450,000×4 − 1,200,000) / 1,200,000\n           = (1,800,000 − 1,200,000) / 1,200,000 = <span class="resaltado">50 %</span>\n\nTIR: tasa donde VPN = 0  →  <span class="resaltado">18.45 %</span>  > TREMA de 12 % ✓\nÍndice de rentabilidad = 1,366,807 / 1,200,000 = 1.139</div>'
          + "<p><b>Veredicto:</b> el proyecto se aprueba. VPN positivo (crea valor a la tasa exigida) y TIR de 18.45 % contra una TREMA de 12 %, con 6.45 puntos de holgura.</p>"
          + "<p><b>Lo que hay que decir además del veredicto:</b> el payback de 32 meses es largo. Para una empresa con presión de liquidez eso puede pesar más que el VPN, y conviene explorar si el proyecto se puede fasear para adelantar parte del ahorro.</p>"
          + "<p><b>Y el supuesto crítico:</b> que el ahorro de $450,000 sea real y sostenido los cuatro años. Si el beneficio se materializa a la mitad, el VPN se vuelve negativo. Por eso la evaluación de beneficios posterior al arranque no es burocracia.</p>"
      },
      {
        tema: "Sensibilidad",
        titulo: "¿Qué tan frágil es el caso de negocio?",
        enunciado: "Mismo proyecto: inversión $1,200,000, horizonte 4 años, tasa 12 %, factor de anualidad 3.0373. La dirección pide saber qué pasa si el ahorro anual no llega a $450,000.",
        preguntas: [
          { etiqueta: "VPN si el ahorro anual es de $400,000", respuesta: 14940, unidad: "$", tolerancia: 1500,
            pista: "VPN = Ahorro × 3.037349 − 1,200,000" },
          { etiqueta: "VPN si el ahorro anual es de $380,000", respuesta: -45807, unidad: "$", tolerancia: 1500,
            pista: "El resultado es negativo: escríbelo con signo." },
          { etiqueta: "Ahorro anual mínimo para que el VPN sea cero", respuesta: 395081, unidad: "$", tolerancia: 2500 },
          { etiqueta: "Margen de error tolerable sobre los $450,000", respuesta: 12.2, unidad: "%", tolerancia: 0.8 }
        ],
        solucion:
          '<div class="paso-calc">VPN con 400,000 = 400,000 × 3.037349 − 1,200,000\n                = 1,214,940 − 1,200,000 = <span class="resaltado">+$14,940</span>   (apenas positivo)\n\nVPN con 380,000 = 380,000 × 3.037349 − 1,200,000\n                = 1,154,193 − 1,200,000 = <span class="resaltado">−$45,807</span>   (destruye valor)\n\nAhorro de equilibrio = 1,200,000 / 3.037349 = <span class="resaltado">$395,081</span>\n\nMargen tolerable = (450,000 − 395,081) / 450,000 = <span class="resaltado">12.2 %</span></div>'
          + "<p><b>El hallazgo:</b> el ahorro puede caer hasta $395,081 antes de que el proyecto destruya valor. Eso es un colchón de apenas <b>12.2 %</b> sobre la estimación original.</p>"
          + "<p>Visto de forma aislada, un VPN de $166,807 parece cómodo. El análisis de sensibilidad revela que no lo es: una desviación de un octavo en los ahorros —perfectamente posible en una estimación hecha con supuestos optimistas— lo lleva a cero.</p>"
          + "<p><b>La recomendación honesta</b> aprueba el proyecto <i>con condiciones</i>: medir el ahorro real desde el primer trimestre, y tener identificado de antemano qué se recorta o se reprioriza si no se materializa.</p>"
      },
      {
        tema: "Costo de no hacer nada",
        titulo: "La alternativa que siempre hay que evaluar",
        enunciado: "El alta de proveedores procesa <b>400 altas al mes</b> con un costo de <b>$231</b> por alta en mano de obra y una tasa de retrabajo del <b>8 %</b> que obliga a rehacer el trabajo completo. Además, cada alta tarda 72 horas, y el área de compras estima que <b>15 compras urgentes al mes</b> se resuelven con proveedores más caros por no poder dar de alta a tiempo al proveedor elegido, con un sobrecosto promedio de <b>$4,200</b> cada una.",
        preguntas: [
          { etiqueta: "Costo mensual del retrabajo", respuesta: 7392, unidad: "$", tolerancia: 50 },
          { etiqueta: "Sobrecosto mensual por compras urgentes", respuesta: 63000, unidad: "$", tolerancia: 200 },
          { etiqueta: "Costo total mensual de no hacer nada", respuesta: 70392, unidad: "$", tolerancia: 250 },
          { etiqueta: "Costo anual de no hacer nada", respuesta: 844704, unidad: "$", tolerancia: 3000 }
        ],
        solucion:
          '<div class="paso-calc">Retrabajo   = 400 × 231 × 0.08 = <span class="resaltado">$7,392/mes</span>\nCompras urgentes = 15 × 4,200   = <span class="resaltado">$63,000/mes</span>\n                                  ─────────────\nTotal mensual                   = <span class="resaltado">$70,392</span>\nTotal anual = 70,392 × 12       = <span class="resaltado">$844,704</span></div>'
          + "<p><b>Por qué este cálculo cambia la conversación.</b> El retrabajo, que es lo primero que todos ven, resulta ser la parte pequeña: $7,392 contra $63,000 de sobrecosto por compras urgentes. El costo real del proceso lento no estaba en el proceso, estaba <b>aguas abajo</b>.</p>"
          + "<p>Con $844,704 anuales de costo de no hacer nada, una inversión de $1,200,000 se recupera en menos de 18 meses solo con estos dos conceptos — y todavía no hemos contado el ahorro directo de mano de obra.</p>"
          + "<p><b>La lección de método:</b> busca el impacto fuera de las fronteras del proceso que estás midiendo. Casi siempre el costo mayor lo está pagando otra área que ni siquiera participa en el flujo.</p>"
      }
    ],

    opcionMultiple: [
      {
        tema: "Levantamiento",
        pregunta: "¿Cuál es el riesgo principal de levantar el AS-IS únicamente con entrevistas?",
        opciones: [
          "Se obtiene lo que la persona cree que hace, que suele diferir de lo que realmente ocurre",
          "Consume demasiado tiempo del analista",
          "No permite conocer los tiempos de procesamiento",
          "Requiere autorización del área de sistemas"
        ],
        correcta: 0,
        explicacion: "Por eso la regla de triangulación: entrevista (el porqué) + observación (el cómo) + dato (la magnitud). Cuando las tres no coinciden, descubriste algo valioso.",
        porQueNo: {
          1: "El shadowing consume más; la entrevista es relativamente eficiente.",
          2: "Sí permite estimarlos, aunque con menor precisión que la medición.",
          3: "No es un requisito ni el riesgo central."
        }
      },
      {
        tema: "Pain point",
        pregunta: "¿Cuál de estos enunciados es un pain point bien formulado?",
        opciones: [
          "El proveedor llama tres veces a preguntar el estatus porque no tiene visibilidad de su solicitud",
          "El sistema es lento",
          "Necesitamos un portal de proveedores",
          "El área de compras no colabora"
        ],
        correcta: 0,
        explicacion: "Un pain point describe el punto concreto donde el proceso le cuesta al usuario, con evidencia observable. Es una causa, no un síntoma ni una solución.",
        porQueNo: {
          1: "Es un síntoma sin causa ni magnitud.",
          2: "Es una solución propuesta, no un dolor.",
          3: "Es un juicio sobre personas, no un hallazgo de proceso."
        }
      },
      {
        tema: "Lean thinking",
        pregunta: "Una inspección exigida por una norma sectorial se clasifica como…",
        opciones: [
          "ENVA: no agrega valor al cliente pero es necesaria; no se elimina, se optimiza",
          "VA: como es obligatoria, el cliente la valora",
          "NVA: todo lo que no transforma el producto es desperdicio y se elimina",
          "Depende del tiempo que consuma"
        ],
        correcta: 0,
        explicacion: "Distinguir ENVA de NVA evita dos errores simétricos: eliminar un control obligatorio, o resignarse a un desperdicio creyendo que era obligatorio.",
        porQueNo: {
          1: "Que sea obligatoria no significa que el cliente pague por ella.",
          2: "Eliminar un control normativo genera un riesgo de incumplimiento mayor que el ahorro.",
          3: "La clasificación depende de la naturaleza de la actividad, no de su duración."
        }
      },
      {
        tema: "Poka-Yoke",
        pregunta: "¿Cuál es la diferencia entre un poka-yoke y una inspección?",
        opciones: [
          "El poka-yoke impide cometer el error; la inspección lo detecta después y cuesta tiempo cada vez",
          "El poka-yoke es manual y la inspección automática",
          "El poka-yoke aplica solo a manufactura",
          "Son sinónimos en la terminología Lean"
        ],
        correcta: 0,
        explicacion: "En términos del análisis de tiempo de ciclo: la inspección es ENVA permanente; el poka-yoke reduce la tasa de rechazo r y con ella todo el ciclo de retrabajo.",
        porQueNo: {
          1: "Ambos pueden ser manuales o automáticos.",
          2: "Un campo obligatorio con validación es un poka-yoke digital.",
          3: "Son conceptos opuestos: prevenir contra detectar."
        }
      },
      {
        tema: "Factibilidad",
        pregunta: "¿Cuál de las factibilidades mata más proyectos en la práctica?",
        opciones: [
          "La operativa: un sistema impecable que nadie usa tiene beneficio cero y el costo ya se pagó",
          "La técnica: la mayoría de las soluciones no se puede construir",
          "La legal: casi siempre hay un impedimento regulatorio",
          "La económica: los proyectos rara vez tienen VPN positivo"
        ],
        correcta: 0,
        explicacion: "Casi todo es técnicamente posible. Por eso la administración del cambio no es un adorno del final: es un supuesto del caso de negocio.",
        porQueNo: {
          1: "La factibilidad técnica rara vez es el obstáculo real hoy.",
          2: "Los impedimentos legales existen pero se identifican temprano y son minoría.",
          3: "Muchos proyectos tienen VPN positivo; el problema es que el beneficio no se materializa."
        }
      },
      {
        tema: "Costeo",
        pregunta: "El precio es $650 y el costo variable unitario $400, con costos fijos de $250,000 mensuales. ¿Cuál es el punto de equilibrio?",
        opciones: ["1,000 unidades", "625 unidades", "384 unidades", "2,500 unidades"],
        correcta: 0,
        explicacion: "Punto de equilibrio = costos fijos / margen de contribución = 250,000 / (650 − 400) = 250,000 / 250 = 1,000 unidades.",
        porQueNo: {
          1: "250,000/400 usa el costo variable en lugar del margen de contribución.",
          2: "250,000/650 divide entre el precio, ignorando el costo variable.",
          3: "Resulta de un margen mal calculado."
        }
      },
      {
        tema: "Costeo",
        pregunta: "Una mejora reduce el costo variable unitario. ¿Qué dos efectos produce simultáneamente?",
        opciones: [
          "Sube el margen de contribución, lo que baja el punto de equilibrio y aumenta la utilidad de cada unidad vendida por encima de él",
          "Sube el precio de venta y baja la demanda",
          "Baja los costos fijos y sube la capacidad",
          "Reduce el punto de equilibrio pero disminuye la utilidad unitaria"
        ],
        correcta: 0,
        explicacion: "Es la traducción exacta entre «reduje 20 minutos de proceso» y «gané dinero», y por eso el margen de contribución es la palanca que hay que mostrar a la dirección.",
        porQueNo: {
          1: "El precio es una decisión comercial independiente de la mejora de costo.",
          2: "Una mejora de costo variable no altera los fijos ni la capacidad por sí sola.",
          3: "La utilidad unitaria aumenta, no disminuye."
        }
      },
      {
        tema: "VPN",
        pregunta: "Un proyecto tiene VPN de $166,807 con una tasa de descuento del 12 %. ¿Qué significa?",
        opciones: [
          "Crea valor: los flujos descontados superan la inversión a la tasa que la empresa exige",
          "Generará exactamente $166,807 de utilidad contable",
          "Recuperará la inversión en 166,807 días",
          "Su rentabilidad es del 166.8 %"
        ],
        correcta: 0,
        explicacion: "El VPN mide creación de valor a una tasa exigida. El criterio es binario: si VPN > 0, el proyecto supera el rendimiento mínimo.",
        porQueNo: {
          1: "El VPN no es utilidad contable: es valor presente de flujos.",
          2: "El plazo de recuperación es el payback, otro indicador.",
          3: "La rentabilidad implícita es la TIR."
        }
      },
      {
        tema: "TIR",
        pregunta: "La TIR de un proyecto es 18.45 % y la TREMA de la empresa es 12 %. ¿Qué se concluye?",
        opciones: [
          "El proyecto supera el rendimiento mínimo exigido, con 6.45 puntos de holgura",
          "El proyecto pierde 6.45 % anual",
          "La inversión se recupera en 18.45 meses",
          "No se puede concluir sin conocer el ROI"
        ],
        correcta: 0,
        explicacion: "La TIR es la tasa a la que el VPN se hace cero. Compararla contra la tasa mínima exigida indica cuánto margen hay antes de que el proyecto deje de convenir.",
        porQueNo: {
          1: "TIR mayor que TREMA significa lo contrario.",
          2: "La TIR es una tasa, no un plazo.",
          3: "TIR y VPN bastan para el criterio de aceptación."
        }
      },
      {
        tema: "Evaluación",
        pregunta: "¿Por qué conviene presentar VPN y payback juntos?",
        opciones: [
          "El VPN dice si crea valor; el payback dice qué tan expuesta queda la empresa mientras tanto",
          "Porque ambos dan el mismo resultado y se validan entre sí",
          "Porque el payback corrige los errores del VPN",
          "Porque la norma ISO exige ambos indicadores"
        ],
        correcta: 0,
        explicacion: "Un proyecto con buen VPN y payback de cinco años puede ser inaceptable para una empresa con problemas de liquidez. Miden cosas distintas y complementarias.",
        porQueNo: {
          1: "Miden dimensiones distintas: rentabilidad y exposición.",
          2: "El payback no corrige nada; ignora el valor del dinero en el tiempo.",
          3: "Ninguna norma ISO regula esto."
        }
      },
      {
        tema: "Alternativas",
        pregunta: "¿Por qué hay que calcular el costo de no hacer nada?",
        opciones: [
          "Porque casi nunca es cero —es el desperdicio que se sigue pagando cada mes— y suele ser el argumento más contundente de la propuesta",
          "Porque es un requisito formal del acta de constitución",
          "Porque permite inflar el beneficio esperado del proyecto",
          "Porque sustituye al cálculo del VPN"
        ],
        correcta: 0,
        explicacion: "Presentar la alternativa de no hacer nada, evaluada con los mismos criterios, convierte una petición de presupuesto en una decisión de negocio.",
        porQueNo: {
          1: "No es un requisito formal, es una buena práctica de análisis.",
          2: "Inflar beneficios destruye la credibilidad; el cálculo debe ser conservador y verificable.",
          3: "Es un insumo del análisis, no un sustituto del VPN."
        }
      },
      {
        tema: "ERP",
        pregunta: "¿Cuál es el criterio para decidir entre adoptar el proceso estándar del ERP o personalizarlo?",
        opciones: [
          "Personalizar solo donde el proceso es fuente real de diferenciación en el mercado; en todo lo demás, adoptar el estándar",
          "Personalizar siempre, para no obligar a la gente a cambiar su forma de trabajar",
          "Adoptar siempre el estándar, sin excepción",
          "Decidirlo globalmente para todo el proyecto, no proceso por proceso"
        ],
        correcta: 0,
        explicacion: "La cadena de valor y la clasificación del portafolio son exactamente el criterio que separa lo diferenciador de lo commodity.",
        porQueNo: {
          1: "Personalizar todo encarece cada actualización futura y genera deuda técnica permanente.",
          2: "Hay procesos donde la diferenciación es real y perderla cuesta mercado.",
          3: "Es una decisión que debe tomarse proceso por proceso."
        }
      },
      {
        tema: "ERP",
        pregunta: "¿Cuál es el error clásico en una implantación de ERP?",
        opciones: [
          "Configurarlo para replicar el proceso actual con todos sus vicios",
          "Capacitar a los usuarios antes del arranque",
          "Migrar los datos históricos",
          "Contratar consultores externos"
        ],
        correcta: 0,
        explicacion: "La empresa paga la implantación completa, conserva las esperas y los retrabajos, y queda atada a personalizaciones que encarecen cada actualización por años.",
        porQueNo: {
          1: "Capacitar es correcto; el momento oportuno es lo que hay que cuidar.",
          2: "Migrar datos es necesario, aunque debe validarse.",
          3: "Es una decisión de abastecimiento, no un error en sí."
        }
      },
      {
        tema: "Simulación",
        pregunta: "¿Cuál es el paso sin el cual todos los resultados de una simulación son inválidos?",
        opciones: [
          "Validar que el modelo del AS-IS reproduce la operación real observada",
          "Ejecutar el mayor número posible de réplicas",
          "Usar una herramienta comercial en lugar de una libre",
          "Modelar el proceso en notación BPMN"
        ],
        correcta: 0,
        explicacion: "Una simulación sobre un AS-IS mal levantado produce resultados precisos y falsos. La precisión decimal de la herramienta no valida los datos de entrada.",
        porQueNo: {
          1: "Las réplicas dan estabilidad estadística, pero de un modelo equivocado.",
          2: "La herramienta no determina la validez del modelo.",
          3: "La notación ayuda a comunicar, no valida los datos."
        }
      },
      {
        tema: "Presentación",
        pregunta: "En una presentación ejecutiva, ¿con qué conviene abrir?",
        opciones: [
          "El problema enunciado con magnitud: cuánto tarda, cuánto cuesta, a quién afecta",
          "El diagrama BPMN completo del proceso actual",
          "La arquitectura técnica de la solución propuesta",
          "El presupuesto detallado por concepto"
        ],
        correcta: 0,
        explicacion: "La dirección compra resultados, riesgo y decisión. El detalle técnico va en anexos, listo para las preguntas que surjan.",
        porQueNo: {
          1: "El diagrama es un artefacto de análisis, no de comunicación ejecutiva.",
          2: "La tecnología antes que el resultado es justo lo que el curso enseña a evitar.",
          3: "El costo importa, pero después de establecer por qué vale la pena."
        }
      },
      {
        tema: "Presentación",
        pregunta: "¿Cuál es el error más grave al presentar la mejora de un proceso?",
        opciones: [
          "Cambiar de indicadores entre el diagnóstico y la propuesta, lo que hace incomparable la mejora",
          "Usar demasiadas diapositivas",
          "No incluir el organigrama del equipo",
          "Presentar en menos de quince minutos"
        ],
        correcta: 0,
        explicacion: "Si mediste lead time en el AS-IS, mide lead time en el TO-BE. Cambiar la métrica destruye la credibilidad de todo el análisis.",
        porQueNo: {
          1: "Es un problema de forma, no de fondo.",
          2: "El organigrama rara vez es relevante para la decisión.",
          3: "La brevedad es una virtud en una presentación ejecutiva."
        }
      },
      {
        tema: "Gestión del cambio",
        pregunta: "En el modelo ADKAR, ¿qué significa que falle el eslabón «Ability»?",
        opciones: [
          "La persona entiende el cambio y quiere hacerlo, pero no puede ejecutarlo en la práctica: le faltan herramientas, tiempo o práctica",
          "La persona no sabe por qué se está haciendo el cambio",
          "El cambio no se sostiene con el tiempo",
          "La persona no quiere cambiar"
        ],
        correcta: 0,
        explicacion: "ADKAR: Awareness (saber por qué), Desire (querer), Knowledge (saber cómo), Ability (poder hacerlo), Reinforcement (que se sostenga). Cada eslabón se atiende con una intervención distinta.",
        porQueNo: {
          1: "Eso es Awareness.",
          2: "Eso es Reinforcement.",
          3: "Eso es Desire."
        }
      },
      {
        tema: "Gestión del cambio",
        pregunta: "¿Cuál es la palanca más subestimada para que un cambio de proceso se sostenga?",
        opciones: [
          "Cerrar la puerta de atrás: retirar el sistema o el formato anterior, porque mientras exista se usará",
          "Enviar un comunicado general el día del arranque",
          "Publicar el nuevo manual de procedimientos en la intranet",
          "Aumentar el presupuesto de capacitación"
        ],
        correcta: 0,
        explicacion: "Si el Excel viejo sigue disponible y es más cómodo, la gente lo usará y el proceso nuevo convivirá con el anterior indefinidamente.",
        porQueNo: {
          1: "Un comunicado no cambia conducta por sí solo.",
          2: "Publicar el manual no garantiza que se aplique.",
          3: "La capacitación ayuda, pero no compite con la comodidad de la vía anterior."
        }
      },
      {
        tema: "Puesta en operación",
        pregunta: "Se va a reemplazar el sistema de nómina, un proceso crítico e irreversible. ¿Qué estrategia de arranque conviene?",
        opciones: [
          "Paralelo: ambos sistemas operan a la vez y se comparan los resultados",
          "Big bang: todo cambia en una fecha",
          "Piloto en una sucursal",
          "Por fases, módulo por módulo"
        ],
        correcta: 0,
        explicacion: "En procesos irreversibles y de alto impacto —nómina, facturación— el costo de la doble carga se justifica frente al riesgo de un error no detectado.",
        porQueNo: {
          1: "Un error de nómina no detectado afecta a toda la plantilla y es difícil de revertir.",
          2: "La nómina no se puede pilotear con una parte del personal sin generar inequidad.",
          3: "El proceso está muy acoplado; fasearlo deja estados intermedios inconsistentes."
        }
      },
      {
        tema: "Puesta en operación",
        pregunta: "¿Cuál es la causa número uno de arranques fallidos?",
        opciones: [
          "La migración y validación de datos",
          "La falta de capacitación técnica del equipo de TI",
          "La elección del proveedor de infraestructura",
          "El diseño de las pantallas del sistema"
        ],
        correcta: 0,
        explicacion: "Datos incompletos, duplicados o con significado distinto entre sistemas hacen que el sistema nuevo arranque produciendo resultados incorrectos, y la confianza se pierde en la primera semana.",
        porQueNo: {
          1: "Es un factor, pero no el más frecuente.",
          2: "La infraestructura rara vez es el punto de falla del arranque.",
          3: "Las pantallas afectan la adopción, no la corrección de los resultados."
        }
      },
      {
        tema: "Mejora continua",
        pregunta: "¿Qué papel cumple el process owner?",
        opciones: [
          "Responde por el desempeño del proceso de extremo a extremo, revisa sus indicadores y detona la mejora cuando se desvían",
          "Ejecuta las actividades operativas del proceso",
          "Administra el presupuesto del proyecto de implantación",
          "Supervisa al personal del área donde inicia el proceso"
        ],
        correcta: 0,
        explicacion: "Su alcance atraviesa departamentos, que es justo lo que ningún jefe funcional cubre. Sin él, el proceso se degrada al terminar el proyecto.",
        porQueNo: {
          1: "Ese es el ejecutor; el dueño responde por el desempeño, no por la ejecución.",
          2: "Ese es el gerente de proyecto, y su rol termina con el proyecto.",
          3: "Un jefe funcional cubre una parte del flujo, no el end-to-end."
        }
      },
      {
        tema: "Madurez",
        pregunta: "Una organización documenta y repite sus procesos dentro de cada área, pero sin visión end-to-end ni dueños designados. ¿En qué nivel de madurez está?",
        opciones: ["Nivel 2 — gestionado o repetible", "Nivel 1 — inicial", "Nivel 4 — medido", "Nivel 5 — optimizado"],
        correcta: 0,
        explicacion: "El nivel 3 exige estandarización en toda la organización y dueños designados; el 4 exige control cuantitativo con datos.",
        porQueNo: {
          1: "En el nivel 1 no hay documentación y el resultado depende del heroísmo individual.",
          2: "El nivel 4 requiere indicadores que disparen acción ante la desviación.",
          3: "El nivel 5 supone mejora continua institucionalizada."
        }
      },
      {
        tema: "Madurez",
        pregunta: "Un plan promete llevar a la organización de nivel 1 a nivel 5 de madurez en un año. ¿Qué indica?",
        opciones: [
          "Que no se entendió el modelo: los niveles suponen cambios culturales y de gobierno que no se saltan",
          "Que el proyecto está bien dimensionado y es ambicioso",
          "Que se contratará una consultora especializada",
          "Que la organización ya tenía procesos documentados"
        ],
        correcta: 0,
        explicacion: "El valor del diagnóstico de madurez no es la calificación, es identificar qué falta para el siguiente nivel. Prometer nivel 5 en un año es una señal de alarma.",
        porQueNo: {
          1: "La ambición sin factibilidad organizacional produce fracaso y desgaste.",
          2: "Ninguna consultora puede saltar niveles de madurez cultural.",
          3: "Si ya estuvieran documentados no estaría en nivel 1."
        }
      },
      {
        tema: "Madurez de una iniciativa",
        pregunta: "¿Para qué sirve evaluar el nivel de madurez de una idea o iniciativa?",
        opciones: [
          "Para no exigirle a una idea incipiente un caso de negocio completo, ni desplegar a toda la empresa algo que solo es un concepto",
          "Para decidir quién será el patrocinador",
          "Para calcular el VPN con mayor precisión",
          "Para determinar la metodología de desarrollo"
        ],
        correcta: 0,
        explicacion: "Los niveles van de idea a escalable, y cada uno merece un tipo distinto de evidencia y de inversión. El prototipo de Design Thinking es el mecanismo para subir de nivel sin comprometer una inversión mayor.",
        porQueNo: {
          1: "El patrocinio se define por el ámbito de negocio afectado.",
          2: "La madurez no mejora la precisión de un cálculo financiero.",
          3: "La metodología depende del tipo de solución, no de la madurez de la idea."
        }
      },
      {
        tema: "PMI",
        pregunta: "Según PMI, ¿qué documento autoriza formalmente un proyecto y nombra a su gerente?",
        opciones: ["El acta de constitución (project charter)", "El plan de gestión del alcance", "El caso de negocio", "La estructura de desglose del trabajo (WBS)"],
        correcta: 0,
        explicacion: "Sin acta de constitución no hay proyecto: hay actividad. El acta es lo que confiere autoridad formal al gerente sobre los recursos.",
        porQueNo: {
          1: "El plan de alcance se elabora después, en la planeación.",
          2: "El caso de negocio justifica, pero no autoriza formalmente.",
          3: "La WBS descompone el trabajo ya autorizado."
        }
      }
    ],

    escenarios: [
      {
        escenario: "El equipo entrevistó a los seis participantes del proceso y cada uno describió una secuencia distinta de actividades.",
        pregunta: "¿Qué corresponde hacer?",
        opciones: [
          "Triangular con observación directa y datos del sistema; la discrepancia ya es un hallazgo en sí misma",
          "Tomar la versión del participante de mayor jerarquía",
          "Promediar las seis versiones para construir el AS-IS",
          "Repetir las entrevistas con preguntas más específicas"
        ],
        correcta: 0,
        explicacion: "Cuando las fuentes no coinciden, descubriste que la organización no sabe lo que hace: hay variantes no documentadas. Eso es material de diagnóstico, no un obstáculo.",
        porQueNo: {
          1: "La jerarquía no correlaciona con el conocimiento del detalle operativo.",
          2: "Promediar procesos produce un flujo que no existe en ningún lado.",
          3: "Más entrevistas reproducen el mismo sesgo de origen."
        }
      },
      {
        escenario: "En una sesión de ideación, el gerente descarta la primera idea propuesta diciendo «eso aquí no se puede», y el grupo deja de proponer.",
        pregunta: "¿Qué regla se rompió?",
        opciones: [
          "Generar sin juzgar: evaluar y generar al mismo tiempo mata las ideas incómodas, que suelen ser las buenas",
          "Ninguna: filtrar temprano ahorra tiempo",
          "La regla de triangulación de fuentes",
          "El principio de validación del modelo"
        ],
        correcta: 0,
        explicacion: "La ideación y la evaluación son fases distintas y con criterios distintos. Mezclarlas produce solo variaciones de lo que ya se hacía.",
        porQueNo: {
          1: "Filtrar temprano es exactamente lo que impide las alternativas de orden de magnitud.",
          2: "La triangulación aplica al levantamiento, no a la ideación.",
          3: "Ese principio pertenece a la simulación."
        }
      },
      {
        escenario: "La propuesta reduce el tiempo de ciclo un 60 %, pero exige que los supervisores dejen de autorizar cada solicitud y confíen en reglas automáticas. Varios llevan veinte años con esa facultad.",
        pregunta: "¿Qué factibilidad está en riesgo y qué corresponde reforzar?",
        opciones: [
          "La operativa: hay que trabajar patrocinio, comunicación del porqué, campeones e incentivos alineados",
          "La técnica: hay que validar que el motor de reglas soporte el volumen",
          "La económica: hay que recalcular el VPN con una tasa mayor",
          "La legal: hay que consultar si la automatización está permitida"
        ],
        correcta: 0,
        explicacion: "El diseño es correcto y viable; lo que está en juego es que la organización lo adopte. Es el caso típico donde la gestión del cambio es el supuesto crítico del caso de negocio.",
        porQueNo: {
          1: "Es verificable y rara vez el obstáculo real.",
          2: "El problema no es la rentabilidad sino la adopción.",
          3: "Conviene verificarlo, pero no es el riesgo dominante descrito."
        }
      },
      {
        escenario: "El CFO pregunta por qué debería aprobar una inversión de $1.2 millones cuando «el proceso actual funciona».",
        pregunta: "¿Qué argumento es el más contundente?",
        opciones: [
          "El costo de no hacer nada: $844,704 anuales entre retrabajo y sobrecosto por compras urgentes",
          "Que la tecnología propuesta es la más moderna del mercado",
          "Que la competencia ya lo implementó",
          "Que el área de TI tiene capacidad disponible este año"
        ],
        correcta: 0,
        explicacion: "Presentar la alternativa de no hacer nada evaluada con los mismos criterios convierte una petición de presupuesto en una decisión de negocio.",
        porQueNo: {
          1: "La modernidad no es un beneficio en sí.",
          2: "Lo que hace la competencia es contexto, no justificación financiera.",
          3: "La disponibilidad de recursos no justifica la inversión."
        }
      },
      {
        escenario: "El VPN del proyecto es positivo, pero el análisis de sensibilidad muestra que el ahorro anual puede caer solo 12 % antes de que el VPN se vuelva negativo.",
        pregunta: "¿Qué debe hacer el analista?",
        opciones: [
          "Reportar el margen estrecho y proponer condiciones: medir el ahorro real desde el primer trimestre y tener identificado qué recortar si no se materializa",
          "Presentar solo el VPN positivo, que es el criterio de aceptación",
          "Bajar la tasa de descuento para ampliar el margen",
          "Extender el horizonte a ocho años para mejorar el VPN"
        ],
        correcta: 0,
        explicacion: "Un colchón de 12 % sobre una estimación de ahorros —que suele hacerse con supuestos optimistas— es estrecho, y ocultarlo compromete todo el análisis.",
        porQueNo: {
          1: "Omitir la fragilidad del caso es lo que destruye la credibilidad del analista.",
          2: "Cambiar la tasa a conveniencia es la forma más fácil de manipular un VPN.",
          3: "Extender el horizonte sin sustento infla el beneficio artificialmente."
        }
      },
      {
        escenario: "Durante la implantación del ERP, el área de producción pide personalizar el módulo de programación de planta porque su forma de secuenciar los pedidos es la razón por la que entregan más rápido que la competencia.",
        pregunta: "¿Qué corresponde?",
        opciones: [
          "Evaluar la personalización: si el proceso es fuente real de diferenciación, es de los pocos casos donde se justifica",
          "Rechazarla: la regla es adoptar siempre el estándar del ERP",
          "Aceptarla sin análisis: producción conoce mejor su operación",
          "Posponerla hasta después del arranque, sin evaluarla"
        ],
        correcta: 0,
        explicacion: "El criterio es personalizar solo donde el proceso diferencia en el mercado. Aquí hay un argumento de diferenciación que debe verificarse con datos, no descartarse por regla.",
        porQueNo: {
          1: "La regla admite excepciones justamente en los procesos diferenciadores.",
          2: "La afirmación de diferenciación debe sustentarse con evidencia comparable.",
          3: "Posponer sin evaluar convierte la decisión en un problema mayor después."
        }
      },
      {
        escenario: "Seis meses después del arranque, la gente volvió a usar el Excel anterior «para casos urgentes», y los casos urgentes son ya el 40 % del volumen.",
        pregunta: "¿Qué falló?",
        opciones: [
          "No se cerró la puerta de atrás ni se dio acompañamiento suficiente; mientras la vía anterior exista y sea más cómoda, se usará",
          "El diseño del proceso TO-BE estaba equivocado desde el inicio",
          "La infraestructura no soportó el volumen",
          "La capacitación fue insuficiente en aspectos técnicos"
        ],
        correcta: 0,
        explicacion: "Retirar el sistema o el formato anterior es la palanca más subestimada de la gestión del cambio, junto con el acompañamiento en operación (hypercare).",
        porQueNo: {
          1: "Si el diseño fuera inviable no habría funcionado los primeros meses.",
          2: "El planteamiento no describe fallas técnicas.",
          3: "La capacitación importa, pero no compite con la comodidad de la vía alterna."
        }
      },
      {
        escenario: "El proyecto se cerró exitosamente hace un año. Nadie ha vuelto a medir si el lead time efectivamente bajó de 72 a 8 horas.",
        pregunta: "¿Qué se perdió?",
        opciones: [
          "La evaluación de beneficios: sin ella la organización no aprende a estimar y el siguiente caso de negocio vale menos",
          "Nada: el proyecto se entregó conforme al alcance",
          "La certificación ISO del proceso",
          "El acta de constitución del proyecto"
        ],
        correcta: 0,
        explicacion: "Es el paso que todos saltan. Comparar lo prometido contra lo obtenido es lo que convierte la experiencia en capacidad de estimación.",
        porQueNo: {
          1: "Entregar el alcance no es lo mismo que entregar el beneficio prometido.",
          2: "La certificación es un tema independiente.",
          3: "El acta pertenece al inicio del proyecto, no a su cierre."
        }
      }
    ],

    clasificar: [
      {
        consigna: "Clasifica cada actividad según su aporte de valor.",
        categorias: ["VA — Valor agregado", "ENVA — Esencial sin valor", "NVA — Desperdicio"],
        items: [
          { texto: "Confeccionar la prenda", categoria: "VA — Valor agregado" },
          { texto: "Lavado y acabado del producto", categoria: "VA — Valor agregado" },
          { texto: "Entregar el pedido al cliente", categoria: "VA — Valor agregado" },
          { texto: "Inspección exigida por norma sectorial", categoria: "ENVA — Esencial sin valor" },
          { texto: "Registro fiscal del lote", categoria: "ENVA — Esencial sin valor" },
          { texto: "Validación de crédito requerida por política", categoria: "ENVA — Esencial sin valor" },
          { texto: "Espera de 40 minutos entre estaciones", categoria: "NVA — Desperdicio" },
          { texto: "Recaptura del mismo dato en Excel", categoria: "NVA — Desperdicio" },
          { texto: "Traslado del expediente entre pisos", categoria: "NVA — Desperdicio" },
          { texto: "Rehacer una orden mal capturada", categoria: "NVA — Desperdicio" }
        ],
        explicacion: "El NVA se elimina. El ENVA no se elimina pero se optimiza: automatizarlo, moverlo al origen o hacerlo por muestreo si la norma lo permite."
      },
      {
        consigna: "Clasifica cada pregunta según el tipo de factibilidad que evalúa.",
        categorias: ["Técnica", "Operativa", "Económica", "Legal y normativa"],
        items: [
          { texto: "¿Los sistemas se pueden integrar por API?", categoria: "Técnica" },
          { texto: "¿La red de la planta soporta el volumen?", categoria: "Técnica" },
          { texto: "¿Los supervisores aceptarán dejar de autorizar?", categoria: "Operativa" },
          { texto: "¿Existen los roles y las competencias necesarias?", categoria: "Operativa" },
          { texto: "¿El VPN es positivo a la tasa exigida?", categoria: "Económica" },
          { texto: "¿En cuánto tiempo se recupera la inversión?", categoria: "Económica" },
          { texto: "¿Cumple con la normativa de protección de datos?", categoria: "Legal y normativa" },
          { texto: "¿La factura electrónica cumple los requisitos fiscales?", categoria: "Legal y normativa" }
        ],
        explicacion: "Casi todo es técnicamente posible; la factibilidad operativa es la que más proyectos mata. Un sistema impecable que nadie usa tiene beneficio cero."
      },
      {
        consigna: "Clasifica cada herramienta o filosofía según el problema que ataca.",
        categorias: ["Orden y disciplina base", "Flujo e inventario", "Prevención de errores", "Variación y defectos"],
        items: [
          { texto: "5S", categoria: "Orden y disciplina base" },
          { texto: "Estandarización del puesto de trabajo", categoria: "Orden y disciplina base" },
          { texto: "Just in Time", categoria: "Flujo e inventario" },
          { texto: "Kanban", categoria: "Flujo e inventario" },
          { texto: "Límite de trabajo en curso (WIP)", categoria: "Flujo e inventario" },
          { texto: "Poka-Yoke", categoria: "Prevención de errores" },
          { texto: "Campo obligatorio con validación", categoria: "Prevención de errores" },
          { texto: "Six Sigma / DMAIC", categoria: "Variación y defectos" },
          { texto: "Control estadístico del proceso", categoria: "Variación y defectos" }
        ],
        explicacion: "Todas conviven bajo el paraguas Lean. Elegir la herramienta correcta empieza por diagnosticar cuál de los cuatro problemas tienes."
      },
      {
        consigna: "Clasifica cada indicador o argumento según el interlocutor al que le habla.",
        categorias: ["CEO", "CFO", "CIO / arquitecto", "Director de operación"],
        items: [
          { texto: "Entregamos en 8 horas en lugar de 72", categoria: "CEO" },
          { texto: "Mejora la posición frente a la competencia", categoria: "CEO" },
          { texto: "VPN positivo y payback de 13 meses", categoria: "CFO" },
          { texto: "$1.1 M de ahorro neto a tres años", categoria: "CFO" },
          { texto: "Retira 3 sistemas redundantes del portafolio", categoria: "CIO / arquitecto" },
          { texto: "Evita una integración punto a punto nueva", categoria: "CIO / arquitecto" },
          { texto: "Libera 3 personas para actividades de mayor valor", categoria: "Director de operación" },
          { texto: "La transición se hace por fases, sin parar la planta", categoria: "Director de operación" }
        ],
        explicacion: "Es view y viewpoint llevados a la sala de juntas: la misma arquitectura, distinta vista según las preocupaciones de quien escucha."
      },
      {
        consigna: "Clasifica cada situación según el nivel de madurez BPM que describe.",
        categorias: ["Nivel 1 — Inicial", "Nivel 2 — Repetible", "Nivel 3 — Definido", "Nivel 4 — Medido", "Nivel 5 — Optimizado"],
        items: [
          { texto: "El resultado depende de quién esté de turno", categoria: "Nivel 1 — Inicial" },
          { texto: "No hay procesos documentados", categoria: "Nivel 1 — Inicial" },
          { texto: "Cada área documenta y repite lo suyo", categoria: "Nivel 2 — Repetible" },
          { texto: "No existe visión end-to-end del flujo", categoria: "Nivel 2 — Repetible" },
          { texto: "Procesos estandarizados en toda la organización", categoria: "Nivel 3 — Definido" },
          { texto: "Cada proceso tiene un dueño designado", categoria: "Nivel 3 — Definido" },
          { texto: "Los indicadores disparan acción ante la desviación", categoria: "Nivel 4 — Medido" },
          { texto: "Se controla el proceso con datos, no con opiniones", categoria: "Nivel 4 — Medido" },
          { texto: "La mejora continua está institucionalizada", categoria: "Nivel 5 — Optimizado" }
        ],
        explicacion: "La mayoría de las organizaciones está entre 1 y 2, y eso es un punto de partida legítimo. El valor del diagnóstico es identificar qué falta para el siguiente nivel, no la calificación."
      }
    ],

    ordenar: [
      {
        consigna: "Ordena las cinco fases del Design Thinking.",
        pasos: ["Empatizar", "Definir", "Idear", "Prototipar", "Probar"],
        explicacion: "Es iterativo: la prueba puede regresarte a cualquier fase anterior, incluso a empatizar si descubres que entendiste mal el problema."
      },
      {
        consigna: "Ordena la secuencia de pruebas antes de liberar a toda la organización.",
        pasos: [
          "Validación del modelo contra la operación real",
          "Prueba funcional, incluidos casos de excepción",
          "Prueba de integración entre sistemas",
          "Prueba de carga con el volumen pico",
          "Prueba de aceptación del usuario (UAT)",
          "Piloto controlado en un sitio",
          "Adecuación con lo aprendido en el piloto"
        ],
        explicacion: "Cada nivel es más caro de ejecutar y más caro de fallar. Encontrar el error en la prueba funcional cuesta una fracción de encontrarlo en el piloto."
      },
      {
        consigna: "Ordena los eslabones del modelo ADKAR.",
        pasos: [
          "Awareness — saber por qué se cambia",
          "Desire — querer participar en el cambio",
          "Knowledge — saber cómo hacerlo",
          "Ability — poder ejecutarlo en la práctica",
          "Reinforcement — que el cambio se sostenga"
        ],
        explicacion: "Si falla un eslabón, falla el cambio. Capacitar (Knowledge) a alguien que no quiere cambiar (Desire) no sirve de nada: cada eslabón se atiende con una intervención distinta."
      },
      {
        consigna: "Ordena los pasos de la puesta en operación (go-live).",
        pasos: [
          "Criterios de entrada acordados",
          "Migración y validación de datos",
          "Plan de reversa (rollback) definido",
          "Congelamiento de cambios",
          "Arranque con hypercare",
          "Medición temprana contra el baseline",
          "Transferencia a operación con dueño designado",
          "Cierre y evaluación de beneficios"
        ],
        explicacion: "La evaluación de beneficios es el paso que casi todas las organizaciones saltan, y es el que convierte la experiencia en capacidad de estimar mejor la próxima vez."
      },
      {
        consigna: "Ordena la estructura de una presentación ejecutiva de la propuesta.",
        pasos: [
          "El problema con magnitud medida",
          "Los hallazgos y el dato que los sustenta",
          "La situación deseada en una sola imagen",
          "La tabla AS-IS / TO-BE con los mismos indicadores",
          "Inversión, VPN y payback",
          "Riesgos y cómo se mitigan",
          "La decisión que se necesita hoy",
          "Anexos con el detalle técnico"
        ],
        explicacion: "El diagrama BPMN completo va en anexos, nunca al inicio. La dirección compra resultados, riesgo y decisión."
      },
      {
        consigna: "Ordena los niveles de madurez de una iniciativa, del menos al más maduro.",
        pasos: [
          "Idea — enunciada, sin evidencia",
          "Concepto — problema y beneficio estimados",
          "Prueba de concepto — viabilidad técnica demostrada",
          "Piloto — probada con usuarios reales y medida",
          "Escalable — caso de negocio validado, lista para desplegar"
        ],
        explicacion: "Cada nivel merece un tipo distinto de evidencia y de inversión. Exigirle a una idea de nivel 1 un caso de negocio completo mata la innovación; desplegar una de nivel 2 a toda la empresa la quiebra."
      },
      {
        consigna: "Ordena el recorrido completo de una propuesta de mejora, tal como se entrega al final del curso.",
        pasos: [
          "Necesidad del negocio con magnitud",
          "Proceso seleccionado y delimitado (SIPOC)",
          "Diagnóstico AS-IS con números",
          "Alternativas evaluadas con los mismos criterios",
          "Arquitectura objetivo (TO-BE)",
          "Justificación económica: VPN, payback, ROI",
          "Plan de implantación y gestión del cambio",
          "Operación, medición y mejora continua"
        ],
        explicacion: "La tecnología aparece dentro del paso 5, no en el primero. Ese es el aprendizaje que debe quedar de las cinco semanas."
      }
    ],

    flashcards: [
      { frente: "Regla de triangulación", reverso: "Entrevista (el porqué) + observación (el cómo) + dato (la magnitud). Si las tres no coinciden, descubriste que la organización no sabe lo que hace." },
      { frente: "Pain point", reverso: "Punto concreto donde el proceso le cuesta al usuario tiempo, esfuerzo, dinero o incertidumbre. Se enuncia con evidencia; no es un síntoma ni una solución." },
      { frente: "Design Thinking", reverso: "Empatizar → Definir → Idear → Prototipar → Probar. Iterativo: la prueba puede devolverte a cualquier fase." },
      { frente: "La pregunta que desbloquea la ideación", reverso: "«¿Por qué tiene que intervenir esta área?» Cuestionar la existencia de la actividad, no su velocidad." },
      { frente: "Cadena de valor", reverso: "Actividades primarias: logística de entrada, operaciones, logística de salida, comercialización y servicio. De apoyo: infraestructura, RH, tecnología y abastecimiento." },
      { frente: "VA / ENVA / NVA", reverso: "VA: el cliente lo paga. ENVA: exigido por norma o control — se optimiza, no se elimina. NVA: desperdicio puro — se elimina." },
      { frente: "5S", reverso: "Seiri (clasificar) · Seiton (ordenar) · Seiso (limpiar) · Seiketsu (estandarizar) · Shitsuke (disciplina)." },
      { frente: "Poka-Yoke", reverso: "Diseño a prueba de errores: hace imposible el error en lugar de detectarlo. Reduce la tasa de rechazo r y con ella todo el ciclo de retrabajo." },
      { frente: "Kanban y la ley de Little", reverso: "Kanban limita el WIP. Como WIP = Throughput × Lead time, menos WIP con la misma capacidad significa menos lead time." },
      { frente: "Las tres factibilidades", reverso: "Técnica (¿se puede construir?) · Operativa (¿lo van a usar?) · Económica (¿conviene?). La operativa es la que más proyectos mata." },
      { frente: "Margen de contribución", reverso: "Precio − costo variable unitario. Lo que cada unidad aporta para cubrir fijos y después generar utilidad." },
      { frente: "Punto de equilibrio", reverso: "Costos fijos / margen de contribución. Volumen en el que la utilidad es cero." },
      { frente: "VPN", reverso: "Σ [Ft / (1+k)^t] − Inversión. Si VPN > 0, el proyecto crea valor a la tasa exigida. Declara siempre la tasa que usaste." },
      { frente: "Factor de anualidad", reverso: "FA = [1 − (1+k)^-n] / k. Con flujos iguales: VPN = Flujo × FA − Inversión." },
      { frente: "TIR", reverso: "Tasa a la que el VPN se hace cero. Se compara contra la TREMA: la diferencia es el colchón antes de que el proyecto deje de convenir." },
      { frente: "Por qué VPN y payback juntos", reverso: "El VPN dice si crea valor; el payback dice qué tan expuesta queda la empresa mientras tanto. Buen VPN con payback de cinco años puede ser inaceptable." },
      { frente: "Costo de no hacer nada", reverso: "El desperdicio que se sigue pagando cada mes. Casi nunca es cero, y suele ser el argumento más contundente de toda la propuesta." },
      { frente: "Criterio para personalizar un ERP", reverso: "Personaliza solo donde el proceso te diferencia en el mercado. En todo lo demás, adopta el estándar — cada personalización encarece las actualizaciones por años." },
      { frente: "Validación del modelo de simulación", reverso: "¿El AS-IS simulado reproduce la operación real observada? Sin esto, los resultados son precisos y falsos." },
      { frente: "Con qué abrir una presentación ejecutiva", reverso: "Con el problema y su magnitud. Nunca con el diagrama BPMN ni con la arquitectura técnica: eso va en anexos." },
      { frente: "El error más grave al presentar", reverso: "Cambiar de indicadores entre el diagnóstico y la propuesta. Si mediste lead time en el AS-IS, mide lead time en el TO-BE." },
      { frente: "ADKAR", reverso: "Awareness · Desire · Knowledge · Ability · Reinforcement. Si falla un eslabón, falla el cambio; cada uno se atiende distinto." },
      { frente: "Cerrar la puerta de atrás", reverso: "Retirar el sistema o formato anterior. Mientras exista y sea más cómodo, se usará y el proceso nuevo nunca se consolida." },
      { frente: "Estrategias de arranque", reverso: "Big bang (todo a la vez) · Por fases · Piloto (un sitio) · Paralelo (ambos a la vez). El paralelo se reserva para procesos críticos e irreversibles." },
      { frente: "Causa nº 1 de arranques fallidos", reverso: "La migración y validación de datos." },
      { frente: "Hypercare", reverso: "Soporte reforzado las primeras semanas tras el arranque, con vía rápida de escalamiento. No basta acompañar el día del go-live." },
      { frente: "Process owner", reverso: "Responde por el desempeño del proceso end-to-end, atravesando departamentos. Sin él, el proceso se degrada cuando el proyecto termina." },
      { frente: "Madurez BPM (5 niveles)", reverso: "1 Inicial · 2 Repetible · 3 Definido · 4 Medido · 5 Optimizado. La mayoría está entre 1 y 2, y eso es un punto de partida legítimo." },
      { frente: "Madurez de una iniciativa", reverso: "Idea · Concepto · Prueba de concepto · Piloto · Escalable. Cada nivel merece un tipo distinto de evidencia e inversión." },
      { frente: "Project charter", reverso: "Acta que autoriza formalmente el proyecto y nombra al gerente. Sin acta no hay proyecto: hay actividad." },
      { frente: "El recorrido completo", reverso: "Necesidad → proceso → diagnóstico con números → alternativas → arquitectura objetivo → justificación económica → implantación → operación y mejora. La tecnología va en el paso 5, no en el 1." }
    ]
  }
});
