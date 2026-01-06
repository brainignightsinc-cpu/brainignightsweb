import Link from 'next/link'

export default function ProductsPage() {
  const products = [
    {
      title: 'Ignights-Cortex',
      description: 'Enterprise-grade Retrieval Augmented Generation (RAG) system powered by Confluence, Google Drive, SharePoint, OpenAI embeddings, and FAISS vector search.',
      href: '/products/ignights-cortex',
      liveUrl: 'https://ai.brainignights.com/',
      icon: '🧠',
      features: [
        'AI-powered knowledge retrieval',
        'Multi-source document ingestion',
        'Intelligent semantic search',
        'Enterprise security & compliance',
      ],
    },
    {
      title: 'Ignights-Cortex UI',
      description: 'Modern, enterprise-grade frontend for the Ignights-Cortex knowledge intelligence platform with beautiful UI and seamless API integration.',
      href: '/products/ignights-cortex-ui',
      icon: '🎨',
      features: [
        'Modern Next.js 15 interface',
        'Real-time AI chat interface',
        'System health monitoring',
        'Mobile-responsive design',
      ],
    },
    {
      title: 'Ignights ECM',
      description: 'Modern, cloud-native Enterprise Content & Data Management platform with AI-powered document intelligence and secure storage.',
      href: '/products/ignights-ecm',
      icon: '📁',
      features: [
        'Document lifecycle management',
        'AI-powered insights',
        'Cloud storage integration',
        'Advanced search & metadata',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Products</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Innovative enterprise solutions powered by AI and modern architecture
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="text-5xl mb-4">{product.icon}</div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary-600 mr-2">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3">
                    <Link
                      href={product.href}
                      className="btn-primary block text-center"
                    >
                      Learn More
                    </Link>
                    {product.liveUrl && (
                      <a
                        href={product.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary block text-center"
                      >
                        View Live Demo
                      </a>
                    )}
                  </div>
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
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover how our AI-powered products can revolutionize your business operations and knowledge management.
          </p>
          <Link href="/contact" className="btn-primary text-lg">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  )
}
