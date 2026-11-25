import { useState } from 'react'
import { StandardHeader } from '../components/SectionTitle'

// Scribble underline for "together"
const ScribbleUnderline = ({ color = 'var(--color-note)' }) => (
  <svg
    viewBox="0 0 300 18"
    preserveAspectRatio="none"
    className="absolute left-0 bottom-[-12px] w-full h-4 pointer-events-none"
    style={{ width: '104%', transform: 'translateX(-2%)', color }}
  >
    <path
      d="M3 12 C40 3,70 17,110 8 S190 4,220 11 S280 14,297 5"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
    />
  </svg>
)

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')
  const [focusedField, setFocusedField] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, message } = formData

    if (!name || !email || !message) {
      setStatus('fill in all three lines ✎')
      return
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('fill in all three lines ✎')
      return
    }

    const body = encodeURIComponent(message + '\n\n— ' + name + ' (' + email + ')')
    const subject = encodeURIComponent('Hello from ' + name)
    window.location.href = `mailto:youssefnoujoum04@gmail.com?subject=${subject}&body=${body}`

    setStatus('opening your mail app…')
  }

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact" className="relative py-20 px-6 bg-journal overflow-hidden" style={{ paddingBottom: '56px' }}>
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
        PAGE 06 / 06
      </div>

      {/* Decorative doodles - { at left, ; at right */}
      <span className="absolute left-2 top-40 text-4xl font-mono opacity-40 pointer-events-none" style={{ color: 'var(--color-fg-muted)' }}>&#123;</span>
      <span className="absolute right-4 top-1/2 text-3xl font-mono opacity-30 pointer-events-none" style={{ color: 'var(--color-fg-muted)' }}>&#59;</span>

      {/* Standard container - max-width 1120px */}
      <div className="relative max-w-[1120px] mx-auto">
        {/* Header */}
        <div className="animate-fade-up stagger-1" style={{
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
                Last chapter · Contact
              </span>
            </div>

            {/* Main Heading with scribble underline on "together" */}
            <h2 className="relative inline-block" style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(48px, 9vw, 110px)',
              lineHeight: 0.92,
              letterSpacing: '-0.035em',
              color: 'var(--color-ink)',
              margin: '18px 0 0'
            }}>
              Let&apos;s make<br />
              something{' '}
              <span className="sc relative inline-block">
                together
                <ScribbleUnderline />
              </span>.
            </h2>
          </div>
        </div>

        {/* Grid - 5fr / 6fr, gap 72px, margin-top 64px */}
        <div className="animate-fade-up stagger-2" style={{
          display: 'grid',
          gridTemplateColumns: '5fr 6fr',
          gap: '72px',
          marginTop: '64px',
          alignItems: 'start'
        }}>
          {/* Left Column */}
          <div>
            {/* Lead paragraph */}
            <p className="lead" style={{
              fontSize: 'clamp(22px, 2.6vw, 30px)',
              lineHeight: 1.3,
              margin: '0 0 28px',
              color: 'var(--color-ink)'
            }}>
              Got a project, an internship, or just an idea scribbled on a napkin? Drop me a line. I read everything and reply fast.
            </p>

            {/* Badges with green dots */}
            <div className="badges" style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              marginBottom: '36px'
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
                color: 'var(--color-fg-muted)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{ color: '#6fcf7a', fontSize: '10px' }}>●</span>
                Open to freelance
              </span>
            </div>

            {/* Links list */}
            <ul className="links" style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
              borderTop: '2px dashed var(--color-fg-muted)'
            }}>
              <li>
                <a href="mailto:youssefnoujoum04@gmail.com" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '18px 4px',
                  borderBottom: '1px solid var(--color-line)',
                  color: 'var(--color-ink)',
                  textDecoration: 'none',
                  transition: 'padding 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.paddingLeft = '16px'}
                onMouseLeave={(e) => e.currentTarget.style.paddingLeft = '4px'}
                >
                  <small style={{
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 400,
                    fontSize: '11px',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--color-fg-muted)',
                    width: '90px',
                    flexShrink: 0
                  }}>Email</small>
                  <b style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: 'clamp(18px, 2.2vw, 24px)',
                    letterSpacing: '-0.01em',
                    overflowWrap: 'anywhere'
                  }}>youssefnoujoum04@gmail.com</b>
                  <i style={{ marginLeft: 'auto', fontStyle: 'normal', fontSize: '22px' }}>↗</i>
                </a>
              </li>
              <li>
                <a href="https://github.com/youssefnjm" target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '18px 4px',
                  borderBottom: '1px solid var(--color-line)',
                  color: 'var(--color-ink)',
                  textDecoration: 'none',
                  transition: 'padding 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.paddingLeft = '16px'}
                onMouseLeave={(e) => e.currentTarget.style.paddingLeft = '4px'}
                >
                  <small style={{
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 400,
                    fontSize: '11px',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--color-fg-muted)',
                    width: '90px',
                    flexShrink: 0
                  }}>GitHub</small>
                  <b style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: 'clamp(18px, 2.2vw, 24px)',
                    letterSpacing: '-0.01em',
                    overflowWrap: 'anywhere'
                  }}>@youssefnjm</b>
                  <i style={{ marginLeft: 'auto', fontStyle: 'normal', fontSize: '22px' }}>↗</i>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/youssef-noujoum-079bb0289" target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '18px 4px',
                  color: 'var(--color-ink)',
                  textDecoration: 'none',
                  transition: 'padding 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.paddingLeft = '16px'}
                onMouseLeave={(e) => e.currentTarget.style.paddingLeft = '4px'}
                >
                  <small style={{
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 400,
                    fontSize: '11px',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--color-fg-muted)',
                    width: '90px',
                    flexShrink: 0
                  }}>LinkedIn</small>
                  <b style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: 'clamp(18px, 2.2vw, 24px)',
                    letterSpacing: '-0.01em',
                    overflowWrap: 'anywhere'
                  }}>youssef-noujoum</b>
                  <i style={{ marginLeft: 'auto', fontStyle: 'normal', fontSize: '22px' }}>↗</i>
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column - Letter Form - inverted like Stack cards: white in dark, black in light */}
          <div className="letter relative" style={{
            background: 'var(--color-stack-bg)',
            color: 'var(--color-stack-ink)',
            border: '3px solid var(--color-stack-border)',
            borderRadius: '14px 22px 12px 20px / 20px 12px 22px 14px',
            padding: '40px 34px 34px',
            boxShadow: '8px 10px 0 var(--color-stack-shadow)',
            transform: 'rotate(1deg)',
            backgroundImage: 'repeating-linear-gradient(to bottom, transparent 0 39px, var(--color-stack-line) 39px 40px)',
            position: 'relative'
          }}>
            {/* Inner dashed border */}
            <div className="absolute" style={{
              inset: '8px',
              border: '2px dashed var(--color-stack-line)',
              borderRadius: '10px',
              pointerEvents: 'none'
            }} />

            {/* Tape - top:-14px, left:40px, rotated -5deg */}
            <div className="absolute" style={{
              top: '-14px',
              left: '40px',
              width: '96px',
              height: '28px',
              background: 'rgba(233, 217, 138, 0.85)',
              transform: 'rotate(-5deg)',
              borderLeft: '2px dashed rgba(0,0,0,0.2)',
              borderRight: '2px dashed rgba(0,0,0,0.2)'
            }} />

            {/* Stamp - top:18px, right:20px, 64x76px, dashed border, rotated 4deg */}
            <div className="absolute" style={{
              top: '18px',
              right: '20px',
              width: '64px',
              height: '76px',
              border: '2.5px dashed var(--color-stack-muted)',
              borderRadius: '4px',
              display: 'grid',
              placeItems: 'center',
              transform: 'rotate(4deg)',
              color: 'var(--color-red)',
              fontFamily: 'var(--font-hand)',
              fontWeight: 600,
              fontSize: '22px',
              textAlign: 'center',
              lineHeight: 1
            }}>
              hi!
            </div>

            {/* Dear line */}
            <p className="dear" style={{
              fontFamily: 'var(--font-hand)',
              fontWeight: 600,
              fontSize: '34px',
              lineHeight: '40px',
              margin: '0 90px 0 0',
              color: 'var(--color-stack-ink)'
            }}>
              Dear Youssef,
            </p>

            {/* Form fields - using inverted stack colors */}
            <form onSubmit={handleSubmit}>
              {/* Name field */}
              <label htmlFor="n" style={{
                display: 'block',
                fontFamily: 'var(--font-mono)',
                fontWeight: 400,
                fontSize: '10.5px',
                lineHeight: '40px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--color-stack-muted)',
                marginBottom: '4px'
              }}>
                My name is
              </label>
              <input
                id="n"
                type="text"
                autoComplete="name"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                onFocus={(e) => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                style={{
                  width: '100%',
                  background: 'none',
                  border: 0,
                  borderBottom: '2px solid var(--color-stack-ink)',
                  color: 'var(--color-stack-ink)',
                  fontFamily: '"Times New Roman", Georgia, serif',
                  fontWeight: 400,
                  fontSize: '20px',
                  lineHeight: '38px',
                  padding: '0 2px',
                  outline: 'none',
                  borderRadius: 0,
                  marginBottom: '24px'
                }}
              />

              {/* Email field */}
              <label htmlFor="e" style={{
                display: 'block',
                fontFamily: 'var(--font-mono)',
                fontWeight: 400,
                fontSize: '10.5px',
                lineHeight: '40px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--color-stack-muted)',
                marginBottom: '4px'
              }}>
                You can reach me at
              </label>
              <input
                id="e"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                onFocus={(e) => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                style={{
                  width: '100%',
                  background: 'none',
                  border: 0,
                  borderBottom: '2px solid var(--color-stack-ink)',
                  color: 'var(--color-stack-ink)',
                  fontFamily: '"Times New Roman", Georgia, serif',
                  fontWeight: 400,
                  fontSize: '20px',
                  lineHeight: '38px',
                  padding: '0 2px',
                  outline: 'none',
                  borderRadius: 0,
                  marginBottom: '24px'
                }}
              />

              {/* Message field */}
              <label htmlFor="m" style={{
                display: 'block',
                fontFamily: 'var(--font-mono)',
                fontWeight: 400,
                fontSize: '10.5px',
                lineHeight: '40px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--color-stack-muted)',
                marginBottom: '4px'
              }}>
                I&apos;d love to talk about
              </label>
              <textarea
                id="m"
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                onFocus={(e) => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                style={{
                  width: '100%',
                  height: '120px',
                  resize: 'none',
                  lineHeight: '40px',
                  background: 'none',
                  border: 0,
                  borderBottom: '2px solid var(--color-stack-ink)',
                  color: 'var(--color-stack-ink)',
                  fontFamily: '"Times New Roman", Georgia, serif',
                  fontWeight: 400,
                  fontSize: '20px',
                  padding: '0 2px',
                  outline: 'none',
                  display: 'block',
                  marginBottom: '26px'
                }}
              />

              {/* Send button & status - inverted */}
              <div className="send" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
                flexWrap: 'wrap'
              }}>
                <button
                  type="submit"
                  className="btn"
                  style={{
                    fontFamily: '"Times New Roman", Georgia, serif',
                    fontWeight: 700,
                    fontSize: '13px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--color-stack-bg)',
                    background: 'var(--color-stack-ink)',
                    border: '2px solid var(--color-stack-ink)',
                    padding: '14px 24px',
                    borderRadius: '12px 5px 12px 5px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'none'
                    e.target.style.color = 'var(--color-stack-ink)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'var(--color-stack-ink)'
                    e.target.style.color = 'var(--color-stack-bg)'
                  }}
                >
                  Send it ✉
                </button>
                <span className="status" style={{
                  fontFamily: 'var(--font-hand)',
                  fontWeight: 600,
                  fontSize: '22px',
                  color: 'var(--color-red)'
                }}>
                  {status}
                </span>
              </div>
            </form>

            {/* Sign-off sticky note - right:-18px, bottom:-34px, rotated -5deg */}
            <div className="sign absolute" style={{
              right: '-18px',
              bottom: '-34px',
              background: 'var(--color-note)',
              color: '#222',
              fontFamily: 'var(--font-hand)',
              fontWeight: 600,
              fontSize: '24px',
              lineHeight: '1.05',
              padding: '12px 16px',
              transform: 'rotate(-5deg)',
              boxShadow: '4px 6px 0 var(--color-shadow-strong)',
              borderRadius: '2px 2px 16px 2px',
              whiteSpace: 'pre-line'
            }}>
              talk soon,<br />— you
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}