/* Generado por herramientas/cadenas.js — no editar a mano la estructura.
   Para corregir una traducción: edita herramientas/traduccion/semana-4.json
   y vuelve a ejecutar:  node herramientas/cadenas.js inyectar semana-4 */
EA.registrarSemanaEn(
{
 "id": 4,
 "estado": "publicada",
 "titulo": "Frameworks, selection and the IT function",
 "subtitulo": "The full universe of frameworks, how you choose one with sound criteria, and how the department that sustains the architecture operates.",
 "sesiones": 4,
 "objetivos": [
  "Describe the architecture frameworks in the syllabus: TOGAF, Zachman, DoDAF, IAF and ATOM, and what each one contributes.",
  "Evaluate and compare frameworks with explicit criteria, and support your selection with a weighted decision matrix.",
  "Distinguish IT governance (COBIT) from service management (ITIL), and explain the shift from ITIL 3 to ITIL 4.",
  "Explain what functions an IT department performs and what ITSM and BRM are.",
  "Relate IT strategy to business strategy and to enterprise architecture.",
  "Recognize the enterprise application development methodologies and when each one applies.",
  "Place the market tools —SAP LeanIX, SAP Signavio, ServiceNow— and emerging technologies on the architecture map."
 ],
 "dias": [
  {
   "id": "s1",
   "nombre": "Session 1",
   "tema": "The universe of architecture frameworks",
   "proposito": "Complete the picture beyond TOGAF and Zachman: get to know DoDAF, IAF and ATOM, understand where they come from and what problem each one solves.",
   "bloques": [
    {
     "tipo": "clave",
     "titulo": "Why several frameworks exist",
     "cuerpo": "<p>No framework is universally better. Each one was born in a context —consulting, defense, government, industry— and carries the priorities of that context. Knowing them serves two purposes: <b>choosing with sound criteria</b> and <b>borrowing</b> what is useful from each one.</p>"
    },
    {
     "tipo": "tabla",
     "titulo": "The landscape at a glance",
     "encabezados": [
      "Framework",
      "Origin",
      "Nature",
      "Main strength"
     ],
     "filas": [
      [
       "<b>TOGAF</b>",
       "The Open Group, open industry",
       "Method + metamodel + governance",
       "The ADM: a complete transformation cycle"
      ],
      [
       "<b>Zachman</b>",
       "John Zachman, IBM (1987)",
       "Ontology / taxonomy",
       "Verify that no views or perspectives are missing"
      ],
      [
       "<b>DoDAF</b>",
       "U.S. Department of Defense",
       "Set of standardized views",
       "Interoperability and large-scale acquisition"
      ],
      [
       "<b>IAF</b>",
       "Capgemini (1996)",
       "Consulting framework",
       "Matrix of domains × abstraction levels"
      ],
      [
       "<b>ATOM</b>",
       "Academic and vendor use",
       "Pyramid alignment model",
       "Coming down from strategy to infrastructure"
      ]
     ]
    },
    {
     "tipo": "texto",
     "titulo": "DoDAF — Department of Defense Architecture Framework",
     "cuerpo": "<p>A framework created and maintained by the <b>United States Department of Defense</b>, today under its CIO. Its purpose is to support six internal processes: joint capability integration, budgeting, acquisition, systems engineering, operational planning and portfolio management.</p><p>Its distinctive contribution is that it <b>standardizes the views</b>: instead of leaving representation open, it defines eight <i>viewpoints</i> with specific products, so that two different organizations can exchange architectures and understand each other.</p>"
    },
    {
     "tipo": "tabla",
     "titulo": "The eight viewpoints of DoDAF 2.0",
     "encabezados": [
      "Viewpoint",
      "What it articulates"
     ],
     "filas": [
      [
       "<b>AV</b> · All Viewpoint",
       "General context aspects that apply to all the other views"
      ],
      [
       "<b>CV</b> · Capability",
       "Capability requirements, delivery schedule and deployed capability"
      ],
      [
       "<b>DIV</b> · Data and Information",
       "Data relationships and alignment structures that support the capabilities"
      ],
      [
       "<b>OV</b> · Operational",
       "Operational scenarios, activities and requirements that support the capabilities"
      ],
      [
       "<b>PV</b> · Project",
       "Relationship between operational and capability requirements and the projects that implement them"
      ],
      [
       "<b>SvcV</b> · Services",
       "Solution design: performers, activities, services and their exchanges"
      ],
      [
       "<b>StdV</b> · Standards",
       "Applicable policies, standards, guidance, constraints and forecasts"
      ],
      [
       "<b>SV</b> · Systems",
       "Design, composition, interconnection and context of the systems"
      ]
     ]
    },
    {
     "tipo": "nota",
     "titulo": "What to take from DoDAF if you are not the military",
     "cuerpo": "<p>The idea of <b>standardizing the views</b> is transferable: in a company with many plants or subsidiaries, agreeing on which diagrams are produced and with what content keeps each area from documenting in its own way and leaving nothing comparable.</p>"
    },
    {
     "tipo": "texto",
     "titulo": "IAF — Integrated Architecture Framework",
     "cuerpo": "<p>Developed by <b>Capgemini</b> since the nineties (first version in 1996), building on the Zachman framework and enterprise architecture planning. It is a framework born in consulting: its goal is to give a common language to teams that step into different projects at different companies.</p><p>Its structure is a <b>matrix</b>: four aspect areas by four abstraction levels, plus cross-cutting aspects.</p>"
    },
    {
     "tipo": "tabla",
     "titulo": "The IAF matrix",
     "encabezados": [
      "",
      "Contextual · Why?",
      "Conceptual · What?",
      "Logical · How?",
      "Physical · With what?"
     ],
     "filas": [
      [
       "<b>Business</b><br><small>people, processes, organization</small>",
       "Motives and drivers",
       "Business services",
       "Process design",
       "Operational implementation"
      ],
      [
       "<b>Information</b>",
       "Information needs",
       "Information objects",
       "Logical data models",
       "Concrete databases"
      ],
      [
       "<b>Information systems</b><br><small>applications</small>",
       "Support need",
       "Application services",
       "Logical components",
       "Chosen products and software"
      ],
      [
       "<b>Technology infrastructure</b>",
       "Technical constraints and drivers",
       "Infrastructure services",
       "Logical platform design",
       "Equipment, networks and cloud"
      ]
     ]
    },
    {
     "tipo": "lista",
     "titulo": "Cross-cutting aspects of IAF",
     "items": [
      "<b>Governance:</b> who decides, with what authority and under what principles, across every level and area.",
      "<b>Security:</b> it is not a layer at the end; it cuts across the four areas and the four levels.",
      "<b>Sustainability:</b> incorporated in recent editions; the framework is now in its sixth edition."
     ]
    },
    {
     "tipo": "clave",
     "titulo": "The conceptual contribution of IAF",
     "cuerpo": "<p>Separating the <b>logical level</b> from the <b>physical</b> one. The logical level says <i>which component is needed</i> (a customer management platform); the physical one says <i>with which product</i> it is implemented (Salesforce, Dynamics, an in-house one). It is the same distinction TOGAF draws between <b>ABB</b> —Architecture Building Block— and <b>SBB</b> —Solution Building Block—, and it keeps you from marrying a vendor too early.</p>"
    },
    {
     "tipo": "texto",
     "titulo": "ATOM",
     "cuerpo": "<p>It is the <b>least standardized</b> framework of those in the syllabus, and it is worth saying so plainly: the acronym is used with more than one meaning depending on the source.</p><p>In the most widespread academic use, ATOM organizes alignment into four dimensions —<b>A</b>rchitecture, <b>T</b>echnology, <b>O</b>rganization and <b>M</b>anagement— and unfolds them in a five-level pyramid that comes down from strategy to infrastructure:</p>"
    },
    {
     "tipo": "pasos",
     "titulo": "The ATOM pyramid",
     "items": [
      "Formulation of <b>corporate strategy and direction</b>, starting from mission and vision.",
      "<b>Business models and processes</b> that create value for the customer.",
      "<b>IT alignment</b> to ensure operational execution.",
      "<b>Information artifacts</b>: system and database design.",
      "<b>IT infrastructure</b> that sustains all the layers above."
     ]
    },
    {
     "tipo": "nota",
     "titulo": "Methodological caveat",
     "cuerpo": "<p>Some vendors use ATOM for <i>Architecture Team Operating Model</i>, an operating model for the architecture team, with a different focus. If you cite it in academic work, <b>state which meaning you are using and with what source</b>. It is good practice in general: when a term has no normative body behind it, the source is part of the definition.</p>"
    },
    {
     "tipo": "defs",
     "titulo": "Methodologies for enterprise application development",
     "items": [
      {
       "termino": "Waterfall",
       "definicion": "Sequential phases with formal deliverables between them. Useful when the scope is stable and regulatory compliance demands documentation up front."
      },
      {
       "termino": "Agile (Scrum, Kanban)",
       "definicion": "Iterative development with frequent releases and continuous feedback. Useful when the requirement is discovered by using it."
      },
      {
       "termino": "DevOps",
       "definicion": "Collaboration between development and operations, with automated build, test and deployment. It shortens the time between idea and production."
      },
      {
       "termino": "Package implementation (COTS)",
       "definicion": "Instead of building, you configure a market product —ERP, CRM—. The effort moves from programming to parameterizing and to changing the process."
      },
      {
       "termino": "Low-code / No-code",
       "definicion": "Building on visual platforms. It speeds up simple cases, but it demands governance so that applications outside the architecture are not created."
      }
     ]
    },
    {
     "tipo": "clave",
     "titulo": "Relationship with architecture",
     "cuerpo": "<p>Enterprise architecture <b>does not choose the development methodology for you</b>: it defines the direction, the constraints and the interfaces the solution must respect. The methodology organizes how it is built and delivered within those limits.</p>"
    }
   ]
  },
  {
   "id": "s2",
   "nombre": "Session 2",
   "tema": "Framework evaluation, comparison and selection",
   "proposito": "Move from “I know the frameworks” to “I can justify which one fits here”. You support your selection with explicit criteria, not with personal preference.",
   "bloques": [
    {
     "tipo": "tabla",
     "titulo": "Comparison by dimension",
     "encabezados": [
      "Dimension",
      "TOGAF",
      "Zachman",
      "DoDAF",
      "IAF"
     ],
     "filas": [
      [
       "Does it offer a step-by-step method?",
       "Yes (ADM)",
       "No",
       "Partial",
       "Yes"
      ],
      [
       "Does it offer a taxonomy of views?",
       "Partial",
       "Yes, it is its core",
       "Yes, standardized",
       "Yes (matrix)"
      ],
      [
       "Does it include governance?",
       "Yes (phase G)",
       "No",
       "Yes, by regulation",
       "Yes, cross-cutting"
      ],
      [
       "Does it prescribe concrete artifacts?",
       "Suggests them",
       "No",
       "Yes, mandatory",
       "Yes"
      ],
      [
       "Learning curve",
       "High",
       "Medium",
       "High",
       "Medium-high"
      ],
      [
       "Certified talent in the market",
       "Broad",
       "Limited",
       "Niche (defense)",
       "Tied to Capgemini"
      ],
      [
       "Best fit",
       "Enterprise transformation",
       "Completeness audit",
       "Interoperability and acquisition",
       "Multi-project consulting"
      ]
     ]
    },
    {
     "tipo": "lista",
     "titulo": "Criteria for evaluating a framework",
     "items": [
      "<b>Fit to the goal:</b> what question do you need to answer — how to transform, how to classify, how to govern?",
      "<b>Domain coverage:</b> does it cover business, data, applications and technology, or only part of them?",
      "<b>Maturity of the organization:</b> a heavy framework in a company with no architecture practice turns into bureaucracy and dies.",
      "<b>Learning curve and available talent:</b> are there people who know how to use it, or do you have to train them?",
      "<b>Adoption cost:</b> licensing, training, certification, tools.",
      "<b>Ecosystem support:</b> tools, community, documentation, consultancies.",
      "<b>External requirements:</b> sometimes the client, headquarters or the regulator has already imposed one.",
      "<b>Compatibility with what already exists:</b> with COBIT, ITIL, ISO or project methodologies already in place."
     ]
    },
    {
     "tipo": "clave",
     "titulo": "The weighted decision matrix",
     "cuerpo": "<p>You assign a <b>weight</b> to each criterion (they must add up to 100 %) and score each alternative (for example from 1 to 5). The score of each option is <b>Σ (weight × score)</b>. The value of the method is not in the final number, but in the fact that it <b>forces you to make the weights explicit</b>: that is where the real discussion happens.</p>"
    },
    {
     "tipo": "tabla",
     "titulo": "Example of a selection matrix",
     "encabezados": [
      "Criterion",
      "Weight",
      "TOGAF",
      "Zachman",
      "DoDAF"
     ],
     "filas": [
      [
       "Fit to the goal (transform)",
       "30 %",
       "5",
       "2",
       "3"
      ],
      [
       "Domain coverage",
       "20 %",
       "5",
       "5",
       "4"
      ],
      [
       "Learning curve",
       "15 %",
       "2",
       "4",
       "2"
      ],
      [
       "Certified talent available",
       "15 %",
       "5",
       "3",
       "2"
      ],
      [
       "Adoption cost",
       "10 %",
       "4",
       "5",
       "5"
      ],
      [
       "Support tools",
       "10 %",
       "5",
       "3",
       "2"
      ],
      [
       "<b>Weighted score</b>",
       "<b>100 %</b>",
       "<b>4.45</b>",
       "<b>3.45</b>",
       "<b>3.00</b>"
      ]
     ]
    },
    {
     "tipo": "nota",
     "titulo": "How to read the result",
     "cuerpo": "<p>TOGAF wins, but its weak point is obvious: <b>learning curve 2 out of 5</b>. An honest recommendation does not hide that: it proposes TOGAF <i>and</i> a mitigation plan —adopt the ADM in iterations, start with a narrow scope, train a small core group first—.</p><p>An analysis that only hands over the winner is half the work. The other half is what to do about its weaknesses.</p>"
    },
    {
     "tipo": "clave",
     "titulo": "Frameworks are combined",
     "cuerpo": "<p>The professional answer is almost never “we use pure TOGAF”. It is more like: <b>TOGAF</b> as the method, <b>Zachman</b> to verify that no views are missing, <b>BPMN</b> to model processes, <b>COBIT</b> for IT governance, <b>ITIL</b> for services and <b>ISO</b> for what is certifiable. Each one answers a different question.</p>"
    },
    {
     "tipo": "defs",
     "titulo": "Types of enterprise applications · extended review",
     "items": [
      {
       "termino": "Systems of record",
       "definicion": "They hold the transactional truth: ERP, HCM, core systems. They change little and they are critical."
      },
      {
       "termino": "Systems of differentiation",
       "definicion": "They support processes that set the company apart: a configured CRM, MES, in-house platforms. They change at a medium pace."
      },
      {
       "termino": "Systems of innovation",
       "definicion": "Experiments and new capabilities: advanced analytics, AI, customer apps. They change fast and can fail without major damage."
      },
      {
       "termino": "Why the distinction matters",
       "definicion": "Each category allows a different pace of change, level of risk and methodology. Treating an ERP as an experiment —or the other way around— is a governance error."
      }
     ]
    }
   ]
  },
  {
   "id": "s3",
   "nombre": "Session 3",
   "tema": "IT governance, services and the function of the department",
   "proposito": "Understand what an IT area really does, how it is governed and how it relates to the business. Before you become a consultant you have to know how the area that serves the company operates.",
   "bloques": [
    {
     "tipo": "tabla",
     "titulo": "COBIT versus ITIL · review and deep dive",
     "encabezados": [
      "",
      "COBIT",
      "ITIL"
     ],
     "filas": [
      [
       "Central question",
       "Are we doing the right things, controlling risks and generating value?",
       "How do we design, deliver, support and improve the service?"
      ],
      [
       "Nature",
       "Governance and control framework",
       "Service management framework"
      ],
      [
       "Audience",
       "Board, executives, audit",
       "IT operations, service desk"
      ],
      [
       "Contributes",
       "Control objectives, responsibilities, metrics, maturity",
       "Operational practices: incidents, problems, changes"
      ],
      [
       "Publisher",
       "ISACA",
       "PeopleCert / AXELOS"
      ]
     ]
    },
    {
     "tipo": "texto",
     "titulo": "ITIL 3 versus ITIL 4",
     "cuerpo": "<p><b>ITIL v3</b> organized the practice as a <b>service lifecycle</b> in five stages: strategy, design, transition, operation and continual improvement. It was a sequential structure, heavily process-oriented.</p><p><b>ITIL 4</b> replaces that structure with the <b>Service Value System</b>, with the <i>Service Value Chain</i> at the center and 34 <b>practices</b> instead of 26 processes. It explicitly incorporates Agile, Lean and DevOps, and rests on seven <b>guiding principles</b>.</p>"
    },
    {
     "tipo": "lista",
     "titulo": "The seven guiding principles of ITIL 4",
     "items": [
      "Focus on value.",
      "Start where you are.",
      "Progress iteratively with feedback.",
      "Collaborate and promote visibility.",
      "Think and work holistically.",
      "Keep it simple and practical.",
      "Optimize and automate."
     ]
    },
    {
     "tipo": "nota",
     "titulo": "Why it changed",
     "cuerpo": "<p>The criticism of v3 was that it produced <b>heavy processes and silos</b>. ITIL 4 responds to an environment where software is delivered continuously and the border between development and operations has been erased. The shift from <i>process</i> to <i>practice</i> is not cosmetic: a practice includes people, information, technology and partners, not just the flow of activities.</p>"
    },
    {
     "tipo": "defs",
     "titulo": "ITSM and BRM",
     "items": [
      {
       "termino": "ITSM — IT Service Management",
       "definicion": "The discipline of managing IT <b>as a service to the business</b>, not as a set of technologies. It includes the service catalog, service levels (SLA), help desk, and incident, problem, change, configuration and asset management."
      },
      {
       "termino": "BRM — Business Relationship Management",
       "definicion": "A role and a discipline that <b>connects the IT area with the business areas</b>. It does not gather requirements like a data-entry clerk: it understands the area's strategy, shapes demand, prioritizes the portfolio and communicates the value delivered."
      },
      {
       "termino": "Why BRM exists",
       "definicion": "Without it, IT receives a list of disconnected requests and the business perceives IT as a ticket provider. The BRM turns requests into demand aligned with the strategy."
      }
     ]
    },
    {
     "tipo": "lista",
     "titulo": "Functions of an Information Technology department",
     "items": [
      "<b>Strategy and architecture:</b> define where the technology ecosystem is heading.",
      "<b>Development and projects:</b> build or implement solutions.",
      "<b>Operations and infrastructure:</b> servers, cloud, networks, telecommunications, devices.",
      "<b>Support and service desk:</b> attention to users, incidents and requests.",
      "<b>Information security and cybersecurity:</b> protection, monitoring and response.",
      "<b>Data management:</b> governance, quality, integration and analytics.",
      "<b>Governance, risk and compliance:</b> policies, audit, business continuity.",
      "<b>Vendor and contract management:</b> licensing, managed services, cloud.",
      "<b>Business relationship (BRM):</b> demand, portfolio and communication of value."
     ]
    },
    {
     "tipo": "clave",
     "titulo": "Strategy of the IT department",
     "cuerpo": "<p>An IT strategy answers: <b>what technology capabilities does the business need in the coming years and how are we going to build, buy or rent them?</b></p><p>It is not a shopping list or a catalog of projects: it defines principles (cloud first, buy before build, single source of data), the operating model of the area, the prioritized portfolio and the metrics it will be judged by.</p>"
    },
    {
     "tipo": "pasos",
     "titulo": "How a new technology project is launched",
     "items": [
      "<b>Business need</b> stated with its magnitude: what hurts, how much it costs, who it affects.",
      "<b>Preliminary business case:</b> expected benefit, estimated cost, risk.",
      "<b>Feasibility analysis</b> — technical, operational and economic.",
      "<b>Architecture review:</b> does a capability that solves it already exist? does it respect the principles?",
      "<b>Prioritization in the portfolio</b> against the other initiatives.",
      "<b>Authorization and assignment</b> of sponsor, budget and team.",
      "<b>Execution</b> with the methodology that fits, under architecture governance.",
      "<b>Go-live</b> and measurement of the promised benefit."
     ]
    },
    {
     "tipo": "nota",
     "titulo": "The uncomfortable question in step 4",
     "cuerpo": "<p>“Does a capability that solves it already exist?” is the question that saves the most money and the one that gets asked the least. With no application catalog and no architecture, the answer is always “I don't know”, and the company ends up buying the same thing three times.</p>"
    },
    {
     "tipo": "tabla",
     "titulo": "International standards for computing processes",
     "encabezados": [
      "Standard",
      "Scope",
      "Certifiable?"
     ],
     "filas": [
      [
       "ISO 9000 / 9001",
       "Quality management system",
       "Yes (9001)"
      ],
      [
       "ISO/IEC 20000-1",
       "IT service management",
       "Yes"
      ],
      [
       "ISO/IEC 27000 / 27001",
       "Information security (ISMS)",
       "Yes (27001)"
      ],
      [
       "ISO/IEC 33000",
       "Software process assessment (succeeds ISO 15504 / SPICE)",
       "Capability assessment, not company certification"
      ],
      [
       "ISO/IEC/IEEE 12207",
       "Software life cycle processes",
       "Not prescriptive"
      ],
      [
       "ISO/IEC/IEEE 29148",
       "Requirements engineering",
       "Not prescriptive"
      ],
      [
       "ISO 19510 (BPMN)",
       "Process modeling notation",
       "Not applicable"
      ]
     ]
    },
    {
     "tipo": "clave",
     "titulo": "Framework, standard and law",
     "cuerpo": "<p>A <b>framework</b> gives direction and offers method. A <b>standard</b> can set requirements and be certifiable. A <b>law</b> obliges. Whether any of them is mandatory depends on laws, contracts, sector regulation or a decision of the organization itself — never on the prestige of the framework.</p>"
    }
   ]
  },
  {
   "id": "s4",
   "nombre": "Session 4",
   "tema": "The architect's tools and enabling technologies",
   "proposito": "Get to know the software this work is done with in industry and where emerging technologies fit, without losing sight of the fact that the tool does not replace the analysis.",
   "bloques": [
    {
     "tipo": "tabla",
     "titulo": "Tool categories and what each one is for",
     "encabezados": [
      "Category",
      "What it is for",
      "Market examples"
     ],
     "filas": [
      [
       "<b>Architecture portfolio management (EAM)</b>",
       "Catalog of applications, capabilities, dependencies, lifecycle and rationalization",
       "SAP LeanIX, Orbus, Ardoq, Bizzdesign"
      ],
      [
       "<b>Process modeling and process mining</b>",
       "Model in BPMN, document the AS-IS and discover the real process from system logs",
       "SAP Signavio, Celonis, Bizagi, Camunda"
      ],
      [
       "<b>IT service management (ITSM)</b>",
       "Service catalog, incidents, problems, changes, assets and CMDB",
       "ServiceNow, Jira Service Management, BMC"
      ],
      [
       "<b>Free-form modeling / diagramming</b>",
       "Quick diagrams with no repository and no governance",
       "draw.io, Visio, Lucidchart"
      ],
      [
       "<b>Process simulation</b>",
       "Run the model with variability and compare scenarios",
       "Bizagi Modeler, Simul8, Arena, Signavio modules"
      ]
     ]
    },
    {
     "tipo": "defs",
     "titulo": "Three tools worth knowing by name",
     "items": [
      {
       "termino": "SAP LeanIX",
       "definicion": "Platform for <b>architecture portfolio management</b>. It answers: which applications do I have, who uses them, which business capability do they support, how much do they cost, how obsolete are they and which ones can be retired. It is the catalog and the matrix of ADM phase C, alive and with an owner."
      },
      {
       "termino": "SAP Signavio",
       "definicion": "Platform for <b>process management</b>: collaborative BPMN modeling, a process repository and <i>process mining</i>, which reconstructs the real process from the ERP records instead of from interviews."
      },
      {
       "termino": "ServiceNow",
       "definicion": "Platform for <b>ITSM and workflows</b>. It was born in the service desk and today it orchestrates IT, HR, legal and operations processes on top of a configuration database (CMDB)."
      }
     ]
    },
    {
     "tipo": "clave",
     "titulo": "Process mining: why it changes the game",
     "cuerpo": "<p>The AS-IS discovered through interviews is <b>what people believe they do</b>. The AS-IS reconstructed from the system logs is <b>what actually happened</b>, with its real times, its exception routes and its rework.</p><p>They are almost always different, and the difference is material: process variants nobody documented, approvals that get skipped, loops that repeat. When logs are available, this is the most reliable source for the diagnosis.</p>"
    },
    {
     "tipo": "nota",
     "titulo": "The tool does not replace the analysis",
     "cuerpo": "<p>An architecture repository without governance turns into an outdated and expensive inventory. The tool amplifies a practice that already exists; <b>it does not create the practice</b>. First the method and the data owner, then the license.</p>"
    },
    {
     "tipo": "defs",
     "titulo": "Emerging technologies on the architecture map",
     "items": [
      {
       "termino": "SaaS — Software as a Service",
       "definicion": "An application rented and operated by the vendor. It changes the technology architecture (less infrastructure of your own) and shifts the effort to integration, identity and contract management."
      },
      {
       "termino": "IoT — Internet of Things",
       "definicion": "Connected sensors and devices that generate data from the physical operation. It is the enabler of real-time inventory visibility and of predictive maintenance."
      },
      {
       "termino": "AI and Machine Learning",
       "definicion": "Models that predict or classify from historical data. In processes: demand forecasting, anomaly detection, document classification, predictive maintenance."
      },
      {
       "termino": "A prerequisite, always",
       "definicion": "All three depend on the data architecture: without data that is sound, owned and with an agreed meaning, none of them produces value. AI amplifies data quality — in both directions."
      }
     ]
    },
    {
     "tipo": "clave",
     "titulo": "The criterion for adopting an emerging technology",
     "cuerpo": "<p>A digital transformation project is not justified by using a fashionable technology, but because it <b>cuts cost, speeds up a time or generates demonstrable value</b>. The right question is never “where can we use AI?”, but “what is our problem and what solves it best?”.</p>"
    },
    {
     "tipo": "texto",
     "titulo": "Supply Chain Management and the SAP ecosystem",
     "cuerpo": "<p><b>SCM — Supply Chain Management</b> is the management of the end-to-end supply chain process: demand planning, sourcing, production, warehousing, transportation and returns. It is the definitive example of a <b>cross-functional</b> process and of why a department-by-department view fails: the customer perceives a single delivery.</p><p>In the SAP ecosystem there are pieces that are worth not confusing: <b>S/4HANA</b> (the ERP), <b>Ariba</b> (procurement and suppliers), <b>SuccessFactors</b> (human capital), <b>Concur</b> (travel expenses), <b>Integrated Business Planning</b> (supply chain planning), <b>Business Technology Platform</b> (integration and extension), plus <b>Signavio</b> and <b>LeanIX</b> already mentioned.</p>"
    },
    {
     "tipo": "lista",
     "titulo": "Parameters of the technology infrastructure architecture",
     "items": [
      "<b>Availability:</b> percentage of committed uptime and redundancy scheme.",
      "<b>Performance and latency:</b> especially critical at the point of sale, on the plant floor and in remote branches.",
      "<b>Scalability:</b> how it grows under demand peaks, and at what cost.",
      "<b>Security:</b> identity, network segmentation, encryption, backup and recovery.",
      "<b>Continuity:</b> RTO (how long it takes to be restored) and RPO (how much information can be lost).",
      "<b>Connectivity:</b> links, bandwidth and redundancy between sites — the most underestimated constraint.",
      "<b>Cost and consumption model:</b> capital against operating, cloud against on-premises, licensing.",
      "<b>Data location:</b> legal requirements on residency and transfer between countries."
     ]
    },
    {
     "tipo": "clave",
     "titulo": "The supermarket reminder",
     "cuerpo": "<p>There is no point in designing to sell more if the store's connectivity is poor and the point of sale cannot operate. <b>Infrastructure is not an implementation detail: it is a design constraint</b> that you validate before you promise a benefit.</p>"
    }
   ]
  }
 ],
 "terminos": [
  {
   "termino": "DoDAF",
   "sigla": "Department of Defense Architecture Framework",
   "definicion": "Framework of the U.S. Department of Defense that standardizes eight viewpoints (AV, CV, DIV, OV, PV, SvcV, StdV, SV) to ensure interoperability and support acquisitions."
  },
  {
   "termino": "IAF",
   "sigla": "Integrated Architecture Framework",
   "definicion": "Capgemini framework (1996) organized as a matrix of four areas —business, information, information systems and infrastructure— by four levels —contextual, conceptual, logical and physical—, with governance, security and sustainability as cross-cutting aspects."
  },
  {
   "termino": "ATOM",
   "definicion": "Alignment framework in four dimensions (Architecture, Technology, Organization and Management) deployed as a five-level pyramid, from strategy to infrastructure. It is the least standardized one in the syllabus: the acronym is used with more than one meaning."
  },
  {
   "termino": "Viewpoint (DoDAF)",
   "definicion": "Standardized view of the architecture with specific products; DoDAF 2.0 defines eight."
  },
  {
   "termino": "Logical level and physical level",
   "definicion": "The logical one says which component is needed; the physical one, which product implements it. It is equivalent to TOGAF's distinction between ABB and SBB."
  },
  {
   "termino": "ABB / SBB",
   "sigla": "Architecture / Solution Building Block",
   "definicion": "Architecture building block: a required capability with no product defined. Solution building block: the concrete product that implements it."
  },
  {
   "termino": "Weighted decision matrix",
   "definicion": "Selection method: you assign weights to the criteria (they add up to 100 %) and you rate each alternative; the score is Σ (weight × rating)."
  },
  {
   "termino": "Systems of record, differentiation and innovation",
   "definicion": "Classification of the portfolio by pace of change and risk tolerance; each category allows a different methodology and a different governance."
  },
  {
   "termino": "COTS",
   "sigla": "Commercial Off-The-Shelf",
   "definicion": "A market product that you configure instead of building; the effort moves from programming to parameterizing and to changing the process."
  },
  {
   "termino": "ITIL 4",
   "definicion": "Edition that replaces the v3 lifecycle with the Service Value System, with the Service Value Chain at the center, 34 practices and seven guiding principles; it incorporates Agile, Lean and DevOps."
  },
  {
   "termino": "Service Value System",
   "definicion": "Core structure of ITIL 4: how the organization's components and activities work together to create value through services."
  },
  {
   "termino": "ITSM",
   "sigla": "IT Service Management",
   "definicion": "Managing IT as a service to the business: catalog, SLA, help desk, incidents, problems, changes, configuration and assets."
  },
  {
   "termino": "BRM",
   "sigla": "Business Relationship Management",
   "definicion": "Role and discipline that connects IT with the business areas: it understands the area's strategy, shapes demand, prioritizes the portfolio and communicates the value delivered."
  },
  {
   "termino": "SLA",
   "sigla": "Service Level Agreement",
   "definicion": "Service level agreement: a measurable commitment on availability, response time or resolution."
  },
  {
   "termino": "CMDB",
   "sigla": "Configuration Management Database",
   "definicion": "Repository of the IT configuration items and their relationships; the basis for assessing the impact of a change."
  },
  {
   "termino": "IT strategy",
   "definicion": "It defines which technology capabilities the business needs and how they will be built, bought or rented; it includes principles, operating model, prioritized portfolio and metrics."
  },
  {
   "termino": "ISO/IEC 33000",
   "definicion": "Family of standards for software process assessment; it succeeds ISO/IEC 15504 (SPICE). It assesses process capability, it does not certify the company."
  },
  {
   "termino": "SAP LeanIX",
   "definicion": "Architecture portfolio management platform: catalog of applications, capabilities, dependencies, costs and lifecycle."
  },
  {
   "termino": "SAP Signavio",
   "definicion": "Process management platform: collaborative BPMN modeling, repository and process mining."
  },
  {
   "termino": "ServiceNow",
   "definicion": "ITSM and workflow platform, built on a CMDB; it orchestrates IT processes and those of other areas."
  },
  {
   "termino": "Process mining",
   "definicion": "Reconstruction of the real process from the system records instead of from interviews. It reveals variants, times and rework that nobody documented."
  },
  {
   "termino": "SaaS",
   "sigla": "Software as a Service",
   "definicion": "An application rented and operated by the vendor; it shifts the effort to integration, identity and contract management."
  },
  {
   "termino": "SCM",
   "sigla": "Supply Chain Management",
   "definicion": "Management of the end-to-end supply chain process: demand, sourcing, production, warehousing, transportation and returns."
  },
  {
   "termino": "RTO / RPO",
   "definicion": "Recovery Time Objective: how long the restoration may take. Recovery Point Objective: how much information can be lost. Continuity parameters."
  },
  {
   "termino": "Data residency",
   "definicion": "Legal requirement on which country the information may be stored or processed in; a design constraint in multinational architectures."
  }
 ],
 "practica": {
  "calculos": [
   {
    "tema": "Framework selection",
    "titulo": "Weighted decision matrix",
    "enunciado": "A corporation has to choose the framework it will run its transformation with. The committee agreed on six criteria with their weights and rated each alternative from 1 to 5. Calculate the weighted score of each framework.",
    "datos": {
     "tipo": "tabla",
     "titulo": "Criteria, weights and ratings",
     "encabezados": [
      "Criterion",
      "Weight",
      "TOGAF",
      "Zachman",
      "DoDAF"
     ],
     "filas": [
      [
       "Fit to the objective (transform)",
       "30 %",
       "5",
       "2",
       "3"
      ],
      [
       "Domain coverage",
       "20 %",
       "5",
       "5",
       "4"
      ],
      [
       "Learning curve",
       "15 %",
       "2",
       "4",
       "2"
      ],
      [
       "Certified talent available",
       "15 %",
       "5",
       "3",
       "2"
      ],
      [
       "Adoption cost",
       "10 %",
       "4",
       "5",
       "5"
      ],
      [
       "Supporting tools",
       "10 %",
       "5",
       "3",
       "2"
      ]
     ]
    },
    "preguntas": [
     {
      "etiqueta": "TOGAF weighted score",
      "respuesta": 4.45,
      "unidad": "pts",
      "tolerancia": 0.03,
      "pista": "Σ (weight × rating), with the weights in decimal form."
     },
     {
      "etiqueta": "Zachman weighted score",
      "respuesta": 3.45,
      "unidad": "pts",
      "tolerancia": 0.03
     },
     {
      "etiqueta": "DoDAF weighted score",
      "respuesta": 3,
      "unidad": "pts",
      "tolerancia": 0.03
     }
    ],
    "solucion": "<div class=\"paso-calc\">TOGAF  = 0.30×5 + 0.20×5 + 0.15×2 + 0.15×5 + 0.10×4 + 0.10×5\n       = 1.50 + 1.00 + 0.30 + 0.75 + 0.40 + 0.50 = <span class=\"resaltado\">4.45</span>\n\nZachman= 0.30×2 + 0.20×5 + 0.15×4 + 0.15×3 + 0.10×5 + 0.10×3\n       = 0.60 + 1.00 + 0.60 + 0.45 + 0.50 + 0.30 = <span class=\"resaltado\">3.45</span>\n\nDoDAF  = 0.30×3 + 0.20×4 + 0.15×2 + 0.15×2 + 0.10×5 + 0.10×2\n       = 0.90 + 0.80 + 0.30 + 0.30 + 0.50 + 0.20 = <span class=\"resaltado\">3.00</span></div><p><b>How you defend the result.</b> TOGAF wins, but its lowest rating is learning curve (2 out of 5). A complete recommendation includes the mitigation plan: adopt the ADM in iterations, start with a narrow scope and train a small core group first.</p><p>The value of the method is not in the number: it is that it <b>forces the weights to be made explicit</b>. If someone disagrees with the result, the discussion happens about the weights —which is where it belongs— and not about personal preferences.</p>"
   },
   {
    "tema": "Sensitivity of the decision",
    "titulo": "How robust is the choice?",
    "enunciado": "The IT director argues that the learning curve should weigh much more: he proposes raising it from <b>15 % to 35 %</b>, lowering fit to the objective from <b>30 % to 10 %</b>. The other weights and all the ratings stay the same. Recalculate.",
    "preguntas": [
     {
      "etiqueta": "New TOGAF score",
      "respuesta": 3.85,
      "unidad": "pts",
      "tolerancia": 0.03
     },
     {
      "etiqueta": "New Zachman score",
      "respuesta": 3.85,
      "unidad": "pts",
      "tolerancia": 0.03
     },
     {
      "etiqueta": "New DoDAF score",
      "respuesta": 2.8,
      "unidad": "pts",
      "tolerancia": 0.03
     }
    ],
    "solucion": "<div class=\"paso-calc\">New weights:  fit 0.10 · coverage 0.20 · curve 0.35\n              talent 0.15 · cost 0.10 · tools 0.10\n\nTOGAF  = 0.10×5 + 0.20×5 + 0.35×2 + 0.15×5 + 0.10×4 + 0.10×5\n       = 0.50 + 1.00 + 0.70 + 0.75 + 0.40 + 0.50 = <span class=\"resaltado\">3.85</span>\n\nZachman= 0.10×2 + 0.20×5 + 0.35×4 + 0.15×3 + 0.10×5 + 0.10×3\n       = 0.20 + 1.00 + 1.40 + 0.45 + 0.50 + 0.30 = <span class=\"resaltado\">3.85</span>\n\nDoDAF  = 0.10×3 + 0.20×4 + 0.35×2 + 0.15×2 + 0.10×5 + 0.10×2\n       = 0.30 + 0.80 + 0.70 + 0.30 + 0.50 + 0.20 = <span class=\"resaltado\">2.80</span></div><p><b>The point of the exercise:</b> with the new set of weights TOGAF and Zachman end up <b>exactly tied at 3.85</b>. The full-point advantage TOGAF had in the first calculation evaporated when two weights were moved.</p><p>The decision <b>was not robust</b>: it depended entirely on how much fit to the objective weighed against ease of adoption. That is exactly the kind of finding you have to take to the committee.</p><p>That is sensitivity analysis, and it is what separates a professional recommendation from a pretty table. When the result changes under a reasonable adjustment of the weights, you have to say so and take the discussion to the committee, not hide it.</p><p>A note on method: comparing frameworks that answer different questions —TOGAF transforms, Zachman classifies— has a limit. Very often the right answer is to use them in a complementary way.</p>"
   },
   {
    "tema": "Portfolio rationalization",
    "titulo": "Savings from retiring redundant applications",
    "enunciado": "The application catalog reveals <b>4 systems</b> that cover the same document management capability, with annual licensing costs of <b>$420,000</b>, <b>$310,000</b>, <b>$180,000</b> and <b>$95,000</b>. You decide to consolidate on the $420,000 one, which already supports most of the users. Migrating the other three costs <b>$650,000</b> one time.",
    "preguntas": [
     {
      "etiqueta": "Current annual cost of the set",
      "respuesta": 1005000,
      "unidad": "$",
      "tolerancia": 500
     },
     {
      "etiqueta": "Annual saving after consolidating",
      "respuesta": 585000,
      "unidad": "$",
      "tolerancia": 500
     },
     {
      "etiqueta": "Payback period of the migration",
      "respuesta": 13.33,
      "unidad": "months",
      "tolerancia": 0.2
     },
     {
      "etiqueta": "Cumulative net saving over 3 years",
      "respuesta": 1105000,
      "unidad": "$",
      "tolerancia": 1000
     }
    ],
    "solucion": "<div class=\"paso-calc\">Current cost = 420,000 + 310,000 + 180,000 + 95,000 = <span class=\"resaltado\">$1,005,000/year</span>\nFuture cost  = 420,000\nAnnual saving= 1,005,000 − 420,000 = <span class=\"resaltado\">$585,000/year</span>\n\nPayback = 650,000 / 585,000 = 1.111 years = <span class=\"resaltado\">13.3 months</span>\n\nNet saving 3 years = (585,000 × 3) − 650,000\n                   = 1,755,000 − 650,000 = <span class=\"resaltado\">$1,105,000</span></div><p><b>Why this is architecture and not just savings.</b> The application catalog —an artifact of ADM phase C— is what made the redundancy visible. Without it, nobody knew there were four systems doing the same thing.</p><p><b>And the warning:</b> the calculation counts licenses only. A complete case must also add the cost of training, the temporary loss of productivity during the migration, the risk of functionality not covered by the system you keep, and the cost of keeping the historical data accessible.</p>"
   }
  ],
  "opcionMultiple": [
   {
    "tema": "DoDAF",
    "pregunta": "What is DoDAF's distinctive contribution compared with other frameworks?",
    "opciones": [
     "It standardizes the views: it defines viewpoints with specific products so that architectures from different organizations are comparable and interoperable",
     "It offers an iterative transformation cycle equivalent to the ADM",
     "It is an ontology of six questions and several perspectives",
     "It is a software platform for managing the application portfolio"
    ],
    "correcta": 0,
    "explicacion": "DoDAF was created to support acquisitions and the integration of joint capabilities in the U.S. Department of Defense, where interoperability between different suppliers is the central problem.",
    "porQueNo": {
     "1": "The transformation cycle is TOGAF's contribution with its ADM.",
     "2": "That is the description of Zachman.",
     "3": "That describes a tool such as SAP LeanIX, not a framework."
    }
   },
   {
    "tema": "DoDAF",
    "pregunta": "In DoDAF 2.0, what does the <i>Capability Viewpoint</i> (CV) articulate?",
    "opciones": [
     "The capability requirements, the delivery schedule and the deployed capability",
     "The operational scenarios and activities",
     "The applicable policies, standards and constraints",
     "The design and interconnection of the systems"
    ],
    "correcta": 0,
    "explicacion": "CV answers which capabilities are required and when they will be available. It is the view that connects strategy with delivery planning.",
    "porQueNo": {
     "1": "That corresponds to the Operational Viewpoint (OV).",
     "2": "That corresponds to the Standards Viewpoint (StdV).",
     "3": "That corresponds to the Systems Viewpoint (SV)."
    }
   },
   {
    "tema": "IAF",
    "pregunta": "How is Capgemini's IAF framework structured?",
    "opciones": [
     "As a matrix of four areas —business, information, information systems and infrastructure— by four levels —contextual, conceptual, logical and physical—",
     "As a cycle of nine phases with requirements management at the center",
     "As eight standardized viewpoints with mandatory products",
     "As a five-level pyramid from strategy to infrastructure"
    ],
    "correcta": 0,
    "explicacion": "IAF crosses domains with levels of abstraction, and adds governance, security and sustainability as aspects that cut across the whole matrix.",
    "porQueNo": {
     "1": "That is TOGAF's ADM.",
     "2": "That is the structure of DoDAF.",
     "3": "That is the structure of ATOM."
    }
   },
   {
    "tema": "IAF",
    "pregunta": "In IAF, the difference between the logical level and the physical level is that…",
    "opciones": [
     "The logical one defines which component is needed; the physical one, which concrete product implements it",
     "The logical one describes the software and the physical one the hardware",
     "The logical one is the AS-IS and the physical one the TO-BE",
     "The logical one corresponds to data and the physical one to infrastructure"
    ],
    "correcta": 0,
    "explicacion": "It is the same distinction TOGAF makes between ABB (architecture building block) and SBB (solution building block), and it keeps you from committing to a supplier before you have defined the need.",
    "porQueNo": {
     "1": "Both levels apply to all four areas, software and infrastructure included.",
     "2": "AS-IS and TO-BE are states in time, not levels of abstraction.",
     "3": "The levels cut across all the areas; they are not areas themselves."
    }
   },
   {
    "tema": "ATOM",
    "pregunta": "What precaution should you take when citing the ATOM framework in academic work?",
    "opciones": [
     "State which meaning you are using and with which source, because the acronym is used with more than one meaning and it has no single normative body",
     "None: it is standardized by The Open Group just like TOGAF",
     "Use it only for defense projects, like DoDAF",
     "Cite it only in its ISO-certified version"
    ],
    "correcta": 0,
    "explicacion": "When a term has no standards body behind it, the source is part of the definition. It is good practice in general, not just for ATOM.",
    "porQueNo": {
     "1": "The Open Group publishes TOGAF and ArchiMate, not ATOM.",
     "2": "The defense framework is DoDAF; ATOM does not have that scope.",
     "3": "ATOM is not an ISO standard."
    }
   },
   {
    "tema": "Framework selection",
    "pregunta": "In a weighted decision matrix, where is the real value of the method?",
    "opciones": [
     "In that it forces you to make the criteria weights explicit and to discuss them",
     "In that the final score removes the subjectivity from the decision",
     "In that it produces a number that management has to obey",
     "In that it lets you compare alternatives without knowing them in depth"
    ],
    "correcta": 0,
    "explicacion": "The ratings are still judgments. What the method contributes is that the discussion happens about the weights —which is where it belongs— and is documented.",
    "porQueNo": {
     "1": "Subjectivity is made explicit, it does not disappear: weights and ratings are judgments.",
     "2": "It is an input for deciding, not an automatic verdict.",
     "3": "Rating without knowing the alternatives produces numbers with no basis."
    }
   },
   {
    "tema": "Framework selection",
    "pregunta": "The winning framework's score changes position when you reasonably adjust one weight. What should the analyst do?",
    "opciones": [
     "Report it: the decision is not robust and the discussion has to go up to the committee",
     "Keep the original weights and not mention the exercise",
     "Choose the framework that wins in the largest number of scenarios and leave out the detail",
     "Discard the matrix and decide from experience"
    ],
    "correcta": 0,
    "explicacion": "Sensitivity analysis is part of the deliverable. A recommendation that hides its fragility is not a professional recommendation.",
    "porQueNo": {
     "1": "Hiding the finding compromises the credibility of the whole analysis.",
     "2": "Counting wins without explaining what they depend on hides the relevant information.",
     "3": "The matrix is still useful: what it reveals is that priorities have to be discussed."
    }
   },
   {
    "tema": "COBIT and ITIL",
    "pregunta": "What is the main structural change from ITIL v3 to ITIL 4?",
    "opciones": [
     "The five-stage service lifecycle is replaced by the Service Value System, with the value chain at the center and practices instead of processes",
     "Incident management and change management are removed",
     "It becomes a certifiable ISO standard",
     "It merges with COBIT into a single governance framework"
    ],
    "correcta": 0,
    "explicacion": "ITIL 4 responds to a continuous delivery environment: it incorporates Agile, Lean and DevOps, and defines 34 practices plus seven guiding principles.",
    "porQueNo": {
     "1": "Both still exist, now as practices.",
     "2": "The certifiable service management standard is ISO/IEC 20000-1, not ITIL.",
     "3": "They are different frameworks with different owners: PeopleCert and ISACA."
    }
   },
   {
    "tema": "ITIL 4",
    "pregunta": "Why does ITIL 4 talk about “practices” instead of “processes”?",
    "opciones": [
     "Because a practice includes people, information, technology and partners, not just the flow of activities",
     "Because it is a change of name with no conceptual implication",
     "Because processes were banned by the ISO standard",
     "Because practices are optional and processes mandatory"
    ],
    "correcta": 0,
    "explicacion": "The criticism of v3 was that it produced heavy processes and silos. The concept of a practice is deliberately broader than that of a process.",
    "porQueNo": {
     "1": "The change is conceptual: it widens the scope of what is managed.",
     "2": "No standard bans processes.",
     "3": "Being mandatory is not the criterion that distinguishes them."
    }
   },
   {
    "tema": "BRM",
    "pregunta": "What is the function of a Business Relationship Manager?",
    "opciones": [
     "Understanding the strategy of the business area, shaping demand, prioritizing the portfolio and communicating the value delivered by IT",
     "Gathering requirements and capturing them in the ticketing system",
     "Administering the contracts with the technology suppliers",
     "Supervising the service desk and response times"
    ],
    "correcta": 0,
    "explicacion": "Without a BRM, IT receives a list of disconnected requests and the business sees it as a ticket supplier. The BRM turns requests into demand aligned with the strategy.",
    "porQueNo": {
     "1": "That is taking orders; the BRM shapes demand, it does not just record it.",
     "2": "That is supplier management.",
     "3": "That is a function of ITSM and of service operation."
    }
   },
   {
    "tema": "ITSM",
    "pregunta": "What does it mean to manage IT “as a service”?",
    "opciones": [
     "Defining a service catalog with committed levels, and managing incidents, problems, changes and assets around them",
     "Outsourcing the IT operation to an external supplier",
     "Charging the business areas internally for their use of technology",
     "Replacing your own systems with SaaS solutions"
    ],
    "correcta": 0,
    "explicacion": "ITSM is a change in the unit of management: from technologies to services that the business consumes and whose performance can be committed to and measured.",
    "porQueNo": {
     "1": "Outsourcing is a sourcing decision, independent of ITSM.",
     "2": "Internal charging is a possible practice, not the definition.",
     "3": "The deployment model does not determine whether something is managed as a service."
    }
   },
   {
    "tema": "IT strategy",
    "pregunta": "What distinguishes an IT strategy from a project portfolio?",
    "opciones": [
     "The strategy defines which capabilities the business needs and how they will be built, bought or rented, with principles and metrics; the portfolio is the prioritized list derived from it",
     "They are the same thing under a different name",
     "The strategy is defined by IT and the portfolio by the business",
     "The strategy is annual and the portfolio five-year"
    ],
    "correcta": 0,
    "explicacion": "A list of projects with no principles and no target capabilities is a budget, not a strategy. The strategy is what lets you say no to a project.",
    "porQueNo": {
     "1": "One is the direction; the other, prioritized execution.",
     "2": "Both require joint participation from the business and from IT.",
     "3": "The horizons are usually the other way round, and in any case that is not what distinguishes them."
    }
   },
   {
    "tema": "Project start-up",
    "pregunta": "Before approving a new technology project, which is the question that saves the most money and gets asked the least?",
    "opciones": [
     "Is there already a capability or an application in the company that solves this?",
     "Which supplier offers the best price?",
     "How long will the development take?",
     "Who will be the technical lead of the project?"
    ],
    "correcta": 0,
    "explicacion": "Without an application catalog and without architecture, the answer is always “I don't know”, and the company ends up buying the same thing three times.",
    "porQueNo": {
     "1": "It is relevant only after you confirm that something has to be bought.",
     "2": "The timeline matters, but it does not prevent duplication.",
     "3": "It is an execution decision, later than the decision to invest."
    }
   },
   {
    "tema": "Standards",
    "pregunta": "What scope does the ISO/IEC 33000 family cover?",
    "opciones": [
     "Software process assessment; it succeeds ISO/IEC 15504 (SPICE)",
     "Information security",
     "IT service management",
     "Notation for business process modeling"
    ],
    "correcta": 0,
    "explicacion": "It assesses the capability of software processes; it is not a company certification like ISO 9001 or ISO/IEC 27001.",
    "porQueNo": {
     "1": "That is ISO/IEC 27001.",
     "2": "That is ISO/IEC 20000-1.",
     "3": "That is BPMN / ISO 19510."
    }
   },
   {
    "tema": "Tools",
    "pregunta": "What problem does a platform like SAP LeanIX solve?",
    "opciones": [
     "Keeping the architecture portfolio alive: which applications exist, which capability they support, what they cost, how obsolete they are and which ones can be retired",
     "Modeling processes in BPMN notation collaboratively",
     "Managing incidents and changes from the service desk",
     "Simulating the process with variability to compare scenarios"
    ],
    "correcta": 0,
    "explicacion": "It is, in essence, the application catalog and the matrices of ADM phase C turned into a living repository with an owner.",
    "porQueNo": {
     "1": "That corresponds to SAP Signavio, Bizagi or Camunda.",
     "2": "That corresponds to ServiceNow or Jira Service Management.",
     "3": "That corresponds to simulation tools."
    }
   },
   {
    "tema": "Process mining",
    "pregunta": "Why is process mining usually more reliable than interviews for discovering the AS-IS?",
    "opciones": [
     "Because it reconstructs what actually happened from the system logs, with real times, exceptional routes and rework that no one documented",
     "Because it is faster to run than an interview",
     "Because it does not require involving the business areas",
     "Because it removes the need to model the process in BPMN"
    ],
    "correcta": 0,
    "explicacion": "The AS-IS from interviews is what people believe they do; the one from the logs is what happened. They are almost always different, and the difference is material.",
    "porQueNo": {
     "1": "Speed is not what makes it reliable; it also requires preparing the data.",
     "2": "Interpreting the findings demands the business: the logs tell you what happened, not why.",
     "3": "The model is still needed to communicate and redesign."
    }
   },
   {
    "tema": "Tools",
    "pregunta": "“The architecture repository has not been updated in two years and no one trusts it.” What is the diagnosis?",
    "opciones": [
     "Governance is missing: the tool amplifies an existing practice, it does not create one. With no data owner and no update process, it degrades",
     "The tool chosen was not the right one; you have to migrate to another",
     "The problem is insufficient licensing",
     "Technical training in the use of the platform is missing"
    ],
    "correcta": 0,
    "explicacion": "Method and data owner first, license afterwards. A repository without governance turns into an outdated, expensive inventory.",
    "porQueNo": {
     "1": "Migrating reproduces the same problem on another platform.",
     "2": "The number of licenses does not explain the lack of updating.",
     "3": "Training helps, but with no responsible party and no process the data degrades anyway."
    }
   },
   {
    "tema": "Emerging technologies",
    "pregunta": "What is the prerequisite common to IoT, AI and machine learning for generating value?",
    "opciones": [
     "A solid data architecture: sound data, with an owner and an agreed meaning",
     "Migrating the whole infrastructure to the cloud beforehand",
     "Having SAP licensing",
     "Having certified the organization to ISO/IEC 27001"
    ],
    "correcta": 0,
    "explicacion": "All three depend on the data. AI amplifies data quality in both directions: a model trained on inconsistent data produces inconsistent decisions at scale.",
    "porQueNo": {
     "1": "The cloud helps, but it is neither a necessary nor a sufficient condition.",
     "2": "No specific vendor is a requirement.",
     "3": "The certification manages security, not data quality."
    }
   },
   {
    "tema": "Development methodologies",
    "pregunta": "A market ERP is going to be implemented instead of building a system. Where is the effort concentrated?",
    "opciones": [
     "On parameterizing the product and on changing the company's process to fit it",
     "On programming the missing modules from scratch",
     "On the database design",
     "On selecting the programming language"
    ],
    "correcta": 0,
    "explicacion": "In a COTS implementation the effort shifts from programming to configuring and, above all, to managing organizational change. Over-customizing cancels out the advantage of the package.",
    "porQueNo": {
     "1": "Programming heavily on top of an ERP makes every future upgrade more expensive.",
     "2": "The data model comes given by the product.",
     "3": "It is a decision the product already made."
    }
   },
   {
    "tema": "Infrastructure",
    "pregunta": "What do RTO and RPO mean?",
    "opciones": [
     "RTO: how long service restoration may take. RPO: how much information can be lost",
     "RTO: return on operations. RPO: return on portfolio",
     "RTO: target response time. RPO: target resolution priority",
     "They are two levels of service agreement with cloud providers"
    ],
    "correcta": 0,
    "explicacion": "They are the two continuity parameters. They define how much redundancy and what backup frequency you need, and therefore how much the architecture costs.",
    "porQueNo": {
     "1": "They are not financial indicators.",
     "2": "Response time and priority are service desk parameters, not continuity ones.",
     "3": "They apply to any architecture, your own or in the cloud."
    }
   },
   {
    "tema": "Portfolio",
    "pregunta": "What is the point of classifying applications into systems of record, of differentiation and of innovation?",
    "opciones": [
     "Because each category admits a different pace of change, level of risk and methodology",
     "To calculate the total licensing cost",
     "To determine which vendor supports each system",
     "To assign the systems to the four TOGAF domains"
    ],
    "correcta": 0,
    "explicacion": "Treating an ERP as an experiment —or an experiment with the governance of an ERP— is a governance mistake with expensive consequences in both directions.",
    "porQueNo": {
     "1": "Cost is documented in the portfolio, but it is not the criterion behind this classification.",
     "2": "The vendor is a catalog data point, not a governance category.",
     "3": "All applications belong to the applications domain."
    }
   },
   {
    "tema": "SCM",
    "pregunta": "Why is the supply chain the quintessential example of a cross-functional process?",
    "opciones": [
     "Because it runs through planning, purchasing, production, warehousing, transport and service, and the customer perceives a single delivery",
     "Because it is the most expensive process in any company",
     "Because it is always run on a single integrated system",
     "Because it is regulated by a specific ISO standard"
    ],
    "correcta": 0,
    "explicacion": "Each area can meet its indicator and the order still arrives late: local efficiency without end-to-end effectiveness.",
    "porQueNo": {
     "1": "Cost varies by industry and is not what makes it cross-functional.",
     "2": "It is exactly the opposite: it usually involves ERP, WMS, TMS and supplier systems.",
     "3": "There are applicable standards, but that is not what defines its cross-functional nature."
    }
   }
  ],
  "escenarios": [
   {
    "escenario": "A government agency has to exchange architectures with three different vendors and needs the products to be comparable with one another.",
    "pregunta": "Which framework contributes most in this situation?",
    "opciones": [
     "DoDAF",
     "TOGAF",
     "ITIL",
     "Lean"
    ],
    "correcta": 0,
    "explicacion": "DoDAF standardizes the views and their products precisely to support interoperability and acquisitions across different organizations.",
    "porQueNo": {
     "1": "TOGAF gives you method, but it suggests artifacts instead of standardizing them.",
     "2": "ITIL manages IT services.",
     "3": "Lean improves processes."
    }
   },
   {
    "escenario": "A consulting firm needs its teams to speak the same language when they walk into projects at very different clients, clearly distinguishing what is needed from which product it will be implemented with.",
    "pregunta": "Which framework fits best?",
    "opciones": [
     "IAF",
     "DoDAF",
     "COBIT",
     "BPMN"
    ],
    "correcta": 0,
    "explicacion": "IAF was born in consulting and its matrix explicitly separates the logical and physical levels, which is exactly that distinction.",
    "porQueNo": {
     "1": "DoDAF is oriented to defense and acquisitions.",
     "2": "COBIT governs IT.",
     "3": "BPMN only models processes."
    }
   },
   {
    "escenario": "The committee selected TOGAF, but its lowest score was learning curve: the team has no prior experience in architecture.",
    "pregunta": "What must the recommendation include?",
    "opciones": [
     "A mitigation plan: adopt the ADM in iterations, with a bounded scope, and train a small core group first",
     "Switch the choice to the framework with the best learning curve",
     "Immediately hire a certified external team and leave everything to them",
     "Leave that score out so the proposal is not weakened"
    ],
    "correcta": 0,
    "explicacion": "A complete recommendation does not hide the winner's weakness: it proposes how to neutralize it.",
    "porQueNo": {
     "1": "The heaviest criterion was fit to the objective; switching for convenience sacrifices the purpose.",
     "2": "Without knowledge transfer, the capability does not stay in the organization.",
     "3": "Hiding information compromises the whole analysis."
    }
   },
   {
    "escenario": "Users report that the same billing error repeats every month; the incident is resolved but it happens again.",
    "pregunta": "Which practice should you activate?",
    "opciones": [
     "Problem management (ITIL)",
     "Incident management (ITIL)",
     "Weighted decision matrix",
     "Process mining on the application catalog"
    ],
    "correcta": 0,
    "explicacion": "Incident management restores the service; problem management looks for and eliminates the root cause of the recurrence.",
    "porQueNo": {
     "1": "That is what is already being done, and that is why the error comes back.",
     "2": "It is a method for selecting among alternatives.",
     "3": "It could help with the diagnosis, but the practice to activate is problem management."
    }
   },
   {
    "escenario": "Audit asks who is responsible for each IT decision, what controls exist and what metrics are used to evaluate the area's performance.",
    "pregunta": "Which framework answers those questions?",
    "opciones": [
     "COBIT",
     "ITIL",
     "IAF",
     "ISO 19510"
    ],
    "correcta": 0,
    "explicacion": "COBIT is governance: accountability, control objectives, risk, metrics and alignment with the business objectives.",
    "porQueNo": {
     "1": "ITIL answers how the service is operated, not who answers for it before the board.",
     "2": "IAF is an architecture framework.",
     "3": "ISO 19510 is the BPMN notation."
    }
   },
   {
    "escenario": "The business area sends loose requests to IT all year long, with no priority and no link to the strategy, and sees IT as a ticket provider.",
    "pregunta": "What function is missing in the organization?",
    "opciones": [
     "Business Relationship Management (BRM)",
     "Service desk",
     "Supplier management",
     "Project management office"
    ],
    "correcta": 0,
    "explicacion": "The BRM understands the area's strategy, shapes demand, prioritizes the portfolio and communicates the value delivered.",
    "porQueNo": {
     "1": "The service desk handles what comes in; it does not shape demand.",
     "2": "Supplier management looks outward, not toward the internal business.",
     "3": "The PMO executes the portfolio once it is already prioritized."
    }
   },
   {
    "escenario": "The corporate office wants to know how many applications it has, which ones overlap, how much they cost and which ones are worth retiring after acquiring two companies.",
    "pregunta": "Which tool category applies?",
    "opciones": [
     "Architecture portfolio management (EAM), such as SAP LeanIX",
     "IT service management (ITSM), such as ServiceNow",
     "Process modeling, such as Signavio",
     "Process simulation, such as Simul8"
    ],
    "correcta": 0,
    "explicacion": "Portfolio rationalization is the central use case of an EAM platform: catalog, capabilities, dependencies, costs and life cycle.",
    "porQueNo": {
     "1": "ITSM manages service operation, not the application portfolio.",
     "2": "Signavio models processes; the portfolio is not its main object.",
     "3": "Simulation evaluates the performance of a process, not the redundancy of systems."
    }
   },
   {
    "escenario": "Management asks for “an artificial intelligence project for this year” without having defined what problem it will solve.",
    "pregunta": "What is the right answer from architecture?",
    "opciones": [
     "Steer the conversation back to the business problem and check the data architecture before committing to a technology",
     "Pick the most common AI use case in the industry and propose it",
     "Buy the AI platform and look for applications afterwards",
     "Reject the request because AI does not belong to any architecture domain"
    ],
    "correcta": 0,
    "explicacion": "The right question is not “where do we use AI?” but “what is the problem and what solves it best?”. And without sound, owned data with an agreed meaning, no model produces value.",
    "porQueNo": {
     "1": "Copying someone else's use case does not guarantee that it solves a problem of your own.",
     "2": "It is exactly the pattern that enterprise architecture exists to avoid.",
     "3": "AI does belong to the applications and technology domains; the problem is the absence of a need."
    }
   }
  ],
  "clasificar": [
   {
    "consigna": "Classify each characteristic according to the framework it belongs to.",
    "categorias": [
     "TOGAF",
     "Zachman",
     "DoDAF",
     "IAF"
    ],
    "items": [
     {
      "texto": "The ADM: cycle of phases A–H",
      "categoria": "TOGAF"
     },
     {
      "texto": "Requirements management at the center",
      "categoria": "TOGAF"
     },
     {
      "texto": "Ontology of six questions and several perspectives",
      "categoria": "Zachman"
     },
     {
      "texto": "Check that no views are missing",
      "categoria": "Zachman"
     },
     {
      "texto": "Eight standardized viewpoints (AV, CV, OV, SV…)",
      "categoria": "DoDAF"
     },
     {
      "texto": "Oriented to interoperability and acquisitions",
      "categoria": "DoDAF"
     },
     {
      "texto": "Matrix of 4 areas × 4 levels of abstraction",
      "categoria": "IAF"
     },
     {
      "texto": "Contextual, conceptual, logical and physical levels",
      "categoria": "IAF"
     }
    ],
    "explicacion": "TOGAF provides method; Zachman, taxonomy; DoDAF, standardized views for interoperating; IAF, the domain × abstraction level matrix."
   },
   {
    "consigna": "Each question belongs to a different framework. Classify them.",
    "categorias": [
     "COBIT (governance)",
     "ITIL (service)",
     "TOGAF (architecture)",
     "ISO (certifiable standard)"
    ],
    "items": [
     {
      "texto": "Who is accountable for this decision?",
      "categoria": "COBIT (governance)"
     },
     {
      "texto": "Is the risk acceptable and measured?",
      "categoria": "COBIT (governance)"
     },
     {
      "texto": "How do we restore the service that is down?",
      "categoria": "ITIL (service)"
     },
     {
      "texto": "Is this incident a recurring problem?",
      "categoria": "ITIL (service)"
     },
     {
      "texto": "How should the application ecosystem evolve?",
      "categoria": "TOGAF (architecture)"
     },
     {
      "texto": "What gaps are there between the AS-IS and the TO-BE?",
      "categoria": "TOGAF (architecture)"
     },
     {
      "texto": "Can we certify our ISMS with a third party?",
      "categoria": "ISO (certifiable standard)"
     },
     {
      "texto": "Do we meet the auditable quality requirements?",
      "categoria": "ISO (certifiable standard)"
     }
    ],
    "explicacion": "The four coexist because they answer different questions. The professional answer is almost never “we use only one”."
   },
   {
    "consigna": "Classify each tool according to the category it belongs to.",
    "categorias": [
     "Architecture portfolio (EAM)",
     "Process modeling and mining",
     "Service management (ITSM)",
     "Free-form diagramming"
    ],
    "items": [
     {
      "texto": "SAP LeanIX",
      "categoria": "Architecture portfolio (EAM)"
     },
     {
      "texto": "Ardoq / Bizzdesign",
      "categoria": "Architecture portfolio (EAM)"
     },
     {
      "texto": "SAP Signavio",
      "categoria": "Process modeling and mining"
     },
     {
      "texto": "Celonis",
      "categoria": "Process modeling and mining"
     },
     {
      "texto": "Bizagi / Camunda",
      "categoria": "Process modeling and mining"
     },
     {
      "texto": "ServiceNow",
      "categoria": "Service management (ITSM)"
     },
     {
      "texto": "Jira Service Management",
      "categoria": "Service management (ITSM)"
     },
     {
      "texto": "draw.io / Visio",
      "categoria": "Free-form diagramming"
     }
    ],
    "explicacion": "Free-form diagramming produces images; EAM and process platforms produce a repository with relationships you can query. That is the difference between a drawing and a model."
   },
   {
    "consigna": "Classify each item according to the IT department function it belongs to.",
    "categorias": [
     "Strategy and architecture",
     "Operations and infrastructure",
     "Security and compliance",
     "Business relationship"
    ],
    "items": [
     {
      "texto": "Define principles and target architectures",
      "categoria": "Strategy and architecture"
     },
     {
      "texto": "Build the technology roadmap",
      "categoria": "Strategy and architecture"
     },
     {
      "texto": "Administer servers, cloud and networks",
      "categoria": "Operations and infrastructure"
     },
     {
      "texto": "Handle incidents at the service desk",
      "categoria": "Operations and infrastructure"
     },
     {
      "texto": "Monitoring and response to cyber threats",
      "categoria": "Security and compliance"
     },
     {
      "texto": "Business continuity and audit",
      "categoria": "Security and compliance"
     },
     {
      "texto": "Shape demand and prioritize the portfolio",
      "categoria": "Business relationship"
     },
     {
      "texto": "Communicate the value delivered to the business areas",
      "categoria": "Business relationship"
     }
    ],
    "explicacion": "Before you advise a company you have to know how the area that serves it operates. The four functions exist even if in small companies the same person covers them."
   }
  ],
  "ordenar": [
   {
    "consigna": "Put in order the steps for selecting a framework with solid grounds.",
    "pasos": [
     "Define what question the organization needs to answer",
     "Identify the candidate frameworks and rule out those that do not apply",
     "Agree on the evaluation criteria with the stakeholders",
     "Assign weights to the criteria (they must add up to 100 %)",
     "Score each alternative against each criterion",
     "Calculate the weighted score of each option",
     "Run a sensitivity analysis on the critical weights",
     "Recommend, with a mitigation plan for the winner's weaknesses"
    ],
    "explicacion": "Agreeing on the criteria before scoring avoids the bias of choosing first and justifying afterwards, which is the most common vice of these matrices."
   },
   {
    "consigna": "Put in order the stages for launching a new technology project.",
    "pasos": [
     "Business need stated with its magnitude",
     "Preliminary business case",
     "Technical, operational and economic feasibility analysis",
     "Architecture review: does the capability already exist?",
     "Prioritization in the portfolio",
     "Authorization, sponsor and budget",
     "Execution under architecture governance",
     "Go-live and measurement of the benefit"
    ],
    "explicacion": "The architecture review comes before prioritization: there is no point in prioritizing a project that duplicates an existing capability."
   },
   {
    "consigna": "Put the IAF abstraction levels in order, from the most general to the most concrete.",
    "pasos": [
     "Contextual · Why?",
     "Conceptual · What?",
     "Logical · How?",
     "Physical · With what?"
    ],
    "explicacion": "Each level is answered before you move down to the next. Jumping from contextual to physical means choosing a product without having defined the need."
   },
   {
    "consigna": "Put the ATOM pyramid in order, from the apex to the base.",
    "pasos": [
     "Corporate strategy and direction",
     "Business models and processes that create value",
     "IT alignment",
     "Information artifacts: systems and databases",
     "IT infrastructure"
    ],
    "explicacion": "It is the same top-down logic as every serious framework: technology comes last because it responds to what is above it."
   }
  ],
  "flashcards": [
   {
    "frente": "DoDAF",
    "reverso": "Framework of the U.S. Department of Defense. It standardizes eight viewpoints to support interoperability, acquisitions and portfolio management."
   },
   {
    "frente": "The eight DoDAF viewpoints",
    "reverso": "AV (All) · CV (Capability) · DIV (Data & Information) · OV (Operational) · PV (Project) · SvcV (Services) · StdV (Standards) · SV (Systems)."
   },
   {
    "frente": "IAF",
    "reverso": "Integrated Architecture Framework, from Capgemini (1996). Matrix of 4 areas —business, information, systems, infrastructure— by 4 levels —contextual, conceptual, logical, physical—. Cross-cutting: governance, security and sustainability."
   },
   {
    "frente": "Logical vs. physical level (IAF)",
    "reverso": "The logical says which component you need; the physical, which product implements it. It is the equivalent of ABB vs. SBB in TOGAF."
   },
   {
    "frente": "ATOM",
    "reverso": "Architecture, Technology, Organization and Management, in a five-level pyramid from strategy to infrastructure. It is the least standardized: always state your source."
   },
   {
    "frente": "Weighted decision matrix",
    "reverso": "Σ (weight × score). The weights add up to 100 %. Its value lies in forcing you to make the weights explicit, not in the final number."
   },
   {
    "frente": "Sensitivity analysis",
    "reverso": "Recalculate with reasonable alternative weights. If the winner changes, the decision is not robust and you have to report it."
   },
   {
    "frente": "ITIL 3 vs. ITIL 4",
    "reverso": "v3: five-stage life cycle and 26 processes. ITIL 4: Service Value System with the value chain at the center, 34 practices, seven guiding principles, and integration with Agile, Lean and DevOps."
   },
   {
    "frente": "The 7 guiding principles of ITIL 4",
    "reverso": "Focus on value · Start where you are · Progress iteratively · Collaborate and promote visibility · Think holistically · Keep it simple · Optimize and automate."
   },
   {
    "frente": "ITSM",
    "reverso": "Managing IT as a service to the business: catalog, SLA, help desk, incidents, problems, changes, configuration and assets."
   },
   {
    "frente": "BRM",
    "reverso": "Business Relationship Management: it connects IT with the business. It understands the area's strategy, shapes demand, prioritizes the portfolio and communicates value. Without it, IT is a ticket provider."
   },
   {
    "frente": "Incident vs. problem (ITIL)",
    "reverso": "The incident interrupts the service and is resolved by restoring it. The problem is the root cause of recurring incidents and is resolved by eliminating it."
   },
   {
    "frente": "IT strategy",
    "reverso": "Which technology capabilities the business needs and how they will be built, bought or rented. It includes principles, operating model, prioritized portfolio and metrics. It is not a shopping list."
   },
   {
    "frente": "The question that saves the most money",
    "reverso": "“Does a capability or application that solves this already exist?” Without a catalog or an architecture the answer is always “I don't know”, and the company buys the same thing three times."
   },
   {
    "frente": "ISO/IEC 33000",
    "reverso": "Software process assessment; it succeeds ISO/IEC 15504 (SPICE). It assesses process capability, it does not certify the company."
   },
   {
    "frente": "SAP LeanIX",
    "reverso": "EAM platform: application portfolio, capabilities, dependencies, costs and life cycle. The catalog and matrices of ADM phase C, kept alive."
   },
   {
    "frente": "SAP Signavio",
    "reverso": "Process platform: collaborative BPMN modeling, repository and process mining."
   },
   {
    "frente": "ServiceNow",
    "reverso": "ITSM and workflow platform built on a CMDB; it orchestrates IT processes and those of other areas."
   },
   {
    "frente": "Process mining",
    "reverso": "It reconstructs the real process from the system logs. The AS-IS built from interviews is what people believe they do; the one built from logs is what actually happened."
   },
   {
    "frente": "COTS",
    "reverso": "A market product you configure instead of build. The effort shifts from coding to setting parameters and changing the process. Over-customizing cancels out the advantage."
   },
   {
    "frente": "Systems of record / differentiation / innovation",
    "reverso": "Different rates of change and risk tolerance: you do not govern the ERP like an experiment, nor the experiment like an ERP."
   },
   {
    "frente": "RTO / RPO",
    "reverso": "Recovery Time Objective: how long recovery may take. Recovery Point Objective: how much information you can afford to lose."
   },
   {
    "frente": "Prerequisite for AI, IoT and ML",
    "reverso": "A solid data architecture. AI amplifies data quality in both directions."
   },
   {
    "frente": "SCM",
    "reverso": "Supply Chain Management: demand, sourcing, production, warehousing, transport and returns. The textbook example of a cross-functional process."
   },
   {
    "frente": "Framework, standard and law",
    "reverso": "The framework guides and provides method. The standard may set certifiable requirements. The law compels. Obligation never comes from the prestige of the framework."
   }
  ]
 }
}
);
