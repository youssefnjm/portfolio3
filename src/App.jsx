import { useEffect, useState } from 'react';
import './App.css'
import RotatingText from './Components/RotatingText.jsx'
import CardNav from './Components/NavComponent.jsx';
import GradientText from './Components/GradientText.jsx';
import LogoLoop from './Components/LogoLoop.jsx';
import ScrollDown from './Components/ScrollDown.jsx';
import ClickSpark from './Components/ClickSpark.jsx';
import { LuCode, LuGithub, LuLinkedin, LuInstagram, LuSend } from 'react-icons/lu';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss3, SiJavascript, SiMongodb, SiPhp } from 'react-icons/si';
import CertificationC from './assets/Certifes/Certification C.jpg';
import CertificationJs from './assets/Certifes/Certification js.jpg';
import CertificationPhp from './assets/Certifes/Certification php.jpg';
import Career from './page/Career.jsx';
import ProjectList from './data/ProjectList.js';
import LandingPage from './page/LandingPage.jsx';

const InfiniteLoop = () => {
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
		<div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
			<LogoLoop
				logos={techLogos}
				speed={120}
				direction="left"
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
		<div>
			<div className='container m-auto w-full h-full mb-24'>
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
					className="text-xl md:text-4xl m-10 p-5"
					>
						My Certifce
					</GradientText>
				</div>
				<div className='flex justify-center items-center flex-wrap gap-25'>
					<div className="max-w-sm bg-white border rounded-lg shadow-sm dark:bg-gray-900 dark:border-gray-700">
						<img className="rounded-t-lg w-full h-fit" src={CertificationC} alt="" />
						<div className="p-5">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> C Certification </h5>
						</div>
					</div>
					<div className="max-w-sm bg-white border rounded-lg shadow-sm dark:bg-gray-900 dark:border-gray-700">
						<img className="rounded-t-lg w-full h-fit" src={CertificationJs} alt="" />
						<div className="p-5">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> javascript Certification </h5>
						</div>
					</div>
					<div className="max-w-sm bg-white border rounded-lg shadow-sm dark:bg-gray-900 dark:border-gray-700">
						<img className="rounded-t-lg w-full h-fit" src={CertificationPhp} alt="" />
						<div className="p-5">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">php Certification </h5>
						</div>
					</div>
				</div>
			</div>

		</div>
	</>);
}

const Project = () => {
	return (<>
		<div className="container m-auto w-full h-full mb-28">
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
				className="text-xl md:text-4xl m-10 p-0"
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
								<span className='text-sm opacity-70'>{ele.desc}</span>
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

const Contact = () => {
	return (<>
		<div className="container m-auto w-full mb-10">
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
					className="text-xl md:text-4xl m-10 p-2 z-50"
				>
					Contact
				</GradientText>
			</div>
			<div className='w-fit md:w-2xl m-auto'>
				<form className='flex flex-col sm:gap-10'>
					<div className='flex flex-col sm:flex-row items-center justify-between'>
						<div className="group">      
							<input type="text" required className='w-full' />
							<span className="highlight"></span>
							<span className="bar"></span>
							<label>Name</label>
						</div>
						<div className="group">      
							<input type="text" required className='w-full' />
							<span className="highlight"></span>
							<span className="bar"></span>
							<label>Email</label>
						</div>
					</div>
					<div>
						<div className="group">      
							<textarea type="text" required className='w-full' />
							<span className="highlight"></span>
							<span className="bar"></span>
							<label>Message</label>
						</div>
					</div>
					<div className="relative group w-fit m-auto">
						<button
							className="relative inline-block p-px font-semibold leading-6 text-white dark:bg-gray-900 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
						>
							<span
								className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
							></span>
							<span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
								<div className="relative z-10 flex items-center space-x-2">
									<span className="transition-all duration-500 group-hover:translate-x-1">Send Message</span>
									<LuSend />
								</div>
							</span>
						</button>
					</div>
				</form>
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
			{ label: "Company", ariaLabel: "About Company" },
			{ label: "Careers", ariaLabel: "About Careers" }
		  ]
		},
		{
		  label: "Projects", 
		  bgColor: "#3C0204",
		  textColor: "#fff",
		  links: [
			{ label: "Featured", ariaLabel: "Featured Projects" },
			{ label: "Case Studies", ariaLabel: "Project Case Studies" }
		  ]
		},
		{
		  label: "Contact",
		  bgColor: "#610505", 
		  textColor: "#fff",
		  links: [
			{ label: "Email", ariaLabel: "Email us" },
			{ label: "Twitter", ariaLabel: "Twitter" },
			{ label: "LinkedIn", ariaLabel: "LinkedIn" }
		  ]
		}
	];

	
	return (
		<>
		<ClickSpark>
			<main className='m-auto relative'>
				{/* <div className=''  style={{zIndex: 100000000}}> */}
					<CardNav
						logo={<LuCode className="logo h-7"/>}
						logoAlt="Logo"
						items={items}
						baseColor="#fff"
						menuColor="#000"
						buttonBgColor="#B91C1C"
						buttonTextColor="#fff"
						ease="power3.out"
					/>
				{/* </div> */}
				<LandingPage />
				<div className='my-10'></div>
				<Career />
				<div className='my-10'></div>
				<InfiniteLoop />
				<div className='my-10'></div>
				<Certifce />
				<div className='my-10'></div>
				<Project />
				<div className='my-10'></div>
				<Contact />
			</main>
		</ClickSpark>
		</>
	)
}

export default App;
