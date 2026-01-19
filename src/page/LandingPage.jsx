import { useEffect, useState } from 'react';

function LandingPage() {
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
	const [ghostPos, setGhostPos] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (e) => {
			setMousePos({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	useEffect(() => {
		const maxDistance = 50; // Maximum distance the ghost can move from center
		const centerX = window.innerWidth / 2;
		const centerY = window.innerHeight / 2;

		// Calculate distance from center to mouse
		const deltaX = mousePos.x - centerX;
		const deltaY = mousePos.y - centerY;
		const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

		// Calculate limited movement
		let offsetX = deltaX;
		let offsetY = deltaY;

		if (distance > 0) {
			const limitedDistance = Math.min(distance, maxDistance);
			const ratio = limitedDistance / distance;
			offsetX = deltaX * ratio;
			offsetY = deltaY * ratio;
		}

		setGhostPos({ x: offsetX, y: offsetY });
	}, [mousePos]);

	return (<>
		<div className='container m-auto w-full h-svh'>
			<div className='flex justify-center items-center w-full h-full relative ss1'>
				<div className='relative'>
					<div className='font-extrabold text-center leading-32' style={{fontSize: "5vw"}}>
						<p style={{fontFamily: "Boldonse"}}>
							Designed for scale.<br />
							Built for performance.<br />
							Coded with passion.
						</p>
					</div>
					<div className="ghost-loader" style={{
						transform: `translate(${ghostPos.x}px, ${ghostPos.y}px)`,
						transition: 'transform 0.2s ease-out'
					}}>
						<svg className="ghost-svg" height="200" viewBox="0 0 512 512" width="200" xmlns="http://www.w3.org/2000/svg">
							{/* <!-- Ghost body - white --> */}
							<path className="ghost-body" d="m508.374 432.802s-46.6-39.038-79.495-275.781c-8.833-87.68-82.856-156.139-172.879-156.139-90.015 0-164.046 68.458-172.879 156.138-32.895 236.743-79.495 275.782-79.495 275.782-15.107 25.181 20.733 28.178 38.699 27.94 35.254-.478 35.254 40.294 70.516 40.294 35.254 0 35.254-35.261 70.508-35.261s37.396 45.343 72.65 45.343 37.389-45.343 72.651-45.343c35.254 0 35.254 35.261 70.508 35.261s35.27-40.772 70.524-40.294c17.959.238 53.798-2.76 38.692-27.94z" fill="white" />
							{/* <!-- Left eye - black with pulsing animation --> */}
							<circle className="ghost-eye left-eye" cx="210" cy="225" r="22" fill="black" />
							{/* <!-- Right eye - black with pulsing animation --> */}
							<circle className="ghost-eye right-eye" cx="297" cy="225" r="22" fill="black" />
						</svg>
					</div>
				</div>
			</div>
		</div>
	</>);

	return (<>
		<div className='container m-auto'>
			<div className='w-full flex sm:flex-row-reverse items-center justify-center sm:gap-5 py-24'>
				<div className='mt-9 w-[30%] md:w-[50%] items-center hidden lg:block'>
					<div className='img-buffer xl:w-100 md:h-100 w-62.5 h-62.5'></div>
				</div>
				<div className='text-md md:text-4xl h-full w-[90%] lg:w-[50%] flex gap-2 sm:gap-10 items-center'>
					<div className='flex flex-col w-fit'>
						<a href="" target='_blank' ><LuGithub color='#fff' className='text-xl sm:text-3xl'/></a>						
						<span className='block w-1 h-20 bg-red-600' style={{margin: "15px auto"}}></span>
						<a href="" target='_blank' ><LuLinkedin color='#fff' className='text-xl sm:text-3xl'/></a>
						<span className='block w-1 h-20 bg-red-600' style={{margin: "15px auto"}}></span>
						<a href="" target='_blank' ><LuInstagram color='#fff' className='text-xl sm:text-3xl'/></a>
					</div>
					<div className='items-center w-full'>
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
						<ScrollDown />
					</div>
				</div>
			</div>
		</div>
	</>)
}

export default LandingPage;