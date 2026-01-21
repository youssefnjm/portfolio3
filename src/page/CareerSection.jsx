import React, { useState, useEffect, useRef } from 'react';
import GradientText from '../Components/GradientText';

export default function CareerSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
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

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className='container m-auto' id="career">
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
                <div className='w-fit md:w-[35%] text-center items-start'>
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
                    >
                        My Education
                    </GradientText>
                  <span className="block opacity-70 text-md sm:text-l">A timeline of my learning journey, from academic foundations to hands-on technical training, reflecting my continuous growth as a developer.”</span>
                </div>
                {/* <div className='w-full grid grid-cols-[10_1fr] gap-2'> */}
                <div className='w-full flex items-center gap-12'>
                  
                  <div className="relative w-1 h-96 xl:h-250 md:h-200 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 w-full bg-linear-to-t from-red-600 via-yellow-500 to-red-600 transition-all duration-100 ease-out"
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

                  <div className="text-white flex-1">
                    <div className="space-y-16 xl:space-y-48 md:space-y-36 w-full">
                      <div className={`transition-opacity duration-500 ${scrollProgress > 0.2 ? 'opacity-100' : 'opacity-20'} w-full`}>
                        <h3 className="text-2xl font-semibold mb-2">2021 - 2022</h3>
                        <p className="opacity-80 text-l sm:text-2xl">Bachelor's Degree</p>
                        <p className='opacity-70 text-md sm:text-l'>Completed my final year of high school in physical sciences, where I developed discipline, analytical thinking, and a strong interest in technology and problem solving.</p>
                        <hr className="opacity-15 mt-2"/>
                      </div>
                      <div className={`transition-opacity duration-500 ${scrollProgress > 0.4 ? 'opacity-100' : 'opacity-20'} w-full`}>
                        <h3 className="text-2xl font-semibold mb-2">2022 - 2024</h3>
                        <p className="opacity-80 text-l sm:text-2xl">Specialized Technician in Full-Stack Development & Digital Solutions</p>
                        <p className='opacity-70 text-md sm:text-l'>Gained hands-on experience in full-stack web development, working with modern technologies to design, build, and deploy real-world digital solutions.</p>
                        <hr className="opacity-15 mt-2"/>
                      </div>
                      <div className={`transition-opacity duration-500 ${scrollProgress > 0.6 ? 'opacity-100' : 'opacity-20'} w-full`}>
                        <h3 className="text-2xl font-semibold mb-2">2024 - Present</h3>
                        <p className="opacity-80 text-l sm:text-2xl">Student at 1337 Coding School</p>
                        <p className='opacity-70 text-md sm:text-l'>Currently deepening my software engineering skills through project-based learning, low-level programming, and system development, with a strong focus on problem solving and performance.</p>
                        <hr className="opacity-15 mt-2"/>
                      </div>
                      <div className={`transition-opacity duration-500 ${scrollProgress > 0.8 ? 'opacity-100' : 'opacity-20'} w-full`}>
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