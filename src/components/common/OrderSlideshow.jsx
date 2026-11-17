import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiChevronLeft, FiChevronRight, FiPause, FiPlay } from 'react-icons/fi'
import { galleryItems } from '../../data/galleryData'

const firstIndex = Math.max(0, galleryItems.findIndex((item) => item.id === 'foreway-shipping'))
const slideDuration = 2000

export default function OrderSlideshow({ albumOpen, children }) {
  const [slide, setSlide] = useState({ previous: null, index: firstIndex })
  const [playing, setPlaying] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [inView, setInView] = useState(false)
  const frame = useRef(null)
  const order = galleryItems[slide.index]
  const count = galleryItems.length

  useEffect(() => {
    if (!frame.current) return
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting))
    observer.observe(frame.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!playing || !inView || albumOpen || count < 2) return
    const timer = window.setInterval(() => {
      if (!document.hidden) setSlide(({ index }) => ({ previous: index, index: (index + 1) % count }))
    }, slideDuration)
    return () => window.clearInterval(timer)
  }, [playing, inView, albumOpen, count, slide.index])

  function step(direction) {
    setSlide(({ index }) => ({ previous: index, index: (index + direction + count) % count }))
  }

  return (
    <header className="work-hero" ref={frame}>
      <div className="work-hero-photos" aria-hidden="true">
        {[slide.previous, slide.index].filter((i) => i !== null && galleryItems[i]).map((i) => (
          <picture key={i}>
            <source media="(max-width: 639px)" srcSet={galleryItems[i].cover} />
            <img src={galleryItems[i].photos[0]} alt="" />
          </picture>
        ))}
      </div>
      <div className="site-container work-hero-content">
        {children}
        <div className="work-hero-footer">
          {order && (
            <Link to={'?order=' + order.id} className="work-hero-album" onFocus={(event) => {
              if (event.currentTarget.matches(':focus-visible')) setPlaying(false)
            }}>
              {order.title} <FiArrowUpRight aria-hidden="true" />
            </Link>
          )}
          {count > 1 && (
            <div className="work-slide-controls" role="group" aria-label="Slideshow controls">
              <button type="button" aria-label="Previous order" onClick={() => step(-1)}><FiChevronLeft /></button>
              <button type="button" aria-label={playing ? 'Pause slideshow' : 'Play slideshow'} onClick={() => setPlaying((value) => !value)}>
                {playing ? <FiPause /> : <FiPlay />}
              </button>
              <button type="button" aria-label="Next order" onClick={() => step(1)}><FiChevronRight /></button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
