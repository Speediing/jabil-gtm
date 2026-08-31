export function BrandLockup({
  size = "md",
}: {
  size?: "sm" | "md" | "lg";
}) {
  return (
    <div className={`brand-lockup brand-lockup-${size}`}>
      <object
        data="https://s27.q4cdn.com/276975351/files/design/jabil-logo-fy21.svg"
        type="image/svg+xml"
        className="brand-jabil"
        aria-label="Jabil"
      >
        <span className="brand-jabil-fallback">JABIL</span>
      </object>
      <span className="brand-times" aria-hidden>
        ×
      </span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/spacexai.svg" alt="SpaceXAI" className="brand-sxai" />
    </div>
  );
}
