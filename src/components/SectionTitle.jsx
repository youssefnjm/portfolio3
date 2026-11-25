import React from 'react'

// Reusable Section Title Component
// Supports two journal styles: "pinned" (with 📌 pins) and "boxed" (hand-drawn rectangular border)

export function PinnedLabel({ children, delay = 0, className = "", stagger = "stagger-1" }) {
  return (
    <div className={`text-center mb-8 animate-fade-up ${stagger} ${className}`} style={{ animationDelay: `${delay}s` }}>
      <span className="font-hand text-lg sm:text-xl text-ink/60 inline-flex items-center gap-2" style={{
        letterSpacing: '0.1em',
        transform: 'rotate(-1deg)'
      }}>
        <span className="text-2xl rotate-[-10deg]">✦</span>
        {children}
        <span className="text-2xl rotate-[10deg]">✦</span>
      </span>
    </div>
  )
}

export function BoxedTitle({
  children,
  delay = 0,
  className = "",
  stagger = "stagger-2",
  subtitle,
  subtitleDelay = 0
}) {
  return (
    <div className={`text-center mb-10 animate-fade-up ${stagger} ${className} relative`} style={{ animationDelay: `${delay}s` }}>
      <div className="inline-flex items-center justify-center px-8 py-4 relative" style={{
        border: '2px solid var(--color-ink)',
        borderRadius: '12px 8px 16px 4px / 8px 16px 4px 12px',
        background: 'var(--color-paper)',
        boxShadow: 'var(--shadow-paper)',
        transform: 'rotate(-0.5deg)'
      }}>
        <span className="font-display text-2xl sm:text-3xl font-bold text-ink" style={{ letterSpacing: '-0.01em' }}>
          {children}
        </span>

        {/* Decorative corner marks on the border */}
        <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-ink/30" style={{ borderRadius: '4px 0 0 0' }} />
        <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-ink/30" style={{ borderRadius: '0 4px 0 0' }} />
        <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-ink/30" style={{ borderRadius: '0 0 0 4px' }} />
        <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-ink/30" style={{ borderRadius: '0 0 4px 0' }} />
      </div>

      {/* Doodle above the box */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-hand opacity-40 animate-wiggle">✦</div>

      {/* Optional subtitle */}
      {subtitle && (
        <div className="mt-4 animate-fade-up" style={{ animationDelay: `${subtitleDelay}s` }}>
          <span className="font-hand text-sm uppercase tracking-widest text-muted">{subtitle}</span>
        </div>
      )}
    </div>
  )
}

// Combined: Pinned label + Boxed title (used in SkillsSection, AboutSection)
export function DualTitle({
  pinnedLabel,
  boxedTitle,
  subtitle,
  pinnedDelay = 0,
  boxedDelay = 0,
  subtitleDelay = 0,
  className = ""
}) {
  return (
    <div className={`text-center ${className}`}>
      <PinnedLabel children={pinnedLabel} delay={pinnedDelay} stagger="stagger-1" />
      <BoxedTitle
        children={boxedTitle}
        delay={boxedDelay}
        stagger="stagger-2"
        subtitle={subtitle}
        subtitleDelay={subtitleDelay}
      />
    </div>
  )
}

// Standard section header with section-label, heading, and description
export function StandardHeader({
  label,
  title,
  titleLines = [],
  description,
  delay = 0,
  className = "",
  centered = false
}) {
  const alignClasses = centered ? 'text-center mx-auto' : ''

  return (
    <div className={`mb-12 animate-fade-up stagger-1 ${className} relative ${centered ? 'text-center' : ''}`} style={{ animationDelay: `${delay}s` }}>
      <div className={`section-label mb-6 ${centered ? 'justify-center' : ''}`}>
        <span>{label}</span>
      </div>

      <h2 className={`heading-lg ${alignClasses}`}>
        {title}
        {titleLines.map((line, i) => (
          <React.Fragment key={i}>
            <br />
            <span className="font-hand text-2xl sm:text-3xl font-normal">{line}</span>
          </React.Fragment>
        ))}
      </h2>

      {description && (
        <p className={`text-base max-w-xl leading-relaxed mt-4 ${centered ? 'mx-auto text-center' : ''} text-muted`}>
          {description}
        </p>
      )}
    </div>
  )
}