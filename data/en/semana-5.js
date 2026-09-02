/* Generado por herramientas/cadenas.js — no editar a mano la estructura.
   Para corregir una traducción: edita herramientas/traduccion/semana-5.json
   y vuelve a ejecutar:  node herramientas/cadenas.js inyectar semana-5 */
EA.registrarSemanaEn(
{
 "id": 5,
 "estado": "publicada",
 "titulo": "From the business case to operation",
 "subtitulo": "Discover the need, justify it with money, present it to management and roll it out without it falling apart.",
 "sesiones": 4,
 "objetivos": [
  "Apply information-gathering techniques to capture requirements backed by evidence.",
  "Use Design Thinking and the concept of pain point to devise user-centered solutions.",
  "Classify activities into VA, NNVA and NVA and explain the value chain.",
  "Recognize the improvement philosophies: 5S, Just in Time, Kaizen, Kanban, Poka-Yoke, Six Sigma and ISO 9000.",
  "Perform a technical, operational and economic feasibility analysis.",
  "Calculate costing, break-even point, ROI, payback period, NPV and IRR to justify a proposal.",
  "Explain ERP-driven redesign and the role of simulation with a computational tool.",
  "Present the target situation to management at the right level and in the right language.",
  "Plan the rollout: change management, go-live, continuous improvement and BPM maturity."
 ],
 "dias": [
  {
   "id": "s1",
   "nombre": "Session 1",
   "tema": "Discovery, requirements and value",
   "proposito": "Before you propose, you have to understand. How you gather information with evidence, how you identify what really hurts the user, and how you separate value from waste.",
   "bloques": [
    {
     "tipo": "tabla",
     "titulo": "Information-gathering techniques",
     "encabezados": [
      "Technical",
      "When it fits",
      "Risk it carries"
     ],
     "filas": [
      [
       "<b>Interview</b>",
       "Explore the process with someone who knows it in depth",
       "You get what the person <i>believes</i> they do"
      ],
      [
       "<b>Direct observation</b> (<i>gemba</i>)",
       "See the real operation where it happens",
       "The person observed changes their behavior"
      ],
      [
       "<b>Workshop</b>",
       "Align several areas and resolve contradictions live",
       "The most senior person imposes their version"
      ],
      [
       "<b>Survey</b>",
       "Cover many people or sites in little time",
       "Little depth; bias from whoever answers"
      ],
      [
       "<b>Document analysis</b>",
       "Policies, manuals, contracts, regulation",
       "Documents what is prescribed, not what is real"
      ],
      [
       "<b>Data and log analysis</b>",
       "Measure real times, volumes and variants",
       "Requires data quality and access to the data"
      ],
      [
       "<b>Process mining</b>",
       "Reconstruct the real process from the ERP",
       "Needs complete, timestamped records"
      ],
      [
       "<b>Shadowing</b>",
       "Accompany a user through their full working day",
       "Consumes a lot of the analyst's time"
      ],
      [
       "<b>Prototype / mockup</b>",
       "Validate an idea before building it",
       "Can create an expectation of immediate delivery"
      ]
     ]
    },
    {
     "tipo": "clave",
     "titulo": "The triangulation rule",
     "cuerpo": "<p>Never base a diagnosis on a single source. <b>Interview + observation + data</b> is the minimum you can defend: the interview gives you the why, the observation gives you the how, and the data gives you the magnitude.</p><p>When the three agree, you have a finding. When they do not agree, you have something even more valuable: you have found out where the organization does not know what it does.</p>"
    },
    {
     "tipo": "defs",
     "titulo": "Pain point and customer need",
     "items": [
      {
       "termino": "Pain point",
       "definicion": "A specific point where the process costs the user time, effort, money or certainty. You state it with evidence: “the supplier calls three times to ask for the status because they have no visibility”."
      },
      {
       "termino": "Symptom versus cause",
       "definicion": "“The system is slow” is a symptom. “The same data is entered three times because the systems are not integrated” is a cause. Only the cause can be redesigned."
      },
      {
       "termino": "Customer need",
       "definicion": "The outcome the customer expects, expressed in <b>their</b> terms and measured by <b>their</b> criterion, not by the area's internal indicator."
      },
      {
       "termino": "Voice of the customer (VOC)",
       "definicion": "A structured collection of what the customer asks for, from which you derive the requirements and the acceptance criteria."
      }
     ]
    },
    {
     "tipo": "pasos",
     "titulo": "Design Thinking applied to processes",
     "items": [
      "<b>Empathize:</b> observe and interview whoever lives the process; build the user persona.",
      "<b>Define:</b> state the problem from the user's perspective, not from the area's.",
      "<b>Ideate:</b> generate many alternatives without filtering them yet; challenge conventional thinking.",
      "<b>Prototype:</b> make the idea tangible cheaply — a mockup, a paper flow, a bounded pilot.",
      "<b>Test:</b> put it in front of the real user, learn, and go back to whichever step applies."
     ]
    },
    {
     "tipo": "nota",
     "titulo": "Creative ideation: the question that unlocks",
     "cuerpo": "<p>“<b>Why does this area have to be involved at all?</b>” Questioning the existence of each activity —not its speed— is what produces order-of-magnitude alternatives. It is the same question that turned the vacation request into an automatic approval.</p><p>Rule of the ideation workshop: <b>generate without judging</b>. Evaluating and generating at the same time kills the uncomfortable ideas, which are usually the good ones.</p>"
    },
    {
     "tipo": "texto",
     "titulo": "Value chain",
     "cuerpo": "<p>The <b>value chain</b> breaks the company down into the activities that create value for the customer and the ones that support them. The <b>primary</b> ones touch the product or service directly: inbound logistics, operations, outbound logistics, marketing and sales, and service. The <b>support</b> ones enable them: firm infrastructure, human resources, technology development and procurement.</p><p>It serves two purposes in architecture: locating <b>where the process you are analyzing lives</b> inside the business, and telling which capabilities are differentiating —and deserve investment— from which are support capabilities that could be standardized or outsourced.</p>"
    },
    {
     "tipo": "defs",
     "titulo": "Lean thinking: VA, NNVA and NVA",
     "items": [
      {
       "termino": "VA — Value Added",
       "definicion": "It transforms the product or service, the customer recognizes it and is willing to pay for it, and it is done right the first time."
      },
      {
       "termino": "NNVA — Necessary Non Value Added",
       "definicion": "It adds no value for the customer, but it is <b>necessary</b>: required by a standard, a law, a contract or by internal control. You do not eliminate it; you optimize it."
      },
      {
       "termino": "NVA — Non Value Added",
       "definicion": "Pure waste: waiting, rework, duplicate data entry, transfers, redundant inspection, overprocessing. You eliminate it."
      },
      {
       "termino": "Value efficiency",
       "definicion": "VA / total time. It is a more demanding indicator than cycle efficiency, because it separates the necessary-non-value from the real value."
      }
     ]
    },
    {
     "tipo": "tabla",
     "titulo": "Classification example on a garment line",
     "encabezados": [
      "Activity",
      "Minutes",
      "Type"
     ],
     "filas": [
      [
       "Cut fabric",
       "12",
       "VA"
      ],
      [
       "Sew",
       "35",
       "VA"
      ],
      [
       "Washing and finishing",
       "18",
       "VA"
      ],
      [
       "Quality inspection required by standard",
       "6",
       "NNVA"
      ],
      [
       "Tax record of the batch",
       "4",
       "NNVA"
      ],
      [
       "Wait between stations",
       "40",
       "NVA"
      ],
      [
       "Transfer to the warehouse",
       "9",
       "NVA"
      ],
      [
       "Data re-entry in Excel",
       "6",
       "NVA"
      ],
      [
       "<b>Total</b>",
       "<b>130</b>",
       "VA 50 % · NNVA 7.7 % · NVA 42.3 %"
      ]
     ]
    },
    {
     "tipo": "clave",
     "titulo": "How to read it",
     "cuerpo": "<p>42 % of the time is pure waste and you can attack it right away. The 7.7 % of NNVA is not eliminated, but you can automate the tax record and inspect by sampling if the standard allows it. <b>Telling NNVA apart from NVA avoids two expensive mistakes:</b> eliminating a mandatory control, or resigning yourself to waste believing it was mandatory.</p>"
    },
    {
     "tipo": "defs",
     "titulo": "Improvement philosophies worth placing",
     "items": [
      {
       "termino": "5S",
       "definicion": "Seiri (sort), Seiton (set in order), Seiso (shine), Seiketsu (standardize), Shitsuke (sustain). The basis of any improvement: without order, nothing else holds up."
      },
      {
       "termino": "JIT — Just in Time",
       "definicion": "Produce and supply only what is needed, when it is needed. It reduces inventory and exposes the problems the inventory was hiding."
      },
      {
       "termino": "Kaizen",
       "definicion": "Incremental continuous improvement with the participation of whoever executes the process."
      },
      {
       "termino": "Kanban",
       "definicion": "A visual signal that <b>limits work in process</b> and triggers replenishment. Its mathematical basis is Little's Law: less WIP, less lead time."
      },
      {
       "termino": "Poka-Yoke",
       "definicion": "An error-proof device or design: it makes the error <b>impossible</b> to commit, instead of detecting it afterwards. A mandatory field with validation is a digital poka-yoke."
      },
      {
       "termino": "Six Sigma",
       "definicion": "Statistically based reduction of variation and defects, structured in DMAIC."
      },
      {
       "termino": "ISO 9000 / 9001",
       "definicion": "Family of quality management standards; 9001 is the certifiable one. It provides the documentation and audit framework that improvement rests on."
      },
      {
       "termino": "Lean manufacturing",
       "definicion": "The umbrella that integrates 5S, JIT, Kanban, Poka-Yoke and Kaizen around one objective: deliver value by eliminating waste."
      }
     ]
    },
    {
     "tipo": "nota",
     "titulo": "Poka-Yoke versus inspection",
     "cuerpo": "<p>Inspecting detects the error <b>after</b> it is made and costs time every single time. A poka-yoke prevents it <b>beforehand</b> and costs only once, when you design it. In terms of cycle time analysis: inspection is permanent NNVA; the poka-yoke lowers the rejection rate <b>r</b> and with it the whole rework loop.</p>"
    }
   ]
  },
  {
   "id": "s2",
   "nombre": "Session 2",
   "tema": "Feasibility and economic justification",
   "proposito": "Turn the proposal into money. An improvement you cannot express in cost, time or capacity does not get approved, and rightly so.",
   "bloques": [
    {
     "tipo": "defs",
     "titulo": "The three feasibilities",
     "items": [
      {
       "termino": "Technical feasibility",
       "definicion": "Can it be built with the available technology, infrastructure and capabilities? Do the systems integrate? Do the network and security support it? Is there talent to operate it?"
      },
      {
       "termino": "Operational feasibility",
       "definicion": "Will the organization actually use it? Will people accept the change? Do the roles and competencies exist? Is it compatible with the culture, the shifts and the real workload?"
      },
      {
       "termino": "Economic feasibility",
       "definicion": "Do the benefits outweigh the costs over a reasonable horizon? This is where ROI, payback, NPV and IRR come in."
      },
      {
       "termino": "Legal and regulatory feasibility",
       "definicion": "An indispensable complement: does it comply with tax, labor and data protection regulation and with the standards of the sector?"
      }
     ]
    },
    {
     "tipo": "clave",
     "titulo": "The one that kills the most projects",
     "cuerpo": "<p>It is not the technical one: almost everything is technically possible. It is the <b>operational</b> one. A flawless system that nobody uses has zero benefit, and the cost has already been paid. That is why change management is not an ornament at the end: it is an assumption of the business case.</p>"
    },
    {
     "tipo": "defs",
     "titulo": "Costing concepts",
     "items": [
      {
       "termino": "Unit variable cost",
       "definicion": "What it costs to produce one more unit: materials, supplies, contract manufacturing, direct energy."
      },
      {
       "termino": "Fixed costs",
       "definicion": "They do not change with volume in the short term: rent, administrative payroll, licenses, depreciation."
      },
      {
       "termino": "Contribution margin",
       "definicion": "Price − unit variable cost. It is what each unit contributes to cover the fixed costs and then generate profit."
      },
      {
       "termino": "Break-even point",
       "definicion": "Fixed costs / contribution margin. The volume at which profit is zero."
      },
      {
       "termino": "Cost per transaction",
       "definicion": "Total cost of running the process divided by the completed jobs. The indicator management understands immediately."
      },
      {
       "termino": "Activity-based costing (ABC)",
       "definicion": "It assigns cost to the activities and from there to the product, instead of spreading it evenly. It makes visible which activity is expensive."
      }
     ]
    },
    {
     "tipo": "clave",
     "titulo": "Why the contribution margin rules",
     "cuerpo": "<p>A process improvement that lowers the unit variable cost <b>raises the contribution margin</b>, and that moves two things at once: it lowers the break-even point and it raises the profit of every unit sold above it. It is the exact translation between “I cut 20 minutes out of the process” and “I made money”.</p>"
    },
    {
     "tipo": "defs",
     "titulo": "Investment appraisal methods",
     "items": [
      {
       "termino": "ROI — Return on investment",
       "definicion": "(Benefit − Investment) / Investment. Simple and easy to communicate, but it <b>ignores the timing</b> of the cash flows."
      },
      {
       "termino": "Payback period",
       "definicion": "How long the investment takes to pay for itself. It measures risk and liquidity, not profitability; nor does it consider what happens afterwards."
      },
      {
       "termino": "NPV — Net Present Value",
       "definicion": "Sum of the discounted future cash flows minus the investment. <b>Criterion: if NPV &gt; 0, the project creates value</b> at the required rate."
      },
      {
       "termino": "IRR — Internal Rate of Return",
       "definicion": "The rate at which NPV becomes zero. It is compared against the minimum required rate (the hurdle rate or the cost of capital)."
      },
      {
       "termino": "Profitability index",
       "definicion": "Present value of the cash flows / investment. Useful for ranking projects when the budget is limited."
      },
      {
       "termino": "Cost-benefit analysis",
       "definicion": "A structured comparison of every cost and benefit, including the non-monetary ones, which are declared separately instead of inventing a price for them."
      }
     ]
    },
    {
     "tipo": "clave",
     "titulo": "NPV, in one sentence you can say out loud",
     "cuerpo": "<p>Net Present Value answers a single question: <b>“if we do this project, how much more is the company worth today?”</b></p><p>An NPV of <b>$166,807</b> does not mean you are going to have that amount in the bank. It means that, after recovering the investment <i>and</i> paying what it costs to keep that money tied up there instead of somewhere else, the project still has $166,807 of value left over. It is what the project <b>adds</b>, not what it produces.</p>"
    },
    {
     "tipo": "texto",
     "titulo": "Why $450,000 in year 4 is not worth $450,000 today",
     "cuerpo": "<p>This is where almost everyone gets lost, and it is not the formula: it is the assumption underneath it. A peso that arrives four years from now is worth less than a peso that arrives today, and <b>that is not mainly because of inflation</b>.</p><p>It is because of <b>opportunity cost</b>. If the company has that money today, it can do something else with it: pay down debt, buy inventory, open a branch. When it puts the money into your project, it gives all of that up. The <b>discount rate</b> —the 12 % in this exercise— is the price of giving it up: the least the company demands to earn for it to be worth tying up its money instead of using it on its next best alternative.</p><p>And there is a second piece: <b>risk</b>. The year 4 saving is a promise; today's money is a fact. Discounting is the mathematical way of saying “I am counting on this, but not all the way”.</p>"
    },
    {
     "tipo": "tabla",
     "titulo": "The same saving, year by year, brought to today",
     "encabezados": [
      "Year",
      "Saving",
      "Discount factor",
      "What it is worth today",
      "Retained"
     ],
     "filas": [
      [
       "1",
       "$450,000",
       "1 / 1.12<sup>1</sup> = 0.892857",
       "<b>$401,786</b>",
       "89.3 %"
      ],
      [
       "2",
       "$450,000",
       "1 / 1.12<sup>2</sup> = 0.797194",
       "<b>$358,737</b>",
       "79.7 %"
      ],
      [
       "3",
       "$450,000",
       "1 / 1.12<sup>3</sup> = 0.711780",
       "<b>$320,301</b>",
       "71.2 %"
      ],
      [
       "4",
       "$450,000",
       "1 / 1.12<sup>4</sup> = 0.635518",
       "<b>$285,983</b>",
       "63.6 %"
      ],
      [
       "<b>Sum</b>",
       "<b>$1,800,000</b>",
       "—",
       "<b>$1,366,807</b>",
       "—"
      ],
      [
       "<b>Less the investment</b>",
       "",
       "",
       "<b>− $1,200,000</b>",
       ""
      ],
      [
       "<b>NPV</b>",
       "",
       "",
       "<b>$166,807</b>",
       ""
      ]
     ]
    },
    {
     "tipo": "svg",
     "titulo": "What discounting takes off each year",
     "svg": "<svg viewBox=\"0 0 700 240\" role=\"img\" aria-label=\"Cuatro barras que se encogen conforme el ahorro está más lejos en el tiempo\"><text class=\"rotulo-sm\" x=\"12\" y=\"20\">$450,000 nominal every year</text><rect class=\"caja-alt\" x=\"90\"  y=\"40\" width=\"92\" height=\"120\" rx=\"4\"/><rect class=\"caja-alt\" x=\"238\" y=\"40\" width=\"92\" height=\"120\" rx=\"4\"/><rect class=\"caja-alt\" x=\"386\" y=\"40\" width=\"92\" height=\"120\" rx=\"4\"/><rect class=\"caja-alt\" x=\"534\" y=\"40\" width=\"92\" height=\"120\" rx=\"4\"/><rect class=\"caja-viva\" x=\"90\"  y=\"53\"  width=\"92\" height=\"107\" rx=\"4\"/><rect class=\"caja-viva\" x=\"238\" y=\"64\"  width=\"92\" height=\"96\"  rx=\"4\"/><rect class=\"caja-viva\" x=\"386\" y=\"75\"  width=\"92\" height=\"85\"  rx=\"4\"/><rect class=\"caja-viva\" x=\"534\" y=\"84\"  width=\"92\" height=\"76\"  rx=\"4\"/><text class=\"rotulo-viva\" x=\"136\" y=\"113\" text-anchor=\"middle\">401,786</text><text class=\"rotulo-viva\" x=\"284\" y=\"118\" text-anchor=\"middle\">358,737</text><text class=\"rotulo-viva\" x=\"432\" y=\"124\" text-anchor=\"middle\">320,301</text><text class=\"rotulo-viva\" x=\"580\" y=\"128\" text-anchor=\"middle\">285,983</text><text class=\"rotulo\" x=\"136\" y=\"180\" text-anchor=\"middle\">Year 1</text><text class=\"rotulo\" x=\"284\" y=\"180\" text-anchor=\"middle\">Year 2</text><text class=\"rotulo\" x=\"432\" y=\"180\" text-anchor=\"middle\">Year 3</text><text class=\"rotulo\" x=\"580\" y=\"180\" text-anchor=\"middle\">Year 4</text><text class=\"rotulo-sm\" x=\"136\" y=\"200\" text-anchor=\"middle\">89.3 %</text><text class=\"rotulo-sm\" x=\"284\" y=\"200\" text-anchor=\"middle\">79.7 %</text><text class=\"rotulo-sm\" x=\"432\" y=\"200\" text-anchor=\"middle\">71.2 %</text><text class=\"rotulo-sm\" x=\"580\" y=\"200\" text-anchor=\"middle\">63.6 %</text><text class=\"rotulo-sm\" x=\"12\" y=\"228\">The faint block is what discounting takes: $433,193 in all.</text></svg>",
     "pie": "Undiscounted, the project would look like it leaves $600,000. Discounted, it leaves $166,807. That difference is not an accounting trick: it is the price of waiting."
    },
    {
     "tipo": "defs",
     "titulo": "The three decisions behind every NPV",
     "items": [
      {
       "termino": "The cash flow",
       "definicion": "How much comes in or is saved each year, and <b>when</b>. It is the part you calculated with the process redesign, and the part that gets argued about most: if the saving is an assumption, say so."
      },
      {
       "termino": "The rate",
       "definicion": "How much the company demands for tying up its money. <b>You do not make it up</b>: Finance gives it to you. If they do not, ask for it; using a rate you picked at random invalidates the whole calculation."
      },
      {
       "termino": "The horizon",
       "definicion": "How many years you count. Stretching it makes any project look better artificially, so you justify it with the real useful life of the solution, not with the length you need for the result to come out positive."
      }
     ]
    },
    {
     "tipo": "nota",
     "titulo": "What NPV does not tell you",
     "cuerpo": "<ul><li><b>It does not tell you when you get your money back.</b> A high NPV can take years to return the first peso: that is what the payback period is for.</li><li><b>It does not tell you how fragile it is.</b> Two projects with the same NPV can have opposite sensitivities. That is why sensitivity analysis always goes with it.</li><li><b>It does not compare sizes.</b> An NPV of $166,807 on an investment of $1.2 million is not the same as on one of $200,000. To rank projects when the budget is limited you use the profitability index.</li><li><b>It does not include what you did not quantify.</b> If the project also reduces a regulatory risk, that is not in the number: you declare it separately, you do not invent a price for it.</li></ul>"
    },
    {
     "tipo": "clave",
     "titulo": "How to explain it in your presentation, without being a finance person",
     "cuerpo": "<p>Management does not want a finance class: it wants to know whether the project is worth doing. Three sentences are enough.</p><p><b>1 · The figure and what it means.</b> “The project has a net present value of $166,807. That means that, after recovering the one point two million we invested and covering the 12 % the company demands for its money, it still leaves us $166,807 of value.”</p><p><b>2 · Why it is discounted.</b> “I brought the savings to today's value, because a peso that arrives in four years is not worth the same as one we have now. Undiscounted it would look like it leaves $600,000; the honest number is $166,807.”</p><p><b>3 · How safe it is.</b> “The internal rate of return is 18.45 %, against the 12 % we demand: there is room. And even if the saving came in 20 % below what we estimated, the project is still worth doing.”</p><p class=\"sub\" style=\"margin-top:.8rem\"><b>And what you must not say:</b> “the NPV is positive, so it is a good idea”. It is true and it explains nothing. If someone asks “positive compared to what?” and you cannot answer, the number stops being worth anything.</p>"
    },
    {
     "tipo": "texto",
     "titulo": "The other numbers you will have to defend",
     "cuerpo": "<p>NPV is the hardest one to explain, but it is not the only one they will ask you about. A complete business case rests on seven or eight figures, and each one answers a different question that someone in the room already has in their head. The table below is so you walk in with the sentence ready.</p>"
    },
    {
     "tipo": "tabla",
     "titulo": "A dictionary for talking to management",
     "encabezados": [
      "Term",
      "What it is, in one sentence",
      "How to say it in the presentation"
     ],
     "filas": [
      [
       "<b>Initial investment</b>",
       "What you have to lay out once, up front, for the project to exist.",
       "“We are asking for $1,200,000, once.”"
      ],
      [
       "<b>Operating cost</b>",
       "What it costs every year to keep it alive: licenses, support, staff.",
       "“Plus $95,000 a year to keep it running, and that is already netted out of the benefit.”"
      ],
      [
       "<b>Annual net cash flow</b>",
       "The year's benefit minus what it cost to run. It is what actually comes in.",
       "“Each year it leaves us $332,680 net, with the operating cost already taken out.”"
      ],
      [
       "<b>Discount rate</b><br><span style=\"font-size:.82em;color:var(--muted)\">or hurdle rate</span>",
       "The minimum the company demands to earn for tying up its money. Finance sets it, not you.",
       "“We used the 12 % Finance gave us, not a rate we picked ourselves.”"
      ],
      [
       "<b>Opportunity cost</b>",
       "What the company gives up earning on its next best alternative by putting the money here.",
       "“That 12 % is what the money would earn somewhere else; the project has to beat it.”"
      ],
      [
       "<b>NPV</b><br><span style=\"font-size:.82em;color:var(--muted)\">Net Present Value</span>",
       "How much more the company is worth today if it does the project, with the cost of money already discounted.",
       "“It leaves us $166,807 of value, after paying back the investment and covering the 12 %.”"
      ],
      [
       "<b>IRR</b><br><span style=\"font-size:.82em;color:var(--muted)\">Internal Rate of Return</span>",
       "The return the project itself produces. You compare it against the rate the company demands.",
       "“It returns 18.45 % against the 12 % we demand: that is 6 points of headroom.”"
      ],
      [
       "<b>Payback period</b><br><span style=\"font-size:.82em;color:var(--muted)\">payback</span>",
       "How long it takes to give back what you put in. It measures risk and liquidity, not profitability.",
       "“We get the investment back in 2.67 years; the project lasts four.”"
      ],
      [
       "<b>ROI</b>",
       "How much we make for every peso invested, without taking into account when it arrives.",
       "“The cumulative return is 50 %, though NPV is the number that decides.”"
      ],
      [
       "<b>Contribution margin</b>",
       "What each unit sold leaves after variable cost. It is what pays the fixed costs.",
       "“Every pair leaves $250 to cover fixed costs; the improvement takes that to $270.”"
      ],
      [
       "<b>Break-even point</b>",
       "How many units you have to sell not to lose money.",
       "“Today we need to sell 1,000 pairs a month; with the improvement, 926.”"
      ],
      [
       "<b>Cost of doing nothing</b>",
       "What it costs each year to stay as we are. The alternative you always have to put on the table.",
       "“Staying as we are costs us $844,704 a year.”"
      ],
      [
       "<b>Sensitivity analysis</b>",
       "What happens to the result if the assumption fails. It measures how fragile the case is.",
       "“Even if the saving came in 12.2 % below our estimate, the project is still worth doing.”"
      ]
     ]
    },
    {
     "tipo": "nota",
     "titulo": "The five mistakes that sink a financial presentation",
     "cuerpo": "<ol><li><b>Presenting the NPV without the rate.</b> “Positive” means nothing unless you say <i>positive compared to what</i>. The rate is part of the figure.</li><li><b>Confusing saving with profit.</b> A saving of $450,000 is not profit: you have to subtract what it costs to run the solution.</li><li><b>Using payback as if it measured profitability.</b> It tells you when you get your money back, not how much you make. A project can pay back fast and still destroy value.</li><li><b>Stretching the horizon until the NPV comes out positive.</b> If you need seven years to make it add up, the horizon is not the problem.</li><li><b>Not declaring your assumptions.</b> The most fragile number in any business case is the one nobody questioned because nobody mentioned it.</li></ol>"
    },
    {
     "tipo": "clave",
     "titulo": "The order you say them in",
     "cuerpo": "<p>Do not just dump them as a list. They have a natural sequence, and it is the one that answers the questions in the order they come up in the head of whoever is deciding:</p><p><b>1.</b> What does it cost us to stay as we are? → <i>cost of doing nothing</i><br><b>2.</b> What do we have to put in? → <i>initial investment and operating cost</i><br><b>3.</b> How much comes back, and when? → <i>net cash flow and payback period</i><br><b>4.</b> Is it worth it against our alternatives? → <i>NPV and IRR</i><br><b>5.</b> How safe is this? → <i>sensitivity analysis</i></p><p>If you get to point 5 and they are still listening, the case is won.</p>"
    },
    {
     "tipo": "tabla",
     "titulo": "Reference formulas",
     "encabezados": [
      "Indicator",
      "Formula",
      "How to read it"
     ],
     "filas": [
      [
       "Contribution margin",
       "<code>CM = Price − Unit variable cost</code>",
       "What each unit contributes to cover fixed costs"
      ],
      [
       "Break-even point",
       "<code>BEP = Fixed costs / CM</code>",
       "Volume at which profit is zero"
      ],
      [
       "Return on investment",
       "<code>ROI = (Total benefit − Investment) / Investment</code>",
       "How much you earn for every peso invested"
      ],
      [
       "Payback period",
       "<code>PB = Investment / Cash flow per period</code>",
       "How long it takes you to recover what you invested"
      ],
      [
       "Annuity factor",
       "<code>AF = [1 − (1 + k)<sup>−n</sup>] / k</code>",
       "Shortcut for discounting <i>n</i> equal cash flows at rate <i>k</i>"
      ],
      [
       "Net Present Value",
       "<code>NPV = Cash flow × AF − Investment</code>",
       "If it is greater than zero, the project creates value"
      ],
      [
       "NPV, general form",
       "<code>NPV = Σ [ F<sub>t</sub> / (1 + k)<sup>t</sup> ] − Investment</code>",
       "When the cash flows differ from one another"
      ],
      [
       "Internal Rate of Return",
       "<code>IRR = the rate k that makes NPV = 0</code>",
       "It is compared against the required hurdle rate"
      ],
      [
       "Profitability index",
       "<code>PI = (Cash flow × AF) / Investment</code>",
       "To prioritize with a limited budget"
      ]
     ]
    },
    {
     "tipo": "tabla",
     "titulo": "Which method to use and what for",
     "encabezados": [
      "Method",
      "Answers",
      "Limitation"
     ],
     "filas": [
      [
       "ROI",
       "How much do you earn for every peso invested?",
       "It ignores the time value of money"
      ],
      [
       "Payback",
       "How long does it take you to recover?",
       "It ignores everything that happens after you recover"
      ],
      [
       "NPV",
       "Does it create value at the rate you require?",
       "Sensitive to the discount rate assumption"
      ],
      [
       "IRR",
       "What implicit return does it have?",
       "It can give multiple results with irregular cash flows"
      ],
      [
       "Profitability index",
       "Which one do you prioritize with a limited budget?",
       "It does not tell you the absolute size of the benefit"
      ]
     ]
    },
    {
     "tipo": "nota",
     "titulo": "A practical rule for the deliverable",
     "cuerpo": "<p>Present <b>at least NPV and payback together</b>. The NPV tells you whether it creates value; the payback tells you how exposed you are in the meantime. A project with a good NPV and a five-year payback can be unacceptable for a company with liquidity problems.</p><p>And always state the <b>discount rate</b> you used and where it came from. Changing it is the easiest way to manipulate an NPV.</p>"
    },
    {
     "tipo": "clave",
     "titulo": "Benefits of alternative strategies",
     "cuerpo": "<p>Never present a single option: present <b>two or three alternatives evaluated with the same criteria</b>, including <i>doing nothing</i>. The cost of doing nothing is almost never zero — it is the waste you keep paying for every month — and working it out is usually the most compelling argument in the whole proposal.</p>"
    }
   ]
  },
  {
   "id": "s3",
   "nombre": "Session 3",
   "tema": "Redesign with an ERP, simulation and presenting to management",
   "proposito": "Three topics that close out the design: when the redesign is driven by an enterprise system, how you test the proposal before investing, and how you present it to whoever decides.",
   "bloques": [
    {
     "tipo": "texto",
     "titulo": "ERP-driven redesign",
     "cuerpo": "<p>When a company implements an ERP, process redesign stops being free: the system brings <b>reference processes</b> —the product's so-called best practices— and adapting to them is cheaper than modifying them.</p><p>That opens the most important decision of the project, and you have to make it process by process, not globally.</p>"
    },
    {
     "tipo": "tabla",
     "titulo": "The two stances toward the ERP standard process",
     "encabezados": [
      "",
      "Adopt the standard",
      "Customize the system"
     ],
     "filas": [
      [
       "Implementation cost",
       "Lower",
       "Higher"
      ],
      [
       "Cost of each future upgrade",
       "Low",
       "High and recurring"
      ],
      [
       "Speed",
       "Higher",
       "Lower"
      ],
      [
       "Fit to the current operation",
       "Forces you to change the process",
       "Keeps the current process"
      ],
      [
       "Risk",
       "Resistance to change",
       "Technical debt and vendor dependence"
      ],
      [
       "When it fits",
       "Support processes and industry standards",
       "Only where the process is a real source of differentiation"
      ]
     ]
    },
    {
     "tipo": "clave",
     "titulo": "The criterion, in one sentence",
     "cuerpo": "<p><b>Customize only where the process differentiates you in the market. Everywhere else, adopt the standard.</b></p><p>This is where the value chain and the portfolio classification stop being theory: they are exactly the criterion that separates the differentiating from the commodity.</p>"
    },
    {
     "tipo": "nota",
     "titulo": "The classic mistake",
     "cuerpo": "<p>Configuring the ERP to replicate the current process with all its bad habits. The company pays for the full implementation, keeps the 23 hours of waiting, and on top of that is tied to customizations that make every upgrade more expensive for the next ten years.</p>"
    },
    {
     "tipo": "texto",
     "titulo": "Simulation with a computational tool",
     "cuerpo": "<p>Analytical calculation delivers <b>averages</b>; simulation shows what happens with <b>variability</b>. It is the difference between “the average cycle time is 31 minutes” and “15 % of cases go over 4 hours”, which is what the customer actually perceives and complains about.</p>"
    },
    {
     "tipo": "tabla",
     "titulo": "What goes into and what comes out of a simulation",
     "encabezados": [
      "Model inputs",
      "Results it produces"
     ],
     "filas": [
      [
       "Process model (BPMN)",
       "Cycle time distribution, not just the average"
      ],
      [
       "Arrival distribution",
       "Queue length and queue time"
      ],
      [
       "Distribution of times per activity",
       "Utilization of each resource"
      ],
      [
       "Units of each resource and calendars",
       "Identification of the dynamic bottleneck"
      ],
      [
       "Route probabilities and rework rate",
       "Quantitative comparison between scenarios"
      ],
      [
       "Queue priority rules",
       "Sensitivity to changes in demand"
      ]
     ]
    },
    {
     "tipo": "pasos",
     "titulo": "How you run a simulation study",
     "items": [
      "Define the question it has to answer. Without a question, the simulation produces data and not decisions.",
      "Build the AS-IS model with the real times and volumes.",
      "<b>Validate it:</b> does the model reproduce what you observe in the operation? If not, the model is wrong and everything else is pointless.",
      "Define the TO-BE scenarios you are going to compare.",
      "Run it with enough replications for the results to be statistically stable.",
      "Compare scenarios with the same baseline indicators.",
      "Document assumptions and limitations along with the results."
     ]
    },
    {
     "tipo": "clave",
     "titulo": "The warning worth repeating",
     "cuerpo": "<p>A simulation built on a badly captured AS-IS produces results that are <b>precise and false</b>. The tool's decimal precision does not validate the input data. Validating the model against observed reality is not optional.</p>"
    },
    {
     "tipo": "texto",
     "titulo": "Testing and adjustment",
     "cuerpo": "<p>Before you release to the whole organization you test small and adjust. It is cheaper to find the error in one branch than in forty.</p>"
    },
    {
     "tipo": "lista",
     "titulo": "Testing sequence",
     "items": [
      "<b>Model test:</b> validate that the simulated AS-IS reproduces the real operation.",
      "<b>Functional test:</b> the flow does what it should, including the exception cases.",
      "<b>Integration test:</b> the systems communicate and the data arrives intact.",
      "<b>Load test:</b> the system and the infrastructure withstand the expected volume and the peak.",
      "<b>User acceptance test (UAT):</b> whoever executes the process confirms that it works for them.",
      "<b>Controlled pilot:</b> one plant, one branch or one type of work, with comparable metrics.",
      "<b>Adjustment:</b> tune rules, thresholds, screens and training with what you learned."
     ]
    },
    {
     "tipo": "clave",
     "titulo": "Presenting the target situation to management",
     "cuerpo": "<p>Management does not buy diagrams: it buys <b>results, risk and a decision</b>. The same architecture is presented differently to the CEO, the CFO, the CISO and the integration architect — it is the difference between <i>view</i> and <i>viewpoint</i> taken into the boardroom.</p>"
    },
    {
     "tipo": "pasos",
     "titulo": "Structure of the executive presentation",
     "items": [
      "<b>The problem with its magnitude</b> (30 seconds): “supplier registration takes 72 hours and costs MXN $88 thousand a year in rework”.",
      "<b>What we found</b>: two or three findings, with the data that backs them.",
      "<b>What we propose</b>: the target situation in a single image.",
      "<b>How much it improves</b>: the AS-IS / TO-BE table with the same indicators.",
      "<b>How much it costs and when it pays back</b>: investment, NPV, payback.",
      "<b>What risks it has and how they are mitigated</b>: including resistance to change.",
      "<b>What decision is needed today</b>: stated explicitly.",
      "<b>Appendices</b>: all the technical detail, for the questions that come up."
     ]
    },
    {
     "tipo": "tabla",
     "titulo": "What each counterpart cares about",
     "encabezados": [
      "Counterpart",
      "Cares about",
      "A statement that works"
     ],
     "filas": [
      [
       "CEO",
       "Value, risk, competitive position",
       "“We deliver to the customer in 8 hours instead of 72”"
      ],
      [
       "CFO",
       "Cost, ROI, cash flow, payback",
       "“MXN $1.1 M in net savings over 3 years, positive NPV, pays back in 13 months”"
      ],
      [
       "CIO",
       "Architecture, technical debt, portfolio",
       "“It retires 3 redundant systems and avoids a new integration”"
      ],
      [
       "CISO",
       "Risk, controls, compliance",
       "“It removes the handling of supplier data by email”"
      ],
      [
       "Operations director",
       "Workload, staffing, transition",
       "“It frees up 3 people for higher-value activities”"
      ],
      [
       "Solutions architect",
       "Interfaces, data, components",
       "“Portal + BPM + API to the ERP, a single master data record”"
      ]
     ]
    },
    {
     "tipo": "nota",
     "titulo": "Common mistakes when presenting",
     "cuerpo": "<p>Opening with the full BPMN diagram · talking about technology before results · presenting a single alternative · leaving out the cost of doing nothing · not saying what decision is needed · hiding the risks.</p><p>And the worst one: <b>changing indicators between the diagnosis and the proposal</b>. If you measured lead time in the AS-IS, measure lead time in the TO-BE. Changing the metric makes the improvement incomparable and destroys the credibility of the whole analysis.</p>"
    }
   ]
  },
  {
   "id": "s4",
   "nombre": "Session 4",
   "tema": "Implementation, operation and maturity",
   "proposito": "What separates a good proposal from a real improvement: managing change, going live without breaking the business, and sustaining the improvement over time.",
   "bloques": [
    {
     "tipo": "clave",
     "titulo": "Why well-designed projects fail",
     "cuerpo": "<p>Rarely because of the technology. They fail because <b>people kept working the way they always had</b>: the new system lives alongside the old Excel file, the rule is not enforced, the process gets skipped “because it's urgent”, and six months later the organization is back to its previous state with an expensive system on top.</p>"
    },
    {
     "tipo": "defs",
     "titulo": "Change management",
     "items": [
      {
       "termino": "What it is",
       "definicion": "The discipline of moving people and the organization from the current state to the desired one, addressing awareness, desire, knowledge, ability and reinforcement."
      },
      {
       "termino": "ADKAR",
       "definicion": "A per-person model: <b>A</b>wareness (knowing why), <b>D</b>esire (wanting it), <b>K</b>nowledge (knowing how), <b>A</b>bility (being able to do it), <b>R</b>einforcement (making it stick). If one link fails, the change fails."
      },
      {
       "termino": "Kotter",
       "definicion": "An organizational model in eight steps that starts by creating a sense of urgency and ends by anchoring the change in the culture."
      },
      {
       "termino": "Sponsor",
       "definicion": "The executive who answers for the change before the organization. Without visible, active sponsorship, no methodology makes up for it."
      },
      {
       "termino": "Resistance to change",
       "definicion": "It is not stubbornness: it is usually information. The person resisting sometimes knows an exception case the design did not consider. Listening to it improves the design."
      }
     ]
    },
    {
     "tipo": "lista",
     "titulo": "Concrete change management levers",
     "items": [
      "Communicate <b>the why</b> before the what, and in the sponsor's voice, not the project's.",
      "Involve users from the design stage on: someone who took part does not resist the same way.",
      "Identify <b>champions</b> in each area: peers who help and translate, not bosses who police.",
      "Train at the right moment — not so early that it is forgotten, not so late that it gets in the way.",
      "Adjust incentives and indicators: if the bonus still rewards the old behavior, the bonus wins.",
      "<b>Close the back door:</b> retire the old system or form. As long as it exists, it will be used.",
      "Stay with the operation through the first weeks (<i>hypercare</i>), not just on go-live day."
     ]
    },
    {
     "tipo": "tabla",
     "titulo": "Go-live strategies",
     "encabezados": [
      "Strategy",
      "What it involves",
      "When it fits",
      "Risk"
     ],
     "filas": [
      [
       "<b>Big bang</b>",
       "Everything changes on one date",
       "Tightly coupled processes; impossible to run in parallel",
       "High: if it fails, it fails completely"
      ],
      [
       "<b>Phased</b>",
       "Module by module or process by process",
       "Large, separable scope",
       "Temporary interfaces between the old and the new"
      ],
      [
       "<b>Pilot</b>",
       "One plant or branch first",
       "Many similar sites",
       "Delays the full benefit"
      ],
      [
       "<b>Parallel</b>",
       "Both systems run at once and are compared",
       "Critical, irreversible processes (payroll, invoicing)",
       "Double workload, expensive"
      ]
     ]
    },
    {
     "tipo": "pasos",
     "titulo": "Go-live",
     "items": [
      "<b>Agreed entry criteria:</b> what must be ready to authorize the start.",
      "<b>Data migration and validation:</b> the number one cause of failed go-lives.",
      "<b>Rollback plan:</b> what you do if you have to go back, and up to what point it is possible.",
      "<b>Change freeze</b> in the days beforehand.",
      "<b>Hypercare:</b> reinforced support through the first weeks, with a fast escalation path.",
      "<b>Early measurement:</b> the baseline indicators, from day one.",
      "<b>Handover to operations:</b> documentation, support training and a designated process owner.",
      "<b>Closure and benefits evaluation:</b> compare what was promised against what was obtained."
     ]
    },
    {
     "tipo": "nota",
     "titulo": "The step everyone skips",
     "cuerpo": "<p>The <b>benefits evaluation</b> afterwards. A project gets approved because it promised to bring lead time down from 72 to 8 hours, and nobody ever measures it again. Without that closure, the organization never learns to estimate and the next business case is worth less.</p>"
    },
    {
     "tipo": "clave",
     "titulo": "Continuous improvement: the process has an owner",
     "cuerpo": "<p>A process without a <b>process owner</b> degrades. The owner answers for its end-to-end performance —across departments—, reviews the indicators, authorizes changes and triggers improvement when the indicator drifts.</p><p>It is the link that turns a project that ended into a process that keeps improving.</p>"
    },
    {
     "tipo": "pasos",
     "titulo": "Continuous improvement cycle in operation",
     "items": [
      "Measure against the committed target.",
      "Detect the deviation and its cause.",
      "Prioritize by impact and effort.",
      "Implement the adjustment (Kaizen for small things, a project for big ones).",
      "Standardize what worked, so it is not lost.",
      "Measure again."
     ]
    },
    {
     "tipo": "texto",
     "titulo": "Process management maturity (BPMM)",
     "cuerpo": "<p>Maturity models describe how capable an organization is of managing its processes. They serve two purposes: <b>diagnosing where you are</b> and <b>setting a realistic goal</b> — because you do not jump from level 1 to level 4 in a single project.</p>"
    },
    {
     "tipo": "tabla",
     "titulo": "Maturity levels in process management",
     "encabezados": [
      "Level",
      "Name",
      "What it looks like in practice"
     ],
     "filas": [
      [
       "1",
       "Initial",
       "Processes are not documented; the result depends on individuals and personal heroics"
      ],
      [
       "2",
       "Managed / repeatable",
       "They are documented and repeated within each area, but with no end-to-end view"
      ],
      [
       "3",
       "Defined / standardized",
       "Processes standardized across the whole organization, with designated owners"
      ],
      [
       "4",
       "Measured / quantitatively managed",
       "They are controlled with indicators and data; a deviation triggers action"
      ],
      [
       "5",
       "Optimized",
       "Institutionalized continuous improvement and systematic process innovation"
      ]
     ]
    },
    {
     "tipo": "nota",
     "titulo": "Honest use of a maturity model",
     "cuerpo": "<p>Most organizations sit between 1 and 2, and that is fine as a starting point. The value of the diagnosis is not the score: it is <b>identifying what is missing to reach the next level</b>. Promising level 5 in a one-year plan is a sign that nobody understood the model.</p>"
    },
    {
     "tipo": "defs",
     "titulo": "Maturity of an initiative or idea",
     "items": [
      {
       "termino": "What it measures",
       "definicion": "How ready an idea is for you to invest in it: from a passing notion with no evidence to a proven solution ready to scale."
      },
      {
       "termino": "Typical levels",
       "definicion": "<b>1 Idea</b> (stated, no evidence) · <b>2 Concept</b> (problem and benefit estimated) · <b>3 Proof of concept</b> (technical viability demonstrated) · <b>4 Pilot</b> (tested with real users and measured) · <b>5 Scalable</b> (ready to roll out with a validated business case)."
      },
      {
       "termino": "What it is for",
       "definicion": "So you do not ask a level 1 idea for a level 5 business case, nor roll out a level 2 one across the whole company. Each level deserves a different kind of investment and evidence."
      },
      {
       "termino": "Relationship with Design Thinking",
       "definicion": "The prototype and the test are precisely the mechanism that lifts an idea from level 2 to level 4, with evidence and without committing a larger investment."
      }
     ]
    },
    {
     "tipo": "defs",
     "titulo": "The project according to PMI",
     "items": [
      {
       "termino": "Definition",
       "definicion": "A temporary effort undertaken to create a unique product, service or result."
      },
      {
       "termino": "Process groups",
       "definicion": "Initiating · Planning · Executing · Monitoring and controlling · Closing."
      },
      {
       "termino": "Project charter",
       "definicion": "The document that formally authorizes the project, names the manager and defines high-level objectives. Without a charter there is no project: there is activity."
      },
      {
       "termino": "Triple constraint",
       "definicion": "Scope, time and cost, with quality at the center. Changing one affects the others: it is the conversation you have to have with the sponsor, not avoid."
      },
      {
       "termino": "Relationship with the process",
       "definicion": "The project implements the improvement and closes; the process keeps operating and improving under its owner. Confusing the two leaves orphaned processes when the project ends."
      }
     ]
    },
    {
     "tipo": "clave",
     "titulo": "Closing the course",
     "cuerpo": "<p>A complete proposal travels the whole path: <b>business need → process → diagnosis with numbers → alternatives evaluated → target architecture → economic justification → implementation plan → operation and continuous improvement</b>.</p><p>Technology shows up seventh on that list, not first. That is the lesson that should stay with you from these five weeks.</p>"
    }
   ]
  }
 ],
 "terminos": [
  {
   "termino": "Pain point",
   "definicion": "The specific point where the process costs the user time, effort, money or certainty. You state it with evidence."
  },
  {
   "termino": "Triangulation",
   "definicion": "Supporting a finding with at least three sources: interview (the why), observation (the how) and data (the magnitude)."
  },
  {
   "termino": "Gemba",
   "definicion": "The real place where the work happens; direct on-site observation as a discovery technique."
  },
  {
   "termino": "Design Thinking",
   "definicion": "A user-centered ideation method: empathize, define, ideate, prototype and test."
  },
  {
   "termino": "Voice of the customer",
   "sigla": "VOC",
   "definicion": "Structured collection of what the customer asks for, the basis for requirements and acceptance criteria."
  },
  {
   "termino": "Value chain",
   "definicion": "Breaking the company down into primary activities (inbound logistics, operations, outbound logistics, marketing and service) and support activities (infrastructure, human resources, technology and procurement)."
  },
  {
   "termino": "VA / NNVA / NVA",
   "definicion": "Value-added · necessary non-value-added (required by regulation or control) · non-value-added (pure waste, to be eliminated)."
  },
  {
   "termino": "5S",
   "definicion": "Seiri, Seiton, Seiso, Seiketsu, Shitsuke: sort, set in order, shine, standardize and sustain."
  },
  {
   "termino": "Just in Time",
   "sigla": "JIT",
   "definicion": "Producing and supplying only what is needed when it is needed; it cuts inventory and exposes the problems inventory was hiding."
  },
  {
   "termino": "Kanban",
   "definicion": "A visual signal that limits work in process and triggers replenishment; its foundation is Little's Law."
  },
  {
   "termino": "Poka-Yoke",
   "definicion": "Error-proof design: it makes the error impossible to commit instead of catching it afterwards. It lowers the reject rate r."
  },
  {
   "termino": "Technical feasibility",
   "definicion": "Can it be built with the available technology, infrastructure and capabilities?"
  },
  {
   "termino": "Operational feasibility",
   "definicion": "Will the organization actually use it? This is the feasibility that kills the most projects."
  },
  {
   "termino": "Economic feasibility",
   "definicion": "Do the benefits outweigh the costs over a reasonable horizon?"
  },
  {
   "termino": "Contribution margin",
   "definicion": "Price − unit variable cost. What each unit contributes toward covering fixed costs and generating profit."
  },
  {
   "termino": "Break-even point",
   "definicion": "Fixed costs / contribution margin. The volume at which profit is zero."
  },
  {
   "termino": "ROI",
   "definicion": "(Benefit − Investment) / Investment. Simple and easy to communicate, but it ignores the timing of the cash flows."
  },
  {
   "termino": "Payback period",
   "sigla": "payback",
   "definicion": "Investment / cash flow per period. It measures risk and liquidity, not profitability."
  },
  {
   "termino": "NPV",
   "sigla": "Valor Presente Neto",
   "definicion": "The sum of discounted future cash flows minus the investment. If NPV > 0, the project creates value at the required rate."
  },
  {
   "termino": "IRR",
   "sigla": "Tasa Interna de Retorno",
   "definicion": "The rate at which NPV becomes zero; you compare it against the minimum required rate."
  },
  {
   "termino": "Annuity factor",
   "definicion": "[1 − (1+k)^-n] / k. It lets you compute the NPV of equal cash flows without discounting them one by one."
  },
  {
   "termino": "Cost of doing nothing",
   "definicion": "The waste you keep paying for if you do not act. It is almost never zero and it is usually the most compelling argument."
  },
  {
   "termino": "ERP reference process",
   "definicion": "The standard flow that comes with the product. Adopting it is cheaper than customizing it; you customize only where the process sets you apart in the market."
  },
  {
   "termino": "Simulation model validation",
   "definicion": "Checking that the simulated AS-IS reproduces the real operation you observed. Without it, the results are precise and false."
  },
  {
   "termino": "UAT",
   "sigla": "User Acceptance Testing",
   "definicion": "The test in which whoever runs the process confirms that the solution works for them."
  },
  {
   "termino": "ADKAR",
   "definicion": "A per-person change model: Awareness, Desire, Knowledge, Ability, Reinforcement. If one link fails, the change fails."
  },
  {
   "termino": "Sponsor",
   "sigla": "sponsor",
   "definicion": "The executive who answers for the change before the organization. Without visible sponsorship no methodology makes up for it."
  },
  {
   "termino": "Big bang / phased / pilot / parallel",
   "definicion": "The four go-live strategies, each with a different risk and cost profile."
  },
  {
   "termino": "Hypercare",
   "definicion": "Reinforced support through the first weeks after go-live."
  },
  {
   "termino": "Rollback",
   "definicion": "Rollback plan: what you do if you have to return to the previous state, and up to what point it is possible."
  },
  {
   "termino": "Process owner",
   "definicion": "Answers for the process's end-to-end performance, reviews indicators and triggers improvement. Without one, the process degrades."
  },
  {
   "termino": "BPMM",
   "sigla": "Business Process Maturity Model",
   "definicion": "A five-level model —initial, managed, defined, measured, optimized— that describes the organization's capability to manage its processes."
  },
  {
   "termino": "Maturity of an initiative",
   "definicion": "How ready an idea is for investment: idea, concept, proof of concept, pilot, scalable. Each level deserves a different kind of evidence and investment."
  },
  {
   "termino": "Project charter",
   "definicion": "The document that formally authorizes the project, names the manager and defines high-level objectives."
  },
  {
   "termino": "Triple constraint",
   "definicion": "Scope, time and cost, with quality at the center; changing one affects the rest."
  }
 ],
 "practica": {
  "calculos": [
   {
    "tema": "Lean thinking",
    "titulo": "VA / NNVA / NVA classification",
    "enunciado": "Using the times from the garment line, calculate how much time falls into each category and the value efficiency of the process.",
    "datos": {
     "tipo": "tabla",
     "titulo": "Process activities (minutes)",
     "encabezados": [
      "Activity",
      "Minutes",
      "Type"
     ],
     "filas": [
      [
       "Cut fabric",
       "12",
       "VA"
      ],
      [
       "Sew",
       "35",
       "VA"
      ],
      [
       "Washing and finishing",
       "18",
       "VA"
      ],
      [
       "Inspection required by regulation",
       "6",
       "NNVA"
      ],
      [
       "Tax record of the batch",
       "4",
       "NNVA"
      ],
      [
       "Wait between stations",
       "40",
       "NVA"
      ],
      [
       "Transfer to the warehouse",
       "9",
       "NVA"
      ],
      [
       "Data re-entry in Excel",
       "6",
       "NVA"
      ]
     ]
    },
    "preguntas": [
     {
      "etiqueta": "Total process time",
      "respuesta": 130,
      "unidad": "min",
      "tolerancia": 0.5
     },
     {
      "etiqueta": "VA time",
      "respuesta": 65,
      "unidad": "min",
      "tolerancia": 0.5
     },
     {
      "etiqueta": "NNVA time",
      "respuesta": 10,
      "unidad": "min",
      "tolerancia": 0.5
     },
     {
      "etiqueta": "NVA time",
      "respuesta": 55,
      "unidad": "min",
      "tolerancia": 0.5
     },
     {
      "etiqueta": "Value efficiency (VA / total)",
      "respuesta": 50,
      "unidad": "%",
      "tolerancia": 0.6
     }
    ],
    "solucion": "<div class=\"paso-calc\">VA   = 12 + 35 + 18 = <span class=\"resaltado\">65 min</span>  (50.0 %)\nNNVA =  6 +  4      = <span class=\"resaltado\">10 min</span>  ( 7.7 %)\nNVA  = 40 +  9 +  6 = <span class=\"resaltado\">55 min</span>  (42.3 %)\nTotal               = <span class=\"resaltado\">130 min</span>\n\nValue efficiency = 65 / 130 = <span class=\"resaltado\">50 %</span></div><p><b>What you do with each category.</b> The 55 minutes of NVA can be attacked right away: the wait between stations with line balancing or Kanban, the transfer with plant layout, and the re-entry with systems integration.</p><p>The 10 minutes of NNVA <b>are not eliminated</b>, but they can be optimized: the tax record can be automated and the inspection can move to sampling if the regulation allows it.</p><p>Telling NNVA apart from NVA avoids two expensive, symmetrical mistakes: eliminating a mandatory control, or resigning yourself to waste in the belief that it was mandatory.</p>"
   },
   {
    "tema": "Costing",
    "titulo": "Costing and break-even point of a denim workshop",
    "enunciado": "A workshop makes denim jeans. For each pair: <b>fabric</b> $152, <b>trims</b> $38, <b>cutting and sewing</b> $145, <b>washing and finishing</b> $65. The wholesale price is <b>$650</b>. Monthly fixed costs are: rent $85,000, administrative payroll $120,000 and other $45,000.",
    "preguntas": [
     {
      "etiqueta": "Unit variable cost",
      "respuesta": 400,
      "unidad": "$",
      "tolerancia": 1
     },
     {
      "etiqueta": "Contribution margin per pair",
      "respuesta": 250,
      "unidad": "$",
      "tolerancia": 1
     },
     {
      "etiqueta": "Contribution margin as % of price",
      "respuesta": 38.46,
      "unidad": "%",
      "tolerancia": 0.5
     },
     {
      "etiqueta": "Monthly fixed costs",
      "respuesta": 250000,
      "unidad": "$",
      "tolerancia": 500
     },
     {
      "etiqueta": "Break-even point",
      "respuesta": 1000,
      "unidad": "pairs/month",
      "tolerancia": 2
     },
     {
      "etiqueta": "Monthly profit selling 1,600 pairs",
      "respuesta": 150000,
      "unidad": "$",
      "tolerancia": 500
     }
    ],
    "solucion": "<div class=\"paso-calc\">Variable cost = 152 + 38 + 145 + 65 = <span class=\"resaltado\">$400/pair</span>\nContribution margin = 650 − 400 = <span class=\"resaltado\">$250/pair</span>  (250/650 = <span class=\"resaltado\">38.46 %</span>)\n\nFixed costs = 85,000 + 120,000 + 45,000 = <span class=\"resaltado\">$250,000/month</span>\n\nBreak-even point = 250,000 / 250 = <span class=\"resaltado\">1,000 pairs/month</span>\n\nProfit with 1,600 pairs = (1,600 × 250) − 250,000\n                        = 400,000 − 250,000 = <span class=\"resaltado\">$150,000/month</span></div><p><b>Reading it as a business:</b> the first 1,000 pairs of the month leave no profit, they only pay for the structure. From pair 1,001 onward, each one contributes a full $250.</p><p>That is why the contribution margin lever is so powerful: it does not spread the benefit proportionally, it concentrates it above the break-even point.</p>"
   },
   {
    "tema": "Costing",
    "titulo": "Impact of a process improvement on the bottom line",
    "enunciado": "You find that <b>washing and finishing</b> can come down from <b>$65 to $45</b> per pair with a new process, without affecting quality. The investment in equipment is <b>$180,000</b>. Everything else stays the same: price $650, other variable costs $335, fixed costs $250,000, volume 1,600 pairs.",
    "preguntas": [
     {
      "etiqueta": "New unit variable cost",
      "respuesta": 380,
      "unidad": "$",
      "tolerancia": 1
     },
     {
      "etiqueta": "New contribution margin",
      "respuesta": 270,
      "unidad": "$",
      "tolerancia": 1
     },
     {
      "etiqueta": "New break-even point",
      "respuesta": 926,
      "unidad": "pairs/month",
      "tolerancia": 2,
      "pista": "Round up: you do not sell fractions of a pair."
     },
     {
      "etiqueta": "Monthly profit with 1,600 pairs",
      "respuesta": 182000,
      "unidad": "$",
      "tolerancia": 500
     },
     {
      "etiqueta": "Monthly increase in profit",
      "respuesta": 32000,
      "unidad": "$",
      "tolerancia": 500
     },
     {
      "etiqueta": "Payback period of the investment",
      "respuesta": 5.63,
      "unidad": "months",
      "tolerancia": 0.15
     },
     {
      "etiqueta": "ROI at 12 months",
      "respuesta": 113.33,
      "unidad": "%",
      "tolerancia": 1
     }
    ],
    "solucion": "<div class=\"paso-calc\">New variable cost = 152 + 38 + 145 + 45 = <span class=\"resaltado\">$380</span>\nNew margin = 650 − 380 = <span class=\"resaltado\">$270</span>  (41.54 % of price)\n\nNew break-even point = 250,000 / 270 = 925.9 → <span class=\"resaltado\">926 pairs</span>\n\nProfit = (1,600 × 270) − 250,000 = 432,000 − 250,000 = <span class=\"resaltado\">$182,000</span>\nIncrease = 182,000 − 150,000 = <span class=\"resaltado\">$32,000/month</span>\n\nPayback = 180,000 / 32,000 = <span class=\"resaltado\">5.6 months</span>\nROI 12 months = (32,000×12 − 180,000) / 180,000\n              = (384,000 − 180,000) / 180,000 = <span class=\"resaltado\">113.33 %</span></div><p><b>This is how you translate a process improvement into management language.</b> “We took $20 off the washing cost” moves nobody. “We recover the investment in less than six months and the break-even point drops by 74 pairs a month” does.</p><p><b>And the honesty of the analysis:</b> this calculation assumes the volume holds and the quality does not drop. Both are assumptions you have to state — if the new process raises the reject rate by even 2 %, the benefit erodes fast.</p>"
   },
   {
    "tema": "Investment appraisal",
    "titulo": "NPV, IRR, payback and ROI of an automation project",
    "enunciado": "You are evaluating whether to automate supplier registration. <b>Initial investment: $1,200,000.</b> Estimated annual savings: <b>$450,000</b> over <b>4 years</b>. The discount rate the company requires (hurdle rate) is <b>12 % per year</b>.",
    "preguntas": [
     {
      "etiqueta": "Annuity factor (12 %, 4 years)",
      "respuesta": 3.0373,
      "unidad": "",
      "tolerancia": 0.01,
      "pista": "AF = [1 − (1+k)^-n] / k"
     },
     {
      "etiqueta": "Net Present Value",
      "respuesta": 166807,
      "unidad": "$",
      "tolerancia": 2000
     },
     {
      "etiqueta": "Simple payback period",
      "respuesta": 2.67,
      "unidad": "years",
      "tolerancia": 0.05
     },
     {
      "etiqueta": "Cumulative ROI at 4 years",
      "respuesta": 50,
      "unidad": "%",
      "tolerancia": 1
     },
     {
      "etiqueta": "Internal Rate of Return",
      "respuesta": 18.45,
      "unidad": "%",
      "tolerancia": 0.6
     }
    ],
    "solucion": "<div class=\"paso-calc\">AF = [1 − (1.12)^-4] / 0.12 = (1 − 0.635518) / 0.12 = <span class=\"resaltado\">3.0373</span>\n\nNPV = 450,000 × 3.0373 − 1,200,000\n    = 1,366,807 − 1,200,000 = <span class=\"resaltado\">$166,807</span>   → NPV > 0 ✓\n\nPayback = 1,200,000 / 450,000 = <span class=\"resaltado\">2.67 years</span> (32 months)\n\nROI 4 years = (450,000×4 − 1,200,000) / 1,200,000\n            = (1,800,000 − 1,200,000) / 1,200,000 = <span class=\"resaltado\">50 %</span>\n\nIRR: rate where NPV = 0  →  <span class=\"resaltado\">18.45 %</span>  > hurdle rate of 12 % ✓\nProfitability index = 1,366,807 / 1,200,000 = 1.139</div><p><b>Verdict:</b> the project is approved. Positive NPV (it creates value at the required rate) and an IRR of 18.45 % against a hurdle rate of 12 %, with 6.45 points of headroom.</p><p><b>What you have to say beyond the verdict:</b> the 32-month payback is long. For a company under liquidity pressure that can weigh more than the NPV, and it is worth exploring whether the project can be phased to bring part of the savings forward.</p><p><b>And the critical assumption:</b> that the $450,000 in savings is real and sustained across the four years. If only half the benefit materializes, the NPV turns negative. That is why the benefits evaluation after go-live is not bureaucracy.</p>"
   },
   {
    "tema": "Sensitivity",
    "titulo": "How fragile is the business case?",
    "enunciado": "Same project: investment $1,200,000, horizon 4 years, rate 12 %, annuity factor 3.0373. Management wants to know what happens if the annual savings fall short of $450,000.",
    "preguntas": [
     {
      "etiqueta": "NPV if the annual savings are $400,000",
      "respuesta": 14940,
      "unidad": "$",
      "tolerancia": 1500,
      "pista": "NPV = Savings × 3.037349 − 1,200,000"
     },
     {
      "etiqueta": "NPV if the annual savings are $380,000",
      "respuesta": -45807,
      "unidad": "$",
      "tolerancia": 1500,
      "pista": "The result is negative: write it with the sign."
     },
     {
      "etiqueta": "Minimum annual savings for NPV to be zero",
      "respuesta": 395081,
      "unidad": "$",
      "tolerancia": 2500
     },
     {
      "etiqueta": "Tolerable margin of error on the $450,000",
      "respuesta": 12.2,
      "unidad": "%",
      "tolerancia": 0.8
     }
    ],
    "solucion": "<div class=\"paso-calc\">NPV with 400,000 = 400,000 × 3.037349 − 1,200,000\n                 = 1,214,940 − 1,200,000 = <span class=\"resaltado\">+$14,940</span>   (barely positive)\n\nNPV with 380,000 = 380,000 × 3.037349 − 1,200,000\n                 = 1,154,193 − 1,200,000 = <span class=\"resaltado\">−$45,807</span>   (destroys value)\n\nBreak-even savings = 1,200,000 / 3.037349 = <span class=\"resaltado\">$395,081</span>\n\nTolerable margin = (450,000 − 395,081) / 450,000 = <span class=\"resaltado\">12.2 %</span></div><p><b>The finding:</b> the savings can drop to $395,081 before the project destroys value. That is a cushion of barely <b>12.2 %</b> over the original estimate.</p><p>Seen in isolation, an NPV of $166,807 looks comfortable. The sensitivity analysis shows it is not: a one-eighth deviation in the savings —perfectly possible in an estimate built on optimistic assumptions— takes it to zero.</p><p><b>The honest recommendation</b> approves the project <i>with conditions</i>: measure the real savings from the first quarter on, and identify in advance what gets cut or re-prioritized if they do not materialize.</p>"
   },
   {
    "tema": "Cost of doing nothing",
    "titulo": "The alternative you always have to evaluate",
    "enunciado": "Supplier registration processes <b>400 registrations a month</b> at a labor cost of <b>$231</b> per registration and a rework rate of <b>8 %</b> that forces the whole job to be redone. On top of that, each registration takes 72 hours, and the purchasing area estimates that <b>15 urgent purchases a month</b> end up with more expensive suppliers because the chosen supplier cannot be registered in time, at an average extra cost of <b>$4,200</b> each.",
    "preguntas": [
     {
      "etiqueta": "Monthly cost of rework",
      "respuesta": 7392,
      "unidad": "$",
      "tolerancia": 50
     },
     {
      "etiqueta": "Monthly extra cost from urgent purchases",
      "respuesta": 63000,
      "unidad": "$",
      "tolerancia": 200
     },
     {
      "etiqueta": "Total monthly cost of doing nothing",
      "respuesta": 70392,
      "unidad": "$",
      "tolerancia": 250
     },
     {
      "etiqueta": "Annual cost of doing nothing",
      "respuesta": 844704,
      "unidad": "$",
      "tolerancia": 3000
     }
    ],
    "solucion": "<div class=\"paso-calc\">Rework      = 400 × 231 × 0.08 = <span class=\"resaltado\">$7,392/month</span>\nUrgent purchases = 15 × 4,200   = <span class=\"resaltado\">$63,000/month</span>\n                                  ─────────────\nMonthly total                   = <span class=\"resaltado\">$70,392</span>\nAnnual total = 70,392 × 12      = <span class=\"resaltado\">$844,704</span></div><p><b>Why this calculation changes the conversation.</b> Rework, the first thing everyone sees, turns out to be the small part: $7,392 against $63,000 of extra cost from urgent purchases. The real cost of the slow process was not in the process, it was <b>downstream</b>.</p><p>With $844,704 a year as the cost of doing nothing, an investment of $1,200,000 pays back in less than 18 months on these two items alone — and we have not yet counted the direct savings in labor.</p><p><b>The method lesson:</b> look for the impact outside the boundaries of the process you are measuring. Almost always the bigger cost is being paid by another area that does not even take part in the flow.</p>"
   }
  ],
  "opcionMultiple": [
   {
    "tema": "Discovery",
    "pregunta": "What is the main risk of capturing the AS-IS with interviews alone?",
    "opciones": [
     "You get what the person believes they do, which usually differs from what actually happens",
     "It eats up too much of the analyst's time",
     "It does not let you learn the processing times",
     "It requires authorization from the IT area"
    ],
    "correcta": 0,
    "explicacion": "That is why the triangulation rule exists: interview (the why) + observation (the how) + data (the magnitude). When the three do not agree, you have found something valuable.",
    "porQueNo": {
     "1": "Shadowing eats up more; an interview is relatively efficient.",
     "2": "It does let you estimate them, though less precisely than measurement.",
     "3": "It is neither a requirement nor the central risk."
    }
   },
   {
    "tema": "Pain point",
    "pregunta": "Which of these statements is a well-formulated pain point?",
    "opciones": [
     "The supplier calls three times to ask about the status because they have no visibility of their request",
     "The system is slow",
     "We need a supplier portal",
     "The purchasing area does not cooperate"
    ],
    "correcta": 0,
    "explicacion": "A pain point describes the specific point where the process costs the user something, with observable evidence. It is a cause, not a symptom or a solution.",
    "porQueNo": {
     "1": "It is a symptom with no cause and no magnitude.",
     "2": "It is a proposed solution, not a pain point.",
     "3": "It is a judgment about people, not a process finding."
    }
   },
   {
    "tema": "Lean thinking",
    "pregunta": "An inspection required by an industry standard is classified as…",
    "opciones": [
     "NNVA: it does not add value for the customer but it is necessary; you do not eliminate it, you optimize it",
     "VA: because it is mandatory, the customer values it",
     "NVA: anything that does not transform the product is waste and gets eliminated",
     "It depends on how much time it consumes"
    ],
    "correcta": 0,
    "explicacion": "Telling NNVA from NVA prevents two symmetrical mistakes: eliminating a mandatory control, or resigning yourself to waste believing it was mandatory.",
    "porQueNo": {
     "1": "Being mandatory does not mean the customer pays for it.",
     "2": "Eliminating a regulatory control creates a compliance risk greater than the saving.",
     "3": "The classification depends on the nature of the activity, not on how long it takes."
    }
   },
   {
    "tema": "Poka-Yoke",
    "pregunta": "What is the difference between a poka-yoke and an inspection?",
    "opciones": [
     "The poka-yoke prevents the error from being made; the inspection detects it afterwards and costs time every time",
     "The poka-yoke is manual and the inspection is automatic",
     "The poka-yoke applies only to manufacturing",
     "They are synonyms in Lean terminology"
    ],
    "correcta": 0,
    "explicacion": "In terms of cycle time analysis: the inspection is permanent NNVA; the poka-yoke reduces the reject rate r and with it the whole rework loop.",
    "porQueNo": {
     "1": "Both can be manual or automatic.",
     "2": "A mandatory field with validation is a digital poka-yoke.",
     "3": "They are opposite concepts: preventing versus detecting."
    }
   },
   {
    "tema": "Feasibility",
    "pregunta": "Which kind of feasibility kills the most projects in practice?",
    "opciones": [
     "Operational: a flawless system that nobody uses delivers zero benefit, and the cost has already been paid",
     "Technical: most solutions cannot be built",
     "Legal: there is almost always a regulatory obstacle",
     "Economic: projects rarely have a positive NPV"
    ],
    "correcta": 0,
    "explicacion": "Almost everything is technically possible. That is why change management is not an ornament at the end: it is an assumption of the business case.",
    "porQueNo": {
     "1": "Technical feasibility is rarely the real obstacle today.",
     "2": "Legal obstacles exist, but they are identified early and are a minority.",
     "3": "Many projects have a positive NPV; the problem is that the benefit does not materialize."
    }
   },
   {
    "tema": "Costing",
    "pregunta": "The price is $650 and the unit variable cost is $400, with fixed costs of $250,000 per month. What is the break-even point?",
    "opciones": [
     "1,000 units",
     "625 units",
     "384 units",
     "2,500 units"
    ],
    "correcta": 0,
    "explicacion": "Break-even point = fixed costs / contribution margin = 250,000 / (650 − 400) = 250,000 / 250 = 1,000 units.",
    "porQueNo": {
     "1": "250,000/400 uses the variable cost instead of the contribution margin.",
     "2": "250,000/650 divides by the price, ignoring the variable cost.",
     "3": "It comes from a badly calculated margin."
    }
   },
   {
    "tema": "Costing",
    "pregunta": "An improvement reduces the unit variable cost. Which two effects does it produce at the same time?",
    "opciones": [
     "The contribution margin rises, which lowers the break-even point and increases the profit on every unit sold above it",
     "The selling price rises and demand falls",
     "It lowers fixed costs and raises capacity",
     "It reduces the break-even point but decreases unit profit"
    ],
    "correcta": 0,
    "explicacion": "It is the exact translation between “I cut 20 minutes out of the process” and “I made money”, and that is why the contribution margin is the lever you have to show management.",
    "porQueNo": {
     "1": "Price is a commercial decision, independent of the cost improvement.",
     "2": "A variable cost improvement does not by itself change fixed costs or capacity.",
     "3": "Unit profit increases, it does not decrease."
    }
   },
   {
    "tema": "NPV",
    "pregunta": "A project has an NPV of $166,807 at a discount rate of 12 %. What does that mean?",
    "opciones": [
     "It creates value: the discounted cash flows exceed the investment at the rate the company requires",
     "It will generate exactly $166,807 of accounting profit",
     "It will recover the investment in 166,807 days",
     "Its return is 166.8 %"
    ],
    "correcta": 0,
    "explicacion": "NPV measures value creation at a required rate. The criterion is binary: if NPV > 0, the project beats the minimum return.",
    "porQueNo": {
     "1": "NPV is not accounting profit: it is the present value of cash flows.",
     "2": "The recovery period is the payback, a different indicator.",
     "3": "The implied return is the IRR."
    }
   },
   {
    "tema": "IRR",
    "pregunta": "A project's IRR is 18.45 % and the company's hurdle rate is 12 %. What do you conclude?",
    "opciones": [
     "The project beats the minimum required return, with 6.45 points of slack",
     "The project loses 6.45 % per year",
     "The investment is recovered in 18.45 months",
     "You cannot conclude anything without knowing the ROI"
    ],
    "correcta": 0,
    "explicacion": "The IRR is the rate at which NPV becomes zero. Comparing it against the minimum required rate shows how much slack there is before the project stops being worthwhile.",
    "porQueNo": {
     "1": "An IRR higher than the hurdle rate means the opposite.",
     "2": "The IRR is a rate, not a period.",
     "3": "IRR and NPV are enough for the acceptance criterion."
    }
   },
   {
    "tema": "Evaluation",
    "pregunta": "Why is it worth presenting NPV and payback together?",
    "opciones": [
     "NPV tells you whether it creates value; payback tells you how exposed the company stays in the meantime",
     "Because both give the same result and validate each other",
     "Because payback corrects the errors of NPV",
     "Because the ISO standard requires both indicators"
    ],
    "correcta": 0,
    "explicacion": "A project with a good NPV and a five-year payback can be unacceptable for a company with liquidity problems. They measure different, complementary things.",
    "porQueNo": {
     "1": "They measure different dimensions: profitability and exposure.",
     "2": "Payback corrects nothing; it ignores the time value of money.",
     "3": "No ISO standard regulates this."
    }
   },
   {
    "tema": "Alternatives",
    "pregunta": "Why do you have to calculate the cost of doing nothing?",
    "opciones": [
     "Because it is almost never zero —it is the waste you keep paying for every month— and it is usually the most compelling argument in the proposal",
     "Because it is a formal requirement of the project charter",
     "Because it lets you inflate the project's expected benefit",
     "Because it replaces the NPV calculation"
    ],
    "correcta": 0,
    "explicacion": "Presenting the do-nothing alternative, evaluated with the same criteria, turns a budget request into a business decision.",
    "porQueNo": {
     "1": "It is not a formal requirement, it is good analysis practice.",
     "2": "Inflating benefits destroys credibility; the calculation must be conservative and verifiable.",
     "3": "It is an input to the analysis, not a substitute for NPV."
    }
   },
   {
    "tema": "ERP",
    "pregunta": "What is the criterion for deciding between adopting the standard ERP process and customizing it?",
    "opciones": [
     "Customize only where the process is a real source of differentiation in the market; everywhere else, adopt the standard",
     "Always customize, so people are not forced to change the way they work",
     "Always adopt the standard, with no exceptions",
     "Decide it globally for the whole project, not process by process"
    ],
    "correcta": 0,
    "explicacion": "The value chain and the portfolio classification are exactly the criterion that separates what differentiates from what is commodity.",
    "porQueNo": {
     "1": "Customizing everything makes every future upgrade more expensive and creates permanent technical debt.",
     "2": "There are processes where differentiation is real, and losing it costs market share.",
     "3": "It is a decision you have to make process by process."
    }
   },
   {
    "tema": "ERP",
    "pregunta": "What is the classic mistake in an ERP implementation?",
    "opciones": [
     "Configuring it to replicate the current process with all its flaws",
     "Training users before go-live",
     "Migrating historical data",
     "Hiring external consultants"
    ],
    "correcta": 0,
    "explicacion": "The company pays for the full implementation, keeps the waits and the rework, and ends up tied to customizations that make every upgrade more expensive for years.",
    "porQueNo": {
     "1": "Training is correct; what you have to watch is the timing.",
     "2": "Migrating data is necessary, although it has to be validated.",
     "3": "That is a sourcing decision, not a mistake in itself."
    }
   },
   {
    "tema": "Simulation",
    "pregunta": "Which is the step without which every result of a simulation is invalid?",
    "opciones": [
     "Validating that the AS-IS model reproduces the real operation you observed",
     "Running as many replications as possible",
     "Using a commercial tool instead of a free one",
     "Modeling the process in BPMN notation"
    ],
    "correcta": 0,
    "explicacion": "A simulation built on a poorly captured AS-IS produces results that are precise and false. The tool's decimal precision does not validate the input data.",
    "porQueNo": {
     "1": "Replications give statistical stability, but of the wrong model.",
     "2": "The tool does not determine the validity of the model.",
     "3": "Notation helps you communicate; it does not validate the data."
    }
   },
   {
    "tema": "Presentation",
    "pregunta": "In an executive presentation, what should you open with?",
    "opciones": [
     "The problem stated with magnitude: how long it takes, how much it costs, who it affects",
     "The complete BPMN diagram of the current process",
     "The technical architecture of the proposed solution",
     "The detailed budget line by line"
    ],
    "correcta": 0,
    "explicacion": "Management buys results, risk and decisions. Technical detail goes in appendices, ready for the questions that come up.",
    "porQueNo": {
     "1": "The diagram is an analysis artifact, not an executive communication one.",
     "2": "Technology before the result is exactly what this course teaches you to avoid.",
     "3": "Cost matters, but only after you establish why it is worth it."
    }
   },
   {
    "tema": "Presentation",
    "pregunta": "What is the most serious mistake when presenting a process improvement?",
    "opciones": [
     "Changing indicators between the diagnosis and the proposal, which makes the improvement impossible to compare",
     "Using too many slides",
     "Not including the team's organization chart",
     "Presenting in under fifteen minutes"
    ],
    "correcta": 0,
    "explicacion": "If you measured lead time in the AS-IS, measure lead time in the TO-BE. Changing the metric destroys the credibility of the whole analysis.",
    "porQueNo": {
     "1": "It is a problem of form, not of substance.",
     "2": "The organization chart is rarely relevant to the decision.",
     "3": "Brevity is a virtue in an executive presentation."
    }
   },
   {
    "tema": "Change management",
    "pregunta": "In the ADKAR model, what does it mean for the “Ability” link to fail?",
    "opciones": [
     "The person understands the change and wants to make it, but cannot carry it out in practice: they lack tools, time or practice",
     "The person does not know why the change is being made",
     "The change does not hold over time",
     "The person does not want to change"
    ],
    "correcta": 0,
    "explicacion": "ADKAR: Awareness (knowing why), Desire (wanting to), Knowledge (knowing how), Ability (being able to do it), Reinforcement (making it stick). Each link is addressed with a different intervention.",
    "porQueNo": {
     "1": "That is Awareness.",
     "2": "That is Reinforcement.",
     "3": "That is Desire."
    }
   },
   {
    "tema": "Change management",
    "pregunta": "What is the most underestimated lever for making a process change stick?",
    "opciones": [
     "Closing the back door: withdrawing the old system or form, because as long as it exists it will be used",
     "Sending a general announcement on go-live day",
     "Publishing the new procedures manual on the intranet",
     "Increasing the training budget"
    ],
    "correcta": 0,
    "explicacion": "If the old Excel file is still available and more convenient, people will use it and the new process will coexist with the old one indefinitely.",
    "porQueNo": {
     "1": "An announcement does not change behavior on its own.",
     "2": "Publishing the manual does not guarantee that it is applied.",
     "3": "Training helps, but it does not compete with the convenience of the old route."
    }
   },
   {
    "tema": "Go-live",
    "pregunta": "You are going to replace the payroll system, a critical and irreversible process. Which go-live strategy is best?",
    "opciones": [
     "Parallel: both systems run at the same time and you compare the results",
     "Big bang: everything changes on a single date",
     "A pilot in one branch",
     "Phased, module by module"
    ],
    "correcta": 0,
    "explicacion": "In irreversible, high-impact processes —payroll, invoicing— the cost of the double workload is justified against the risk of an undetected error.",
    "porQueNo": {
     "1": "An undetected payroll error affects the entire workforce and is hard to reverse.",
     "2": "Payroll cannot be piloted with part of the staff without creating inequity.",
     "3": "The process is tightly coupled; phasing it leaves inconsistent intermediate states."
    }
   },
   {
    "tema": "Go-live",
    "pregunta": "What is the number one cause of failed go-lives?",
    "opciones": [
     "Data migration and validation",
     "The IT team's lack of technical training",
     "The choice of infrastructure provider",
     "The design of the system screens"
    ],
    "correcta": 0,
    "explicacion": "Data that is incomplete, duplicated or that means different things in different systems makes the new system go live producing incorrect results, and trust is lost in the first week.",
    "porQueNo": {
     "1": "It is a factor, but not the most frequent one.",
     "2": "Infrastructure is rarely the point of failure at go-live.",
     "3": "Screens affect adoption, not the correctness of the results."
    }
   },
   {
    "tema": "Continuous improvement",
    "pregunta": "What role does the process owner play?",
    "opciones": [
     "They answer for the end-to-end performance of the process, review its indicators and trigger improvement when those drift",
     "They perform the operational activities of the process",
     "They manage the budget of the implementation project",
     "They supervise the staff of the area where the process starts"
    ],
    "correcta": 0,
    "explicacion": "Their scope cuts across departments, which is exactly what no functional manager covers. Without them, the process degrades once the project ends.",
    "porQueNo": {
     "1": "That is the performer; the owner answers for performance, not for execution.",
     "2": "That is the project manager, and their role ends with the project.",
     "3": "A functional manager covers one part of the flow, not the end-to-end."
    }
   },
   {
    "tema": "Maturity",
    "pregunta": "An organization documents and repeats its processes within each area, but with no end-to-end view and no designated owners. What maturity level is it at?",
    "opciones": [
     "Level 2 — managed or repeatable",
     "Level 1 — initial",
     "Level 4 — measured",
     "Level 5 — optimized"
    ],
    "correcta": 0,
    "explicacion": "Level 3 requires standardization across the whole organization and designated owners; level 4 requires quantitative control with data.",
    "porQueNo": {
     "1": "At level 1 there is no documentation and the result depends on individual heroics.",
     "2": "Level 4 requires indicators that trigger action when there is a deviation.",
     "3": "Level 5 assumes institutionalized continuous improvement."
    }
   },
   {
    "tema": "Maturity",
    "pregunta": "A plan promises to take the organization from maturity level 1 to level 5 in one year. What does that tell you?",
    "opciones": [
     "That the model was not understood: the levels involve cultural and governance changes that you cannot skip",
     "That the project is well sized and ambitious",
     "That a specialized consulting firm will be hired",
     "That the organization already had documented processes"
    ],
    "correcta": 0,
    "explicacion": "The value of a maturity assessment is not the score, it is identifying what is missing to reach the next level. Promising level 5 in one year is a warning sign.",
    "porQueNo": {
     "1": "Ambition without organizational feasibility produces failure and burnout.",
     "2": "No consulting firm can skip levels of cultural maturity.",
     "3": "If they were already documented, it would not be at level 1."
    }
   },
   {
    "tema": "Maturity of an initiative",
    "pregunta": "What is the point of assessing the maturity level of an idea or an initiative?",
    "opciones": [
     "So that you do not demand a full business case from an early-stage idea, nor roll out to the whole company something that is only a concept",
     "To decide who the sponsor will be",
     "To calculate the NPV more precisely",
     "To determine the development methodology"
    ],
    "correcta": 0,
    "explicacion": "The levels run from idea to scalable, and each one deserves a different kind of evidence and investment. The Design Thinking prototype is the mechanism for moving up a level without committing a larger investment.",
    "porQueNo": {
     "1": "Sponsorship is defined by the business area affected.",
     "2": "Maturity does not improve the precision of a financial calculation.",
     "3": "The methodology depends on the type of solution, not on the maturity of the idea."
    }
   },
   {
    "tema": "PMI",
    "pregunta": "According to PMI, which document formally authorizes a project and names its manager?",
    "opciones": [
     "The project charter",
     "The scope management plan",
     "The business case",
     "The work breakdown structure (WBS)"
    ],
    "correcta": 0,
    "explicacion": "Without a project charter there is no project: there is activity. The charter is what gives the manager formal authority over the resources.",
    "porQueNo": {
     "1": "The scope plan is produced later, during planning.",
     "2": "The business case justifies, but it does not formally authorize.",
     "3": "The WBS breaks down work that has already been authorized."
    }
   }
  ],
  "escenarios": [
   {
    "escenario": "The team interviewed the six people involved in the process and each one described a different sequence of activities.",
    "pregunta": "What is the right thing to do?",
    "opciones": [
     "Triangulate with direct observation and system data; the discrepancy is already a finding in itself",
     "Take the version of the most senior participant",
     "Average the six versions to build the AS-IS",
     "Repeat the interviews with more specific questions"
    ],
    "correcta": 0,
    "explicacion": "When the sources disagree, you have discovered that the organization does not know what it does: there are undocumented variants. That is diagnostic material, not an obstacle.",
    "porQueNo": {
     "1": "Seniority does not correlate with knowledge of the operational detail.",
     "2": "Averaging processes produces a flow that exists nowhere.",
     "3": "More interviews reproduce the same source bias."
    }
   },
   {
    "escenario": "In an ideation session, the manager dismisses the first idea proposed by saying “that can't be done here”, and the group stops contributing.",
    "pregunta": "Which rule was broken?",
    "opciones": [
     "Generate without judging: evaluating and generating at the same time kills the uncomfortable ideas, which are usually the good ones",
     "None: filtering early saves time",
     "The source triangulation rule",
     "The model validation principle"
    ],
    "correcta": 0,
    "explicacion": "Ideation and evaluation are different phases with different criteria. Mixing them produces nothing but variations on what was already being done.",
    "porQueNo": {
     "1": "Filtering early is exactly what prevents order-of-magnitude alternatives.",
     "2": "Triangulation applies to discovery, not to ideation.",
     "3": "That principle belongs to simulation."
    }
   },
   {
    "escenario": "The proposal cuts cycle time by 60 %, but it requires supervisors to stop authorizing each request and to trust automatic rules. Several have held that authority for twenty years.",
    "pregunta": "Which feasibility is at risk and what should you reinforce?",
    "opciones": [
     "Operational: you have to work on sponsorship, communicating the why, champions and aligned incentives",
     "Technical: you have to validate that the rules engine can handle the volume",
     "Economic: you have to recalculate the NPV at a higher rate",
     "Legal: you have to check whether the automation is permitted"
    ],
    "correcta": 0,
    "explicacion": "The design is correct and viable; what is at stake is whether the organization adopts it. It is the typical case where change management is the critical assumption of the business case.",
    "porQueNo": {
     "1": "It is verifiable and rarely the real obstacle.",
     "2": "The problem is not profitability but adoption.",
     "3": "It is worth checking, but it is not the dominant risk described."
    }
   },
   {
    "escenario": "The CFO asks why they should approve a $1.2 million investment when “the current process works”.",
    "pregunta": "Which argument is the most compelling?",
    "opciones": [
     "The cost of doing nothing: $844,704 per year between rework and the extra cost of urgent purchases",
     "That the proposed technology is the most modern on the market",
     "That the competition has already implemented it",
     "That the IT area has spare capacity this year"
    ],
    "correcta": 0,
    "explicacion": "Presenting the do-nothing alternative evaluated with the same criteria turns a budget request into a business decision.",
    "porQueNo": {
     "1": "Being modern is not a benefit in itself.",
     "2": "What the competition does is context, not financial justification.",
     "3": "The availability of resources does not justify the investment."
    }
   },
   {
    "escenario": "The project's NPV is positive, but the sensitivity analysis shows that the annual saving can fall by only 12 % before the NPV turns negative.",
    "pregunta": "What should the analyst do?",
    "opciones": [
     "Report the narrow margin and propose conditions: measure the real saving from the first quarter on, and have identified what to cut if it does not materialize",
     "Present only the positive NPV, which is the acceptance criterion",
     "Lower the discount rate to widen the margin",
     "Extend the horizon to eight years to improve the NPV"
    ],
    "correcta": 0,
    "explicacion": "A cushion of 12 % on a savings estimate —which is usually made with optimistic assumptions— is narrow, and hiding it compromises the whole analysis.",
    "porQueNo": {
     "1": "Leaving out how fragile the case is destroys the analyst's credibility.",
     "2": "Changing the rate to suit yourself is the easiest way to manipulate an NPV.",
     "3": "Extending the horizon with no basis inflates the benefit artificially."
    }
   },
   {
    "escenario": "During the ERP implementation, the production area asks to customize the plant scheduling module because the way it sequences orders is the reason they deliver faster than the competition.",
    "pregunta": "What is the right call?",
    "opciones": [
     "Evaluate the customization: if the process is a real source of differentiation, this is one of the few cases where it is justified",
     "Reject it: the rule is to always adopt the ERP standard",
     "Accept it without analysis: production knows its own operation best",
     "Postpone it until after go-live, without evaluating it"
    ],
    "correcta": 0,
    "explicacion": "The criterion is to customize only where the process differentiates in the market. Here there is a differentiation argument that has to be verified with data, not dismissed by rule.",
    "porQueNo": {
     "1": "The rule admits exceptions precisely in the differentiating processes.",
     "2": "The claim of differentiation has to be backed with comparable evidence.",
     "3": "Postponing without evaluating turns the decision into a bigger problem later."
    }
   },
   {
    "escenario": "Six months after go-live, people went back to the old Excel file “for urgent cases”, and urgent cases are already 40 % of the volume.",
    "pregunta": "What went wrong?",
    "opciones": [
     "The back door was not closed and there was not enough support; as long as the old route exists and is more convenient, it will be used",
     "The TO-BE process design was wrong from the start",
     "The infrastructure could not handle the volume",
     "Training was insufficient on the technical aspects"
    ],
    "correcta": 0,
    "explicacion": "Withdrawing the old system or form is the most underestimated lever in change management, together with support during operation (hypercare).",
    "porQueNo": {
     "1": "If the design were unworkable it would not have worked for the first months.",
     "2": "The situation describes no technical failures.",
     "3": "Training matters, but it does not compete with the convenience of the alternative route."
    }
   },
   {
    "escenario": "The project closed successfully a year ago. Nobody has measured again whether lead time actually dropped from 72 to 8 hours.",
    "pregunta": "What was lost?",
    "opciones": [
     "The benefits evaluation: without it the organization does not learn to estimate and the next business case is worth less",
     "Nothing: the project was delivered according to scope",
     "The ISO certification of the process",
     "The project charter"
    ],
    "correcta": 0,
    "explicacion": "It is the step everyone skips. Comparing what was promised against what was obtained is what turns experience into estimating capability.",
    "porQueNo": {
     "1": "Delivering the scope is not the same as delivering the promised benefit.",
     "2": "Certification is a separate topic.",
     "3": "The charter belongs to the start of the project, not to its closure."
    }
   }
  ],
  "clasificar": [
   {
    "consigna": "Classify each activity by its value contribution.",
    "categorias": [
     "VA — Value-added",
     "NNVA — Necessary non-value-added",
     "NVA — Waste"
    ],
    "items": [
     {
      "texto": "Sew the garment",
      "categoria": "VA — Value-added"
     },
     {
      "texto": "Washing and finishing the product",
      "categoria": "VA — Value-added"
     },
     {
      "texto": "Deliver the order to the customer",
      "categoria": "VA — Value-added"
     },
     {
      "texto": "Inspection required by an industry standard",
      "categoria": "NNVA — Necessary non-value-added"
     },
     {
      "texto": "Tax record of the batch",
      "categoria": "NNVA — Necessary non-value-added"
     },
     {
      "texto": "Credit validation required by policy",
      "categoria": "NNVA — Necessary non-value-added"
     },
     {
      "texto": "40-minute wait between stations",
      "categoria": "NVA — Waste"
     },
     {
      "texto": "Re-entry of the same data in Excel",
      "categoria": "NVA — Waste"
     },
     {
      "texto": "Moving the file between floors",
      "categoria": "NVA — Waste"
     },
     {
      "texto": "Redoing an order that was entered wrong",
      "categoria": "NVA — Waste"
     }
    ],
    "explicacion": "NVA is eliminated. NNVA is not eliminated but optimized: automate it, move it to the source, or do it by sampling if the standard allows it."
   },
   {
    "consigna": "Classify each question by the type of feasibility it assesses.",
    "categorias": [
     "Technical",
     "Operational",
     "Economic",
     "Legal and regulatory"
    ],
    "items": [
     {
      "texto": "Can the systems be integrated through an API?",
      "categoria": "Technical"
     },
     {
      "texto": "Does the plant network support the volume?",
      "categoria": "Technical"
     },
     {
      "texto": "Will the supervisors accept giving up their approval role?",
      "categoria": "Operational"
     },
     {
      "texto": "Do the necessary roles and skills exist?",
      "categoria": "Operational"
     },
     {
      "texto": "Is the NPV positive at the required rate?",
      "categoria": "Economic"
     },
     {
      "texto": "How long does it take to recover the investment?",
      "categoria": "Economic"
     },
     {
      "texto": "Does it comply with data protection regulations?",
      "categoria": "Legal and regulatory"
     },
     {
      "texto": "Does the electronic invoice meet the tax requirements?",
      "categoria": "Legal and regulatory"
     }
    ],
    "explicacion": "Almost everything is technically possible; operational feasibility is what kills the most projects. A flawless system nobody uses delivers zero benefit."
   },
   {
    "consigna": "Classify each tool or philosophy by the problem it attacks.",
    "categorias": [
     "Basic order and discipline",
     "Flow and inventory",
     "Error prevention",
     "Variation and defects"
    ],
    "items": [
     {
      "texto": "5S",
      "categoria": "Basic order and discipline"
     },
     {
      "texto": "Workstation standardization",
      "categoria": "Basic order and discipline"
     },
     {
      "texto": "Just in Time",
      "categoria": "Flow and inventory"
     },
     {
      "texto": "Kanban",
      "categoria": "Flow and inventory"
     },
     {
      "texto": "Work in process (WIP) limit",
      "categoria": "Flow and inventory"
     },
     {
      "texto": "Poka-Yoke",
      "categoria": "Error prevention"
     },
     {
      "texto": "Mandatory field with validation",
      "categoria": "Error prevention"
     },
     {
      "texto": "Six Sigma / DMAIC",
      "categoria": "Variation and defects"
     },
     {
      "texto": "Statistical process control",
      "categoria": "Variation and defects"
     }
    ],
    "explicacion": "They all live together under the Lean umbrella. Choosing the right tool starts with diagnosing which of the four problems you have."
   },
   {
    "consigna": "Classify each indicator or argument by the audience it speaks to.",
    "categorias": [
     "CEO",
     "CFO",
     "CIO / architect",
     "Operations director"
    ],
    "items": [
     {
      "texto": "We deliver in 8 hours instead of 72",
      "categoria": "CEO"
     },
     {
      "texto": "It improves our position against the competition",
      "categoria": "CEO"
     },
     {
      "texto": "Positive NPV and a 13-month payback",
      "categoria": "CFO"
     },
     {
      "texto": "$1.1 M in net savings over three years",
      "categoria": "CFO"
     },
     {
      "texto": "It retires 3 redundant systems from the portfolio",
      "categoria": "CIO / architect"
     },
     {
      "texto": "It avoids a new point-to-point integration",
      "categoria": "CIO / architect"
     },
     {
      "texto": "It frees 3 people for higher-value activities",
      "categoria": "Operations director"
     },
     {
      "texto": "The transition happens in phases, without stopping the plant",
      "categoria": "Operations director"
     }
    ],
    "explicacion": "This is view and viewpoint taken into the boardroom: the same architecture, a different view depending on the concerns of whoever is listening."
   },
   {
    "consigna": "Classify each situation by the BPM maturity level it describes.",
    "categorias": [
     "Level 1 — Initial",
     "Level 2 — Repeatable",
     "Level 3 — Defined",
     "Level 4 — Measured",
     "Level 5 — Optimized"
    ],
    "items": [
     {
      "texto": "The result depends on who is on shift",
      "categoria": "Level 1 — Initial"
     },
     {
      "texto": "There are no documented processes",
      "categoria": "Level 1 — Initial"
     },
     {
      "texto": "Each area documents and repeats its own way of working",
      "categoria": "Level 2 — Repeatable"
     },
     {
      "texto": "There is no end-to-end view of the flow",
      "categoria": "Level 2 — Repeatable"
     },
     {
      "texto": "Standardized processes across the whole organization",
      "categoria": "Level 3 — Defined"
     },
     {
      "texto": "Every process has a designated owner",
      "categoria": "Level 3 — Defined"
     },
     {
      "texto": "Indicators trigger action when there is a deviation",
      "categoria": "Level 4 — Measured"
     },
     {
      "texto": "You control the process with data, not with opinions",
      "categoria": "Level 4 — Measured"
     },
     {
      "texto": "Continuous improvement is institutionalized",
      "categoria": "Level 5 — Optimized"
     }
    ],
    "explicacion": "Most organizations sit between 1 and 2, and that is a legitimate starting point. The value of the diagnosis is identifying what is missing to reach the next level, not the score."
   }
  ],
  "ordenar": [
   {
    "consigna": "Put the five Design Thinking phases in order.",
    "pasos": [
     "Empathize",
     "Define",
     "Ideate",
     "Prototype",
     "Test"
    ],
    "explicacion": "It is iterative: testing can send you back to any earlier phase, even to empathize if you discover you misunderstood the problem."
   },
   {
    "consigna": "Put in order the testing sequence that comes before releasing to the whole organization.",
    "pasos": [
     "Validation of the model against the real operation",
     "Functional testing, including exception cases",
     "Integration testing between systems",
     "Load testing with peak volume",
     "User acceptance testing (UAT)",
     "Controlled pilot at one site",
     "Adjustment with what the pilot taught you"
    ],
    "explicacion": "Each level is more expensive to run and more expensive to fail. Finding the error in functional testing costs a fraction of finding it in the pilot."
   },
   {
    "consigna": "Put the links of the ADKAR model in order.",
    "pasos": [
     "Awareness — knowing why the change is happening",
     "Desire — wanting to take part in the change",
     "Knowledge — knowing how to do it",
     "Ability — being able to do it in practice",
     "Reinforcement — making the change stick"
    ],
    "explicacion": "If one link fails, the change fails. Training (Knowledge) someone who does not want to change (Desire) gets you nowhere: each link needs a different intervention."
   },
   {
    "consigna": "Put the go-live steps in order.",
    "pasos": [
     "Agreed entry criteria",
     "Data migration and validation",
     "Rollback plan defined",
     "Change freeze",
     "Start-up with hypercare",
     "Early measurement against the baseline",
     "Handover to operations with a designated owner",
     "Closure and benefits evaluation"
    ],
    "explicacion": "Benefits evaluation is the step almost every organization skips, and it is the one that turns experience into the ability to estimate better next time."
   },
   {
    "consigna": "Put the structure of an executive presentation of the proposal in order.",
    "pasos": [
     "The problem with its magnitude measured",
     "The findings and the data that back them",
     "The desired situation in a single image",
     "The AS-IS / TO-BE table with the same indicators",
     "Investment, NPV and payback",
     "Risks and how you mitigate them",
     "The decision that is needed today",
     "Appendices with the technical detail"
    ],
    "explicacion": "The full BPMN diagram belongs in the appendices, never at the start. Management buys results, risk and a decision."
   },
   {
    "consigna": "Put the maturity levels of an initiative in order, from least to most mature.",
    "pasos": [
     "Idea — stated, with no evidence",
     "Concept — problem and benefit estimated",
     "Proof of concept — technical viability demonstrated",
     "Pilot — tested with real users and measured",
     "Scalable — business case validated, ready to deploy"
    ],
    "explicacion": "Each level deserves a different kind of evidence and investment. Demanding a full business case from a level 1 idea kills innovation; rolling out a level 2 one across the whole company breaks it."
   },
   {
    "consigna": "Put in order the full path of an improvement proposal, the way you deliver it at the end of the course.",
    "pasos": [
     "Business need with its magnitude",
     "Process selected and scoped (SIPOC)",
     "AS-IS diagnosis with numbers",
     "Alternatives evaluated with the same criteria",
     "Target architecture (TO-BE)",
     "Economic justification: NPV, payback, ROI",
     "Implementation and change management plan",
     "Operation, measurement and continuous improvement"
    ],
    "explicacion": "Technology shows up inside step 5, not the first one. That is the lesson the five weeks should leave you with."
   }
  ],
  "flashcards": [
   {
    "frente": "Triangulation rule",
    "reverso": "Interview (the why) + observation (the how) + data (the magnitude). If the three do not match, you have discovered that the organization does not know what it does."
   },
   {
    "frente": "Pain point",
    "reverso": "A concrete point where the process costs the user time, effort, money or uncertainty. You state it with evidence; it is neither a symptom nor a solution."
   },
   {
    "frente": "Design Thinking",
    "reverso": "Empathize → Define → Ideate → Prototype → Test. Iterative: testing can send you back to any phase."
   },
   {
    "frente": "The question that unlocks ideation",
    "reverso": "“Why does this area have to be involved at all?” Question whether the activity should exist, not how fast it is."
   },
   {
    "frente": "Value chain",
    "reverso": "Primary activities: inbound logistics, operations, outbound logistics, marketing and sales, and service. Support: infrastructure, HR, technology and procurement."
   },
   {
    "frente": "VA / NNVA / NVA",
    "reverso": "VA: the customer pays for it. NNVA: required by a standard or a control — you optimize it, you do not eliminate it. NVA: pure waste — you eliminate it."
   },
   {
    "frente": "5S",
    "reverso": "Seiri (sort) · Seiton (set in order) · Seiso (shine) · Seiketsu (standardize) · Shitsuke (sustain)."
   },
   {
    "frente": "Poka-Yoke",
    "reverso": "Error-proof design: it makes the error impossible instead of detecting it. It reduces the rejection rate r and with it the whole rework cycle."
   },
   {
    "frente": "Kanban and Little's Law",
    "reverso": "Kanban limits WIP. Since WIP = Throughput × Lead time, less WIP with the same capacity means less lead time."
   },
   {
    "frente": "The three feasibilities",
    "reverso": "Technical (can it be built?) · Operational (will they use it?) · Economic (is it worth it?). Operational feasibility is the one that kills the most projects."
   },
   {
    "frente": "Contribution margin",
    "reverso": "Price − unit variable cost. What each unit contributes to cover fixed costs and then generate profit."
   },
   {
    "frente": "Break-even point",
    "reverso": "Fixed costs / contribution margin. The volume at which profit is zero."
   },
   {
    "frente": "NPV",
    "reverso": "Σ [Ft / (1+k)^t] − Investment. If NPV > 0, the project creates value at the required rate. Always state the rate you used."
   },
   {
    "frente": "Annuity factor",
    "reverso": "AF = [1 − (1+k)^-n] / k. With equal cash flows: NPV = Cash flow × AF − Investment."
   },
   {
    "frente": "IRR",
    "reverso": "The rate at which NPV becomes zero. You compare it against the hurdle rate: the difference is the cushion before the project stops being worthwhile."
   },
   {
    "frente": "Why NPV and payback together",
    "reverso": "NPV tells you whether it creates value; payback tells you how exposed the company stays in the meantime. A good NPV with a five-year payback can be unacceptable."
   },
   {
    "frente": "Cost of doing nothing",
    "reverso": "The waste you keep paying for every month. It is almost never zero, and it is usually the most compelling argument in the whole proposal."
   },
   {
    "frente": "Criterion for customizing an ERP",
    "reverso": "Customize only where the process differentiates you in the market. Everywhere else, adopt the standard — every customization makes upgrades more expensive for years."
   },
   {
    "frente": "Simulation model validation",
    "reverso": "Does the simulated AS-IS reproduce the real operation you observed? Without this, the results are precise and false."
   },
   {
    "frente": "What to open an executive presentation with",
    "reverso": "With the problem and its magnitude. Never with the BPMN diagram or the technical architecture: that goes in the appendices."
   },
   {
    "frente": "The worst mistake when presenting",
    "reverso": "Changing indicators between the diagnosis and the proposal. If you measured lead time in the AS-IS, measure lead time in the TO-BE."
   },
   {
    "frente": "ADKAR",
    "reverso": "Awareness · Desire · Knowledge · Ability · Reinforcement. If one link fails, the change fails; each one is handled differently."
   },
   {
    "frente": "Closing the back door",
    "reverso": "Retire the previous system or form. As long as it exists and is more convenient, people will use it and the new process never takes hold."
   },
   {
    "frente": "Go-live strategies",
    "reverso": "Big bang (everything at once) · Phased · Pilot (one site) · Parallel (both at the same time). Parallel is reserved for critical, irreversible processes."
   },
   {
    "frente": "Cause no. 1 of failed go-lives",
    "reverso": "Data migration and validation."
   },
   {
    "frente": "Hypercare",
    "reverso": "Reinforced support during the first weeks after go-live, with a fast escalation path. Being there on go-live day is not enough."
   },
   {
    "frente": "Process owner",
    "reverso": "Answers for the performance of the end-to-end process, cutting across departments. Without one, the process degrades when the project ends."
   },
   {
    "frente": "BPM maturity (5 levels)",
    "reverso": "1 Initial · 2 Repeatable · 3 Defined · 4 Measured · 5 Optimized. Most organizations are between 1 and 2, and that is a legitimate starting point."
   },
   {
    "frente": "Maturity of an initiative",
    "reverso": "Idea · Concept · Proof of concept · Pilot · Scalable. Each level deserves a different kind of evidence and investment."
   },
   {
    "frente": "Project charter",
    "reverso": "The document that formally authorizes the project and names the manager. Without a charter there is no project: there is activity."
   },
   {
    "frente": "The full path",
    "reverso": "Need → process → diagnosis with numbers → alternatives → target architecture → economic justification → implementation → operation and improvement. Technology goes in step 5, not step 1."
   }
  ]
 }
}
);
