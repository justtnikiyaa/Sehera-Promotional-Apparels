import PageHero from '../components/common/PageHero'
import Section from '../components/common/Section'
import { productCategories } from '../data/siteData'

function Clients() {
  return (
    <>
      <PageHero
        title="For Your Apparel Needs"
        subtitle="Talk to Sehera Promotional Apparels about high quality T-shirts, caps and promotional wear."
        image="/gallery/ananda-balika-prefects-guild-202526/2.webp"
      />

      <Section
        eyebrow="Made to Order"
        title="Apparel for Promotions and Teams"
        description="Whether you are planning promotional wear or looking for T-shirts and caps, contact us to discuss what you need."
        className="section-soft"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {productCategories.map((product) => (
            <article key={product.name} className="card-base">
              <h3 className="text-xl font-semibold text-charcoal-900">{product.name}</h3>
              <p className="mt-4 text-charcoal-600">{product.description}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  )
}

export default Clients
