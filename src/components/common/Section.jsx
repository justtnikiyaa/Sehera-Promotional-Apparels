function Section({ eyebrow, title, description, children, className = '' }) {
  return (
    <section className={`section-space relative bg-white/70 ${className}`}>
      <div className="site-container">
        {(eyebrow || title || description) && (
          <div className="mb-8 max-w-4xl sm:mb-16">
            {eyebrow && (
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-gradient-to-r from-magenta-500 to-royal-600" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-magenta-600">{eyebrow}</p>
              </div>
            )}
            {title && (
              <h2 className="mt-6 max-w-5xl text-charcoal-900">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-6 max-w-3xl text-base leading-8 text-charcoal-600 sm:text-lg">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

export default Section
