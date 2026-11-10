import type { Metadata } from "next";
import { Booking } from "./Booking";

export const metadata: Metadata = {
  title: "Get Started",
  description:
    "Tell TheMellCode about your organization and schedule a free discovery call about AI, automation, and IT.",
};

export default function GetStarted() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Get started</p>
          <h1>Two quick steps to your discovery call</h1>
          <p className="lead">
            Tell us about your needs so we come prepared, then pick a time that works for you. The call is free
            and there&apos;s no commitment.
          </p>
        </div>
      </section>
      <Booking />
    </>
  );
}
