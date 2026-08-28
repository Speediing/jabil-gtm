import type { SlideCard } from "@/data/types";

export function HeardSlide({
  slides,
  size = "lg",
}: {
  slides: SlideCard[];
  size?: "sm" | "lg";
  wash?: string;
}) {
  return (
    <div className={`leave leave-heard size-${size}`}>
      <article className="heard-slide deck-artifact">
        <header className="deck-artifact-bar">
          <span>Customer follow-up deck</span>
          <strong>Draft</strong>
        </header>
        <div className="deck-slides">
          {slides.map((slide) => (
            <section
              key={slide.n}
              className={`deck-tile voice-${slide.voice || "us"}`}
            >
              <div className="deck-tile-bar">
                <span className="deck-kicker">{slide.kicker || "Slide"}</span>
                <span className="deck-n">{String(slide.n).padStart(2, "0")}</span>
              </div>
              <h3 className="deck-tile-title">{slide.title}</h3>
              <p className="deck-map">{slide.body}</p>
              <p className="deck-tile-foot">
                <span>{slide.voice === "them" ? "Call note" : "Next step"}</span>
                <span>Jabil</span>
              </p>
            </section>
          ))}
        </div>
      </article>
    </div>
  );
}
