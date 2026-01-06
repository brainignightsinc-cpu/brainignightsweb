import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    {
      title: 'Agentic AI & Legacy Modernization',
      description: 'AI-powered legacy system analysis and modernization with autonomous agent deployment for business processes.',
      href: '/services/agentic-ai',
      icon: '🤖',
      features: [
        'AI-powered legacy system analysis',
        'Autonomous agent deployment',
        'Intelligent workflow automation',
        'AI-assisted code migration',
      ],
    },
    {
      title: 'Cloud Modernization & Migration',
      description: 'Lift-and-shift migrations with optimization, cloud-native development, and multi-cloud strategy implementation.',
      href: '/services/cloud-modernization',
      icon: '☁️',
      features: [
        'Lift-and-shift migrations',
        'Cloud-native development',
        'Multi-cloud strategy',
        'DevOps & GitOps pipelines',
      ],
    },
    {
      title: 'Data Engineering Excellence',
      description: 'Modern data platform architecture, real-time processing pipelines, and AI/ML data infrastructure.',
      href: '/services/data-engineering',
      icon: '📊',
      features: [
        'Modern data platform architecture',
        'Real-time data processing',
        'Data governance frameworks',
        'AI/ML data infrastructure',
      ],
    },
    {
      title: 'ECM/BPM Transformation',
      description: 'IBM FileNet to cloud-native migration, IBM BPM/BAW implementation, and content services modernization.',
      href: '/services/ecm-bpm',
      icon: '📁',
      features: [
        'IBM FileNet migration',
        'IBM BPM/BAW optimization',
        'Content services modernization',
        'Digital process automation',
      ],
    },
    {
      title: 'Custom Enterprise Development',
      description: 'Microservices architecture, enterprise-grade web applications, and integration platforms.',
      href: '/services/custom-development',
      icon: '💻',
      features: [
        'Microservices architecture',
        'Enterprise web applications',
        'Integration platforms & APIs',
        'Mobile workforce solutions',
      ],
    },
    {
      title: 'Training & Learning Solutions',
      description: 'Corporate training in AI, cloud architecture, data engineering, and ECM/BPM best practices.',
      href: '/services/training',
      icon: '🎓',
      features: [
        'AI & ML for enterprises',
        'Cloud architecture certification',
        'Data engineering workshops',
        'ECM/BPM best practices',
      ],
    },
    {
      title: 'Website Development',
      description: 'Modern, responsive web applications built with Next.js, React, and cutting-edge technologies for exceptional user experiences.',
      href: '/services/website-development',
      icon: '🌐',
      features: [
        'Next.js 15 & React applications',
        'Responsive & mobile-first design',
        'Performance optimization',
        'SEO & accessibility compliance',
        'API integration & headless CMS',
        'E-commerce & SaaS platforms',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Comprehensive solutions designed to transform your enterprise from legacy to intelligent
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary-600 mr-2">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.href}
                    className="btn-primary block text-center"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We specialize in creating tailored solutions that fit your unique business needs.
          </p>
          <Link href="/contact" className="btn-primary text-lg">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}

