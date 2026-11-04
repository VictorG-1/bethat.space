import { useCallback, useEffect, useRef, useState } from 'react';
import introVideo from '../assets/bethat-intro.mp4';
import logo from '../assets/Bethat Space White Logo Transparent Background-01-RGB.png';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showLanding, setShowLanding] = useState(false);

  const closeVideo = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.removeAttribute('src');
      video.load();
    }
    setShowLanding(true);
  }, []);

  const goToExplore = () => {
    window.history.pushState({}, '', '/explore');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  useEffect(() => {
    if (showLanding) return;
    const video = videoRef.current;
    if (!video) return;

    video.loop = false;
    video.muted = true;

    const finish = () => closeVideo();

    const onTimeUpdate = () => {
      if (video.duration && video.currentTime >= video.duration - 0.15) {
        finish();
      }
    };

    video.addEventListener('ended', finish);
    video.addEventListener('timeupdate', onTimeUpdate);

    const play = async () => {
      try {
        await video.play();
      } catch {
        // if autoplay fails, show landing
        finish();
      }
    };
    void play();

    return () => {
      video.removeEventListener('ended', finish);
      video.removeEventListener('timeupdate', onTimeUpdate);
    };
  }, [showLanding, closeVideo]);

  return (
    <section id="hero" className="relative min-h-screen bg-black overflow-hidden z-20">
      {!showLanding && (
        <button
          type="button"
          onClick={closeVideo}
          className="absolute inset-0 z-30 cursor-pointer border-0 p-0 bg-transparent"
          aria-label="Skip intro"
        >
          <video
            ref={videoRef}
            src={introVideo}
            autoPlay
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover pointer-events-none"
            aria-hidden
          />
        </button>
      )}

      {showLanding && (
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-8 animate-in fade-in duration-500">
          <div
            className="mx-auto mb-12 w-full"
            style={{ maxWidth: 'min(420px, 85vw)' }}
          >
            <img
              src={logo}
              alt="BeThatSpace™"
              width={420}
              height={236}
              className="block w-full object-contain mb-8"
            />

            <p className="flex w-full items-center justify-between text-white text-[clamp(0.65rem,2.4vw,1.125rem)] tracking-[0.18em] font-medium whitespace-nowrap">
              <span>Architecture</span>
              <span className="text-red-600 shrink-0 mx-1">|</span>
              <span>Interior Design</span>
              <span className="text-red-600 shrink-0 mx-1">|</span>
              <span>Design + Build</span>
            </p>
          </div>

          <button
            onClick={goToExplore}
            className="group relative inline-flex items-center justify-center px-2 py-2 transition-transform duration-500 hover:scale-105"
            aria-label="Explore"
          >
            <span className="explore-flow tracking-[0.3em] text-base sm:text-lg font-medium">
              Explore
            </span>
          </button>

          <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none">
            <p className="text-white/40 text-xs uppercase tracking-widest">
              © {new Date().getFullYear()} BeThatSpace™. All Rights Reserved.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
        </div>
      )}
    </section>
  );
}
