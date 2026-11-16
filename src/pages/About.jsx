import Section from '../components/common/Section'
import PageHero from '../components/common/PageHero'

function About() {
  return (
    <>
      <PageHero
        title="About Sehera Promotional Apparels"
        subtitle="Sehera Promotional Apparels is a local business in Maharagama, Sri Lanka, manufacturing high quality T-shirts, caps and promotional wear."
        image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80"
      />

      <Section
        eyebrow="Who We Are"
        title="High Quality T-shirts, Caps and Promotional Wear"
        description="The business page introduces Sehera as a manufacturer of high quality T-shirts, caps and promotional wear."
      >
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="card-base lg:col-span-3">
            <h3 className="text-xl font-semibold text-charcoal-900">Our Company</h3>
            <p className="mt-4 text-charcoal-600">
              Sehera Promotional Apparels is based in Maharagama. Contact the team to discuss an order for
              T-shirts, caps or promotional wear.
            </p>
          </div>

          <div className="card-base">
            <h3 className="text-xl font-semibold text-charcoal-900">Our Mission</h3>
            <p className="mt-4 text-charcoal-600">
              Manufacturing high quality T-shirts, caps and promotional wear.
            </p>
          </div>

          <div className="card-base lg:col-span-2">
            <h3 className="text-xl font-semibold text-charcoal-900">Our Vision</h3>
            <p className="mt-4 text-charcoal-600">
              Sehera Promotional Apparels serves customers from its Maharagama location in Sri Lanka.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}

export default About
