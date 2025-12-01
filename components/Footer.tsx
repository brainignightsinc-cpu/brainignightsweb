import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">BrainIgnights</h3>
            <p className="text-lg mb-2 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Igniting Ideas. Engineering Intelligence.
            </p>
            <p className="mb-4">
              Premier digital transformation partner for enterprises seeking to bridge legacy systems with intelligent, AI-powered future.
            </p>
            <div className="space-y-2">
              <p className="flex items-center space-x-2">
                <span>📞</span>
                <a href="tel:+918319924486" className="hover:text-primary-400">+91-8319924486</a>
              </p>
              <p className="flex items-center space-x-2">
                <span>✉️</span>
                <a href="mailto:brainignightsinc@gmail.com" className="hover:text-primary-400">brainignightsinc@gmail.com</a>
              </p>
              <p className="flex items-center space-x-2">
                <span>🌐</span>
                <a href="https://www.brainignights.com" className="hover:text-primary-400">www.brainignights.com</a>
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/agentic-ai" className="hover:text-primary-400">Agentic AI</Link></li>
              <li><Link href="/services/cloud-modernization" className="hover:text-primary-400">Cloud Modernization</Link></li>
              <li><Link href="/services/data-engineering" className="hover:text-primary-400">Data Engineering</Link></li>
              <li><Link href="/services/ecm-bpm" className="hover:text-primary-400">ECM/BPM Solutions</Link></li>
              <li><Link href="/services/custom-development" className="hover:text-primary-400">Custom Development</Link></li>
              <li><Link href="/services/training" className="hover:text-primary-400">Corporate Training</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-primary-400">About Us</Link></li>
              <li><Link href="/case-studies" className="hover:text-primary-400">Case Studies</Link></li>
              <li><Link href="/insights" className="hover:text-primary-400">Insights</Link></li>
              <li><Link href="/resources" className="hover:text-primary-400">Resources</Link></li>
              <li><Link href="/contact" className="hover:text-primary-400">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {currentYear} BrainIgnights Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

