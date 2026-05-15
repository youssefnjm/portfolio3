import React from "react";
import RotatingText from "../Components/RotatingText";
import { LuHardDriveDownload, LuArrowRight, LuSend } from "react-icons/lu";

// export default function AboutSection () {
//     return (<>
// 		<div className='container m-auto py-10 md:py-20' id="about">

// 			{/* ── About Me Heading ── */}
// 			{/* ── Top label ── */}
// 			<div className="flex items-center gap-3 mb-6">
// 				<span className="block w-8 h-px bg-purple-400" />
// 				<span className="text-purple-400 text-md font-semibold tracking-widest uppercase">Identity</span>
// 			</div>

// 			{/* ── Big heading ── */}
// 			<div className="flex flex-col gap-8 mb-20">
// 				<h2 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none tracking-tighter">
// 					Who<br />
// 					<span className="text-purple-400">I Am.</span>
// 				</h2>
// 				<p className="text-white/50 text-base max-w-xl leading-relaxed">
// 					A brief look into my journey as a developer, my philosophy on design, and the drive that keeps me building every single day.
// 				</p>
// 			</div>

// 			<div className='w-full flex flex-col md:flex-row items-center justify-center sm:gap-5 py-24'>
// 				<div className='m-auto mt-9 md:w-[50%] flex justify-center items-center'>
// 					<div className='img-buffer xl:w-100 md:h-100 w-62.5 h-62.5'></div>
// 				</div>
// 				<div className='w-[90%] lg:w-[50%] flex gap-2 sm:gap-10 items-center'>
// 					<div className='flex flex-col items-start justify-between gap-10 w-full'>
// 						<p className='flex flex-col items-start text-Base md:text-2xl'>
// 							Hi 👋, I’m Youssef Noujoum 
// 							<br className='block m-10'/>
// 							<span className='flex items-center gap-5'>
// 								and i am a 
// 								<RotatingText
// 									texts={['Front-End Developer', 'Back-End Developer', 'Full-Stack Developer', 'DevOps Enthusiast']}
// 									mainClassName="px-2 sm:px-2 md:px-3 bg-purple-400 text-white text-Base md:text-2xl overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
// 									staggerFrom={"last"}
// 									initial={{ y: "100%" }}
// 									animate={{ y: 0 }}
// 									exit={{ y: "-120%" }}
// 									staggerDuration={0.025}
// 									splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
// 									transition={{ type: "spring", damping: 30, stiffness: 400 }}
// 									rotationInterval={2000}
// 								/>	
// 							</span>
// 						</p>
//                         <p className="opacity-70 text-xs sm:text-base md:text-lg">
//                             I hold a diploma in digital development as a specialized technician, where I built a solid foundation in programming, web development, and problem solving through hands-on projects.
//                             I have now started my journey at 1337 Coding School, where I am deepening my software engineering skills with a focus on systems, low-level programming, and real-world problem solving. I’m driven by continuous learning, curiosity, and the goal of becoming a strong and versatile developer.
//                         </p>
//                         <div className="w-fit m-auto">
// 							<div className="pt-4">
// 								<button className="group flex items-center gap-4 text-white font-bold text-lg hover:text-purple-400 transition-colors duration-300">
// 									<span className="relative overflow-hidden inline-flex items-center justify-center w-14 h-14 rounded-full border border-white/20 group-hover:border-purple-400 group-hover:bg-purple-400/10 transition-all duration-300">
// 										<LuHardDriveDownload />
// 									</span>
// 									Send Message
// 								</button>
// 							</div>
//                         </div>
						
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</>)
// }


// import { LuHardDriveDownload, LuArrowRight } from "react-icons/lu";
// Ensure RotatingText and LuHardDriveDownload are imported

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden" id="about">
      {/* Background Decorative Element */}
      {/* <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full" /> */}

      <div className="container m-auto py-20 px-6 md:px-12">
        {/* ── Heading Section ── */}
        {/* ── Top label ── */}
        <div className="flex items-center gap-3 mb-6">
          <span className="block w-8 h-px bg-purple-400" />
          <span className="text-purple-400 text-md font-semibold tracking-widest uppercase">Identity</span>
        </div>

        {/* ── Big heading ── */}
        <div className="flex flex-col gap-8 mb-20">
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none tracking-tighter">
            Who<br />
            <span className="text-purple-400">I Am.</span>
          </h2>
          <p className="text-white/50 text-base max-w-xl leading-relaxed">
            A brief look into my journey as a developer, my philosophy on design, and the drive that keeps me building every single day.
          </p>
        </div>

        {/* ── Main Content Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Image Side - Bento Style */}
          <div className="lg:col-span-5 relative group">
            <div className="relative z-10 overflow-hidden rounded-2xl bg-[#111] border border-white/10 aspect-square flex items-center justify-center">
              {/* This replaces your img-buffer */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-full h-full img-buffer">
              </div>
            </div>
            {/* Decorative Frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-purple-400/20 rounded-2xl -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
          </div>

          {/* Text Side */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-4xl font-bold flex flex-wrap items-center gap-x-4 gap-y-2">
                Hi 👋, I’m Youssef Noujoum 
                <span className="flex items-center text-xl md:text-2xl font-medium text-white/60">
                  and I am a 
                </span>
                <div className="inline-flex">
                  <RotatingText
                    texts={['Front-End Developer', 'Back-End Developer', 'DevOps Enthusiast']}
                    mainClassName="px-4 bg-purple-400 text-white text-lg md:text-2xl font-bold py-1 rounded-sm"
                    staggerFrom={"last"}
                    rotationInterval={3000}
                  />
                </div>
              </h3>

              <div className="space-y-6 text-white/60 text-base leading-relaxed font-light">
                <p>
                  I hold a diploma in <span className="text-white font-medium">Digital Development</span>, where I mastered the art of building scalable web architectures and solving complex logic puzzles.
                </p>
                <p>
                  My current work at <span className="text-purple-400 font-mono">1337 (42 Network)</span> centers on tearing down abstractions. I’m actively sharpening my skills in <span className="text-white italic">C, C++ and low-level systems logic</span> to build high-performance, unmanaged code.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-6 pt-6">
              <button className="relative overflow-hidden px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform duration-300 flex items-center gap-2 cursor-pointer">
                Download CV
                <LuHardDriveDownload className="text-xl" />
              </button>
              
              <button className="group flex items-center gap-3 text-white font-semibold hover:text-purple-400 transition-colors cursor-pointer">
                <a href="#contact" className="group flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-purple-400 group-hover:bg-purple-400/10 transition-all">
                    <LuArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </div>
                  Let's collaborate
                </a>
              </button>
            </div>

            {/* Stats / Tech Tags */}
            {/* <div className="grid grid-cols-3 gap-4 pt-10 border-t border-white/5">
              <div>
                <p className="text-2xl font-black text-white">42</p>
                <p className="text-xs uppercase tracking-widest text-white/30 font-bold">Network</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white">05+</p>
                <p className="text-xs uppercase tracking-widest text-white/30 font-bold">Projects</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white">1337</p>
                <p className="text-xs uppercase tracking-widest text-white/30 font-bold">Campus</p>
              </div>
            </div> */}

          </div>

        </div>
      </div>
    </section>
  );
}