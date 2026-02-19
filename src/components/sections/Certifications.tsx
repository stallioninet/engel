import React from 'react'
import Image from 'next/image'

interface CertificationsProps {
  title?: string
  subtitle?: string
  backgroundColor?: 'white' | 'gray' | 'primary'
  showTitle?: boolean
}

export default function Certifications({ 
  title = "Our Certifications", 
  subtitle = "The credibility of our testimony is enhanced by our exemplary credentials.",
  backgroundColor = 'white',
  showTitle = true
}: CertificationsProps) {
  
  const certifications = [
    {
      name: 'CPA',
      fullName: 'Certified Public Accountant',
      image: '/images/certifications/CPA.png',
      alt: 'AICPA - American Institute of CPAs'
    },
    {
      name: 'CFE',
      fullName: 'Certified Fraud Examiner',
      image: '/images/certifications/CFE.png',
      alt: 'ACFE - Association of Certified Fraud Examiners'
    },
    {
      name: 'CIRA',
      fullName: 'Certified Insolvency & Restructuring Advisor',
      image: '/images/certifications/CIRA.png',
      alt: 'AIRA - Association of Insolvency & Restructuring Advisors'
    },
    {
      name: 'CVA',
      fullName: 'Certified Valuation Analyst',
      image: '/images/certifications/CVA.png',
      alt: 'NACVA - National Association of Certified Valuators and Analysts'
    },
    {
      name: 'MAFF',
      fullName: 'Master Analyst in Financial Forensics',
      image: '/images/certifications/MAFF.png',
      alt: 'MAFF - Master Analyst in Financial Forensics'
    },
    {
      name: 'ABV',
      fullName: 'Accredited in Business Valuation',
      image: '/images/certifications/ABV.png',
      alt: 'ABV - Accredited in Business Valuation'
    }
  ]

  const bgColorClass = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary-50'
  }[backgroundColor]

  return (
    <section className={`section-padding ${bgColorClass}`}>
      <div className="container-custom">
        {showTitle && (
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{title}</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center group"
            >
              <div className="relative w-full aspect-square max-w-[180px] transition-all duration-300 group-hover:scale-110">
                <Image
                  src={cert.image}
                  alt={cert.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
              <p className="mt-4 text-sm font-semibold text-gray-700 text-center group-hover:text-primary-700 transition-colors">
                {cert.name}
              </p>
              <p className="text-xs text-gray-500 text-center mt-1 hidden md:block">
                {cert.fullName}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

