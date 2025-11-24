'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <div className="text-2xl font-light tracking-[0.2em] mb-6">
              GP MEDIA
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Creating visual stories that inspire and endure.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-wider uppercase text-white/40 mb-6">
              Navigation
            </h4>
            <div className="space-y-3">
              {['Work', 'Services', 'About', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="block text-sm text-white/70 hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-wider uppercase text-white/40 mb-6">
              Connect
            </h4>
            <div className="space-y-3">
              {['Instagram', 'Facebook', 'LinkedIn', 'X'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-sm text-white/70 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-wider uppercase text-white/40 mb-6">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-white/70">
              <p>geoffreypaul096@gmail.com</p>
              <p>+254 717 901 502</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {currentYear} GP Media Productions. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-white/40">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
