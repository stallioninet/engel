import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function ContactCTA() {
  return (
    <section className="section-padding bg-primary-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-600 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary-500 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Time is Critical in Financial Investigations
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              The longer fraud goes undetected, the greater the damage. Don't wait – 
              get expert forensic accounting analysis to protect your interests and recover your losses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contact">
                <Button size="xl" className="bg-white text-primary-900 hover:bg-gray-100 text-lg px-8 py-4">
                  Get Free Consultation
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </Link>
              <a href="tel:+13102772220">
                <Button
                  variant="outline"
                  size="xl"
                  className="border-white text-white hover:bg-white hover:text-primary-900 text-lg px-8 py-4"
                >
                  Call Now: (310) 277-2220
                </Button>
              </a>
            </div>
            
            <p className="text-primary-200 text-sm">
              ✓ Free initial consultation  ✓ 24/7 emergency response  ✓ Confidential & secure
            </p>
          </div>

          {/* Contact Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Emergency Response */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Emergency Response</h3>
              <p className="text-primary-100 mb-4 text-sm">
                Urgent fraud investigation needed? We respond within 24 hours, 24/7.
              </p>
              <a href="tel:+13102772220">
                <Button variant="outline" size="sm" className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white">
                  Call Emergency Line
                </Button>
              </a>
            </div>

            {/* New Clients */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">New Clients</h3>
              <p className="text-primary-100 mb-4 text-sm">
                Schedule a free consultation to discuss your case and explore solutions.
              </p>
              <Link href="/contact">
                <Button variant="outline" size="sm" className="border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-white">
                  Schedule Consultation
                </Button>
              </Link>
            </div>

            {/* Existing Clients */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Existing Clients</h3>
              <p className="text-primary-100 mb-4 text-sm">
                Access your secure client portal or request additional services.
              </p>
              <Link href="/portal">
                <Button variant="outline" size="sm" className="border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white">
                  Client Portal
                </Button>
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-primary-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="font-semibold">Phone</span>
                </div>
                <p className="text-primary-100">(310) 277-2220</p>
                <p className="text-primary-200 text-sm">24/7 Emergency Line</p>
              </div>
              
              <div>
                <div className="flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-primary-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="font-semibold">Email</span>
                </div>
                <p className="text-primary-100">info@engelengel.com</p>
                <p className="text-primary-200 text-sm">Secure & Confidential</p>
              </div>
              
              <div>
                <div className="flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-primary-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">Office</span>
                </div>
                <p className="text-primary-100">350 S Grand Avenue, Suite 3160</p>
                <p className="text-primary-200 text-sm">Los Angeles, CA 90071</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
