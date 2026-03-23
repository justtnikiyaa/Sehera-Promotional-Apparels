import { motion } from 'framer-motion'

function PageHero({ title, subtitle, image }) {
  return (
    <section className="relative overflow-hidden bg-hero-brand pt-28 text-white sm:pt-32">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="h-full w-full object-cover opacity-28" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/96 via-royal-900/78 to-magenta-900/52" />
      </div>
      <div className="absolute -right-16 top-20 h-64 w-64 rounded-full bg-magenta-500/24 blur-3xl" />
      <div className="absolute -left-16 bottom-8 h-64 w-64 rounded-full bg-royal-400/24 blur-3xl" />

      <div className="site-container relative pb-24 lg:pb-28">
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-5xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: 'easeOut' }}
          className="mt-7 max-w-4xl text-base leading-8 text-slate-100 sm:text-lg"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  )
}

export default PageHero
