import GradientText from "../Components/GradientText";
import CertificationC from '../assets/Certifes/Certification C.jpg';
import CertificationJs from '../assets/Certifes/Certification js.jpg';
import CertificationPhp from '../assets/Certifes/Certification php.jpg';
import CertificationCpp from '../assets/Certifes/Certification C++.png';

export default function CertifceSection() {

	const certifce = [
		{
			title : "javascript Certification",
			img : CertificationJs,
		},
		{
			title : "php Certification",
			img : CertificationPhp,
		},
		{
			title : "C Certification",
			img : CertificationC,
		},
		{
			title : "C++ Certification",
			img : CertificationCpp,
		},
	];

	return (<>
		<div className='container m-auto w-full py-10 md:py-20' id="certifce">
			<div className='pl-1.5- w-full items-start mb-10'>
                {/* ── Top label ── */}
                <div className="flex items-center gap-3 mb-6">
                <span className="block w-8 h-px bg-purple-400" />
                <span className="text-purple-400 text-xs font-semibold tracking-widest uppercase">Verified</span>
                </div>

                {/* ── Big heading ── */}
                <div className="flex flex-col gap-8 mb-20">
                <h2 className="text-4xl sm:text-7xl lg:text-8xl font-black leading-none tracking-tighter">
                    Expert<br />
                    <span className="text-purple-400">Badge.</span>
                </h2>
                <p className="text-white/50 text-base max-w-xl leading-relaxed">
                    A collection of official certifications and specialized training that validate my technical expertise.
                </p>
                </div>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
				{certifce.map((ele, key) => {
					return (
						<div key={key} className="relative p-2 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-zinc-600 transition-all duration-300">
							<img className="rounded-t-lg w-full h-fit" src={ele.img} alt="" />
							<div className="p-5">
								<h5 className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white" style={{lineHeight: "1.3", letterSpacing: "-0.02em"}}>{ele.title}</h5>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	</>);
}




