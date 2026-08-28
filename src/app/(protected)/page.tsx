import { CompareTable } from "@/components/CompareTable";
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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero-watercolor-image"
          src="/brand/jabil-watercolor.jpg"
          alt=""
        />
        <SiteNav />
      </div>

      <div className="report hero-paper">
        <div className="report-hero">
          <HeroTelemetry />
          <section className="hero">
            <div>
              <p className="eyebrow">A fleet of agents for every Jabil seller</p>
              <h1>The work moves while your reps sell.</h1>
              <p className="hero-intro">
                Grok Bot listens to calls, watches the inbox, and researches
                accounts in the background. Each agent has its own computer.
                The work starts from a trigger, not another prompt.
              </p>
            </div>
          </section>

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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/jabil-watercolor-orbit.jpg" alt="" />
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
