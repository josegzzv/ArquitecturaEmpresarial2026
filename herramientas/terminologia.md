# Contrato de terminología ES → EN

Obligatorio para todo el contenido de `data/en/`. La consistencia importa más
que la elegancia: un mismo concepto debe llamarse igual en las cinco semanas, en
los casos y en el glosario, porque el alumno construye vocabulario técnico.

## Regla cero: no se traducen

Siglas, nombres propios de marcos, normas, productos y empresas quedan **exactos**:

TOGAF · ADM · Zachman · DoDAF · IAF · ATOM · COBIT · ITIL · ITSM · BRM · BPM ·
BPMN · UML · ArchiMate · ISO / ISO/IEC (y sus números) · Lean · Six Sigma ·
DMAIC · 5S · JIT · Kanban · Poka-Yoke · Design Thinking · ADKAR · Kotter · BPMM ·
PMI · SAP · Salesforce · ServiceNow · LeanIX · Signavio · ERP · CRM · RTO · RPO ·
CrowdStrike · Starbucks · Ford · Banamex · Telcel · OXXO · Rappi · Uber · Costco ·
Adidas · Toyota · McDonald's · Salud Digna · VivaAerobus · Farmacia Guadalajara ·
Soriana · HEB · Walmart · Hospital Zambrano Helión · Tec de Monterrey

Los nombres de las fases del ADM (Preliminary, A. Architecture Vision, B.
Business Architecture…) ya son ingleses: se dejan como están en ambos idiomas.

## Núcleo de tiempos y capacidad

| Español | Inglés | Nota |
|---|---|---|
| tiempo de ciclo (CT) | cycle time (CT) | conserva la sigla CT |
| tiempo teórico de ciclo (TCT) | theoretical cycle time (TCT) | **el caso normal en este curso**: solo tiempo de proceso, esperas en cero |
| tiempo total de ciclo (TCT) | total cycle time (TCT) | solo si el español dice "total"; conserva TCT |
| lead time | lead time | ya está en inglés; **no** usar "delivery time" |
| tiempo de espera | wait time | |
| tiempo de valor agregado | value-added time | |
| takt time | takt time | invariable |
| eficiencia de ciclo | cycle efficiency | |
| cuello de botella | bottleneck | |
| capacidad | capacity | |
| carga | load | |
| trabajo en proceso (WIP) | work in process (WIP) | conserva WIP |
| throughput | throughput | invariable |
| rendimiento | throughput rate | solo si es tasa; si es "desempeño", *performance* |
| Ley de Little | Little's Law | |
| retrabajo | rework | |
| ruta | route | ruta del proceso = process route |
| rutas múltiples | multiple routes | |
| rutas paralelas | parallel routes | |
| recurso | resource | |
| estación | station | |
| unidad | unit | |
| pieza | piece | |
| fila / cola | queue | "fila" en el sentido de espera |
| unifila | single-queue system | |
| demanda | demand | |
| turno | shift | |
| disponibilidad | availability | |

## Proceso y análisis

| Español | Inglés |
|---|---|
| diseño de procesos | process design |
| mapa de procesos | process map |
| proceso de referencia | reference process |
| actividad | activity |
| tarea | task |
| paso | step |
| flujo | flow |
| flujo de trabajo | workflow |
| entregable | deliverable |
| interesado / parte interesada | stakeholder |
| dueño del proceso | process owner |
| valor agregado (VA) | value-added (VA) |
| valor agregado no esencial (ENVA) | necessary non-value-added (NNVA) |
| sin valor agregado (NVA) | non-value-added (NVA) |
| desperdicio | waste |
| mejora continua | continuous improvement |
| teoría de restricciones | theory of constraints |
| restricción | constraint |
| cinco pasos de enfoque | five focusing steps |
| estado actual / AS-IS | current state / AS-IS |
| estado objetivo / TO-BE | target state / TO-BE |
| brecha | gap |
| levantamiento | discovery |
| recopilación de requerimientos | requirements gathering |
| requerimiento | requirement |

## Arquitectura y gobierno

| Español | Inglés |
|---|---|
| arquitectura empresarial | enterprise architecture |
| dominio | domain |
| capa | layer |
| capacidad de negocio | business capability |
| marco de referencia | framework |
| norma / estándar | standard |
| gobierno (de TI) | governance |
| gestión | management |
| línea base | baseline |
| artefacto | artifact |
| entregable arquitectónico | architecture deliverable |
| hoja de ruta | roadmap |
| interesados del proyecto | project stakeholders |
| mesa de servicio | service desk |
| incidente | incident |
| escalamiento | escalation |
| acuerdo de nivel de servicio | service level agreement (SLA) |
| continuidad | continuity |
| gestión del cambio | change management |
| puesta en marcha / go-live | go-live |
| madurez | maturity |

