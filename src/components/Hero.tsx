import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react';
import introVideoDesktop from '../assets/BeThatSpace_Intro_2.mp4';
import introVideoMobile from '../assets/BeThatSpace_Intro_Mobile.mp4';
import logo from '../assets/Bethat Space White Logo Transparent Background-01-RGB.png';

const LAUNCH_CRUMBS = Array.from({ length: 36 }, (_, i) => {
  const fromLeft = i % 2 === 0;
  const outward = fromLeft ? 1 : -1;
  return {
    origin: fromLeft ? 'left' : 'right',
    tx: `${outward * (60 + (i * 19) % 200)}px`,
    ty: `${-40 - (i * 19) % 260}px`,
    rot: `${(i * 51) % 360}deg`,
    delay: `${(i % 12) * 0.03}s`,
    kind: (i % 6) + 1,
  };
});

type Phase = 'launch' | 'launching' | 'video' | 'transition' | 'landing';

const MOBILE_INTRO_MQ = '(max-width: 767px)';
const LAUNCH_SEEN_KEY = 'bts-launch-seen';
/** Normal video → logo crossfade */
const HANDOFF_MS = 900;
/** Launch button exit → video */
const LAUNCH_OUT_MS = 900;

function initialHeroPhase(): Phase {
  if (typeof window === 'undefined') return 'launch';
  try {
    if (sessionStorage.getItem(LAUNCH_SEEN_KEY) === '1') return 'landing';
  } catch {
    /* ignore */
  }
  return 'launch';
}

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [phase, setPhase] = useState<Phase>(initialHeroPhase);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(MOBILE_INTRO_MQ).matches : false,
  );
  const handoffStartedRef = useRef(false);
  const settledRef = useRef(false);
  const settleTimerRef = useRef<number | null>(null);
  const launchTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_INTRO_MQ);
    const sync = () => setIsMobile(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  const introVideo = isMobile ? introVideoMobile : introVideoDesktop;

  const markLaunchSeen = useCallback(() => {
    try {
      sessionStorage.setItem(LAUNCH_SEEN_KEY, '1');
    } catch {
      /* ignore */
    }
  }, []);

  const settleLanding = useCallback(
    (delayMs: number) => {
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
        markLaunchSeen();
        setPhase('landing');
      }, delayMs);
    },
    [markLaunchSeen],
  );

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

  const startLaunch = useCallback(() => {
    if (phase !== 'launch') return;
    markLaunchSeen();
    setPhase('launching');

    if (launchTimerRef.current != null) {
      window.clearTimeout(launchTimerRef.current);
    }
    launchTimerRef.current = window.setTimeout(() => {
      handoffStartedRef.current = false;
      settledRef.current = false;
      setPhase('video');
    }, LAUNCH_OUT_MS);
  }, [phase, markLaunchSeen]);

  const goToExplore = () => {
    window.history.pushState({}, '', '/explore');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  useEffect(() => {
    if (phase !== 'video') return;

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
  }, [phase, beginHandoff, introVideo]);

  useEffect(() => {
    return () => {
      if (settleTimerRef.current != null) {
        window.clearTimeout(settleTimerRef.current);
      }
      if (launchTimerRef.current != null) {
        window.clearTimeout(launchTimerRef.current);
      }
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen bg-black overflow-hidden z-20">
      {(phase === 'launch' || phase === 'launching') && (
        <div
          className={`absolute inset-0 z-40 flex flex-col items-center justify-center px-8 ${
            phase === 'launching' ? 'hero-launch hero-launch--out' : 'hero-launch'
          }`}
        >
          {phase === 'launching' && (
            <div className="hero-launch__blast" aria-hidden>
              <span className="hero-launch__popper hero-launch__popper--left" />
              <span className="hero-launch__popper hero-launch__popper--right" />
              {LAUNCH_CRUMBS.map((crumb, i) => (
                <span
                  key={i}
                  className={`hero-launch__crumb hero-launch__crumb--${crumb.kind} hero-launch__crumb--${crumb.origin}`}
                  style={
                    {
                      '--tx': crumb.tx,
                      '--ty': crumb.ty,
                      '--rot': crumb.rot,
                      '--delay': crumb.delay,
                    } as CSSProperties
                  }
                />
              ))}
            </div>
          )}

          <button
            type="button"
            onClick={startLaunch}
            disabled={phase === 'launching'}
            className={`hero-launch__btn group ${phase === 'launching' ? 'hero-launch__btn--go' : ''}`}
            aria-label="Launch website"
          >
            <span className="hero-launch__btn-label">Launch Website</span>
          </button>
        </div>
      )}

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
