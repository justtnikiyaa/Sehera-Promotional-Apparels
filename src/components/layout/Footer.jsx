import { Link } from 'react-router-dom'
import { FiPhone, FiMail, FiMapPin, FiFacebook } from 'react-icons/fi'
import { navLinks } from '../../data/siteData'
import BrandLogo from '../common/BrandLogo'

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-charcoal-900 via-charcoal-900 to-royal-900 text-slate-300">
      <div className="site-container grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <BrandLogo size="md" />
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Sehera Promotional Apparels delivers premium uniforms and branded apparel with quality, consistency,
            and modern design.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-100">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="transition duration-300 hover:pl-1.5 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-100">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-2">
              <FiPhone className="mt-0.5" />
              <a href="https://wa.me/94773214141" target="_blank" rel="noreferrer" className="transition hover:text-white">
                +94 773214141 (Phone / WhatsApp)
              </a>
            </li>
            <li className="flex items-start gap-2">
              <FiMail className="mt-0.5" />
              <a href="mailto:seherapromo@gmail.com" className="transition hover:text-white">
                seherapromo@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <FiMapPin className="mt-0.5" />
              <span>No 444, Piliyandala Road, Godigamuwa, Maharagama, Sri Lanka</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-100">Follow Us</h4>
          <a
            href="https://www.facebook.com/seherapromo"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:bg-white/12 hover:text-white"
          >
            <FiFacebook /> Facebook
          </a>
        </div>
      </div>
      <div className="border-t border-charcoal-700 px-4 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Sehera Promotional Apparels. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
