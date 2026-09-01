/* ============================================================
   nucleo.js — registro de contenido, tema, idioma y utilidades
   Se carga ANTES que idioma.js y que cualquier archivo de /data.
   ============================================================ */

window.EA = (function () {
  const semanas = {};
  const semanasEn = {};
  let curso = {
    titulo: "Diseño de Procesos y Arquitectura Empresarial",
    subtitulo: "Curso de 5 semanas",
    caso: "",
    totalSemanas: 5
  };
  let cursoEn = null;

  /* Atajo al diccionario; idioma.js se carga después de este archivo,
     pero t() solo se invoca en tiempo de render. */
  function T(clave, vars) {
    return window.EA && window.EA.t ? window.EA.t(clave, vars) : clave;
  }

  function enIngles() {
    return document.documentElement.getAttribute("data-idioma") === "en";
  }

  /* ---------- Registro de contenido ---------- */
  function registrarCurso(meta) { curso = Object.assign(curso, meta); }
  function registrarCursoEn(meta) { cursoEn = Object.assign(cursoEn || {}, meta); }

  function registrarSemana(def) {
    if (!def || !def.id) { console.error("Semana sin id", def); return; }
    semanas[String(def.id)] = def;
  }

  function registrarSemanaEn(def) {
    if (!def || !def.id) { console.error("Semana en inglés sin id", def); return; }
    semanasEn[String(def.id)] = def;
  }

  /* Devuelve la versión del idioma activo, con respaldo al español.
     El respaldo es a nivel de semana completa: una semana sin traducir
     se muestra en español en lugar de quedar vacía. */
  function obtenerSemana(id) {
    const k = String(id);
    if (enIngles() && semanasEn[k]) return semanasEn[k];
    return semanas[k] || null;
  }

  function listaSemanas() {
    return Object.keys(semanas)
      .map(function (k) { return obtenerSemana(k); })
      .filter(Boolean)
      .sort(function (a, b) { return a.id - b.id; });
  }

  function obtenerCurso() {
    return enIngles() && cursoEn ? Object.assign({}, curso, cursoEn) : curso;
  }

  /* ---------- Catálogo de casos ----------
     Vive aquí y no en casos.js porque los archivos de /data se cargan
     antes que el JS de la página: si el registro estuviera en casos.js,
     data/en/casos.js se ejecutaría sin tener a quién llamar. */
  let casos = { categorias: [], casos: [], practica: {} };
  let casosEn = null;

  function registrarCasos(def) { casos = Object.assign(casos, def || {}); }
  function registrarCasosEn(def) { casosEn = Object.assign(casosEn || {}, def || {}); }

  /* Respaldo por catálogo completo: sin traducción, se muestra el español. */
  function obtenerCasos() {
    return (enIngles() && casosEn && (casosEn.casos || []).length) ? casosEn : casos;
  }

  /* ---------- Conteo de reactivos ---------- */
  function contarReactivos(semana) {
    const p = (semana && semana.practica) || {};
    return (p.opcionMultiple || []).length
         + (p.escenarios || []).length
         + (p.clasificar || []).length
         + (p.ordenar || []).length
         + (p.calculos || []).length
         + (p.flashcards || []).length;
  }

  /* ---------- Tema claro / oscuro ---------- */
  const CLAVE_TEMA = "ea:tema";

  function temaInicial() {
    let guardado = null;
    try { guardado = localStorage.getItem(CLAVE_TEMA); } catch (e) { /* modo privado */ }
    if (guardado === "claro" || guardado === "oscuro") return guardado;
    // Respeta el tema del contenedor si la página está incrustada (data-theme)
    const host = document.documentElement.getAttribute("data-theme");
    if (host === "dark") return "oscuro";
    if (host === "light") return "claro";
    const prefiereOscuro = window.matchMedia
      && window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefiereOscuro ? "oscuro" : "claro";
  }

  function aplicarTema(t) {
    document.documentElement.setAttribute("data-tema", t);
    try { localStorage.setItem(CLAVE_TEMA, t); } catch (e) { /* ignorar */ }
    const btn = document.querySelector(".btn-tema");
    if (btn) {
      btn.textContent = t === "oscuro" ? "☀" : "☾";
      btn.setAttribute("aria-label", t === "oscuro" ? T("tema.aClaro") : T("tema.aOscuro"));
    }
  }

  function alternarTema() {
    const actual = document.documentElement.getAttribute("data-tema");
    aplicarTema(actual === "oscuro" ? "claro" : "oscuro");
  }

  /* ---------- Progreso local (mejor esfuerzo) ---------- */
  const CLAVE_PROG = "ea:progreso";

  function leerProgreso() {
    try { return JSON.parse(localStorage.getItem(CLAVE_PROG) || "{}"); }
    catch (e) { return {}; }
  }

  function guardarResultado(semanaId, modo, aciertos, total) {
    try {
      const p = leerProgreso();
      const k = "s" + semanaId;
      p[k] = p[k] || {};
      const previo = p[k][modo];
      const pct = total ? Math.round((aciertos / total) * 100) : 0;
      if (!previo || pct >= previo.pct) {
        p[k][modo] = { pct: pct, aciertos: aciertos, total: total, fecha: new Date().toISOString().slice(0, 10) };
      }
      localStorage.setItem(CLAVE_PROG, JSON.stringify(p));
    } catch (e) { /* el progreso es opcional */ }
  }

  function mejorPorSemana(semanaId) {
    const p = leerProgreso()["s" + semanaId];
    if (!p) return null;
    const modos = Object.values(p);
    if (!modos.length) return null;
    const suma = modos.reduce((a, m) => a + m.pct, 0);
    return { promedio: Math.round(suma / modos.length), modos: p };
  }

  /* ---------- Utilidades ---------- */
  function el(tag, props, hijos) {
    const n = document.createElement(tag);
    if (props) {
      for (const k in props) {
        if (k === "class") n.className = props[k];
        else if (k === "html") n.innerHTML = props[k];
        else if (k === "text") n.textContent = props[k];
        else if (k.startsWith("on") && typeof props[k] === "function") n.addEventListener(k.slice(2), props[k]);
        else if (props[k] !== null && props[k] !== undefined) n.setAttribute(k, props[k]);
      }
    }
    (hijos || []).forEach(function (h) {
      if (h === null || h === undefined) return;
      n.appendChild(typeof h === "string" ? document.createTextNode(h) : h);
    });
    return n;
  }

  function barajar(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function parametro(nombre, porDefecto) {
    const v = new URLSearchParams(window.location.search).get(nombre);
    return v === null ? porDefecto : v;
  }

  /* ---------- Cabecera y pie comunes ---------- */
  function montarCascaron(paginaActual) {
    const c = obtenerCurso();

    // Traduce el marcado estático antes de construir el cascarón
    if (window.EA && window.EA.traducirDocumento) window.EA.traducirDocumento();

    const header = document.querySelector("header.sitio .barra");
    if (header) {
      const enlaces = [{ href: "index.html", texto: T("nav.inicio"), id: "inicio" }];
      listaSemanas().forEach(function (s) {
        enlaces.push({
          href: s.estado === "publicada" ? "semana.html?s=" + s.id : null,
          texto: (window.EA && window.EA.esIngles && window.EA.esIngles() ? "W" : "S") + s.id,
          id: "semana-" + s.id,
          inactivo: s.estado !== "publicada"
        });
      });
      enlaces.push({ href: "casos.html", texto: T("nav.casos"), id: "casos" });
      enlaces.push({ href: "glosario.html", texto: T("nav.glosario"), id: "glosario" });

      const nav = el("nav", { class: "nav" });
      enlaces.forEach(function (e) {
        if (e.inactivo) {
          nav.appendChild(el("a", { class: "inactivo", title: T("nav.proximamente"), style: "opacity:.4;cursor:default" }, [e.texto]));
        } else {
          nav.appendChild(el("a", {
            href: e.href,
            "aria-current": e.id === paginaActual ? "page" : null
          }, [e.texto]));
        }
      });

      if (window.EA && window.EA.conmutadorIdioma) {
        nav.appendChild(window.EA.conmutadorIdioma());
      }

      const btn = el("button", { class: "btn-tema", onclick: alternarTema, type: "button" });
      nav.appendChild(btn);

      header.appendChild(el("a", { class: "marca", href: "index.html" }, [
        el("span", { class: "logo", text: "AE" }),
        el("span", {}, [
          el("strong", { text: T("marca.titulo") }),
          el("span", { text: c.subtitulo || "" })
        ])
      ]));
      header.appendChild(nav);
    }
    aplicarTema(temaInicial());

    const pie = document.querySelector("footer.sitio .contenedor");
    if (pie) {
      pie.appendChild(el("div", { class: "pie-autoria" }, [
        el("strong", { text: c.titulo }),
        el("span", {}, [
          document.createTextNode(T("pie.generadoPor")),
          el("a", { href: "mailto:" + (c.correo || ""), class: "pie-correo", text: c.correo || "" })
        ])
      ]));
      pie.appendChild(el("div", { class: "pie-legal" }, [
        el("a", { href: "aviso-legal.html", text: T("pie.aviso") }),
        el("span", { text: T("pie.apoyo", { anio: new Date().getFullYear() }) })
      ]));
    }
  }

  return {
    registrarCurso, registrarCursoEn,
    registrarSemana, registrarSemanaEn,
    registrarCasos, registrarCasosEn, obtenerCasos,
    obtenerSemana, listaSemanas, obtenerCurso,
    contarReactivos, aplicarTema, alternarTema, temaInicial,
    guardarResultado, mejorPorSemana, leerProgreso,
    el, barajar, parametro, montarCascaron
  };
})();

/* Aplica el tema lo antes posible para evitar parpadeo */
document.documentElement.setAttribute("data-tema", window.EA.temaInicial());
