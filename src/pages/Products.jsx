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

      <Section>
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
