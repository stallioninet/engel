import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TeamHeroVariation4 from '@/components/team-hero-variations/TeamHeroVariation4';

// Team member data with exact content from current website
const teamMembers = [
  {
    slug: 'jason-a-engel',
    name: 'Jason A. Engel',
    credentials: 'CPA, CFE, CIRA, CVA, MAFF, ABV',
    title: 'Managing Partner & Senior Forensic Accountant',
    experience: '35+ Years',
    phone: '(310) 277-2220',
    directPhone: '(310) 579-0114',
    email: 'jasonengel@engelandengel.com',
    linkedin: 'jason-engel-cpa-cfe-cira-cva-maff-abv-8a44a84',
    image: '/images/team/jason-engel.jpg',
    pdfQualifications: '/pdfs/jason-engel-qualifications.pdf',
    overview: `Jason A. Engel, CPA, CFE, CIRA, CVA, MAFF, ABV is a forensic accountant and expert witness with over 35 years of experience in over 1,000 forensic accounting cases and has testified as an expert witness in deposition and trial over 100 times. Jason's forensic experience includes conducting financial investigations in connection with civil and criminal matters. Jason has provided the following forensic accounting services to top law firms, private and public companies, non-profits, government agencies, and local police departments:

• Fraud Investigations
• Economic Damage Calculations
• Business Valuations
• Bankruptcy and Insolvency
• Alter Ego
• Fraudulent Transfers
• Business Interruption
• Intellectual Property Litigation
• Real Estate Litigation
• Probate/Trust Litigation
• Construction Litigation
• Employment Litigation
• Personal Injury
• Partnership/Shareholder Disputes

Jason's experience and expertise is highlighted in his skills and ability to investigate financial records and uncover discrepancies, hidden transactions, misstatements, fraud, and misappropriations. As a Certified Fraud Examiner (CFE), Jason possesses specialized knowledge in investigating a variety of complex financial fraud schemes including international money laundering, embezzlement, fraudulent transfers, alter ego, and misappropriation of assets. As a highly skilled forensic investigator, Jason also has specialized knowledge and experience in tracing funds in accordance with established legal and financial principles.`,
    practiceAreas: [
      'Fraud Investigations',
      'Economic Damage Calculations',
      'Business Valuations',
      'Bankruptcy and Insolvency',
      'Alter Ego',
      'Fraudulent Transfers',
      'Business Interruption',
      'Intellectual Property Litigation',
      'Real Estate Litigation',
      'Construction Litigation',
      'Employment Litigation',
      'Personal Injury',
      'Partnership / Shareholder Disputes'
    ]
  },
  {
    slug: 'brandon-j-engel',
    name: 'Brandon J. Engel',
    credentials: 'CPA, CFE',
    title: 'Partner & Forensic Accountant',
    experience: '10+ Years',
    phone: '(310) 277-2220',
    extension: 'Ext. 3',
    directPhone: '(310) 579-0115',
    email: 'brandon@engelandengel.com',
    linkedin: 'brandon-engel',
    image: '/images/team/brandon-engel.jpg',
    pdfQualifications: '/pdfs/brandon-engel-qualifications.pdf',
    overview: `Brandon J. Engel, CPA, CFE is a forensic accountant with over 10 years of experience in over 200 forensic accounting cases and has testified as an expert witness in deposition and trial. Brandon's forensic experience includes conducting financial investigations in connection with civil and criminal matters. Brandon has provided the following forensic accounting services to top law firms, private and public companies, non-profits, government agencies, and local police departments:

• Fraud Investigations
• Economic Damage Calculations
• Business Valuations
• Bankruptcy and Insolvency
• Alter Ego
• Fraudulent Transfers
• Business Interruption
• Intellectual Property Litigation
• Real Estate Litigation
• Probate/Trust Litigation
• Construction Litigation
• Employment Litigation
• Personal Injury
• Partnership/Shareholder Disputes

Brandon's experience and expertise is highlighted in his skills and ability to investigate financial records and uncover discrepancies, hidden transactions, misstatements, fraud, and misappropriations. As a Certified Fraud Examiner (CFE), Brandon possesses specialized knowledge in investigating a variety of complex financial fraud schemes including international money laundering, embezzlement, fraudulent transfers, alter ego, and misappropriation of assets. As a highly skilled forensic investigator, Brandon also has specialized knowledge and experience in tracing funds in accordance with established legal and financial principles.

Fraud Investigation:
Brandon has conducted over 50 fraud investigations involving a wide variety of fraudulent schemes. Brandon's experience and expertise in conducting fraud investigations is illustrated in his tracing of approximately $20 million of fraudulent funds that were laundered through over 150 U.S., Swiss, and Korean bank accounts to real estate, luxury cars, and Swiss bank accounts. Brandon has also assisted a local Los Angeles police detective in uncovering and documenting financial fraud and embezzlement.

Economic Damages:
Brandon has prepared over 100 economic damage calculations in a wide variety of litigation matters and industries. Brandon's experience and expertise includes developing complex damage models that are consistent with established legal principles and able to withstand the scrutiny of the court.

Business Valuation:
Brandon has been involved in a variety of business valuation engagements among a broad array of industries. Brandon's business valuation expertise includes conducting various business valuation approaches including market analysis, capitalization of earnings, discounted cash flow, book value, liquidation value, public company guideline method, and other generally accepted valuation methods.

Education, Certifications, and Professional Associations:
• Bachelor of Science in Accounting from California State University, Northridge
• Certified Public Accountant (CPA)
• Certified Fraud Examiner (CFE)
• Member of the American Institute of Certified Public Accountants (AICPA)
• Member of the Association of Certified Fraud Examiners (AFCE)
• Member of the California Society of CPAs`,
    practiceAreas: [
      'Fraud Investigations',
      'Economic Damage Calculations',
      'Business Valuations',
      'Bankruptcy and Insolvency',
      'Alter Ego',
      'Fraudulent Transfers',
      'Business Interruption',
      'Intellectual Property Litigation',
      'Real Estate Litigation',
      'Construction Litigation',
      'Employment Litigation',
      'Personal Injury',
      'Partnership / Shareholder Disputes'
    ]
  },
  {
    slug: 'douglas-h-engel',
    name: 'Douglas H. Engel',
    credentials: 'CPA, MBA',
    title: 'Tax & Business Consultant',
    experience: '45+ Years',
    phone: '(310) 277-2220',
    directPhone: '(818) 710-0071',
    email: 'douglas@engelandengel.com',
    linkedin: 'douglasengelcpa',
    image: '/images/team/douglas-engel.jpg',
    pdfQualifications: '/pdfs/douglas-engel-qualifications.pdf',
    overview: `Mr. Douglas Engel has been engaged in public accounting since 1976, with an emphasis in tax and business consulting to high net worth individuals and related closely-held entities. In addition, he has provided forensic accounting services in connection with tax malpractice, tax issues in bankruptcy, tax issues in employee benefit plans and a variety of tax controversies.

Mr. Engel's tax experience extends to the areas of real estate, health care, partnerships, limited liability companies, trusts, sub-chapter S corporations and foreign trusts. In this regard, he has provided services that include tax planning, estate planning, wealth succession, business consulting, partnership restructuring and partnership workouts, IRS/FTB disputes and resolutions.

Mr. Engel's forensic tax experience includes tax services in bankruptcy matters for creditors, debtors, and trustees. In addition, he has been appointed by the court to act as a guardian of financial assets. He has also served as an expert witness in tax matters and related financial issues.

Mr. Engel graduated from the City University of New York, Herbert H. Lehman College with a Bachelor of Science in Accounting. He also holds a Master of Business Administration in Taxation from Golden Gate University.

He is a member of the California Society of Certified Public Accountants and the American Institute of Certified Public Accountants.`,
    practiceAreas: [
      'Real Estate Taxation',
      'Estate Planning',
      'IRS and FTB Disputes',
      'Tax Consulting',
      'Litigation Support Services'
    ]
  }
];

