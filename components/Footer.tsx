import Link from "next/link";
import { site } from "@/lib/site";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { MotionToggle } from "./MotionToggle";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-row">
          <div className="footer-brand">
            <Logo height={24} />
            <p className="muted small">Automation, AI, and IT consulting for small businesses and nonprofits.</p>
          </div>
          <nav className="footer-links" aria-label="Footer">
            <Link href="/get-started">Book a call</Link>
            <a href={`mailto:${site.email}`}>
              <Icon name="mail" size={16} /> {site.email}
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              <Icon name="linkedin" size={16} /> LinkedIn<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </nav>
        </div>
        <div className="footer-bottom">
          <p className="muted small">&copy; {new Date().getFullYear()} TheMellCode. All rights reserved.</p>
          <MotionToggle />
        </div>
      </div>
    </footer>
  );
}
