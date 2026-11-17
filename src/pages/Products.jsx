import PageHero from '../components/common/PageHero'
import Section from '../components/common/Section'
import ImageCard from '../components/common/ImageCard'
import CardGrid from '../components/common/CardGrid'
import { productCategories } from '../data/siteData'

function Products() {
  return (
    <>
      <PageHero
        title="Our Product Range"
        subtitle="Explore our custom T-shirts, caps, promotional wear, bottoms and shorts."
        image="/gallery/vidyaloka-college-galle-oba/2.webp"
      />

      <Section>
        <CardGrid className="grid gap-6 md:grid-cols-2">
          {productCategories.map((item) => (
            <ImageCard
              key={item.name}
              image={item.image}
              imageAlt={item.imageAlt}
              imagePosition={item.imagePosition}
              title={item.name}
              subtitle={item.description}
            />
          ))}
        </CardGrid>
      </Section>
    </>
  )
}

export default Products
