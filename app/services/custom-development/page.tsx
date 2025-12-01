import Link from 'next/link'

export default function CustomDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">💻 Custom Enterprise Development</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Build enterprise-grade solutions with modern architecture and best practices
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Solution Focus</h2>
              <ul className="space-y-4 text-gray-700 mb-12">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">•</span>
                  <span><strong>Microservices architecture development</strong> - Build scalable, maintainable systems with microservices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">•</span>
                  <span><strong>Enterprise-grade web applications</strong> - Create robust, secure, and performant web solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">•</span>
                  <span><strong>Integration platforms and APIs</strong> - Connect systems seamlessly with modern integration patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">•</span>
                  <span><strong>Mobile workforce solutions</strong> - Enable mobile productivity with enterprise-grade apps</span>
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Development Philosophy</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">Methodology</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Agile/Scrum Delivery</li>
                    <li>• Test-Driven Development</li>
                    <li>• Continuous Integration</li>
                    <li>• Continuous Deployment</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">Quality & Security</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Security-First Approach</li>
                    <li>• Code Quality Standards</li>
                    <li>• Performance Optimization</li>
                    <li>• Scalability Planning</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">Architecture Patterns</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Microservices Design</li>
                    <li>• API-First Development</li>
                    <li>• Event-Driven Architecture</li>
                    <li>• Domain-Driven Design</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">Technology Stack</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Modern Frameworks</li>
                    <li>• Cloud-Native Technologies</li>
                    <li>• Container Orchestration</li>
                    <li>• Modern Databases</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-lg mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Architect-Led Development</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Every project is led by experienced solution architects who ensure that your custom solutions are built with enterprise-grade quality, scalability, and maintainability from day one.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Solution architecture expertise</li>
                  <li>✓ Enterprise-grade development practices</li>
                  <li>✓ Security and compliance built-in</li>
                  <li>✓ Scalable and maintainable code</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Need Custom Enterprise Solutions?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and design a solution that fits your unique business needs.
          </p>
          <Link href="/contact" className="btn-primary text-lg">
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  )
}

