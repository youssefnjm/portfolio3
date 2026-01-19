import React, { useState, useEffect, useRef } from 'react';
import GradientText from '../Components/GradientText';

export default function Career() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const scrollDistance = 2000;

      if (rect.top <= 0 && rect.bottom > window.innerHeight) {
        setIsFixed(true);
        setHasCompleted(false);
        
        const scrolledPast = -rect.top;
        const progress = Math.min(scrolledPast / scrollDistance, 1);
        setScrollProgress(progress);

        if (progress >= 1 && !hasCompleted) {
          setHasCompleted(true);
        }
      } else if (rect.top > 0) {
        setIsFixed(false);
        setScrollProgress(0);
        setHasCompleted(false);
      } else if (rect.bottom <= window.innerHeight) {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasCompleted]);

  return (
    <>
      <div className='container m-auto'>
        <div 
          ref={sectionRef}
          style={{ 
            height: '3250px',
            position: 'relative'
          }}
        >
          <div 
            className={`h-screen flex items-center justify-start`}
            style={{ 
              position: isFixed ? 'fixed' : 'absolute',
              top: isFixed ? 0 : `${scrollProgress * 2000}px`,
              left: 0,
              right: 0,
              zIndex: 10,
              transition: isFixed ? 'none' : 'top 0.1s ease-out'
            }}
          >
            <div className="container m-auto">
              <div className="relative flex items-center gap-12 flex-col lg:flex-row">
                <div className='w-fit text-center items-start'>
                    <GradientText
                        colors={[
                            "#C20A0A", // main red
                            "#FF6B6B", // lighter red/pink accent
                            "#FFD93D", // golden yellow for contrast
                            "#FF6B6B", // lighter red/pink accent
                            "#C20A0A", // main red
                        ]}
                        animationSpeed={5}
                        showBorder={false}
                        className="text-xl md:text-4xl m-10 p-0"
                    >
                        My Education
                    </GradientText>
                  <span className=" block opacity-80 text-l sm:text-2xl">Highlights of my learning and development journey.</span>
                </div>
      
                <div className='flex items-center gap-12'>
                  <div className="relative w-1 h-96 xl:h-[1000px] md:h-[800px] bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 w-full bg-gradient-to-t from-red-600 via-yellow-500 to-red-600 transition-all duration-100 ease-out"
                      style={{ 
                        height: `${scrollProgress * 100}%`,
                        boxShadow: scrollProgress > 0 ? '0 0 20px rgba(194, 10, 10, 0.6)' : 'none'
                      }}
                    />
                  
                    {scrollProgress > 0 && scrollProgress < 1 && (
                      <div 
                        className="absolute w-3 h-3 bg-white rounded-full left-1/2 transform -translate-x-1/2"
                        style={{ 
                          top: `${scrollProgress * 100}%`,
                          boxShadow: '0 0 15px rgba(255, 255, 255, 0.8)',
                          transition: 'top 0.1s ease-out'
                        }}
                      />
                    )}
                  </div>

                  <div className="text-white max-w-md">
                    <div className="space-y-16 xl:space-y-48 md:space-y-36">
                      <div className={`transition-opacity duration-500 ${scrollProgress > 0.2 ? 'opacity-100' : 'opacity-20'}`}>
                        <h3 className="text-2xl font-semibold mb-2">2021 - 2022</h3>
                        <p className="opacity-80 text-l sm:text-2xl">Bachelor's Degree</p>
                        <hr className="opacity-15 mt-2"/>
                      </div>
                      <div className={`transition-opacity duration-500 ${scrollProgress > 0.4 ? 'opacity-100' : 'opacity-20'}`}>
                        <h3 className="text-2xl font-semibold mb-2">2022 - 2024</h3>
                        <p className="opacity-80 text-l sm:text-2xl">Specialized Technician in Full-Stack Development & Digital Solutions</p>
                        <hr className="opacity-15 mt-2"/>
                      </div>
                      <div className={`transition-opacity duration-500 ${scrollProgress > 0.6 ? 'opacity-100' : 'opacity-20'}`}>
                        <h3 className="text-2xl font-semibold mb-2">2024 - Present</h3>
                        <p className="opacity-80 text-l sm:text-2xl">Student at 1337 Coding School</p>
                        <hr className="opacity-15 mt-2"/>
                      </div>
                      <div className={`transition-opacity duration-500 ${scrollProgress > 0.8 ? 'opacity-100' : 'opacity-20'}`}>
                        <p className="opacity-80 text-l sm:text-2xl">...and the journey continues, incha'Allah.</p>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}