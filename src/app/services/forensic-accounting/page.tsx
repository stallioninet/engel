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
  title: 'Forensic Accounting Services Los Angeles | 30+ Years Experience | Engel & Engel',
  description: 'Los Angeles forensic accounting firm with 30+ years experience. 1,000+ cases, Big Four experience, 6 professional certifications, 20 research publications. Expert witness testimony.',
  openGraph: {
    title: 'Forensic Accounting Services Los Angeles | 30+ Years Experience',
    description: 'Los Angeles forensic accounting firm with 30+ years experience. 1,000+ cases, Big Four experience, expert witness testimony.',
    url: 'https://engelandengel.com/services/forensic-accounting',
    siteName: 'Engel & Engel LLP',
    images: [{ url: 'https://engelandengel.com/images/og-forensic-accounting.jpg', width: 1200, height: 630, alt: 'Forensic Accounting Services - Los Angeles' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forensic Accounting Services Los Angeles | 30+ Years Experience',
    description: 'Los Angeles forensic accounting firm with 30+ years experience. 1,000+ cases, Big Four experience, expert witness testimony.',
    images: ['https://engelandengel.com/images/twitter-forensic-accounting.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: 'https://engelandengel.com/services/forensic-accounting' },
}

export default function ForensicAccountingPage() {
  const faqItems = [
    { question: "What is forensic accounting?", answer: "Forensic accounting combines accounting, auditing, and investigative skills to examine financial records for use in legal proceedings. We analyze financial data to uncover fraud, quantify damages, trace assets, and provide expert witness testimony in litigation." },
    { question: "How much do forensic accounting services cost?", answer: "Forensic accounting fees vary based on case complexity, scope of work, and time required. We offer transparent pricing and work with clients to develop cost-effective investigation strategies. Contact us for a free consultation to discuss your specific needs." },
    { question: "What types of cases do you handle?", answer: "We handle a wide range of cases including fraud investigations, economic damages analysis, business valuations, bankruptcy matters, intellectual property disputes, employment litigation, partnership disputes, and more. Our experience spans over 1,000 cases across diverse industries." },
    { question: "Do you provide expert witness testimony?", answer: "Yes, we have provided expert testimony in over 100 cases in state, federal, and bankruptcy courts. Our credentials include six professional certifications, 20 research publications, and Big Four forensic accounting experience, providing the credibility needed in high-stakes litigation." },
    { question: "How long does a forensic accounting investigation take?", answer: "Investigation timelines vary based on case complexity, volume of records, and scope of work. Simple cases may take a few weeks, while complex matters can take several months. We work efficiently to meet court deadlines and provide regular progress updates throughout the investigation." }
  ]

  return (
    <main>
      <SchemaMarkup type="Organization" data={{ address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" }, socialMedia: ["https://www.linkedin.com/company/engel-engel-llp"] }} />
      <SchemaMarkup type="LocalBusiness" data={{ address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" }, geo: { latitude: "34.0522", longitude: "-118.2437" } }} />
      <SchemaMarkup type="ProfessionalService" data={{ name: "Forensic Accounting Services", description: "Forensic accounting and expert witness services in Los Angeles", serviceType: "Forensic Accounting", address: { street: "11766 Wilshire Blvd, Suite 1170", zip: "90025" } }} />
      <SchemaMarkup type="HowTo" data={{
        name: "How Forensic Accounting Works",
        description: "Our proven 5-step forensic accounting process",
        steps: [
          { name: "Initial Assessment", text: "Comprehensive evaluation of the case and development of investigation strategy." },
          { name: "Evidence Gathering", text: "Systematic collection and preservation of financial records and digital evidence." },
          { name: "Forensic Analysis", text: "Detailed analysis using specialized investigatory techniques and analytical tools." },
          { name: "Report Preparation", text: "Preparation of comprehensive reports with findings and expert opinions." },
          { name: "Expert Testimony", text: "Court testimony and litigation support as needed." }
        ]
      }} />
      <SchemaMarkup type="FAQ" data={{ questions: faqItems }} />
      
      <Header />
      
      <section className="pt-16 lg:pt-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container-custom py-20">
          <Breadcrumbs items={[
            { label: 'Services', href: '/services' },
            { label: 'Forensic Accounting', href: '/services/forensic-accounting' }
          ]} />
          
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Forensic Accounting Services</h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
              Over 30 years of forensic accounting expertise serving Los Angeles law firms, corporations, and private companies in complex financial litigation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:(310) 277-2220"><Button size="xl" className="bg-white text-primary-900 hover:bg-gray-100">Call (310) 277-2220</Button></a>
              <Link href="/contact"><Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-900">Free Consultation</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            
            <div className="mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Engel & Engel is a Los Angeles forensic accounting firm. For over 30 years, we have provided clients with high-level forensic accounting services. Our clients include top law firms, public corporations, and private companies, seeking forensic accounting services on a variety of litigation issues for both plaintiffs and defendants. Our experience includes testifying in state, federal, and bankruptcy courts.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We rely on decades of experience and powerful analytical tools to expose hidden transactions, detect manipulated and erroneous information, and identify inconsistencies contained in relevant business records. We work with trial counsel to build a compelling forensic analysis that is understandable to judges and juries. With six professional certifications, extensive experience, and 20 research publications, clients can be confident that our forensic accounting analyses are consistent with established legal and financial principles that can withstand the scrutiny of the court.
              </p>
            </div>

            <div className="mb-12 bg-primary-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Forensic Accounting in Los Angeles</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Serving Los Angeles County, Orange County, Ventura County, San Bernardino County, Riverside County, and throughout Southern California. Our Los Angeles office provides comprehensive forensic accounting services for attorneys and businesses throughout the region.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you need a forensic accountant for cases in downtown Los Angeles, Santa Monica, Beverly Hills, Pasadena, Irvine, San Diego, or anywhere in California, our team is ready to assist with fraud investigations, economic damages analysis, and expert witness testimony.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">When the Stakes Are High</h2>
              <p className="text-lg text-gray-700 mb-8">Engel & Engel can serve as your expert in connection with the following:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Economic Damages", desc: "Contract damages, lost profits, fraud damages, IP infringement, business interruption, employment damages.", link: "/practice-areas/economic-damages" },
                  { title: "Fraud Investigation", desc: "Contract fraud, embezzlement, Ponzi schemes, securities fraud, money laundering, bankruptcy fraud.", link: "/practice-areas/fraud-investigation" },
                  { title: "Business Valuation", desc: "Corporate valuation, minority shareholder valuation, M&A, dissolutions, shareholder disputes.", link: "/practice-areas/business-valuation" },
                  { title: "Bankruptcy & Insolvency", desc: "Solvency analysis, preference analysis, fraudulent transfers, reorganization plans.", link: "/practice-areas/bankruptcy-insolvency" },
                  { title: "IP Litigation", desc: "Infringement damages, trade secret misappropriation, lost profits, reasonable royalty analysis.", link: "/practice-areas/ip-litigation" },
                  { title: "Real Estate Litigation", desc: "Ownership disputes, capital contribution issues, hidden distributions, partnership agreements.", link: "/practice-areas/real-estate-litigation" },
                  { title: "Construction Litigation", desc: "Construction fraud, delay damages, defect damages, change order analysis, Eichleay formula.", link: "/practice-areas/construction-litigation" },
                  { title: "Expert Witness Testimony", desc: "Court-tested testimony in state, federal, and bankruptcy courts with 100+ cases.", link: "/services/expert-witness-testimony" },
                ].map((service, index) => (
                  <Link key={index} href={service.link}>
                    <Card className="h-full hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                      <CardHeader>
                        <CardTitle className="text-xl text-primary-700 hover:text-primary-900">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{service.desc}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Forensic Accounting Process</h2>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Initial Assessment", desc: "Comprehensive evaluation of the case and development of investigation strategy." },
                  { step: "2", title: "Evidence Gathering", desc: "Systematic collection and preservation of financial records and digital evidence." },
                  { step: "3", title: "Forensic Analysis", desc: "Detailed analysis using specialized investigatory techniques and analytical tools to expose hidden transactions and detect manipulated information." },
                  { step: "4", title: "Report Preparation", desc: "Preparation of comprehensive reports with findings, expert opinions, and visual exhibits for court presentation." },
                  { step: "5", title: "Expert Testimony", desc: "Court testimony and litigation support with clear, concise presentation of complex financial concepts." }
                ].map((item) => (
                  <div key={item.step} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Engel & Engel</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Six Professional Certifications</h3>
                  <p className="text-gray-600">CPA, CFE, CIRA, CVA, MAFF, ABV credentials demonstrating expertise across forensic accounting disciplines.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">20 Research Publications</h3>
                  <p className="text-gray-600">Extensive research and thought leadership in forensic accounting, economic damages, and expert witness testimony.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">1,000+ Cases</h3>
                  <p className="text-gray-600">Over 30 years of experience handling complex forensic accounting matters for top law firms and corporations.</p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "Expert Witness Testimony", href: "/services/expert-witness-testimony" },
                  { name: "Joint Retention Program", href: "/services/joint-retention-program" },
                  { name: "Internal Investigations", href: "/services/internal-investigations" },
                  { name: "Economic Damages", href: "/practice-areas/economic-damages" },
                  { name: "Fraud Investigation", href: "/practice-areas/fraud-investigation" },
                  { name: "Business Valuation", href: "/practice-areas/business-valuation" }
                ].map((area, index) => (
                  <Link key={index} href={area.href}>
                    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-primary-700 hover:text-primary-900">{area.name}</h3>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <FAQ items={faqItems} />

      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Forensic Accounting Services?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Contact Brandon J. Engel, CPA/ABV/CFF, CVA, MAFF for a consultation on your forensic accounting needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="tel:(310) 277-2220"><Button size="xl" className="bg-white text-primary-900 hover:bg-gray-100">Call (310) 277-2220</Button></a>
              <a href="mailto:brandon@engelandengel.com"><Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-900">Email Brandon</Button></a>
            </div>
            <p className="text-primary-200">Serving Los Angeles, Orange County, and all of California</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

