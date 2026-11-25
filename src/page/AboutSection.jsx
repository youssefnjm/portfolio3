import { DualTitle } from '../components/SectionTitle'
import { LuArrowRight } from 'react-icons/lu'

// Hand-drawn SVG character (from the HTML design)
const CharacterIllustration = ({ className = "" }) => (
  <svg
    viewBox="0 0 300 300"
    fill="none"
    stroke="currentColor"
    strokeWidth="7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={{ width: '100%', height: '100%', background: 'var(--color-paper)', borderRadius: '8px' }}
  >
    <path d="M95 110c-12-40 15-70 55-68 45 2 62 35 48 70-10-18-30-22-50-18-22 4-42 4-53 16z" fill="currentColor" strokeWidth="0" opacity="0.9" />
    <circle cx="118" cy="135" r="17" />
    <circle cx="165" cy="135" r="17" />
    <path d="M135 135h12" />
    <path d="M115 175c8 22 40 26 58 4" />
    <path d="M70 300c6-50 20-85 55-95 15 12 35 12 50 0 35 10 48 45 56 95" fill="var(--color-paper)" />
    <path d="M110 230l-8 70M185 232v68" />
  </svg>
)

// Scribble underline for "sketchbook"
const ScribbleUnderline = () => (
  <svg
    viewBox="0 0 300 18"
    preserveAspectRatio="none"
    className="absolute left-0 bottom-[-14px] w-full h-4 pointer-events-none"
    style={{ width: '104%', transform: 'translateX(-2%)' }}
  >
    <path
      d="M3 12 C40 3,70 17,110 8 S190 4,220 11 S280 14,297 5"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      style={{ opacity: 0.6 }}
    />
  </svg>
)

// Polaroid frame with tape, caption, and sticky note
function PolaroidCard({ delay = 0 }) {
  return (
    <div
      className="animate-fade-up relative"
      style={{ animationDelay: `${delay}s`, transform: 'rotate(-3deg)', maxWidth: '100%' }}
    >
      {/* Masking tape - top:-16px, rotate(4deg), 110px wide */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-[110px] h-8 opacity-90 rotate-[4deg]" style={{
        background: 'rgba(233, 217, 138, 0.8)',
        clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 85%)',
        borderLeft: '2px dashed rgba(0,0,0,0.2)',
        borderRight: '2px dashed rgba(0,0,0,0.2)',
        boxShadow: '1px 1px 3px rgba(0,0,0,0.15)'
      }} />

      {/* Polaroid frame - 3px border, specific border-radius, box-shadow 8px 10px 0 */}
      <div className="relative" style={{
        background: 'var(--color-paper)',
        border: '3px solid var(--color-border)',
        borderRadius: '14px 22px 12px 20px / 20px 12px 22px 14px',
        padding: '14px 14px 56px 14px',
        boxShadow: '8px 10px 0 rgba(0,0,0,0.35)'
      }}>
        <CharacterIllustration className="w-full" style={{ borderRadius: '8px', display: 'block' }} />

        {/* Caption - bottom:12px, 26px handwriting font */}
        <div className="absolute bottom-3 left-0 right-0 text-center font-hand text-lg font-semibold" style={{
          fontFamily: 'var(--font-hand)',
          fontSize: '26px',
          color: 'var(--color-ink)',
          transform: 'rotate(-0.5deg)'
        }}>
          that&apos;s me, mostly →
        </div>
      </div>

      {/* Sticky note - right:-26px, bottom:-34px, 150px wide, rotate(6deg) */}
      <div className="absolute -right-6.5 -bottom-8.5 w-[150px]" style={{
        background: 'rgba(233, 217, 138, 0.95)',
        color: '#222',
        padding: '14px 14px 18px',
        fontFamily: 'var(--font-hand)',
        fontSize: '22px',
        lineHeight: '1.05',
        fontWeight: 600,
        transform: 'rotate(6deg)',
        boxShadow: '4px 6px 0 rgba(0,0,0,0.3)',
        borderRadius: '2px 2px 18px 2px',
        textAlign: 'center',
        whiteSpace: 'pre-line'
      }}>
        coffee ☕
        + code
        = happy
      </div>
    </div>
  )
}

