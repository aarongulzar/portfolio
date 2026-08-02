(function () {
  const storageKey = "aaron-gulzar-portfolio-theme";
  const root = document.documentElement;
  const toggle = document.querySelector(".theme-toggle");
  const year = document.querySelector("#year");

  function preferredTheme() {
    const storedTheme = window.localStorage.getItem(storageKey);
    if (storedTheme === "dark" || storedTheme === "light") {
      return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function setTheme(theme) {
    root.dataset.theme = theme;
    window.localStorage.setItem(storageKey, theme);

    if (toggle) {
      toggle.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
      );
    }
  }

  setTheme(preferredTheme());

  if (toggle) {
    toggle.addEventListener("click", function () {
      const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
      setTheme(nextTheme);
    });
  }

  if (year) {
    year.textContent = new Date().getFullYear().toString();
  }
})();
