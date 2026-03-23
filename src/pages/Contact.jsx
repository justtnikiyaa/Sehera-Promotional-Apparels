import { motion } from 'framer-motion'
import { FiClock, FiMail, FiMapPin, FiMessageCircle, FiPhone, FiSend, FiShield } from 'react-icons/fi'
import PageHero from '../components/common/PageHero'
import Section from '../components/common/Section'

const revealContainer = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      staggerChildren: 0.1,
    },
  },
}

const revealItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

function Contact() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Contact us today to discuss your uniform or promotional apparel requirement. We are ready to provide high quality custom apparel solutions for your organization."
        image="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=80"
      />

      <Section
        eyebrow="Let's Talk"
        title="Request Your Apparel Quotation"
        description="Contact us today to discuss your uniform or promotional apparel requirement. We are ready to provide high quality custom apparel solutions for your organization."
      >
        <motion.div
          variants={revealContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 xl:grid-cols-[1.05fr,0.95fr]"
        >
          <motion.form variants={revealItem} className="card-base space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-charcoal-700">Full Name</label>
                <input type="text" className="input-base" placeholder="Your full name" />
              </div>
              <div>
                <label className="text-sm font-medium text-charcoal-700">Company / School</label>
                <input type="text" className="input-base" placeholder="Organization name" />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-charcoal-700">Phone / WhatsApp</label>
                <input type="text" className="input-base" placeholder="+94 7X XXX XXXX" />
              </div>
              <div>
                <label className="text-sm font-medium text-charcoal-700">Email</label>
                <input type="email" className="input-base" placeholder="you@company.com" />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-charcoal-700">Product Type</label>
                <select className="input-base">
                  <option>Custom T-shirts</option>
                  <option>Caps</option>
                  <option>Corporate uniforms</option>
                  <option>School uniforms</option>
                  <option>Promotional apparel</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-charcoal-700">Estimated Quantity</label>
                <input type="text" className="input-base" placeholder="e.g. 100 pieces" />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-charcoal-700">Project Details</label>
              <textarea rows="5" className="input-base" placeholder="Share your requirement, timeline and finishing details." />
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <button type="button" className="btn-primary">
                <FiSend className="mr-2" /> Send Inquiry
              </button>
              <a
                href="https://wa.me/94773214141"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-6 py-3 text-sm font-semibold text-[#1f9d4b] transition duration-300 hover:-translate-y-0.5 hover:bg-[#25D366]/20"
              >
                <FiMessageCircle className="mr-2" /> Order via WhatsApp
              </a>
            </div>

            <p className="text-xs text-charcoal-500">
              This is a static frontend form for now. For a faster response, contact us directly on WhatsApp.
            </p>
          </motion.form>

          <motion.div variants={revealItem} className="space-y-5">
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#128C7E] via-[#25D366] to-[#45d684] p-7 text-white shadow-premium">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/90">Instant Contact</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Chat on WhatsApp for Quick Support</h3>
              <p className="mt-3 text-sm text-white/90">
                Contact us today to discuss your uniform or promotional apparel requirement.
              </p>
              <a
                href="https://wa.me/94773214141"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#128C7E] shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
              >
                <FiMessageCircle className="mr-2" /> Contact via WhatsApp
              </a>
            </div>

            <div className="rounded-3xl border border-charcoal-100/80 bg-gradient-to-b from-white to-slate-50/80 p-7 shadow-soft">
              <h3 className="text-xl font-semibold text-charcoal-900">Sehera Promotional Apparels</h3>
              <div className="mt-5 space-y-3 text-sm text-charcoal-600">
                <p className="flex items-start gap-2">
                  <FiPhone className="mt-0.5 text-royal-600" />
                  <a href="tel:+94773214141" className="transition hover:text-royal-700">+94 773214141</a>
                </p>
                <p className="flex items-start gap-2">
                  <FiMail className="mt-0.5 text-royal-600" />
                  <a href="mailto:seherapromo@gmail.com" className="transition hover:text-royal-700">seherapromo@gmail.com</a>
                </p>
                <p className="flex items-start gap-2">
                  <FiMapPin className="mt-0.5 text-royal-600" />
                  <span>No 444, Piliyandala Road, Godigamuwa, Maharagama, Sri Lanka</span>
                </p>
                <p className="flex items-start gap-2">
                  <FiClock className="mt-0.5 text-royal-600" />
                  <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      <Section
        eyebrow="Request a Quotation"
        title="Need a Quotation for Custom Apparel?"
        description="Contact us today to discuss your uniform or promotional apparel requirement. We are ready to provide high quality custom apparel solutions for your organization."
        className="section-soft"
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-3xl bg-gradient-to-r from-charcoal-900 via-royal-900 to-magenta-700 px-7 py-11 text-white shadow-premium sm:px-12"
        >
          <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div>
              <h3 className="text-3xl font-semibold text-white">Request Your Quotation Today</h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
                We are ready to provide high quality custom apparel solutions for your company, school, sports
                team or organization.
              </p>
              <div className="mt-5 space-y-2 text-sm text-slate-100">
                <p className="flex items-center gap-2"><FiShield /> High quality custom garment manufacturing</p>
                <p className="flex items-center gap-2"><FiShield /> Reliable production and professional finishing</p>
                <p className="flex items-center gap-2"><FiShield /> Friendly customer service and support</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a href="https://wa.me/94773214141" target="_blank" rel="noreferrer" className="btn-primary">
                Order via WhatsApp
              </a>
              <a href="mailto:seherapromo@gmail.com" className="btn-secondary">
                Email Us
              </a>
            </div>
          </div>
        </motion.div>
      </Section>
    </>
  )
}

export default Contact
