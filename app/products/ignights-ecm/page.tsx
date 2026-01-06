import Link from 'next/link'

export default function IgnightsECMPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">📁 Ignights ECM</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Modern, cloud-native Enterprise Content & Data Management platform with AI-powered document intelligence
          </p>
        </div>
      </section>

      {/* Product Details */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Product Overview</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Ignights ECM is a comprehensive enterprise content management platform that enables organizations to securely store, manage, search, and extract value from documents. Built with modern cloud-native architecture and powered by AI, it provides a complete solution for digital content management with advanced features like document versioning, metadata management, and intelligent search capabilities.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
              <ul className="space-y-4 text-gray-700 mb-12">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">📄</span>
                  <span><strong>Document Lifecycle Management</strong> - Complete document management from creation to archival with version control and audit trails</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">🏗️</span>
                  <span><strong>Cloud-Native Architecture</strong> - Built with React frontend and Python FastAPI backend, designed for scalability and performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">🧠</span>
                  <span><strong>AI-Powered Insights</strong> - Intelligent document processing and content analysis for enhanced knowledge discovery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">🔍</span>
                  <span><strong>Advanced Search & Discovery</strong> - Full-text search, metadata filtering, and faceted search capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">🏢</span>
                  <span><strong>Business Data Zones</strong> - Organized content classification with customizable metadata schemas and document classes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">🔒</span>
                  <span><strong>Enterprise Security</strong> - JWT authentication, role-based access control, and comprehensive audit logging</span>
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Architecture</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">Frontend Stack</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• React with TypeScript</li>
                    <li>• Admin UI dashboard</li>
                    <li>• User UI interface</li>
                    <li>• Responsive design</li>
                    <li>• Component-based architecture</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">Backend Stack</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Python FastAPI framework</li>
                    <li>• PostgreSQL database</li>
                    <li>• JWT authentication</li>
                    <li>• RESTful API design</li>
                    <li>• Docker containerization</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud Storage Integration</h3>
                <p className="text-gray-700 leading-relaxed">
                  Seamlessly integrates with major cloud storage providers including Amazon S3, Google Cloud Storage, and Azure Blob Storage, ensuring scalable and reliable document storage for enterprise environments.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Capabilities</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Document Management</h3>
                  <p className="text-gray-700">Upload, version control, check-in/check-out, and organize documents with hierarchical folder structures</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Metadata & Classification</h3>
                  <p className="text-gray-700">Rich metadata management with customizable document classes and business data zones</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Search & Discovery</h3>
                  <p className="text-gray-700">Powerful search capabilities with full-text indexing, filters, and advanced query options</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Security & Compliance</h3>
                  <p className="text-gray-700">Comprehensive security with audit trails, permissions management, and compliance reporting</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Workflow Integration</h3>
                  <p className="text-gray-700">Automated document workflows with approval processes and business rule enforcement</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">API & Integration</h3>
                  <p className="text-gray-700">RESTful APIs for seamless integration with existing enterprise systems and applications</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Deployment Options</h2>
              <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Deployment Architecture</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ignights ECM supports multiple deployment strategies to meet diverse enterprise requirements:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Docker Compose</strong> - Quick local development and testing</li>
                  <li><strong>Kubernetes</strong> - Production-ready container orchestration</li>
                  <li><strong>Cloud Platforms</strong> - Optimized for AWS, Azure, and GCP</li>
                  <li><strong>Hybrid Deployments</strong> - Mix of on-premises and cloud components</li>
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
            Modernize Your Content Management
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your document management with AI-powered enterprise content management that scales with your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services/ecm-bpm" className="btn-primary text-lg">
              View ECM Services
            </Link>
            <Link href="/contact" className="btn-secondary text-lg">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
