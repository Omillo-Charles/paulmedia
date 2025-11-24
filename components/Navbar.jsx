'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Work', href: '/portfolio' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? 'bg-white/95 backdrop-blur-xl border-b border-gray-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-24">
            <Link href="/" className="group relative z-50">
              <div className="text-2xl font-light tracking-[0.2em] text-black transition-opacity hover:opacity-60">
                GP MEDIA
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm tracking-wider uppercase text-black/70 hover:text-black transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-black relative z-50"
              aria-label="Menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-[1px] bg-black transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-full h-[1px] bg-black transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-[1px] bg-black transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-40 transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-3xl font-light tracking-wider text-black/80 hover:text-black transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                animation: isMobileMenuOpen ? `fadeInUp 0.5s ease-out ${index * 0.1}s both` : 'none'
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
