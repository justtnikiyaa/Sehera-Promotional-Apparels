import { useEffect, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi'
import OrderSlideshow from '../components/common/OrderSlideshow'
import CardGrid from '../components/common/CardGrid'
import { galleryItems } from '../data/galleryData'

const categories = ['All', ...new Set(galleryItems.map((order) => order.category))]

function OrderAlbum({ order, onClose }) {
  const dialog = useRef(null)
  const [index, setIndex] = useState(0)
  const count = order.photos.length

  useEffect(() => {
    const element = dialog.current
    const previousOverflow = document.body.style.overflow
    element.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      element.close()
      document.body.style.overflow = previousOverflow
    }
  }, [])

  function step(direction) {
    setIndex((current) => (current + direction + count) % count)
  }

  return (
    <dialog
      ref={dialog}
      aria-labelledby="album-title"
      className="work-dialog"
      onCancel={(event) => { event.preventDefault(); onClose() }}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') step(-1)
        if (event.key === 'ArrowRight') step(1)
      }}
    >
      <div className="flex items-start justify-between gap-4 p-4 sm:p-5">
        <div>
          <p className="work-label">{order.category}</p>
          <h2 id="album-title" className="mt-1 text-base font-semibold sm:text-lg sm:text-xl">{order.title}</h2>
        </div>
        <button type="button" onClick={onClose} className="work-control" aria-label="Close album"><FiX /></button>
      </div>
      <div className="work-photo"><img src={order.photos[index]} alt={order.title + ' — photo ' + (index + 1)} /></div>
      <div className="flex items-center justify-center gap-5 p-3">
        {count > 1 && <button type="button" className="work-control" aria-label="Previous photo" onClick={() => step(-1)}><FiChevronLeft /></button>}
        <span aria-live="polite" className="text-sm tabular-nums">Photo {index + 1} of {count}</span>
        {count > 1 && <button type="button" className="work-control" aria-label="Next photo" onClick={() => step(1)}><FiChevronRight /></button>}
      </div>
    </dialog>
  )
}

export default function OurWork() {
  const [category, setCategory] = useState('All')
  const [params, setParams] = useSearchParams()
  const order = galleryItems.find((item) => item.id === params.get('order'))
  const visible = category === 'All' ? galleryItems : galleryItems.filter((item) => item.category === category)

  return (
    <>
      <OrderSlideshow albumOpen={Boolean(order)}>
        <div>
          <p className="work-label text-magenta-200">Sehera Promotional Apparels</p>
          <h1 className="mt-4 text-white">Our work</h1>
          <p className="mt-5 max-w-md text-slate-100">Explore a selection of custom apparel we've made for companies, schools and teams.</p>
        </div>
      </OrderSlideshow>
      <section className="site-container py-12 sm:py-16" aria-labelledby="work-heading">
        <h2 id="work-heading" className="text-3xl font-semibold">Order gallery</h2>
        <div className="my-6 flex flex-wrap gap-2" role="group" aria-label="Filter orders">
          {categories.map((name) => (
            <button type="button" key={name} aria-pressed={name === category} onClick={() => setCategory(name)} className="work-filter">{name}</button>
          ))}
        </div>
        <CardGrid className="order-grid grid gap-x-3 gap-y-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {visible.map((item) => (
            <Link key={item.id} to={'?order=' + item.id} className="work-card">
              <div className="work-cover">
                <img src={item.cover} alt="" loading="lazy" />
                <span>{item.photos.length} {item.photos.length === 1 ? 'photo' : 'photos'}</span>
              </div>
              <p className="work-label mt-4 text-royal-700">{item.category}</p>
              <h3 className="mt-1 text-base font-semibold sm:text-lg text-charcoal-900">{item.title}</h3>
            </Link>
          ))}
        </CardGrid>
      </section>
      {order && <OrderAlbum key={order.id} order={order} onClose={() => setParams({}, { replace: true })} />}
    </>
  )
}
