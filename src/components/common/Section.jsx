import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

function Section({ eyebrow, title, description, children, className = '' }) {
  return (
    <section className={`section-space relative bg-white/70 ${className}`}>
      <motion.div
        className="site-container"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {(eyebrow || title || description) && (
          <div className="mb-16 max-w-4xl">
            {eyebrow && (
              <motion.div variants={fadeUp} className="flex items-center gap-3">
                <span className="h-px w-10 bg-gradient-to-r from-magenta-500 to-royal-600" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-magenta-600">{eyebrow}</p>
              </motion.div>
            )}
            {title && (
              <motion.h2 variants={fadeUp} className="mt-6 max-w-5xl text-charcoal-900">
                {title}
              </motion.h2>
            )}
            {description && (
              <motion.p variants={fadeUp} className="mt-6 max-w-3xl text-base leading-8 text-charcoal-600 sm:text-lg">
                {description}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </motion.div>
    </section>
  )
}

export default Section
