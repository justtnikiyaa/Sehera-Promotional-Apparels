import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import { navLinks } from '../../data/siteData'
import BrandLogo from '../common/BrandLogo'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const header = useRef(null)
  const toggle = useRef(null)

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

  return (
    <header ref={header} className="fixed inset-x-0 top-0 z-50 border-b border-charcoal-100 bg-white shadow-sm">
      <nav className="site-container flex h-16 items-center md:h-20 justify-between gap-4">
        <NavLink to="/" onClick={() => setIsOpen(false)} className="transition duration-300 hover:opacity-95">
          <BrandLogo size="sm" titleColorClass="text-black" subtitleColorClass="text-black" />
        </NavLink>

        <ul className="hidden items-center gap-2 md:flex lg:gap-3">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink  
                to={link.path}
                className={({ isActive }) =>
                  `rounded-full px-3 py-1.5 text-sm font-medium transition duration-300 ${
                    isActive
                      ? 'bg-royal-50 text-royal-700'
                      : 'text-black hover:-translate-y-0.5 hover:bg-white/15 hover:text-black'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/94773214141"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-gradient-to-r from-royal-600 to-magenta-500 px-4 py-2 text-sm font-semibold text-white shadow-premium ring-1 ring-white/20 transition duration-300 hover:-translate-y-0.5 hover:from-royal-500 hover:to-magenta-400 hover:shadow-glow lg:inline-flex"
          >
            WhatsApp Order
          </a>

          <button
            ref={toggle}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/90 p-2 text-charcoal-900 transition hover:bg-white md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      <div id="mobile-navigation" hidden={!isOpen} className="mobile-navigation bg-white px-5 pb-5 pt-2 md:hidden">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex min-h-11 items-center rounded-lg px-3 py-2 text-sm font-medium transition duration-300 ${
                      isActive ? 'bg-royal-600/40 text-black' : 'text-black hover:bg-white/15 hover:text-black'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/94773214141"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-royal-600 to-magenta-500 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:from-royal-500 hover:to-magenta-400"
          >
            WhatsApp Order
          </a>
      </div>
    </header>
  )
}

export default Navbar
