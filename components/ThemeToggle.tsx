"use client";

import { Icon } from "./Icon";

function currentTheme(): "light" | "dark" {
  const set = document.documentElement.dataset.theme;
  if (set === "light" || set === "dark") return set;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeToggle() {
  function toggle() {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // storage unavailable; the choice lasts for this page view only
    }
  }

  return (
    <button type="button" className="icon-btn" onClick={toggle} aria-label="Switch light or dark theme">
      <Icon name="sun" className="show-dark" />
      <Icon name="moon" className="show-light" />
    </button>
  );
}

// Runs before paint so a saved theme never flashes the wrong colors.
export const themeScript = `document.documentElement.classList.add("js");try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t;if(localStorage.getItem("motion")==="off")document.documentElement.dataset.motion="off"}catch(e){}`;
