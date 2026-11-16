import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { highlights, productCategories, services, businessLinks } from '../data/siteData'
import { galleryItems } from '../data/galleryData'
import Section from '../components/common/Section'
import InfoCard from '../components/common/InfoCard'
import ImageCard from '../components/common/ImageCard'

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

const featuredOrderIds = [
  'foreway-shipping', 'ananda-balika-prefects-guild-202526', 'luv-esence',
  'agarapatana-plantations-plc', 'world-photography-day-celebration-2024-galle', 'richmond-college-galle-group-of-79',
]
const featuredOrders = featuredOrderIds.map((id) => galleryItems.find((order) => order.id === id))

function Home() {
  return (
    <>
      <section aria-labelledby="home-orders" className="bg-white pb-12 pt-28 sm:pb-16 sm:pt-32">
        <div className="site-container">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="work-label text-royal-700">Sehera Promotional Apparels</p>
              <h1 id="home-orders" className="mt-2 text-charcoal-900">Our completed orders</h1>
            </div>
            <Link to="/our-work" className="btn-outline-dark">
              View all {galleryItems.length} orders <FiArrowUpRight aria-hidden="true" className="ml-2" />
            </Link>
          </div>
          <div className="grid gap-x-5 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
            {featuredOrders.map((order, index) => (
              <Link key={order.id} to={'/our-work?order=' + order.id} className="work-card">
                <div className="work-cover">
                  <img src={order.cover} alt="" loading={index < 3 ? 'eager' : 'lazy'} />
                  <span>{order.photos.length} {order.photos.length === 1 ? 'photo' : 'photos'}</span>
                </div>
                <h2 className="mt-3 text-xl font-semibold text-charcoal-900">{order.title}</h2>
              </Link>
            ))}
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
              src="/gallery/world-photography-day-celebration-2024-galle/2.webp"
              alt="World Photography Day event shirt with lettering across the back"
              loading="lazy"
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
