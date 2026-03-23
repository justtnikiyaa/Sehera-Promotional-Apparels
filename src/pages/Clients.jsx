import { motion } from 'framer-motion'
import { FiAward, FiCheckCircle, FiShield } from 'react-icons/fi'
import PageHero from '../components/common/PageHero'
import Section from '../components/common/Section'
import { clientLogos } from '../data/siteData'

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
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

function getInitials(name) {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function Clients() {
  return (
    <>
      <PageHero
        title="Our Clients"
        subtitle="We have worked with a variety of companies, schools and organizations across Sri Lanka providing uniforms, promotional apparel and custom garment solutions."
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80"
      />

      <Section
        eyebrow="Partnership Focus"
        title="Clients Across Sri Lanka"
        description="We have worked with a variety of companies, schools and organizations across Sri Lanka providing uniforms, promotional apparel and custom garment solutions."
        className="section-soft"
      >
        <motion.div
          variants={revealContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-7 lg:grid-cols-[1.15fr,0.85fr]"
        >
          <motion.div variants={revealItem} className="card-base">
            <h3 className="text-xl font-semibold text-charcoal-900">Trusted by Companies, Schools and Organizations</h3>
            <p className="mt-4 text-charcoal-600">
              We provide uniforms, promotional apparel and custom garment solutions to clients who value
              reliability, quality and professional finishing.
            </p>
            <div className="mt-6 space-y-3">
              <p className="flex items-start gap-2 text-sm font-medium text-charcoal-700">
                <FiCheckCircle className="mt-0.5 text-royal-600" />
                High quality uniform and promotional apparel manufacturing
              </p>
              <p className="flex items-start gap-2 text-sm font-medium text-charcoal-700">
                <FiShield className="mt-0.5 text-royal-600" />
                Reliable production and delivery support
              </p>
              <p className="flex items-start gap-2 text-sm font-medium text-charcoal-700">
                <FiAward className="mt-0.5 text-royal-600" />
                Professional custom apparel solutions for organizations
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={revealItem}
            className="overflow-hidden rounded-3xl border border-charcoal-100/80 bg-gradient-to-br from-white to-slate-50/80 p-6 shadow-soft"
          >
            <h3 className="text-xl font-semibold text-charcoal-900">Client Sectors</h3>
            <div className="mt-6 grid gap-3">
              <div className="rounded-2xl border border-charcoal-100 bg-white px-4 py-3">
                <p className="text-sm font-semibold text-charcoal-800">Corporate Companies</p>
              </div>
              <div className="rounded-2xl border border-charcoal-100 bg-white px-4 py-3">
                <p className="text-sm font-semibold text-charcoal-800">Schools and Educational Institutions</p>
              </div>
              <div className="rounded-2xl border border-charcoal-100 bg-white px-4 py-3">
                <p className="text-sm font-semibold text-charcoal-800">Sports Teams and Clubs</p>
              </div>
              <div className="rounded-2xl border border-charcoal-100 bg-white px-4 py-3">
                <p className="text-sm font-semibold text-charcoal-800">Events and Organizations</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      <Section
        eyebrow="Trusted By"
        title="Organizations We Support"
        description="A sample of client partners across business, education, and institutional sectors."
      >
        <motion.div
          variants={revealContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[2rem] border border-charcoal-100/80 bg-white/80 p-5 shadow-soft backdrop-blur-sm sm:p-7"
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {clientLogos.map((name) => (
              <motion.article
                key={name}
                variants={revealItem}
                whileHover={{ y: -6 }}
                className="group rounded-3xl border border-charcoal-100 bg-gradient-to-b from-white to-slate-50 p-5 text-center shadow-sm transition duration-300 hover:border-royal-200 hover:shadow-premium"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-royal-100 to-magenta-100 text-base font-bold text-royal-700 transition duration-300 group-hover:scale-105">
                  {getInitials(name)}
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-magenta-600">Client Partner</p>
                <h3 className="mt-2 text-sm font-semibold leading-relaxed text-charcoal-800">{name}</h3>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </Section>
    </>
  )
}

export default Clients
