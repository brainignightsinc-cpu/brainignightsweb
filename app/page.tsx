import Link from 'next/link'

export default function Home() {
  const services = [
    {
      title: 'Agentic AI & Legacy Modernization',
      description: 'AI-powered legacy system analysis and modernization with autonomous agent deployment for business processes.',
      href: '/services/agentic-ai',
      icon: '🤖',
    },
    {
      title: 'Cloud Modernization & Migration',
      description: 'Lift-and-shift migrations with optimization, cloud-native development, and multi-cloud strategy implementation.',
      href: '/services/cloud-modernization',
      icon: '☁️',
    },
    {
      title: 'Data Engineering Excellence',
      description: 'Modern data platform architecture, real-time processing pipelines, and AI/ML data infrastructure.',
      href: '/services/data-engineering',
      icon: '📊',
    },
    {
      title: 'ECM/BPM Transformation',
      description: 'IBM FileNet to cloud-native migration, IBM BPM/BAW implementation, and content services modernization.',
      href: '/services/ecm-bpm',
      icon: '📁',
    },
    {
      title: 'Website Development',
      description: 'Modern, responsive web applications built with Next.js, React, and cutting-edge technologies for exceptional user experiences.',
      href: '/services/website-development',
      icon: '🌐',
    },
    {
      title: 'Custom Enterprise Development',
      description: 'Microservices architecture, enterprise-grade web applications, and integration platforms.',
      href: '/services/custom-development',
      icon: '💻',
    },
    {
      title: 'Training & Learning Solutions',
      description: 'Corporate training in AI, cloud architecture, data engineering, and ECM/BPM best practices.',
      href: '/services/training',
      icon: '🎓',
    },
  ]

  const products = [
    {
      title: 'Ignights BI Switch',
      description: 'AI-powered enterprise BI migration platform - Transform Tableau & Power BI to Superset in weeks, not months.',
      href: '/products/ignights-bi-switch',
      icon: '🔄',
    },
    {
      title: 'Ignights-Cortex',
      description: 'Complete enterprise knowledge intelligence platform with AI-powered RAG backend and modern Next.js frontend for intelligent document processing.',
      href: '/products/ignights-cortex',
      liveUrl: 'https://ai.brainignights.com/',
      icon: '🧠',
    },
    {
      title: 'Ignights ECM',
      description: 'Cloud-native enterprise content management platform with AI-powered document intelligence and secure storage.',
      href: '/products/ignights-ecm',
      icon: '📁',
    },
  ]

  const differentiators = [
    {
      title: 'AI-First Legacy Modernization',
      description: 'Not just moving to cloud, but infusing AI into modernized systems',
    },
    {
      title: 'IBM FileNet Specialization',
      description: 'Deep expertise in a niche but critical enterprise technology',
    },
    {
      title: 'Architect-Led Delivery',
      description: 'Solution architecture expertise in every engagement',
    },
    {
      title: 'Integrated Approach',
      description: 'Combining modernization, AI, and training in cohesive transformations',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Igniting Intelligent
              <span className="block bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Transformation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Premier digital transformation partner for enterprises seeking to bridge legacy systems with intelligent, AI-powered future through innovative solutions in agentic AI, cloud modernization, and enterprise content intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg">
                Get Started
              </Link>
              <div className="flex flex-col sm:flex-row gap-2">
                <Link href="/products" className="btn-secondary text-lg">
                  Our Products
                </Link>
                <Link href="/services" className="btn-secondary text-lg">
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">🌟 Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                "To become the premier digital transformation partner for enterprises seeking to bridge legacy systems with intelligent, AI-powered future through innovative solutions in agentic AI, cloud modernization, and enterprise content intelligence."
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent-50 to-accent-100 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">🎯 Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                "To empower enterprises with cutting-edge AI and cloud technologies that transform legacy systems into intelligent, scalable, and future-ready digital assets through expert-led consulting, custom development, and comprehensive training solutions."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Service Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to transform your enterprise from legacy to intelligent
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <div className="space-y-2">
                  <Link
                    href={service.href}
                    className="block text-primary-600 font-semibold hover:underline"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Product Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative AI-powered products designed to transform enterprise operations and knowledge management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="text-4xl mb-4">{product.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">{product.description}</p>
                <div className="space-y-2">
                  <Link
                    href={product.href}
                    className="block text-primary-600 font-semibold hover:underline"
                  >
                    Learn more →
                  </Link>
                  {product.liveUrl && (
                    <a
                      href={product.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-accent-600 font-semibold hover:underline"
                    >
                      View Live Demo →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unique differentiators that make BrainIgnights the right choice for your transformation journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="border-2 border-gray-200 p-8 rounded-xl hover:border-primary-300 transition-colors"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI-powered products and services can help you bridge legacy systems with intelligent, future-ready solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
              Schedule a Consultation
            </Link>
            <Link href="/resources" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
              Explore Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

