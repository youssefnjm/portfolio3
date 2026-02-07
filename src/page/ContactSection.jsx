import React, { useEffect, useState, } from "react";
import GradientText from "../Components/GradientText.jsx";
import { LuPhone, LuGithub, LuLinkedin, LuSend, LuMail } from 'react-icons/lu';
import { SiLeetcode } from "react-icons/si";
import * as emailjs from "@emailjs/browser";
import { Bounce, toast } from 'react-toastify';
import validator from 'validator';

const toastSuccess = () => toast.success('your form has applied successefully', {
	position: "top-right",
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: false,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: "light",
	transition: Bounce,
});

const toastWarning = (msg) => toast.warning(msg, {
	position: "top-right",
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: false,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: "light",
	transition: Bounce,
});

const toasError = () => toast.error('semething went wrong while sending', {
	position: "top-right",
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: false,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: "light",
	transition: Bounce,
});

export default function ContactSection () {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ subject, setSubject ] = useState('');
	const [ message, setMessage ] = useState('');
	const [ error, setError ] = useState('');

	useEffect(() => {
		emailjs.init({
              publicKey: "OjftJ0MJrM7vC20CT",
		});
	}, []);



	const HandleSubmit = (e) => {
		e.preventDefault();

		const form = document.getElementById("contact_form");

		if (validator.isEmpty(name) || validator.isNumeric(name)) {setError("name should not be numeric"); return ;}
		else if (validator.isEmpty(email) || !validator.isEmail(email)) {setError("email should be in email format"); return ;}
		else if (validator.isEmpty(subject)) {setError("subject should not be empty"); return ;}
		else if (validator.isEmpty(message)) {setError("message should not be empty"); return ;}

		setError('')

		emailjs.sendForm('service_jvcdp3g', 'template_io9yexj', form)
		.then(() => {
			toastSuccess();
			form.relaod;
		}, (error) => {
			toasError()
			console.log('FAILED...', error);
		});
	}

	return (<>
		<div className="container m-auto w-full py-10 md:py-20" id="contact">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
				<div className="w-fit md:w-2xl flex flex-col justify-start items-start" >
					<GradientText animationSpeed={5} showBorder={false} className='pl-1.5- w-full text-start mb-10'>Contact Me</GradientText>
					<p className="opacity-80 px-3 my-10 text-xs md:text-base">Email me, call me, or complete the form to connect. Whether it’s a project, internship, collaboration, or tech discussion, feel free to reach out.</p>
					<ul className="opacity-80 flex flex-col justify-center items-start gap-3 mx-10">
						<li className="flex justify-center items-center gap-1 text-xs md:text-sm">
							<LuMail className="text-red-600" />
							<a href="mailto:youssefnoujoum04@gmail.com" className="hover:underline">
								youssefnoujoum04@gmail.com
							</a>
						</li>

						<li className="flex justify-center items-center gap-1 text-xs md:text-sm">
							<LuPhone className="text-red-600" />
							<a 
								href="https://wa.me/+212613629190"
								className="hover:underline"
								target="_blank"
							>
								+212 6 13 62 91 90
							</a>
						</li>

						<li className="flex justify-center items-center gap-1 text-xs md:text-sm">
							<LuLinkedin className="text-red-600" />
							<a
								href="https://www.linkedin.com/in/youssef-noujoum-079bb0289/"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:underline"
							>
								@YoussefNoujoum
							</a>
						</li>

						<li className="flex justify-center items-center gap-1 text-xs md:text-sm">
							<LuGithub className="text-red-600" />
							<a
								href="https://github.com/youssefnjm"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:underline"
							>
								@youssefnjm
							</a>
						</li>

						<li className="flex justify-center items-center gap-1 text-xs md:text-sm">
							<SiLeetcode className="text-red-600" />
							<a
								href="https://leetcode.com/u/youssefnjm"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:underline"
							>
								youssefnjm
							</a>
						</li>

					</ul>
				</div>
				<div className='w-fit md:w-2xl m-auto border p-10 rounded-2xl border-zinc-600  bg-zinc-900/50'>
					<form className='flex flex-col sm:gap-5' id="contact_form" onSubmit={(e) => HandleSubmit(e)}>
						<div className='flex flex-col sm:flex-row items-center justify-between'>
							<div className="groupI">      
								<input type="text" required className='w-full' name="name" onChange={(e) => setName(e.currentTarget.value)}/>
								<span className="highlight"></span>
								<span className="bar"></span>
								<label>Name</label>
							</div>
							<div className="groupI">      
								<input type="text" required className='w-full' name="email" onChange={(e) => setEmail(e.currentTarget.value)}/>
								<span className="highlight"></span>
								<span className="bar"></span>
								<label>Email</label>
							</div>
						</div>
						<div>
							<div className="groupI">      
								<input type="text" required className='w-full' rows={6} name="subject" onChange={(e) => setSubject(e.currentTarget.value)}/>
								<span className="highlight"></span>
								<span className="bar"></span>
								<label>Subject</label>
							</div>
						</div>
						<div>
							<div className="groupI">      
								<textarea type="text" required className='w-full' rows={6}name="message"  onChange={(e) => setMessage(e.currentTarget.value)}/>
								<span className="highlight"></span>
								<span className="bar"></span>
								<label>Message</label>
							</div>
						</div>
						{error && (<p className="text-sm text-center text-red-600 font-bold my-2">{error}</p>)}
						<div className="relative groupI w-fit mx-auto">
							<button className="button m-auto">
								<span className="button_lg ">
									<span className="button_sl"></span>
									<span className="button_text flex gap-2 justify-center items-center ">send <LuSend size={16}/></span>
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