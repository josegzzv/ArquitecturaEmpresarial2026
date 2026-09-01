/* ============================================================
   CASOS — catálogo de situaciones para analizar en clase
   Las empresas son reales; las CIFRAS SON ILUSTRATIVAS y no
   corresponden a la operación real de ninguna organización.
   Para agregar un caso: copia un objeto de "casos" y llénalo.
   ============================================================ */

EA.registrarCasos({

  categorias: [
    { id: "capacidad", nombre: "Cuello de botella y capacidad",
      resumen: "Procesos donde la restricción de un solo recurso determina lo que el sistema completo puede entregar." },
    { id: "tiempo", nombre: "Tiempo de ciclo, takt y esperas",
      resumen: "Procesos donde la pregunta es cuánto tarda, cuánto de eso es trabajo real y qué esperas son inevitables." },
    { id: "rutas", nombre: "Rutas múltiples y variantes del proceso",
      resumen: "Procesos que se bifurcan: cada cliente toma un camino distinto y el promedio esconde la variedad." },
    { id: "orquestacion", nombre: "Orquestación y transformación digital",
      resumen: "Procesos end-to-end que atraviesan áreas y sistemas, y que solo funcionan si algo los coordina." },
    { id: "servicios", nombre: "Servicios de TI, incidentes y continuidad",
      resumen: "Cuando la tecnología deja de ser habilitador y se vuelve la restricción que detiene la operación." },
    { id: "datos", nombre: "Datos, punto de venta y arquitectura de aplicaciones",
      resumen: "Procesos donde el problema real no es el flujo sino el dato: quién lo captura, dónde vive y quién responde por él." }
  ],

  casos: [

    /* ==================== CUELLO DE BOTELLA Y CAPACIDAD ==================== */
    {
      id: "starbucks",
      titulo: "Starbucks",
      subtitulo: "La fila avanza rápido y aun así hay que esperar",
      categoria: "capacidad",
      semanas: [3],
      patrones: ["Cuello de botella", "Rutas múltiples", "Recurso compartido"],
      flujo: ["Cliente pide", "Cobro en caja", "Preparación de bebida", "Entrega en barra"],
      contexto: "<p>La caja atiende rápido: tomar la orden y cobrar toma menos de un minuto. Sin embargo, la barra de entrega acumula gente. El cliente ya pagó y sigue esperando, que es la peor combinación posible para la percepción del servicio.</p>",
      analisis:
        "<p><b>La caja no es el cuello de botella; el barista sí.</b> El proceso tiene dos recursos en serie con capacidades muy distintas: el cajero puede procesar más órdenes por hora de las que el barista puede preparar. La consecuencia es que optimizar la caja —más cajeros, cobro más rápido, pedido por app— <b>no aumenta la capacidad del sistema</b>: solo hace que la cola se forme más adelante.</p>"
      + "<p>Es el ejemplo más limpio de la teoría de restricciones en la vida diaria: la capacidad del proceso es la del recurso más limitado, y todo lo que corra más rápido que él solo genera inventario esperando frente a la restricción — en este caso, clientes de pie junto a la barra.</p>"
      + "<p>Hay además <b>rutas múltiples</b> con tiempos muy distintos: un café filtrado se sirve en segundos, un frappuccino de tres modificadores toma varios minutos. El tiempo esperado no es el promedio simple de las bebidas: es Σ p·T ponderado por la mezcla real de productos, y esa mezcla cambia por hora del día.</p>"
      + "<p>El pedido por aplicación es el caso interesante para discutir: <b>no aumenta la capacidad de la barra</b>, pero cambia dónde y cómo se espera. El cliente espera en su casa u oficina en vez de en la tienda. Mejora la experiencia sin tocar el throughput — y puede empeorarlo si desordena la secuencia del barista.</p>",
      cifras: {
        titulo: "Escenario ilustrativo en hora pico",
        encabezados: ["Recurso", "Tiempo por orden", "Unidades", "Capacidad por hora"],
        filas: [
          ["Cajero", "45 s", "2", "160 órdenes"],
          ["<b>Barista</b>", "<b>110 s</b>", "<b>2</b>", "<b>65 órdenes</b>"],
          ["Entrega en barra", "15 s", "1", "240 órdenes"],
          ["<b>Capacidad del proceso</b>", "—", "—", "<b>65 órdenes/h</b>"]
        ]
      },
      indicadores: [
        "Tiempo desde el pago hasta la entrega (el que percibe el cliente).",
        "Utilización del barista frente a la del cajero.",
        "Mezcla de productos por franja horaria y su tiempo de preparación asociado.",
        "Porcentaje de órdenes por app y su efecto en la secuencia de preparación.",
        "Abandonos: clientes que ven la fila y se van."
      ],
      preguntas: [
        "Si contratas un cajero más, ¿cuánto aumenta la capacidad del proceso? Justifica con números.",
        "¿Qué pasos del método <i>explotar</i> de la teoría de restricciones aplicarías al barista antes de contratar a otro?",
        "El pedido por app duplica las órdenes en hora pico. ¿Qué le pasa al WIP y al lead time, según la ley de Little?",
        "¿Cómo cambiarías la mezcla de productos o el menú para subir la capacidad sin contratar a nadie?"
      ],
      conecta: "Semana 3 · capacidad, cuello de botella, teoría de restricciones, rutas múltiples y ley de Little."
    },

    {
      id: "banamex",
      titulo: "Banamex",
      subtitulo: "Unifila: por qué una sola cola es mejor que varias",
      categoria: "capacidad",
      semanas: [3],
      patrones: ["Cuello de botella", "Recurso compartido", "Variabilidad"],
      flujo: ["Cliente llega", "Toma turno", "Espera en unifila", "Atención en ventanilla", "Salida"],
      contexto: "<p>La sucursal cambió de una fila por ventanilla a una sola fila que alimenta a todas. La capacidad total no cambió —son los mismos cajeros— y sin embargo el tiempo de espera promedio bajó y las quejas también.</p>",
      analisis:
        "<p><b>Esto no es psicología: es teoría de colas.</b> Con filas independientes, un cliente puede quedar atrapado detrás de una operación larga mientras otra ventanilla se desocupa. La capacidad existe pero no es alcanzable por quien la necesita. La unifila convierte varios recursos separados en <b>un solo pool</b>, y un pool compartido absorbe mucho mejor la variabilidad.</p>"
      + "<p>Es exactamente la lógica del cálculo de capacidad del curso: cuando calculas <code>capacidad del pool = unidades / carga por job</code>, estás suponiendo que <b>cualquier unidad del recurso puede atender cualquier trabajo</b>. Las filas independientes rompen ese supuesto y por eso rinden menos que el cálculo teórico.</p>"
      + "<p>El segundo efecto es sobre la <b>percepción</b>, y no es menor: en unifila el cliente ve que el orden se respeta y que la fila avanza continuamente. La equidad percibida reduce las quejas aunque el tiempo fuera idéntico.</p>"
      + "<p>El matiz que hay que discutir: la unifila <b>no aumenta la capacidad</b>. Si la demanda excede lo que los cajeros pueden atender, la fila crece igual — solo que ahora es una fila larga y muy visible. La solución de fondo sigue siendo capacidad, segmentación por tipo de operación, o mover transacciones a otro canal.</p>",
      cifras: {
        titulo: "Comparación ilustrativa, misma demanda y mismos cajeros",
        encabezados: ["Esquema", "Cajeros", "Espera promedio", "Peor caso (percentil 95)"],
        filas: [
          ["Fila por ventanilla", "4", "9.5 min", "26 min"],
          ["<b>Unifila</b>", "<b>4</b>", "<b>6.2 min</b>", "<b>14 min</b>"],
          ["Diferencia", "—", "−35 %", "−46 %"]
        ]
      },
      indicadores: [
        "Tiempo de espera promedio y percentil 95 (el peor caso es lo que genera la queja).",
        "Utilización de cajeros y su dispersión entre ventanillas.",
        "Mezcla de operaciones: depósito simple contra trámite largo.",
        "Porcentaje de operaciones que podrían resolverse en cajero automático o app.",
        "Abandonos y quejas por trato inequitativo."
      ],
      preguntas: [
        "Si la capacidad no cambió, ¿de dónde sale la reducción del tiempo de espera?",
        "¿Por qué el percentil 95 mejora más que el promedio? ¿Qué le dice eso a quien diseña el proceso?",
        "Propón una segmentación por tipo de operación. ¿En qué caso mejora y en cuál puede empeorar?",
        "La sucursal quiere atender 30 % más clientes sin contratar. ¿Qué harías, en orden, siguiendo los cinco pasos de la teoría de restricciones?"
      ],
      conecta: "Semana 3 · capacidad del pool de recursos, variabilidad, teoría de restricciones. Semana 5 · indicadores de servicio."
    },

    {
      id: "inscripciones",
      titulo: "Inscripciones universitarias",
      subtitulo: "Proceso secuencial, cuello de botella y apertura de grupos",
      categoria: "capacidad",
      semanas: [3, 5],
      patrones: ["Cuello de botella", "Proceso secuencial", "Pico de demanda"],
      flujo: ["Alta de oferta académica", "Asignación de horarios", "Inscripción del alumno", "Validación de pagos", "Apertura o cierre de grupos", "Reajuste"],
      contexto: "<p>Miles de alumnos se inscriben en la misma ventana de dos días. El sistema se satura, algunos grupos se llenan en minutos, otros quedan vacíos y se cierran, y eso obliga a reacomodar a alumnos que ya tenían horario armado.</p>",
      analisis:
        "<p>Hay <b>tres problemas superpuestos</b> y conviene separarlos porque se resuelven distinto.</p>"
      + "<p><b>1. Un pico de demanda extremo.</b> La carga de todo un semestre se concentra en 48 horas. Dimensionar la infraestructura para el pico es carísimo y la deja ociosa el resto del año; esto es una decisión de arquitectura tecnológica, no de proceso. Escalonar por generación o por promedio aplana el pico — es <b>triage</b> aplicado a la demanda.</p>"
      + "<p><b>2. Secuencialidad innecesaria.</b> La validación de pago suele bloquear la inscripción cuando podría ejecutarse en paralelo o después, con una regla de reversa. Aquí aplica la heurística de <b>paralelizar</b>: ¿qué pasos están en serie sin dependencia real?</p>"
      + "<p><b>3. La decisión de abrir o cerrar grupos es el verdadero cuello de botella</b>, y no es de sistemas: es humana y secuencial. Alguien revisa la ocupación, decide, notifica, y hasta entonces los alumnos afectados pueden reacomodarse. Cada ciclo de esa decisión agrega días de lead time. Es un caso de <b>empoderar</b>: si existe una regla clara —menos de N inscritos a la fecha X, el grupo se cierra automáticamente— la decisión se automatiza y desaparece la espera.</p>"
      + "<p>Observa la distinción entre <b>tiempo de ciclo y lead time</b>: la inscripción de un alumno toma minutos de trabajo real, pero desde que abre el periodo hasta que su horario queda firme pueden pasar semanas por los reajustes.</p>",
      cifras: {
        titulo: "Escenario ilustrativo de un periodo de inscripción",
        encabezados: ["Etapa", "Trabajo real", "Espera", "Observación"],
        filas: [
          ["Inscripción en línea del alumno", "12 min", "0–3 h", "Depende de la saturación del sistema"],
          ["Validación de pago", "3 min", "24 h", "Bloquea la confirmación"],
          ["Decisión de abrir o cerrar grupo", "20 min", "5 días", "Revisión manual por coordinación"],
          ["Reajuste de horario del alumno", "25 min", "2 días", "Solo para los afectados"],
          ["<b>Total</b>", "<b>60 min</b>", "<b>≈ 8 días</b>", "<b>Eficiencia de ciclo: 0.5 %</b>"]
        ]
      },
      indicadores: [
        "Lead time desde que abre el periodo hasta que el horario queda firme.",
        "Porcentaje de alumnos que sufren al menos un reajuste.",
        "Ocupación promedio de grupos y número de grupos abiertos que luego se cierran.",
        "Tiempo de decisión de apertura/cierre de grupo.",
        "Concurrencia máxima y tiempo de respuesta del sistema en el pico."
      ],
      preguntas: [
        "Con 60 minutos de trabajo real y 8 días de lead time, ¿dónde está el problema y qué NO sirve atacar?",
        "Diseña la regla automática de apertura y cierre de grupos. ¿Qué datos necesita y quién es el dueño de esos datos?",
        "¿Qué actividades del flujo podrían ejecutarse en paralelo sin romper ninguna dependencia real?",
        "El área de TI propone triplicar los servidores. Evalúa la propuesta con criterio de factibilidad económica y de teoría de restricciones."
      ],
      conecta: "Semana 3 · cuello de botella, lead time vs. tiempo de ciclo, heurísticas de rediseño. Semana 5 · factibilidad y escenarios de demanda."
    },

    {
      id: "ford",
      titulo: "Ford · planta de ensamble",
      subtitulo: "Cómo se incrementa realmente la capacidad de una línea",
      categoria: "capacidad",
      semanas: [3],
      patrones: ["Cuello de botella", "Balanceo de línea", "Takt time"],
      flujo: ["Estampado", "Carrocería", "Pintura", "Ensamble final", "Pruebas", "Embarque"],
      contexto: "<p>La planta debe subir su producción diaria. Cada estación de la línea tiene un tiempo de operación distinto, y la línea avanza al ritmo de la estación más lenta.</p>",
      analisis:
        "<p>Una línea de ensamble es <b>teoría de restricciones en su forma más visible</b>: todas las estaciones están acopladas y la más lenta impone el ritmo. Si la estación 7 tarda 68 segundos y las demás 50, la línea produce a 68 segundos por unidad y las demás estaciones acumulan tiempo ocioso.</p>"
      + "<p>Aquí el <b>takt time</b> deja de ser teoría: <code>Takt = tiempo neto disponible / demanda</code>. Si el mercado pide una unidad cada 60 segundos y el cuello de botella opera a 68, la planta no cumple. Las opciones son las clásicas y conviene evaluarlas en orden de costo:</p>"
      + "<ul><li><b>Explotar:</b> quitarle a la estación lenta todo trabajo que otra pueda hacer — rebalanceo de línea. Suele ser gratis y es el primer paso.</li>"
      + "<li><b>Subordinar:</b> que las estaciones rápidas no produzcan de más; solo generarían inventario en proceso.</li>"
      + "<li><b>Elevar:</b> duplicar la estación, automatizarla o añadir un turno. Aquí sí hay inversión.</li>"
      + "<li><b>Repetir:</b> al resolverla, el cuello de botella se mueve a otra estación. Siempre.</li></ul>"
      + "<p>El punto que hay que dejar clarísimo: <b>invertir en una estación que no es el cuello de botella no agrega ni una unidad de producción</b>. Solo genera más inventario esperando frente a la restricción — y con él, más lead time, por la ley de Little.</p>",
      cifras: {
        titulo: "Balanceo ilustrativo de una línea de 6 estaciones",
        encabezados: ["Estación", "Tiempo de operación", "Tiempo ocioso vs. cuello", "Capacidad en 8 h"],
        filas: [
          ["1 · Estampado", "52 s", "16 s", "553 u"],
          ["2 · Carrocería", "61 s", "7 s", "472 u"],
          ["3 · Pintura", "58 s", "10 s", "496 u"],
          ["<b>4 · Ensamble final</b>", "<b>68 s</b>", "<b>0 s</b>", "<b>423 u</b>"],
          ["5 · Pruebas", "47 s", "21 s", "612 u"],
          ["6 · Embarque", "39 s", "29 s", "738 u"],
          ["<b>Línea completa</b>", "<b>68 s/u</b>", "—", "<b>423 u/día</b>"]
        ]
      },
      indicadores: [
        "Tiempo de ciclo de la línea (el del cuello de botella) contra el takt requerido.",
        "Eficiencia de balanceo: tiempo útil total / (estaciones × tiempo del cuello de botella).",
        "Tiempo ocioso por estación.",
        "Inventario en proceso entre estaciones.",
        "Paros no programados y su efecto en la capacidad real frente a la teórica."
      ],
      preguntas: [
        "La demanda pide 480 unidades en 8 horas. Calcula el takt y compáralo contra el tiempo de ciclo de la línea. ¿Cumple?",
        "¿Cuánto sube la capacidad si automatizas la estación 6? Justifica antes de calcular.",
        "Propón un rebalanceo que mueva trabajo de la estación 4 a otras. ¿Cuál es la nueva capacidad y dónde queda el cuello de botella?",
        "¿Qué pasa con el inventario en proceso si las estaciones 5 y 6 trabajan a su máxima velocidad?"
      ],
      conecta: "Semana 3 · takt time, capacidad, cuello de botella, teoría de restricciones y balanceo de flujo."
    },

    {
      id: "telcel",
      titulo: "Telcel · centros de atención",
      subtitulo: "Tiempos estimados de atención y la promesa que se le hace al cliente",
      categoria: "capacidad",
      semanas: [3, 5],
      patrones: ["Cuello de botella", "Rutas múltiples", "Gestión de expectativas"],
      flujo: ["Toma de turno", "Espera", "Diagnóstico", "Atención según tipo de trámite", "Cierre"],
      contexto: "<p>El centro de atención entrega un turno con un tiempo estimado de espera. Los trámites son muy distintos entre sí: pagar un recibo toma dos minutos, una portabilidad o una reposición de equipo puede tomar cuarenta.</p>",
      analisis:
        "<p>El problema central es la <b>mezcla de trámites con tiempos muy dispares atendidos por el mismo pool de asesores</b>. Un solo trámite largo bloquea a varios clientes rápidos que venían detrás. Es la misma matemática de la unifila, pero al revés: aquí el pool compartido <i>perjudica</i> a los trámites cortos.</p>"
      + "<p>La solución de diseño es <b>triage</b>: separar rutas por tipo de trámite y asignar recursos a cada una. Los trámites rápidos se resuelven en una fila exprés o en un canal digital; los largos se agendan con cita y así dejan de competir por el mismo recurso.</p>"
      + "<p>El tiempo estimado que se le muestra al cliente merece discusión aparte. Si se calcula con el <b>promedio</b>, será optimista la mitad de las veces — y una promesa incumplida daña más que no haber prometido nada. Calcularlo con un <b>percentil alto</b> es conservador pero cumplible. Es el mismo debate que en la simulación: el promedio esconde la variabilidad, y el cliente vive la variabilidad, no el promedio.</p>"
      + "<p>Este caso conecta directamente con el análisis de rutas múltiples: el tiempo esperado de atención es <b>Σ p·T</b> sobre la mezcla real de trámites, y esa mezcla cambia por día del mes — los primeros días concentran pagos.</p>",
      cifras: {
        titulo: "Mezcla ilustrativa de trámites",
        encabezados: ["Trámite", "Proporción", "Tiempo de atención", "Aporte al promedio"],
        filas: [
          ["Pago de recibo", "40 %", "3 min", "1.2 min"],
          ["Aclaración de facturación", "25 %", "12 min", "3.0 min"],
          ["Cambio de plan", "20 %", "18 min", "3.6 min"],
          ["Portabilidad o reposición", "15 %", "42 min", "6.3 min"],
          ["<b>Tiempo esperado</b>", "<b>100 %</b>", "—", "<b>14.1 min</b>"]
        ]
      },
      indicadores: [
        "Tiempo de espera por tipo de trámite, no solo el global.",
        "Cumplimiento del tiempo estimado prometido al cliente.",
        "Utilización de asesores y proporción de trámites resolubles en canal digital.",
        "Abandonos antes de ser atendido.",
        "Reincidencia: clientes que regresan por el mismo asunto sin resolver."
      ],
      preguntas: [
        "Con la mezcla de la tabla, ¿cuál es el tiempo esperado de atención? ¿Qué pasa si en los primeros días del mes los pagos suben al 70 %?",
        "¿Conviene mostrar el tiempo estimado con el promedio o con el percentil 90? Argumenta desde la expectativa del cliente.",
        "Diseña una separación de rutas por tipo de trámite. ¿Cuántos asesores asignas a cada una y con qué criterio?",
        "Si el 40 % de pagos migra a la app, ¿qué le pasa al tiempo esperado de los que siguen yendo a sucursal?"
      ],
      conecta: "Semana 3 · rutas múltiples, capacidad, triage. Semana 5 · indicadores de servicio y simulación ante variabilidad."
    },

    /* ==================== TIEMPO DE CICLO, TAKT Y ESPERAS ==================== */
    {
      id: "mcdonalds",
      titulo: "McDonald's",
      subtitulo: "Tiempos y movimientos, punto de venta y tecnología",
      categoria: "tiempo",
      semanas: [1, 3],
      patrones: ["Takt time", "Rutas paralelas", "Estandarización", "Automatización"],
      flujo: ["Pedido", "Pago", "Preparación en cocina", "Ensamble", "Entrega"],
      contexto: "<p>El modelo entero está construido sobre tiempos y movimientos: procedimientos estandarizados, estaciones especializadas y equipo diseñado para que la operación no dependa de la habilidad individual. Los kioscos de autoservicio y el pedido por app cambiaron el frente del proceso.</p>",
      analisis:
        "<p>Es el caso didáctico perfecto de <b>estandarización como habilitador de capacidad</b>. Al reducir la variabilidad del tiempo de cada actividad, el proceso se vuelve predecible, se puede balancear con precisión y el takt se puede sostener.</p>"
      + "<p>La cocina opera con <b>rutas paralelas</b>: mientras se prepara la carne, otra estación arma la papa y otra sirve la bebida. El tiempo del pedido no es la suma sino <b>el máximo</b> de las ramas, más el ensamble final. Esa es exactamente la regla del curso, aplicada a un proceso que los alumnos ven todos los días.</p>"
      + "<p>Los <b>kioscos</b> son el punto más interesante para discutir. Aumentan la capacidad de <i>toma de pedido</i> —el frente— pero no la de la cocina. Si la cocina era el cuello de botella, el kiosco mueve la fila del mostrador a la barra de entrega, igual que en el caso de Starbucks. Lo que sí cambian, y esto es negocio puro, es el <b>ticket promedio</b>: la pantalla sugiere complementos sin la presión social de un cajero esperando.</p>"
      + "<p>Aquí conviene distinguir con precisión los tres niveles del curso: el kiosco <b>digitaliza</b> la toma de pedido; la cocina con temporizadores y fritura automática <b>automatiza</b>; el pedido por app con entrega a domicilio, que cambia quién es el cliente y cómo llega el producto, es <b>transformación digital</b>.</p>",
      cifras: {
        titulo: "Tiempos ilustrativos de un pedido estándar",
        encabezados: ["Actividad", "Tiempo", "Tipo", "Observación"],
        filas: [
          ["Toma de pedido en mostrador", "48 s", "Secuencial", "Con kiosco: 0 s para el personal"],
          ["Cobro", "22 s", "Secuencial", ""],
          ["Preparación de hamburguesa", "95 s", "<b>Paralela</b>", "Rama más lenta"],
          ["Preparación de papas", "70 s", "<b>Paralela</b>", "Espera 25 s a la hamburguesa"],
          ["Servir bebida", "18 s", "<b>Paralela</b>", "Espera 77 s"],
          ["Ensamble y entrega", "25 s", "Secuencial", ""],
          ["<b>Tiempo de ciclo</b>", "<b>190 s</b>", "—", "<b>48 + 22 + máx(95,70,18) + 25</b>"]
        ]
      },
      indicadores: [
        "Tiempo desde el pedido hasta la entrega, por canal (mostrador, kiosco, app, auto).",
        "Variabilidad del tiempo por estación: la desviación importa tanto como el promedio.",
        "Ticket promedio por canal.",
        "Porcentaje de pedidos con error o rehechos.",
        "Cumplimiento del takt en hora pico."
      ],
      preguntas: [
        "Con los datos de la tabla, calcula el tiempo de ciclo. ¿Por qué no se suman las tres ramas paralelas?",
        "Los kioscos eliminan los 48 s de toma de pedido del personal. ¿Aumenta la capacidad del restaurante? ¿De qué depende?",
        "Clasifica cada iniciativa como digitalización, automatización o transformación digital, y justifica.",
        "La demanda en hora pico es de 120 pedidos/hora. Calcula el takt y compáralo con el tiempo de ciclo. ¿Qué implica la diferencia?"
      ],
      conecta: "Semana 1 · automatización vs. digitalización vs. transformación digital. Semana 3 · rutas paralelas, takt time y capacidad."
    },

    {
      id: "pasteleria",
      titulo: "Pastelería",
      subtitulo: "Cuando la espera es física y no se puede eliminar",
      categoria: "tiempo",
      semanas: [3, 5],
      patrones: ["Espera obligatoria", "Recurso compartido", "Rutas paralelas"],
      flujo: ["Preparar mezcla", "Hornear", "Enfriar", "Cubrir y decorar", "Empacar"],
      contexto: "<p>Un pastel debe enfriarse antes de poder cubrirse; si se decora caliente, la cubierta se derrite. El enfriado toma cuarenta minutos y no hay forma de saltarlo. El horno, además, atiende varios pedidos y es un recurso compartido.</p>",
      analisis:
        "<p>Este caso existe para romper un dogma mal aprendido de Lean: <b>no toda espera es desperdicio eliminable</b>. El enfriado es una <b>restricción física del producto</b>, no una ineficiencia organizacional. Confundirlas lleva a proponer mejoras imposibles y a perder credibilidad frente al cliente.</p>"
      + "<p>La clasificación correcta importa. El enfriado no agrega valor que el cliente pague por separado, pero es <b>necesario</b> para que el producto exista — es ENVA, no NVA. No se elimina: se <b>optimiza</b> con tecnología (un abatidor reduce 40 minutos a 12) o se <b>oculta</b> con secuenciación (mientras un pastel enfría, el decorador trabaja en otro).</p>"
      + "<p>Y aquí está la distinción clave del curso: el enfriado <b>alarga el lead time pero no consume capacidad</b>. Mientras el pastel enfría, el horno y el decorador están libres para atender otro pedido. Por eso el tiempo de enfriado <b>no entra en el cálculo de carga del recurso</b> — es exactamente la razón por la que la carga se calcula con tiempo de procesamiento y no con tiempo de actividad.</p>"
      + "<p>El verdadero cuello de botella es el <b>horno</b>: recurso compartido con capacidad limitada por lote. El enfriado, por contraste, es paralelizable sin límite si hay espacio de repisa.</p>",
      cifras: {
        titulo: "Tiempos ilustrativos de un pastel",
        encabezados: ["Actividad", "Procesamiento", "Espera", "¿Consume capacidad?"],
        filas: [
          ["Preparar mezcla", "18 min", "0", "Sí · repostero"],
          ["Hornear", "35 min", "0", "Sí · <b>horno (cuello de botella)</b>"],
          ["<b>Enfriar</b>", "<b>0 min</b>", "<b>40 min</b>", "<b>No · solo ocupa espacio</b>"],
          ["Cubrir y decorar", "28 min", "0", "Sí · decorador"],
          ["Empacar", "6 min", "0", "Sí · empaque"],
          ["<b>Total</b>", "<b>87 min</b>", "<b>40 min</b>", "Lead time: 127 min"]
        ]
      },
      indicadores: [
        "Lead time del pedido y su descomposición en procesamiento contra espera obligatoria.",
        "Utilización del horno: es la restricción real.",
        "Pasteles en enfriado simultáneo y espacio disponible de repisa.",
        "Pedidos entregados a tiempo en temporada alta.",
        "Retrabajo por decorar antes de tiempo."
      ],
      preguntas: [
        "Clasifica el enfriado como VA, ENVA o NVA y defiende tu respuesta.",
        "¿Por qué los 40 minutos de enfriado NO entran en el cálculo de carga del recurso?",
        "Un abatidor cuesta $85,000 y reduce el enfriado a 12 minutos. ¿Aumenta la capacidad de la pastelería? ¿Cuándo sí y cuándo no?",
        "En temporada alta llegan tres veces más pedidos. ¿Qué recurso se satura primero y qué harías antes de comprar otro horno?"
      ],
      conecta: "Semana 3 · procesamiento vs. espera, por qué la espera no consume capacidad, cuello de botella. Semana 5 · VA/ENVA/NVA y evaluación de inversión."
    },

    {
      id: "vivaaerobus",
      titulo: "VivaAerobus",
      subtitulo: "Documentación: mover el trabajo al cliente y al momento correcto",
      categoria: "tiempo",
      semanas: [1, 3, 5],
      patrones: ["Rutas múltiples", "Mover el control al origen", "Restricción de tiempo"],
      flujo: ["Compra", "Check-in en línea o en aeropuerto", "Documentación de equipaje", "Filtro de seguridad", "Abordaje"],
      contexto: "<p>El modelo de bajo costo depende de la rotación rápida del avión. El check-in en línea, el cobro por equipaje documentado y los cortes estrictos de horario existen para proteger un proceso que no admite retrasos: cada minuto de avión en tierra cuesta dinero.</p>",
      analisis:
        "<p>Aquí hay una decisión de diseño de proceso disfrazada de política comercial. Al empujar el check-in a la web, la aerolínea <b>mueve el trabajo al origen y fuera de su proceso crítico</b>. El pasajero captura sus propios datos, en su tiempo, sin consumir capacidad de mostrador. Es la misma heurística del portal de proveedores del curso: quien tiene el dato lo captura.</p>"
      + "<p>El cobro por equipaje documentado <b>no es solo una fuente de ingreso</b>: reduce el volumen que pasa por la banda, que es un recurso compartido con capacidad fija. Cambiar el precio cambia la mezcla de rutas del proceso — es diseño de proceso a través del modelo de negocio.</p>"
      + "<p>Los <b>cortes de horario</b> son la parte incómoda y por eso son buenos para discutir. Desde el proceso son un mecanismo de protección de la restricción: sin ellos, un pasajero tardío retrasa el vuelo completo y desordena las rotaciones del día. Desde la experiencia del cliente son inflexibles. La pregunta honesta es dónde está el punto de equilibrio, y si el cliente entiende la regla antes de llegar al aeropuerto.</p>"
      + "<p>Nota el <b>lead time percibido</b>: el pasajero cuenta desde que sale de su casa hasta que se sienta. Buena parte de ese tiempo no está bajo control de la aerolínea, pero sí influye en su satisfacción. Es el recordatorio de que el cliente mide el proceso con sus propias fronteras, no con las del proveedor.</p>",
      cifras: {
        titulo: "Rutas ilustrativas del pasajero",
        encabezados: ["Ruta", "Proporción", "Tiempo en aeropuerto", "Recurso que consume"],
        filas: [
          ["Check-in en línea, sin equipaje", "45 %", "8 min", "Ninguno de mostrador"],
          ["Check-in en línea, con equipaje", "30 %", "22 min", "Banda y mostrador"],
          ["Check-in en aeropuerto, sin equipaje", "15 %", "26 min", "Mostrador"],
          ["Check-in en aeropuerto, con equipaje", "10 %", "38 min", "Mostrador y banda"],
          ["<b>Tiempo esperado</b>", "<b>100 %</b>", "<b>17.9 min</b>", "—"]
        ]
      },
      indicadores: [
        "Porcentaje de check-in en línea (mientras más alto, menos carga de mostrador).",
        "Tiempo de rotación del avión en tierra.",
        "Puntualidad de salida y su causa raíz cuando falla.",
        "Pasajeros que pierden el vuelo por corte de horario.",
        "Costo por pasajero documentado contra el ingreso por equipaje."
      ],
      preguntas: [
        "Calcula el tiempo esperado en aeropuerto con la mezcla de la tabla. ¿Qué pasa si el check-in en línea sube al 90 %?",
        "¿El check-in en línea es digitalización, automatización o transformación digital? Justifica con la definición del curso.",
        "El corte de horario protege la restricción pero castiga al cliente. Propón un rediseño que logre ambas cosas.",
        "¿Qué indicadores usarías para demostrarle a la dirección que cobrar el equipaje mejora el proceso y no solo el ingreso?"
      ],
      conecta: "Semana 1 · digitalización vs. transformación digital. Semana 3 · rutas múltiples y lead time. Semana 5 · mover el control al origen."
    },

    /* ==================== RUTAS MÚLTIPLES Y VARIANTES ==================== */
    {
      id: "costco",
      titulo: "Costco",
      subtitulo: "Membresías y devoluciones: el proceso como propuesta de valor",
      categoria: "rutas",
      semanas: [1, 5],
      patrones: ["Rutas múltiples", "Control en la entrada", "Política como diseño"],
      flujo: ["Alta o renovación de membresía", "Acceso", "Compra", "Verificación de salida", "Devolución si aplica"],
      contexto: "<p>Costco cobra una membresía anual y a cambio ofrece una política de devoluciones excepcionalmente amplia. Dos decisiones que parecen comerciales y son, en el fondo, decisiones de diseño de proceso.</p>",
      analisis:
        "<p><b>La membresía es un control movido a la entrada del proceso.</b> Al identificar a cada cliente antes de que compre, todo el proceso posterior opera sobre datos conocidos: quién compra, con qué frecuencia, qué devuelve. Eso permite una política de devolución generosa sin exponerse al abuso, porque el comportamiento es rastreable. La arquitectura de datos habilita la política comercial — no al revés.</p>"
      + "<p>La <b>devolución</b> es una ruta alterna del proceso principal, con probabilidad baja pero costo alto. En términos del curso es un <b>retrabajo</b>: consume recursos, revierte una transacción, mueve inventario y no genera valor nuevo. Se modela con su probabilidad y su costo, exactamente como la tasa de rechazo <code>r</code>.</p>"
      + "<p>El punto que rompe la intuición: <b>Costco decide no minimizar su tasa de devolución</b>. Una devolución fácil aumenta la disposición a comprar y a renovar la membresía. El costo del retrabajo se paga con mayor ingreso recurrente. Es el mejor ejemplo del curso de que <b>eliminar todo el desperdicio no siempre es óptimo</b>: hay que evaluar el efecto completo sobre el negocio, no solo la eficiencia local del proceso.</p>"
      + "<p>La <b>verificación de salida</b> merece su propia discusión: es una actividad que el cliente no valora, que agrega segundos de espera, y que existe por control de pérdidas. Es ENVA clásico — no se elimina, se optimiza.</p>",
      cifras: {
        titulo: "Economía ilustrativa de la política de devoluciones",
        encabezados: ["Concepto", "Valor", "Cálculo"],
        filas: [
          ["Transacciones anuales por socio", "24", "—"],
          ["Ticket promedio", "$1,850", "—"],
          ["Tasa de devolución", "2.8 %", "—"],
          ["Costo de procesar una devolución", "$140", "Mano de obra, inventario, merma"],
          ["Costo anual de devoluciones por socio", "<b>$94</b>", "24 × 0.028 × 140"],
          ["Membresía anual", "<b>$900</b>", "—"],
          ["Margen restante", "<b>$806</b>", "La política se paga sola"]
        ]
      },
      indicadores: [
        "Tasa de renovación de membresía: el indicador que realmente importa.",
        "Tasa de devolución y su costo por transacción.",
        "Ticket promedio y frecuencia de visita por socio.",
        "Tiempo de la verificación de salida y su efecto en la percepción.",
        "Abuso detectado de la política contra el costo de controlarlo."
      ],
      preguntas: [
        "¿Por qué la membresía habilita la política de devoluciones? Respóndelo en términos de arquitectura de datos.",
        "La devolución es un retrabajo. ¿Por qué la empresa no intenta minimizarlo? ¿Cuándo esa lógica dejaría de funcionar?",
        "Clasifica la verificación de salida en VA, ENVA o NVA y propón cómo optimizarla sin eliminar el control.",
        "Con las cifras de la tabla, ¿hasta qué tasa de devolución sigue siendo rentable la política?"
      ],
      conecta: "Semana 1 · dominios de negocio y datos. Semana 3 · retrabajo y rutas alternas. Semana 5 · VA/ENVA/NVA y costo de una política."
    },

    {
      id: "super-linea",
      titulo: "Súper en línea",
      subtitulo: "Un pedido, muchas rutas de pago y de entrega",
      categoria: "rutas",
      semanas: [2, 3],
      patrones: ["Rutas múltiples", "Integración de sistemas", "Excepciones"],
      flujo: ["Selección de productos", "Pago", "Surtido en tienda", "Sustituciones", "Entrega o recolección", "Ajuste de cobro"],
      contexto: "<p>El cliente arma su pedido en línea, elige entre varios métodos de pago y decide si recoge en tienda o pide entrega a domicilio. En la tienda, un surtidor recorre los pasillos y descubre que algunos productos no están disponibles.</p>",
      analisis:
        "<p>El proceso se bifurca varias veces y cada bifurcación es una <b>compuerta exclusiva</b> con su propia probabilidad: método de pago, modalidad de entrega, y sobre todo <b>la disponibilidad real del producto</b>.</p>"
      + "<p>La <b>sustitución</b> es donde vive la complejidad y donde se pierde la satisfacción. Si un producto no está, alguien debe decidir: ¿se sustituye, se cancela, se pregunta al cliente? Cada opción abre una ruta con tiempo, costo y efecto distintos sobre la experiencia. Preguntar al cliente en vivo es lo mejor para él y lo peor para el tiempo de ciclo — introduce una espera de respuesta humana en medio del surtido.</p>"
      + "<p>La raíz del problema es de <b>arquitectura de datos</b>: el inventario que ve el cliente en línea no coincide con el físico. La causa suele ser un inventario que se actualiza por lotes en lugar de en tiempo real, más la merma no registrada. <b>Un problema que parece de proceso es en realidad un problema de dato.</b> Ninguna mejora del flujo de surtido lo resuelve si el dato de existencias miente.</p>"
      + "<p>El <b>ajuste de cobro</b> posterior a la sustitución agrega una ruta más: si el producto sustituto cuesta distinto, hay que reversar y recobrar, y eso toca sistemas de pago con sus propias reglas. Es integración, no solo proceso.</p>",
      cifras: {
        titulo: "Rutas ilustrativas de un pedido de 25 artículos",
        encabezados: ["Situación", "Probabilidad", "Tiempo adicional", "Efecto"],
        filas: [
          ["Todo disponible", "62 %", "0 min", "Ruta feliz"],
          ["Sustitución automática por regla", "24 %", "+3 min", "Riesgo de insatisfacción"],
          ["Consulta al cliente por chat", "9 %", "+11 min", "Espera de respuesta humana"],
          ["Cancelación de artículo y reembolso", "5 %", "+8 min", "Ajuste de cobro"],
          ["<b>Tiempo esperado adicional</b>", "<b>100 %</b>", "<b>+2.1 min</b>", "—"]
        ]
      },
      indicadores: [
        "Exactitud del inventario: diferencia entre existencia de sistema y física.",
        "Tasa de sustitución y de cancelación por pedido.",
        "Lead time del pedido por modalidad de entrega.",
        "Satisfacción posterior a una sustitución.",
        "Ajustes de cobro y su tasa de error."
      ],
      preguntas: [
        "El síntoma es «el surtido tarda mucho». ¿Cuál es la causa raíz y a qué dominio de arquitectura pertenece?",
        "Calcula el tiempo esperado adicional con la tabla. ¿Qué ruta atacarías primero y por qué?",
        "Diseña la regla de sustitución automática. ¿Qué datos necesita y quién es responsable de esos datos?",
        "¿Qué le exigirías a la arquitectura de aplicaciones para que el inventario en línea sea confiable?"
      ],
      conecta: "Semana 1 · dominio de datos y de aplicaciones. Semana 2 · integración y matriz proceso-aplicación. Semana 3 · rutas múltiples."
    },

    {
      id: "adidas",
      titulo: "adidas.com",
      subtitulo: "E-commerce global: pagos, fraude y devoluciones",
      categoria: "rutas",
      semanas: [2, 4],
      patrones: ["Rutas múltiples", "Controles obligatorios", "Integración"],
      flujo: ["Navegación", "Carrito", "Pago", "Antifraude", "Preparación", "Envío", "Devolución si aplica"],
      contexto: "<p>Una tienda en línea global acepta tarjetas, transferencias, monederos digitales, pagos en efectivo por referencia y pago diferido. Cada método tiene su propio flujo, su tiempo de confirmación y sus reglas de reversa.</p>",
      analisis:
        "<p>El pago no es <i>una</i> actividad: es una <b>compuerta exclusiva con rutas de tiempos radicalmente distintos</b>. Una tarjeta confirma en segundos; un pago por referencia en efectivo puede tardar días y el pedido queda en limbo mientras tanto. Eso significa que <b>el lead time del pedido depende del método de pago elegido</b>, algo que el cliente no siempre entiende y que el diseño debe comunicar.</p>"
      + "<p>El <b>antifraude</b> es un control obligatorio que no agrega valor al cliente — ENVA puro — y que además introduce una ruta de excepción: la revisión manual. Un pedido marcado como sospechoso se detiene y espera criterio humano. Subir el umbral reduce fraude y aumenta falsos positivos, que son ventas perdidas de clientes legítimos. <b>Es un ajuste de riesgo, no una decisión técnica</b>, y por eso debe tomarlo el negocio con datos, no TI por su cuenta.</p>"
      + "<p>Desde arquitectura, cada método de pago es una <b>integración con un tercero</b>: su propia API, sus tiempos de respuesta, su modo de falla y su formato de conciliación. Aquí es donde el curso conecta con <b>PCI DSS</b>: el diseño debe minimizar el contacto con datos de tarjeta — tokenización, redirección al proveedor — porque cada sistema que toca esos datos entra en alcance de auditoría y encarece todo.</p>"
      + "<p>La <b>devolución internacional</b> agrega logística inversa, aduana y reembolso por el mismo canal de pago original, que no siempre lo permite. Es una ruta de baja probabilidad y alta complejidad: justo el tipo de excepción que los proyectos subestiman al estimar.</p>",
      cifras: {
        titulo: "Rutas ilustrativas de pago",
        encabezados: ["Método", "Proporción", "Confirmación", "Tasa de abandono"],
        filas: [
          ["Tarjeta de crédito o débito", "58 %", "Segundos", "6 %"],
          ["Monedero digital", "22 %", "Segundos", "4 %"],
          ["Referencia en efectivo", "12 %", "Hasta 72 h", "31 %"],
          ["Pago diferido a plazos", "8 %", "Minutos", "9 %"],
          ["<b>Revisión antifraude</b>", "<b>3 % del total</b>", "<b>+ 4 h</b>", "<b>18 %</b>"]
        ]
      },
      indicadores: [
        "Tasa de conversión y de abandono por método de pago.",
        "Lead time del pedido por método de pago.",
        "Falsos positivos del antifraude y ventas perdidas por esa causa.",
        "Tasa de devolución por categoría de producto.",
        "Costo de integración y de conciliación por proveedor de pago."
      ],
      preguntas: [
        "¿Por qué el lead time del pedido depende del método de pago? ¿Cómo lo comunicarías al cliente?",
        "El antifraude tiene 3 % de revisión manual con 18 % de abandono. Cuantifica el costo del control y compáralo con el fraude evitado.",
        "Clasifica el antifraude en VA, ENVA o NVA. ¿Se puede eliminar? ¿Se puede optimizar?",
        "¿Qué decisiones de arquitectura reducen el alcance de PCI DSS y por qué importa económicamente?"
      ],
      conecta: "Semana 2 · integración y matriz proceso-aplicación. Semana 3 · rutas múltiples. Semana 4 · normas, seguridad y proveedores. Semana 5 · costo de un control."
    },

    {
      id: "oxxo-gas",
      titulo: "OXXO Gas / Petro 7",
      subtitulo: "Facturación posterior a la compra: una ruta que nace desconectada",
      categoria: "rutas",
      semanas: [2, 3],
      patrones: ["Ruta desacoplada", "Retrabajo", "Integración de datos"],
      flujo: ["Carga de combustible", "Cobro", "Ticket", "Captura del ticket en portal", "Emisión de factura", "Corrección si falla"],
      contexto: "<p>El cliente carga combustible y recibe un ticket. Si necesita factura, entra después a un portal, captura los datos del ticket y sus datos fiscales, y espera el comprobante. Con frecuencia algo no coincide y hay que corregir.</p>",
      analisis:
        "<p>Aquí hay un <b>proceso partido en dos que nunca fue diseñado como uno solo</b>. La venta ocurre en la estación, en un sistema; la facturación ocurre después, en otro portal, con datos que el cliente vuelve a teclear. El mismo dato se captura dos veces: es la definición de <b>captura duplicada</b>, uno de los desperdicios del curso.</p>"
      + "<p>El <b>retrabajo</b> es alto y predecible: RFC mal escrito, ticket vencido, régimen fiscal incorrecto, estación que no reporta la venta a tiempo. Cada falla obliga a repetir el ciclo completo, y la tasa <code>r</code> aquí no es marginal. Con la fórmula del curso, un ciclo de 8 minutos con 25 % de rechazo cuesta 10 minutos esperados por factura — y ese tiempo lo paga el cliente, no la empresa, que es justo lo que hace invisible el problema.</p>"
      + "<p>La causa raíz es de <b>arquitectura</b>: el punto de venta y el sistema de facturación no comparten el dato de la transacción en tiempo real. El diseño correcto sería <b>capturar una sola vez, en el origen</b>: identificar al cliente en el momento de la carga —tarjeta, app, QR— y emitir la factura automáticamente. Es el mismo principio del portal de proveedores.</p>"
      + "<p>Discusión de fondo: el costo del proceso actual está <b>trasladado al cliente</b>, así que no aparece en ningún indicador interno. Esa es exactamente la razón por la que el análisis de valor debe hacerse desde la perspectiva del cliente y no solo desde la eficiencia interna.</p>",
      cifras: {
        titulo: "Ciclo ilustrativo de facturación",
        encabezados: ["Concepto", "Valor", "Observación"],
        filas: [
          ["Tiempo de captura en portal", "8 min", "Lo invierte el cliente"],
          ["Tasa de rechazo o error", "25 %", "RFC, ticket vencido, régimen"],
          ["Tiempo esperado con retrabajo", "<b>10 min</b>", "(1 + 0.25) × 8"],
          ["Facturas mensuales por estación", "1,400", "—"],
          ["Horas de cliente consumidas al mes", "<b>233 h</b>", "1,400 × 10 min"],
          ["Llamadas a soporte por factura fallida", "6 %", "Costo que sí es interno"]
        ]
      },
      indicadores: [
        "Tasa de éxito de facturación al primer intento.",
        "Tiempo que le toma al cliente completar el trámite.",
        "Llamadas o tickets de soporte por problemas de facturación.",
        "Porcentaje de ventas que requieren factura.",
        "Tiempo entre la venta y la disponibilidad del ticket en el portal."
      ],
      preguntas: [
        "Con un ciclo de 8 min y 25 % de rechazo, calcula el tiempo esperado bajo los dos supuestos de retrabajo del curso.",
        "El costo lo paga el cliente y no aparece en los indicadores internos. ¿Qué implica eso para el análisis de valor?",
        "Diseña el TO-BE donde el dato se capture una sola vez. ¿Qué requiere de las arquitecturas de datos y de aplicaciones?",
        "¿Qué indicador convencería a la dirección de invertir, si el ahorro no aparece en su estado de resultados?"
      ],
      conecta: "Semana 2 · captura duplicada y fragmentación. Semana 3 · retrabajo y sus dos fórmulas. Semana 5 · valor desde el cliente y costo de no hacer nada."
    },

    /* ==================== ORQUESTACIÓN Y TRANSFORMACIÓN DIGITAL ==================== */
    {
      id: "salud-digna",
      titulo: "Salud Digna",
      subtitulo: "Citas y atención sincronizadas: la orquestación como producto",
      categoria: "orquestacion",
      semanas: [1, 4, 5],
      patrones: ["Orquestación end-to-end", "Transformación digital", "Cuello de botella móvil"],
      flujo: ["Agenda de cita", "Registro", "Toma de muestra", "Proceso de laboratorio", "Entrega de resultados", "Consulta del resultado"],
      contexto: "<p>El modelo se basa en alto volumen y precio bajo, lo que solo funciona si el proceso está sincronizado de extremo a extremo. La cita en línea, el registro, la toma de muestra y la entrega digital de resultados operan como un solo flujo, no como cuatro trámites.</p>",
      analisis:
        "<p>Este es el caso del catálogo que <b>sí es transformación digital</b>, y conviene contrastarlo con los demás. No se digitalizó un formato ni se automatizó una actividad: <b>cambió el modelo de atención</b>. Antes el paciente llegaba, tomaba turno y esperaba sin saber cuánto; ahora llega a una hora asignada y el proceso está dimensionado para atenderlo en esa ventana.</p>"
      + "<p>La cita no es una comodidad: es un <b>mecanismo de control de la demanda</b>. Al distribuir las llegadas se aplana el pico, y aplanar el pico es lo que permite operar cerca de la capacidad sin generar colas. Es la contraparte exacta del caso de inscripciones, donde el pico se dejó sin controlar.</p>"
      + "<p>La orquestación exige que <b>cuatro dominios estén alineados a la vez</b>: negocio define la promesa de tiempo; datos mantiene un expediente único del paciente entre sucursales; aplicaciones conectan agenda, laboratorio y portal de resultados; tecnología sostiene la disponibilidad. Si uno falla, la promesa se rompe y el paciente lo percibe de inmediato.</p>"
      + "<p>El cuello de botella <b>se mueve durante el día</b>: por la mañana es la toma de muestra, más tarde el equipo de laboratorio. Un análisis de capacidad con promedios diarios no lo detecta. Es el argumento más claro del curso a favor de la simulación frente al cálculo analítico.</p>",
      cifras: {
        titulo: "Escenario ilustrativo de una sucursal",
        encabezados: ["Etapa", "Capacidad por hora", "Demanda 8-11 h", "Demanda 11-14 h"],
        filas: [
          ["Registro", "60 pacientes", "55", "38"],
          ["<b>Toma de muestra</b>", "<b>45 pacientes</b>", "<b>52 (saturado)</b>", "36"],
          ["Proceso de laboratorio", "50 muestras", "40", "<b>54 (saturado)</b>"],
          ["Entrega digital", "Sin límite", "—", "—"],
          ["<b>Cuello de botella</b>", "—", "<b>Toma de muestra</b>", "<b>Laboratorio</b>"]
        ]
      },
      indicadores: [
        "Cumplimiento de la hora de cita: diferencia entre hora asignada y hora de atención.",
        "Lead time desde la toma de muestra hasta el resultado disponible.",
        "Utilización por etapa y por franja horaria, no en promedio diario.",
        "Porcentaje de pacientes que consultan su resultado en línea.",
        "Citas no presentadas y su efecto en la capacidad desperdiciada."
      ],
      preguntas: [
        "¿Por qué esto es transformación digital y no solo digitalización? Usa la definición del curso.",
        "El cuello de botella cambia entre la mañana y la tarde. ¿Qué implica eso para el análisis de capacidad con promedios?",
        "¿Cómo ayuda la cita a operar cerca de la capacidad? Relaciónalo con la ley de Little.",
        "Un 12 % de citas no se presenta. Propón un rediseño y calcula el efecto sobre la capacidad aprovechada."
      ],
      conecta: "Semana 1 · los cuatro dominios y transformación digital. Semana 3 · capacidad y cuello de botella variable. Semana 5 · simulación ante variabilidad."
    },

    {
      id: "toyota",
      titulo: "Toyota · servicio de mantenimiento",
      subtitulo: "Programar citas para proteger la capacidad del taller",
      categoria: "orquestacion",
      semanas: [3, 5],
      patrones: ["Control de la demanda", "Recurso especializado", "Rutas múltiples"],
      flujo: ["Agenda de cita", "Recepción", "Diagnóstico", "Servicio", "Control de calidad", "Entrega"],
      contexto: "<p>El taller agenda citas por tipo de servicio. Un mantenimiento de 10,000 km es predecible y estandarizado; una reparación por falla es incierta en tiempo y en refacciones. Ambos compiten por las mismas bahías y los mismos técnicos.</p>",
      analisis:
        "<p>La empresa que inventó el sistema de producción esbelto aplica en su taller la misma lógica: <b>nivelar la carga</b>. La cita es el mecanismo, y su función real es hacer que la demanda se parezca a la capacidad.</p>"
      + "<p>El problema de diseño es la <b>mezcla de trabajos con variabilidad muy distinta</b>. El mantenimiento programado tiene tiempo casi fijo; la reparación por falla tiene una distribución amplia y a veces depende de una refacción que no está. Meter ambos en el mismo pool de bahías hace que un trabajo incierto bloquee varios trabajos predecibles — el mismo fenómeno del caso Telcel.</p>"
      + "<p>La solución de diseño es <b>separar rutas y reservar capacidad</b>: bahías dedicadas a servicio rápido, con tiempos estandarizados, y bahías para diagnóstico y reparación, con holgura para la incertidumbre. Es triage aplicado a un taller.</p>"
      + "<p>La <b>refacción faltante</b> merece atención propia: convierte un servicio de 2 horas en uno de 3 días, y el auto ocupa una bahía mientras espera. Eso no es un problema de proceso de taller sino de <b>cadena de suministro y de dato de inventario</b> — otra vez, un síntoma en un dominio cuya causa vive en otro.</p>",
      cifras: {
        titulo: "Mezcla ilustrativa de trabajos",
        encabezados: ["Tipo de servicio", "Proporción", "Tiempo típico", "Variabilidad"],
        filas: [
          ["Mantenimiento programado", "55 %", "2.0 h", "Baja (±15 min)"],
          ["Servicio menor con diagnóstico", "28 %", "3.5 h", "Media (±1 h)"],
          ["Reparación mayor", "12 %", "8.0 h", "Alta (±4 h)"],
          ["Reparación con refacción faltante", "5 %", "26 h", "Muy alta"],
          ["<b>Tiempo esperado</b>", "<b>100 %</b>", "<b>4.4 h</b>", "—"]
        ]
      },
      indicadores: [
        "Cumplimiento de la hora de entrega prometida.",
        "Utilización de bahías por tipo de servicio.",
        "Porcentaje de servicios detenidos por falta de refacción.",
        "Tiempo de diagnóstico y su variabilidad.",
        "Retrabajo: vehículos que regresan por el mismo síntoma."
      ],
      preguntas: [
        "Calcula el tiempo esperado con la mezcla de la tabla. ¿Qué tan útil es ese promedio para prometer una hora de entrega?",
        "¿Por qué conviene separar bahías por tipo de servicio? Relaciónalo con el caso de Telcel.",
        "La refacción faltante ocupa una bahía 26 horas. ¿Qué le hace eso a la capacidad y a qué dominio pertenece la causa?",
        "Diseña la política de agenda: ¿cuántas citas de cada tipo aceptas por día y con qué criterio?"
      ],
      conecta: "Semana 3 · capacidad, rutas múltiples, variabilidad. Semana 5 · triage, nivelación de carga y simulación."
    },

    {
      id: "rappi",
      titulo: "Rappi",
      subtitulo: "Un pedido, tres actores y ningún jefe común",
      categoria: "orquestacion",
      semanas: [1, 4],
      patrones: ["Orquestación end-to-end", "Rutas paralelas", "Actores externos"],
      flujo: ["Pedido del cliente", "Aceptación del comercio", "Asignación de repartidor", "Preparación", "Recolección", "Entrega"],
      contexto: "<p>Un pedido involucra a tres partes que no pertenecen a la misma organización: el cliente, el restaurante y el repartidor. La plataforma no controla directamente a ninguno de los tres y aun así responde por el resultado completo.</p>",
      analisis:
        "<p>Es el ejemplo más puro de <b>proceso cross-functional llevado al extremo</b>: no atraviesa departamentos sino <b>empresas distintas</b>. Nadie tiene autoridad jerárquica sobre todos los participantes, así que la coordinación tiene que lograrse con <b>datos, incentivos y reglas</b> en vez de con órdenes. Eso es orquestación en su forma más difícil.</p>"
      + "<p>Hay <b>paralelismo real</b>: mientras el restaurante prepara, la plataforma asigna y mueve al repartidor. Idealmente ambos terminan al mismo tiempo. El tiempo del tramo es <b>máx(preparación, llegada del repartidor)</b>, no la suma — y el arte del algoritmo está en sincronizarlos. Si el repartidor llega demasiado pronto espera y se le desperdicia tiempo; si llega tarde, la comida se enfría.</p>"
      + "<p>El <b>tiempo estimado</b> es la promesa que define la experiencia, y se calcula con predicción, no con un promedio fijo: depende del comercio, la hora, el clima, el tráfico y la disponibilidad de repartidores. Es un caso legítimo de <b>modelo predictivo dentro de un proceso operativo</b> — con el requisito de siempre: sin datos históricos confiables no hay modelo que sirva.</p>"
      + "<p>Las <b>excepciones</b> son donde el proceso realmente se define: producto agotado, comercio que no acepta, repartidor que cancela, dirección incorrecta. Un diseño maduro se distingue por cómo maneja estas rutas, no por lo bien que ejecuta la ruta feliz.</p>",
      cifras: {
        titulo: "Tiempos ilustrativos de un pedido",
        encabezados: ["Tramo", "Tiempo", "Tipo", "Observación"],
        filas: [
          ["Aceptación del comercio", "2 min", "Secuencial", "Si no acepta, se reasigna"],
          ["Preparación del pedido", "18 min", "<b>Paralelo</b>", "Rama del comercio"],
          ["Asignación y llegada del repartidor", "14 min", "<b>Paralelo</b>", "Rama de logística"],
          ["Recolección", "4 min", "Secuencial", ""],
          ["Traslado y entrega", "13 min", "Secuencial", ""],
          ["<b>Tiempo de ciclo</b>", "<b>37 min</b>", "—", "<b>2 + máx(18,14) + 4 + 13</b>"]
        ]
      },
      indicadores: [
        "Cumplimiento del tiempo estimado prometido al cliente.",
        "Tiempo de espera del repartidor en el comercio (desperdicio puro).",
        "Tasa de cancelación por actor: cliente, comercio, repartidor.",
        "Pedidos con incidencia y su tipo.",
        "Error de predicción del tiempo estimado."
      ],
      preguntas: [
        "Calcula el tiempo de ciclo con la tabla. ¿Por qué se usa el máximo en el tramo paralelo?",
        "Si el repartidor llega en 8 minutos en lugar de 14, ¿mejora el tiempo total? ¿Qué se desperdicia?",
        "La plataforma no tiene autoridad sobre comercios ni repartidores. ¿Con qué mecanismos logra coordinarlos?",
        "Elige una excepción y diseña su ruta completa, con tiempos y responsables."
      ],
      conecta: "Semana 1 · proceso end-to-end y cross-functional. Semana 3 · rutas paralelas. Semana 4 · orquestación y tecnologías emergentes."
    },

    {
      id: "uber",
      titulo: "Uber",
      subtitulo: "Ubicación, asignación y predicción dentro del proceso",
      categoria: "orquestacion",
      semanas: [3, 4],
      patrones: ["Asignación en tiempo real", "Datos como habilitador", "Control de demanda"],
      flujo: ["Solicitud del pasajero", "Asignación de conductor", "Llegada", "Viaje", "Cobro", "Calificación"],
      contexto: "<p>El pasajero abre la aplicación y ve conductores cercanos, un tiempo estimado de llegada y una tarifa. Detrás hay una decisión de asignación que se toma en segundos y que determina la eficiencia del sistema completo.</p>",
      analisis:
        "<p>Lo interesante aquí no es el viaje sino la <b>asignación</b>. Es una decisión de ruteo tomada en tiempo real con datos de ubicación, y su calidad determina dos indicadores en tensión: el tiempo de espera del pasajero y la utilización del conductor. <b>Optimizar uno degrada el otro</b>, y esa tensión es una decisión de negocio, no un detalle técnico.</p>"
      + "<p>El caso muestra la <b>arquitectura de datos como habilitador directo del modelo de negocio</b>: sin ubicación en tiempo real, sin histórico de tráfico y sin predicción de demanda, el servicio no existe. No es tecnología de apoyo — es el producto. Es el contraste más nítido del catálogo frente a los casos donde la tecnología solo soporta un proceso preexistente.</p>"
      + "<p>El <b>precio dinámico</b> es un mecanismo de control de la demanda con la lógica de la teoría de restricciones: cuando la demanda excede la capacidad disponible de conductores, el precio sube, la demanda baja y la oferta se incentiva a subir. Funciona como diseño; genera rechazo como experiencia. <b>Vale la pena discutir esa tensión con los alumnos en lugar de resolverla de un lado.</b></p>"
      + "<p>Nota para el análisis de capacidad: la capacidad aquí <b>no es fija ni propia</b>. Depende de cuántos conductores decidan conectarse, lo cual depende del precio y de la hora. Es un sistema donde la restricción se negocia, no se dimensiona — y eso rompe varios supuestos del cálculo tradicional.</p>",
      cifras: {
        titulo: "Tensión ilustrativa entre dos indicadores",
        encabezados: ["Política de asignación", "Espera del pasajero", "Utilización del conductor", "Km en vacío"],
        filas: [
          ["Conductor más cercano", "3.2 min", "58 %", "Alto"],
          ["Optimización global de flota", "4.8 min", "<b>74 %</b>", "Bajo"],
          ["Balanceada", "<b>3.9 min</b>", "68 %", "Medio"],
          ["<b>Trade-off</b>", "<b>↑ espera</b>", "<b>↑ utilización</b>", "—"]
        ]
      },
      indicadores: [
        "Tiempo de espera del pasajero y su cumplimiento contra lo estimado.",
        "Utilización del conductor: proporción del tiempo conectado que va con pasajero.",
        "Kilómetros recorridos en vacío.",
        "Tasa de cancelación por pasajero y por conductor.",
        "Error de predicción del tiempo de llegada."
      ],
      preguntas: [
        "¿Por qué mejorar el tiempo de espera empeora la utilización del conductor? Explica el mecanismo.",
        "El precio dinámico es control de demanda. Compáralo con la cita de Salud Digna: ¿qué logran igual y qué distinto?",
        "La capacidad depende de cuántos conductores se conecten. ¿Qué supuestos del cálculo de capacidad del curso se rompen?",
        "¿Qué requisitos de arquitectura de datos hacen posible este servicio? ¿Qué pasaría si el dato de ubicación tuviera 30 s de retraso?"
      ],
      conecta: "Semana 3 · capacidad y utilización. Semana 4 · tecnologías emergentes, IA y arquitectura de datos como habilitador."
    },

    /* ==================== SERVICIOS DE TI, INCIDENTES Y CONTINUIDAD ==================== */
    {
      id: "tec-services",
      titulo: "Mesa de servicio institucional",
      subtitulo: "Incidentes, escalamiento por tiempo transcurrido y SLA",
      categoria: "servicios",
      semanas: [4, 5],
      patrones: ["Gestión de incidentes", "Escalamiento", "WIP y ley de Little"],
      flujo: ["Reporte del usuario", "Registro y clasificación", "Atención de primer nivel", "Escalamiento si aplica", "Resolución", "Cierre"],
      contexto: "<p>Una mesa de servicio recibe reportes por varios canales, los clasifica por prioridad y los escala automáticamente a segundo nivel cuando llevan demasiado tiempo abiertos sin resolverse. El acuerdo de servicio promete tiempos de respuesta y de resolución por prioridad.</p>",
      analisis:
        "<p>Es el caso de ITIL en estado puro, y sirve para fijar dos distinciones que los alumnos confunden. Primera: <b>incidente contra problema</b>. El incidente interrumpe el servicio y se resuelve restableciéndolo; el problema es la causa raíz de incidentes recurrentes. Una mesa que solo cierra incidentes rápido y nunca abre problemas está condenada a atender el mismo asunto para siempre.</p>"
      + "<p>Segunda: el <b>escalamiento por tiempo transcurrido</b> es un mecanismo de control, no una derrota. Su función es evitar que un ticket envejezca en silencio. Pero mal calibrado produce el efecto contrario: si el umbral es muy corto, segundo nivel se satura de casos que primer nivel habría resuelto, y el cuello de botella se desplaza hacia arriba.</p>"
      + "<p>Aquí la <b>ley de Little</b> es directamente aplicable y es la mejor herramienta de diagnóstico: con throughput topado por la capacidad del equipo, el lead time lo determina el WIP. Si hay 168 tickets abiertos y se cierran 24 por hora, el promedio es de 7 horas — sin importar lo que prometa el SLA. Cumplir 4 horas exige un WIP máximo de 96 tickets, y eso se logra <b>controlando lo que entra</b>, no apurando a los técnicos.</p>"
      + "<p>El <b>autoservicio y la base de conocimiento</b> son la palanca estructural: desvían tickets antes de que entren al proceso. Es la misma lógica del check-in en línea de VivaAerobus — sacar trabajo del proceso crítico.</p>",
      cifras: {
        titulo: "Escenario ilustrativo de la mesa",
        encabezados: ["Concepto", "Valor", "Cálculo"],
        filas: [
          ["Tickets abiertos (WIP)", "168", "—"],
          ["Cierre por hora (throughput)", "24", "—"],
          ["<b>Lead time real</b>", "<b>7.0 h</b>", "168 / 24"],
          ["SLA prometido", "4.0 h", "—"],
          ["<b>WIP máximo para cumplir</b>", "<b>96</b>", "24 × 4"],
          ["Reducción necesaria", "72 tickets", "168 − 96"]
        ]
      },
      indicadores: [
        "Cumplimiento del SLA por prioridad, no en agregado.",
        "WIP de tickets abiertos y su tendencia semanal.",
        "Tasa de resolución en primer contacto.",
        "Porcentaje de escalamientos y cuántos se resuelven sin acción de segundo nivel.",
        "Incidentes recurrentes convertidos en problemas formales."
      ],
      preguntas: [
        "Con 168 tickets y 24 cierres por hora, ¿se puede cumplir un SLA de 4 h? Demuéstralo con la ley de Little.",
        "El umbral de escalamiento baja de 4 h a 2 h. ¿Qué le pasa a segundo nivel y dónde queda el cuello de botella?",
        "Distingue tres incidentes que en realidad son un problema. ¿Cómo lo detectarías con datos?",
        "Propón dos formas de bajar el WIP sin contratar personal y estima su efecto."
      ],
      conecta: "Semana 3 · ley de Little, WIP y cuello de botella. Semana 4 · ITIL, ITSM, incidentes contra problemas y SLA."
    },

    {
      id: "carnes-puerco",
      titulo: "Procesadora de cárnicos",
      subtitulo: "Cuando una impresora detiene la línea de producción",
      categoria: "servicios",
      semanas: [4, 5],
      patrones: ["Continuidad operativa", "Dependencia crítica", "Análisis de impacto"],
      flujo: ["Recepción", "Proceso", "Pesaje", "Etiquetado", "Empaque", "Embarque"],
      contexto: "<p>La planta pesa y etiqueta cada pieza. Si la báscula conectada o la impresora de etiquetas fallan, el producto no puede identificarse ni embarcarse. Es producto perecedero: no se puede simplemente detener y esperar.</p>",
      analisis:
        "<p>Este caso desmonta la idea de que la criticidad de un activo de TI se mide por su costo. <b>Una impresora de etiquetas de bajo precio puede ser el activo más crítico de la planta</b>, porque su falla detiene un proceso donde el producto se degrada con el tiempo. La criticidad la define el <b>impacto en el proceso de negocio</b>, no el valor del equipo.</p>"
      + "<p>Es la mejor ilustración de por qué el curso insiste en que la infraestructura es una <b>restricción de diseño</b> y no un detalle de implementación. Aquí la báscula y la impresora son literalmente el cuello de botella del proceso completo cuando fallan.</p>"
      + "<p>La consecuencia de gobierno es concreta: el <b>análisis de impacto al negocio</b> debe hacerse desde el proceso hacia el activo y no al revés. Un inventario de activos ordenado por costo pondría el ERP arriba y la impresora abajo; un análisis por impacto los pone juntos. Aquí conectan <b>BAI09 (activos), BAI10 (configuración) y BAI04 (disponibilidad)</b> de COBIT.</p>"
      + "<p>Los parámetros de continuidad dejan de ser abstractos: el <b>RTO</b> no lo define TI sino la biología del producto. Si la carne tolera 90 minutos fuera de refrigeración, el RTO es menor a 90 minutos, y eso determina si hace falta una impresora de respaldo encendida o basta una póliza de servicio.</p>",
      cifras: {
        titulo: "Análisis de impacto ilustrativo",
        encabezados: ["Activo", "Costo", "Impacto si falla", "RTO requerido"],
        filas: [
          ["ERP corporativo", "Muy alto", "Facturación se retrasa", "8 h"],
          ["<b>Báscula conectada</b>", "<b>Bajo</b>", "<b>Línea detenida</b>", "<b>30 min</b>"],
          ["<b>Impresora de etiquetas</b>", "<b>Muy bajo</b>", "<b>Producto no embarcable</b>", "<b>45 min</b>"],
          ["Correo corporativo", "Medio", "Comunicación lenta", "24 h"],
          ["Merma por 2 h de paro", "—", "<b>$180,000</b>", "—"]
        ]
      },
      indicadores: [
        "Tiempo de paro de línea atribuible a fallas de TI.",
        "Merma por producto no embarcado a tiempo.",
        "MTTR de los activos críticos del piso de producción.",
        "Disponibilidad de refacciones y equipos de respaldo.",
        "Incidentes recurrentes en equipos de planta."
      ],
      preguntas: [
        "¿Por qué una impresora barata puede ser más crítica que el ERP? Define criticidad correctamente.",
        "Con $180,000 de merma por 2 h de paro, ¿se justifica una impresora de respaldo de $40,000? Calcula.",
        "¿Quién debe definir el RTO de la báscula: TI o producción? Argumenta.",
        "¿Qué objetivos de COBIT gobiernan este riesgo y qué evidencia pediría un auditor?"
      ],
      conecta: "Semana 4 · ITSM, activos, configuración, RTO/RPO y COBIT BAI. Semana 5 · factibilidad económica y análisis de impacto."
    },

    {
      id: "crowdstrike",
      titulo: "CrowdStrike y Windows · julio de 2024",
      subtitulo: "Una actualización, 8.5 millones de equipos y el mundo detenido",
      categoria: "servicios",
      semanas: [4, 5],
      patrones: ["Gestión de cambios", "Radio de impacto", "Continuidad", "Dependencia de proveedor"],
      flujo: ["Desarrollo del contenido", "Validación automática", "Publicación global", "Fallo en el arranque", "Reversión", "Remediación manual"],
      contexto: "<p>El 19 de julio de 2024, a las 04:09 UTC, CrowdStrike publicó una actualización de contenido de su sensor Falcon. El archivo defectuoso provocó pantallas azules en aproximadamente <b>8.5 millones de equipos Windows</b> en todo el mundo. Se cancelaron más de mil vuelos y se interrumpieron bancos, bolsas, hospitales, transporte y comercios. La actualización se revirtió a las 05:27 UTC, pero los equipos ya caídos requirieron intervención manual.</p>",
      analisis:
        "<p>Es el caso de arquitectura empresarial más importante de los últimos años, y merece tratarse con seriedad porque casi todos los conceptos del curso aparecen a la vez.</p>"
      + "<p><b>Gestión de cambios.</b> La actualización se distribuyó de forma global y simultánea, sin despliegue escalonado. En cualquier marco de gobierno —COBIT BAI06 y BAI07, ITIL— un cambio se libera por anillos: primero un grupo pequeño, se observa, y solo entonces se amplía. Un <i>canary</i> de mil equipos habría contenido el daño en mil equipos.</p>"
      + "<p><b>El radio de impacto como decisión de diseño.</b> El sensor se ejecutaba en anillo 0, con privilegios de kernel: un fallo ahí no degrada la aplicación, tumba el sistema operativo completo. Elegir dónde corre un componente es una decisión de arquitectura tecnológica cuyas consecuencias se ven precisamente cuando algo sale mal.</p>"
      + "<p><b>La validación falló en varios niveles.</b> El análisis posterior identificó validación mediante expresiones regulares en lugar de un analizador apropiado, ausencia de verificación de longitud del arreglo —se esperaban 21 campos y el archivo traía 20—, pruebas limitadas a la ruta feliz sin pruebas de regresión, y falta de un número de versión verificable. Es un catálogo de lo que el curso llama <i>pruebas y adecuación</i> mal hechas.</p>"
      + "<p><b>Recuperación asimétrica.</b> Revertir en el proveedor tomó 78 minutos; recuperar cada equipo requirió arrancar en modo seguro y borrar un archivo a mano, máquina por máquina, y donde había BitLocker hubo que capturar claves de 48 dígitos. <b>La velocidad de reversa del proveedor no es la velocidad de recuperación del cliente.</b> Cualquier plan de continuidad que confunda ambas está mal hecho.</p>"
      + "<p><b>Concentración de proveedor.</b> Miles de organizaciones descubrieron el mismo día que compartían una dependencia crítica que nunca aparecía en sus mapas de riesgo, porque no era un sistema propio sino un agente de seguridad instalado en todos sus equipos.</p>",
      cifras: {
        titulo: "Datos del incidente (estos sí son reales y públicos)",
        encabezados: ["Concepto", "Dato"],
        filas: [
          ["Fecha y hora", "19 de julio de 2024, 04:09 UTC"],
          ["Equipos Windows afectados", "≈ 8.5 millones (menos del 1 % del total global)"],
          ["Tiempo hasta la reversión", "78 minutos (05:27 UTC)"],
          ["Vuelos cancelados", "Más de mil"],
          ["Causa técnica", "Archivo de canal 291 con 20 campos donde se esperaban 21"],
          ["Remediación", "Arranque en modo seguro y borrado manual del archivo"]
        ]
      },
      indicadores: [
        "Porcentaje de cambios liberados con despliegue escalonado.",
        "Radio de impacto máximo de un cambio: cuántos sistemas puede tumbar.",
        "RTO real medido en simulacro, no el RTO documentado.",
        "Concentración de proveedores críticos y existencia de alternativas.",
        "Cobertura de pruebas de regresión sobre rutas de excepción."
      ],
      preguntas: [
        "¿Qué controles de COBIT e ITIL habrían contenido este incidente? Sé específico con los objetivos.",
        "Explica por qué ejecutar en anillo 0 amplifica el radio de impacto y qué alternativas de arquitectura existían.",
        "La reversión tomó 78 minutos pero la recuperación tomó días. ¿Qué implica para el RTO de una organización cliente?",
        "Tu empresa tiene el mismo agente en todos sus equipos. Diseña el control que evite repetir esto y estima su costo."
      ],
      conecta: "Semana 4 · COBIT BAI06 y BAI07, ITIL, RTO/RPO, dependencia de proveedores. Semana 5 · pruebas y adecuación, puesta en operación, escenarios de disrupción."
    },

    /* ==================== DATOS, PUNTO DE VENTA Y APLICACIONES ==================== */
    {
      id: "farmacia-guadalajara",
      titulo: "Farmacias Guadalajara",
      subtitulo: "El punto de venta como nodo de varios procesos a la vez",
      categoria: "datos",
      semanas: [1, 2],
      patrones: ["Punto de venta", "Integración", "Reglas de negocio"],
      flujo: ["Identificación del producto", "Validación de reglas", "Cobro", "Actualización de inventario", "Comprobante"],
      contexto: "<p>Una venta que dura noventa segundos dispara varias cosas a la vez: descuenta inventario, aplica promociones, valida si el medicamento requiere receta, acumula puntos de lealtad, emite comprobante fiscal y alimenta el reabastecimiento de la sucursal.</p>",
      analisis:
        "<p>El punto de venta parece una actividad simple y es en realidad <b>el punto donde convergen cinco procesos distintos</b>. Es el mejor ejemplo del catálogo para explicar los cuatro dominios sobre una sola escena de dos minutos.</p>"
      + "<p><b>Negocio:</b> las reglas de promoción, la política de medicamentos controlados y el programa de lealtad. <b>Datos:</b> el catálogo de productos, el inventario, el cliente, el histórico de precios. <b>Aplicaciones:</b> el POS, el ERP, el sistema de lealtad, el emisor de comprobantes fiscales, el motor de reabastecimiento. <b>Tecnología:</b> la terminal, la red de la sucursal y la conectividad con el corporativo.</p>"
      + "<p>El requisito arquitectónico más exigente es la <b>operación degradada</b>. Si se cae el enlace, la farmacia no puede dejar de vender. Eso obliga a que el POS funcione localmente y sincronice después, lo cual introduce el problema difícil: <b>reconciliar</b>. Dos sucursales que venden el último medicamento del inventario centralizado mientras están desconectadas generan una inconsistencia que alguien tiene que resolver.</p>"
      + "<p>Los <b>medicamentos con receta</b> agregan una ruta con validación obligatoria. Es un control normativo — ENVA — que no se elimina, pero sí se puede optimizar: validar contra un padrón digital en lugar de revisar papel.</p>",
      cifras: {
        titulo: "Descomposición ilustrativa de una venta",
        encabezados: ["Sistema", "Qué hace", "¿Puede operar sin red?", "Riesgo si falla"],
        filas: [
          ["POS local", "Registra y cobra", "<b>Sí</b>", "La sucursal no vende"],
          ["ERP central", "Inventario y precios", "No", "Precios desactualizados"],
          ["Lealtad", "Acumula puntos", "No", "Puntos no acreditados"],
          ["Facturación electrónica", "Comprobante fiscal", "No", "Comprobante diferido"],
          ["Reabastecimiento", "Sugiere pedido", "No", "Quiebre de inventario"]
        ]
      },
      indicadores: [
        "Tiempo de la transacción en caja y su variabilidad.",
        "Exactitud del inventario: sistema contra conteo físico.",
        "Ventas realizadas en modo degradado y errores de reconciliación posterior.",
        "Disponibilidad del enlace por sucursal.",
        "Quiebres de inventario de productos de alta rotación."
      ],
      preguntas: [
        "Mapea esta venta a los cuatro dominios de arquitectura, con al menos dos elementos en cada uno.",
        "¿Por qué el POS debe operar sin red y qué problema nuevo introduce esa decisión?",
        "Dos sucursales desconectadas venden el mismo último producto. ¿Cómo diseñas la reconciliación?",
        "Clasifica la validación de receta en VA, ENVA o NVA y propón cómo optimizarla."
      ],
      conecta: "Semana 1 · los cuatro dominios sobre un caso concreto. Semana 2 · matriz proceso-aplicación e integración. Semana 4 · infraestructura y operación degradada."
    },

    {
      id: "carniceria-ramos",
      titulo: "Carnicería Ramos",
      subtitulo: "La misma arquitectura, a escala de negocio pequeño",
      categoria: "datos",
      semanas: [1, 2, 5],
      patrones: ["Punto de venta", "Inventario por peso", "Recursos limitados"],
      flujo: ["Compra a proveedor", "Recepción y pesaje", "Venta al cliente", "Cobro", "Registro de inventario", "Corte de caja"],
      contexto: "<p>Un negocio familiar vende producto por peso, con precio variable, merma diaria y pagos en efectivo, tarjeta y transferencia. El inventario se lleva a mano o en una hoja de cálculo y el corte de caja rara vez cuadra a la primera.</p>",
      analisis:
        "<p>Este caso vale por contraste: <b>los mismos problemas de arquitectura, sin presupuesto ni área de TI</b>. Enseña que la arquitectura empresarial no es un lujo corporativo sino una forma de pensar que escala hacia abajo.</p>"
      + "<p>La dificultad técnica es real y específica: el <b>inventario por peso con merma</b>. No se venden unidades sino kilos que cambian por deshuese, evaporación y recorte. Un inventario de piezas no modela esto, y por eso las hojas de cálculo nunca cuadran. <b>El problema es de modelo de datos, no de disciplina del dueño</b> — un matiz que los alumnos suelen pasar por alto y que cambia por completo la solución propuesta.</p>"
      + "<p>Los <b>pagos diversos</b> fragmentan la conciliación: efectivo en el cajón, tarjeta con depósito diferido y comisión, transferencias en el celular del dueño. Tres flujos que llegan en momentos distintos y que hay que casar contra una sola venta. Es el mismo problema de conciliación de adidas.com, con menos herramientas.</p>"
      + "<p>La discusión de <b>factibilidad</b> es la más honesta del catálogo: un sistema de punto de venta con báscula integrada resuelve casi todo, pero el análisis debe considerar factibilidad <b>operativa</b> —¿quién lo va a usar y con qué capacitación?— tanto como la económica. Muchas implantaciones en negocios pequeños fracasan ahí, no en el precio.</p>",
      cifras: {
        titulo: "Escenario ilustrativo mensual",
        encabezados: ["Concepto", "Valor", "Observación"],
        filas: [
          ["Ventas mensuales", "$420,000", "—"],
          ["Diferencia promedio en corte de caja", "$3,800", "0.9 % de la venta"],
          ["Merma no registrada estimada", "$11,000", "2.6 % de la venta"],
          ["Horas mensuales en conciliación manual", "18 h", "Del dueño"],
          ["Costo de POS con báscula integrada", "<b>$45,000</b>", "Inversión única"],
          ["Ahorro estimado si se reduce a la mitad", "<b>$7,400/mes</b>", "Recupera en ≈ 6 meses"]
        ]
      },
      indicadores: [
        "Diferencia en corte de caja como porcentaje de la venta.",
        "Merma registrada contra merma estimada.",
        "Tiempo del dueño dedicado a conciliación.",
        "Exactitud del inventario por producto.",
        "Quiebres de producto de alta rotación."
      ],
      preguntas: [
        "¿Por qué el inventario por peso no se modela igual que uno por piezas? ¿Qué implica para el diseño de datos?",
        "Con las cifras de la tabla, calcula el periodo de recuperación de la inversión y su ROI a 12 meses.",
        "Evalúa la factibilidad operativa de implantar el sistema. ¿Qué podría hacer que fracase aunque el ROI sea bueno?",
        "Aplica los cuatro dominios de arquitectura a este negocio. ¿Cambia algo respecto a una cadena grande?"
      ],
      conecta: "Semana 1 · los cuatro dominios a pequeña escala. Semana 2 · fragmentación y conciliación. Semana 5 · factibilidad operativa, ROI y payback."
    },

    {
      id: "autocobro",
      titulo: "Soriana, HEB, Walmart · autocobro",
      subtitulo: "Trasladar el trabajo al cliente: ¿mejora el proceso?",
      categoria: "datos",
      semanas: [1, 3, 5],
      patrones: ["Mover trabajo al cliente", "Rutas múltiples", "Control por excepción"],
      flujo: ["Selección de caja", "Escaneo por el cliente", "Verificación por excepción", "Pago", "Salida"],
      contexto: "<p>El supermercado instala cajas de autocobro. Un supervisor atiende varias estaciones y solo interviene cuando algo se detiene: producto sin código, artículo restringido por edad, o diferencia de peso en la báscula de control.</p>",
      analisis:
        "<p>La pregunta que hay que hacerle a los alumnos es incómoda y por eso es buena: <b>¿esto mejora el proceso o solo traslada su costo al cliente?</b> La respuesta honesta es que depende de qué se mida y para quién.</p>"
      + "<p>Desde la <b>capacidad</b>, un supervisor atendiendo seis estaciones multiplica los puntos de cobro sin multiplicar el personal. Desde el <b>tiempo de ciclo</b>, el cliente promedio escanea más lento que un cajero entrenado: la transacción individual <i>tarda más</i>. El sistema gana capacidad y el individuo pierde velocidad — dos indicadores que se mueven en direcciones opuestas, y por eso hay que declarar cuál se está optimizando.</p>"
      + "<p>El diseño depende del <b>control por excepción</b>: la báscula que compara el peso esperado contra el real, la validación de edad, el producto sin código. Cada excepción llama al supervisor, y si la tasa de excepción sube, <b>el supervisor se vuelve el cuello de botella</b> y toda la ventaja se evapora. Ese umbral es el corazón del diseño y se puede calcular.</p>"
      + "<p>La <b>segmentación</b> es lo que hace que funcione: el autocobro sirve para canastas pequeñas. Una compra de 60 artículos con productos a granel es un mal candidato. Es triage aplicado al frente de caja, y por eso las tiendas lo rotulan por número de artículos.</p>",
      cifras: {
        titulo: "Comparación ilustrativa de configuraciones",
        encabezados: ["Configuración", "Personal", "Puntos de cobro", "Tiempo por cliente", "Capacidad/hora"],
        filas: [
          ["6 cajas tradicionales", "6", "6", "3.2 min", "112 clientes"],
          ["<b>6 autocobros + 1 supervisor</b>", "<b>1</b>", "<b>6</b>", "<b>4.6 min</b>", "<b>78 clientes</b>"],
          ["3 tradicionales + 6 autocobros", "4", "9", "Mixto", "134 clientes"],
          ["<b>Si la excepción sube a 35 %</b>", "1", "6", "6.8 min", "<b>53 clientes</b>"]
        ]
      },
      indicadores: [
        "Tasa de intervención del supervisor por transacción.",
        "Tiempo por cliente en autocobro contra caja tradicional.",
        "Capacidad total del frente de caja por configuración.",
        "Merma y pérdida desconocida atribuible al autocobro.",
        "Satisfacción por segmento de cliente: canasta chica contra grande."
      ],
      preguntas: [
        "El tiempo por cliente sube y la capacidad del sistema también. ¿Cómo es posible? ¿Cuál indicador debería mandar?",
        "¿A partir de qué tasa de excepción el supervisor se vuelve el cuello de botella? Plantea el cálculo.",
        "¿Es esto automatización, digitalización o transformación digital? Defiende tu clasificación.",
        "Diseña la regla de segmentación: ¿qué compras mandas a autocobro y cuáles no?"
      ],
      conecta: "Semana 1 · automatización y traslado de trabajo. Semana 3 · capacidad, cuello de botella y rutas. Semana 5 · triage y VA/ENVA/NVA."
    },

    {
      id: "hospital-zambrano",
      titulo: "Hospital · expediente clínico",
      subtitulo: "El dato del paciente como columna vertebral del proceso",
      categoria: "datos",
      semanas: [1, 2, 4],
      patrones: ["Dato maestro", "Integración", "Cumplimiento normativo"],
      flujo: ["Admisión", "Triage", "Consulta o urgencia", "Estudios y laboratorio", "Tratamiento", "Alta", "Facturación"],
      contexto: "<p>Un paciente atraviesa admisión, consulta, laboratorio, imagen, farmacia y facturación. Cada área registra información y necesita la que generaron las demás. El expediente clínico es el hilo que conecta todo, y su calidad determina la del proceso completo.</p>",
      analisis:
        "<p>Aquí el <b>dato maestro no es un artefacto administrativo: es clínico</b>. Un expediente incompleto o duplicado no genera una molestia operativa — genera un riesgo para el paciente. Una alergia registrada en un sistema al que farmacia no tiene acceso es el ejemplo que vuelve tangible por qué la arquitectura de datos importa.</p>"
      + "<p>El problema clásico es la <b>duplicidad de identidad</b>: el mismo paciente registrado dos veces por una variación en el nombre o un dato mal capturado. Se fragmenta su historia, se repiten estudios ya hechos y se toman decisiones con información parcial. Es el caso de <i>cliente activo</i> del curso, con consecuencias mucho más serias.</p>"
      + "<p>El proceso es intensamente <b>cross-functional</b> y tiene rutas muy distintas: urgencia, consulta programada, cirugía, hospitalización. Cada una toca los mismos sistemas en orden distinto. Modelar solo la ruta feliz de la consulta programada deja fuera lo que realmente consume capacidad.</p>"
      + "<p>El <b>cumplimiento normativo</b> es una restricción de diseño de primer orden: la NOM del expediente clínico y la protección de datos personales definen qué se registra, cuánto se conserva y quién puede consultarlo. Aquí <b>ISO/IEC 27001 y los controles de acceso no son opcionales</b>, y el diseño de la arquitectura de aplicaciones tiene que partir de ellos, no acomodarlos al final.</p>",
      cifras: {
        titulo: "Escenario ilustrativo de calidad del expediente",
        encabezados: ["Indicador", "Situación actual", "Meta", "Impacto"],
        filas: [
          ["Expedientes duplicados", "3.4 %", "&lt; 0.5 %", "Historia fragmentada"],
          ["Estudios repetidos por falta de acceso", "6 %", "&lt; 1 %", "Costo y molestia"],
          ["Tiempo de admisión", "14 min", "6 min", "Recaptura de datos"],
          ["Notas médicas incompletas al alta", "18 %", "&lt; 5 %", "Riesgo clínico y facturación"],
          ["Lead time de admisión a alta (consulta)", "2.8 h", "1.9 h", "Capacidad liberada"]
        ]
      },
      indicadores: [
        "Tasa de expedientes duplicados y de fusiones realizadas.",
        "Estudios repetidos por información no disponible.",
        "Tiempo de admisión y cuántas veces se recaptura el mismo dato.",
        "Completitud de la nota médica al momento del alta.",
        "Accesos al expediente fuera de perfil autorizado."
      ],
      preguntas: [
        "¿Por qué la duplicidad de expediente es un problema clínico y no solo administrativo?",
        "Diseña la regla de identidad única del paciente. ¿Qué datos la componen y quién es el dueño del dato?",
        "Modela las rutas de urgencia y consulta programada. ¿En qué se parecen y en qué no?",
        "¿Qué exigen ISO/IEC 27001 y la normativa de datos personales al diseño de la arquitectura de aplicaciones aquí?"
      ],
      conecta: "Semana 1 · dominio de datos y proceso cross-functional. Semana 2 · integración y dato maestro único. Semana 4 · normas, seguridad y control de acceso."
    }
  ],

  practica: {

    calculos: [
      {
        tema: "Starbucks · capacidad",
        titulo: "¿Dónde está el cuello de botella y cuánto sube si lo elevas?",
        enunciado: "En hora pico: el <b>cajero</b> tarda 45 s por orden y hay 2; el <b>barista</b> tarda 110 s y hay 2; la <b>entrega en barra</b> tarda 15 s y hay 1. Calcula la capacidad por hora de cada recurso.",
        preguntas: [
          { etiqueta: "Capacidad del cajero", respuesta: 160, unidad: "órdenes/h", tolerancia: 1,
            pista: "(unidades / tiempo por orden) × 3600" },
          { etiqueta: "Capacidad del barista", respuesta: 65.45, unidad: "órdenes/h", tolerancia: 0.6 },
          { etiqueta: "Capacidad de la entrega", respuesta: 240, unidad: "órdenes/h", tolerancia: 1 },
          { etiqueta: "Capacidad del proceso", respuesta: 65.45, unidad: "órdenes/h", tolerancia: 0.6 },
          { etiqueta: "Capacidad si contratas un tercer barista", respuesta: 98.18, unidad: "órdenes/h", tolerancia: 0.6 }
        ],
        solucion:
          '<div class="paso-calc">Cajero  : (2 / 45)  × 3600 = <span class="resaltado">160.0 órdenes/h</span>\nBarista : (2 / 110) × 3600 = <span class="resaltado">65.5 órdenes/h</span>  ← mínimo\nEntrega : (1 / 15)  × 3600 = <span class="resaltado">240.0 órdenes/h</span>\n\nCapacidad del proceso = mín(160, 65.5, 240) = <span class="resaltado">65.5 órdenes/h</span>\n\nCon 3 baristas: (3 / 110) × 3600 = <span class="resaltado">98.2 órdenes/h</span></div>'
          + "<p><b>Lo que hay que ver.</b> Contratar un cajero más no mueve ni una orden: el cajero ya rinde 160 contra 65 del barista. Toda la inversión debe ir a la restricción.</p>"
          + "<p>Y nota que al elevar el barista a 98 órdenes/h <b>el cuello de botella sigue siendo él</b> — todavía por debajo de 160 y 240. Con un cuarto barista llegaría a 131 y ahí seguiría mandando. Esta es la excepción a la regla de que el cuello se desplaza: cuando la brecha es muy amplia, hace falta más de un paso para moverlo.</p>"
      },
      {
        tema: "Ford · takt y rebalanceo",
        titulo: "¿La línea cumple la demanda?",
        enunciado: "La línea tiene 6 estaciones con tiempos de 52, 61, 58, <b>68</b>, 47 y 39 segundos. El turno es de <b>8 horas</b> netas y la demanda es de <b>480 unidades</b> al día.",
        preguntas: [
          { etiqueta: "Takt time requerido", respuesta: 60, unidad: "s/unidad", tolerancia: 0.5,
            pista: "Tiempo neto disponible / demanda" },
          { etiqueta: "Tiempo de ciclo de la línea", respuesta: 68, unidad: "s/unidad", tolerancia: 0.5 },
          { etiqueta: "Capacidad actual del turno", respuesta: 423.5, unidad: "unidades", tolerancia: 2 },
          { etiqueta: "Capacidad si mueves 8 s de la estación 4 a la 6", respuesta: 472.1, unidad: "unidades", tolerancia: 3,
            pista: "¿Qué estación queda como la más lenta después del movimiento?" }
        ],
        solucion:
          '<div class="paso-calc">Takt = (8 × 3600) / 480 = 28,800 / 480 = <span class="resaltado">60 s/unidad</span>\nTiempo de ciclo de la línea = la estación más lenta = <span class="resaltado">68 s</span>\n\n68 &gt; 60  →  la línea NO cumple la demanda\n\nCapacidad = 28,800 / 68 = <span class="resaltado">423.5 unidades</span>   (faltan 57)\n\nRebalanceo: estación 4 pasa de 68 a 60 s, estación 6 de 39 a 47 s\n  Nuevos tiempos: 52, 61, 58, 60, 47, 47\n  Nueva estación más lenta = <span class="resaltado">61 s (estación 2)</span>\n  Capacidad = 28,800 / 61 = <span class="resaltado">472.1 unidades</span></div>'
          + "<p><b>El desplazamiento del cuello de botella, en vivo.</b> Al arreglar la estación 4 la restricción se mudó a la estación 2, que antes era invisible. Y con 472 unidades <b>todavía no se alcanzan las 480</b>: hace falta otra iteración. Ese es el quinto paso de la teoría de restricciones, y por eso el rebalanceo se hace en ciclos y no de una vez.</p>"
      },
      {
        tema: "McDonald's · ley de Little",
        titulo: "¿Cuántos pedidos deben estar en proceso a la vez?",
        enunciado: "El tiempo de ciclo de un pedido es de <b>190 segundos</b> de principio a fin. En hora pico la demanda es de <b>120 pedidos por hora</b>.",
        preguntas: [
          { etiqueta: "Takt time", respuesta: 30, unidad: "s/pedido", tolerancia: 0.5 },
          { etiqueta: "Pedidos simultáneos en proceso (WIP)", respuesta: 6.33, unidad: "pedidos", tolerancia: 0.15,
            pista: "WIP = Throughput × Lead time, con unidades consistentes" }
        ],
        solucion:
          '<div class="paso-calc">Takt = 3600 / 120 = <span class="resaltado">30 s por pedido</span>\n\nThroughput = 120 / 3600 = 0.0333 pedidos por segundo\nWIP = Throughput × Lead time = 0.0333 × 190 = <span class="resaltado">6.33 pedidos</span></div>'
          + "<p><b>Cómo se lee.</b> Un pedido tarda 190 s, pero sale uno cada 30 s: la única forma de que ambas cosas sean ciertas es que haya <b>entre 6 y 7 pedidos avanzando a la vez</b> en distintas etapas. Eso dimensiona la cocina: cuántas estaciones, cuánto espacio de ensamble, cuántas charolas en preparación.</p>"
          + "<p>Es el error más común al comparar tiempo de ciclo contra takt: parecen incompatibles (190 &gt; 30) y no lo son, porque el proceso corre en paralelo. La ley de Little es lo que reconcilia ambos números.</p>"
      },
      {
        tema: "Mesa de servicio · ley de Little",
        titulo: "¿Se puede cumplir el SLA con este WIP?",
        enunciado: "La mesa cierra <b>24 tickets por hora</b> y tiene <b>168 tickets abiertos</b>. El SLA promete resolución en <b>4 horas</b> y la capacidad del equipo no cambiará.",
        preguntas: [
          { etiqueta: "Lead time actual", respuesta: 7, unidad: "h", tolerancia: 0.05 },
          { etiqueta: "WIP máximo para cumplir el SLA", respuesta: 96, unidad: "tickets", tolerancia: 0.5 },
          { etiqueta: "Reducción necesaria de WIP", respuesta: 72, unidad: "tickets", tolerancia: 0.5 }
        ],
        solucion:
          '<div class="paso-calc">Lead time = WIP / Throughput = 168 / 24 = <span class="resaltado">7 horas</span>   (SLA: 4 h)\n\nWIP objetivo = Throughput × SLA = 24 × 4 = <span class="resaltado">96 tickets</span>\nReducción = 168 − 96 = <span class="resaltado">72 tickets</span></div>'
          + "<p>Con la capacidad actual el SLA se cumple <b>controlando la entrada</b>, no apurando a los técnicos: filtrar en primer contacto, cerrar tickets zombis, desviar al autoservicio, poner un límite explícito de WIP. Todo eso es gratis frente a contratar.</p>"
      },
      {
        tema: "OXXO Gas · retrabajo",
        titulo: "El costo del retrabajo que paga el cliente",
        enunciado: "Capturar la factura en el portal toma <b>8 minutos</b> y el <b>25 %</b> de los intentos falla y hay que repetir. La estación emite <b>1,400 facturas al mes</b>.",
        preguntas: [
          { etiqueta: "Tiempo esperado con una sola repetición", respuesta: 10, unidad: "min", tolerancia: 0.1 },
          { etiqueta: "Tiempo esperado con repeticiones ilimitadas", respuesta: 10.67, unidad: "min", tolerancia: 0.1 },
          { etiqueta: "Horas de cliente consumidas al mes (una repetición)", respuesta: 233.3, unidad: "h", tolerancia: 2 }
        ],
        solucion:
          '<div class="paso-calc">Una repetición    : (1 + 0.25) × 8 = <span class="resaltado">10.0 min</span>\nRepeticiones ilim.: 8 / (1 − 0.25) = <span class="resaltado">10.67 min</span>\n\nHoras de cliente = 1,400 × 10 / 60 = <span class="resaltado">233 horas al mes</span></div>'
          + "<p><b>Por qué este caso es especial.</b> Esas 233 horas mensuales no aparecen en ningún indicador de la empresa: las paga el cliente. Un análisis de eficiencia interna nunca detectaría el problema, y por eso el valor se analiza desde la perspectiva del cliente y no solo desde el costo propio.</p>"
      },
      {
        tema: "Autocobro · capacidad",
        titulo: "¿A partir de qué punto el autocobro deja de convenir?",
        enunciado: "Seis cajas tradicionales atienden un cliente cada <b>3.2 min</b>. Seis autocobros con un supervisor atienden uno cada <b>4.6 min</b>. Si la tasa de excepción sube, el tiempo por cliente llega a <b>6.8 min</b>.",
        preguntas: [
          { etiqueta: "Capacidad de 6 cajas tradicionales", respuesta: 112.5, unidad: "clientes/h", tolerancia: 1 },
          { etiqueta: "Capacidad de 6 autocobros", respuesta: 78.3, unidad: "clientes/h", tolerancia: 1 },
          { etiqueta: "Capacidad con excepción alta", respuesta: 52.9, unidad: "clientes/h", tolerancia: 1 },
          { etiqueta: "Personal ahorrado con autocobro", respuesta: 5, unidad: "personas", tolerancia: 0.5 }
        ],
        solucion:
          '<div class="paso-calc">Tradicional : 6 × (60 / 3.2) = <span class="resaltado">112.5 clientes/h</span>  con 6 personas\nAutocobro   : 6 × (60 / 4.6) = <span class="resaltado">78.3 clientes/h</span>   con 1 persona\nExcepción alta: 6 × (60 / 6.8) = <span class="resaltado">52.9 clientes/h</span>\n\nAhorro de personal = 6 − 1 = <span class="resaltado">5 personas</span></div>'
          + "<p><b>El resultado incómodo:</b> el autocobro entrega <b>menos capacidad</b> (78 contra 112) con mucho menos personal. Si el objetivo es atender el pico, no sustituye a las cajas tradicionales; si el objetivo es costo por transacción, gana con claridad.</p>"
          + "<p>Y si la tasa de excepción se dispara, la capacidad cae a 53 y el supervisor se vuelve el cuello de botella. Por eso la segmentación por tamaño de canasta no es una comodidad: <b>es lo que mantiene baja la tasa de excepción</b> y hace que el diseño funcione.</p>"
      },
      {
        tema: "Carnicería · evaluación de inversión",
        titulo: "¿Conviene el punto de venta con báscula?",
        enunciado: "El negocio pierde <b>$3,800</b> mensuales en diferencias de caja y <b>$11,000</b> en merma no registrada. Un POS con báscula integrada cuesta <b>$45,000</b> y se estima que reduce ambos conceptos a la mitad.",
        preguntas: [
          { etiqueta: "Pérdida mensual actual", respuesta: 14800, unidad: "$", tolerancia: 100 },
          { etiqueta: "Ahorro mensual estimado", respuesta: 7400, unidad: "$", tolerancia: 100 },
          { etiqueta: "Periodo de recuperación", respuesta: 6.08, unidad: "meses", tolerancia: 0.2 },
          { etiqueta: "ROI a 12 meses", respuesta: 97.33, unidad: "%", tolerancia: 1.5 }
        ],
        solucion:
          '<div class="paso-calc">Pérdida actual = 3,800 + 11,000 = <span class="resaltado">$14,800/mes</span>\nAhorro estimado = 14,800 / 2 = <span class="resaltado">$7,400/mes</span>\n\nPayback = 45,000 / 7,400 = <span class="resaltado">6.1 meses</span>\nROI 12 m = (7,400 × 12 − 45,000) / 45,000\n         = (88,800 − 45,000) / 45,000 = <span class="resaltado">97.3 %</span></div>'
          + "<p>Los números son excelentes y aun así <b>el proyecto puede fracasar</b>: la factibilidad operativa es la que decide. ¿Quién captura los productos al recibirlos? ¿Quién mantiene el catálogo de precios? ¿El personal sabe usarlo?</p>"
          + "<p>El supuesto de «reduce a la mitad» también hay que declararlo: si solo reduce un 25 %, el payback se va a 12 meses. Ese es el análisis de sensibilidad que convierte un cálculo en una recomendación."
      },
      {
        tema: "Costco · retrabajo rentable",
        titulo: "¿Hasta dónde aguanta la política de devoluciones?",
        enunciado: "Cada socio hace <b>24 transacciones</b> al año con ticket promedio de <b>$1,850</b>. La tasa de devolución es del <b>2.8 %</b> y procesar cada una cuesta <b>$140</b>. La membresía anual es de <b>$900</b>.",
        preguntas: [
          { etiqueta: "Costo anual de devoluciones por socio", respuesta: 94.08, unidad: "$", tolerancia: 2 },
          { etiqueta: "Margen que queda de la membresía", respuesta: 805.92, unidad: "$", tolerancia: 3 },
          { etiqueta: "Tasa de devolución de equilibrio", respuesta: 26.79, unidad: "%", tolerancia: 1,
            pista: "¿Con qué tasa el costo de devoluciones iguala la membresía?" }
        ],
        solucion:
          '<div class="paso-calc">Costo por socio = 24 × 0.028 × 140 = <span class="resaltado">$94.08 al año</span>\nMargen restante = 900 − 94.08 = <span class="resaltado">$805.92</span>\n\nTasa de equilibrio: 24 × r × 140 = 900\n  r = 900 / 3,360 = <span class="resaltado">26.8 %</span></div>'
          + "<p><b>La lección contraintuitiva.</b> La tasa de devolución podría multiplicarse casi por diez —de 2.8 % a 26.8 %— antes de que la membresía deje de cubrir el costo. Con ese margen, apretar la política para bajar del 2.8 % es optimización local que arriesga el ingreso recurrente.</p>"
          + "<p>Es el mejor recordatorio del curso de que <b>eliminar desperdicio no es un fin en sí mismo</b>: hay que evaluar el efecto sobre el negocio completo, no la eficiencia de un proceso aislado.</p>"
      }
    ],

    escenarios: [
      {
        escenario: "La caja de un café atiende una orden cada 45 segundos con dos cajeros; el barista tarda 110 segundos y también son dos. La gerencia propone contratar un tercer cajero para reducir la fila.",
        pregunta: "¿Qué predice la teoría de restricciones?",
        opciones: [
          "La capacidad del proceso no cambia: solo se forma más gente esperando en la barra",
          "La capacidad sube proporcionalmente al número de cajeros",
          "El tiempo de ciclo por orden baja a un tercio",
          "El cuello de botella se mueve a la entrega en barra"
        ],
        correcta: 0,
        explicacion: "El cajero rinde 160 órdenes/h y el barista 65. Invertir en un recurso que no es la restricción no agrega throughput; solo acumula inventario —clientes— frente al cuello de botella.",
        porQueNo: {
          1: "La capacidad del sistema es la de su restricción, no la suma de sus recursos.",
          2: "Más cajeros no aceleran la preparación de la bebida.",
          3: "La entrega rinde 240/h; está muy lejos de ser la restricción."
        }
      },
      {
        escenario: "Un banco cambia de una fila por ventanilla a una sola fila que alimenta a todas. Son los mismos cuatro cajeros y la misma demanda, pero la espera promedio baja 35 % y el peor caso baja 46 %.",
        pregunta: "¿De dónde sale la mejora?",
        opciones: [
          "Un pool compartido absorbe mejor la variabilidad: ningún cliente queda atrapado detrás de una operación larga mientras otra ventanilla se desocupa",
          "La capacidad aumentó porque los cajeros trabajan más rápido en unifila",
          "Se redujo el tiempo de procesamiento de cada operación",
          "Es solo percepción: el tiempo real es idéntico"
        ],
        correcta: 0,
        explicacion: "Es teoría de colas. El cálculo de capacidad del pool supone que cualquier unidad del recurso puede atender cualquier trabajo; las filas independientes rompen ese supuesto y rinden menos.",
        porQueNo: {
          1: "La capacidad no cambió: son los mismos cajeros con los mismos tiempos.",
          2: "El tiempo de atención por operación es el mismo.",
          3: "La percepción mejora también, pero la reducción medida del percentil 95 es real."
        }
      },
      {
        escenario: "Un pastel debe enfriarse 40 minutos antes de decorarse. El consultor propone eliminar esa espera porque «no agrega valor».",
        pregunta: "¿Cómo evalúas la propuesta?",
        opciones: [
          "Es ENVA, no NVA: es una restricción física del producto. No se elimina, se optimiza con tecnología o se oculta secuenciando otro pedido",
          "Tiene razón: toda espera es desperdicio y debe eliminarse",
          "Es NVA y se elimina decorando el pastel caliente",
          "Es VA porque el cliente paga por un pastel bien decorado"
        ],
        correcta: 0,
        explicacion: "Confundir una restricción física con una ineficiencia organizacional lleva a proponer mejoras imposibles. Un abatidor reduce el enfriado; eliminarlo destruye el producto.",
        porQueNo: {
          1: "El dogma «toda espera es desperdicio» es una mala lectura de Lean.",
          2: "Decorar caliente derrite la cubierta: no es una opción.",
          3: "El enfriado no transforma el producto de forma que el cliente pague por él por separado."
        }
      },
      {
        escenario: "Un súper en línea tarda mucho en surtir pedidos. Al investigar, resulta que el 38 % de los pedidos requiere sustitución o cancelación porque el producto no está, aunque el sitio lo mostraba disponible.",
        pregunta: "¿Cuál es la causa raíz y a qué dominio pertenece?",
        opciones: [
          "El dato de inventario no refleja la existencia física: es un problema del dominio de datos, no del flujo de surtido",
          "Los surtidores son lentos: es un problema de capacidad del dominio de negocio",
          "Falta automatizar el surtido: es un problema del dominio de aplicaciones",
          "La red de la tienda es lenta: es un problema del dominio tecnológico"
        ],
        correcta: 0,
        explicacion: "Ninguna mejora del flujo de surtido resuelve el problema si el dato de existencias miente. Es un síntoma en un dominio cuya causa vive en otro.",
        porQueNo: {
          1: "Acelerar a los surtidores no evita que el producto no esté.",
          2: "Automatizar sobre un dato incorrecto reproduce el error más rápido.",
          3: "La velocidad de red no explica la discrepancia de inventario."
        }
      },
      {
        escenario: "Una actualización de software se distribuye simultáneamente a todos los clientes del mundo. Un defecto en el archivo provoca que millones de equipos no arranquen.",
        pregunta: "¿Qué control de gobierno habría contenido el daño?",
        opciones: [
          "Despliegue escalonado por anillos: liberar primero a un grupo pequeño, observar y solo entonces ampliar",
          "Aumentar la frecuencia de actualizaciones para que cada una sea más pequeña",
          "Contratar un segundo proveedor de seguridad",
          "Mejorar el plan de comunicación a clientes durante el incidente"
        ],
        correcta: 0,
        explicacion: "Es lo que exigen COBIT BAI06 y BAI07 y la gestión de cambios de ITIL. Un canary de mil equipos habría contenido el daño en mil equipos en lugar de 8.5 millones.",
        porQueNo: {
          1: "Más frecuencia sin escalonamiento multiplica las oportunidades de fallar globalmente.",
          2: "Diversificar reduce concentración a largo plazo, pero no contiene este despliegue.",
          3: "Comunicar bien mitiga la percepción, no el impacto operativo."
        }
      },
      {
        escenario: "Una planta procesadora descubre que una impresora de etiquetas de bajo costo, al fallar, detiene la línea completa porque el producto perecedero no puede embarcarse sin identificación.",
        pregunta: "¿Qué revela sobre la gestión de activos?",
        opciones: [
          "La criticidad la define el impacto en el proceso de negocio, no el costo del activo",
          "Hay que reemplazar la impresora por un modelo de gama alta",
          "El ERP debería asumir la función de etiquetado",
          "Es un problema de mantenimiento preventivo, no de arquitectura"
        ],
        correcta: 0,
        explicacion: "Un inventario ordenado por costo pondría el ERP arriba y la impresora abajo; un análisis de impacto al negocio los pone juntos. Aquí conectan BAI09, BAI10 y BAI04 de COBIT.",
        porQueNo: {
          1: "Un equipo más caro sigue siendo un punto único de falla.",
          2: "Mover la función no elimina la dependencia del dispositivo físico.",
          3: "El mantenimiento ayuda, pero la decisión de redundancia es de arquitectura."
        }
      },
      {
        escenario: "Un supermercado instala seis cajas de autocobro con un supervisor. El tiempo por cliente sube de 3.2 a 4.6 minutos, pero el frente de caja opera con una persona en lugar de seis.",
        pregunta: "¿Cómo se evalúa correctamente?",
        opciones: [
          "Hay que declarar qué se optimiza: el costo por transacción mejora mucho, la capacidad en el pico empeora",
          "Es una mejora clara porque reduce personal",
          "Es un retroceso porque el tiempo por cliente aumentó",
          "No se puede evaluar sin conocer la satisfacción del cliente"
        ],
        correcta: 0,
        explicacion: "Dos indicadores se mueven en direcciones opuestas. La respuesta depende del objetivo declarado, y presentar solo el que conviene es lo que destruye la credibilidad de un análisis.",
        porQueNo: {
          1: "Reducir personal no es un beneficio si no se cumple la demanda del pico.",
          2: "El tiempo individual empeora pero el costo por transacción mejora sustancialmente.",
          3: "La satisfacción importa, pero con los datos dados ya se puede evaluar capacidad y costo."
        }
      },
      {
        escenario: "Un cliente carga combustible, recibe un ticket y después debe entrar a un portal a capturar los datos del ticket y los suyos para obtener factura. El 25 % de los intentos falla.",
        pregunta: "¿Cuál es el diagnóstico de arquitectura?",
        opciones: [
          "El mismo dato se captura dos veces porque el punto de venta y la facturación no comparten la transacción: hay que capturar una sola vez, en el origen",
          "El portal necesita mejor diseño de interfaz para reducir errores del usuario",
          "Hay que capacitar a los clientes en el llenado correcto de datos fiscales",
          "El proceso está bien: la responsabilidad fiscal es del cliente"
        ],
        correcta: 0,
        explicacion: "Es captura duplicada, uno de los desperdicios clásicos. El TO-BE identifica al cliente en el momento de la carga y emite la factura automáticamente — el mismo principio del portal de proveedores.",
        porQueNo: {
          1: "Mejorar la interfaz reduce algunos errores pero conserva la doble captura.",
          2: "Capacitar a miles de clientes no es una solución de proceso viable.",
          3: "El costo trasladado al cliente sigue siendo un costo del proceso, aunque no aparezca en los indicadores internos."
        }
      },
      {
        escenario: "Un hospital detecta que el 3.4 % de sus pacientes tiene expediente duplicado por variaciones en el nombre o errores de captura.",
        pregunta: "¿Por qué esto es más grave que un problema administrativo?",
        opciones: [
          "La historia clínica se fragmenta: se repiten estudios y se toman decisiones médicas con información parcial",
          "Aumenta el costo de almacenamiento de la base de datos",
          "Complica la facturación al final del episodio",
          "Dificulta el conteo de pacientes atendidos para los reportes"
        ],
        correcta: 0,
        explicacion: "Es el caso de «cliente activo» del curso con consecuencias clínicas. Una alergia registrada en un expediente al que farmacia no accede es un riesgo directo para el paciente.",
        porQueNo: {
          1: "El costo de almacenamiento es despreciable frente al riesgo clínico.",
          2: "La facturación se afecta, pero es la consecuencia menor.",
          3: "La estadística importa, pero no es lo que pone en riesgo al paciente."
        }
      },
      {
        escenario: "Una clínica pasa de atención por turno a citas con hora asignada. La capacidad instalada no cambió, pero el tiempo de espera del paciente bajó de forma notable.",
        pregunta: "¿Cuál es el mecanismo?",
        opciones: [
          "La cita distribuye las llegadas y aplana el pico, lo que permite operar cerca de la capacidad sin generar cola",
          "La cita aumenta la capacidad de atención de la clínica",
          "Los médicos atienden más rápido cuando saben quién viene",
          "Se redujo el tiempo de procesamiento de cada consulta"
        ],
        correcta: 0,
        explicacion: "Es control de la demanda. El pico es lo que genera cola; al aplanarlo, la misma capacidad rinde mucho más en términos de espera percibida.",
        porQueNo: {
          1: "La capacidad instalada es la misma: mismos consultorios y mismo personal.",
          2: "La velocidad de atención no cambia por conocer la agenda.",
          3: "El tiempo de consulta se mantiene; lo que cambia es cuándo llegan los pacientes."
        }
      }
    ],

    clasificar: [
      {
        consigna: "Clasifica cada caso según el patrón dominante que ilustra.",
        categorias: ["Cuello de botella", "Rutas múltiples", "Retrabajo", "Continuidad de TI"],
        items: [
          { texto: "Starbucks · la barra acumula gente", categoria: "Cuello de botella" },
          { texto: "Ford · la estación más lenta impone el ritmo", categoria: "Cuello de botella" },
          { texto: "Banamex · unifila contra filas independientes", categoria: "Cuello de botella" },
          { texto: "Telcel · trámites de 3 y de 42 minutos", categoria: "Rutas múltiples" },
          { texto: "adidas.com · cada método de pago con su tiempo", categoria: "Rutas múltiples" },
          { texto: "VivaAerobus · con o sin equipaje, en línea o en aeropuerto", categoria: "Rutas múltiples" },
          { texto: "OXXO Gas · 25 % de facturas hay que rehacerlas", categoria: "Retrabajo" },
          { texto: "Costco · la devolución revierte la transacción", categoria: "Retrabajo" },
          { texto: "CrowdStrike · 8.5 millones de equipos sin arrancar", categoria: "Continuidad de TI" },
          { texto: "Procesadora · la impresora detiene la línea", categoria: "Continuidad de TI" }
        ],
        explicacion: "Reconocer el patrón es el primer paso del diagnóstico: cada uno se calcula con una regla distinta y se ataca con una herramienta distinta."
      },
      {
        consigna: "Cada caso tiene una causa raíz en un dominio de arquitectura. Clasifícalos.",
        categorias: ["Negocio (proceso y reglas)", "Datos", "Aplicaciones", "Tecnología"],
        items: [
          { texto: "Inscripciones · la decisión de abrir grupo tarda 5 días", categoria: "Negocio (proceso y reglas)" },
          { texto: "Toyota · mezclar servicio programado con reparación incierta", categoria: "Negocio (proceso y reglas)" },
          { texto: "Súper en línea · el inventario del sitio no coincide con el físico", categoria: "Datos" },
          { texto: "Hospital · expedientes duplicados del mismo paciente", categoria: "Datos" },
          { texto: "Carnicería · el inventario por peso no se modela como piezas", categoria: "Datos" },
          { texto: "OXXO Gas · el POS y la facturación no comparten la transacción", categoria: "Aplicaciones" },
          { texto: "Farmacia · el POS debe vender sin enlace y reconciliar después", categoria: "Aplicaciones" },
          { texto: "Procesadora · báscula e impresora sin respaldo", categoria: "Tecnología" },
          { texto: "CrowdStrike · el agente corre en anillo 0 del sistema operativo", categoria: "Tecnología" }
        ],
        explicacion: "El síntoma casi nunca aparece en el dominio donde vive la causa. Ese diagnóstico cruzado es exactamente lo que aporta la arquitectura empresarial."
      },
      {
        consigna: "Clasifica cada iniciativa según el nivel de cambio que representa.",
        categorias: ["Digitalización", "Automatización", "Transformación digital"],
        items: [
          { texto: "Kiosco que reemplaza al cajero para tomar el pedido", categoria: "Digitalización" },
          { texto: "Portal donde el cliente teclea los datos de su ticket", categoria: "Digitalización" },
          { texto: "Check-in en línea con pase de abordar en el celular", categoria: "Digitalización" },
          { texto: "Escalamiento automático de tickets por tiempo transcurrido", categoria: "Automatización" },
          { texto: "Freidora con temporizador que avisa y se apaga sola", categoria: "Automatización" },
          { texto: "Regla que cierra grupos con baja inscripción sin intervención", categoria: "Automatización" },
          { texto: "Citas con atención sincronizada y resultado en línea", categoria: "Transformación digital" },
          { texto: "Plataforma que coordina cliente, comercio y repartidor", categoria: "Transformación digital" },
          { texto: "Asignación de conductor y precio dinámico en tiempo real", categoria: "Transformación digital" }
        ],
        explicacion: "Digitalizar cambia el medio; automatizar hace que el sistema ejecute la actividad; transformar cambia capacidades, experiencia o modelo de negocio. El kiosco es el ejemplo más discutible y por eso es el mejor para debatir."
      }
    ],

    opcionMultiple: [
      {
        tema: "Diagnóstico",
        pregunta: "En el caso de Starbucks, ¿por qué el pedido por app no aumenta la capacidad del local?",
        opciones: [
          "Porque la restricción es el barista, y el pedido por app solo cambia dónde y cómo se espera",
          "Porque la app tiene un límite técnico de pedidos por hora",
          "Porque los clientes de app tienen prioridad sobre los presenciales",
          "Sí la aumenta: cada pedido por app libera tiempo del barista"
        ],
        correcta: 0,
        explicacion: "La app actúa sobre el frente del proceso, no sobre la restricción. Mejora la experiencia —el cliente espera en otro lado— sin tocar el throughput.",
        porQueNo: {
          1: "El límite no es técnico sino de capacidad de preparación.",
          2: "La prioridad redistribuye la espera, no crea capacidad.",
          3: "El barista debe preparar la bebida igual, venga de donde venga el pedido."
        }
      },
      {
        tema: "Diagnóstico",
        pregunta: "El proceso de inscripciones tiene 60 minutos de trabajo real y 8 días de lead time. ¿Qué NO tiene sentido atacar primero?",
        opciones: [
          "Acelerar la captura del alumno en el formulario de inscripción",
          "Automatizar la decisión de apertura y cierre de grupos",
          "Paralelizar la validación de pago con la inscripción",
          "Escalonar la demanda por generación para aplanar el pico"
        ],
        correcta: 0,
        explicacion: "Con una eficiencia de ciclo del 0.5 %, optimizar los 60 minutos de trabajo real no mueve el indicador. El problema está en las esperas y en las decisiones secuenciales.",
        porQueNo: {
          1: "Los 5 días de espera por esa decisión son el mayor componente del lead time.",
          2: "Eliminar una dependencia falsa quita 24 h de bloqueo.",
          3: "Aplanar el pico ataca la saturación y es de las palancas más baratas."
        }
      },
      {
        tema: "Valor",
        pregunta: "Costco podría bajar su tasa de devolución endureciendo la política. ¿Por qué no lo hace?",
        opciones: [
          "Porque la devolución fácil sostiene la renovación de membresía, y el costo del retrabajo se paga con creces",
          "Porque la ley se lo impide",
          "Porque no tiene forma de identificar a quien abusa",
          "Porque el costo de procesar devoluciones es cero"
        ],
        correcta: 0,
        explicacion: "Con 2.8 % de devolución el costo por socio es de $94 contra $900 de membresía. La tasa podría llegar a 26.8 % antes de dejar de convenir.",
        porQueNo: {
          1: "Ninguna ley obliga a una política de devolución tan amplia.",
          2: "La membresía es precisamente lo que permite identificar el comportamiento.",
          3: "El costo existe: mano de obra, inventario y merma."
        }
      },
      {
        tema: "Lead time",
        pregunta: "En adidas.com, un cliente paga con referencia en efectivo y otro con tarjeta. ¿Qué diferencia hay para el proceso?",
        opciones: [
          "El lead time del pedido cambia por completo: segundos contra hasta 72 horas de confirmación",
          "Ninguna: el pedido se prepara igual en ambos casos",
          "Solo cambia la comisión que paga la empresa",
          "El pago en efectivo tiene mayor riesgo de fraude"
        ],
        correcta: 0,
        explicacion: "El método de pago es una compuerta exclusiva con rutas de tiempos radicalmente distintos, y eso hay que comunicárselo al cliente antes de que compre.",
        porQueNo: {
          1: "La preparación no puede iniciar hasta que el pago se confirme.",
          2: "La comisión cambia, pero el efecto grande es sobre el tiempo.",
          3: "El efectivo prepagado tiene, si acaso, menor riesgo de contracargo."
        }
      },
      {
        tema: "Continuidad",
        pregunta: "En el incidente de CrowdStrike, la reversión tomó 78 minutos pero muchas organizaciones tardaron días en recuperarse. ¿Qué enseña?",
        opciones: [
          "La velocidad de reversa del proveedor no es la velocidad de recuperación del cliente: el RTO propio debe medirse con la remediación real",
          "Que el proveedor actuó con lentitud",
          "Que las organizaciones no tenían respaldos",
          "Que Windows es más frágil que otros sistemas operativos"
        ],
        correcta: 0,
        explicacion: "Recuperar cada equipo requería arrancar en modo seguro y borrar un archivo a mano, con claves de BitLocker de por medio. Un plan de continuidad que confunda ambas velocidades está mal hecho.",
        porQueNo: {
          1: "78 minutos para detectar, diagnosticar y revertir globalmente es rápido.",
          2: "Los respaldos no ayudan cuando el equipo no arranca por un archivo de un agente.",
          3: "El fallo estuvo en el contenido del agente, no en el sistema operativo."
        }
      },
      {
        tema: "Capacidad",
        pregunta: "En Salud Digna el cuello de botella es la toma de muestra por la mañana y el laboratorio por la tarde. ¿Qué implica?",
        opciones: [
          "Un análisis de capacidad con promedios diarios no lo detecta: hace falta simulación o análisis por franja",
          "Que hay que contratar más personal en ambas etapas",
          "Que el proceso está mal diseñado y debe rehacerse",
          "Que el promedio diario es suficiente si se calcula bien"
        ],
        correcta: 0,
        explicacion: "El promedio esconde que la restricción se mueve durante el día. Es el argumento más claro a favor de la simulación frente al cálculo analítico.",
        porQueNo: {
          1: "Contratar en ambas sin analizar franjas es sobredimensionar.",
          2: "Que la restricción se mueva es normal en procesos con demanda variable.",
          3: "Un promedio bien calculado sigue siendo un promedio: no revela la variación intradía."
        }
      },
      {
        tema: "Costo oculto",
        pregunta: "El proceso de facturación de OXXO Gas consume 233 horas de tiempo de cliente al mes. ¿Por qué el problema persiste?",
        opciones: [
          "Porque ese costo lo paga el cliente y no aparece en ningún indicador interno de la empresa",
          "Porque arreglarlo es técnicamente imposible",
          "Porque la regulación fiscal obliga a ese flujo",
          "Porque los clientes prefieren facturar después de la compra"
        ],
        correcta: 0,
        explicacion: "Un análisis de eficiencia interna nunca lo detecta. Por eso el valor se analiza desde la perspectiva del cliente y no solo desde el costo propio.",
        porQueNo: {
          1: "Identificar al cliente en el momento de la carga es técnicamente común.",
          2: "La regulación exige el comprobante, no que el cliente recapture los datos.",
          3: "La preferencia es por la comodidad, no por teclear dos veces."
        }
      },
      {
        tema: "Recursos",
        pregunta: "En la pastelería, ¿por qué los 40 minutos de enfriado no entran en el cálculo de carga del horno?",
        opciones: [
          "Porque mientras el pastel enfría el horno está libre para otro pedido: la espera no consume capacidad",
          "Porque el enfriado dura menos que el horneado",
          "Porque el enfriado no agrega valor y se excluye del análisis",
          "Porque el enfriado ocurre fuera de las fronteras del proceso"
        ],
        correcta: 0,
        explicacion: "La espera alarga el lead time pero no ocupa al recurso. Confundirlo infla la carga y desplaza el cuello de botella al recurso equivocado.",
        porQueNo: {
          1: "La duración relativa no es el criterio; lo es si ocupa o no al recurso.",
          2: "El valor agregado no determina si consume capacidad.",
          3: "El enfriado ocurre dentro del proceso: forma parte del lead time."
        }
      },
      {
        tema: "Orquestación",
        pregunta: "Rappi coordina a un cliente, un comercio y un repartidor que no le reportan jerárquicamente. ¿Cómo logra la coordinación?",
        opciones: [
          "Con datos, incentivos y reglas, porque no tiene autoridad jerárquica sobre los participantes",
          "Con contratos laborales que le dan autoridad directa",
          "Con supervisores en cada comercio",
          "No la logra: el proceso depende de la buena voluntad de cada actor"
        ],
        correcta: 0,
        explicacion: "Es un proceso cross-functional llevado al extremo: atraviesa empresas distintas. La orquestación se logra con mecanismos de información e incentivo, no con órdenes.",
        porQueNo: {
          1: "Los comercios son independientes y los repartidores no son empleados en este modelo.",
          2: "Sería económicamente inviable a esa escala.",
          3: "Sí la logra, y precisamente el diseño de esos mecanismos es su producto."
        }
      },
      {
        tema: "Trade-off",
        pregunta: "En Uber, asignar siempre el conductor más cercano baja la espera del pasajero pero reduce la utilización del conductor. ¿Cómo se decide?",
        opciones: [
          "Es una decisión de negocio sobre qué indicador priorizar, no una decisión técnica del algoritmo",
          "Siempre debe priorizarse la espera del pasajero",
          "Siempre debe priorizarse la utilización del conductor",
          "El algoritmo puede optimizar ambos simultáneamente"
        ],
        correcta: 0,
        explicacion: "Los dos indicadores están en tensión estructural. Quien elige el punto de equilibrio es el negocio, con datos; el algoritmo solo ejecuta la política elegida.",
        porQueNo: {
          1: "Priorizar solo al pasajero encarece la operación y desincentiva a los conductores.",
          2: "Priorizar solo la utilización degrada la experiencia y pierde demanda.",
          3: "Hay una frontera de compromiso: mejorar uno más allá de cierto punto degrada el otro."
        }
      },
      {
        tema: "Criticidad",
        pregunta: "¿Cómo debe definirse la criticidad de un activo de TI?",
        opciones: [
          "Por el impacto en el proceso de negocio si falla, no por el costo del activo",
          "Por el costo de reposición del equipo",
          "Por la antigüedad del activo en el inventario",
          "Por el número de usuarios que lo utilizan"
        ],
        correcta: 0,
        explicacion: "Una impresora de etiquetas barata puede detener una línea de producto perecedero; un servidor caro puede tolerar horas de indisponibilidad.",
        porQueNo: {
          1: "El costo no guarda relación con el impacto operativo.",
          2: "La antigüedad importa para el ciclo de vida, no para la criticidad.",
          3: "Un activo con un solo usuario puede ser crítico si detiene la operación."
        }
      },
      {
        tema: "Método",
        pregunta: "¿Qué tienen en común el check-in en línea de VivaAerobus, el portal de proveedores y el autocobro del supermercado?",
        opciones: [
          "Mueven el trabajo al origen o al cliente, sacándolo del proceso crítico de la empresa",
          "Los tres eliminan por completo la intervención humana",
          "Los tres reducen el tiempo de ciclo individual de la transacción",
          "Los tres son ejemplos de transformación digital"
        ],
        correcta: 0,
        explicacion: "Es la misma heurística de rediseño aplicada en tres industrias: quien tiene el dato lo captura, y el recurso escaso de la empresa deja de consumirse.",
        porQueNo: {
          1: "Los tres conservan intervención humana por excepción.",
          2: "El autocobro sube el tiempo individual: baja el costo, no el tiempo.",
          3: "El check-in y el autocobro son más bien digitalización o automatización."
        }
      }
    ],

    flashcards: [
      { frente: "Starbucks", reverso: "La caja no es el cuello de botella; el barista sí. Invertir en un recurso que no es la restricción no agrega throughput: solo mueve la fila de lugar." },
      { frente: "Banamex · unifila", reverso: "Un pool compartido absorbe mejor la variabilidad que filas independientes. Misma capacidad, menos espera — pero la unifila no crea capacidad." },
      { frente: "Ford · balanceo", reverso: "La línea produce al ritmo de su estación más lenta. Al rebalancearla el cuello de botella se muda a otra estación: por eso el quinto paso de TOC es repetir." },
      { frente: "Pastelería · enfriado", reverso: "Es ENVA, no NVA: restricción física del producto. Alarga el lead time pero no consume capacidad, así que no entra en el cálculo de carga." },
      { frente: "Costco · devoluciones", reverso: "Un retrabajo que conviene mantener: la tasa podría subir de 2.8 % a 26.8 % antes de dejar de pagarse con la membresía. Eliminar desperdicio no es un fin en sí mismo." },
      { frente: "OXXO Gas · facturación", reverso: "Captura duplicada cuyo costo lo paga el cliente y por eso no aparece en ningún indicador interno. El TO-BE captura una sola vez, en el origen." },
      { frente: "Súper en línea", reverso: "El síntoma es «el surtido tarda»; la causa es que el dato de inventario miente. Un problema de flujo cuya raíz vive en el dominio de datos." },
      { frente: "Salud Digna", reverso: "Transformación digital real: la cita controla la demanda y aplana el pico. El cuello de botella se mueve durante el día, así que los promedios diarios no lo detectan." },
      { frente: "Rappi", reverso: "Proceso cross-functional entre empresas distintas. Sin autoridad jerárquica, la coordinación se logra con datos, incentivos y reglas." },
      { frente: "Uber", reverso: "Espera del pasajero contra utilización del conductor: dos indicadores en tensión. Elegir el punto de equilibrio es decisión de negocio, no del algoritmo." },
      { frente: "Mesa de servicio", reverso: "Ley de Little aplicada: con 168 tickets abiertos y 24 cierres por hora, el lead time es de 7 h aunque el SLA prometa 4. Se arregla controlando la entrada." },
      { frente: "Procesadora de cárnicos", reverso: "La criticidad la define el impacto en el proceso, no el costo del activo. Una impresora barata puede ser el activo más crítico de la planta." },
      { frente: "CrowdStrike 2024", reverso: "8.5 millones de equipos por un despliegue global sin escalonamiento. La reversa del proveedor tomó 78 min; la recuperación del cliente, días." },
      { frente: "Autocobro", reverso: "Sube el tiempo por cliente y baja el costo por transacción: dos indicadores opuestos. Hay que declarar cuál se optimiza." },
      { frente: "Hospital · expediente", reverso: "El dato maestro aquí es clínico, no administrativo: un expediente duplicado fragmenta la historia y se toman decisiones con información parcial." }
    ]
  }
});
