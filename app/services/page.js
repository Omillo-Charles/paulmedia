import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Services | GP Media Productions',
  description: 'Professional photography and videography services for commercial, editorial, events, and portraits.',
};

export default function ServicesPage() {
  const services = [
    {
      number: '01',
      title: 'Commercial Photography',
      description: 'Elevate your brand with stunning visual content that tells your story and connects with your audience.',
      features: [
        'Product Photography',
        'Brand Campaigns',
        'Corporate Headshots',
        'Advertising Content',
        'Social Media Assets',
      ],
      image: '/services/commercial.png',
    },
    {
      number: '02',
      title: 'Editorial & Fashion',
      description: 'Creative photography for magazines, lookbooks, and fashion campaigns that capture style and emotion.',
      features: [
        'Fashion Editorials',
        'Lookbook Production',
        'Magazine Features',
        'Creative Direction',
        'Styling Collaboration',
      ],
      image: '/services/editorial.png',
    },
    {
      number: '03',
      title: 'Event Coverage',
      description: 'Authentic documentation of your special moments, from intimate gatherings to grand celebrations.',
      features: [
        'Wedding Photography',
        'Corporate Events',
        'Private Celebrations',
        'Conference Coverage',
        'Live Event Documentation',
      ],
      image: '/services/coverage.png',
    },
    {
      number: '04',
      title: 'Portrait Sessions',
      description: 'Personal and professional portraits that reveal character, personality, and authentic human connection.',
      features: [
        'Personal Portraits',
        'Professional Headshots',
        'Family Sessions',
        'Creative Portraits',
        'Environmental Portraits',
      ],
      image: '/services/portrait.png',
    },
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
              Services
            </h1>
            <div className="w-20 h-[1px] bg-black/20 mb-8" />
            
            <p className="text-xl text-black/70 font-light leading-relaxed max-w-2xl">
              From commercial campaigns to intimate portraits, we offer comprehensive photography and videography services tailored to your vision.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div
                key={service.number}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative h-[500px] ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative h-full overflow-hidden shadow-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="space-y-6">
                    <div className="flex items-start gap-6">
                      <span className="text-sm text-black/30 font-light mt-1">
                        {service.number}
                      </span>
                      <div className="flex-1">
                        <h2 className="text-4xl lg:text-5xl font-light tracking-tight mb-4">
                          {service.title}
                        </h2>
                        <div className="w-12 h-[1px] bg-black/20 mb-6" />
                        <p className="text-lg text-black/60 leading-relaxed mb-8">
                          {service.description}
                        </p>

                        {/* Features List */}
                        <div className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <div className="w-1 h-1 bg-black/40 rounded-full" />
                              <span className="text-black/70">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <h2 className="text-5xl lg:text-6xl font-light tracking-tight mb-4">
              Our Process
            </h2>
            <div className="w-16 h-[1px] bg-black/20" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We discuss your vision, goals, and requirements to understand your unique needs.',
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Detailed planning including location scouting, mood boards, and timeline creation.',
              },
              {
                step: '03',
                title: 'Production',
                description: 'Professional shoot day with attention to every detail and creative direction.',
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'Expertly edited final images delivered in your preferred format and timeline.',
              },
            ].map((step) => (
              <div key={step.step} className="space-y-4">
                <div className="text-6xl font-light text-black/10">{step.step}</div>
                <h3 className="text-2xl font-light">{step.title}</h3>
                <p className="text-black/60 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-5xl lg:text-6xl font-light tracking-tight">
              Let's Create Together
            </h2>
            <div className="w-16 h-[1px] bg-black/20 mx-auto" />
            <p className="text-xl text-black/60 font-light leading-relaxed">
              Ready to bring your vision to life? Get in touch to discuss your project and receive a custom quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link
                href="/contact"
                className="px-10 py-5 bg-black text-white text-sm tracking-wider uppercase hover:bg-black/90 transition-all duration-300"
              >
                Start a Project
              </Link>
              <Link
                href="/portfolio"
                className="px-10 py-5 border border-black/20 text-black text-sm tracking-wider uppercase hover:border-black transition-all duration-300"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
