(function () {
  function addCopyButtons() {
    document.querySelectorAll(".rst-content pre").forEach(function (pre) {
      if (pre.querySelector(".copy-command")) return;

      var code = pre.querySelector("code");
      if (!code) return;

      var button = document.createElement("button");
      button.className = "copy-command";
      button.type = "button";
      button.textContent = "Copiar";
      button.setAttribute("aria-label", "Copiar código");

      button.addEventListener("click", async function () {
        var text = code.innerText;

        try {
          await navigator.clipboard.writeText(text);
          button.textContent = "Copiado";
        } catch (error) {
          var area = document.createElement("textarea");
          area.value = text;
          area.style.position = "fixed";
          area.style.opacity = "0";
          document.body.appendChild(area);
          area.select();
          var ok = document.execCommand("copy");
          area.remove();
          button.textContent = ok ? "Copiado" : "No disponible";
        }

        window.setTimeout(function () {
          button.textContent = "Copiar";
        }, 1600);
      });

      pre.appendChild(button);
    });
  }

  document.addEventListener("DOMContentLoaded", addCopyButtons);
  addCopyButtons();
})();

/* ==========================================================================
   TEMA CLARO / OSCURO · figuras SVG · tablas · ampliación de figuras
   (lógica de colores portada de figuras-1-15-temas.html)
   ========================================================================== */
