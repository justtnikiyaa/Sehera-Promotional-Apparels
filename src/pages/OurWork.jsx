import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PageHero from '../components/common/PageHero'
import Section from '../components/common/Section'
import { galleryItems } from '../data/galleryData'

function OurWork() {
  const [activeCategory, setActiveCategory] = useState('All')

  // Categories come directly from galleryData so new categories appear automatically.
  const categories = useMemo(
    () => ['All', ...new Set(galleryItems.map((item) => item.category))],
    []
  )

  const filteredItems = useMemo(
    () =>
      activeCategory === 'All'
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeCategory),
    [activeCategory]
  )

  return (
    <>
      <PageHero
        title="Our Work"
        subtitle="Selected production highlights showcasing design detail, quality control, and brand alignment across sectors."
        image="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1600&q=80"
      />

      <Section
        eyebrow="Case Highlights"
        title="Projects We are Proud Of"
        description="From launch merchandise to uniform overhauls, we turn concepts into cohesive apparel systems."
      >
        <div className="rounded-[2rem] border border-charcoal-100/80 bg-white/80 p-5 shadow-soft backdrop-blur-sm sm:p-7">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition duration-300 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-royal-700 to-magenta-500 text-white shadow-premium'
                      : 'border border-charcoal-200 bg-white text-charcoal-700 hover:-translate-y-0.5 hover:border-royal-200 hover:text-royal-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <p className="text-sm font-medium text-charcoal-500">
              Showing {filteredItems.length} of {galleryItems.length} projects
            </p>
          </div>

          <motion.div layout className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.article
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="group overflow-hidden rounded-3xl border border-charcoal-100/80 bg-gradient-to-b from-white to-slate-50/80 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:border-royal-200/70 hover:shadow-premium"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/45 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                    <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="inline-flex rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.13em] text-white">
                        {item.category}
                      </p>
                      <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-sm font-medium text-royal-700">Client: {item.client}</p>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{item.description}</p>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </Section>
    </>
  )
}

export default OurWork
