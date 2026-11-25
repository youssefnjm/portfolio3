import { useState, useEffect } from 'react'
import CertificationC from '../assets/Certifes/Certification C.jpg'
import CertificationJs from '../assets/Certifes/Certification js.jpg'
import CertificationPhp from '../assets/Certifes/Certification php.jpg'
import CertificationCpp from '../assets/Certifes/Certification C++.png'
import { StandardHeader } from '../components/SectionTitle'

// Certificate data with real images
const CERTIFICATES = [
  {
    title: 'JavaScript Certification',
    img: CertificationJs,
    issuer: 'CodinGame',
    year: '2023'
  },
  {
    title: 'PHP Certification',
    img: CertificationPhp,
    issuer: 'CodinGame',
    year: '2023'
  },
  {
    title: 'C Certification',
    img: CertificationC,
    issuer: 'CodinGame',
    year: '2023'
  },
  {
    title: 'C++ Certification',
    img: CertificationCpp,
    issuer: 'CodinGame',
    year: '2024'
  }
]

// Sketch placeholder SVG (from HTML design)
const SKETCH_SVG = `
<svg viewBox="0 0 300 212" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <rect x="14" y="14" width="272" height="184" rx="6"/>
  <rect x="26" y="26" width="248" height="160" rx="4" stroke-width="1.8" stroke-dasharray="6 6"/>
  <path d="M90 70h120M110 92h80" stroke-width="5"/>
  <path d="M60 128h80M60 146h60M170 128h70" stroke-width="2.5"/>
  <circle cx="232" cy="150" r="20"/>
  <path d="M222 168l-6 24 16-8 16 8-6-24"/>
</svg>
`

// Certificate Card Component
function CertificateCard({ cert, index, onClick }) {
  const isFirst = index % 3 === 0      // 3n+1: rotate(-2deg)
  const isSecond = index % 3 === 1     // 3n+2: rotate(1.4deg), margin-top: 26px
  const isThird = index % 3 === 2      // 3n: rotate(-0.8deg)

  const baseTransform = isFirst ? 'rotate(-2deg)'
    : isSecond ? 'rotate(1.4deg)'
    : 'rotate(-0.8deg)'

  const hoverTransform = 'rotate(0) translateY(-8px) scale(1.02)'

  return (
    <button
      onClick={() => onClick(index)}
      className="cert animate-fade-up"
      style={{
        animationDelay: `${index * 0.08}s`,
        transform: baseTransform,
        marginTop: isSecond ? '26px' : 0,
        transition: 'transform 0.25s ease',
        background: 'none',
        border: 0,
        padding: 0,
        textAlign: 'left',
        color: 'inherit',
        cursor: 'zoom-in',
        font: 'inherit'
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = hoverTransform }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = baseTransform }}
      aria-label={`Open ${cert.title} certificate`}
    >
      {/* Card wrapper with border around whole card */}
      <div className="relative" style={{
        border: '2px solid var(--color-border)',
        borderRadius: '16px 24px 14px 22px / 22px 14px 24px 16px',
        padding: '8px',
        background: 'var(--color-bg)',
        boxShadow: '4px 6px 0 var(--color-shadow-strong)'
      }}>
        {/* Masking tape - yellow square/tape style like previous sections */}
        <div className="absolute" style={{
          top: '-16px',
          left: '50%',
          width: '84px',
          height: '26px',
          background: 'rgba(233, 217, 138, 0.85)',
          transform: 'translateX(-50%) rotate(-3deg)',
          borderLeft: '2px dashed rgba(0,0,0,0.2)',
          borderRight: '2px dashed rgba(0,0,0,0.2)',
          zIndex: 2,
          boxShadow: '1px 2px 4px rgba(0,0,0,0.15)'
        }} />

        {/* Frame - paper background, 3px border, asymmetric radius, shadow, aspect-ratio 1.414/1 (A4) */}
        <div className="relative" style={{
          background: 'var(--color-paper)',
          border: '3px solid var(--color-border)',
          borderRadius: '12px 20px 10px 18px / 18px 10px 20px 12px',
          padding: '12px',
          boxShadow: '7px 9px 0 var(--color-shadow-strong)',
          aspectRatio: '1.414 / 1',
          display: 'flex'
        }}>
        {cert.img ? (
          <img
            src={cert.img}
            alt={`${cert.title} certificate`}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '5px',
              display: 'block'
            }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              color: 'var(--color-ink)',
              background: 'rgba(127,127,127,0.1)',
              borderRadius: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            dangerouslySetInnerHTML={{ __html: SKETCH_SVG }}
          />
        )}
      </div>

      {/* VERIFIED stamp - right:-12px, bottom:78px, red border, rotated -10deg */}
      <span className="absolute" style={{
        right: '-12px',
        bottom: '78px',
        fontFamily: 'var(--font-mono)',
        fontWeight: 700,
        fontSize: '11px',
        letterSpacing: '0.16em',
        color: 'var(--color-red)',
        border: '2.5px solid var(--color-red)',
        padding: '4px 10px',
        borderRadius: '6px',
        transform: 'rotate(-10deg)',
        background: 'var(--color-bg)',
        zIndex: 2,
        opacity: 0.95,
        whiteSpace: 'nowrap'
      }}>
        VERIFIED
      </span>

      {/* Meta info */}
      <div style={{ padding: '18px 4px 0' }}>
        <small style={{
          fontFamily: 'var(--font-mono)',
          fontWeight: 400,
          fontSize: '11px',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: 'var(--color-fg-muted)',
          display: 'block'
        }}>
          {cert.issuer} · {cert.year}
        </small>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: '24px',
          lineHeight: '1.05',
          letterSpacing: '-0.02em',
          color: 'var(--color-ink)',
          margin: '6px 0 4px'
        }}>
          {cert.title}
        </h3>
      </div>
      </div>
    </button>
  )
}

