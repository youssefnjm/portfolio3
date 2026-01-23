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
      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 text-white">
        {year}
      </h3>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2 text-gray-200">
        {title}
      </p>
      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 leading-relaxed">
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
      description: "Completed my final year of high school in physical sciences, where I developed discipline, analytical thinking, and a strong interest in technology and problem solving.",
      threshold: 0.15
    },
    {
      year: "2022 - 2024",
      title: "Specialized Technician in Full-Stack Development",
      description: "Gained hands-on experience in full-stack web development, working with modern technologies to design, build, and deploy real-world digital solutions.",
      threshold: 0.35
    },
    {
      year: "2024 - Present",
      title: "Student at 1337 Coding School",
      description: "Currently deepening my software engineering skills through project-based learning, low-level programming, and system development, with a strong focus on problem solving and performance.",
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
              
              <div className="w-full flex flex-col justify-center items-center lg:w-2/5 lg:sticky lg:top-0">
                <GradientText animationSpeed={5} showBorder={false}>
                  My Education
                </GradientText>
                <p className="w-full text-xs sm:text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl text-center">
                  A timeline of my learning journey, from academic foundations to hands-on technical training, reflecting my continuous growth as a developer.
                </p>
              </div>

              {/* Timeline Section */}
              <div className="w-full lg:flex-1 flex gap-6 sm:gap-8 lg:gap-12">
                
                <div className="shrink-0 my-auto">
                  <div className="relative w-1 rounded-full overflow-hidden shadow-lg"style={{ height: `${heightBar}px`, minHeight: '300px' }}>

                    <div className="absolute top-0 w-full transition-all duration-100 ease-out" style={{height: `${scrollProgress * 100}%`, background: 'linear-gradient(to top, #dc2626, #facc15, #dc2626)', boxShadow: scrollProgress > 0 ? '0 0 20px rgba(220, 38, 38, 0.5), 0 0 40px rgba(220, 38, 38, 0.3)' : 'none' }}/>
                  
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

                    <div className={`transition-all duration-700 ${scrollProgress > 0.75 ? 'opacity-100 translate-y-0' : 'opacity-20 translate-y-4'}`}>
                      <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-r from-yellow-400 via-red-500 to-yellow-400 italic">
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