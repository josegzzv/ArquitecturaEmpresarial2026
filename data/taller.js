/* ============================================================
   TALLER INTEGRADOR — Tornillos y Herrajes del Norte (THN)
   Un solo caso recorrido de punta a punta: descubrimiento,
   medición, valor, rediseño, dinero, acta de constitución y
   presentación ejecutiva.

   Cifras ilustrativas: la empresa es ficticia y los números se
   construyeron para que los cálculos cierren.

   Todos los resultados fueron verificados de forma independiente.
   ============================================================ */

EA.registrarTaller({
  titulo: "Taller integrador",
  subtitulo: "De la entrevista al acta de constitución, sobre un solo caso",

  archivo: "entregable-thn",

  caso: {
    nombre: "Tornillos y Herrajes del Norte",
    resumen: "Distribuidor industrial B2B · proceso de cotización a pedido"
  },

  pieEntregable: "Elaborado con el taller integrador del curso Diseño de Procesos y Arquitectura Empresarial. "
    + "Las cifras del caso son ilustrativas y la empresa es ficticia.",

  intro: "<p>Las ocho etapas siguen el mismo orden que un proyecto real: primero se entiende, "
    + "luego se mide, luego se decide qué cambiar, luego se justifica con dinero y solo al final "
    + "se pide autorización. Lo que respondas se guarda en tu navegador y se arrastra a las etapas "
    + "siguientes: el lead time que calcules en la etapa 2 es el que aparecerá en tu acta de "
    + "constitución en la etapa 7.</p>"
    + "<p>Al terminar puedes descargar todo como un solo documento.</p>",

  /* ------------------------------------------------------------------
     Qué se destaca en la infografía del reporte y en la presentación.
     Todo apunta a campos que el alumno llenó: si no los contestó, la
     tarjeta simplemente no aparece.
     ------------------------------------------------------------------ */
  resumen: {
    titulo: "Resumen ejecutivo",
    cronoTitulo: "Cronograma propuesto",
    tiempoTitulo: "Dónde se va el tiempo hoy",
    trabajo: "Trabajo real",
    espera: "Espera",
    kpis: [
      { etapa: "tiempos",   campo: "lt",          etiqueta: "Lead time actual" },
      { etapa: "tiempos",   campo: "eficiencia",  etiqueta: "Eficiencia de ciclo" },
      { etapa: "capacidad", campo: "capProceso",  etiqueta: "Capacidad del proceso" },
      { etapa: "negocio",   campo: "cnh",         etiqueta: "Costo de no hacer nada" },
      { etapa: "negocio",   campo: "vpnB",        etiqueta: "VPN de la propuesta" },
      { etapa: "negocio",   campo: "paybackB",    etiqueta: "Se recupera en" }
    ],
    /* La barra usa la eficiencia de ciclo: lo demás es espera. */
    barra: { etapa: "tiempos", campo: "eficiencia" }
  },

  diapositivas: [
    { etapa: "presentacion", campo: "p1", titulo: "El problema" },
    { etapa: "presentacion", campo: "p2", titulo: "Qué encontramos" },
    { etapa: "presentacion", campo: "p3", titulo: "Qué proponemos" },
    { etapa: "presentacion", campo: "p4", titulo: "Cuánto mejora" },
    { etapa: "presentacion", campo: "p5", titulo: "Cuánto cuesta y cuándo retorna" },
    { etapa: "presentacion", campo: "p6", titulo: "Riesgos y cómo se mitigan" },
    { etapa: "presentacion", campo: "p7", titulo: "La decisión que pedimos hoy" }
  ],

  etapas: [

    /* ============================================================
       1 · DESCUBRIMIENTO
       ============================================================ */
    {
      id: "descubrimiento",
      titulo: "Descubrimiento",
      objetivo: "Entender el problema con evidencia antes de proponer nada.",
      bloques: [
        {
          tipo: "texto",
          titulo: "La empresa",
          cuerpo: "<p><b>Tornillos y Herrajes del Norte (THN)</b> distribuye sujetadores, herrajes y "
            + "elementos de fijación a plantas industriales del noreste. No vende al público: cada venta "
            + "empieza con una <b>cotización</b> que el cliente pide por correo o por teléfono, muchas veces "
            + "con un plano o una especificación técnica adjunta.</p>"
            + "<p>El Director Comercial convocó al equipo con una queja concreta: <i>«estamos perdiendo "
            + "pedidos porque cotizamos tarde, y cuando cotizamos rápido nos equivocamos en el precio».</i> "
            + "Nadie ha medido el proceso.</p>"
        },
        {
          tipo: "flujo",
          titulo: "El proceso de cotización, como opera hoy",
          pasos: ["Recepción de la solicitud", "Captura en el sistema", "Búsqueda de precio y disponibilidad",
                  "Validación técnica", "Autorización de descuento", "Emisión y envío"]
        },
        {
          tipo: "tabla",
          titulo: "Lo que dijo cada quien en las entrevistas",
          encabezados: ["Quién", "Qué dijo"],
          filas: [
            ["Director Comercial", "«Perdemos pedidos por lentos. Necesito cotizar el mismo día.»"],
            ["Vendedor con 11 años", "«Lo que me atora es esperar a Ingeniería. A veces son dos días.»"],
            ["Especialista técnico (uno solo)", "«Reviso lo mismo una y otra vez. La mitad ya lo validé el mes pasado.»"],
            ["Auxiliar de ventas", "«Cuando corro, me equivoco en el precio de lista y hay que rehacer todo.»"],
            ["Gerente de Administración", "«El sistema ya tiene los precios. Nadie confía en ellos.»"],
            ["Cliente frecuente (planta armadora)", "«Le compro al que me contesta primero. No siempre al más barato.»"]
          ]
        },
        {
          tipo: "nota",
          titulo: "Ojo con la primera conclusión",
          cuerpo: "<p>Es tentador cerrar el diagnóstico con la frase del Director: «somos lentos». "
            + "Pero cinco de las seis voces apuntan a cosas distintas, y una de ellas —la del especialista— "
            + "describe un desperdicio que nadie más ve. <b>Triangula antes de decidir qué duele.</b></p>"
        }
      ],
      campos: [
        {
          id: "tecnica",
          tipo: "opcion",
          etiqueta: "Ya tienes las entrevistas. ¿Cuál es el <b>siguiente</b> paso de recopilación más útil?",
          opciones: [
            "Observar directamente el proceso y cronometrar una muestra de cotizaciones reales",
            "Aplicar una encuesta de satisfacción a todos los clientes",
            "Pedir a cada vendedor que estime cuánto tarda en cada paso",
            "Revisar el organigrama y las descripciones de puesto"
          ],
          correcta: 0,
          pista: "Las entrevistas dan percepciones. Para medir hace falta otra cosa."
        },
        {
          id: "pain",
          tipo: "texto",
          etiqueta: "Enuncia el <b>pain point</b> en una sola frase, separando el síntoma de la causa probable.",
          ayuda: "Formato sugerido: «El cliente percibe … porque el proceso …». Evita nombrar la solución todavía.",
          marcador: "El cliente percibe… porque el proceso…",
          minimoPalabras: 25,
          lineas: 3
        },
        {
          id: "ideacion",
          tipo: "texto",
          etiqueta: "Escribe una <b>pregunta de ideación</b> que abra soluciones en lugar de cerrarlas.",
          ayuda: "«¿Cómo podríamos…?» funciona mejor que «¿Compramos un sistema?». La pregunta no debe contener la respuesta.",
          marcador: "¿Cómo podríamos…?",
          minimoPalabras: 8,
          lineas: 2
        }
      ],
      rubrica: [
        "El pain point está escrito desde el <b>cliente</b>, no desde el área interna.",
        "Distingue el <b>síntoma</b> («cotizamos tarde») de la <b>causa probable</b>.",
        "No nombra ninguna tecnología ni proveedor.",
        "Se apoya en al menos <b>dos</b> de las seis voces entrevistadas.",
        "La pregunta de ideación no contiene ya la solución dentro."
      ],
      modelo: "<p><b>Pain point.</b> El cliente compra al primero que le responde, y THN llega tarde "
        + "a casi la mitad de sus cotizaciones porque el expediente se detiene esperando una validación "
        + "técnica que, en buena parte de los casos, ya se hizo antes para el mismo producto.</p>"
        + "<p><b>Pregunta de ideación.</b> ¿Cómo podríamos responder una cotización el mismo día sin "
        + "que un especialista tenga que revisar dos veces lo mismo?</p>"
        + "<p>Fíjate en dos cosas. La primera: el enunciado ya contiene una hipótesis medible "
        + "(«buena parte de los casos ya se validó antes»), que la etapa 2 va a confirmar o tumbar. "
        + "La segunda: no dice «hay que comprar un configurador». Esa conclusión, si llega, tiene que "
        + "llegar después de los números.</p>"
    },

    /* ============================================================
       2 · AS-IS MEDIDO
       ============================================================ */
    {
      id: "tiempos",
      titulo: "El AS-IS, medido",
      objetivo: "Convertir la percepción en tiempo de ciclo, lead time y eficiencia.",
      bloques: [
        {
          tipo: "tabla",
          titulo: "Tiempos de actividad observados",
          encabezados: ["Paso", "Responsable", "Tiempo (min)"],
          filas: [
            ["A · Recepción de la solicitud", "Ventas", "8"],
            ["B · Captura en el sistema", "Ventas", "12"],
            ["C · Búsqueda de precio y disponibilidad", "Ventas", "25"],
            ["D · Validación técnica", "Ingeniería", "40"],
            ["E · Autorización de descuento", "Gerencia", "15"],
            ["F · Emisión y envío", "Ventas", "10"]
          ]
        },
        {
          tipo: "tabla",
          titulo: "Las tres rutas del proceso",
          encabezados: ["Ruta", "Pasos", "Frecuencia"],
          filas: [
            ["R1 · Catálogo estándar", "A → B → C → F", "55 %"],
            ["R2 · Requiere validación técnica", "A → B → C → D → F", "30 %"],
            ["R3 · Validación técnica y descuento", "A → B → C → D → E → F", "15 %"]
          ]
        },
        {
          tipo: "nota",
          titulo: "Retrabajo",
          cuerpo: "<p>El <b>12 %</b> de las cotizaciones regresa por un error de precio. Corregirla obliga "
            + "a rehacer <b>C</b> y <b>F</b>. Considera <b>una sola repetición</b>: se corrige y ya sale bien.</p>"
        },
        {
          tipo: "tabla",
          titulo: "Esperas medidas entre pasos",
          encabezados: ["Espera", "Cuándo ocurre", "Promedio"],
          filas: [
            ["En la bandeja de Ventas", "Todas las cotizaciones", "4 h"],
            ["En la cola de Ingeniería", "Solo R2 y R3", "18 h"],
            ["Esperando a Gerencia", "Solo R3", "6 h"]
          ]
        },
        {
          tipo: "clave",
          titulo: "Frontera del proceso",
          cuerpo: "<p>El lead time que vas a calcular va <b>desde que llega la solicitud hasta que sale "
            + "la cotización</b>. El tiempo que el cliente tarda en contestar queda fuera: no lo controla THN "
            + "y mezclarlo esconde el problema real.</p>"
        }
      ],
      campos: [
        {
          id: "sumaPT", etiqueta: "Tiempo de proceso ponderado por rutas (Σ p·T)",
          respuesta: 75.25, unidad: "min", tolerancia: 0.05,
          pista: "Calcula el tiempo de cada ruta y pondera por su frecuencia."
        },
        {
          id: "ct", etiqueta: "Tiempo de ciclo (CT), incluyendo el retrabajo",
          respuesta: 79.45, unidad: "min", tolerancia: 0.05,
          pista: "El retrabajo solo repite C y F, y solo en el 12 % de los casos."
        },
        {
          id: "lt", etiqueta: "Lead time promedio ponderado",
          respuesta: 14.25, unidad: "h", tolerancia: 0.06,
          pista: "Cada ruta arrastra esperas distintas. Pondera igual que con los tiempos."
        },
        {
          id: "eficiencia", etiqueta: "Eficiencia de ciclo",
          respuesta: 9.29, unidad: "%", tolerancia: 0.15,
          pista: "Tiempo de proceso entre lead time. Cuidado con las unidades: uno está en minutos."
        }
      ],
      solucion: "<p><b>Tiempo de cada ruta</b></p>"
        + "<div class='paso-calc'>"
        + "R1 = 8 + 12 + 25 + 10           =  55 min\n"
        + "R2 = 8 + 12 + 25 + 40 + 10      =  95 min\n"
        + "R3 = 8 + 12 + 25 + 40 + 15 + 10 = 110 min</div>"
        + "<p><b>Ponderación por rutas</b></p>"
        + "<div class='paso-calc'>"
        + "Σ p·T = 0.55(55) + 0.30(95) + 0.15(110)\n"
        + "      = 30.25   + 28.50   + 16.50\n"
        + "      = <span class='resaltado'>75.25 min</span></div>"
        + "<p><b>Retrabajo</b> — se rehacen C y F en el 12 % de los casos:</p>"
        + "<div class='paso-calc'>"
        + "Retrabajo = 0.12 × (25 + 10) = 0.12 × 35 = 4.20 min\n"
        + "CT        = 75.25 + 4.20     = <span class='resaltado'>79.45 min</span></div>"
        + "<p><b>Lead time por ruta</b> (esperas + proceso, en horas):</p>"
        + "<div class='paso-calc'>"
        + "R1 = 4                + 55/60  =  4.9167 h\n"
        + "R2 = 4 + 18           + 95/60  = 23.5833 h\n"
        + "R3 = 4 + 18 + 6       + 110/60 = 29.8333 h\n"
        + "\n"
        + "LT = 0.55(4.9167) + 0.30(23.5833) + 0.15(29.8333)\n"
        + "   = 2.7042       + 7.0750        + 4.4750\n"
        + "   = <span class='resaltado'>14.25 h</span></div>"
        + "<p><b>Eficiencia de ciclo</b></p>"
        + "<div class='paso-calc'>"
        + "Eficiencia = (79.45 / 60) / 14.25\n"
        + "           = 1.3242 / 14.2542\n"
        + "           = 0.0929 = <span class='resaltado'>9.29 %</span></div>"
        + "<p>Léelo así: de cada hora que la cotización pasa dentro de THN, <b>menos de seis minutos</b> "
        + "son trabajo. El resto es cola. Ninguna mejora que acelere el trabajo —teclear más rápido, "
        + "contratar gente más experta— puede tocar el 91 % restante.</p>"
    },

    /* ============================================================
       3 · CAPACIDAD Y CUELLO DE BOTELLA
       ============================================================ */
    {
      id: "capacidad",
      titulo: "Capacidad y cuello de botella",
      objetivo: "Encontrar el recurso que limita a todos los demás.",
      bloques: [
        {
          tipo: "tabla",
          titulo: "Recursos disponibles",
          encabezados: ["Recurso", "Disponibilidad diaria", "Pasos que ejecuta"],
          filas: [
            ["Ventas", "3 personas × 480 min = <b>1 440 min</b>", "A, B, C, F y el retrabajo"],
            ["Ingeniería", "1 especialista al 50 % = <b>240 min</b>", "D"],
            ["Gerencia", "<b>120 min</b> reservados", "E"]
          ]
        },
        {
          tipo: "nota",
          titulo: "Cuidado con la carga promedio",
          cuerpo: "<p>Ingeniería no dedica 40 minutos a <i>cada</i> cotización: solo a las que pasan por D, "
            + "que son R2 y R3. Para comparar recursos hay que llevar todo a <b>minutos por cotización "
            + "promedio</b>, ponderando por la frecuencia de las rutas.</p>"
        },
        {
          tipo: "clave",
          titulo: "La demanda",
          cuerpo: "<p>THN recibe <b>18 solicitudes de cotización por día</b>, 250 días al año.</p>"
        }
      ],
      campos: [
        {
          id: "capVentas", etiqueta: "Capacidad de Ventas",
          respuesta: 24.32, unidad: "cot./día", tolerancia: 0.05,
          pista: "Ventas hace A + B + C + F en todas las rutas, más el retrabajo."
        },
        {
          id: "capIng", etiqueta: "Capacidad de Ingeniería",
          respuesta: 13.33, unidad: "cot./día", tolerancia: 0.05,
          pista: "D solo aplica al 45 % de las cotizaciones."
        },
        {
          id: "capGer", etiqueta: "Capacidad de Gerencia",
          respuesta: 53.33, unidad: "cot./día", tolerancia: 0.05
        },
        {
          id: "cuello",
          tipo: "opcion",
          etiqueta: "¿Cuál es el cuello de botella?",
          opciones: ["Ingeniería", "Ventas", "Gerencia", "La espera del cliente"],
          correcta: 0
        },
        {
          id: "capProceso", etiqueta: "Capacidad del proceso completo",
          respuesta: 13.33, unidad: "cot./día", tolerancia: 0.05,
          pista: "La capacidad de una cadena es la de su eslabón más limitado."
        },
        {
          id: "uso", etiqueta: "Uso de la capacidad frente a la demanda de 18/día",
          respuesta: 135, unidad: "%", tolerancia: 0.6,
          pista: "Un valor mayor que 100 % no es eficiencia: es una cola que crece todos los días."
        }
      ],
      solucion: "<p><b>Carga por cotización promedio</b></p>"
        + "<div class='paso-calc'>"
        + "Ventas     = (8 + 12 + 25 + 10) + 0.12(35) = 55 + 4.20 = 59.20 min\n"
        + "Ingeniería = (0.30 + 0.15) × 40 = 0.45 × 40           = 18.00 min\n"
        + "Gerencia   = 0.15 × 15                               =  2.25 min</div>"
        + "<p><b>Capacidad de cada recurso</b></p>"
        + "<div class='paso-calc'>"
        + "Ventas     = 1440 / 59.20 = <span class='resaltado'>24.32 cot./día</span>\n"
        + "Ingeniería =  240 / 18.00 = <span class='resaltado'>13.33 cot./día</span>  ← el más limitado\n"
        + "Gerencia   =  120 /  2.25 = <span class='resaltado'>53.33 cot./día</span></div>"
        + "<p><b>Capacidad del proceso y uso</b></p>"
        + "<div class='paso-calc'>"
        + "Capacidad del proceso = 13.33 cot./día\n"
        + "Uso = 18 / 13.33 = 1.35 = <span class='resaltado'>135 %</span>\n"
        + "Déficit = 18 − 13.33 = 4.67 cotizaciones que se acumulan cada día</div>"
        + "<p>Aquí queda explicada la cola de 18 horas de la etapa anterior: no es que el especialista "
        + "sea lento, es que le llega <b>un 35 % más trabajo del que puede procesar</b>. Una cola que crece "
        + "todos los días no se arregla apurando a nadie.</p>"
        + "<p>Nota también que Gerencia tiene capacidad para 53 cotizaciones diarias y solo ve 2.7. "
        + "Optimizar la autorización de descuentos —el paso que más se queja el equipo— no cambiaría nada.</p>"
    },

    /* ============================================================
       4 · VALOR
       ============================================================ */
    {
      id: "valor",
      titulo: "Qué agrega valor y qué no",
      objetivo: "Separar lo que el cliente paga de lo que solo se tolera.",
      bloques: [
        {
          tipo: "defs",
          titulo: "El criterio, para no discutirlo cada vez",
          items: [
            { termino: "VA — Valor agregado",
              definicion: "Transforma el producto o servicio hacia lo que el cliente pidió, y el cliente pagaría por ello si lo viera desglosado." },
            { termino: "ENVA — Esencial sin valor agregado",
              definicion: "El cliente no lo pagaría, pero hoy no se puede eliminar sin romper una obligación legal, un control o una restricción técnica. Se minimiza, no se borra." },
            { termino: "NVA — Sin valor agregado",
              definicion: "Ni transforma ni es obligatorio. Es desperdicio puro: esperas, retrabajo, movimientos, revisiones duplicadas." }
          ]
        },
        {
          tipo: "nota",
          titulo: "La trampa de esta etapa",
          cuerpo: "<p>Casi todo el mundo clasifica la <b>validación técnica</b> como NVA porque «es la que "
            + "atora». No lo es: hay especificaciones que de verdad requieren criterio de ingeniería, y "
            + "cotizar mal un herraje estructural tiene consecuencias. Lo que es desperdicio no es validar: "
            + "es <b>validar de nuevo lo que ya se validó</b>.</p>"
        }
      ],
      campos: [
        {
          id: "vaC", tipo: "opcion",
          etiqueta: "C · Búsqueda de precio y disponibilidad",
          opciones: ["VA — Valor agregado", "ENVA — Esencial sin valor agregado", "NVA — Sin valor agregado"],
          correcta: 0,
          pista: "Sin precio no hay cotización: es lo que el cliente pidió."
        },
        {
          id: "vaD", tipo: "opcion",
          etiqueta: "D · Validación técnica de una especificación nueva",
          opciones: ["ENVA — Esencial sin valor agregado", "VA — Valor agregado", "NVA — Sin valor agregado"],
          correcta: 1,
          pista: "¿El cliente pagaría por saber que el herraje sí aguanta lo que dice el plano?"
        },
        {
          id: "vaD2", tipo: "opcion",
          etiqueta: "D · Validación técnica de un producto <b>ya validado el mes pasado</b>",
          opciones: ["NVA — Sin valor agregado", "VA — Valor agregado", "ENVA — Esencial sin valor agregado"],
          correcta: 0,
          pista: "El mismo paso puede cambiar de categoría según el contexto."
        },
        {
          id: "vaE", tipo: "opcion",
          etiqueta: "E · Autorización de descuento",
          opciones: ["ENVA — Esencial sin valor agregado", "VA — Valor agregado", "NVA — Sin valor agregado"],
          correcta: 0,
          pista: "Es un control interno de margen. El cliente no lo pagaría, pero la empresa lo necesita."
        },
        {
          id: "vaEspera", tipo: "opcion",
          etiqueta: "Las 18 horas de cola frente a Ingeniería",
          opciones: ["NVA — Sin valor agregado", "ENVA — Esencial sin valor agregado", "VA — Valor agregado"],
          correcta: 0
        },
        {
          id: "vaJustifica",
          tipo: "texto",
          etiqueta: "El mismo paso D quedó en dos categorías distintas. Explica por qué, y qué implica eso para el rediseño.",
          ayuda: "Esta es la observación que abre la solución. Tómate tres o cuatro renglones.",
          minimoPalabras: 30,
          lineas: 4
        }
      ],
      rubrica: [
        "Distingue el paso en sí de <b>las condiciones</b> en que se ejecuta.",
        "Nombra la diferencia real: especificación nueva contra especificación repetida.",
        "Concluye algo accionable — no basta con decir «depende».",
        "No propone todavía una herramienta específica."
      ],
      modelo: "<p>La validación técnica agrega valor cuando la especificación es nueva: alguien con criterio "
        + "de ingeniería está resolviendo una duda que el cliente no puede resolver solo, y de eso depende que "
        + "la pieza cotizada realmente sirva. Cuando la especificación ya se validó antes, el paso no aporta "
        + "nada nuevo: reproduce un juicio que la empresa ya emitió y que simplemente no guardó en ningún lado.</p>"
        + "<p>La implicación para el rediseño es directa: el objetivo no es <b>eliminar</b> la validación "
        + "técnica ni <b>acelerarla</b>, sino <b>dejar de repetirla</b>. Eso convierte el problema de uno de "
        + "capacidad —contratar a alguien más— en uno de arquitectura de información: dónde vive el "
        + "conocimiento que la empresa ya produjo.</p>"
    },

    /* ============================================================
       5 · TO-BE
       ============================================================ */
    {
      id: "tobe",
      titulo: "El TO-BE y sus alternativas",
      objetivo: "Proponer el rediseño y calcular qué le pasa a la capacidad.",
      bloques: [
        {
          tipo: "texto",
          titulo: "Las dos alternativas que llegaron a la mesa",
          cuerpo: "<p>Con el diagnóstico sobre la mesa —cuello de botella en Ingeniería, "
            + "{{tiempos.eficiencia}} % de eficiencia de ciclo, y validaciones que se repiten— el equipo "
            + "llegó a dos propuestas y las puso a competir.</p>"
        },
        {
          tipo: "tabla",
          titulo: "Alternativa A frente a alternativa B",
          encabezados: ["", "A · Contratar", "B · Reglas de validación en el ERP"],
          filas: [
            ["En qué consiste",
             "Un segundo especialista técnico de medio tiempo",
             "Configurar el ERP para que valide solo lo que no tiene precedente"],
            ["Efecto sobre el proceso",
             "Ingeniería pasa de 240 a 480 min diarios",
             "Solo el 15 % de las cotizaciones requiere validación humana"],
            ["Inversión inicial", "—", "$680,000"],
            ["Costo anual", "$336,000 de sueldo y prestaciones", "$95,000 de licencias y soporte"],
            ["Riesgo principal",
             "El costo es permanente; si baja la demanda, el gasto queda",
             "Si las reglas se configuran mal, se cotiza con criterio equivocado"]
          ]
        },
        {
          tipo: "nota",
          titulo: "El dato que sostiene la alternativa B",
          cuerpo: "<p>Al revisar el histórico, <b>dos de cada tres validaciones</b> correspondían a productos "
            + "con una especificación idéntica ya validada. Por eso la carga de validación humana baja del "
            + "45 % al <b>15 %</b> de las cotizaciones: solo se queda lo genuinamente nuevo.</p>"
        }
      ],
      campos: [
        {
          id: "capA", etiqueta: "Capacidad de Ingeniería con la alternativa A",
          respuesta: 26.67, unidad: "cot./día", tolerancia: 0.05
        },
        {
          id: "capB", etiqueta: "Capacidad de Ingeniería con la alternativa B",
          respuesta: 40, unidad: "cot./día", tolerancia: 0.05,
          pista: "La disponibilidad de Ingeniería no cambia; lo que cambia es la carga por cotización."
        },
        {
          id: "cuelloB", tipo: "opcion",
          etiqueta: "Con la alternativa B, ¿cuál pasa a ser el cuello de botella?",
          opciones: ["Ventas", "Ingeniería", "Gerencia", "Ya no hay cuello de botella"],
          correcta: 0,
          pista: "Compara las tres capacidades otra vez. El cuello no desaparece: se mueve."
        },
        {
          id: "capProcesoB", etiqueta: "Capacidad del proceso con la alternativa B",
          respuesta: 24.32, unidad: "cot./día", tolerancia: 0.05
        },
        {
          id: "tobeTexto",
          tipo: "texto",
          etiqueta: "Describe el TO-BE en tres o cuatro renglones: qué cambia en el flujo y qué se queda igual.",
          ayuda: "Un buen TO-BE nombra lo que <i>no</i> cambia. Si todo cambia, nadie lo va a implantar.",
          minimoPalabras: 35,
          lineas: 4
        }
      ],
      solucion: "<div class='paso-calc'>"
        + "Alternativa A — sube la disponibilidad:\n"
        + "  Ingeniería = 480 / 18.00 = <span class='resaltado'>26.67 cot./día</span>\n"
        + "\n"
        + "Alternativa B — baja la carga:\n"
        + "  Carga     = 0.15 × 40 = 6.00 min por cotización\n"
        + "  Ingeniería = 240 / 6.00 = <span class='resaltado'>40.00 cot./día</span>\n"
        + "\n"
        + "Capacidades con B:  Ventas 24.32 · Ingeniería 40.00 · Gerencia 53.33\n"
        + "  → el proceso queda en <span class='resaltado'>24.32 cot./día</span>, limitado por Ventas</div>"
        + "<p><b>Las dos alternativas resuelven la demanda de 18/día</b>, y ese es justamente el punto: "
        + "la capacidad ya no discrimina entre ellas. A partir de aquí la decisión es económica, y por eso "
        + "sigue la etapa 6.</p>"
        + "<p>Observa además que con B el cuello se mueve a Ventas con 24.32 cotizaciones diarias. "
        + "No desapareció: <b>siempre hay un cuello de botella</b>. Lo que cambió es que ahora está en un "
        + "recurso con holgura frente a la demanda actual, y que si THN crece por encima de 24 cotizaciones "
        + "diarias, ya sabe dónde va a doler.</p>",
      rubrica: [
        "El TO-BE dice explícitamente qué pasos <b>se conservan</b>.",
        "La validación técnica sigue existiendo para lo nuevo — no se eliminó el control.",
        "Menciona dónde queda el cuello después del cambio.",
        "No promete que el proceso quedará «sin esperas»."
      ]
    },

    /* ============================================================
       6 · CASO DE NEGOCIO
       ============================================================ */
    {
      id: "negocio",
      titulo: "El caso de negocio",
      objetivo: "Convertir el rediseño en dinero, y decidir con criterio.",
      bloques: [
        {
          tipo: "tabla",
          titulo: "Datos comerciales",
          encabezados: ["Concepto", "Valor"],
          filas: [
            ["Cotizaciones al año", "18/día × 250 días = <b>4 500</b>"],
            ["Cotizaciones que hoy tardan más de 24 h", "las de R2 y R3 = <b>45 %</b>"],
            ["Conversión a pedido si sale en 8 h o menos", "<b>38 %</b>"],
            ["Conversión a pedido si tarda más de 24 h", "<b>27 %</b>"],
            ["Margen de contribución promedio por pedido", "<b>$2,400</b>"],
            ["Tasa de descuento de la empresa", "<b>12 %</b> anual"],
            ["Horizonte de evaluación", "<b>4 años</b>"]
          ]
        },
        {
          tipo: "clave",
          titulo: "El supuesto que hay que declarar",
          cuerpo: "<p>Ninguna mejora recupera el 100 % de lo que se está perdiendo. El equipo asumió una "
            + "<b>recuperación del 80 %</b> del beneficio teórico. Ese número no salió de un cálculo: es un "
            + "juicio, y por eso la última pregunta de esta etapa lo pone a prueba.</p>"
        },
        {
          tipo: "nota",
          titulo: "Antes de calcular nada",
          cuerpo: "<p>La primera cifra que hay que estimar no es el beneficio del proyecto: es el "
            + "<b>costo de no hacer nada</b>. Si esa cifra es pequeña, la conversación termina ahí y THN "
            + "se ahorra el proyecto.</p>"
        }
      ],
      campos: [
        {
          id: "cnh", etiqueta: "Costo de no hacer nada (margen perdido al año)",
          respuesta: 534600, unidad: "$/año", tolerancia: 600,
          pista: "Cotizaciones lentas × diferencia de conversión × margen por pedido."
        },
        {
          id: "fa", etiqueta: "Factor de anualidad al 12 % a 4 años",
          respuesta: 3.0373, unidad: "", tolerancia: 0.002,
          pista: "FA = [1 − (1+k)^−n] / k"
        },
        {
          id: "vpnB", etiqueta: "VPN de la alternativa B (ERP)",
          respuesta: 330465, unidad: "$", tolerancia: 900,
          pista: "Flujo anual = beneficio recuperado − costo anual. Luego resta la inversión."
        },
        {
          id: "tirB", etiqueta: "TIR de la alternativa B",
          respuesta: 33.54, unidad: "%", tolerancia: 0.5
        },
        {
          id: "paybackB", etiqueta: "Periodo de recuperación de la alternativa B",
          respuesta: 24.53, unidad: "meses", tolerancia: 0.4
        },
        {
          id: "roiB", etiqueta: "ROI de la alternativa B a 4 años",
          respuesta: 95.69, unidad: "%", tolerancia: 0.7
        },
        {
          id: "vpnA", etiqueta: "VPN de la alternativa A (contratar)",
          respuesta: 278464, unidad: "$", tolerancia: 900,
          pista: "Esta no tiene inversión inicial. Cuidado: eso no la hace automáticamente mejor."
        },
        {
          id: "umbralB", etiqueta: "¿Con qué porcentaje de recuperación el VPN de B llega a cero?",
          respuesta: 59.65, unidad: "%", tolerancia: 0.8,
          pista: "Despeja el flujo anual que hace VPN = 0 y de ahí regresa al beneficio."
        },
        {
          id: "recomendacion",
          tipo: "texto",
          etiqueta: "Escribe tu <b>recomendación</b> al Director Comercial. Una alternativa, una razón, un riesgo.",
          ayuda: "Cuatro o cinco renglones. Tiene que poder leerse en voz alta en treinta segundos.",
          minimoPalabras: 40,
          lineas: 5
        }
      ],
      solucion: "<p><b>Costo de no hacer nada</b></p>"
        + "<div class='paso-calc'>"
        + "Cotizaciones lentas = 4500 × 0.45                = 2 025\n"
        + "Pedidos perdidos    = 2025 × (0.38 − 0.27)       = 222.75\n"
        + "Margen perdido      = 222.75 × 2400 = <span class='resaltado'>$534,600 al año</span></div>"
        + "<p><b>Factor de anualidad</b></p>"
        + "<div class='paso-calc'>"
        + "FA = [1 − (1.12)^-4] / 0.12 = (1 − 0.635518) / 0.12 = <span class='resaltado'>3.037349</span></div>"
        + "<p><b>Alternativa B — configurar el ERP</b></p>"
        + "<div class='paso-calc'>"
        + "Beneficio  = 0.80 × 534,600           = $427,680\n"
        + "Flujo neto = 427,680 − 95,000         = $332,680 al año\n"
        + "VPN        = 332,680 × 3.037349 − 680,000\n"
        + "           = 1,010,465 − 680,000      = <span class='resaltado'>$330,465</span>\n"
        + "Payback    = 680,000 / 332,680 = 2.044 años = <span class='resaltado'>24.53 meses</span>\n"
        + "ROI        = (332,680 × 4 − 680,000) / 680,000 = <span class='resaltado'>95.69 %</span>\n"
        + "TIR        = tasa que hace VPN = 0    = <span class='resaltado'>33.54 %</span></div>"
        + "<p><b>Alternativa A — contratar</b></p>"
        + "<div class='paso-calc'>"
        + "Flujo neto = 427,680 − 336,000        = $91,680 al año\n"
        + "VPN        = 91,680 × 3.037349        = <span class='resaltado'>$278,464</span>\n"
        + "            (sin inversión inicial)</div>"
        + "<p><b>Umbral de la alternativa B</b></p>"
        + "<div class='paso-calc'>"
        + "Flujo que hace VPN = 0:  680,000 / 3.037349 = $223,879\n"
        + "Beneficio necesario:     223,879 + 95,000   = $318,879\n"
        + "Recuperación mínima:     318,879 / 534,600  = <span class='resaltado'>59.65 %</span></div>"
        + "<p><b>Y aquí está la lección de la etapa.</b> Las dos alternativas tienen VPN positivo, así que "
        + "las dos «se aprueban». Pero mira qué pasa si el supuesto de recuperación falla:</p>"
        + "<div class='paso-calc'>"
        + "Recuperación    VPN de B        VPN de A\n"
        + "─────────────────────────────────────────\n"
        + "     80 %       $330,465        $278,464\n"
        + "     70 %       $168,089        $116,087\n"
        + "     60 %         $5,712        −$46,289\n"
        + "     50 %      −$156,665       −$208,666</div>"
        + "<p>La alternativa A muere antes: necesita recuperar <b>62.85 %</b> para no perder dinero, "
        + "mientras que B aguanta hasta <b>59.65 %</b>. La opción que exigía inversión inicial resultó ser "
        + "la <b>más robusta</b>, porque su costo recurrente es mucho menor. Comparar solo el VPN del "
        + "escenario optimista habría escondido eso.</p>",
      rubrica: [
        "La recomendación nombra <b>una</b> alternativa, no las dos.",
        "Da la razón en términos de dinero o de riesgo, no de tecnología.",
        "Declara el supuesto de recuperación como supuesto, no como hecho.",
        "Menciona un riesgo real y qué haría con él.",
        "Se puede leer en voz alta en menos de un minuto."
      ],
      modelo: "<p>Recomiendo configurar las reglas de validación en el ERP. Las dos opciones resuelven la "
        + "capacidad, pero con el mismo supuesto de recuperación la del ERP genera $330,465 de VPN contra "
        + "$278,464 de la contratación, y sobre todo aguanta más: sigue siendo rentable aunque solo "
        + "recuperemos el 60 % del margen que hoy perdemos, punto en el que contratar ya nos costaría dinero.</p>"
        + "<p>El supuesto que hay que vigilar es ese 80 % de recuperación: no lo medimos, lo estimamos. "
        + "El riesgo principal es configurar mal las reglas y cotizar con criterio equivocado, así que "
        + "propongo arrancar con las tres familias de producto más repetidas, con validación humana en "
        + "paralelo durante el primer mes, y ampliar solo cuando el margen de error medido sea aceptable.</p>"
    },

    /* ============================================================
       7 · PROJECT CHARTER
       ============================================================ */
    {
      id: "charter",
      titulo: "El acta de constitución",
      objetivo: "Convertir la recomendación en un proyecto autorizado.",
      bloques: [
        {
          tipo: "clave",
          titulo: "Para qué sirve realmente",
          cuerpo: "<p>El acta de constitución —<i>project charter</i>— no es documentación. Es el documento "
            + "que <b>autoriza formalmente el proyecto, nombra a quien lo dirige y le da acceso a recursos</b>. "
            + "Sin acta no hay proyecto: hay actividad, y la actividad se cancela sin que nadie tenga que "
            + "explicar por qué.</p>"
        },
        {
          tipo: "tabla",
          titulo: "Lo que el acta sí resuelve y lo que no",
          encabezados: ["El acta sí", "El acta no"],
          filas: [
            ["Autoriza el proyecto y le asigna presupuesto", "Detalla el plan de trabajo"],
            ["Nombra al gerente y define su autoridad", "Reemplaza el cronograma"],
            ["Fija el objetivo y los criterios de éxito", "Describe la solución técnica"],
            ["Delimita qué está fuera del alcance", "Sustituye el análisis que ya hiciste"],
            ["Deja por escrito supuestos y restricciones", "Se negocia cada semana"]
          ]
        },
        {
          tipo: "nota",
          titulo: "La sección que más se descuida",
          cuerpo: "<p>El <b>alcance excluido</b>. Un acta que no dice qué queda fuera es una invitación "
            + "abierta a que el proyecto crezca hasta volverse imposible. Escribe ahí lo que sabes que "
            + "alguien va a pedir en el mes tres.</p>"
        },
        {
          tipo: "texto",
          titulo: "Tus propios números",
          cuerpo: "<p>Ya no necesitas inventar nada: el lead time actual es de <b>{{tiempos.lt}} h</b>, "
            + "la eficiencia de ciclo es de <b>{{tiempos.eficiencia}} %</b>, el costo de no hacer nada asciende "
            + "a <b>${{negocio.cnh}}</b> al año y el VPN de la alternativa recomendada es de "
            + "<b>${{negocio.vpnB}}</b>. Úsalos.</p>"
        }
      ],
      campos: [
        {
          id: "nombre", tipo: "texto", lineas: 1,
          etiqueta: "Nombre del proyecto",
          ayuda: "Que nombre el resultado, no la herramienta.",
          marcador: "Reducción del lead time de cotización…"
        },
        {
          id: "patrocinador", tipo: "texto", lineas: 1,
          etiqueta: "Patrocinador",
          ayuda: "Quien tiene la autoridad y el presupuesto. En este caso está en el enunciado."
        },
        {
          id: "gerente", tipo: "texto", lineas: 2,
          etiqueta: "Gerente del proyecto y nivel de autoridad",
          ayuda: "Qué puede decidir sin volver a preguntar. Un acta sin esto no sirve de nada."
        },
        {
          id: "justificacion", tipo: "texto", lineas: 3, minimoPalabras: 30,
          etiqueta: "Justificación del negocio, <b>con magnitud</b>",
          ayuda: "Una o dos frases con las cifras que ya calculaste. Sin adjetivos."
        },
        {
          id: "objetivo", tipo: "texto", lineas: 3, minimoPalabras: 20,
          etiqueta: "Objetivo <b>SMART</b>",
          ayuda: "Específico, medible, alcanzable, relevante y con fecha. Si no tiene número y fecha, no es SMART."
        },
        {
          id: "incluido", tipo: "texto", lineas: 3, minimoPalabras: 20,
          etiqueta: "Alcance incluido"
        },
        {
          id: "excluido", tipo: "texto", lineas: 3, minimoPalabras: 20,
          etiqueta: "Alcance <b>excluido</b>",
          ayuda: "Lo que alguien va a pedir en el mes tres y no vas a hacer."
        },
        {
          id: "entregables", tipo: "texto", lineas: 4, minimoPalabras: 20,
          etiqueta: "Entregables principales"
        },
        {
          id: "interesados", tipo: "texto", lineas: 3, minimoPalabras: 15,
          etiqueta: "Interesados clave y qué le importa a cada uno",
          ayuda: "Están todos en las entrevistas de la etapa 1."
        },
        {
          id: "cronograma",
          tipo: "cronograma",
          unidad: "semanas",
          rotulo: "Cronograma propuesto",
          etiqueta: "Cronograma: reparte el plazo entre las fases",
          ayuda: "Las fases son fijas; lo que decides es <b>cuánto dura cada una</b>. "
            + "Repartir obliga a tomar postura: casi todos subestiman las pruebas y el piloto, "
            + "y sobrestiman la configuración. Mira el total antes de darlo por bueno.",
          fases: [
            { id: "reglas",     nombre: "Definición de reglas con Ingeniería", min: 1, max: 12, valor: 3 },
            { id: "config",     nombre: "Configuración en el ERP",             min: 1, max: 12, valor: 4 },
            { id: "migracion",  nombre: "Migración del histórico",             min: 1, max: 12, valor: 2 },
            { id: "pruebas",    nombre: "Pruebas y ajustes",                   min: 1, max: 12, valor: 3 },
            { id: "piloto",     nombre: "Piloto con validación en paralelo",   min: 1, max: 12, valor: 4 },
            { id: "despliegue", nombre: "Despliegue y capacitación",           min: 1, max: 12, valor: 2 },
            { id: "estabiliza", nombre: "Estabilización y medición",           min: 1, max: 12, valor: 4 }
          ]
        },
        {
          id: "hitos", tipo: "texto", lineas: 4, minimoPalabras: 20,
          etiqueta: "Hitos: qué marca el cierre de cada fase",
          ayuda: "Un hito es un <b>resultado verificable</b>, no una actividad: «reglas aprobadas por Ingeniería», no «definir reglas»."
        },
        {
          id: "presupuesto", etiqueta: "Presupuesto autorizado que solicitas",
          respuesta: 680000, unidad: "$", tolerancia: 1,
          pista: "El del análisis de la etapa 6. Si pides otra cifra, tienes que poder defenderla."
        },
        {
          id: "riesgos", tipo: "texto", lineas: 4, minimoPalabras: 25,
          etiqueta: "Riesgos de alto nivel y respuesta prevista",
          ayuda: "Incluye la resistencia al cambio: el especialista técnico puede leer esto como una amenaza."
        },
        {
          id: "exito", tipo: "texto", lineas: 3, minimoPalabras: 20,
          etiqueta: "Criterios de éxito y de aceptación",
          ayuda: "Cómo se sabrá, con un número, que el proyecto se puede cerrar."
        },
        {
          id: "supuestos", tipo: "texto", lineas: 3, minimoPalabras: 20,
          etiqueta: "Supuestos y restricciones",
          ayuda: "El 80 % de recuperación va aquí."
        }
      ],
      rubrica: [
        "El <b>objetivo</b> tiene número y fecha, no solo intención.",
        "La <b>justificación</b> cita una cifra que tú calculaste, no una adjetivación.",
        "El <b>alcance excluido</b> no está vacío ni dice «nada».",
        "Los <b>hitos</b> son resultados verificables, no actividades («ERP configurado y probado», no «configurar el ERP»).",
        "Los <b>riesgos</b> incluyen al menos uno humano, no solo técnicos.",
        "Los <b>criterios de éxito</b> se pueden medir con datos que el proceso ya genera.",
        "El <b>supuesto</b> de recuperación aparece declarado como supuesto.",
        "El acta cabe en una hoja: si no cabe, es un plan de trabajo disfrazado."
      ],
      modelo: "<p><b>Nombre.</b> Reducción del lead time de cotización en THN mediante validación asistida por el ERP.</p>"
        + "<p><b>Patrocinador.</b> Director Comercial.</p>"
        + "<p><b>Gerente del proyecto.</b> Coordinador de Mejora de Procesos. Autoridad para convocar a "
        + "Ventas, Ingeniería y TI, definir las reglas de validación con el especialista técnico y ejercer el "
        + "presupuesto autorizado. Los cambios que alteren el margen requieren visto bueno del patrocinador.</p>"
        + "<p><b>Justificación.</b> El proceso de cotización opera hoy con un lead time promedio de 14.25 h y "
        + "una eficiencia de ciclo de 9.29 %. El 45 % de las cotizaciones se entrega después de 24 h, lo que "
        + "reduce la conversión de 38 % a 27 % y representa $534,600 anuales de margen perdido. La alternativa "
        + "recomendada tiene un VPN de $330,465 a cuatro años y se recupera en 24.5 meses.</p>"
        + "<p><b>Objetivo.</b> Entregar el 85 % de las cotizaciones en 8 horas hábiles o menos, a más tardar "
        + "el 30 de junio, sin incrementar la tasa de error de precio por encima del 12 % actual.</p>"
        + "<p><b>Alcance incluido.</b> Las tres familias de producto con mayor volumen de cotización; la "
        + "configuración de reglas de validación en el ERP; la migración del histórico de validaciones; la "
        + "capacitación de Ventas e Ingeniería; y la medición del proceso durante los dos meses posteriores "
        + "al arranque.</p>"
        + "<p><b>Alcance excluido.</b> Productos de fabricación especial y herrajes estructurales bajo norma, "
        + "que conservan validación humana obligatoria. Queda fuera cualquier cambio al proceso de pedido, a "
        + "la facturación y al portal de clientes. No se sustituye el ERP ni se contrata personal adicional.</p>"
        + "<p><b>Entregables.</b> Catálogo de reglas de validación documentado y aprobado por Ingeniería; "
        + "configuración liberada en el ERP; histórico de validaciones migrado; plan de pruebas ejecutado; "
        + "personal capacitado; tablero de lead time y tasa de error en operación.</p>"
        + "<p><b>Interesados.</b> Director Comercial (velocidad de respuesta y conversión); Ventas (dejar de "
        + "esperar y dejar de rehacer); Ingeniería (dejar de repetir validaciones sin perder control técnico); "
        + "TI (que la configuración sea sostenible); clientes industriales (recibir cotización el mismo día).</p>"
        + "<p><b>Hitos.</b> Reglas de validación aprobadas por Ingeniería · Configuración liberada en ambiente "
        + "de pruebas · Piloto en una familia de producto con validación humana en paralelo · Arranque en las "
        + "tres familias · Cierre con dos meses de medición estable.</p>"
        + "<p><b>Presupuesto autorizado.</b> $680,000 de inversión inicial, más $95,000 anuales de operación.</p>"
        + "<p><b>Riesgos.</b> Reglas mal configuradas que produzcan cotizaciones con criterio equivocado — se "
        + "mitiga con validación humana en paralelo durante el piloto y un umbral de error definido para "
        + "ampliar. Resistencia del especialista técnico, que puede leer el proyecto como una amenaza a su "
        + "puesto — se mitiga involucrándolo como autor de las reglas y redefiniendo su rol hacia las "
        + "especificaciones nuevas, que es donde su criterio sí agrega valor. Histórico de validaciones "
        + "incompleto — se mitiga acotando el alcance a las familias con mejor registro.</p>"
        + "<p><b>Criterios de éxito.</b> Lead time promedio por debajo de 8 h medido sobre un mes completo; "
        + "85 % de cotizaciones entregadas el mismo día; tasa de error de precio igual o menor a la actual; "
        + "y el tablero operando con datos que el propio ERP genera.</p>"
        + "<p><b>Supuestos y restricciones.</b> Se asume que la mejora recupera el 80 % del margen hoy perdido "
        + "y que el histórico de validaciones es utilizable para las tres familias elegidas. Restricciones: "
        + "no se contrata personal, no se sustituye el ERP, y la operación no puede detenerse durante la "
        + "implantación.</p>"
    },

    /* ============================================================
       8 · PRESENTACIÓN EJECUTIVA
       ============================================================ */
    {
      id: "presentacion",
      titulo: "La presentación a la gerencia",
      objetivo: "Decir en cinco minutos lo que te tomó cinco semanas entender.",
      bloques: [
        {
          tipo: "clave",
          titulo: "El error que hunde buenas propuestas",
          cuerpo: "<p>Contar el <b>proceso del análisis</b> en vez del <b>resultado</b>. A la gerencia no le "
            + "interesa cómo llegaste: le interesa qué decisión necesitas hoy y qué pasa si no la toma.</p>"
        },
        {
          tipo: "tabla",
          titulo: "Qué le importa a cada interlocutor",
          encabezados: ["Interlocutor", "La pregunta que trae en la cabeza"],
          filas: [
            ["Director Comercial", "¿Cuántos pedidos más cierro y cuándo?"],
            ["Dirección de Finanzas", "¿Cuánto cuesta, cuándo retorna y qué pasa si el supuesto falla?"],
            ["Dirección de Operaciones", "¿Esto rompe algo mientras se implanta?"],
            ["TI", "¿Quién lo mantiene cuando el proyecto cierre?"]
          ]
        },
        {
          tipo: "nota",
          titulo: "Regla del anexo",
          cuerpo: "<p>Todo el detalle técnico —las tres rutas, el factor de anualidad, la tabla de "
            + "sensibilidad— va en anexos. No en el cuerpo. Se saca cuando alguien pregunta, y entonces "
            + "vale el doble.</p>"
        }
      ],
      campos: [
        {
          id: "p1", tipo: "texto", lineas: 2, minimoPalabras: 15,
          etiqueta: "1 · El problema con magnitud, en 30 segundos",
          ayuda: "Una frase. Con la cifra que más duele."
        },
        {
          id: "p2", tipo: "texto", lineas: 3, minimoPalabras: 20,
          etiqueta: "2 · Qué encontramos: dos o tres hallazgos con su dato"
        },
        {
          id: "p3", tipo: "texto", lineas: 2, minimoPalabras: 15,
          etiqueta: "3 · Qué proponemos, en una sola idea"
        },
        {
          id: "p4", tipo: "texto", lineas: 3, minimoPalabras: 20,
          etiqueta: "4 · Cuánto mejora: los mismos indicadores, antes y después",
          ayuda: "Usa los mismos indicadores que usaste para el AS-IS. Cambiar de métrica a mitad de la presentación destruye la credibilidad."
        },
        {
          id: "p5", tipo: "texto", lineas: 2, minimoPalabras: 15,
          etiqueta: "5 · Cuánto cuesta y cuándo retorna"
        },
        {
          id: "p6", tipo: "texto", lineas: 3, minimoPalabras: 20,
          etiqueta: "6 · Qué riesgos tiene y cómo se mitigan"
        },
        {
          id: "p7", tipo: "texto", lineas: 2, minimoPalabras: 12,
          etiqueta: "7 · <b>Qué decisión se necesita hoy</b>",
          ayuda: "Explícita. «Autorizar $680,000 y el arranque del piloto en marzo», no «esperamos su retroalimentación»."
        },
        {
          id: "anexos", tipo: "texto", lineas: 2, minimoPalabras: 10,
          etiqueta: "Anexos que llevarías preparados"
        }
      ],
      rubrica: [
        "El punto 1 abre con una <b>cifra</b>, no con una descripción de la empresa.",
        "Los indicadores del punto 4 son los mismos que se midieron en el AS-IS.",
        "El punto 5 dice inversión, retorno y horizonte — los tres.",
        "El punto 6 incluye el riesgo de que el supuesto de recuperación falle.",
        "El punto 7 pide una decisión concreta, con monto y fecha.",
        "Nada del cuerpo repite lo que ya está en los anexos."
      ],
      modelo: "<p><b>1.</b> Estamos dejando ir $534,600 de margen al año porque casi la mitad de nuestras "
        + "cotizaciones sale después de 24 horas y el cliente ya le compró a otro.</p>"
        + "<p><b>2.</b> Tres hallazgos. El proceso trabaja 79 minutos y tarda 14 horas: el 91 % del tiempo la "
        + "cotización está esperando. La cola está en un solo punto, la validación técnica, que recibe 35 % más "
        + "trabajo del que puede procesar. Y dos de cada tres validaciones son de productos que ya habíamos "
        + "validado antes.</p>"
        + "<p><b>3.</b> Que el ERP resuelva las validaciones que ya hicimos, y que Ingeniería solo vea lo "
        + "genuinamente nuevo.</p>"
        + "<p><b>4.</b> Lead time de 14.25 h a menos de 8 h. Cotizaciones entregadas el mismo día, de 55 % a "
        + "85 %. Capacidad del proceso de 13.3 a 24.3 cotizaciones diarias, contra una demanda de 18. La tasa "
        + "de error de precio no debe subir del 12 % actual.</p>"
        + "<p><b>5.</b> $680,000 de inversión y $95,000 anuales de operación. Se recupera en 24.5 meses, con "
        + "un VPN de $330,465 y una TIR de 33.5 % a cuatro años.</p>"
        + "<p><b>6.</b> Tres riesgos. Configurar mal las reglas y cotizar con criterio equivocado: arrancamos "
        + "con validación humana en paralelo durante el piloto. Que el especialista técnico lo lea como una "
        + "amenaza: él escribe las reglas y su rol se mueve hacia las especificaciones nuevas. Y el supuesto "
        + "de fondo: estimamos recuperar el 80 % del margen perdido; aun recuperando solo el 60 % el proyecto "
        + "sigue siendo rentable, y ese es el punto donde contratar a alguien ya no lo sería.</p>"
        + "<p><b>7.</b> Necesitamos autorización por $680,000 y el arranque del piloto en la familia de "
        + "sujetadores estándar el primer día de marzo.</p>"
        + "<p><b>Anexos.</b> Las tres rutas con sus tiempos y el cálculo del CT; el detalle de capacidad por "
        + "recurso; la tabla de sensibilidad del VPN entre 50 % y 80 % de recuperación; y el catálogo "
        + "preliminar de reglas de validación por familia.</p>"
    }
  ]
});
