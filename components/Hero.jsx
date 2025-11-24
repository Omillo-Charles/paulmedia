'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  // Calculate dynamic stats based on start date (November 2025)
  const startDate = new Date('2025-11-01');
  const currentDate = new Date();
  
  // Calculate months since start
  const monthsSinceStart = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + 
                           (currentDate.getMonth() - startDate.getMonth());
  
  // Projects: Start at 50, increase by 4 every month
  const projects = 50 + (monthsSinceStart * 4);
  
  // Years: Start at 2, increase by 1 every 6 months
  const years = 2 + Math.floor(monthsSinceStart / 6);
  
  // Clients: Fixed at 50+
  const clients = 50;

  return (
    <section className="relative min-h-screen w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-12 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-8rem)]">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="overflow-hidden">
                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-light leading-[0.95] tracking-tight text-black">
                  Visual
                  <br />
                  <span className="italic" style={{ fontFamily: 'var(--font-playfair)' }}>Stories</span>
                  <br />
                  That Last
                </h1>
              </div>
              
              <div className="w-16 h-[1px] bg-black/20" />
              
              <p className="text-lg text-black/60 max-w-md font-light leading-relaxed">
                Crafting timeless imagery for brands, moments, and memories that deserve to be remembered.
              </p>
            </div>

            <div className="flex gap-6 pt-4">
              <Link
                href="/portfolio"
                className="group relative overflow-hidden px-8 py-4 bg-black text-white text-sm tracking-wider uppercase transition-all duration-300 hover:bg-black/90"
              >
                View Work
              </Link>
              
              <Link
                href="/contact"
                className="px-8 py-4 border border-black/20 text-black text-sm tracking-wider uppercase hover:border-black transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[600px] lg:h-[700px]">
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/images/hero.jpeg"
                alt="GP Media Productions Photography"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 border border-black/10 bg-white flex flex-col items-center justify-center p-4">
              <div className="text-center space-y-1">
                <p className="text-[10px] tracking-wider uppercase text-black/70">Photography</p>
                <p className="text-[10px] tracking-wider uppercase text-black/70">Videography</p>
                <p className="text-[10px] tracking-wider uppercase text-black/70">Editing</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div className="border-t border-black/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-light text-black mb-1">{projects}+</div>
              <div className="text-xs tracking-wider uppercase text-black/50">Projects</div>
            </div>
            <div>
              <div className="text-3xl font-light text-black mb-1">{years}+</div>
              <div className="text-xs tracking-wider uppercase text-black/50">Years</div>
            </div>
            <div>
              <div className="text-3xl font-light text-black mb-1">{clients}+</div>
              <div className="text-xs tracking-wider uppercase text-black/50">Clients</div>
            </div>
            <div>
              <div className="text-3xl font-light text-black mb-1">Global</div>
              <div className="text-xs tracking-wider uppercase text-black/50">Reach</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
