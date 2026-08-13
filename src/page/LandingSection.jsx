import { useEffect, useRef, useState } from 'react';

const Ghost = ({ pos, size, delay = 0 }) => (
  <div
    className="ghost-anim pointer-events-none absolute z-10 will-change-transform hidden sm:block"
    style={{
      transform: `translate(${pos.x}px, ${pos.y}px)`,
      transition: 'transform 1.8s ease-out',
    }}
  >
    <svg
      className="ghost-float filter-[drop-shadow(0_0_40px_rgba(255,255,255,0.9))] sm:filter-[drop-shadow(0_0_50px_rgba(255,255,255,1))]"
      height={size}
      width={size}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m508.374 432.802s-46.6-39.038-79.495-275.781c-8.833-87.68-82.856-156.139-172.879-156.139-90.015 0-164.046 68.458-172.879 156.138-32.895 236.743-79.495 275.782-79.495 275.782-15.107 25.181 20.733 28.178 38.699 27.94 35.254-.478 35.254 40.294 70.516 40.294 35.254 0 35.254-35.261 70.508-35.261s37.396 45.343 72.65 45.343 37.389-45.343 72.651-45.343c35.254 0 35.254 35.261 70.508 35.261s35.27-40.772 70.524-40.294c17.959.238 53.798-2.76 38.692-27.94z"
        className="fill-white opacity-90"
      />
      <circle
        cx="210" cy="225" r="22"
        className="eye-anim origin-center fill-black"
      />
      <circle
        cx="297" cy="225" r="22"
        className="eye-anim origin-center fill-black"
        style={{ animationDelay: `${0.1 + delay}s` }}
      />
    </svg>
  </div>
);

function getGhostSize(width) {
  if (width < 640) return 90;
  if (width < 768) return 110;
  if (width < 1024) return 130;
  if (width < 1536) return 150;
  return 170;
}

function LandingSection() {
  const sectionRef = useRef(null);
  const [ghostSize, setGhostSize] = useState(150);
  const [ghost1Pos, setGhost1Pos] = useState({ x: 0, y: 0 });
  const [ghost2Pos, setGhost2Pos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let currentSize = getGhostSize(window.innerWidth);
    setGhostSize(currentSize);

    const randomOffset = () => {
      const { offsetWidth: w, offsetHeight: h } = section;
      const maxX = Math.max(0, w - currentSize - 40);
      const maxY = Math.max(0, h - currentSize - 40);
      return { x: Math.random() * maxX, y: Math.random() * maxY };
    };

    const place = () => {
      setGhost1Pos(randomOffset());
      setGhost2Pos(randomOffset());
    };
    place();

    const interval1 = setInterval(() => setGhost1Pos(randomOffset()), 2200);
    const interval2 = setInterval(() => setGhost2Pos(randomOffset()), 3000);

    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        currentSize = getGhostSize(window.innerWidth);
        setGhostSize(currentSize);
        place();
      }, 200);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
      <div id="landing" ref={sectionRef} className="mx-auto w-full max-w-7xl px-6 py-20 md:px-12 h-screen">
        <Ghost pos={ghost1Pos} size={ghostSize} />
        <Ghost pos={ghost2Pos} size={ghostSize} delay={0.3} />

        <div className="relative flex h-full w-full flex-col items-center justify-center">
          <h1 
		  	className="animate-hero-in font-['Boldonse'] font-normal uppercase leading-[1.3] tracking-[-0.02em] text-center text-[7vw] text-white text-balance sm:text-[7vw] md:text-[6vw] lg:text-[4.5rem]"
		  	style={{fontFamily: 'Boldonse, system-ui'}}
		  >
            Designed for scale.
            <br />
            Built for performance.
            <br />
            Coded with passion.
          </h1>
          <span 
		  	className="animate-hero-in mt-6 text-xs uppercase tracking-[0.2em] text-white/50 sm:text-sm [animation-delay:0.15s]"
		  >
            Compiled with zero errors
          </span>
        </div>
      </div>
  );
}

export default LandingSection;
