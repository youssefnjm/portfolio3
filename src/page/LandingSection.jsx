import { useEffect, useState } from 'react';
// import { Ghost } from 'react-icons/lu';

const Ghost = ({ghostPos, ghostSize}) => {
	return (<div className="ghost-loader" style={{
		transform: `translate(${ghostPos.x}px, ${ghostPos.y}px)`,
		transition: 'transform 1s ease-out',
	}}>
		<svg className="ghost-svg" height={ghostSize} viewBox="0 0 512 512" width={ghostSize} xmlns="http://www.w3.org/2000/svg">
			{/* <!-- Ghost body - white --> */}
			<path className="ghost-body" d="m508.374 432.802s-46.6-39.038-79.495-275.781c-8.833-87.68-82.856-156.139-172.879-156.139-90.015 0-164.046 68.458-172.879 156.138-32.895 236.743-79.495 275.782-79.495 275.782-15.107 25.181 20.733 28.178 38.699 27.94 35.254-.478 35.254 40.294 70.516 40.294 35.254 0 35.254-35.261 70.508-35.261s37.396 45.343 72.65 45.343 37.389-45.343 72.651-45.343c35.254 0 35.254 35.261 70.508 35.261s35.27-40.772 70.524-40.294c17.959.238 53.798-2.76 38.692-27.94z" fill="white" />
			{/* <!-- Left eye - black with pulsing animation --> */}
			<circle className="ghost-eye left-eye" cx="210" cy="225" r="22" fill="black" />
			{/* <!-- Right eye - black with pulsing animation --> */}
			<circle className="ghost-eye right-eye" cx="297" cy="225" r="22" fill="black" />
		</svg>
	</div>);
}
function LandingSection() {
	const [ghostSize, setGhostSize] = useState(300);
	const [ghost1Pos, setGhost1Pos] = useState({ x: 0, y: 0 });
	const [ghost2Pos, setGhost2Pos] = useState({ x: 0, y: 0 });


	useEffect(() => {
		const section = document.getElementById('landing');
	
		const sectionWidth = section.offsetWidth;
		const sectionHeight = section.offsetHeight;

		if (sectionWidth < 640)
			setGhostSize(100);
		else if (sectionWidth < 768)
			setGhostSize(130);
		else if (sectionWidth < 1024)
			setGhostSize(170);
		else  if (sectionWidth < 1536)
			setGhostSize(200);
		else
			setGhostSize(300);
	
		const maxOffsetX = (sectionWidth - (ghostSize + 100));
		const maxOffsetY = (sectionHeight - (ghostSize + 100));
	
		const getRandomOffset = () => ({
			x: Math.random() * ((maxOffsetX - ghostSize) + ghostSize),
			y: Math.random() * ((maxOffsetY - ghostSize) + ghostSize),
		});
	
		setGhost1Pos(getRandomOffset());
		setGhost2Pos(getRandomOffset());

	
		const interval1 = setInterval(() => {
			const offset = getRandomOffset();
			setGhost1Pos(offset);
		}, 1500);
		
		const interval2 = setInterval(() => {
			const offset = getRandomOffset();
			setGhost2Pos(offset);
		}, 2500);

		// const interval3 = setInterval(() => {
		// 	const offset = getRandomOffset();
		// 	console.log(`Ghost 2 - x:${offset.x}, y:${offset.y}`);
		// 	setGhost3Pos(offset);
		// }, 3500);
	
		return () => {
			clearInterval(interval1);
			clearInterval(interval2);
			// clearInterval(interval3);
		};
	}, []);

	return (<>
		<div id="landing">
			<div className='container m-auto w-full relative h-96 py-96 md:h-svh md:py-0'>
				<Ghost ghostPos={ghost1Pos} ghostSize={ghostSize}/>
				<Ghost ghostPos={ghost2Pos} ghostSize={ghostSize}/>
				<div className='flex flex-col justify-center items-center w-full h-full relative'>
					{/* <div className='quote-container'> */}
						<h1 className='quote'>
							Designed for scale.<br />
							Built for performance.<br />
							Coded with passion.
						</h1>
						<span className="author">Whispers through memory</span>
					</div>
				{/* </div> */}
			</div>
		</div>
	</>);

}

export default LandingSection;