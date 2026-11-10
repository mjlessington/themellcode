"use client";

import { useEffect, useState } from "react";

const GLYPHS = "!<>-_\\/[]{}=+*^?#01";

function motionAllowed() {
  return (
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
    document.documentElement.dataset.motion !== "off"
  );
}

/**
 * Text that "decodes" from random glyphs on load. Screen readers get the
 * real text from a visually hidden copy; the animated copy is aria-hidden.
 */
export function Scramble({ text, delay = 0 }: { text: string; delay?: number }) {
  const [shown, setShown] = useState(text);

  useEffect(() => {
    if (!motionAllowed()) return;
    let frame = 0;
    let raf = 0;
    const total = 28 + text.length;
    const start = performance.now() + delay;
    const tick = (now: number) => {
      if (now < start) {
        raf = requestAnimationFrame(tick);
        return;
      }
      frame++;
      const out = text
        .split("")
        .map((ch, i) => {
          if (ch === " ") return " ";
          return frame > 10 + i * 1.2 ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        })
        .join("");
      setShown(out);
      if (frame < total) raf = requestAnimationFrame(tick);
      else setShown(text);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [text, delay]);

  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="scramble">
        {shown}
      </span>
    </>
  );
}
