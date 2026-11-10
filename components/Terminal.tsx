"use client";

import { useEffect, useRef, useState } from "react";

type Line = { kind: "cmd" | "info" | "ok" | "ai" | "fix" | "done"; text: string };

const script: Line[] = [
  { kind: "cmd", text: "mellcode assess --team operations" },
  { kind: "info", text: "mapping workflows and handoffs..." },
  { kind: "ok", text: "14 manual steps found" },
  { kind: "ok", text: "9 fixed with simple automations" },
  { kind: "ai", text: "2 where AI earns its keep" },
  { kind: "fix", text: "3 that need a process cleanup" },
  { kind: "cmd", text: "mellcode build --plan approved" },
  { kind: "done", text: "deployed. no more copy-paste." },
];

const tag: Record<Line["kind"], string> = {
  cmd: "$",
  info: "..",
  ok: "[auto]",
  ai: "[ai]",
  fix: "[fix]",
  done: "[done]",
};

function motionAllowed() {
  return (
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
    document.documentElement.dataset.motion !== "off"
  );
}

export function Terminal() {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(script.length);
  const [typed, setTyped] = useState<string | null>(null);

  useEffect(() => {
    if (!motionAllowed()) return;
    setCount(0);
    let cancelled = false;
    const timers: number[] = [];
    const wait = (ms: number) => new Promise<void>((r) => timers.push(window.setTimeout(r, ms)));

    async function run() {
      for (let i = 0; i < script.length && !cancelled; i++) {
        const line = script[i];
        if (line.kind === "cmd") {
          for (let c = 1; c <= line.text.length && !cancelled; c++) {
            setTyped(line.text.slice(0, c));
            await wait(32);
          }
          await wait(250);
          setTyped(null);
        } else {
          await wait(line.kind === "info" ? 500 : 380);
        }
        setCount(i + 1);
      }
    }

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          io.disconnect();
          run();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) io.observe(ref.current);
    return () => {
      cancelled = true;
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  const done = count >= script.length;

  return (
    <div className="terminal brackets" ref={ref}>
      <p className="sr-only">
        Example assessment: of 14 manual steps, 9 are fixed with simple automations, 2 with AI, and 3 need a
        process cleanup.
      </p>
      <div className="term-bar" aria-hidden="true">
        <span className="term-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="term-title">~/themellcode : example assessment</span>
      </div>
      <div className="term-body" aria-hidden="true">
        {script.slice(0, count).map((l, i) => (
          <div key={i} className={`term-line term-${l.kind}`}>
            <span className="term-tag">{tag[l.kind]}</span>
            <span>{l.text}</span>
          </div>
        ))}
        {typed !== null && (
          <div className="term-line term-cmd">
            <span className="term-tag">$</span>
            <span>
              {typed}
              <span className="caret" />
            </span>
          </div>
        )}
        {done && (
          <div className="term-line term-cmd">
            <span className="term-tag">$</span>
            <span className="caret" />
          </div>
        )}
      </div>
    </div>
  );
}
