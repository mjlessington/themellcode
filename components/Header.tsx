"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#who-we-help", label: "Who we help" },
  { href: "/#process", label: "Process" },
  { href: "/#why", label: "Why us" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-row">
        <Link href="/" className="brand" aria-label="TheMellCode home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className={`nav ${open ? "is-open" : ""}`} aria-label="Main">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <Link href="/get-started" className="btn btn-primary btn-sm hide-xs">
            Book a call
          </Link>
          <button
            type="button"
            className="icon-btn menu-btn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>
    </header>
  );
}
