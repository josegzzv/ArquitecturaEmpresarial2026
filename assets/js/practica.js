/* ============================================================
   practica.js — motor de práctica con cinco modos
   1. opcionMultiple  2. escenarios  3. clasificar  4. ordenar  5. flashcards
   ============================================================ */

(function (EA) {
  const el = EA.el;

  /* El nombre y la descripción de cada modo salen del diccionario de idioma;
     aquí solo vive lo que no cambia entre idiomas. */
  const MODOS = [
    { clave: "opcionMultiple", icono: "◉", unidad: "unidad.reactivos" },
    { clave: "escenarios",     icono: "⚖", unidad: "unidad.reactivos" },
    { clave: "clasificar",     icono: "▦", unidad: "unidad.reactivos" },
    { clave: "ordenar",        icono: "↕", unidad: "unidad.reactivos" },
    { clave: "calculos",       icono: "∑", unidad: "unidad.ejercicios" },
    { clave: "flashcards",     icono: "🗂", unidad: "unidad.tarjetas" }
  ];

  /* Normaliza lo que escribe el alumno: coma decimal, %, espacios, separador de miles */
  function aNumero(txt) {
    if (txt === null || txt === undefined) return NaN;
    let s = String(txt).trim().replace(/\s|%|\$/g, "").replace(/[−–—]/g, "-");
    if (s === "") return NaN;
    // Coma seguida de exactamente 3 dígitos = separador de miles (1,234 · 395,081)
    s = s.replace(/,(?=\d{3}(\D|$))/g, "");
    // La coma que quede se interpreta como separador decimal (31,22)
    s = s.replace(",", ".");
    return parseFloat(s);
  }

  function formatea(n) {
    return Number.isInteger(n) ? String(n)
      : String(Math.round(n * 10000) / 10000).replace(".", ".");
  }

  function crear(semana, contenedor) {
    const practica = semana.practica || {};
    const disponibles = MODOS.filter(function (m) {
      return (practica[m.clave] || []).length > 0;
    });

    contenedor.innerHTML = "";

    if (!disponibles.length) {
      contenedor.appendChild(el("div", { class: "vacio" }, [
        el("h3", { text: EA.t("practica.sinTitulo") }),
        el("p", { text: EA.t("practica.sinCuerpo") })
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
        el("span", { class: "nombre", text: EA.t("modo." + m.clave + ".nombre") }),
        el("span", { class: "desc", text: EA.t("modo." + m.clave + ".desc") }),
        el("span", { class: "pastilla", style: "align-self:flex-start;margin-top:.4rem",
          text: EA.t(m.unidad, { n: (practica[m.clave] || []).length }) })
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
        case "calculos":       sesionCalculos(datos); break;
        case "flashcards":     sesionFlashcards(EA.barajar(datos)); break;
      }
    }

    /* ---------- Barra de progreso ---------- */
    function encabezado(indice, total, aciertos) {
      const pista = el("div", { class: "pista" }, [
        el("div", { class: "relleno", style: "width:" + Math.round((indice / total) * 100) + "%" })
      ]);
      return el("div", { class: "barra-progreso" }, [
        el("span", { text: EA.t("practica.deTotal", { i: indice + 1, n: total }) }),
        pista,
        el("span", {}, [
          el("span", { class: "marcador", text: String(aciertos) }),
          document.createTextNode(EA.t("practica.aciertos"))
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
          panel.appendChild(el("p", { class: "pregunta", text: q.pregunta || EA.t("practica.escenarioPreg") }));
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
            el("span", { text: bien ? EA.t("practica.correcto") : EA.t("practica.incorrecto") })
          ]));
          retro.appendChild(el("p", { html: q.explicacion || "" }));

          if (!bien && q.porQueNo && q.porQueNo[elegida]) {
            retro.appendChild(el("p", { html: EA.t("practica.sobreTu") + q.porQueNo[elegida] }));
          }
          if (q.porQueNo && Object.keys(q.porQueNo).length > 1) {
            const ul = el("ul");
            Object.keys(q.porQueNo).forEach(function (k) {
              if (Number(k) === elegida && !bien) return;
              ul.appendChild(el("li", { html: "<b>" + q.opciones[Number(k)] + ":</b> " + q.porQueNo[k] }));
            });
            if (ul.childNodes.length) {
              retro.appendChild(el("p", { html: EA.t("practica.lasDemas") }));
              retro.appendChild(ul);
            }
          }
          panel.appendChild(retro);

          const sig = el("button", { class: "btn primario", type: "button",
            text: i === lista.length - 1 ? EA.t("practica.verResultado") : EA.t("practica.siguiente") });
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
        panel.appendChild(el("p", { html: '<span style="font-size:.84rem;color:var(--muted)">'
          + EA.t("practica.arrastra") + '</span>' }));

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

        const revisar = el("button", { class: "btn primario", type: "button", text: EA.t("practica.revisar") });
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
            f.appendChild(el("span", { class: "correccion", text: EA.t("practica.sinClasificar") + f.getAttribute("data-categoria") }));
            f.draggable = false;
          });

          aciertosTotales += bien;
          itemsTotales += ej.items.length;

          const retro = el("div", { class: "retro " + (bien === ej.items.length ? "bien" : "mal") });
          retro.appendChild(el("div", { class: "veredicto", text: EA.t("practica.bienClasif", { a: bien, b: ej.items.length }) }));
          if (ej.explicacion) retro.appendChild(el("p", { html: ej.explicacion }));
          panel.appendChild(retro);

          acciones.innerHTML = "";
          const sig = el("button", { class: "btn primario", type: "button",
            text: i === lista.length - 1 ? EA.t("practica.verResultado") : EA.t("practica.siguiente") });
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
              ? ' <span style="color:var(--bad);font-size:.8rem">'
                + EA.t("practica.vaEn", { n: o.correcto + 1 }) + "</span>" : "") }));
            if (!revisado) {
              const arriba = el("button", { type: "button", text: "▲", title: EA.t("practica.subir") });
              const abajo = el("button", { type: "button", text: "▼", title: EA.t("practica.bajar") });
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

        const revisar = el("button", { class: "btn primario", type: "button", text: EA.t("practica.revisarOrden") });
        acciones.appendChild(revisar);
        revisar.addEventListener("click", function () {
          const bien = orden.filter(function (o, idx) { return o.correcto === idx; }).length;
          aciertosTotales += bien;
          pasosTotales += ej.pasos.length;
          pintaLista(true);

          const retro = el("div", { class: "retro " + (bien === ej.pasos.length ? "bien" : "mal") });
          retro.appendChild(el("div", { class: "veredicto", text: EA.t("practica.posCorrecta", { a: bien, b: ej.pasos.length }) }));
          if (ej.explicacion) retro.appendChild(el("p", { html: ej.explicacion }));
          panel.appendChild(retro);

          acciones.innerHTML = "";
          const sig = el("button", { class: "btn primario", type: "button",
            text: i === lista.length - 1 ? EA.t("practica.verResultado") : EA.t("practica.siguiente") });
          sig.addEventListener("click", function () { i++; pinta(); });
          acciones.appendChild(sig);
          panel.appendChild(acciones);
        });
      }
      pinta();
    }

    /* ================= 5 · Cálculo de tiempos y capacidad ================= */
    function sesionCalculos(lista) {
      let i = 0, aciertosTotales = 0, camposTotales = 0;

      function pinta() {
        panel.innerHTML = "";
        if (i >= lista.length) return resultado(aciertosTotales, camposTotales, [], "calculos");

        const ej = lista[i];
        panel.appendChild(encabezado(i, lista.length, aciertosTotales));
        if (ej.tema) panel.appendChild(el("div", { class: "pregunta-tema", text: ej.tema }));
        panel.appendChild(el("p", { class: "pregunta", html: ej.titulo }));
        if (ej.enunciado) panel.appendChild(el("div", { class: "escenario-caja", html: ej.enunciado }));

        if (ej.datos) panel.appendChild(EA.vistas.renderBloque(ej.datos));
        if (ej.diagrama) {
          panel.appendChild(EA.vistas.renderBloque(Object.assign(
            { tipo: ej.diagrama.svg ? "svg" : "diagrama" }, ej.diagrama)));
        }

        /* Campos de respuesta */
        const campos = el("div", { class: "campos-calculo" });
        const entradas = [];
        ej.preguntas.forEach(function (q, idx) {
          const input = el("input", {
            type: "text", inputmode: "decimal", class: "entrada-num",
            placeholder: "0.00", "aria-label": q.etiqueta
          });
          input.addEventListener("keydown", function (e) {
            if (e.key === "Enter") { e.preventDefault(); revisar.click(); }
          });
          entradas.push({ input: input, q: q });
          campos.appendChild(el("label", { class: "campo" }, [
            el("span", { class: "campo-etiqueta", html: q.etiqueta }),
            el("span", { class: "campo-entrada" }, [
              input,
              el("span", { class: "campo-unidad", text: q.unidad || "" })
            ]),
            q.pista ? el("span", { class: "campo-pista", html: q.pista }) : null
          ]));
        });
        panel.appendChild(campos);

        const revisar = el("button", { class: "btn primario", type: "button", text: EA.t("practica.revisarResp") });
        const acciones = el("div", { class: "acciones" }, [revisar]);
        panel.appendChild(acciones);

        revisar.addEventListener("click", function () {
          let bien = 0;
          entradas.forEach(function (x) {
            const val = aNumero(x.input.value);
            const tol = x.q.tolerancia !== undefined ? x.q.tolerancia : 0.01;
            const ok = !isNaN(val) && Math.abs(val - x.q.respuesta) <= tol;
            if (ok) bien++;
            x.input.disabled = true;
            x.input.classList.add(ok ? "bien" : "mal");
            const marca = el("span", { class: "campo-veredicto " + (ok ? "bien" : "mal") });
            marca.innerHTML = ok
              ? "✓"
              : '✗ <b>' + formatea(x.q.respuesta) + "</b> " + (x.q.unidad || "");
            x.input.parentNode.appendChild(marca);
          });

          aciertosTotales += bien;
          camposTotales += ej.preguntas.length;

          const retro = el("div", { class: "retro " + (bien === ej.preguntas.length ? "bien" : "mal") });
          retro.appendChild(el("div", { class: "veredicto", text: EA.t("practica.valoresOk", { a: bien, b: ej.preguntas.length }) }));
          panel.appendChild(retro);

          if (ej.solucion) {
            panel.appendChild(el("div", { class: "bloque solucion" }, [
              el("h4", { text: EA.t("practica.solucion") }),
              el("div", { html: ej.solucion })
            ]));
          }

          acciones.innerHTML = "";
          const sig = el("button", { class: "btn primario", type: "button",
            text: i === lista.length - 1 ? EA.t("practica.verResultado") : EA.t("practica.siguienteEj") });
          sig.addEventListener("click", function () { i++; pinta(); });
          acciones.appendChild(sig);
          panel.appendChild(acciones);
        });
      }
      pinta();
    }

    /* ================= 6 · Tarjetas de repaso ================= */
    function sesionFlashcards(lista) {
      let i = 0, sabidas = 0;
      let volteada = false;

      function pinta() {
        panel.innerHTML = "";
        if (i >= lista.length) return resultado(sabidas, lista.length, [], "flashcards");

        const t = lista[i];
        panel.appendChild(encabezado(i, lista.length, sabidas));

        const tarjeta = el("div", { class: "tarjeta-flash", role: "button", tabindex: "0" }, [
          el("span", { class: "cara-etiqueta", text: volteada ? EA.t("flash.definicion") : EA.t("flash.concepto") }),
          el("div", { class: "contenido" + (volteada ? "" : " frente"), html: volteada ? t.reverso : t.frente }),
          el("span", { class: "pista-clic", text: volteada ? EA.t("flash.clicVolver") : EA.t("flash.clicRevelar") })
        ]);
        function voltea() { volteada = !volteada; pinta(); }
        tarjeta.addEventListener("click", voltea);
        tarjeta.addEventListener("keydown", function (e) {
          if (e.key === " " || e.key === "Enter") { e.preventDefault(); voltea(); }
        });
        panel.appendChild(tarjeta);

        const acciones = el("div", { class: "acciones" });
        if (volteada) {
          const si = el("button", { class: "btn primario", type: "button", text: EA.t("flash.laSabia") });
          const no = el("button", { class: "btn", type: "button", text: EA.t("flash.repasar") });
          si.addEventListener("click", function () { sabidas++; volteada = false; i++; pinta(); });
          no.addEventListener("click", function () { volteada = false; i++; pinta(); });
          acciones.appendChild(si); acciones.appendChild(no);
        } else {
          const rev = el("button", { class: "btn primario", type: "button", text: EA.t("flash.revelar") });
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
      const mensaje = pct >= 80 ? EA.t("resultado.alta")
        : pct >= 60 ? EA.t("resultado.media")
        : EA.t("resultado.baja");

      const caja = el("div", { class: "resultado" }, [
        el("div", { class: "cifra " + nivel, text: pct + "%" }),
        el("p", { text: EA.t("resultado.linea", { a: aciertos, b: total, m: mensaje }) })
      ]);

      if (errores.length) {
        const rep = el("div", { class: "repaso-errores" }, [el("h4", { text: EA.t("resultado.paraRepasar") })]);
        const ul = el("ul");
        errores.forEach(function (e) {
          const enunciado = e.esEscenario ? e.q.escenario : e.q.pregunta;
          ul.appendChild(el("li", { html: "<b>" + enunciado + "</b><br>" + EA.t("resultado.respCorrecta")
            + e.q.opciones[e.q.correcta] }));
        });
        rep.appendChild(ul);
        caja.appendChild(rep);
      }
      panel.appendChild(caja);

      const otra = el("button", { class: "btn primario", type: "button", text: EA.t("resultado.otraVez") });
      otra.addEventListener("click", function () { iniciar(modoActivo); });
      const volver = el("button", { class: "btn", type: "button", text: EA.t("resultado.otroModo") });
      volver.addEventListener("click", function () {
        panel.innerHTML = "";
        panel.appendChild(el("div", { class: "vacio" }, [
          el("h3", { text: EA.t("practica.elegirTitulo") }),
          el("p", { text: EA.t("practica.elegirCorta") })
        ]));
        barraModos.querySelectorAll(".modo").forEach(function (x) { x.setAttribute("aria-pressed", "false"); });
        window.scrollTo({ top: barraModos.offsetTop - 80, behavior: "smooth" });
      });
      panel.appendChild(el("div", { class: "acciones", style: "justify-content:center" }, [otra, volver]));
    }

    // Estado inicial del panel
    panel.appendChild(el("div", { class: "vacio" }, [
      el("h3", { text: EA.t("practica.elegirTitulo") }),
      el("p", { text: EA.t("practica.elegirDesc") })
    ]));
  }

  EA.practica = { crear: crear, MODOS: MODOS };
})(window.EA);
