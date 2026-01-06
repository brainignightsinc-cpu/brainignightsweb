import Link from 'next/link'

interface CaseStudy {
  title: string
  industry: string
  challenge: string
  solution: string
  results: string[]
  icon: string
}

const caseStudies: CaseStudy[] = [
  {
    title: 'Agentic AI Champion vs Challenger Testing Automation',
    industry: 'Enterprise Modernization',
    challenge: 'Large enterprise needed to validate legacy system behavior against new modern system during migration. Required comprehensive testing, defect logging, code fixes, and post-deployment validation without massive manual effort.',
    solution: 'Built end-to-end agentic GenAI automation platform using LangGraph and intelligent tooling for automated test execution, response comparison, defect detection, code fixing, and regression testing.',
    results: [
      '🤖 100% automated test execution and validation',
      '⏱️ 95% reduction in manual testing effort',
      '🐛 Automated defect logging and code fixes with AI',
      '💰 $5.8M savings in QA resources and timeline',
      '✅ Zero critical issues in production after deployment',
    ],
    icon: '🤖',
  },
  {
    title: 'Enterprise RAG Search Platform',
    industry: 'Financial Services • GenAI',
    challenge: 'Large financial institution struggling with information retrieval across 50TB+ of unstructured data in FileNet ECM system.',
    solution: 'Designed and implemented enterprise RAG system with LangChain, vector embeddings, and LLM integration.',
    results: [
      '⚡ 85% reduction in search time',
      '💰 $2.3M annual savings in operational efficiency',
      '📈 Improved compliance reporting accuracy to 99.8%',
    ],
    icon: '🔍',
  },
  {
    title: 'Tableau to Superset Migration with Ignights BI Switch',
    industry: 'Big Data Analytics • Agentic AI • BI Migration',
    challenge: 'Large data analytics firm needed to migrate 50,000+ Tableau dashboards to open-source Superset platform with minimal manual effort and zero business disruption.',
    solution: 'Implemented Ignights BI Switch enterprise BI migration platform featuring AI-powered semantic analysis, automated extraction of Tableau artifacts, and intelligent generation of Superset configurations with comprehensive validation.',
    results: [
      '🔄 Automated migration of 50K+ dashboards using Ignights BI Switch',
      '🤖 70% AI automation with semantic understanding of business logic',
      '⏱️ 90% reduction in timeline (10 months → 1 month)',
      '💰 $4.2M cost savings in migration resources and timeline',
      '✅ 99.5% migration accuracy with enterprise validation',
      '🎯 Zero business disruption during migration',
    ],
    icon: '🔄',
  },
  {
    title: 'Autosys to Apache Airflow Orchestration Migration',
    industry: 'Enterprise Workflow Automation',
    challenge: 'Enterprise customer with 15-year legacy Autosys job scheduler handling 10,000+ daily workflows needed modern cloud-native replacement.',
    solution: 'Designed comprehensive migration strategy from Autosys to Apache Airflow with automated job conversion, dependency mapping, and zero-downtime cutover.',
    results: [
      '🔄 Successfully migrated 10,000+ jobs to Airflow',
      '📊 Enhanced monitoring with 95% better visibility and alerting',
      '⚡ 60% faster job execution with parallel processing capabilities',
      '💰 $2.8M annual savings in licensing and operational costs',
    ],
    icon: '🔄',
  },
  {
    title: 'Multi-Cloud Migration & Modernization',
    industry: 'Healthcare/Pharma',
    challenge: '20-year-old monolithic Java application requiring migration to cloud with zero downtime.',
    solution: 'Designed microservices architecture, implemented strangler pattern migration over 18 months.',
    results: [
      '✅ Zero downtime migration',
      '💰 40% infrastructure cost reduction',
      '⚡ 6x faster deployment cycles',
    ],
    icon: '☁️',
  },
  {
    title: 'FileNet to Cloud ECM Transformation',
    industry: 'Legal/Government',
    challenge: 'Government agency with 30-year legacy FileNet P8 system requiring modern cloud-native replacement.',
    solution: 'Evaluated and implemented alternative cloud ECM platform with custom migration tooling.',
    results: [
      '📄 Successfully migrated 2.5B documents',
      '⏱️ 95% faster processing',
      '🔒 Enhanced security and compliance',
    ],
    icon: '📁',
  },
  {
    title: 'Real-Time Data Platform',
    industry: 'E-Commerce',
    challenge: 'E-commerce platform needed real-time analytics for 1M+ daily transactions.',
    solution: 'Built Kafka-based streaming pipeline with Snowflake data warehouse and real-time dashboards.',
    results: [
      '⚡ Real-time insights (sub-second latency)',
      '📊 99.99% uptime',
      '💵 $1.5M revenue uplift through data-driven decisions',
    ],
    icon: '⚡',
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Case Studies & Success Stories</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Real-world transformations demonstrating our expertise in AI, cloud modernization, and enterprise solutions
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                {/* Case Study Header */}
                <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-6 border-b border-gray-200">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{study.icon}</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {study.title}
                      </h3>
                    </div>
                    <span className="inline-block bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
                      {study.industry}
                    </span>
                  </div>
                </div>

                {/* Case Study Content */}
                <div className="p-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Challenge */}
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-gray-900 flex items-center">
                        <span className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                          !
                        </span>
                        Challenge
                      </h4>
                      <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-gray-900 flex items-center">
                        <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                          💡
                        </span>
                        Solution
                      </h4>
                      <p className="text-gray-700 leading-relaxed">{study.solution}</p>
                    </div>

                    {/* Results */}
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-gray-900 flex items-center">
                        <span className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                          ✓
                        </span>
                        Results
                      </h4>
                      <ul className="space-y-3">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <span className="mr-2 flex-shrink-0">•</span>
                            <span className="leading-relaxed">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help you achieve similar results for your enterprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-lg"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/services"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-lg"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
