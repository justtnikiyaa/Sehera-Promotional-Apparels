import { useEffect, useRef } from 'react'

export default function CardGrid({ children, className }) {
  const grid = useRef(null)
  const revealed = useRef(new WeakSet())

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return

    const container = grid.current
    const cards = Array.from(container.children)
    const observer = new IntersectionObserver((entries) => {
      const columns = getComputedStyle(container).gridTemplateColumns.split(' ').length
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      for (const { target, isIntersecting } of entries) {
        if (!isIntersecting) continue
        observer.unobserve(target)
        revealed.current.add(target)
        if (reducedMotion || target.matches(':focus-within')) continue

        const column = cards.indexOf(target) % columns
        target.animate(
          [{ opacity: 0, translate: '0 18px' }, { opacity: 1, translate: '0 0' }],
          { duration: 460, delay: column * 65, easing: 'cubic-bezier(.2,.75,.25,1)', fill: 'backwards' },
        )
      }
    }, { threshold: 0.08 })

    for (const card of cards) {
      if (!revealed.current.has(card)) observer.observe(card)
    }
    return () => observer.disconnect()
  }, [children])

  return <div ref={grid} className={className}>{children}</div>
}
