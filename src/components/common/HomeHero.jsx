import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowDown, FiArrowUpRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { galleryItems } from '../../data/galleryData'
import './homeHero.css'

const photoCount = galleryItems.reduce((sum, order) => sum + order.photos.length, 0)

export default function HomeHero({ featuredOrders }) {
  const [selected, setSelected] = useState(0)
  const order = featuredOrders[selected]

  function changeOrder(direction) {
    setSelected((current) => (current + direction + featuredOrders.length) % featuredOrders.length)
  }

  return (
    <section className="campaign-frame" aria-labelledby="campaign-name">
      <div className="campaign">
        <div className="campaign-stage">
          <h1 id="campaign-name">SEHERA</h1>
          <picture>
            <source media="(max-width: 639px)" srcSet="/campaign/sehera-shirts-mobile.webp" />
            <img className="campaign-shirts" src="/campaign/sehera-shirts.webp" width="1400" height="933"
              alt="Ivory Sehera polo with terracotta and olive T-shirts" fetchPriority="high" />
          </picture>
        </div>

        <div className="campaign-bottom">
          <div className="campaign-intro">
            <dl className="campaign-stats">
              <div><dt>Completed orders</dt><dd>{galleryItems.length}</dd></div>
              <div><dt>Project photos</dt><dd>{photoCount}</dd></div>
            </dl>
            <div className="campaign-action">
              <a href="#home-orders" className="campaign-link">Explore our work <FiArrowDown aria-hidden="true" /></a>
              <p>Custom T-shirts, caps and promotional wear<br className="campaign-break" /> from Maharagama, Sri Lanka.</p>
            </div>
          </div>

          <aside className="campaign-album" aria-label="Featured order">
            <Link to={'/our-work?order=' + order.id} className="campaign-preview">
              <img src={order.cover} alt="" width="190" height="92" />
              <span className="campaign-preview-link"><FiArrowUpRight aria-hidden="true" /></span>
              <span className="campaign-preview-title">{order.title}</span>
            </Link>
            <div className="campaign-pager">
              <span aria-live="polite">{String(selected + 1).padStart(2, '0')} / {String(featuredOrders.length).padStart(2, '0')}</span>
              <button type="button" onClick={() => changeOrder(-1)} aria-label="Previous featured order"><FiChevronLeft /></button>
              <button type="button" onClick={() => changeOrder(1)} aria-label="Next featured order"><FiChevronRight /></button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
