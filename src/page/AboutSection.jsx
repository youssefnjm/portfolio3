import React from "react";
import RotatingText from "../Components/RotatingText";
import { LuHardDriveDownload, LuArrowRight, LuCode, LuTerminal, LuZap } from "react-icons/lu";
import me from '../assets/s-l400.jpeg'

const stats = [
  { label: "Years Coding", value: "4+", icon: LuCode },
  { label: "Projects Shipped", value: "10+", icon: LuTerminal },
  { label: "Current Focus", value: "Back-End/DevOps", icon: LuZap },
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden" id="about">

      <div className="container m-auto px-6 py-20 md:px-12">

        {/* ─── TOP LABEL — keep unified ─── */}
        <div className="mb-6 flex items-center gap-3 animate-fade-up-custom">
           <span className="block h-px w-8 bg-purple-400" />
           <span className="text-md font-semibold uppercase tracking-widest text-purple-400">
             Identity
           </span>
         </div>

         {/* Big heading */}
        <div className="mb-20 flex flex-col gap-8 animate-fade-up-custom [animation-delay:0.1s]">
          <h2 className="text-4xl font-black leading-none tracking-tighter sm:text-6xl lg:text-8xl">
             Who
             <br />
             <span className="text-purple-400">I Am.</span>
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-white/50">
            A brief look into my journey as a developer, my philosophy on
            design, and the drive that keeps me building every single day.
          </p>
        </div>

        {/* ═══════════════════════════════════════════════════════
            NEW DESIGN STARTS HERE — same info, fresh layout
            ═══════════════════════════════════════════════════════ */}

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">

          {/* ── Image Card ── */}
          <div className="group relative lg:col-span-5 animate-fade-up-custom [animation-delay:0.2s]">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a]">
              {/* Gradient overlay */}
              {/* <div className="absolute inset-0 bg-linear-to-t from-purple-600/20 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100 z-10" /> */}

              <div className="overflow-hidden">
                <img 
                  src={me} 
                  alt="Youssef Noujoum" 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
            </div>
            
          </div>

          {/* ── Bio + Stats + CTA Column ── */}
          <div className="flex flex-col gap-6 lg:col-span-7">
            
            {/* Bio Card */}
            <div className="animate-fade-up-custom [animation-delay:0.25s] rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10">
                  <LuCode className="text-lg text-purple-400" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-widest text-purple-400">
                  About Me
                </span>
              </div>

              {/* Name + Rotating Title — full width hero line */}
              <div className="mb-6 animate-fade-up-custom [animation-delay:0.15s]">
                <h5 className="flex flex-wrap items-center gap-x-4 gap-y-3 text-base font-bold">
                  Hi, I'm Youssef Noujoum
                  <span className="flex items-center text-base font-medium text-white/50">
                    and I am a
                  </span>
                  <div className="inline-flex">
                    <RotatingText
                      texts={["Front-End Developer", "Back-End Developer", "DevOps Enthusiast"]}
                      mainClassName="px-5 py-2 bg-purple-500/15 border border-purple-500/30 text-purple-300 text-lg font-bold rounded-full backdrop-blur-sm"
                      staggerFrom={"last"}
                      rotationInterval={3000}
                    />
                  </div>
                </h5>
              </div>
              
              <div className="space-y-5 text-base font-light leading-relaxed text-white/60">
                <p>
                  I hold a diploma in{" "}
                  <span className="italic text-white">Digital Development</span>,
                  where I mastered the art of building scalable web architectures and
                  solving complex logic puzzles.
                </p>
                <p>
                  My current work at{" "}
                  <span className="italic text-white">1337 Coding School (42 Network)</span>{" "}
                  centers on tearing down abstractions. I'm actively sharpening my
                  skills in{" "}
                  <span className="italic text-white">C, C++ and low-level systems logic</span>{" "}
                  to build high-performance, unmanaged code.
                </p>
              </div>
            </div>

            {/* Stats Cards Row */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 animate-fade-up-custom [animation-delay:0.3s]">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={stat.label} 
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-purple-500/30 hover:bg-white/[0.04]"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 transition-colors group-hover:bg-purple-500/20">
                      <Icon className="text-lg text-purple-400" />
                    </div>
                    <span className="block text-2xl font-bold text-white sm:text-3xl">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-xs uppercase tracking-wide text-white/40">
                      {stat.label}
                    </span>
                    
                    {/* Subtle glow on hover */}
                    <div className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full bg-purple-500/10 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                );
              })}
            </div>

            {/* CTA Row */}
            <div className="flex flex-wrap items-center gap-4 animate-fade-up-custom [animation-delay:0.35s]">
              <button className="group/btn flex cursor-pointer items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.4)]">
                Download CV
                <LuHardDriveDownload className="text-xl transition-transform group-hover/btn:translate-y-0.5" />
              </button>

              <a
                href="#contact"
                className="group flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-purple-400 hover:bg-purple-400/10 hover:text-purple-300"
              >
                Let's collaborate
                <LuArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}