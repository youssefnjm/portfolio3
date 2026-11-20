import { LuCode, LuTerminal, LuZap, LuHardDriveDownload, LuArrowRight, LuUser, LuGraduationCap, LuHeart, LuBrain, LuRocket, LuLeaf } from 'react-icons/lu'
import RotatingText from '../Components/RotatingText'

const stats = [
  { label: "Years Coding", value: "4+", icon: LuCode },
  { label: "Projects Shipped", value: "10+", icon: LuTerminal },
  { label: "Current Focus", value: "Back-End/DevOps", icon: LuZap },
]

const quickFacts = [
  { icon: LuUser, label: "Based in", value: "Casablanca, MA" },
  { icon: LuGraduationCap, label: "Education", value: "1337 (42 Network)" },
  { icon: LuCode, label: "Specialty", value: "Full Stack & Systems" },
  { icon: LuHeart, label: "Status", value: "Open to opportunities" },
]

const philosophy = [
  {
    icon: LuBrain,
    title: "Learn by Building",
    desc: "Theory is useful, but nothing teaches like shipping real code. I learn best when there's a problem to solve and a deadline to meet."
  },
  {
    icon: LuRocket,
    title: "Performance Matters",
    desc: "From bundle size to database queries — every millisecond counts. I care about what happens under the hood, not just the surface."
  },
  {
    icon: LuLeaf,
    title: "Clean & Maintainable",
    desc: "Code is read more than written. I write code that my future self (and my teammates) will thank me for — clear, typed, and tested."
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 px-6">
      {/* Background paper texture - full width */}
      <div className="absolute inset-0 paper-lines opacity-10" aria-hidden="true" />

      {/* Decorative elements - full width positioning */}
      <div className="absolute top-0 right-0 w-32 h-32 border-2 rounded-tr-full opacity-20" style={{ borderColor: 'var(--fg-subtle)' }} />
      <div className="absolute bottom-0 left-0 w-24 h-24 border-2 rounded-bl-full opacity-20" style={{ borderColor: 'var(--fg-subtle)' }} />

      {/* Centered content container */}
      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-12 animate-fade-up stagger-1 text-center">
          <div className="section-label justify-center mb-6">
            <span>Identity</span>
          </div>
          <h2 className="heading-lg mx-auto max-w-3xl" style={{ color: 'var(--fg)' }}>
            Who <br />
            <span className="hand-drawn-text text-2xl sm:text-3xl font-normal">I Am.</span>
          </h2>
        </div>

        {/* Main content - single column centered layout */}
        <div className="max-w-3xl mx-auto space-y-8">

          {/* Intro card - notebook style */}
          <div className="sketch-border p-6 sm:p-8 relative paper-lines animate-fade-up stagger-2" style={{ borderRadius: '16px 8px 20px 8px / 8px 20px 8px 16px' }}>
            <div className="tape" />
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center sketch-border">
                <LuCode className="text-lg" style={{ color: 'var(--fg-muted)' }} />
              </div>
              <span className="text-sm font-semibold uppercase tracking-widest hand-drawn-text" style={{ color: 'var(--fg-subtle)' }}>About Me</span>
            </div>

            {/* Name & rotating title */}
            <div className="mb-6">
              <h5 className="flex flex-wrap items-center gap-x-4 gap-y-3 text-base sm:text-lg font-bold" style={{ color: 'var(--fg)' }}>
                Hi, I'm Youssef Noujoum
                <span className="flex items-center text-base sm:text-lg font-medium" style={{ color: 'var(--fg-muted)' }}>
                  and I am a
                </span>
                <div className="inline-flex">
                  <RotatingText
                    texts={["Front-End Developer", "Back-End Developer", "DevOps Enthusiast", "Systems Programmer"]}
                    mainClassName="px-4 py-1.5 hand-drawn-text text-base sm:text-lg font-bold rounded-full border"
                    style={{
                      backgroundColor: 'var(--tag-bg)',
                      borderColor: 'var(--tag-border)',
                      color: 'var(--tag-text)'
                    }}
                    staggerFrom={"last"}
                    rotationInterval={3000}
                  />
                </div>
              </h5>
            </div>

            <div className="space-y-4 text-base sm:text-lg leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
              <p>
                I hold a diploma in <span className="italic" style={{ color: 'var(--fg)' }}>Digital Development</span>,
                where I mastered the art of building scalable web architectures and solving complex logic puzzles.
              </p>
              <p>
                My current work at <span className="italic" style={{ color: 'var(--fg)' }}>1337 Coding School (42 Network)</span>
                centers on tearing down abstractions. I'm actively sharpening my skills in
                <span className="italic" style={{ color: 'var(--fg)' }}>C, C++ and low-level systems logic</span>
                to build high-performance, unmanaged code.
              </p>
            </div>
          </div>

          {/* Philosophy cards */}
          <div className="animate-fade-up stagger-3">
            <h3 className="text-lg font-bold hand-drawn-text mb-6 text-center" style={{ color: 'var(--fg)' }}>How I Think</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {philosophy.map((item, i) => (
                <div key={i} className="sketch-border p-5 relative group hover:shadow-[4px_4px_0px_var(--shadow)] transition-shadow duration-300" style={{ borderRadius: '12px 8px 16px 4px / 8px 16px 4px 12px' }}>
                  <div className="absolute -top-2 -right-2 w-2 h-2 border-2 rounded-full opacity-30" style={{ borderColor: 'var(--fg-subtle)' }} />
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 border-2 border-dashed rounded-full opacity-20" style={{ borderColor: 'var(--fg-subtle)' }} />

                  <div className="flex h-12 w-12 items-center justify-center mx-auto mb-4 sketch-border">
                    <item.icon size={24} style={{ color: 'var(--fg-muted)' }} />
                  </div>
                  <h4 className="text-base font-bold mb-2 text-center hand-drawn-text" style={{ color: 'var(--fg)' }}>{item.title}</h4>
                  <p className="text-sm leading-relaxed text-center" style={{ color: 'var(--fg-muted)' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick facts - hand-drawn style cards */}
          <div className="animate-fade-up stagger-4">
            <h3 className="text-lg font-bold hand-drawn-text mb-6 text-center" style={{ color: 'var(--fg)' }}>Quick Facts</h3>
            <div className="grid grid-cols-2 gap-4">
              {quickFacts.map((fact, i) => (
                <div key={i} className="sketch-border p-4 text-center group hover:shadow-[4px_4px_0px_var(--shadow)] transition-shadow duration-300" style={{ borderRadius: '12px 8px 16px 4px / 8px 16px 4px 12px' }}>
                  <div className="flex h-10 w-10 items-center justify-center mx-auto mb-2 sketch-border">
                    <fact.icon className="text-lg" style={{ color: 'var(--fg-muted)' }} />
                  </div>
                  <p className="text-xs uppercase tracking-wide hand-drawn-text mb-1" style={{ color: 'var(--fg-subtle)' }}>{fact.label}</p>
                  <p className="text-sm font-semibold hand-drawn-text" style={{ color: 'var(--fg)' }}>{fact.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats - compact row */}
          <div className="animate-fade-up stagger-5">
            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat) => {
                const Icon = stat.icon
                return (
                  <div key={stat.label} className="sketch-border p-4 text-center group hover:shadow-[4px_4px_0px_var(--shadow)] transition-shadow duration-300" style={{ borderRadius: '12px 8px 16px 4px / 8px 16px 4px 12px' }}>
                    <div className="flex h-10 w-10 items-center justify-center mx-auto mb-2 sketch-border">
                      <Icon className="text-lg" style={{ color: 'var(--fg-muted)' }} />
                    </div>
                    <span className="block text-xl font-bold" style={{ color: 'var(--fg)' }}>{stat.value}</span>
                    <span className="text-xs uppercase tracking-wide hand-drawn-text" style={{ color: 'var(--fg-subtle)' }}>{stat.label}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* CTA Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 animate-fade-up stagger-6">
            <a
              href="/src/assets/Pdfs/Youssef_Noujoum_cv.en.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sketch group hand-drawn-text flex-1 sm:flex-none text-center"
              style={{ borderRadius: '12px 8px 16px 4px / 8px 16px 4px 12px' }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Download CV
                <LuHardDriveDownload className="text-xl transition-transform group-hover:translate-y-0.5" />
              </span>
              <span className="absolute inset-0 bg-current transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" style={{ zIndex: -1, borderRadius: '10px 6px 14px 2px / 6px 14px 2px 10px' }} />
            </a>

            <a
              href="#contact"
              className="btn-sketch-secondary group hand-drawn-text flex-1 sm:flex-none text-center"
              style={{ borderRadius: '12px 8px 16px 4px / 8px 16px 4px 12px' }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Let's collaborate
                <LuArrowRight className="transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" style={{ zIndex: -1, borderRadius: '10px 6px 14px 2px / 6px 14px 2px 10px', backgroundColor: 'var(--paper-alt)' }} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider - full width */}
      <div className="absolute bottom-0 left-0 right-0 mx-auto w-1/2 divider-sketch" />
    </section>
  )
}