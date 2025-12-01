import Link from 'next/link'

export default function AgenticAIPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">🤖 Agentic AI & Legacy Modernization</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Transform legacy systems with AI-powered analysis and autonomous agent deployment
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Focus</h2>
              <ul className="space-y-4 text-gray-700 mb-12">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">•</span>
                  <span><strong>AI-powered legacy system analysis and modernization</strong> - Leverage advanced AI to analyze and modernize your legacy infrastructure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">•</span>
                  <span><strong>Autonomous agent deployment for business processes</strong> - Deploy intelligent agents that automate and optimize workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">•</span>
                  <span><strong>Intelligent workflow automation</strong> - Streamline operations with AI-driven process automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">•</span>
                  <span><strong>AI-assisted code migration and refactoring</strong> - Accelerate modernization with AI-powered code transformation</span>
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Target Clients</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Financial Institutions</h3>
                  <p className="text-gray-700">With COBOL/Java EE systems requiring modernization</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Manufacturing Companies</h3>
                  <p className="text-gray-700">With legacy ERP systems needing intelligent upgrades</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Government Agencies</h3>
                  <p className="text-gray-700">With aging infrastructure requiring transformation</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Healthcare Organizations</h3>
                  <p className="text-gray-700">With outdated patient management systems</p>
                </div>
              </div>

              <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-lg mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Why Choose Our Agentic AI Solutions?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our AI-first approach doesn't just modernize your systems—it infuses intelligence into every aspect of your operations. We combine deep technical expertise with cutting-edge AI technologies to create autonomous systems that learn, adapt, and optimize continuously.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Modernize with AI?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how agentic AI can transform your legacy systems into intelligent, future-ready platforms.
          </p>
          <Link href="/contact" className="btn-primary text-lg">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}

