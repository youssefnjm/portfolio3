import { useState, useEffect, useRef } from 'react'
import characterImg from '../assets/Humation_1.png'

// Scribble underline for "scale"
const ScribbleUnderline = ({ color = 'var(--color-note)' }) => (
  <svg
    viewBox="0 0 300 16"
    preserveAspectRatio="none"
    className="absolute left-0 bottom-[-10px] w-full h-4 pointer-events-none"
    style={{ width: '104%', transform: 'translateX(-2%)', color }}
  >
    <path
      d="M3 10 C40 3 70 15 110 7 S190 3 220 9 280 12 297 4"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
    />
  </svg>
)

// Rotating text with cursor
function RotatingText() {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  const words = ['Built for performance.', 'Coded with passion.', 'Shipped with care.']

  useEffect(() => {
    const currentWord = words[wordIndex]
    let timeout

    if (!deleting) {
      if (charIndex < currentWord.length) {
        timeout = setTimeout(() => {
          setText(currentWord.slice(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        }, 70)
      } else {
        setDeleting(true)
        timeout = setTimeout(() => {}, 1600)
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setText(currentWord.slice(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        }, 35)
      } else {
        setDeleting(false)
        setWordIndex((wordIndex + 1) % words.length)
        setCharIndex(0)
        timeout = setTimeout(() => {}, 70)
      }
    }

    return () => clearTimeout(timeout)
  }, [wordIndex, charIndex, deleting])

  return (
    <p className="rot" style={{
      fontFamily: '"Times New Roman", Georgia, serif',
      fontStyle: 'italic',
      fontWeight: 400,
      fontSize: 'clamp(24px, 3.4vw, 40px)',
      lineHeight: 1.2,
      color: 'var(--color-fg-muted)',
      margin: '26px 0 0',
      height: '1.3em',
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }}>
      <span style={{ fontStyle: 'normal', color: 'var(--color-note)' }}>→</span>
      <em style={{
        borderRight: '3px solid var(--color-note)',
        paddingRight: '6px',
        animation: 'blink 0.8s steps(1) infinite'
      }}>
        {text}
      </em>
      <style jsx>{`
        @keyframes blink {
          50% { border-color: transparent; }
        }
      `}</style>
    </p>
  )
}

// Ticker - scrolling tech stack
function Ticker() {
  const techStack = [
    'React', 'Node.js', 'NestJS', 'TypeScript', 'Docker',
    'PostgreSQL', 'MongoDB', 'Linux', 'C', 'Tailwind'
  ]

  const trackRef = useRef(null)
  const [trackWidth, setTrackWidth] = useState(0)

  useEffect(() => {
    if (trackRef.current) {
      // Get the width of one row (half the track)
      const children = trackRef.current.children
      if (children.length > 0) {
        const rowWidth = Array.from(children).slice(0, techStack.length).reduce((sum, el) => sum + el.offsetWidth, 0)
        setTrackWidth(rowWidth)
      }
    }
  }, [])

  const items = [...techStack, ...techStack].map((tech, i) => (
    <span key={i} style={{
      color: i % 2 === 0 ? 'var(--color-ink)' : 'var(--color-note)',
      whiteSpace: 'nowrap'
    }}>
      {tech}
      {i !== techStack.length - 1 && i !== techStack.length * 2 - 1 && <span style={{ margin: '0 20px' }}>✦</span>}
    </span>
  ))

  return (
    <div className="tick" aria-hidden="true" style={{
      overflow: 'hidden',
      borderTop: '2px dashed var(--color-fg-muted)',
      borderBottom: '2px dashed var(--color-fg-muted)',
      padding: '14px 0',
      marginTop: '16px',
      transform: 'rotate(-1deg) scale(1.02)',
      background: 'var(--color-bg)'
    }}>
      <div
        ref={trackRef}
        className="track"
        style={{
          display: 'flex',
          gap: '40px',
          width: 'max-content',
          animation: 'mq 28s linear infinite',
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: '26px',
          letterSpacing: '-0.01em',
          textTransform: 'uppercase'
        }}
      >
        {items}
        <style jsx>{`
          @keyframes mq {
            to { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </div>
  )
}

// Scroll indicator
function ScrollIndicator() {
  return (
    <div className="scroll" style={{
      textAlign: 'center',
      fontFamily: 'var(--font-mono)',
      fontWeight: 400,
      fontSize: '11px',
      letterSpacing: '0.25em',
      textTransform: 'uppercase',
      color: 'var(--color-fg-muted)',
      padding: '26px 0 40px'
    }}>
      SCROLL
      <i style={{
        display: 'block',
        fontStyle: 'normal',
        fontSize: '22px',
        animation: 'bob 1.4s ease-in-out infinite'
      }}>↓</i>
      <style jsx>{`
        @keyframes bob {
          50% { transform: translateY(6px); }
        }
        @keyframes heroFloat {
          0%, 100% { transform: rotate(3deg); }
          50% { transform: rotate(1deg) translateY(-10px); }
        }
      `}</style>
    </div>
  )
}

export default function LandingSection() {
  return (
    <section id="landing" className="relative min-h-screen px-6 py-6 overflow-hidden bg-journal" style={{
      backgroundImage: 'repeating-linear-gradient(to bottom, transparent 0 47px, var(--color-line) 47px 48px)'
    }}>
      {/* Paper grain texture overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 400 400%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.03%22/%3E%3C/svg%22")'
      }} />

      {/* Hand-drawn corner accents */}
      <div className="absolute top-4 left-4 w-16 h-16 border-2 border-ink/10 rounded-tr-[30px] rotate-[-3deg]" />
      <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-ink/10 rounded-bl-[30px] rotate-[-3deg]" />
      <div className="absolute top-1/2 left-2 w-4 h-4 border border-dashed border-ink/10 rounded-full rotate-[15deg]" />
      <div className="absolute top-1/3 right-2 w-3 h-3 border border-ink/10 rotate-[45deg]" />

      {/* Decorative doodles - { and ; */}
      <span className="absolute left-2 top-40 text-4xl font-mono opacity-40 pointer-events-none" style={{ color: 'var(--color-fg-muted)' }}>&#123;</span>
      <span className="absolute right-4 top-1/2 text-3xl font-mono opacity-30 pointer-events-none" style={{ color: 'var(--color-fg-muted)' }}>&#59;</span>

      {/* Hero - 7fr/5fr grid, max-width 1120px */}
      <div className="relative max-w-[1120px] mx-auto">
        <header className="hero" id="top" style={{
          display: 'grid',
          gridTemplateColumns: '7fr 5fr',
          gap: '48px',
          alignItems: 'center',
          position: 'relative',
          minHeight: 'calc(100vh - 120px)',
          padding: '56px 0 40px'
        }}>
          {/* Left Column */}
          <div className="animate-fade-up stagger-1">
            {/* Eyebrow */}
            <div className="eyebrow flex items-center gap-4 mb-3" style={{
              fontFamily: 'var(--font-mono)',
              fontWeight: 400,
              fontSize: '12px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--color-fg-muted)',
              marginBottom: '18px'
            }}>
              <span className="w-8 h-px" style={{ background: 'var(--color-fg-muted)', flexShrink: 0 }} />
              Portfolio · Vol. 3 · 2026
            </div>

            {/* Heading with scribble underline */}
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(52px, 9vw, 124px)',
              lineHeight: 0.88,
              letterSpacing: '-0.045em',
              color: 'var(--color-ink)',
              margin: '22px 0 0'
            }}>
              <span>Designed</span>
              <span>for{' '}
                <span className="hl relative inline-block">
                  scale.
                  <ScribbleUnderline />
                </span>
              </span>
            </h1>

            {/* Rotating text */}
            <RotatingText />

            {/* Description */}
            <p className="desc" style={{
              fontFamily: 'var(--font-mono)',
              fontWeight: 400,
              fontSize: '14.5px',
              lineHeight: 1.85,
              color: 'var(--color-fg-muted)',
              maxWidth: '480px',
              margin: '22px 0 26px'
            }}>
              Full-stack developer crafting digital experiences at the intersection of clean architecture and creative problem solving.
            </p>

            {/* Badges */}
            <div className="badges" style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              marginBottom: '32px'
            }}>
              <span style={{
                fontSize: '13px',
                padding: '6px 14px',
                border: '1.5px solid var(--color-fg-muted)',
                borderRadius: '20px 8px 20px 8px',
                color: 'var(--color-fg-muted)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{ color: '#6fcf7a', fontSize: '10px' }}>●</span>
                Available for work
              </span>
              <span style={{
                fontSize: '13px',
                padding: '6px 14px',
                border: '1.5px solid var(--color-fg-muted)',
                borderRadius: '20px 8px 20px 8px',
                color: 'var(--color-fg-muted)'
              }}>
                Open to freelance
              </span>
              <span style={{
                fontSize: '13px',
                padding: '6px 14px',
                border: '1.5px solid var(--color-fg-muted)',
                borderRadius: '20px 8px 20px 8px',
                color: 'var(--color-fg-muted)'
              }}>
                1337 Student
              </span>
            </div>

            {/* CTA */}
            <div className="cta" style={{
              display: 'flex',
              gap: '22px',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}>
              <a
                href="#contact"
                className="btn fill"
                style={{
                  fontFamily: '"Times New Roman", Georgia, serif',
                  fontWeight: 700,
                  fontSize: '12.5px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-bg)',
                  background: 'var(--color-ink)',
                  border: '2px solid var(--color-ink)',
                  padding: '11px 18px',
                  borderRadius: '12px 5px 12px 5px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  gap: '8px',
                  alignItems: 'center',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'none'
                  e.target.style.color = 'var(--color-ink)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'var(--color-ink)'
                  e.target.style.color = 'var(--color-bg)'
                }}
              >
                Let&apos;s collaborate →
              </a>
              <a
                href="/src/assets/Pdfs/Youssef_Noujoum_cv.en.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="lnk"
                style={{
                  color: 'var(--color-ink)',
                  fontSize: '17px',
                  textDecoration: 'underline wavy',
                  textUnderlineOffset: '6px'
                }}
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Column - Art */}
          <div className="art" style={{
            position: 'relative',
            justifySelf: 'center',
            width: 'min(100%, 400px)'
          }}>
            {/* Photo with float animation */}
            <div className="photo" style={{
              transform: 'rotate(3deg)',
              animation: 'heroFloat 6s ease-in-out infinite'
            }}>
              {/* Tape - top:-16px, left:50%, rotate(-4deg) */}
              <div className="absolute" style={{
                top: '-16px',
                left: '50%',
                width: '110px',
                height: '30px',
                background: 'rgba(233, 217, 138, 0.85)',
                transform: 'translateX(-50%) rotate(-4deg)',
                borderLeft: '2px dashed rgba(0,0,0,0.2)',
                borderRight: '2px dashed rgba(0,0,0,0.2)',
                zIndex: 2
              }} />

              {/* Frame - inverted theme like Stack cards: white in dark, black in light */}
              <div className="frame" style={{
                background: 'var(--color-stack-bg)',
                border: '3px solid var(--color-stack-border)',
                borderRadius: '14px 22px 12px 20px / 20px 12px 22px 14px',
                padding: '14px 14px 58px',
                boxShadow: '9px 11px 0 var(--color-stack-shadow)'
              }}>
                <img
                  src={characterImg}
                  alt="Youssef's hand-drawn character - a friendly developer mascot"
                  style={{
                    display: 'block',
                    width: '100%',
                    borderRadius: '8px',
                    background: 'var(--color-stack-bg)'
                  }}
                />

                {/* Caption */}
                <div className="cap absolute bottom-3 left-0 right-0 text-center" style={{
                  fontFamily: 'var(--font-hand)',
                  fontWeight: 600,
                  fontSize: '26px',
                  color: 'var(--color-stack-ink)'
                }}>
                  hello, world!
                </div>
              </div>

              {/* Sticky note - left:-34px, bottom:30px, rotate(-7deg) */}
              <div className="sticky absolute" style={{
                left: '-34px',
                bottom: '30px',
                width: '140px',
                background: 'var(--color-note)',
                color: '#222',
                padding: '12px 14px 16px',
                fontFamily: 'var(--font-hand)',
                fontWeight: 600,
                fontSize: '22px',
                lineHeight: '1.05',
                transform: 'rotate(-7deg)',
                boxShadow: '4px 6px 0 var(--color-shadow-strong)',
                borderRadius: '2px 2px 18px 2px',
                zIndex: 2,
                textAlign: 'center',
                whiteSpace: 'pre-line'
              }}>
                psst&hellip; my eyes follow you 👀
              </div>
            </div>

            {/* Doodles on art side */}
            <span className="absolute left-[-30px] top-[30%] text-4xl font-mono opacity-40 pointer-events-none" style={{ color: 'var(--color-fg-muted)' }}>&#123;</span>
            <span className="absolute right-[-24px] bottom-[22%] text-3xl font-mono opacity-30 pointer-events-none" style={{ color: 'var(--color-fg-muted)' }}>&#59;</span>
          </div>
        </header>

        {/* Ticker */}
        <Ticker />

        {/* Scroll indicator */}
        <ScrollIndicator />
      </div>

    </section>
  )
}