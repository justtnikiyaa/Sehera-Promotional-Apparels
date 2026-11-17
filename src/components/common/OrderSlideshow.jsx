import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiChevronLeft, FiChevronRight, FiPause, FiPlay } from 'react-icons/fi'
import { galleryItems } from '../../data/galleryData'

const firstIndex = Math.max(0, galleryItems.findIndex((item) => item.id === 'foreway-shipping'))
const slideDuration = 5000

export default function OrderSlideshow({ albumOpen }) {
  const [index, setIndex] = useState(firstIndex)
  const [playing, setPlaying] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [inView, setInView] = useState(false)
  const frame = useRef(null)
  const order = galleryItems[index]
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
      if (!document.hidden) setIndex((current) => (current + 1) % count)
    }, slideDuration)
    return () => window.clearInterval(timer)
  }, [playing, inView, albumOpen, count, index])

  if (!order) return null

  function step(direction) {
    setIndex((current) => (current + direction + count) % count)
  }

  return (
    <section className="work-slideshow" ref={frame} aria-label="Featured orders" aria-roledescription="carousel">
      <Link to={'?order=' + order.id} className="work-feature" onFocus={(event) => {
        if (event.currentTarget.matches(':focus-visible')) setPlaying(false)
      }}>
        <img key={order.id} src={order.cover} alt="" />
        <span>{order.title} <FiArrowUpRight aria-hidden="true" /></span>
      </Link>
      {count > 1 && (
        <div className="work-slide-controls" role="group" aria-label="Slideshow controls">
          <button type="button" aria-label="Previous order" onClick={() => step(-1)}><FiChevronLeft /></button>
          <button type="button" aria-label={playing ? 'Pause slideshow' : 'Play slideshow'} onClick={() => setPlaying((value) => !value)}>
            {playing ? <FiPause /> : <FiPlay />}
          </button>
          <button type="button" aria-label="Next order" onClick={() => step(1)}><FiChevronRight /></button>
        </div>
      )}
    </section>
  )
}
