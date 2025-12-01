import Link from 'next/link'

export default function ResourcesPage() {
  const resourceCategories = [
    {
      title: 'Tools & Templates',
      description: 'Downloadable tools, checklists, and templates to accelerate your transformation',
      icon: '🛠️',
      items: [
        'Legacy System Assessment Checklist',
        'Cloud Migration Readiness Template',
        'ECM Health Check Framework',
        'AI Readiness Assessment Tool',
      ],
    },
    {
      title: 'Webinars',
      description: 'Recorded and upcoming webinars on enterprise transformation topics',
      icon: '🎥',
      items: [
        'IBM FileNet Modernization Strategies',
        'AI-First Legacy Transformation',
        'Cloud Migration Best Practices',
        'Data Platform Architecture Design',
      ],
    },
    {
      title: 'Free Assessments',
      description: 'Complimentary assessments to evaluate your current state and opportunities',
      icon: '📋',
      items: [
        'ECM Health Checkup',
        'Cloud Migration Readiness Evaluation',
        'AI Transformation Opportunity Assessment',
        'Legacy System Modernization Roadmap',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Resources</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Free tools, templates, and assessments to support your transformation journey
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {resourceCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="text-5xl mb-4">{category.icon}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{category.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-primary-50 p-12 rounded-2xl">
              <div className="text-6xl mb-6">📦</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Resources Coming Soon</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We're building a comprehensive resource library with free tools, templates, and assessments to help you on your transformation journey. Check back soon or contact us to request specific resources.
              </p>
              <div className="space-y-4 mb-8">
                <p className="text-gray-700 font-semibold">Available resources will include:</p>
                <ul className="text-left max-w-md mx-auto space-y-2 text-gray-600">
                  <li>• Downloadable assessment templates</li>
                  <li>• Architecture pattern libraries</li>
                  <li>• Migration planning tools</li>
                  <li>• Best practice guides</li>
                  <li>• Free consultation offers</li>
                </ul>
              </div>
              <Link href="/contact" className="btn-primary">
                Request Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Free Assessment CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get a Free Assessment
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your transformation journey with a complimentary assessment of your current state and opportunities.
          </p>
          <Link href="/contact" className="btn-primary text-lg">
            Request Free Assessment
          </Link>
        </div>
      </section>
    </div>
  )
}

