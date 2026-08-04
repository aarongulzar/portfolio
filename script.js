(function () {
  "use strict";

  const storageKey = "aaron-gulzar-portfolio-theme";
  const root = document.documentElement;
  const themeToggle = document.querySelector(".theme-toggle");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const year = document.querySelector("#year");

  function getPreferredTheme() {
    try {
      const storedTheme = window.localStorage.getItem(storageKey);
      if (storedTheme === "dark" || storedTheme === "light") {
        return storedTheme;
      }
    } catch (_error) {
      // Continue with the operating-system preference if storage is unavailable.
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function setTheme(theme) {
    root.dataset.theme = theme;

    try {
      window.localStorage.setItem(storageKey, theme);
    } catch (_error) {
      // Theme selection still works for the current page without storage.
    }

    if (themeToggle) {
      const isDark = theme === "dark";
      themeToggle.setAttribute("aria-pressed", isDark.toString());
      themeToggle.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode",
      );
    }
  }

  function closeMenu() {
    if (!menuToggle || !navLinks) return;
    navLinks.dataset.open = "false";
    menuToggle.setAttribute("aria-expanded", "false");
  }

  setTheme(getPreferredTheme());

  themeToggle?.addEventListener("click", function () {
    setTheme(root.dataset.theme === "dark" ? "light" : "dark");
  });

  menuToggle?.addEventListener("click", function () {
    if (!navLinks) return;
    const isOpen = navLinks.dataset.open === "true";
    navLinks.dataset.open = (!isOpen).toString();
    menuToggle.setAttribute("aria-expanded", (!isOpen).toString());
  });

  navLinks?.addEventListener("click", function (event) {
    if (event.target instanceof HTMLAnchorElement) closeMenu();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeMenu();
  });

  window.matchMedia("(min-width: 761px)").addEventListener("change", function (event) {
    if (event.matches) closeMenu();
  });

  if (year) year.textContent = new Date().getFullYear().toString();
})();
