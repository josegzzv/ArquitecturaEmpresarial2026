/* Generado por herramientas/cadenas.js — no editar a mano la estructura.
   Para corregir una traducción: edita herramientas/traduccion/semana-1.json
   y vuelve a ejecutar:  node herramientas/cadenas.js inyectar semana-1 */
EA.registrarSemanaEn(
{
 "id": 1,
 "estado": "publicada",
 "titulo": "Foundations of Enterprise Architecture",
 "subtitulo": "Domains, processes, frameworks and professional roles.",
 "sesiones": 4,
 "objetivos": [
  "Explain what Enterprise Architecture is and why it starts with business needs.",
  "Distinguish enterprise architecture, solution architecture, IT and Digital Transformation.",
  "Recognize the business, data, application and technology domains.",
  "Differentiate TOGAF, ADM, Zachman and the Gartner approach.",
  "Explain BPM, BPMN, end-to-end processes and the value chain.",
  "Produce a basic AS-IS diagnosis and a TO-BE proposal."
 ],
 "dias": [
  {
   "id": "lunes",
   "nombre": "Session 1",
   "tema": "Introduction to Enterprise Architecture",
   "proposito": "Understand that Enterprise Architecture is not only technology: it is a way of connecting strategy, operations, information and systems in order to transform an organization.",
   "bloques": [
    {
     "tipo": "texto",
     "titulo": "Trigger question",
     "cuerpo": "<p>A Mexican steel company buys several plants in Argentina. Each company uses different processes, applications, databases, suppliers and technologies. Corporate headquarters wants to operate as a single organization.</p><p><b>What problems could appear?</b> Duplicated or incompatible data; different definitions of customer, product or inventory; different processes for buying, producing and selling; applications that do not talk to each other; security and compliance risks; operational disruptions; technology decisions with no business justification.</p>"
    },
    {
     "tipo": "clave",
     "titulo": "Definition",
     "cuerpo": "<p>Enterprise Architecture is a <b>discipline that describes how an organization works today and designs how it should work in the future</b>, aligning its capabilities, processes, data, applications and technology with its strategic objectives.</p>"
    },
    {
     "tipo": "lista",
     "titulo": "What Enterprise Architecture is NOT",
     "items": [
      "It is not just an inventory of systems.",
      "It is not an org chart.",
      "It is not buying new technology.",
      "It does not replace business strategy.",
      "It is not a single diagram.",
      "It is a continuous practice of analysis, design, prioritization and governance."
     ]
    },
    {
     "tipo": "flujo",
     "titulo": "The alignment chain",
     "pasos": [
      "Strategy",
      "Capabilities",
      "Processes",
      "Data and applications",
      "Technology"
     ]
    },
    {
     "tipo": "nota",
     "titulo": "Check question",
     "cuerpo": "<p>If a company buys artificial intelligence but has no clearly defined business problem, is it doing Enterprise Architecture?</p><p><b>Not necessarily.</b> It is acquiring technology, but it is not demonstrating strategic alignment or value creation.</p>"
    },
    {
     "tipo": "defs",
     "titulo": "The four domains",
     "items": [
      {
       "termino": "1 · Business architecture",
       "definicion": "Objectives and strategies, products and services, capabilities, processes, organizational structure, actors, customers, suppliers, rules and policies. <br><i>Question it answers:</i> what does the company need to do to deliver its strategy?"
      },
      {
       "termino": "2 · Data architecture",
       "definicion": "What data exists, who is accountable for it, where it originates and is stored, how it is shared, plus its quality, security, meaning and possible duplication. <br><i>Question it answers:</i> what information does the company need in order to operate and decide?"
      },
      {
       "termino": "3 · Application architecture",
       "definicion": "Systems that support the processes, the functions of each application, integrations, interfaces, dependencies and redundant or obsolete applications. <br><i>Question it answers:</i> which systems use or produce the data needed to operate?"
      },
      {
       "termino": "4 · Technology architecture",
       "definicion": "Servers, cloud, networks and telecommunications, devices, operating systems, platforms and security mechanisms. <br><i>Question it answers:</i> on what infrastructure do the applications run?"
      }
     ]
    },
    {
     "tipo": "tabla",
     "titulo": "Initial map of the steel company",
     "encabezados": [
      "Business",
      "Data",
      "Applications",
      "Technology"
     ],
     "filas": [
      [
       "Steel production and sales",
       "Customers, inventory, quality",
       "ERP, CRM, production system",
       "Servers, cloud, networks"
      ],
      [
       "Purchasing and logistics",
       "Suppliers, orders",
       "Logistics system",
       "Telecommunications"
      ],
      [
       "Quality control",
       "Batches and tests",
       "Quality system",
       "Industrial sensors"
      ]
     ]
    },
    {
     "tipo": "nota",
     "titulo": "Conclusion of the activity",
     "cuerpo": "<p>No domain should be analyzed in isolation. Changing a process may demand new data; that data may require applications, and the applications, new infrastructure.</p>"
    },
    {
     "tipo": "defs",
     "titulo": "AS-IS, TO-BE, gap and roadmap",
     "items": [
      {
       "termino": "AS-IS",
       "definicion": "Current situation. How the organization actually operates today."
      },
      {
       "termino": "TO-BE",
       "definicion": "Desired future situation."
      },
      {
       "termino": "Gap",
       "definicion": "Difference between the current state and the desired one."
      },
      {
       "termino": "Roadmap",
       "definicion": "Sequenced and prioritized initiatives to close the gaps."
      }
     ]
    },
    {
     "tipo": "tabla",
     "titulo": "AS-IS / TO-BE example at the steel company",
     "encabezados": [
      "Element",
      "AS-IS",
      "TO-BE",
      "Gap"
     ],
     "filas": [
      [
       "Customers",
       "Separate databases per country",
       "Single view of the customer",
       "Integrate and clean up data"
      ],
      [
       "Inventory",
       "Manual updating",
       "Near real-time visibility",
       "Sensors and integration"
      ],
      [
       "Purchasing",
       "Different processes",
       "Common regional policy",
       "Redesign the process"
      ],
      [
       "Applications",
       "Different ERPs",
       "Interoperable ecosystem",
       "Interfaces and standards"
      ]
     ]
    },
    {
     "tipo": "clave",
     "titulo": "Important clarification",
     "cuerpo": "<p>The TO-BE <b>does not always mean replacing every system</b>. It may consist of integrating, standardizing, reusing or retiring only what does not create value.</p>"
    },
    {
     "tipo": "lista",
     "titulo": "Benefits of Enterprise Architecture",
     "items": [
      "It aligns technology investments with business objectives.",
      "It reduces duplication and unnecessary costs.",
      "It makes mergers and acquisitions easier.",
      "It improves interoperability.",
      "It makes risks and dependencies visible.",
      "It helps prioritize projects and strengthens operational continuity.",
      "It lets you decide with an end-to-end view and supports digital transformation."
     ]
    },
    {
     "tipo": "lista",
     "titulo": "Limitations",
     "items": [
      "It creates no value if it stays as documentation.",
      "It can turn bureaucratic if it tries to model everything.",
      "It needs participation from the business, not only from IT.",
      "It requires governance and continuous updating."
     ]
    }
   ]
  },
  {
   "id": "martes",
   "nombre": "Session 2",
   "tema": "Processes, BPM and value creation",
   "proposito": "Understand how processes connect different areas of the company and how the value received by the customer and the organization is measured.",
   "bloques": [
    {
     "tipo": "defs",
     "titulo": "Process versus project",
     "items": [
      {
       "termino": "Process",
       "definicion": "A <b>repeatable</b> set of activities that turns inputs into results for a customer. Example: receiving, preparing and delivering an order."
      },
      {
       "termino": "Project",
       "definicion": "A <b>temporary</b> effort carried out to produce a unique result. Example: implementing a new order system."
      },
      {
       "termino": "Key idea",
       "definicion": "The project ends; the process keeps operating."
      }
     ]
    },
    {
     "tipo": "lista",
     "titulo": "Components of a process",
     "items": [
      "Customer",
      "Supplier",
      "Input",
      "Activities",
      "Roles and owners",
      "Rules",
      "Resources",
      "Data",
      "Applications",
      "Controls",
      "Outputs",
      "Indicators"
     ]
    },
    {
     "tipo": "texto",
     "titulo": "End-to-end process and cross-functional work",
     "cuerpo": "<p>An <b>end-to-end</b> process is analyzed from the initial need through to the result the customer receives. <b>Cross-functional</b> means the work cuts across several functions or departments.</p><p>The customer does not perceive departments; the customer perceives a single experience.</p>"
    },
    {
     "tipo": "flujo",
     "titulo": "End-to-end example",
     "pasos": [
      "Customer requests",
      "Sales records",
      "Credit validates",
      "Production manufactures",
      "Logistics delivers",
      "Finance invoices"
     ]
    },
    {
     "tipo": "nota",
     "titulo": "Trigger question",
     "cuerpo": "<p>If every department meets its own indicators but the order arrives late, was the process successful?</p><p><b>No.</b> There was local efficiency, but a lack of end-to-end effectiveness.</p>"
    },
    {
     "tipo": "defs",
     "titulo": "Customer, value and value chain",
     "items": [
      {
       "termino": "Customer",
       "definicion": "Recipient of the process result; may be external or internal."
      },
      {
       "termino": "Customer value",
       "definicion": "The benefit the customer perceives relative to the cost, time or effort involved."
      },
      {
       "termino": "Value-added activity",
       "definicion": "It transforms the product or service, the customer recognizes its usefulness, it is done right, and it contributes to the expected result."
      },
      {
       "termino": "Necessary activity",
       "definicion": "It adds no value for the customer, but the business or compliance requires it (for example, a regulatory control)."
      },
      {
       "termino": "Non-value-added activity",
       "definicion": "Waiting, rework, duplicate data entry, unnecessary movement."
      }
     ]
    },
    {
     "tipo": "texto",
     "titulo": "BPM and BPMN are not the same",
     "cuerpo": "<p><b>BPM — Business Process Management</b> is the <b>discipline</b> for identifying, designing, executing, measuring, controlling and improving processes.</p><p><b>BPMN — Business Process Model and Notation</b> is a <b>standardized graphical notation</b> for representing them. Its basic elements include events, activities, gateways, flows and participants, and it aims to make one and the same model understandable to business users and technical teams alike.</p><p>A line to use in class: <i>“BPM is managing how the work gets done from beginning to end. BPMN is a standardized way of drawing that work.”</i></p>"
    },
    {
     "tipo": "pasos",
     "titulo": "Simplified BPM cycle",
     "items": [
      "Identify",
      "Discover and document",
      "Analyze",
      "Redesign",
      "Implement",
      "Monitor",
      "Improve again"
     ]
    },
    {
     "tipo": "defs",
     "titulo": "Effectiveness, efficiency and quality",
     "items": [
      {
       "termino": "Effectiveness",
       "definicion": "The degree to which the expected result is achieved."
      },
      {
       "termino": "Efficiency",
       "definicion": "The relationship between the result obtained and the resources used."
      },
      {
       "termino": "Quality",
       "definicion": "Meeting requirements and the absence of defects."
      }
     ]
    },
    {
     "tipo": "lista",
     "titulo": "Possible indicators",
     "items": [
      "Total process time (lead time)",
      "Cost per transaction",
      "Percentage of on-time orders",
      "Error rate",
      "Rework",
      "Customer satisfaction",
      "Wait time",
      "Productivity"
     ]
    },
    {
     "tipo": "defs",
     "titulo": "Automation, digitalization and digital transformation",
     "items": [
      {
       "termino": "Automation",
       "definicion": "Technology performs an activity a person used to do."
      },
      {
       "termino": "Digitalization",
       "definicion": "Information or activities move to digital media."
      },
      {
       "termino": "Digital transformation",
       "definicion": "Capabilities, processes, customer experience or the business model change through technology."
      }
     ]
    },
    {
     "tipo": "clave",
     "titulo": "Warning",
     "cuerpo": "<p>Digitizing a flawed form does not necessarily improve the process: it can produce <b>a faster flawed process</b>.</p>"
    },
    {
     "tipo": "tabla",
     "titulo": "Industrial evolution",
     "encabezados": [
      "Stage",
      "Main element",
      "Example"
     ],
     "filas": [
      [
       "Industry 2.0",
       "Electricity and mass production",
       "Assembly line"
      ],
      [
       "Industry 3.0",
       "Electronics, computing and automation",
       "Programmed industrial robot, PLC, ERP"
      ],
      [
       "Industry 4.0",
       "Connectivity, data and intelligence (IoT, cloud, AI, digital twins)",
       "Predictive maintenance"
      ],
      [
       "Industry 5.0",
       "People, sustainability and resilience",
       "Responsible human-robot collaboration"
      ]
     ]
    },
    {
     "tipo": "nota",
     "titulo": "3.0 versus 4.0",
     "cuerpo": "<p>In Industry 3.0 <b>a machine is automated</b>. In Industry 4.0 <b>machines, systems and people are connected and share data</b> in order to make better decisions.</p>"
    }
   ]
  },
  {
   "id": "miercoles",
   "nombre": "Session 3",
   "tema": "Enterprise Architecture frameworks and standards",
   "proposito": "Differentiate the main frameworks and understand that a framework organizes the work, whereas a standard sets common criteria.",
   "bloques": [
    {
     "tipo": "lista",
     "titulo": "What does a framework give you?",
     "items": [
      "Shared concepts",
      "A method or working structure",
      "Products or artifacts",
      "Roles",
      "Principles",
      "Governance mechanisms"
     ]
    },
    {
     "tipo": "nota",
     "titulo": "Analogy",
     "cuerpo": "<p>A framework is like a guide for planning a city: it helps you decide what to study, how to represent it and how to coordinate the participants, <b>but it does not automatically design each building</b>.</p>"
    },
    {
     "tipo": "texto",
     "titulo": "TOGAF",
     "cuerpo": "<p><b>TOGAF</b> stands for <i>The Open Group Architecture Framework</i>. It is a standard and a framework for developing and governing Enterprise Architecture; The Open Group currently publishes its tenth edition.</p><p>Core message: <b>TOGAF starts with the business</b>. Technology is justified by the outcomes, capabilities and requirements it has to support.</p>"
    },
    {
     "tipo": "pasos",
     "titulo": "ADM — Architecture Development Method",
     "items": [
      "<b>Preliminary:</b> prepare the architecture capability (principles, roles, governance, tools).",
      "<b>A · Architecture Vision:</b> scope, stakeholders, objectives, risks, initial AS-IS/TO-BE view.",
      "<b>B · Business Architecture:</b> capabilities, value chain, processes, organization, indicators.",
      "<b>C · Information Systems Architectures:</b> data first, applications afterwards.",
      "<b>D · Technology Architecture:</b> infrastructure, cloud, networks, platforms, security.",
      "<b>E · Opportunities and Solutions:</b> turn gaps into initiatives and work packages.",
      "<b>F · Migration Planning:</b> prioritize and build the roadmap.",
      "<b>G · Implementation Governance:</b> check that projects respect the architecture.",
      "<b>H · Architecture Change Management:</b> adapt the architecture when the environment changes.",
      "<b>Requirements Management:</b> a central, continuous activity present in every phase."
     ]
    },
    {
     "tipo": "svg",
     "titulo": "The ADM cycle",
     "pie": "The phases run as a cycle: when H ends, you start over. Requirements management sits at the center because every phase identifies, reviews and updates requirements.",
     "svg": "<svg viewBox=\"0 0 720 445\" role=\"img\" aria-label=\"Ciclo ADM de TOGAF: fase preliminar y ocho fases A a H dispuestas en círculo, con la gestión de requerimientos al centro\"><defs><marker id=\"pa-adm\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path class=\"punta\" d=\"M0,0 L10,5 L0,10 z\"/></marker><marker id=\"pa-adm-v\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path class=\"punta-viva\" d=\"M0,0 L10,5 L0,10 z\"/></marker></defs><rect class=\"caja-alt\" x=\"30\" y=\"20\" width=\"160\" height=\"38\" rx=\"10\"/><text class=\"rotulo\" x=\"110\" y=\"44\" text-anchor=\"middle\">Preliminary</text><path class=\"arista\" d=\"M192,40 C240,30 252,48 281,64\" marker-end=\"url(#pa-adm)\"/><path class=\"arista\" d=\"M423.9,77.8 A232,150 0 0 1 472.5,90.8\" marker-end=\"url(#pa-adm)\"/><path class=\"arista\" d=\"M562.9,149.3 A232,150 0 0 1 583,180.7\" marker-end=\"url(#pa-adm)\"/><path class=\"arista\" d=\"M583,263.3 A232,150 0 0 1 562.9,294.7\" marker-end=\"url(#pa-adm)\"/><path class=\"arista\" d=\"M472.5,353.2 A232,150 0 0 1 423.9,366.2\" marker-end=\"url(#pa-adm)\"/><path class=\"arista\" d=\"M296.1,366.2 A232,150 0 0 1 247.5,353.2\" marker-end=\"url(#pa-adm)\"/><path class=\"arista\" d=\"M157.1,294.7 A232,150 0 0 1 137,263.3\" marker-end=\"url(#pa-adm)\"/><path class=\"arista\" d=\"M137,180.7 A232,150 0 0 1 157.1,149.3\" marker-end=\"url(#pa-adm)\"/><path class=\"arista-viva\" d=\"M277,122 C302,138 326,128 334,102\" marker-end=\"url(#pa-adm-v)\"/><text class=\"rotulo-viva\" x=\"306\" y=\"156\" text-anchor=\"middle\">closes the cycle</text><rect class=\"caja\" x=\"281\" y=\"48\" width=\"158\" height=\"48\" rx=\"10\"/><text class=\"rotulo\" x=\"360\" y=\"69\" text-anchor=\"middle\">A · Vision</text><text class=\"rotulo-sm\" x=\"360\" y=\"85\" text-anchor=\"middle\">scope and stakeholders</text><rect class=\"caja\" x=\"445\" y=\"92\" width=\"158\" height=\"48\" rx=\"10\"/><text class=\"rotulo\" x=\"524\" y=\"113\" text-anchor=\"middle\">B · Business</text><text class=\"rotulo-sm\" x=\"524\" y=\"129\" text-anchor=\"middle\">capabilities and processes</text><rect class=\"caja\" x=\"513\" y=\"198\" width=\"158\" height=\"48\" rx=\"10\"/><text class=\"rotulo\" x=\"592\" y=\"219\" text-anchor=\"middle\">C · Data and apps</text><text class=\"rotulo-sm\" x=\"592\" y=\"235\" text-anchor=\"middle\">data first</text><rect class=\"caja\" x=\"445\" y=\"304\" width=\"158\" height=\"48\" rx=\"10\"/><text class=\"rotulo\" x=\"524\" y=\"325\" text-anchor=\"middle\">D · Technology</text><text class=\"rotulo-sm\" x=\"524\" y=\"341\" text-anchor=\"middle\">infrastructure</text><rect class=\"caja\" x=\"281\" y=\"348\" width=\"158\" height=\"48\" rx=\"10\"/><text class=\"rotulo\" x=\"360\" y=\"369\" text-anchor=\"middle\">E · Solutions</text><text class=\"rotulo-sm\" x=\"360\" y=\"385\" text-anchor=\"middle\">gaps → initiatives</text><rect class=\"caja\" x=\"117\" y=\"304\" width=\"158\" height=\"48\" rx=\"10\"/><text class=\"rotulo\" x=\"196\" y=\"325\" text-anchor=\"middle\">F · Migration</text><text class=\"rotulo-sm\" x=\"196\" y=\"341\" text-anchor=\"middle\">prioritize and roadmap</text><rect class=\"caja\" x=\"49\" y=\"198\" width=\"158\" height=\"48\" rx=\"10\"/><text class=\"rotulo\" x=\"128\" y=\"219\" text-anchor=\"middle\">G · Governance</text><text class=\"rotulo-sm\" x=\"128\" y=\"235\" text-anchor=\"middle\">of implementation</text><rect class=\"caja\" x=\"117\" y=\"92\" width=\"158\" height=\"48\" rx=\"10\"/><text class=\"rotulo\" x=\"196\" y=\"113\" text-anchor=\"middle\">H · Change</text><text class=\"rotulo-sm\" x=\"196\" y=\"129\" text-anchor=\"middle\">still valid?</text><rect class=\"caja-viva\" x=\"252\" y=\"191\" width=\"216\" height=\"62\" rx=\"12\"/><text class=\"rotulo\" x=\"360\" y=\"216\" text-anchor=\"middle\">Requirements management</text><text class=\"rotulo-sm\" x=\"360\" y=\"234\" text-anchor=\"middle\">spans every phase</text></svg>"
    },
    {
     "tipo": "defs",
     "titulo": "Artifacts: catalog, matrix, diagram",
     "items": [
      {
       "termino": "Catalog",
       "definicion": "An organized list. Example: an application catalog."
      },
      {
       "termino": "Matrix",
       "definicion": "It shows relationships between two dimensions. Example: a process-application matrix."
      },
      {
       "termino": "Diagram",
       "definicion": "It visually represents components and relationships."
      },
      {
       "termino": "Principle",
       "definicion": "A rule that guides decisions. Example: “existing capabilities will be reused before new solutions are acquired”."
      },
      {
       "termino": "Roadmap",
       "definicion": "A prioritized sequence of transformation initiatives."
      }
     ]
    },
    {
     "tipo": "texto",
     "titulo": "Zachman",
     "cuerpo": "<p>It is mainly a <b>classification structure or ontology</b>. It organizes the descriptions of the enterprise through six questions: <b>What</b> (data), <b>How</b> (functions and processes), <b>Where</b> (locations and networks), <b>Who</b> (people and responsibilities), <b>When</b> (events and cycles) and <b>Why</b> (motivations and strategies), seen from different perspectives.</p><p>Zachman helps you check that no view is missing, but <b>it does not offer a transformation sequence</b> equivalent to the ADM.</p>"
    },
    {
     "tipo": "texto",
     "titulo": "Gartner",
     "cuerpo": "<p>Its approach concentrates on <b>connecting technology investments and decisions with business outcomes</b>. It emphasizes collaboration with stakeholders and adaptable governance, instead of turning architecture into a purely control function.</p>"
    },
    {
     "tipo": "tabla",
     "titulo": "Comparison of approaches",
     "encabezados": [
      "Approach",
      "Main usefulness"
     ],
     "filas": [
      [
       "TOGAF",
       "A method for developing and governing the architecture"
      ],
      [
       "ADM",
       "The operating cycle of TOGAF"
      ],
      [
       "Zachman",
       "Classifying and ordering the different views of the enterprise"
      ],
      [
       "Gartner",
       "Steering the architecture toward business outcomes"
      ]
     ]
    },
    {
     "tipo": "clave",
     "titulo": "The frameworks complement each other",
     "cuerpo": "<p>You are not required to use a framework in its pure form. They can coexist because they solve different problems.</p>"
    },
    {
     "tipo": "lista",
     "titulo": "Related standards",
     "items": [
      "<b>ISO/IEC 20000-1:</b> IT service management (planning, design, transition, delivery and improvement).",
      "<b>ISO/IEC 27001:</b> information security.",
      "<b>ISO 9001:</b> quality management.",
      "<b>ISO/IEC/IEEE 12207:</b> software life cycle processes; it does not mandate any specific development methodology.",
      "<b>ISO/IEC/IEEE 29148:</b> requirements engineering.",
      "<b>BPMN / ISO 19510:</b> graphical representation of processes."
     ]
    },
    {
     "tipo": "nota",
     "titulo": "Mandatory status",
     "cuerpo": "<p>Standards guide or set requirements, but <b>not all of them are mandatory</b>. Whether they are mandatory depends on laws, contracts, regulation or organizational decisions.</p>"
    },
    {
     "tipo": "clave",
     "titulo": "Closing the day",
     "cuerpo": "<p>What would you use to state <b>how to develop</b> an architecture, what would you use to <b>organize its views</b> and what would you use to <b>draw a process</b>?<br>TOGAF/ADM, Zachman and BPMN, respectively.</p>"
    }
   ]
  },
  {
   "id": "jueves",
   "nombre": "Session 4",
   "tema": "Roles, Digital Transformation and integration",
   "proposito": "Integrate strategy, architecture, processes and solution development, clarifying professional responsibilities.",
   "bloques": [
    {
     "tipo": "tabla",
     "titulo": "Enterprise architect versus solution architect",
     "encabezados": [
      "Enterprise architect",
      "Solution architect"
     ],
     "filas": [
      [
       "Works at organization-wide scope",
       "Works on a specific need or initiative"
      ],
      [
       "Connects strategy and capabilities",
       "Designs the components of a solution"
      ],
      [
       "Analyzes several domains and areas",
       "Defines integrations, security and technical decisions"
      ],
      [
       "Defines principles and target architectures",
       "Assesses cost, time and quality constraints"
      ],
      [
       "Identifies duplication and dependencies",
       "Coordinates technical teams"
      ],
      [
       "Builds roadmaps and takes part in governance",
       "Checks that the solution respects the enterprise architecture"
      ],
      [
       "<i>How should the organization evolve as a complete system?</i>",
       "<i>How will we build this specific solution?</i>"
      ]
     ]
    },
    {
     "tipo": "nota",
     "titulo": "Example",
     "cuerpo": "<p>The <b>enterprise architect</b> establishes a regional view of customers. The <b>solution architect</b> designs the integration between CRM, ERP and the data platform.</p>"
    },
    {
     "tipo": "tabla",
     "titulo": "IT versus Digital Transformation",
     "encabezados": [
      "IT department",
      "Digital Transformation area"
     ],
     "filas": [
      [
       "Operates services and systems",
       "Drives changes in the business and the experience"
      ],
      [
       "Manages infrastructure and support",
       "Explores models, products and capabilities"
      ],
      [
       "Manages availability and security",
       "Coordinates innovation and adoption"
      ],
      [
       "Maintains operational continuity",
       "Pursues transformation outcomes"
      ],
      [
       "Implements and governs technology",
       "Connects business, data, technology and change"
      ]
     ]
    },
    {
     "tipo": "clave",
     "titulo": "They are not rivals",
     "cuerpo": "<p>IT provides stability and technical capability; Digital Transformation mobilizes change; <b>Enterprise Architecture helps orchestrate both perspectives</b>.</p>"
    },
    {
     "tipo": "defs",
     "titulo": "Strategies and transformation",
     "items": [
      {
       "termino": "Commercial strategy",
       "definicion": "Customers, markets, channels, products, revenue and positioning."
      },
      {
       "termino": "Organizational strategy",
       "definicion": "Capabilities, structure, talent, operations, culture and governance."
      },
      {
       "termino": "Enterprise transformation",
       "definicion": "Initiatives that change capabilities, processes, products or operating models."
      }
     ]
    },
    {
     "tipo": "lista",
     "titulo": "Questions to identify strategic requirements",
     "items": [
      "What outcome does the organization want?",
      "How will it be measured?",
      "What capability does it need to develop?",
      "What process must change?",
      "What data does it require?",
      "What applications will support it?",
      "What infrastructure and security will be needed?",
      "What people and rules must change?"
     ]
    },
    {
     "tipo": "flujo",
     "titulo": "Example: cut lead time by 20 %",
     "pasos": [
      "Strategy: −20 % lead time",
      "Capability: integrated planning",
      "Process: order to delivery",
      "Data: real-time inventory and production",
      "Application: planning platform",
      "Technology: integration, cloud and sensors"
     ]
    },
    {
     "tipo": "defs",
     "titulo": "Development methodologies",
     "items": [
      {
       "termino": "Waterfall",
       "definicion": "Sequential phases; useful when the scope is stable."
      },
      {
       "termino": "Agile",
       "definicion": "Iterative development with frequent releases."
      },
      {
       "termino": "DevOps",
       "definicion": "Collaboration between development and operations, automation and continuous feedback."
      }
     ]
    },
    {
     "tipo": "clave",
     "titulo": "Architecture and methodology do not compete",
     "cuerpo": "<p>Enterprise Architecture defines <b>direction, constraints and relationships</b>; the development methodology organizes <b>how to build and deliver</b> the solution.</p>"
    },
    {
     "tipo": "svg",
     "titulo": "Format of the integrative activity",
     "pie": "Each team turns in a sheet with this complete chain: technology comes last because it answers to everything before it, and customer value is the outcome that justifies the chain.",
     "svg": "<svg viewBox=\"0 0 520 424\" role=\"img\" aria-label=\"Cadena descendente: estrategia, capacidad de negocio, proceso end-to-end, datos y aplicaciones, infraestructura, resultado y valor para el cliente\"><defs><marker id=\"pa-int\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path class=\"punta\" d=\"M0,0 L10,5 L0,10 z\"/></marker><marker id=\"pa-int2\" viewBox=\"0 0 10 10\" refX=\"8.5\" refY=\"5\" markerWidth=\"5\" markerHeight=\"5\" orient=\"auto-start-reverse\"><path class=\"punta\" d=\"M0,0 L10,5 L0,10 z\"/></marker></defs><rect class=\"caja-alt\" x=\"140\" y=\"14\" width=\"240\" height=\"42\" rx=\"10\"/><text class=\"rotulo\" x=\"260\" y=\"40\" text-anchor=\"middle\">Strategy</text><path class=\"arista\" d=\"M260,58 L260,78\" marker-end=\"url(#pa-int)\"/><rect class=\"caja\" x=\"140\" y=\"82\" width=\"240\" height=\"42\" rx=\"10\"/><text class=\"rotulo\" x=\"260\" y=\"108\" text-anchor=\"middle\">Business capability</text><path class=\"arista\" d=\"M260,126 L260,146\" marker-end=\"url(#pa-int)\"/><rect class=\"caja\" x=\"140\" y=\"150\" width=\"240\" height=\"42\" rx=\"10\"/><text class=\"rotulo\" x=\"260\" y=\"176\" text-anchor=\"middle\">End-to-end process</text><path class=\"arista\" d=\"M245,194 C226,206 192,206 175,214\" marker-end=\"url(#pa-int)\"/><path class=\"arista\" d=\"M275,194 C294,206 328,206 345,214\" marker-end=\"url(#pa-int)\"/><rect class=\"caja\" x=\"104\" y=\"220\" width=\"138\" height=\"42\" rx=\"10\"/><text class=\"rotulo\" x=\"173\" y=\"246\" text-anchor=\"middle\">Data</text><rect class=\"caja\" x=\"278\" y=\"220\" width=\"138\" height=\"42\" rx=\"10\"/><text class=\"rotulo\" x=\"347\" y=\"246\" text-anchor=\"middle\">Applications</text><path class=\"arista\" d=\"M248,241 L272,241\" marker-end=\"url(#pa-int2)\" marker-start=\"url(#pa-int2)\"/><text class=\"rotulo-sm\" x=\"260\" y=\"212\" text-anchor=\"middle\">they need each other</text><path class=\"arista\" d=\"M173,264 C173,278 238,278 252,288\" marker-end=\"url(#pa-int)\"/><path class=\"arista\" d=\"M347,264 C347,278 282,278 268,288\" marker-end=\"url(#pa-int)\"/><rect class=\"caja\" x=\"140\" y=\"292\" width=\"240\" height=\"42\" rx=\"10\"/><text class=\"rotulo\" x=\"260\" y=\"318\" text-anchor=\"middle\">Infrastructure</text><path class=\"arista\" d=\"M260,336 L260,356\" marker-end=\"url(#pa-int)\"/><rect class=\"caja-viva\" x=\"112\" y=\"360\" width=\"296\" height=\"46\" rx=\"12\"/><text class=\"rotulo\" x=\"260\" y=\"381\" text-anchor=\"middle\">Outcome and value</text><text class=\"rotulo-sm\" x=\"260\" y=\"397\" text-anchor=\"middle\">measured by a metric the customer perceives</text></svg>"
    }
   ]
  }
 ],
 "terminos": [
  {
   "termino": "Enterprise Architecture",
   "sigla": "EA",
   "definicion": "Discipline that describes how an organization works today and designs how it should work, aligning capabilities, processes, data, applications and technology with the strategy."
  },
  {
   "termino": "AS-IS",
   "definicion": "Current state: how the organization actually operates today."
  },
  {
   "termino": "TO-BE",
   "definicion": "Desired future state of the architecture."
  },
  {
   "termino": "Gap",
   "sigla": "gap",
   "definicion": "Difference between the AS-IS and the TO-BE; it is what you have to close."
  },
  {
   "termino": "Roadmap",
   "definicion": "Prioritized sequence of initiatives that take you from the AS-IS to the TO-BE."
  },
  {
   "termino": "Business architecture",
   "definicion": "Domain that describes strategy, capabilities, processes, organization, rules, customers and suppliers."
  },
  {
   "termino": "Data architecture",
   "definicion": "Domain that describes what data exists, who governs it, where it originates, how it is shared and with what quality."
  },
  {
   "termino": "Application architecture",
   "definicion": "Domain that describes the systems that support the processes, their functions, integrations and dependencies."
  },
  {
   "termino": "Technology architecture",
   "definicion": "Domain that describes infrastructure, networks, cloud, platforms, devices and technical security."
  },
  {
   "termino": "TOGAF",
   "sigla": "The Open Group Architecture Framework",
   "definicion": "Framework and standard for developing and governing Enterprise Architecture; its current edition is the 10th."
  },
  {
   "termino": "ADM",
   "sigla": "Architecture Development Method",
   "definicion": "Core method of TOGAF: iterative cycle of phases Preliminary and A to H, with requirements management at the center."
  },
  {
   "termino": "Zachman",
   "definicion": "Ontology or classification schema that organizes the descriptions of the enterprise with the questions What, How, Where, Who, When and Why from different perspectives."
  },
  {
   "termino": "Gartner approach",
   "definicion": "Architecture approach focused on connecting technology investments with business outcomes, with adaptable governance."
  },
  {
   "termino": "BPM",
   "sigla": "Business Process Management",
   "definicion": "Discipline for identifying, documenting, analyzing, redesigning, implementing, monitoring and improving processes."
  },
  {
   "termino": "BPMN",
   "sigla": "Business Process Model and Notation / ISO 19510",
   "definicion": "Standardized graphical notation for modeling processes: events, activities, gateways, flows and participants."
  },
  {
   "termino": "End-to-end process",
   "definicion": "Process analyzed from the initial need to the result received by the customer, crossing departments."
  },
  {
   "termino": "Cross-functional",
   "definicion": "Work that crosses several functions or departments of the organization."
  },
  {
   "termino": "Customer value",
   "definicion": "Benefit the customer perceives against the cost, time or effort it takes them."
  },
  {
   "termino": "Effectiveness",
   "definicion": "Degree to which the expected result is achieved."
  },
  {
   "termino": "Efficiency",
   "definicion": "Relationship between the result obtained and the resources used."
  },
  {
   "termino": "Automation",
   "definicion": "Technology performs an activity that a person used to do."
  },
  {
   "termino": "Digitization",
   "definicion": "Information or activities move to digital media, without the process necessarily changing."
  },
  {
   "termino": "Digital transformation",
   "definicion": "Change of capabilities, processes, customer experience or business model enabled by technology."
  },
  {
   "termino": "Industry 4.0",
   "definicion": "Integration of the physical and digital worlds: IoT, sensors, cyber-physical systems, cloud, AI, analytics, digital twins and real-time decisions."
  },
  {
   "termino": "Industry 5.0",
   "definicion": "Complement to Industry 4.0 centered on people, sustainability and resilience."
  },
  {
   "termino": "Enterprise architect",
   "definicion": "Role with organization-wide scope that connects strategy and capabilities, defines principles and target architectures and builds roadmaps."
  },
  {
   "termino": "Solution architect",
   "definicion": "Role that designs a specific solution: components, integrations, security and technical decisions, respecting the enterprise architecture."
  }
 ],
 "practica": {
  "opcionMultiple": [
   {
    "tema": "Definition of EA",
    "pregunta": "Which of the following best describes Enterprise Architecture?",
    "opciones": [
     "A discipline that describes how the organization works today and designs how it should work, aligning capabilities, processes, data, applications and technology with the strategy",
     "The up-to-date inventory of all the company's systems and servers",
     "The organization chart with its areas and reporting lines",
     "The technology purchasing plan for the next three years"
    ],
    "correcta": 0,
    "explicacion": "EA is a continuous practice of analysis, design, prioritization and governance that connects the strategy with operations, information and systems.",
    "porQueNo": {
     "1": "An inventory is an input (a catalog, which is indeed an artifact), but on its own it does not describe relationships, rules or evolution.",
     "2": "The organization chart describes reporting structure, not capabilities, processes, data or technology.",
     "3": "A purchasing plan is a possible consequence, never the starting point."
    }
   },
   {
    "tema": "Strategic alignment",
    "pregunta": "A company buys an artificial intelligence platform without having defined what business problem it will solve. Is it doing Enterprise Architecture?",
    "opciones": [
     "Not necessarily: it acquires technology, but it does not demonstrate strategic alignment or value creation",
     "Yes, because adopting modern technology is architecture in itself",
     "Yes, as long as the platform integrates with the ERP",
     "No, because AI is not part of any architecture domain"
    ],
    "correcta": 0,
    "explicacion": "A technology decision must start with an expected business outcome. Without a defined need there is no alignment and no demonstrable value.",
    "porQueNo": {
     "1": "Buying technology is not designing the evolution of the organization as a system.",
     "2": "Technical integration does not replace the business justification.",
     "3": "AI can indeed belong to the application and technology domains; the problem is the absence of a need."
    }
   },
   {
    "tema": "Domains",
    "pregunta": "«Defining what <i>active customer</i> means and who is accountable for that data in Mexico and in Argentina» belongs mainly to the domain of…",
    "opciones": [
     "Data",
     "Business",
     "Applications",
     "Technology"
    ],
    "correcta": 0,
    "explicacion": "Meaning, ownership, quality and accountability for data are matters of data architecture.",
    "porQueNo": {
     "1": "Business would define the capability and the commercial process, not the semantics and governance of the data.",
     "2": "Applications would say which system stores it, not what it means or who is accountable for it.",
     "3": "Technology would describe where the database runs, not its meaning."
    }
   },
   {
    "tema": "Domains",
    "pregunta": "«One plant uses SAP and another a local production system; you have to decide whether to integrate, migrate or retire them» is a decision of the domain of…",
    "opciones": [
     "Applications",
     "Data",
     "Technology",
     "Business"
    ],
    "correcta": 0,
    "explicacion": "Application architecture analyzes what systems exist, what function they serve, how they integrate and which ones to keep, integrate, replace or retire.",
    "porQueNo": {
     "1": "Data would define what information they must share, not the fate of each system.",
     "2": "Technology would define the infrastructure they run on.",
     "3": "Business would define the process both systems must support."
    }
   },
   {
    "tema": "Domains",
    "pregunta": "The industrial sensors installed on the production line belong to the domain of…",
    "opciones": [
     "Technology",
     "Applications",
     "Data",
     "Business"
    ],
    "correcta": 0,
    "explicacion": "Devices, networks, servers, cloud and platforms make up the technology architecture: the infrastructure the applications run on.",
    "porQueNo": {
     "1": "An application is the system that processes the information the sensors generate.",
     "2": "The data is the temperature or vibration reading, not the device.",
     "3": "The business defines what it is measured for (for example, quality control)."
    }
   },
   {
    "tema": "AS-IS / TO-BE",
    "pregunta": "«Customer databases separated by country» versus «a single customer view». What does each element represent?",
    "opciones": [
     "The first is the AS-IS and the second the TO-BE; integrating and cleaning up data is the gap",
     "The first is the TO-BE and the second the AS-IS",
     "Both are alternative TO-BE states",
     "The first is the gap and the second the roadmap"
    ],
    "correcta": 0,
    "explicacion": "AS-IS is the current situation, TO-BE the desired one, the gap is the difference between them and the roadmap the sequence of initiatives to close it.",
    "porQueNo": {
     "1": "The desired state is never the starting point of the diagnosis.",
     "2": "Only one of the two describes the desired future.",
     "3": "The gap is not a state, it is the difference; the roadmap is the route, not the destination."
    }
   },
   {
    "tema": "AS-IS / TO-BE",
    "pregunta": "Which statement about the TO-BE is correct?",
    "opciones": [
     "It may consist of integrating, standardizing, reusing or retiring only what does not create value",
     "It always means replacing every legacy system",
     "It must be reached in a single project to avoid intermediate states",
     "It is defined before knowing the business objectives"
    ],
    "correcta": 0,
    "explicacion": "The TO-BE answers to value, cost and risk. Replacing everything is rarely the decision with the best balance among those three.",
    "porQueNo": {
     "1": "Replacing everything is one option among several, not the rule.",
     "2": "Phase F for migration exists precisely because there are intermediate states and dependencies.",
     "3": "Without business objectives there is no criterion for deciding the future state."
    }
   },
   {
    "tema": "Process and project",
    "pregunta": "What is the essential difference between a process and a project?",
    "opciones": [
     "The project is temporary and produces a unique result; the process is repeatable and keeps operating",
     "The process is run by IT and the project by the business",
     "The project always involves technology and the process does not",
     "The process has a budget and the project does not"
    ],
    "correcta": 0,
    "explicacion": "«The project ends; the process keeps operating.» Implementing an order system is a project; fulfilling orders is a process.",
    "porQueNo": {
     "1": "Both involve the business and IT to different degrees.",
     "2": "There are projects without technology and processes that are technology-intensive.",
     "3": "Both consume resources and can have a budget."
    }
   },
   {
    "tema": "End-to-end processes",
    "pregunta": "Every department meets its indicators, but the customer's order arrives late. How do you read this?",
    "opciones": [
     "There was local efficiency but a lack of overall effectiveness in the end-to-end process",
     "The process was successful because all the indicators were met",
     "It is a product quality problem, not a process problem",
     "It means the departmental indicators were too demanding"
    ],
    "correcta": 0,
    "explicacion": "The customer does not perceive departments, they perceive a single experience. Optimizing each function separately can degrade the overall result.",
    "porQueNo": {
     "1": "The result the customer expected was not achieved: there was no effectiveness.",
     "2": "The defect is in the cycle time of the flow, not in the product.",
     "3": "The problem is not how demanding they are but that they measure isolated parts of the flow."
    }
   },
   {
    "tema": "Value",
    "pregunta": "Entering the same order twice in two different systems is an activity that is…",
    "opciones": [
     "Non-value-added: it is duplicate data entry, one of the typical wastes",
     "Value-added for the customer, because it guarantees the record",
     "Necessary for the business for compliance reasons",
     "Value-added because it transforms the product"
    ],
    "correcta": 0,
    "explicacion": "Waiting, rework, duplicate data entry and unnecessary movement are non-value-added activities. The customer sees no usefulness in them.",
    "porQueNo": {
     "1": "The customer perceives no benefit at all from entering the order twice.",
     "2": "No regulation requires duplicate data entry; it would require traceability, not duplication.",
     "3": "It transforms neither the product nor the service."
    }
   },
   {
    "tema": "BPM and BPMN",
    "pregunta": "What is the correct distinction between BPM and BPMN?",
    "opciones": [
     "BPM is the discipline for managing and improving processes; BPMN is the standardized graphical notation for representing them",
     "BPM is the notation and BPMN the discipline",
     "BPM is a software product and BPMN an ISO quality standard",
     "They are synonyms; BPMN is just the English abbreviation"
    ],
    "correcta": 0,
    "explicacion": "«BPM is managing how the work is done from start to finish; BPMN is a standardized way of drawing that work.»",
    "porQueNo": {
     "1": "It is the other way around.",
     "2": "BPM is not a product; BPMN corresponds to ISO 19510, not to a quality standard.",
     "3": "They are different things: a discipline and a notation."
    }
   },
   {
    "tema": "BPM",
    "pregunta": "In the simplified BPM cycle, which activity comes immediately after «Analyze»?",
    "opciones": [
     "Redesign",
     "Identify",
     "Monitor",
     "Document"
    ],
    "correcta": 0,
    "explicacion": "The cycle is: identify → discover and document → analyze → redesign → implement → monitor → improve again.",
    "porQueNo": {
     "1": "Identify is the first step of the cycle.",
     "2": "Monitor comes after implement.",
     "3": "Document comes before the analysis."
    }
   },
   {
    "tema": "Effectiveness and efficiency",
    "pregunta": "A process delivers the expected result but consumes twice the resources planned. This process is…",
    "opciones": [
     "Effective but not very efficient",
     "Efficient but not very effective",
     "Neither effective nor efficient",
     "Of poor quality by definition"
    ],
    "correcta": 0,
    "explicacion": "Effectiveness is achieving the expected result; efficiency is the relationship between result and resources used.",
    "porQueNo": {
     "1": "It is the other way around: it did achieve the result.",
     "2": "It was effective, because the result was reached.",
     "3": "Quality is meeting requirements and having no defects; it can be high even with low efficiency."
    }
   },
   {
    "tema": "Digital transformation",
    "pregunta": "The company swaps a paper form for a PDF sent by email, keeping exactly the same signatures and data entry. This is…",
    "opciones": [
     "Digitization, not digital transformation",
     "Digital transformation, because the paper is gone",
     "Automation, because the system performs the activity",
     "Industry 4.0, because there are digital media"
    ],
    "correcta": 0,
    "explicacion": "Digitizing a flawed form does not improve the process: it can produce a faster flawed process. Digital transformation changes capabilities, processes, experience or business model.",
    "porQueNo": {
     "1": "Capabilities, process, experience and business model did not change.",
     "2": "There is still manual intervention at every step; the technology does not perform the activity.",
     "3": "Industry 4.0 implies connectivity, data and integrated decisions, not just digital media."
    }
   },
   {
    "tema": "Industry 3.0 / 4.0",
    "pregunta": "What is the core difference between Industry 3.0 and Industry 4.0?",
    "opciones": [
     "In 3.0 a machine is automated; in 4.0 machines, systems and people are connected and share data to decide",
     "In 3.0 electricity is used and in 4.0 electronics",
     "In 3.0 there are robots and in 4.0 the robots disappear",
     "In 4.0 human intervention is eliminated completely"
    ],
    "correcta": 0,
    "explicacion": "3.0 automates with electronics, PLC and computing; 4.0 connects the physical and digital worlds with IoT, cloud, analytics and AI.",
    "porQueNo": {
     "1": "Electricity and mass production belong to Industry 2.0.",
     "2": "In 4.0 there is more robotics, now autonomous or collaborative.",
     "3": "Industry 5.0 is precisely what brings the person back to the center; 4.0 does not remove them."
    }
   },
   {
    "tema": "Industry 5.0",
    "pregunta": "What are the three pillars of Industry 5.0?",
    "opciones": [
     "Human-centric, sustainable and resilient",
     "Automation, digitization and connectivity",
     "Cloud, artificial intelligence and analytics",
     "Quality, cost and delivery time"
    ],
    "correcta": 0,
    "explicacion": "Industry 5.0 complements 4.0 by steering digitization toward human well-being, sustainability and the ability to respond to crises.",
    "porQueNo": {
     "1": "Those are features of the 3.0 and 4.0 stages.",
     "2": "They are enabling technologies of 4.0, not pillars of 5.0.",
     "3": "That is the classic project management triangle."
    }
   },
   {
    "tema": "TOGAF",
    "pregunta": "What does TOGAF stand for and what is it?",
    "opciones": [
     "The Open Group Architecture Framework: framework and standard for developing and governing Enterprise Architecture",
     "Total Organizational Governance and Architecture Framework: an IT governance model",
     "A process modeling software product published by The Open Group",
     "A mandatory ISO certification for industrial enterprise architectures"
    ],
    "correcta": 0,
    "explicacion": "TOGAF is an adaptable framework, not a software product or a mandatory certification. Its current edition is the 10th.",
    "porQueNo": {
     "1": "IT governance corresponds rather to COBIT.",
     "2": "TOGAF is not a tool; there are tools that support it.",
     "3": "It is not an ISO standard and it is not mandatory."
    }
   },
   {
    "tema": "ADM",
    "pregunta": "In the ADM cycle, what is placed at the center of the diagram and why?",
    "opciones": [
     "Requirements management, because every phase identifies, reviews and updates requirements",
     "Technology architecture, because the whole enterprise depends on the infrastructure",
     "Phase A, because it is the first of the cycle",
     "Implementation governance, because it oversees the other phases"
    ],
    "correcta": 0,
    "explicacion": "Requirements are identified, documented, prioritized, validated and changed throughout the whole cycle; that is why they are the central, continuous activity.",
    "porQueNo": {
     "1": "Technology is phase D and is justified by the earlier phases.",
     "2": "Being the first phase does not place it at the center; A sits on the perimeter of the cycle.",
     "3": "Governance is phase G, with scope over the implementation, not over the whole method."
    }
   },
   {
    "tema": "ADM",
    "pregunta": "In which ADM phase are gaps grouped into initiatives and work packages?",
    "opciones": [
     "E · Opportunities and Solutions",
     "F · Migration Planning",
     "B · Business Architecture",
     "G · Implementation Governance"
    ],
    "correcta": 0,
    "explicacion": "Phase E turns gaps into initiatives; phase F prioritizes and sequences them in the roadmap.",
    "porQueNo": {
     "1": "F prioritizes and sequences what E has already identified.",
     "2": "B designs how the business must operate.",
     "3": "G verifies that what is built respects the architecture."
    }
   },
   {
    "tema": "ADM",
    "pregunta": "Within phase C of the ADM, what is defined first?",
    "opciones": [
     "The data, and then the applications that will use it",
     "The applications, and then the data they need",
     "The infrastructure that will support both",
     "The candidate software vendors"
    ],
    "correcta": 0,
    "explicacion": "Phase C covers data architecture (C1) and application architecture (C2). First you determine what information the business needs and then what systems will produce and share it.",
    "porQueNo": {
     "1": "Choosing applications before knowing what information is needed leads to duplication and poorly justified systems.",
     "2": "Infrastructure belongs to phase D.",
     "3": "Product selection is a solution decision, and comes later."
    }
   },
   {
    "tema": "Zachman",
    "pregunta": "What is the main use of the Zachman framework?",
    "opciones": [
     "Classifying and organizing the different views of the enterprise through the questions What, How, Where, Who, When and Why",
     "Providing a sequence of phases for developing the architecture",
     "Governing the delivery of IT services",
     "Graphically modeling business processes"
    ],
    "correcta": 0,
    "explicacion": "Zachman is mainly an ontology or classification schema: it helps you check that no view is missing, but it does not offer a transformation cycle like the ADM.",
    "porQueNo": {
     "1": "That is the role of TOGAF's ADM.",
     "2": "That corresponds to ITIL or ISO/IEC 20000-1.",
     "3": "To model processes you use BPMN."
    }
   },
   {
    "tema": "Artifacts",
    "pregunta": "An organized list of all the company's applications with their function and owner is a…",
    "opciones": [
     "Catalog",
     "Matrix",
     "Diagram",
     "Principle"
    ],
    "correcta": 0,
    "explicacion": "Catalog = organized list; matrix = relationships between two dimensions; diagram = visual representation; principle = rule that guides decisions.",
    "porQueNo": {
     "1": "A matrix would cross, for example, processes against applications.",
     "2": "A diagram would show components and relationships graphically.",
     "3": "A principle is a rule, not an inventory."
    }
   },
   {
    "tema": "Roles",
    "pregunta": "«Defining the single regional customer vision and the roadmap to achieve it» corresponds to…",
    "opciones": [
     "The enterprise architect",
     "The solutions architect",
     "The infrastructure lead",
     "The project manager"
    ],
    "correcta": 0,
    "explicacion": "The enterprise architect works at organizational scope: they connect strategy and capabilities, define target architectures and build roadmaps.",
    "porQueNo": {
     "1": "The solutions architect would later design the concrete integration between CRM, ERP and the data platform.",
     "2": "Infrastructure operates the technology domain.",
     "3": "The project manager manages the scope, time and cost of an initiative."
    }
   },
   {
    "tema": "IT and Digital Transformation",
    "pregunta": "What is the correct relationship between IT, Digital Transformation and Enterprise Architecture?",
    "opciones": [
     "IT provides stability and technical capability, Digital Transformation mobilizes change, and Enterprise Architecture orchestrates both perspectives",
     "Digital Transformation replaces the IT department",
     "Enterprise Architecture is an area within Digital Transformation that does not interact with IT",
     "IT should decide the transformation strategy because it owns the technology"
    ],
    "correcta": 0,
    "explicacion": "They should not be presented as rivals: they perform distinct and complementary functions.",
    "porQueNo": {
     "1": "Operational continuity and security remain indispensable.",
     "2": "EA needs participation from the business and from IT, not isolation.",
     "3": "The business defines the strategy; IT enables it."
    }
   },
   {
    "tema": "Methodologies",
    "pregunta": "What relationship is there between Enterprise Architecture and methodologies such as Agile or DevOps?",
    "opciones": [
     "Architecture defines direction, constraints and relationships; the methodology organizes how to build and deliver the solution",
     "Architecture replaces the development methodology",
     "Agile eliminates the need for enterprise architecture",
     "DevOps is an enterprise architecture framework equivalent to TOGAF"
    ],
    "correcta": 0,
    "explicacion": "They are distinct and complementary layers: one decides the direction and the limits, the other organizes construction and delivery.",
    "porQueNo": {
     "1": "They are complementary, not substitutes.",
     "2": "Agile delivers iteratively within the constraints that architecture defines.",
     "3": "DevOps is a practice of collaboration and automation between development and operations."
    }
   }
  ],
  "escenarios": [
   {
    "escenario": "The corporate group needs to redesign and govern the entire architecture after acquiring three plants in Argentina, and wants a method that goes from vision to roadmap.",
    "opciones": [
     "TOGAF and its ADM",
     "BPMN",
     "ISO 9001",
     "Six Sigma"
    ],
    "correcta": 0,
    "explicacion": "TOGAF provides the framework and the ADM the cycle of phases to develop and govern the architecture end to end.",
    "porQueNo": {
     "1": "BPMN is used to draw processes, not to drive a complete transformation.",
     "2": "ISO 9001 manages quality, not architecture.",
     "3": "Six Sigma reduces variation and defects in specific processes."
    }
   },
   {
    "escenario": "They want to represent the «order to delivery» process graphically so that both the commercial area and the developers understand it.",
    "opciones": [
     "BPMN",
     "Zachman",
     "TOGAF",
     "ISO/IEC 27001"
    ],
    "correcta": 0,
    "explicacion": "BPMN is a standardized notation designed precisely so that one same model is understandable by the business and by the technical teams.",
    "porQueNo": {
     "1": "Zachman classifies views; it is not a process notation.",
     "2": "TOGAF guides the development of the complete architecture.",
     "3": "ISO/IEC 27001 manages information security."
    }
   },
   {
    "escenario": "Management suspects that perspectives are missing from the documentation: there are many system diagrams but nobody knows whether the «who», the «when» and the «why» are covered.",
    "opciones": [
     "Zachman",
     "ADM",
     "BPM",
     "DevOps"
    ],
    "correcta": 0,
    "explicacion": "Zachman is a classification ontology: it serves precisely to check that the six questions and the different perspectives are covered.",
    "porQueNo": {
     "1": "The ADM gives a work sequence, not a completeness check of the views.",
     "2": "BPM manages processes, not the whole set of descriptions of the enterprise.",
     "3": "DevOps is a practice for building and operating software."
    }
   },
   {
    "escenario": "Before integrating systems, the corporate group wants to establish a single definition of «active customer», an owner for each master data element and rules for quality and protection.",
    "opciones": [
     "Data architecture and data governance",
     "Technology architecture",
     "Agile methodology",
     "Application architecture"
    ],
    "correcta": 0,
    "explicacion": "Meaning, ownership, quality, security and sharing of the data belong to the data architecture.",
    "porQueNo": {
     "1": "Technology defines the infrastructure where the data resides, not its governance.",
     "2": "Agile organizes delivery; it does not define data semantics.",
     "3": "Applications would define which system is the source of that data, after agreeing on its meaning."
    }
   },
   {
    "escenario": "The purchasing process has 23 hours of waiting against 22 minutes of real work, with rework and duplicate data entry.",
    "opciones": [
     "Lean and process improvement (BPM)",
     "ISO/IEC 20000-1",
     "Zachman",
     "Technology architecture"
    ],
    "correcta": 0,
    "explicacion": "The problem is waste: waiting, rework and duplicate data entry. Lean and the BPM cycle attack exactly that.",
    "porQueNo": {
     "1": "ISO/IEC 20000-1 manages IT services, not the purchasing process.",
     "2": "Zachman classifies views; it does not eliminate waste.",
     "3": "Buying more infrastructure does not eliminate approval waits."
    }
   },
   {
    "escenario": "A specific initiative requires designing how the CRM, the ERP and the data platform will be integrated, with which interfaces, which security controls and under which cost and time constraints.",
    "opciones": [
     "Solutions architect",
     "Enterprise architect",
     "Digital Transformation area",
     "Steering committee"
    ],
    "correcta": 0,
    "explicacion": "The solutions architect works on a specific need: components, integrations, security and technical decisions, respecting the enterprise architecture.",
    "porQueNo": {
     "1": "The enterprise architect already defined the regional vision; they do not go down to the design of this solution.",
     "2": "Digital Transformation mobilizes change; it does not design the technical integration.",
     "3": "The committee prioritizes and authorizes; it does not design."
    }
   },
   {
    "escenario": "A project wants to create its own isolated customer database, even though the architecture already defined a single source of customer data.",
    "opciones": [
     "Phase G · Implementation governance",
     "Phase B · Business architecture",
     "Phase H · Change management",
     "Phase A · Vision"
    ],
    "correcta": 0,
    "explicacion": "Phase G verifies that what is being built complies with the agreed principles and design, and manages the justified exceptions.",
    "porQueNo": {
     "1": "B designs how the business should operate; it does not supervise projects.",
     "2": "H assesses changes in the environment that force the architecture to be updated.",
     "3": "A defines scope and vision at the start of the cycle."
    }
   },
   {
    "escenario": "Environmental regulation changed in Argentina and new regional competitors appeared; you have to assess whether the target architecture is still valid.",
    "opciones": [
     "Phase H · Architecture change management",
     "Phase F · Migration planning",
     "Phase D · Technology architecture",
     "Preliminary Phase"
    ],
    "correcta": 0,
    "explicacion": "Phase H assesses internal and external changes —strategies, regulations, technologies, competitors, risks— and decides whether another cycle starts.",
    "porQueNo": {
     "1": "F sequences and prioritizes initiatives that are already defined.",
     "2": "D defines infrastructure and platforms.",
     "3": "The Preliminary phase prepares the architecture capability at the start."
    }
   }
  ],
  "clasificar": [
   {
    "consigna": "Classify each element of the steel company into the architecture domain it belongs to.",
    "categorias": [
     "Business",
     "Data",
     "Applications",
     "Technology"
    ],
    "items": [
     {
      "texto": "Regional purchasing process",
      "categoria": "Business"
     },
     {
      "texto": "Quality control capability",
      "categoria": "Business"
     },
     {
      "texto": "Customer credit policy",
      "categoria": "Business"
     },
     {
      "texto": "Definition of «active customer»",
      "categoria": "Data"
     },
     {
      "texto": "Supplier master catalog",
      "categoria": "Data"
     },
     {
      "texto": "Batch test results",
      "categoria": "Data"
     },
     {
      "texto": "SAP ERP",
      "categoria": "Applications"
     },
     {
      "texto": "Commercial CRM",
      "categoria": "Applications"
     },
     {
      "texto": "Local production system",
      "categoria": "Applications"
     },
     {
      "texto": "Industrial vibration sensors",
      "categoria": "Technology"
     },
     {
      "texto": "Mexico–Argentina telecommunications link",
      "categoria": "Technology"
     },
     {
      "texto": "Cloud and servers",
      "categoria": "Technology"
     }
    ],
    "explicacion": "Rule of thumb: the <b>business</b> says what has to be done; the <b>data</b>, what information is needed; the <b>applications</b>, what systems produce and process it; the <b>technology</b>, what infrastructure they run on."
   },
   {
    "consigna": "Classify each activity of the «order to delivery» process according to the value it contributes.",
    "categorias": [
     "Value for the customer",
     "Necessary for the business",
     "No value (waste)"
    ],
    "items": [
     {
      "texto": "Manufacture the product according to specification",
      "categoria": "Value for the customer"
     },
     {
      "texto": "Deliver the order at the customer's plant",
      "categoria": "Value for the customer"
     },
     {
      "texto": "Run the batch quality test",
      "categoria": "Value for the customer"
     },
     {
      "texto": "Validate the customer's credit",
      "categoria": "Necessary for the business"
     },
     {
      "texto": "Issue the tax invoice",
      "categoria": "Necessary for the business"
     },
     {
      "texto": "Record the traceability required by regulation",
      "categoria": "Necessary for the business"
     },
     {
      "texto": "Wait 18 hours for the manager's signature",
      "categoria": "No value (waste)"
     },
     {
      "texto": "Enter the order in Excel and then in the ERP",
      "categoria": "No value (waste)"
     },
     {
      "texto": "Redo the order because of a mistyped data entry",
      "categoria": "No value (waste)"
     }
    ],
    "explicacion": "An activity adds value when it transforms the product or service, the customer recognizes its usefulness and it contributes to the expected result. Waiting, rework and duplicate data entry never do."
   },
   {
    "consigna": "What does each element correspond to: the framework/method, or the language and the standards?",
    "categorias": [
     "Architecture framework or method",
     "Notation or standard",
     "Process discipline"
    ],
    "items": [
     {
      "texto": "TOGAF",
      "categoria": "Architecture framework or method"
     },
     {
      "texto": "ADM",
      "categoria": "Architecture framework or method"
     },
     {
      "texto": "Zachman",
      "categoria": "Architecture framework or method"
     },
     {
      "texto": "Gartner approach",
      "categoria": "Architecture framework or method"
     },
     {
      "texto": "BPMN / ISO 19510",
      "categoria": "Notation or standard"
     },
     {
      "texto": "ISO/IEC 27001",
      "categoria": "Notation or standard"
     },
     {
      "texto": "ISO/IEC 20000-1",
      "categoria": "Notation or standard"
     },
     {
      "texto": "ISO 9001",
      "categoria": "Notation or standard"
     },
     {
      "texto": "BPM",
      "categoria": "Process discipline"
     }
    ],
    "explicacion": "A framework organizes the work and provides method, roles and governance. A standard establishes common criteria or requirements, and a notation defines how to represent. BPM is the discipline of process management: it is neither a notation nor a standard."
   }
  ],
  "ordenar": [
   {
    "consigna": "Put the phases of the TOGAF ADM cycle in order, from preparation to change management.",
    "pasos": [
     "Preliminary · prepare the architecture capability",
     "A · Architecture vision",
     "B · Business architecture",
     "C · Data and application architectures",
     "D · Technology architecture",
     "E · Opportunities and solutions",
     "F · Migration planning",
     "G · Implementation governance",
     "H · Change management"
    ],
    "explicacion": "Requirements management does not occupy a position in the sequence: it sits at the center because it cuts across all the phases."
   },
   {
    "consigna": "Put in order the alignment chain that every technology decision must follow.",
    "pasos": [
     "Strategy",
     "Capabilities",
     "Processes",
     "Data",
     "Applications",
     "Technology"
    ],
    "explicacion": "Technology comes last because it must respond to a business need, not the other way around."
   },
   {
    "consigna": "Put the simplified BPM cycle in order.",
    "pasos": [
     "Identify",
     "Discover and document",
     "Analyze",
     "Redesign",
     "Implement",
     "Monitor",
     "Improve again"
    ],
    "explicacion": "The cycle is continuous: monitoring feeds the next improvement, and the process is analyzed again."
   },
   {
    "consigna": "Put the diagnosis and transformation sequence in order.",
    "pasos": [
     "AS-IS · current state",
     "Gap analysis",
     "TO-BE · target state",
     "Roadmap · prioritized initiatives",
     "Implementation and governance"
    ],
    "explicacion": "Without a documented AS-IS there is no demonstrable gap, and without a gap the TO-BE is a wish list."
   }
  ],
  "flashcards": [
   {
    "frente": "Enterprise Architecture",
    "reverso": "Discipline that describes how the organization works today and designs how it should work, aligning capabilities, processes, data, applications and technology with the strategy."
   },
   {
    "frente": "The four domains",
    "reverso": "Business · Data · Applications · Technology."
   },
   {
    "frente": "AS-IS",
    "reverso": "Current state: how the organization really operates today."
   },
   {
    "frente": "TO-BE",
    "reverso": "Desired future state. It does not necessarily imply replacing every system."
   },
   {
    "frente": "Gap",
    "reverso": "Difference between the current state and the desired one."
   },
   {
    "frente": "Roadmap",
    "reverso": "Initiatives sequenced and prioritized to close the gaps."
   },
   {
    "frente": "TOGAF",
    "reverso": "The Open Group Architecture Framework: framework and standard to develop and govern Enterprise Architecture. Current edition: 10th."
   },
   {
    "frente": "ADM",
    "reverso": "Architecture Development Method: the core method of TOGAF; Preliminary cycle and phases A–H with requirements management at the center."
   },
   {
    "frente": "Phase A of the ADM",
    "reverso": "Architecture vision: problem or opportunity, objectives, scope, stakeholders, risks and initial AS-IS/TO-BE vision."
   },
   {
    "frente": "Phase C of the ADM",
    "reverso": "Information systems architectures: data first (C1), then applications (C2)."
   },
   {
    "frente": "Phase G of the ADM",
    "reverso": "Implementation governance: verify that what is built respects principles, standards and the TO-BE."
   },
   {
    "frente": "Zachman",
    "reverso": "Classification ontology: What, How, Where, Who, When, Why, from different perspectives. It is not a transformation method."
   },
   {
    "frente": "Gartner approach",
    "reverso": "Architecture oriented to business results, with stakeholder collaboration and adaptable governance."
   },
   {
    "frente": "BPM",
    "reverso": "Business Process Management: discipline to identify, document, analyze, redesign, implement, monitor and improve processes."
   },
   {
    "frente": "BPMN",
    "reverso": "Standardized graphical notation (ISO 19510) for modeling processes: events, activities, gateways, flows and participants."
   },
   {
    "frente": "Process versus project",
    "reverso": "A project is temporary and produces a unique result; a process is repeatable and keeps operating."
   },
   {
    "frente": "End-to-end process",
    "reverso": "It is analyzed from the initial need to the result the customer receives, cutting across departments."
   },
   {
    "frente": "Effectiveness vs. efficiency",
    "reverso": "Effectiveness: the expected result is achieved. Efficiency: relationship between result and resources used."
   },
   {
    "frente": "Non-value-added activity",
    "reverso": "Waiting, rework, duplicate data entry, unnecessary movement."
   },
   {
    "frente": "Automation / digitalization / digital transformation",
    "reverso": "Automate: technology performs the activity. Digitalize: information moves to digital media. Transform: capabilities, processes, experience or business model change."
   },
   {
    "frente": "Industry 4.0",
    "reverso": "Automation + connectivity + data: IoT, cyber-physical systems, cloud, AI, analytics, digital twins, real-time decisions."
   },
   {
    "frente": "Industry 5.0",
    "reverso": "Complements 4.0: people-centered, sustainable and resilient."
   },
   {
    "frente": "Enterprise architect",
    "reverso": "Organizational scope: connects strategy and capabilities, defines principles and target architectures, builds roadmaps and takes part in governance."
   },
   {
    "frente": "Solutions architect",
    "reverso": "Scope of one initiative: designs components, integrations, security and technical decisions, respecting the enterprise architecture."
   },
   {
    "frente": "Catalog, matrix and diagram",
    "reverso": "Catalog: an organized list. Matrix: relationships between two dimensions. Diagram: visual representation of components and relationships."
   }
  ]
 }
}
);