## Finanzas del caso de negocio

| Español | Inglés |
|---|---|
| valor presente neto (VPN) | net present value (NPV) |
| tasa interna de retorno (TIR) | internal rate of return (IRR) |
| retorno de la inversión (ROI) | return on investment (ROI) |
| periodo de recuperación | payback period |
| punto de equilibrio | break-even point |
| margen de contribución | contribution margin |
| costo variable | variable cost |
| costo fijo | fixed cost |
| factor de anualidad | annuity factor |
| análisis de sensibilidad | sensitivity analysis |
| factibilidad | feasibility |
| caso de negocio | business case |
| costo de no hacer nada | cost of doing nothing |

## Interfaz del sitio

| Español | Inglés |
|---|---|
| reactivo | item |
| ejercicio | exercise |
| tarjeta de repaso | flashcard |
| enunciado | problem statement |
| consigna | instruction |
| solución paso a paso | step-by-step solution |
| retroalimentación | feedback |
| sesión | session |
| semana | week |
| ficha (de caso) | case sheet |

## Decisiones ya tomadas (no volver a abrir)

Surgieron al traducir las primeras semanas. Se aplican en todo el material:

| Español | Inglés | Por qué |
|---|---|---|
| administración por procesos | process-based management | BPM se deja como sigla donde el español usa la sigla |
| digitalización | digitization | pasar a medio digital **sin** cambiar el proceso |
| transformación digital | digital transformation | cambia el proceso, no solo el medio |
| SGSI | ISMS | sigla española; su equivalente inglés es estándar |
| máx(G, F) | max(G, F) | es una palabra, no un símbolo |
| tiempo de entrega | lead time *o* delivery time | **lead time** cuando es el tiempo que atraviesa el proceso; **delivery time** solo en el triángulo calidad–costo–entrega de gestión de proyectos |
| Brecha (gap) | Gap | el paréntesis existía solo para el lector hispanohablante: se elimina |
| comité de dirección | steering committee | |
| responsable (encabezado de tabla) | responsible | "owner" se reserva para *dueño del proceso* |
| capacidad en uso | capacity in use | |
| factor de carga | load factor | |
| u/día · u/hora | u/day · u/hour | abreviatura de unidades: se conserva la forma corta |
| atención (evento de servicio) | customer interaction | no "attention" |
| alta (de un registro) | registration | dar de alta un proveedor = supplier registration |
| jornada | working day | distinto de *turno* → shift |
| titular (de una marca) | publisher | en el aviso legal: *owner* |

**Glosas redundantes.** Cuando el español escribe el término inglés seguido de su
traducción —«Lead time — tiempo de entrega», «Componentes del proceso (process
components)»— la glosa desaparece en inglés. No se escribe "Lead time — lead time".

**Comillas.** Las angulares « » del español pasan a comillas tipográficas “ ” en
inglés. No se dejan angulares.

**Fases del ADM.** Si el español las tradujo (E · Oportunidades y soluciones), en
inglés se restauran los nombres oficiales (E · Opportunities and Solutions).

## Convenciones de escritura

- **Números:** no se tocan. Ni el separador decimal ni el de miles cambian
  entre idiomas — el verificador falla si un número se mueve.
- **Unidades:** `min`, `s`, `h`, `%` se dejan igual. "unidades/hora" → "units/hour";
  "clientes/hora" → "customers/hour"; "min/pieza" → "min/piece".
- **Moneda:** las cifras en pesos se dejan tal cual y se escriben "MXN $1,000"
  en inglés cuando el contexto no lo aclara.
- **Registro:** el español del sitio tutea al alumno; el inglés usa segunda
  persona directa ("you"), no la voz impersonal.
- **HTML:** las etiquetas `<b>`, `<i>`, `<code>`, `<br>` y las clases CSS
  (`paso-calc`, `resaltado`) se conservan exactamente donde están.
- **SVG:** solo se traducen los textos dentro de `<text>`. Coordenadas,
  `viewBox`, clases e identificadores no se tocan. Si un rótulo traducido es más
  largo y no cabe, se abrevia — nunca se mueve la geometría.
