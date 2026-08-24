/* Metadatos generales del curso */
EA.registrarCurso({
  titulo: "Diseño de Procesos y Arquitectura Empresarial",
  subtitulo: "Curso de 5 semanas",
  totalSemanas: 5,
  autor: "Antonio González",
  correo: "antonio.gonzalez@tec.mx",
  // Descripción del reto o caso conductor.
  //   · Deja "casoEstado" en "pendiente" mientras no haya texto definitivo:
  //     el recuadro se muestra atenuado como marcador de posición.
  //   · Cuando llegue la descripción, escríbela en "caso" y borra la línea
  //     de "casoEstado" para que el recuadro tome su estilo normal.
  //   · Si prefieres no mostrar ningún recuadro, deja caso en "".
  caso: "<b>Caso conductor del curso.</b> Pendiente por definir.",
  casoEstado: "pendiente"
});
