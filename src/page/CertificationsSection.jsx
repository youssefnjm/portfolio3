import { useState } from 'react'
import CertificationC from '../assets/Certifes/Certification C.jpg'
import CertificationJs from '../assets/Certifes/Certification js.jpg'
import CertificationPhp from '../assets/Certifes/Certification php.jpg'
import CertificationCpp from '../assets/Certifes/Certification C++.png'

const certifications = [
  {
    title: "JavaScript Certification",
    img: CertificationJs,
    issuer: "CodinGame",
    year: "2023",
    skills: ["JavaScript", "ES6+", "Algorithms"]
  },
  {
    title: "PHP Certification",
    img: CertificationPhp,
    issuer: "CodinGame",
    year: "2023",
    skills: ["PHP", "OOP", "Web Development"]
  },
  {
    title: "C Certification",
    img: CertificationC,
    issuer: "CodinGame",
    year: "2023",
    skills: ["C", "Pointers", "Memory Management"]
  },
  {
    title: "C++ Certification",
    img: CertificationCpp,
    issuer: "CodinGame",
    year: "2024",
    skills: ["C++", "STL", "OOP", "Templates"]
  }
]

function CertificationCard({ cert }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <article className="relative group">
      <div className={`sketch-border overflow-hidden transition-all duration-300 ${isExpanded ? 'shadow-[12px_12px_0px_var(--shadow),_24px_24px_0px_var(--shadow-strong)]' : ''}`}
        style={{ borderRadius: '16px 8px 20px 8px / 8px 20px 8px 16px' }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Certificate image */}
        <div className="relative rough-image overflow-hidden" style={{ borderRadius: '14px 6px 18px 6px / 6px 18px 6px 14px', aspectRatio: '4/3' }}>
          <img
            src={cert.img}
            alt={`${cert.title} certificate`}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ borderRadius: '12px 4px 16px 4px / 4px 16px 4px 12px' }}
          />

          {/* Click to expand hint */}
          <div className="absolute bottom-0 left-0 right-0 py-3 px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: 'var(--fg)', opacity: 0.8 }}>
            <span className="text-xs hand-drawn-text" style={{ color: 'var(--bg)' }}>Click to expand</span>
          </div>
        </div>

        {/* Certificate info */}
        <div className="p-5">
          <div className="flex items-center justify-between gap-3 mb-3">
            <span className="tag-sketch hand-drawn-text text-xs">{cert.year}</span>
            <span className="text-xs hand-drawn-text" style={{ color: 'var(--fg-subtle)' }}>{cert.issuer}</span>
          </div>
          <h3 className="text-lg font-bold mb-2 hand-drawn-text tracking-tight" style={{ color: 'var(--fg)' }}>
            {cert.title}
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {cert.skills.map((skill) => (
              <span key={skill} className="tag-sketch hand-drawn-text text-xs">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Expanded details */}
        {isExpanded && (
          <div className="absolute inset-0 z-10 p-6 flex flex-col justify-center sketch-border"
            style={{ borderRadius: '14px 6px 18px 6px / 6px 18px 6px 14px', zIndex: 50, backgroundColor: 'var(--paper)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-w-md mx-auto text-center">
              <button
                onClick={(e) => { e.stopPropagation(); setIsExpanded(false); }}
                className="absolute top-4 right-4 w-8 h-8 sketch-border flex items-center justify-center transition-colors"
                style={{ borderRadius: '50% 45% 55% 50% / 45% 55% 50% 45%', color: 'var(--fg-subtle)' }}
                aria-label="Close"
              >
                ✕
              </button>
              <div className="mb-4">
                <div className="rough-image mx-auto mb-4" style={{ borderRadius: '12px 8px 16px 4px / 8px 16px 4px 12px', maxWidth: '300px', aspectRatio: '4/3' }}>
                  <img
                    src={cert.img}
                    alt={`${cert.title} certificate - full view`}
                    className="w-full h-full object-cover"
                    style={{ borderRadius: '10px 6px 14px 2px / 6px 14px 2px 10px' }}
                  />
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2 hand-drawn-text" style={{ color: 'var(--fg)' }}>
                {cert.title}
              </h4>
              <p className="mb-4 hand-drawn-text" style={{ color: 'var(--fg-muted)' }}>
                Issued by <span className="font-semibold">{cert.issuer}</span> in {cert.year}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {cert.skills.map((skill) => (
                  <span key={skill} className="tag-sketch hand-drawn-text text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  )
}

export default function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-20 px-6">
      {/* Background paper texture - full width */}
      <div className="absolute inset-0 paper-lines opacity-10" aria-hidden="true" />

      {/* Decorative elements - full width positioning */}
      <div className="absolute top-0 right-0 w-40 h-40 border-2 rounded-tr-full opacity-10" style={{ borderColor: 'var(--fg-subtle)' }} />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-2 rounded-bl-full opacity-10" style={{ borderColor: 'var(--fg-subtle)' }} />

      {/* Centered content container */}
      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-12 animate-fade-up stagger-1">
          <div className="section-label mb-6">
            <span>Verified</span>
          </div>
          <h2 className="heading-lg" style={{ color: 'var(--fg)' }}>
            Expert <br />
            <span className="hand-drawn-text text-2xl sm:text-3xl font-normal">Badges.</span>
          </h2>
          <p className="text-base max-w-xl leading-relaxed mt-4" style={{ color: 'var(--fg-muted)' }}>
            A collection of official certifications and specialized training that validate my technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-list">
          {certifications.map((cert) => (
            <CertificationCard key={cert.title} cert={cert} />
          ))}
        </div>
      </div>

      {/* Divider - full width */}
      <div className="absolute bottom-0 left-0 right-0 mx-auto w-1/2 divider-sketch" />
    </section>
  )
}