"use client";

type Theme = "light" | "dark";

const storageKey = "portfolio-theme";

function getThemeFromDocument(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  localStorage.setItem(storageKey, theme);
}

export function ThemeToggle() {
  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label="Toggle dark and light mode"
      onClick={() => {
        const theme = getThemeFromDocument();
        const nextTheme = theme === "dark" ? "light" : "dark";
        applyTheme(nextTheme);
      }}
    >
      <span aria-hidden="true">◐</span>
      <span>Theme</span>
    </button>
  );
}
