"use client";

import { useEffect, useState } from "react";

/** Lets visitors stop all looping animations (WCAG 2.2.2 Pause, Stop, Hide). */
export function MotionToggle() {
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem("motion");
    } catch {}
    if (saved === "off") setPaused(true);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.motion = paused ? "off" : "on";
    try {
      localStorage.setItem("motion", paused ? "off" : "on");
    } catch {}
  }, [paused]);

  return (
    <button type="button" className="motion-toggle" aria-pressed={paused} onClick={() => setPaused((p) => !p)}>
      <span className="motion-icon" aria-hidden="true">
        {paused ? (
          <svg width="12" height="12" viewBox="0 0 12 12"><path d="M3 1.5v9l7.5-4.5z" fill="currentColor" /></svg>
        ) : (
          <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2.5 1.5h2.5v9H2.5zM7 1.5h2.5v9H7z" fill="currentColor" /></svg>
        )}
      </span>
      {paused ? "Play animations" : "Pause animations"}
    </button>
  );
}
