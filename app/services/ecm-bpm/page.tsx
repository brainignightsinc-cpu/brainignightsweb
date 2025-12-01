import Link from 'next/link'

export default function ECMBPMPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">📁 ECM/BPM Transformation</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Specialized expertise in IBM FileNet and process excellence for enterprise content management
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">IBM FileNet & Process Excellence</h2>
              <ul className="space-y-4 text-gray-700 mb-12">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">•</span>
                  <span><strong>FileNet to cloud-native migration strategies</strong> - Modernize your ECM infrastructure with cloud-native solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">•</span>
                  <span><strong>IBM BPM/BAW implementation and optimization</strong> - Maximize the value of your business process management investments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">•</span>
                  <span><strong>Content services platform modernization</strong> - Transform legacy content management into modern, intelligent systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">•</span>
                  <span><strong>Digital process automation</strong> - Streamline workflows with intelligent automation</span>
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Niche Expertise</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">IBM FileNet Services</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• FileNet Health Assessments</li>
                    <li>• Performance Optimization</li>
                    <li>• Migration Planning</li>
                    <li>• Cloud Migration Execution</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">ECM Strategy</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• ECM Strategy Development</li>
                    <li>• Roadmap Creation</li>
                    <li>• Architecture Design</li>
                    <li>• Best Practices Implementation</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">Content Migration</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Automated Migration Tools</li>
                    <li>• Data Integrity Assurance</li>
                    <li>• Zero-Downtime Migration</li>
                    <li>• Post-Migration Support</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">AI-Enhanced Solutions</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Intelligent Content Classification</li>
                    <li>• Automated Metadata Extraction</li>
                    <li>• Smart Search & Discovery</li>
                    <li>• Compliance Automation</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-lg mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our IBM FileNet Specialization</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  With deep expertise in IBM FileNet and enterprise content management, we understand the unique challenges of modernizing legacy ECM systems. Our specialized knowledge in this niche but critical technology sets us apart.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Deep FileNet architecture expertise</li>
                  <li>✓ Proven migration methodologies</li>
                  <li>✓ Compliance-aware transformations</li>
                  <li>✓ AI-enhanced content intelligence</li>
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
            Need FileNet Expertise?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's assess your ECM health and create a modernization roadmap tailored to your needs.
          </p>
          <Link href="/contact" className="btn-primary text-lg">
            Request ECM Health Check
          </Link>
        </div>
      </section>
    </div>
  )
}

