import React from "react";
import GradientText from "../Components/GradientText";
import ProjectList from '../data/ProjectList.js';


function ProjectSection () {
	return (<>
		<div className="container m-auto w-full h-full py-10 md:py-20" id="project">
			{/* <div className='pl-1.5- w-full items-start'> */}
				{/* <GradientText
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
					My Project
				</GradientText> */}
				{/* ── Top label ── */}
				<div className="flex items-center gap-3 mb-6">
				<span className="block w-8 h-px bg-purple-400" />
				<span className="text-purple-400 text-xs font-semibold tracking-widest uppercase">Portfolio</span>
				</div>

				{/* ── Big heading ── */}
				<div className="flex flex-col gap-8 mb-20">
				<h2 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none tracking-tighter">
					Selected<br />
					<span className="text-purple-400">Works.</span>
				</h2>
				<p className="text-white/50 text-base max-w-xl leading-relaxed">
					A showcase of my favorite builds, ranging from experimental side projects to full-scale production applications.
				</p>
				</div>
			{/* </div> */}
			<div className="project">
				<ul className='mt-2.5 mb-2.5'>
					{ProjectList.map((ele, index) => (
						<li key={index} className='flex items-center justify-between h-fit border-b border-gray-600 p-2 sm:p-4 md:p-8'>
							<div className='flex flex-col justify-center items-start gap-2'>
								<span className='text-sm md:text-2xl'>{ele.name}</span>
								<span className='text-xs sm:text-base md:text-lg opacity-70' style={{lineHeight: "1.3", letterSpacing: "-0.03em"}}>{ele.desc}</span>
							</div>
							<div className="img-cont">
								<img src={ele.img} alt={ele.name} />
							</div>
							<span className='text-xs sm:text-base md:text-lg hidden md:block opacity-80'>
								<a href={ele.link}>link to project</a>
							</span>
						</li>
					))}
				</ul> 
			</div>
		</div>
	</>);
}

export default ProjectSection;