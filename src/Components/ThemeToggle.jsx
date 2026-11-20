import { useEffect, useRef } from 'react'

const ThemeToggle = ({ onToggle, theme }) => {
  const buttonRef = useRef(null)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 't' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        onToggle()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onToggle])

  return (
    <button
      ref={buttonRef}
      onClick={onToggle}
      className="fixed top-4 right-4 z-100 sketch-border p-3 btn-sketch tooltip-sketch transition-colors"
      data-tip="Toggle theme (Ctrl+T)"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      style={{ borderRadius: '12px 8px 16px 4px / 8px 16px 4px 12px', position: 'fixed', top: '1rem', right: '1rem', zIndex: 100 }}
    >
      <span className="hand-drawn-text text-lg flex items-center justify-center" style={{ width: '36px', height: '36px' }}>
        {theme === 'light' ? '☾' : '☀'}
      </span>
    </button>
  )
}

export default ThemeToggle