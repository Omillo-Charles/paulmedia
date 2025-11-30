"use client";

import Link from "next/link";
import { Camera, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

// Custom X (Twitter) Icon Component
const XIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary via-accent to-secondary" />
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="bg-white text-primary p-2.5 rounded-xl group-hover:bg-secondary transition-colors duration-300">
                <Camera size={24} />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                BUSH
              </span>
            </Link>
            <p className="text-neutral-300 text-sm leading-relaxed max-w-xs">
              Capturing life's most precious moments with artistic vision and technical excellence.
              Based in Nairobi, available worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-secondary">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Portfolio", "Services", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-neutral-300 hover:text-secondary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-secondary transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-secondary">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-neutral-300 text-sm group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-secondary/20 transition-colors">
                  <Phone size={18} className="text-secondary" />
                </div>
                <span>+254 717 901 502</span>
              </li>
              <li className="flex items-center gap-3 text-neutral-300 text-sm group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-secondary/20 transition-colors">
                  <Mail size={18} className="text-secondary" />
                </div>
                <span>geoffreypaul096@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-secondary">Follow Us</h3>
            <div className="flex gap-4 mb-8">
              <a href="#" className="bg-white/5 p-3 rounded-xl hover:bg-secondary hover:text-primary transition-all duration-300 hover:-translate-y-1">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-xl hover:bg-secondary hover:text-primary transition-all duration-300 hover:-translate-y-1">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-xl hover:bg-secondary hover:text-primary transition-all duration-300 hover:-translate-y-1">
                <XIcon size={20} />
              </a>
            </div>
            <p className="text-neutral-400 text-xs">
              Subscribe to our newsletter for updates and photography tips.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Paul Media. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-neutral-500">
            <Link href="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-secondary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
