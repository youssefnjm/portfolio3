import { DualTitle } from '../components/SectionTitle'

// Stack data matching the HTML design
const STACK_PAGES = [
  {
    category: 'Frontend',
    subtitle: 'The visible part',
    number: '01',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'Vite']
  },
  {
    category: 'Backend',
    subtitle: 'Where logic lives',
    number: '02',
    items: ['Node.js', 'Express', 'NestJS', 'Socket.io', 'REST APIs', 'OpenAI API']
  },
  {
    category: 'Databases',
    subtitle: 'Keeping data safe',
    number: '03',
    items: ['PostgreSQL', 'MongoDB', 'Mongoose', 'SQL']
  },
  {
    category: 'DevOps',
    subtitle: 'Shipping & running',
    number: '04',
    items: ['Docker', 'Docker Compose', 'Nginx', 'TLS / SSL', 'CI basics']
  },
  {
    category: 'Systems',
    subtitle: 'Close to the metal',
    number: '05',
    items: ['Linux', 'Bash', 'SSH', 'UFW', 'AppArmor', 'LVM']
  },
  {
    category: 'Languages',
    subtitle: 'How I speak to machines',
    number: '06',
    items: ['JavaScript', 'TypeScript', 'C', 'C++', 'SQL', 'Bash']
  }
]

const DAILY_BELT = ['VS Code', 'Git & GitHub', 'Docker', 'Postman', 'Figma', 'Linux terminal', 'Vim']

const LEARNING = ['→ Kubernetes', '→ Next.js', '→ Rust (for fun)']

// Sticky note arrow SVG
const ArrowSvg = () => (
  <svg
    viewBox="0 0 80 60"
    fill="none"
    stroke="currentColor"
    strokeWidth="3.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: '70px', height: '60px' }}
  >
    <path d="M8 50C25 10 50 8 68 22M56 12l12 10-14 6" />
  </svg>
)

