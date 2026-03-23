import { motion } from 'framer-motion'

function InfoCard({ icon: Icon, title, description }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.28 }}
      className="card-base group"
    >
      {Icon && (
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-royal-100 to-magenta-100 text-royal-700 transition duration-300 group-hover:scale-105 group-hover:from-royal-200 group-hover:to-magenta-200">
          <Icon size={22} />
        </div>
      )}
      <h3 className="mt-5 text-[1.35rem] font-semibold text-charcoal-900 transition duration-300 group-hover:text-royal-800">{title}</h3>
      <p className="mt-3 text-base leading-8 text-charcoal-600">{description}</p>
    </motion.article>
  )
}

export default InfoCard
