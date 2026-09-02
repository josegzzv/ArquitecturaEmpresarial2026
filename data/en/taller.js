/* Generado por herramientas/cadenas.js — no editar a mano la estructura.
   Para corregir una traducción: edita herramientas/traduccion/taller.json
   y vuelve a ejecutar:  node herramientas/cadenas.js inyectar taller */
EA.registrarTallerEn(
{
 "titulo": "Integrative workshop",
 "subtitulo": "From the interview to the project charter, on a single case",
 "archivo": "deliverable-thn",
 "caso": {
  "nombre": "Tornillos y Herrajes del Norte",
  "resumen": "B2B industrial distributor · quote-to-order process"
 },
 "pieEntregable": "Produced with the integrative workshop of the Process Design and Enterprise Architecture course. The figures in the case are illustrative and the company is fictional.",
 "intro": "<p>The eight stages follow the same order as a real project: first you understand, then you measure, then you decide what to change, then you justify it with money, and only at the end do you ask for authorization. What you answer is saved in your browser and carried forward into the following stages: the lead time you calculate in stage 2 is the one that will appear in your project charter in stage 7.</p><p>When you finish you can download everything as a single document.</p>",
 "resumen": {
  "titulo": "Executive summary",
  "cronoTitulo": "Proposed schedule",
  "tiempoTitulo": "Where the time goes today",
  "trabajo": "Actual work",
  "espera": "Waiting",
  "kpis": [
   {
    "etapa": "tiempos",
    "campo": "lt",
    "etiqueta": "Current lead time"
   },
   {
    "etapa": "tiempos",
    "campo": "eficiencia",
    "etiqueta": "Cycle efficiency"
   },
   {
    "etapa": "capacidad",
    "campo": "capProceso",
    "etiqueta": "Process capacity"
   },
   {
    "etapa": "negocio",
    "campo": "cnh",
    "etiqueta": "Cost of doing nothing"
   },
   {
    "etapa": "negocio",
    "campo": "vpnB",
    "etiqueta": "NPV of the proposal"
   },
   {
    "etapa": "negocio",
    "campo": "paybackB",
    "etiqueta": "Pays back in"
   }
  ],
  "barra": {
   "etapa": "tiempos",
   "campo": "eficiencia"
  }
 },
 "diapositivas": [
  {
   "etapa": "presentacion",
   "campo": "p1",
   "titulo": "The problem"
  },
  {
   "etapa": "presentacion",
   "campo": "p2",
   "titulo": "What we found"
  },
  {
   "etapa": "presentacion",
   "campo": "p3",
   "titulo": "What we propose"
  },
  {
   "etapa": "presentacion",
   "campo": "p4",
   "titulo": "How much it improves"
  },
  {
   "etapa": "presentacion",
   "campo": "p5",
   "titulo": "What it costs and when it pays back"
  },
  {
   "etapa": "presentacion",
   "campo": "p6",
   "titulo": "Risks and how they are mitigated"
  },
  {
   "etapa": "presentacion",
   "campo": "p7",
   "titulo": "The decision we are asking for today"
  }
 ],
 "etapas": [
  {
   "id": "descubrimiento",
   "titulo": "Discovery",
   "objetivo": "Understand the problem with evidence before proposing anything.",
   "bloques": [
    {
     "tipo": "texto",
     "titulo": "The company",
     "cuerpo": "<p><b>Tornillos y Herrajes del Norte (THN)</b> supplies fasteners, hardware and fixing elements to industrial plants in the northeast. It does not sell to the public: every sale starts with a <b>quote</b> that the customer requests by email or by phone, often with a drawing or a technical specification attached.</p><p>The Commercial Director called the team together with a specific complaint: <i>“we are losing orders because we quote late, and when we quote fast we get the price wrong”.</i> Nobody has measured the process.</p>"
    },
    {
     "tipo": "flujo",
     "titulo": "The quoting process, as it works today",
     "pasos": [
      "Request intake",
      "Data entry into the system",
      "Price and availability lookup",
      "Technical validation",
      "Discount authorization",
      "Issuing and sending"
     ]
    },
    {
     "tipo": "tabla",
     "titulo": "What each person said in the interviews",
     "encabezados": [
      "Who",
      "What they said"
     ],
     "filas": [
      [
       "Commercial Director",
       "“We lose orders because we are slow. I need to quote the same day.”"
      ],
      [
       "Salesperson with 11 years",
       "“What blocks me is waiting for Engineering. Sometimes it is two days.”"
      ],
      [
       "Technical specialist (only one)",
       "“I review the same thing over and over. Half of it I already validated last month.”"
      ],
      [
       "Sales assistant",
       "“When I rush, I get the list price wrong and everything has to be redone.”"
      ],
      [
       "Administration Manager",
       "“The system already has the prices. Nobody trusts them.”"
      ],
      [
       "Frequent customer (assembly plant)",
       "“I buy from whoever answers me first. Not always from the cheapest.”"
      ]
     ]
    },
    {
     "tipo": "nota",
     "titulo": "Watch out for the first conclusion",
     "cuerpo": "<p>It is tempting to close the diagnosis with the Director's phrase: “we are slow”. But five of the six voices point to different things, and one of them —the specialist's— describes a waste that nobody else sees. <b>Triangulate before you decide what hurts.</b></p>"
    }
   ],
   "campos": [
    {
     "id": "tecnica",
     "tipo": "opcion",
     "etiqueta": "You already have the interviews. What is the most useful <b>next</b> discovery step?",
     "opciones": [
      "Observe the process directly and time a sample of real quotes",
      "Run a satisfaction survey with every customer",
      "Ask each salesperson to estimate how long they take on each step",
      "Review the org chart and the job descriptions"
     ],
     "correcta": 0,
     "pista": "Interviews give you perceptions. To measure you need something else."
    },
    {
     "id": "pain",
     "tipo": "texto",
     "etiqueta": "State the <b>pain point</b> in a single sentence, separating the symptom from the probable cause.",
     "ayuda": "Suggested format: “The customer perceives … because the process …”. Do not name the solution yet.",
     "marcador": "The customer perceives… because the process…",
     "minimoPalabras": 25,
     "lineas": 3
    },
    {
     "id": "ideacion",
     "tipo": "texto",
     "etiqueta": "Write an <b>ideation question</b> that opens solutions up instead of closing them down.",
     "ayuda": "“How might we…?” works better than “Should we buy a system?”. The question must not contain the answer.",
     "marcador": "How might we…?",
     "minimoPalabras": 8,
     "lineas": 2
    }
   ],
   "rubrica": [
    "The pain point is written from the <b>customer's</b> side, not the internal department's.",
    "It distinguishes the <b>symptom</b> (“we quote late”) from the <b>probable cause</b>.",
    "It names no technology and no vendor.",
    "It draws on at least <b>two</b> of the six voices interviewed.",
    "The ideation question does not already contain the solution inside it."
   ],
   "modelo": "<p><b>Pain point.</b> The customer buys from whoever answers first, and THN arrives late on almost half of its quotes because the file stops while it waits for a technical validation that, in a good share of cases, was already done before for the same product.</p><p><b>Ideation question.</b> How might we answer a quote the same day without a specialist having to review the same thing twice?</p><p>Notice two things. First: the statement already contains a measurable hypothesis (“a good share of the cases were already validated before”), which stage 2 will confirm or knock down. Second: it does not say “we have to buy a configurator”. That conclusion, if it comes at all, has to come after the numbers.</p>"
  },
  {
   "id": "tiempos",
   "titulo": "The AS-IS, measured",
   "objetivo": "Turn perception into cycle time, lead time and efficiency.",
   "bloques": [
    {
     "tipo": "tabla",
     "titulo": "Observed activity times",
     "encabezados": [
      "Step",
      "Responsible",
      "Time (min)"
     ],
     "filas": [
      [
       "A · Request intake",
       "Sales",
       "8"
      ],
      [
       "B · Data entry into the system",
       "Sales",
       "12"
      ],
      [
       "C · Price and availability lookup",
       "Sales",
       "25"
      ],
      [
       "D · Technical validation",
       "Engineering",
       "40"
      ],
      [
       "E · Discount authorization",
       "Management",
       "15"
      ],
      [
       "F · Issuing and sending",
       "Sales",
       "10"
      ]
     ]
    },
    {
     "tipo": "tabla",
     "titulo": "The three process routes",
     "encabezados": [
      "Route",
      "Steps",
      "Frequency"
     ],
     "filas": [
      [
       "R1 · Standard catalog",
       "A → B → C → F",
       "55 %"
      ],
      [
       "R2 · Requires technical validation",
       "A → B → C → D → F",
       "30 %"
      ],
      [
       "R3 · Technical validation and discount",
       "A → B → C → D → E → F",
       "15 %"
      ]
     ]
    },
    {
     "tipo": "nota",
     "titulo": "Rework",
     "cuerpo": "<p><b>12 %</b> of quotes come back because of a pricing error. Correcting one means redoing <b>C</b> and <b>F</b>. Assume <b>a single repetition</b>: it is corrected and then it comes out right.</p>"
    },
    {
     "tipo": "tabla",
     "titulo": "Measured waits between steps",
     "encabezados": [
      "Waiting",
      "When it happens",
      "Average"
     ],
     "filas": [
      [
       "In the Sales inbox",
       "All quotes",
       "4 h"
      ],
      [
       "In the Engineering queue",
       "Only R2 and R3",
       "18 h"
      ],
      [
       "Waiting for Management",
       "Only R3",
       "6 h"
      ]
     ]
    },
    {
     "tipo": "clave",
     "titulo": "Process boundary",
     "cuerpo": "<p>The lead time you are going to calculate runs <b>from the moment the request arrives until the quote goes out</b>. The time the customer takes to reply stays outside: THN does not control it, and mixing it in hides the real problem.</p>"
    }
   ],
   "campos": [
    {
     "id": "sumaPT",
     "etiqueta": "Process time weighted by routes (Σ p·T)",
     "respuesta": 75.25,
     "unidad": "min",
     "tolerancia": 0.05,
     "pista": "Calculate the time of each route and weight it by its frequency."
    },
    {
     "id": "ct",
     "etiqueta": "Cycle time (CT), including rework",
     "respuesta": 79.45,
     "unidad": "min",
     "tolerancia": 0.05,
     "pista": "Rework only repeats C and F, and only in 12 % of cases."
    },
    {
     "id": "lt",
     "etiqueta": "Weighted average lead time",
     "respuesta": 14.25,
     "unidad": "h",
     "tolerancia": 0.06,
     "pista": "Each route carries different waits. Weight them the same way you did with the times."
    },
    {
     "id": "eficiencia",
     "etiqueta": "Cycle efficiency",
     "respuesta": 9.29,
     "unidad": "%",
     "tolerancia": 0.15,
     "pista": "Process time divided by lead time. Watch the units: one of them is in minutes."
    }
   ],
   "solucion": "<p><b>Time of each route</b></p><div class='paso-calc'>R1 = 8 + 12 + 25 + 10           =  55 min\nR2 = 8 + 12 + 25 + 40 + 10      =  95 min\nR3 = 8 + 12 + 25 + 40 + 15 + 10 = 110 min</div><p><b>Weighting by routes</b></p><div class='paso-calc'>Σ p·T = 0.55(55) + 0.30(95) + 0.15(110)\n      = 30.25   + 28.50   + 16.50\n      = <span class='resaltado'>75.25 min</span></div><p><b>Rework</b> — C and F are redone in 12 % of cases:</p><div class='paso-calc'>Rework = 0.12 × (25 + 10) = 0.12 × 35 = 4.20 min\nCT     = 75.25 + 4.20     = <span class='resaltado'>79.45 min</span></div><p><b>Lead time by route</b> (waits + processing, in hours):</p><div class='paso-calc'>R1 = 4                + 55/60  =  4.9167 h\nR2 = 4 + 18           + 95/60  = 23.5833 h\nR3 = 4 + 18 + 6       + 110/60 = 29.8333 h\n\nLT = 0.55(4.9167) + 0.30(23.5833) + 0.15(29.8333)\n   = 2.7042       + 7.0750        + 4.4750\n   = <span class='resaltado'>14.25 h</span></div><p><b>Cycle efficiency</b></p><div class='paso-calc'>Efficiency = (79.45 / 60) / 14.25\n           = 1.3242 / 14.2542\n           = 0.0929 = <span class='resaltado'>9.29 %</span></div><p>Read it like this: of every hour the quote spends inside THN, <b>less than six minutes</b> are work. The rest is queue. No improvement that speeds up the work —typing faster, hiring more expert people— can touch the remaining 91 %.</p>"
  },
  {
   "id": "capacidad",
   "titulo": "Capacity and bottleneck",
   "objetivo": "Find the resource that limits all the others.",
   "bloques": [
    {
     "tipo": "tabla",
     "titulo": "Available resources",
     "encabezados": [
      "Resource",
      "Daily availability",
      "Steps it performs"
     ],
     "filas": [
      [
       "Sales",
       "3 people × 480 min = <b>1 440 min</b>",
       "A, B, C, F and rework"
      ],
      [
       "Engineering",
       "1 specialist at 50 % = <b>240 min</b>",
       "D"
      ],
      [
       "Management",
       "<b>120 min</b> reserved",
       "E"
      ]
     ]
    },
    {
     "tipo": "nota",
     "titulo": "Careful with the average load",
     "cuerpo": "<p>Engineering does not spend 40 minutes on <i>every</i> quote: only on the ones that go through D, which are R2 and R3. To compare resources you have to bring everything to <b>minutes per average quote</b>, weighting by the frequency of the routes.</p>"
    },
    {
     "tipo": "clave",
     "titulo": "The demand",
     "cuerpo": "<p>THN receives <b>18 quote requests per day</b>, 250 days a year.</p>"
    }
   ],
   "campos": [
    {
     "id": "capVentas",
     "etiqueta": "Sales capacity",
     "respuesta": 24.32,
     "unidad": "quotes/day",
     "tolerancia": 0.05,
     "pista": "Sales does A + B + C + F on every route, plus the rework."
    },
    {
     "id": "capIng",
     "etiqueta": "Engineering capacity",
     "respuesta": 13.33,
     "unidad": "quotes/day",
     "tolerancia": 0.05,
     "pista": "D only applies to 45 % of quotes."
    },
    {
     "id": "capGer",
     "etiqueta": "Management capacity",
     "respuesta": 53.33,
     "unidad": "quotes/day",
     "tolerancia": 0.05
    },
    {
     "id": "cuello",
     "tipo": "opcion",
     "etiqueta": "Which is the bottleneck?",
     "opciones": [
      "Engineering",
      "Sales",
      "Management",
      "The customer's wait"
     ],
     "correcta": 0
    },
    {
     "id": "capProceso",
     "etiqueta": "Capacity of the whole process",
     "respuesta": 13.33,
     "unidad": "quotes/day",
     "tolerancia": 0.05,
     "pista": "The capacity of a chain is that of its most limited link."
    },
    {
     "id": "uso",
     "etiqueta": "Capacity in use against the demand of 18/day",
     "respuesta": 135,
     "unidad": "%",
     "tolerancia": 0.6,
     "pista": "A value above 100 % is not efficiency: it is a queue that grows every day."
    }
   ],
   "solucion": "<p><b>Load per average quote</b></p><div class='paso-calc'>Sales       = (8 + 12 + 25 + 10) + 0.12(35) = 55 + 4.20 = 59.20 min\nEngineering = (0.30 + 0.15) × 40 = 0.45 × 40           = 18.00 min\nManagement  = 0.15 × 15                               =  2.25 min</div><p><b>Capacity of each resource</b></p><div class='paso-calc'>Sales       = 1440 / 59.20 = <span class='resaltado'>24.32 quotes/day</span>\nEngineering =  240 / 18.00 = <span class='resaltado'>13.33 quotes/day</span>  ← the most limited\nManagement  =  120 /  2.25 = <span class='resaltado'>53.33 quotes/day</span></div><p><b>Process capacity and capacity in use</b></p><div class='paso-calc'>Process capacity = 13.33 quotes/day\nCapacity in use = 18 / 13.33 = 1.35 = <span class='resaltado'>135 %</span>\nDeficit = 18 − 13.33 = 4.67 quotes that pile up every day</div><p>This is where the queue of 18 hours from the previous stage gets explained: it is not that the specialist is slow, it is that <b>35 % more work reaches him than he can process</b>. A queue that grows every day is not fixed by rushing anyone.</p><p>Notice too that Management has capacity for 53 quotes a day and only sees 2.7. Optimizing discount authorization —the step the team complains about most— would change nothing.</p>"
  },
  {
   "id": "valor",
   "titulo": "What adds value and what does not",
   "objetivo": "Separate what the customer pays for from what is merely tolerated.",
   "bloques": [
    {
     "tipo": "defs",
     "titulo": "The criterion, so you do not argue about it every time",
     "items": [
      {
       "termino": "VA — Value-added",
       "definicion": "It transforms the product or service toward what the customer asked for, and the customer would pay for it if they saw it itemized."
      },
      {
       "termino": "NNVA — Necessary non-value-added",
       "definicion": "The customer would not pay for it, but today it cannot be removed without breaking a legal obligation, a control or a technical constraint. You minimize it, you do not delete it."
      },
      {
       "termino": "NVA — Non-value-added",
       "definicion": "It neither transforms nor is mandatory. It is pure waste: waits, rework, movement, duplicated reviews."
      }
     ]
    },
    {
     "tipo": "nota",
     "titulo": "The trap in this stage",
     "cuerpo": "<p>Almost everyone classifies <b>technical validation</b> as NVA because “it is the one that jams things up”. It is not: there are specifications that genuinely require engineering judgment, and quoting a structural fitting wrongly has consequences. What is waste is not validating: it is <b>validating again what has already been validated</b>.</p>"
    }
   ],
   "campos": [
    {
     "id": "vaC",
     "tipo": "opcion",
     "etiqueta": "C · Price and availability lookup",
     "opciones": [
      "VA — Value-added",
      "NNVA — Necessary non-value-added",
      "NVA — Non-value-added"
     ],
     "correcta": 0,
     "pista": "Without a price there is no quote: it is what the customer asked for."
    },
    {
     "id": "vaD",
     "tipo": "opcion",
     "etiqueta": "D · Technical validation of a new specification",
     "opciones": [
      "NNVA — Necessary non-value-added",
      "VA — Value-added",
      "NVA — Non-value-added"
     ],
     "correcta": 1,
     "pista": "Would the customer pay to know that the fitting really holds what the drawing says?"
    },
    {
     "id": "vaD2",
     "tipo": "opcion",
     "etiqueta": "D · Technical validation of a product <b>already validated last month</b>",
     "opciones": [
      "NVA — Non-value-added",
      "VA — Value-added",
      "NNVA — Necessary non-value-added"
     ],
     "correcta": 0,
     "pista": "The same step can change category depending on the context."
    },
    {
     "id": "vaE",
     "tipo": "opcion",
     "etiqueta": "E · Discount authorization",
     "opciones": [
      "NNVA — Necessary non-value-added",
      "VA — Value-added",
      "NVA — Non-value-added"
     ],
     "correcta": 0,
     "pista": "It is an internal margin control. The customer would not pay for it, but the company needs it."
    },
    {
     "id": "vaEspera",
     "tipo": "opcion",
     "etiqueta": "The 18 hours of queue in front of Engineering",
     "opciones": [
      "NVA — Non-value-added",
      "NNVA — Necessary non-value-added",
      "VA — Value-added"
     ],
     "correcta": 0
    },
    {
     "id": "vaJustifica",
     "tipo": "texto",
     "etiqueta": "The same step D ended up in two different categories. Explain why, and what that implies for the redesign.",
     "ayuda": "This is the observation that opens up the solution. Take three or four lines.",
     "minimoPalabras": 30,
     "lineas": 4
    }
   ],
   "rubrica": [
    "It distinguishes the step itself from <b>the conditions</b> under which it is performed.",
    "It names the real difference: new specification versus repeated specification.",
    "It concludes something actionable — saying “it depends” is not enough.",
    "It does not yet propose a specific tool."
   ],
   "modelo": "<p>Technical validation adds value when the specification is new: someone with engineering judgment is settling a doubt the customer cannot settle alone, and whether the quoted part actually works depends on it. When the specification has already been validated before, the step contributes nothing new: it reproduces a judgment the company already issued and simply never stored anywhere.</p><p>The implication for the redesign is direct: the goal is not to <b>eliminate</b> technical validation, nor to <b>speed it up</b>, but to <b>stop repeating it</b>. That turns the problem from one of capacity —hiring someone else— into one of information architecture: where the knowledge the company has already produced lives.</p>"
  },
  {
   "id": "tobe",
   "titulo": "The TO-BE and its alternatives",
   "objetivo": "Propose the redesign and calculate what happens to capacity.",
   "bloques": [
    {
     "tipo": "texto",
     "titulo": "The two alternatives that reached the table",
     "cuerpo": "<p>With the diagnosis on the table —bottleneck in Engineering, {{tiempos.eficiencia}} % cycle efficiency, and validations that get repeated— the team came up with two proposals and put them head to head.</p>"
    },
    {
     "tipo": "tabla",
     "titulo": "Alternative A versus alternative B",
     "encabezados": [
      "",
      "A · Hire",
      "B · Validation rules in the ERP"
     ],
     "filas": [
      [
       "What it consists of",
       "A second part-time technical specialist",
       "Configure the ERP so that it only validates what has no precedent"
      ],
      [
       "Effect on the process",
       "Engineering goes from 240 to 480 min per day",
       "Only 15 % of quotes require human validation"
      ],
      [
       "Initial investment",
       "—",
       "$680,000"
      ],
      [
       "Annual cost",
       "$336,000 in salary and benefits",
       "$95,000 in licenses and support"
      ],
      [
       "Main risk",
       "The cost is permanent; if demand falls, the expense stays",
       "If the rules are configured wrongly, quoting runs on the wrong judgment"
      ]
     ]
    },
    {
     "tipo": "nota",
     "titulo": "The figure that supports alternative B",
     "cuerpo": "<p>Reviewing the history, <b>two out of every three validations</b> were for products with an identical specification already validated. That is why the human validation load drops from 45 % to <b>15 %</b> of quotes: only what is genuinely new stays.</p>"
    }
   ],
   "campos": [
    {
     "id": "capA",
     "etiqueta": "Engineering capacity with alternative A",
     "respuesta": 26.67,
     "unidad": "quotes/day",
     "tolerancia": 0.05
    },
    {
     "id": "capB",
     "etiqueta": "Engineering capacity with alternative B",
     "respuesta": 40,
     "unidad": "quotes/day",
     "tolerancia": 0.05,
     "pista": "Engineering's availability does not change; what changes is the load per quote."
    },
    {
     "id": "cuelloB",
     "tipo": "opcion",
     "etiqueta": "With alternative B, which becomes the bottleneck?",
     "opciones": [
      "Sales",
      "Engineering",
      "Management",
      "There is no bottleneck any more"
     ],
     "correcta": 0,
     "pista": "Compare the three capacities again. The bottleneck does not disappear: it moves."
    },
    {
     "id": "capProcesoB",
     "etiqueta": "Process capacity with alternative B",
     "respuesta": 24.32,
     "unidad": "quotes/day",
     "tolerancia": 0.05
    },
    {
     "id": "tobeTexto",
     "tipo": "texto",
     "etiqueta": "Describe the TO-BE in three or four lines: what changes in the flow and what stays the same.",
     "ayuda": "A good TO-BE names what does <i>not</i> change. If everything changes, nobody is going to implement it.",
     "minimoPalabras": 35,
     "lineas": 4
    }
   ],
   "solucion": "<div class='paso-calc'>Alternative A — raises availability:\n  Engineering = 480 / 18.00 = <span class='resaltado'>26.67 quotes/day</span>\n\nAlternative B — lowers the load:\n  Load        = 0.15 × 40 = 6.00 min per quote\n  Engineering = 240 / 6.00 = <span class='resaltado'>40.00 quotes/day</span>\n\nCapacities with B:  Sales 24.32 · Engineering 40.00 · Management 53.33\n  → the process settles at <span class='resaltado'>24.32 quotes/day</span>, limited by Sales</div><p><b>Both alternatives cover the demand of 18/day</b>, and that is exactly the point: capacity no longer tells them apart. From here on the decision is economic, and that is why stage 6 comes next.</p><p>Notice too that with B the bottleneck moves to Sales at 24.32 quotes a day. It did not disappear: <b>there is always a bottleneck</b>. What changed is that it now sits in a resource with slack against current demand, and that if THN grows beyond 24 quotes a day, it already knows where it is going to hurt.</p>",
   "rubrica": [
    "The TO-BE says explicitly which steps <b>are kept</b>.",
    "Technical validation still exists for what is new — the control was not removed.",
    "It mentions where the bottleneck ends up after the change.",
    "It does not promise that the process will end up “with no waits”."
   ]
  },
  {
   "id": "negocio",
   "titulo": "The business case",
   "objetivo": "Turn the redesign into money, and decide with judgment.",
   "bloques": [
    {
     "tipo": "tabla",
     "titulo": "Commercial data",
     "encabezados": [
      "Concept",
      "Value"
     ],
     "filas": [
      [
       "Quotes per year",
       "18/day × 250 days = <b>4 500</b>"
      ],
      [
       "Quotes that today take more than 24 h",
       "those on R2 and R3 = <b>45 %</b>"
      ],
      [
       "Conversion to order if it goes out in 8 h or less",
       "<b>38 %</b>"
      ],
      [
       "Conversion to order if it takes more than 24 h",
       "<b>27 %</b>"
      ],
      [
       "Average contribution margin per order",
       "<b>$2,400</b>"
      ],
      [
       "The company's discount rate",
       "<b>12 %</b> per year"
      ],
      [
       "Evaluation horizon",
       "<b>4 years</b>"
      ]
     ]
    },
    {
     "tipo": "clave",
     "titulo": "The assumption you have to declare",
     "cuerpo": "<p>No improvement recovers 100 % of what is being lost. The team assumed a <b>recovery of 80 %</b> of the theoretical benefit. That number did not come out of a calculation: it is a judgment, and that is why the last question of this stage puts it to the test.</p>"
    },
    {
     "tipo": "nota",
     "titulo": "Before you calculate anything",
     "cuerpo": "<p>The first figure you have to estimate is not the benefit of the project: it is the <b>cost of doing nothing</b>. If that figure is small, the conversation ends there and THN saves itself the project.</p>"
    }
   ],
   "campos": [
    {
     "id": "cnh",
     "etiqueta": "Cost of doing nothing (margin lost per year)",
     "respuesta": 534600,
     "unidad": "$/year",
     "tolerancia": 600,
     "pista": "Slow quotes × conversion difference × margin per order."
    },
    {
     "id": "fa",
     "etiqueta": "Annuity factor at 12 % over 4 years",
     "respuesta": 3.0373,
     "unidad": "",
     "tolerancia": 0.002,
     "pista": "AF = [1 − (1+k)^−n] / k"
    },
    {
     "id": "vpnB",
     "etiqueta": "NPV of alternative B (ERP)",
     "respuesta": 330465,
     "unidad": "$",
     "tolerancia": 900,
     "pista": "Annual cash flow = benefit recovered − annual cost. Then subtract the investment."
    },
    {
     "id": "tirB",
     "etiqueta": "IRR of alternative B",
     "respuesta": 33.54,
     "unidad": "%",
     "tolerancia": 0.5
    },
    {
     "id": "paybackB",
     "etiqueta": "Payback period of alternative B",
     "respuesta": 24.53,
     "unidad": "months",
     "tolerancia": 0.4
    },
    {
     "id": "roiB",
     "etiqueta": "ROI of alternative B over 4 years",
     "respuesta": 95.69,
     "unidad": "%",
     "tolerancia": 0.7
    },
    {
     "id": "vpnA",
     "etiqueta": "NPV of alternative A (hire)",
     "respuesta": 278464,
     "unidad": "$",
     "tolerancia": 900,
     "pista": "This one has no initial investment. Careful: that does not automatically make it better."
    },
    {
     "id": "umbralB",
     "etiqueta": "At what recovery percentage does the NPV of B reach zero?",
     "respuesta": 59.65,
     "unidad": "%",
     "tolerancia": 0.8,
     "pista": "Solve for the annual cash flow that makes NPV = 0 and work back from there to the benefit."
    },
    {
     "id": "recomendacion",
     "tipo": "texto",
     "etiqueta": "Write your <b>recommendation</b> to the Commercial Director. One alternative, one reason, one risk.",
     "ayuda": "Four or five lines. It has to be readable aloud in thirty seconds.",
     "minimoPalabras": 40,
     "lineas": 5
    }
   ],
   "solucion": "<p><b>Cost of doing nothing</b></p><div class='paso-calc'>Slow quotes = 4500 × 0.45                = 2 025\nLost orders = 2025 × (0.38 − 0.27)       = 222.75\nLost margin = 222.75 × 2400 = <span class='resaltado'>$534,600 per year</span></div><p><b>Annuity factor</b></p><div class='paso-calc'>AF = [1 − (1.12)^-4] / 0.12 = (1 − 0.635518) / 0.12 = <span class='resaltado'>3.037349</span></div><p><b>Alternative B — configure the ERP</b></p><div class='paso-calc'>Benefit       = 0.80 × 534,600           = $427,680\nNet cash flow = 427,680 − 95,000         = $332,680 per year\nNPV           = 332,680 × 3.037349 − 680,000\n              = 1,010,465 − 680,000      = <span class='resaltado'>$330,465</span>\nPayback       = 680,000 / 332,680 = 2.044 years = <span class='resaltado'>24.53 months</span>\nROI           = (332,680 × 4 − 680,000) / 680,000 = <span class='resaltado'>95.69 %</span>\nIRR           = rate that makes NPV = 0  = <span class='resaltado'>33.54 %</span></div><p><b>Alternative A — hire</b></p><div class='paso-calc'>Net cash flow = 427,680 − 336,000        = $91,680 per year\nNPV           = 91,680 × 3.037349        = <span class='resaltado'>$278,464</span>\n               (no initial investment)</div><p><b>Threshold of alternative B</b></p><div class='paso-calc'>Cash flow that makes NPV = 0:  680,000 / 3.037349 = $223,879\nBenefit needed:                223,879 + 95,000   = $318,879\nMinimum recovery:              318,879 / 534,600  = <span class='resaltado'>59.65 %</span></div><p><b>And here is the lesson of the stage.</b> Both alternatives have a positive NPV, so both “get approved”. But look at what happens if the recovery assumption fails:</p><div class='paso-calc'>Recovery        NPV of B        NPV of A\n─────────────────────────────────────────\n     80 %       $330,465        $278,464\n     70 %       $168,089        $116,087\n     60 %         $5,712        −$46,289\n     50 %      −$156,665       −$208,666</div><p>Alternative A dies first: it needs to recover <b>62.85 %</b> not to lose money, whereas B holds out down to <b>59.65 %</b>. The option that required an initial investment turned out to be the <b>more robust</b> one, because its recurring cost is much lower. Comparing only the NPV of the optimistic scenario would have hidden that.</p>",
   "rubrica": [
    "The recommendation names <b>one</b> alternative, not both.",
    "It gives the reason in terms of money or risk, not technology.",
    "It declares the recovery assumption as an assumption, not as a fact.",
    "It mentions a real risk and what it would do about it.",
    "It can be read aloud in less than a minute."
   ],
   "modelo": "<p>I recommend configuring the validation rules in the ERP. Both options solve the capacity problem, but under the same recovery assumption the ERP one generates $330,465 of NPV against $278,464 for hiring, and above all it holds out longer: it stays profitable even if we recover only 60 % of the margin we lose today, the point at which hiring would already be costing us money.</p><p>The assumption to keep an eye on is that 80 % recovery: we did not measure it, we estimated it. The main risk is configuring the rules wrongly and quoting on the wrong judgment, so I propose starting with the three most repeated product families, with human validation running in parallel during the first month, and expanding only when the measured margin of error is acceptable.</p>"
  },
  {
   "id": "charter",
   "titulo": "The project charter",
   "objetivo": "Turn the recommendation into an authorized project.",
   "bloques": [
    {
     "tipo": "clave",
     "titulo": "What it is really for",
     "cuerpo": "<p>The <i>project charter</i> is not documentation. It is the document that <b>formally authorizes the project, names whoever leads it and gives them access to resources</b>. Without a charter there is no project: there is activity, and activity gets cancelled without anyone having to explain why.</p>"
    },
    {
     "tipo": "tabla",
     "titulo": "What the charter does settle and what it does not",
     "encabezados": [
      "The charter does",
      "The charter does not"
     ],
     "filas": [
      [
       "Authorize the project and assign it a budget",
       "Detail the work plan"
      ],
      [
       "Name the manager and define their authority",
       "Replace the schedule"
      ],
      [
       "Set the objective and the success criteria",
       "Describe the technical solution"
      ],
      [
       "Define what is out of scope",
       "Replace the analysis you already did"
      ],
      [
       "Put assumptions and constraints in writing",
       "Get renegotiated every week"
      ]
     ]
    },
    {
     "tipo": "nota",
     "titulo": "The section that gets neglected most",
     "cuerpo": "<p>The <b>excluded scope</b>. A charter that does not say what is left out is an open invitation for the project to grow until it becomes impossible. Write there what you know someone is going to ask for in month three.</p>"
    },
    {
     "tipo": "texto",
     "titulo": "Your own numbers",
     "cuerpo": "<p>You no longer need to invent anything: the current lead time is <b>{{tiempos.lt}} h</b>, cycle efficiency is <b>{{tiempos.eficiencia}} %</b>, the cost of doing nothing comes to <b>${{negocio.cnh}}</b> per year and the NPV of the recommended alternative is <b>${{negocio.vpnB}}</b>. Use them.</p>"
    }
   ],
   "campos": [
    {
     "id": "nombre",
     "tipo": "texto",
     "lineas": 1,
     "etiqueta": "Project name",
     "ayuda": "It should name the result, not the tool.",
     "marcador": "Reducing quotation lead time…"
    },
    {
     "id": "patrocinador",
     "tipo": "texto",
     "lineas": 1,
     "etiqueta": "Sponsor",
     "ayuda": "The person who has the authority and the budget. In this case it is in the problem statement."
    },
    {
     "id": "gerente",
     "tipo": "texto",
     "lineas": 2,
     "etiqueta": "Project manager and level of authority",
     "ayuda": "What they can decide without having to ask again. A charter without this is useless."
    },
    {
     "id": "justificacion",
     "tipo": "texto",
     "lineas": 3,
     "minimoPalabras": 30,
     "etiqueta": "Business justification, <b>with magnitude</b>",
     "ayuda": "One or two sentences with the figures you already calculated. No adjectives."
    },
    {
     "id": "objetivo",
     "tipo": "texto",
     "lineas": 3,
     "minimoPalabras": 20,
     "etiqueta": "<b>SMART</b> objective",
     "ayuda": "Specific, measurable, achievable, relevant and dated. If it has no number and no date, it is not SMART."
    },
    {
     "id": "incluido",
     "tipo": "texto",
     "lineas": 3,
     "minimoPalabras": 20,
     "etiqueta": "Included scope"
    },
    {
     "id": "excluido",
     "tipo": "texto",
     "lineas": 3,
     "minimoPalabras": 20,
     "etiqueta": "<b>Excluded</b> scope",
     "ayuda": "What someone is going to ask for in month three and you are not going to do."
    },
    {
     "id": "entregables",
     "tipo": "texto",
     "lineas": 4,
     "minimoPalabras": 20,
     "etiqueta": "Main deliverables"
    },
    {
     "id": "interesados",
     "tipo": "texto",
     "lineas": 3,
     "minimoPalabras": 15,
     "etiqueta": "Key stakeholders and what each one cares about",
     "ayuda": "They are all in the stage 1 interviews."
    },
    {
     "id": "cronograma",
     "tipo": "cronograma",
     "destacado": true,
     "unidad": "weeks",
     "rotulo": "Proposed schedule",
     "etiqueta": "Schedule: split the timeline across the phases",
     "ayuda": "The phases are fixed; what you decide is <b>how long each one lasts</b>. Splitting the timeline forces you to take a position: almost everyone underestimates testing and the pilot, and overestimates configuration. Look at the total before you call it done.",
     "fases": [
      {
       "id": "reglas",
       "nombre": "Defining the rules with Engineering",
       "min": 1,
       "max": 12,
       "valor": 3
      },
      {
       "id": "config",
       "nombre": "Configuration in the ERP",
       "min": 1,
       "max": 12,
       "valor": 4
      },
      {
       "id": "migracion",
       "nombre": "Migrating the history",
       "min": 1,
       "max": 12,
       "valor": 2
      },
      {
       "id": "pruebas",
       "nombre": "Testing and adjustments",
       "min": 1,
       "max": 12,
       "valor": 3
      },
      {
       "id": "piloto",
       "nombre": "Pilot with validation running in parallel",
       "min": 1,
       "max": 12,
       "valor": 4
      },
      {
       "id": "despliegue",
       "nombre": "Rollout and training",
       "min": 1,
       "max": 12,
       "valor": 2
      },
      {
       "id": "estabiliza",
       "nombre": "Stabilization and measurement",
       "min": 1,
       "max": 12,
       "valor": 4
      }
     ]
    },
    {
     "id": "hitos",
     "tipo": "texto",
     "lineas": 4,
     "minimoPalabras": 20,
     "etiqueta": "Milestones: what marks the end of each phase",
     "ayuda": "A milestone is a <b>verifiable result</b>, not an activity: “rules approved by Engineering”, not “define the rules”."
    },
    {
     "id": "presupuesto",
     "etiqueta": "Authorized budget you are requesting",
     "respuesta": 680000,
     "unidad": "$",
     "tolerancia": 1,
     "pista": "The one from the stage 6 analysis. If you ask for a different figure, you have to be able to defend it."
    },
    {
     "id": "riesgos",
     "tipo": "texto",
     "lineas": 4,
     "minimoPalabras": 25,
     "etiqueta": "High-level risks and planned response",
     "ayuda": "Include resistance to change: the technical specialist may read this as a threat."
    },
    {
     "id": "exito",
     "tipo": "texto",
     "lineas": 3,
     "minimoPalabras": 20,
     "etiqueta": "Success and acceptance criteria",
     "ayuda": "How you will know, with a number, that the project can be closed."
    },
    {
     "id": "supuestos",
     "tipo": "texto",
     "lineas": 3,
     "minimoPalabras": 20,
     "etiqueta": "Assumptions and constraints",
     "ayuda": "The 80 % recovery goes here."
    }
   ],
   "rubrica": [
    "The <b>objective</b> has a number and a date, not just an intention.",
    "The <b>justification</b> cites a figure you calculated, not an adjective.",
    "The <b>excluded scope</b> is not empty and does not say “nothing”.",
    "The <b>milestones</b> are verifiable results, not activities (“ERP configured and tested”, not “configure the ERP”).",
    "The <b>risks</b> include at least one human risk, not only technical ones.",
    "The <b>success criteria</b> can be measured with data the process already generates.",
    "The recovery <b>assumption</b> is stated as an assumption.",
    "The charter fits on one page: if it does not, it is a work plan in disguise."
   ],
   "modelo": "<p><b>Name.</b> Reducing quotation lead time at THN through ERP-assisted validation.</p><p><b>Sponsor.</b> Commercial Director.</p><p><b>Project manager.</b> Process Improvement Coordinator. Authority to convene Sales, Engineering and IT, to define the validation rules with the technical specialist and to spend the authorized budget. Changes that alter the margin require the sponsor's approval.</p><p><b>Justification.</b> The quotation process today runs with an average lead time of 14.25 h and a cycle efficiency of 9.29 %. 45 % of quotations are delivered after 24 h, which cuts conversion from 38 % to 27 % and represents $534,600 a year of lost margin. The recommended alternative has an NPV of $330,465 over four years and pays back in 24.5 months.</p><p><b>Objective.</b> Deliver 85 % of quotations in 8 working hours or less, no later than June 30, without raising the pricing error rate above the current 12 %.</p><p><b>Included scope.</b> The three product families with the highest quotation volume; the configuration of validation rules in the ERP; the migration of the validation history; training for Sales and Engineering; and measurement of the process during the two months after go-live.</p><p><b>Excluded scope.</b> Custom-manufactured products and standard-governed structural hardware, which keep mandatory human validation. Any change to the order process, to invoicing and to the customer portal is out. The ERP is not replaced and no additional staff is hired.</p><p><b>Deliverables.</b> A catalog of validation rules documented and approved by Engineering; configuration released in the ERP; validation history migrated; test plan executed; staff trained; a lead time and error rate dashboard in operation.</p><p><b>Stakeholders.</b> Commercial Director (response speed and conversion); Sales (stop waiting and stop redoing work); Engineering (stop repeating validations without losing technical control); IT (that the configuration be sustainable); industrial customers (getting their quotation the same day).</p><p><b>Milestones.</b> Validation rules approved by Engineering · Configuration released in the test environment · Pilot on one product family with human validation in parallel · Go-live on the three families · Closure with two months of stable measurement.</p><p><b>Authorized budget.</b> $680,000 of initial investment, plus $95,000 a year of operation.</p><p><b>Risks.</b> Badly configured rules that produce quotations based on the wrong criteria — mitigated with human validation in parallel during the pilot and a defined error threshold for scaling up. Resistance from the technical specialist, who may read the project as a threat to their job — mitigated by involving them as the author of the rules and redefining their role toward the new specifications, which is where their judgment does add value. An incomplete validation history — mitigated by narrowing the scope to the families with the best records.</p><p><b>Success criteria.</b> An average lead time below 8 h measured over a full month; 85 % of quotations delivered the same day; a pricing error rate equal to or lower than today's; and the dashboard running on data the ERP itself generates.</p><p><b>Assumptions and constraints.</b> It is assumed that the improvement recovers 80 % of the margin lost today and that the validation history is usable for the three families chosen. Constraints: no staff is hired, the ERP is not replaced, and operations cannot stop during the implementation.</p>"
  },
  {
   "id": "presentacion",
   "titulo": "The presentation to management",
   "objetivo": "Saying in five minutes what took you five weeks to understand.",
   "bloques": [
    {
     "tipo": "clave",
     "titulo": "The mistake that sinks good proposals",
     "cuerpo": "<p>Telling the story of the <b>analysis process</b> instead of the <b>result</b>. Management is not interested in how you got there: it is interested in what decision you need today and what happens if it is not made.</p>"
    },
    {
     "tipo": "tabla",
     "titulo": "What each counterpart cares about",
     "encabezados": [
      "Counterpart",
      "The question on their mind"
     ],
     "filas": [
      [
       "Commercial Director",
       "How many more orders do I close, and when?"
      ],
      [
       "Head of Finance",
       "How much does it cost, when does it pay back, and what happens if the assumption fails?"
      ],
      [
       "Head of Operations",
       "Does this break anything while it is being implemented?"
      ],
      [
       "IT",
       "Who maintains it when the project closes?"
      ]
     ]
    },
    {
     "tipo": "nota",
     "titulo": "The appendix rule",
     "cuerpo": "<p>All the technical detail —the three routes, the annuity factor, the sensitivity table— goes in appendices. Not in the body. You bring it out when someone asks, and then it is worth twice as much.</p>"
    }
   ],
   "campos": [
    {
     "id": "p1",
     "tipo": "texto",
     "lineas": 2,
     "minimoPalabras": 15,
     "etiqueta": "1 · The problem with magnitude, in 30 seconds",
     "ayuda": "One sentence. With the figure that hurts the most."
    },
    {
     "id": "p2",
     "tipo": "texto",
     "lineas": 3,
     "minimoPalabras": 20,
     "etiqueta": "2 · What we found: two or three findings with their data"
    },
    {
     "id": "p3",
     "tipo": "texto",
     "lineas": 2,
     "minimoPalabras": 15,
     "etiqueta": "3 · What we propose, in a single idea"
    },
    {
     "id": "p4",
     "tipo": "texto",
     "lineas": 3,
     "minimoPalabras": 20,
     "etiqueta": "4 · How much it improves: the same indicators, before and after",
     "ayuda": "Use the same indicators you used for the AS-IS. Switching metrics halfway through the presentation destroys your credibility."
    },
    {
     "id": "p5",
     "tipo": "texto",
     "lineas": 2,
     "minimoPalabras": 15,
     "etiqueta": "5 · How much it costs and when it pays back"
    },
    {
     "id": "p6",
     "tipo": "texto",
     "lineas": 3,
     "minimoPalabras": 20,
     "etiqueta": "6 · What risks it has and how they are mitigated"
    },
    {
     "id": "p7",
     "tipo": "texto",
     "lineas": 2,
     "minimoPalabras": 12,
     "etiqueta": "7 · <b>What decision is needed today</b>",
     "ayuda": "Explicit. “Authorize $680,000 and the start of the pilot in March”, not “we look forward to your feedback”."
    },
    {
     "id": "anexos",
     "tipo": "texto",
     "lineas": 2,
     "minimoPalabras": 10,
     "etiqueta": "Appendices you would bring ready"
    }
   ],
   "rubrica": [
    "Point 1 opens with a <b>figure</b>, not with a description of the company.",
    "The indicators in point 4 are the same ones that were measured in the AS-IS.",
    "Point 5 states investment, return and horizon — all three.",
    "Point 6 includes the risk that the recovery assumption fails.",
    "Point 7 asks for a concrete decision, with an amount and a date.",
    "Nothing in the body repeats what is already in the appendices."
   ],
   "modelo": "<p><b>1.</b> We are letting $534,600 of margin a year go because almost half of our quotations go out after 24 hours and the customer has already bought from someone else.</p><p><b>2.</b> Three findings. The process works 79 minutes and takes 14 hours: 91 % of the time the quotation is waiting. The queue is at a single point, technical validation, which receives 35 % more work than it can process. And two out of every three validations are for products we had already validated before.</p><p><b>3.</b> Let the ERP resolve the validations we have already done, and let Engineering see only what is genuinely new.</p><p><b>4.</b> Lead time from 14.25 h to under 8 h. Quotations delivered the same day, from 55 % to 85 %. Process capacity from 13.3 to 24.3 quotations per day, against a demand of 18. The pricing error rate must not rise above the current 12 %.</p><p><b>5.</b> $680,000 of investment and $95,000 a year of operation. It pays back in 24.5 months, with an NPV of $330,465 and an IRR of 33.5 % over four years.</p><p><b>6.</b> Three risks. Configuring the rules badly and quoting on the wrong criteria: we start with human validation in parallel during the pilot. The technical specialist reading it as a threat: they write the rules and their role moves toward the new specifications. And the underlying assumption: we estimate recovering 80 % of the lost margin; even recovering only 60 % the project is still profitable, and that is the point at which hiring someone would no longer be.</p><p><b>7.</b> We need authorization for $680,000 and the start of the pilot in the standard fasteners family on the first day of March.</p><p><b>Appendices.</b> The three routes with their times and the CT calculation; the capacity detail by resource; the NPV sensitivity table between 50 % and 80 % recovery; and the preliminary catalog of validation rules by family.</p>"
  }
 ]
}
);
