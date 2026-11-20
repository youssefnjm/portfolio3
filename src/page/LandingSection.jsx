import { LuArrowRight } from 'react-icons/lu'
import characterImg from '../assets/Humation_1.png'

const FloatingDoodle = ({ children, delay = 0, ...props }) => (
  <div
    className="animate-float pointer-events-none"
    style={{ animationDelay: `${delay}s`, ...props }}
  >
    {children}
  </div>
)

const LandingSection = () => {
  return (
    <section id="landing" className="relative min-h-screen px-6 py-6 overflow-hidden">
      {/* Background paper texture */}
      <div className="absolute inset-0 paper-lines opacity-20" aria-hidden="true" />

      {/* Decorative floating elements */}
      <FloatingDoodle delay={0} className="absolute top-20 left-10 text-4xl hand-drawn-text opacity-30">✦</FloatingDoodle>
      <FloatingDoodle delay={1} className="absolute top-1/4 right-16 text-3xl hand-drawn-text opacity-20">▲</FloatingDoodle>
      <FloatingDoodle delay={2} className="absolute bottom-1/3 left-20 text-2xl hand-drawn-text opacity-25">■</FloatingDoodle>
      <FloatingDoodle delay={1.5} className="absolute bottom-20 right-24 text-xl hand-drawn-text opacity-30">◆</FloatingDoodle>
      <FloatingDoodle delay={0.5} className="absolute top-1/2 left-4 text-lg hand-drawn-text opacity-20">♡</FloatingDoodle>
      <FloatingDoodle delay={2.5} className="absolute top-1/3 right-4 text-lg hand-drawn-text opacity-15">◇</FloatingDoodle>

      {/* Centered content wrapper - single flex container that centers the entire block */}
      <div className="relative w-full max-w-7xl mx-auto min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center px-4">
        {/* All content as one grouped unit - no internal justify-center */}
        <div className="flex flex-col items-center gap-10 w-full">
          {/* Character illustration - centered */}
          <div className="relative animate-fade-up stagger-1 character-float" style={{ animationDuration: '8s' }}>
            <div className="relative flex justify-center">
              {/* Sketchy frame behind character */}
              <div className="absolute -inset-4 border-2 rounded-full opacity-20 animate-float" style={{ borderColor: 'var(--fg-subtle)', animationDelay: '1s', animationDuration: '6s' }} />
              <div className="absolute -inset-8 border border-dashed rounded-full opacity-15 animate-float" style={{ borderColor: 'var(--fg-subtle)', animationDelay: '2s', animationDuration: '7s' }} />

              <div className="rough-image relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96" style={{ borderRadius: '20px 10px 24px 10px / 10px 24px 10px 20px' }}>
                <img
                  src={characterImg}
                  alt="Youssef's hand-drawn character - a friendly developer mascot"
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '18px 8px 22px 8px / 8px 22px 8px 18px' }}
                />
              </div>

              {/* Floating code brackets around character */}
              <div className="absolute -top-6 -left-6 text-3xl hand-drawn-text opacity-40 animate-wiggle">&#123;</div>
              <div className="absolute -top-6 -right-6 text-3xl hand-drawn-text opacity-40 animate-wiggle" style={{ animationDelay: '0.5s' }}>&#125;</div>
              <div className="absolute bottom-6 -left-6 text-3xl hand-drawn-text opacity-40 animate-wiggle" style={{ animationDelay: '1s' }}>&#59;</div>
              <div className="absolute bottom-6 -right-6 text-3xl hand-drawn-text opacity-40 animate-wiggle" style={{ animationDelay: '1.5s' }}>&#123;</div>
            </div>
          </div>

          {/* Main headline - centered */}
          <div className="text-center animate-fade-up stagger-2 w-full px-4">
            <div className="section-label justify-center mb-6 stagger-3">
              <span>Handcrafted with code</span>
            </div>

            <h1 className="heading-xl mb-6 stagger-4 leading-tight" style={{ color: 'var(--fg)' }}>
              <span className="block">Designed for scale.</span>
              <span className="block">Built for performance.</span>
              <span className="block hand-drawn-text text-2xl sm:text-3xl md:text-4xl font-normal mt-2" style={{ letterSpacing: '0.05em' }}>
                Coded with passion.
              </span>
            </h1>

            <p className="text-lg sm:text-xl max-w-2xl mx-auto stagger-5 leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
              Full-stack developer crafting digital experiences at the intersection of
              <span className="font-semibold">clean architecture</span> and
              <span className="font-semibold">creative problem solving</span>.
            </p>

            {/* Status badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-8 stagger-6">
              <span className="tag-sketch hand-drawn-text">Available for work</span>
              <span className="tag-sketch hand-drawn-text">Open to freelance</span>
              <span className="tag-sketch hand-drawn-text">1337 Student</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up stagger-7">
            <a
              href="#contact"
              className="btn-sketch group hand-drawn-text"
              style={{ borderRadius: '12px 8px 16px 4px / 8px 16px 4px 12px' }}
            >
              <span className="relative z-10">Let's collaborate</span>
              <span className="absolute inset-0 bg-current transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" style={{ zIndex: -1, borderRadius: '10px 6px 14px 2px / 6px 14px 2px 10px' }} />
              <LuArrowRight className="relative z-10 transition-transform group-hover:translate-x-1" size={18} />
            </a>

            <a
              href="/src/assets/Pdfs/Youssef_Noujoum_cv.en.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sketch-secondary hand-drawn-text"
              style={{ borderRadius: '12px 8px 16px 4px / 8px 16px 4px 12px' }}
            >
              <span className="relative z-10">Download CV</span>
              <span className="absolute inset-0 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" style={{ zIndex: -1, borderRadius: '10px 6px 14px 2px / 6px 14px 2px 10px', backgroundColor: 'var(--paper-alt)' }} />
            </a>
          </div>
        </div>

        {/* Scroll indicator - positioned relative to the centered wrapper */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce animate-float mt-10" style={{ animationDuration: '2s' }}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
            style={{ color: 'var(--fg-subtle)' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 divider-sketch" />
    </section>
  )
}

export default LandingSection