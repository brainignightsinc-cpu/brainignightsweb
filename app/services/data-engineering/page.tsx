import Link from 'next/link'

export default function DataEngineeringPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">📊 Data Engineering Excellence</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Build modern data platforms that power AI and drive intelligent decision-making
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
                  <span><strong>Modern data platform architecture</strong> - Design scalable, cloud-native data platforms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">•</span>
                  <span><strong>Real-time data processing pipelines</strong> - Enable instant insights with streaming data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">•</span>
                  <span><strong>Data governance and quality frameworks</strong> - Ensure data reliability and compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">•</span>
                  <span><strong>AI/ML data infrastructure</strong> - Build foundations for machine learning and AI</span>
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Specializations</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">Data Platforms</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Snowflake Implementations</li>
                    <li>• Databricks Solutions</li>
                    <li>• Data Lakehouse Architecture</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">Processing Engines</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Apache Spark Optimization</li>
                    <li>• Real-time Stream Processing</li>
                    <li>• Batch Processing Pipelines</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">Streaming Solutions</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Apache Kafka</li>
                    <li>• AWS Kinesis</li>
                    <li>• Event-Driven Architectures</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">Data Services</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Data Quality & Governance</li>
                    <li>• ETL/ELT Pipelines</li>
                    <li>• Data Cataloging & Discovery</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-lg mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Why Our Data Engineering Approach Works</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We design data platforms that don't just store information—they enable intelligence. Our solutions are built for scale, performance, and the future of AI-driven analytics.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Cloud-native and scalable architectures</li>
                  <li>✓ Real-time and batch processing capabilities</li>
                  <li>✓ Enterprise-grade governance and security</li>
                  <li>✓ AI/ML-ready data infrastructure</li>
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
            Ready to Build Your Data Platform?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's design a modern data architecture that powers your AI initiatives and business intelligence.
          </p>
          <Link href="/contact" className="btn-primary text-lg">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}

