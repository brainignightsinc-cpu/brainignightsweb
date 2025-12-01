import Link from 'next/link'

export default function InsightsPage() {
  const categories = [
    {
      title: 'Technical Deep Dives',
      description: 'In-depth technical articles on architecture, implementation, and best practices',
      icon: '🔧',
    },
    {
      title: 'Industry Trends',
      description: 'Analysis of emerging trends in AI, cloud, and enterprise technology',
      icon: '📈',
    },
    {
      title: 'Tutorials & How-Tos',
      description: 'Step-by-step guides and practical tutorials for technical teams',
      icon: '📚',
    },
    {
      title: 'Whitepapers',
      description: 'Comprehensive research and strategic insights on enterprise transformation',
      icon: '📄',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Insights & Blog</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Expert insights on AI, cloud modernization, and enterprise transformation
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Content Categories</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {categories.map((category, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 leading-relaxed">{category.description}</p>
              </div>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-primary-50 p-12 rounded-2xl">
              <div className="text-6xl mb-6">📝</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Content Coming Soon</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We're preparing insightful articles, tutorials, and whitepapers to help you stay ahead in your digital transformation journey. Subscribe to be notified when we publish new content.
              </p>
              <div className="space-y-4 mb-8">
                <p className="text-gray-700 font-semibold">Upcoming topics include:</p>
                <ul className="text-left max-w-md mx-auto space-y-2 text-gray-600">
                  <li>• IBM FileNet Modernization Strategies</li>
                  <li>• Agentic AI Implementation Guide</li>
                  <li>• Cloud Migration Best Practices</li>
                  <li>• Data Engineering Architecture Patterns</li>
                  <li>• Legacy System AI Transformation</li>
                </ul>
              </div>
              <Link href="/contact" className="btn-primary">
                Subscribe for Updates
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

