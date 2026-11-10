"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "./Icon";

/** Phone-only booking bar that appears once the hero is scrolled past. */
export function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.querySelector(".hero");
    const cta = document.querySelector(".cta");
    if (!hero) return;
    let pastHero = false;
    let atCta = false;
    const update = () => setShow(pastHero && !atCta);
    const io1 = new IntersectionObserver(([e]) => {
      pastHero = !e.isIntersecting;
      update();
    });
    const io2 = new IntersectionObserver(([e]) => {
      atCta = e.isIntersecting;
      update();
    });
    io1.observe(hero);
    if (cta) io2.observe(cta);
    return () => {
      io1.disconnect();
      io2.disconnect();
    };
  }, []);

  return (
    <div className={`sticky-cta ${show ? "is-shown" : ""}`} aria-hidden={!show}>
      <Link href="/get-started" className="btn btn-primary" tabIndex={show ? 0 : -1}>
        Book a free discovery call <Icon name="arrowRight" size={18} />
      </Link>
    </div>
  );
}
