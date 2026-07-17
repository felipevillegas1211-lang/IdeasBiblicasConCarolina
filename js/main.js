(function () {
  "use strict";

  var STORAGE_KEY = "ibc-lang";
  var supported = ["es", "en"];

  function detectDefaultLang() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored && supported.indexOf(stored) !== -1) return stored;
    var browserLang = (navigator.language || "es").slice(0, 2);
    return supported.indexOf(browserLang) !== -1 ? browserLang : "es";
  }

  function applyLang(lang) {
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-" + lang + "]").forEach(function (el) {
      el.innerHTML = el.getAttribute("data-" + lang);
    });

    document
      .querySelectorAll("[data-" + lang + "-placeholder]")
      .forEach(function (el) {
        el.setAttribute("placeholder", el.getAttribute("data-" + lang + "-placeholder"));
      });

    document.querySelectorAll("[data-" + lang + "-title]").forEach(function (el) {
      el.setAttribute("title", el.getAttribute("data-" + lang + "-title"));
    });

    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && metaDesc.hasAttribute("data-" + lang)) {
      metaDesc.setAttribute("content", metaDesc.getAttribute("data-" + lang));
    }

    document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
    });

    localStorage.setItem(STORAGE_KEY, lang);
  }

  function initLangToggle() {
    var lang = detectDefaultLang();
    applyLang(lang);

    document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLang(btn.getAttribute("data-lang"));
      });
    });
  }

  function initMobileNav() {
    var toggle = document.querySelector(".nav-toggle");
    var menu = document.querySelector(".nav-mobile");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initYear() {
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initLangToggle();
    initMobileNav();
    initYear();
  });
})();
