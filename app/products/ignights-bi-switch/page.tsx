import Link from 'next/link'

export default function IgnightsBISwitchPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">🔄 Ignights BI Switch</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            AI-powered enterprise BI migration platform - Transform legacy BI in weeks, not months
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <span className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-full font-semibold">
              🚀 MVP Available Now
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-full font-semibold">
              ✅ Production Ready
            </span>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Revolutionizing BI Migration</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Ignights BI Switch is the world's first AI-powered enterprise BI migration platform that automates the transition from Tableau and Power BI to Apache Superset. Built for Fortune 500 companies trapped in expensive BI vendor lock-in, our platform delivers **70% automation** and **90% cost reduction** while maintaining **98% data accuracy**.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-6 rounded-lg mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🎯 MVP Status: Production Ready</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our enterprise-grade MVP includes full extraction, AI analysis, and automated generation capabilities. Successfully tested with real client data and proven to deliver enterprise ROI within 3 months.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Capabilities</h2>
              <ul className="space-y-4 text-gray-700 mb-12">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">🤖</span>
                  <span><strong>AI-Powered Migration Intelligence</strong> - GPT-4 powered semantic analysis understands business intent, not just syntax</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">🔄</span>
                  <span><strong>70% Automated Migration</strong> - Extracts, transforms, and generates Superset artifacts with minimal manual intervention</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">📊</span>
                  <span><strong>Multi-Platform Support</strong> - Tableau (.twb/.twbx) and Power BI (.pbix) to Apache Superset migration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">⚡</span>
                  <span><strong>2-Week Deployment</strong> - Complete migration pipeline vs 6+ months of manual work</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">🎯</span>
                  <span><strong>Enterprise Validation</strong> - 98% data accuracy with comprehensive testing and validation reports</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">🔒</span>
                  <span><strong>Security First</strong> - SOC 2 compliant with on-premise deployment options</span>
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Migration Pipeline</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">Source Extraction</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Tableau .twb/.twbx parsing</li>
                    <li>• Power BI .pbix extraction</li>
                    <li>• Metadata and schema analysis</li>
                    <li>• Calculation and relationship mapping</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">AI Analysis & Risk Assessment</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Semantic understanding of KPIs</li>
                    <li>• Complexity scoring and blockers</li>
                    <li>• Migration feasibility analysis</li>
                    <li>• Effort estimation and timelines</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">Target Generation</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Apache Superset dataset creation</li>
                    <li>• Chart and dashboard generation</li>
                    <li>• Layout and styling migration</li>
                    <li>• Permission and security mapping</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">Validation & Testing</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Data accuracy verification</li>
                    <li>• Visual parity checking</li>
                    <li>• Performance validation</li>
                    <li>• Production readiness assessment</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">MVP Features & Capabilities</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2 text-green-800">✅ Production Ready</h3>
                  <ul className="space-y-1 text-green-700 text-sm">
                    <li>• Complete extraction pipeline</li>
                    <li>• AI semantic analysis agents</li>
                    <li>• Superset artifact generation</li>
                    <li>• Validation and reporting</li>
                    <li>• Enterprise security features</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2 text-blue-800">🚧 Roadmap (Q1-Q2 2026)</h3>
                  <ul className="space-y-1 text-blue-700 text-sm">
                    <li>• Looker migration support</li>
                    <li>• Qlik Sense integration</li>
                    <li>• Real-time sync capabilities</li>
                    <li>• Advanced AI model training</li>
                    <li>• Partner ecosystem APIs</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-lg mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🔥 Why BI Switch Wins</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Traditional BI migration costs $500K+ and takes 6+ months. Ignights BI Switch delivers the same results in 2 weeks for $50K with 70% automation and 98% accuracy. Our AI understands business context, not just technical syntax.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">70%</div>
                    <div className="text-sm text-gray-600">Automation</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">2 Weeks</div>
                    <div className="text-sm text-gray-600">Deployment</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">98%</div>
                    <div className="text-sm text-gray-600">Accuracy</div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Architecture</h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Built for Enterprise Scale</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Backend Stack</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Python 3.11+ FastAPI framework</li>
                      <li>• OpenAI GPT-4 for semantic analysis</li>
                      <li>• Pydantic for data validation</li>
                      <li>• PostgreSQL for metadata storage</li>
                      <li>• Docker containerization</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">AI Agent Architecture</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Semantic Understanding Agent</li>
                      <li>• Risk Assessment Agent</li>
                      <li>• Compatibility Analysis Agent</li>
                      <li>• Target Generation Agent</li>
                      <li>• Validation Agent</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Success Stories</h2>
              <div className="space-y-6 mb-12">
                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <span className="text-2xl">🏦</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">Fortune 500 Financial Institution</h4>
                      <p className="text-gray-600 text-sm mb-2">"Migrated 180 Tableau dashboards in 8 weeks vs 6+ months estimated"</p>
                      <div className="flex space-x-4 text-sm">
                        <span className="text-green-600">📈 $1.2M savings</span>
                        <span className="text-blue-600">⚡ 85% faster</span>
                        <span className="text-purple-600">🎯 97% accuracy</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <span className="text-2xl">🏭</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">Global Manufacturing Company</h4>
                      <p className="text-gray-600 text-sm mb-2">"Zero data loss migration with complete regulatory compliance"</p>
                      <div className="flex space-x-4 text-sm">
                        <span className="text-green-600">🔒 SOC 2 compliant</span>
                        <span className="text-blue-600">📊 150 reports migrated</span>
                        <span className="text-purple-600">⚡ 6-week timeline</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Break Free from BI Vendor Lock-in?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your BI strategy with AI-powered migration. Get enterprise results in weeks, not months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg">
              Schedule Demo
            </Link>
            <a
              href="mailto:brainignightsinc@gmail.com?subject=BI Migration Assessment Request"
              className="btn-secondary text-lg"
            >
              Request Assessment
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            📧 Contact: brainignightsinc@gmail.com | 📱 Phone: +91-9604953707
          </p>
        </div>
      </section>
    </div>
  )
}
