import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import SchemaMarkup from '@/components/seo/SchemaMarkup'
import FAQ from '@/components/seo/FAQ'
import Breadcrumbs from '@/components/seo/Breadcrumbs'

export const metadata = {
  title: 'Fraud Investigation Expert Witness | Los Angeles | Engel & Engel LLP',
  description: 'Certified Fraud Examiners (CFE) with hundreds of fraud investigations. Expert witness testimony in embezzlement, Ponzi schemes, securities fraud cases in Los Angeles and California.',

  // Open Graph
  openGraph: {
    title: 'Fraud Investigation Expert Witness | Los Angeles | Engel & Engel LLP',
    description: 'Certified Fraud Examiners (CFE) with hundreds of fraud investigations. Expert witness testimony in embezzlement, Ponzi schemes, securities fraud cases.',
    url: 'https://engelandengel.com/practice-areas/fraud-investigation',
    siteName: 'Engel & Engel LLP',
    images: [
      {
        url: 'https://engelandengel.com/images/og-fraud-investigation.jpg',
        width: 1200,
        height: 630,
        alt: 'Fraud Investigation Expert Witness Services - Los Angeles',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Fraud Investigation Expert Witness | Los Angeles',
    description: 'Certified Fraud Examiners. Hundreds of fraud investigations. Expert witness testimony in Los Angeles.',
    images: ['https://engelandengel.com/images/twitter-fraud-investigation.jpg'],
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
    canonical: 'https://engelandengel.com/practice-areas/fraud-investigation',
  },
}

export default function FraudInvestigationEnhancedPage() {
  const faqItems = [
    {
      question: "What types of fraud do you investigate?",
      answer: "We investigate all types of fraud including embezzlement, Ponzi schemes, securities fraud, bankruptcy fraud, insurance fraud, real estate fraud, healthcare fraud, and more. Our Certified Fraud Examiners have experience across 16+ fraud categories."
    },
    {
      question: "What credentials do your fraud investigators have?",
      answer: "Our team includes Certified Fraud Examiners (CFE), CPAs, and forensic accountants with specialized training in fraud detection and investigation. We have conducted hundreds of fraud investigations across diverse industries."
    },
    {
      question: "Can you provide expert witness testimony in fraud cases?",
      answer: "Yes, we regularly provide expert witness testimony in fraud cases. Our experts have testified in federal and state courts, and our testimony has withstood Daubert challenges and rigorous cross-examination."
    },
    {
      question: "How long does a fraud investigation take?",
      answer: "The timeline varies based on case complexity, but most investigations take 2-6 months. We work efficiently to gather evidence, analyze financial records, and prepare comprehensive reports for litigation."
    },
    {
      question: "Do you work with law enforcement on fraud cases?",
      answer: "Yes, we frequently collaborate with law enforcement agencies, regulatory bodies, and attorneys on fraud investigations. We can coordinate with criminal and civil proceedings."
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
          name: "Fraud Investigation Expert Witness Services",
          description: "Certified Fraud Examiners conducting comprehensive fraud investigations in Los Angeles and throughout California",
          serviceType: "Forensic Accounting - Fraud Investigation",
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
          name: "How to Conduct a Fraud Investigation",
          description: "Our proven 5-step process for conducting comprehensive fraud investigations",
          steps: [
            {
              name: "Initial Assessment",
              text: "Evaluate fraud allegations and determine investigation scope and methodology."
            },
            {
              name: "Evidence Collection",
              text: "Gather financial records, documents, and electronic evidence relevant to the fraud scheme."
            },
            {
              name: "Forensic Analysis",
              text: "Analyze financial data to trace funds, identify patterns, and quantify losses."
            },
            {
              name: "Report Preparation",
              text: "Prepare detailed investigation reports documenting findings and supporting evidence."
            },
            {
              name: "Expert Testimony",
              text: "Provide expert witness testimony explaining fraud schemes and financial analysis."
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
            { label: 'Fraud Investigation', href: '/practice-areas/fraud-investigation' }
          ]} />

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Fraud Investigation
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
              Certified Fraud Examiners with hundreds of fraud investigations across diverse schemes and industries.
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
                With the expertise of Certified Fraud Examiners, Engel & Engel has conducted hundreds of fraud investigations in connection with a variety of fraudulent schemes for both plaintiffs and defendants. We apply cutting-edge investigatory techniques to separate fact from fiction and reconstruct a truthful picture of the relevant financial facts.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We rely on decades of experience and powerful analytical tools to expose hidden transactions, detect manipulated and erroneous information, and identify inconsistencies contained in relevant business records. Overall, Engel & Engel has the qualifications and experience to conduct fraud investigations that are consistent with established financial principles and can withstand the scrutiny of the court.
              </p>
            </div>

            {/* Local SEO Content */}
            <div className="mb-12 bg-primary-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Fraud Investigation Expert Witness in Los Angeles
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Serving Los Angeles County, Orange County, Ventura County, San Bernardino County, Riverside County, and throughout Southern California. Our Los Angeles office provides comprehensive fraud investigation services for attorneys and businesses throughout the region.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you need a fraud investigation expert for cases in downtown Los Angeles, Santa Monica, Beverly Hills, Pasadena, Irvine, San Diego, or anywhere in California, our Certified Fraud Examiners are ready to assist with embezzlement cases, Ponzi schemes, securities fraud, and all types of financial fraud investigations.
              </p>
            </div>

            {/* Related Services - Internal Linking */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Forensic Accounting Services</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our fraud investigation services often complement other forensic accounting specialties:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link href="/practice-areas/economic-damages">
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary-600">Economic Damages</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">
                        Quantify financial losses resulting from fraud schemes and fraudulent conduct.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/practice-areas/fraudulent-transfers">
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary-600">Fraudulent Transfers</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">
                        Trace and recover assets transferred to defraud creditors or hide fraud proceeds.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/practice-areas/bankruptcy-insolvency">
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary-600">Bankruptcy Fraud</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">
                        Investigate bankruptcy fraud, hidden assets, and fraudulent bankruptcy filings.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/practice-areas/alter-ego">
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary-600">Alter Ego</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">
                        Uncover alter ego relationships used to perpetrate fraud or hide assets.
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
                        Value businesses affected by fraud or determine losses from fraudulent schemes.
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
                        Investigate fraud allegations in partnership and shareholder disputes.
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>

            {/* How Engel & Engel Helps in Fraud Investigations - FROM ORIGINAL SITE */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How Engel & Engel Helps in Fraud Investigations</h2>
              <p className="text-lg text-gray-700 mb-8">
                When the stakes are high, Engel & Engel can serve as your expert in investigating, detecting and uncovering financial fraud in connection with the following:
              </p>
              
              {/* ALL 16 FRAUD TYPES FROM ORIGINAL SITE - Professional Clean Design */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Contract Fraud</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Investigation of fraudulent contracts, bid rigging, and contract manipulation schemes.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Money Laundering</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Tracing illicit funds through complex financial transactions and identifying money laundering schemes.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Misappropriation of Funds</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Detection of unauthorized use or theft of company funds and assets.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Securities Fraud</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Investigation of insider trading, stock manipulation, and securities violations.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Fraudulent & Misleading Financial Statements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Detection of fraudulent financial reporting and manipulation of financial statements.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Construction Fraud</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Investigation of construction bid rigging, inflated costs, and contractor fraud.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Insurance Fraud</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Investigation of fraudulent insurance claims and staged accidents.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Embezzlement Schemes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Detection of employee theft and misappropriation of company assets.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Ponzi Schemes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Investigation of investment fraud and pyramid schemes.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Employee Embezzlement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Investigation of internal theft by employees and executives.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">International Money Laundering</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Tracing funds across international borders and offshore accounts.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Bankruptcy Fraud</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Detection of fraudulent bankruptcy filings and asset concealment.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Tracing of Fraudulent Funds</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Following the trail of stolen or misappropriated funds through complex transactions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Real Estate Fraud</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Investigation of property fraud, mortgage fraud, and real estate scams.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Inventory Fraud</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Detection of inventory theft, phantom inventory, and inventory manipulation.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-700">Expert Witness Testimony</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Professional expert witness services for fraud-related litigation and court proceedings.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Our Investigation Process */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Investigation Process</h2>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Initial Assessment</h3>
                      <p className="text-gray-600">
                        Rapid evaluation of the suspected fraud, preservation of evidence, and development of investigation strategy.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Evidence Collection</h3>
                      <p className="text-gray-600">
                        Systematic gathering and analysis of financial records, electronic data, and supporting documentation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Financial Analysis</h3>
                      <p className="text-gray-600">
                        Detailed examination of financial transactions, patterns, and anomalies to identify fraudulent activities.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Damage Quantification</h3>
                      <p className="text-gray-600">
                        Calculation of financial losses, including direct losses, consequential damages, and recovery potential.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">5</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Reporting & Testimony</h3>
                      <p className="text-gray-600">
                        Comprehensive investigation report and expert witness testimony for litigation or regulatory proceedings.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Engel & Engel</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Certified Expertise</h3>
                  <p className="text-gray-600">
                    Certified Fraud Examiners (CFE) and Certified Public Accountants (CPA) with specialized fraud investigation training.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Proven Track Record</h3>
                  <p className="text-gray-600">
                    Hundreds of successful fraud investigations with significant recoveries and successful prosecutions.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Court-Tested Methods</h3>
                  <p className="text-gray-600">
                    Investigations consistent with established financial principles that withstand the scrutiny of the court.
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
                Need a Fraud Investigation Expert?
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

