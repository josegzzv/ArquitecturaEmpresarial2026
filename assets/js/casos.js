/* ============================================================
   casos.js — catálogo de casos de diseño de procesos y EA
   Render con filtro por categoría, búsqueda y fichas expandibles.
   ============================================================ */

(function (EA) {
  const el = EA.el;

  /* ---------- Registro ---------- */
  let banco = { categorias: [], casos: [], practica: {} };

  EA.registrarCasos = function (def) {
    banco = Object.assign(banco, def || {});
  };
  EA.obtenerCasos = function () { return banco; };

  /* ---------- Ficha completa ---------- */
  function renderFicha(c) {
    const cuerpo = el("div", { class: "ficha-cuerpo" });

    if (c.contexto) {
      cuerpo.appendChild(el("div", { class: "ficha-seccion" }, [
        el("h5", { text: "Contexto" }),
        el("div", { html: c.contexto })
      ]));
    }

    if (c.flujo && c.flujo.length) {
      const f = el("div", { class: "flujo" });
      c.flujo.forEach(function (p, i) {
        if (i > 0) f.appendChild(el("span", { class: "sep", text: "→" }));
        f.appendChild(el("span", { class: "paso", text: p }));
      });
      cuerpo.appendChild(el("div", { class: "ficha-seccion" }, [
        el("h5", { text: "El proceso, a grandes rasgos" }), f
      ]));
    }

    if (c.analisis) {
      cuerpo.appendChild(el("div", { class: "ficha-seccion" }, [
        el("h5", { text: "Qué hay que ver aquí" }),
        el("div", { html: c.analisis })
      ]));
    }

    if (c.cifras) {
      const env = el("div", { class: "tabla-envoltura" });
      const t = el("table", { class: "datos" });
      if (c.cifras.encabezados) {
        t.appendChild(el("thead", {}, [
          el("tr", {}, c.cifras.encabezados.map(function (h) { return el("th", { html: h }); }))
        ]));
      }
      t.appendChild(el("tbody", {}, (c.cifras.filas || []).map(function (fila) {
        return el("tr", {}, fila.map(function (celda) { return el("td", { html: celda }); }));
      })));
      env.appendChild(t);
      cuerpo.appendChild(el("div", { class: "ficha-seccion" }, [
        el("h5", {}, [
          document.createTextNode(c.cifras.titulo || "Cifras del caso"),
          el("span", { class: "etiqueta-ilustrativa", text: "cifras ilustrativas" })
        ]),
        env
      ]));
    }

    if (c.indicadores && c.indicadores.length) {
      cuerpo.appendChild(el("div", { class: "ficha-seccion" }, [
        el("h5", { text: "Qué mediría un analista" }),
        el("ul", {}, c.indicadores.map(function (i) { return el("li", { html: i }); }))
      ]));
    }

    if (c.preguntas && c.preguntas.length) {
      cuerpo.appendChild(el("div", { class: "ficha-seccion preguntas" }, [
        el("h5", { text: "Para discutir en clase" }),
        el("ol", {}, c.preguntas.map(function (q) { return el("li", { html: q }); }))
      ]));
    }

    if (c.conecta) {
      cuerpo.appendChild(el("div", { class: "ficha-conecta", html: "<b>Conecta con:</b> " + c.conecta }));
    }

    return cuerpo;
  }

  /* ---------- Tarjeta ---------- */
  function renderTarjeta(c, categoria) {
    const art = el("article", { class: "ficha-caso", "data-categoria": c.categoria, id: "caso-" + c.id });

    const chips = el("div", { class: "ficha-chips" });
    (c.patrones || []).forEach(function (p) {
      chips.appendChild(el("span", { class: "pastilla viva", text: p }));
    });
    (c.semanas || []).forEach(function (s) {
      chips.appendChild(el("span", { class: "pastilla", text: "S" + s }));
    });

    const boton = el("button", { class: "ficha-cabecera", type: "button", "aria-expanded": "false" }, [
      el("div", { class: "ficha-titulo" }, [
        el("span", { class: "ficha-categoria", text: categoria ? categoria.nombre : "" }),
        el("h3", { text: c.titulo }),
        el("p", { text: c.subtitulo || "" })
      ]),
      el("span", { class: "ficha-flecha", text: "▾" })
    ]);

    const cuerpo = renderFicha(c);
    cuerpo.hidden = true;

    boton.addEventListener("click", function () {
      const abierto = boton.getAttribute("aria-expanded") === "true";
      boton.setAttribute("aria-expanded", String(!abierto));
      cuerpo.hidden = abierto;
      art.classList.toggle("abierto", !abierto);
    });

    art.appendChild(boton);
    art.appendChild(chips);
    art.appendChild(cuerpo);
    return art;
  }

  /* ---------- Página ---------- */
  function renderCatalogo(destino, filtros, campoBusqueda, contador) {
    const cats = banco.categorias || [];
    const casos = banco.casos || [];
    let categoriaActiva = "todas";
    let texto = "";

    /* chips de filtro */
    const botones = {};
    function chip(id, nombre, n) {
      const b = el("button", { class: "chip", type: "button", "aria-pressed": String(id === "todas") }, [
        document.createTextNode(nombre),
        el("span", { class: "chip-n", text: String(n) })
      ]);
      b.addEventListener("click", function () {
        categoriaActiva = id;
        Object.keys(botones).forEach(function (k) {
          botones[k].setAttribute("aria-pressed", String(k === id));
        });
        pinta();
      });
      botones[id] = b;
      return b;
    }
    if (filtros) {
      filtros.appendChild(chip("todas", "Todos", casos.length));
      cats.forEach(function (cat) {
        const n = casos.filter(function (c) { return c.categoria === cat.id; }).length;
        if (n) filtros.appendChild(chip(cat.id, cat.nombre, n));
      });
    }

    if (campoBusqueda) {
      campoBusqueda.addEventListener("input", function () {
        texto = campoBusqueda.value.trim().toLowerCase();
        pinta();
      });
    }

    function coincide(c) {
      if (categoriaActiva !== "todas" && c.categoria !== categoriaActiva) return false;
      if (!texto) return true;
      const bolsa = [c.titulo, c.subtitulo, c.contexto, c.analisis,
                     (c.patrones || []).join(" "), (c.indicadores || []).join(" ")]
                    .join(" ").toLowerCase();
      return bolsa.indexOf(texto) > -1;
    }

    function pinta() {
      destino.innerHTML = "";
      const visibles = casos.filter(coincide);

      if (contador) {
        contador.textContent = visibles.length === casos.length
          ? casos.length + " casos"
          : visibles.length + " de " + casos.length + " casos";
      }

      if (!visibles.length) {
        destino.appendChild(el("div", { class: "vacio" }, [
          el("h3", { text: "Sin resultados" }),
          el("p", { text: "Prueba con otra palabra: cola, capacidad, pago, incidente, cita…" })
        ]));
        return;
      }

      /* agrupados por categoría, respetando el orden del catálogo */
      cats.forEach(function (cat) {
        const delGrupo = visibles.filter(function (c) { return c.categoria === cat.id; });
        if (!delGrupo.length) return;
        const grupo = el("section", { class: "grupo-casos" }, [
          el("h2", { text: cat.nombre }),
          cat.resumen ? el("p", { class: "sub", html: cat.resumen }) : null
        ]);
        delGrupo.forEach(function (c) { grupo.appendChild(renderTarjeta(c, cat)); });
        destino.appendChild(grupo);
      });
    }

    pinta();

    /* abre la ficha si la URL trae #caso-xxx */
    if (window.location.hash.indexOf("#caso-") === 0) {
      const art = document.getElementById(window.location.hash.slice(1));
      if (art) {
        art.querySelector(".ficha-cabecera").click();
        art.scrollIntoView({ block: "center" });
      }
    }
  }

  EA.vistas = EA.vistas || {};
  EA.vistas.renderCatalogoCasos = renderCatalogo;
})(window.EA);
