/* ============================================================
   vistas.js — render de la portada, de los conceptos y del glosario
   ============================================================ */

(function (EA) {
  const el = EA.el;

  /* ---------------- Bloques de contenido ---------------- */

  function renderBloque(b) {
    const clase = "bloque" + (b.tipo === "nota" ? " nota" : b.tipo === "clave" ? " clave" : "");
    const nodo = el("div", { class: clase });
    if (b.titulo) nodo.appendChild(el("h4", { text: b.titulo }));

    switch (b.tipo) {
      case "texto":
      case "nota":
      case "clave":
        nodo.appendChild(el("div", { html: b.cuerpo || "" }));
        break;

      case "lista":
        nodo.appendChild(el("ul", {}, (b.items || []).map(function (i) {
          return el("li", { html: i });
        })));
        break;

      case "pasos":
        nodo.appendChild(el("ol", {}, (b.items || []).map(function (i) {
          return el("li", { html: i });
        })));
        break;

      case "tabla": {
        const env = el("div", { class: "tabla-envoltura" });
        const t = el("table", { class: "datos" });
        if (b.encabezados) {
          t.appendChild(el("thead", {}, [
            el("tr", {}, b.encabezados.map(function (h) { return el("th", { html: h }); }))
          ]));
        }
        t.appendChild(el("tbody", {}, (b.filas || []).map(function (f) {
          return el("tr", {}, f.map(function (c) { return el("td", { html: c }); }));
        })));
        env.appendChild(t);
        nodo.appendChild(env);
        break;
      }

      case "flujo": {
        const f = el("div", { class: "flujo" });
        (b.pasos || []).forEach(function (p, i) {
          if (i > 0) f.appendChild(el("span", { class: "sep", text: "→" }));
          f.appendChild(el("span", { class: "paso", text: p }));
        });
        nodo.appendChild(f);
        break;
      }

      case "diagrama":
        nodo.appendChild(el("pre", { class: "diagrama", text: b.cuerpo || "" }));
        break;

      case "svg": {
        const fig = el("figure", { class: "figura" });
        const caja = el("div", { class: "figura-lienzo", html: b.svg || "" });
        fig.appendChild(caja);
        if (b.pie) fig.appendChild(el("figcaption", { html: b.pie }));
        nodo.appendChild(fig);
        break;
      }

      case "defs": {
        const dl = el("dl", { class: "defs" });
        (b.items || []).forEach(function (d) {
          dl.appendChild(el("div", {}, [
            el("dt", { html: d.termino }),
            el("dd", { html: d.definicion })
          ]));
        });
        nodo.appendChild(dl);
        break;
      }

      default:
        nodo.appendChild(el("div", { html: b.cuerpo || "" }));
    }
    return nodo;
  }

  function renderDia(d) {
    const s = el("section", { class: "dia", id: "dia-" + d.id });
    s.appendChild(el("header", {}, [
      el("div", { class: "etiqueta-dia", text: d.nombre || "" }),
      el("h3", { text: d.tema || "" }),
      d.proposito ? el("p", { class: "proposito", html: d.proposito }) : null
    ]));
    (d.bloques || []).forEach(function (b) { s.appendChild(renderBloque(b)); });
    return s;
  }

  /* ---------------- Portada ---------------- */

  function renderPortada(destino) {
    const c = EA.obtenerCurso();
    const grid = el("div", { class: "grid-semanas" });

    EA.listaSemanas().forEach(function (s) {
      const publicada = s.estado === "publicada";
      const n = EA.contarReactivos(s);
      const prog = publicada ? EA.mejorPorSemana(s.id) : null;

      const pie = el("footer", {}, [
        el("span", { class: "pastilla", text: EA.t("portada.sesiones", { n: s.sesiones || 0 }) }),
        publicada ? el("span", { class: "pastilla viva", text: EA.t("portada.reactivos", { n: n }) })
                  : el("span", { class: "pastilla", text: EA.t("portada.proximamente") }),
        prog ? el("span", { class: "pastilla ok", text: EA.t("portada.mejor", { n: prog.promedio }) }) : null
      ]);

      const cuerpo = [
        el("div", { class: "num", text: EA.t("portada.semana", { n: s.id }) }),
        el("h3", { text: s.titulo }),
        el("p", { text: s.subtitulo || "" }),
        pie
      ];

      grid.appendChild(publicada
        ? el("a", { class: "tarjeta-semana", href: "semana.html?s=" + s.id }, cuerpo)
        : el("div", { class: "tarjeta-semana proximamente" }, cuerpo));
    });

    destino.appendChild(grid);

    if (c.caso) {
      const caja = el("div", {
        class: "caso" + (c.casoEstado === "pendiente" ? " pendiente" : ""),
        html: c.caso
      });
      destino.parentNode.insertBefore(caja, destino);
    }
  }

  /* ---------------- Hilo conductor interactivo ----------------
     Un eslabón se abre con el ratón, con el teclado o con el dedo.
     El detalle NO es un tooltip: es un panel fijo debajo, porque un
     tooltip no existe en pantallas táctiles y se pierde al leerlo. */

  function renderHilo(destino) {
    const pasos = (EA.obtenerCurso().hilo) || [];
    if (!pasos.length || !destino) return;

    const cadena = el("div", { class: "hilo" });
    const panel = el("div", { class: "hilo-detalle", "aria-live": "polite" });
    const botones = [];
    let fijado = 0;      // el que quedó seleccionado al hacer clic
    let mostrando = -1;

    function pinta(i) {
      if (i === mostrando) return;
      mostrando = i;
      const p = pasos[i];
      panel.innerHTML = "";
      panel.appendChild(el("div", { class: "hilo-cabeza" }, [
        el("h3", { text: p.nombre }),
        p.donde ? el("span", { class: "pastilla", text: p.donde }) : null
      ]));
      panel.appendChild(el("p", { class: "hilo-resumen", html: p.resumen || "" }));

      const filas = [];
      if (p.pregunta) filas.push(["pregunta", EA.t("hilo.pregunta"), p.pregunta]);
      if (p.ejemplo) filas.push(["ejemplo", EA.t("hilo.ejemplo"), p.ejemplo]);
      if (p.error) filas.push(["error", EA.t("hilo.error"), p.error]);

      filas.forEach(function (f) {
        panel.appendChild(el("div", { class: "hilo-fila " + f[0] }, [
          el("span", { class: "hilo-etiqueta", text: f[1] }),
          el("span", { class: "hilo-valor", html: f[2] })
        ]));
      });

      botones.forEach(function (b, k) {
        b.setAttribute("aria-selected", String(k === i));
      });
    }

    pasos.forEach(function (p, i) {
      if (i > 0) cadena.appendChild(el("span", { class: "sep", text: "→", "aria-hidden": "true" }));

      const b = el("button", {
        class: "paso", type: "button", role: "tab",
        "aria-selected": "false", text: p.nombre
      });
      b.addEventListener("mouseenter", function () { pinta(i); });
      b.addEventListener("focus", function () { pinta(i); });
      b.addEventListener("click", function () { fijado = i; pinta(i); });
      botones.push(b);
      cadena.appendChild(b);
    });

    /* Al sacar el ratón de la cadena, vuelve al que quedó fijado */
    cadena.addEventListener("mouseleave", function () { pinta(fijado); });

    /* Flechas para moverse con el teclado, como en cualquier lista de pestañas */
    cadena.addEventListener("keydown", function (e) {
      const i = botones.indexOf(document.activeElement);
      if (i < 0) return;
      let destinoIdx = -1;
      if (e.key === "ArrowRight") destinoIdx = (i + 1) % botones.length;
      if (e.key === "ArrowLeft") destinoIdx = (i - 1 + botones.length) % botones.length;
      if (e.key === "Home") destinoIdx = 0;
      if (e.key === "End") destinoIdx = botones.length - 1;
      if (destinoIdx < 0) return;
      e.preventDefault();
      botones[destinoIdx].focus();
    });

    cadena.setAttribute("role", "tablist");
    destino.appendChild(cadena);
    destino.appendChild(el("p", { class: "hilo-pista", text: EA.t("hilo.pista") }));
    destino.appendChild(panel);
    pinta(0);
  }

  /* ---------------- Guía de secciones ---------------- */

  function renderGuia(destino) {
    const c = EA.obtenerCurso();
    const guia = c.guia || [];
    if (!guia.length || !destino) return;

    /* Los conteos salen del contenido real, no de un número escrito a mano. */
    const semanas = EA.listaSemanas().filter(function (s) { return s.estado === "publicada"; });
    const reactivos = semanas.reduce(function (a, s) { return a + EA.contarReactivos(s); }, 0);
    const casos = ((EA.obtenerCasos && EA.obtenerCasos().casos) || []).length;
    const etapas = ((EA.obtenerTaller && EA.obtenerTaller()) || { etapas: [] }).etapas.length;
    const terminos = EA.listaSemanas().reduce(function (a, s) { return a + (s.terminos || []).length; }, 0);

    const conteos = {
      semanas: EA.t("guia.nSemanas", { n: semanas.length }),
      practica: EA.t("guia.nReactivos", { n: reactivos }),
      casos: casos ? EA.t("guia.nCasos", { n: casos }) : null,
      taller: etapas ? EA.t("guia.nEtapas", { n: etapas }) : null,
      glosario: EA.t("guia.nTerminos", { n: terminos })
    };

    const rejilla = el("div", { class: "guia" });
    guia.forEach(function (g) {
      const tarjeta = el("article", { class: "guia-tarjeta" }, [
        el("div", { class: "guia-cabeza" }, [
          el("span", { class: "guia-icono", text: g.icono || "◆", "aria-hidden": "true" }),
          el("h3", { text: g.nombre }),
          conteos[g.id] ? el("span", { class: "pastilla viva", text: conteos[g.id] }) : null
        ]),
        g.cuando ? el("p", { class: "guia-cuando", html: g.cuando }) : null,
        el("p", { class: "guia-cuerpo", html: g.cuerpo || "" }),
        g.enlace ? el("a", { class: "guia-enlace", href: g.enlace }, [
          document.createTextNode(g.accion || ""),
          el("span", { class: "guia-flecha", text: " →", "aria-hidden": "true" })
        ]) : null
      ]);
      rejilla.appendChild(tarjeta);
    });
    destino.appendChild(rejilla);

    if (c.consejos && c.consejos.length) {
      destino.appendChild(el("div", { class: "bloque clave consejos" }, [
        el("h4", { text: EA.t("guia.consejos") }),
        el("ul", {}, c.consejos.map(function (t) { return el("li", { html: t }); }))
      ]));
    }
  }

  /* ---------------- Página de semana ---------------- */

  function renderSemana(semana, destinoConceptos, destinoCabecera) {
    destinoCabecera.appendChild(el("div", { class: "kicker",
      text: EA.t("semana.kicker", { n: semana.id, s: semana.sesiones || 0 }) }));
    destinoCabecera.appendChild(el("h1", { text: semana.titulo }));
    if (semana.subtitulo) destinoCabecera.appendChild(el("p", { class: "lead", text: semana.subtitulo }));

    if (semana.objetivos && semana.objetivos.length) {
      destinoConceptos.appendChild(renderBloque({
        tipo: "lista",
        titulo: EA.t("semana.objetivos"),
        items: semana.objetivos
      }));
    }
    (semana.dias || []).forEach(function (d) { destinoConceptos.appendChild(renderDia(d)); });
  }

  /* ---------------- Glosario ---------------- */

  function renderGlosario(destino, campoBusqueda) {
    const terminos = [];
    EA.listaSemanas().forEach(function (s) {
      (s.terminos || []).forEach(function (t) {
        terminos.push(Object.assign({ semana: s.id }, t));
      });
    });
    terminos.sort(function (a, b) {
      return a.termino.localeCompare(b.termino, EA.idioma(), { sensitivity: "base" });
    });

    function pinta(filtro) {
      destino.innerHTML = "";
      const f = (filtro || "").trim().toLowerCase();
      const visibles = terminos.filter(function (t) {
        return !f
          || t.termino.toLowerCase().includes(f)
          || (t.sigla || "").toLowerCase().includes(f)
          || t.definicion.toLowerCase().includes(f);
      });

      if (!visibles.length) {
        destino.appendChild(el("div", { class: "vacio" }, [
          el("h3", { text: EA.t("glosario.sinResultados") }),
          el("p", { text: EA.t("glosario.pista") })
        ]));
        return;
      }

      const dl = el("dl", { class: "defs" });
      visibles.forEach(function (t) {
        dl.appendChild(el("div", {}, [
          el("dt", { html: t.termino + (t.sigla ? ' <span style="color:var(--muted);font-weight:500">· ' + t.sigla + "</span>" : "") }),
          el("dd", { html: t.definicion + ' <span class="pastilla" style="margin-left:.3rem">' + (EA.esIngles() ? "W" : "S") + t.semana + "</span>" })
        ]));
      });
      destino.appendChild(el("div", { class: "bloque" }, [dl]));
    }

    if (campoBusqueda) {
      campoBusqueda.addEventListener("input", function () { pinta(campoBusqueda.value); });
    }
    pinta("");
  }

  EA.vistas = { renderPortada, renderSemana, renderGlosario, renderBloque, renderHilo, renderGuia };
})(window.EA);
