'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

const trustIndicators = [
  { label: '35+ Years', description: 'Experience' },
  { label: '500+', description: 'Court Testimonies' },
  { label: '$50M+', description: 'Fraud Recovered' },
  { label: '98%', description: 'Client Satisfaction' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      {/* Background Image - Los Angeles Skyline */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/2525903/pexels-photo-2525903.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280"
          alt="Los Angeles Downtown Skyline at Golden Hour"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 hero-gradient opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
            Uncover Financial Truth.
            <br />
            <span className="text-primary-300">Protect What Matters.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-stagger-1">
            Los Angeles' premier forensic accounting firm with 35+ years of experience
            solving complex financial disputes, fraud investigations, and litigation support.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animate-stagger-2">
            <Link href="/contact">
              <Button size="xl" className="bg-primary-600 hover:bg-primary-700 text-lg px-8 py-4">
                Get Expert Analysis
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </Link>
            <Link href="/cases">
              <Button 
                variant="secondary" 
                size="xl" 
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4"
              >
                View Case Studies
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto animate-fade-in-up animate-stagger-3">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-300 mb-1">
                  {indicator.label}
                </div>
                <div className="text-sm md:text-base text-gray-300">
                  {indicator.description}
                </div>
              </div>
            ))}
          </div>

          {/* Emergency Contact */}
          <div className="mt-12 animate-fade-in-up animate-stagger-4">
            <p className="text-primary-200 mb-2 text-sm uppercase tracking-wide font-medium">
              24/7 Emergency Response Available
            </p>
            <a
              href="tel:+13102772220"
              className="text-2xl font-bold text-white hover:text-primary-300 transition-colors duration-200"
            >
              (310) 277-2220
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      {/* Floating Elements for Visual Interest */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary-400/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-primary-300/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }} />
    </section>
  )
}
