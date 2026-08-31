import Image from "next/image";
import { CompareTable } from "@/components/CompareTable";
import { HeroDemo } from "@/components/HeroDemo";
import { HeroTelemetry } from "@/components/HeroTelemetry";
import { JobSection } from "@/components/JobSection";
import { QuoteWall } from "@/components/QuoteWall";
import { RosterChart } from "@/components/RosterChart";
import { SiteNav } from "@/components/SiteNav";
import { JOBS } from "@/data/jobs";

export default function HomePage() {
  return (
    <main id="top">
      <div className="hero-watercolor">
        <Image
          className="hero-watercolor-image"
          src="/brand/jabil-watercolor.jpg"
          alt=""
          width={1024}
          height={576}
          sizes="100vw"
          priority
        />
        <SiteNav />
      </div>

      <div className="report hero-paper">
        <div className="report-hero">
          <HeroTelemetry />
          <HeroDemo />

          <section className="usecase-framing">
            <p className="eyebrow">Three ways Jabil sellers can start</p>
            <h2>
              Give each seller a small team that can open the same tools, keep
              context, and bring back work that is ready to review.
            </h2>
            <p>These are starting points, not the limit.</p>
          </section>

          <div className="metric-grid">
            {JOBS.map((job) => (
              <a
                key={job.id}
                className="metric-card"
                href={`#${job.id}`}
              >
                <div className="metric-card-top">
                  <p>Sample {String(job.number).padStart(2, "0")}</p>
                </div>
                <h2>{job.title}</h2>
                <p className="metric-trigger">Starts when {job.trigger.toLowerCase()}</p>
              </a>
            ))}
          </div>
        </div>

        <RosterChart />

        <div id="jobs">
          {JOBS.map((job) => (
            <JobSection key={job.id} job={job} />
          ))}
        </div>
      </div>

      <div className="orbit-break" aria-hidden>
        <Image
          src="/brand/jabil-watercolor-orbit.jpg"
          alt=""
          width={1024}
          height={256}
          sizes="100vw"
        />
      </div>

      <div className="report">
        <CompareTable />
        <QuoteWall />
      </div>

      <footer className="site-footer">
        <div>
          <p className="footer-title">Jabil x SpaceXAI</p>
          <p>A private look at Grok Bot for Jabil sales</p>
        </div>
        <address className="footer-contact">
          <p>Your Cursor contact</p>
          <strong>Mike Weinert</strong>
          <a href="mailto:mike.weinert@cursor.com">mike.weinert@cursor.com</a>
        </address>
      </footer>
    </main>
  );
}
