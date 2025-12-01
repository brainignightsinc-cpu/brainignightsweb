import Link from 'next/link'

export default function CloudModernizationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">☁️ Cloud Modernization & Migration</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Transform your infrastructure with cloud-native solutions and optimized migration strategies
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
                  <span><strong>Lift-and-shift migrations with optimization</strong> - Efficiently move workloads while optimizing for cloud-native benefits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">•</span>
                  <span><strong>Cloud-native application development</strong> - Build applications designed for cloud scalability and resilience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">•</span>
                  <span><strong>Multi-cloud strategy implementation</strong> - Leverage multiple cloud providers for optimal performance and cost</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">•</span>
                  <span><strong>DevOps and GitOps pipeline establishment</strong> - Automate deployment and infrastructure management</span>
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Technology Stack</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">Cloud Platforms</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• AWS Migration Expertise</li>
                    <li>• Azure Implementation</li>
                    <li>• GCP Solutions</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">Containerization</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Kubernetes Orchestration</li>
                    <li>• Docker Containerization</li>
                    <li>• Serverless Architecture</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">Infrastructure as Code</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Terraform</li>
                    <li>• CloudFormation</li>
                    <li>• Ansible Automation</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">CI/CD & DevOps</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• GitOps Pipelines</li>
                    <li>• Jenkins/GitHub Actions</li>
                    <li>• Monitoring & Observability</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-lg mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Migration Approach</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We don't just move your applications to the cloud—we transform them. Our architect-led approach ensures that every migration is optimized for performance, cost, and scalability while maintaining business continuity.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Comprehensive assessment and planning</li>
                  <li>✓ Phased migration with zero downtime</li>
                  <li>✓ Cost optimization strategies</li>
                  <li>✓ Security and compliance alignment</li>
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
            Ready to Move to the Cloud?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's assess your cloud readiness and create a migration strategy tailored to your needs.
          </p>
          <Link href="/contact" className="btn-primary text-lg">
            Get Cloud Assessment
          </Link>
        </div>
      </section>
    </div>
  )
}

