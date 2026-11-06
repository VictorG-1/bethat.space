import { useCallback, useEffect, useRef, useState } from 'react';
import introVideoDesktop from '../assets/BeThatSpace_Intro_2.mp4';
import introVideoMobile from '../assets/BeThatSpace_Intro_Mobile.mp4';
import logo from '../assets/Bethat Space White Logo Transparent Background-01-RGB.png';

type Phase = 'video' | 'transition' | 'landing';

const MOBILE_INTRO_MQ = '(max-width: 767px)';
/** Normal video → logo crossfade */
const HANDOFF_MS = 900;

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [phase, setPhase] = useState<Phase>('video');
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(MOBILE_INTRO_MQ).matches : false,
  );
  const handoffStartedRef = useRef(false);
  const settledRef = useRef(false);
  const settleTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_INTRO_MQ);
    const sync = () => setIsMobile(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  const introVideo = isMobile ? introVideoMobile : introVideoDesktop;

  const settleLanding = useCallback((delayMs: number) => {
    if (settledRef.current) return;
    settledRef.current = true;

    if (settleTimerRef.current != null) {
      window.clearTimeout(settleTimerRef.current);
    }

    settleTimerRef.current = window.setTimeout(() => {
      const v = videoRef.current;
      if (v) {
        v.pause();
        v.removeAttribute('src');
        v.load();
      }
      setPhase('landing');
    }, delayMs);
  }, []);

  /** Logo fades in as video crossfades out */
  const beginHandoff = useCallback(() => {
    if (handoffStartedRef.current) return;
    handoffStartedRef.current = true;

    const video = videoRef.current;
    if (video) video.pause();

    setPhase('transition');
    settleLanding(HANDOFF_MS);
  }, [settleLanding]);

  const skipIntro = useCallback(() => {
    if (settledRef.current) return;
    beginHandoff();
  }, [beginHandoff]);

  const goToExplore = () => {
    window.history.pushState({}, '', '/explore');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  useEffect(() => {
    handoffStartedRef.current = false;
    settledRef.current = false;

    const video = videoRef.current;
    if (!video) return;

    video.loop = false;
    video.muted = true;

    const onTimeUpdate = () => {
      if (!video.duration || !Number.isFinite(video.duration)) return;
      if (video.currentTime >= video.duration - 0.05) {
        beginHandoff();
      }
    };

    const onEnded = () => {
      beginHandoff();
    };

    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('ended', onEnded);

    const play = async () => {
      try {
        await video.play();
      } catch {
        beginHandoff();
      }
    };
    void play();

    return () => {
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('ended', onEnded);
    };
  }, [beginHandoff, introVideo]);

  useEffect(() => {
    return () => {
      if (settleTimerRef.current != null) {
        window.clearTimeout(settleTimerRef.current);
      }
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen bg-black overflow-hidden z-20">
      {/* Keep video first in the tree so scaling down doesn't remount / restart playback */}
      {(phase === 'video' || phase === 'transition') && (
        <button
          type="button"
          onClick={phase === 'video' ? skipIntro : undefined}
          className="absolute inset-0 z-30 cursor-pointer border-0 p-0 bg-transparent"
          aria-label="Skip intro"
          disabled={phase === 'transition'}
        >
          <video
            key={introVideo}
            ref={videoRef}
            src={introVideo}
            autoPlay
            muted
            playsInline
            preload="auto"
            className={`hero-intro-video absolute inset-0 h-full w-full object-cover pointer-events-none ${
              phase === 'transition' ? 'hero-intro-video--out' : ''
            }`}
            aria-hidden
          />
        </button>
      )}

      {(phase === 'transition' || phase === 'landing') && (
        <div
          className={`absolute inset-0 z-20 flex flex-col items-center justify-center px-8 ${
            phase === 'transition' ? 'hero-landing-reveal' : 'animate-in fade-in duration-500'
          }`}
        >
          <div
            className={`mx-auto mb-12 w-full hero-logo-wrap ${
              phase === 'transition' ? 'hero-logo-wrap--pan' : ''
            }`}
            style={{ maxWidth: 'min(420px, 85vw)' }}
          >
            <img
              src={logo}
              alt="BeThatSpace™"
              width={420}
              height={236}
              className="block w-full object-contain mb-8"
            />

            <p
              className={`flex w-full items-center justify-between text-white text-[clamp(0.65rem,2.4vw,1.125rem)] tracking-[0.18em] font-medium whitespace-nowrap hero-landing-meta ${
                phase === 'transition' ? 'hero-landing-meta--in' : ''
              }`}
            >
              <span>Architecture</span>
              <span className="text-red-600 shrink-0 mx-1">|</span>
              <span>Interior Design</span>
              <span className="text-red-600 shrink-0 mx-1">|</span>
              <span>Design + Build</span>
            </p>
          </div>

          <button
            onClick={goToExplore}
            className={`group relative inline-flex items-center justify-center px-2 py-2 transition-transform duration-500 hover:scale-105 hero-landing-cta ${
              phase === 'transition' ? 'hero-landing-cta--in' : ''
            }`}
            aria-label="Explore"
            disabled={phase === 'transition'}
          >
            <span className="explore-flow tracking-[0.3em] text-base sm:text-lg font-medium">
              Explore
            </span>
          </button>

          <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none">
            <p className="text-white/40 text-xs">
              © {new Date().getFullYear()} BeThatSpace™. All Rights Reserved.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
        </div>
      )}
    </section>
  );
}
