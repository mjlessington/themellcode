import Link from "next/link";
import { site } from "@/lib/site";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-row">
        <div className="footer-brand">
          <Logo height={22} />
          <p className="muted small">AI, automation, and IT consulting for small businesses and nonprofits.</p>
        </div>
        <div className="footer-links">
          <Link href="/get-started">Book a call</Link>
          <a href={`mailto:${site.email}`}>
            <Icon name="mail" size={16} /> {site.email}
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
            <Icon name="linkedin" size={16} /> LinkedIn
          </a>
        </div>
      </div>
      <div className="container">
        <p className="muted small copyright">&copy; {new Date().getFullYear()} TheMellCode. All rights reserved.</p>
      </div>
    </footer>
  );
}