// Stat card with specific border-radius and rotations
function StatCard({ number, label, rotation = 0, delay = 0 }) {
  return (
    <div
      className="animate-fade-up"
      style={{
        animationDelay: `${delay}s`,
        transform: `rotate(${rotation}deg)`,
        border: '2px solid var(--color-border)',
        padding: '18px 14px',
        textAlign: 'center',
        borderRadius: '12px 4px 14px 5px / 5px 14px 4px 12px'
      }}
    >
      <b className="block font-display text-5xl leading-none" style={{ color: 'var(--color-ink)' }}>{number}</b>
      <span className="font-mono text-xs uppercase tracking-widest" style={{
        letterSpacing: '0.14em',
        color: 'var(--color-fg-muted)',
        display: 'block',
        marginTop: '4px'
      }}>{label}</span>
    </div>
  )
}

// Tech tag with specific border-radius
function TechTag({ children, delay = 0 }) {
  return (
    <span
      className="animate-fade-up"
      style={{
        animationDelay: `${delay}s`,
        fontSize: '13px',
        padding: '6px 14px',
        border: '1.5px solid var(--color-fg-muted)',
        borderRadius: '20px 8px 20px 8px',
        color: 'var(--color-fg-muted)',
        transition: 'all 0.2s ease',
        cursor: 'default'
      }}
      onMouseEnter={(e) => {
        e.target.style.color = 'var(--color-ink)';
        e.target.style.borderColor = 'var(--color-ink)';
        e.target.style.transform = 'rotate(-2deg)';
      }}
      onMouseLeave={(e) => {
        e.target.style.color = 'var(--color-fg-muted)';
        e.target.style.borderColor = 'var(--color-fg-muted)';
        e.target.style.transform = 'rotate(0deg)';
      }}
    >
      {children}
    </span>
  )
}

// Timeline entry
function TimelineEntry({ date, title, description, delay = 0 }) {
  return (
    <div
      className="animate-fade-up"
      style={{
        animationDelay: `${delay}s`,
        display: 'grid',
        gridTemplateColumns: '130px 1fr',
        gap: '24px',
        padding: '22px 0',
        // borderBottom: '1px solid var(--color-line)'
      }}
    >
      <time className="font-mono text-xs uppercase tracking-wider" style={{
        color: 'var(--color-fg-muted)',
        paddingTop: '6px',
        letterSpacing: '0.12em'
      }}>{date}</time>
      <div>
        <h3 className="font-display text-xl font-bold mb-2" style={{ color: 'var(--color-ink)' }}>{title}</h3>
        <p className="text-base leading-relaxed" style={{ color: 'var(--color-fg-muted)', fontSize: '17px', lineHeight: 1.5 }}>{description}</p>
      </div>
    </div>
  )
}

// Button component with exact specs
function SketchButton({ children, href, variant = "primary", className = "", delay = 0, ...props }) {
  const isPrimary = variant === "primary"
  return (
    <a
      href={href}
      className={`animate-fade-up inline-flex items-center gap-2 font-bold uppercase tracking-wider ${className}`}
      style={{
        animationDelay: `${delay}s`,
        fontFamily: 'var(--font-mono)',
        fontSize: '13px',
        letterSpacing: '0.08em',
        color: 'var(--color-ink)',
        textDecoration: 'none',
        border: '2px solid var(--color-border)',
        borderRadius: '12px 5px 12px 5px',
        padding: '14px 22px',
        background: 'transparent',
        transition: 'all 0.2s ease',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px'
      }}
      onMouseEnter={(e) => {
        if (isPrimary) {
          e.target.style.background = 'var(--color-ink)';
          e.target.style.color = 'var(--color-bg)';
        }
      }}
      onMouseLeave={(e) => {
        if (isPrimary) {
          e.target.style.background = 'transparent';
          e.target.style.color = 'var(--color-ink)';
        }
      }}
      {...props}
    >
      {children}
      {isPrimary && <LuArrowRight size={16} className="transition-transform" />}
    </a>
  )
}

