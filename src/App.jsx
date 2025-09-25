import './App.css'
import RotatingText from './Components/RotatingText.jsx'
import CardNav from './Components/NavComponent.jsx';
import GradientText from './Components/GradientText.jsx';
import { Code, Github, Linkedin, Instagram } from 'lucide-react';
import ScrollDown from './Components/ScrollDown.jsx';
import ClickSpark from './Components/ClickSpark.jsx';

const Landing = () => {
	return (<>
		<div className='w-full h-screen flex items-center md:justify-start justify-center gap-5'>
			<div className='text-md md:text-4xl h-full flex items-center w-[70%] md:w-[50%]'>
				<div className="flex gap-10 h-full  w-[100%] items-center">
					<div className='flex flex-col w-fit'>
						<a href="" target='_blank' ><Github color='#fff' size={30}/></a>						
						<span className='block w-1 h-20 bg-red-600' style={{margin: "15px auto"}}></span>
						<a href="" target='_blank' ><Linkedin color='#fff' size={30}/></a>
						<span className='block w-1 h-20 bg-red-600' style={{margin: "15px auto"}}></span>
						<a href="" target='_blank' ><Instagram color='#fff' size={30}/></a>
					</div>
					<div className='items-center w-full'>
						<p className='flex flex-col items-start'>
							Hi 👋, I’m Youssef Noujoum 
							<br className='block m-10'/>
							<span className='flex items-center gap-5'>
								and i am a 
								<RotatingText 
									texts={['Front-End Developer', 'Back-End Developer', 'Full-Stack Developer', 'DevOps Enthusiast']}
									mainClassName="px-2 sm:px-2 md:px-3 bg-red-600 text-white text-sm md:text-4xl overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
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
			</div>
			<div className='mt-9 w-[30%] md:w-[50%] items-center'>
				<div className='img-buffer xl:w-[400px] md:h-[400px] w-[250px] h-[250px]'></div>
			</div>
		</div>
	</>)
}

const Career = () => {
	return (<>
		<div className='w-full h-full'>
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
			</p>
			<div>
				<span className='block w-2 h-full bg-red-600'></span>
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
			<main className='container w-screen m-auto'>
				<CardNav
					logo={<Code className="logo h-[28px]"/>}
					logoAlt="Logo"
					items={items}
					baseColor="#fff"
					menuColor="#000"
					buttonBgColor="#B91C1C"
					buttonTextColor="#fff"
					ease="power3.out"
					/>
				<Landing />
				<Career />
			</main>
		</ClickSpark>
		</>
	)
}

export default App;
