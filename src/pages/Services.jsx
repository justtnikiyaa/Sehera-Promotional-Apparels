import PageHero from '../components/common/PageHero'
import Section from '../components/common/Section'
import InfoCard from '../components/common/InfoCard'
import { services } from '../data/siteData'

function Services() {
  return (
    <>
      <PageHero
        title="Services"
        subtitle="We provide a range of apparel manufacturing and promotional wear services including custom garment production, uniform manufacturing and bulk apparel orders."
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80"
      />

      <Section
        eyebrow="What We Offer"
        title="Complete Apparel Manufacturing Services"
        description="We provide a range of apparel manufacturing and promotional wear services including custom garment production, uniform manufacturing and bulk apparel orders."
      >
        <div className="mb-8 rounded-3xl border border-charcoal-100/80 bg-white/80 p-6 shadow-soft">
          <h3 className="text-xl font-semibold text-charcoal-900">Our services include:</h3>
          <ul className="content-list">
            {services.map((item) => (
              <li key={item.title}>{item.title}</li>
            ))}
          </ul>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <InfoCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
          ))}
        </div>
      </Section>
    </>
  )
}

export default Services
