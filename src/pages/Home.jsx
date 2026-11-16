import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { businessLinks } from '../data/siteData'
import { galleryItems } from '../data/galleryData'
import Section from '../components/common/Section'

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

      <Section className="pb-24 pt-8 sm:pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="overflow-hidden rounded-3xl bg-gradient-to-r from-charcoal-900 via-royal-900 to-magenta-700 px-7 py-12 text-white shadow-premium sm:px-12"
        >
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Ready to Discuss an Apparel Order?
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
            We make custom T-shirts, caps and promotional wear in Maharagama, Sri Lanka.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={businessLinks.whatsapp} target="_blank" rel="noreferrer" className="btn-primary">
              Order via WhatsApp
            </a>
            <Link to="/products" className="btn-secondary">
              Explore Products
            </Link>
          </div>
        </motion.div>
      </Section>
    </>
  )
}

export default Home
