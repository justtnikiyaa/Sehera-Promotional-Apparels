import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import { navLinks } from '../../data/siteData'
import BrandLogo from '../common/BrandLogo'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-2xl transition duration-300 ${
        isScrolled
          ? 'bg-white/40'
          : 'bg-white/35'
      }`}
    >
      <nav className="site-container flex h-20 items-center justify-between gap-4">
        <NavLink to="/" className="transition duration-300 hover:opacity-95">
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
                      ? 'bg-white/20 text-black shadow-sm'
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
            className="inline-flex items-center justify-center rounded-lg p-2 text-white transition hover:bg-white/12 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="bg-white/85 px-5 pb-5 pt-3 md:hidden">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2 text-sm font-medium transition duration-300 ${
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
      )}
    </header>
  )
}

export default Navbar
