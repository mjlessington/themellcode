import Link from "next/link";
import { Icon } from "@/components/Icon";
import { audiences, featuredService, process, reasons, site, supportingServices } from "@/lib/site";

const workflow = [
  { label: "Donation form submitted", meta: "Website" },
  { label: "Donor record updated", meta: "CRM" },
  { label: "Thank-you email drafted", meta: "AI assistant" },
  { label: "Weekly giving report sent", meta: "Automation" },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">AI &amp; automation consulting</p>
            <h1>
              Put AI to work for your business or nonprofit, <span className="accent">without the guesswork.</span>
            </h1>
            <p className="lead">
              TheMellCode finds where AI and automation will save your team real hours, then builds it. We back
              every project with hands-on experience in infrastructure, IT strategy, and software, so what we
              build keeps working.
            </p>
            <div className="cta-row">
              <Link href="/get-started" className="btn btn-primary">
                Book a free discovery call <Icon name="arrowRight" size={18} />
              </Link>
              <Link href="/#services" className="btn btn-ghost">
                See services
              </Link>
            </div>
          </div>

          <div className="workflow-card" aria-label="Example automation: a donation flows through four automated steps">
            <div className="workflow-head">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
              <span className="workflow-title">Example: donor follow-up</span>
            </div>
            <ol className="workflow-steps">
              {workflow.map((s) => (
                <li key={s.label}>
                  <span className="step-check">
                    <Icon name="check" size={14} />
                  </span>
                  <span className="step-label">{s.label}</span>
                  <span className="step-meta">{s.meta}</span>
                </li>
              ))}
            </ol>
            <div className="workflow-foot">
              <Icon name="sparkles" size={16} />
              <span>Runs on its own, every time</span>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Services</p>
            <h2>AI first, with the IT foundation to support it</h2>
            <p className="muted">
              Most AI projects stall on messy data, old systems, or tools that don&apos;t talk to each other. We
              handle all of it.
            </p>
          </div>

          <div className="featured-service card">
            <div className="featured-intro">
              <span className="icon-chip icon-chip-lg">
                <Icon name="sparkles" size={26} />
              </span>
              <h3>{featuredService.title}</h3>
              <p className="muted">{featuredService.summary}</p>
              <Link href="/get-started" className="text-link">
                Start with a discovery call <Icon name="arrowRight" size={16} />
              </Link>
            </div>
            <ul className="check-list">
              {featuredService.items.map((item) => (
                <li key={item}>
                  <Icon name="check" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid-3">
            {supportingServices.map((s) => (
              <article key={s.title} className="card">
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

      <section id="who-we-help" className="section section-alt">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Who we help</p>
            <h2>Built for lean teams with big missions</h2>
          </div>
          <div className="grid-2">
            {audiences.map((a) => (
              <article key={a.title} className="card">
                <h3>{a.title}</h3>
                <p className="muted">{a.intro}</p>
                <p className="list-label">Typical projects</p>
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

      <section id="process" className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">How we work</p>
            <h2>From first call to working system</h2>
          </div>
          <ol className="process">
            {process.map((p, i) => (
              <li key={p.title} className="process-step">
                <span className="process-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{p.title}</h3>
                <p className="muted">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="why" className="section section-alt">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Why TheMellCode</p>
            <h2>What working with us is like</h2>
          </div>
          <div className="grid-3 reasons">
            {reasons.map((r) => (
              <div key={r.title} className="reason">
                <h3>{r.title}</h3>
                <p className="muted">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>Find out where AI can save your team time</h2>
              <p>
                Tell us a little about your organization, then pick a time for a free discovery call. You&apos;ll
                leave with clear next steps, whether or not we work together.
              </p>
            </div>
            <div className="cta-band-actions">
              <Link href="/get-started" className="btn btn-dark">
                Get started <Icon name="arrowRight" size={18} />
              </Link>
              <a href={`mailto:${site.email}`} className="cta-band-email">
                or email {site.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
