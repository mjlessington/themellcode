import type { Metadata } from "next";
import { Booking } from "./Booking";

export const metadata: Metadata = {
  title: "Get Started",
  description:
    "Schedule a free discovery call with TheMellCode, serving small businesses and nonprofits in Atlanta and Charlotte. We'll scope your Workflow Assessment and next steps.",
};

export default function GetStarted() {
  return (
    <>
      <section className="page-hero">
        <div className="hero-bg" aria-hidden="true">
          <div className="grid-lines" />
          <div className="orb orb-1" />
        </div>
        <div className="container narrow">
          <p className="label">
            <span className="label-n">[go]</span> Get started
          </p>
          <h1>
            Two quick steps to your <span className="shine">discovery call.</span>
          </h1>
          <p className="lead">
            Tell us about your needs so we come prepared, then pick a time that works for you. The call is free
            and there&apos;s no commitment. It&apos;s also where we scope your Workflow Assessment, if it&apos;s a fit.
          </p>
        </div>
      </section>
      <Booking />
    </>
  );
}
