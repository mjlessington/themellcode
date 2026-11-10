"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";
import { site } from "@/lib/site";

export function Booking() {
  const [step, setStep] = useState<1 | 2>(1);

  useEffect(() => {
    if (window.location.hash === "#step2") setStep(2);

    // The embedded Google Form reloads its iframe after a submit; the second load means it was sent.
    const frame = document.getElementById("intake-frame") as HTMLIFrameElement | null;
    let loads = 0;
    const onLoad = () => {
      loads += 1;
      if (loads > 1) {
        setStep(2);
        document.getElementById("step2")?.scrollIntoView({ behavior: "smooth" });
      }
    };
    frame?.addEventListener("load", onLoad);
    return () => frame?.removeEventListener("load", onLoad);
  }, []);

  return (
    <div className="container narrow booking">
      <ol className="stepper" aria-label="Progress">
        <li className={step === 1 ? "is-active" : "is-done"}>
          <span className="stepper-num">{step === 1 ? "1" : <Icon name="check" size={14} />}</span>
          Intake form
        </li>
        <li className={step === 2 ? "is-active" : ""} aria-current={step === 2 ? "step" : undefined}>
          <span className="stepper-num">2</span>
          Schedule call
        </li>
      </ol>

      <section id="step1" className="booking-step card">
        <header className="booking-step-head">
          <span className="icon-chip">
            <Icon name="form" size={22} />
          </span>
          <div>
            <h2>Tell us about your needs</h2>
            <p className="muted">About 3 to 5 minutes.</p>
          </div>
        </header>
        <div className="embed embed-form">
          <iframe id="intake-frame" src={site.intakeForm} title="TheMellCode intake form" loading="lazy">
            Loading…
          </iframe>
        </div>
        <button type="button" className="text-link skip-btn" onClick={() => {
          setStep(2);
          document.getElementById("step2")?.scrollIntoView({ behavior: "smooth" });
        }}>
          Already sent the form? Go to scheduling <Icon name="arrowRight" size={16} />
        </button>
      </section>

      <section id="step2" className="booking-step card">
        <header className="booking-step-head">
          <span className="icon-chip">
            <Icon name="calendar" size={22} />
          </span>
          <div>
            <h2>Schedule your discovery call</h2>
            <p className="muted">Free, with no commitment. Pick any open time.</p>
          </div>
        </header>
        <div
          className="calendly-inline-widget embed embed-calendly"
          data-url={`${site.calendly}?hide_gdpr_banner=1&primary_color=ecb807`}
        />
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      </section>

      <p className="muted small center">
        Questions first? Email <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </div>
  );
}
