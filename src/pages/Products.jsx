import PageHero from '../components/common/PageHero'
import Section from '../components/common/Section'
import ImageCard from '../components/common/ImageCard'
import { productCategories } from '../data/siteData'

function Products() {
  return (
    <>
      <PageHero
        title="Our Product Range"
        subtitle="We manufacture a range of apparel products including corporate uniforms, custom T-shirts, polo shirts, shorts, bottoms and sportswear, caps, promotional apparel, event T-shirts, staff uniforms and school uniforms."
        image="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1600&q=80"
      />

      <Section
        eyebrow="Products"
        title="Apparel Products We Manufacture"
        description="We manufacture a range of apparel products including corporate uniforms, custom T-shirts, polo shirts, shorts, bottoms and sportswear, caps, promotional apparel, event T-shirts, staff uniforms and school uniforms."
      >
        <div className="mb-8 rounded-3xl border border-charcoal-100/80 bg-white/80 p-6 shadow-soft">
          <h3 className="text-xl font-semibold text-charcoal-900">Product Categories</h3>
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
