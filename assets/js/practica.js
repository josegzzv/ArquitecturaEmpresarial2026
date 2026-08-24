/* ============================================================
   practica.js — motor de práctica con cinco modos
   1. opcionMultiple  2. escenarios  3. clasificar  4. ordenar  5. flashcards
   ============================================================ */

(function (EA) {
  const el = EA.el;

  const MODOS = [
    { clave: "opcionMultiple", icono: "◉", nombre: "Opción múltiple", desc: "Reactivos con retroalimentación de por qué cada opción es o no correcta." },
    { clave: "escenarios",     icono: "⚖", nombre: "Escenario → marco", desc: "Lee la situación y decide qué marco, estándar o metodología aplica." },
    { clave: "clasificar",     icono: "▦", nombre: "Clasificar", desc: "Arrastra cada elemento a la categoría o dominio que le corresponde." },
    { clave: "ordenar",        icono: "↕", nombre: "Ordenar secuencia", desc: "Coloca las fases o pasos en el orden correcto." },
    { clave: "flashcards",     icono: "🗂", nombre: "Tarjetas de repaso", desc: "Concepto de un lado, definición del otro. Repaso rápido." }
  ];

  function crear(semana, contenedor) {
    const practica = semana.practica || {};
    const disponibles = MODOS.filter(function (m) {
      return (practica[m.clave] || []).length > 0;
    });

    contenedor.innerHTML = "";

    if (!disponibles.length) {
      contenedor.appendChild(el("div", { class: "vacio" }, [
        el("h3", { text: "Aún no hay reactivos para esta semana" }),
        el("p", { text: "El material de práctica se publicará junto con las sesiones." })
      ]));
      return;
    }

    const barraModos = el("div", { class: "modos" });
    const panel = el("div", { class: "panel-practica" });
    contenedor.appendChild(barraModos);
    contenedor.appendChild(panel);

    let modoActivo = null;

    disponibles.forEach(function (m) {
      const b = el("button", { class: "modo", type: "button", "aria-pressed": "false" }, [
        el("span", { class: "icono", text: m.icono }),
        el("span", { class: "nombre", text: m.nombre }),
        el("span", { class: "desc", text: m.desc }),
        el("span", { class: "pastilla", style: "align-self:flex-start;margin-top:.4rem",
          text: (practica[m.clave] || []).length + (m.clave === "flashcards" ? " tarjetas" : " reactivos") })
      ]);
      b.addEventListener("click", function () {
        barraModos.querySelectorAll(".modo").forEach(function (x) { x.setAttribute("aria-pressed", "false"); });
        b.setAttribute("aria-pressed", "true");
        modoActivo = m.clave;
        iniciar(m.clave);
      });
      barraModos.appendChild(b);
    });

    function iniciar(clave) {
      const datos = practica[clave] || [];
      switch (clave) {
        case "opcionMultiple": sesionPreguntas(EA.barajar(datos), "opcionMultiple", false); break;
        case "escenarios":     sesionPreguntas(EA.barajar(datos), "escenarios", true); break;
        case "clasificar":     sesionClasificar(datos); break;
        case "ordenar":        sesionOrdenar(datos); break;
        case "flashcards":     sesionFlashcards(EA.barajar(datos)); break;
      }
    }

    /* ---------- Barra de progreso ---------- */
    function encabezado(indice, total, aciertos) {
      const pista = el("div", { class: "pista" }, [
        el("div", { class: "relleno", style: "width:" + Math.round((indice / total) * 100) + "%" })
      ]);
      return el("div", { class: "barra-progreso" }, [
        el("span", { text: (indice + 1) + " de " + total }),
        pista,
        el("span", {}, [
          el("span", { class: "marcador", text: String(aciertos) }),
          document.createTextNode(" aciertos")
        ])
      ]);
    }

    /* ================= 1 y 2 · Preguntas de opción ================= */
    function sesionPreguntas(lista, modo, esEscenario) {
      let i = 0, aciertos = 0;
      const errores = [];

      function pinta() {
        panel.innerHTML = "";
        if (i >= lista.length) return resultado(aciertos, lista.length, errores, modo);

        const q = lista[i];
        panel.appendChild(encabezado(i, lista.length, aciertos));

        if (q.tema) panel.appendChild(el("div", { class: "pregunta-tema", text: q.tema }));

        if (esEscenario) {
          panel.appendChild(el("div", { class: "escenario-caja", html: q.escenario }));
          panel.appendChild(el("p", { class: "pregunta", text: q.pregunta || "¿Qué marco, estándar o metodología usarías?" }));
        } else {
          panel.appendChild(el("p", { class: "pregunta", html: q.pregunta }));
        }

        // Se barajan las opciones conservando el índice original
        const indexado = q.opciones.map(function (t, idx) { return { t: t, idx: idx }; });
        const mezcladas = q.mezclar === false ? indexado : EA.barajar(indexado);

        const cajaOpciones = el("div", { class: "opciones" });
        const botones = [];

        mezcladas.forEach(function (o, pos) {
          const b = el("button", { class: "opcion", type: "button" }, [
            el("span", { class: "letra", text: "ABCDEF"[pos] }),
            el("span", { html: o.t })
          ]);
          b.addEventListener("click", function () { responder(o.idx); });
          botones.push({ b: b, idx: o.idx });
          cajaOpciones.appendChild(b);
        });
        panel.appendChild(cajaOpciones);

        function responder(elegida) {
          const bien = elegida === q.correcta;
          if (bien) aciertos++; else errores.push({ q: q, elegida: elegida, esEscenario: esEscenario });

          botones.forEach(function (x) {
            x.b.disabled = true;
            if (x.idx === q.correcta) x.b.classList.add("correcta");
            else if (x.idx === elegida) x.b.classList.add("incorrecta");
            else x.b.classList.add("atenuada");
          });

          const retro = el("div", { class: "retro " + (bien ? "bien" : "mal") });
          retro.appendChild(el("div", { class: "veredicto" }, [
            el("span", { text: bien ? "✓ Correcto" : "✗ Incorrecto" })
          ]));
          retro.appendChild(el("p", { html: q.explicacion || "" }));

          if (!bien && q.porQueNo && q.porQueNo[elegida]) {
            retro.appendChild(el("p", { html: "<b>Sobre tu respuesta:</b> " + q.porQueNo[elegida] }));
          }
          if (q.porQueNo && Object.keys(q.porQueNo).length > 1) {
            const ul = el("ul");
            Object.keys(q.porQueNo).forEach(function (k) {
              if (Number(k) === elegida && !bien) return;
              ul.appendChild(el("li", { html: "<b>" + q.opciones[Number(k)] + ":</b> " + q.porQueNo[k] }));
            });
            if (ul.childNodes.length) {
              retro.appendChild(el("p", { html: "<b>Las demás opciones:</b>" }));
              retro.appendChild(ul);
            }
          }
          panel.appendChild(retro);

          const sig = el("button", { class: "btn primario", type: "button",
            text: i === lista.length - 1 ? "Ver resultado" : "Siguiente →" });
          sig.addEventListener("click", function () { i++; pinta(); });
          panel.appendChild(el("div", { class: "acciones" }, [sig]));
          sig.focus();
        }
      }
      pinta();
    }

    /* ================= 3 · Clasificar (arrastrar y soltar) ================= */
    function sesionClasificar(lista) {
      let i = 0, aciertosTotales = 0, itemsTotales = 0;

      function pinta() {
        panel.innerHTML = "";
        if (i >= lista.length) return resultado(aciertosTotales, itemsTotales, [], "clasificar");

        const ej = lista[i];
        panel.appendChild(encabezado(i, lista.length, aciertosTotales));
        panel.appendChild(el("p", { class: "pregunta", html: ej.consigna }));
        panel.appendChild(el("p", { html: '<span style="font-size:.84rem;color:var(--muted)">Arrastra cada elemento a su columna, o toca el elemento y después la columna.</span>' }));

        const banco = el("div", { class: "banco-items" });
        const columnas = el("div", { class: "columnas-dominio" });
        const zonas = {};
        let seleccionada = null;

        ej.categorias.forEach(function (cat) {
          const zona = el("div", { class: "zona" });
          zonas[cat] = zona;
          const col = el("div", { class: "columna-dominio" }, [el("h5", { text: cat }), zona]);
          col.addEventListener("dragover", function (e) { e.preventDefault(); col.classList.add("activa"); });
          col.addEventListener("dragleave", function () { col.classList.remove("activa"); });
          col.addEventListener("drop", function (e) {
            e.preventDefault(); col.classList.remove("activa");
            const id = e.dataTransfer.getData("text/plain");
            const f = panel.querySelector('[data-ficha="' + id + '"]');
            if (f) zona.appendChild(f);
          });
          col.addEventListener("click", function () {
            if (seleccionada) {
              zona.appendChild(seleccionada);
              seleccionada.classList.remove("seleccionada");
              seleccionada = null;
            }
          });
          columnas.appendChild(col);
        });

        EA.barajar(ej.items).forEach(function (it, idx) {
          const f = el("div", {
            class: "ficha", draggable: "true", "data-ficha": String(idx),
            "data-categoria": it.categoria, text: it.texto
          });
          f.addEventListener("dragstart", function (e) { e.dataTransfer.setData("text/plain", String(idx)); });
          f.addEventListener("click", function (e) {
            e.stopPropagation();
            if (seleccionada === f) { f.classList.remove("seleccionada"); seleccionada = null; return; }
            if (seleccionada) seleccionada.classList.remove("seleccionada");
            seleccionada = f; f.classList.add("seleccionada");
          });
          banco.appendChild(f);
        });

        banco.addEventListener("dragover", function (e) { e.preventDefault(); });
        banco.addEventListener("drop", function (e) {
          e.preventDefault();
          const id = e.dataTransfer.getData("text/plain");
          const f = panel.querySelector('[data-ficha="' + id + '"]');
          if (f) banco.appendChild(f);
        });

        panel.appendChild(banco);
        panel.appendChild(columnas);

        const revisar = el("button", { class: "btn primario", type: "button", text: "Revisar" });
        const acciones = el("div", { class: "acciones" }, [revisar]);
        panel.appendChild(acciones);

        revisar.addEventListener("click", function () {
          let bien = 0;
          ej.categorias.forEach(function (cat) {
            Array.prototype.forEach.call(zonas[cat].children, function (f) {
              const correcta = f.getAttribute("data-categoria");
              if (correcta === cat) { f.classList.add("bien"); bien++; }
              else {
                f.classList.add("mal");
                f.appendChild(el("span", { class: "correccion", text: "→ " + correcta }));
              }
              f.draggable = false;
            });
          });
          Array.prototype.forEach.call(banco.children, function (f) {
            f.classList.add("mal");
            f.appendChild(el("span", { class: "correccion", text: "sin clasificar → " + f.getAttribute("data-categoria") }));
            f.draggable = false;
          });

          aciertosTotales += bien;
          itemsTotales += ej.items.length;

          const retro = el("div", { class: "retro " + (bien === ej.items.length ? "bien" : "mal") });
          retro.appendChild(el("div", { class: "veredicto", text: bien + " de " + ej.items.length + " bien clasificados" }));
          if (ej.explicacion) retro.appendChild(el("p", { html: ej.explicacion }));
          panel.appendChild(retro);

          acciones.innerHTML = "";
          const sig = el("button", { class: "btn primario", type: "button",
            text: i === lista.length - 1 ? "Ver resultado" : "Siguiente →" });
          sig.addEventListener("click", function () { i++; pinta(); });
          acciones.appendChild(sig);
          panel.appendChild(acciones);
        });
      }
      pinta();
    }

    /* ================= 4 · Ordenar secuencia ================= */
    function sesionOrdenar(lista) {
      let i = 0, aciertosTotales = 0, pasosTotales = 0;

      function pinta() {
        panel.innerHTML = "";
        if (i >= lista.length) return resultado(aciertosTotales, pasosTotales, [], "ordenar");

        const ej = lista[i];
        panel.appendChild(encabezado(i, lista.length, aciertosTotales));
        panel.appendChild(el("p", { class: "pregunta", html: ej.consigna }));

        let orden = EA.barajar(ej.pasos.map(function (p, idx) { return { texto: p, correcto: idx }; }));
        // evita que arranque ya resuelto
        if (orden.every(function (o, k) { return o.correcto === k; }) && orden.length > 2) {
          orden = orden.reverse();
        }

        const ul = el("ol", { class: "lista-orden" });
        const acciones = el("div", { class: "acciones" });
        panel.appendChild(ul);
        panel.appendChild(acciones);

        function pintaLista(revisado) {
          ul.innerHTML = "";
          orden.forEach(function (o, idx) {
            const li = el("li", {});
            if (revisado) li.className = o.correcto === idx ? "bien" : "mal";
            li.appendChild(el("span", { class: "indice", text: String(idx + 1) }));
            li.appendChild(el("span", { class: "texto", html: o.texto + (revisado && o.correcto !== idx
              ? ' <span style="color:var(--bad);font-size:.8rem">(va en ' + (o.correcto + 1) + ")</span>" : "") }));
            if (!revisado) {
              const arriba = el("button", { type: "button", text: "▲", title: "Subir" });
              const abajo = el("button", { type: "button", text: "▼", title: "Bajar" });
              arriba.disabled = idx === 0;
              abajo.disabled = idx === orden.length - 1;
              arriba.addEventListener("click", function () {
                [orden[idx - 1], orden[idx]] = [orden[idx], orden[idx - 1]]; pintaLista(false);
              });
              abajo.addEventListener("click", function () {
                [orden[idx + 1], orden[idx]] = [orden[idx], orden[idx + 1]]; pintaLista(false);
              });
              li.appendChild(el("span", { class: "mover" }, [arriba, abajo]));
            }
            ul.appendChild(li);
          });
        }
        pintaLista(false);

        const revisar = el("button", { class: "btn primario", type: "button", text: "Revisar orden" });
        acciones.appendChild(revisar);
        revisar.addEventListener("click", function () {
          const bien = orden.filter(function (o, idx) { return o.correcto === idx; }).length;
          aciertosTotales += bien;
          pasosTotales += ej.pasos.length;
          pintaLista(true);

          const retro = el("div", { class: "retro " + (bien === ej.pasos.length ? "bien" : "mal") });
          retro.appendChild(el("div", { class: "veredicto", text: bien + " de " + ej.pasos.length + " en la posición correcta" }));
          if (ej.explicacion) retro.appendChild(el("p", { html: ej.explicacion }));
          panel.appendChild(retro);

          acciones.innerHTML = "";
          const sig = el("button", { class: "btn primario", type: "button",
            text: i === lista.length - 1 ? "Ver resultado" : "Siguiente →" });
          sig.addEventListener("click", function () { i++; pinta(); });
          acciones.appendChild(sig);
          panel.appendChild(acciones);
        });
      }
      pinta();
    }

    /* ================= 5 · Tarjetas de repaso ================= */
    function sesionFlashcards(lista) {
      let i = 0, sabidas = 0;
      let volteada = false;

      function pinta() {
        panel.innerHTML = "";
        if (i >= lista.length) return resultado(sabidas, lista.length, [], "flashcards");

        const t = lista[i];
        panel.appendChild(encabezado(i, lista.length, sabidas));

        const tarjeta = el("div", { class: "tarjeta-flash", role: "button", tabindex: "0" }, [
          el("span", { class: "cara-etiqueta", text: volteada ? "Definición" : "Concepto" }),
          el("div", { class: "contenido" + (volteada ? "" : " frente"), html: volteada ? t.reverso : t.frente }),
          el("span", { class: "pista-clic", text: volteada ? "Clic para volver" : "Clic para revelar" })
        ]);
        function voltea() { volteada = !volteada; pinta(); }
        tarjeta.addEventListener("click", voltea);
        tarjeta.addEventListener("keydown", function (e) {
          if (e.key === " " || e.key === "Enter") { e.preventDefault(); voltea(); }
        });
        panel.appendChild(tarjeta);

        const acciones = el("div", { class: "acciones" });
        if (volteada) {
          const si = el("button", { class: "btn primario", type: "button", text: "✓ La sabía" });
          const no = el("button", { class: "btn", type: "button", text: "↻ Repasar después" });
          si.addEventListener("click", function () { sabidas++; volteada = false; i++; pinta(); });
          no.addEventListener("click", function () { volteada = false; i++; pinta(); });
          acciones.appendChild(si); acciones.appendChild(no);
        } else {
          const rev = el("button", { class: "btn primario", type: "button", text: "Revelar definición" });
          rev.addEventListener("click", voltea);
          acciones.appendChild(rev);
        }
        panel.appendChild(acciones);
      }
      pinta();
    }

    /* ================= Resultado final ================= */
    function resultado(aciertos, total, errores, modo) {
      panel.innerHTML = "";
      const pct = total ? Math.round((aciertos / total) * 100) : 0;
      EA.guardarResultado(semana.id, modo, aciertos, total);

      const nivel = pct >= 80 ? "alta" : pct >= 60 ? "media" : "baja";
      const mensaje = pct >= 80 ? "Dominio sólido del tema."
        : pct >= 60 ? "Vas bien; revisa los conceptos que fallaste."
        : "Conviene volver a la sección de conceptos antes de repetir.";

      const caja = el("div", { class: "resultado" }, [
        el("div", { class: "cifra " + nivel, text: pct + "%" }),
        el("p", { text: aciertos + " de " + total + " · " + mensaje })
      ]);

      if (errores.length) {
        const rep = el("div", { class: "repaso-errores" }, [el("h4", { text: "Para repasar" })]);
        const ul = el("ul");
        errores.forEach(function (e) {
          const enunciado = e.esEscenario ? e.q.escenario : e.q.pregunta;
          ul.appendChild(el("li", { html: "<b>" + enunciado + "</b><br>Respuesta correcta: "
            + e.q.opciones[e.q.correcta] }));
        });
        rep.appendChild(ul);
        caja.appendChild(rep);
      }
      panel.appendChild(caja);

      const otra = el("button", { class: "btn primario", type: "button", text: "Intentar de nuevo" });
      otra.addEventListener("click", function () { iniciar(modoActivo); });
      const volver = el("button", { class: "btn", type: "button", text: "Elegir otro modo" });
      volver.addEventListener("click", function () {
        panel.innerHTML = "";
        panel.appendChild(el("div", { class: "vacio" }, [
          el("h3", { text: "Elige un modo de práctica" }),
          el("p", { text: "Cada modo entrena una habilidad distinta." })
        ]));
        barraModos.querySelectorAll(".modo").forEach(function (x) { x.setAttribute("aria-pressed", "false"); });
        window.scrollTo({ top: barraModos.offsetTop - 80, behavior: "smooth" });
      });
      panel.appendChild(el("div", { class: "acciones", style: "justify-content:center" }, [otra, volver]));
    }

    // Estado inicial del panel
    panel.appendChild(el("div", { class: "vacio" }, [
      el("h3", { text: "Elige un modo de práctica" }),
      el("p", { text: "Cada modo entrena una habilidad distinta: reconocer conceptos, decidir qué marco aplicar, clasificar por dominio, ordenar un método o repasar vocabulario." })
    ]));
  }

  EA.practica = { crear: crear, MODOS: MODOS };
})(window.EA);
