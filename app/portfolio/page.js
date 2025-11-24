import Link from 'next/link';

export const metadata = {
  title: 'Portfolio | GP Media Productions',
  description: 'Our portfolio is currently being curated. Check back soon to see our latest work.',
};

export default function PortfolioPage() {
  return (
    <main className="bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-32">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm tracking-wider uppercase text-black/60 hover:text-black transition-colors"
            >
              ← Back to Home
            </Link>
          </div>

          <div className="space-y-6">
            <div className="inline-block">
              <div className="w-16 h-16 border-2 border-black/20 rounded-full flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-black/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            <h1 className="text-5xl lg:text-6xl font-light tracking-tight mb-6">
              Portfolio Coming Soon
            </h1>
            <div className="w-20 h-[1px] bg-black/20 mx-auto mb-8" />
            
            <p className="text-xl text-black/70 font-light leading-relaxed max-w-2xl mx-auto">
              We're currently curating our best work to showcase in our portfolio. This page is being carefully crafted to present our projects in the most compelling way.
            </p>

            <p className="text-lg text-black/60 font-light leading-relaxed">
              In the meantime, check out our featured work on the homepage or get in touch to discuss your project.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-12">
            <Link
              href="/"
              className="px-10 py-5 bg-black text-white text-sm tracking-wider uppercase hover:bg-black/90 transition-all duration-300"
            >
              View Featured Work
            </Link>
            <Link
              href="/contact"
              className="px-10 py-5 border border-black/20 text-black text-sm tracking-wider uppercase hover:border-black transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>

          <div className="pt-16">
            <div className="inline-flex items-center gap-3 text-sm text-black/50">
              <div className="w-2 h-2 bg-black/30 rounded-full animate-pulse" />
              <span className="tracking-wider uppercase">Currently in development</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-1/4 left-12 w-px h-32 bg-black/5 hidden lg:block" />
      <div className="fixed bottom-1/4 right-12 w-px h-32 bg-black/5 hidden lg:block" />
    </main>
  );
}
