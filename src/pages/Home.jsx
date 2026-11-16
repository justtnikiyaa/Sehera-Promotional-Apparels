import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiCheckCircle, FiClock, FiShield } from 'react-icons/fi'
import { highlights, productCategories, services, businessLinks } from '../data/siteData'
import { galleryItems } from '../data/galleryData'
import Section from '../components/common/Section'
import InfoCard from '../components/common/InfoCard'
import ImageCard from '../components/common/ImageCard'
import BrandLogo from '../components/common/BrandLogo'

const revealContainer = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut',
      staggerChildren: 0.1,
    },
  },
}

const revealItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

function Home() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 text-white sm:pt-36">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=2000&q=80"
            alt="Apparel showcase"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/95 via-charcoal-900/86 to-royal-900/72" />
          <div className="absolute inset-0 bg-hero-brand opacity-80" />
        </div>

        <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-magenta-500/24 blur-3xl" />
        <div className="absolute -left-16 bottom-8 h-72 w-72 rounded-full bg-royal-400/28 blur-3xl" />

        <div className="site-container relative pb-24 lg:pb-28">
          <div className="grid items-end gap-10 lg:grid-cols-[1.12fr,0.88fr] lg:gap-12">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
              >
                <BrandLogo size="lg" className="mb-6" showFallbackText={false} />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-magenta-200"
              >
                Sehera Promotional Apparels
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.08 }}
                className="mt-5 max-w-4xl"
              >
                High Quality Custom Apparel & Uniform Solutions
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.16 }}
                className="mt-6 max-w-3xl text-base leading-relaxed text-slate-100 sm:text-lg"
              >
                Sehera Promotional Apparels manufactures high quality T-shirts, caps and promotional wear in
                Maharagama, Sri Lanka.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.24 }}
                className="mt-9 flex flex-wrap gap-4"
              >
                <Link to="/our-work" className="btn-primary">
                  View Our Work
                </Link>
                <a href="https://wa.me/94773214141" target="_blank" rel="noreferrer" className="btn-secondary">
                  Order via WhatsApp
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-9 grid gap-3 sm:grid-cols-3"
              >
                <div className="glass-panel rounded-2xl px-4 py-3 text-sm font-medium text-slate-100">
                  <FiShield className="mb-2 text-magenta-200" /> High quality production
                </div>
                <div className="glass-panel rounded-2xl px-4 py-3 text-sm font-medium text-slate-100">
                  <FiClock className="mb-2 text-magenta-200" /> Maharagama, Sri Lanka
                </div>
                <div className="glass-panel rounded-2xl px-4 py-3 text-sm font-medium text-slate-100">
                  <FiCheckCircle className="mb-2 text-magenta-200" /> T-shirts, caps and promotional wear
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="glass-panel overflow-hidden rounded-[2rem] border-white/25 shadow-glow"
            >
              <img
                src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=1400&q=80"
                alt="Custom branded apparel"
                className="h-72 w-full object-cover sm:h-80"
              />
              <div className="grid grid-cols-3 gap-3 border-t border-white/15 px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.12em] text-slate-100 sm:text-sm">
                <div>
                  <p className="text-xl font-semibold text-white">T-shirts</p>
                  <p className="mt-1 text-slate-300">Made to order</p>
                </div>
                <div>
                  <p className="text-xl font-semibold text-white">Caps</p>
                  <p className="mt-1 text-slate-300">Promotional wear</p>
                </div>
                <div>
                  <p className="text-xl font-semibold text-white">Maharagama</p>
                  <p className="mt-1 text-slate-300">Sri Lanka</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="About Company"
        title="Sehera Promotional Apparels"
        description="Sehera Promotional Apparels is a Maharagama based local business manufacturing high quality T-shirts, caps and promotional wear."
        className="section-soft"
      >
        <motion.div
          variants={revealContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 md:grid-cols-2"
        >
          <motion.div variants={revealItem} className="card-base">
            <h3 className="text-xl font-semibold text-charcoal-900">High Quality Apparel</h3>
            <p className="mt-4 text-charcoal-600">
              Sehera Promotional Apparels manufactures T-shirts, caps and promotional wear from Maharagama.
            </p>
            <p className="mt-4 text-charcoal-600">
              Contact us to discuss an apparel or promotional wear order.
            </p>
            <div className="mt-6">
              <Link to="/about" className="btn-outline-dark">
                Learn More About Us
              </Link>
            </div>
          </motion.div>
          <motion.div variants={revealItem} className="overflow-hidden rounded-3xl border border-charcoal-100 shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=1200&q=80"
              alt="Apparel production"
              className="h-full min-h-[300px] w-full object-cover"
            />
          </motion.div>
        </motion.div>
      </Section>

      <Section
        eyebrow="Products Overview"
        title="Custom Apparel Products"
        description="Our product range includes high quality T-shirts, caps and promotional wear. Contact us to discuss an order."
      >
        <motion.div
          variants={revealContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[2rem] border border-charcoal-100/80 bg-white/80 p-5 shadow-soft backdrop-blur-sm sm:p-7"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {productCategories.slice(0, 4).map((item) => (
              <motion.div key={item.name} variants={revealItem}>
                <ImageCard image={item.image} title={item.name} subtitle={item.description} />
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mt-8"
        >
          <Link to="/products" className="btn-outline-dark">
            View All Products
          </Link>
        </motion.div>
      </Section>

      <Section
        eyebrow="What We Make"
        title="T-shirts, Caps and Promotional Wear"
        description="We manufacture high quality apparel and promotional wear. Get in touch to discuss the product and quantity you need."
        className="section-soft"
      >
        <motion.div
          variants={revealContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[2rem] border border-charcoal-100/80 bg-white/80 p-5 shadow-soft backdrop-blur-sm sm:p-7"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {services.slice(0, 4).map((item) => (
              <motion.div key={item.title} variants={revealItem}>
                <InfoCard icon={item.icon} title={item.title} description={item.description} />
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mt-8"
        >
          <Link to="/services" className="btn-outline-dark">
            Explore Services
          </Link>
        </motion.div>
      </Section>

      <Section
        eyebrow="At a Glance"
        title="Sehera Promotional Apparels"
        description="A local Maharagama business manufacturing high quality T-shirts, caps and promotional wear."
      >
        <motion.div
          variants={revealContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {highlights.map((item) => (
            <motion.div key={item.title} variants={revealItem}>
              <InfoCard icon={item.icon} title={item.title} description={item.description} />
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section
        eyebrow="Follow Along"
        title="See Sehera on Facebook and Instagram"
        description="Visit our social pages for updates, photos and more from Sehera Promotional Apparels."
        className="section-soft"
      >
        <motion.div
          variants={revealContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[2rem] border border-charcoal-100/80 bg-white/80 p-5 shadow-soft backdrop-blur-sm sm:p-7"
        >
          <div className="flex flex-wrap gap-4">
            <a href={businessLinks.facebook} target="_blank" rel="noreferrer" className="btn-outline-dark">Facebook</a>
            <a href={businessLinks.instagram} target="_blank" rel="noreferrer" className="btn-outline-dark">Instagram</a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mt-8"
        >
          <Link to="/contact" className="btn-outline-dark">
            Contact Sehera
          </Link>
        </motion.div>
      </Section>

      <Section
        eyebrow="Product Range"
        title="T-shirts, Caps and Promotional Wear"
        description="Explore the main product types Sehera Promotional Apparels makes. For recent photos, visit our Facebook page."
      >
        <motion.div
          variants={revealContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[2rem] border border-charcoal-100/80 bg-white/80 p-5 shadow-soft backdrop-blur-sm sm:p-7"
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.slice(0, 6).map((item) => (
              <motion.div key={item.id} variants={revealItem}>
                <ImageCard image={item.image} title={item.title} subtitle={item.description} />
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mt-8"
        >
          <Link to="/products" className="btn-outline-dark">
            Explore Products
          </Link>
        </motion.div>
      </Section>

      <Section className="pb-24 pt-8 sm:pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="overflow-hidden rounded-3xl bg-gradient-to-r from-charcoal-900 via-royal-900 to-magenta-700 px-7 py-12 text-white shadow-premium sm:px-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-magenta-200">Call to Action</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Ready to Discuss an Apparel Order?
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
            Contact Sehera Promotional Apparels about T-shirts, caps or promotional wear.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="https://wa.me/94773214141" target="_blank" rel="noreferrer" className="btn-primary">
              Order via WhatsApp
            </a>
            <Link to="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </Section>
    </>
  )
}

export default Home
