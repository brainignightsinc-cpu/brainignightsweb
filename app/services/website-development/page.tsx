import Link from 'next/link'

export default function WebsiteDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">🌐 Website Development</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Modern, responsive web applications built with cutting-edge technologies for exceptional user experiences
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Development Expertise</h2>
              <ul className="space-y-4 text-gray-700 mb-12">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">⚡</span>
                  <span><strong>Next.js 15 & React Applications</strong> - Build lightning-fast, SEO-optimized web applications with server-side rendering</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">📱</span>
                  <span><strong>Responsive & Mobile-First Design</strong> - Ensure perfect user experience across all devices and screen sizes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">🚀</span>
                  <span><strong>Performance Optimization</strong> - Implement best practices for Core Web Vitals and loading speed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">🔍</span>
                  <span><strong>SEO & Accessibility Compliance</strong> - Build websites that rank well and are accessible to all users</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">🔗</span>
                  <span><strong>API Integration & Headless CMS</strong> - Connect with backend services and content management systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">🛒</span>
                  <span><strong>E-commerce & SaaS Platforms</strong> - Develop scalable commerce solutions and software-as-a-service applications</span>
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Stack & Approach</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">Frontend Technologies</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Next.js 15 with App Router</li>
                    <li>• React 18 with Server Components</li>
                    <li>• TypeScript for type safety</li>
                    <li>• Tailwind CSS for styling</li>
                    <li>• Zustand for state management</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">Development Practices</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Component-based architecture</li>
                    <li>• Responsive design principles</li>
                    <li>• Performance optimization</li>
                    <li>• Cross-browser compatibility</li>
                    <li>• Accessibility (WCAG 2.1)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-lg mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Modern Web Standards</h3>
                <p className="text-gray-700 leading-relaxed">
                  We build websites using the latest web technologies and best practices, ensuring your digital presence is future-proof, performant, and user-friendly. Our development process includes comprehensive testing, performance monitoring, and continuous optimization.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Offerings</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Corporate Websites</h3>
                  <p className="text-gray-700">Professional business websites with CMS integration, lead generation forms, and analytics</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">E-commerce Platforms</h3>
                  <p className="text-gray-700">Full-featured online stores with payment integration, inventory management, and customer portals</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">SaaS Applications</h3>
                  <p className="text-gray-700">Scalable software-as-a-service platforms with user management, dashboards, and API integrations</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Progressive Web Apps</h3>
                  <p className="text-gray-700">Mobile-first web applications with offline capabilities and native app-like experiences</p>
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
            Ready to Build Your Modern Web Presence?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create a website that not only looks great but performs exceptionally and delivers results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg">
              Start Your Project
            </Link>
            <Link href="/services" className="btn-secondary text-lg">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
