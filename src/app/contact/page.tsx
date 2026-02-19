'use client'

import React, { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'

const contactInfo = [
  {
    name: 'Jason A. Engel',
    credentials: 'CPA, CFE, CIRA, CVA, MAFF, ABV',
    title: 'Managing Partner',
    address: '350 S Grand Avenue, Suite 3160',
    city: 'Los Angeles, CA 90071',
    phone: '(310) 277-2220',
    fax: '(310) 277-2212',
    email: 'jasonengel@engelandengel.com',
    image: '/images/team/jason-engel.jpg'
  },
  {
    name: 'Brandon J. Engel',
    credentials: 'CPA, CFE',
    title: 'Partner',
    address: '350 S Grand Avenue, Suite 3160',
    city: 'Los Angeles, CA 90071',
    phone: '(310) 277-2220',
    fax: '(310) 277-2212',
    email: 'brandon@engelandengel.com',
    image: '/images/team/brandon-engel.jpg'
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString()
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error('Error submitting contact form:', error)
      alert('There was an error sending your message. Please try again or call (310) 277-2220.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <main>
        <Header />
        <section className="pt-16 lg:pt-20 min-h-screen bg-gray-50 flex items-center">
          <div className="container-custom py-20">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Message Sent Successfully</h1>
              <p className="text-xl text-gray-600 mb-8">
                Thank you for contacting Engel & Engel. We will review your message and respond within 
                24 hours. For urgent matters, please call (310) 277-2220.
              </p>
              <div className="space-y-4">
                <a href="/contact">
                  <Button size="lg">Send Another Message</Button>
                </a>
                <div className="text-gray-500">
                  <p>Questions? Call us at <a href="tel:+13102772220" className="text-primary-600 font-semibold">(310) 277-2220</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-16 lg:pt-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container-custom py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
              Contact us today to discuss how we can help you with your forensic accounting needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13102772220">
                <Button size="xl" className="bg-white text-primary-900 hover:bg-gray-100">
                  Call (310) 277-2220
                </Button>
              </a>
              <a href="#contact-form">
                <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-900">
                  Send Message
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-xl text-gray-600">
                Ready to discuss your case? Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company/Law Firm
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Your company or law firm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Please describe your case or inquiry in detail..."
                    />
                  </div>

                  <div className="text-center">
                    <Button
                      type="submit"
                      size="xl"
                      disabled={isSubmitting}
                      className="min-w-48"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                    <p className="text-sm text-gray-500 mt-4">
                      * Required fields. We'll respond within 24 hours.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Forensic Accounting Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team is ready to assist you with expert forensic accounting 
              and litigation support services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Large Photo Header */}
                <div className="relative h-64 bg-gradient-to-br from-primary-50 to-primary-100 p-4">
                  <div className="w-full h-full rounded-xl overflow-hidden border-4 border-white shadow-lg">
                    <Image
                      src={contact.image}
                      alt={`${contact.name} - ${contact.title}`}
                      fill
                      className="object-contain bg-white"
                    />
                  </div>
                  {/* Overlay Badge */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-xs font-medium text-primary-700">{contact.title}</span>
                  </div>
                </div>

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl mb-2">{contact.name}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary-600 mb-4">
                    {contact.credentials}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="text-gray-700 text-sm">
                          <div className="font-medium">{contact.address}</div>
                          <div>{contact.city}</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                        </div>
                        <div className="text-sm">
                          <div className="text-gray-700">Tel: <a href={`tel:${contact.phone.replace(/\D/g, '')}`} className="text-primary-600 font-semibold hover:text-primary-700">{contact.phone}</a></div>
                          <div className="text-gray-500">Fax: {contact.fax}</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </div>
                        <div className="text-gray-700 text-sm">
                          <a href={`mailto:${contact.email}`} className="text-primary-600 font-semibold hover:text-primary-700 break-all">{contact.email}</a>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <a href={`tel:${contact.phone.replace(/\D/g, '')}`} className="flex-1">
                        <Button variant="outline" size="sm" className="w-full">
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                          Call
                        </Button>
                      </a>
                      <a href={`mailto:${contact.email}`} className="flex-1">
                        <Button size="sm" className="w-full">
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                          Email
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



      {/* Quick Contact */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary-50 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Immediate Assistance?</h2>
                <p className="text-lg text-gray-600">
                  For urgent matters or to schedule a consultation, contact us directly.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Call for Consultation</h3>
                  <p className="text-gray-600 mb-4">Speak directly with our experts</p>
                  <a href="tel:+13102772220" className="text-primary-600 font-semibold text-xl hover:text-primary-700">
                    (310) 277-2220
                  </a>
                </div>
                
                <div>
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-600 mb-4">Send detailed case information</p>
                  <a href="mailto:jasonengel@engelandengel.com" className="text-primary-600 font-semibold hover:text-primary-700">
                    jasonengel@engelandengel.com
                  </a>
                </div>
                
                <div>
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Our Office</h3>
                  <p className="text-gray-600 mb-4">Downtown Los Angeles location</p>
                  <p className="text-gray-700 text-sm">
                    350 S Grand Avenue<br />
                    Suite 3160<br />
                    Los Angeles, CA 90071
                  </p>
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
