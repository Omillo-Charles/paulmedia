'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Backend implementation will go here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  const contactInfo = [
    {
      title: 'Phone',
      value: '0717901502',
      link: 'tel:0717901502',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      title: 'Email',
      value: 'geoffreypaul096@gmail.com',
      link: 'mailto:geoffreypaul096@gmail.com',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Location',
      value: 'Kenya',
      link: null,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  const services = [
    'Commercial Photography',
    'Editorial & Fashion',
    'Event Coverage',
    'Portrait Sessions',
    'Videography',
    'Graphic Design',
    'Other',
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="mb-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm tracking-wider uppercase text-black/60 hover:text-black transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-light tracking-tight mb-6">
              Get in Touch
            </h1>
            <div className="w-20 h-[1px] bg-black/20 mb-8" />
            
            <p className="text-xl text-black/70 font-light leading-relaxed max-w-2xl">
              Ready to bring your vision to life? Let's discuss your project and create something extraordinary together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl lg:text-4xl font-light tracking-tight mb-6">
                  Contact Information
                </h2>
                <div className="w-12 h-[1px] bg-black/20 mb-8" />
                <p className="text-black/60 leading-relaxed mb-8">
                  Feel free to reach out through any of these channels. I'm always excited to discuss new projects and creative opportunities.
                </p>
              </div>

              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start gap-4">
                      <div className="text-black/60 group-hover:text-black transition-colors">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-sm tracking-wider uppercase text-black/40 mb-2">
                          {info.title}
                        </div>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-lg text-black hover:text-black/70 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-lg text-black">{info.value}</div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <h3 className="text-xl font-light mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 border border-black/20 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300 group"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 border border-black/20 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300 group"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 border border-black/20 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300 group"
                    aria-label="Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-sm tracking-wider uppercase text-black/60 mb-3">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-black/20 bg-white focus:border-black focus:outline-none transition-colors text-black"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm tracking-wider uppercase text-black/60 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-black/20 bg-white focus:border-black focus:outline-none transition-colors text-black"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="phone" className="block text-sm tracking-wider uppercase text-black/60 mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-black/20 bg-white focus:border-black focus:outline-none transition-colors text-black"
                      placeholder="0712345678"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm tracking-wider uppercase text-black/60 mb-3">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-black/20 bg-white focus:border-black focus:outline-none transition-colors text-black appearance-none cursor-pointer"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm tracking-wider uppercase text-black/60 mb-3">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-black/20 bg-white focus:border-black focus:outline-none transition-colors text-black resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="px-12 py-5 bg-black text-white text-sm tracking-wider uppercase hover:bg-black/90 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight">
              Let's Create Together
            </h2>
            <div className="w-16 h-[1px] bg-black/20 mx-auto" />
            <p className="text-lg text-black/60 font-light leading-relaxed">
              Whether you're planning a commercial shoot, need event coverage, or want to discuss a creative project, I'm here to help bring your vision to life with professionalism and passion.
            </p>
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="space-y-2">
                <div className="text-3xl font-light text-black">Fast</div>
                <div className="text-sm text-black/60">Quick response within 24 hours</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-light text-black">Flexible</div>
                <div className="text-sm text-black/60">Tailored solutions for your needs</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-light text-black">Professional</div>
                <div className="text-sm text-black/60">Quality service guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
