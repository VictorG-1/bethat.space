export function Punchline() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center py-32 lg:py-40 overflow-hidden"
    >
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-14">
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-white/90 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight"
            style={{ lineHeight: 'calc(1.375em + 0.25px)' }}
          >
            <span className="block">We design and build conducive environments.</span>
            <span className="block mt-3 sm:mt-4">Where ideas grow, people thrive</span>
            <span className="block mt-3 sm:mt-4">and businesses prosper.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
