// import React, { useEffect, useState, } from "react";
// import GradientText from "../Components/GradientText.jsx";
// import { LuPhone, LuGithub, LuLinkedin, LuSend, LuMail } from 'react-icons/lu';
// import { SiLeetcode } from "react-icons/si";
// import * as emailjs from "@emailjs/browser";
// import { Bounce, toast } from 'react-toastify';
// import validator from 'validator';

// const toastSuccess = () => toast.success('your form has applied successefully', {
// 	position: "top-right",
// 	autoClose: 5000,
// 	hideProgressBar: false,
// 	closeOnClick: false,
// 	pauseOnHover: true,
// 	draggable: true,
// 	progress: undefined,
// 	theme: "light",
// 	transition: Bounce,
// });

// const toastWarning = (msg) => toast.warning(msg, {
// 	position: "top-right",
// 	autoClose: 5000,
// 	hideProgressBar: false,
// 	closeOnClick: false,
// 	pauseOnHover: true,
// 	draggable: true,
// 	progress: undefined,
// 	theme: "light",
// 	transition: Bounce,
// });

// const toasError = () => toast.error('semething went wrong while sending', {
// 	position: "top-right",
// 	autoClose: 5000,
// 	hideProgressBar: false,
// 	closeOnClick: false,
// 	pauseOnHover: true,
// 	draggable: true,
// 	progress: undefined,
// 	theme: "light",
// 	transition: Bounce,
// });

// export default function ContactSection () {
// 	const [ name, setName ] = useState('');
// 	const [ email, setEmail ] = useState('');
// 	const [ subject, setSubject ] = useState('');
// 	const [ message, setMessage ] = useState('');
// 	const [ error, setError ] = useState('');

// 	useEffect(() => {
// 		emailjs.init({
//               publicKey: "OjftJ0MJrM7vC20CT",
// 		});
// 	}, []);



// 	const HandleSubmit = (e) => {
// 		e.preventDefault();

// 		const form = document.getElementById("contact_form");

// 		if (validator.isEmpty(name) || validator.isNumeric(name)) {setError("name should not be numeric"); return ;}
// 		else if (validator.isEmpty(email) || !validator.isEmail(email)) {setError("email should be in email format"); return ;}
// 		else if (validator.isEmpty(subject)) {setError("subject should not be empty"); return ;}
// 		else if (validator.isEmpty(message)) {setError("message should not be empty"); return ;}

// 		setError('')

// 		emailjs.sendForm('service_jvcdp3g', 'template_io9yexj', form)
// 		.then(() => {
// 			toastSuccess();
// 			form.relaod;
// 		}, (error) => {
// 			toasError()
// 			console.log('FAILED...', error);
// 		});
// 	}

// 	return (<>
// 		<div className="container m-auto w-full py-10 md:py-20" id="contact">
// 			<div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
// 				<div className="w-fit md:w-2xl flex flex-col justify-start items-start" >
// 					<GradientText animationSpeed={5} showBorder={false} className='pl-1.5- w-full text-start mb-10'>Contact Me</GradientText>
// 					<p className="opacity-80 px-3 my-10 text-xs md:text-base">Email me, call me, or complete the form to connect. Whether it’s a project, internship, collaboration, or tech discussion, feel free to reach out.</p>
// 					<ul className="opacity-80 flex flex-col justify-center items-start gap-3 mx-10">
// 						<li className="flex justify-center items-center gap-1 text-xs md:text-sm">
// 							<LuMail className="text-red-600" />
// 							<a href="mailto:youssefnoujoum04@gmail.com" className="hover:underline">
// 								youssefnoujoum04@gmail.com
// 							</a>
// 						</li>

// 						<li className="flex justify-center items-center gap-1 text-xs md:text-sm">
// 							<LuPhone className="text-red-600" />
// 							<a 
// 								href="https://wa.me/+212613629190"
// 								className="hover:underline"
// 								target="_blank"
// 							>
// 								+212 6 13 62 91 90
// 							</a>
// 						</li>

// 						<li className="flex justify-center items-center gap-1 text-xs md:text-sm">
// 							<LuLinkedin className="text-red-600" />
// 							<a
// 								href="https://www.linkedin.com/in/youssef-noujoum-079bb0289/"
// 								target="_blank"
// 								rel="noopener noreferrer"
// 								className="hover:underline"
// 							>
// 								@YoussefNoujoum
// 							</a>
// 						</li>

// 						<li className="flex justify-center items-center gap-1 text-xs md:text-sm">
// 							<LuGithub className="text-red-600" />
// 							<a
// 								href="https://github.com/youssefnjm"
// 								target="_blank"
// 								rel="noopener noreferrer"
// 								className="hover:underline"
// 							>
// 								@youssefnjm
// 							</a>
// 						</li>

