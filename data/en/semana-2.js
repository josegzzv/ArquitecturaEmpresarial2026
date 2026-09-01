/* Generado por herramientas/cadenas.js — no editar a mano la estructura.
   Para corregir una traducción: edita herramientas/traduccion/semana-2.json
   y vuelve a ejecutar:  node herramientas/cadenas.js inyectar semana-2 */
EA.registrarSemanaEn(
{
 "id": 2,
 "estado": "publicada",
 "titulo": "Strategy, governance frameworks and artifacts",
 "subtitulo": "From the business need to the architecture artifact, with quantitative evidence.",
 "sesiones": 3,
 "objetivos": [
  "Explain why an IT project does not start by selecting technology.",
  "Distinguish automation, digitalization and digital transformation on one and the same process.",
  "Recognize the types of enterprise applications and the problem of the fragmented ecosystem.",
  "Choose the right framework, standard or methodology for the problem: TOGAF, Zachman, COBIT, ITIL, ISO, BPMN, Lean/Six Sigma.",
  "Build architecture artifacts: SIPOC, process map, application landscape, process-application matrix, data flow, TO-BE, gap and roadmap.",
  "Distinguish deliverable from artifact and view from viewpoint.",
  "Back the improvement with hard data: lead time, processing time, cost per transaction and error rate."
 ],
 "dias": [
  {
   "id": "martes",
   "nombre": "Session 1",
   "tema": "From strategy to the technology project",
   "proposito": "Understand that an IT project does not start by selecting technology, and learn to gather the hard data that shows where the problem really is.",
   "bloques": [
    {
     "tipo": "clave",
     "titulo": "The correct sequence",
     "cuerpo": "<p>Business need → Process → Problem or opportunity → Data → Capabilities → Requirements → Architecture → Technology.</p><p><b>And not:</b> “I found an AI tool, where can we use it?”.</p>"
    },
    {
     "tipo": "tabla",
     "titulo": "From the strategic objective to technology",
     "encabezados": [
      "Level",
      "Example"
     ],
     "filas": [
      [
       "Strategic objective",
       "Reduce customer lead time"
      ],
      [
       "KPI",
       "Lead time"
      ],
      [
       "Target",
       "5 days → 2 days"
      ],
      [
       "Affected process",
       "Order-to-Cash"
      ],
      [
       "Problem",
       "Manual data entry and approval chain"
      ],
      [
       "Required capability",
       "Automated order processing"
      ],
      [
       "Applications",
       "ERP + WMS + customer portal"
      ],
      [
       "Data",
       "Customer, order, inventory"
      ],
      [
       "Technology",
       "APIs, workflow, cloud"
      ]
     ]
    },
    {
     "tipo": "nota",
     "titulo": "Core idea",
     "cuerpo": "<p>Technology is a <b>consequence</b> of a business decision, not the starting point.</p>"
    },
    {
     "tipo": "texto",
     "titulo": "One case, three levels: vacation request",
     "cuerpo": "<p><b>Original situation.</b> The employee fills in a paper form → the manager signs it → HR keys it in → files it.</p><p><b>Digitalization.</b> The form becomes a PDF. There is no more paper, but the flow is identical: the employee fills in the PDF → sends an email → the manager signs → HR keys it in.</p><p><b>Automation.</b> The employee enters the request, the system checks the balance, sends the approval and updates automatically. Manual work is eliminated.</p><p><b>Digital transformation.</b> The whole process is questioned: why does HR have to be involved at all? The employee requests it from an app, and the system knows the balance, the calendar, team coverage and policies, and automatically authorizes certain cases.</p>"
    },
    {
     "tipo": "nota",
     "titulo": "Question for the group",
     "cuerpo": "<p>If I replace an Excel file with a web screen but keep exactly the same process, have I transformed the business? <b>Not necessarily.</b></p>"
    },
    {
     "tipo": "svg",
     "titulo": "Enterprise application ecosystem",
     "pie": "Every area brings its own system. What makes them an ecosystem —and not four islands— is the integration layer; in many companies the ERP also plays that core role.",
     "svg": "<svg viewBox=\"0 0 660 372\" role=\"img\" aria-label=\"Cuatro áreas con su sistema — ventas con CRM, operación con MES, finanzas con ERP, personas con HCM — conectadas por una capa de integración que alimenta la plataforma de datos y esta a BI e inteligencia artificial\"><defs><marker id=\"pa-eco\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path class=\"punta\" d=\"M0,0 L10,5 L0,10 z\"/></marker></defs><text class=\"rotulo-alt\" x=\"90\" y=\"18\" text-anchor=\"middle\">SALES</text><text class=\"rotulo-alt\" x=\"250\" y=\"18\" text-anchor=\"middle\">OPS</text><text class=\"rotulo-alt\" x=\"410\" y=\"18\" text-anchor=\"middle\">FINANCE</text><text class=\"rotulo-alt\" x=\"570\" y=\"18\" text-anchor=\"middle\">PEOPLE</text><rect class=\"caja\" x=\"20\" y=\"30\" width=\"140\" height=\"46\" rx=\"10\"/><text class=\"rotulo\" x=\"90\" y=\"51\" text-anchor=\"middle\">CRM</text><text class=\"rotulo-sm\" x=\"90\" y=\"66\" text-anchor=\"middle\">customers & sales</text><rect class=\"caja\" x=\"180\" y=\"30\" width=\"140\" height=\"46\" rx=\"10\"/><text class=\"rotulo\" x=\"250\" y=\"51\" text-anchor=\"middle\">MES</text><text class=\"rotulo-sm\" x=\"250\" y=\"66\" text-anchor=\"middle\">shop floor</text><rect class=\"caja\" x=\"340\" y=\"30\" width=\"140\" height=\"46\" rx=\"10\"/><text class=\"rotulo\" x=\"410\" y=\"51\" text-anchor=\"middle\">ERP</text><text class=\"rotulo-sm\" x=\"410\" y=\"66\" text-anchor=\"middle\">transactions</text><rect class=\"caja\" x=\"500\" y=\"30\" width=\"140\" height=\"46\" rx=\"10\"/><text class=\"rotulo\" x=\"570\" y=\"51\" text-anchor=\"middle\">HCM</text><text class=\"rotulo-sm\" x=\"570\" y=\"66\" text-anchor=\"middle\">human capital</text><path class=\"arista\" d=\"M90,78 L90,110\" marker-end=\"url(#pa-eco)\"/><path class=\"arista\" d=\"M250,78 L250,110\" marker-end=\"url(#pa-eco)\"/><path class=\"arista\" d=\"M410,78 L410,110\" marker-end=\"url(#pa-eco)\"/><path class=\"arista\" d=\"M570,78 L570,110\" marker-end=\"url(#pa-eco)\"/><rect class=\"caja-viva\" x=\"20\" y=\"114\" width=\"620\" height=\"46\" rx=\"12\"/><text class=\"rotulo\" x=\"330\" y=\"135\" text-anchor=\"middle\">Integration layer</text><text class=\"rotulo-sm\" x=\"330\" y=\"150\" text-anchor=\"middle\">APIs, events, middleware · data is captured only once</text><path class=\"arista\" d=\"M330,162 L330,192\" marker-end=\"url(#pa-eco)\"/><rect class=\"caja\" x=\"190\" y=\"196\" width=\"280\" height=\"46\" rx=\"10\"/><text class=\"rotulo\" x=\"330\" y=\"217\" text-anchor=\"middle\">Data platform</text><text class=\"rotulo-sm\" x=\"330\" y=\"232\" text-anchor=\"middle\">master & consolidated data</text><path class=\"arista\" d=\"M330,244 L330,274\" marker-end=\"url(#pa-eco)\"/><rect class=\"caja-alt\" x=\"190\" y=\"278\" width=\"280\" height=\"46\" rx=\"10\"/><text class=\"rotulo\" x=\"330\" y=\"299\" text-anchor=\"middle\">BI / Analytics / AI</text><text class=\"rotulo-sm\" x=\"330\" y=\"314\" text-anchor=\"middle\">decisions based on integrated data</text><text class=\"rotulo-sm\" x=\"330\" y=\"348\" text-anchor=\"middle\">Without integration, each system is an island and the same data is keyed in four times.</text></svg>"
    },
    {
     "tipo": "defs",
     "titulo": "Types of enterprise applications",
     "items": [
      {
       "termino": "ERP",
       "definicion": "Enterprise Resource Planning: core resources and transactions."
      },
      {
       "termino": "CRM",
       "definicion": "Customer Relationship Management: customers and sales."
      },
      {
       "termino": "HCM / HRM",
       "definicion": "Human capital and people management."
      },
      {
       "termino": "SCM",
       "definicion": "Supply Chain Management: the supply chain."
      },
      {
       "termino": "MES",
       "definicion": "Manufacturing Execution System: manufacturing execution on the shop floor."
      },
      {
       "termino": "WMS",
       "definicion": "Warehouse Management System: warehouses."
      },
      {
       "termino": "PLM",
       "definicion": "Product Lifecycle Management: the product lifecycle."
      },
      {
       "termino": "ECM / DMS",
       "definicion": "Content and document management."
      },
      {
       "termino": "BI / Analytics",
       "definicion": "Information analysis and dashboards."
      },
      {
       "termino": "BPM / Workflow",
       "definicion": "Process orchestration and automation."
      },
      {
       "termino": "ITSM",
       "definicion": "IT Service Management: management of IT services."
      }
     ]
    },
    {
     "tipo": "clave",
     "titulo": "The “tutti frutti” problem",
     "cuerpo": "<p>A large company does not have “one system”. It has an <b>application ecosystem</b>, and that is where fragmentation, duplication and the lack of traceability come from.</p>"
    },
    {
     "tipo": "defs",
     "titulo": "Process classification",
     "items": [
      {
       "termino": "Process",
       "definicion": "A set of activities that transforms inputs into outputs that create value."
      },
      {
       "termino": "Strategic",
       "definicion": "They set direction, policies and objectives."
      },
      {
       "termino": "Core or operational",
       "definicion": "They produce the value the customer perceives."
      },
      {
       "termino": "Support",
       "definicion": "They enable the previous ones: HR, IT, finance, legal."
      }
     ]
    },
    {
     "tipo": "flujo",
     "titulo": "SIPOC",
     "pasos": [
      "Supplier",
      "Input",
      "Process",
      "Output",
      "Customer"
     ]
    },
    {
     "tipo": "flujo",
     "titulo": "Example: purchasing process",
     "pasos": [
      "User",
      "Request",
      "Approval",
      "Quotation",
      "Purchase order",
      "Receipt",
      "Invoice",
      "Payment"
     ]
    },
    {
     "tipo": "tabla",
     "titulo": "Hard process data: where the real problem is",
     "encabezados": [
      "Activity",
      "Process (actual work)",
      "Wait",
      "Responsible"
     ],
     "filas": [
      [
       "Create request",
       "10 min",
       "—",
       "User"
      ],
      [
       "Approval",
       "2 min",
       "18 h",
       "Manager"
      ],
      [
       "Create purchase order",
       "8 min",
       "4 h",
       "Purchasing"
      ],
      [
       "Send to supplier",
       "2 min",
       "1 h",
       "Purchasing"
      ],
      [
       "<b>Total</b>",
       "<b>22 min</b>",
       "<b>23 h</b>",
       "—"
      ]
     ]
    },
    {
     "tipo": "clave",
     "titulo": "The correct reading",
     "cuerpo": "<p>Time actually spent working: <b>22 minutes</b>. Lead time: <b>23 h 22 min</b>.</p><p>The problem is not speeding up those 22 minutes, but the <b>23 hours of waiting</b>. That is where Lean comes in.</p>"
    },
    {
     "tipo": "defs",
     "titulo": "Lean, Six Sigma and Kaizen",
     "items": [
      {
       "termino": "Lean",
       "definicion": "Eliminate waste: waiting, rework, motion, overprocessing, inventory, transport, defects."
      },
      {
       "termino": "Six Sigma",
       "definicion": "Reduce variation and defects through statistical analysis."
      },
      {
       "termino": "Kaizen",
       "definicion": "Incremental continuous improvement, with participation from the people who run the process."
      }
     ]
    },
    {
     "tipo": "flujo",
     "titulo": "DMAIC",
     "pasos": [
      "Define",
      "Measure",
      "Analyze",
      "Improve",
      "Control"
     ]
    },
    {
     "tipo": "nota",
     "titulo": "Session 1 activity",
     "cuerpo": "<p>A company takes 72 hours to onboard a supplier. Purchasing, Finance, Legal and IT are all involved. The process uses Excel, email, the ERP and PDF documents.</p><p>In teams: objective → process → problems → KPI → possible improvements → technology that could play a part. <b>You still cannot pick a product</b>: that forces you to think like architects.</p>"
    }
   ]
  },
  {
   "id": "miercoles",
   "nombre": "Session 2",
   "tema": "Frameworks, standards and governance",
   "proposito": "Clear up a very common confusion: not everything is a “framework” for the same thing. Each one answers a different question and they can coexist.",
   "bloques": [
    {
     "tipo": "tabla",
     "titulo": "Each framework answers a different question",
     "encabezados": [
      "Framework or standard",
      "Main question it answers"
     ],
     "filas": [
      [
       "TOGAF",
       "How do I design and evolve the enterprise architecture?"
      ],
      [
       "Zachman",
       "How do I classify and describe the enterprise from different perspectives?"
      ],
      [
       "COBIT",
       "How do I govern and control IT?"
      ],
      [
       "ITIL",
       "How do I manage IT services?"
      ],
      [
       "ISO/IEC 27001",
       "How do I manage information security?"
      ],
      [
       "ISO/IEC 20000-1",
       "How do I formally manage IT services?"
      ],
      [
       "ISO 9001",
       "How do I manage quality?"
      ],
      [
       "BPMN",
       "How do I model a process?"
      ],
      [
       "Lean / Six Sigma",
       "How do I improve a process?"
      ]
     ]
    },
    {
     "tipo": "clave",
     "titulo": "You do not pick one and discard the rest",
     "cuerpo": "<p>They can coexist because they solve different problems. A company with several simultaneous problems will use several frameworks in a complementary way.</p>"
    },
    {
     "tipo": "texto",
     "titulo": "TOGAF: why enterprise architecture exists",
     "cuerpo": "<p><b>Problem:</b> “I want to implement e-commerce”. The student normally thinks about the application: Shopify.</p><p>The architect asks about the four domains:</p><ul><li><b>Business:</b> how does the Order-to-Cash process change?</li><li><b>Data:</b> where do customer, product, price and inventory live?</li><li><b>Application:</b> does the e-commerce platform talk to the ERP, CRM, WMS?</li><li><b>Technology:</b> cloud, API gateway, identity, network?</li></ul><p>That single discussion explains why Enterprise Architecture exists.</p>"
    },
    {
     "tipo": "flujo",
     "titulo": "The logic of the ADM (no memorizing yet)",
     "pasos": [
      "Vision",
      "Business",
      "Information Systems (Data + Applications)",
      "Technology",
      "Opportunities & Solutions",
      "Migration Planning",
      "Implementation Governance",
      "Change Management"
     ]
    },
    {
     "tipo": "texto",
     "titulo": "Zachman: the matrix",
     "cuerpo": "<p>Six questions: <b>What</b> (data), <b>How</b> (function), <b>Where</b> (network), <b>Who</b> (people), <b>When</b> (time), <b>Why</b> (motivation), looked at from different perspectives.</p><p><b>TOGAF</b> is more like a <i>method</i> for developing architecture. <b>Zachman</b> is more like a <i>taxonomy</i> for making sure we are describing every aspect and perspective of the organization.</p>"
    },
    {
     "tipo": "texto",
     "titulo": "COBIT versus ITIL",
     "cuerpo": "<p><b>COBIT — governance.</b> Are we doing the right things, controlling risks and creating value?</p><p><b>ITIL — service management.</b> How do we design, deliver, support and improve the service?</p>"
    },
    {
     "tipo": "tabla",
     "titulo": "Example: SAP goes down",
     "encabezados": [
      "Through an ITIL lens",
      "Through a COBIT lens"
     ],
     "filas": [
      [
       "How do we log the incident?",
       "Who is accountable?"
      ],
      [
       "How do we prioritize it?",
       "Do we have defined controls?"
      ],
      [
       "How do we restore the service?",
       "Is the risk acceptable?"
      ],
      [
       "Is it a recurring problem?",
       "Do we have performance metrics?"
      ],
      [
       "Does it require a change?",
       "Is it aligned with the business objectives?"
      ]
     ]
    },
    {
     "tipo": "clave",
     "titulo": "ISO versus the frameworks",
     "cuerpo": "<p><b>ISO can set certifiable requirements.</b> TOGAF, COBIT or ITIL generally work as frameworks, methodologies or good practices with different purposes. It is not about memorizing standard numbers, but about knowing which problem each one solves.</p>"
    },
    {
     "tipo": "tabla",
     "titulo": "Session 2 activity: what would you use?",
     "encabezados": [
      "Case",
      "Answer"
     ],
     "filas": [
      [
       "A · Redesign the global architecture after acquiring three companies",
       "TOGAF"
      ],
      [
       "B · An audit found weak IT controls",
       "COBIT"
      ],
      [
       "C · Users complain about incidents that take days",
       "ITIL"
      ],
      [
       "D · A certifiable ISMS needs to be implemented",
       "ISO/IEC 27001"
      ],
      [
       "E · Graphically represent the Order-to-Cash process",
       "BPMN"
      ],
      [
       "F · The process has too much wait time and rework",
       "Lean / Six Sigma"
      ]
     ]
    },
    {
     "tipo": "nota",
     "titulo": "The interesting question",
     "cuerpo": "<p>What happens if our company has all of those problems at the same time? <b>It will probably use several frameworks in a complementary way.</b></p>"
    }
   ]
  },
  {
   "id": "jueves",
   "nombre": "Session 3",
   "tema": "Enterprise Architecture artifacts and the challenge",
   "proposito": "Learn to document the AS-IS, design the TO-BE and demonstrate the improvement quantitatively. This is the most important session for the challenge deliverable.",
   "bloques": [
    {
     "tipo": "clave",
     "titulo": "What is an artifact?",
     "cuerpo": "<p>An architecture artifact is a <b>structured representation of some relevant aspect of the enterprise or of its architecture</b>, created to analyze it, communicate it, decide on it or govern it.</p><p>It does not have to be a diagram: it can be a catalog, a matrix, a map, a model, a diagram, a standard, a principle, a roadmap, an assessment or a heatmap.</p>"
    },
    {
     "tipo": "svg",
     "titulo": "Artifact 1 · Process Map AS-IS (supplier onboarding)",
     "pie": "The AS-IS map documents reality, not the manual. Putting the tool that supports each stage underneath it makes the fragmentation visible: six pairs of hands, four systems and the same data captured three times.",
     "svg": "<svg viewBox=\"0 0 880 232\" role=\"img\" aria-label=\"Cadena de seis etapas del alta de proveedores, cada una con el área responsable y la herramienta que usa: correo, Excel, email, SharePoint, email y ERP\"><defs><marker id=\"pa-asis\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path class=\"punta\" d=\"M0,0 L10,5 L0,10 z\"/></marker></defs><text class=\"rotulo-alt\" x=\"82\" y=\"20\" text-anchor=\"middle\">SUPPLIER</text><text class=\"rotulo-alt\" x=\"225\" y=\"20\" text-anchor=\"middle\">PURCH.</text><text class=\"rotulo-alt\" x=\"368\" y=\"20\" text-anchor=\"middle\">MANAGER</text><text class=\"rotulo-alt\" x=\"511\" y=\"20\" text-anchor=\"middle\">LEGAL</text><text class=\"rotulo-alt\" x=\"654\" y=\"20\" text-anchor=\"middle\">FINANCE</text><text class=\"rotulo-alt\" x=\"797\" y=\"20\" text-anchor=\"middle\">PURCH.</text><rect class=\"caja\" x=\"20\" y=\"32\" width=\"125\" height=\"46\" rx=\"10\"/><text class=\"rotulo\" x=\"82\" y=\"53\" text-anchor=\"middle\">Send data</text><text class=\"rotulo-sm\" x=\"82\" y=\"68\" text-anchor=\"middle\">& documents</text><rect class=\"caja\" x=\"163\" y=\"32\" width=\"125\" height=\"46\" rx=\"10\"/><text class=\"rotulo\" x=\"225\" y=\"53\" text-anchor=\"middle\">Enter</text><text class=\"rotulo-sm\" x=\"225\" y=\"68\" text-anchor=\"middle\">request</text><rect class=\"caja\" x=\"306\" y=\"32\" width=\"125\" height=\"46\" rx=\"10\"/><text class=\"rotulo\" x=\"368\" y=\"53\" text-anchor=\"middle\">Approve</text><text class=\"rotulo-sm\" x=\"368\" y=\"68\" text-anchor=\"middle\">18 h waiting</text><rect class=\"caja\" x=\"449\" y=\"32\" width=\"125\" height=\"46\" rx=\"10\"/><text class=\"rotulo\" x=\"511\" y=\"53\" text-anchor=\"middle\">Review</text><text class=\"rotulo-sm\" x=\"511\" y=\"68\" text-anchor=\"middle\">contract</text><rect class=\"caja\" x=\"592\" y=\"32\" width=\"125\" height=\"46\" rx=\"10\"/><text class=\"rotulo\" x=\"654\" y=\"53\" text-anchor=\"middle\">Verify</text><text class=\"rotulo-sm\" x=\"654\" y=\"68\" text-anchor=\"middle\">tax and banking</text><rect class=\"caja\" x=\"735\" y=\"32\" width=\"125\" height=\"46\" rx=\"10\"/><text class=\"rotulo\" x=\"797\" y=\"53\" text-anchor=\"middle\">Add</text><text class=\"rotulo-sm\" x=\"797\" y=\"68\" text-anchor=\"middle\">to the master</text><path class=\"arista\" d=\"M147,55 L159,55\" marker-end=\"url(#pa-asis)\"/><path class=\"arista\" d=\"M290,55 L302,55\" marker-end=\"url(#pa-asis)\"/><path class=\"arista\" d=\"M433,55 L445,55\" marker-end=\"url(#pa-asis)\"/><path class=\"arista\" d=\"M576,55 L588,55\" marker-end=\"url(#pa-asis)\"/><path class=\"arista\" d=\"M719,55 L731,55\" marker-end=\"url(#pa-asis)\"/><path class=\"arista-punteada\" d=\"M82,80 L82,100\"/><path class=\"arista-punteada\" d=\"M225,80 L225,100\"/><path class=\"arista-punteada\" d=\"M368,80 L368,100\"/><path class=\"arista-punteada\" d=\"M511,80 L511,100\"/><path class=\"arista-punteada\" d=\"M654,80 L654,100\"/><path class=\"arista-punteada\" d=\"M797,80 L797,100\"/><rect class=\"caja-viva\" x=\"32\" y=\"102\" width=\"100\" height=\"28\" rx=\"8\"/><text class=\"rotulo-sm\" x=\"82\" y=\"120\" text-anchor=\"middle\">Email</text><rect class=\"caja-viva\" x=\"175\" y=\"102\" width=\"100\" height=\"28\" rx=\"8\"/><text class=\"rotulo-sm\" x=\"225\" y=\"120\" text-anchor=\"middle\">Excel</text><rect class=\"caja-viva\" x=\"318\" y=\"102\" width=\"100\" height=\"28\" rx=\"8\"/><text class=\"rotulo-sm\" x=\"368\" y=\"120\" text-anchor=\"middle\">Outlook</text><rect class=\"caja-viva\" x=\"461\" y=\"102\" width=\"100\" height=\"28\" rx=\"8\"/><text class=\"rotulo-sm\" x=\"511\" y=\"120\" text-anchor=\"middle\">SharePoint</text><rect class=\"caja-viva\" x=\"604\" y=\"102\" width=\"100\" height=\"28\" rx=\"8\"/><text class=\"rotulo-sm\" x=\"654\" y=\"120\" text-anchor=\"middle\">Outlook</text><rect class=\"caja-viva\" x=\"747\" y=\"102\" width=\"100\" height=\"28\" rx=\"8\"/><text class=\"rotulo-sm\" x=\"797\" y=\"120\" text-anchor=\"middle\">ERP</text><path class=\"arista\" d=\"M20,158 L20,168 L860,168 L860,158\"/><text class=\"rotulo\" x=\"440\" y=\"192\" text-anchor=\"middle\">Total lead time: 72 hours</text><text class=\"rotulo-sm\" x=\"440\" y=\"210\" text-anchor=\"middle\">6 people · 4 systems · 3 entries of the same data · 8 % rework</text></svg>"
    },
    {
     "tipo": "tabla",
     "titulo": "Artifact 2 · Application Portfolio",
     "encabezados": [
      "Application",
      "Function",
      "Owner",
      "Criticality",
      "Problem"
     ],
     "filas": [
      [
       "Excel",
       "Data entry",
       "Purchasing",
       "Medium",
       "Manual"
      ],
      [
       "Outlook",
       "De facto workflow",
       "IT",
       "High",
       "No traceability"
      ],
      [
       "ERP",
       "Supplier master",
       "Finance",
       "Critical",
       "Manual data entry"
      ],
      [
       "SharePoint",
       "Documents",
       "Legal",
       "Medium",
       "Duplication"
      ]
     ]
    },
    {
     "tipo": "tabla",
     "titulo": "Artifact 3 · Process-application matrix",
     "encabezados": [
      "Process stage",
      "Excel",
      "Email",
      "ERP",
      "SharePoint"
     ],
     "filas": [
      [
       "Request",
       "●",
       "",
       "",
       ""
      ],
      [
       "Approval",
       "",
       "●",
       "",
       ""
      ],
      [
       "Validation",
       "",
       "●",
       "",
       "●"
      ],
      [
       "Registration",
       "",
       "",
       "●",
       ""
      ],
      [
       "Documentation",
       "",
       "",
       "",
       "●"
      ]
     ]
    },
    {
     "tipo": "nota",
     "titulo": "What this matrix is for",
     "cuerpo": "<p>It lets you <b>discover the fragmentation</b>: no application covers the whole process and the information jumps from tool to tool.</p>"
    },
    {
     "tipo": "svg",
     "titulo": "Artifact 4 · TO-BE integration diagram",
     "pie": "The real change is not the portal: it is that the supplier enters its own data once and a workflow engine orchestrates the validations in parallel, against a single set of master data.",
     "svg": "<svg viewBox=\"0 0 640 388\" role=\"img\" aria-label=\"Arquitectura objetivo: el portal de proveedores alimenta un motor de workflow que orquesta en paralelo el ERP, el gestor documental y la validación de cumplimiento, todos sobre un dato maestro único\"><defs><marker id=\"pa-tobe\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path class=\"punta\" d=\"M0,0 L10,5 L0,10 z\"/></marker></defs><rect class=\"caja-alt\" x=\"200\" y=\"14\" width=\"240\" height=\"50\" rx=\"12\"/><text class=\"rotulo\" x=\"320\" y=\"36\" text-anchor=\"middle\">Supplier portal</text><text class=\"rotulo-sm\" x=\"320\" y=\"52\" text-anchor=\"middle\">the supplier enters its data</text><path class=\"arista-viva\" d=\"M320,66 L320,92\" marker-end=\"url(#pa-tobe)\"/><text class=\"rotulo-viva\" x=\"332\" y=\"84\">1 single entry</text><rect class=\"caja-viva\" x=\"180\" y=\"96\" width=\"280\" height=\"52\" rx=\"12\"/><text class=\"rotulo\" x=\"320\" y=\"119\" text-anchor=\"middle\">Workflow / BPM engine</text><text class=\"rotulo-sm\" x=\"320\" y=\"135\" text-anchor=\"middle\">rules, traceability and parallel validations</text><path class=\"arista\" d=\"M250,150 C250,180 120,170 110,198\" marker-end=\"url(#pa-tobe)\"/><path class=\"arista\" d=\"M320,150 L320,198\" marker-end=\"url(#pa-tobe)\"/><path class=\"arista\" d=\"M390,150 C390,180 520,170 530,198\" marker-end=\"url(#pa-tobe)\"/><rect class=\"caja\" x=\"25\" y=\"202\" width=\"170\" height=\"52\" rx=\"10\"/><text class=\"rotulo\" x=\"110\" y=\"225\" text-anchor=\"middle\">ERP</text><text class=\"rotulo-sm\" x=\"110\" y=\"241\" text-anchor=\"middle\">supplier master</text><rect class=\"caja\" x=\"235\" y=\"202\" width=\"170\" height=\"52\" rx=\"10\"/><text class=\"rotulo\" x=\"320\" y=\"225\" text-anchor=\"middle\">Document manager</text><text class=\"rotulo-sm\" x=\"320\" y=\"241\" text-anchor=\"middle\">contracts and file</text><rect class=\"caja\" x=\"445\" y=\"202\" width=\"170\" height=\"52\" rx=\"10\"/><text class=\"rotulo\" x=\"530\" y=\"225\" text-anchor=\"middle\">Compliance</text><text class=\"rotulo-sm\" x=\"530\" y=\"241\" text-anchor=\"middle\">tax validation and lists</text><path class=\"arista\" d=\"M110,256 C110,286 240,280 252,304\" marker-end=\"url(#pa-tobe)\"/><path class=\"arista\" d=\"M320,256 L320,304\" marker-end=\"url(#pa-tobe)\"/><path class=\"arista\" d=\"M530,256 C530,286 400,280 388,304\" marker-end=\"url(#pa-tobe)\"/><rect class=\"caja-alt\" x=\"180\" y=\"308\" width=\"280\" height=\"50\" rx=\"12\"/><text class=\"rotulo\" x=\"320\" y=\"330\" text-anchor=\"middle\">Single master data</text><text class=\"rotulo-sm\" x=\"320\" y=\"346\" text-anchor=\"middle\">one definition, one owner</text></svg>"
    },
    {
     "tipo": "flujo",
     "titulo": "The sequence you must master",
     "pasos": [
      "AS-IS",
      "Gap analysis",
      "TO-BE",
      "Roadmap"
     ]
    },
    {
     "tipo": "tabla",
     "titulo": "The 8 artifacts required for the challenge",
     "encabezados": [
      "#",
      "Artifact",
      "What it is for"
     ],
     "filas": [
      [
       "1",
       "Problem Statement",
       "Define the problem"
      ],
      [
       "2",
       "SIPOC / Process Map",
       "Understand the process"
      ],
      [
       "3",
       "AS-IS Process",
       "Document the current situation"
      ],
      [
       "4",
       "Application Landscape",
       "Identify the systems involved"
      ],
      [
       "5",
       "Process-Application Matrix",
       "Link process and technology"
      ],
      [
       "6",
       "Data / Information Flow",
       "Show how information moves"
      ],
      [
       "7",
       "TO-BE Architecture / Process",
       "Design the future solution"
      ],
      [
       "8",
       "Gap Analysis + Roadmap",
       "Define how you get from AS-IS to TO-BE"
      ]
     ]
    },
    {
     "tipo": "tabla",
     "titulo": "Mandatory quantitative layer · baseline and target",
     "encabezados": [
      "KPI",
      "AS-IS",
      "TO-BE",
      "Improvement"
     ],
     "filas": [
      [
       "Lead time",
       "72 h",
       "8 h",
       "−89 %"
      ],
      [
       "Processing time",
       "45 min",
       "15 min",
       "−67 %"
      ],
      [
       "People involved",
       "6",
       "3",
       "−50 %"
      ],
      [
       "Manual data entries",
       "3",
       "1",
       "−67 %"
      ],
      [
       "Error rate",
       "8 %",
       "1 %",
       "−87.5 %"
      ],
      [
       "Cost per transaction",
       "$180",
       "$70",
       "−61 %"
      ]
     ]
    },
    {
     "tipo": "clave",
     "titulo": "The evaluation criterion",
     "cuerpo": "<p><b>A diagram shows how you understood the process; the data shows whether your proposal actually improves it.</b></p>"
    },
    {
     "tipo": "defs",
     "titulo": "Deliverable versus artifact",
     "items": [
      {
       "termino": "Deliverable",
       "definicion": "Something that is formally handed over. Example: “Solution Architecture Document”."
      },
      {
       "termino": "Artifact",
       "definicion": "A structured piece of architectural information: process map, application matrix, data flow, integration diagram, gap analysis, roadmap."
      },
      {
       "termino": "Relationship",
       "definicion": "<b>A deliverable can contain multiple artifacts.</b>"
      }
     ]
    },
    {
     "tipo": "tabla",
     "titulo": "View and viewpoint: the same architecture is not presented the same way",
     "encabezados": [
      "Stakeholder",
      "What they care about"
     ],
     "filas": [
      [
       "CEO",
       "Value, risk, investment"
      ],
      [
       "CFO",
       "Costs, ROI"
      ],
      [
       "CISO",
       "Risks and controls"
      ],
      [
       "Architect",
       "Systems, interfaces, data"
      ],
      [
       "Developer",
       "APIs, components, protocols"
      ]
     ]
    },
    {
     "tipo": "nota",
     "titulo": "30-second exercise",
     "cuerpo": "<p>“Explain the project architecture to the CEO.” Thirty seconds. Then: “Now explain it to the integration architect.” The group immediately discovers why we need different views.</p>"
    },
    {
     "tipo": "svg",
     "titulo": "Concept image that ties the whole week together",
     "pie": "A single descending chain and, beside it, the framework accountable for each segment. No framework covers the whole column: that is why they coexist.",
     "svg": "<svg viewBox=\"0 0 866 500\" role=\"img\" aria-label=\"Cadena descendente de estrategia a KPI, con los marcos de referencia que gobiernan cada tramo listados al costado\"><defs><marker id=\"pa-sem\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path class=\"punta\" d=\"M0,0 L10,5 L0,10 z\"/></marker></defs><rect class=\"caja-alt\" x=\"75\" y=\"14\" width=\"250\" height=\"42\" rx=\"10\"/><text class=\"rotulo\" x=\"200\" y=\"40\" text-anchor=\"middle\">Strategy</text><path class=\"arista\" d=\"M200,58 L200,74\" marker-end=\"url(#pa-sem)\"/><rect class=\"caja\" x=\"75\" y=\"78\" width=\"250\" height=\"42\" rx=\"10\"/><text class=\"rotulo\" x=\"200\" y=\"104\" text-anchor=\"middle\">Capability</text><path class=\"arista\" d=\"M200,122 L200,138\" marker-end=\"url(#pa-sem)\"/><rect class=\"caja\" x=\"75\" y=\"142\" width=\"250\" height=\"42\" rx=\"10\"/><text class=\"rotulo\" x=\"200\" y=\"168\" text-anchor=\"middle\">Process</text><path class=\"arista\" d=\"M140,186 C120,200 95,196 82,208\" marker-end=\"url(#pa-sem)\"/><path class=\"arista\" d=\"M200,186 L200,208\" marker-end=\"url(#pa-sem)\"/><path class=\"arista\" d=\"M260,186 C280,200 305,196 318,208\" marker-end=\"url(#pa-sem)\"/><rect class=\"caja\" x=\"22\" y=\"212\" width=\"120\" height=\"42\" rx=\"10\"/><text class=\"rotulo\" x=\"82\" y=\"238\" text-anchor=\"middle\">Data</text><rect class=\"caja\" x=\"140\" y=\"212\" width=\"120\" height=\"42\" rx=\"10\"/><text class=\"rotulo\" x=\"200\" y=\"238\" text-anchor=\"middle\">Applications</text><rect class=\"caja\" x=\"258\" y=\"212\" width=\"120\" height=\"42\" rx=\"10\"/><text class=\"rotulo\" x=\"318\" y=\"238\" text-anchor=\"middle\">People</text><path class=\"arista\" d=\"M82,256 C82,272 170,268 190,282\" marker-end=\"url(#pa-sem)\"/><path class=\"arista\" d=\"M200,256 L200,282\" marker-end=\"url(#pa-sem)\"/><path class=\"arista\" d=\"M318,256 C318,272 230,268 210,282\" marker-end=\"url(#pa-sem)\"/><rect class=\"caja\" x=\"75\" y=\"286\" width=\"250\" height=\"42\" rx=\"10\"/><text class=\"rotulo\" x=\"200\" y=\"312\" text-anchor=\"middle\">Technology</text><path class=\"arista\" d=\"M200,330 L200,346\" marker-end=\"url(#pa-sem)\"/><rect class=\"caja\" x=\"75\" y=\"350\" width=\"250\" height=\"42\" rx=\"10\"/><text class=\"rotulo\" x=\"200\" y=\"376\" text-anchor=\"middle\">Services</text><path class=\"arista\" d=\"M200,394 L200,410\" marker-end=\"url(#pa-sem)\"/><rect class=\"caja-viva\" x=\"48\" y=\"414\" width=\"304\" height=\"52\" rx=\"12\"/><text class=\"rotulo\" x=\"200\" y=\"437\" text-anchor=\"middle\">Outcomes</text><text class=\"rotulo-sm\" x=\"200\" y=\"453\" text-anchor=\"middle\">measured by KPI</text><rect class=\"caja\" x=\"430\" y=\"66\" width=\"418\" height=\"390\" rx=\"14\"/><text class=\"rotulo\" x=\"639\" y=\"96\" text-anchor=\"middle\">Around the entire chain</text><rect class=\"caja-viva\" x=\"452\" y=\"108\" width=\"126\" height=\"30\" rx=\"8\"/><text class=\"rotulo-sm\" x=\"515\" y=\"127\" text-anchor=\"middle\">TOGAF</text><text class=\"rotulo-sm\" x=\"592\" y=\"127\">designs and evolves the architecture</text><rect class=\"caja-viva\" x=\"452\" y=\"162\" width=\"126\" height=\"30\" rx=\"8\"/><text class=\"rotulo-sm\" x=\"515\" y=\"181\" text-anchor=\"middle\">COBIT</text><text class=\"rotulo-sm\" x=\"592\" y=\"181\">governs, controls IT</text><rect class=\"caja-viva\" x=\"452\" y=\"216\" width=\"126\" height=\"30\" rx=\"8\"/><text class=\"rotulo-sm\" x=\"515\" y=\"235\" text-anchor=\"middle\">ITIL</text><text class=\"rotulo-sm\" x=\"592\" y=\"235\">manages IT services</text><rect class=\"caja-viva\" x=\"452\" y=\"270\" width=\"126\" height=\"30\" rx=\"8\"/><text class=\"rotulo-sm\" x=\"515\" y=\"289\" text-anchor=\"middle\">ISO</text><text class=\"rotulo-sm\" x=\"592\" y=\"289\">sets certifiable requirements</text><rect class=\"caja-viva\" x=\"452\" y=\"324\" width=\"126\" height=\"30\" rx=\"8\"/><text class=\"rotulo-sm\" x=\"515\" y=\"343\" text-anchor=\"middle\">Lean / Six Sigma</text><text class=\"rotulo-sm\" x=\"592\" y=\"343\">improves process</text><rect class=\"caja-viva\" x=\"452\" y=\"378\" width=\"126\" height=\"30\" rx=\"8\"/><text class=\"rotulo-sm\" x=\"515\" y=\"397\" text-anchor=\"middle\">BPMN</text><text class=\"rotulo-sm\" x=\"592\" y=\"397\">depicts the process</text></svg>"
    }
   ]
  }
 ],
 "terminos": [
  {
   "termino": "SIPOC",
   "sigla": "Supplier, Input, Process, Output, Customer",
   "definicion": "Artifact that bounds a process by identifying who supplies, what goes in, what is done, what comes out and who receives it."
  },
  {
   "termino": "Lead time",
   "sigla": "tiempo de entrega",
   "definicion": "Total elapsed end-to-end time, from when the customer orders it until they receive it. It is calendar time: it includes processing, wait time, nights and weekends. It is the time the customer perceives. When the process runs continuously it matches the cycle time; when there are schedules or upstream queues, it does not."
  },
  {
   "termino": "Processing time",
   "definicion": "Actual working time spent on the activities, not counting wait time."
  },
  {
   "termino": "Lean",
   "definicion": "Improvement approach focused on eliminating waste: waiting, rework, overprocessing, transport, inventory, motion and defects."
  },
  {
   "termino": "Six Sigma",
   "definicion": "Improvement approach focused on reducing variation and defects on a statistical basis."
  },
  {
   "termino": "Kaizen",
   "definicion": "Incremental continuous improvement with the participation of the people who run the process."
  },
  {
   "termino": "DMAIC",
   "sigla": "Define, Measure, Analyze, Improve, Control",
   "definicion": "Six Sigma improvement cycle."
  },
  {
   "termino": "COBIT",
   "definicion": "IT governance and control framework: accountability, controls, risk, metrics and alignment with objectives."
  },
  {
   "termino": "ITIL",
   "definicion": "IT service management framework: service design, delivery, support and improvement; incidents, problems and changes."
  },
  {
   "termino": "ISMS",
   "definicion": "Information Security Management System; certifiable under ISO/IEC 27001."
  },
  {
   "termino": "ERP",
   "sigla": "Enterprise Resource Planning",
   "definicion": "System for the company's core resources and transactions."
  },
  {
   "termino": "CRM",
   "sigla": "Customer Relationship Management",
   "definicion": "Customer and sales management system."
  },
  {
   "termino": "MES",
   "sigla": "Manufacturing Execution System",
   "definicion": "Manufacturing execution system on the shop floor."
  },
  {
   "termino": "WMS",
   "sigla": "Warehouse Management System",
   "definicion": "Warehouse management system."
  },
  {
   "termino": "PLM",
   "sigla": "Product Lifecycle Management",
   "definicion": "Product lifecycle management."
  },
  {
   "termino": "ITSM",
   "sigla": "IT Service Management",
   "definicion": "IT service management."
  },
  {
   "termino": "Order-to-Cash",
   "definicion": "End-to-end process that runs from the customer order to payment collection."
  },
  {
   "termino": "Artifact",
   "definicion": "Structured representation of an aspect of the enterprise or its architecture, created to analyze, communicate, decide or govern."
  },
  {
   "termino": "Deliverable",
   "definicion": "Formal deliverable; it can contain multiple artifacts."
  },
  {
   "termino": "View",
   "definicion": "Representation of the architecture aimed at a set of stakeholders and their concerns."
  },
  {
   "termino": "Viewpoint",
   "definicion": "Convention or template that defines how a view is built and interpreted."
  },
  {
   "termino": "Gap analysis",
   "definicion": "Comparison between AS-IS and TO-BE to determine what is missing, what changes, what is removed and what is kept."
  },
  {
   "termino": "Application landscape",
   "definicion": "Overview of the existing applications with their function, owner, criticality and problems."
  },
  {
   "termino": "Problem statement",
   "definicion": "Formal statement of the problem: what happens, who it affects, how big it is and what happens if it is not solved."
  },
  {
   "termino": "Baseline",
   "definicion": "Initial measurement of the process indicators, against which the proposed improvement is compared."
  }
 ],
 "practica": {
  "opcionMultiple": [
   {
    "tema": "Strategy and IT",
    "pregunta": "The business says: “we need to cut delivery time from 5 to 2 days.” What is the first correct response from architecture?",
    "opciones": [
     "Discover what prevents reaching 2 days: which process, which wait times, which data and which capabilities are missing",
     "Propose implementing a modern ERP",
     "Evaluate three logistics software vendors",
     "Automate the slowest stage of the process with AI"
    ],
    "correcta": 0,
    "explicacion": "The sequence is: need → process → problem → data → capabilities → requirements → architecture → technology. Technology is a consequence, not a starting point.",
    "porQueNo": {
     "1": "Choosing a product before knowing the root cause is exactly the mistake EA sets out to avoid.",
     "2": "Evaluating vendors assumes the solution is to buy software.",
     "3": "Automating without a diagnosis may speed up an activity that is not the bottleneck."
    }
   },
   {
    "tema": "Digitization",
    "pregunta": "A paper form becomes a PDF that is emailed; the manager signs and HR still keys it in. Which level is this?",
    "opciones": [
     "Digitization",
     "Automation",
     "Digital transformation",
     "Process redesign"
    ],
    "correcta": 0,
    "explicacion": "The paper is gone, but the flow is identical. Digitizing means moving information or activities to digital media without changing the process.",
    "porQueNo": {
     "1": "Automating means the system performs the activity: checking the balance, sending the approval, updating the record.",
     "2": "Transformation questions the whole process and changes capabilities, experience or model.",
     "3": "The process was not redesigned: it keeps the same stages and the same people responsible."
    }
   },
   {
    "tema": "Digital transformation",
    "pregunta": "In the vacation case, which one is the example of digital transformation?",
    "opciones": [
     "The employee requests it from an app and the system, knowing balance, calendar, coverage and policies, automatically approves certain cases",
     "The form becomes a PDF and is sent by email",
     "HR keys the request into the system instead of filing it on paper",
     "The manager signs electronically instead of by hand"
    ],
    "correcta": 0,
    "explicacion": "The whole process was questioned: why does HR have to be involved? The capability, the flow and the employee experience changed.",
    "porQueNo": {
     "1": "That is digitization.",
     "2": "It changes the recording medium, not the process.",
     "3": "It replaces a signing mechanism; the approval flow stays the same."
    }
   },
   {
    "tema": "Enterprise applications",
    "pregunta": "The system that runs and controls manufacturing on the shop floor is…",
    "opciones": [
     "MES",
     "WMS",
     "PLM",
     "ITSM"
    ],
    "correcta": 0,
    "explicacion": "MES (Manufacturing Execution System) runs manufacturing execution; WMS manages warehouses; PLM, the product lifecycle; ITSM, IT services.",
    "porQueNo": {
     "1": "WMS manages warehouses and physical inventory.",
     "2": "PLM manages the product lifecycle, from design to retirement.",
     "3": "ITSM manages IT services, not manufacturing."
    }
   },
   {
    "tema": "Hard data",
    "pregunta": "A process has 22 minutes of actual work and 23 hours of wait time. Where should the improvement focus?",
    "opciones": [
     "On eliminating the wait times: approvals, handoffs and queues",
     "On speeding up the data entry activities to bring down the 22 minutes",
     "On hiring more staff to perform the activities",
     "On migrating the ERP to the cloud to gain performance"
    ],
    "correcta": 0,
    "explicacion": "The lead time is dominated by wait time. Halving the 22 minutes improves the total by 11 minutes out of 23 hours: irrelevant.",
    "porQueNo": {
     "1": "Optimizing 1.6 % of the total time does not move the indicator.",
     "2": "More people do not eliminate a sequential approval wait.",
     "3": "Technical performance is not the constraint; the constraint is organizational."
    }
   },
   {
    "tema": "Lead time",
    "pregunta": "What is the difference between lead time and processing time?",
    "opciones": [
     "Lead time is the total elapsed time including wait time; processing time is only the actual work",
     "Lead time is the actual work and processing time includes the wait time",
     "They are synonyms measured in different units",
     "Lead time applies to manufacturing and processing time to services"
    ],
    "correcta": 0,
    "explicacion": "The distance between the two indicators reveals how much waiting waste the process contains.",
    "porQueNo": {
     "1": "It is the other way around.",
     "2": "They measure different things, not the same thing.",
     "3": "Both apply to any type of process."
    }
   },
   {
    "tema": "Lean and Six Sigma",
    "pregunta": "A process delivers results with too much variation: sometimes it takes 2 days and other times 9, with no apparent cause. Which approach attacks that problem?",
    "opciones": [
     "Six Sigma",
     "Lean",
     "Kaizen",
     "BPMN"
    ],
    "correcta": 0,
    "explicacion": "Six Sigma focuses on reducing variation and defects; Lean, on eliminating waste; Kaizen, on incremental continuous improvement.",
    "porQueNo": {
     "1": "Lean attacks waste, not statistical variability.",
     "2": "Kaizen is the philosophy of incremental improvement, not a tool for variation analysis.",
     "3": "BPMN only represents the process graphically."
    }
   },
   {
    "tema": "DMAIC",
    "pregunta": "What is the correct order of DMAIC?",
    "opciones": [
     "Define, Measure, Analyze, Improve, Control",
     "Design, Model, Analyze, Implement, Check",
     "Define, Model, Automate, Integrate, Control",
     "Discover, Measure, Adjust, Implement, Close"
    ],
    "correcta": 0,
    "explicacion": "Define the problem, measure the baseline, analyze causes, improve and control so the improvement is sustained.",
    "porQueNo": {
     "1": "It does not match the letters of DMAIC.",
     "2": "It confuses the cycle with automation stages.",
     "3": "It is not the standard cycle."
    }
   },
   {
    "tema": "COBIT and ITIL",
    "pregunta": "“Who is accountable, do we have controls, is the risk acceptable and is it aligned with the objectives?” are questions typical of…",
    "opciones": [
     "COBIT",
     "ITIL",
     "TOGAF",
     "ISO 9001"
    ],
    "correcta": 0,
    "explicacion": "COBIT is governance: accountability, control, risk, metrics and alignment with business objectives.",
    "porQueNo": {
     "1": "ITIL would ask how the service is logged, prioritized and restored.",
     "2": "TOGAF would ask how the architecture should evolve.",
     "3": "ISO 9001 focuses on the quality management system."
    }
   },
   {
    "tema": "COBIT and ITIL",
    "pregunta": "SAP goes down. “How do we log the incident, how do we prioritize it, how do we restore the service, is it recurring, does it require a change?” corresponds to…",
    "opciones": [
     "ITIL",
     "COBIT",
     "Zachman",
     "Lean"
    ],
    "correcta": 0,
    "explicacion": "ITIL is service management: incidents, problems, changes and continual service improvement.",
    "porQueNo": {
     "1": "COBIT would ask about accountability, controls and risk.",
     "2": "Zachman classifies descriptions of the enterprise.",
     "3": "Lean eliminates waste in processes."
    }
   },
   {
    "tema": "ISO",
    "pregunta": "What is the essential difference between an ISO standard and a framework such as TOGAF, COBIT or ITIL?",
    "opciones": [
     "An ISO standard can set certifiable requirements; frameworks work as methodologies or good practices",
     "ISO is free and the frameworks are paid",
     "ISO applies only to manufacturing and the frameworks only to IT",
     "The frameworks are required by law and ISO standards are optional"
    ],
    "correcta": 0,
    "explicacion": "Whether any of them is mandatory depends on laws, contracts, regulation or organizational decisions.",
    "porQueNo": {
     "1": "The licensing model is not the conceptual difference.",
     "2": "There are ISO standards for IT (20000-1, 27001) and frameworks that apply outside IT.",
     "3": "No architecture framework is required by law in itself."
    }
   },
   {
    "tema": "Artifacts",
    "pregunta": "What is the correct definition of an architecture artifact?",
    "opciones": [
     "A structured representation of a relevant aspect of the enterprise or of its architecture, created to analyze, communicate, decide or govern",
     "Any diagram handed to the client at the end of the project",
     "The formal document signed when an ADM phase closes",
     "A reusable software component"
    ],
    "correcta": 0,
    "explicacion": "An artifact does not have to be a diagram: it can be a catalog, matrix, map, model, principle, roadmap, assessment or heatmap.",
    "porQueNo": {
     "1": "Limiting it to diagrams leaves out catalogs, matrices and principles.",
     "2": "That describes a deliverable, not an artifact.",
     "3": "A reusable architecture component is a building block (ABB/SBB)."
    }
   },
   {
    "tema": "Deliverable vs artifact",
    "pregunta": "What is the relationship between deliverable and artifact?",
    "opciones": [
     "A deliverable can contain multiple artifacts",
     "An artifact can contain multiple deliverables",
     "They are synonyms in TOGAF",
     "The deliverable is internal and the artifact is handed to the client"
    ],
    "correcta": 0,
    "explicacion": "The “Solution Architecture Document” is a deliverable; inside it you can find a process map, application matrix, data flow, gap analysis and roadmap.",
    "porQueNo": {
     "1": "It is the other way around: the deliverable is the container.",
     "2": "They are different things: one is a formal delivery, the other a piece of information.",
     "3": "The distinction is not internal versus external."
    }
   },
   {
    "tema": "View and viewpoint",
    "pregunta": "Why is the same architecture presented differently to the CEO and to the integration architect?",
    "opciones": [
     "Because each stakeholder has different concerns and the architecture is communicated through views aimed at those concerns",
     "Because technical information cannot be shown to the CEO for confidentiality reasons",
     "Because the architect uses a different architecture from the CEO's",
     "Because the CEO only needs the roadmap and nothing else"
    ],
    "correcta": 0,
    "explicacion": "The CEO attends to value, risk and investment; the CFO, costs and ROI; the CISO, risks and controls; the architect, systems, interfaces and data; the developer, APIs and protocols.",
    "porQueNo": {
     "1": "It is not a matter of confidentiality but of relevance.",
     "2": "The architecture is the same; what changes are the views of it.",
     "3": "The CEO also needs to understand risk, value and implications."
    }
   },
   {
    "tema": "Challenge sequence",
    "pregunta": "What is the correct sequence for the challenge?",
    "opciones": [
     "AS-IS → Gap analysis → TO-BE → Roadmap",
     "TO-BE → AS-IS → Roadmap → Gap analysis",
     "Roadmap → AS-IS → TO-BE → Gap analysis",
     "AS-IS → TO-BE → Roadmap, without gap analysis"
    ],
    "correcta": 0,
    "explicacion": "Without a documented AS-IS there is no demonstrable gap; without a gap, the TO-BE is a wish list and the roadmap has no justification.",
    "porQueNo": {
     "1": "Designing the future without knowing the present makes it impossible to quantify the improvement.",
     "2": "The roadmap is the last piece, not the first.",
     "3": "Omitting the gap analysis removes the justification for each initiative."
    }
   },
   {
    "tema": "Quantitative evidence",
    "pregunta": "The team delivers impeccable AS-IS and TO-BE diagrams, but without a single measured indicator. What is missing?",
    "opciones": [
     "The quantitative baseline: lead time, processing time, people, manual data entries, error rate and cost per transaction",
     "Nothing: the diagram is enough evidence of understanding",
     "The BPMN diagram in formal notation",
     "The project sponsor's signature"
    ],
    "correcta": 0,
    "explicacion": "“A diagram shows how you understood the process; the data shows whether your proposal actually improves it.”",
    "porQueNo": {
     "1": "The diagram demonstrates understanding, not improvement.",
     "2": "Formal notation helps you communicate, but it does not quantify the benefit.",
     "3": "Sponsorship does not replace technical evidence."
    }
   },
   {
    "tema": "Process-application matrix",
    "pregunta": "What does a process-application matrix mainly reveal?",
    "opciones": [
     "Fragmentation: which stages depend on which tools and where information jumps",
     "The total licensing cost of the portfolio",
     "The chronological order in which the systems were implemented",
     "The computing capacity each application requires"
    ],
    "correcta": 0,
    "explicacion": "In the supplier onboarding case, the matrix shows that no application covers the whole process and that information jumps between Excel, email, ERP and SharePoint.",
    "porQueNo": {
     "1": "Cost is documented in the application portfolio, not in the matrix.",
     "2": "Chronology is a matter for the roadmap.",
     "3": "Computing requirements belong to the technology domain."
    }
   },
   {
    "tema": "Problem statement",
    "pregunta": "Which of these statements works as the problem statement for the challenge?",
    "opciones": [
     "Onboarding a supplier takes 72 h with 6 people, 4 systems, 3 manual data entries and 8 % error, which delays critical purchases",
     "We need to implement a supplier portal with workflow",
     "The purchasing process is inefficient and has to be improved",
     "Purchasing, Finance, Legal and IT take part in supplier onboarding"
    ],
    "correcta": 0,
    "explicacion": "A problem statement says what is happening, with what measured magnitude and what consequence it has. It is the basis for justifying the TO-BE.",
    "porQueNo": {
     "1": "That is a proposed solution, not a problem.",
     "2": "“Inefficient” without a magnitude lets you measure no improvement at all.",
     "3": "That describes participants; it does not state the problem or its impact."
    }
   },
   {
    "tema": "Complementary frameworks",
    "pregunta": "A company has all of these at once: a fragmented architecture after acquisitions, IT audit findings, incidents that take days, and the need to certify security. What does it do?",
    "opciones": [
     "Use several frameworks in a complementary way: TOGAF, COBIT, ITIL and ISO/IEC 27001",
     "Choose the most complete framework and discard the rest",
     "Wait until one problem is solved before tackling the next",
     "Adopt ISO 9001 only, since it covers everything related to management"
    ],
    "correcta": 0,
    "explicacion": "Each framework answers a different question and they can coexist. It is not about picking a winner.",
    "porQueNo": {
     "1": "No framework covers all four questions well at the same time.",
     "2": "The problems are different in nature and can be addressed in parallel with different owners.",
     "3": "ISO 9001 manages quality; it does not solve architecture, IT governance or security."
    }
   },
   {
    "tema": "TOGAF applied",
    "pregunta": "Faced with “I want to implement e-commerce”, what is the data domain question?",
    "opciones": [
     "Where do customer, product, price and inventory live, and who governs them?",
     "Does e-commerce integrate with ERP, CRM and WMS?",
     "Do we need an API gateway and cloud identity?",
     "How does the Order-to-Cash process change?"
    ],
    "correcta": 0,
    "explicacion": "Data: what information is needed, where it originates, who is accountable for it and with what quality.",
    "porQueNo": {
     "1": "That is the application domain question.",
     "2": "That is the technology domain question.",
     "3": "That is the business domain question."
    }
   }
  ],
  "escenarios": [
   {
    "escenario": "After acquiring three companies, you have to redesign the global architecture and decide what gets integrated, what gets standardized and what gets retired.",
    "opciones": [
     "TOGAF",
     "COBIT",
     "ITIL",
     "ISO 9001"
    ],
    "correcta": 0,
    "explicacion": "TOGAF answers “how do I design and evolve the enterprise architecture?”.",
    "porQueNo": {
     "1": "COBIT governs and controls IT.",
     "2": "ITIL manages IT services.",
     "3": "ISO 9001 manages quality."
    }
   },
   {
    "escenario": "An audit found deficient IT controls: there are no clear owners, no metrics, and no evidence that the risk is bounded.",
    "opciones": [
     "COBIT",
     "ITIL",
     "TOGAF",
     "BPMN"
    ],
    "correcta": 0,
    "explicacion": "COBIT answers “how do I govern and control IT?”: accountability, controls, risk, metrics and alignment.",
    "porQueNo": {
     "1": "ITIL designs and operates services, not the control system.",
     "2": "TOGAF designs the architecture.",
     "3": "BPMN draws processes."
    }
   },
   {
    "escenario": "Users complain that incidents take days to resolve and that the same problem comes back every month.",
    "opciones": [
     "ITIL",
     "COBIT",
     "Zachman",
     "ISO 9001"
    ],
    "correcta": 0,
    "explicacion": "ITIL answers “how do I design, deliver, support and improve the service?”: incidents, problems, changes and continuous improvement.",
    "porQueNo": {
     "1": "COBIT would ask about controls and accountability, not about running the service.",
     "2": "Zachman classifies views.",
     "3": "ISO 9001 is quality in general."
    }
   },
   {
    "escenario": "The corporate office needs to implement an information security management system that can be certified by a third party.",
    "opciones": [
     "ISO/IEC 27001",
     "ISO/IEC 20000-1",
     "COBIT",
     "TOGAF"
    ],
    "correcta": 0,
    "explicacion": "ISO/IEC 27001 sets the certifiable requirements for an ISMS.",
    "porQueNo": {
     "1": "ISO/IEC 20000-1 certifies IT service management, not security.",
     "2": "COBIT is a governance framework, not a certifiable standard.",
     "3": "TOGAF is an architecture framework."
    }
   },
   {
    "escenario": "You need to represent the Order-to-Cash process graphically, with events, gateways and lanes per participant.",
    "opciones": [
     "BPMN",
     "Zachman",
     "DMAIC",
     "COBIT"
    ],
    "correcta": 0,
    "explicacion": "BPMN is the standardized notation for modeling processes with events, activities, gateways, flows and participants.",
    "porQueNo": {
     "1": "Zachman is a taxonomy of views.",
     "2": "DMAIC is an improvement cycle, not a notation.",
     "3": "COBIT is IT governance."
    }
   },
   {
    "escenario": "The supplier onboarding process lasts 72 hours, with long waits, three entries of the same data and 8 % errors that force work to be redone.",
    "opciones": [
     "Lean and Six Sigma",
     "ITIL",
     "Zachman",
     "ISO/IEC 27001"
    ],
    "correcta": 0,
    "explicacion": "Lean removes the waste (waits, duplicate data entry, rework) and Six Sigma attacks the error rate and the variation.",
    "porQueNo": {
     "1": "ITIL applies to IT services, not to this business process.",
     "2": "Zachman does not improve processes.",
     "3": "Security is not the problem being posed."
    }
   },
   {
    "escenario": "There are plenty of technical diagrams, but management finds no answer to who is accountable, when the events happen and why each capability exists.",
    "opciones": [
     "Zachman",
     "ITIL",
     "Lean",
     "DMAIC"
    ],
    "correcta": 0,
    "explicacion": "Zachman checks that the six questions are covered: What, How, Where, Who, When and Why, from different perspectives.",
    "porQueNo": {
     "1": "ITIL manages services.",
     "2": "Lean removes waste.",
     "3": "DMAIC structures an improvement project."
    }
   },
   {
    "escenario": "The team must deliver a formal solution architecture document that includes a process map, application matrix, data flow, gap analysis and roadmap.",
    "opciones": [
     "A deliverable that contains several artifacts",
     "An artifact that contains several deliverables",
     "Five independent deliverables",
     "A viewpoint"
    ],
    "correcta": 0,
    "explicacion": "The deliverable is the formal delivery; the artifacts are the structured pieces of information it contains.",
    "porQueNo": {
     "1": "It is the other way around.",
     "2": "You deliver one document, not five separate deliverables.",
     "3": "A viewpoint is the convention for building a view, not a document."
    }
   }
  ],
  "clasificar": [
   {
    "consigna": "Assign each situation to the framework, standard or methodology that solves it.",
    "categorias": [
     "TOGAF",
     "COBIT",
     "ITIL",
     "Lean / Six Sigma",
     "BPMN"
    ],
    "items": [
     {
      "texto": "Redesign the architecture after three acquisitions",
      "categoria": "TOGAF"
     },
     {
      "texto": "Define the TO-BE and the migration roadmap",
      "categoria": "TOGAF"
     },
     {
      "texto": "Audit found deficient IT controls",
      "categoria": "COBIT"
     },
     {
      "texto": "Define IT accountability and metrics",
      "categoria": "COBIT"
     },
     {
      "texto": "Incidents that take days to resolve",
      "categoria": "ITIL"
     },
     {
      "texto": "Manage recurring problems and changes",
      "categoria": "ITIL"
     },
     {
      "texto": "23 h of wait time and 3 duplicate data entries",
      "categoria": "Lean / Six Sigma"
     },
     {
      "texto": "8 % error rate with high variation",
      "categoria": "Lean / Six Sigma"
     },
     {
      "texto": "Draw Order-to-Cash with lanes and gateways",
      "categoria": "BPMN"
     }
    ],
    "explicacion": "Mnemonic rule: <b>TOGAF</b> designs the architecture, <b>COBIT</b> governs, <b>ITIL</b> operates the service, <b>Lean/Six Sigma</b> improves the process and <b>BPMN</b> draws it."
   },
   {
    "consigna": "Classify each element of the “supplier onboarding” case by artifact type.",
    "categorias": [
     "Catalog or inventory",
     "Matrix",
     "Diagram or map",
     "Analysis or plan"
    ],
    "items": [
     {
      "texto": "Application Portfolio with owner and criticality",
      "categoria": "Catalog or inventory"
     },
     {
      "texto": "Supplier master data inventory",
      "categoria": "Catalog or inventory"
     },
     {
      "texto": "Process × Application",
      "categoria": "Matrix"
     },
     {
      "texto": "Capability × Accountable area",
      "categoria": "Matrix"
     },
     {
      "texto": "Process Map AS-IS",
      "categoria": "Diagram or map"
     },
     {
      "texto": "TO-BE integration diagram",
      "categoria": "Diagram or map"
     },
     {
      "texto": "Data / Information Flow",
      "categoria": "Diagram or map"
     },
     {
      "texto": "Gap Analysis",
      "categoria": "Analysis or plan"
     },
     {
      "texto": "Implementation roadmap",
      "categoria": "Analysis or plan"
     }
    ],
    "explicacion": "Catalog: an organized list. Matrix: a relationship between two dimensions. Diagram or map: a visual representation of components and flows. Analysis or plan: interpretation and sequence of action."
   },
   {
    "consigna": "Classify each indicator of the challenge by what it measures.",
    "categorias": [
     "Time",
     "Effort or resources",
     "Quality",
     "Cost"
    ],
    "items": [
     {
      "texto": "Lead time (72 h → 8 h)",
      "categoria": "Time"
     },
     {
      "texto": "Processing time (45 min → 15 min)",
      "categoria": "Time"
     },
     {
      "texto": "People involved (6 → 3)",
      "categoria": "Effort or resources"
     },
     {
      "texto": "Manual data entries (3 → 1)",
      "categoria": "Effort or resources"
     },
     {
      "texto": "Error rate (8 % → 1 %)",
      "categoria": "Quality"
     },
     {
      "texto": "Rework caused by incorrect data",
      "categoria": "Quality"
     },
     {
      "texto": "Cost per transaction ($180 → $70)",
      "categoria": "Cost"
     }
    ],
    "explicacion": "A complete baseline covers all four dimensions. Presenting time alone leaves out half of the value argument."
   },
   {
    "consigna": "Classify each enterprise application by the area it mainly serves.",
    "categorias": [
     "Sales and customers",
     "Operations and manufacturing",
     "Finance and transactions",
     "People and support"
    ],
    "items": [
     {
      "texto": "CRM",
      "categoria": "Sales and customers"
     },
     {
      "texto": "E-commerce portal",
      "categoria": "Sales and customers"
     },
     {
      "texto": "MES",
      "categoria": "Operations and manufacturing"
     },
     {
      "texto": "WMS",
      "categoria": "Operations and manufacturing"
     },
     {
      "texto": "PLM",
      "categoria": "Operations and manufacturing"
     },
     {
      "texto": "ERP",
      "categoria": "Finance and transactions"
     },
     {
      "texto": "HCM",
      "categoria": "People and support"
     },
     {
      "texto": "ITSM",
      "categoria": "People and support"
     },
     {
      "texto": "ECM / DMS",
      "categoria": "People and support"
     }
    ],
    "explicacion": "A large company does not have “one system”: it has an ecosystem. Recognizing which area each piece serves is the first step toward spotting duplication."
   }
  ],
  "ordenar": [
   {
    "consigna": "Put in order the sequence an IT project should follow, from the need to the technology.",
    "pasos": [
     "Business need",
     "Process",
     "Problem or opportunity",
     "Data",
     "Capabilities",
     "Requirements",
     "Architecture",
     "Technology"
    ],
    "explicacion": "Starting from the technology (“I found an AI tool, where do we use it?”) inverts the logic and produces solutions with no business justification."
   },
   {
    "consigna": "Put the five stages of SIPOC in order.",
    "pasos": [
     "Supplier",
     "Input",
     "Process",
     "Output",
     "Customer"
    ],
    "explicacion": "SIPOC bounds the scope of the process before you model it in detail: who supplies, what comes in, what is done, what goes out and who receives it."
   },
   {
    "consigna": "Put the DMAIC cycle in order.",
    "pasos": [
     "Define",
     "Measure",
     "Analyze",
     "Improve",
     "Control"
    ],
    "explicacion": "Measuring before analyzing is what produces the baseline; controlling at the end is what keeps the process from sliding back to its previous state."
   },
   {
    "consigna": "Put the eight artifacts of the challenge in the order in which it makes sense to build them.",
    "pasos": [
     "Problem Statement",
     "SIPOC / Process Map",
     "AS-IS Process",
     "Application Landscape",
     "Process-Application Matrix",
     "Data / Information Flow",
     "TO-BE Architecture / Process",
     "Gap Analysis + Roadmap"
    ],
    "explicacion": "First you state and bound the problem, then you document reality, then you design the future and finally you plan the transition."
   },
   {
    "consigna": "Put the purchasing process flow from the example in order.",
    "pasos": [
     "User request",
     "Approval",
     "Quotation",
     "Purchase order",
     "Receipt",
     "Invoice",
     "Payment"
    ],
    "explicacion": "Documenting the real flow is the step before measuring where the waits pile up."
   }
  ],
  "flashcards": [
   {
    "frente": "The correct sequence of an IT project",
    "reverso": "Business need → Process → Problem → Data → Capabilities → Requirements → Architecture → Technology."
   },
   {
    "frente": "Digitization",
    "reverso": "The information or activity moves to digital media, without changing the process. A PDF instead of paper is still the same flow."
   },
   {
    "frente": "Automation",
    "reverso": "The system performs the activity: it checks the balance, sends the approval, updates the record."
   },
   {
    "frente": "Digital transformation",
    "reverso": "You question the whole process, and capabilities, customer experience or the business model change."
   },
   {
    "frente": "SIPOC",
    "reverso": "Supplier → Input → Process → Output → Customer. It bounds the scope of the process before you model it."
   },
   {
    "frente": "Lead time vs. processing time",
    "reverso": "Lead time: total elapsed time, waits included. Processing time: the actual work only. 22 min of work against 23 h of lead time reveals where the problem is."
   },
   {
    "frente": "Lean",
    "reverso": "Eliminate waste: waiting, rework, duplicate data entry, unnecessary movement, overprocessing."
   },
   {
    "frente": "Six Sigma",
    "reverso": "Reduce variation and defects on a statistical basis."
   },
   {
    "frente": "Kaizen",
    "reverso": "Incremental continuous improvement, with the participation of the people who run the process."
   },
   {
    "frente": "DMAIC",
    "reverso": "Define → Measure → Analyze → Improve → Control."
   },
   {
    "frente": "COBIT",
    "reverso": "IT governance: are we doing the right thing, controlling risks and generating value? Accountability, controls, risk, metrics and alignment."
   },
   {
    "frente": "ITIL",
    "reverso": "IT service management: how do we design, deliver, support and improve the service? Incidents, problems and changes."
   },
   {
    "frente": "ISO versus frameworks",
    "reverso": "An ISO standard can set certifiable requirements; TOGAF, COBIT and ITIL work as frameworks and good practices. Whether they are mandatory depends on laws, contracts or organizational decisions."
   },
   {
    "frente": "Artifact",
    "reverso": "A structured representation of an aspect of the enterprise or its architecture, created to analyze, communicate, decide or govern. It can be a catalog, matrix, map, model, principle, roadmap or heatmap."
   },
   {
    "frente": "Deliverable vs. artifact",
    "reverso": "The deliverable is the formal delivery; one deliverable can contain multiple artifacts."
   },
   {
    "frente": "View and viewpoint",
    "reverso": "The same architecture is presented differently to the CEO (value, risk, investment), the CFO (costs, ROI), the CISO (risks, controls), the architect (systems, interfaces, data) and the developer (APIs, components, protocols)."
   },
   {
    "frente": "The sequence of the challenge",
    "reverso": "AS-IS → Gap analysis → TO-BE → Roadmap."
   },
   {
    "frente": "The 8 artifacts of the challenge",
    "reverso": "Problem statement · SIPOC/Process map · AS-IS · Application landscape · Process-application matrix · Data flow · TO-BE · Gap analysis + roadmap."
   },
   {
    "frente": "Quantitative baseline",
    "reverso": "Lead time, processing time, people involved, systems, manual data entries, error rate and cost per transaction."
   },
   {
    "frente": "The evaluation criterion",
    "reverso": "A diagram shows how you understood the process; the data shows whether your proposal really improves it."
   },
   {
    "frente": "Application ecosystem",
    "reverso": "ERP, CRM, HCM, SCM, MES, WMS, PLM, ECM/DMS, BI, BPM/Workflow, ITSM. A large company does not have “one system”."
   },
   {
    "frente": "Problem statement",
    "reverso": "What is happening, who it affects, with what measured magnitude and what consequence it has if it is not solved."
   }
  ]
 }
}
);