export default function TeamMemberPage({ params }: { params: { slug: string } }) {
  const member = teamMembers.find((m) => m.slug === params.slug);

  if (!member) {
    return <div>Member not found</div>;
  }

  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: member.name,
    jobTitle: member.title,
    worksFor: {
      '@type': 'Organization',
      name: 'Engel & Engel LLP',
    },
    email: member.email,
    telephone: member.phone,
    image: member.image,
    url: `https://engeldemo.vercel.app/team/${member.slug}`,
    sameAs: member.linkedin ? `https://www.linkedin.com/in/${member.linkedin}` : undefined,
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section - Diagonal Split Design */}
        <TeamHeroVariation4 member={member} />

        {/* Main Content Tabs */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            {/* Overview Section - More Engaging */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12">
              {/* Header with Gradient */}
              <div className="bg-gradient-to-r from-primary-900 via-primary-800 to-primary-700 px-8 md:px-12 py-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                      Professional Overview
                    </h2>
                    <p className="text-primary-100 text-lg">
                      Expert Forensic Accountant & Witness
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12">
                {/* Key Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-xl p-6 border border-primary-200">
                    <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="text-3xl font-bold text-primary-900 mb-2">500+</div>
                    <div className="text-sm font-semibold text-primary-700">Cases Successfully Handled</div>
                  </div>
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-xl p-6 border border-primary-200">
                    <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                    <div className="text-3xl font-bold text-primary-900 mb-2">100+</div>
                    <div className="text-sm font-semibold text-primary-700">Expert Witness Testimonies</div>
                  </div>
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-xl p-6 border border-primary-200">
                    <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div className="text-3xl font-bold text-primary-900 mb-2">{member.experience}</div>
                    <div className="text-sm font-semibold text-primary-700">Professional Experience</div>
                  </div>
                </div>

                {/* Main Overview Text */}
                <div className="prose prose-lg max-w-none mb-8">
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p className="text-xl font-semibold text-gray-900 mb-4">
                      {member.name} is a leading forensic accounting expert with an exceptional track record
                      in complex financial investigations and expert witness testimony.
                    </p>
                    <p className="whitespace-pre-line">
                      {member.overview}
                    </p>
                  </div>
                </div>

                {/* Expertise Areas */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </span>
                    Core Competencies
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Fraud Investigation</h4>
                        <p className="text-sm text-gray-600">Expert in uncovering complex financial fraud schemes</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Economic Damages</h4>
                        <p className="text-sm text-gray-600">Precise calculation of financial losses and damages</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Business Valuation</h4>
                        <p className="text-sm text-gray-600">Comprehensive valuation across multiple industries</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Expert Testimony</h4>
                        <p className="text-sm text-gray-600">Compelling courtroom presentations and depositions</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Bankruptcy & Insolvency</h4>
                        <p className="text-sm text-gray-600">Specialized knowledge in restructuring matters</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Forensic Analysis</h4>
                        <p className="text-sm text-gray-600">Advanced investigative techniques and methodologies</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Practice Areas */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6 border-b-4 border-primary-500 pb-4">
                Practice Areas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {member.practiceAreas.map((area, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary-50 to-purple-50 rounded-lg hover:shadow-md transition-shadow">
                    <span className="text-primary-600 text-xl mt-1">✓</span>
                    <span className="text-gray-800 font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-gradient-to-br from-primary-900 via-primary-800 to-purple-900 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work with {member.name.split(' ')[0]}?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your forensic accounting needs and how we can help with your case.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={`tel:${member.phone}`}>
                <Button size="lg" className="bg-white text-primary-900 hover:bg-gray-100 shadow-xl">
                  <span className="mr-2">📞</span>
                  Call {member.phone}
                </Button>
              </a>
              <a href={`mailto:${member.email}`}>
                <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary-900 shadow-xl">
                  <span className="mr-2">✉️</span>
                  Send Email
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary-900 shadow-xl">
                  <span className="mr-2">📝</span>
                  Contact Form
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/team" className="group">
                <div className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary-500">
                  <div className="text-4xl mb-4">👥</div>
                  <h3 className="text-2xl font-bold text-primary-900 mb-3 group-hover:text-primary-600 transition-colors">
                    Our Team
                  </h3>
                  <p className="text-gray-700">
                    Meet all of our experienced forensic accounting professionals
                  </p>
                </div>
              </Link>

              <Link href="/practice-areas" className="group">
                <div className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary-500">
                  <div className="text-4xl mb-4">⚖️</div>
                  <h3 className="text-2xl font-bold text-primary-900 mb-3 group-hover:text-primary-600 transition-colors">
                    Practice Areas
                  </h3>
                  <p className="text-gray-700">
                    Explore our comprehensive forensic accounting services
                  </p>
                </div>
              </Link>

              <Link href="/contact" className="group">
                <div className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary-500">
                  <div className="text-4xl mb-4">📞</div>
                  <h3 className="text-2xl font-bold text-primary-900 mb-3 group-hover:text-primary-600 transition-colors">
                    Contact Us
                  </h3>
                  <p className="text-gray-700">
                    Get in touch to discuss your case and how we can help
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