(function () {
  "use strict";

  var KEY = "netfigs-theme";
  var GROSOR = 1.4;
  var FONDO_CLARO = "#fcfdff", FONDO_OSCURO = "#2a2a2a";
  var INK_CLARO = "#1a1a1a", INK_OSCURO = "#e5e5e5";

  var LIGHT_TINT = new Set([
    "#fbe6e6", "#e6ecfa", "#e6f4ee", "#f2ebfd", "#fcebe6", "#ebedf0",
    "#f4bfbf", "#bfcff2", "#bfe4d4", "#decefa", "#f6cebf", "#cdd3da"
  ]);
  var DARK_FILL = new Set([
    "#d40000", "#7f1d1d", "#003ecc", "#1e3a8a", "#009254", "#065f46",
    "#7c3aed", "#5b21b6", "#dd3a00", "#7c2d12", "#364e6c", "#1e3a5f"
  ]);

  var originals = new WeakMap();

  function isText(el) {
    var t = el.tagName.toLowerCase();
    return t === "text" || t === "tspan";
  }

  function store(svg) {
    if (originals.has(svg)) return;
    var map = new Map();
    svg.querySelectorAll("*").forEach(function (el) {
      var f = el.getAttribute("fill"), s = el.getAttribute("stroke"), w = el.getAttribute("stroke-width");
      if (f !== null || s !== null || w !== null) map.set(el, { fill: f, stroke: s, sw: w });
    });
    originals.set(svg, map);
  }

  function isDark() { return document.documentElement.classList.contains("dark"); }

  function applyFigureTheme(root) {
    var dark = isDark();
    var FONDO = dark ? FONDO_OSCURO : FONDO_CLARO;
    var INK = dark ? INK_OSCURO : INK_CLARO;

    (root || document).querySelectorAll(".diagram svg").forEach(function (svg) {
      store(svg);
      originals.get(svg).forEach(function (o, el) {
        if (o.fill !== null) el.setAttribute("fill", o.fill); else el.removeAttribute("fill");
        if (o.stroke !== null) el.setAttribute("stroke", o.stroke); else el.removeAttribute("stroke");
        if (o.sw !== null) el.setAttribute("stroke-width", o.sw); else el.removeAttribute("stroke-width");
      });

      if (!dark) return; // el modo claro conserva el diseño original sin cambios

      svg.querySelectorAll("[fill]").forEach(function (el) {
        var fill = (el.getAttribute("fill") || "").toLowerCase();
        if (isText(el)) { el.setAttribute("fill", INK); return; }
        if (LIGHT_TINT.has(fill)) { el.setAttribute("fill", FONDO); return; }
        if (DARK_FILL.has(fill)) {
          el.setAttribute("fill", FONDO);
          if (!el.getAttribute("stroke")) {
            el.setAttribute("stroke", fill);
            if (!el.getAttribute("stroke-width")) el.setAttribute("stroke-width", "2");
          }
          return;
        }
        if (fill === "#ffffff") {
          var tag = el.tagName.toLowerCase();
          var r = parseFloat(el.getAttribute("r") || "0");
          var w = parseFloat(el.getAttribute("width") || "0");
          var h = parseFloat(el.getAttribute("height") || "0");
          if ((tag === "circle" && r > 0 && r < 6) || (tag === "rect" && w > 0 && w < 6 && h < 14)) {
            el.setAttribute("fill", INK);
          }
        }
      });

      svg.querySelectorAll("[stroke]").forEach(function (el) {
        if (isText(el)) return;
        if ((el.getAttribute("stroke") || "").toLowerCase() === "#ffffff") el.setAttribute("stroke", INK);
      });

      svg.querySelectorAll("[stroke]").forEach(function (el) {
        if (isText(el)) return;
        var s = el.getAttribute("stroke");
        if (!s || s === "none") return;
        var w = parseFloat(el.getAttribute("stroke-width")) || 2;
        el.setAttribute("stroke-width", (w * GROSOR).toFixed(2));
      });
    });
  }

  function updateIcon() {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;
    btn.textContent = isDark() ? "\u2600\uFE0F" : "\uD83C\uDF19";
    btn.title = isDark() ? "Cambiar a tema claro" : "Cambiar a tema oscuro";
    btn.setAttribute("aria-label", btn.title);
  }

  function setDark(dark, persist) {
    document.documentElement.classList.toggle("dark", dark);
    if (persist) { try { localStorage.setItem(KEY, dark ? "dark" : "light"); } catch (e) {} }
    applyFigureTheme();
    updateIcon();
  }

  function initialDark() {
    var saved = null;
    try { saved = localStorage.getItem(KEY); } catch (e) {}
    if (saved === "dark") return true;
    if (saved === "light") return false;
    return !!(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
  }

  // Tablas: contenedor con desplazamiento horizontal en pantallas estrechas
  function wrapTables() {
    document.querySelectorAll(".rst-content table").forEach(function (t) {
      if (t.parentElement.classList.contains("table-wrap")) return;
      var wrap = document.createElement("div");
      wrap.className = "table-wrap";
      t.parentNode.insertBefore(wrap, t);
      wrap.appendChild(t);
    });
  }

  // Ampliar figura al hacer clic
  function bindZoom() {
    document.addEventListener("click", function (ev) {
      var overlay = document.querySelector(".fig-overlay");
      if (overlay) { overlay.remove(); return; }
      var d = ev.target.closest && ev.target.closest(".rst-content .diagram");
      if (!d) return;
      var svg = d.querySelector("svg");
      var vb = svg && svg.viewBox && svg.viewBox.baseVal;
      var ov = document.createElement("div");
      ov.className = "fig-overlay";
      if (vb && vb.height) ov.style.setProperty("--fig-ratio", (vb.width / vb.height).toFixed(3));
      ov.appendChild(d.cloneNode(true));
      document.body.appendChild(ov);
    });
    document.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape") { var o = document.querySelector(".fig-overlay"); if (o) o.remove(); }
    });
  }

  function init() {
    if (!document.getElementById("theme-toggle")) {
      var b = document.createElement("button");
      b.id = "theme-toggle"; b.type = "button";
      b.addEventListener("click", function () { setDark(!isDark(), true); });
      document.body.appendChild(b);
    }
    wrapTables();
    setDark(initialDark(), false);
    bindZoom();
    if (window.matchMedia) {
      var mq = window.matchMedia("(prefers-color-scheme: dark)");
      var h = function (e) {
        var saved = null; try { saved = localStorage.getItem(KEY); } catch (x) {}
        if (!saved) setDark(e.matches, false);
      };
      if (mq.addEventListener) mq.addEventListener("change", h);
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
