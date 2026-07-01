import React from "react";
import RotatingText from "../Components/RotatingText";
import { LuHardDriveDownload, LuArrowRight, LuUser } from "react-icons/lu";
import me from '../assets/s-l400.jpeg'

const stats = [
  { label: "Years Coding", value: "4+" },
  { label: "Projects Shipped", value: "10+" },
  { label: "Current Focus", value: "Back-End/DevOps" },
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden" id="about">
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-40 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-purple-600/5 blur-[100px]" />

      <div className="container m-auto px-6 py-20 md:px-12">
        {/* Top label */}
        <div className="mb-6 flex items-center gap-3 animate-fade-up">
          <span className="block h-px w-8 bg-purple-400" />
          <span className="text-md font-semibold uppercase tracking-widest text-purple-400">
            Identity
          </span>
        </div>

        {/* Big heading */}
        <div className="mb-20 flex flex-col gap-8 animate-fade-up [animation-delay:0.1s]">
          <h2 className="text-5xl font-black leading-none tracking-tighter sm:text-6xl lg:text-8xl">
            Who
            <br />
            <span className="text-purple-400">I Am.</span>
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-white/50">
            A brief look into my journey as a developer, my philosophy on
            design, and the drive that keeps me building every single day.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {/* Image Side */}
          <div className="group relative animate-fade-up [animation-delay:0.15s] lg:col-span-5">
            <div className="relative z-10 flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#111]">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <img src={me} alt="Youssef Noujoum" className="h-full w-full object-cover" />
              {/* Replace with  */}
              {/* <div className="flex flex-col items-center gap-3 text-white/20">
                <LuUser className="text-6xl" />
                <span className="text-xs uppercase tracking-widest">Photo coming soon</span>
              </div> */}
            </div>
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border border-purple-400/20 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
          </div>

          {/* Text Side */}
          <div className="flex flex-col gap-10 lg:col-span-7">
            <div className="space-y-6 animate-fade-up [animation-delay:0.2s]">
              <h3 className="flex flex-wrap items-center gap-x-4 gap-y-2 text-2xl font-bold md:text-4xl">
                Hi 👋, I'm Youssef Noujoum
                <span className="flex items-center text-xl font-medium text-white/60 md:text-2xl">
                  and I am a
                </span>
                <div className="inline-flex">
                  <RotatingText
                    texts={["Front-End Developer", "Back-End Developer", "DevOps Enthusiast"]}
                    mainClassName="px-4 py-1 bg-purple-400 text-white text-lg md:text-2xl font-bold rounded-sm"
                    staggerFrom={"last"}
                    rotationInterval={3000}
                  />
                </div>
              </h3>

              <div className="space-y-6 text-base font-light leading-relaxed text-white/60">
                <p>
                  I hold a diploma in{" "}
                  <span className="font-medium text-white">Digital Development</span>,
                  where I mastered the art of building scalable web architectures and
                  solving complex logic puzzles.
                </p>
                <p>
                  My current work at{" "}
                  <span className="font-mono text-purple-400">1337 (42 Network)</span>{" "}
                  centers on tearing down abstractions. I'm actively sharpening my
                  skills in{" "}
                  <span className="italic text-white">C, C++ and low-level systems logic</span>{" "}
                  to build high-performance, unmanaged code.
                </p>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 border-y border-white/10 py-6 animate-fade-up [animation-delay:0.25s]">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="text-xl font-bold text-white sm:text-2xl">
                    {stat.value}
                  </span>
                  <span className="text-xs uppercase tracking-wide text-white/40">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-6 animate-fade-up [animation-delay:0.3s]">
              <button className="flex cursor-pointer items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-black transition-transform duration-300 hover:scale-105">
                Download CV
                <LuHardDriveDownload className="text-xl" />
              </button>

              <a
                href="#contact"
                className="group flex items-center gap-3 font-semibold text-white transition-colors hover:text-purple-400"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-all group-hover:border-purple-400 group-hover:bg-purple-400/10">
                  <LuArrowRight className="transition-transform group-hover:translate-x-1" />
                </div>
                Let's collaborate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}