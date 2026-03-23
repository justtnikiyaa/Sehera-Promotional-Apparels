import { motion } from 'framer-motion'

function ImageCard({ image, title, subtitle }) {
  return (
    <motion.article
      whileHover={{ y: -10 }}
      transition={{ duration: 0.28 }}
      className="group overflow-hidden rounded-3xl border border-charcoal-100/80 bg-gradient-to-b from-white to-slate-50/70 shadow-soft transition duration-300 hover:border-royal-200/70 hover:shadow-premium"
    >
      <div className="h-56 overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
      </div>
      <div className="p-7">
        <h3 className="text-[1.28rem] font-semibold text-charcoal-900 transition duration-300 group-hover:text-royal-800">{title}</h3>
        {subtitle && <p className="mt-3 text-base leading-8 text-charcoal-600">{subtitle}</p>}
      </div>
    </motion.article>
  )
}

export default ImageCard
