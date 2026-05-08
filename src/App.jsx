import './App.css'
import CardNav from './Components/NavComponent.jsx';
import GradientText from './Components/GradientText.jsx';
import LogoLoop from './Components/LogoLoop.jsx';
import ClickSpark from './Components/ClickSpark.jsx';
import { LuGhost } from 'react-icons/lu';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss, SiJavascript, SiMongodb, SiPhp } from 'react-icons/si';
import { Bounce, ToastContainer } from 'react-toastify';

import CareerSection from './page/CareerSection.jsx';
import LandingSection from './page/LandingSection.jsx';
import ContactSection from './page/ContactSection.jsx';
import AboutSection from './page/AboutSection.jsx';
import SkillsSection from './page/SkillsSection.jsx';
import ProjectSection from './page/ProjectSection.jsx';
import CertifceSection from './page/CertifceSection.jsx';

const InfiniteLoop = ({direction = "left" }) => {
	const techLogos = [
		{ node: <SiReact />, title: "React", href: "#" },
		{ node: <SiNextdotjs />, title: "Next.js", href: "#" },
		{ node: <SiMongodb />, title: "Mongodb", href: "#" },
		{ node: <SiTypescript />, title: "TypeScript", href: "#" },
		{ node: <SiJavascript />, title: "Javascript", href: "#" },
		{ node: <SiTailwindcss />, title: "Tailwind CSS", href: "#" },
		{ node: <SiHtml5 />, title: "HTML", href: "#" },
		{ node: <SiCss />, title: "CSS", href: "#" },
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

function App() {

	const items = [
		{
			label: "About",
			bgColor: "#220933",
			textColor: "#fff",
			links: [
				{ label: "About Me", ariaLabel: "About Me", href: "#about" },
				{ label: "Education", ariaLabel: "About Education", href: "#career" },
				{ label: "Certifce", ariaLabel: "About Certifce", href: "#certifce" }
			]
		},
		{
			label: "Projects", 
			bgColor: "#310E4A",
			textColor: "#fff",
			links: [
				{ label: "Skills", ariaLabel: "Skills i learn", href: "#skills" },
				{ label: "Projects", ariaLabel: "Projects i have done", href: "#project" },
			]
		},
		{
			label: "Contact",
			bgColor: "#431466", 
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
		<ToastContainer
			position="top-right"
			autoClose={5000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick={false}
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme="light"
			transition={Bounce}
		/>
		<ClickSpark>
			<main className='m-auto relative overflow-hidden'>
				<CardNav
					logo={<LuGhost className="logo h-8 w-8"/>}
					logoAlt="Logo"
					items={items}
					baseColor="#fff"
					menuColor="#000"
					buttonBgColor="#7E22CE"
					buttonTextColor="#fff"
					ease="power3.out"
				/>
				<LandingSection />
				<div className='my-10'></div>
				<AboutSection />
				<div className='my-10'></div>
				<CareerSection />
				<div className='my-10'></div>
				<CertifceSection />
				<div className='my-10'></div>
				<div className='py-10 md:py-20'>
					<InfiniteLoop />
					<InfiniteLoop direction={"right"}/>
				</div>
				<div className='my-10'></div>
				<SkillsSection />
				<div className='my-10'></div>
				<ProjectSection />
				<div className='my-10'></div>
				<ContactSection />
				<footer className="py-8 px-4 border-t border-white/10 max-w-6xl mx-auto flex flex-row items-center justify-between gap-4=1">
					<p className="text-xs text-white/50"> Crafted with care by <span className="text-purple-400">youssef noujoum</span></p>
					<LuGhost size={24} className='text-purple-400'/>
					<p className="text-xs text-white/50">© 2025 All rights reserved</p>
				</footer>
			</main>
		</ClickSpark>
		</>
	)
}

export default App;