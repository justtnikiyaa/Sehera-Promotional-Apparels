import Section from '../components/common/Section'
import PageHero from '../components/common/PageHero'

function About() {
  return (
    <>
      <PageHero
        title="About Sehera Promotional Apparels"
        subtitle="Sehera Promotional Apparels is a professional apparel and promotional wear manufacturer based in Sri Lanka."
        image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80"
      />

      <Section
        eyebrow="Who We Are"
        title="Professional Apparel and Promotional Wear Manufacturer"
        description="We specialize in manufacturing custom T-shirts, corporate uniforms, caps and promotional apparel for companies, schools, sports teams and organizations."
      >
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="card-base lg:col-span-3">
            <h3 className="text-xl font-semibold text-charcoal-900">Our Company</h3>
            <p className="mt-4 text-charcoal-600">
              Our focus is on delivering high quality garments, reliable production and professional finishing.
              We work closely with our clients to understand their requirements and provide custom apparel
              solutions that match their brand identity and needs.
            </p>
          </div>

          <div className="card-base">
            <h3 className="text-xl font-semibold text-charcoal-900">Our Mission</h3>
            <p className="mt-4 text-charcoal-600">
              Our mission is to provide high quality apparel manufacturing services with reliability,
              professionalism and customer satisfaction.
            </p>
          </div>

          <div className="card-base lg:col-span-2">
            <h3 className="text-xl font-semibold text-charcoal-900">Our Vision</h3>
            <p className="mt-4 text-charcoal-600">
              Our vision is to become a trusted apparel and promotional wear supplier for companies and
              organizations across Sri Lanka.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}

export default About
