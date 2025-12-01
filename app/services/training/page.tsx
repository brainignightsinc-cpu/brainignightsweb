import Link from 'next/link'

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">🎓 Training & Learning Solutions</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Empower your team with cutting-edge knowledge and practical skills
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Corporate Training Portfolio</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">AI and Machine Learning</h3>
                  <p className="text-gray-700 mb-3">Comprehensive training programs for enterprises looking to leverage AI and ML technologies.</p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• AI Strategy for Business</li>
                    <li>• Machine Learning Fundamentals</li>
                    <li>• AI Implementation Best Practices</li>
                    <li>• Agentic AI Concepts</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">Cloud Architecture</h3>
                  <p className="text-gray-700 mb-3">Certification prep and practical cloud architecture training for enterprise teams.</p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• AWS/Azure/GCP Architecture</li>
                    <li>• Cloud Migration Strategies</li>
                    <li>• Kubernetes & Containerization</li>
                    <li>• DevOps & GitOps Practices</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">Data Engineering</h3>
                  <p className="text-gray-700 mb-3">Workshops on modern data platforms and engineering practices.</p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Modern Data Platform Design</li>
                    <li>• Real-time Data Processing</li>
                    <li>• Data Governance Frameworks</li>
                    <li>• Snowflake & Databricks</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">ECM/BPM Best Practices</h3>
                  <p className="text-gray-700 mb-3">Specialized training on enterprise content and process management.</p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• IBM FileNet Administration</li>
                    <li>• BPM/BAW Implementation</li>
                    <li>• ECM Strategy & Roadmap</li>
                    <li>• Content Migration Techniques</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Training Formats</h2>
              <div className="space-y-6 mb-12">
                <div className="border-l-4 border-primary-600 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Corporate Workshops</h3>
                  <p className="text-gray-700 mb-2">On-site or virtual workshops tailored to your team's needs</p>
                  <p className="text-primary-600 font-semibold">$2,000 - $5,000/day</p>
                </div>
                <div className="border-l-4 border-primary-600 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Online Courses</h3>
                  <p className="text-gray-700 mb-2">Self-paced and instructor-led online training programs</p>
                  <p className="text-primary-600 font-semibold">$500 - $2,000 per participant</p>
                </div>
                <div className="border-l-4 border-primary-600 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Training Programs</h3>
                  <p className="text-gray-700 mb-2">Bespoke training solutions designed for your specific requirements</p>
                  <p className="text-primary-600 font-semibold">Contact for pricing</p>
                </div>
              </div>

              <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-lg mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Why Choose Our Training?</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our training programs are designed by practitioners who understand both the theory and real-world application of these technologies. We focus on practical, actionable knowledge that your team can immediately apply.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Industry-experienced instructors</li>
                  <li>✓ Hands-on, practical exercises</li>
                  <li>✓ Customizable curriculum</li>
                  <li>✓ Ongoing support and resources</li>
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
            Ready to Upskill Your Team?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's design a training program that empowers your team with the skills they need to drive transformation.
          </p>
          <Link href="/contact" className="btn-primary text-lg">
            Discuss Training Needs
          </Link>
        </div>
      </section>
    </div>
  )
}