// 						<li className="flex justify-center items-center gap-1 text-xs md:text-sm">
// 							<SiLeetcode className="text-red-600" />
// 							<a
// 								href="https://leetcode.com/u/youssefnjm"
// 								target="_blank"
// 								rel="noopener noreferrer"
// 								className="hover:underline"
// 							>
// 								youssefnjm
// 							</a>
// 						</li>

// 					</ul>
// 				</div>
// 				<div className='w-fit md:w-2xl m-auto border p-10 rounded-2xl border-zinc-600  bg-zinc-900/50'>
// 					<form className='flex flex-col sm:gap-5' id="contact_form" onSubmit={(e) => HandleSubmit(e)}>
// 						<div className='flex flex-col sm:flex-row items-center justify-between'>
// 							<div className="groupI">      
// 								<input type="text" required className='w-full' name="name" onChange={(e) => setName(e.currentTarget.value)}/>
// 								<span className="highlight"></span>
// 								<span className="bar"></span>
// 								<label>Name</label>
// 							</div>
// 							<div className="groupI">      
// 								<input type="text" required className='w-full' name="email" onChange={(e) => setEmail(e.currentTarget.value)}/>
// 								<span className="highlight"></span>
// 								<span className="bar"></span>
// 								<label>Email</label>
// 							</div>
// 						</div>
// 						<div>
// 							<div className="groupI">      
// 								<input type="text" required className='w-full' rows={6} name="subject" onChange={(e) => setSubject(e.currentTarget.value)}/>
// 								<span className="highlight"></span>
// 								<span className="bar"></span>
// 								<label>Subject</label>
// 							</div>
// 						</div>
// 						<div>
// 							<div className="groupI">      
// 								<textarea type="text" required className='w-full' rows={6}name="message"  onChange={(e) => setMessage(e.currentTarget.value)}/>
// 								<span className="highlight"></span>
// 								<span className="bar"></span>
// 								<label>Message</label>
// 							</div>
// 						</div>
// 						{error && (<p className="text-sm text-center text-red-600 font-bold my-2">{error}</p>)}
// 						<div className="relative groupI w-fit mx-auto">
// 							<button className="button m-auto">
// 								<span className="button_lg ">
// 									<span className="button_sl"></span>
// 									<span className="button_text flex gap-2 justify-center items-center ">send <LuSend size={16}/></span>
// 									<span className="button_text"></span>
// 								</span>
// 							</button>
// 						</div>
// 					</form>
// 				</div>
// 			</div>
// 		</div>
// 	</>);
// }

import { useState } from "react";
import { LuPhone, LuGithub, LuLinkedin, LuSend, LuMail, LuArrowUpRight } from 'react-icons/lu';

const socials = [
  { label: "Email", href: "#", icon: <LuMail /> },
  { label: "GitHub", href: "#", icon: <LuGithub /> },
  { label: "LinkedIn", href: "#", icon: <LuLinkedin /> },
  { label: "Twitter / X", href: "#", icon: <LuMail /> },
];

const fields = [
  { id: "name",    label: "Full Name",     type: "text"  },
  { id: "email",   label: "Email Address", type: "email" },
];

function Input({ id, label, type, value, focused, onChange, onFocus, onBlur }) {
  const up = focused === id || value;
  return (
    <div className="relative">
      <label htmlFor={id} className={`absolute left-0 transition-all duration-200 pointer-events-none font-medium ${up ? "top-0 text-xs text-purple-400" : "top-5 text-sm text-white/40"}`}>
        {label}
      </label>
      <input
        id={id} type={type} value={value}
        onChange={e => onChange(id, e.target.value)}
        onFocus={() => onFocus(id)} onBlur={onBlur}
        className="w-full bg-transparent border-b pt-6 pb-2 text-white text-sm outline-none transition-colors duration-200 border-white/20 focus:border-purple-400"
      />
    </div>
  );
}

