"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-primary pt-20">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-secondary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-secondary text-sm font-medium mb-8 animate-fade-in-up">
            <Star size={14} className="fill-secondary" />
            <span>The Power Behind the Camera</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
            Capturing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
              Raw Emotion
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-neutral-300 mb-10 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
            We don't just take pictures; we craft visual legacies.
            Experience photography that speaks to the soul and preserves the moment forever.
          </p>

          <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4">
            <Link
              href="/portfolio"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-secondary text-primary text-lg font-bold hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-secondary/20"
            >
              View Portfolio
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full text-lg font-medium text-white border border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 border-t border-white/10 pt-8">
            <div>
              <p className="text-3xl font-bold text-white">500+</p>
              <p className="text-sm text-neutral-400">Happy Clients</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">10+</p>
              <p className="text-sm text-neutral-400">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">100%</p>
              <p className="text-sm text-neutral-400">Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Image Grid */}
        <div className="relative order-1 lg:order-2 h-[500px] lg:h-[700px] w-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-primary/50 to-transparent z-10 pointer-events-none" />

          {/* Main Image */}
          <div className="absolute top-10 right-10 w-2/3 h-3/4 rounded-[2rem] overflow-hidden shadow-2xl rotate-3 border-4 border-white/5 z-0">
            <Image
              src="/hero/hero3.png"
              alt="Professional photography"
              fill
              className="object-cover"
            />
          </div>

          {/* Floating Image 1 */}
          <div className="absolute bottom-20 left-0 w-1/2 h-1/2 rounded-[2rem] overflow-hidden shadow-2xl -rotate-6 border-4 border-white/5 z-10">
            <Image
              src="/hero/hero4.png"
              alt="Photography portfolio"
              fill
              className="object-cover"
            />
          </div>

          {/* Floating Badge */}
          <div className="absolute top-20 left-10 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-xl z-20 animate-bounce-slow">
            <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-1">Paul</p>
            <p className="text-white font-serif text-xl">MEDIA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
