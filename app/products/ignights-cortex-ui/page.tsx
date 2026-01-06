import Link from 'next/link'

export default function IgnightsCortexUIPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">🎨 Ignights-Cortex UI</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Modern, enterprise-grade frontend for the Ignights-Cortex knowledge intelligence platform
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
                Ignights-Cortex UI provides a beautiful, intuitive interface for interacting with the Ignights-Cortex knowledge intelligence platform. Built with Next.js 15 and modern web technologies, it offers a seamless user experience for enterprise knowledge management and AI-powered query processing.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
              <ul className="space-y-4 text-gray-700 mb-12">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">⚡</span>
                  <span><strong>Next.js 15 Architecture</strong> - Built with the latest React framework using App Router and Server Components for optimal performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">🎨</span>
                  <span><strong>Modern UI/UX Design</strong> - Tailwind CSS with custom design system delivering professional, responsive interfaces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">💬</span>
                  <span><strong>Intelligent Chat Interface</strong> - Seamless interaction with AI for natural language queries and responses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">📊</span>
                  <span><strong>Real-Time System Monitoring</strong> - Live health checks and status monitoring for backend services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">📱</span>
                  <span><strong>Mobile-First Responsive Design</strong> - Optimized for all devices with touch-friendly interactions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">🔗</span>
                  <span><strong>Complete API Integration</strong> - Full integration with Ignights-Cortex backend APIs including query, health, and testing endpoints</span>
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Stack</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">Frontend Framework</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Next.js 15 with App Router</li>
                    <li>• React 18 with Server Components</li>
                    <li>• TypeScript for type safety</li>
                    <li>• Tailwind CSS for styling</li>
                    <li>• Zustand for state management</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">UI Components & Libraries</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Lucide React icons</li>
                    <li>• React Hot Toast notifications</li>
                    <li>• React Markdown rendering</li>
                    <li>• Axios for API calls</li>
                    <li>• Custom component library</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Vercel-Optimized Deployment</h3>
                <p className="text-gray-700 leading-relaxed">
                  Designed specifically for Vercel serverless deployment, ensuring optimal performance, scalability, and seamless integration with the Ignights-Cortex backend services.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">User Experience Features</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Query Interface</h3>
                  <p className="text-gray-700">Intuitive chat-like interface for submitting questions and receiving AI-powered answers with source attribution</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">System Dashboard</h3>
                  <p className="text-gray-700">Real-time monitoring of backend services, API health, and system performance metrics</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Documentation Viewer</h3>
                  <p className="text-gray-700">Integrated documentation browser for API references, deployment guides, and troubleshooting</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Contact Integration</h3>
                  <p className="text-gray-700">Direct access to support resources and contact information for enterprise assistance</p>
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
            Experience Enterprise AI Through Modern UI
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover how Ignights-Cortex UI transforms complex AI capabilities into intuitive, enterprise-ready applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products/ignights-cortex" className="btn-primary text-lg">
              View Backend Product
            </Link>
            <Link href="/contact" className="btn-secondary text-lg">
              Request Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
