# Diseño de Procesos y Arquitectura Empresarial

Material de estudio de un curso de cinco semanas. Conceptos, casos de empresas
reales y práctica interactiva sobre cómo se diseña, se mide y se rediseña el
trabajo dentro de una organización — y cómo la tecnología que lo sostiene se
ordena para que no estorbe.

---

## Por qué este material

Casi todo lo que una empresa entrega a un cliente es el resultado de un proceso
que alguien diseñó alguna vez. La mayoría de las veces nadie lo diseñó: creció.
Se le fueron agregando pasos, aprobaciones, sistemas y excepciones hasta que
nadie recuerda por qué existe la mitad de ellos, y lo que se cobra como
"complejidad del negocio" es en realidad complejidad acumulada.

**Diseñar procesos** es la disciplina de recuperar esa intención: entender qué
pasos crean valor, cuáles solo lo transportan y cuáles lo destruyen; medir cuánto
tarda el trabajo de verdad y no cuánto creemos que tarda; encontrar el recurso
que limita a todo lo demás y decidir qué hacer con él.

**La arquitectura empresarial** es la misma disciplina un nivel arriba. Un
proceso rediseñado en aislamiento choca contra los sistemas, los datos y las
capacidades que ya existen. La arquitectura empresarial es lo que mantiene
alineadas cuatro capas —negocio, datos, aplicaciones y tecnología— para que una
decisión de proceso sea ejecutable y no solo un diagrama bonito.

Un profesional que domina ambas cosas puede responder preguntas que en la
práctica valen mucho dinero:

- ¿Por qué este trámite tarda tres días si la suma del trabajo real son cuarenta minutos?
- Si contratamos a otra persona, ¿la fila se acorta o solo se mueve de lugar?
- ¿Automatizar este paso mejora el resultado o solo acelera un desperdicio?
- ¿Cuánto nos cuesta al año *no* hacer nada?
- Este proyecto de sistemas, ¿a qué capacidad de negocio sirve, o a ninguna?

Ese es el objetivo del curso: que estas preguntas dejen de ser opinión y se
vuelvan cálculo, evidencia y criterio.

---

## Qué se lleva el alumno

Al terminar las cinco semanas debe poder, sin ayuda:

| Capacidad | Se demuestra cuando… |
|---|---|
| **Leer un proceso** | Levanta el AS-IS de una operación real, lo modela y distingue lo que agrega valor de lo que no |
| **Medirlo** | Calcula tiempo de ciclo, tiempo total de ciclo, lead time, takt time y eficiencia de ciclo, y sabe cuál usar en cada pregunta |
| **Encontrar el límite** | Identifica el cuello de botella, calcula la capacidad del proceso y predice qué pasa al reforzar cada recurso |
| **Rediseñarlo** | Propone un TO-BE con rutas, paralelismo y retrabajo bien modelados, y justifica el cambio con números |
| **Justificarlo** | Construye el caso de negocio: VPN, TIR, ROI, punto de equilibrio, periodo de recuperación y análisis de sensibilidad |
| **Ubicarlo en la arquitectura** | Sitúa el rediseño en un marco (TOGAF, Zachman, DoDAF, IAF) y sabe por qué se eligió ese y no otro |
| **Gobernarlo** | Distingue qué gobierna COBIT, qué opera ITIL y dónde entra la gestión del cambio para que el rediseño sobreviva al go-live |

La prueba real no es recordar las siglas. Es mirar una fila en una sucursal, un
mostrador de comida rápida o una mesa de servicio de TI, y saber exactamente qué
medir primero.

---

## Cómo está organizado

**Cinco semanas, en orden deliberado.** De lo general a lo ejecutable: primero el
lenguaje y los marcos, luego el modelado, luego la medición, luego el gobierno y
la comparación de marcos, y al final la mejora, la justificación financiera y la
implantación.

| | Tema |
|---|---|
| **Semana 1** | Qué es la arquitectura empresarial, sus cuatro dominios, TOGAF y el ciclo ADM |
| **Semana 2** | Modelado de procesos, BPM y BPMN, ecosistemas de aplicaciones, AS-IS y TO-BE |
| **Semana 3** | Tiempos, capacidad y cuellos de botella: la semana de los cálculos, incluida la Ley de Little |
| **Semana 4** | Comparación de marcos (DoDAF, IAF, ATOM), gobierno con COBIT, operación con ITIL, continuidad |
| **Semana 5** | Recopilación de requerimientos, Lean, factibilidad y caso de negocio, implantación y gestión del cambio |

**Cada semana** trae conceptos explicados en prosa, diagramas, tablas
comparativas, definiciones y un banco de práctica.

**Seis modos de práctica**, porque distintos conceptos se aprenden distinto:
opción múltiple con retroalimentación, escenario → marco correcto, clasificar
arrastrando, ordenar una secuencia, **ejercicios numéricos** con verificación de
la respuesta, y tarjetas de repaso. El progreso se guarda en el navegador del
alumno y no se envía a ningún lado.

**Un catálogo de casos** de empresas reconocibles —Starbucks, Ford, Banamex,
Rappi, Costco, Salud Digna, CrowdStrike y otras— agrupados no por industria sino
por el *patrón de proceso* que enseñan: capacidad y cuellos de botella, tiempos
de ciclo y espera, rutas y variantes, orquestación, servicios de TI y
continuidad, y datos y punto de venta. La agrupación es intencional: el objetivo
es que el alumno reconozca el mismo problema estructural en una cafetería, un
banco y una línea de ensamble.

**Un glosario** que reúne los términos de las cinco semanas y marca en cuál se
introdujo cada uno.

---

## Sobre el rigor de este material

Dos cosas que conviene decir de frente, porque forman parte de lo que se enseña:

**Las cifras de los casos son ilustrativas.** Las empresas son reales y los
procesos son reconocibles desde afuera, pero los números se construyeron para
que los ejercicios sean calculables. No corresponden a la operación real de
ninguna de esas organizaciones, ninguna participó ni avaló el material, y cada
tabla lo dice. Distinguir un supuesto de un dato es parte del oficio.

**Los cálculos sí están verificados.** Cada resultado numérico del sitio —tiempos
de ciclo, capacidades, VPN, TIR, puntos de equilibrio, matrices ponderadas— se
comprobó de forma independiente antes de publicarse. Si un alumno encuentra una
discrepancia, es un hallazgo legítimo y vale la pena revisarlo.

---

## Notas sobre el sitio

Funciona sin conexión y sin instalar nada: basta abrir `index.html`. No usa
frameworks ni librerías; la única dependencia externa son dos tipografías, y sin
red la página se ve igual con las del sistema. Tiene tema claro y oscuro, y está
disponible en español e inglés.

El progreso de práctica vive solo en el navegador de cada estudiante
(`localStorage`): no viaja a ningún servidor y el profesor no lo ve. Es una
herramienta de autoevaluación, no de calificación.

La documentación técnica —estructura de archivos, tipos de bloque, esquema de
los reactivos, cómo agregar contenido nuevo— está en [`CONTRIBUIR.md`](CONTRIBUIR.md).

---

## Autoría

Material elaborado por **Antonio González** · antonio.gonzalez@tec.mx

Las marcas, metodologías y marcos de referencia mencionados son propiedad de sus
respectivos titulares. Ver [aviso legal y atribuciones](aviso-legal.html).
