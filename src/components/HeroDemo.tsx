"use client";

import { useState } from "react";
import { HERO_JOBS, type HeroJobId } from "@/data/hero-jobs";

export function HeroDemo() {
  const [selectedJob, setSelectedJob] = useState<HeroJobId>(HERO_JOBS[0].id);
  const activeJob =
    HERO_JOBS.find((job) => job.id === selectedJob) ?? HERO_JOBS[0];

  return (
    <section className="hero hero-bot-demo" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">A fleet of agents for every Jabil seller</p>
        <h1 id="hero-title">The work moves while your reps sell.</h1>
        <p className="hero-intro">
          Grok Bot listens to calls, watches the inbox, and researches accounts
          in the background. Each agent has its own computer. The work starts
          from a trigger, not another prompt.
        </p>

        <div className="hero-phone-jobs" role="group" aria-label="Try a job">
          {HERO_JOBS.map((job) => (
            <button
              key={job.id}
              type="button"
              aria-pressed={job.id === activeJob.id}
              aria-controls="hero-phone-thread"
              className={job.id === activeJob.id ? "is-active" : undefined}
              onClick={() => setSelectedJob(job.id)}
            >
              {job.label}
            </button>
          ))}
        </div>
      </div>

      <aside className="hero-phone" aria-label="Interactive Grok Bot example">
        <div className="hero-phone-statusbar" aria-hidden>
          <span>9:41</span>
          <span className="hero-phone-status-icons">
            <i />
            <b>5G</b>
            <i className="is-battery" />
          </span>
        </div>
        <div className="hero-phone-notch" aria-hidden />

        <header className="hero-phone-header">
          <span className="hero-phone-back" aria-hidden>
            ‹
          </span>
          <div className="hero-phone-person">
            <span className="hero-phone-avatar">G</span>
            <p>
              <strong>Grok Bot</strong>
              <small>Ready to work</small>
            </p>
          </div>
          <span className="hero-phone-info" aria-hidden>
            i
          </span>
        </header>

        <div
          id="hero-phone-thread"
          className="hero-phone-thread"
          aria-live="polite"
        >
          <div key={activeJob.id} className="hero-phone-thread-content">
            <p className="hero-phone-time">Today 9:41 AM</p>

            <div className="hero-phone-message is-you">
              <p>{activeJob.request}</p>
            </div>

            <div className="hero-phone-message-row">
              <span className="hero-phone-message-avatar" aria-hidden>
                G
              </span>
              <div className="hero-phone-message is-bot">
                <p>{activeJob.reply}</p>
              </div>
            </div>

            <article className="hero-phone-result">
              <p className="hero-phone-result-label">
                {activeJob.result.label}
              </p>
              <h2>{activeJob.result.title}</h2>
              <p className="hero-phone-result-body">
                {activeJob.result.body}
              </p>
              <p className="hero-phone-result-status">
                <span aria-hidden>✓</span>
                {activeJob.result.status}
              </p>
            </article>
          </div>
        </div>

        <div className="hero-phone-composer" aria-hidden>
          <span className="hero-phone-plus">+</span>
          <p>Message</p>
          <span className="hero-phone-mic">●</span>
        </div>
        <div className="hero-phone-home" aria-hidden />
      </aside>
    </section>
  );
}
