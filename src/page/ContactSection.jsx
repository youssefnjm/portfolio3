import React, { useState, } from "react";
import GradientText from "../Components/GradientText.jsx";
// import GradientText from '../Components/GradientText.jsx';
import { LuCode, LuGithub, LuLinkedin, LuInstagram, LuSend, LuGhost } from 'react-icons/lu';
export default function ContactSection () {
	return (<>
		<div className="container m-auto w-full py-20" id="contact">
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
                    Contact
                </GradientText>
			</div>
			<div className='w-fit md:w-2xl m-auto'>
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
							<textarea type="text" required className='w-full' />
							<span className="highlight"></span>
							<span className="bar"></span>
							<label>Message</label>
						</div>
					</div>
					<div className="relative groupI w-fit m-auto">
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
	</>);
}