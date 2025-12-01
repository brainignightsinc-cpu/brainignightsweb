import Link from 'next/link'

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Real-world transformations and success stories
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gray-50 p-12 rounded-2xl">
              <div className="text-6xl mb-6">🚀</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Case Studies Coming Soon</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We're currently working on documenting our transformation success stories. Check back soon to see how we've helped enterprises modernize their systems and achieve their digital transformation goals.
              </p>
              <div className="space-y-4">
                <p className="text-gray-700 font-semibold">Upcoming case studies will include:</p>
                <ul className="text-left max-w-md mx-auto space-y-2 text-gray-600">
                  <li>• IBM FileNet to cloud-native migration</li>
                  <li>• Legacy system AI transformation</li>
                  <li>• Cloud modernization success stories</li>
                  <li>• Data platform implementations</li>
                  <li>• Enterprise content management transformations</li>
                </ul>
              </div>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  Request a Case Study
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

