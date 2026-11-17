import { FiArrowDown } from 'react-icons/fi'
import './homeHero.css'

export default function HomeHero() {
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
          <p className="campaign-orders"><strong>700+</strong> completed orders</p>
          <div className="campaign-action">
            <a href="#home-orders" className="campaign-link">Explore our work <FiArrowDown aria-hidden="true" /></a>
            <p>Custom T-shirts, caps and promotional wear<br className="campaign-break" /> from Maharagama, Sri Lanka.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
