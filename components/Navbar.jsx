"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Camera } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center ${scrolled ? "py-4" : "py-6"
        }`}
    >
      <div
        className={`w-[95%] max-w-7xl transition-all duration-500 rounded-full px-6 py-3 flex justify-between items-center ${scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg border border-white/20"
            : "bg-transparent"
          }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className={`p-2 rounded-full transition-colors ${scrolled ? "bg-primary text-white" : "bg-white text-primary"}`}>
            <Camera size={20} />
          </div>
          <span className={`text-lg font-bold tracking-tight ${scrolled ? "text-primary" : "text-white"}`}>
            PAUL MEDIA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-secondary/20 ${scrolled ? "text-primary hover:text-primary" : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/book"
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all transform hover:scale-105 shadow-md ${scrolled
                ? "bg-primary text-white hover:bg-primary/90"
                : "bg-white text-primary hover:bg-neutral-100"
              }`}
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 rounded-full transition-colors ${scrolled ? "text-primary hover:bg-neutral-100" : "text-white hover:bg-white/10"
            }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-primary/95 backdrop-blur-xl z-40 md:hidden transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 p-8">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-8 text-white/80 hover:text-white"
          >
            <X size={32} />
          </button>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-3xl font-bold text-white/90 hover:text-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/book"
            className="bg-secondary text-primary px-8 py-3 rounded-full text-lg font-bold hover:bg-white transition-all mt-8 shadow-lg"
            onClick={() => setIsOpen(false)}
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
