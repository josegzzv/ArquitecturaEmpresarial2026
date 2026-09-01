/* Generado por herramientas/cadenas.js — no editar a mano la estructura.
   Para corregir una traducción: edita herramientas/traduccion/casos.json
   y vuelve a ejecutar:  node herramientas/cadenas.js inyectar casos */
EA.registrarCasosEn(
{
 "categorias": [
  {
   "id": "capacidad",
   "nombre": "Bottleneck and capacity",
   "resumen": "Processes where the constraint of a single resource determines what the whole system can deliver."
  },
  {
   "id": "tiempo",
   "nombre": "Cycle time, takt and wait times",
   "resumen": "Processes where the question is how long it takes, how much of that is real work, and which waits are unavoidable."
  },
  {
   "id": "rutas",
   "nombre": "Multiple routes and process variants",
   "resumen": "Processes that branch: each customer takes a different path and the average hides the variety."
  },
  {
   "id": "orquestacion",
   "nombre": "Orchestration and digital transformation",
   "resumen": "End-to-end processes that cross areas and systems, and that only work if something coordinates them."
  },
  {
   "id": "servicios",
   "nombre": "IT services, incidents and continuity",
   "resumen": "When technology stops being an enabler and becomes the constraint that halts the operation."
  },
  {
   "id": "datos",
   "nombre": "Data, point of sale and application architecture",
   "resumen": "Processes where the real problem is not the flow but the data: who captures it, where it lives and who answers for it."
  }
 ],
 "casos": [
  {
   "id": "starbucks",
   "titulo": "Starbucks",
   "subtitulo": "The queue moves fast and you still have to wait",
   "categoria": "capacidad",
   "semanas": [
    3
   ],
   "patrones": [
    "Bottleneck",
    "Multiple routes",
    "Shared resource"
   ],
   "flujo": [
    "Customer orders",
    "Payment at the register",
    "Drink preparation",
    "Pickup at the bar"
   ],
   "contexto": "<p>The register serves people fast: taking the order and charging takes less than a minute. The pickup bar, however, piles up with people. The customer has already paid and is still waiting, which is the worst possible combination for how the service is perceived.</p>",
   "analisis": "<p><b>The register is not the bottleneck; the barista is.</b> The process has two resources in series with very different capacities: the cashier can process more orders per hour than the barista can prepare. The consequence is that optimizing the register —more cashiers, faster payment, ordering through the app— <b>does not increase the capacity of the system</b>: it only makes the queue form further downstream.</p><p>It is the cleanest everyday example of the theory of constraints: the capacity of the process is that of the most limited resource, and everything that runs faster than it only creates inventory waiting in front of the constraint — in this case, customers standing next to the bar.</p><p>There are also <b>multiple routes</b> with very different times: a filter coffee is served in seconds, a frappuccino with three modifiers takes several minutes. The expected time is not the simple average of the drinks: it is Σ p·T weighted by the real product mix, and that mix changes with the hour of the day.</p><p>Ordering through the app is the interesting case to discuss: <b>it does not increase the capacity of the bar</b>, but it changes where and how you wait. The customer waits at home or at the office instead of in the store. It improves the experience without touching throughput — and it can make throughput worse if it disrupts the barista's sequence.</p>",
   "cifras": {
    "titulo": "Illustrative scenario at peak hour",
    "encabezados": [
     "Resource",
     "Time per order",
     "Units",
     "Capacity per hour"
    ],
    "filas": [
     [
      "Cashier",
      "45 s",
      "2",
      "160 orders"
     ],
     [
      "<b>Barista</b>",
      "<b>110 s</b>",
      "<b>2</b>",
      "<b>65 orders</b>"
     ],
     [
      "Pickup at the bar",
      "15 s",
      "1",
      "240 orders"
     ],
     [
      "<b>Process capacity</b>",
      "—",
      "—",
      "<b>65 orders/h</b>"
     ]
    ]
   },
   "indicadores": [
    "Time from payment to handoff (the one the customer perceives).",
    "Barista utilization against cashier utilization.",
    "Product mix by time slot and its associated preparation time.",
    "Percentage of app orders and their effect on the preparation sequence.",
    "Walkaways: customers who see the queue and leave."
   ],
   "preguntas": [
    "If you hire one more cashier, how much does the capacity of the process increase? Justify it with numbers.",
    "Which steps of the <i>exploit</i> method of the theory of constraints would you apply to the barista before hiring another one?",
    "App ordering doubles orders at peak hour. What happens to WIP and to lead time, according to Little's Law?",
    "How would you change the product mix or the menu to raise capacity without hiring anyone?"
   ],
   "conecta": "Week 3 · capacity, bottleneck, theory of constraints, multiple routes and Little's Law."
  },
  {
   "id": "banamex",
   "titulo": "Banamex",
   "subtitulo": "Single-queue system: why one queue beats several",
   "categoria": "capacidad",
   "semanas": [
    3
   ],
   "patrones": [
    "Bottleneck",
    "Shared resource",
    "Variability"
   ],
   "flujo": [
    "Customer arrives",
    "Takes a ticket",
    "Waits in the single queue",
    "Customer interaction at the window",
    "Exit"
   ],
   "contexto": "<p>The branch switched from one queue per window to a single queue that feeds all of them. Total capacity did not change —they are the same tellers— and yet the average wait time went down, and so did the complaints.</p>",
   "analisis": "<p><b>This is not psychology: it is queueing theory.</b> With independent queues, a customer can get stuck behind a long transaction while another window frees up. The capacity exists but it is not reachable by whoever needs it. The single-queue system turns several separate resources into <b>one single pool</b>, and a shared pool absorbs variability far better.</p><p>It is exactly the logic of the capacity calculation in this course: when you compute <code>pool capacity = units / load per job</code>, you are assuming that <b>any unit of the resource can handle any job</b>. Independent queues break that assumption, and that is why they perform below the theoretical calculation.</p><p>The second effect is on <b>perception</b>, and it is not a minor one: in a single queue the customer sees that the order is respected and that the queue keeps moving. Perceived fairness reduces complaints even if the time were identical.</p><p>The nuance you have to discuss: the single-queue system <b>does not increase capacity</b>. If demand exceeds what the tellers can handle, the queue grows all the same — only now it is one long, very visible queue. The real fix is still capacity, segmentation by transaction type, or moving transactions to another channel.</p>",
   "cifras": {
    "titulo": "Illustrative comparison, same demand and same tellers",
    "encabezados": [
     "Arrangement",
     "Tellers",
     "Average wait",
     "Worst case (95th percentile)"
    ],
    "filas": [
     [
      "One queue per window",
      "4",
      "9.5 min",
      "26 min"
     ],
     [
      "<b>Single queue</b>",
      "<b>4</b>",
      "<b>6.2 min</b>",
      "<b>14 min</b>"
     ],
     [
      "Difference",
      "—",
      "−35 %",
      "−46 %"
     ]
    ]
   },
   "indicadores": [
    "Average wait time and 95th percentile (the worst case is what generates the complaint).",
    "Teller utilization and how it is spread across windows.",
    "Transaction mix: simple deposit against long procedure.",
    "Percentage of transactions that could be resolved at an ATM or in the app.",
    "Walkaways and complaints about unfair treatment."
   ],
   "preguntas": [
    "If capacity did not change, where does the reduction in wait time come from?",
    "Why does the 95th percentile improve more than the average? What does that tell whoever designs the process?",
    "Propose a segmentation by transaction type. In which case does it improve things and in which can it make them worse?",
    "The branch wants to serve 30 % more customers without hiring. What would you do, and in what order, following the five focusing steps of the theory of constraints?"
   ],
   "conecta": "Week 3 · resource pool capacity, variability, theory of constraints. Week 5 · service indicators."
  },
  {
   "id": "inscripciones",
   "titulo": "University enrollment",
   "subtitulo": "Sequential process, bottleneck and the opening of course sections",
   "categoria": "capacidad",
   "semanas": [
    3,
    5
   ],
   "patrones": [
    "Bottleneck",
    "Sequential process",
    "Demand peak"
   ],
   "flujo": [
    "Registration of the course catalog",
    "Schedule assignment",
    "Student enrollment",
    "Payment validation",
    "Opening or closing course sections",
    "Rescheduling"
   ],
   "contexto": "<p>Thousands of students enroll in the same two-day window. The system saturates, some sections fill up in minutes, others end up empty and are closed, and that forces you to reshuffle students who already had their schedule set.</p>",
   "analisis": "<p>There are <b>three overlapping problems</b> and it is worth separating them, because each one is solved differently.</p><p><b>1. An extreme demand peak.</b> The load of a whole semester is concentrated into 48 hours. Sizing the infrastructure for the peak is very expensive and leaves it idle the rest of the year; that is a technology architecture decision, not a process one. Staggering by cohort or by grade average flattens the peak — it is <b>triage</b> applied to demand.</p><p><b>2. Unnecessary sequencing.</b> Payment validation usually blocks enrollment when it could run in parallel or afterwards, with a reversal rule. The <b>parallelize</b> heuristic applies here: which steps are in series with no real dependency?</p><p><b>3. The decision to open or close a section is the real bottleneck</b>, and it is not a systems issue: it is human and sequential. Someone reviews the occupancy, decides, notifies, and only then can the affected students rearrange their schedules. Every cycle of that decision adds days of lead time. It is a case for <b>empowering</b>: if a clear rule exists —fewer than N students enrolled by date X and the section closes automatically— the decision is automated and the wait disappears.</p><p>Notice the distinction between <b>cycle time and lead time</b>: enrolling one student takes minutes of real work, but from the moment the period opens until that student's schedule is final, weeks can go by because of the reshuffles.</p>",
   "cifras": {
    "titulo": "Illustrative scenario of an enrollment period",
    "encabezados": [
     "Stage",
     "Real work",
     "Wait",
     "Note"
    ],
    "filas": [
     [
      "Online enrollment by the student",
      "12 min",
      "0–3 h",
      "Depends on how saturated the system is"
     ],
     [
      "Payment validation",
      "3 min",
      "24 h",
      "Blocks the confirmation"
     ],
     [
      "Decision to open or close a section",
      "20 min",
      "5 days",
      "Manual review by the coordination office"
     ],
     [
      "Rescheduling of the student's timetable",
      "25 min",
      "2 days",
      "Only for those affected"
     ],
     [
      "<b>Total</b>",
      "<b>60 min</b>",
      "<b>≈ 8 days</b>",
      "<b>Cycle efficiency: 0.5 %</b>"
     ]
    ]
   },
   "indicadores": [
    "Lead time from the moment the period opens until the schedule is final.",
    "Percentage of students who go through at least one reschedule.",
    "Average section occupancy and number of sections opened that are later closed.",
    "Decision time to open or close a section.",
    "Peak concurrency and system response time at the peak."
   ],
   "preguntas": [
    "With 60 minutes of real work and 8 days of lead time, where is the problem and what is NOT worth attacking?",
    "Design the automatic rule for opening and closing sections. What data does it need and who owns that data?",
    "Which activities in the flow could run in parallel without breaking any real dependency?",
    "The IT area proposes tripling the servers. Evaluate the proposal with economic feasibility and theory of constraints criteria."
   ],
   "conecta": "Week 3 · bottleneck, lead time vs. cycle time, redesign heuristics. Week 5 · feasibility and demand scenarios."
  },
  {
   "id": "ford",
   "titulo": "Ford · assembly plant",
   "subtitulo": "How the capacity of a line is actually increased",
   "categoria": "capacidad",
   "semanas": [
    3
   ],
   "patrones": [
    "Bottleneck",
    "Line balancing",
    "Takt time"
   ],
   "flujo": [
    "Stamping",
    "Body shop",
    "Paint",
    "Final assembly",
    "Testing",
    "Shipping"
   ],
   "contexto": "<p>The plant has to raise its daily output. Each station on the line has a different operation time, and the line moves at the pace of the slowest station.</p>",
   "analisis": "<p>An assembly line is <b>the theory of constraints in its most visible form</b>: every station is coupled and the slowest one sets the pace. If station 7 takes 68 seconds and the rest take 50, the line produces at 68 seconds per unit and the other stations pile up idle time.</p><p>Here <b>takt time</b> stops being theory: <code>Takt = net available time / demand</code>. If the market asks for one unit every 60 seconds and the bottleneck runs at 68, the plant cannot meet it. The options are the classic ones and you should evaluate them in order of cost:</p><ul><li><b>Exploit:</b> take away from the slow station every piece of work another one can do — line rebalancing. It is usually free and it is the first step.</li><li><b>Subordinate:</b> keep the fast stations from producing more than needed; they would only create work in process.</li><li><b>Elevate:</b> duplicate the station, automate it or add a shift. Here there is investment.</li><li><b>Repeat:</b> once you solve it, the bottleneck moves to another station. Always.</li></ul><p>The point to leave crystal clear: <b>investing in a station that is not the bottleneck does not add a single unit of output</b>. It only creates more inventory waiting in front of the constraint — and with it, more lead time, by Little's Law.</p>",
   "cifras": {
    "titulo": "Illustrative balancing of a 6-station line",
    "encabezados": [
     "Station",
     "Operation time",
     "Idle time vs. bottleneck",
     "Capacity in 8 h"
    ],
    "filas": [
     [
      "1 · Stamping",
      "52 s",
      "16 s",
      "553 u"
     ],
     [
      "2 · Body shop",
      "61 s",
      "7 s",
      "472 u"
     ],
     [
      "3 · Paint",
      "58 s",
      "10 s",
      "496 u"
     ],
     [
      "<b>4 · Final assembly</b>",
      "<b>68 s</b>",
      "<b>0 s</b>",
      "<b>423 u</b>"
     ],
     [
      "5 · Testing",
      "47 s",
      "21 s",
      "612 u"
     ],
     [
      "6 · Shipping",
      "39 s",
      "29 s",
      "738 u"
     ],
     [
      "<b>Whole line</b>",
      "<b>68 s/u</b>",
      "—",
      "<b>423 u/day</b>"
     ]
    ]
   },
   "indicadores": [
    "Cycle time of the line (the bottleneck's) against the required takt.",
    "Balancing efficiency: total useful time / (stations × bottleneck time).",
    "Idle time per station.",
    "Work in process between stations.",
    "Unplanned stoppages and their effect on real capacity against theoretical capacity."
   ],
   "preguntas": [
    "Demand calls for 480 units in 8 hours. Calculate the takt and compare it against the cycle time of the line. Does it meet it?",
    "How much does capacity go up if you automate station 6? Justify before you calculate.",
    "Propose a rebalancing that moves work from station 4 to the others. What is the new capacity and where does the bottleneck end up?",
    "What happens to work in process if stations 5 and 6 run at their maximum speed?"
   ],
   "conecta": "Week 3 · takt time, capacity, bottleneck, theory of constraints and flow balancing."
  },
  {
   "id": "telcel",
   "titulo": "Telcel · customer service centers",
   "subtitulo": "Estimated service times and the promise you make to the customer",
   "categoria": "capacidad",
   "semanas": [
    3,
    5
   ],
   "patrones": [
    "Bottleneck",
    "Multiple routes",
    "Expectation management"
   ],
   "flujo": [
    "Take a ticket",
    "Wait",
    "Diagnosis",
    "Customer interaction by transaction type",
    "Close"
   ],
   "contexto": "<p>The service center hands out a ticket with an estimated wait time. The transactions are very different from one another: paying a bill takes two minutes, a number portability or a handset replacement can take forty.</p>",
   "analisis": "<p>The core problem is the <b>mix of transactions with widely different times, handled by the same pool of advisors</b>. A single long transaction blocks several quick customers who came in behind it. It is the same math as the single-queue system, but in reverse: here the shared pool <i>hurts</i> the short transactions.</p><p>The design solution is <b>triage</b>: separate the routes by transaction type and assign resources to each one. Quick transactions are resolved in an express queue or in a digital channel; long ones are booked by appointment and stop competing for the same resource.</p><p>The estimated time you show the customer deserves its own discussion. If you compute it with the <b>average</b>, it will be optimistic half the time — and a broken promise does more damage than having promised nothing. Computing it with a <b>high percentile</b> is conservative but achievable. It is the same debate as in simulation: the average hides the variability, and the customer lives the variability, not the average.</p><p>This case connects directly with the analysis of multiple routes: the expected interaction time is <b>Σ p·T</b> over the real mix of transactions, and that mix changes with the day of the month — the first days concentrate payments.</p>",
   "cifras": {
    "titulo": "Illustrative mix of transactions",
    "encabezados": [
     "Transaction",
     "Share",
     "Interaction time",
     "Contribution to the average"
    ],
    "filas": [
     [
      "Bill payment",
      "40 %",
      "3 min",
      "1.2 min"
     ],
     [
      "Billing inquiry",
      "25 %",
      "12 min",
      "3.0 min"
     ],
     [
      "Plan change",
      "20 %",
      "18 min",
      "3.6 min"
     ],
     [
      "Number portability or replacement",
      "15 %",
      "42 min",
      "6.3 min"
     ],
     [
      "<b>Expected time</b>",
      "<b>100 %</b>",
      "—",
      "<b>14.1 min</b>"
     ]
    ]
   },
   "indicadores": [
    "Wait time by transaction type, not only the overall one.",
    "Compliance with the estimated time promised to the customer.",
    "Advisor utilization and share of transactions that can be resolved in a digital channel.",
    "Walkaways before being served.",
    "Repeat visits: customers who come back for the same unresolved issue."
   ],
   "preguntas": [
    "With the mix in the table, what is the expected interaction time? What happens if payments rise to 70 % in the first days of the month?",
    "Is it better to show the estimated time with the average or with the 90th percentile? Argue from the customer's expectation.",
    "Design a separation of routes by transaction type. How many advisors do you assign to each one, and on what criterion?",
    "If 40 % of payments migrate to the app, what happens to the expected time of those who still go to the branch?"
   ],
   "conecta": "Week 3 · multiple routes, capacity, triage. Week 5 · service indicators and simulation under variability."
  },
  {
   "id": "mcdonalds",
   "titulo": "McDonald's",
   "subtitulo": "Time and motion, point of sale and technology",
   "categoria": "tiempo",
   "semanas": [
    1,
    3
   ],
   "patrones": [
    "Takt time",
    "Parallel routes",
    "Standardization",
    "Automation"
   ],
   "flujo": [
    "Order",
    "Payment",
    "Kitchen preparation",
    "Assembly",
    "Handoff"
   ],
   "contexto": "<p>The whole model is built on time and motion: standardized procedures, specialized stations and equipment designed so that the operation does not depend on individual skill. Self-service kiosks and app ordering changed the front end of the process.</p>",
   "analisis": "<p>It is the perfect teaching case of <b>standardization as an enabler of capacity</b>. By reducing the time variability of each activity, the process becomes predictable, you can balance it precisely and the takt can be sustained.</p><p>The kitchen runs on <b>parallel routes</b>: while the patty is being cooked, another station makes the fries and another pours the drink. The time of the order is not the sum but <b>the maximum</b> of the branches, plus the final assembly. That is exactly the rule from the course, applied to a process students see every day.</p><p>The <b>kiosks</b> are the most interesting point to discuss. They increase the capacity of <i>order taking</i> —the front end— but not that of the kitchen. If the kitchen was the bottleneck, the kiosk moves the queue from the counter to the pickup bar, exactly as in the Starbucks case. What they do change, and this is pure business, is the <b>average ticket</b>: the screen suggests add-ons without the social pressure of a cashier waiting.</p><p>Here you should draw the three levels of the course precisely: the kiosk <b>digitizes</b> order taking; a kitchen with timers and automatic fryers <b>automates</b>; app ordering with home delivery, which changes who the customer is and how the product arrives, is <b>digital transformation</b>.</p>",
   "cifras": {
    "titulo": "Illustrative times for a standard order",
    "encabezados": [
     "Activity",
     "Time",
     "Type",
     "Note"
    ],
    "filas": [
     [
      "Order taking at the counter",
      "48 s",
      "Sequential",
      "With kiosk: 0 s for the staff"
     ],
     [
      "Payment",
      "22 s",
      "Sequential",
      ""
     ],
     [
      "Burger preparation",
      "95 s",
      "<b>Parallel</b>",
      "Slowest branch"
     ],
     [
      "Fries preparation",
      "70 s",
      "<b>Parallel</b>",
      "Waits 25 s for the burger"
     ],
     [
      "Pour the drink",
      "18 s",
      "<b>Parallel</b>",
      "Waits 77 s"
     ],
     [
      "Assembly and handoff",
      "25 s",
      "Sequential",
      ""
     ],
     [
      "<b>Cycle time</b>",
      "<b>190 s</b>",
      "—",
      "<b>48 + 22 + max(95,70,18) + 25</b>"
     ]
    ]
   },
   "indicadores": [
    "Time from order to handoff, by channel (counter, kiosk, app, drive-thru).",
    "Time variability per station: the deviation matters as much as the average.",
    "Average ticket by channel.",
    "Percentage of orders with an error or remade.",
    "Takt compliance at peak hour."
   ],
   "preguntas": [
    "With the data in the table, calculate the cycle time. Why are the three parallel branches not added up?",
    "Kiosks remove the 48 s of order taking from the staff. Does the capacity of the restaurant increase? What does that depend on?",
    "Classify each initiative as digitization, automation or digital transformation, and justify it.",
    "Peak-hour demand is 120 orders/hour. Calculate the takt and compare it with the cycle time. What does the difference imply?"
   ],
   "conecta": "Week 1 · automation vs. digitization vs. digital transformation. Week 3 · parallel routes, takt time and capacity."
  },
  {
   "id": "pasteleria",
   "titulo": "Pastry shop",
   "subtitulo": "When the wait is physical and cannot be eliminated",
   "categoria": "tiempo",
   "semanas": [
    3,
    5
   ],
   "patrones": [
    "Mandatory wait",
    "Shared resource",
    "Parallel routes"
   ],
   "flujo": [
    "Prepare the batter",
    "Bake",
    "Cool",
    "Frost and decorate",
    "Pack"
   ],
   "contexto": "<p>A cake has to cool before it can be frosted; if you decorate it warm, the frosting melts. Cooling takes forty minutes and there is no way to skip it. The oven, on top of that, serves several orders and is a shared resource.</p>",
   "analisis": "<p>This case exists to break a badly learned Lean dogma: <b>not every wait is eliminable waste</b>. Cooling is a <b>physical constraint of the product</b>, not an organizational inefficiency. Confusing the two leads you to propose impossible improvements and to lose credibility with the client.</p><p>The right classification matters. Cooling does not add value that the customer pays for separately, but it is <b>necessary</b> for the product to exist — it is NNVA, not NVA. You do not eliminate it: you <b>optimize</b> it with technology (a blast chiller cuts 40 minutes down to 12) or you <b>hide</b> it with sequencing (while one cake cools, the decorator works on another).</p><p>And here is the key distinction of the course: cooling <b>lengthens lead time but does not consume capacity</b>. While the cake cools, the oven and the decorator are free to handle another order. That is why cooling time <b>does not enter the load calculation of the resource</b> — it is exactly the reason why load is computed with processing time and not with activity time.</p><p>The real bottleneck is the <b>oven</b>: a shared resource with capacity limited by batch. Cooling, by contrast, is parallelizable without limit as long as there is shelf space.</p>",
   "cifras": {
    "titulo": "Illustrative times for one cake",
    "encabezados": [
     "Activity",
     "Processing",
     "Wait",
     "Does it consume capacity?"
    ],
    "filas": [
     [
      "Prepare the batter",
      "18 min",
      "0",
      "Yes · pastry chef"
     ],
     [
      "Bake",
      "35 min",
      "0",
      "Yes · <b>oven (bottleneck)</b>"
     ],
     [
      "<b>Cool</b>",
      "<b>0 min</b>",
      "<b>40 min</b>",
      "<b>No · it only takes up space</b>"
     ],
     [
      "Frost and decorate",
      "28 min",
      "0",
      "Yes · decorator"
     ],
     [
      "Pack",
      "6 min",
      "0",
      "Yes · packing"
     ],
     [
      "<b>Total</b>",
      "<b>87 min</b>",
      "<b>40 min</b>",
      "Lead time: 127 min"
     ]
    ]
   },
   "indicadores": [
    "Order lead time and its breakdown into processing versus mandatory wait.",
    "Oven utilization: it is the real constraint.",
    "Cakes cooling at the same time and the shelf space available.",
    "Orders delivered on time in peak season.",
    "Rework caused by decorating too early."
   ],
   "preguntas": [
    "Classify the cooling as VA, NNVA or NVA and defend your answer.",
    "Why do the 40 minutes of cooling NOT enter the load calculation of the resource?",
    "A blast chiller costs $85,000 and cuts the cooling to 12 minutes. Does it increase the bakery's capacity? When does it and when does it not?",
    "In peak season three times as many orders arrive. Which resource saturates first, and what would you do before buying another oven?"
   ],
   "conecta": "Week 3 · processing vs. waiting, why waiting does not consume capacity, bottleneck. Week 5 · VA/NNVA/NVA and investment appraisal."
  },
  {
   "id": "vivaaerobus",
   "titulo": "VivaAerobus",
   "subtitulo": "Baggage check-in: moving the work to the customer and to the right moment",
   "categoria": "tiempo",
   "semanas": [
    1,
    3,
    5
   ],
   "patrones": [
    "Multiple routes",
    "Move the control to the source",
    "Time constraint"
   ],
   "flujo": [
    "Purchase",
    "Online or airport check-in",
    "Baggage check-in",
    "Security screening",
    "Boarding"
   ],
   "contexto": "<p>The low-cost model depends on turning the aircraft around quickly. Online check-in, the fee for checked baggage and the strict cut-off times exist to protect a process that tolerates no delay: every minute the aircraft spends on the ground costs money.</p>",
   "analisis": "<p>There is a process design decision here disguised as a commercial policy. By pushing check-in onto the web, the airline <b>moves the work to the source and out of its critical process</b>. The passenger enters their own data, in their own time, without consuming counter capacity. It is the same heuristic as the supplier portal in the course: whoever holds the data enters it.</p><p>The fee for checked baggage <b>is not only a source of revenue</b>: it reduces the volume that goes through the belt, which is a shared resource with fixed capacity. Changing the price changes the route mix of the process — it is process design through the business model.</p><p>The <b>cut-off times</b> are the uncomfortable part, and that is exactly why they are good to discuss. From the process side they are a mechanism for protecting the constraint: without them, one late passenger delays the whole flight and disrupts the day's rotations. From the customer experience side they are inflexible. The honest question is where the balance point lies, and whether the customer understands the rule before getting to the airport.</p><p>Note the <b>perceived lead time</b>: the passenger counts from the moment they leave home until they sit down. Much of that time is not under the airline's control, but it does shape their satisfaction. It is the reminder that the customer measures the process with their own boundaries, not with the provider's.</p>",
   "cifras": {
    "titulo": "Illustrative passenger routes",
    "encabezados": [
     "Route",
     "Share",
     "Time at the airport",
     "Resource consumed"
    ],
    "filas": [
     [
      "Online check-in, no baggage",
      "45 %",
      "8 min",
      "No counter resource"
     ],
     [
      "Online check-in, with baggage",
      "30 %",
      "22 min",
      "Belt and counter"
     ],
     [
      "Airport check-in, no baggage",
      "15 %",
      "26 min",
      "Counter"
     ],
     [
      "Airport check-in, with baggage",
      "10 %",
      "38 min",
      "Counter and belt"
     ],
     [
      "<b>Expected time</b>",
      "<b>100 %</b>",
      "<b>17.9 min</b>",
      "—"
     ]
    ]
   },
   "indicadores": [
    "Percentage of online check-in (the higher it is, the less counter load).",
    "Aircraft turnaround time on the ground.",
    "On-time departure and its root cause when it fails.",
    "Passengers who miss the flight because of the cut-off time.",
    "Cost per passenger with checked baggage against the baggage revenue."
   ],
   "preguntas": [
    "Calculate the expected time at the airport with the mix in the table. What happens if online check-in rises to 90 %?",
    "Is online check-in digitization, automation or digital transformation? Justify it with the course definition.",
    "The cut-off time protects the constraint but penalizes the customer. Propose a redesign that achieves both.",
    "Which indicators would you use to show management that charging for baggage improves the process and not only the revenue?"
   ],
   "conecta": "Week 1 · digitization vs. digital transformation. Week 3 · multiple routes and lead time. Week 5 · moving the control to the source."
  },
  {
   "id": "costco",
   "titulo": "Costco",
   "subtitulo": "Memberships and returns: the process as the value proposition",
   "categoria": "rutas",
   "semanas": [
    1,
    5
   ],
   "patrones": [
    "Multiple routes",
    "Control at the entrance",
    "Policy as design"
   ],
   "flujo": [
    "Membership registration or renewal",
    "Entry",
    "Purchase",
    "Exit check",
    "Return if applicable"
   ],
   "contexto": "<p>Costco charges an annual membership and in exchange offers an exceptionally broad return policy. Two decisions that look commercial and are, underneath, process design decisions.</p>",
   "analisis": "<p><b>The membership is a control moved to the entrance of the process.</b> By identifying every customer before they buy, the whole downstream process runs on known data: who buys, how often, what they return. That allows a generous return policy without exposure to abuse, because behavior is traceable. The data architecture enables the commercial policy — not the other way around.</p><p>The <b>return</b> is an alternate route off the main process, with low probability but high cost. In the terms of the course it is <b>rework</b>: it consumes resources, reverses a transaction, moves inventory and creates no new value. You model it with its probability and its cost, exactly like the rejection rate <code>r</code>.</p><p>The point that breaks intuition: <b>Costco chooses not to minimize its return rate</b>. An easy return raises the willingness to buy and to renew the membership. The cost of the rework is paid for with higher recurring revenue. It is the best example in the course that <b>eliminating all waste is not always optimal</b>: you have to evaluate the full effect on the business, not only the local efficiency of the process.</p><p>The <b>exit check</b> deserves a discussion of its own: it is an activity the customer does not value, it adds seconds of waiting, and it exists for loss prevention. It is classic NNVA — you do not eliminate it, you optimize it.</p>",
   "cifras": {
    "titulo": "Illustrative economics of the return policy",
    "encabezados": [
     "Concept",
     "Value",
     "Calculation"
    ],
    "filas": [
     [
      "Annual transactions per member",
      "24",
      "—"
     ],
     [
      "Average ticket",
      "$1,850",
      "—"
     ],
     [
      "Return rate",
      "2.8 %",
      "—"
     ],
     [
      "Cost of processing one return",
      "$140",
      "Labor, inventory, shrinkage"
     ],
     [
      "Annual cost of returns per member",
      "<b>$94</b>",
      "24 × 0.028 × 140"
     ],
     [
      "Annual membership",
      "<b>$900</b>",
      "—"
     ],
     [
      "Remaining margin",
      "<b>$806</b>",
      "The policy pays for itself"
     ]
    ]
   },
   "indicadores": [
    "Membership renewal rate: the indicator that really matters.",
    "Return rate and its cost per transaction.",
    "Average ticket and visit frequency per member.",
    "Time taken by the exit check and its effect on perception.",
    "Detected abuse of the policy against the cost of controlling it."
   ],
   "preguntas": [
    "Why does the membership enable the return policy? Answer it in terms of data architecture.",
    "The return is rework. Why does the company not try to minimize it? When would that logic stop working?",
    "Classify the exit check as VA, NNVA or NVA and propose how to optimize it without removing the control.",
    "With the figures in the table, up to what return rate does the policy stay profitable?"
   ],
   "conecta": "Week 1 · business and data domains. Week 3 · rework and alternate routes. Week 5 · VA/NNVA/NVA and the cost of a policy."
  },
  {
   "id": "super-linea",
   "titulo": "Súper en línea",
   "subtitulo": "One order, many payment and delivery routes",
   "categoria": "rutas",
   "semanas": [
    2,
    3
   ],
   "patrones": [
    "Multiple routes",
    "Systems integration",
    "Exceptions"
   ],
   "flujo": [
    "Product selection",
    "Payment",
    "In-store picking",
    "Substitutions",
    "Delivery or pickup",
    "Charge adjustment"
   ],
   "contexto": "<p>The customer builds the order online, chooses among several payment methods and decides whether to pick it up in the store or ask for home delivery. In the store, a picker walks the aisles and finds that some products are not available.</p>",
   "analisis": "<p>The process branches several times and each branch is an <b>exclusive gateway</b> with its own probability: payment method, delivery mode, and above all <b>the real availability of the product</b>.</p><p>The <b>substitution</b> is where the complexity lives and where satisfaction is lost. If a product is missing, someone has to decide: do you substitute it, cancel it, or ask the customer? Each option opens a route with a different time, cost and effect on the experience. Asking the customer live is the best thing for them and the worst thing for the cycle time — it introduces a wait for a human answer in the middle of picking.</p><p>The root of the problem is <b>data architecture</b>: the inventory the customer sees online does not match the physical one. The cause is usually an inventory updated in batches instead of in real time, plus unrecorded shrinkage. <b>A problem that looks like a process problem is really a data problem.</b> No improvement to the picking flow solves it if the stock data lies.</p><p>The <b>charge adjustment</b> after the substitution adds one more route: if the replacement product costs a different amount, you have to reverse and re-charge, and that touches payment systems with rules of their own. It is integration, not just process.</p>",
   "cifras": {
    "titulo": "Illustrative routes of a 25-item order",
    "encabezados": [
     "Situation",
     "Probability",
     "Additional time",
     "Effect"
    ],
    "filas": [
     [
      "Everything available",
      "62 %",
      "0 min",
      "Happy path"
     ],
     [
      "Automatic substitution by rule",
      "24 %",
      "+3 min",
      "Risk of dissatisfaction"
     ],
     [
      "Ask the customer by chat",
      "9 %",
      "+11 min",
      "Wait for a human answer"
     ],
     [
      "Item cancellation and refund",
      "5 %",
      "+8 min",
      "Charge adjustment"
     ],
     [
      "<b>Expected additional time</b>",
      "<b>100 %</b>",
      "<b>+2.1 min</b>",
      "—"
     ]
    ]
   },
   "indicadores": [
    "Inventory accuracy: difference between system stock and physical stock.",
    "Substitution and cancellation rate per order.",
    "Order lead time by delivery mode.",
    "Satisfaction after a substitution.",
    "Charge adjustments and their error rate."
   ],
   "preguntas": [
    "The symptom is “picking takes too long”. What is the root cause and which architecture domain does it belong to?",
    "Calculate the expected additional time with the table. Which route would you attack first and why?",
    "Design the automatic substitution rule. What data does it need and who is responsible for that data?",
    "What would you demand of the application architecture so that the online inventory is reliable?"
   ],
   "conecta": "Week 1 · data and application domains. Week 2 · integration and the process-application matrix. Week 3 · multiple routes."
  },
  {
   "id": "adidas",
   "titulo": "adidas.com",
   "subtitulo": "Global e-commerce: payments, fraud and returns",
   "categoria": "rutas",
   "semanas": [
    2,
    4
   ],
   "patrones": [
    "Multiple routes",
    "Mandatory controls",
    "Integration"
   ],
   "flujo": [
    "Browsing",
    "Cart",
    "Payment",
    "Anti-fraud",
    "Preparation",
    "Shipping",
    "Return if applicable"
   ],
   "contexto": "<p>A global online store accepts cards, bank transfers, digital wallets, cash payments by reference number and deferred payment. Each method has its own flow, its own confirmation time and its own reversal rules.</p>",
   "analisis": "<p>Payment is not <i>one</i> activity: it is an <b>exclusive gateway with routes of radically different times</b>. A card confirms in seconds; a cash payment by reference number can take days and the order sits in limbo meanwhile. That means <b>the lead time of the order depends on the payment method chosen</b>, something the customer does not always understand and the design has to communicate.</p><p>The <b>anti-fraud check</b> is a mandatory control that adds no value for the customer — pure NNVA — and that also introduces an exception route: manual review. An order flagged as suspicious stops and waits for human judgment. Raising the threshold reduces fraud and increases false positives, which are lost sales from legitimate customers. <b>It is a risk setting, not a technical decision</b>, and that is why the business has to make it with data, not IT on its own.</p><p>From the architecture side, each payment method is an <b>integration with a third party</b>: its own API, its own response times, its own failure mode and its own reconciliation format. This is where the course connects with <b>PCI DSS</b>: the design has to minimize contact with card data — tokenization, redirection to the provider — because every system that touches that data falls into audit scope and makes everything more expensive.</p><p>The <b>international return</b> adds reverse logistics, customs and a refund through the same original payment channel, which does not always allow it. It is a low-probability, high-complexity route: exactly the kind of exception that projects underestimate when they estimate.</p>",
   "cifras": {
    "titulo": "Illustrative payment routes",
    "encabezados": [
     "Method",
     "Share",
     "Confirmation",
     "Abandonment rate"
    ],
    "filas": [
     [
      "Credit or debit card",
      "58 %",
      "Seconds",
      "6 %"
     ],
     [
      "Digital wallet",
      "22 %",
      "Seconds",
      "4 %"
     ],
     [
      "Cash payment by reference",
      "12 %",
      "Up to 72 h",
      "31 %"
     ],
     [
      "Deferred payment in installments",
      "8 %",
      "Minutes",
      "9 %"
     ],
     [
      "<b>Anti-fraud review</b>",
      "<b>3 % of the total</b>",
      "<b>+ 4 h</b>",
      "<b>18 %</b>"
     ]
    ]
   },
   "indicadores": [
    "Conversion and abandonment rate by payment method.",
    "Order lead time by payment method.",
    "False positives of the anti-fraud check and sales lost for that reason.",
    "Return rate by product category.",
    "Integration and reconciliation cost per payment provider."
   ],
   "preguntas": [
    "Why does the order lead time depend on the payment method? How would you communicate it to the customer?",
    "The anti-fraud check sends 3 % to manual review with 18 % abandonment. Quantify the cost of the control and compare it with the fraud avoided.",
    "Classify the anti-fraud check as VA, NNVA or NVA. Can it be eliminated? Can it be optimized?",
    "Which architecture decisions reduce the scope of PCI DSS, and why does that matter economically?"
   ],
   "conecta": "Week 2 · integration and the process-application matrix. Week 3 · multiple routes. Week 4 · standards, security and suppliers. Week 5 · the cost of a control."
  },
  {
   "id": "oxxo-gas",
   "titulo": "OXXO Gas / Petro 7",
   "subtitulo": "Invoicing after the purchase: a route that is born disconnected",
   "categoria": "rutas",
   "semanas": [
    2,
    3
   ],
   "patrones": [
    "Decoupled route",
    "Rework",
    "Data integration"
   ],
   "flujo": [
    "Fueling",
    "Charge",
    "Receipt",
    "Receipt entry in the portal",
    "Invoice issued",
    "Correction if it fails"
   ],
   "contexto": "<p>The customer fills up and gets a receipt. If they need an invoice, they go afterwards to a portal, enter the receipt data and their tax details, and wait for the document. Often something does not match and it has to be corrected.</p>",
   "analisis": "<p>Here is a <b>process split in two that was never designed as one</b>. The sale happens at the station, in one system; the invoicing happens afterwards, in another portal, with data the customer types in again. The same data is entered twice: that is the definition of <b>duplicate data entry</b>, one of the wastes in the course.</p><p>The <b>rework</b> is high and predictable: a mistyped RFC, an expired receipt, the wrong tax regime, a station that does not report the sale in time. Every failure forces you to repeat the whole cycle, and the rate <code>r</code> here is not marginal. With the course formula, an 8-minute cycle with 25 % rejection costs 10 expected minutes per invoice — and the customer pays that time, not the company, which is exactly what makes the problem invisible.</p><p>The root cause is <b>architectural</b>: the point of sale and the invoicing system do not share the transaction data in real time. The right design would be to <b>capture once, at the source</b>: identify the customer at the moment of fueling — card, app, QR — and issue the invoice automatically. It is the same principle as the supplier portal.</p><p>The underlying discussion: the cost of the current process is <b>shifted onto the customer</b>, so it does not show up in any internal indicator. That is exactly why value analysis has to be done from the customer's perspective and not only from internal efficiency.</p>",
   "cifras": {
    "titulo": "Illustrative invoicing cycle",
    "encabezados": [
     "Concept",
     "Value",
     "Note"
    ],
    "filas": [
     [
      "Data entry time in the portal",
      "8 min",
      "The customer spends it"
     ],
     [
      "Rejection or error rate",
      "25 %",
      "RFC, expired receipt, tax regime"
     ],
     [
      "Expected time with rework",
      "<b>10 min</b>",
      "(1 + 0.25) × 8"
     ],
     [
      "Monthly invoices per station",
      "1,400",
      "—"
     ],
     [
      "Customer hours consumed per month",
      "<b>233 h</b>",
      "1,400 × 10 min"
     ],
     [
      "Support calls per failed invoice",
      "6 %",
      "A cost that is internal"
     ]
    ]
   },
   "indicadores": [
    "Invoicing success rate on the first attempt.",
    "Time it takes the customer to complete the procedure.",
    "Support calls or tickets for invoicing problems.",
    "Percentage of sales that require an invoice.",
    "Time between the sale and the receipt becoming available in the portal."
   ],
   "preguntas": [
    "With a cycle of 8 min and 25 % rejection, calculate the expected time under the two rework assumptions of the course.",
    "The customer pays the cost and it does not appear in the internal indicators. What does that imply for value analysis?",
    "Design the TO-BE where the data is captured only once. What does it require from the data and application architectures?",
    "Which indicator would convince management to invest, if the saving does not appear in their income statement?"
   ],
   "conecta": "Week 2 · duplicate data entry and fragmentation. Week 3 · rework and its two formulas. Week 5 · value from the customer and the cost of doing nothing."
  },
  {
   "id": "salud-digna",
   "titulo": "Salud Digna",
   "subtitulo": "Synchronized appointments and service: orchestration as the product",
   "categoria": "orquestacion",
   "semanas": [
    1,
    4,
    5
   ],
   "patrones": [
    "End-to-end orchestration",
    "Digital transformation",
    "Moving bottleneck"
   ],
   "flujo": [
    "Appointment booking",
    "Registration",
    "Sample collection",
    "Laboratory processing",
    "Delivery of results",
    "Looking up the result"
   ],
   "contexto": "<p>The model is based on high volume and low price, which only works if the process is synchronized end to end. The online appointment, the registration, the sample collection and the digital delivery of results operate as a single flow, not as four separate procedures.</p>",
   "analisis": "<p>This is the case in the catalog that <b>really is digital transformation</b>, and it is worth contrasting with the others. No form was digitized and no activity was automated: <b>the service model changed</b>. Before, the patient arrived, took a number and waited without knowing how long; now they arrive at an assigned time and the process is sized to serve them inside that window.</p><p>The appointment is not a convenience: it is a <b>demand control mechanism</b>. Spreading out the arrivals flattens the peak, and flattening the peak is what allows you to operate close to capacity without creating queues. It is the exact counterpart of the enrollment case, where the peak was left uncontrolled.</p><p>Orchestration requires <b>four domains to be aligned at the same time</b>: business defines the time promise; data keeps a single patient record across branches; applications connect the calendar, the laboratory and the results portal; technology sustains availability. If one fails, the promise breaks and the patient notices immediately.</p><p>The bottleneck <b>moves during the day</b>: in the morning it is sample collection, later it is the laboratory equipment. A capacity analysis with daily averages does not detect it. It is the clearest argument in the course in favor of simulation over analytical calculation.</p>",
   "cifras": {
    "titulo": "Illustrative scenario of one branch",
    "encabezados": [
     "Stage",
     "Capacity per hour",
     "Demand 8-11 h",
     "Demand 11-14 h"
    ],
    "filas": [
     [
      "Registration",
      "60 patients",
      "55",
      "38"
     ],
     [
      "<b>Sample collection</b>",
      "<b>45 patients</b>",
      "<b>52 (saturated)</b>",
      "36"
     ],
     [
      "Laboratory processing",
      "50 samples",
      "40",
      "<b>54 (saturated)</b>"
     ],
     [
      "Digital delivery",
      "No limit",
      "—",
      "—"
     ],
     [
      "<b>Bottleneck</b>",
      "—",
      "<b>Sample collection</b>",
      "<b>Laboratory</b>"
     ]
    ]
   },
   "indicadores": [
    "Appointment time compliance: difference between the assigned time and the time the patient is actually seen.",
    "Lead time from the sample collection to the result being available.",
    "Utilization by stage and by time slot, not as a daily average.",
    "Percentage of patients who look up their result online.",
    "No-show appointments and their effect on wasted capacity."
   ],
   "preguntas": [
    "Why is this digital transformation and not just digitization? Use the course definition.",
    "The bottleneck changes between the morning and the afternoon. What does that imply for capacity analysis with averages?",
    "How does the appointment help you operate close to capacity? Relate it to Little's Law.",
    "12 % of appointments are no-shows. Propose a redesign and calculate the effect on the capacity actually used."
   ],
   "conecta": "Week 1 · the four domains and digital transformation. Week 3 · capacity and a bottleneck that moves. Week 5 · simulation under variability."
  },
  {
   "id": "toyota",
   "titulo": "Toyota · maintenance service",
   "subtitulo": "Scheduling appointments to protect the capacity of the workshop",
   "categoria": "orquestacion",
   "semanas": [
    3,
    5
   ],
   "patrones": [
    "Demand control",
    "Specialized resource",
    "Multiple routes"
   ],
   "flujo": [
    "Appointment booking",
    "Reception",
    "Diagnosis",
    "Service",
    "Quality control",
    "Delivery"
   ],
   "contexto": "<p>The shop schedules appointments by service type. A 10,000 km maintenance is predictable and standardized; a breakdown repair is uncertain in time and in parts. Both compete for the same bays and the same technicians.</p>",
   "analisis": "<p>The company that invented the lean production system applies the same logic in its service shop: <b>level the load</b>. The appointment is the mechanism, and its real function is to make demand look like capacity.</p><p>The design problem is the <b>mix of jobs with very different variability</b>. Scheduled maintenance has an almost fixed time; a breakdown repair has a wide distribution and sometimes depends on a part that is not there. Putting both into the same pool of bays lets one uncertain job block several predictable jobs — the same phenomenon as in the Telcel case.</p><p>The design solution is to <b>separate routes and reserve capacity</b>: bays dedicated to quick service, with standardized times, and bays for diagnosis and repair, with slack for the uncertainty. It is triage applied to a service shop.</p><p>The <b>missing part</b> deserves attention of its own: it turns a 2-hour service into a 3-day one, and the car occupies a bay while it waits. That is not a shop process problem but a <b>supply chain and inventory data</b> problem — again, a symptom in one domain whose cause lives in another.</p>",
   "cifras": {
    "titulo": "Illustrative job mix",
    "encabezados": [
     "Service type",
     "Share",
     "Typical time",
     "Variability"
    ],
    "filas": [
     [
      "Scheduled maintenance",
      "55 %",
      "2.0 h",
      "Low (±15 min)"
     ],
     [
      "Minor service with diagnosis",
      "28 %",
      "3.5 h",
      "Medium (±1 h)"
     ],
     [
      "Major repair",
      "12 %",
      "8.0 h",
      "High (±4 h)"
     ],
     [
      "Repair with a missing part",
      "5 %",
      "26 h",
      "Very high"
     ],
     [
      "<b>Expected time</b>",
      "<b>100 %</b>",
      "<b>4.4 h</b>",
      "—"
     ]
    ]
   },
   "indicadores": [
    "Compliance with the promised delivery hour.",
    "Bay utilization by service type.",
    "Percentage of services halted for lack of a part.",
    "Diagnosis time and its variability.",
    "Rework: vehicles that come back with the same symptom."
   ],
   "preguntas": [
    "Calculate the expected time with the mix in the table. How useful is that average for promising a delivery hour?",
    "Why is it worth separating bays by service type? Relate it to the Telcel case.",
    "The missing part occupies a bay for 26 hours. What does that do to capacity, and which domain does the cause belong to?",
    "Design the scheduling policy: how many appointments of each type do you accept per day, and by what criterion?"
   ],
   "conecta": "Week 3 · capacity, multiple routes, variability. Week 5 · triage, load leveling and simulation."
  },
  {
   "id": "rappi",
   "titulo": "Rappi",
   "subtitulo": "One order, three actors and no common boss",
   "categoria": "orquestacion",
   "semanas": [
    1,
    4
   ],
   "patrones": [
    "End-to-end orchestration",
    "Parallel routes",
    "External actors"
   ],
   "flujo": [
    "Customer order",
    "Merchant acceptance",
    "Courier assignment",
    "Preparation",
    "Pickup",
    "Delivery"
   ],
   "contexto": "<p>An order involves three parties that do not belong to the same organization: the customer, the restaurant and the courier. The platform does not directly control any of the three and even so it answers for the complete result.</p>",
   "analisis": "<p>It is the purest example of a <b>cross-functional process taken to the extreme</b>: it does not cross departments but <b>different companies</b>. Nobody holds hierarchical authority over all the participants, so coordination has to be achieved with <b>data, incentives and rules</b> instead of orders. That is orchestration in its hardest form.</p><p>There is <b>real parallelism</b>: while the restaurant prepares, the platform assigns and moves the courier. Ideally both finish at the same time. The time of the segment is <b>max(preparation, courier arrival)</b>, not the sum — and the art of the algorithm lies in synchronizing them. If the courier arrives too early they wait and their time is wasted; if they arrive late, the food gets cold.</p><p>The <b>estimated time</b> is the promise that defines the experience, and it is computed with prediction, not with a fixed average: it depends on the merchant, the hour, the weather, the traffic and courier availability. It is a legitimate case of a <b>predictive model inside an operational process</b> — with the usual requirement: without reliable historical data no model is any use.</p><p>The <b>exceptions</b> are where the process is really defined: product sold out, a merchant that does not accept, a courier that cancels, a wrong address. A mature design is distinguished by how it handles these routes, not by how well it executes the happy path.</p>",
   "cifras": {
    "titulo": "Illustrative times for one order",
    "encabezados": [
     "Segment",
     "Time",
     "Type",
     "Note"
    ],
    "filas": [
     [
      "Merchant acceptance",
      "2 min",
      "Sequential",
      "If it is not accepted, it is reassigned"
     ],
     [
      "Order preparation",
      "18 min",
      "<b>Parallel</b>",
      "Merchant branch"
     ],
     [
      "Courier assignment and arrival",
      "14 min",
      "<b>Parallel</b>",
      "Logistics branch"
     ],
     [
      "Pickup",
      "4 min",
      "Sequential",
      ""
     ],
     [
      "Transport and delivery",
      "13 min",
      "Sequential",
      ""
     ],
     [
      "<b>Cycle time</b>",
      "<b>37 min</b>",
      "—",
      "<b>2 + max(18,14) + 4 + 13</b>"
     ]
    ]
   },
   "indicadores": [
    "Compliance with the estimated time promised to the customer.",
    "Courier wait time at the merchant (pure waste).",
    "Cancellation rate by actor: customer, merchant, courier.",
    "Orders with an incident and their type.",
    "Prediction error of the estimated time."
   ],
   "preguntas": [
    "Calculate the cycle time with the table. Why is the maximum used in the parallel segment?",
    "If the courier arrives in 8 minutes instead of 14, does the total time improve? What is wasted?",
    "The platform has no authority over merchants or couriers. With what mechanisms does it coordinate them?",
    "Choose an exception and design its full route, with times and responsible parties."
   ],
   "conecta": "Week 1 · end-to-end and cross-functional process. Week 3 · parallel routes. Week 4 · orchestration and emerging technologies."
  },
  {
   "id": "uber",
   "titulo": "Uber",
   "subtitulo": "Location, assignment and prediction inside the process",
   "categoria": "orquestacion",
   "semanas": [
    3,
    4
   ],
   "patrones": [
    "Real-time assignment",
    "Data as an enabler",
    "Demand control"
   ],
   "flujo": [
    "Rider request",
    "Driver assignment",
    "Arrival",
    "Trip",
    "Payment",
    "Rating"
   ],
   "contexto": "<p>The rider opens the app and sees nearby drivers, an estimated arrival time and a fare. Behind it lies an assignment decision that is made in seconds and that determines the efficiency of the whole system.</p>",
   "analisis": "<p>What is interesting here is not the trip but the <b>assignment</b>. It is a routing decision made in real time with location data, and its quality determines two indicators in tension: the rider's wait time and the driver's utilization. <b>Optimizing one degrades the other</b>, and that tension is a business decision, not a technical detail.</p><p>The case shows <b>data architecture as a direct enabler of the business model</b>: without real-time location, without traffic history and without demand prediction, the service does not exist. It is not supporting technology — it is the product. It is the sharpest contrast in the catalog against the cases where technology merely supports a pre-existing process.</p><p><b>Dynamic pricing</b> is a demand control mechanism with the logic of the theory of constraints: when demand exceeds the available capacity of drivers, the price rises, demand falls and supply is given an incentive to rise. It works as a design; it generates rejection as an experience. <b>That tension is worth discussing with students instead of settling it on one side.</b></p><p>A note for the capacity analysis: capacity here <b>is neither fixed nor owned</b>. It depends on how many drivers decide to connect, which in turn depends on the price and the hour. It is a system where the constraint is negotiated, not sized — and that breaks several assumptions of the traditional calculation.</p>",
   "cifras": {
    "titulo": "Illustrative tension between two indicators",
    "encabezados": [
     "Assignment policy",
     "Rider wait",
     "Driver utilization",
     "Empty km"
    ],
    "filas": [
     [
      "Nearest driver",
      "3.2 min",
      "58 %",
      "High"
     ],
     [
      "Global fleet optimization",
      "4.8 min",
      "<b>74 %</b>",
      "Low"
     ],
     [
      "Balanced",
      "<b>3.9 min</b>",
      "68 %",
      "Medium"
     ],
     [
      "<b>Trade-off</b>",
      "<b>↑ wait</b>",
      "<b>↑ utilization</b>",
      "—"
     ]
    ]
   },
   "indicadores": [
    "Rider wait time and its compliance against the estimate.",
    "Driver utilization: share of connected time spent carrying a passenger.",
    "Kilometers driven empty.",
    "Cancellation rate by rider and by driver.",
    "Prediction error of the arrival time."
   ],
   "preguntas": [
    "Why does improving the wait time worsen driver utilization? Explain the mechanism.",
    "Dynamic pricing is demand control. Compare it with the Salud Digna appointment: what do the two achieve alike and what differently?",
    "Capacity depends on how many drivers connect. Which assumptions of the capacity calculation you learned in the course break down?",
    "What data architecture requirements make this service possible? What would happen if the location data had a 30 s delay?"
   ],
   "conecta": "Week 3 · capacity and utilization. Week 4 · emerging technologies, AI and data architecture as an enabler."
  },
  {
   "id": "tec-services",
   "titulo": "Institutional service desk",
   "subtitulo": "Incidents, escalation by elapsed time and SLA",
   "categoria": "servicios",
   "semanas": [
    4,
    5
   ],
   "patrones": [
    "Incident management",
    "Escalation",
    "WIP and Little's Law"
   ],
   "flujo": [
    "User report",
    "Logging and classification",
    "First-level support",
    "Escalation if applicable",
    "Resolution",
    "Closure"
   ],
   "contexto": "<p>A service desk receives reports through several channels, classifies them by priority and escalates them automatically to second level when they have been open too long without being resolved. The service agreement promises response and resolution times by priority.</p>",
   "analisis": "<p>This is ITIL in its pure state, and it serves to fix two distinctions that students confuse. First: <b>incident versus problem</b>. The incident interrupts the service and is resolved by restoring it; the problem is the root cause of recurring incidents. A desk that only closes incidents fast and never opens problems is condemned to handle the same matter forever.</p><p>Second: <b>escalation by elapsed time</b> is a control mechanism, not a defeat. Its function is to keep a ticket from aging in silence. But badly calibrated it produces the opposite effect: if the threshold is too short, second level fills up with cases that first level would have resolved, and the bottleneck moves upward.</p><p>Here <b>Little's Law</b> is directly applicable and is the best diagnostic tool: with throughput capped by the team's capacity, lead time is determined by WIP. If there are 168 open tickets and 24 are closed per hour, the average is 7 hours — no matter what the SLA promises. Meeting 4 hours demands a maximum WIP of 96 tickets, and that is achieved by <b>controlling what comes in</b>, not by rushing the technicians.</p><p><b>Self-service and the knowledge base</b> are the structural lever: they divert tickets before they enter the process. It is the same logic as the VivaAerobus online check-in — taking work out of the critical process.</p>",
   "cifras": {
    "titulo": "Illustrative service desk scenario",
    "encabezados": [
     "Concept",
     "Value",
     "Calculation"
    ],
    "filas": [
     [
      "Open tickets (WIP)",
      "168",
      "—"
     ],
     [
      "Closures per hour (throughput)",
      "24",
      "—"
     ],
     [
      "<b>Actual lead time</b>",
      "<b>7.0 h</b>",
      "168 / 24"
     ],
     [
      "Promised SLA",
      "4.0 h",
      "—"
     ],
     [
      "<b>Maximum WIP to comply</b>",
      "<b>96</b>",
      "24 × 4"
     ],
     [
      "Reduction needed",
      "72 tickets",
      "168 − 96"
     ]
    ]
   },
   "indicadores": [
    "SLA compliance by priority, not in aggregate.",
    "WIP of open tickets and its weekly trend.",
    "First-contact resolution rate.",
    "Percentage of escalations and how many are resolved without any second-level action.",
    "Recurring incidents turned into formal problems."
   ],
   "preguntas": [
    "With 168 tickets and 24 closures per hour, can a 4 h SLA be met? Prove it with Little's Law.",
    "The escalation threshold drops from 4 h to 2 h. What happens to second level and where does the bottleneck end up?",
    "Identify three incidents that are really one problem. How would you detect it with data?",
    "Propose two ways to lower the WIP without hiring staff and estimate their effect."
   ],
   "conecta": "Week 3 · Little's Law, WIP and bottleneck. Week 4 · ITIL, ITSM, incidents versus problems and SLA."
  },
  {
   "id": "carnes-puerco",
   "titulo": "Meat processing plant",
   "subtitulo": "When a printer stops the production line",
   "categoria": "servicios",
   "semanas": [
    4,
    5
   ],
   "patrones": [
    "Operational continuity",
    "Critical dependency",
    "Impact analysis"
   ],
   "flujo": [
    "Receiving",
    "Processing",
    "Weighing",
    "Labeling",
    "Packing",
    "Shipping"
   ],
   "contexto": "<p>The plant weighs and labels every piece. If the connected scale or the label printer fails, the product cannot be identified or shipped. It is perishable product: you cannot simply stop and wait.</p>",
   "analisis": "<p>This case dismantles the idea that the criticality of an IT asset is measured by its cost. <b>A low-priced label printer can be the most critical asset in the plant</b>, because its failure stops a process where the product degrades over time. Criticality is defined by the <b>impact on the business process</b>, not by the value of the equipment.</p><p>It is the best illustration of why the course insists that infrastructure is a <b>design constraint</b> and not an implementation detail. Here the scale and the printer are literally the bottleneck of the whole process when they fail.</p><p>The governance consequence is concrete: the <b>business impact analysis</b> must run from the process toward the asset and not the other way around. An asset inventory ordered by cost would put the ERP at the top and the printer at the bottom; an analysis by impact puts them side by side. This is where <b>BAI09 (assets), BAI10 (configuration) and BAI04 (availability)</b> of COBIT connect.</p><p>The continuity parameters stop being abstract: the <b>RTO</b> is not defined by IT but by the biology of the product. If the meat tolerates 90 minutes out of refrigeration, the RTO is under 90 minutes, and that determines whether you need a backup printer already powered on or a service contract is enough.</p>",
   "cifras": {
    "titulo": "Illustrative impact analysis",
    "encabezados": [
     "Asset",
     "Cost",
     "Impact if it fails",
     "Required RTO"
    ],
    "filas": [
     [
      "Corporate ERP",
      "Very high",
      "Invoicing is delayed",
      "8 h"
     ],
     [
      "<b>Connected scale</b>",
      "<b>Low</b>",
      "<b>Line stopped</b>",
      "<b>30 min</b>"
     ],
     [
      "<b>Label printer</b>",
      "<b>Very low</b>",
      "<b>Product cannot be shipped</b>",
      "<b>45 min</b>"
     ],
     [
      "Corporate email",
      "Medium",
      "Slow communication",
      "24 h"
     ],
     [
      "Spoilage loss from 2 h of downtime",
      "—",
      "<b>$180,000</b>",
      "—"
     ]
    ]
   },
   "indicadores": [
    "Line downtime attributable to IT failures.",
    "Spoilage loss from product not shipped on time.",
    "MTTR of the critical assets on the production floor.",
    "Availability of spare parts and backup equipment.",
    "Recurring incidents in plant equipment."
   ],
   "preguntas": [
    "Why can a cheap printer be more critical than the ERP? Define criticality correctly.",
    "With $180,000 of spoilage loss from 2 h of downtime, is a $40,000 backup printer justified? Calculate it.",
    "Who should define the RTO of the scale: IT or production? Make your argument.",
    "Which COBIT objectives govern this risk, and what evidence would an auditor ask for?"
   ],
   "conecta": "Week 4 · ITSM, assets, configuration, RTO/RPO and COBIT BAI. Week 5 · economic feasibility and impact analysis."
  },
  {
   "id": "crowdstrike",
   "titulo": "CrowdStrike and Windows · July 2024",
   "subtitulo": "One update, 8.5 million machines and the world at a standstill",
   "categoria": "servicios",
   "semanas": [
    4,
    5
   ],
   "patrones": [
    "Change management",
    "Blast radius",
    "Continuity",
    "Vendor dependency"
   ],
   "flujo": [
    "Content development",
    "Automated validation",
    "Global release",
    "Boot failure",
    "Rollback",
    "Manual remediation"
   ],
   "contexto": "<p>On July 19, 2024, at 04:09 UTC, CrowdStrike published a content update for its Falcon sensor. The faulty file caused blue screens on approximately <b>8.5 million Windows machines</b> worldwide. More than a thousand flights were cancelled and banks, exchanges, hospitals, transport and retailers were disrupted. The update was rolled back at 05:27 UTC, but the machines that were already down required manual intervention.</p>",
   "analisis": "<p>It is the most important enterprise architecture case of recent years, and it deserves serious treatment because almost every concept in the course shows up at once.</p><p><b>Change management.</b> The update was distributed globally and simultaneously, without a staged rollout. In any governance framework —COBIT BAI06 and BAI07, ITIL— a change is released in rings: first a small group, you observe it, and only then you widen it. A <i>canary</i> of a thousand machines would have contained the damage to a thousand machines.</p><p><b>The blast radius as a design decision.</b> The sensor ran in ring 0, with kernel privileges: a failure there does not degrade the application, it brings down the entire operating system. Choosing where a component runs is a technology architecture decision whose consequences show up precisely when something goes wrong.</p><p><b>Validation failed at several levels.</b> The later analysis identified validation by regular expressions instead of a proper parser, no length check on the array —21 fields were expected and the file carried 20—, testing limited to the happy path with no regression tests, and the absence of a verifiable version number. It is a catalog of what the course calls <i>testing and adaptation</i> done badly.</p><p><b>Asymmetric recovery.</b> Rolling back at the vendor took 78 minutes; recovering each machine required booting into safe mode and deleting a file by hand, machine by machine, and wherever there was BitLocker, 48-digit keys had to be entered. <b>The vendor's rollback speed is not the customer's recovery speed.</b> Any continuity plan that confuses the two is badly made.</p><p><b>Vendor concentration.</b> Thousands of organizations discovered on the same day that they shared a critical dependency that never appeared on their risk maps, because it was not a system of their own but a security agent installed on all their machines.</p>",
   "cifras": {
    "titulo": "Incident data (these ones really are real and public)",
    "encabezados": [
     "Concept",
     "Data"
    ],
    "filas": [
     [
      "Date and time",
      "July 19, 2024, 04:09 UTC"
     ],
     [
      "Windows machines affected",
      "≈ 8.5 million (less than 1 % of the global total)"
     ],
     [
      "Time until the rollback",
      "78 minutes (05:27 UTC)"
     ],
     [
      "Cancelled flights",
      "More than a thousand"
     ],
     [
      "Technical cause",
      "Channel file 291 with 20 fields where 21 were expected"
     ],
     [
      "Remediation",
      "Boot into safe mode and delete the file manually"
     ]
    ]
   },
   "indicadores": [
    "Percentage of changes released with a staged rollout.",
    "Maximum blast radius of a change: how many systems it can bring down.",
    "Actual RTO measured in a drill, not the documented RTO.",
    "Concentration of critical vendors and the existence of alternatives.",
    "Regression test coverage over the exception routes."
   ],
   "preguntas": [
    "Which COBIT and ITIL controls would have contained this incident? Be specific about the objectives.",
    "Explain why running in ring 0 amplifies the blast radius and what architectural alternatives there were.",
    "The rollback took 78 minutes but recovery took days. What does that imply for the RTO of a client organization?",
    "Your company has the same agent on every machine. Design the control that keeps this from happening again and estimate its cost."
   ],
   "conecta": "Week 4 · COBIT BAI06 and BAI07, ITIL, RTO/RPO, vendor dependency. Week 5 · testing and adaptation, go-live, disruption scenarios."
  },
  {
   "id": "farmacia-guadalajara",
   "titulo": "Farmacias Guadalajara",
   "subtitulo": "The point of sale as a node of several processes at once",
   "categoria": "datos",
   "semanas": [
    1,
    2
   ],
   "patrones": [
    "Point of sale",
    "Integration",
    "Business rules"
   ],
   "flujo": [
    "Product identification",
    "Rule validation",
    "Payment",
    "Inventory update",
    "Receipt"
   ],
   "contexto": "<p>A sale that lasts ninety seconds triggers several things at once: it deducts inventory, applies promotions, validates whether the medication requires a prescription, accrues loyalty points, issues a tax receipt and feeds the branch's replenishment.</p>",
   "analisis": "<p>The point of sale looks like a simple activity and is in fact <b>the point where five different processes converge</b>. It is the best example in the catalog for explaining the four domains on a single two-minute scene.</p><p><b>Business:</b> the promotion rules, the controlled-medication policy and the loyalty program. <b>Data:</b> the product catalog, the inventory, the customer, the price history. <b>Applications:</b> the POS, the ERP, the loyalty system, the tax receipt issuer, the replenishment engine. <b>Technology:</b> the terminal, the branch network and the connectivity with headquarters.</p><p>The most demanding architectural requirement is <b>degraded operation</b>. If the link goes down, the pharmacy cannot stop selling. That forces the POS to work locally and synchronize afterwards, which introduces the hard problem: <b>reconciling</b>. Two branches that sell the last item of the centralized inventory while they are disconnected generate an inconsistency that somebody has to resolve.</p><p><b>Prescription medications</b> add a route with mandatory validation. It is a regulatory control — NNVA — that is not eliminated, but it can be optimized: validating against a digital register instead of checking paper.</p>",
   "cifras": {
    "titulo": "Illustrative breakdown of one sale",
    "encabezados": [
     "System",
     "What it does",
     "Can it work without the network?",
     "Risk if it fails"
    ],
    "filas": [
     [
      "Local POS",
      "Records and charges",
      "<b>Yes</b>",
      "The branch does not sell"
     ],
     [
      "Central ERP",
      "Inventory and prices",
      "No",
      "Outdated prices"
     ],
     [
      "Loyalty",
      "Accrues points",
      "No",
      "Points not credited"
     ],
     [
      "Electronic invoicing",
      "Tax receipt",
      "No",
      "Deferred receipt"
     ],
     [
      "Replenishment",
      "Suggests an order",
      "No",
      "Stockout"
     ]
    ]
   },
   "indicadores": [
    "Checkout transaction time and its variability.",
    "Inventory accuracy: system against physical count.",
    "Sales made in degraded mode and later reconciliation errors.",
    "Link availability by branch.",
    "Stockouts of high-turnover products."
   ],
   "preguntas": [
    "Map this sale to the four architecture domains, with at least two elements in each one.",
    "Why must the POS work without the network, and what new problem does that decision introduce?",
    "Two disconnected branches sell the same last product. How do you design the reconciliation?",
    "Classify the prescription validation as VA, NNVA or NVA and propose how to optimize it."
   ],
   "conecta": "Week 1 · the four domains on a concrete case. Week 2 · process-application matrix and integration. Week 4 · infrastructure and degraded operation."
  },
  {
   "id": "carniceria-ramos",
   "titulo": "Carnicería Ramos",
   "subtitulo": "The same architecture, at small-business scale",
   "categoria": "datos",
   "semanas": [
    1,
    2,
    5
   ],
   "patrones": [
    "Point of sale",
    "Inventory by weight",
    "Limited resources"
   ],
   "flujo": [
    "Purchase from supplier",
    "Receiving and weighing",
    "Sale to the customer",
    "Payment collection",
    "Inventory recording",
    "Cash-up"
   ],
   "contexto": "<p>A family business sells product by weight, with variable pricing, daily shrinkage and payments in cash, by card and by transfer. Inventory is kept by hand or in a spreadsheet, and the cash-up rarely balances on the first try.</p>",
   "analisis": "<p>This case earns its place by contrast: <b>the same architecture problems, with no budget and no IT department</b>. It teaches that enterprise architecture is not a corporate luxury but a way of thinking that scales downward.</p><p>The technical difficulty is real and specific: <b>inventory by weight with shrinkage</b>. What you sell is not units but kilos that change through boning, evaporation and trimming. A piece-based inventory does not model this, and that is why the spreadsheets never balance. <b>The problem is one of data model, not of the owner's discipline</b> — a nuance students usually miss, and one that completely changes the solution you propose.</p><p>The <b>mixed payment methods</b> fragment reconciliation: cash in the drawer, card with deferred deposit and a fee, transfers on the owner's phone. Three flows that arrive at different moments and that you have to match against a single sale. It is the same reconciliation problem as adidas.com, with fewer tools.</p><p>The <b>feasibility</b> discussion is the most honest in the catalog: a point-of-sale system with an integrated scale solves almost everything, but the analysis has to weigh <b>operational</b> feasibility —who is going to use it, and with what training?— as much as the economic one. Many implementations in small businesses fail there, not on price.</p>",
   "cifras": {
    "titulo": "Illustrative monthly scenario",
    "encabezados": [
     "Concept",
     "Value",
     "Note"
    ],
    "filas": [
     [
      "Monthly sales",
      "$420,000",
      "—"
     ],
     [
      "Average cash-up difference",
      "$3,800",
      "0.9 % of sales"
     ],
     [
      "Estimated unrecorded shrinkage",
      "$11,000",
      "2.6 % of sales"
     ],
     [
      "Monthly hours in manual reconciliation",
      "18 h",
      "The owner's time"
     ],
     [
      "Cost of a POS with an integrated scale",
      "<b>$45,000</b>",
      "One-time investment"
     ],
     [
      "Estimated saving if it is cut in half",
      "<b>$7,400/month</b>",
      "Pays back in ≈ 6 months"
     ]
    ]
   },
   "indicadores": [
    "Cash-up difference as a percentage of sales.",
    "Recorded shrinkage against estimated shrinkage.",
    "Owner's time spent on reconciliation.",
    "Inventory accuracy by product.",
    "Stockouts of fast-moving products."
   ],
   "preguntas": [
    "Why is inventory by weight not modeled the same way as inventory by pieces? What does that imply for the data design?",
    "Using the figures in the table, compute the payback period of the investment and its ROI over 12 months.",
    "Assess the operational feasibility of implementing the system. What could make it fail even if the ROI is good?",
    "Apply the four architecture domains to this business. Does anything change compared with a large chain?"
   ],
   "conecta": "Week 1 · the four domains at small scale. Week 2 · fragmentation and reconciliation. Week 5 · operational feasibility, ROI and payback."
  },
  {
   "id": "autocobro",
   "titulo": "Soriana, HEB, Walmart · self-checkout",
   "subtitulo": "Shifting the work to the customer: does the process improve?",
   "categoria": "datos",
   "semanas": [
    1,
    3,
    5
   ],
   "patrones": [
    "Shifting work to the customer",
    "Multiple routes",
    "Exception-based control"
   ],
   "flujo": [
    "Checkout selection",
    "Scanning by the customer",
    "Exception check",
    "Payment",
    "Exit"
   ],
   "contexto": "<p>The supermarket installs self-checkout lanes. One supervisor covers several stations and steps in only when something stops: a product with no barcode, an age-restricted item, or a weight difference on the control scale.</p>",
   "analisis": "<p>The question you have to put to students is uncomfortable, and that is exactly what makes it good: <b>does this improve the process or does it just shift its cost to the customer?</b> The honest answer is that it depends on what you measure and for whom.</p><p>From the <b>capacity</b> side, one supervisor covering six stations multiplies the checkout points without multiplying the staff. From the <b>cycle time</b> side, the average customer scans more slowly than a trained cashier: the individual transaction <i>takes longer</i>. The system gains capacity and the individual loses speed — two indicators moving in opposite directions, which is why you have to declare which one you are optimizing.</p><p>The design depends on <b>exception-based control</b>: the scale that compares expected weight against actual weight, the age check, the product with no barcode. Every exception calls the supervisor, and if the exception rate rises, <b>the supervisor becomes the bottleneck</b> and the whole advantage evaporates. That threshold is the heart of the design, and you can calculate it.</p><p><b>Segmentation</b> is what makes it work: self-checkout is for small baskets. A purchase of 60 items with bulk products is a poor candidate. It is triage applied to the checkout front end, and that is why stores label the lanes by number of items.</p>",
   "cifras": {
    "titulo": "Illustrative comparison of configurations",
    "encabezados": [
     "Configuration",
     "Staff",
     "Checkout points",
     "Time per customer",
     "Capacity/hour"
    ],
    "filas": [
     [
      "6 traditional lanes",
      "6",
      "6",
      "3.2 min",
      "112 customers"
     ],
     [
      "<b>6 self-checkouts + 1 supervisor</b>",
      "<b>1</b>",
      "<b>6</b>",
      "<b>4.6 min</b>",
      "<b>78 customers</b>"
     ],
     [
      "3 traditional + 6 self-checkouts",
      "4",
      "9",
      "Mixed",
      "134 customers"
     ],
     [
      "<b>If exceptions rise to 35 %</b>",
      "1",
      "6",
      "6.8 min",
      "<b>53 customers</b>"
     ]
    ]
   },
   "indicadores": [
    "Supervisor intervention rate per transaction.",
    "Time per customer at self-checkout against a traditional lane.",
    "Total capacity of the checkout front end by configuration.",
    "Shrinkage and unknown loss attributable to self-checkout.",
    "Satisfaction by customer segment: small basket against large basket."
   ],
   "preguntas": [
    "Time per customer goes up and so does the capacity of the system. How is that possible? Which indicator should govern?",
    "At what exception rate does the supervisor become the bottleneck? Set up the calculation.",
    "Is this automation, digitization or digital transformation? Defend your classification.",
    "Design the segmentation rule: which purchases do you send to self-checkout and which not?"
   ],
   "conecta": "Week 1 · automation and shifting work. Week 3 · capacity, bottleneck and routes. Week 5 · triage and VA/NNVA/NVA."
  },
  {
   "id": "hospital-zambrano",
   "titulo": "Hospital · medical record",
   "subtitulo": "Patient data as the backbone of the process",
   "categoria": "datos",
   "semanas": [
    1,
    2,
    4
   ],
   "patrones": [
    "Master data",
    "Integration",
    "Regulatory compliance"
   ],
   "flujo": [
    "Admission",
    "Triage",
    "Consultation or emergency",
    "Tests and laboratory",
    "Treatment",
    "Discharge",
    "Billing"
   ],
   "contexto": "<p>A patient goes through admission, consultation, laboratory, imaging, pharmacy and billing. Each area records information and needs what the others generated. The medical record is the thread that connects everything, and its quality determines the quality of the whole process.</p>",
   "analisis": "<p>Here the <b>master data is not an administrative artifact: it is clinical</b>. An incomplete or duplicated record does not create an operational annoyance — it creates a risk for the patient. An allergy recorded in a system that pharmacy cannot reach is the example that makes tangible why data architecture matters.</p><p>The classic problem is <b>duplicated identity</b>: the same patient registered twice because of a variation in the name or a mistyped field. Their history is fragmented, tests already done are repeated, and decisions are made on partial information. It is the course's <i>active customer</i> case, with far more serious consequences.</p><p>The process is intensely <b>cross-functional</b> and has very different routes: emergency, scheduled consultation, surgery, inpatient stay. Each one touches the same systems in a different order. Modeling only the happy path of the scheduled consultation leaves out what really consumes capacity.</p><p><b>Regulatory compliance</b> is a first-order design constraint: the NOM for the medical record and the protection of personal data define what is recorded, how long it is kept and who may consult it. Here <b>ISO/IEC 27001 and access controls are not optional</b>, and the design of the application architecture has to start from them, not accommodate them at the end.</p>",
   "cifras": {
    "titulo": "Illustrative scenario of record quality",
    "encabezados": [
     "Indicator",
     "Current state",
     "Target",
     "Impact"
    ],
    "filas": [
     [
      "Duplicate records",
      "3.4 %",
      "&lt; 0.5 %",
      "Fragmented history"
     ],
     [
      "Tests repeated for lack of access",
      "6 %",
      "&lt; 1 %",
      "Cost and inconvenience"
     ],
     [
      "Admission time",
      "14 min",
      "6 min",
      "Data re-entry"
     ],
     [
      "Incomplete medical notes at discharge",
      "18 %",
      "&lt; 5 %",
      "Clinical risk and billing"
     ],
     [
      "Lead time from admission to discharge (consultation)",
      "2.8 h",
      "1.9 h",
      "Capacity freed up"
     ]
    ]
   },
   "indicadores": [
    "Rate of duplicate records and of merges performed.",
    "Tests repeated because the information was not available.",
    "Admission time and how many times the same data is re-entered.",
    "Completeness of the medical note at the moment of discharge.",
    "Accesses to the record outside the authorized profile."
   ],
   "preguntas": [
    "Why is a duplicated record a clinical problem and not just an administrative one?",
    "Design the rule for a single patient identity. What data makes it up and who owns that data?",
    "Model the emergency route and the scheduled consultation route. Where are they alike and where are they not?",
    "What do ISO/IEC 27001 and personal data regulation demand of the application architecture design here?"
   ],
   "conecta": "Week 1 · data domain and cross-functional process. Week 2 · integration and a single master data record. Week 4 · standards, security and access control."
  }
 ],
 "practica": {
  "calculos": [
   {
    "tema": "Starbucks · capacity",
    "titulo": "Where is the bottleneck, and how much do you gain by elevating it?",
    "enunciado": "At peak hour: the <b>cashier</b> takes 45 s per order and there are 2; the <b>barista</b> takes 110 s and there are 2; the <b>handoff at the bar</b> takes 15 s and there is 1. Compute the hourly capacity of each resource.",
    "preguntas": [
     {
      "etiqueta": "Cashier capacity",
      "respuesta": 160,
      "unidad": "orders/h",
      "tolerancia": 1,
      "pista": "(units / time per order) × 3600"
     },
     {
      "etiqueta": "Barista capacity",
      "respuesta": 65.45,
      "unidad": "orders/h",
      "tolerancia": 0.6
     },
     {
      "etiqueta": "Handoff capacity",
      "respuesta": 240,
      "unidad": "orders/h",
      "tolerancia": 1
     },
     {
      "etiqueta": "Process capacity",
      "respuesta": 65.45,
      "unidad": "orders/h",
      "tolerancia": 0.6
     },
     {
      "etiqueta": "Capacity if you hire a third barista",
      "respuesta": 98.18,
      "unidad": "orders/h",
      "tolerancia": 0.6
     }
    ],
    "solucion": "<div class=\"paso-calc\">Cashier : (2 / 45)  × 3600 = <span class=\"resaltado\">160.0 orders/h</span>\nBarista : (2 / 110) × 3600 = <span class=\"resaltado\">65.5 orders/h</span>  ← minimum\nHandoff : (1 / 15)  × 3600 = <span class=\"resaltado\">240.0 orders/h</span>\n\nProcess capacity = min(160, 65.5, 240) = <span class=\"resaltado\">65.5 orders/h</span>\n\nWith 3 baristas: (3 / 110) × 3600 = <span class=\"resaltado\">98.2 orders/h</span></div><p><b>What you have to see.</b> Hiring one more cashier does not move a single order: the cashier already delivers 160 against the barista's 65. The whole investment has to go to the constraint.</p><p>And note that when you raise the barista to 98 orders/h <b>the bottleneck is still the barista</b> — still below 160 and 240. With a fourth barista it would reach 131 and it would still be governing. This is the exception to the rule that the bottleneck moves: when the gap is very wide, it takes more than one step to shift it.</p>"
   },
   {
    "tema": "Ford · takt and rebalancing",
    "titulo": "Does the line meet demand?",
    "enunciado": "The line has 6 stations with times of 52, 61, 58, <b>68</b>, 47 and 39 seconds. The shift is <b>8 hours</b> net and demand is <b>480 units</b> a day.",
    "preguntas": [
     {
      "etiqueta": "Required takt time",
      "respuesta": 60,
      "unidad": "s/unit",
      "tolerancia": 0.5,
      "pista": "Net available time / demand"
     },
     {
      "etiqueta": "Cycle time of the line",
      "respuesta": 68,
      "unidad": "s/unit",
      "tolerancia": 0.5
     },
     {
      "etiqueta": "Current capacity of the shift",
      "respuesta": 423.5,
      "unidad": "units",
      "tolerancia": 2
     },
     {
      "etiqueta": "Capacity if you move 8 s from station 4 to station 6",
      "respuesta": 472.1,
      "unidad": "units",
      "tolerancia": 3,
      "pista": "Which station is left as the slowest after the move?"
     }
    ],
    "solucion": "<div class=\"paso-calc\">Takt = (8 × 3600) / 480 = 28,800 / 480 = <span class=\"resaltado\">60 s/unit</span>\nCycle time of the line = the slowest station = <span class=\"resaltado\">68 s</span>\n\n68 &gt; 60  →  the line does NOT meet demand\n\nCapacity = 28,800 / 68 = <span class=\"resaltado\">423.5 units</span>   (57 short)\n\nRebalancing: station 4 goes from 68 to 60 s, station 6 from 39 to 47 s\n  New times: 52, 61, 58, 60, 47, 47\n  New slowest station = <span class=\"resaltado\">61 s (station 2)</span>\n  Capacity = 28,800 / 61 = <span class=\"resaltado\">472.1 units</span></div><p><b>The bottleneck moving, live.</b> When you fix station 4 the constraint moves to station 2, which was invisible before. And with 472 units <b>you still do not reach 480</b>: another iteration is needed. That is the fifth step of the theory of constraints, and it is why rebalancing is done in cycles and not in one go.</p>"
   },
   {
    "tema": "McDonald's · Little's Law",
    "titulo": "How many orders have to be in process at the same time?",
    "enunciado": "The cycle time of an order is <b>190 seconds</b> from start to finish. At peak hour demand is <b>120 orders per hour</b>.",
    "preguntas": [
     {
      "etiqueta": "Takt time",
      "respuesta": 30,
      "unidad": "s/order",
      "tolerancia": 0.5
     },
     {
      "etiqueta": "Simultaneous orders in process (WIP)",
      "respuesta": 6.33,
      "unidad": "orders",
      "tolerancia": 0.15,
      "pista": "WIP = Throughput × Lead time, with consistent units"
     }
    ],
    "solucion": "<div class=\"paso-calc\">Takt = 3600 / 120 = <span class=\"resaltado\">30 s per order</span>\n\nThroughput = 120 / 3600 = 0.0333 orders per second\nWIP = Throughput × Lead time = 0.0333 × 190 = <span class=\"resaltado\">6.33 orders</span></div><p><b>How to read it.</b> An order takes 190 s, but one comes out every 30 s: the only way both things can be true is that there are <b>between 6 and 7 orders moving at the same time</b> at different stages. That is what sizes the kitchen: how many stations, how much assembly space, how many trays in preparation.</p><p>It is the most common mistake when comparing cycle time against takt: they look incompatible (190 &gt; 30) and they are not, because the process runs in parallel. Little's Law is what reconciles the two numbers.</p>"
   },
   {
    "tema": "Service desk · Little's Law",
    "titulo": "Can the SLA be met with this WIP?",
    "enunciado": "The desk closes <b>24 tickets per hour</b> and has <b>168 open tickets</b>. The SLA promises resolution in <b>4 hours</b> and the team's capacity will not change.",
    "preguntas": [
     {
      "etiqueta": "Current lead time",
      "respuesta": 7,
      "unidad": "h",
      "tolerancia": 0.05
     },
     {
      "etiqueta": "Maximum WIP to meet the SLA",
      "respuesta": 96,
      "unidad": "tickets",
      "tolerancia": 0.5
     },
     {
      "etiqueta": "Required WIP reduction",
      "respuesta": 72,
      "unidad": "tickets",
      "tolerancia": 0.5
     }
    ],
    "solucion": "<div class=\"paso-calc\">Lead time = WIP / Throughput = 168 / 24 = <span class=\"resaltado\">7 hours</span>   (SLA: 4 h)\n\nTarget WIP = Throughput × SLA = 24 × 4 = <span class=\"resaltado\">96 tickets</span>\nReduction = 168 − 96 = <span class=\"resaltado\">72 tickets</span></div><p>With current capacity the SLA is met by <b>controlling the intake</b>, not by rushing the technicians: filter at first contact, close zombie tickets, divert to self-service, set an explicit WIP limit. All of that is free compared with hiring.</p>"
   },
   {
    "tema": "OXXO Gas · rework",
    "titulo": "The cost of the rework the customer pays for",
    "enunciado": "Entering the invoice in the portal takes <b>8 minutes</b> and <b>25 %</b> of the attempts fail and have to be repeated. The station issues <b>1,400 invoices a month</b>.",
    "preguntas": [
     {
      "etiqueta": "Expected time with a single repetition",
      "respuesta": 10,
      "unidad": "min",
      "tolerancia": 0.1
     },
     {
      "etiqueta": "Expected time with unlimited repetitions",
      "respuesta": 10.67,
      "unidad": "min",
      "tolerancia": 0.1
     },
     {
      "etiqueta": "Customer hours consumed per month (one repetition)",
      "respuesta": 233.3,
      "unidad": "h",
      "tolerancia": 2
     }
    ],
    "solucion": "<div class=\"paso-calc\">Single repetition    : (1 + 0.25) × 8 = <span class=\"resaltado\">10.0 min</span>\nUnlimited repetitions: 8 / (1 − 0.25) = <span class=\"resaltado\">10.67 min</span>\n\nCustomer hours = 1,400 × 10 / 60 = <span class=\"resaltado\">233 hours a month</span></div><p><b>Why this case is special.</b> Those 233 hours a month do not appear in any company indicator: the customer pays them. An internal efficiency analysis would never detect the problem, and that is why value is analyzed from the customer's perspective and not only from your own cost.</p>"
   },
   {
    "tema": "Self-checkout · capacity",
    "titulo": "From what point on does self-checkout stop paying off?",
    "enunciado": "Six traditional lanes serve one customer every <b>3.2 min</b>. Six self-checkouts with one supervisor serve one every <b>4.6 min</b>. If the exception rate rises, the time per customer reaches <b>6.8 min</b>.",
    "preguntas": [
     {
      "etiqueta": "Capacity of 6 traditional lanes",
      "respuesta": 112.5,
      "unidad": "customers/h",
      "tolerancia": 1
     },
     {
      "etiqueta": "Capacity of 6 self-checkouts",
      "respuesta": 78.3,
      "unidad": "customers/h",
      "tolerancia": 1
     },
     {
      "etiqueta": "Capacity with a high exception rate",
      "respuesta": 52.9,
      "unidad": "customers/h",
      "tolerancia": 1
     },
     {
      "etiqueta": "Staff saved with self-checkout",
      "respuesta": 5,
      "unidad": "people",
      "tolerancia": 0.5
     }
    ],
    "solucion": "<div class=\"paso-calc\">Traditional   : 6 × (60 / 3.2) = <span class=\"resaltado\">112.5 customers/h</span>  with 6 people\nSelf-checkout : 6 × (60 / 4.6) = <span class=\"resaltado\">78.3 customers/h</span>   with 1 person\nHigh exception: 6 × (60 / 6.8) = <span class=\"resaltado\">52.9 customers/h</span>\n\nStaff saved = 6 − 1 = <span class=\"resaltado\">5 people</span></div><p><b>The uncomfortable result:</b> self-checkout delivers <b>less capacity</b> (78 against 112) with far less staff. If the goal is to serve the peak, it does not replace the traditional lanes; if the goal is cost per transaction, it wins clearly.</p><p>And if the exception rate spikes, capacity falls to 53 and the supervisor becomes the bottleneck. That is why segmentation by basket size is not a convenience: <b>it is what keeps the exception rate low</b> and makes the design work.</p>"
   },
   {
    "tema": "Butcher shop · investment appraisal",
    "titulo": "Is the point of sale with a scale worth it?",
    "enunciado": "The business loses <b>$3,800</b> a month in cash differences and <b>$11,000</b> in unrecorded shrinkage. A POS with an integrated scale costs <b>$45,000</b> and is estimated to cut both items in half.",
    "preguntas": [
     {
      "etiqueta": "Current monthly loss",
      "respuesta": 14800,
      "unidad": "$",
      "tolerancia": 100
     },
     {
      "etiqueta": "Estimated monthly saving",
      "respuesta": 7400,
      "unidad": "$",
      "tolerancia": 100
     },
     {
      "etiqueta": "Payback period",
      "respuesta": 6.08,
      "unidad": "months",
      "tolerancia": 0.2
     },
     {
      "etiqueta": "ROI over 12 months",
      "respuesta": 97.33,
      "unidad": "%",
      "tolerancia": 1.5
     }
    ],
    "solucion": "<div class=\"paso-calc\">Current loss = 3,800 + 11,000 = <span class=\"resaltado\">$14,800/month</span>\nEstimated saving = 14,800 / 2 = <span class=\"resaltado\">$7,400/month</span>\n\nPayback = 45,000 / 7,400 = <span class=\"resaltado\">6.1 months</span>\nROI 12 m = (7,400 × 12 − 45,000) / 45,000\n         = (88,800 − 45,000) / 45,000 = <span class=\"resaltado\">97.3 %</span></div><p>The numbers are excellent and even so <b>the project can fail</b>: operational feasibility is what decides. Who enters the products when they are received? Who maintains the price catalog? Does the staff know how to use it?</p><p>The “cut in half” assumption also has to be stated: if it only cuts it by 25 %, the payback stretches to 12 months. That is the sensitivity analysis that turns a calculation into a recommendation."
   },
   {
    "tema": "Costco · profitable rework",
    "titulo": "How far can the returns policy stretch?",
    "enunciado": "Each member makes <b>24 transactions</b> a year with an average ticket of <b>$1,850</b>. The return rate is <b>2.8 %</b> and processing each one costs <b>$140</b>. The annual membership is <b>$900</b>.",
    "preguntas": [
     {
      "etiqueta": "Annual cost of returns per member",
      "respuesta": 94.08,
      "unidad": "$",
      "tolerancia": 2
     },
     {
      "etiqueta": "Margin left from the membership",
      "respuesta": 805.92,
      "unidad": "$",
      "tolerancia": 3
     },
     {
      "etiqueta": "Break-even return rate",
      "respuesta": 26.79,
      "unidad": "%",
      "tolerancia": 1,
      "pista": "At what rate does the cost of returns equal the membership?"
     }
    ],
    "solucion": "<div class=\"paso-calc\">Cost per member = 24 × 0.028 × 140 = <span class=\"resaltado\">$94.08 a year</span>\nRemaining margin = 900 − 94.08 = <span class=\"resaltado\">$805.92</span>\n\nBreak-even rate: 24 × r × 140 = 900\n  r = 900 / 3,360 = <span class=\"resaltado\">26.8 %</span></div><p><b>The counterintuitive lesson.</b> The return rate could multiply almost tenfold —from 2.8 % to 26.8 %— before the membership stopped covering the cost. With that much room, tightening the policy to get below 2.8 % is local optimization that puts the recurring revenue at risk.</p><p>It is the best reminder in the course that <b>eliminating waste is not an end in itself</b>: you have to evaluate the effect on the whole business, not the efficiency of an isolated process.</p>"
   }
  ],
  "escenarios": [
   {
    "escenario": "The counter of a coffee shop serves one order every 45 seconds with two cashiers; the barista takes 110 seconds and there are also two. Management proposes hiring a third cashier to shorten the queue.",
    "pregunta": "What does the theory of constraints predict?",
    "opciones": [
     "The capacity of the process does not change: it only means more people waiting at the bar",
     "Capacity rises in proportion to the number of cashiers",
     "The cycle time per order drops to a third",
     "The bottleneck moves to the handoff at the bar"
    ],
    "correcta": 0,
    "explicacion": "The cashier delivers 160 orders/h and the barista 65. Investing in a resource that is not the constraint adds no throughput; it only piles up inventory —customers— in front of the bottleneck.",
    "porQueNo": {
     "1": "The capacity of the system is the capacity of its constraint, not the sum of its resources.",
     "2": "More cashiers do not speed up making the drink.",
     "3": "The handoff delivers 240/h; it is nowhere near being the constraint."
    }
   },
   {
    "escenario": "A bank switches from one queue per window to a single queue that feeds them all. It is the same four tellers and the same demand, but the average wait drops 35 % and the worst case drops 46 %.",
    "pregunta": "Where does the improvement come from?",
    "opciones": [
     "A shared pool absorbs variability better: no customer is trapped behind a long transaction while another window frees up",
     "Capacity went up because the tellers work faster in a single-queue system",
     "The processing time of each transaction was reduced",
     "It is only perception: the real time is identical"
    ],
    "correcta": 0,
    "explicacion": "This is queuing theory. The pool capacity calculation assumes that any unit of the resource can handle any job; independent queues break that assumption and deliver less.",
    "porQueNo": {
     "1": "Capacity did not change: they are the same tellers with the same times.",
     "2": "The service time per transaction is the same.",
     "3": "Perception improves too, but the measured reduction of the 95th percentile is real."
    }
   },
   {
    "escenario": "A cake has to cool for 40 minutes before it can be decorated. The consultant proposes eliminating that wait because it “adds no value”.",
    "pregunta": "How do you assess the proposal?",
    "opciones": [
     "It is NNVA, not NVA: it is a physical constraint of the product. You do not eliminate it, you optimize it with technology or hide it by sequencing another order",
     "He is right: every wait is waste and has to be eliminated",
     "It is NVA and you eliminate it by decorating the cake hot",
     "It is VA because the customer pays for a well-decorated cake"
    ],
    "correcta": 0,
    "explicacion": "Confusing a physical constraint with an organizational inefficiency leads you to propose impossible improvements. A blast chiller shortens the cooling; eliminating it destroys the product.",
    "porQueNo": {
     "1": "The dogma that “every wait is waste” is a bad reading of Lean.",
     "2": "Decorating it hot melts the icing: it is not an option.",
     "3": "Cooling does not transform the product in a way the customer would pay for separately."
    }
   },
   {
    "escenario": "An online supermarket takes a long time to pick orders. On investigation, it turns out that 38 % of the orders need a substitution or a cancellation because the product is not there, even though the site showed it as available.",
    "pregunta": "What is the root cause and which domain does it belong to?",
    "opciones": [
     "The inventory data does not reflect the physical stock: it is a problem of the data domain, not of the picking flow",
     "The pickers are slow: it is a capacity problem of the business domain",
     "Picking needs to be automated: it is a problem of the application domain",
     "The store network is slow: it is a problem of the technology domain"
    ],
    "correcta": 0,
    "explicacion": "No improvement to the picking flow solves the problem if the stock data lies. It is a symptom in one domain whose cause lives in another.",
    "porQueNo": {
     "1": "Speeding up the pickers does not stop the product from being missing.",
     "2": "Automating on top of incorrect data reproduces the error faster.",
     "3": "Network speed does not explain the inventory discrepancy."
    }
   },
   {
    "escenario": "A software update is distributed simultaneously to every customer in the world. A defect in the file makes millions of machines fail to start.",
    "pregunta": "Which governance control would have contained the damage?",
    "opciones": [
     "A staged rollout by rings: release first to a small group, observe, and only then widen",
     "Increase the frequency of updates so that each one is smaller",
     "Hire a second security vendor",
     "Improve the communication plan for customers during the incident"
    ],
    "correcta": 0,
    "explicacion": "It is what COBIT BAI06 and BAI07 and ITIL change management require. A canary of a thousand machines would have contained the damage to a thousand machines instead of 8.5 million.",
    "porQueNo": {
     "1": "More frequency without staging multiplies the chances of failing globally.",
     "2": "Diversifying reduces concentration in the long run, but it does not contain this rollout.",
     "3": "Communicating well mitigates the perception, not the operational impact."
    }
   },
   {
    "escenario": "A processing plant discovers that a low-cost label printer, when it fails, stops the entire line because the perishable product cannot be shipped without identification.",
    "pregunta": "What does that reveal about asset management?",
    "opciones": [
     "Criticality is defined by the impact on the business process, not by the cost of the asset",
     "The printer has to be replaced with a high-end model",
     "The ERP should take over the labeling function",
     "It is a preventive maintenance problem, not an architecture one"
    ],
    "correcta": 0,
    "explicacion": "An inventory sorted by cost would put the ERP at the top and the printer at the bottom; a business impact analysis puts them side by side. This is where BAI09, BAI10 and BAI04 of COBIT connect.",
    "porQueNo": {
     "1": "A more expensive device is still a single point of failure.",
     "2": "Moving the function does not remove the dependency on the physical device.",
     "3": "Maintenance helps, but the redundancy decision is an architectural one."
    }
   },
   {
    "escenario": "A supermarket installs six self-checkout lanes with one supervisor. The time per customer rises from 3.2 to 4.6 minutes, but the checkout front end runs with one person instead of six.",
    "pregunta": "How do you evaluate it correctly?",
    "opciones": [
     "You have to declare what you are optimizing: cost per transaction improves a lot, capacity at the peak gets worse",
     "It is a clear improvement because it reduces staff",
     "It is a step backwards because the time per customer went up",
     "It cannot be evaluated without knowing customer satisfaction"
    ],
    "correcta": 0,
    "explicacion": "Two indicators move in opposite directions. The answer depends on the stated objective, and presenting only the one that suits you is what destroys the credibility of an analysis.",
    "porQueNo": {
     "1": "Reducing staff is not a benefit if peak demand is not met.",
     "2": "The individual time gets worse but the cost per transaction improves substantially.",
     "3": "Satisfaction matters, but with the data given you can already evaluate capacity and cost."
    }
   },
   {
    "escenario": "A customer fills up with fuel, receives a ticket and then has to go into a portal to enter the ticket data and their own data to get an invoice. 25 % of the attempts fail.",
    "pregunta": "What is the architecture diagnosis?",
    "opciones": [
     "The same data is captured twice because the point of sale and invoicing do not share the transaction: you have to capture it once, at the source",
     "The portal needs a better interface design to reduce user errors",
     "Customers have to be trained to fill in tax data correctly",
     "The process is fine: tax responsibility belongs to the customer"
    ],
    "correcta": 0,
    "explicacion": "It is duplicate data entry, one of the classic wastes. The TO-BE identifies the customer at the moment of fueling and issues the invoice automatically — the same principle as the supplier portal.",
    "porQueNo": {
     "1": "Improving the interface removes some errors but keeps the double entry.",
     "2": "Training thousands of customers is not a viable process solution.",
     "3": "A cost shifted to the customer is still a cost of the process, even if it does not show up in the internal indicators."
    }
   },
   {
    "escenario": "A hospital detects that 3.4 % of its patients have a duplicate record because of variations in the name or data-entry errors.",
    "pregunta": "Why is this more serious than an administrative problem?",
    "opciones": [
     "The clinical history is fragmented: tests get repeated and medical decisions are made on partial information",
     "It increases the storage cost of the database",
     "It complicates billing at the end of the episode",
     "It makes it harder to count the patients served for the reports"
    ],
    "correcta": 0,
    "explicacion": "It is the course's “active customer” case with clinical consequences. An allergy recorded in a record that pharmacy cannot reach is a direct risk for the patient.",
    "porQueNo": {
     "1": "The storage cost is negligible next to the clinical risk.",
     "2": "Billing is affected, but that is the minor consequence.",
     "3": "The statistics matter, but they are not what puts the patient at risk."
    }
   },
   {
    "escenario": "A clinic moves from serving patients by turn to appointments with an assigned time. The installed capacity did not change, but the patient's waiting time dropped noticeably.",
    "pregunta": "What is the mechanism?",
    "opciones": [
     "The appointment spreads out arrivals and flattens the peak, which lets you run close to capacity without building a queue",
     "The appointment increases the clinic's service capacity",
     "Doctors work faster when they know who is coming",
     "The processing time of each consultation was reduced"
    ],
    "correcta": 0,
    "explicacion": "This is demand control. The peak is what creates the queue; by flattening it, the same capacity goes much further in terms of perceived waiting.",
    "porQueNo": {
     "1": "Installed capacity is the same: same consulting rooms and same staff.",
     "2": "Service speed does not change just because you know the schedule.",
     "3": "Consultation time stays the same; what changes is when patients arrive."
    }
   }
  ],
  "clasificar": [
   {
    "consigna": "Classify each case according to the dominant pattern it illustrates.",
    "categorias": [
     "Bottleneck",
     "Multiple routes",
     "Rework",
     "IT continuity"
    ],
    "items": [
     {
      "texto": "Starbucks · people pile up at the bar",
      "categoria": "Bottleneck"
     },
     {
      "texto": "Ford · the slowest station sets the pace",
      "categoria": "Bottleneck"
     },
     {
      "texto": "Banamex · single-queue system versus independent queues",
      "categoria": "Bottleneck"
     },
     {
      "texto": "Telcel · transactions of 3 and of 42 minutes",
      "categoria": "Multiple routes"
     },
     {
      "texto": "adidas.com · each payment method with its own timing",
      "categoria": "Multiple routes"
     },
     {
      "texto": "VivaAerobus · with or without baggage, online or at the airport",
      "categoria": "Multiple routes"
     },
     {
      "texto": "OXXO Gas · 25 % of invoices have to be redone",
      "categoria": "Rework"
     },
     {
      "texto": "Costco · the return reverses the transaction",
      "categoria": "Rework"
     },
     {
      "texto": "CrowdStrike · 8.5 million machines that will not boot",
      "categoria": "IT continuity"
     },
     {
      "texto": "Processing plant · the printer stops the line",
      "categoria": "IT continuity"
     }
    ],
    "explicacion": "Recognizing the pattern is the first step of the diagnosis: each one is calculated with a different rule and attacked with a different tool."
   },
   {
    "consigna": "Each case has a root cause in an architecture domain. Classify them.",
    "categorias": [
     "Business (process and rules)",
     "Data",
     "Applications",
     "Technology"
    ],
    "items": [
     {
      "texto": "Enrollment · the decision to open a section takes 5 days",
      "categoria": "Business (process and rules)"
     },
     {
      "texto": "Toyota · mixing scheduled service with uncertain repair",
      "categoria": "Business (process and rules)"
     },
     {
      "texto": "Online grocery · the site's inventory does not match the physical one",
      "categoria": "Data"
     },
     {
      "texto": "Hospital · duplicate records for the same patient",
      "categoria": "Data"
     },
     {
      "texto": "Butcher shop · inventory by weight is not modeled as pieces",
      "categoria": "Data"
     },
     {
      "texto": "OXXO Gas · the POS and invoicing do not share the transaction",
      "categoria": "Applications"
     },
     {
      "texto": "Pharmacy · the POS has to sell with no connection and reconcile afterwards",
      "categoria": "Applications"
     },
     {
      "texto": "Processing plant · scale and printer with no backup",
      "categoria": "Technology"
     },
     {
      "texto": "CrowdStrike · the agent runs in ring 0 of the operating system",
      "categoria": "Technology"
     }
    ],
    "explicacion": "The symptom almost never shows up in the domain where the cause lives. That cross-domain diagnosis is exactly what enterprise architecture brings."
   },
   {
    "consigna": "Classify each initiative according to the level of change it represents.",
    "categorias": [
     "Digitization",
     "Automation",
     "Digital transformation"
    ],
    "items": [
     {
      "texto": "Kiosk that replaces the cashier for taking the order",
      "categoria": "Digitization"
     },
     {
      "texto": "Portal where the customer types in the data from their receipt",
      "categoria": "Digitization"
     },
     {
      "texto": "Online check-in with the boarding pass on your phone",
      "categoria": "Digitization"
     },
     {
      "texto": "Automatic ticket escalation by elapsed time",
      "categoria": "Automation"
     },
     {
      "texto": "Fryer with a timer that alerts you and shuts itself off",
      "categoria": "Automation"
     },
     {
      "texto": "Rule that closes sections with low enrollment without intervention",
      "categoria": "Automation"
     },
     {
      "texto": "Appointments with synchronized service and results online",
      "categoria": "Digital transformation"
     },
     {
      "texto": "Platform that coordinates customer, merchant and courier",
      "categoria": "Digital transformation"
     },
     {
      "texto": "Real-time driver assignment and dynamic pricing",
      "categoria": "Digital transformation"
     }
    ],
    "explicacion": "Digitizing changes the medium; automating makes the system carry out the activity; transforming changes capabilities, experience or business model. The kiosk is the most debatable example, and that is why it is the best one to argue about."
   }
  ],
  "opcionMultiple": [
   {
    "tema": "Diagnosis",
    "pregunta": "In the Starbucks case, why does ordering through the app not increase the store's capacity?",
    "opciones": [
     "Because the constraint is the barista, and app ordering only changes where and how you wait",
     "Because the app has a technical limit on orders per hour",
     "Because app customers take priority over walk-in customers",
     "It does increase it: every app order frees up barista time"
    ],
    "correcta": 0,
    "explicacion": "The app acts on the front end of the process, not on the constraint. It improves the experience — you wait somewhere else — without touching throughput.",
    "porQueNo": {
     "1": "The limit is not technical; it is preparation capacity.",
     "2": "Priority redistributes the waiting, it does not create capacity.",
     "3": "The barista still has to make the drink, wherever the order comes from."
    }
   },
   {
    "tema": "Diagnosis",
    "pregunta": "The enrollment process has 60 minutes of actual work and 8 days of lead time. What does NOT make sense to attack first?",
    "opciones": [
     "Speeding up the student's data entry in the enrollment form",
     "Automating the decision to open and close sections",
     "Running payment validation in parallel with enrollment",
     "Staggering demand by cohort to flatten the peak"
    ],
    "correcta": 0,
    "explicacion": "With a cycle efficiency of 0.5 %, optimizing the 60 minutes of actual work does not move the indicator. The problem is in the waits and in the sequential decisions.",
    "porQueNo": {
     "1": "The 5 days of waiting on that decision are the largest component of the lead time.",
     "2": "Removing a false dependency takes out 24 h of blocking.",
     "3": "Flattening the peak attacks saturation and is one of the cheapest levers."
    }
   },
   {
    "tema": "Value",
    "pregunta": "Costco could lower its return rate by tightening the policy. Why does it not do so?",
    "opciones": [
     "Because easy returns sustain membership renewal, and the cost of the rework pays for itself many times over",
     "Because the law prevents it",
     "Because it has no way of identifying who abuses it",
     "Because the cost of processing returns is zero"
    ],
    "correcta": 0,
    "explicacion": "With a 2.8 % return rate the cost per member is $94 against $900 of membership. The rate could reach 26.8 % before it stopped being worthwhile.",
    "porQueNo": {
     "1": "No law requires a return policy that broad.",
     "2": "The membership is precisely what makes it possible to identify the behavior.",
     "3": "The cost is real: labor, inventory and shrinkage."
    }
   },
   {
    "tema": "Lead time",
    "pregunta": "On adidas.com, one customer pays with a cash reference and another with a card. What difference does it make to the process?",
    "opciones": [
     "The lead time of the order changes completely: seconds against up to 72 hours for confirmation",
     "None: the order is prepared the same way in both cases",
     "Only the fee the company pays changes",
     "Cash payment carries a higher risk of fraud"
    ],
    "correcta": 0,
    "explicacion": "The payment method is an exclusive gateway with routes of radically different times, and you have to tell the customer that before they buy.",
    "porQueNo": {
     "1": "Preparation cannot start until the payment is confirmed.",
     "2": "The fee changes, but the big effect is on time.",
     "3": "Prepaid cash carries, if anything, a lower chargeback risk."
    }
   },
   {
    "tema": "Continuity",
    "pregunta": "In the CrowdStrike incident, the rollback took 78 minutes but many organizations took days to recover. What does that teach you?",
    "opciones": [
     "The vendor's rollback speed is not the customer's recovery speed: your own RTO has to be measured against the actual remediation",
     "That the vendor was slow to act",
     "That the organizations had no backups",
     "That Windows is more fragile than other operating systems"
    ],
    "correcta": 0,
    "explicacion": "Recovering each machine required booting into safe mode and deleting a file by hand, with BitLocker keys in the way. A continuity plan that confuses the two speeds is badly built.",
    "porQueNo": {
     "1": "78 minutes to detect, diagnose and roll back globally is fast.",
     "2": "Backups do not help when the machine will not boot because of an agent file.",
     "3": "The failure was in the agent's content, not in the operating system."
    }
   },
   {
    "tema": "Capacity",
    "pregunta": "At Salud Digna the bottleneck is sample collection in the morning and the laboratory in the afternoon. What does that imply?",
    "opciones": [
     "A capacity analysis with daily averages does not detect it: you need simulation or analysis by time slot",
     "That you have to hire more staff at both stages",
     "That the process is badly designed and has to be redone",
     "That the daily average is enough if you calculate it properly"
    ],
    "correcta": 0,
    "explicacion": "The average hides the fact that the constraint moves during the day. It is the clearest argument in favor of simulation over analytical calculation.",
    "porQueNo": {
     "1": "Hiring at both stages without analyzing time slots is overprovisioning.",
     "2": "A constraint that moves is normal in processes with variable demand.",
     "3": "A well-calculated average is still an average: it does not reveal intraday variation."
    }
   },
   {
    "tema": "Hidden cost",
    "pregunta": "The OXXO Gas invoicing process consumes 233 hours of customer time per month. Why does the problem persist?",
    "opciones": [
     "Because the customer pays that cost and it does not show up in any internal indicator of the company",
     "Because fixing it is technically impossible",
     "Because tax regulation requires that flow",
     "Because customers prefer to invoice after the purchase"
    ],
    "correcta": 0,
    "explicacion": "An internal efficiency analysis never detects it. That is why you analyze value from the customer's perspective and not only from your own cost.",
    "porQueNo": {
     "1": "Identifying the customer at the moment of fueling is technically common.",
     "2": "The regulation requires the receipt, not that the customer re-enter the data.",
     "3": "The preference is for convenience, not for typing things twice."
    }
   },
   {
    "tema": "Resources",
    "pregunta": "In the pastry shop, why do the 40 minutes of cooling not enter the oven's load calculation?",
    "opciones": [
     "Because while the cake cools the oven is free for another order: the wait does not consume capacity",
     "Because cooling takes less time than baking",
     "Because cooling is non-value-added and is excluded from the analysis",
     "Because cooling happens outside the process boundaries"
    ],
    "correcta": 0,
    "explicacion": "The wait lengthens the lead time but does not occupy the resource. Confusing the two inflates the load and moves the bottleneck to the wrong resource.",
    "porQueNo": {
     "1": "Relative duration is not the criterion; the criterion is whether or not it occupies the resource.",
     "2": "Being value-added does not determine whether something consumes capacity.",
     "3": "Cooling happens inside the process: it is part of the lead time."
    }
   },
   {
    "tema": "Orchestration",
    "pregunta": "Rappi coordinates a customer, a merchant and a courier who do not report to it hierarchically. How does it achieve that coordination?",
    "opciones": [
     "With data, incentives and rules, because it has no hierarchical authority over the participants",
     "With employment contracts that give it direct authority",
     "With supervisors in every merchant location",
     "It does not achieve it: the process depends on the goodwill of each actor"
    ],
    "correcta": 0,
    "explicacion": "It is a cross-functional process taken to the extreme: it runs across different companies. Orchestration is achieved with information and incentive mechanisms, not with orders.",
    "porQueNo": {
     "1": "The merchants are independent and the couriers are not employees in this model.",
     "2": "It would be economically unviable at that scale.",
     "3": "It does achieve it, and designing those mechanisms is precisely its product."
    }
   },
   {
    "tema": "Trade-off",
    "pregunta": "At Uber, always assigning the nearest driver lowers the passenger's wait but reduces driver utilization. How do you decide?",
    "opciones": [
     "It is a business decision about which indicator to prioritize, not a technical decision of the algorithm",
     "The passenger's wait should always take priority",
     "Driver utilization should always take priority",
     "The algorithm can optimize both at the same time"
    ],
    "correcta": 0,
    "explicacion": "The two indicators are in structural tension. The business is the one that picks the balance point, with data; the algorithm only executes the chosen policy.",
    "porQueNo": {
     "1": "Prioritizing only the passenger makes the operation more expensive and discourages drivers.",
     "2": "Prioritizing only utilization degrades the experience and loses demand.",
     "3": "There is a trade-off frontier: improving one beyond a certain point degrades the other."
    }
   },
   {
    "tema": "Criticality",
    "pregunta": "How should you define the criticality of an IT asset?",
    "opciones": [
     "By the impact on the business process if it fails, not by the cost of the asset",
     "By the replacement cost of the equipment",
     "By how long the asset has been in the inventory",
     "By the number of users who use it"
    ],
    "correcta": 0,
    "explicacion": "A cheap label printer can stop a perishable-product line; an expensive server can tolerate hours of downtime.",
    "porQueNo": {
     "1": "Cost bears no relation to operational impact.",
     "2": "Age matters for the life cycle, not for criticality.",
     "3": "An asset with a single user can be critical if it stops the operation."
    }
   },
   {
    "tema": "Method",
    "pregunta": "What do VivaAerobus online check-in, the supplier portal and supermarket self-checkout have in common?",
    "opciones": [
     "They move the work to the source or to the customer, taking it out of the company's critical process",
     "All three completely eliminate human intervention",
     "All three reduce the individual cycle time of the transaction",
     "All three are examples of digital transformation"
    ],
    "correcta": 0,
    "explicacion": "It is the same redesign heuristic applied in three industries: whoever holds the data captures it, and the company's scarce resource stops being consumed.",
    "porQueNo": {
     "1": "All three keep human intervention for exceptions.",
     "2": "Self-checkout raises individual time: it lowers cost, not time.",
     "3": "Check-in and self-checkout are closer to digitization or automation."
    }
   }
  ],
  "flashcards": [
   {
    "frente": "Starbucks",
    "reverso": "The register is not the bottleneck; the barista is. Investing in a resource that is not the constraint adds no throughput: it only moves the queue somewhere else."
   },
   {
    "frente": "Banamex · single-queue system",
    "reverso": "A shared pool absorbs variability better than independent queues. Same capacity, less waiting — but the single-queue system does not create capacity."
   },
   {
    "frente": "Ford · balancing",
    "reverso": "The line produces at the pace of its slowest station. When you rebalance it the bottleneck moves to another station: that is why the fifth step of TOC is to repeat."
   },
   {
    "frente": "Pastry shop · cooling",
    "reverso": "It is NNVA, not NVA: a physical constraint of the product. It lengthens the lead time but does not consume capacity, so it does not go into the load calculation."
   },
   {
    "frente": "Costco · returns",
    "reverso": "Rework worth keeping: the rate could rise from 2.8 % to 26.8 % before it stopped paying for itself through the membership. Eliminating waste is not an end in itself."
   },
   {
    "frente": "OXXO Gas · invoicing",
    "reverso": "Duplicate data entry whose cost the customer pays, which is why it shows up in no internal indicator. The TO-BE captures the data once, at the source."
   },
   {
    "frente": "Online grocery",
    "reverso": "The symptom is “picking takes too long”; the cause is that the inventory data is lying. A flow problem whose root lives in the data domain."
   },
   {
    "frente": "Salud Digna",
    "reverso": "Real digital transformation: the appointment controls demand and flattens the peak. The bottleneck moves during the day, so daily averages do not detect it."
   },
   {
    "frente": "Rappi",
    "reverso": "A cross-functional process across different companies. With no hierarchical authority, coordination is achieved with data, incentives and rules."
   },
   {
    "frente": "Uber",
    "reverso": "Passenger wait against driver utilization: two indicators in tension. Choosing the balance point is a business decision, not the algorithm's."
   },
   {
    "frente": "Service desk",
    "reverso": "Little's Law applied: with 168 open tickets and 24 closures per hour, the lead time is 7 h even though the SLA promises 4. You fix it by controlling the intake."
   },
   {
    "frente": "Meat processing plant",
    "reverso": "Criticality is defined by the impact on the process, not by the cost of the asset. A cheap printer can be the most critical asset in the plant."
   },
   {
    "frente": "CrowdStrike 2024",
    "reverso": "8.5 million machines from a global rollout with no staggering. The vendor's rollback took 78 min; the customer's recovery, days."
   },
   {
    "frente": "Self-checkout",
    "reverso": "It raises the time per customer and lowers the cost per transaction: two opposing indicators. You have to declare which one you are optimizing."
   },
   {
    "frente": "Hospital · patient record",
    "reverso": "The master data here is clinical, not administrative: a duplicate record fragments the history and decisions get made with partial information."
   }
  ]
 }
}
);
