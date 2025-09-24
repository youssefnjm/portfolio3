import './App.css'
import RotatingText from './Components/RotatingText.jsx'
import CardNav from './Components/NavComponent.jsx';
import { Code } from 'lucide-react';
import ScrollDown from './Components/ScrollDown.jsx';
import ClickSpark from './Components/ClickSpark.jsx';

const Landing = () => {
	return (<>
		<div className='w-full h-screen flex items-center md:justify-start justify-center gap-5'>
			<div className='text-2xl md:text-4xl mt-9 md:w-[50%]'>
				<p >
					Hi 👋, I’m Youssef Noujoum 
					<br className='block m-10'/>
					<span className='flex items-center gap-5'>
						and i am a 
						<RotatingText 
							texts={['Front-End Developer', 'Back-End Developer', 'Full-Stack Developer', 'DevOps Enthusiast']}
							mainClassName="px-2 sm:px-2 md:px-3 bg-purple-600 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
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
				<ScrollDown />
			</div>
		</div>
	</>)
}
function App() {

	const items = [
		{
		  label: "About",
		  bgColor: "#0D0716",
		  textColor: "#fff",
		  links: [
			{ label: "Company", ariaLabel: "About Company" },
			{ label: "Careers", ariaLabel: "About Careers" }
		  ]
		},
		{
		  label: "Projects", 
		  bgColor: "#170D27",
		  textColor: "#fff",
		  links: [
			{ label: "Featured", ariaLabel: "Featured Projects" },
			{ label: "Case Studies", ariaLabel: "Project Case Studies" }
		  ]
		},
		{
		  label: "Contact",
		  bgColor: "#271E37", 
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
			<main className='container w-screen m-auto'>
				<CardNav
					logo={<Code className="logo h-[28px]"/>}
					logoAlt="Logo"
					items={items}
					baseColor="#fff"
					menuColor="#000"
					buttonBgColor="#111"
					buttonTextColor="#fff"
					ease="power3.out"
					/>
				<Landing />
			</main>
		</ClickSpark>
		</>
	)
}

export default App;