const techTags = ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Docker", "C / C++"]

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 px-6 bg-journal overflow-hidden">
      {/* Background paper texture - subtle ruled paper (47px line spacing) */}
      <div className="absolute inset-0" aria-hidden="true" style={{
        backgroundImage: 'repeating-linear-gradient(to bottom, transparent 0 47px, var(--color-line) 47px 48px)'
      }} />

      {/* Paper grain texture overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 400 400%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.03%22/%3E%3C/svg%3E")'
      }} />

      {/* Hand-drawn corner accents */}
      <div className="absolute top-4 left-4 w-16 h-16 border-2 border-ink/10 rounded-tr-[30px] rotate-[-3deg]" />
      <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-ink/10 rounded-bl-[30px] rotate-[-3deg]" />
      <div className="absolute top-1/2 left-2 w-4 h-4 border border-dashed border-ink/10 rounded-full rotate-[15deg]" />
      <div className="absolute top-1/3 right-2 w-3 h-3 border border-ink/10 rotate-[45deg]" />

      {/* Page indicator - top right */}
      <div className="absolute right-6 top-10 font-mono text-xs uppercase tracking-widest" style={{
        letterSpacing: '0.2em',
        color: 'var(--color-fg-muted)'
      }}>
        PAGE 02 / 05
      </div>

      {/* Decorative doodles - { at left, ; at right */}
      <span className="absolute left-2 top-32 text-4xl font-mono opacity-40 pointer-events-none" style={{ color: 'var(--color-fg-muted)' }}>&#123;</span>
      <span className="absolute right-4 top-1/2 text-3xl font-mono opacity-30 pointer-events-none" style={{ color: 'var(--color-fg-muted)' }}>&#59;</span>

      {/* Standard container - matches other sections */}
      <div className="relative max-w-5xl mx-auto">
        {/* Section Titles - Pinned label + Boxed title */}
        {/* <DualTitle
          pinnedLabel="About me!"
          boxedTitle="What&apos;s up?"
        /> */}

        {/* Eyebrow - Chapter label with 32px line before */}
        <div className="animate-fade-up stagger-2 flex items-center gap-4 mb-6" style={{ marginTop: '18px' }}>
          <span className="w-8 h-px" style={{ background: 'var(--color-fg-muted)', flexShrink: 0 }} />
          <span className="font-mono text-xs uppercase tracking-widest" style={{
            letterSpacing: '0.25em',
            color: 'var(--color-fg-muted)'
          }}>
            Chapter 01 · About me
          </span>
        </div>

        {/* Main Heading with scribble underline */}
        <h2 className="animate-fade-up stagger-3 mb-10 relative inline-block" style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 'clamp(44px, 8vw, 92px)',
          lineHeight: 0.95,
          letterSpacing: '-0.03em',
          color: 'var(--color-ink)',
          margin: '18px 0 0'
        }}>
          A dev with<br />
          a <span className="relative inline-block italic" style={{ fontStyle: 'italic' }}>
            sketchbook
            <ScribbleUnderline />
          </span>.
        </h2>

        {/* Main Content Grid - 5fr / 7fr with 64px gap */}
        <div className="animate-fade-up stagger-4" style={{
          display: 'grid',
          gridTemplateColumns: '5fr 7fr',
          gap: '64px',
          marginTop: '64px',
          alignItems: 'start'
        }}>
          {/* Left: Photo - rotated -3deg */}
          <div className="relative" style={{ transform: 'rotate(-3deg)', maxWidth: '100%' }}>
            <PolaroidCard delay={0.2} />
          </div>

          {/* Right: Content */}
          <div>
            {/* Lead paragraph */}
            <p className="mb-7" style={{
              fontSize: 'clamp(24px, 3.2vw, 34px)',
              lineHeight: 1.25,
              margin: '0 0 28px',
              color: 'var(--color-ink)'
            }}>
              I&apos;m a full-stack developer who likes <em style={{
                fontStyle: 'italic',
                background: 'linear-gradient(transparent 62%, rgba(233, 217, 138, 0.35) 0)'
              }}>clean architecture</em> and messy sketchbooks in equal measure.
            </p>

            {/* Body paragraphs */}
            <div style={{ fontSize: '14.5px', lineHeight: 1.85, color: 'var(--color-fg-muted)', marginBottom: '18px' }}>
              <p className="mb-4">I build things for the web from database to pixel. Most days that means turning rough ideas into fast, readable and scalable products, then polishing them until they feel hand-made.</p>
              <p className="mb-4">I learn by shipping, break things on purpose and write notes about it afterwards. Currently a student at 1337, open to freelance and to teams that care about craft.</p>
            </div>

            {/* Stats - 3 columns, gap 16px */}
            <div className="grid grid-cols-3 gap-4 mb-10" style={{ marginTop: '36px', marginBottom: '34px' }}>
              <StatCard number="3+" label="Years coding" rotation={-1.2} delay={0.5} />
              <StatCard number="20+" label="Projects" rotation={1.5} delay={0.6} />
              <StatCard number="∞" label="Coffees" rotation={0} delay={0.7} />
            </div>

            {/* Tech tags - gap 10px */}
            <div className="flex flex-wrap gap-2.5 mb-10" style={{ marginBottom: '34px' }}>
              {techTags.map((tag, i) => (
                <TechTag key={tag} delay={0.8 + i * 0.05}>{tag}</TechTag>
              ))}
            </div>

            {/* Buttons - gap 22px */}
            <div className="flex flex-wrap items-center gap-5.5" style={{ gap: '22px' }}>
              <SketchButton href="#contact" variant="primary" delay={0.9}>
                Let&apos;s collaborate →
              </SketchButton>
              <a
                href="/src/assets/Pdfs/Youssef_Noujoum_cv.en.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="animate-fade-up font-mono text-sm uppercase tracking-wider transition-colors"
                style={{
                  animationDelay: '1s',
                  color: 'var(--color-ink)',
                  textDecoration: 'none',
                  padding: '14px 22px',
                  border: '2px solid transparent',
                  borderRadius: '12px 5px 12px 5px'
                }}
                onMouseEnter={(e) => e.target.style.opacity = '0.7'}
                onMouseLeave={(e) => e.target.style.opacity = '1'}
              >
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Timeline / Log - border-top 2px dashed, margin-top 72px, padding-top 12px */}
        <div className="animate-fade-up stagger-5" style={{
          borderTop: '2px dashed var(--color-line)',
          marginTop: '72px',
          paddingTop: '12px'
        }}>
          <TimelineEntry
            date="2024 — NOW"
            title="Student at 1337 Coding School (42 Network)"
            description="Advancing software engineering through project-based peer learning. Focused on low-level programming, systems logic, C/C++, algorithms, and building high-performance unmanaged code."
            delay={1.1}
          />
          <TimelineEntry
            date="2023 — 2024"
            title="Technicien Spécialisé - Full-Stack Development"
            description="Learned full-stack development hands-on at Centre de Formation Professionnelle Hassania, building and deploying real-world digital solutions with modern web technologies."
            delay={1.2}
          />
          <TimelineEntry
            date="2022"
            title='Baccalauréat - Physical Sciences & Chemistry"'
            description="Graduated from high school with a focus on physical sciences and chemistry, laying the foundation for analytical thinking and problem-solving skills."
            delay={1.3}
          />
        </div>

      </div>
    </section>
  )
}