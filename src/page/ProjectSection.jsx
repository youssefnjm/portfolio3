import { useState, useMemo } from 'react'
import ProjectList from "../data/ProjectList.js"

// SVG Doodles for project card placeholders (from HTML)
const DOODLES = [
  '<path d="M30 118h60M30 134h110M30 150h80" /><rect x="190" y="110" width="80" height="50" rx="6"/><path d="M200 80l20-20 20 20 20-20"/>',
  '<path d="M40 150c40-60 80 40 120-20s60 20 100-30"/><circle cx="60" cy="70" r="14"/><path d="M200 60h70v36h-50l-12 12z"/>',
  '<rect x="40" y="60" width="70" height="100"/><rect x="130" y="90" width="70" height="70"/><rect x="220" y="50" width="50" height="110"/><path d="M52 80h46M52 96h46"/>',
  '<circle cx="150" cy="105" r="48"/><path d="M150 57v96M102 105h96M116 70c30 20 30 50 0 70M184 70c-30 20-30 50 0 70"/>',
  '<path d="M110 50v110M190 50v110M60 85h180M60 125h180"/><path d="M70 60l30 20M100 60L70 80"/><circle cx="150" cy="105" r="14"/>',
  '<rect x="50" y="70" width="60" height="70"/><rect x="120" y="70" width="60" height="70"/><rect x="190" y="70" width="60" height="70"/><path d="M60 160h180"/>',
  '<rect x="70" y="60" width="160" height="100" rx="6"/><circle cx="150" cy="105" r="14"/><path d="M150 119v16M60 170h180"/>',
  '<path d="M50 70l40 30-40 30M110 135h70"/><rect x="40" y="50" width="220" height="110" rx="6"/>',
  '<path d="M90 150c-20-60 10-100 60-100s80 40 60 100z"/><circle cx="130" cy="95" r="8"/><circle cx="170" cy="95" r="8"/><path d="M132 125c10 10 26 10 36 0"/>'
]

// Project Card Component
function ProjectCard({ project, index }) {
  const doodle = DOODLES[index % DOODLES.length]
  const cardNumber = String(index + 1).padStart(2, '0')
  const isOdd = index % 2 === 0
  const isEven = index % 2 === 1

  return (
    <article
      className="animate-fade-up"
      style={{
        animationDelay: `${index * 0.08}s`,
        transform: isOdd ? 'rotate(-0.8deg)' : 'rotate(0.8deg)',
        marginTop: isEven ? '28px' : 0,
        transition: 'transform 0.25s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'rotate(0) translateY(-6px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = isOdd ? 'rotate(-0.8deg)' : 'rotate(0.8deg)'
      }}
    >
      {/* Shot - image/placeholder area */}
      <div className="relative" style={{
        background: 'var(--color-paper)',
        border: '3px solid var(--color-border)',
        borderRadius: '14px 22px 12px 20px / 20px 12px 22px 14px',
        padding: '12px',
        boxShadow: '7px 9px 0 var(--color-shadow-strong)'
        // overflow: hidden removed so badges with negative top show
      }}>
        {/* Number badge - top left */}
        <span className="absolute" style={{
          top: '-18px',
          left: '18px',
          background: 'rgba(233, 217, 138, 0.95)',
          color: '#222',
          fontFamily: 'var(--font-hand)',
          fontWeight: 600,
          fontSize: '24px',
          padding: '2px 14px',
          transform: 'rotate(-4deg)',
          boxShadow: '2px 3px 0 var(--color-shadow-strong)'
        }}>
          no. {cardNumber}
        </span>

        {/* Type badge - top right */}
        <span className="absolute" style={{
          top: '-14px',
          right: '16px',
          background: 'var(--color-bg)',
          color: 'var(--color-ink)',
          border: '1.5px solid var(--color-border)',
          fontFamily: 'var(--font-mono)',
          fontSize: '10.5px',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          padding: '5px 11px',
          borderRadius: '12px 4px 12px 4px'
        }}>
          {project.type}
        </span>

        {/* Image or SVG placeholder - border-radius matches inner frame radius (12px - 12px padding = ~6px, use 10px for inner) */}
        {project.img ? (
          <img
            src={project.img}
            alt={`${project.name} preview`}
            loading="lazy"
            className="w-full"
            style={{
              display: 'block',
              borderRadius: '10px 10px 8px 8px',
              height: 'auto',
              background: 'rgba(127,127,127,0.12)'
            }}
          />
        ) : (
          <svg
            viewBox="0 0 300 190"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            role="img"
            aria-label={`${project.name} preview placeholder`}
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
              borderRadius: '10px 10px 8px 8px',
              background: 'rgba(127,127,127,0.12)',
              color: 'var(--color-fg-muted)'
            }}
            dangerouslySetInnerHTML={{ __html: `
              <path d="M12 12h276v26H12zM12 38v140h276V38" stroke-width="3"/>
              <circle cx="28" cy="25" r="4"/>
              <circle cx="42" cy="25" r="4"/>
              <circle cx="56" cy="25" r="4"/>
              ${doodle}
            ` }}
          />
        )}
      </div>

      {/* Title */}
      <h3 className="font-display mt-6 mb-2.5" style={{
        fontWeight: 800,
        fontSize: 'clamp(26px, 3.2vw, 36px)',
        lineHeight: 1,
        letterSpacing: '-0.02em',
        color: 'var(--color-ink)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'inherit',
            textDecoration: 'none',
            background: 'linear-gradient(var(--color-ink), var(--color-ink)) 0 100% / 0 2px no-repeat',
            transition: 'background-size 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.backgroundSize = '100% 2px'}
          onMouseLeave={(e) => e.target.style.backgroundSize = '0 2px'}
        >
          {project.name}
        </a>
        <span style={{ fontSize: '0.6em' }}>↗</span>
      </h3>

      {/* Description */}
      <p className="mb-4" style={{
        margin: '0 0 16px',
        fontSize: '17px',
        lineHeight: 1.5,
        color: 'var(--color-fg-muted)'
      }}>
        {project.desc}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4.5" style={{ marginBottom: '18px' }}>
        {project.tech?.map((tech) => (
          <span key={tech} style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            padding: '4px 11px',
            border: '1.2px solid var(--color-fg-muted)',
            borderRadius: '14px 5px 14px 5px',
            color: 'var(--color-fg-muted)'
          }}>
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-5" style={{
        fontFamily: 'var(--font-mono)',
        fontWeight: 700,
        fontSize: '12.5px',
        letterSpacing: '0.1em',
        textTransform: 'uppercase'
      }}>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'var(--color-ink)',
            textDecoration: 'none',
            borderBottom: '2px solid var(--color-ink)',
            paddingBottom: '2px',
            transition: 'opacity 0.2s'
          }}
          onMouseEnter={(e) => e.target.style.opacity = '0.6'}
          onMouseLeave={(e) => e.target.style.opacity = '1'}
        >
          View project
        </a>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--color-ink)',
              textDecoration: 'none',
              borderBottom: '2px solid var(--color-ink)',
              paddingBottom: '2px',
              transition: 'opacity 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.opacity = '0.6'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            GitHub
          </a>
        )}
      </div>
    </article>
  )
}

