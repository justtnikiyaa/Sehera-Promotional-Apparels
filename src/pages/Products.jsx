import PageHero from '../components/common/PageHero'
import Section from '../components/common/Section'
import ImageCard from '../components/common/ImageCard'
import { productCategories } from '../data/siteData'

function Products() {
  return (
    <>
      <PageHero
        title="Our Product Range"
        subtitle="Sehera Promotional Apparels manufactures high quality T-shirts, caps and promotional wear."
        image="/gallery/vidyaloka-college-galle-oba/2.webp"
      />

      <Section
        eyebrow="Products"
        title="T-shirts, Caps and Promotional Wear"
        description="These are the product types featured on Sehera Promotional Apparels' business page. Contact us to discuss your order."
      >
        <div className="mb-8 rounded-3xl border border-charcoal-100/80 bg-white/80 p-6 shadow-soft">
          <h3 className="text-xl font-semibold text-charcoal-900">Our main products</h3>
          <ul className="content-list">
            {productCategories.map((item) => (
              <li key={item.name}>{item.name}</li>
            ))}
          </ul>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {productCategories.map((item) => (
            <ImageCard key={item.name} image={item.image} title={item.name} subtitle={item.description} />
          ))}
        </div>
      </Section>
    </>
  )
}

export default Products
