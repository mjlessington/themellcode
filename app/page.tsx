import Link from "next/link";
import { Icon } from "@/components/Icon";
import { audiences, featuredService, process, reasons, site, supportingServices } from "@/lib/site";

const workflow = [
  { label: "Donation form submitted", meta: "Website" },
  { label: "Donor record updated", meta: "CRM" },
  { label: "Thank-you email drafted", meta: "AI" },
  { label: "Weekly report sent", meta: "Auto" },
];

const ticker = [
  "Workflow automation",
  "AI assistants",
  "LLM integration",
  "Cloud & infrastructure",
  "Fractional CIO",
  "Custom software",
  "Staff AI training",
  "Data cleanup",
];

const reasonIcons = ["compass", "sparkles", "server", "check", "calendar", "arrowRight"];

export default function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true">
          <div className="grid-lines" />
          <div className="orb orb-1" />
          <div className="orb orb-2" />
        </div>

        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="pill" data-reveal>
              <span className="pulse" /> AI &amp; automation consulting
            </p>
            <h1 className="display" data-reveal>
              Put AI to work. <span className="shine">Skip the guesswork.</span>
            </h1>
            <p className="lead" data-reveal>
              TheMellCode helps small businesses and nonprofits find where AI and automation save real hours,
              then builds it on an IT foundation that keeps it running.
            </p>
            <div className="cta-row" data-reveal>
              <Link href="/get-started" className="btn btn-primary btn-lg">
                Book a free discovery call <Icon name="arrowRight" size={18} />
              </Link>
              <Link href="/#services" className="btn btn-glass btn-lg">
                Explore services
              </Link>
            </div>
          </div>

          <div className="hero-visual" data-reveal>
            <div className="ring ring-1" aria-hidden="true" />
            <div className="ring ring-2" aria-hidden="true" />
            <div className="flow glass" role="img" aria-label="Example automation: a donation moves through four automated steps">
              <div className="flow-head">
                <span className="flow-logo">
                  <Icon name="code" size={14} />
                </span>
                <span className="flow-title">donor-follow-up</span>
                <span className="flow-live">
                  <span className="pulse" /> live
                </span>
              </div>
              <ol className="flow-steps">
                {workflow.map((s, i) => (
                  <li key={s.label} style={{ "--i": i } as React.CSSProperties}>
                    <span className="flow-check">
                      <Icon name="check" size={13} />
                    </span>
                    <span className="flow-label">{s.label}</span>
                    <span className="flow-meta">{s.meta}</span>
                  </li>
                ))}
              </ol>
              <div className="flow-foot">
                <Icon name="sparkles" size={15} /> Runs on its own, every time
              </div>
            </div>
            <div className="float-chip chip-a glass" aria-hidden="true">
              <Icon name="sparkles" size={14} /> AI drafted
            </div>
            <div className="float-chip chip-b glass" aria-hidden="true">
              <Icon name="check" size={14} /> No manual entry
            </div>
          </div>
        </div>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {[...ticker, ...ticker].map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Services (bento) ---------- */}
      <section id="services" className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <p className="kicker">{"// services"}</p>
            <h2>
              AI first, <span className="muted-strong">with the IT foundation to back it.</span>
            </h2>
          </div>

          <div className="bento">
            <article className="tile tile-feature spotlight" data-reveal>
              <div className="tile-feature-copy">
                <span className="icon-chip icon-chip-lg">
                  <Icon name="sparkles" size={26} />
                </span>
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
              <div className="chat" aria-hidden="true">
                <div className="bubble bubble-user">Draft this month&apos;s donor update from our CRM notes</div>
                <div className="bubble bubble-ai">
                  <span className="typing">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="ai-lines">
                    <i style={{ width: "92%" }} />
                    <i style={{ width: "78%" }} />
                    <i style={{ width: "86%" }} />
                    <i style={{ width: "54%" }} />
                  </span>
                </div>
                <div className="chat-done">
                  <Icon name="check" size={14} /> Draft ready for review
                </div>
              </div>
            </article>

            {supportingServices.map((s) => (
              <article key={s.title} className="tile spotlight" data-reveal>
                <span className="icon-chip">
                  <Icon name={s.icon} size={22} />
                </span>
                <h3>{s.title}</h3>
                <p className="muted">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Who we help ---------- */}
      <section id="who-we-help" className="section section-band">
        <div className="band-glow" aria-hidden="true" />
        <div className="container">
          <div className="section-head" data-reveal>
            <p className="kicker">{"// who we help"}</p>
            <h2>
              Lean teams. <span className="muted-strong">Big ambitions.</span>
            </h2>
          </div>
          <div className="split">
            {audiences.map((a, i) => (
              <article key={a.title} className="panel spotlight" data-reveal>
                <span className="panel-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
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
            <p className="kicker">{"// how we work"}</p>
            <h2>
              First call to working system, <span className="muted-strong">in four steps.</span>
            </h2>
          </div>
          <ol className="timeline">
            {process.map((p, i) => (
              <li key={p.title} className="timeline-step" data-reveal style={{ "--i": i } as React.CSSProperties}>
                <span className="timeline-node">{String(i + 1).padStart(2, "0")}</span>
                <h3>{p.title}</h3>
                <p className="muted">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Why us ---------- */}
      <section id="why" className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <p className="kicker">{"// why themellcode"}</p>
            <h2>
              Senior expertise, <span className="muted-strong">without the overhead.</span>
            </h2>
          </div>
          <div className="reasons">
            {reasons.map((r, i) => (
              <div key={r.title} className="reason spotlight" data-reveal>
                <span className="reason-icon">
                  <Icon name={reasonIcons[i % reasonIcons.length]} size={20} />
                </span>
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
          <div className="cta" data-reveal>
            <div className="cta-bg" aria-hidden="true">
              <div className="grid-lines" />
              <div className="orb orb-cta" />
            </div>
            <p className="kicker">{"// next step"}</p>
            <h2 className="cta-title">
              Find out where AI can save your team <span className="shine">real time.</span>
            </h2>
            <p className="cta-copy">
              Share a little about your organization, then pick a time for a free discovery call. You&apos;ll
              leave with clear next steps, whether or not we work together.
            </p>
            <div className="cta-row cta-row-center">
              <Link href="/get-started" className="btn btn-primary btn-lg">
                Get started <Icon name="arrowRight" size={18} />
              </Link>
              <a href={`mailto:${site.email}`} className="btn btn-glass btn-lg">
                <Icon name="mail" size={18} /> {site.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
