import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi'
import logo from '../../assets/sehera-logo.png'
import { navLinks } from '../../data/siteData'
import './navbar.css'

function Navbar() {
  const { pathname } = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [atTop, setAtTop] = useState(() => window.scrollY < 45)
  const marker = useRef(null)
  const header = useRef(null)
  const toggle = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setAtTop(entry.isIntersecting))
    observer.observe(marker.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!isOpen) return
    function dismiss(event) {
      if (event.key === 'Escape') {
        setIsOpen(false)
        toggle.current?.focus()
      } else if (event.type === 'pointerdown' && !header.current?.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('keydown', dismiss)
    document.addEventListener('pointerdown', dismiss)
    return () => {
      document.removeEventListener('keydown', dismiss)
      document.removeEventListener('pointerdown', dismiss)
    }
  }, [isOpen])

  const overHero = pathname === '/' && atTop && !isOpen

  return (
    <>
      <span ref={marker} aria-hidden="true" className="sehera-nav-marker" />
      <header ref={header} className="sehera-header" data-overlay={overHero}>
        <nav aria-label="Main navigation" className="sehera-nav">
          <NavLink to="/" className="sehera-nav-brand" aria-label="Sehera home" onClick={() => setIsOpen(false)}>
            <img src={logo} width="32" height="32" alt="" />
            <span>Sehera</span>
          </NavLink>

          <ul id="site-navigation" className="sehera-nav-links" data-open={isOpen}>
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <NavLink to={path} end={path === '/'} onClick={() => setIsOpen(false)}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="sehera-nav-actions">
            <NavLink to="/contact" className="sehera-nav-quote" onClick={() => setIsOpen(false)}>
              Get a quote <FiArrowUpRight aria-hidden="true" />
            </NavLink>
            <button
              ref={toggle}
              type="button"
              className="sehera-nav-toggle"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="site-navigation"
              onClick={() => setIsOpen((open) => !open)}
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