// Lightbox Component
function Lightbox({ isOpen, onClose, onPrev, onNext, currentIndex, certificates }) {
  if (!isOpen) return null

  const cert = certificates[currentIndex]

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft') onPrev()
    if (e.key === 'ArrowRight') onNext()
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div
      className="fixed inset-0 z-[100]"
      style={{
        background: 'rgba(10, 10, 10, 0.88)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '16px',
        paddingTop: 'calc(24px + env(safe-area-inset-top, 0px))',
        paddingBottom: 'calc(24px + env(safe-area-inset-bottom, 0px))',
        paddingLeft: '24px',
        paddingRight: '24px'
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Certificate viewer"
      onClick={handleBackdropClick}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close"
        style={{
          position: 'absolute',
          top: 'calc(20px + env(safe-area-inset-top, 0px))',
          right: '20px',
          background: 'none',
          border: '2px solid var(--color-ink)',
          color: 'var(--color-ink)',
          fontFamily: 'var(--font-mono)',
          fontWeight: 700,
          fontSize: '20px',
          width: '46px',
          height: '46px',
          borderRadius: '14px 5px 14px 5px',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'var(--color-ink)'
          e.target.style.color = 'var(--color-bg)'
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'none'
          e.target.style.color = 'var(--color-ink)'
        }}
      >
        ✕
      </button>

      {/* Prev button */}
      <button
        onClick={onPrev}
        aria-label="Previous"
        style={{
          position: 'absolute',
          left: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'none',
          border: '2px solid var(--color-ink)',
          color: 'var(--color-ink)',
          fontFamily: 'var(--font-mono)',
          fontWeight: 700,
          fontSize: '20px',
          width: '46px',
          height: '46px',
          borderRadius: '14px 5px 14px 5px',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'var(--color-ink)'
          e.target.style.color = 'var(--color-bg)'
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'none'
          e.target.style.color = 'var(--color-ink)'
        }}
      >
        ←
      </button>

      {/* Next button */}
      <button
        onClick={onNext}
        aria-label="Next"
        style={{
          position: 'absolute',
          right: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'none',
          border: '2px solid var(--color-ink)',
          color: 'var(--color-ink)',
          fontFamily: 'var(--font-mono)',
          fontWeight: 700,
          fontSize: '20px',
          width: '46px',
          height: '46px',
          borderRadius: '14px 5px 14px 5px',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'var(--color-ink)'
          e.target.style.color = 'var(--color-bg)'
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'none'
          e.target.style.color = 'var(--color-ink)'
        }}
      >
        →
      </button>

      {/* Large certificate view */}
      <div className="relative" style={{
        background: 'var(--color-paper)',
        border: '3px solid var(--color-border)',
        borderRadius: '14px',
        padding: '12px',
        maxWidth: 'min(960px, 100%)',
        maxHeight: '72vh',
        display: 'flex',
        transform: 'rotate(-0.6deg)'
      }}>
        {cert.img ? (
          <img
            src={cert.img}
            alt={`${cert.title} certificate`}
            loading="lazy"
            style={{
              maxWidth: '100%',
              maxHeight: 'calc(72vh - 30px)',
              objectFit: 'contain',
              display: 'block'
            }}
          />
        ) : (
          <div
            style={{
              width: 'min(760px, 80vw)',
              aspectRatio: '1.414 / 1',
              color: '#161513',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            dangerouslySetInnerHTML={{ __html: SKETCH_SVG }}
          />
        )}
      </div>

      {/* Caption */}
      <p style={{
        margin: 0,
        color: 'var(--color-ink)',
        fontFamily: 'var(--font-mono)',
        fontWeight: 400,
        fontSize: '13px',
        letterSpacing: '0.1em',
        textAlign: 'center'
      }}>
        {cert.title} — {cert.issuer}, {cert.year}   ({currentIndex + 1}/{certificates.length})
      </p>
    </div>
  )
}

export default function CertificationsSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)

  const showPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + CERTIFICATES.length) % CERTIFICATES.length)
  }

  const showNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CERTIFICATES.length)
  }

  return (
    <section id="certificates" className="relative py-20 px-6 bg-journal overflow-hidden">
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
        PAGE 05 / 06
      </div>

      {/* Decorative doodle - ★ at left */}
      <span className="absolute left-2 top-40 text-3xl font-mono opacity-40 pointer-events-none" style={{ color: 'var(--color-fg-muted)' }}>★</span>

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
                Chapter 04 · Proof of work
              </span>
            </div>

            {/* Main Heading with counter */}
            <h2 className="relative inline-block" style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(44px, 8vw, 92px)',
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              color: 'var(--color-ink)',
              margin: '18px 0 0'
            }}>
              Certificates
              <sup style={{
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                fontSize: '0.28em',
                letterSpacing: 0,
                verticalAlign: 'top',
                color: 'var(--color-fg-muted)',
                marginLeft: '8px'
              }}>
                ({String(CERTIFICATES.length).padStart(2, '0')})
              </sup>
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
            Pinned to the wall of my notebook. Tap any certificate to read it up close.
          </p>
        </div>

        {/* Wall Grid - 3 columns, gap 56px 40px, margin-top 72px */}
        <div className="animate-fade-up stagger-2" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '56px 40px',
          marginTop: '72px'
        }}>
          {CERTIFICATES.map((cert, index) => (
            <CertificateCard
              key={cert.title}
              cert={cert}
              index={index}
              onClick={openLightbox}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onPrev={showPrev}
        onNext={showNext}
        currentIndex={currentIndex}
        certificates={CERTIFICATES}
      />
    </section>
  )
}