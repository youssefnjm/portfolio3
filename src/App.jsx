import './App.css';
import { useEffect, useState } from 'react';
import { motion, useMotionValue } from "motion/react";
import MainModel from './modals/MainModel';

function App() {

	const [main, setMain ] = useState(false);

	const x = useMotionValue(0)

	useEffect(() => {
	// Won't trigger a re-render!
	const timeout = setTimeout(() => x.set(100), 1000)

	return () => clearTimeout(timeout)
	}, [])

	return (<>
		<div className='p-8 w-full h-screen bg-container'>
			<div class="grid grid-cols-[repeat(7,1fr)] grid-rows-[repeat(7,1fr)] gap-y-[25px] gap-x-[25px] w-full h-full text-white">
				<div class="row-start-1 row-end-3 col-start-1 col-end-6 bg-box rounded-xl p-2 cursor-pointer">
					<h1>interduce my education</h1>
				</div>
				<div class="row-start-1 row-end-7 col-start-6 col-end-8 bg-box rounded-xl p-2 cursor-pointer">
					<h1>interduce my project</h1>
				</div>
				<div class="row-start-3 row-end-7 col-start-2 col-end-6 bg-box rounded-xl p-2 cursor-pointer" onClick={() => setMain(true)}>
					<h1>interduce my self</h1>
				</div>
				<div class="row-start-3 row-end-5 col-start-1 col-end-2 bg-box rounded-xl p-2 cursor-pointer">
					<h1>put my picture</h1>
				</div>
				<div class="row-start-5 row-end-8 col-start-1 col-end-2 bg-box rounded-xl p-2 cursor-pointer">
					<h1>interduce my experience</h1>
				</div>
				<div class="row-start-7 row-end-8 col-start-2 col-end-8 bg-box rounded-xl p-2 cursor-pointer">
					<h1>interduce my siciale media</h1>
				</div>

				<MainModel open={main} onClose={() => setMain(false)} /> 
			</div>
		</div>
	</>)
	
	return (<>
		<motion.div className='p-8 w-full h-screen bg-container'>
			<motion.div className="grid grid-cols-[repeat(5,1fr)] grid-rows-[repeat(4,1fr)] gap-y-[25px] gap-x-[25px] w-full h-full">
				<motion.div className="row-start-1 row-end-2 col-start-1 col-end-4 bg-box rounded p-2 cursor-pointer" initial={{ scale: 0.5 }} animate={{ scale: 1 }} whileHover={{ scale: 1.03 }} transition={{ duration: 0.5 }}>
					
				</motion.div>
				<motion.div className="row-start-2 row-end-5 col-start-2 col-end-5 bg-box rounded p-2 cursor-pointer" initial={{ scale: 0.5 }} animate={{ scale: 1 }} whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
					
				</motion.div>
				<motion.div className="row-start-1 row-end-2 col-start-4 col-end-5 bg-box rounded p-2 cursor-pointer" initial={{ scale: 0.5 }} animate={{ scale: 1 }} whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
					
				</motion.div>
				<motion.div className="row-start-1 row-end-4 col-start-5 col-end-6 bg-box rounded p-2 cursor-pointer" initial={{ scale: 0.5 }} animate={{ scale: 1 }} whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
					
				</motion.div>
				<motion.div className="row-start-4 row-end-5 col-start-5 col-end-6 bg-box rounded p-2 cursor-pointer" initial={{ scale: 0.5 }} animate={{ scale: 1 }} whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
					
				</motion.div>
				<motion.div className="row-start-4 row-end-5 col-start-1 col-end-2 bg-box rounded p-2 cursor-pointer" initial={{ scale: 0.5 }} animate={{ scale: 1 }} whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
					
				</motion.div>
				<motion.div className="row-start-2 row-end-4 col-start-1 col-end-2 bg-box rounded p-2 cursor-pointer" initial={{ scale: 0.5 }} animate={{ scale: 1 }} whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
					
				</motion.div>
			</motion.div>	
		</motion.div>
		</>
	)
}

export default App
