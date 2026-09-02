/* ============================================================
   taller.js — motor del taller integrador

   A diferencia del modo de práctica, aquí el alumno no contesta
   reactivos sueltos: recorre un caso de punta a punta y produce
   un entregable. Por eso el motor:

     · avanza por etapas y guarda lo que se escribe (localStorage),
     · califica solo lo que tiene respuesta objetiva (los números),
     · en la redacción no finge calificar: da una rúbrica para
       autoevaluarse y un modelo de referencia que se revela aparte,
     · arrastra los resultados de una etapa a las siguientes,
     · y al final arma el documento completo para entregarlo.

   El contenido vive en data/taller.js.
   ============================================================ */

(function (EA) {
  "use strict";

  const el = EA.el;
  const CLAVE = "ea:taller";

  /* ---------- Persistencia (mejor esfuerzo) ---------- */

  function leer() {
    try { return JSON.parse(localStorage.getItem(CLAVE) || "{}"); }
    catch (e) { return {}; }
  }

  function guardar(estado) {
    try { localStorage.setItem(CLAVE, JSON.stringify(estado)); }
    catch (e) { /* el avance es opcional, nunca bloquea */ }
  }

  /* ---------- Números ---------- */

  /* Mismo criterio que el modo de cálculos: coma o punto decimal,
     separador de miles, %, $ y el signo menos tipográfico. */
  function aNumero(txt) {
    if (txt === null || txt === undefined) return NaN;
    let s = String(txt).trim().replace(/\s|%|\$/g, "").replace(/[−–—]/g, "-");
    if (s === "") return NaN;
    s = s.replace(/,(?=\d{3}(\D|$))/g, "");
    s = s.replace(",", ".");
    return parseFloat(s);
  }

  function formatea(n) {
    return Number.isInteger(n) ? String(n) : String(Math.round(n * 10000) / 10000);
  }

  /* ---------- Sustitución de resultados arrastrados ----------
     En el texto de una etapa, {{etapa.campo}} se reemplaza por lo que
     el alumno respondió antes. Si aún no lo ha contestado, se muestra
     un hueco visible en vez de romper la frase. */

  function resolver(texto, estado, taller) {
    if (!texto) return "";
    return String(texto).replace(/\{\{([\w.-]+)\}\}/g, function (todo, ref) {
      const partes = ref.split(".");
      const v = ((estado[partes[0]] || {}).campos || {})[partes[1]];
      if (v === undefined || v === "") {
        return '<span class="hueco" title="' + EA.t("taller.pendiente") + '">—</span>';
      }
      return '<b class="arrastrado">' + v + "</b>";
    });
  }

  /* ---------- Campos ---------- */

  function campoNumero(c, valor, estado) {
    const input = el("input", {
      type: "text", inputmode: "decimal", class: "entrada-num",
      placeholder: "0.00", "aria-label": c.etiqueta, value: valor || ""
    });
    const marca = el("span", { class: "campo-veredicto" });

    function revisar() {
      const v = aNumero(input.value);
      const tol = c.tolerancia !== undefined ? c.tolerancia : 0.01;
      if (isNaN(v)) { marca.className = "campo-veredicto"; marca.textContent = ""; return null; }
      const ok = Math.abs(v - c.respuesta) <= tol;
      marca.className = "campo-veredicto " + (ok ? "bien" : "mal");
      marca.textContent = ok ? "✓" : "✗";
      return ok;
    }

    return {
      nodo: el("label", { class: "campo" }, [
        el("span", { class: "campo-etiqueta", html: c.etiqueta }),
        el("span", { class: "campo-entrada" }, [
          input, el("span", { class: "campo-unidad", text: c.unidad || "" }), marca
        ]),
        c.pista ? el("span", { class: "campo-pista", html: c.pista }) : null
      ]),
      input: input,
      revisar: revisar,
      valor: function () { return input.value; },
      objetivo: true
    };
  }

  function campoTexto(c, valor) {
    const area = el("textarea", {
      class: "entrada-texto", rows: String(c.lineas || 3),
      placeholder: c.marcador || "", "aria-label": c.etiqueta
    });
    area.value = valor || "";

    const contador = el("span", { class: "campo-conteo" });
    function cuenta() {
      const n = area.value.trim() ? area.value.trim().split(/\s+/).length : 0;
      const min = c.minimoPalabras || 0;
      contador.textContent = min
        ? EA.t("taller.palabrasDe", { n: n, min: min })
        : EA.t("taller.palabras", { n: n });
      contador.className = "campo-conteo" + (min && n >= min ? " suficiente" : "");
    }
    area.addEventListener("input", cuenta);
    cuenta();

    return {
      nodo: el("label", { class: "campo campo-largo" }, [
        el("span", { class: "campo-etiqueta", html: c.etiqueta }),
        area,
        el("span", { class: "campo-nota" }, [
          c.ayuda ? el("span", { class: "campo-pista", html: c.ayuda }) : el("span"),
          contador
        ])
      ]),
      input: area,
      revisar: function () { return null; },
      valor: function () { return area.value; },
      objetivo: false
    };
  }

  function campoOpcion(c, valor) {
    const sel = el("select", { class: "entrada-opcion", "aria-label": c.etiqueta });
    sel.appendChild(el("option", { value: "", text: EA.t("taller.elige") }));
    (c.opciones || []).forEach(function (o, i) {
      sel.appendChild(el("option", { value: String(i), text: o }));
    });
    if (valor !== undefined && valor !== "") sel.value = valor;

    const marca = el("span", { class: "campo-veredicto" });

    function revisar() {
      if (sel.value === "") { marca.className = "campo-veredicto"; marca.textContent = ""; return null; }
      const ok = Number(sel.value) === c.correcta;
      marca.className = "campo-veredicto " + (ok ? "bien" : "mal");
      marca.textContent = ok ? "✓" : "✗";
      return ok;
    }

    return {
      nodo: el("label", { class: "campo" }, [
        el("span", { class: "campo-etiqueta", html: c.etiqueta }),
        el("span", { class: "campo-entrada" }, [sel, marca]),
        c.pista ? el("span", { class: "campo-pista", html: c.pista }) : null
      ]),
      input: sel,
      revisar: revisar,
      valor: function () { return sel.value; },
      texto: function () {
        return sel.value === "" ? "" : (c.opciones || [])[Number(sel.value)];
      },
      objetivo: true
    };
  }

  function construyeCampo(c, valor, estado) {
    if (c.tipo === "texto") return campoTexto(c, valor);
    if (c.tipo === "opcion") return campoOpcion(c, valor);
    return campoNumero(c, valor, estado);
  }

  /* ---------- Render de una etapa ---------- */

  function renderEtapa(taller, indice, estado, alCambiar) {
    const etapa = taller.etapas[indice];
    const guardadoEtapa = estado[etapa.id] || (estado[etapa.id] = { campos: {} });
    const seccion = el("section", { class: "etapa", id: "etapa-" + etapa.id });

    /* Cabecera */
    seccion.appendChild(el("header", { class: "etapa-cabecera" }, [
      el("div", { class: "etapa-num", text: EA.t("taller.etapaN", { n: indice + 1, total: taller.etapas.length }) }),
      el("h2", { text: etapa.titulo }),
      etapa.objetivo ? el("p", { class: "etapa-objetivo", html: etapa.objetivo }) : null
    ]));

    /* Bloques de contexto: se reusa el render de conceptos */
    (etapa.bloques || []).forEach(function (b) {
      const copia = Object.assign({}, b);
      if (copia.cuerpo) copia.cuerpo = resolver(copia.cuerpo, estado, taller);
      seccion.appendChild(EA.vistas.renderBloque(copia));
    });

    if (!etapa.campos || !etapa.campos.length) return { nodo: seccion, revisar: function () {} };

    /* Campos */
    const caja = el("div", { class: "campos-taller" });
    const campos = [];
    etapa.campos.forEach(function (c) {
      const copia = Object.assign({}, c);
      copia.etiqueta = resolver(copia.etiqueta, estado, taller);
      if (copia.ayuda) copia.ayuda = resolver(copia.ayuda, estado, taller);
      if (copia.pista) copia.pista = resolver(copia.pista, estado, taller);

      const campo = construyeCampo(copia, guardadoEtapa.campos[c.id], estado);
      campo.def = c;
      campo.input.addEventListener("input", function () {
        guardadoEtapa.campos[c.id] = campo.texto ? campo.texto() : campo.valor();
        alCambiar();
      });
      campo.input.addEventListener("change", function () {
        guardadoEtapa.campos[c.id] = campo.texto ? campo.texto() : campo.valor();
        alCambiar();
      });
      campos.push(campo);
      caja.appendChild(campo.nodo);
    });
    seccion.appendChild(caja);

    /* Acciones */
    const acciones = el("div", { class: "acciones" });
    const objetivos = campos.filter(function (c) { return c.objetivo; });

    const veredicto = el("div", { class: "retro", hidden: true });

    if (objetivos.length) {
      const btnRevisar = el("button", { class: "btn primario", type: "button", text: EA.t("taller.revisar") });
      btnRevisar.addEventListener("click", function () {
        let bien = 0, contestados = 0;
        objetivos.forEach(function (c) {
          const r = c.revisar();
          if (r !== null) { contestados++; if (r) bien++; }
        });
        veredicto.hidden = false;
        veredicto.className = "retro " + (bien === objetivos.length ? "bien" : "mal");
        veredicto.innerHTML = "";
        veredicto.appendChild(el("div", {
          class: "veredicto",
          text: EA.t("taller.valores", { a: bien, b: objetivos.length })
        }));
        if (contestados < objetivos.length) {
          veredicto.appendChild(el("p", { text: EA.t("taller.faltan", { n: objetivos.length - contestados }) }));
        }
      });
      acciones.appendChild(btnRevisar);
    }

    if (etapa.solucion) {
      const btnSol = el("button", { class: "btn", type: "button", text: EA.t("taller.verSolucion") });
      const caja2 = el("div", { class: "bloque solucion", hidden: true }, [
        el("h4", { text: EA.t("taller.comoSale") }),
        el("div", { html: etapa.solucion })
      ]);
      btnSol.addEventListener("click", function () {
        caja2.hidden = !caja2.hidden;
        btnSol.textContent = caja2.hidden ? EA.t("taller.verSolucion") : EA.t("taller.ocultarSolucion");
      });
      acciones.appendChild(btnSol);
      seccion.appendChild(acciones);
      seccion.appendChild(veredicto);
      seccion.appendChild(caja2);
    } else {
      seccion.appendChild(acciones);
      seccion.appendChild(veredicto);
    }

    /* Rúbrica: para lo que no se puede autocalificar */
    if (etapa.rubrica && etapa.rubrica.length) {
      const lista = el("ul", { class: "rubrica" });
      const marcadas = guardadoEtapa.rubrica || (guardadoEtapa.rubrica = {});
      etapa.rubrica.forEach(function (r, i) {
        const chk = el("input", { type: "checkbox", id: etapa.id + "-r" + i });
        chk.checked = !!marcadas[i];
        chk.addEventListener("change", function () { marcadas[i] = chk.checked; alCambiar(); });
        lista.appendChild(el("li", {}, [chk, el("label", { for: etapa.id + "-r" + i, html: r })]));
      });
      seccion.appendChild(el("div", { class: "bloque rubrica-caja" }, [
        el("h4", { text: EA.t("taller.rubrica") }),
        el("p", { class: "sub", text: EA.t("taller.rubricaNota") }),
        lista
      ]));
    }

    /* Modelo de referencia: se revela aparte, después de escribir */
    if (etapa.modelo) {
      const btn = el("button", { class: "btn", type: "button", text: EA.t("taller.verModelo") });
      const caja3 = el("div", { class: "bloque modelo", hidden: true }, [
        el("h4", { text: EA.t("taller.modelo") }),
        el("p", { class: "sub", text: EA.t("taller.modeloNota") }),
        el("div", { html: etapa.modelo })
      ]);
      btn.addEventListener("click", function () {
        caja3.hidden = !caja3.hidden;
        btn.textContent = caja3.hidden ? EA.t("taller.verModelo") : EA.t("taller.ocultarModelo");
      });
      seccion.appendChild(el("div", { class: "acciones" }, [btn]));
      seccion.appendChild(caja3);
    }

    return { nodo: seccion, campos: campos };
  }

  /* ---------- Entregable ----------
     Se arma como documento con formato real —títulos, negritas, tablas—
     no como texto plano. Markdown no servía: el alumno entrega en Word y
     los ## y ** se pegaban literales. */

  function escapa(s) {
    return String(s === undefined || s === null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  /* Las etiquetas traen HTML de énfasis y a veces marcadores {{}}; se
     conserva el énfasis y se resuelven los marcadores contra lo escrito. */
  function etiquetaLimpia(texto, estado) {
    return String(texto || "")
      .replace(/\{\{([\w.-]+)\}\}/g, function (todo, ref) {
        const p = ref.split(".");
        const v = ((estado[p[0]] || {}).campos || {})[p[1]];
        return v === undefined || v === "" ? "—" : v;
      })
      .replace(/<(?!\/?(b|i|em|strong|code)\b)[^>]*>/gi, "");
  }

  /* Los párrafos que escribe el alumno respetan sus saltos de línea. */
  function parrafos(texto) {
    return String(texto || "").split(/\n{2,}/)
      .map(function (b) { return b.trim(); })
      .filter(Boolean)
      .map(function (b) { return "<p>" + escapa(b).replace(/\n/g, "<br>") + "</p>"; })
      .join("\n");
  }

  function armarEntregable(taller, estado, datos) {
    const d = datos || {};
    const partes = [];

    partes.push("<h1>" + escapa(taller.titulo) + "</h1>");
    partes.push("<p class='doc-caso'><b>" + escapa(taller.caso.nombre) + "</b> — "
      + escapa(taller.caso.resumen) + "</p>");

    const ficha = [];
    if (d.nombre) ficha.push([EA.t("taller.campoNombre"), d.nombre]);
    if (d.grupo) ficha.push([EA.t("taller.campoGrupo"), d.grupo]);
    ficha.push([EA.t("taller.campoFecha"), new Date().toLocaleDateString(EA.idioma() === "en" ? "en-US" : "es-MX",
      { year: "numeric", month: "long", day: "numeric" })]);
    partes.push("<table class='doc-ficha'><tbody>"
      + ficha.map(function (f) {
          return "<tr><td><b>" + escapa(f[0]) + "</b></td><td>" + escapa(f[1]) + "</td></tr>";
        }).join("")
      + "</tbody></table>");

    let n = 0;
    taller.etapas.forEach(function (etapa, i) {
      const g = estado[etapa.id] || { campos: {} };
      const conValor = (etapa.campos || []).filter(function (c) {
        const v = g.campos[c.id];
        return v !== undefined && String(v).trim() !== "";
      });
      if (!conValor.length) return;
      n++;

      partes.push("<h2>" + (i + 1) + ". " + escapa(etapa.titulo) + "</h2>");

      /* Los valores objetivos van en tabla: se leen mejor y Word las respeta. */
      const cortos = conValor.filter(function (c) { return c.tipo !== "texto"; });
      if (cortos.length) {
        partes.push("<table class='doc-datos'><thead><tr>"
          + "<th>" + escapa(EA.t("taller.colConcepto")) + "</th>"
          + "<th>" + escapa(EA.t("taller.colValor")) + "</th></tr></thead><tbody>"
          + cortos.map(function (c) {
              const v = g.campos[c.id];
              return "<tr><td>" + etiquetaLimpia(c.etiqueta, estado) + "</td><td>"
                + escapa(v) + (c.unidad ? " " + escapa(c.unidad) : "") + "</td></tr>";
            }).join("")
          + "</tbody></table>");
      }

      conValor.filter(function (c) { return c.tipo === "texto"; }).forEach(function (c) {
        partes.push("<h3>" + etiquetaLimpia(c.etiqueta, estado) + "</h3>");
        partes.push(parrafos(g.campos[c.id]));
      });
    });

    if (!n) partes.push("<p><i>" + escapa(EA.t("taller.sinRespuestas")) + "</i></p>");

    partes.push("<hr>");
    partes.push("<p class='doc-pie'>" + escapa(taller.pieEntregable || "") + "</p>");

    return partes.join("\n");
  }

  /* Documento completo para Word. El bloque de espacios de nombres es lo
     que hace que Word lo abra como documento y no como página web. */
  function documentoWord(titulo, cuerpo) {
    return "<html xmlns:o='urn:schemas-microsoft-com:office:office' "
      + "xmlns:w='urn:schemas-microsoft-com:office:word' "
      + "xmlns='http://www.w3.org/TR/REC-html40'>"
      + "<head><meta charset='utf-8'><title>" + escapa(titulo) + "</title>"
      + "<style>"
      + "body{font-family:Calibri,Arial,sans-serif;font-size:11pt;line-height:1.45;color:#000}"
      + "h1{font-size:20pt;margin:0 0 4pt}h2{font-size:14pt;margin:18pt 0 6pt;border-bottom:1pt solid #999;padding-bottom:2pt}"
      + "h3{font-size:11.5pt;margin:12pt 0 3pt}"
      + ".doc-caso{color:#444;margin:0 0 12pt}"
      + "table{border-collapse:collapse;margin:6pt 0 10pt}"
      + "td,th{border:.5pt solid #999;padding:4pt 7pt;vertical-align:top;font-size:10.5pt}"
      + "th{background:#eee;text-align:left}"
      + ".doc-ficha td{border:none;padding:1pt 10pt 1pt 0}"
      + ".doc-pie{font-size:9pt;color:#666}"
      + "</style></head><body>" + cuerpo + "</body></html>";
  }

  function descargarWord(nombre, titulo, cuerpo) {
    try {
      const blob = new Blob(["﻿" + documentoWord(titulo, cuerpo)],
                            { type: "application/msword;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url; a.download = nombre;
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
      return true;
    } catch (e) { return false; }
  }

  /* Copia conservando el formato: se ofrecen las dos versiones del
     portapapeles y Word toma la de HTML. Si la API no está disponible
     —contexto no seguro, navegador viejo— se copia la selección, que
     también llega con formato. */
  function copiarConFormato(nodo, alTerminar) {
    const html = nodo.innerHTML;
    const plano = nodo.innerText;

    function porSeleccion() {
      try {
        const sel = window.getSelection();
        const rango = document.createRange();
        rango.selectNodeContents(nodo);
        sel.removeAllRanges(); sel.addRange(rango);
        const ok = document.execCommand("copy");
        sel.removeAllRanges();
        alTerminar(ok);
      } catch (e) { alTerminar(false); }
    }

    if (window.ClipboardItem && navigator.clipboard && navigator.clipboard.write) {
      try {
        navigator.clipboard.write([new ClipboardItem({
          "text/html": new Blob([html], { type: "text/html" }),
          "text/plain": new Blob([plano], { type: "text/plain" })
        })]).then(function () { alTerminar(true); }, porSeleccion);
        return;
      } catch (e) { /* cae a la selección */ }
    }
    porSeleccion();
  }

  /* ---------- Página ---------- */

  function crear(destino, indice) {
    const taller = EA.obtenerTaller();
    if (!taller || !taller.etapas) return;

    const estado = leer();
    let actual = 0;

    /* Índice lateral */
    const nav = el("ol", { class: "taller-indice" });
    const enlaces = [];
    taller.etapas.forEach(function (e, i) {
      const b = el("button", { type: "button", class: "paso-indice" }, [
        el("span", { class: "paso-num", text: String(i + 1) }),
        el("span", { class: "paso-titulo", text: e.titulo })
      ]);
      b.addEventListener("click", function () { ir(i); });
      enlaces.push(b);
      nav.appendChild(el("li", {}, [b]));
    });
    if (indice) indice.appendChild(nav);

    const contenedor = el("div", { class: "taller-etapa" });
    const barra = el("div", { class: "taller-barra" });
    destino.appendChild(barra);
    destino.appendChild(contenedor);

    function completadas() {
      let n = 0;
      taller.etapas.forEach(function (e) {
        const g = estado[e.id];
        if (!g) return;
        const total = (e.campos || []).length;
        if (!total) return;
        const llenos = (e.campos || []).filter(function (c) {
          const v = g.campos[c.id];
          return v !== undefined && String(v).trim() !== "";
        }).length;
        if (llenos === total) n++;
      });
      return n;
    }

    function pintaBarra() {
      const conCampos = taller.etapas.filter(function (e) { return (e.campos || []).length; }).length;
      const hechas = completadas();
      barra.innerHTML = "";
      barra.appendChild(el("div", { class: "pista" }, [
        el("div", { class: "relleno", style: "width:" + Math.round((hechas / conCampos) * 100) + "%" })
      ]));
      barra.appendChild(el("span", { text: EA.t("taller.completadas", { a: hechas, b: conCampos }) }));
      enlaces.forEach(function (b, i) {
        b.setAttribute("aria-current", i === actual ? "step" : "false");
        const e = taller.etapas[i];
        const g = estado[e.id];
        const total = (e.campos || []).length;
        const llenos = g ? (e.campos || []).filter(function (c) {
          const v = g.campos[c.id];
          return v !== undefined && String(v).trim() !== "";
        }).length : 0;
        b.classList.toggle("hecha", total > 0 && llenos === total);
      });
    }

    function alCambiar() { guardar(estado); pintaBarra(); }

    function ir(i) {
      actual = Math.max(0, Math.min(taller.etapas.length - 1, i));
      contenedor.innerHTML = "";
      const r = renderEtapa(taller, actual, estado, alCambiar);
      contenedor.appendChild(r.nodo);

      /* Navegación entre etapas */
      const pie = el("div", { class: "acciones taller-pasos" });
      if (actual > 0) {
        const ant = el("button", { class: "btn", type: "button", text: EA.t("taller.anterior") });
        ant.addEventListener("click", function () { ir(actual - 1); });
        pie.appendChild(ant);
      }
      if (actual < taller.etapas.length - 1) {
        const sig = el("button", { class: "btn primario", type: "button", text: EA.t("taller.siguiente") });
        sig.addEventListener("click", function () { ir(actual + 1); });
        pie.appendChild(sig);
      } else {
        const fin = el("button", { class: "btn primario", type: "button", text: EA.t("taller.armar") });
        fin.addEventListener("click", entregable);
        pie.appendChild(fin);
      }
      contenedor.appendChild(pie);
      pintaBarra();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function entregable() {
      contenedor.innerHTML = "";
      const datos = estado.__portada || (estado.__portada = {});

      /* Datos de identificación: se guardan como todo lo demás */
      function campoIdent(clave, etiqueta) {
        const input = el("input", {
          type: "text", class: "entrada-ident", value: datos[clave] || "",
          placeholder: etiqueta, "aria-label": etiqueta
        });
        input.addEventListener("input", function () {
          datos[clave] = input.value; guardar(estado); repinta();
        });
        return el("label", { class: "campo-ident" }, [
          el("span", { class: "campo-etiqueta", text: etiqueta }), input
        ]);
      }

      const vista = el("div", { class: "entregable" });

      function repinta() {
        vista.innerHTML = armarEntregable(taller, estado, datos);
      }
      repinta();

      const acciones = el("div", { class: "acciones" });

      const copiar = el("button", { class: "btn primario", type: "button", text: EA.t("taller.copiarWord") });
      copiar.addEventListener("click", function () {
        copiarConFormato(vista, function (ok) {
          copiar.textContent = ok ? EA.t("taller.copiado") : EA.t("taller.noCopio");
          setTimeout(function () { copiar.textContent = EA.t("taller.copiarWord"); }, 3500);
        });
      });

      const bajar = el("button", { class: "btn", type: "button", text: EA.t("taller.descargarWord") });
      bajar.addEventListener("click", function () {
        const ok = descargarWord((taller.archivo || "entregable") + ".doc",
                                 taller.titulo, vista.innerHTML);
        bajar.textContent = ok ? EA.t("taller.descargado") : EA.t("taller.noDescargo");
        setTimeout(function () { bajar.textContent = EA.t("taller.descargarWord"); }, 3500);
      });

      const imprimir = el("button", { class: "btn", type: "button", text: EA.t("taller.imprimir") });
      imprimir.addEventListener("click", function () { window.print(); });

      const volver = el("button", { class: "btn sutil", type: "button", text: EA.t("taller.volver") });
      volver.addEventListener("click", function () { ir(taller.etapas.length - 1); });

      acciones.appendChild(copiar);
      acciones.appendChild(bajar);
      acciones.appendChild(imprimir);
      acciones.appendChild(volver);

      contenedor.appendChild(el("section", { class: "etapa cierre" }, [
        el("header", { class: "etapa-cabecera" }, [
          el("div", { class: "etapa-num", text: EA.t("taller.cierre") }),
          el("h2", { text: EA.t("taller.tuEntregable") }),
          el("p", { class: "etapa-objetivo", text: EA.t("taller.entregableNota") })
        ]),
        el("div", { class: "identificacion" }, [
          campoIdent("nombre", EA.t("taller.campoNombre")),
          campoIdent("grupo", EA.t("taller.campoGrupo"))
        ]),
        acciones,
        vista
      ]));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    /* Reiniciar: borra solo lo de este taller */
    const reiniciar = el("button", { class: "btn sutil", type: "button", text: EA.t("taller.reiniciar") });
    reiniciar.addEventListener("click", function () {
      if (!window.confirm(EA.t("taller.confirmarReinicio"))) return;
      Object.keys(estado).forEach(function (k) { delete estado[k]; });
      guardar(estado);
      ir(0);
    });
    if (indice) indice.appendChild(el("div", { class: "taller-reinicio" }, [reiniciar]));

    ir(0);
  }

  EA.taller = { crear: crear, armarEntregable: armarEntregable };
})(window.EA);
