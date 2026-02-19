import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function IntroSection() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-20 -z-10" />
      
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Tagline */}
          <div className="text-center mb-12">
            <div className="inline-block">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary-600" />
                <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
                  From Strategy to Testimony
                </span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary-600" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Engel & Engel LLP
              </h2>
              <p className="text-xl md:text-2xl text-primary-700 font-medium">
                Los Angeles Forensic Accounting Firm
              </p>
            </div>
          </div>

          {/* Main Content - Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
            {/* Left Column - Established & Expertise */}
            <div className="h-full">
              <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl border border-primary-200 shadow-lg h-full flex flex-col">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Established 1994
                    </h3>
                    <p className="text-primary-700 font-semibold">
                      Premier Forensic Accounting Services
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                  Established in Los Angeles in 1994, <strong className="text-gray-900">Engel & Engel LLP</strong> has positioned itself as one of the premier providers of forensic accounting and advisory services, not only in California, but <strong className="text-gray-900">nationwide</strong> as well.
                </p>

                <div className="bg-white p-5 rounded-xl border border-primary-200 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center text-lg">
                    <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    We Serve:
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Private practice law firms</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>In-house counsel of Fortune 500 companies</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Middle-market companies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Services & Expertise */}
            <div className="h-full">
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-300 shadow-lg h-full flex flex-col">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Complex Litigation Support
                    </h3>
                    <p className="text-gray-600 font-semibold">
                      Comprehensive Business Litigation Services
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6 flex-grow">
                  {[
                    'Fraud Investigations',
                    'Economic Damages',
                    'Business Valuation',
                    'Bankruptcy & Insolvency',
                    'Alter Ego',
                    'IP Litigation',
                    'Employment Litigation',
                    'Real Estate Litigation',
                    'Construction Litigation',
                    'And More...'
                  ].map((service, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <svg className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>

                <Link href="/practice-areas">
                  <Button variant="outline" className="w-full border-primary-600 text-primary-700 hover:bg-primary-50">
                    View All Practice Areas
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Section - Experience & Credentials */}
          <div className="relative bg-gradient-to-r from-primary-50 via-white to-primary-50 rounded-2xl p-8 md:p-12 shadow-xl border border-primary-200 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 rounded-full blur-3xl opacity-40 -z-0" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-200 rounded-full blur-3xl opacity-30 -z-0" />

            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left - Experience Badge */}
                <div className="lg:col-span-3 text-center">
                  <div className="inline-block bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 shadow-xl border-4 border-primary-200">
                    <div className="text-6xl font-bold text-white mb-2">35+</div>
                    <div className="text-lg font-semibold text-white">Years of</div>
                    <div className="text-lg font-semibold text-white">Experience</div>
                    <div className="text-sm text-primary-100 mt-3 pt-3 border-t border-white/30">Since 1994</div>
                  </div>
                </div>

                {/* Right - Main Message */}
                <div className="lg:col-span-9 space-y-5">
                  <h3 className="text-2xl md:text-3xl font-bold leading-tight text-gray-900">
                    Credentials, Expertise & Careful Attention to Every Case
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    With over <strong className="text-primary-700">35 years in the forensic accounting industry</strong>, working with attorneys and legal teams in and out of the courtroom, Engel & Engel brings credentials, expertise, and careful attention to each and every case.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Our qualifications make us the right choice for <strong className="text-primary-700">developing thoughtful strategies</strong>, investigating the particulars, and finally, <strong className="text-primary-700">delivering analysis and calculations with sound and persuasive testimony</strong>.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link href="/contact">
                      <Button size="lg" className="bg-primary-600 text-white hover:bg-primary-700 shadow-lg">
                        <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Free Consultation
                      </Button>
                    </Link>
                    <Link href="/about">
                      <Button size="lg" variant="outline" className="border-2 border-primary-600 text-primary-700 hover:bg-primary-50 shadow-lg">
                        Learn More About Us
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { number: '500+', label: 'Expert Testimonies' },
              { number: '1,000+', label: 'Cases Resolved' },
              { number: '$2.3B', label: 'Largest Jury Award' },
              { number: '6', label: 'Professional Certifications' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all duration-200">
                <div className="text-3xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

