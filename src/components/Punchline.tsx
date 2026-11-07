export function Punchline() {
  return (
    <section
      id="home"
      className="explore-section relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 bts-shell w-full">
        <div className="explore-copy punchline-copy">
          {/* Mobile: 5-line break */}
          <p className="punchline-hero punchline-hero--mobile text-white/90 font-light tracking-tight">
            <span className="block">We design and build</span>
            <span className="block">conducive environments.</span>
            <span className="block">Where ideas grow,</span>
            <span className="block">people thrive and</span>
            <span className="block">businesses prosper.</span>
          </p>

          {/* Desktop / tablet: original 3-line format */}
          <p className="punchline-hero punchline-hero--desktop text-white/90 font-light tracking-tight">
            <span className="block">We design and build conducive environments.</span>
            <span className="block">Where ideas grow, people thrive</span>
            <span className="block">and businesses prosper.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
