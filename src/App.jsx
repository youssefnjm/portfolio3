import { useEffect, useState } from 'react';
import './App.css'
import RotatingText from './Components/RotatingText.jsx'
import CardNav from './Components/NavComponent.jsx';
import GradientText from './Components/GradientText.jsx';
import LogoLoop from './Components/LogoLoop.jsx';
import ScrollDown from './Components/ScrollDown.jsx';
import ClickSpark from './Components/ClickSpark.jsx';
import { LuCode, LuGithub, LuLinkedin, LuInstagram, LuSend, LuGhost } from 'react-icons/lu';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss3, SiJavascript, SiMongodb, SiPhp } from 'react-icons/si';
import CertificationC from './assets/Certifes/Certification C.jpg';
import CertificationJs from './assets/Certifes/Certification js.jpg';
import CertificationPhp from './assets/Certifes/Certification php.jpg';
import CareerSection from './page/CareerSection.jsx';
import ProjectList from './data/ProjectList.js';
import LandingSection from './page/LandingSection.jsx';
import ContactSection from './page/ContactSection.jsx';
import AboutSection from './page/AboutSection.jsx';
import SkillsSection from './page/SkillsSection.jsx';

const InfiniteLoop = ({direction = "left" }) => {
	const techLogos = [
		{ node: <SiReact />, title: "React", href: "#" },
		{ node: <SiNextdotjs />, title: "Next.js", href: "#" },
		{ node: <SiMongodb />, title: "Mongodb", href: "#" },
		{ node: <SiTypescript />, title: "TypeScript", href: "#" },
		{ node: <SiJavascript />, title: "Javascript", href: "#" },
		{ node: <SiTailwindcss />, title: "Tailwind CSS", href: "#" },
		{ node: <SiHtml5 />, title: "HTML", href: "#" },
		{ node: <SiCss3 />, title: "CSS", href: "#" },
		{ node: <SiPhp />, title: "PHP", href: "#" },
	];

	return (<>
		<div style={{ position: 'relative', overflow: 'hidden' }}>
			<LogoLoop
				logos={techLogos}
				speed={120}
				direction={direction}
				logoHeight={48}
				gap={40}
				pauseOnHover
				scaleOnHover
				fadeOut
				fadeOutColor="#0D0D0D"
				ariaLabel="Technology partners"
			/>
		</div>
	</>);
}

const Certifce = () => {

	return (<>
		<div className='container m-auto w-full py-20' id="certifce">
			<div className='pl-1.5- w-full text-center items-start mb-10'>
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
					My Certifce
				</GradientText>
			</div>
			<div className='grid grid-cols-3 gap-10'>
				<div className="relative p-2 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-zinc-600 transition-all duration-300">
					<img className="rounded-t-lg w-full h-fit" src={CertificationC} alt="" />
					<div className="p-5">
						<h5 className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white" style={{lineHeight: "1.3", letterSpacing: "-0.02em"}}> C Certification </h5>
					</div>
				</div>
				<div className="relative p-2 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-zinc-600 transition-all duration-300">
					<img className="rounded-t-lg w-full h-fit" src={CertificationJs} alt="" />
					<div className="p-5">
						<h5 className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white" style={{lineHeight: "1.3", letterSpacing: "-0.02em"}}> javascript Certification </h5>
					</div>
				</div>
				<div className="relative p-2 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-zinc-600 transition-all duration-300">
					<img className="rounded-t-lg w-full h-fit" src={CertificationPhp} alt="" />
					<div className="p-5">
						<h5 className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white" style={{lineHeight: "1.3", letterSpacing: "-0.02em"}}>php Certification </h5>
					</div>
				</div>
			</div>
		</div>
	</>);
}

const Project = () => {
	return (<>
		<div className="container m-auto w-full h-full py-20" id="project">
			<div className='pl-1.5- w-full text-center items-start'>
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
					My Project
				</GradientText>
			</div>
			<div className="project">
				<ul className='mt-2.5 mb-2.5'>
					{ProjectList.map((ele, index) => (
						<li key={index} className='flex items-center justify-between h-24 border-b border-gray-600 p-7'>
							<div className='flex flex-col justify-center items-start gap-2'>
								<span className='text-sm md:text-2xl'>{ele.name}</span>
								<span className='text-sm opacity-70' style={{lineHeight: "1.3", letterSpacing: "-0.03em"}}>{ele.desc}</span>
							</div>
							<div className="img-cont">
								<img src={ele.img} alt={ele.name} />
							</div>
							<span className='text-sm md:text-xl opacity-80'>
								<a href={ele.link}>link to project</a>
							</span>
						</li>
					))}
				</ul> 
			</div>
		</div>
	</>);
}

function App() {

	const items = [
		{
			label: "About",
			bgColor: "#270202",
			textColor: "#fff",
			links: [
				{ label: "About Me", ariaLabel: "About Me", href: "#about" },
				{ label: "Education", ariaLabel: "About Education", href: "#career" },
				{ label: "Certifce", ariaLabel: "About Certifce", href: "#certifce" }
			]
		},
		{
			label: "Projects", 
			bgColor: "#3C0204",
			textColor: "#fff",
			links: [
				{ label: "Skills", ariaLabel: "Skills i learn", href: "#skills" },
				{ label: "Projects", ariaLabel: "Projects i have done", href: "#project" },
			]
		},
		{
			label: "Contact",
			bgColor: "#610505", 
			textColor: "#fff",
			links: [
				{ label: "Contact", ariaLabel: "Contact us", href: "#contact" },
				{ label: "Email", ariaLabel: "Email us", href: "" },
				{ label: "LinkedIn", ariaLabel: "LinkedIn", href: "" },
				{ label: "Instagrame", ariaLabel: "Instagrame", href: "" },
			]
		}
	];

	
	return (
		<>
		<ClickSpark>
			<main className='m-auto relative overflow-hidden'>
				<CardNav
					logo={<LuGhost className="logo h-8 w-8"/>}
					logoAlt="Logo"
					items={items}
					baseColor="#fff"
					menuColor="#000"
					buttonBgColor="#B91C1C"
					buttonTextColor="#fff"
					ease="power3.out"
				/>
				<LandingSection />
				<div className='my-10'></div>
				<AboutSection />
				<div className='my-10'></div>
				<CareerSection />
				<div className='my-10'></div>
				<Certifce />
				<div className='my-10'></div>
				<div className='py-20'>
					<InfiniteLoop />
					<InfiniteLoop direction={"right"}/>
				</div>
				<div className='my-10'></div>
				<SkillsSection />
				<div className='my-10'></div>
				<Project />
				<div className='my-10'></div>
				<ContactSection />
				<footer className="py-8 px-4 ">
					<div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
						<p className="text-sm text-muted-foreground">
							Crafted with care by <span className="text-red-500">youssef noujoum</span> 
						</p>
						<div>
							<LuGhost size={24} className='text-red-600'/>
						</div>
						<p className="text-sm text-muted-foreground font-mono">
						© 2025 All rights reserved
						</p>
					</div>
				</footer>
			</main>
		</ClickSpark>
		</>
	)
}

export default App;