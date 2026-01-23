import React, { useState, } from "react";
import GradientText from "../Components/GradientText.jsx";
import { LuPhone, LuGithub, LuLinkedin, LuInstagram, LuSend, LuMail } from 'react-icons/lu';


export default function ContactSection () {
	return (<>
		<div className="container m-auto w-full py-10 md:py-20" id="contact">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
				<div className="w-fit md:w-2xl flex flex-col justify-start items-start" >
					<GradientText animationSpeed={5} showBorder={false} className='pl-1.5- w-full text-start mb-10'>Contact Me</GradientText>
					<p className="opacity-80 px-3 my-10 text-xs md:text-base">Email me, call me, or complete the form to connect. Whether it’s a project, internship, collaboration, or tech discussion, feel free to reach out.</p>
					<ul className="opacity-80 flex flex-col justify-center items-start gap-3 mx-10">
						<li className="flex justify-center items-center gap-1 text-xs md:text-sm"><LuMail /> youssefnoujoum04@gmail.com</li>
						<li className="flex justify-center items-center gap-1 text-xs md:text-sm"><LuLinkedin /> @YoussefNoujoum</li>
						<li className="flex justify-center items-center gap-1 text-xs md:text-sm"><LuGithub /> @youssefnjm</li>
						<li className="flex justify-center items-center gap-1 text-xs md:text-sm"><LuPhone /> +212613629190</li>
					</ul>
				</div>
				<div className='w-fit md:w-2xl m-auto border p-10 rounded-2xl border-zinc-600  bg-zinc-900/50'>
					<form className='flex flex-col sm:gap-10'>
						<div className='flex flex-col sm:flex-row items-center justify-between'>
							<div className="groupI">      
								<input type="text" required className='w-full' />
								<span className="highlight"></span>
								<span className="bar"></span>
								<label>Name</label>
							</div>
							<div className="groupI">      
								<input type="text" required className='w-full' />
								<span className="highlight"></span>
								<span className="bar"></span>
								<label>Email</label>
							</div>
						</div>
						<div>
							<div className="groupI">      
								<textarea type="text" required className='w-full' rows={6} />
								<span className="highlight"></span>
								<span className="bar"></span>
								<label>Message</label>
							</div>
						</div>
						<div className="relative groupI w-fit mx-auto">
							<button className="button m-auto">
								<span className="button_lg ">
									<span className="button_sl"></span>
									<span className="button_text flex gap-2 justify-center items-center ">Download Now <LuSend size={16}/></span>
									<span className="button_text"></span>
								</span>
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</>);
}