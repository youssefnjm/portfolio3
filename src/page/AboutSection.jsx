import React from "react";
import RotatingText from "../Components/RotatingText";
import ScrollDown from "../Components/ScrollDown";
import { LuDownload, LuInstagram, LuLinkedin } from "react-icons/lu";
import GradientText from "../Components/GradientText";

export default function AboutSection () {
    return (<>
		<div className='container m-auto' id="about">
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
                About Me
            </GradientText>
			<div className='w-full flex sm:flex-row items-center justify-center sm:gap-5 py-24'>
				<div className='mt-9 w-[30%] md:w-[50%] items-center hidden lg:block'>
					<div className='img-buffer xl:w-100 md:h-100 w-62.5 h-62.5'></div>
				</div>
				<div className='text-md md:text-4xl h-full w-[90%] lg:w-[50%] flex gap-2 sm:gap-10 items-center'>
					<div className='flex flex-col items-start justify-between gap-10 w-full'>
						<p className='flex flex-col items-start text-xl sm:text-3xl'>
							Hi 👋, I’m Youssef Noujoum 
							<br className='block m-10'/>
							<span className='flex items-center gap-5'>
								and i am a 
								<RotatingText
									texts={['Front-End Developer', 'Back-End Developer', 'Full-Stack Developer', 'DevOps Enthusiast']}
									mainClassName="px-2 sm:px-2 md:px-3 bg-red-600 text-white text-xl sm:text-3xl overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
									staggerFrom={"last"}
									initial={{ y: "100%" }}
									animate={{ y: 0 }}
									exit={{ y: "-120%" }}
									staggerDuration={0.025}
									splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
									transition={{ type: "spring", damping: 30, stiffness: 400 }}
									rotationInterval={2000}
								/>	
							</span>
						</p>
                        <p className="text-base opacity-70">
                            I hold a diploma in digital development as a specialized technician, where I built a solid foundation in programming, web development, and problem solving through hands-on projects.
                            I have now started my journey at 1337 Coding School, where I am deepening my software engineering skills with a focus on systems, low-level programming, and real-world problem solving. I’m driven by continuous learning, curiosity, and the goal of becoming a strong and versatile developer.
                        </p>
                        <div className="w-fit m-auto">
                            <a href="" download="" >
                                <button className="button m-auto">
                                    <span className="button_lg">
                                        <span className="button_sl"></span>
                                        <span className="button_text">Download Now</span>
                                    </span>
                                </button>
                            </a>
                        </div>
						
					</div>
					{/* <div className='flex flex-col w-fit'>
						<a href="" target='_blank' ><LuGithub color='#fff' className='text-xl sm:text-3xl'/></a>						
						<span className='block w-1 h-20 bg-red-600' style={{margin: "15px auto"}}></span>
						<a href="" target='_blank' ><LuLinkedin color='#fff' className='text-xl sm:text-3xl'/></a>
						<span className='block w-1 h-20 bg-red-600' style={{margin: "15px auto"}}></span>
						<a href="" target='_blank' ><LuInstagram color='#fff' className='text-xl sm:text-3xl'/></a>
					</div> */}
				</div>
			</div>
		</div>
	</>)
}