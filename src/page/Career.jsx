import React, { useState, useEffect, useRef } from 'react';
import GradientText from '../Components/GradientText.jsx';

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
      const scrollDistance = 2000; // Distance to scroll before completing

      // Check if section should be fixed
      if (rect.top <= 0 && !hasCompleted) {
        setIsFixed(true);
        
        // Calculate progress based on how much we've scrolled past the section
        const scrolledPast = -rect.top;
        const progress = Math.min(scrolledPast / scrollDistance, 1);
        setScrollProgress(progress);

        // When complete, unlock scrolling
        if (progress >= 1) {
          setHasCompleted(true);
          setIsFixed(false);
        }
      } else if (rect.top > 0) {
        // Reset if we scroll back up
        setIsFixed(false);
        setScrollProgress(0);
        setHasCompleted(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasCompleted]);

      return (<>
        <div className='container m-auto'>
            <div 
                ref={sectionRef}
                style={{ 
                height: hasCompleted ? '100vh' : '3000px' // Extended height for scroll effect
                }}
            >
                <div 
                    className={`${isFixed ? 'fixed top-0 w-full' : ''} h-screen flex items-center justify-start bg-gray-900`}
                    style={{ zIndex: 10 }}
                >
                    <div className="relative flex items-center gap-12">
                        {/* tar7ib */}
                        <p className='w-fit text-start items-start'>
                            <GradientText
                            colors={[
                                "#C20A0A", // main red
                                "#FF6B6B", // lighter red/pink accent
                                "#FFD93D", // golden yellow for contrast
                                "#4079FF", // cool blue complement
                                "#40FFAA"  // aqua/green contrast
                            ]}
                            animationSpeed={5}
                            showBorder={false}
                            className="text-xl md:text-4xl m-10 p-0"
                            >
                                my career:
                            </GradientText>
                            <span className="opacity-80">Highlights of my learning and development journey.</span>
                        </p>

                        <div className="relative w-1 h-96 bg-gray-700 rounded-full overflow-hidden">
                        {/* line */}
                            <div
                                className="absolute top-0 w-full bg-gradient-to-t from-red-600 via-yellow-500 to-red-600 transition-all duration-100 ease-out"
                                style={{ 
                                height: `${scrollProgress * 100}%`,
                                boxShadow: scrollProgress > 0 ? '0 0 20px rgba(194, 10, 10, 0.6)' : 'none'
                                }}
                            />
                        
                        {/* Glowing dot at the top of fill */}
                            {scrollProgress > 0 && scrollProgress < 1 && (
                                <div 
                                className="absolute  w-3 h-3 bg-white rounded-full left-1/2 transform -translate-x-1/2"
                                style={{ 
                                    top: `${scrollProgress * 100}%`,
                                    boxShadow: '0 0 15px rgba(255, 255, 255, 0.8)',
                                    transition: 'top 0.1s ease-out'
                                }}
                                />
                            )}
                        </div>

                        {/* diplomes */}
                        <div className="text-white max-w-md">
                            <div className="space-y-4">
                                <div className={`transition-opacity duration-500 ${scrollProgress > 0.2 ? 'opacity-100' : 'opacity-20'}`}>
                                    <h3 className="text-2xl font-semibold mb-2">2021 - 2022</h3>
                                    <p className="opacity-80">Bachelor's Degree</p>
                                    <hr className="opacity-15 mt-2"/>
                                </div>
                                <div className={`transition-opacity duration-500 ${scrollProgress > 0.4 ? 'opacity-100' : 'opacity-20'}`}>
                                    <h3 className="text-2xl font-semibold mb-2">2022 - 2024</h3>
                                    <p className="opacity-80">Specialized Technician in Full-Stack Development & Digital Solutions</p>
                                    <hr className="opacity-15 mt-2"/>
                                </div>
                                <div className={`transition-opacity duration-500 ${scrollProgress > 0.6 ? 'opacity-100' : 'opacity-20'}`}>
                                    <h3 className="text-2xl font-semibold mb-2">2024 - Present</h3>
                                    <p className="opacity-80">Student at 1337 Coding School</p>
                                    <hr className="opacity-15 mt-2"/>
                                </div>
                                <div className={`transition-opacity duration-500 ${scrollProgress > 0.8 ? 'opacity-100' : 'opacity-20'}`}>
                                    <p className="opacity-80">...and the journey continues, incha’Allah.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}