import './index.css'
import { useState, useEffect } from 'react'
import NavComponent from './Components/NavComponent'
import LandingSection from './page/LandingSection'
import AboutSection from './page/AboutSection'
import CareerSection from './page/CareerSection'
import SkillsSection from './page/SkillsSection'
import ProjectSection from './page/ProjectSection'
import CertificationsSection from './page/CertificationsSection'
import ContactSection from './page/ContactSection'
import ThemeToggle from './Components/ThemeToggle'

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved) {
      setTheme(saved)
      document.documentElement.setAttribute('data-theme', saved)
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  const navItems = [
    {
      label: "About",
      links: [
        { label: "About Me", ariaLabel: "About Me", href: "#about" },
        { label: "Journey", ariaLabel: "My Journey", href: "#career" },
        { label: "Certifications", ariaLabel: "Certifications", href: "#certifications" }
      ]
    },
    {
      label: "Work",
      links: [
        { label: "Skills", ariaLabel: "Skills", href: "#skills" },
        { label: "Projects", ariaLabel: "Projects", href: "#projects" }
      ]
    },
    {
      label: "Contact",
      links: [
        { label: "Get in Touch", ariaLabel: "Contact", href: "#contact" },
        { label: "Email", ariaLabel: "Email", href: "mailto:youssefnoujoum04@gmail.com" },
        { label: "LinkedIn", ariaLabel: "LinkedIn", href: "https://www.linkedin.com/in/youssef-noujoum-079bb0289/" },
        { label: "GitHub", ariaLabel: "GitHub", href: "https://github.com/youssefnjm" }
      ]
    }
  ]

  return (
    <>
      <ThemeToggle onToggle={toggleTheme} theme={theme} />
      <main className="relative min-h-screen overflow-x-hidden">
        <NavComponent
          logo={<span className="hand-drawn-text text-xl">YN</span>}
          logoAlt="Youssef Noujoum"
          items={navItems}
          className='fixed top-4 left-1/2 -translate-x-1/2 z-50'
          ease="power3.out"
        />
        <div>
          <LandingSection />
          <AboutSection />
          <CareerSection />
          <SkillsSection />
          <ProjectSection />
          <CertificationsSection />
          <ContactSection />
        </div>
        <footer className="py-12 px-6 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTopColor: 'var(--fg-subtle)', borderTopWidth: '1px', borderTopStyle: 'solid' }}>
          <p className="text-xs flex gap-1 items-center justify-center" style={{ color: 'var(--fg-subtle)' }}>
            Crafted with care ⚡ by <span className="font-bold">Youssef Noujoum</span>
          </p>
          <span className="hand-drawn-text" style={{ color: 'var(--fg-subtle)' }}>◉</span>
          <p className="text-xs" style={{ color: 'var(--fg-subtle)' }}>© 2026 All rights reserved</p>
        </footer>
      </main>
    </>
  )
}

export default App