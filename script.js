(function () {
  "use strict";

  const storageKey = "aaron-gulzar-portfolio-theme";
  const root = document.documentElement;
  const themeToggle = document.querySelector(".theme-toggle");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const year = document.querySelector("#year");
  const mobileQuery = window.matchMedia("(max-width: 900px)");

  function getPreferredTheme() {
    try {
      const stored = window.localStorage.getItem(storageKey);
      if (stored === "dark" || stored === "light") return stored;
    } catch (_error) {
      // The current page still supports both themes when storage is unavailable.
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function setTheme(theme, persist = true) {
    root.dataset.theme = theme;
    if (persist) {
      try { window.localStorage.setItem(storageKey, theme); } catch (_error) { /* Optional persistence. */ }
    }
    const isDark = theme === "dark";
    if (themeToggle) {
      themeToggle.setAttribute("aria-pressed", String(isDark));
      themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
      const label = themeToggle.querySelector(".theme-label");
      if (label) label.textContent = isDark ? "Light" : "Dark";
    }
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.content = isDark ? "#20231f" : "#f9f8f5";
  }

  function setMenu(open, returnFocus = false) {
    if (!menuToggle || !navLinks) return;
    navLinks.dataset.open = String(open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    if (returnFocus) menuToggle.focus();
  }

  setTheme(getPreferredTheme());
  window.addEventListener("storage", (event) => {
    if (event.key === storageKey || event.key === null) setTheme(getPreferredTheme(), false);
  });
  window.addEventListener("pageshow", () => setTheme(getPreferredTheme(), false));
  themeToggle?.addEventListener("click", () => setTheme(root.dataset.theme === "dark" ? "light" : "dark"));
  menuToggle?.addEventListener("click", () => setMenu(navLinks?.dataset.open !== "true"));
  navLinks?.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (!link) return;
    setMenu(false);
    // Keep focus in the document after a mobile anchor closes its navigation.
    const url = new URL(link.href);
    if (mobileQuery.matches && url.pathname === location.pathname && url.hash) {
      const target = document.getElementById(url.hash.slice(1));
      if (target) {
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
        target.addEventListener("blur", () => target.removeAttribute("tabindex"), { once: true });
      }
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navLinks?.dataset.open === "true") setMenu(false, true);
  });
  document.addEventListener("click", (event) => {
    if (navLinks?.dataset.open === "true" && !event.target.closest(".nav-menu")) setMenu(false);
  });
  document.querySelector(".site-header")?.addEventListener("focusout", () => {
    window.setTimeout(() => {
      if (navLinks?.dataset.open === "true" && !document.activeElement?.closest(".site-header")) setMenu(false);
    }, 0);
  });
  mobileQuery.addEventListener("change", (event) => { if (!event.matches) setMenu(false); });

  // A small reading aid; navigation and all case-study text are ordinary HTML.
  const toc = document.querySelector(".case-index");
  if (toc && "IntersectionObserver" in window) {
    const links = [...toc.querySelectorAll('a[href^="#"]')];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting);
      if (!visible.length) return;
      const id = visible[0].target.id;
      links.forEach((link) => {
        if (link.hash === "#" + id) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }, { rootMargin: "-15% 0px -65% 0px" });
    document.querySelectorAll(".project-section[id]").forEach((section) => observer.observe(section));
  }
  if (year) year.textContent = String(new Date().getFullYear());
})();
