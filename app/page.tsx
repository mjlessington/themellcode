import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Scramble } from "@/components/Scramble";
import { StickyCta } from "@/components/StickyCta";
import { Terminal } from "@/components/Terminal";
import { assessment, audiences, faqs, featuredService, process, reasons, site, supportingServices } from "@/lib/site";

const marquee = ["Assess", "Automate", "Integrate", "Secure", "Support"];

const nodesIn = ["Email", "Web forms", "Spreadsheets", "CRM"];
const nodesOut = ["Reports", "Invoices", "Follow-ups"];

function Label({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p className="label">
      <span className="label-n">[{n}]</span> {children}
      <span className="label-rule" aria-hidden="true" />
    </p>
  );
}

export default function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true">
          <div className="grid-lines" />
          <div className="orb orb-1" />
          <div className="scan" />
        </div>

        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="tagline" data-reveal>
              <span className="pulse" /> automation <span className="sep">/</span> ai <span className="sep">/</span> it
            </p>
            <h1 className="display" data-reveal>
              <span className="display-line">
                <Scramble text="Less busywork." />
              </span>
              <span className="display-line shine">
                <Scramble text="Smarter systems." delay={250} />
              </span>
            </h1>
            <p className="lead" data-reveal>
              Serving small businesses and nonprofits in Atlanta and Charlotte. We start by mapping how your team actually works. Then we build the right fix for each process,
              whether that&apos;s a simple automation, an AI tool, or stronger IT underneath it.
            </p>
            <div className="cta-row" data-reveal>
              <Link href="/get-started" className="btn btn-primary btn-lg">
                Book a free discovery call <Icon name="arrowRight" size={18} />
              </Link>
              <Link href="/#assessment" className="btn btn-outline btn-lg">
                See the Workflow Assessment
              </Link>
            </div>
            <p className="hero-note" data-reveal>
              The call is free. Most clients start with a {assessment.price} fixed-price {assessment.name}.
            </p>
          </div>

          <div className="hero-visual" data-reveal>
            <Terminal />
          </div>
        </div>
      </section>

      <div className="mega-marquee" aria-hidden="true">
        <div className="mega-track">
          {[...marquee, ...marquee, ...marquee].map((w, i) => (
            <span key={i} className={i % 2 ? "outline" : ""}>
              {w}
            </span>
          ))}
        </div>
      </div>

      {/* ---------- Services ---------- */}
      <section id="services" className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <Label n="01">Services</Label>
            <h2>
              The right fix for every workflow, <span className="dim">built on solid IT.</span>
            </h2>
          </div>

          <article className="feature brackets spotlight" data-reveal>
            <div className="feature-copy">
              <p className="mono-tag">core offering</p>
              <h3>{featuredService.title}</h3>
              <p className="muted">{featuredService.summary}</p>
              <ul className="check-list">
                {featuredService.items.map((item) => (
                  <li key={item}>
                    <Icon name="check" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flowmap" aria-hidden="true">
              <div className="flow-col">
                {nodesIn.map((n) => (
                  <span key={n} className="node">
                    {n}
                  </span>
                ))}
              </div>
              <div className="flow-wires">
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="hub">
                <span className="hub-mark">
                  <Icon name="code" size={22} />
                </span>
                <span className="hub-label">your workflow</span>
              </div>
              <div className="flow-wires out">
                <span />
                <span />
                <span />
              </div>
              <div className="flow-col">
                {nodesOut.map((n) => (
                  <span key={n} className="node node-out">
                    {n}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <div className="rows">
            {supportingServices.map((s, i) => (
              <article key={s.title} className="row spotlight" data-reveal>
                <span className="row-n">0{i + 2}</span>
                <h3>{s.title}</h3>
                <p className="muted">{s.body}</p>
                <span className="row-icon" aria-hidden="true">
                  <Icon name={s.icon} size={22} />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Who we help ---------- */}
      <section id="who-we-help" className="section section-ink">
        <div className="ink-grid" aria-hidden="true" />
        <div className="container">
          <div className="section-head" data-reveal>
            <Label n="02">Who we help</Label>
            <h2>
              Lean teams. <span className="dim">Big ambitions.</span>
            </h2>
            <p className="lead">
              In person across the Atlanta and Charlotte areas, and over video for teams anywhere in the US.
            </p>
          </div>
          <div className="split">
            {audiences.map((a, i) => (
              <article key={a.title} className="panel brackets spotlight" data-reveal>
                <span className="panel-num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{a.title}</h3>
                <p className="muted">{a.intro}</p>
                <ul className="check-list">
                  {a.examples.map((e) => (
                    <li key={e}>
                      <Icon name="check" size={18} />
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section id="process" className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <Label n="03">How we work</Label>
            <h2>
              Assess first. <span className="dim">Then build.</span>
            </h2>
          </div>
          <ol className="steps">
            {process.map((p, i) => (
              <li key={p.title} className="step" data-reveal style={{ "--i": i } as React.CSSProperties}>
                <span className="step-n">step_0{i + 1}</span>
                <h3>{p.title}</h3>
                <p className="muted">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Assessment ---------- */}
      <section id="assessment" className="section section-tight-top">
        <div className="container">
          <div className="section-head" data-reveal>
            <Label n="04">Where to start</Label>
            <h2>
              The {assessment.name}. <span className="dim">A clear plan before any build.</span>
            </h2>
          </div>

          <article className="offer brackets spotlight" data-reveal>
            <div className="offer-copy">
              <p className="mono-tag">fixed-price first step</p>
              <p className="offer-price">
                {assessment.price}
                <span className="offer-time">{assessment.timeline}</span>
              </p>
              <p className="muted">{assessment.summary}</p>
              <p className="offer-note">{assessment.priceNote}</p>
              <div className="cta-row">
                <Link href="/get-started" className="btn btn-primary btn-lg">
                  Book your assessment call <Icon name="arrowRight" size={18} />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="offer-list-title">What you get</h3>
              <ol className="offer-parts">
                {assessment.parts.map((p, i) => (
                  <li key={p.title}>
                    <span className="offer-n" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h4>{p.title}</h4>
                      <p className="muted">{p.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </article>

          <div className="faq" data-reveal>
            <h3 className="faq-title">Common questions</h3>
            {faqs.map((f) => (
              <details key={f.q} className="faq-item">
                <summary>{f.q}</summary>
                <p className="muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Why us ---------- */}
      <section id="why" className="section section-tight-top">
        <div className="container">
          <div className="section-head" data-reveal>
            <Label n="05">Why TheMellCode</Label>
            <h2>
              Senior expertise, <span className="dim">without the overhead.</span>
            </h2>
          </div>
          <div className="matrix" data-reveal>
            {reasons.map((r, i) => (
              <div key={r.title} className="cell spotlight">
                <span className="cell-n">{String(i + 1).padStart(2, "0")}</span>
                <h3>{r.title}</h3>
                <p className="muted">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="section section-tight">
        <div className="container">
          <div className="cta brackets" data-reveal>
            <div className="cta-bg" aria-hidden="true">
              <div className="grid-lines" />
              <div className="orb orb-cta" />
            </div>
            <p className="cta-prompt">
              <span aria-hidden="true">$ </span>start --discovery-call<span className="caret" aria-hidden="true" />
            </p>
            <h2 className="cta-title">
              Find out where your team is <span className="shine">losing time.</span>
            </h2>
            <p className="cta-copy">
              Book a free discovery call. We&apos;ll talk through where time is going and whether a{" "}
              {assessment.price} {assessment.name} is the right first step. You&apos;ll leave with clear next
              steps either way.
            </p>
            <div className="cta-row cta-row-center">
              <Link href="/get-started" className="btn btn-primary btn-lg">
                Get started <Icon name="arrowRight" size={18} />
              </Link>
              <a href={`mailto:${site.email}`} className="btn btn-outline btn-lg">
                <Icon name="mail" size={18} /> {site.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      <StickyCta />
    </>
  );
}
