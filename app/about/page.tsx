import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About BrainIgnights</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Igniting Ideas. Engineering Intelligence.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                BrainIgnights was founded with a clear vision: to bridge the gap between legacy enterprise systems and the intelligent, AI-powered future. We recognized that many organizations struggle with aging infrastructure that holds them back from innovation, while simultaneously needing to leverage cutting-edge technologies to remain competitive.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our unique approach combines deep technical expertise in legacy systems—particularly IBM FileNet and enterprise content management—with forward-thinking solutions in AI, cloud modernization, and data engineering. We don't just modernize systems; we transform them into intelligent platforms that drive business value.
              </p>
              <p className="text-gray-700 leading-relaxed mb-12">
                Every engagement is architect-led, ensuring that solutions are not just technically sound, but strategically aligned with your business objectives. We believe in practical innovation—implementable solutions that deliver real results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-6xl mb-4">👨‍💼</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ashok Baghele</h3>
              // <p className="text-xl text-primary-600 font-semibold mb-4">CTO & Managing Director</p>
              <p className="text-gray-700 leading-relaxed">
                With extensive experience as a Solution Architect, Ashok brings deep technical expertise in enterprise systems, cloud architecture, and AI transformation. He leads our technical strategy and ensures architect-led delivery in every engagement.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-6xl mb-4">👩‍💼</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ankita Baghele</h3>
              //<p className="text-xl text-primary-600 font-semibold mb-4">CEO</p>
              <p className="text-gray-700 leading-relaxed">
                Ankita drives the strategic vision and business growth of BrainIgnights. With a focus on client relationships and market positioning, she ensures that our solutions deliver exceptional value and transformative results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">We deliver solutions of the highest quality, built with precision and care.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">We combine cutting-edge technology with practical, implementable solutions.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Partnership</h3>
              <p className="text-gray-600">We work closely with clients as trusted partners in their transformation journey.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Knowledge</h3>
              <p className="text-gray-600">We share expertise and empower teams through training and knowledge transfer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Why Choose BrainIgnights?</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI-First Legacy Modernization</h3>
              <p className="text-gray-700">We don't just move systems to the cloud—we infuse them with AI capabilities that drive intelligent automation and decision-making.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2">IBM FileNet Specialization</h3>
              <p className="text-gray-700">Deep expertise in a niche but critical enterprise technology, giving you access to specialized knowledge that's hard to find.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Architect-Led Delivery</h3>
              <p className="text-gray-700">Every project is guided by experienced solution architects who ensure strategic alignment and technical excellence.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Integrated Approach</h3>
              <p className="text-gray-700">We combine modernization, AI, and training in cohesive transformations that deliver comprehensive value.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how BrainIgnights can help transform your enterprise.
          </p>
          <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}

