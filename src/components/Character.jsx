import { useState, useEffect, useRef, useMemo } from 'react'
import characterImg from '../assets/Humation_1.png'

const Character = () => {
  const [position, setPosition] = useState({ x: 20, y: 20 })
  const [isVisible, setIsVisible] = useState(true)
  const [currentSection, setCurrentSection] = useState('landing')
  const charRef = useRef(null)

  // Section positions for the character to visit - memoized to prevent recreation
  const sectionPositions = useMemo(() => ({
    landing: { x: 20, y: 20 },
    about: { x: 80, y: 30 },
    career: { x: 15, y: 60 },
    skills: { x: 85, y: 45 },
    projects: { x: 20, y: 75 },
    certifications: { x: 75, y: 85 },
    contact: { x: 50, y: 92 }
  }), [])

  // Smooth movement animation
  useEffect(() => {
    const target = sectionPositions[currentSection] || sectionPositions.landing

    const animate = () => {
      setPosition(prev => ({
        x: prev.x + (target.x - prev.x) * 0.05,
        y: prev.y + (target.y - prev.y) * 0.05
      }))
    }

    const interval = setInterval(animate, 16)
    return () => clearInterval(interval)
  }, [currentSection, sectionPositions])

  // Track scroll to determine current section
  useEffect(() => {
    const sections = ['landing', 'about', 'career', 'skills', 'projects', 'certifications', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  // Click to toggle visibility
  const handleClick = () => {
    setIsVisible(!isVisible)
  }

  // Mouse follow subtle effect
  useEffect(() => {
    const handleMove = (e) => {
      if (!charRef.current) return
      const rect = charRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const deltaX = (e.clientX - centerX) * 0.02
      const deltaY = (e.clientY - centerY) * 0.02

      charRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px) rotate(${deltaX * 0.1}deg)`
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  if (!isVisible) return null

  return (
    <div
      ref={charRef}
      className="fixed z-40 pointer-events-none character-float transition-all duration-1000 ease-out"
      style={{
        left: `calc(${position.x}% - 60px)`,
        top: `calc(${position.y}% - 60px)`,
      }}
      onClick={handleClick}
      aria-label="Click to hide/show character"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
    >
      <div className="relative group">
        {/* Speech bubble that appears on hover */}
        <div className="absolute -top-14 -right-4 w-56 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-auto sketch-border p-3 text-xs text-center animate-fade-up">
          <p className="hand-drawn-text">Hey there! 👋</p>
          <p className="mt-1">I follow your scroll~</p>
          <div className="w-2 h-2 bg-current mx-auto mt-2 rounded-full" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
        </div>

        {/* Character image with sketch border */}
        <div className="rough-image w-32 h-32 sm:w-36 sm:h-36 cursor-pointer animate-wiggle" style={{ borderRadius: '16px 8px 20px 8px / 8px 20px 8px 16px' }}>
          <img
            src={characterImg}
            alt="Youssef's hand-drawn character"
            className="w-full h-full object-cover"
            style={{ borderRadius: '14px 6px 18px 6px / 6px 18px 6px 14px' }}
          />
        </div>

        {/* Floating decoration elements - using CSS variables for theme-aware colors */}
        <div className="absolute -top-2 -right-2 w-3 h-3 border-2 rounded-full opacity-50 animate-float" style={{
          borderColor: 'var(--fg-subtle)',
          animationDelay: '0.5s'
        }} />
        <div className="absolute -bottom-2 -left-2 w-2 h-2 border-2 rounded-full opacity-50 animate-float" style={{
          borderColor: 'var(--fg-subtle)',
          animationDelay: '1s'
        }} />
        <div className="absolute top-1/2 -right-3 w-1.5 h-1.5 rounded-full opacity-40 animate-float" style={{
          backgroundColor: 'var(--fg-subtle)',
          animationDelay: '1.5s'
        }} />
      </div>
    </div>
  )
}

export default Character