/* Generado por herramientas/cadenas.js — no editar a mano la estructura.
   Para corregir una traducción: edita herramientas/traduccion/semana-3.json
   y vuelve a ejecutar:  node herramientas/cadenas.js inyectar semana-3 */
EA.registrarSemanaEn(
{
 "id": 3,
 "estado": "publicada",
 "titulo": "Process analysis, design and improvement",
 "subtitulo": "Cycle time, capacity, bottleneck and redesign backed by numerical evidence.",
 "sesiones": 4,
 "objetivos": [
  "Explain business process management (BPM), its lifecycle and its relationship with BPMN and the AS-IS model.",
  "Distinguish automation, digitalization and digital transformation, and place technology as an enabler of operational efficiency.",
  "Calculate the cycle time (CT) of a process with multiple routes, parallel routes and rework.",
  "Calculate the theoretical cycle time (TCT) and the cycle efficiency, and explain what the difference reveals.",
  "Calculate the takt time and contrast it with the cycle time.",
  "Calculate the capacity of a process, identify the bottleneck and determine the capacity in use.",
  "Apply the theory of constraints to decide where to invest.",
  "Design an improvement proposal and support it with a reduction in time, a reduction in cost or an increase in capacity."
 ],
 "dias": [
  {
   "id": "s1",
   "nombre": "Session 1",
   "tema": "Process-based management, BPM and the AS-IS model",
   "proposito": "Establish the vocabulary and the method before touching numbers: what managing by processes means, how the current situation is modeled, and why technology is an enabler, not a starting point.",
   "bloques": [
    {
     "tipo": "clave",
     "titulo": "The idea that organizes the whole week",
     "cuerpo": "<p>There is no point in adding checkout lanes at the supermarket if there are not enough cashiers, or if every bulk product that has to be weighed stretches the payment. <b>Technology is the enabler of operational efficiency, not the strategy.</b> A digital transformation project is justified because it reduces cost, speeds up a time or generates value — not because technology is fashionable.</p>"
    },
    {
     "tipo": "defs",
     "titulo": "Process-based management (BPM)",
     "items": [
      {
       "termino": "Process-based management",
       "definicion": "A way of managing the organization that takes <b>end-to-end processes</b> as the unit of analysis and improvement, instead of functions or departments."
      },
      {
       "termino": "BPM — Business Process Management",
       "definicion": "Discipline for identifying, modeling, executing, measuring, controlling and improving business processes on a continuous basis."
      },
      {
       "termino": "BPM — Business Process Modeling",
       "definicion": "In this module the acronym is also used for process <b>modeling</b>: representing the process so that you can analyze it. Context tells it apart from the management discipline."
      },
      {
       "termino": "BPMN — Business Process Model and Notation",
       "definicion": "The standard <b>notation</b> (ISO 19510) used to draw them: events, activities, gateways, flows and lanes. BPM is the discipline; BPMN is the language."
      }
     ]
    },
    {
     "tipo": "pasos",
     "titulo": "Process management lifecycle",
     "items": [
      "<b>Identification:</b> which processes exist and which ones matter (process architecture).",
      "<b>Discovery:</b> capture how it operates today → <b>AS-IS model</b>.",
      "<b>Analysis:</b> measure times, costs, capacity; detect waste and bottlenecks.",
      "<b>Redesign:</b> propose the TO-BE model and evaluate alternatives.",
      "<b>Implementation:</b> organizational changes and automation.",
      "<b>Monitoring and control:</b> indicators in operation; any deviation goes back to analysis."
     ]
    },
    {
     "tipo": "nota",
     "titulo": "Learning sequence of the challenge",
     "cuerpo": "<p>1. Selection of the process to analyze · 2. Get to know the elements of the process · 3. Analysis of the current situation · 4. Performance metrics · 5. Design of the improvement proposal.</p><p>Steps 3 and 4 are the ones this week turns into <b>defensible numbers</b>.</p>"
    },
    {
     "tipo": "lista",
     "titulo": "Process components",
     "items": [
      "<b>Inputs and outputs:</b> what it receives and what it delivers.",
      "<b>Activities:</b> the work itself.",
      "<b>Resources:</b> people, machines, systems — and <b>how many units</b> there are of each one. This figure decides the capacity.",
      "<b>Roles and owners:</b> who executes and who authorizes.",
      "<b>Rules and controls:</b> policies, inspections, approval thresholds.",
      "<b>Data and applications:</b> what information is created, what is consulted and where it lives.",
      "<b>Events:</b> what triggers the process and what interrupts it.",
      "<b>Indicators:</b> how you know whether the process is doing well."
     ]
    },
    {
     "tipo": "tabla",
     "titulo": "Projects versus processes",
     "encabezados": [
      "Process",
      "Project"
     ],
     "filas": [
      [
       "Repeatable; it runs many times",
       "Temporary; it has a start and an end"
      ],
      [
       "Produces a recurring result",
       "Produces a unique result"
      ],
      [
       "Measured with cycle time, capacity, cost per transaction",
       "Measured with scope, time, cost of the deliverable"
      ],
      [
       "It is improved",
       "It is delivered and closed"
      ],
      [
       "Example: fulfilling orders",
       "Example: implementing the system that will fulfill orders"
      ]
     ]
    },
    {
     "tipo": "defs",
     "titulo": "AS-IS model and precedence diagram",
     "items": [
      {
       "termino": "AS-IS model",
       "definicion": "Representation of the process <b>exactly as it operates today</b>, with its real times, waits, rework and resources. It is not how it ought to operate, nor what the manual says."
      },
      {
       "termino": "Precedence diagram",
       "definicion": "Representation that shows which activity depends on which. It is the indispensable step before the calculation: without knowing what runs in series, in parallel or in branches, you cannot calculate the cycle time."
      },
      {
       "termino": "Precedence table",
       "definicion": "Activity · predecessor · processing time · wait time · resource. It is the minimum format you need in order to calculate."
      }
     ]
    },
    {
     "tipo": "lista",
     "titulo": "Modeling techniques used in industry",
     "items": [
      "<b>BPMN (ISO 19510):</b> the de facto standard for business processes; understandable for business and for IT alike.",
      "<b>Flow diagram / flowchart:</b> simple, useful for linear processes.",
      "<b>SIPOC:</b> delimits the scope before modeling the detail.",
      "<b>Value Stream Mapping (VSM):</b> characteristic of Lean; it makes visible the time that adds value against the time that does not.",
      "<b>Swimlane diagram:</b> it reveals the <i>handoffs</i> between areas, which is where the waits pile up.",
      "<b>UML activity diagrams:</b> more frequent in software engineering contexts.",
      "<b>Precedence diagram / activity network:</b> the one you use to calculate times and routes."
     ]
    },
    {
     "tipo": "defs",
     "titulo": "Automation, digitalization and digital transformation",
     "items": [
      {
       "termino": "Digitalization",
       "definicion": "The information or the activity moves to digital media. The process can stay identical."
      },
      {
       "termino": "Automation",
       "definicion": "Technology <b>executes</b> the activity: it validates, calculates, notifies, updates."
      },
      {
       "termino": "Digital transformation",
       "definicion": "The whole process is questioned and capabilities, customer experience or the business model change."
      },
      {
       "termino": "Industry 4.0",
       "definicion": "Integration of the physical and digital worlds: sensors, IoT, cyber-physical systems, cloud, analytics and AI, with decisions based on integrated real-time data."
      }
     ]
    },
    {
     "tipo": "clave",
     "titulo": "A recurring warning",
     "cuerpo": "<p>Automating a bad process produces a bad process that is faster and more expensive to maintain. <b>First you redesign, then you automate.</b></p>"
    },
    {
     "tipo": "lista",
     "titulo": "Frameworks, standards and regulation applicable to the process",
     "items": [
      "<b>Corporate:</b> internal policies, authorization matrix, segregation of duties.",
      "<b>Legal and national:</b> tax obligations (CFDI), personal data protection, labor requirements.",
      "<b>Industrial:</b> sector standards for the line of business (automotive, food, steel, pharmaceutical).",
      "<b>International:</b> ISO 9001 (quality), ISO/IEC 27001 (information security), ISO/IEC 20000-1 (IT services), BPMN/ISO 19510 (modeling).",
      "<b>Management frameworks:</b> BPM, Lean, Six Sigma, theory of constraints for improvement; COBIT and ITIL when the process is an IT process."
     ]
    },
    {
     "tipo": "nota",
     "titulo": "A practical rule when you redesign",
     "cuerpo": "<p>A control activity that exists because of <b>regulation or a standard</b> is not eliminated even if it adds no value for the customer: you redesign it so that it costs less time (automate it, move it, do it by sampling when the standard allows it).</p>"
    },
    {
     "tipo": "texto",
     "titulo": "Technology infrastructure as an enabler",
     "cuerpo": "<p>The capacity of the process is bounded by its most limited resource, and that resource is often <b>not</b> the application: it is the branch's network link, the number of terminals, the availability of the ERP or the latency of the point of sale.</p><p>When you propose an improvement you have to verify that the infrastructure supports the new volume: a self-service portal is useless if the data channel or the number of licenses limits the operation.</p>"
    }
   ]
  },
  {
   "id": "s2",
   "nombre": "Session 2",
   "tema": "Cycle time analysis",
   "proposito": "Calculate how long a job really takes to cross the process, how much of that time is work and how much is waiting, and how multiple routes, parallel routes and rework are handled.",
   "bloques": [
    {
     "tipo": "defs",
     "titulo": "The five times you have to tell apart",
     "items": [
      {
       "termino": "Processing time",
       "definicion": "Time during which <b>someone or something is actually working</b> on the job. It is the only one that consumes resource capacity."
      },
      {
       "termino": "Wait time",
       "definicion": "Time during which the job <b>is in the process but nobody is working on it</b>: queue, pending approval, transfer, storage, inspection in line. It stretches the clock without occupying the resource."
      },
      {
       "termino": "Lead time",
       "definicion": "Total elapsed time <b>from the moment the customer asks for it until the customer receives it</b>. It is calendar time measured on a wall clock: it includes processing, waiting, nights, weekends and everything that happens in between. It is the time the customer perceives."
      },
      {
       "termino": "Cycle time — CT (Cycle Time)",
       "definicion": "Average time the <b>process</b> takes to complete one job, from start to finish. It includes processing and waiting. You can measure it with a stopwatch."
      },
      {
       "termino": "Theoretical cycle time — TCT",
       "definicion": "The same calculation but with <b>only the processing time</b>, assuming zero waits. It is the floor the process could aspire to without changing the technology."
      },
      {
       "termino": "Takt time",
       "definicion": "The pace at which you have to produce in order to meet demand. <b>It is not measured with a stopwatch: it is calculated.</b> From the German <i>Takt</i>, beat or rhythm."
      }
     ]
    },
    {
     "tipo": "nota",
     "titulo": "Lead time and cycle time: the most common confusion in the module",
     "cuerpo": "<p>In many texts —and in this course— they are used almost as synonyms, and in most of the exercises they <b>give the same number</b>. But they are not the same thing, and it is worth being clear about the difference:</p><ul><li><b>Cycle time</b> looks inward: how long <i>the process</i> takes to produce one unit, counting only the time the work is inside its boundaries.</li><li><b>Lead time</b> looks outward: how long <i>the customer</i> waits from asking to receiving, in calendar time.</li></ul><p><b>Example.</b> Onboarding a supplier has a cycle time of 45 minutes of work plus internal waits. But if the request arrives on a Friday at 6 in the evening and nobody touches it until Monday, the <b>lead time</b> the supplier perceives is 72 hours. The process was not slower: the calendar was.</p><p>Practical rule: when the process runs continuously and the work enters the process the moment it is requested, <b>lead time ≈ cycle time</b>, and it is valid to use them interchangeably. When there are schedules, shifts, queues before start-up, or the customer waits outside the process, <b>you have to measure and report the lead time</b>: it is the number that hurts the customer.</p><p>In your submission, <b>state which one you are measuring</b> and from which event to which event. An indicator without defined boundaries is not comparable with anything.</p>"
    },
    {
     "tipo": "clave",
     "titulo": "Activity time",
     "cuerpo": "<p><b>Activity time = processing time + wait time</b></p><p>The times that are “extra” to processing are inspection, transport, storage and waiting. That is where the waste lives.</p>"
    },
    {
     "tipo": "clave",
     "titulo": "Cycle efficiency",
     "cuerpo": "<p><b>Cycle efficiency = TCT / CT</b></p><p>A process with 22 minutes of real work and 23 hours of total duration has an efficiency close to 1.6 %. That number, on its own, already justifies an improvement project.</p>"
    },
    {
     "tipo": "tabla",
     "titulo": "The four calculation rules",
     "encabezados": [
      "Situation",
      "How it is calculated",
      "Why"
     ],
     "filas": [
      [
       "<b>Sequential</b> activities",
       "Sum: T₁ + T₂ + … + Tₙ",
       "The work passes through all of them, one after another"
      ],
      [
       "<b>Multiple routes</b> (exclusive gateway)",
       "Σ pᵢ · Tᵢ &nbsp;→&nbsp; p₁T₁ + p₂T₂ + … + pₙTₙ",
       "Each job takes only one branch; it is weighted by its probability"
      ],
      [
       "<b>Parallel routes</b> (AND gateway)",
       "max(T₁ … Tₙ)",
       "Even if one branch finishes earlier, it has to wait for the slowest one in order to converge"
      ],
      [
       "<b>Rework</b>, a single repetition",
       "CT = (1 + r) · T",
       "A fraction r of the jobs repeats the cycle once"
      ],
      [
       "<b>Rework</b>, unlimited repetitions",
       "CT = T / (1 − r)",
       "Geometric series: it can repeat as many times as necessary"
      ]
     ]
    },
    {
     "tipo": "nota",
     "titulo": "Careful with the two rework formulas",
     "cuerpo": "<p>With r = 0.15 and T = 20 min: a single repetition gives <b>23 min</b> (1.15 × 20); unlimited repetitions give <b>23.53 min</b> (20 / 0.85). The difference grows fast as r rises: with r = 0.4 it is 28 min against 33.3 min.</p><p>Choose the formula according to what the real process says, and <b>state the assumption</b> in your submission.</p>"
    },
    {
     "tipo": "clave",
     "titulo": "Takt time",
     "cuerpo": "<p><b>Takt = Net available time / Customer demand</b></p><p>Mnemonic rule of the <i>touchdown</i>: <b>T / D</b>. If the customer wants 240 toasters and there are 480 minutes of production, the takt is 2 minutes per toaster.</p>"
    },
    {
     "tipo": "tabla",
     "titulo": "Takt against cycle time: what each comparison means",
     "encabezados": [
      "Relationship",
      "Interpretation",
      "Action"
     ],
     "filas": [
      [
       "CT &lt; Takt",
       "The process produces faster than the customer asks for",
       "There is slack; watch out for overproduction"
      ],
      [
       "CT ≈ Takt",
       "The process is synchronized with demand",
       "Target situation; watch the variation"
      ],
      [
       "CT &gt; Takt",
       "The process is slower than demand",
       "Delivery will not be met: you have to reduce CT or increase capacity"
      ]
     ]
    },
    {
     "tipo": "defs",
     "titulo": "Load, WIP and throughput",
     "items": [
      {
       "termino": "Job",
       "definicion": "A job or unit that goes through the process: an order, a supplier onboarding, a toaster."
      },
      {
       "termino": "WIP — Work in Process",
       "definicion": "All the jobs that are inside the process at a given moment, finished or not. It is measured in <b>units</b> (30 requests, 120 pieces)."
      },
      {
       "termino": "Throughput",
       "definicion": "Number of jobs the process completes per unit of time. It is the capacity actually achieved. It is measured in <b>units per time</b> (18 requests/hour)."
      },
      {
       "termino": "Lead time",
       "definicion": "Total time a job stays inside the process, from the moment it enters until it leaves. It is measured in <b>time</b> (2.5 hours)."
      },
      {
       "termino": "Little's Law",
       "definicion": "<b>WIP = Throughput × Lead time.</b> The units check out: units = (units/time) × time. It relates the three: if WIP rises and capacity does not, lead time stretches proportionally."
      }
     ]
    },
    {
     "tipo": "texto",
     "titulo": "Little's Law",
     "cuerpo": "<p>Published by <b>John D. C. Little in 1961</b>, it relates the three fundamental magnitudes of any process with a single identity:</p><p style=\"text-align:center;font-size:1.1rem\"><b>WIP = Throughput × Lead time</b></p><p>In queueing theory notation it is written <b>L = λW</b>: the average number of entities inside the system equals the arrival rate times the average time each one stays.</p><p>What is remarkable is that <b>it is not an approximation, nor a model with assumptions</b>: it is a proven identity that holds no matter how arrivals are distributed, how much service times vary, how many servers there are, or the order in which they are served. That is rare in process engineering, where almost every queueing formula demands strong assumptions.</p>"
    },
    {
     "tipo": "svg",
     "titulo": "What happens when work in process rises",
     "pie": "The same process, with the same capacity, receiving twice the work. No more comes out: each request simply waits twice as long.",
     "svg": "<svg viewBox=\"0 0 760 286\" role=\"img\" aria-label=\"Comparación de dos escenarios con el mismo throughput de 18 solicitudes por hora: con 45 solicitudes dentro el lead time es de 2.5 horas; al duplicar el trabajo en curso a 90 el lead time se duplica a 5 horas\"><defs><marker id=\"pa-lit\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path class=\"punta\" d=\"M0,0 L10,5 L0,10 z\"/></marker><marker id=\"pa-lit-v\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path class=\"punta-viva\" d=\"M0,0 L10,5 L0,10 z\"/></marker></defs><text class=\"rotulo\" x=\"174\" y=\"26\" text-anchor=\"middle\">Current state</text><text class=\"rotulo\" x=\"554\" y=\"26\" text-anchor=\"middle\">Twice the work released</text><path class=\"arista\" d=\"M22,105 L68,105\" marker-end=\"url(#pa-lit)\"/><text class=\"rotulo-sm\" x=\"45\" y=\"96\" text-anchor=\"middle\">18/h</text><rect class=\"caja\" x=\"74\" y=\"58\" width=\"200\" height=\"92\" rx=\"12\"/><text class=\"rotulo\" x=\"174\" y=\"78\" text-anchor=\"middle\">WIP = 45</text><circle class=\"caja-alt\" cx=\"100\" cy=\"104\" r=\"6\"/><circle class=\"caja-alt\" cx=\"130\" cy=\"104\" r=\"6\"/><circle class=\"caja-alt\" cx=\"160\" cy=\"104\" r=\"6\"/><circle class=\"caja-alt\" cx=\"190\" cy=\"104\" r=\"6\"/><circle class=\"caja-alt\" cx=\"220\" cy=\"104\" r=\"6\"/><circle class=\"caja-alt\" cx=\"250\" cy=\"104\" r=\"6\"/><circle class=\"caja-alt\" cx=\"100\" cy=\"128\" r=\"6\"/><circle class=\"caja-alt\" cx=\"130\" cy=\"128\" r=\"6\"/><circle class=\"caja-alt\" cx=\"160\" cy=\"128\" r=\"6\"/><circle class=\"caja-alt\" cx=\"190\" cy=\"128\" r=\"6\"/><circle class=\"caja-alt\" cx=\"220\" cy=\"128\" r=\"6\"/><circle class=\"caja-alt\" cx=\"250\" cy=\"128\" r=\"6\"/><path class=\"arista\" d=\"M278,105 L324,105\" marker-end=\"url(#pa-lit)\"/><text class=\"rotulo-sm\" x=\"301\" y=\"96\" text-anchor=\"middle\">18/h</text><path class=\"arista\" d=\"M74,160 L74,170 L274,170 L274,160\"/><text class=\"rotulo\" x=\"174\" y=\"190\" text-anchor=\"middle\">Lead time = 2.5 h</text><path class=\"arista\" d=\"M402,105 L448,105\" marker-end=\"url(#pa-lit)\"/><text class=\"rotulo-sm\" x=\"425\" y=\"96\" text-anchor=\"middle\">18/h</text><rect class=\"caja\" x=\"454\" y=\"58\" width=\"200\" height=\"92\" rx=\"12\"/><text class=\"rotulo\" x=\"554\" y=\"78\" text-anchor=\"middle\">WIP = 90</text><circle class=\"caja-alt\" cx=\"480\" cy=\"94\" r=\"5\"/><circle class=\"caja-alt\" cx=\"510\" cy=\"94\" r=\"5\"/><circle class=\"caja-alt\" cx=\"540\" cy=\"94\" r=\"5\"/><circle class=\"caja-alt\" cx=\"570\" cy=\"94\" r=\"5\"/><circle class=\"caja-alt\" cx=\"600\" cy=\"94\" r=\"5\"/><circle class=\"caja-alt\" cx=\"630\" cy=\"94\" r=\"5\"/><circle class=\"caja-alt\" cx=\"480\" cy=\"110\" r=\"5\"/><circle class=\"caja-alt\" cx=\"510\" cy=\"110\" r=\"5\"/><circle class=\"caja-alt\" cx=\"540\" cy=\"110\" r=\"5\"/><circle class=\"caja-alt\" cx=\"570\" cy=\"110\" r=\"5\"/><circle class=\"caja-alt\" cx=\"600\" cy=\"110\" r=\"5\"/><circle class=\"caja-alt\" cx=\"630\" cy=\"110\" r=\"5\"/><circle class=\"caja-alt\" cx=\"480\" cy=\"126\" r=\"5\"/><circle class=\"caja-alt\" cx=\"510\" cy=\"126\" r=\"5\"/><circle class=\"caja-alt\" cx=\"540\" cy=\"126\" r=\"5\"/><circle class=\"caja-alt\" cx=\"570\" cy=\"126\" r=\"5\"/><circle class=\"caja-alt\" cx=\"600\" cy=\"126\" r=\"5\"/><circle class=\"caja-alt\" cx=\"630\" cy=\"126\" r=\"5\"/><circle class=\"caja-alt\" cx=\"480\" cy=\"142\" r=\"5\"/><circle class=\"caja-alt\" cx=\"510\" cy=\"142\" r=\"5\"/><circle class=\"caja-alt\" cx=\"540\" cy=\"142\" r=\"5\"/><circle class=\"caja-alt\" cx=\"570\" cy=\"142\" r=\"5\"/><circle class=\"caja-alt\" cx=\"600\" cy=\"142\" r=\"5\"/><circle class=\"caja-alt\" cx=\"630\" cy=\"142\" r=\"5\"/><path class=\"arista\" d=\"M658,105 L704,105\" marker-end=\"url(#pa-lit)\"/><text class=\"rotulo-sm\" x=\"681\" y=\"96\" text-anchor=\"middle\">18/h</text><path class=\"arista-viva\" d=\"M454,160 L454,170 L654,170 L654,160\"/><text class=\"rotulo\" x=\"554\" y=\"190\" text-anchor=\"middle\" fill=\"currentColor\">Lead time = 5 h</text><text class=\"rotulo-viva\" x=\"554\" y=\"207\" text-anchor=\"middle\">twice the wait</text><text class=\"rotulo\" x=\"380\" y=\"243\" text-anchor=\"middle\">Throughput did NOT change: still 18 per hour.</text><text class=\"rotulo-sm\" x=\"174\" y=\"266\" text-anchor=\"middle\">LT = 45 / 18 = 2.5 h</text><text class=\"rotulo-sm\" x=\"554\" y=\"266\" text-anchor=\"middle\">LT = 90 / 18 = 5 h</text></svg>"
    },
    {
     "tipo": "clave",
     "titulo": "The lesson to take away from the week",
     "cuerpo": "<p>If throughput is capped by the bottleneck, <b>pushing more work into the process does not produce more</b>: it only stretches how long each job waits.</p><p>A manager sees late orders and their instinct is to release more work to the floor. Little's Law says that this worsens lead time proportionally without gaining a single unit of output.</p><p>That is where the reason for <b>WIP limits</b> on a Kanban board comes from, with proof and not with opinion: to deliver faster you have to <b>start fewer things</b>, not more.</p>"
    },
    {
     "tipo": "tabla",
     "titulo": "The three rearrangements",
     "encabezados": [
      "Form",
      "Question it answers",
      "When you use it"
     ],
     "filas": [
      [
       "<code>WIP = Th × LT</code>",
       "How much work do I have stuck inside?",
       "Sizing work in process or waiting queues"
      ],
      [
       "<code>LT = WIP / Th</code>",
       "How long does a job take?",
       "The most used one: estimating the promised lead time"
      ],
      [
       "<code>Th = WIP / LT</code>",
       "At what pace am I completing work?",
       "Checking the real throughput rate against the theoretical capacity"
      ]
     ]
    },
    {
     "tipo": "lista",
     "titulo": "The three conditions for applying it",
     "items": [
      "<b>Steady state:</b> the system is not growing or emptying in a sustained way. On average, what comes in goes out.",
      "<b>Consistent units:</b> if throughput is per hour, lead time goes in hours. The check is automatic: <i>units = (units/time) × time</i>.",
      "<b>Long-run averages:</b> it does not describe an instant or an individual case, but the average behavior of the process."
     ]
    },
    {
     "tipo": "nota",
     "titulo": "Three frequent mistakes",
     "cuerpo": "<p><b>1. Confusing throughput with capacity.</b> Throughput is what <i>actually</i> comes out; capacity is the maximum possible. They only coincide when the process is saturated.</p><p><b>2. Applying it to a system that is not in steady state.</b> If WIP has been growing month after month, the system is not stable and the identity describes nothing useful.</p><p><b>3. Believing that it explains the why.</b> It is an identity, not a causal model: it says that the three variables are tied together, not which one causes which. It diagnoses; it does not prescribe.</p>"
    },
    {
     "tipo": "clave",
     "titulo": "For the whiteboard",
     "cuerpo": "<p style=\"font-size:1.05rem\">Low WIP, short lead time. <b>It is arithmetic, not management philosophy.</b></p>"
    },
    {
     "tipo": "svg",
     "titulo": "Reference process with the three patterns",
     "pie": "The three patterns in a single process. Each dotted zone is calculated with its own rule and the cycle time is the sum of the five segments: 10 + 29 + 38.5 + 13 + 2 = 92.5 minutes.",
     "svg": "<svg viewBox=\"0 0 1090 352\" role=\"img\" aria-label=\"Proceso de referencia: la actividad A alimenta una compuerta exclusiva que envía 70 por ciento a C y 30 por ciento a B y luego a C; sigue un ciclo D, E e inspección I con 10 por ciento de retrabajo; después una compuerta paralela ejecuta G y F simultáneamente y converge en H\"><defs><marker id=\"pa-proc\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path class=\"punta\" d=\"M0,0 L10,5 L0,10 z\"/></marker><marker id=\"pa-proc-v\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path class=\"punta-viva\" d=\"M0,0 L10,5 L0,10 z\"/></marker></defs><rect class=\"zona\" x=\"138\" y=\"150\" width=\"280\" height=\"178\" rx=\"16\"/><text class=\"rotulo-viva\" x=\"278\" y=\"142\" text-anchor=\"middle\">MULTIPLE ROUTES · Σ p·T</text><rect class=\"zona\" x=\"432\" y=\"96\" width=\"258\" height=\"138\" rx=\"16\"/><text class=\"rotulo-viva\" x=\"561\" y=\"88\" text-anchor=\"middle\">REWORK · (1+r)·T</text><rect class=\"zona\" x=\"714\" y=\"96\" width=\"236\" height=\"214\" rx=\"16\"/><text class=\"rotulo-viva\" x=\"832\" y=\"88\" text-anchor=\"middle\">PARALLEL ROUTES · max</text><circle class=\"caja\" cx=\"26\" cy=\"200\" r=\"12\"/><path class=\"arista\" d=\"M40,200 L48,200\" marker-end=\"url(#pa-proc)\"/><rect class=\"caja\" x=\"52\" y=\"174\" width=\"76\" height=\"52\" rx=\"9\"/><text class=\"rotulo\" x=\"90\" y=\"196\" text-anchor=\"middle\">A</text><text class=\"rotulo-sm\" x=\"90\" y=\"212\" text-anchor=\"middle\">10 min</text><path class=\"arista\" d=\"M128,200 L142,200\" marker-end=\"url(#pa-proc)\"/><polygon class=\"caja-viva\" points=\"168,177 191,200 168,223 145,200\"/><text class=\"rotulo\" x=\"168\" y=\"205\" text-anchor=\"middle\">×</text><path class=\"arista\" d=\"M191,200 L326,200\" marker-end=\"url(#pa-proc)\"/><text class=\"rotulo-sm\" x=\"258\" y=\"192\" text-anchor=\"middle\">0.7</text><path class=\"arista\" d=\"M168,223 C168,266 196,292 222,292\" marker-end=\"url(#pa-proc)\"/><text class=\"rotulo-sm\" x=\"150\" y=\"262\" text-anchor=\"middle\">0.3</text><rect class=\"caja\" x=\"227\" y=\"266\" width=\"76\" height=\"52\" rx=\"9\"/><text class=\"rotulo\" x=\"265\" y=\"288\" text-anchor=\"middle\">B</text><text class=\"rotulo-sm\" x=\"265\" y=\"304\" text-anchor=\"middle\">20 min</text><path class=\"arista\" d=\"M303,292 C332,292 350,262 358,230\" marker-end=\"url(#pa-proc)\"/><rect class=\"caja\" x=\"332\" y=\"174\" width=\"76\" height=\"52\" rx=\"9\"/><text class=\"rotulo\" x=\"370\" y=\"196\" text-anchor=\"middle\">C</text><text class=\"rotulo-sm\" x=\"370\" y=\"212\" text-anchor=\"middle\">23 min</text><path class=\"arista\" d=\"M408,200 L434,200\" marker-end=\"url(#pa-proc)\"/><rect class=\"caja\" x=\"440\" y=\"174\" width=\"76\" height=\"52\" rx=\"9\"/><text class=\"rotulo\" x=\"478\" y=\"196\" text-anchor=\"middle\">D</text><text class=\"rotulo-sm\" x=\"478\" y=\"212\" text-anchor=\"middle\">10 min</text><path class=\"arista\" d=\"M516,200 L524,200\" marker-end=\"url(#pa-proc)\"/><rect class=\"caja\" x=\"530\" y=\"174\" width=\"76\" height=\"52\" rx=\"9\"/><text class=\"rotulo\" x=\"568\" y=\"196\" text-anchor=\"middle\">E</text><text class=\"rotulo-sm\" x=\"568\" y=\"212\" text-anchor=\"middle\">20 min</text><path class=\"arista\" d=\"M606,200 L630,200\" marker-end=\"url(#pa-proc)\"/><polygon class=\"caja-viva\" points=\"658,176 681,200 658,224 635,200\"/><text class=\"rotulo-sm\" x=\"658\" y=\"204\" text-anchor=\"middle\">I · 5</text><path class=\"arista-viva\" d=\"M652,178 C630,126 520,112 478,170\" marker-end=\"url(#pa-proc-v)\"/><text class=\"rotulo-viva\" x=\"566\" y=\"112\" text-anchor=\"middle\">0.1 reject → back to D</text><path class=\"arista\" d=\"M681,200 L716,200\" marker-end=\"url(#pa-proc)\"/><text class=\"rotulo-sm\" x=\"700\" y=\"192\" text-anchor=\"middle\">0.9</text><polygon class=\"caja-viva\" points=\"740,180 758,200 740,220 722,200\"/><text class=\"rotulo\" x=\"740\" y=\"205\" text-anchor=\"middle\">+</text><path class=\"arista\" d=\"M740,180 C740,148 776,138 790,133\" marker-end=\"url(#pa-proc)\"/><path class=\"arista\" d=\"M740,220 C740,252 776,262 790,267\" marker-end=\"url(#pa-proc)\"/><rect class=\"caja\" x=\"794\" y=\"104\" width=\"76\" height=\"52\" rx=\"9\"/><text class=\"rotulo\" x=\"832\" y=\"126\" text-anchor=\"middle\">G</text><text class=\"rotulo-sm\" x=\"832\" y=\"142\" text-anchor=\"middle\">13 min</text><rect class=\"caja\" x=\"794\" y=\"244\" width=\"76\" height=\"52\" rx=\"9\"/><text class=\"rotulo\" x=\"832\" y=\"266\" text-anchor=\"middle\">F</text><text class=\"rotulo-sm\" x=\"832\" y=\"282\" text-anchor=\"middle\">9 min</text><path class=\"arista\" d=\"M870,130 C898,140 906,160 916,186\" marker-end=\"url(#pa-proc)\"/><path class=\"arista\" d=\"M870,270 C898,260 906,240 916,214\" marker-end=\"url(#pa-proc)\"/><polygon class=\"caja-viva\" points=\"924,180 942,200 924,220 906,200\"/><text class=\"rotulo\" x=\"924\" y=\"205\" text-anchor=\"middle\">+</text><path class=\"arista\" d=\"M942,200 L954,200\" marker-end=\"url(#pa-proc)\"/><rect class=\"caja\" x=\"958\" y=\"174\" width=\"76\" height=\"52\" rx=\"9\"/><text class=\"rotulo\" x=\"996\" y=\"196\" text-anchor=\"middle\">H</text><text class=\"rotulo-sm\" x=\"996\" y=\"212\" text-anchor=\"middle\">2 min</text><path class=\"arista\" d=\"M1034,200 L1044,200\" marker-end=\"url(#pa-proc)\"/><circle class=\"caja\" cx=\"1060\" cy=\"200\" r=\"12\"/><circle class=\"caja\" cx=\"1060\" cy=\"200\" r=\"7\"/></svg>"
    },
    {
     "tipo": "texto",
     "titulo": "How you build the CT expression",
     "cuerpo": "<p>You walk the process from start to finish and apply the rule that corresponds to each segment:</p><ol><li>Common activity at the start: <code>A</code></li><li>Multiple-routes segment: <code>0.3 × B + C</code> (C is common to both branches)</li><li>Segment with rework: <code>T = D + E + I</code>, then <code>(1+r)·T</code> or <code>T/(1−r)</code></li><li>Parallel segment: <code>max(G, F)</code></li><li>Common activity at the end: <code>H</code></li></ol><p>The total is the sum of the five segments. In the practice area you will find this exercise solved step by step.</p>"
    },
    {
     "tipo": "nota",
     "titulo": "Frequent mistake",
     "cuerpo": "<p>When an activity is <b>common to several branches</b> (like F in the class exercise, which follows both C and D), it must appear in <b>each</b> weighted term — or be factored out of the weighting. Forgetting this is the number one cause of a badly calculated CT.</p>"
    },
    {
     "tipo": "lista",
     "titulo": "Levers for reducing the cycle time",
     "items": [
      "Eliminate unnecessary waits and sequential approvals.",
      "Parallelize activities that today run in series without needing to.",
      "Reduce the rework rate r by attacking the cause of the defect (this is where Six Sigma comes in).",
      "Eliminate duplicate data capture through systems integration.",
      "Reduce handoffs between areas: every transfer is a potential queue.",
      "Apply <i>triage</i>: separate the simple cases from the complex ones and give them different routes."
     ]
    }
   ]
  },
  {
   "id": "s3",
   "nombre": "Session 3",
   "tema": "Capacity, bottleneck and costs",
   "proposito": "Determine how many units the process can really handle per day, which resource limits it and how much each transaction costs. It is the part of the module that gives hard justification to the proposal.",
   "bloques": [
    {
     "tipo": "clave",
     "titulo": "Capacity is not defined by the process: it is defined by its most limited resource",
     "cuerpo": "<p>Cycle time tells you how long <b>one</b> job takes. Capacity tells you how many jobs fit <b>per day</b>. They are different questions and they are calculated differently.</p>"
    },
    {
     "tipo": "pasos",
     "titulo": "Capacity calculation procedure",
     "items": [
      "<b>Assign each activity to its resource</b> (R1, R2, R3…). One resource can handle several activities.",
      "<b>Calculate the load factor of each activity:</b> what fraction of the jobs passes through it. A common activity has factor 1; one that sits on a 40 % branch with 15 % reprocessing has 0.4 × 1.15 = 0.46.",
      "<b>Load per job of each resource:</b> Σ (processing time × load factor) of all its activities. <b>You use the processing time, not the wait time:</b> the resource is only busy while it is working.",
      "<b>Capacity per resource unit:</b> 1 / load per job (jobs per minute).",
      "<b>Pool capacity:</b> available units / load per job.",
      "<b>Capacity per day:</b> pool capacity × 60 × operating hours.",
      "<b>Theoretical capacity of the process:</b> the <b>minimum</b> among the capacities of all the resources.",
      "<b>Bottleneck:</b> the resource that produced that minimum.",
      "<b>Capacity in use:</b> demand / theoretical capacity."
     ]
    },
    {
     "tipo": "nota",
     "titulo": "Why you use the processing time and not the activity time",
     "cuerpo": "<p>While a job <b>waits</b>, the resource is free to handle another one. Waiting stretches the cycle time but <b>does not consume capacity</b>. Confusing the two artificially inflates the load and shifts the bottleneck to the wrong resource.</p>"
    },
    {
     "tipo": "tabla",
     "titulo": "Worked example: load per resource (8 h of operation)",
     "encabezados": [
      "Resource",
      "Activities",
      "Load per job",
      "Units",
      "Capacity / day"
     ],
     "filas": [
      [
       "R1",
       "A (4×1) + E (4×0.46) + H (3×0.46)",
       "7.22 min",
       "2",
       "<b>132.96</b>"
      ],
      [
       "R2",
       "C (6×0.35) + F (5×0.60) + I (4×0.46)",
       "6.94 min",
       "2",
       "138.33"
      ],
      [
       "R3",
       "B (3×0.46) + D (3×0.25) + G (2×0.46) + J (5×1)",
       "8.05 min",
       "3",
       "178.88"
      ]
     ]
    },
    {
     "tipo": "clave",
     "titulo": "Reading the example",
     "cuerpo": "<p>Theoretical capacity = min(132.96 · 138.33 · 178.88) = <b>132.96 units/day</b>. Bottleneck = <b>R1</b>.</p><p>If the required production is 100 units, the capacity in use is 100 / 132.96 = <b>75.2 %</b>. There is still slack, but not much.</p>"
    },
    {
     "tipo": "nota",
     "titulo": "The interesting question: what if 150 are needed?",
     "cuerpo": "<p>150 / 132.96 = 112.8 % — not enough. Adding one unit of R1 takes it to 199.5 u/day, <b>but then the bottleneck moves to R2</b> (138.33), which is still below 150.</p><p>With the current configuration you have to add one unit to R1 <b>and</b> one to R2. R3 with its 3 units is already enough. This is the typical behavior: <b>eliminating a bottleneck moves it, it does not remove it from the process</b>.</p>"
    },
    {
     "tipo": "pasos",
     "titulo": "Theory of constraints — the five focusing steps",
     "items": [
      "<b>Identify</b> the constraint of the system (the bottleneck).",
      "<b>Exploit</b> the constraint: get every bit of output possible out of it without investing (eliminate stoppages, change the sequence, take away work that does not belong to it).",
      "<b>Subordinate</b> everything else to the constraint: the rest of the process works at its pace, no faster.",
      "<b>Elevate</b> the constraint: now, yes, invest — add a unit of resource, automate, train.",
      "<b>Repeat</b>: if the constraint was broken, there is a new one somewhere else. Do not let inertia become the constraint."
     ]
    },
    {
     "tipo": "clave",
     "titulo": "Practical consequence",
     "cuerpo": "<p>Investing in a resource that is <b>not</b> the bottleneck does not add a single job to the capacity of the process. It only increases the inventory in front of the constraint.</p>"
    },
    {
     "tipo": "defs",
     "titulo": "Process cost analysis",
     "items": [
      {
       "termino": "Cost per transaction",
       "definicion": "Total cost of operating the process divided by the number of completed jobs. It is the indicator that management understands immediately."
      },
      {
       "termino": "Cost of a resource per job",
       "definicion": "Load per job (in hours) × cost per hour of the resource. Summed over all the resources it gives the direct cost of processing one job."
      },
      {
       "termino": "Cost of rework",
       "definicion": "Fraction r of the jobs × cost of the cycle that is repeated. It is usually the largest item and the most invisible one."
      },
      {
       "termino": "Cost of idle capacity",
       "definicion": "Resources you pay for and do not use because the bottleneck limits them. It justifies reallocating instead of hiring."
      },
      {
       "termino": "Activity-based costing (ABC)",
       "definicion": "Assigning the cost to the activities and from there to the product or service, instead of spreading it by proration. It makes visible which activity is expensive."
      }
     ]
    },
    {
     "tipo": "tabla",
     "titulo": "Indicators by type",
     "encabezados": [
      "Type",
      "Examples",
      "Question it answers"
     ],
     "filas": [
      [
       "Operational",
       "Cycle time, throughput, WIP, capacity in use, takt compliance",
       "Does the process run at the required pace?"
      ],
      [
       "Quality",
       "Error rate, rework, first pass yield, defects per million",
       "Is it done right the first time?"
      ],
      [
       "Financial",
       "Cost per transaction, cost of rework, cost of idle capacity, ROI of the initiative",
       "Does it make economic sense?"
      ],
      [
       "Service",
       "Response time, on-time deliveries (OTIF), NPS, complaints",
       "Does the customer perceive value?"
      ]
     ]
    },
    {
     "tipo": "nota",
     "titulo": "How do you measure the effectiveness of a process?",
     "cuerpo": "<p><b>Effectiveness</b> = the degree to which the process achieves the result the customer expects (orders delivered complete and on time). <b>Efficiency</b> = the relationship between that result and the resources consumed. A process can be effective and extremely expensive, or cheap and useless. The improvement proposal has to state which of the two it is attacking.</p>"
    }
   ]
  },
  {
   "id": "s4",
   "nombre": "Session 4",
   "tema": "Redesign, creative ideation and simulation",
   "proposito": "Turn the numeric diagnosis into a defensible TO-BE proposal: what you redesign, on which principle, how you test it before implementing and which scenarios you anticipate.",
   "bloques": [
    {
     "tipo": "defs",
     "titulo": "Process innovation: two intensities",
     "items": [
      {
       "termino": "Incremental improvement (Kaizen)",
       "definicion": "Small, continuous changes to the existing process. Low risk, cumulative results, no need to stop the operation."
      },
      {
       "termino": "Radical redesign (BPR)",
       "definicion": "Rethinking the process from scratch, questioning why each activity exists. High impact and high risk; it requires executive sponsorship."
      },
      {
       "termino": "Selection criterion",
       "definicion": "If the gap between AS-IS and the target is 10–20 %, go incremental. If it is 80 % (72 h → 8 h), incremental will not get you there: you have to redesign the flow, not speed it up."
      }
     ]
    },
    {
     "tipo": "tabla",
     "titulo": "Redesign methodologies and when to use them",
     "encabezados": [
      "Methodology",
      "Targets",
      "Signal that it applies"
     ],
     "filas": [
      [
       "Lean",
       "Waste: waiting, rework, transport, overprocessing, inventory",
       "The lead time is huge next to the processing time"
      ],
      [
       "Six Sigma / DMAIC",
       "Variation and defects",
       "The output is inconsistent or the error rate is high"
      ],
      [
       "Theory of constraints",
       "The bottleneck",
       "Capacity does not meet demand"
      ],
      [
       "BPR",
       "The entire design of the flow",
       "The target demands an order of magnitude, not a percentage"
      ],
      [
       "Automation / RPA / workflow",
       "Repetitive manual work and duplicate data entry",
       "The same data is keyed into several systems"
      ]
     ]
    },
    {
     "tipo": "lista",
     "titulo": "Redesign principles and heuristics",
     "items": [
      "<b>Eliminate:</b> remove the activity that adds no value and that no standard requires.",
      "<b>Simplify:</b> reduce steps, fields, signatures and exceptions.",
      "<b>Integrate:</b> capture the data once and share it.",
      "<b>Parallelize:</b> run at the same time what is in series today with no real dependency.",
      "<b>Triage:</b> different routes for simple and complex cases, instead of a single heavy route for everyone.",
      "<b>Empower:</b> move the decision to whoever does the work, with clear rules and thresholds, to eliminate approval waits.",
      "<b>Move the control:</b> validate at the source (the supplier enters their own data) instead of inspecting at the end.",
      "<b>Automate last:</b> first the right flow, then the technology that runs it."
     ]
    },
    {
     "tipo": "clave",
     "titulo": "Golden rule of redesign",
     "cuerpo": "<p>Every change you propose must be expressible as an effect on a number: <b>it reduces CT</b>, <b>it reduces cost per transaction</b> or <b>it increases capacity</b>. If it moves none of the three, it is an opinion, not a proposal.</p>"
    },
    {
     "tipo": "pasos",
     "titulo": "Creative ideation: from the customer to the alternative",
     "items": [
      "<b>Identify the customer's need:</b> what outcome they expect and how they measure it, not how the department measures it.",
      "<b>Spot value opportunities:</b> where the process costs the customer time, effort or uncertainty.",
      "<b>Challenge conventional thinking:</b> ask why each activity exists and what would happen if it did not. “Why does HR have to get involved?”",
      "<b>Generate multiple alternatives:</b> not one solution, several; include at least one with no new technology.",
      "<b>Evaluate against explicit criteria:</b> impact on CT, cost, capacity, risk, implementation effort and regulatory compliance.",
      "<b>Select and justify:</b> with the AS-IS numbers as the baseline."
     ]
    },
    {
     "tipo": "defs",
     "titulo": "Process orientation: product or service",
     "items": [
      {
       "termino": "Product orientation",
       "definicion": "The output is tangible and can be standardized; the focus is on repeatability, unit cost and conformance quality. Capacity is measured in units per period."
      },
      {
       "termino": "Service orientation",
       "definicion": "The output is produced and consumed with the customer taking part; the focus is on response time, demand variability and experience. Capacity is measured in customer interactions per period and depends on staff availability."
      },
      {
       "termino": "Why it matters",
       "definicion": "It determines which indicators are valid: in services, buffer inventory barely exists, so demand variation hits the customer's wait time directly."
      }
     ]
    },
    {
     "tipo": "texto",
     "titulo": "Process simulation",
     "cuerpo": "<p>Analytical calculation gives you <b>averages</b>. Simulation lets you see what happens with <b>variability</b>: irregular arrivals, times that are not constant, shifts, absences, seasonal peaks.</p><p>To simulate you need: the process model, the arrival distribution, the distribution of each activity's times, the number of units of each resource, the schedules and the queue priority rules.</p><p>What you get: the distribution of cycle time (not just the average), utilization of each resource, queue lengths and sensitivity to changes in demand.</p>"
    },
    {
     "tipo": "nota",
     "titulo": "When simulation helps and when it does not",
     "cuerpo": "<p>It <b>helps</b> when there are queues, shared resources, variable demand, or you want to compare scenarios before investing.</p><p>It <b>does not help</b> if the AS-IS model was captured badly: a simulation built on invented times produces results that are precise and false.</p>"
    },
    {
     "tipo": "lista",
     "titulo": "Testing and adjustment before implementing",
     "items": [
      "<b>Model validation:</b> does the simulated AS-IS reproduce the real times and volumes you observed?",
      "<b>Pilot test:</b> apply the TO-BE in one branch, one plant or one type of job before the full scope.",
      "<b>Load test:</b> verify that systems and infrastructure can handle the new volume.",
      "<b>Adjustment:</b> tune rules, thresholds and training with what you learned in the pilot.",
      "<b>Post-implementation measurement:</b> capture the same baseline indicators again to demonstrate the improvement."
     ]
    },
    {
     "tipo": "tabla",
     "titulo": "Scenario planning",
     "encabezados": [
      "Scenario",
      "Assumption",
      "What you need ready"
     ],
     "filas": [
      [
       "Base",
       "Demand holds steady",
       "The proposed TO-BE and its roadmap"
      ],
      [
       "Growth",
       "Demand rises 50 %",
       "Which resource saturates first and what it costs to elevate it"
      ],
      [
       "Contraction",
       "Demand falls",
       "Which capacity is fixed and which is flexible"
      ],
      [
       "Disruption",
       "A key system or supplier fails",
       "Alternate route and minimum operating capacity"
      ]
     ]
    },
    {
     "tipo": "clave",
     "titulo": "Structure of the improvement proposal",
     "cuerpo": "<p>Problem with a measured magnitude → AS-IS with its numbers (CT, TCT, efficiency, capacity, bottleneck, cost per transaction) → identified causes → alternatives evaluated → chosen TO-BE → <b>the same indicators recalculated</b> → investment required → scenarios and risks → roadmap.</p>"
    }
   ]
  }
 ],
 "terminos": [
  {
   "termino": "Cycle time",
   "sigla": "CT — Cycle Time",
   "definicion": "Average time it takes to complete a job from start to finish, including processing and waiting. You can measure it with a stopwatch."
  },
  {
   "termino": "Theoretical cycle time",
   "sigla": "TCT",
   "definicion": "Cycle time calculated considering only the processing time, that is, with zero waits."
  },
  {
   "termino": "Cycle efficiency",
   "definicion": "TCT / CT. What share of the total time is real work; the rest is waiting waste."
  },
  {
   "termino": "Activity time",
   "definicion": "Processing time + wait time of an activity."
  },
  {
   "termino": "Processing time",
   "definicion": "Time in which someone or something is actually working on the job. It is the only one that consumes resource capacity, and that is why it is the one that goes into the load calculation."
  },
  {
   "termino": "Wait time",
   "definicion": "Time in which the job is inside the process but nobody is working on it: queue, pending approval, transfer, storage. It lengthens the cycle time without occupying the resource."
  },
  {
   "termino": "Lead time versus cycle time",
   "definicion": "Cycle time looks inward (how long the process takes); lead time looks outward (how long the customer waits, in calendar time). They coincide when the process runs continuously; they differ when there are schedules, shifts or queues before the start. Always state which one you are measuring and between which two events."
  },
  {
   "termino": "Takt time",
   "definicion": "Net available time / customer demand. The pace at which you have to produce. It is not measured: it is calculated."
  },
  {
   "termino": "Multiple routes",
   "definicion": "Exclusive gateway: the expected time is Σ pᵢ·Tᵢ, the sum of each branch times its probability."
  },
  {
   "termino": "Parallel routes",
   "definicion": "AND gateway: the time is max(T₁…Tₙ), because the merge waits for the slowest branch."
  },
  {
   "termino": "Rework",
   "definicion": "Repeating a cycle for failing an inspection. A single repetition: CT = (1+r)·T. Unlimited repetitions: CT = T/(1−r)."
  },
  {
   "termino": "Rejection rate",
   "sigla": "r",
   "definicion": "Percentage of jobs that fail the control and have to repeat the cycle."
  },
  {
   "termino": "WIP",
   "sigla": "Work in Process",
   "definicion": "All the jobs that are inside the process at a given moment."
  },
  {
   "termino": "Job",
   "definicion": "A piece of work or unit that goes through the process: an order, an enrollment, a piece."
  },
  {
   "termino": "Throughput",
   "definicion": "Jobs completed per unit of time; the capacity you actually reach."
  },
  {
   "termino": "Little's Law",
   "definicion": "WIP = Throughput × Lead time. You can solve it three ways: WIP = Th × LT (how much is stuck), LT = WIP / Th (how long a job takes) and Th = WIP / LT (at what pace work is completed). The units check out: units = (units/time) × time."
  },
  {
   "termino": "Load factor",
   "definicion": "Fraction of the jobs that go through an activity. Common = 1; a 40 % branch with 15 % rework = 0.4 × 1.15 = 0.46."
  },
  {
   "termino": "Load per job",
   "definicion": "Σ (processing time × load factor) of the activities a resource handles. Use processing, not waiting."
  },
  {
   "termino": "Theoretical capacity",
   "definicion": "The minimum among the capacities of all the resources in the process."
  },
  {
   "termino": "Bottleneck",
   "definicion": "The resource whose capacity is the lowest and therefore determines the capacity of the whole process."
  },
  {
   "termino": "Capacity in use",
   "definicion": "Demand / theoretical capacity. What percentage of the available capacity is committed."
  },
  {
   "termino": "Theory of constraints",
   "sigla": "TOC",
   "definicion": "A five-step improvement approach: identify, exploit, subordinate, elevate and repeat on the system constraint."
  },
  {
   "termino": "Flow balance",
   "definicion": "Adjusting the capacity of the stages so that none ends up far above or far below the constraint."
  },
  {
   "termino": "AS-IS model",
   "definicion": "A representation of the process as it operates today, with its real times, waits, rework and resources."
  },
  {
   "termino": "Precedence diagram",
   "definicion": "A representation of which activity depends on which; an indispensable step before calculating times."
  },
  {
   "termino": "BPM lifecycle",
   "definicion": "Identification, discovery, analysis, redesign, implementation and monitoring, continuously."
  },
  {
   "termino": "Handoff",
   "definicion": "Transfer of the work from one area or role to another. Every handoff is a potential queue."
  },
  {
   "termino": "Triage",
   "definicion": "Redesign heuristic: separate simple cases from complex ones and give them different routes."
  },
  {
   "termino": "BPR",
   "sigla": "Business Process Reengineering",
   "definicion": "Radical redesign of the process from scratch, as opposed to incremental improvement."
  },
  {
   "termino": "Cost per transaction",
   "definicion": "Total cost of operating the process divided by the number of completed jobs."
  },
  {
   "termino": "Activity-based costing",
   "sigla": "ABC",
   "definicion": "Assigning costs to the activities and from there to the product or service, instead of allocating them pro rata."
  },
  {
   "termino": "First pass yield",
   "definicion": "Percentage of jobs that come out right the first time, with no rework."
  },
  {
   "termino": "Process simulation",
   "definicion": "Running the model with arrival and time distributions to observe variability, queues and utilization, not just averages."
  },
  {
   "termino": "Value Stream Mapping",
   "sigla": "VSM",
   "definicion": "Lean modeling technique that makes visible the time that adds value against the time that does not."
  }
 ],
 "practica": {
  "calculos": [
   {
    "tema": "Multiple routes",
    "titulo": "Expected time of a segment with an exclusive gateway",
    "enunciado": "After activity A, an exclusive gateway sends <b>70 %</b> of the jobs straight to <b>C (23 min)</b> and <b>30 %</b> to <b>B (20 min)</b>, which afterwards also goes through C. Calculate the expected time of the whole segment, counting B and C.",
    "preguntas": [
     {
      "etiqueta": "Expected time of segment B–C",
      "respuesta": 29,
      "unidad": "min",
      "tolerancia": 0.05,
      "pista": "C is common to both branches: you always pay for it."
     }
    ],
    "solucion": "<p>In multiple routes you weight each branch by its probability: <b>Σ pᵢ · Tᵢ</b>.</p><div class=\"paso-calc\">High branch (70 %): C only   → 0.70 × 23 = 16.10\nLow branch (30 %): B then C  → 0.30 × (20 + 23) = 0.30 × 43 = 12.90\nSegment = 16.10 + 12.90 = <span class=\"resaltado\">29 min</span></div><p>An equivalent and faster form, factoring out what is common:</p><div class=\"paso-calc\">Segment = 0.30 × 20 + 23 = 6 + 23 = <span class=\"resaltado\">29 min</span></div><p><b>What to remember:</b> what you weight is only what <i>differs</i> between branches. C, being common, enters in full exactly once.</p>"
   },
   {
    "tema": "Parallel routes",
    "titulo": "Time of a segment with an AND gateway",
    "enunciado": "After the inspection, the process splits into two simultaneous branches: <b>G (13 min)</b> and <b>F (9 min)</b>. Both must finish before continuing to H. Calculate the time of the parallel segment and the time the fast branch spends waiting.",
    "preguntas": [
     {
      "etiqueta": "Time of the parallel segment",
      "respuesta": 13,
      "unidad": "min",
      "tolerancia": 0.01
     },
     {
      "etiqueta": "Wait time of branch F",
      "respuesta": 4,
      "unidad": "min",
      "tolerancia": 0.01,
      "pista": "F finishes earlier, but it cannot move on by itself."
     }
    ],
    "solucion": "<p>In parallel routes you <b>do not add</b>: the merge waits for the slowest branch.</p><div class=\"paso-calc\">Segment = max(G, F) = max(13, 9) = <span class=\"resaltado\">13 min</span>\nWait of F = 13 − 9 = <span class=\"resaltado\">4 min</span></div><p>Frequent mistake: adding 13 + 9 = 22. That would only be right if the activities were sequential.</p><p>Those 4 minutes that F waits are time without value: if F's resource sits idle, that is a rebalancing opportunity.</p>"
   },
   {
    "tema": "Rework",
    "titulo": "The two rework formulas",
    "enunciado": "An inspection cycle covers <b>D (10 min) + E (20 min) + I (5 min)</b>. The inspection rejects <b>10 %</b> of the jobs and sends them back to D. Calculate the time of the segment under both assumptions.",
    "preguntas": [
     {
      "etiqueta": "T — sum of the activities in the cycle",
      "respuesta": 35,
      "unidad": "min",
      "tolerancia": 0.01
     },
     {
      "etiqueta": "CT if the work is reprocessed only once",
      "respuesta": 38.5,
      "unidad": "min",
      "tolerancia": 0.05
     },
     {
      "etiqueta": "CT if the work is reprocessed as many times as needed",
      "respuesta": 38.8889,
      "unidad": "min",
      "tolerancia": 0.05
     }
    ],
    "solucion": "<div class=\"paso-calc\">T = D + E + I = 10 + 20 + 5 = <span class=\"resaltado\">35 min</span>\n\nSingle repetition:      CT = (1 + r)·T = 1.10 × 35 = <span class=\"resaltado\">38.50 min</span>\nUnlimited repetitions:  CT = T / (1 − r) = 35 / 0.90 = <span class=\"resaltado\">38.89 min</span></div><p>With small r the two formulas almost coincide. The difference explodes as r grows: with r = 0.40, (1+r)T = 49 min against T/(1−r) = 58.33 min.</p><p><b>In your deliverable, state explicitly which assumption you used.</b> It is not a detail: it changes the economic justification of the proposal.</p>"
   },
   {
    "tema": "Integrative exercise",
    "titulo": "Cycle time of the complete process",
    "enunciado": "Calculate the cycle time of the reference process, which combines the three patterns. Use the <b>single repetition</b> assumption for the rework. Times in minutes.",
    "diagrama": {
     "titulo": "Reference process",
     "svg": "<svg viewBox=\"0 0 1090 352\" role=\"img\" aria-label=\"Proceso de referencia: la actividad A alimenta una compuerta exclusiva que envía 70 por ciento a C y 30 por ciento a B y luego a C; sigue un ciclo D, E e inspección I con 10 por ciento de retrabajo; después una compuerta paralela ejecuta G y F simultáneamente y converge en H\"><defs><marker id=\"pa-proc\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path class=\"punta\" d=\"M0,0 L10,5 L0,10 z\"/></marker><marker id=\"pa-proc-v\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path class=\"punta-viva\" d=\"M0,0 L10,5 L0,10 z\"/></marker></defs><rect class=\"zona\" x=\"138\" y=\"150\" width=\"280\" height=\"178\" rx=\"16\"/><text class=\"rotulo-viva\" x=\"278\" y=\"142\" text-anchor=\"middle\">MULTIPLE ROUTES · Σ p·T</text><rect class=\"zona\" x=\"432\" y=\"96\" width=\"258\" height=\"138\" rx=\"16\"/><text class=\"rotulo-viva\" x=\"561\" y=\"88\" text-anchor=\"middle\">REWORK · (1+r)·T</text><rect class=\"zona\" x=\"714\" y=\"96\" width=\"236\" height=\"214\" rx=\"16\"/><text class=\"rotulo-viva\" x=\"832\" y=\"88\" text-anchor=\"middle\">PARALLEL ROUTES · max</text><circle class=\"caja\" cx=\"26\" cy=\"200\" r=\"12\"/><path class=\"arista\" d=\"M40,200 L48,200\" marker-end=\"url(#pa-proc)\"/><rect class=\"caja\" x=\"52\" y=\"174\" width=\"76\" height=\"52\" rx=\"9\"/><text class=\"rotulo\" x=\"90\" y=\"196\" text-anchor=\"middle\">A</text><text class=\"rotulo-sm\" x=\"90\" y=\"212\" text-anchor=\"middle\">10 min</text><path class=\"arista\" d=\"M128,200 L142,200\" marker-end=\"url(#pa-proc)\"/><polygon class=\"caja-viva\" points=\"168,177 191,200 168,223 145,200\"/><text class=\"rotulo\" x=\"168\" y=\"205\" text-anchor=\"middle\">×</text><path class=\"arista\" d=\"M191,200 L326,200\" marker-end=\"url(#pa-proc)\"/><text class=\"rotulo-sm\" x=\"258\" y=\"192\" text-anchor=\"middle\">0.7</text><path class=\"arista\" d=\"M168,223 C168,266 196,292 222,292\" marker-end=\"url(#pa-proc)\"/><text class=\"rotulo-sm\" x=\"150\" y=\"262\" text-anchor=\"middle\">0.3</text><rect class=\"caja\" x=\"227\" y=\"266\" width=\"76\" height=\"52\" rx=\"9\"/><text class=\"rotulo\" x=\"265\" y=\"288\" text-anchor=\"middle\">B</text><text class=\"rotulo-sm\" x=\"265\" y=\"304\" text-anchor=\"middle\">20 min</text><path class=\"arista\" d=\"M303,292 C332,292 350,262 358,230\" marker-end=\"url(#pa-proc)\"/><rect class=\"caja\" x=\"332\" y=\"174\" width=\"76\" height=\"52\" rx=\"9\"/><text class=\"rotulo\" x=\"370\" y=\"196\" text-anchor=\"middle\">C</text><text class=\"rotulo-sm\" x=\"370\" y=\"212\" text-anchor=\"middle\">23 min</text><path class=\"arista\" d=\"M408,200 L434,200\" marker-end=\"url(#pa-proc)\"/><rect class=\"caja\" x=\"440\" y=\"174\" width=\"76\" height=\"52\" rx=\"9\"/><text class=\"rotulo\" x=\"478\" y=\"196\" text-anchor=\"middle\">D</text><text class=\"rotulo-sm\" x=\"478\" y=\"212\" text-anchor=\"middle\">10 min</text><path class=\"arista\" d=\"M516,200 L524,200\" marker-end=\"url(#pa-proc)\"/><rect class=\"caja\" x=\"530\" y=\"174\" width=\"76\" height=\"52\" rx=\"9\"/><text class=\"rotulo\" x=\"568\" y=\"196\" text-anchor=\"middle\">E</text><text class=\"rotulo-sm\" x=\"568\" y=\"212\" text-anchor=\"middle\">20 min</text><path class=\"arista\" d=\"M606,200 L630,200\" marker-end=\"url(#pa-proc)\"/><polygon class=\"caja-viva\" points=\"658,176 681,200 658,224 635,200\"/><text class=\"rotulo-sm\" x=\"658\" y=\"204\" text-anchor=\"middle\">I · 5</text><path class=\"arista-viva\" d=\"M652,178 C630,126 520,112 478,170\" marker-end=\"url(#pa-proc-v)\"/><text class=\"rotulo-viva\" x=\"566\" y=\"112\" text-anchor=\"middle\">0.1 reject → back to D</text><path class=\"arista\" d=\"M681,200 L716,200\" marker-end=\"url(#pa-proc)\"/><text class=\"rotulo-sm\" x=\"700\" y=\"192\" text-anchor=\"middle\">0.9</text><polygon class=\"caja-viva\" points=\"740,180 758,200 740,220 722,200\"/><text class=\"rotulo\" x=\"740\" y=\"205\" text-anchor=\"middle\">+</text><path class=\"arista\" d=\"M740,180 C740,148 776,138 790,133\" marker-end=\"url(#pa-proc)\"/><path class=\"arista\" d=\"M740,220 C740,252 776,262 790,267\" marker-end=\"url(#pa-proc)\"/><rect class=\"caja\" x=\"794\" y=\"104\" width=\"76\" height=\"52\" rx=\"9\"/><text class=\"rotulo\" x=\"832\" y=\"126\" text-anchor=\"middle\">G</text><text class=\"rotulo-sm\" x=\"832\" y=\"142\" text-anchor=\"middle\">13 min</text><rect class=\"caja\" x=\"794\" y=\"244\" width=\"76\" height=\"52\" rx=\"9\"/><text class=\"rotulo\" x=\"832\" y=\"266\" text-anchor=\"middle\">F</text><text class=\"rotulo-sm\" x=\"832\" y=\"282\" text-anchor=\"middle\">9 min</text><path class=\"arista\" d=\"M870,130 C898,140 906,160 916,186\" marker-end=\"url(#pa-proc)\"/><path class=\"arista\" d=\"M870,270 C898,260 906,240 916,214\" marker-end=\"url(#pa-proc)\"/><polygon class=\"caja-viva\" points=\"924,180 942,200 924,220 906,200\"/><text class=\"rotulo\" x=\"924\" y=\"205\" text-anchor=\"middle\">+</text><path class=\"arista\" d=\"M942,200 L954,200\" marker-end=\"url(#pa-proc)\"/><rect class=\"caja\" x=\"958\" y=\"174\" width=\"76\" height=\"52\" rx=\"9\"/><text class=\"rotulo\" x=\"996\" y=\"196\" text-anchor=\"middle\">H</text><text class=\"rotulo-sm\" x=\"996\" y=\"212\" text-anchor=\"middle\">2 min</text><path class=\"arista\" d=\"M1034,200 L1044,200\" marker-end=\"url(#pa-proc)\"/><circle class=\"caja\" cx=\"1060\" cy=\"200\" r=\"12\"/><circle class=\"caja\" cx=\"1060\" cy=\"200\" r=\"7\"/></svg>"
    },
    "preguntas": [
     {
      "etiqueta": "Multiple-routes segment (B, C)",
      "respuesta": 29,
      "unidad": "min",
      "tolerancia": 0.05
     },
     {
      "etiqueta": "Segment with rework (D, E, I), one repetition",
      "respuesta": 38.5,
      "unidad": "min",
      "tolerancia": 0.05
     },
     {
      "etiqueta": "Parallel segment (G, F)",
      "respuesta": 13,
      "unidad": "min",
      "tolerancia": 0.01
     },
     {
      "etiqueta": "Total cycle time of the process",
      "respuesta": 92.5,
      "unidad": "min",
      "tolerancia": 0.1
     }
    ],
    "solucion": "<p>You walk the process segment by segment and apply the rule of each pattern:</p><div class=\"paso-calc\">1. A, common                    = 10.00\n2. Multiple routes: 0.3×20 + 23 = 29.00\n3. Rework: 1.10 × (10+20+5)     = 38.50\n4. Parallel: max(13, 9)         = 13.00\n5. H, common                    =  2.00\n                                  ───────\nCT                              = <span class=\"resaltado\">92.50 min</span></div><p>Under the unlimited-repetitions assumption segment 3 would be 35/0.9 = 38.89 and the total CT <b>92.89 min</b>: less than half a minute of difference, because r is low.</p>"
   },
   {
    "tema": "Takt time",
    "titulo": "Pace required by demand",
    "enunciado": "A line runs an <b>8-hour</b> shift with <b>30 minutes</b> for lunch and <b>2 scheduled stops of 10 minutes</b> each. The customer asks for <b>200 units</b> a day. The line's measured cycle time is <b>2.5 minutes</b> per unit.",
    "preguntas": [
     {
      "etiqueta": "Net available time",
      "respuesta": 430,
      "unidad": "min",
      "tolerancia": 0.5,
      "pista": "Net = shift time minus the stops and lunch."
     },
     {
      "etiqueta": "Takt time",
      "respuesta": 2.15,
      "unidad": "min/unit",
      "tolerancia": 0.02
     },
     {
      "etiqueta": "Units the line manages to produce with CT = 2.5 min",
      "respuesta": 172,
      "unidad": "units",
      "tolerancia": 0.5
     }
    ],
    "solucion": "<div class=\"paso-calc\">Net time = (8 × 60) − 30 − (2 × 10) = 480 − 30 − 20 = <span class=\"resaltado\">430 min</span>\nTakt = T / D = 430 / 200 = <span class=\"resaltado\">2.15 min/unit</span>\nAchievable output = 430 / 2.5 = <span class=\"resaltado\">172 units</span></div><p><b>Diagnosis:</b> CT (2.5) &gt; Takt (2.15), so the line <b>does not meet</b> demand: it falls short by 28 units.</p><p>There are two paths: bring the CT down to 2.15 min or less, or increase the net available time (recover stops, extend the shift). Which one is better depends on the cost of each option.</p>"
   },
   {
    "tema": "Class exercise — part 1",
    "titulo": "CT, TCT and process efficiency",
    "enunciado": "With the following precedence table: <b>40 %</b> of the jobs take route A→B, <b>25 %</b> take route A→D and the remaining <b>35 %</b> take route A→C. Inspection <b>I</b> has <b>15 %</b> rework that goes back to B (a single repetition). Note that <b>F follows both C and D</b>, and that <b>J is common to every route</b>.",
    "datos": {
     "tipo": "tabla",
     "titulo": "Precedence table (minutes)",
     "encabezados": [
      "Activity",
      "Predecessor",
      "Processing",
      "Waiting",
      "Activity time"
     ],
     "filas": [
      [
       "A",
       "—",
       "4",
       "0",
       "4"
      ],
      [
       "B",
       "A",
       "3",
       "2",
       "5"
      ],
      [
       "C",
       "A",
       "6",
       "4",
       "10"
      ],
      [
       "D",
       "A",
       "3",
       "3",
       "6"
      ],
      [
       "E",
       "B",
       "4",
       "7",
       "11"
      ],
      [
       "F",
       "C, D",
       "5",
       "3",
       "8"
      ],
      [
       "G",
       "E",
       "2",
       "0",
       "2"
      ],
      [
       "H",
       "E",
       "3",
       "1",
       "4"
      ],
      [
       "I",
       "G, H",
       "4",
       "3",
       "7"
      ],
      [
       "J",
       "F, I",
       "5",
       "0",
       "5"
      ]
     ]
    },
    "preguntas": [
     {
      "etiqueta": "Cycle time (CT)",
      "respuesta": 31.22,
      "unidad": "min",
      "tolerancia": 0.05,
      "pista": "Use the activity time (processing + waiting). G and H are parallel."
     },
     {
      "etiqueta": "Theoretical cycle time (TCT)",
      "respuesta": 21.29,
      "unidad": "min",
      "tolerancia": 0.05,
      "pista": "Same calculation, but with the processing time only."
     },
     {
      "etiqueta": "Process efficiency",
      "respuesta": 68.19,
      "unidad": "%",
      "tolerancia": 0.6,
      "pista": "TCT / CT, expressed as a percentage."
     }
    ],
    "solucion": "<p>The general expression of the process, built segment by segment:</p><div class=\"paso-calc\">CT = A + 0.40·[1.15·(B + E + max(G,H) + I)] + 0.35·(C + F) + 0.25·(D + F) + J</div><p>Three things to see in that formula: the <b>1.15</b> applies only to the branch that goes through the inspection; <b>max(G,H)</b> because they are parallel; and <b>F appears in both weighted terms</b> because it follows both C and D.</p><p><b>CT — with activity time:</b></p><div class=\"paso-calc\">A                                    =  4.00\n0.40 × 1.15 × (5 + 11 + max(2,4) + 7)\n  = 0.46 × 27                        = 12.42\n0.35 × (10 + 8) = 0.35 × 18          =  6.30\n0.25 × ( 6 + 8) = 0.25 × 14          =  3.50\nJ                                    =  5.00\n                                       ───────\nCT                                   = <span class=\"resaltado\">31.22 min</span></div><p><b>TCT — processing only:</b></p><div class=\"paso-calc\">A                                    =  4.00\n0.46 × (3 + 4 + max(2,3) + 4) = 0.46 × 14 =  6.44\n0.35 × (6 + 5) = 0.35 × 11           =  3.85\n0.25 × (3 + 5) = 0.25 ×  8           =  2.00\nJ                                    =  5.00\n                                       ───────\nTCT                                  = <span class=\"resaltado\">21.29 min</span></div><div class=\"paso-calc\">Efficiency = TCT / CT = 21.29 / 31.22 = <span class=\"resaltado\">68.19 %</span></div><p><b>Reading:</b> almost a third of the cycle time is pure waiting. Activity E, with 7 minutes of waiting against 4 of processing, is the first place to look.</p>"
   },
   {
    "tema": "Class exercise — part 2",
    "titulo": "Load per resource",
    "enunciado": "Same process. Now the resources are assigned: <b>R1</b> handles A, E and H; <b>R2</b> handles C, F and I; <b>R3</b> handles B, D, G and J. Calculate the load per job of each resource. Remember: <b>only the processing time counts</b>, and each activity is weighted by its load factor.",
    "datos": {
     "tipo": "tabla",
     "titulo": "Load factors by activity",
     "encabezados": [
      "Activity",
      "Resource",
      "Processing",
      "Load factor",
      "Reason for the factor"
     ],
     "filas": [
      [
       "A",
       "R1",
       "4",
       "1.00",
       "Common to all jobs"
      ],
      [
       "B",
       "R3",
       "3",
       "0.46",
       "0.40 × 1.15 (branch with rework)"
      ],
      [
       "C",
       "R2",
       "6",
       "0.35",
       "35 % branch"
      ],
      [
       "D",
       "R3",
       "3",
       "0.25",
       "25 % branch"
      ],
      [
       "E",
       "R1",
       "4",
       "0.46",
       "0.40 × 1.15"
      ],
      [
       "F",
       "R2",
       "5",
       "0.60",
       "0.35 + 0.25 (follows C and D)"
      ],
      [
       "G",
       "R3",
       "2",
       "0.46",
       "0.40 × 1.15"
      ],
      [
       "H",
       "R1",
       "3",
       "0.46",
       "0.40 × 1.15"
      ],
      [
       "I",
       "R2",
       "4",
       "0.46",
       "0.40 × 1.15"
      ],
      [
       "J",
       "R3",
       "5",
       "1.00",
       "Common to all jobs"
      ]
     ]
    },
    "preguntas": [
     {
      "etiqueta": "R1 load per job",
      "respuesta": 7.22,
      "unidad": "min",
      "tolerancia": 0.02
     },
     {
      "etiqueta": "R2 load per job",
      "respuesta": 6.94,
      "unidad": "min",
      "tolerancia": 0.02
     },
     {
      "etiqueta": "R3 load per job",
      "respuesta": 8.05,
      "unidad": "min",
      "tolerancia": 0.02
     }
    ],
    "solucion": "<div class=\"paso-calc\">R1 = A + E + H = 4×1.00 + 4×0.46 + 3×0.46\n   = 4.00 + 1.84 + 1.38 = <span class=\"resaltado\">7.22 min/job</span>\n\nR2 = C + F + I = 6×0.35 + 5×0.60 + 4×0.46\n   = 2.10 + 3.00 + 1.84 = <span class=\"resaltado\">6.94 min/job</span>\n\nR3 = B + D + G + J = 3×0.46 + 3×0.25 + 2×0.46 + 5×1.00\n   = 1.38 + 0.75 + 0.92 + 5.00 = <span class=\"resaltado\">8.05 min/job</span></div><p><b>Two details that decide the result.</b> First, F has a factor of 0.60 because it follows C (35 %) and D (25 %): the two branches converge on it. Second, you use processing time and not activity time — while a job waits, the resource is free to handle another one, so waiting does not consume capacity.</p>"
   },
   {
    "tema": "In-class exercise — part 3",
    "titulo": "Capacity, bottleneck and capacity in use",
    "enunciado": "Continuing: <b>R1 and R2 have 2 units</b> each and <b>R3 has 3</b>. The working day is <b>8 hours</b> and the required daily output is <b>100 units</b>. Loads per job: R1 = 7.22, R2 = 6.94, R3 = 8.05 min.",
    "preguntas": [
     {
      "etiqueta": "R1 daily capacity",
      "respuesta": 132.96,
      "unidad": "u/day",
      "tolerancia": 0.6,
      "pista": "(units / load) × 60 × 8"
     },
     {
      "etiqueta": "R2 daily capacity",
      "respuesta": 138.33,
      "unidad": "u/day",
      "tolerancia": 0.6
     },
     {
      "etiqueta": "R3 daily capacity",
      "respuesta": 178.88,
      "unidad": "u/day",
      "tolerancia": 0.6
     },
     {
      "etiqueta": "Theoretical capacity of the process",
      "respuesta": 132.96,
      "unidad": "u/day",
      "tolerancia": 0.6
     },
     {
      "etiqueta": "Capacity in use with 100 units",
      "respuesta": 75.21,
      "unidad": "%",
      "tolerancia": 0.6
     }
    ],
    "solucion": "<div class=\"paso-calc\">R1: (2 / 7.22) × 60 × 8 = 0.27701 × 480 = <span class=\"resaltado\">132.96 u/day</span>\nR2: (2 / 6.94) × 60 × 8 = 0.28818 × 480 = <span class=\"resaltado\">138.33 u/day</span>\nR3: (3 / 8.05) × 60 × 8 = 0.37267 × 480 = <span class=\"resaltado\">178.88 u/day</span>\n\nTheoretical capacity = min(132.96 , 138.33 , 178.88) = <span class=\"resaltado\">132.96 u/day</span>\nBottleneck           = <span class=\"resaltado\">R1</span>\nCapacity in use      = 100 / 132.96 = <span class=\"resaltado\">75.21 %</span></div><p><b>An important observation:</b> R3 has the largest load per job (8.05 min), but it is <b>not</b> the bottleneck, because it has 3 units instead of 2. The bottleneck is not determined by the load alone, but by the load <b>against the available units</b>.</p><p>At 75 % capacity in use there is slack, but it is R1's slack: any absence or stoppage in that resource hits delivery directly.</p>"
   },
   {
    "tema": "In-class exercise — part 4",
    "titulo": "What if you have to produce 150 units?",
    "enunciado": "Management wants to raise output from 100 to <b>150 units per day</b> with the same 8-hour working day. Loads per job: R1 = 7.22, R2 = 6.94, R3 = 8.05 min. Current units: R1 = 2, R2 = 2, R3 = 3.",
    "preguntas": [
     {
      "etiqueta": "Capacity in use that 150 units would demand",
      "respuesta": 112.81,
      "unidad": "%",
      "tolerancia": 0.8,
      "pista": "150 divided by the current theoretical capacity."
     },
     {
      "etiqueta": "R1 units needed for 150 u/day",
      "respuesta": 3,
      "unidad": "units",
      "tolerancia": 0.01
     },
     {
      "etiqueta": "R2 units needed for 150 u/day",
      "respuesta": 3,
      "unidad": "units",
      "tolerancia": 0.01
     },
     {
      "etiqueta": "R3 units needed for 150 u/day",
      "respuesta": 3,
      "unidad": "units",
      "tolerancia": 0.01
     },
     {
      "etiqueta": "Resulting theoretical capacity with that configuration",
      "respuesta": 178.88,
      "unidad": "u/day",
      "tolerancia": 0.8
     }
    ],
    "solucion": "<div class=\"paso-calc\">150 / 132.96 = <span class=\"resaltado\">112.81 %</span>  →  demand exceeds capacity</div><p>Units required per resource: solve the capacity formula for units.</p><div class=\"paso-calc\">units = (demand × load) / (60 × hours)\n\nR1: (150 × 7.22) / 480 = 2.256  →  rounds up to <span class=\"resaltado\">3</span> (has 2)\nR2: (150 × 6.94) / 480 = 2.169  →  rounds up to <span class=\"resaltado\">3</span> (has 2)\nR3: (150 × 8.05) / 480 = 2.516  →  rounds up to <span class=\"resaltado\">3</span> (already has 3)</div><p><b>The point of the lesson:</b> the instinct is “I add one unit to R1 and I'm done”. But when you do that R1 rises to 199.5 u/day and <b>the bottleneck moves to R2</b>, which with its 2 units only reaches 138.33 — still below 150.</p><div class=\"paso-calc\">With R1=3, R2=3, R3=3:\n  R1 = (3/7.22)×480 = 199.45\n  R2 = (3/6.94)×480 = 207.49\n  R3 = (3/8.05)×480 = 178.88\nTheoretical capacity = min = <span class=\"resaltado\">178.88 u/day</span>  ≥ 150 ✓</div><p>Eliminating a bottleneck does not remove it from the process: it <b>moves</b> it. That is why the fifth step of the theory of constraints is to <i>repeat</i>.</p><p>Before buying resources, TOC forces you to exhaust the <b>exploit</b> step: can you take away from R1 some activity that another resource could do? Rebalancing is usually free; buying a unit is not.</p>"
   },
   {
    "tema": "Little's Law",
    "titulo": "WIP, throughput and lead time",
    "enunciado": "A service center completes <b>18 requests per hour</b> and the average time a request spends inside the process is <b>2.5 hours</b>. After an improvement, WIP drops to 30 requests while throughput stays the same.",
    "preguntas": [
     {
      "etiqueta": "Current average WIP",
      "respuesta": 45,
      "unidad": "requests",
      "tolerancia": 0.5,
      "pista": "WIP = Throughput × Lead time"
     },
     {
      "etiqueta": "Lead time after the improvement",
      "respuesta": 1.6667,
      "unidad": "h",
      "tolerancia": 0.02
     },
     {
      "etiqueta": "Lead time reduction",
      "respuesta": 33.33,
      "unidad": "%",
      "tolerancia": 0.6
     }
    ],
    "solucion": "<div class=\"paso-calc\">WIP = Throughput × Lead time = 18 × 2.5 = <span class=\"resaltado\">45 requests</span>\n\nAfter:    Lead time = WIP / Throughput = 30 / 18 = <span class=\"resaltado\">1.667 h ≈ 1 h 40 min</span>\nReduction = (2.5 − 1.667) / 2.5 = <span class=\"resaltado\">33.33 %</span></div><p><b>Practical consequence:</b> if capacity does not change, limiting work in process reduces the cycle time proportionally. It is the mathematical justification for WIP limits on a Kanban board.</p><p>And the other way around: pushing more work into the process without adding capacity does not produce more — it only stretches the time each job spends waiting.</p>"
   },
   {
    "tema": "Little's Law",
    "titulo": "WIP limit on a service desk",
    "enunciado": "A service desk closes <b>24 tickets per hour</b> and on average there are <b>168 open tickets</b>. The service level agreement (SLA) promises resolution within <b>4 hours</b>. The team's capacity is not going to change in the short term.",
    "preguntas": [
     {
      "etiqueta": "Current average lead time",
      "respuesta": 7,
      "unidad": "h",
      "tolerancia": 0.05,
      "pista": "LT = WIP / Throughput"
     },
     {
      "etiqueta": "By how much does it exceed the SLA?",
      "respuesta": 3,
      "unidad": "h",
      "tolerancia": 0.05
     },
     {
      "etiqueta": "Maximum WIP to meet the 4 h SLA",
      "respuesta": 96,
      "unidad": "tickets",
      "tolerancia": 0.5
     },
     {
      "etiqueta": "Tickets you have to stop admitting (or close) to reach that limit",
      "respuesta": 72,
      "unidad": "tickets",
      "tolerancia": 0.5
     }
    ],
    "solucion": "<div class=\"paso-calc\">Current LT = WIP / Th = 168 / 24 = <span class=\"resaltado\">7 hours</span>\nExcess over the SLA = 7 − 4 = <span class=\"resaltado\">3 hours</span>\n\nSolving for the target WIP:\n  WIP = Th × LT = 24 × 4 = <span class=\"resaltado\">96 tickets</span>\n  Reduction needed = 168 − 96 = <span class=\"resaltado\">72 tickets</span></div><p><b>What this number tells the service desk manager.</b> You do not need to hire anyone or speed up the technicians: with the current capacity, the 4-hour SLA is met if work in process stays at or below 96 tickets.</p><p>The lever is <b>controlling how much comes in</b>: filter at first contact, close the zombie tickets, or set an explicit WIP limit. All of that is free compared with hiring.</p><p><b>And the honest caveat:</b> Little's Law does not say <i>how</i> to bring WIP down, nor what happens to the tickets you do not admit. It is a diagnosis, not a plan. If real demand exceeds capacity in a sustained way, the system is not in steady state and then you really do need capacity.</p>"
   },
   {
    "tema": "Process costs",
    "titulo": "Cost per transaction and cost of rework",
    "enunciado": "The supplier registration process handles <b>400 registrations per month</b>. Three roles take part: purchasing analyst (<b>$180/h</b>, 25 min per registration), lawyer (<b>$450/h</b>, 12 min per registration) and finance analyst (<b>$220/h</b>, 18 min per registration). <b>8 %</b> of the registrations are redone completely.",
    "preguntas": [
     {
      "etiqueta": "Labor cost per registration (without rework)",
      "respuesta": 231,
      "unidad": "$",
      "tolerancia": 1.5,
      "pista": "Convert the minutes to hours and multiply by the rate."
     },
     {
      "etiqueta": "Cost per transaction including rework",
      "respuesta": 249.48,
      "unidad": "$",
      "tolerancia": 1.5
     },
     {
      "etiqueta": "Monthly cost of rework",
      "respuesta": 7392,
      "unidad": "$",
      "tolerancia": 40
     }
    ],
    "solucion": "<div class=\"paso-calc\">Purchasing: 25/60 × 180 = 0.4167 × 180 =  75.00\nLegal     : 12/60 × 450 = 0.2000 × 450 =  90.00\nFinance   : 18/60 × 220 = 0.3000 × 220 =  66.00\n                                          ───────\nCost per registration                   = <span class=\"resaltado\">$231.00</span></div><div class=\"paso-calc\">With rework (one repetition):\n  231 × (1 + 0.08) = <span class=\"resaltado\">$249.48 per transaction</span>\n\nMonthly cost of rework:\n  400 × 231 × 0.08 = <span class=\"resaltado\">$7,392 per month</span>  (≈ $88,704 per year)</div><p><b>How you use this in the proposal:</b> the $88 thousand a year of rework is the budget against which the investment is justified. If cutting the error rate from 8 % to 1 % costs less than that in the first year, the decision defends itself in front of the CFO.</p><p>A methodological note: this calculation covers direct labor only. A full costing would add licenses, infrastructure and the opportunity cost of the supplier who waits 72 hours before being able to invoice.</p>"
   }
  ],
  "opcionMultiple": [
   {
    "tema": "CT and TCT",
    "pregunta": "What is the difference between cycle time (CT) and theoretical cycle time (TCT)?",
    "opciones": [
     "CT includes processing and waiting; TCT considers processing time only",
     "CT is calculated and TCT is measured with a stopwatch",
     "CT applies to manufacturing and TCT to services",
     "TCT includes rework and CT does not"
    ],
    "correcta": 0,
    "explicacion": "TCT represents the floor the process could reach if every wait disappeared. The distance between the two is the size of the opportunity.",
    "porQueNo": {
     "1": "It is the other way around: CT can be measured with a stopwatch; takt time is the one that is only calculated.",
     "2": "Both apply to any kind of process.",
     "3": "Rework is built into both equally, through the rate r."
    }
   },
   {
    "tema": "Cycle efficiency",
    "pregunta": "A process has TCT = 21.29 min and CT = 31.22 min. What is its cycle efficiency and how do you interpret it?",
    "opciones": [
     "68.2 %: almost a third of the total time is waiting, not work",
     "146.6 %: the process performs better than expected",
     "9.93 %: efficiency is the difference between the two times",
     "31.8 %: efficiency is the complement of TCT/CT"
    ],
    "correcta": 0,
    "explicacion": "Efficiency = TCT / CT = 21.29 / 31.22 = 0.682. The remaining 31.8 % is wait time: inspection, transport, storage and queue.",
    "porQueNo": {
     "1": "That is CT/TCT, which always comes out above 100 % and is not an efficiency indicator.",
     "2": "The absolute difference in minutes is not an efficiency percentage.",
     "3": "The complement is the share of waste, not the efficiency."
    }
   },
   {
    "tema": "Parallel routes",
    "pregunta": "Two parallel activities take 13 and 9 minutes and have to converge. How much does that segment add to the cycle time?",
    "opciones": [
     "13 minutes",
     "22 minutes",
     "11 minutes",
     "9 minutes"
    ],
    "correcta": 0,
    "explicacion": "On parallel routes you take the maximum value: even though the 9-minute branch finishes earlier, it has to wait for the 13-minute one before the flow can continue.",
    "porQueNo": {
     "1": "Adding 13 + 9 would only be right if the activities were sequential.",
     "2": "The average makes no sense: convergence does not happen at the average, it happens when the last one finishes.",
     "3": "Taking the minimum would assume the process moves on without waiting for the other branch."
    }
   },
   {
    "tema": "Multiple routes",
    "pregunta": "An exclusive gateway sends 30 % of the jobs to a 20 min activity and 70 % to a 10 min one. What is the expected time of the segment?",
    "opciones": [
     "13 minutes",
     "30 minutes",
     "15 minutes",
     "20 minutes"
    ],
    "correcta": 0,
    "explicacion": "Σ pᵢ·Tᵢ = 0.30 × 20 + 0.70 × 10 = 6 + 7 = 13 minutes.",
    "porQueNo": {
     "1": "Adding both branches would assume every job goes through both, and the gateway is exclusive.",
     "2": "The simple average ignores that the branches are not equally likely.",
     "3": "Taking the maximum is the rule for parallel routes, not for multiple routes."
    }
   },
   {
    "tema": "Rework",
    "pregunta": "A 40-minute cycle has a reject rate of 20 % and can be reprocessed as many times as necessary. What is its cycle time?",
    "opciones": [
     "50 minutes",
     "48 minutes",
     "32 minutes",
     "40 minutes"
    ],
    "correcta": 0,
    "explicacion": "For unlimited repetitions: CT = T/(1−r) = 40 / 0.80 = 50 minutes.",
    "porQueNo": {
     "1": "48 min is (1+r)·T = 1.20 × 40, the formula for a single repetition.",
     "2": "Multiplying by (1−r) would reduce the time, when rework increases it.",
     "3": "Ignoring rework leaves the time without the effect of the reject rate."
    }
   },
   {
    "tema": "Takt time",
    "pregunta": "Which of these statements about takt time is correct?",
    "opciones": [
     "It is not measured with a stopwatch: you calculate it by dividing the net available time by customer demand",
     "It is the average time an activity takes to run",
     "You get it by timing the slowest station on the line",
     "It is a synonym for cycle time when the process is balanced"
    ],
    "correcta": 0,
    "explicacion": "Takt = Net available time / Demand. It is a pace required by the market, not a duration observed on the floor.",
    "porQueNo": {
     "1": "That describes the processing time of an activity.",
     "2": "The slowest station defines the bottleneck, not the takt.",
     "3": "CT ≈ Takt is the goal, but that does not make them the same concept: one is measured and the other is calculated."
    }
   },
   {
    "tema": "Takt time",
    "pregunta": "Takt time is 2.15 min/unit and the measured cycle time is 2.5 min/unit. What does that mean?",
    "opciones": [
     "The process is slower than demand and will not meet delivery",
     "The process has slack and can cut shifts",
     "The process is perfectly balanced",
     "The bottleneck is in demand, not in the process"
    ],
    "correcta": 0,
    "explicacion": "CT > Takt means each unit takes longer than the pace of demand allows. You have to reduce the CT or increase the net available time.",
    "porQueNo": {
     "1": "Slack would exist in the opposite case, CT < Takt.",
     "2": "Balance would be CT ≈ Takt.",
     "3": "Demand is the requirement; the constraint is on the process side."
    }
   },
   {
    "tema": "Capacity",
    "pregunta": "When you calculate the load of a resource, which time do you use and why?",
    "opciones": [
     "Processing time, because while a job waits the resource is free to handle another one",
     "Activity time (processing + waiting), because it is the real time the job stays there",
     "Wait time only, because that is where the waste is",
     "The larger of the two, to keep the calculation conservative"
    ],
    "correcta": 0,
    "explicacion": "Waiting stretches the cycle time but does not consume capacity of the resource. Using activity time inflates the load and can point to the wrong bottleneck.",
    "porQueNo": {
     "1": "It confuses how long the job stays with how long the resource is busy: they are different things.",
     "2": "Waiting does not occupy the resource; it occupies the job.",
     "3": "A badly founded 'conservative' choice leads you to invest in the wrong resource."
    }
   },
   {
    "tema": "Bottleneck",
    "pregunta": "R1 has a load of 7.22 min/job with 2 units; R3 has 8.05 min/job with 3 units. Which one is the bottleneck?",
    "opciones": [
     "R1, because its pool capacity (132.96 u/day) is lower than R3's (178.88)",
     "R3, because it has the largest load per job",
     "Neither: since they have different numbers of units they are not comparable",
     "R3, because it handles more activities of the process"
    ],
    "correcta": 0,
    "explicacion": "The bottleneck is not determined by the load on its own, but by the load against the available units: (units / load) × available time.",
    "porQueNo": {
     "1": "R3 offsets its larger load with a third unit, so it produces more.",
     "2": "They are comparable: that is exactly why you calculate the pool capacity, not the load.",
     "3": "The number of activities is irrelevant; what counts is the total weighted time."
    }
   },
   {
    "tema": "Theory of constraints",
    "pregunta": "You invest in increasing the capacity of a resource that is not the bottleneck. What happens to the capacity of the process?",
    "opciones": [
     "It does not increase: only the inventory piling up in front of the constraint grows",
     "It increases in proportion to the investment made",
     "It increases, but only if that resource is at the start of the process",
     "It decreases, because the flow becomes unbalanced"
    ],
    "correcta": 0,
    "explicacion": "The capacity of the system is the capacity of its constraint. Everything else producing faster only creates work queuing up in front of the bottleneck.",
    "porQueNo": {
     "1": "Investment does not turn into throughput if it does not touch the constraint.",
     "2": "The position in the flow does not change the principle.",
     "3": "Capacity does not decrease; what grows is the WIP and with it the cycle time."
    }
   },
   {
    "tema": "Theory of constraints",
    "pregunta": "What is the correct order of the five focusing steps of the theory of constraints?",
    "opciones": [
     "Identify, exploit, subordinate, elevate, repeat",
     "Identify, elevate, exploit, subordinate, repeat",
     "Measure, analyze, invest, control, repeat",
     "Exploit, identify, elevate, measure, subordinate"
    ],
    "correcta": 0,
    "explicacion": "Exploit (get the most out of it without investing) comes before elevate (invest). It is the order that avoids buying capacity that was not needed.",
    "porQueNo": {
     "1": "Elevating before exploiting means investing without having exhausted what is free.",
     "2": "That is roughly DMAIC, not TOC.",
     "3": "You cannot exploit a constraint that has not been identified yet."
    }
   },
   {
    "tema": "Bottleneck",
    "pregunta": "You add one unit to the bottleneck resource and the capacity of the process rises, but far less than expected. What is the most likely explanation?",
    "opciones": [
     "The bottleneck moved to another resource, which is now the new constraint",
     "The original load calculation was wrong",
     "Additional units always produce less than the original ones",
     "Capacity does not depend on the number of units of the resource"
    ],
    "correcta": 0,
    "explicacion": "Eliminating a constraint moves it: the minimum becomes another resource. That is why the fifth step of TOC is to repeat the cycle.",
    "porQueNo": {
     "1": "It can happen, but the bottleneck moving is the expected behavior of the system.",
     "2": "There are no diminishing returns per unit in this model.",
     "3": "It does depend: the pool capacity is units / load per job."
    }
   },
   {
    "tema": "Load factor",
    "pregunta": "An activity sits on a branch that receives 40 % of the jobs and is part of a loop with 15 % reprocessing. What is its load factor?",
    "opciones": [
     "0.46",
     "0.55",
     "0.40",
     "0.06"
    ],
    "correcta": 0,
    "explicacion": "0.40 × 1.15 = 0.46. The probability of the branch is multiplied by the effect of the reprocessing.",
    "porQueNo": {
     "1": "Adding 0.40 + 0.15 mixes a route probability with a repetition rate.",
     "2": "Ignoring the reprocessing underestimates the real load of the resource.",
     "3": "0.40 × 0.15 does not represent anything in the process."
    }
   },
   {
    "tema": "Load factor",
    "pregunta": "Activity F follows both C (the 35 % branch) and D (the 25 % branch). What is its load factor?",
    "opciones": [
     "0.60",
     "0.35",
     "0.0875",
     "1.00"
    ],
    "correcta": 0,
    "explicacion": "0.35 + 0.25 = 0.60. The two branches converge on F, so 60 % of the jobs go through it.",
    "porQueNo": {
     "1": "Taking only one branch forgets that the other one also feeds into F.",
     "2": "Multiplying the probabilities would assume both conditions happen at once, and they are mutually exclusive.",
     "3": "F is not common to all: the remaining 40 % follows the other route of the process."
    }
   },
   {
    "tema": "Lead time",
    "pregunta": "What does lead time measure?",
    "opciones": [
     "The total time elapsed from when the customer asks for it until they receive it, in calendar time",
     "Only the time someone is actually working on the job",
     "The pace at which you have to produce to meet demand",
     "The time the bottleneck resource is busy for each job"
    ],
    "correcta": 0,
    "explicacion": "Lead time is the time the customer perceives: it includes processing, waits and everything that happens in between, nights and weekends included.",
    "porQueNo": {
     "1": "That is the processing time, which is only one part of the lead time.",
     "2": "That is the takt time, and it is calculated from demand, it is not measured.",
     "3": "That is the resource's load per job, which is used to calculate capacity."
    }
   },
   {
    "tema": "Lead time",
    "pregunta": "A request arrives on Friday at 18:00 and nobody touches it until Monday. Once started, the process takes 45 minutes of work and 3 hours of internal waiting. What do you conclude?",
    "opciones": [
     "The cycle time did not change, but the lead time the customer perceives is approximately 72 hours",
     "The cycle time was 72 hours because it includes all the waiting",
     "The lead time is 3 hours 45 minutes, the same as the cycle time",
     "Neither of the two can be calculated without knowing the takt time"
    ],
    "correcta": 0,
    "explicacion": "The cycle time looks inside the process; the lead time looks outside, in calendar time. The process was not slower: the calendar was.",
    "porQueNo": {
     "1": "The cycle time counts the time inside the boundaries of the process, which did not start until Monday.",
     "2": "That is the cycle time; the customer waited much longer.",
     "3": "The takt time depends on demand and plays no part in this calculation."
    }
   },
   {
    "tema": "Lead time",
    "pregunta": "In your deliverable you report “process time: 8 hours”. What does the indicator need in order to be defensible?",
    "opciones": [
     "Stating which of the times it is and between which two events it is measured",
     "Converting it to minutes for greater precision",
     "Comparing it against the takt time of the process",
     "Expressing it as a percentage of the total available time"
    ],
    "correcta": 0,
    "explicacion": "“Process time” can mean processing, cycle time or lead time, and the three give very different numbers. An indicator without defined boundaries is not comparable with anything.",
    "porQueNo": {
     "1": "The unit does not resolve the ambiguity about what is being measured.",
     "2": "It is useful, but only after you know what the number measures.",
     "3": "A percentage over an undefined base carries the same ambiguity."
    }
   },
   {
    "tema": "WIP and Little's Law",
    "pregunta": "A process completes 18 requests per hour and each one stays inside for 2.5 hours. What is the average WIP?",
    "opciones": [
     "45 requests",
     "7.2 requests",
     "20.5 requests",
     "It cannot be known without knowing the capacity"
    ],
    "correcta": 0,
    "explicacion": "Little's Law: WIP = Throughput × Lead time = 18 × 2.5 = 45.",
    "porQueNo": {
     "1": "18 / 2.5 inverts the relationship.",
     "2": "Adding throughput and lead time mixes different units.",
     "3": "Little's Law relates exactly those three variables; the capacity is not needed."
    }
   },
   {
    "tema": "WIP",
    "pregunta": "The WIP of a process is doubled without changing its capacity. According to Little's Law, what happens?",
    "opciones": [
     "The lead time doubles: each job spends twice as long inside the process",
     "Throughput doubles and twice as much is delivered",
     "Nothing changes; WIP is independent of time",
     "The lead time is halved through an effect of scale"
    ],
    "correcta": 0,
    "explicacion": "If WIP = Throughput × Lead time and throughput is fixed by the capacity, increasing the WIP only stretches the lead time. It is the justification for WIP limits in Kanban.",
    "porQueNo": {
     "1": "Throughput is limited by the bottleneck, not by how much work you push in.",
     "2": "The three variables are tied together by the equation.",
     "3": "Pushing in more work never shortens the time of each job."
    }
   },
   {
    "tema": "Little's Law",
    "pregunta": "Why is Little's Law remarkable compared with other queuing theory formulas?",
    "opciones": [
     "It is a proven identity that holds regardless of the arrival distribution, the service distribution, the number of servers or the order of service",
     "Because it lets you calculate the capacity of the bottleneck without measuring anything",
     "Because it only applies when arrivals follow a Poisson distribution",
     "Because it predicts how long a particular job is going to take"
    ],
    "correcta": 0,
    "explicacion": "Most queuing formulas demand strong assumptions about the distributions. This one does not: it is a mathematical identity, and that is why you can apply it to almost any real process.",
    "porQueNo": {
     "1": "It does not replace measurement: you have to measure WIP and throughput.",
     "2": "Exactly the opposite: it does not depend on any particular distribution.",
     "3": "It describes long-run averages, never an individual case."
    }
   },
   {
    "tema": "Little's Law",
    "pregunta": "A service desk closes 24 tickets per hour and has 168 open. What is the average lead time?",
    "opciones": [
     "7 hours",
     "4,032 hours",
     "0.14 hours",
     "It cannot be known without knowing the number of technicians"
    ],
    "correcta": 0,
    "explicacion": "LT = WIP / Throughput = 168 / 24 = 7 hours.",
    "porQueNo": {
     "1": "Multiplying gives a number with no meaning here; the WIP is already the product.",
     "2": "24 / 168 inverts the relationship.",
     "3": "Little's Law does not require knowing the number of servers: that is precisely its strength."
    }
   },
   {
    "tema": "Little's Law",
    "pregunta": "The WIP of a process has been growing month after month for a year. What does that imply for applying Little's Law?",
    "opciones": [
     "The system is not in steady state, so the identity describes nothing useful: you have to stabilize it first",
     "Nothing: the law always holds, under any condition",
     "That you have to use the maximum WIP of the year instead of the average",
     "That throughput must be recalculated as WIP times lead time"
    ],
    "correcta": 0,
    "explicacion": "The steady-state condition is one of the three the law requires. A growing WIP means that more comes in than goes out, and there the average does not represent the behavior of the system.",
    "porQueNo": {
     "1": "Steady state is a requirement; without it the identity loses its practical meaning.",
     "2": "Using an extreme instead of the average does not repair the lack of stability.",
     "3": "That rearrangement is valid, but it does not solve the underlying problem."
    }
   },
   {
    "tema": "Little's Law",
    "pregunta": "A manager sees late orders and orders more work released to the floor to “speed up production”. What does Little's Law predict?",
    "opciones": [
     "Throughput will not increase and the lead time of each order will stretch proportionally",
     "Throughput will increase in the same proportion as WIP",
     "Lead time will drop because there will be more work available for the idle resources",
     "It cannot be predicted without knowing the rework rate"
    ],
    "correcta": 0,
    "explicacion": "With throughput capped by the bottleneck, WIP = Th × LT forces a higher WIP to translate into a longer lead time. It is the mathematical justification for WIP limits in Kanban.",
    "porQueNo": {
     "1": "Throughput is determined by the constraint, not by how much work you push.",
     "2": "The non-bottleneck resources already had slack; giving them more work only builds a queue in front of the constraint.",
     "3": "Rework influences throughput, but the relationship between WIP and lead time holds."
    }
   },
   {
    "tema": "Automation",
    "pregunta": "You automate a process with 8 % rework and three duplicate data entries, without redesigning it first. What is the main risk?",
    "opciones": [
     "You get a faulty process that runs faster, with the defect now embedded in the system and more expensive to correct",
     "The process improves anyway, just more slowly",
     "Automation eliminates the rework by itself",
     "There is no risk: automating always reduces cycle time"
    ],
    "correcta": 0,
    "explicacion": "First you redesign, then you automate. Coding a faulty flow makes it rigid, and correcting it then requires a systems project.",
    "porQueNo": {
     "1": "It is not a matter of improvement speed: the cause of the defect remains intact.",
     "2": "Rework comes from the root cause of the error, which automation does not touch.",
     "3": "It can reduce the time of the activities without touching the waits, which are usually the bulk."
    }
   },
   {
    "tema": "AS-IS model",
    "pregunta": "What should an AS-IS model represent?",
    "opciones": [
     "How the process actually operates today, with its waits, rework and exceptions",
     "How the process should operate according to the procedures manual",
     "How it will operate once the improvement is implemented",
     "Only the activities that add value for the customer"
    ],
    "correcta": 0,
    "explicacion": "The AS-IS documents reality, not the standard nor the wish. If you model the manual instead of the operation, the calculated gap will be fictitious.",
    "porQueNo": {
     "1": "The manual describes what is prescribed; it almost never matches what happens.",
     "2": "That is the TO-BE.",
     "3": "What does not add value is precisely what you have to document in order to be able to eliminate it."
    }
   },
   {
    "tema": "Redesign",
    "pregunta": "The goal is to reduce a process from 72 h to 8 h. Which approach fits?",
    "opciones": [
     "Flow redesign: a reduction of almost 90 % is not reached by speeding up activities",
     "Incremental improvement: successive adjustments until you reach the goal",
     "Automate each activity while keeping the current sequence",
     "Hire more staff at each stage of the process"
    ],
    "correcta": 0,
    "explicacion": "When the gap is an order of magnitude, the problem is in the design of the flow —sequence, handoffs, approvals— and not in the speed of the activities.",
    "porQueNo": {
     "1": "The incremental approach works for gaps of 10 to 20 %, not of 90 %.",
     "2": "Automating the same sequence keeps the waits, which are the bulk of the 72 h.",
     "3": "More staff does not eliminate a sequential approval wait."
    }
   },
   {
    "tema": "Simulation",
    "pregunta": "What does simulation give you that analytical calculation does not?",
    "opciones": [
     "The behavior under variability: distribution of cycle time, queues and utilization, not just averages",
     "Greater precision in calculating the average",
     "The removal of the need to capture the AS-IS",
     "The certainty that the improvement will work once implemented"
    ],
    "correcta": 0,
    "explicacion": "Analytical calculation delivers averages. Simulation shows what happens when arrivals are irregular and times vary: that is where the queues appear.",
    "porQueNo": {
     "1": "For the average, analytical calculation is enough and cheaper.",
     "2": "Simulation feeds on the AS-IS; without it, it produces results that are precise and false.",
     "3": "It reduces the risk, it does not eliminate it; that is why the pilot and the adjustment exist."
    }
   },
   {
    "tema": "Value",
    "pregunta": "An inspection required by an industry standard does not add value for the customer. What should you do in the redesign?",
    "opciones": [
     "Keep it but redesign it so that it costs less time: automate it, move it to the source or do it by sampling if the standard allows it",
     "Eliminate it, because the criterion is the value perceived by the customer",
     "Keep it intact: regulatory activities are not touched",
     "Move it to the customer so that they perform it"
    ],
    "correcta": 0,
    "explicacion": "Activities that are necessary for the business or for compliance are not eliminated, but they are optimized. The regulatory framework is a design constraint, not an excuse for not redesigning.",
    "porQueNo": {
     "1": "Eliminating a mandatory control creates a compliance risk greater than the saving.",
     "2": "The obligation is about the control, not about the way you execute it.",
     "3": "Moving your own compliance control to the customer does not move the legal responsibility."
    }
   },
   {
    "tema": "Indicators",
    "pregunta": "Which of these indicators is a service indicator and not an operational one?",
    "opciones": [
     "Percentage of complete and on-time deliveries (OTIF)",
     "Capacity in use of the bottleneck",
     "Average work in process",
     "Throughput per shift"
    ],
    "correcta": 0,
    "explicacion": "Service indicators measure what the customer perceives; operational ones measure how the process behaves on the inside.",
    "porQueNo": {
     "1": "It measures the internal utilization of a resource.",
     "2": "It measures the internal load of the process.",
     "3": "It measures the internal throughput rate per unit of time."
    }
   },
   {
    "tema": "Projects and processes",
    "pregunta": "“Implement the supplier portal” versus “onboard a supplier”. How do you classify them?",
    "opciones": [
     "The first is a project and the second a process",
     "Both are processes, with a different frequency",
     "The first is a process because it has repeatable internal activities",
     "Both are projects because they have a defined start and end"
    ],
    "correcta": 0,
    "explicacion": "A project is temporary and produces a unique result; a process is repeatable and keeps operating after the project has closed.",
    "porQueNo": {
     "1": "The implementation happens only once and then it ends.",
     "2": "Having repeatable internal activities does not make it a recurring business process.",
     "3": "Onboarding suppliers does not end: it runs indefinitely."
    }
   },
   {
    "tema": "BPM cycle",
    "pregunta": "In the process-based management life cycle, which stage produces the AS-IS model?",
    "opciones": [
     "Discovery",
     "Redesign",
     "Monitoring",
     "Implementation"
    ],
    "correcta": 0,
    "explicacion": "The cycle is identification → discovery → analysis → redesign → implementation → monitoring, and monitoring feeds back into analysis.",
    "porQueNo": {
     "1": "Redesign produces the TO-BE, starting from the AS-IS already captured.",
     "2": "Monitoring measures the process once it is implemented.",
     "3": "Implementation executes the designed change."
    }
   }
  ],
  "escenarios": [
   {
    "escenario": "Three activities happen simultaneously after an AND gateway and last 8, 12 and 5 minutes. You have to determine how much the segment contributes to the cycle time.",
    "pregunta": "Which calculation rule applies?",
    "opciones": [
     "Take the maximum: max(8, 12, 5)",
     "Add the three times",
     "Weight by probability",
     "Apply T/(1−r)"
    ],
    "correcta": 0,
    "explicacion": "Parallel routes: the convergence waits for the slowest branch, so the segment contributes 12 minutes.",
    "porQueNo": {
     "1": "Adding applies to sequential activities.",
     "2": "Weighting applies to exclusive gateways.",
     "3": "That formula is for rework."
    }
   },
   {
    "escenario": "An exclusive gateway splits the jobs: 50 % to a quick review of 5 min and 50 % to a full review of 25 min.",
    "pregunta": "Which calculation rule applies?",
    "opciones": [
     "Σ pᵢ·Tᵢ = 0.5×5 + 0.5×25",
     "max(5, 25)",
     "5 + 25",
     "(1+0.5)×25"
    ],
    "correcta": 0,
    "explicacion": "Multiple routes: each job takes only one branch, so it is weighted by probability. The segment contributes 15 minutes.",
    "porQueNo": {
     "1": "The maximum applies to parallel routes, where both happen.",
     "2": "Adding would assume that every job goes through both reviews.",
     "3": "There is no repetition of the cycle, there is a branching."
    }
   },
   {
    "escenario": "A quality control rejects 12 % of the pieces and returns them to the start of the cycle, which can repeat as many times as needed until they pass.",
    "pregunta": "Which formula fits?",
    "opciones": [
     "CT = T / (1 − 0.12)",
     "CT = (1 + 0.12) × T",
     "CT = max(T, 0.12T)",
     "CT = 0.12 × T"
    ],
    "correcta": 0,
    "explicacion": "Unlimited repetitions are modeled with T/(1−r), which is the sum of the geometric series of repetitions.",
    "porQueNo": {
     "1": "(1+r)T assumes a single repetition.",
     "2": "The maximum is the parallel-routes rule.",
     "3": "0.12×T only quantifies the part that repeats, not the complete cycle."
    }
   },
   {
    "escenario": "Customer demand is 320 units and the net available shift is 440 minutes. You need to know at what pace each unit has to come out.",
    "pregunta": "What do you calculate?",
    "opciones": [
     "Takt time = 440 / 320",
     "Cycle time = 440 × 320",
     "Capacity = 320 / 440",
     "Efficiency = 320 / 440"
    ],
    "correcta": 0,
    "explicacion": "Takt = Net available time / Demand = 1.375 min per unit. It is the pace the market imposes.",
    "porQueNo": {
     "1": "Multiplying does not produce an interpretable unit.",
     "2": "Capacity is calculated from the resources, not from the demand.",
     "3": "Cycle efficiency is TCT/CT."
    }
   },
   {
    "escenario": "The calculated capacity is 133 units/day and management asks for 150. The team proposes buying one more unit of the resource with the highest load per job.",
    "pregunta": "What must you verify before approving the investment?",
    "opciones": [
     "That this resource really is the bottleneck, and where the constraint will move afterwards",
     "That the supplier delivers the resource on time",
     "That the cycle time of the process drops proportionally",
     "That cycle efficiency goes above 80 %"
    ],
    "correcta": 0,
    "explicacion": "The highest load per job does not mean being the bottleneck: it depends on the available units. And when you elevate the constraint, it moves to another resource that may still be below the goal.",
    "porQueNo": {
     "1": "That is purchasing logistics, not capacity analysis.",
     "2": "Increasing capacity does not reduce the cycle time of an individual job.",
     "3": "Cycle efficiency measures waiting, not capacity."
    }
   },
   {
    "escenario": "The process meets the required capacity, but the time each request spends inside grew from 2 to 4 hours without demand increasing or the staff changing.",
    "pregunta": "What best explains the phenomenon, and what do you analyze it with?",
    "opciones": [
     "WIP increased; you analyze it with Little's Law",
     "Takt time dropped; you analyze it by recalculating demand",
     "The rework rate rose; you analyze it with max(T₁…Tₙ)",
     "The parallel routes became unbalanced; you analyze it with Σ pᵢ·Tᵢ"
    ],
    "correcta": 0,
    "explicacion": "WIP = Throughput × Lead time. With constant throughput, a lead time that doubles implies that WIP doubled: more work is being released into the process than it can absorb.",
    "porQueNo": {
     "1": "Takt is set by demand, which did not change.",
     "2": "An increase in rework is possible, but you do not analyze it with the parallel-routes rule.",
     "3": "Σ pᵢ·Tᵢ is the multiple-routes rule, not a balancing rule."
    }
   },
   {
    "escenario": "Request arrivals are very irregular: there are hours with 3 and hours with 40. The analytical calculation gives an acceptable average cycle time, but customers complain about long waits.",
    "pregunta": "Which tool should you use?",
    "opciones": [
     "Process simulation, to see the distribution and the queues and not just the average",
     "Recalculate the cycle time with more decimals",
     "Apply the parallel-routes formula to the slowest segment",
     "Increase the takt time until it matches the average"
    ],
    "correcta": 0,
    "explicacion": "The average hides the variability. Simulation shows the distribution of the cycle time, the length of the queues and the utilization of each resource under irregular arrivals.",
    "porQueNo": {
     "1": "Decimal precision does not solve a variability problem.",
     "2": "There is no parallel segment involved in the problem statement.",
     "3": "Takt is imposed by demand; it is not a parameter you adjust at will."
    }
   },
   {
    "escenario": "The process has 45 minutes of real work and 71 hours of total duration, with six handoffs between areas and three entries of the same data.",
    "pregunta": "Where should the redesign start?",
    "opciones": [
     "By eliminating waits and handoffs, and by integrating the data entry: that is where 99 % of the time is",
     "By speeding up the activities to bring the 45 minutes down",
     "By increasing the number of units of each resource",
     "By implementing a new system to replace the current ones"
    ],
    "correcta": 0,
    "explicacion": "With a cycle efficiency close to 1 %, optimizing the real work does not move the indicator. The problem is in the design of the flow.",
    "porQueNo": {
     "1": "Halving the 45 minutes improves the total by 22 minutes out of 71 hours.",
     "2": "More resources would attack a capacity problem, and the problem described is a flow problem.",
     "3": "Buying a system before redesigning the flow automates the mess."
    }
   }
  ],
  "clasificar": [
   {
    "consigna": "Classify each situation by the calculation rule that applies to it.",
    "categorias": [
     "Sequential sum",
     "Multiple routes (Σ p·T)",
     "Parallel routes (max)",
     "Rework"
    ],
    "items": [
     {
      "texto": "Activities chained one after another",
      "categoria": "Sequential sum"
     },
     {
      "texto": "Reception → validation → recording",
      "categoria": "Sequential sum"
     },
     {
      "texto": "Exclusive gateway with 30 % / 70 %",
      "categoria": "Multiple routes (Σ p·T)"
     },
     {
      "texto": "Domestic or export order, depending on the customer",
      "categoria": "Multiple routes (Σ p·T)"
     },
     {
      "texto": "AND gateway that opens and then converges",
      "categoria": "Parallel routes (max)"
     },
     {
      "texto": "Legal review and financial review at the same time",
      "categoria": "Parallel routes (max)"
     },
     {
      "texto": "Inspection that rejects 15 % and returns to the start of the cycle",
      "categoria": "Rework"
     },
     {
      "texto": "Piece that is machined again until it meets tolerance",
      "categoria": "Rework"
     }
    ],
    "explicacion": "The four rules: sequential adds; exclusive weights by probability; AND takes the maximum; rework uses (1+r)·T or T/(1−r) depending on whether it repeats once or as many times as needed."
   },
   {
    "consigna": "Classify each indicator by what it measures.",
    "categorias": [
     "Operational",
     "Quality",
     "Financial",
     "Service"
    ],
    "items": [
     {
      "texto": "Cycle time (CT)",
      "categoria": "Operational"
     },
     {
      "texto": "Throughput per shift",
      "categoria": "Operational"
     },
     {
      "texto": "Capacity in use of the bottleneck",
      "categoria": "Operational"
     },
     {
      "texto": "Average WIP",
      "categoria": "Operational"
     },
     {
      "texto": "Error rate",
      "categoria": "Quality"
     },
     {
      "texto": "First pass yield",
      "categoria": "Quality"
     },
     {
      "texto": "Number of reworks per month",
      "categoria": "Quality"
     },
     {
      "texto": "Cost per transaction",
      "categoria": "Financial"
     },
     {
      "texto": "Annual cost of rework",
      "categoria": "Financial"
     },
     {
      "texto": "Complete and on-time deliveries (OTIF)",
      "categoria": "Service"
     },
     {
      "texto": "Customer response time",
      "categoria": "Service"
     },
     {
      "texto": "Net Promoter Score",
      "categoria": "Service"
     }
    ],
    "explicacion": "A solid proposal presents all four dimensions. Showing only operational ones leaves the CFO without a financial argument and the customer without evidence that anything improves for them."
   },
   {
    "consigna": "The problem is different in each case. Classify by the improvement methodology that fits.",
    "categorias": [
     "Lean",
     "Six Sigma",
     "Theory of constraints",
     "BPR (radical redesign)"
    ],
    "items": [
     {
      "texto": "22 min of work against 23 h of lead time",
      "categoria": "Lean"
     },
     {
      "texto": "Three entries of the same data and six handoffs",
      "categoria": "Lean"
     },
     {
      "texto": "The result varies between 2 and 9 days with no apparent cause",
      "categoria": "Six Sigma"
     },
     {
      "texto": "Error rate of 8 % that forces the work to be redone",
      "categoria": "Six Sigma"
     },
     {
      "texto": "Demand is 150 and capacity is 133",
      "categoria": "Theory of constraints"
     },
     {
      "texto": "One saturated resource while the rest are idle",
      "categoria": "Theory of constraints"
     },
     {
      "texto": "The goal requires going from 72 h to 8 h",
      "categoria": "BPR (radical redesign)"
     },
     {
      "texto": "You have to question why each activity of the flow exists",
      "categoria": "BPR (radical redesign)"
     }
    ],
    "explicacion": "Lean attacks waste, Six Sigma attacks variation and defects, TOC attacks the capacity constraint and BPR attacks the entire design of the flow when the goal demands an order of magnitude."
   },
   {
    "consigna": "Classify each element by whether it consumes capacity of the resource or only stretches the cycle time.",
    "categorias": [
     "Consumes capacity of the resource",
     "Only stretches the cycle time",
     "Both"
    ],
    "items": [
     {
      "texto": "Processing time of the activity",
      "categoria": "Consumes capacity of the resource"
     },
     {
      "texto": "Machine time in operation",
      "categoria": "Consumes capacity of the resource"
     },
     {
      "texto": "Waiting in queue before the approval",
      "categoria": "Only stretches the cycle time"
     },
     {
      "texto": "Document stored awaiting review",
      "categoria": "Only stretches the cycle time"
     },
     {
      "texto": "Transfer of the file between areas",
      "categoria": "Only stretches the cycle time"
     },
     {
      "texto": "Rework of a rejected piece",
      "categoria": "Both"
     },
     {
      "texto": "Inspection performed by a resource of the process",
      "categoria": "Both"
     }
    ],
    "explicacion": "This distinction is what decides which time goes into the load calculation. Waiting stretches the CT but leaves the resource free; rework does both, and that is why it is so expensive."
   }
  ],
  "ordenar": [
   {
    "consigna": "Put the stages of the process-based management (BPM) life cycle in order.",
    "pasos": [
     "Process identification",
     "Discovery (AS-IS model)",
     "Process analysis",
     "Redesign (TO-BE model)",
     "Implementation",
     "Monitoring and control"
    ],
    "explicacion": "It is a cycle: monitoring detects deviations that go back to analysis. It does not end with the implementation."
   },
   {
    "consigna": "Put the five focusing steps of the theory of constraints in order.",
    "pasos": [
     "Identify the constraint of the system",
     "Exploit the constraint (get the most out of it without investing)",
     "Subordinate everything else to the pace of the constraint",
     "Elevate the constraint (now, yes, invest)",
     "Repeat: if it was broken, there is a new one somewhere else"
    ],
    "explicacion": "Exploit comes before elevate: first you exhaust what costs no money. Investing without having exploited is the most common way of buying unnecessary capacity."
   },
   {
    "consigna": "Put the procedure for calculating the capacity of a process in order.",
    "pasos": [
     "Assign each activity to its resource",
     "Calculate the load factor of each activity",
     "Calculate the load per job of each resource (Σ processing × factor)",
     "Calculate the pool capacity: units / load per job",
     "Convert to daily capacity: × 60 × hours of operation",
     "Take the minimum across resources: theoretical capacity and bottleneck",
     "Compare against the demand: capacity in use"
    ],
    "explicacion": "Skipping the load factor is the most frequent mistake: loading each activity at 100 % when only 40 % of the jobs go through it inflates the load and moves the bottleneck."
   },
   {
    "consigna": "Put the segments of the reference process in order, the way you walk through them to build the cycle time expression.",
    "pasos": [
     "A — initial common activity",
     "Multiple-routes segment: 0.3 × B + C",
     "Segment with rework: (1 + r) × (D + E + I)",
     "Parallel segment: max(G, F)",
     "H — final common activity"
    ],
    "explicacion": "You build the CT by walking through the process from start to finish and applying to each segment the rule of its pattern. The total is the sum of the segments: 10 + 29 + 38.5 + 13 + 2 = 92.5 min."
   },
   {
    "consigna": "Put in order the structure of the improvement proposal you hand in at the end of the module.",
    "pasos": [
     "Problem statement with measured magnitude",
     "Documented AS-IS and its baseline indicators",
     "Analysis: CT, TCT, efficiency, capacity, bottleneck, cost",
     "Identified causes",
     "Alternatives evaluated against explicit criteria",
     "Chosen TO-BE with the same indicators recalculated",
     "Required investment and scenarios",
     "Implementation roadmap"
    ],
    "explicacion": "The TO-BE is presented with the same indicators as the AS-IS. Changing the metric between the diagnosis and the proposal makes the improvement incomparable and destroys the credibility of the analysis."
   },
   {
    "consigna": "Put the redesign heuristics in order from lowest to highest implementation cost and risk.",
    "pasos": [
     "Eliminate the activity that neither adds value nor is required by a standard",
     "Simplify steps, fields and signatures",
     "Parallelize what today runs in series without a real dependency",
     "Empower with rules and thresholds to remove approval waits",
     "Integrate systems to capture the data only once",
     "Automate the already redesigned flow"
    ],
    "explicacion": "Automating last is not an aesthetic preference: it is the most expensive, the slowest to reverse and the most damaging if you apply it on top of a faulty flow."
   }
  ],
  "flashcards": [
   {
    "frente": "Cycle time (CT)",
    "reverso": "Average time it takes to complete a job from start to finish. It includes processing and waiting. You can measure it with a stopwatch."
   },
   {
    "frente": "Theoretical cycle time (TCT)",
    "reverso": "The same calculation but only with processing time, assuming zero waits. It is the floor you can reach without changing the technology."
   },
   {
    "frente": "Cycle efficiency",
    "reverso": "TCT / CT. What proportion of the total time is real work; the rest is waiting."
   },
   {
    "frente": "Activity time",
    "reverso": "Processing time + wait time."
   },
   {
    "frente": "Takt time",
    "reverso": "Net available time / customer demand. Touchdown rule: T / D. It is not measured: it is calculated."
   },
   {
    "frente": "Multiple routes",
    "reverso": "Exclusive gateway. Expected time = Σ pᵢ · Tᵢ. You only weight what differs between branches; what is common enters in full."
   },
   {
    "frente": "Parallel routes",
    "reverso": "AND gateway. Time = max(T₁ … Tₙ), because the convergence waits for the slowest branch."
   },
   {
    "frente": "Rework, one repetition",
    "reverso": "CT = (1 + r) · T, where T is the sum of the activities of the cycle and r the rejection rate."
   },
   {
    "frente": "Rework, unlimited repetitions",
    "reverso": "CT = T / (1 − r). With r = 0.15 and T = 20: 23.53 min, against 23 min from the single-repetition formula."
   },
   {
    "frente": "Load factor",
    "reverso": "Fraction of the jobs that go through an activity. Common = 1. A 40 % branch with 15 % rework = 0.4 × 1.15 = 0.46. Two branches that converge = the sum of their probabilities."
   },
   {
    "frente": "Load per job of a resource",
    "reverso": "Σ (PROCESSING time × load factor) of its activities. Waiting does not count: while the job waits, the resource is free."
   },
   {
    "frente": "Capacity of a resource per day",
    "reverso": "(pool units / load per job) × 60 × hours of operation."
   },
   {
    "frente": "Theoretical capacity of the process",
    "reverso": "The minimum among the capacities of all the resources."
   },
   {
    "frente": "Bottleneck",
    "reverso": "The resource whose capacity is the lowest. It is not determined by the load alone, but by the load against the available units."
   },
   {
    "frente": "Capacity in use",
    "reverso": "Demand / theoretical capacity. With 100 units over 132.96 of capacity: 75.2 %."
   },
   {
    "frente": "The 5 steps of the theory of constraints",
    "reverso": "Identify → Exploit → Subordinate → Elevate → Repeat. Exploit (free) always before elevate (expensive)."
   },
   {
    "frente": "What happens when you eliminate a bottleneck",
    "reverso": "It moves to another resource; it does not disappear from the process. That is why the fifth step of TOC is to repeat."
   },
   {
    "frente": "Lead time",
    "reverso": "Total elapsed time from when the customer asks for it until they receive it, in calendar time: processing + waits + nights and weekends. It is the time the customer perceives."
   },
   {
    "frente": "Lead time vs. cycle time",
    "reverso": "Cycle time looks inward (how long the process takes); lead time looks outward (how long the customer waits). They coincide if the process runs continuously; they differ if there are schedules, shifts or upstream queues. Always state which one you measure and between which events."
   },
   {
    "frente": "The five times",
    "reverso": "Processing (work is being done) · Wait (nobody is working) · Cycle time (processing + wait inside the process) · Lead time (what the customer perceives, in calendar terms) · Takt (the pace demand requires, you calculate it)."
   },
   {
    "frente": "Little's Law",
    "reverso": "WIP = Throughput × Lead time. If throughput is fixed by capacity, more WIP means more lead time."
   },
   {
    "frente": "L = λW",
    "reverso": "Queueing-theory notation for Little's Law: average entities in the system = arrival rate × average time inside. Published by John D. C. Little in 1961."
   },
   {
    "frente": "Why Little's Law is special",
    "reverso": "It is a proven identity, not an approximation: it holds regardless of the arrival and service distributions, the number of servers or the order in which units are served."
   },
   {
    "frente": "The 3 conditions of Little's Law",
    "reverso": "Steady state (what comes in goes out) · consistent units · long-run averages. It does not describe an individual case."
   },
   {
    "frente": "Mistakes with Little's Law",
    "reverso": "Confusing throughput with capacity · applying it to a system that is not stable · believing it explains the why. It is diagnostic, not a causal model."
   },
   {
    "frente": "WIP limit in Kanban",
    "reverso": "Little's Law justifies it: to deliver faster with the same capacity you have to start fewer things, not more."
   },
   {
    "frente": "The three readings of Little's Law",
    "reverso": "WIP = Th × LT (how much is stuck inside) · LT = WIP / Th (how long a job takes) · Th = WIP / LT (the rate at which work is completed). The units check out: units = (units/time) × time."
   },
   {
    "frente": "WIP",
    "reverso": "Work in Process: all the jobs inside the process at a given moment."
   },
   {
    "frente": "Throughput",
    "reverso": "Jobs completed per unit of time. It is the capacity actually achieved."
   },
   {
    "frente": "AS-IS model",
    "reverso": "The process as it operates today, with its real waits, rework and exceptions. It is not the procedures manual."
   },
   {
    "frente": "BPM life cycle",
    "reverso": "Identification → Discovery → Analysis → Redesign → Implementation → Monitoring, continuously."
   },
   {
    "frente": "Redesign heuristics",
    "reverso": "Eliminate · Simplify · Integrate · Parallelize · Triage · Empower · Move control to the source · Automate last."
   },
   {
    "frente": "Golden rule of redesign",
    "reverso": "Every change you propose must be expressed as an effect on a number: it reduces CT, reduces cost per transaction or increases capacity. If it does not, it is an opinion."
   },
   {
    "frente": "Cost per transaction",
    "reverso": "Total cost of operating the process / jobs completed. It is the indicator management understands immediately."
   },
   {
    "frente": "When simulation adds value",
    "reverso": "When there are queues, shared resources or variable demand, and you want to compare scenarios. It adds nothing if the AS-IS discovery was done poorly."
   },
   {
    "frente": "Activity required by a standard that adds no value",
    "reverso": "You do not eliminate it: you redesign it so it costs less time — automate it, move it to the source or do it by sampling if the standard allows."
   },
   {
    "frente": "Redesign first, automate second",
    "reverso": "Automating a defective process makes it rigid: the defect ends up embedded in the system and correcting it then requires a project."
   }
  ]
 }
}
);