// Filter Chip Component
function FilterChip({ label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className="animate-fade-up"
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '14px',
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: isActive ? 'var(--color-bg)' : 'var(--color-fg-muted)',
        background: isActive ? 'var(--color-ink)' : 'transparent',
        border: '1.5px solid',
        borderColor: isActive ? 'var(--color-ink)' : 'var(--color-fg-muted)',
        padding: '8px 18px',
        borderRadius: '20px 7px 20px 7px',
        cursor: 'pointer',
        transition: 'all 0.2s ease'
      }}
      onMouseEnter={(e) => {
        if (!isActive) {
          e.target.style.color = 'var(--color-bg)'
          e.target.style.background = 'var(--color-ink)'
          e.target.style.borderColor = 'var(--color-ink)'
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          e.target.style.color = 'var(--color-fg-muted)'
          e.target.style.background = 'transparent'
          e.target.style.borderColor = 'var(--color-fg-muted)'
        }
      }}
    >
      {label}
    </button>
  )
}

export default function ProjectSection() {
  const [activeFilter, setActiveFilter] = useState('all')

  // Add category to projects (web or sys) based on tech stack
  const projectsWithCategory = useMemo(() => ProjectList.map((p, i) => ({
    ...p,
    cat: p.tech?.some(t =>
      ['Docker', 'Linux', 'C', 'Bash', 'Nginx', 'MariaDB', 'TLS/SSL', 'SSH', 'UFW', 'AppArmor', 'LVM', 'Cron', 'Unix Signals', 'Pipes', 'Redirections', 'Process Management', 'Docker Compose', 'WordPress', 'PHP-FPM', 'TypeScript', 'NestJS', 'PostgreSQL'].includes(t)
    ) ? 'sys' : 'web'
  })), [])

  const filteredProjects = projectsWithCategory.filter(p =>
    activeFilter === 'all' || p.cat === activeFilter
  )

  const filterLabels = [
    { key: 'all', label: 'All work' },
    { key: 'web', label: 'Web apps' },
    { key: 'sys', label: 'Systems & DevOps' }
  ]

  return (
    <section id="projects" className="relative py-20 px-6 bg-journal overflow-hidden">
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
        PAGE 03 / 05
      </div>

      {/* Decorative doodle - } at left */}
      <span className="absolute left-2 top-40 text-4xl font-mono opacity-40 pointer-events-none" style={{ color: 'var(--color-fg-muted)' }}>&#125;</span>

      {/* Standard container - max-width 1120px matches HTML design */}
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
                Chapter 02 · Portfolio
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
              Selected<br />
              Works
              <sup style={{
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                fontSize: '0.28em',
                letterSpacing: 0,
                verticalAlign: 'top',
                color: 'var(--color-fg-muted)',
                marginLeft: '8px'
              }}>
                ({String(filteredProjects.length).padStart(2, '0')})
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
            Four years of notebooks, bugs and shipped ideas. From full-stack apps to servers I hardened by hand.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2.5 mb-10 animate-fade-up stagger-2" style={{
          marginTop: '44px',
          marginBottom: '40px'
        }}>
          {filterLabels.map((filter) => (
            <FilterChip
              key={filter.key}
              label={filter.label}
              isActive={activeFilter === filter.key}
              onClick={() => setActiveFilter(filter.key)}
            />
          ))}
        </div>

        {/* Projects Grid - 2 columns, gap 56px 48px */}
        <div className="animate-fade-up stagger-3" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '56px 48px'
        }}>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* More link */}
        <div className="animate-fade-up stagger-4 text-center" style={{
          marginTop: '80px',
          fontFamily: 'var(--font-hand)',
          fontWeight: 600,
          fontSize: '30px',
          color: 'var(--color-fg-muted)',
          textAlign: 'center'
        }}>
          …and more on{' '}
          <a
            href="https://github.com/youssefnjm"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--color-ink)',
              textDecoration: 'underline wavy',
              textUnderlineOffset: '6px'
            }}
          >
            GitHub
            {' '}↗
          </a>
        </div>

      </div>
    </section>
  )
}