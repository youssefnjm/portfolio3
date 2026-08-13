import React, { useState, useEffect, useRef } from 'react';
import GradientText from '../Components/GradientText';

const TimelineItem = ({ year, title, description, progress, threshold }) => {
  const isVisible = progress > threshold;
  
  return (
    <div 
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-20 translate-y-4'
      }`}
    >
      <h3 className="text-xl font-bold mb-2 text-white/90">
        {year}
      </h3>
      <p className="text-xl font-bold mb-2 text-white/90">
        {title}
      </p>
      <p className="text-base text-white/50 leading-relaxed hidden md:block">
        {description}
      </p>
      <hr className="border-gray-700 mt-3 sm:mt-4" />
    </div>
  );
};

export default function CareerSection() {
  const sectionRef = useRef(null);
  const TextBoxRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const [heightBar, setHeightBar] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      setHeightBar(TextBoxRef.current.offsetHeight);
      const viewportHeight = window.innerHeight;
      const scrollDistance = sectionHeight - viewportHeight;

      if (rect.top <= 0 && rect.bottom > viewportHeight) {
        setIsFixed(true);
        const scrolledPast = -rect.top;
        const progress = Math.min(Math.max(scrolledPast / scrollDistance, 0), 1);
        setScrollProgress(progress);
      } else if (rect.top > 0) {
        setIsFixed(false);
        setScrollProgress(0);
      } else if (rect.bottom <= viewportHeight) {
        setIsFixed(false);
        setScrollProgress(1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const timelineData = [
    {
      year: "2021 - 2022",
      title: "Bachelor's Degree",
      description: "Completed high school in physical sciences, developing discipline and a strong interest in tech.",
      threshold: 0.15
    },
    {
      year: "2022 - 2024",
      title: "Specialized Technician in Full-Stack Development",
      description: "Learned full-stack development hands-on, building and deploying real-world digital solutions.",
      threshold: 0.35
    },
    {
      year: "2024 - Present",
      title: "Student at 1337 Coding School",
      description: "Advancing software engineering through project-based learning, low-level programming & systems.",
      threshold: 0.55
    }
  ];

  return (
    <div className="m-auto w-full" id="career">
      <div ref={sectionRef} className="relative" style={{ height: '3250px' }}>
        <div className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
          style={{ 
            position: isFixed ? 'fixed' : 'absolute',
            top: isFixed ? 0 : `${scrollProgress * 2000}px`,
            left: 0,
            right: 0,
            zIndex: 10,
            transition: isFixed ? 'none' : 'top 0.1s ease-out'
          }}
        >
          <div className="w-full max-w-7xl mx-auto">
            <div className="w-full flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16">
              
              <div className="w-full flex flex-col justify-center items-left lg:w-2/5 lg:sticky lg:top-0">
                {/* ── Top label ── */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="block w-8 h-px bg-purple-400" />
                  <span className="text-purple-400 text-xs font-semibold tracking-widest uppercase">History</span>
                </div>

                {/* ── Big heading ── */}
                <div className="flex flex-col gap-8 mb-20">
                  <h2 className="text-4xl sm:text-7xl lg:text-8xl font-black leading-none tracking-tighter">
                    My<br />
                    <span className="text-purple-400">Path.</span>
                  </h2>
                  <p className="text-white/50 text-base max-w-xl leading-relaxed">
                    Tracing my professional timeline from academic foundations to real-world experience and industry milestones.
                  </p>
                </div>
              </div>

              {/* Timeline Section */}
              <div className="w-full lg:flex-1 flex gap-6 sm:gap-8 lg:gap-12">
                
                <div className="shrink-0 my-auto">
                  <div className="relative w-1 rounded-full overflow-hidden shadow-lg"style={{ height: `${heightBar}px`, minHeight: '300px' }}>

                    <div className="absolute top-0 w-full transition-all duration-100 ease-out" style={{height: `${scrollProgress * 100}%`, background: 'linear-gradient(to top, #581C87, #A855F7, #00D4FF, #A855F7, #581C87)', boxShadow: scrollProgress > 0 ? '0 0 20px rgba(220, 38, 38, 0.5), 0 0 40px rgba(220, 38, 38, 0.3)' : 'none' }}/>
                  
                    {scrollProgress > 0 && scrollProgress < 1 && (
                      <div 
                        className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-lg animate-pulse"
                        style={{ 
                          top: `calc(${scrollProgress * 100}% - 8px)`,
                          boxShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 215, 0, 0.4)',
                          transition: 'top 0.1s ease-out'
                        }}
                      />
                    )}
                  </div>
                </div>

                <div className="flex-1 min-w-0" ref={TextBoxRef}>
                  <div className="space-y-6 sm:space-y-12 md:space-y-16 lg:space-y-18 2lg:space-y-22">
                    {timelineData.map((item, index) => (
                      <TimelineItem
                        key={index}
                        year={item.year}
                        title={item.title}
                        description={item.description}
                        progress={scrollProgress}
                        threshold={item.threshold}
                      />
                    ))}

                    <div className={`transition-all duration-700 text-center ${scrollProgress > 0.75 ? 'opacity-100 translate-y-0' : 'opacity-20 translate-y-4'}`}>
                      <p style={{
                          backgroundImage: 'linear-gradient(to right, #581C87, #A855F7, #00D4FF, #A855F7, #581C87)',
                          WebkitBackgroundClip: 'text',
                          backgroundClip: 'text'
                        }} className="text-xl font-bold text-transparent italic">
                        ...and the journey continues, incha'Allah.
                      </p>
                    </div>

                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}