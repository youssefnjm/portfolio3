import React, { useEffect } from 'react'
import { X } from 'lucide-react';

export default function MainModel({open, onClose, children}) {

	useEffect(() => {
		const handler = (e) => {
		  if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", handler);
		return () => window.removeEventListener("keydown", handler);
	}, [onClose]);
	
	return (
	<div 
		onClick={onClose}
		className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? 'visible bg-black/50' : 'invisible'}`}
	>
		<div className={`bg-white p-10 rounded-2xl shadow-lg transition-all  ${open ? 'scale-100 opacity-100' : 'scale-125 opacity- 0'} relative`} onClick={(e) => e.stopPropagation() } >
			<button className="absolute top-2 right-2 p-1 bg-gray-200 rounded-full" onClick={onClose}> <X /> </button>
		</div>
	</div>
  )
}
