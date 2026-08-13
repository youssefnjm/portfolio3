import React from "react";
import ProjectList from "../data/ProjectList.js";
import { LuExternalLink } from "react-icons/lu";

function ProjectSection() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-12" id="project">
      {/* Top label */}
      <div className="mb-6 flex items-center gap-3">
        <span className="block h-px w-8 bg-purple-400" />
        <span className="text-xs font-semibold uppercase tracking-widest text-purple-400">
          Portfolio
        </span>
      </div>

      {/* Big heading */}
      <div className="mb-20 flex flex-col gap-8">
        <h2 className="text-4xl font-black leading-none tracking-tighter sm:text-5xl lg:text-6xl">
          Selected
          <br />
          <span className="text-purple-400">Works.</span>
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-white/50">
          A showcase of my favorite builds, ranging from experimental side
          projects to full-scale production applications.
        </p>
      </div>

      <ul className="mb-2.5 mt-2.5">
        {ProjectList.map((ele, index) => (
          <li key={ele.name} className="border-b border-gray-600">
            <a
              href={ele.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${ele.name} project`}
              className="group relative flex items-center justify-between gap-4 p-4 transition-[background-image] duration-700 ease-in-out sm:p-6 md:p-8 bg-size-[200%_100%] bg-position-[0%_0%] hover:bg-position-[100%_0%] hover:bg-[linear-gradient(to_right,#581C87,#A855F7,#00D4FF,#A855F7,#581C87)]"
            >
              {/* Index number */}
              <span className="hidden text-sm font-mono text-white/30 sm:block">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Text */}
              <div className="flex flex-1 flex-col items-start justify-center gap-2">
                <span className="text-xl font-semibold">{ele.name}</span>
                <span className="text-xs leading-[1.3] tracking-[-0.03em] text-white/50 md:text-base">
                  {ele.desc}
                </span>
              </div>

              {/* Mobile thumbnail - always visible */}
              <div className="block h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-white/10 md:hidden">
                <img
                  src={ele.img}
                  alt={ele.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Desktop floating preview on hover */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 hidden w-70 -translate-x-1/2 -translate-y-1/2 -rotate-6 scale-90 opacity-0 transition-all duration-500 ease-out group-hover:rotate-0 group-hover:scale-100 group-hover:opacity-100 md:block lg:w-95">
                <img
                  src={ele.img}
                  alt=""
                  loading="lazy"
                  className="w-full rounded-2xl border border-white/20 shadow-2xl shadow-black/50"
                />
              </div>

              {/* Icon */}
              <span className="relative z-30 hidden shrink-0 items-center justify-center rounded-full border border-white/20 p-4 text-lg font-bold text-white transition-all duration-300 group-hover:border-purple-400 group-hover:bg-purple-400/10 group-hover:text-purple-400 md:flex">
                <LuExternalLink />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectSection;