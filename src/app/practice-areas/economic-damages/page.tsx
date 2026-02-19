import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import FAQ from '@/components/seo/FAQ'
import SchemaMarkup from '@/components/seo/SchemaMarkup'
import Breadcrumbs from '@/components/seo/Breadcrumbs'

export const metadata = {
  title: 'Economic Damages Expert Witness | Los Angeles | Engel & Engel LLP',
  description: 'Over 1,000 economic damage analyses for business litigation. Master Analyst in Financial Forensics (MAFF) with 10+ research publications. Expert witness testimony in Los Angeles.',

  // Open Graph
  openGraph: {
    title: 'Economic Damages Expert Witness | Los Angeles | Engel & Engel LLP',
    description: 'Over 1,000 economic damage analyses for business litigation. Master Analyst in Financial Forensics (MAFF) with 10+ research publications. Expert witness testimony in Los Angeles.',
    url: 'https://engelandengel.com/practice-areas/economic-damages',
    siteName: 'Engel & Engel LLP',
    images: [
      {
        url: 'https://engelandengel.com/images/og-economic-damages.jpg',
        width: 1200,
        height: 630,
        alt: 'Economic Damages Expert Witness Services - Los Angeles',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Economic Damages Expert Witness | Los Angeles',
    description: 'Over 1,000 economic damage analyses. MAFF credentials. Expert witness testimony in Los Angeles.',
    images: ['https://engelandengel.com/images/twitter-economic-damages.jpg'],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Canonical
  alternates: {
    canonical: 'https://engelandengel.com/practice-areas/economic-damages',
  },
}

export default function EconomicDamagesEnhancedPage() {
  const faqItems = [
    {
      question: "What types of economic damages can you calculate?",
      answer: "We calculate all types of economic damages including lost profits, contract damages, fraud damages, IP infringement damages, business interruption, employment damages, and more. Our team has conducted over 1,000 economic damage analyses across diverse industries."
    },
    {
      question: "What credentials does your team have for economic damage analysis?",
      answer: "Our team includes a credentialed Master Analyst in Financial Forensics (MAFF), CPAs, and CFEs. We have published over 10 research publications on economic damages and have extensive courtroom experience as expert witnesses."
    },
    {
      question: "Can you calculate damages for an unestablished business?",
      answer: "Yes, we have specific expertise in calculating lost profits for unestablished businesses. This requires specialized methodologies and we have published research on this topic to ensure our calculations withstand court scrutiny."
    },
    {
      question: "Do you work for plaintiffs, defendants, or both?",
      answer: "We work for both plaintiffs and defendants in business litigation. Our objective is to provide accurate, defensible economic damage analyses that are consistent with established financial principles."
    },
    {
      question: "What makes your economic damage calculations defensible in court?",
      answer: "Our damage models are based on established financial principles, supported by extensive research and publications, and prepared by credentialed experts with over 1,000 analyses of experience. We ensure our work can withstand the scrutiny of the court."
    }
  ]

  return (
    <main>
      {/* Organization Schema */}
      <SchemaMarkup
        type="Organization"
        data={{
          address: {
            street: "11766 Wilshire Blvd, Suite 1170",
            zip: "90025"
          },
          socialMedia: [
            "https://www.linkedin.com/company/engel-engel-llp"
          ]
        }}
      />

      {/* LocalBusiness Schema */}
      <SchemaMarkup
        type="LocalBusiness"
        data={{
          address: {
            street: "11766 Wilshire Blvd, Suite 1170",
            zip: "90025"
          },
          geo: {
            latitude: "34.0522",
            longitude: "-118.2437"
          }
        }}
      />

      {/* Service Schema */}
      <SchemaMarkup
        type="ProfessionalService"
        data={{
          name: "Economic Damages Expert Witness Services",
          description: "Forensic analysis of economic damages for business litigation with over 1,000 damage analyses completed in Los Angeles and throughout California",
          serviceType: "Forensic Accounting",
          address: {
            street: "11766 Wilshire Blvd, Suite 1170",
            zip: "90025"
          }
        }}
      />

      {/* HowTo Schema */}
      <SchemaMarkup
        type="HowTo"
        data={{
          name: "How to Calculate Economic Damages",
          description: "Our proven 5-step process for calculating economic damages in business litigation",
          steps: [
            {
              name: "Initial Case Assessment",
              text: "Review case facts, legal theories, and available financial data to determine appropriate damage methodologies."
            },
            {
              name: "Data Collection & Analysis",
              text: "Gather and analyze financial records, industry data, and economic information relevant to the damage calculation."
            },
            {
              name: "Damage Model Development",
              text: "Build comprehensive damage models using established financial principles and industry-accepted methodologies."
            },
            {
              name: "Expert Report Preparation",
              text: "Prepare detailed expert reports that clearly explain the damage calculation and supporting analysis."
            },
            {
              name: "Deposition & Trial Testimony",
              text: "Provide clear, credible expert witness testimony that withstands cross-examination and court scrutiny."
            }
          ]
        }}
      />

      {/* FAQ Schema */}
      <SchemaMarkup
        type="FAQ"
        data={{
          questions: faqItems
        }}
      />

      <Header />
      
      {/* Hero Section */}
      <section className="pt-16 lg:pt-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container-custom py-20">
          <Breadcrumbs items={[
            { label: 'Practice Areas', href: '/practice-areas' },
            { label: 'Economic Damages', href: '/practice-areas/economic-damages' }
          ]} />
          
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Economic Damages
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
              Over 1,000 economic damage analyses with Master Analyst in Financial Forensics (MAFF) credentials and 10+ research publications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:(310) 277-2220">
                <Button size="xl" className="bg-white text-primary-900 hover:bg-gray-100">
                  Call (310) 277-2220
                </Button>
              </a>
              <Link href="/contact">
                <Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-900">
                  Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction - FROM ORIGINAL SITE */}
            <div className="mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Business litigation often requires a forensic analysis of economic damages. Engel & Engel has conducted over 1,000 economic damage analyses for both plaintiffs and defendants in a wide variety of industries. Our economic damage qualifications are highlighted with a credentialed Master Analyst in Financial Forensics (MAFF) and over 10 research publications in connection with economic damages.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Overall, Engel & Engel has the credentials and experience to prepare damage models that are consistent with established financial principles and are able to withstand the scrutiny of the court.
              </p>
            </div>

            {/* Local SEO Content */}
            <div className="mb-12 bg-primary-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Economic Damages Expert Witness in Los Angeles
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Serving Los Angeles County, Orange County, Ventura County, San Bernardino County, Riverside County, and throughout Southern California. Our Los Angeles office is conveniently located in Westwood, providing easy access for attorneys throughout the region.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you need an economic damages expert for cases in downtown Los Angeles, Santa Monica, Beverly Hills, Pasadena, Long Beach, or anywhere in California, our team is ready to provide comprehensive forensic accounting services and expert witness testimony.
              </p>
            </div>

            {/* Related Services - Internal Linking */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Services</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our economic damage calculations often work hand-in-hand with other forensic accounting services:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link href="/practice-areas/fraud-investigation">
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary-600">Fraud Investigation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">
                        Fraud damages often require comprehensive economic damage analysis to quantify losses.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/practice-areas/business-valuation">
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary-600">Business Valuation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">
                        Lost goodwill and business value calculations require expert valuation services.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/practice-areas/ip-litigation">
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary-600">IP Litigation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">
                        Patent and trademark infringement damages require specialized economic analysis.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/practice-areas/business-interruption">
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary-600">Business Interruption</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">
                        Calculate lost income and extra expenses during business interruption periods.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/practice-areas/employment-litigation">
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary-600">Employment Litigation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">
                        Employment damages include lost wages, benefits, and economic losses.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/practice-areas/partnership-disputes">
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary-600">Partnership Disputes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">
                        Shareholder and partnership disputes often require economic damage calculations.
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>

            {/* How Engel & Engel Helps - FROM ORIGINAL SITE */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                How Engel & Engel Helps Business Litigators With Economic Damage Analyses
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                When the stakes are high, Engel & Engel can serve as your expert in connection with the following:
              </p>
              
              {/* ALL 16 DAMAGE TYPES FROM ORIGINAL SITE - Professional Clean Design */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Contract Damages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Calculation of damages arising from breach of contract, including expectation and reliance damages.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Lost Profits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Comprehensive analysis of lost profits using established financial methodologies and industry benchmarks.
                    </p>
                  </CardContent>
                </Card>

                <Link href="/practice-areas/fraud-investigation" className="h-full">
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600 cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary-700">Fraud Damages</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">
                        Quantification of damages resulting from fraudulent activities and misrepresentation.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/practice-areas/business-valuation" className="h-full">
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600 cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary-700">Lost Goodwill</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">
                        Assessment of diminished business value and reputation resulting from wrongful acts.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Compensatory Damages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Calculation of damages to compensate for actual losses and make the injured party whole.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Out of Pocket Damages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Quantification of direct financial losses and expenses incurred due to wrongful conduct.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Mitigation Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Analysis of efforts to reduce damages and assessment of mitigation effectiveness.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Rescission Damages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Calculation of damages when a contract is rescinded and parties are returned to pre-contract positions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Reliance Damages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Quantification of expenses incurred in reliance on a contract or representation.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Benefit of the Bargain Damages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Assessment of the difference between what was promised and what was received.
                    </p>
                  </CardContent>
                </Card>

                <Link href="/practice-areas/ip-litigation" className="h-full">
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600 cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary-700">IP Infringement Damages</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">
                        Calculation of damages for patent, trademark, and copyright infringement cases.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/practice-areas/construction-litigation" className="h-full">
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600 cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary-700">Construction Damages & Delay Claims</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">
                        Analysis of construction project damages including delays, cost overruns, and defective work.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/practice-areas/business-interruption" className="h-full">
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600 cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary-700">Business Interruption Damages</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">
                        Quantification of lost income and extra expenses during business interruption periods.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Unestablished Business Damages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Specialized calculation of lost profits for new or unestablished businesses.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Reputational Damages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Assessment of damages to business reputation and brand value from defamation or wrongful acts.
                    </p>
                  </CardContent>
                </Card>

                <Link href="/practice-areas/employment-litigation" className="h-full">
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600 cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary-700">Employment Damages</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">
                        Calculation of lost wages, benefits, and economic losses in employment litigation.
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>

            {/* Research Publications - FROM ORIGINAL SITE */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Research Publications</h2>
              <p className="text-lg text-gray-700 mb-8">
                Engel & Engel has published various research publications in connection with the following topics relating to the Framework for the Calculation of Lost Profits:
              </p>

              <div className="bg-gray-50 rounded-2xl p-8">
                <ul className="space-y-4">
                  <li className="flex items-start group">
                    <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <Link href="/publications" className="text-gray-700 hover:text-primary-700 hover:underline transition-colors">
                      Framework for the Calculation of Lost Profits: Part I
                    </Link>
                  </li>
                  <li className="flex items-start group">
                    <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <Link href="/publications" className="text-gray-700 hover:text-primary-700 hover:underline transition-colors">
                      Framework for the Calculation of Lost Profits: Part II: "The Element of Certainty"
                    </Link>
                  </li>
                  <li className="flex items-start group">
                    <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <Link href="/publications" className="text-gray-700 hover:text-primary-700 hover:underline transition-colors">
                      Framework for the Calculation of Lost Profits: Part III: "Prospective Lost Profits"
                    </Link>
                  </li>
                  <li className="flex items-start group">
                    <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <Link href="/publications" className="text-gray-700 hover:text-primary-700 hover:underline transition-colors">
                      Framework for the Calculation of Lost Profits: Part IV: "Unestablished Businesses"
                    </Link>
                  </li>
                  <li className="flex items-start group">
                    <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <Link href="/publications" className="text-gray-700 hover:text-primary-700 hover:underline transition-colors">
                      Framework for the Calculation of Lost Profits: Part V: "Mitigation of Damages"
                    </Link>
                  </li>
                  <li className="flex items-start group">
                    <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <Link href="/publications" className="text-gray-700 hover:text-primary-700 hover:underline transition-colors">
                      Discounting Future Lost Profits
                    </Link>
                  </li>
                </ul>

                <div className="mt-8 text-center">
                  <Link href="/publications">
                    <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
                      View All Publications
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Our Process */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Economic Damage Analysis Process</h2>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Initial Case Assessment</h3>
                      <p className="text-gray-600">
                        Review case facts, legal theories, and available financial data to determine appropriate damage methodologies.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Collection & Analysis</h3>
                      <p className="text-gray-600">
                        Gather and analyze financial records, industry data, and economic information relevant to the damage calculation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Damage Model Development</h3>
                      <p className="text-gray-600">
                        Build comprehensive damage models using established financial principles and industry-accepted methodologies.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Report Preparation</h3>
                      <p className="text-gray-600">
                        Prepare detailed expert reports that clearly explain the damage calculation and supporting analysis.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">5</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Deposition & Trial Testimony</h3>
                      <p className="text-gray-600">
                        Provide clear, credible expert witness testimony that withstands cross-examination and court scrutiny.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us - Professional Clean Design */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Engel & Engel</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg border-t-4 border-t-primary-600 shadow-md hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-primary-700 mb-3">Master Analyst Credentials</h3>
                  <p className="text-gray-600">
                    Credentialed Master Analyst in Financial Forensics (MAFF) with CPA and CFE certifications.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg border-t-4 border-t-primary-600 shadow-md hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-primary-700 mb-3">Published Research</h3>
                  <p className="text-gray-600">
                    Over 10 research publications on economic damages demonstrating thought leadership and expertise.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg border-t-4 border-t-primary-600 shadow-md hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-primary-700 mb-3">Proven Track Record</h3>
                  <p className="text-gray-600">
                    Over 1,000 economic damage analyses completed for plaintiffs and defendants across diverse industries.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto">
              <FAQ items={faqItems} />
            </div>

            {/* Contact CTA - FROM ORIGINAL SITE */}
            <div className="bg-primary-50 rounded-2xl p-8 text-center mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need an Economic Damages Expert?
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                For additional information about Engel & Engel's Forensic Accounting Services or a consultation, please contact:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="text-center">
                  <p className="font-semibold text-gray-900">Brandon J. Engel, CPA, CFE</p>
                  <p className="text-gray-600">brandon@engelandengel.com</p>
                  <p className="text-gray-600">(310) 277-2220</p>
                </div>
                <div className="flex gap-3">
                  <a href="tel:(310) 277-2220">
                    <Button className="bg-primary-600 hover:bg-primary-700">Call Now</Button>
                  </a>
                  <Link href="/contact">
                    <Button variant="outline">Contact Us</Button>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