export default function Contact() {
  const [form, setForm]   = useState({ name: "", email: "", subject: "", message: "" });
  const [focus, setFocus] = useState(null);
  const [sent, setSent]   = useState(false);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const submit = () => {
    if (!form.name || !form.email || !form.subject || !form.message) return;
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="min-h-screen text-white flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-6xl">

        {/* ── Top label ── */}
        <div className="flex items-center gap-3 mb-6">
          <span className="block w-8 h-px bg-purple-400" />
          <span className="text-purple-400 text-xs font-semibold tracking-widest uppercase">Contact</span>
        </div>

        {/* ── Big heading ── */}
        <div className="flex flex-col gap-8 mb-20">
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none tracking-tighter">
            Let's<br />
            <span className="text-purple-400">Talk.</span>
          </h2>
          <p className="text-white/50 text-base max-w-xl leading-relaxed lg:text-left">
            Got a project, an idea, or just want to connect? Drop me a message and I'll get back to you within 24 hours.
          </p>
        </div>

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* ── Right Info ── */}
          <div className="flex flex-col justify-between gap-14">

            {/* Availability */}
            <div>
              <p className="text-xs font-semibold tracking-widest text-white/30 uppercase mb-3">Current Status</p>
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-purple-400" />
                </span>
                <span className="text-white font-semibold">Available for new projects</span>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <p className="text-xs font-semibold tracking-widest text-white/30 uppercase mb-6">Direct Contact</p>
              <div className="flex flex-col gap-5">
                <div>
                  <p className="text-white/30 text-xs mb-1">Email</p>
                  <a href="mailto:hello@yourname.com" className="text-white font-medium hover:text-purple-400 transition-colors duration-200">youssefnoujoum04@gmail.com</a>
                </div>
                <div>
                  <p className="text-white/30 text-xs mb-1">Location</p>
                  <p className="text-white font-medium">Casablanca, MA</p>
                </div>
                <div>
                  <p className="text-white/30 text-xs mb-1">Response Time</p>
                  <p className="text-white font-medium">Within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div>
              <p className="text-xs font-semibold tracking-widest text-white/30 uppercase mb-6">Socials</p>
              <div className="flex flex-col gap-3">
                {socials.map(s => (
                  <a key={s.label} href={s.href}
                    className="group flex items-center justify-between border-b border-white/10 pb-3 hover:border-purple-400/40 transition-colors duration-200">
                    <div className="flex items-center gap-3 text-white/60 group-hover:text-purple-400 transition-colors duration-200">
                      {s.icon}
                      <span className="text-sm font-medium">{s.label}</span>
                    </div>
					<LuArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"/>
                  </a>
                ))}
              </div>
            </div>

          </div>
		

          {/* ── Form ── */}
          <div className="flex items-center lg:pl-10 lg:border-l border-white/10">
            {sent ? (
              <div className="flex flex-col gap-4 pt-10">
                <div className="text-5xl font-black text-purple-400">✓</div>
                <p className="text-2xl font-bold text-white">Message received.</p>
                <p className="text-white/40 text-sm">I'll reach out to you soon. Talk soon!</p>
              </div>
            ) : (
              <div className="flex flex-col gap-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {fields.map(f => (
                    <Input key={f.id} {...f} value={form[f.id]} focused={focus} onChange={set} onFocus={setFocus} onBlur={() => setFocus(null)} />
                  ))}
                </div>

                {/* Subject */}
                <div className="relative">
                  <label htmlFor="subject" className={`absolute left-0 transition-all duration-200 pointer-events-none font-medium ${focus === "subject" || form.subject ? "top-0 text-xs text-purple-400" : "top-5 text-sm text-white/40"}`}>
                    Subject
                  </label>
                  <input id="subject" type="text" value={form.subject}
                    onChange={e => set("subject", e.target.value)}
                    onFocus={() => setFocus("subject")} onBlur={() => setFocus(null)}
                    className="w-full bg-transparent border-b pt-6 pb-2 text-white text-sm outline-none transition-colors duration-200 border-white/20 focus:border-purple-400"
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <label htmlFor="message" className={`absolute left-0 transition-all duration-200 pointer-events-none font-medium ${focus === "message" || form.message ? "top-0 text-xs text-purple-400" : "top-5 text-sm text-white/40"}`}>
                    Message
                  </label>
                  <textarea id="message" rows={4} value={form.message}
                    onChange={e => set("message", e.target.value)}
                    onFocus={() => setFocus("message")} onBlur={() => setFocus(null)}
                    maxLength={600}
                    className="w-full bg-transparent border-b pt-6 pb-2 text-white text-sm outline-none resize-none transition-colors duration-200 border-white/20 focus:border-purple-400"
                  />
                  <span className="text-xs text-white/20 float-right mt-1">{form.message.length}/600</span>
                </div>

                {/* Submit */}
                <div className="pt-4">
                  <button onClick={submit} className="group flex items-center gap-4 text-white font-bold text-lg hover:text-purple-400 transition-colors duration-300">
                    <span className="relative overflow-hidden inline-flex items-center justify-center w-14 h-14 rounded-full border border-white/20 group-hover:border-purple-400 group-hover:bg-purple-400/10 transition-all duration-300">
                      <LuSend />
                    </span>
                    Send Message
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}