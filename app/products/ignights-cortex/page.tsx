import Link from 'next/link'

export default function IgnightsCortexPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">🧠 Ignights-Cortex</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Enterprise knowledge intelligence layer powered by AI and multi-source document processing
          </p>
          <div className="mt-8">
            <a
              href="https://ai.brainignights.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className="mr-2">🚀</span>
              View Live Demo
            </a>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Product Overview</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Ignights-Cortex is our enterprise-grade Retrieval Augmented Generation (RAG) system that transforms how organizations access and utilize their knowledge base. By intelligently processing documents from multiple sources including Confluence, Google Drive, and SharePoint, Cortex provides accurate, context-aware answers to complex business questions.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
              <ul className="space-y-4 text-gray-700 mb-12">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">🔍</span>
                  <span><strong>Multi-Source Document Ingestion</strong> - Seamlessly integrates with Confluence, Google Drive, SharePoint, and other enterprise document repositories</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">🧠</span>
                  <span><strong>AI-Powered Semantic Search</strong> - Uses OpenAI embeddings and FAISS vector search for intelligent document retrieval</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">⚡</span>
                  <span><strong>Real-Time Query Processing</strong> - FastAPI backend ensures rapid response times for enterprise-scale queries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">🔒</span>
                  <span><strong>Enterprise Security</strong> - Built with security-first approach, supporting OAuth, JWT, and enterprise authentication</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">☁️</span>
                  <span><strong>Cloud-Native Deployment</strong> - Optimized for Vercel serverless deployment with Docker containerization support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">📊</span>
                  <span><strong>Source Attribution</strong> - Every answer includes references to source documents with confidence scores</span>
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Architecture</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">Backend Stack</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Python FastAPI framework</li>
                    <li>• OpenAI GPT models for generation</li>
                    <li>• OpenAI text-embedding-3-large</li>
                    <li>• FAISS vector database</li>
                    <li>• Document processing pipelines</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">Data Sources</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Atlassian Confluence</li>
                    <li>• Google Drive</li>
                    <li>• SharePoint Online</li>
                    <li>• Local file systems</li>
                    <li>• REST API integrations</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-lg mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Live Demo Available</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Experience Ignights-Cortex in action with our live demonstration. The system is currently processing enterprise knowledge bases and providing intelligent answers to complex business queries.
                </p>
                <a
                  href="https://ai.brainignights.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
                >
                  <span className="mr-2">🌐</span>
                  Access Live Demo →
                </a>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Use Cases</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Internal Knowledge Base</h3>
                  <p className="text-gray-700">Quick access to company policies, procedures, and documentation</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Customer Support</h3>
                  <p className="text-gray-700">AI-powered answers to customer queries using product documentation</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Research & Analysis</h3>
                  <p className="text-gray-700">Cross-reference multiple documents for comprehensive analysis</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Compliance & Audit</h3>
                  <p className="text-gray-700">Quick access to compliance documents and regulatory information</p>
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
            Ready to Unlock Your Enterprise Knowledge?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your document repositories into an intelligent knowledge base with Ignights-Cortex.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://ai.brainignights.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg"
            >
              Try Live Demo
            </a>
            <Link href="/contact" className="btn-secondary text-lg">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
