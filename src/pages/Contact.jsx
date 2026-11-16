import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiMessageCircle, FiPhone, FiSend, FiShield } from 'react-icons/fi'
import PageHero from '../components/common/PageHero'
import Section from '../components/common/Section'
import { businessLinks } from '../data/siteData'

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
        subtitle="Contact Sehera Promotional Apparels about high quality T-shirts, caps and promotional wear."
        image="/gallery/ceylinco-life/2.webp"
      />

      <Section
        eyebrow="Let's Talk"
        title="Request Your Apparel Quotation"
        description="Send your order details through WhatsApp or contact us directly by phone or email."
      >
        <motion.div
          variants={revealContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 xl:grid-cols-[1.05fr,0.95fr]"
        >
          <motion.form
            variants={revealItem}
            className="card-base space-y-5"
            onSubmit={(event) => {
              event.preventDefault()
              const details = Object.fromEntries(new FormData(event.currentTarget))
              const message = [
                `Hello Sehera Promotional Apparels, my name is ${details.name}.`,
                details.organization && `Organization: ${details.organization}`,
                details.phone && `Phone: ${details.phone}`,
                details.email && `Email: ${details.email}`,
                `Product: ${details.product}`,
                details.quantity && `Quantity: ${details.quantity}`,
                details.project && `Details: ${details.project}`,
              ].filter(Boolean).join('\n')
              window.open(`${businessLinks.whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="text-sm font-medium text-charcoal-700">Full Name</label>
                <input id="contact-name" name="name" type="text" className="input-base" placeholder="Your full name" required />
              </div>
              <div>
                <label htmlFor="contact-organization" className="text-sm font-medium text-charcoal-700">Company / School</label>
                <input id="contact-organization" name="organization" type="text" className="input-base" placeholder="Organization name" />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-phone" className="text-sm font-medium text-charcoal-700">Phone / WhatsApp</label>
                <input id="contact-phone" name="phone" type="tel" className="input-base" placeholder="+94 7X XXX XXXX" />
              </div>
              <div>
                <label htmlFor="contact-email" className="text-sm font-medium text-charcoal-700">Email</label>
                <input id="contact-email" name="email" type="email" className="input-base" placeholder="you@company.com" />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-product" className="text-sm font-medium text-charcoal-700">Product Type</label>
                <select id="contact-product" name="product" className="input-base">
                  <option>T-shirts</option>
                  <option>Caps</option>
                  <option>Promotional apparel</option>
                </select>
              </div>
              <div>
                <label htmlFor="contact-quantity" className="text-sm font-medium text-charcoal-700">Estimated Quantity</label>
                <input id="contact-quantity" name="quantity" type="text" className="input-base" placeholder="e.g. 100 pieces" />
              </div>
            </div>

            <div>
              <label htmlFor="contact-project" className="text-sm font-medium text-charcoal-700">Project Details</label>
              <textarea id="contact-project" name="project" rows="5" className="input-base" placeholder="Share what you need." />
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <button type="submit" className="btn-primary">
                <FiSend className="mr-2" /> Send Inquiry
              </button>
              <a
                href={businessLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-6 py-3 text-sm font-semibold text-[#1f9d4b] transition duration-300 hover:-translate-y-0.5 hover:bg-[#25D366]/20"
              >
                <FiMessageCircle className="mr-2" /> Order via WhatsApp
              </a>
            </div>

            <p className="text-xs text-charcoal-500">
              Your details will be added to a WhatsApp message for you to review and send.
            </p>
          </motion.form>

          <motion.div variants={revealItem} className="space-y-5">
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#128C7E] via-[#25D366] to-[#45d684] p-7 text-white shadow-premium">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/90">Instant Contact</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Chat on WhatsApp for Quick Support</h3>
              <p className="mt-3 text-sm text-white/90">
                Contact us about T-shirts, caps or promotional wear.
              </p>
              <a
                href={businessLinks.whatsapp}
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
                  <a href={`mailto:${businessLinks.email}`} className="transition hover:text-royal-700">{businessLinks.email}</a>
                </p>
                <p className="flex items-start gap-2">
                  <FiMapPin className="mt-0.5 text-royal-600" />
                  <span>{businessLinks.address}</span>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      <Section
        eyebrow="Request a Quotation"
        title="Need a Quote for T-shirts, Caps or Promotional Wear?"
        description="Contact Sehera to discuss high quality T-shirts, caps or promotional wear."
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
                Tell us what kind of T-shirts, caps or promotional wear you are looking for.
              </p>
              <div className="mt-5 space-y-2 text-sm text-slate-100">
                <p className="flex items-center gap-2"><FiShield /> High quality apparel</p>
                <p className="flex items-center gap-2"><FiShield /> T-shirts and caps</p>
                <p className="flex items-center gap-2"><FiShield /> Promotional wear</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
                <a href={businessLinks.whatsapp} target="_blank" rel="noreferrer" className="btn-primary">
                Order via WhatsApp
              </a>
              <a href={`mailto:${businessLinks.email}`} className="btn-secondary">
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