// Individual stack page card
function StackPage({ page, index }) {
  const isFirst = index % 3 === 0      // 3n+1: rotate(-1.2deg)
  const isSecond = index % 3 === 1     // 3n+2: rotate(0.9deg), margin-top: 24px
  const isThird = index % 3 === 2      // 3n: rotate(-0.5deg)

  const baseTransform = isFirst ? 'rotate(-1.2deg)'
    : isSecond ? 'rotate(0.9deg)'
    : 'rotate(-0.5deg)'

  const hoverTransform = 'rotate(0) translateY(-6px)'

  return (
    <article
      className="animate-fade-up"
      style={{
        animationDelay: `${index * 0.08}s`,
        transform: baseTransform,
        marginTop: isSecond ? '24px' : 0,
        transition: 'transform 0.25s ease'
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = hoverTransform }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = baseTransform }}
    >
      {/* Masking tape - top:-14px, left:50%, rotate(-3deg) */}
      <div className="absolute" style={{
        top: '-14px',
        left: '50%',
        width: '84px',
        height: '26px',
        background: 'rgba(233, 217, 138, 0.85)',
        transform: 'translateX(-50%) rotate(-3deg)',
        borderLeft: '2px dashed rgba(0,0,0,0.2)',
        borderRight: '2px dashed rgba(0,0,0,0.2)'
      }} />

      {/* Ruled paper background + red accent line */}
      <div className="relative" style={{
        background: 'var(--color-stack-bg)',
        color: 'var(--color-stack-ink)',
        border: '3px solid var(--color-stack-border)',
        borderRadius: '14px 22px 12px 20px / 20px 12px 22px 14px',
        padding: '34px 26px 26px 46px',
        boxShadow: '7px 9px 0 var(--color-stack-shadow)',
        backgroundImage: 'repeating-linear-gradient(to bottom, transparent 0 33px, var(--color-stack-line) 33px 34px)',
        minHeight: '280px'
      }}>
        {/* Red accent line - left:30px */}
        <div className="absolute" style={{
          left: '30px',
          top: 0,
          bottom: 0,
          width: '2px',
          background: 'rgba(220, 80, 70, 0.5)'
        }} />

        {/* Small label - subtitle + number */}
        <small style={{
          fontFamily: 'var(--font-mono)',
          fontWeight: 400,
          fontSize: '10.5px',
          letterSpacing: '0.18em',
          color: 'var(--color-stack-muted)',
          textTransform: 'uppercase',
          display: 'block',
          marginBottom: '8px'
        }}>
          {page.subtitle} · {page.number}
        </small>

        {/* Category title */}
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: '28px',
          lineHeight: '34px',
          letterSpacing: '-0.02em',
          color: 'var(--color-stack-ink)',
          margin: '0 0 14px'
        }}>
          {page.category}
        </h3>

        {/* Items list */}
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {page.items.map((item, i) => (
            <li
              key={item}
              style={{
                fontFamily: '"Times New Roman", Georgia, serif',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '34px',
                color: 'var(--color-cardink)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              {/* Checkbox bullet */}
              <span
                className="flex-none"
                style={{
                  width: '13px',
                  height: '13px',
                  border: '2px solid currentColor',
                  borderRadius: '3px 6px 3px 5px',
                  transition: 'all 0.2s ease',
                  flexShrink: 0
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'var(--color-note)'
                  e.target.style.borderColor = 'var(--color-note)'
                  e.target.style.transform = 'rotate(12deg) scale(1.15)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent'
                  e.target.style.borderColor = 'currentColor'
                  e.target.style.transform = 'rotate(0) scale(1)'
                }}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

// Daily tool belt chips
function BeltChip({ children, index }) {
  const isOdd = index % 2 === 0
  const isEven = index % 2 === 1
  const baseTransform = isOdd ? 'rotate(-2deg)' : 'rotate(1.5deg)'

  return (
    <span
      className="animate-fade-up"
      style={{
        animationDelay: `${index * 0.05}s`,
        fontSize: '17px',
        padding: '9px 18px',
        border: '2px solid var(--color-stroke)',
        borderRadius: '16px 6px 16px 6px / 6px 16px 6px 16px',
        color: 'var(--color-ink)',
        background: 'transparent',
        transform: baseTransform,
        transition: 'all 0.2s ease',
        cursor: 'default',
        display: 'inline-block'
      }}
      onMouseEnter={(e) => {
        e.target.style.background = 'var(--color-ink)'
        e.target.style.color = 'var(--color-bg)'
        e.target.style.transform = 'rotate(0) scale(1.06)'
      }}
      onMouseLeave={(e) => {
        e.target.style.background = 'transparent'
        e.target.style.color = 'var(--color-ink)'
        e.target.style.transform = baseTransform
      }}
    >
      {children}
    </span>
  )
}

export default function SkillsSection() {
  return (
    <section id="stack" className="relative py-20 px-6 bg-journal overflow-hidden">
      {/* Background paper texture - ruled paper (47px line spacing) */}
      <div className="absolute inset-0" aria-hidden="true" style={{
        backgroundImage: 'repeating-linear-gradient(to bottom, transparent 0 47px, var(--color-line) 47px 48px)'
      }} />

      {/* Paper grain texture overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 400 400%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.03%22/%3E%3C/svg%22")'
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
        PAGE 04 / 05
      </div>

      {/* Decorative doodle - </> at left */}
      <span className="absolute left-2 top-40 text-3xl font-mono opacity-40 pointer-events-none" style={{ color: 'var(--color-fg-muted)' }} dangerouslySetInnerHTML={{ __html: '</>' }} />

      {/* Standard container - max-width 1120px */}
      <div className="relative max-w-[1120px] mx-auto">
        {/* Header */}
        <div className="mb-12 animate-fade-up stagger-1" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: '24px',
          flexWrap: 'wrap'
        }}>
          <div>
            {/* Eyebrow - Chapter label with 32px line before */}
            <div className="flex items-center gap-4 mb-3" style={{ marginBottom: '18px' }}>
              <span className="w-8 h-px" style={{ background: 'var(--color-fg-muted)', flexShrink: 0 }} />
              <span className="font-mono text-xs uppercase tracking-widest" style={{
                letterSpacing: '0.25em',
                color: 'var(--color-fg-muted)'
              }}>
                Chapter 03 · Toolbox
              </span>
            </div>

            {/* Main Heading with styled ampersand */}
            <h2 className="relative inline-block" style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(44px, 8vw, 92px)',
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              color: 'var(--color-ink)',
              margin: '18px 0 0'
            }}>
              Stack{' '}
              <span className="amp" style={{
                fontFamily: 'var(--font-hand)',
                fontWeight: 600,
                letterSpacing: 0,
                display: 'inline-block',
                transform: 'rotate(-8deg)',
                color: 'var(--color-note)'
              }}>
                &
              </span>
              <br />
              Tools
            </h2>
          </div>

          {/* Intro paragraph */}
          <p className="font-mono" style={{
            maxWidth: '340px',
            fontSize: '13.5px',
            lineHeight: 1.8,
            color: 'var(--color-fg-muted)',
            margin: 0
          }}>
            The notebook pages I flip through most. Picked for speed, clarity and because I actually enjoy using them.
          </p>
        </div>

        {/* Grid - 3 columns, gap 48px 36px, margin-top 72px */}
        <div className="animate-fade-up stagger-2" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '48px 36px',
          marginTop: '72px'
        }}>
          {STACK_PAGES.map((page, index) => (
            <StackPage key={page.category} page={page} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}