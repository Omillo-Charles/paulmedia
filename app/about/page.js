import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'About | GP Media Productions',
  description: 'Meet Geoffrey Paul - Digital photographer, videographer, graphic designer, editor, and journalist with passionate experience.',
};

export default function AboutPage() {
  // Calculate years of experience dynamically (started in 2023)
  const startYear = 2023;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;

  const expertise = [
    {
      title: 'Photography',
      description: 'Capturing moments with precision and artistic vision, from commercial shoots to intimate portraits.',
    },
    {
      title: 'Videography',
      description: 'Creating compelling visual stories through dynamic video production and cinematography.',
    },
    {
      title: 'Graphic Design',
      description: 'Crafting visual identities and designs that communicate your brand message effectively.',
    },
    {
      title: 'Editing',
      description: 'Post-production excellence ensuring every frame tells your story perfectly.',
    },
    {
      title: 'Journalism',
      description: 'Professional storytelling backed by journalistic integrity and attention to detail.',
    },
  ];

  const values = [
    {
      title: 'Passion-Driven',
      description: 'Every project is approached with genuine enthusiasm and dedication to excellence.',
    },
    {
      title: 'Client-Focused',
      description: 'Your vision is our priority. We deliver services tailored to your unique needs.',
    },
    {
      title: 'Professional',
      description: 'Combining technical expertise with creative vision to exceed expectations.',
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
              About
            </h1>
            <div className="w-20 h-[1px] bg-black/20 mb-8" />
            
            <p className="text-xl text-black/70 font-light leading-relaxed">
              Where passion meets professionalism in visual storytelling.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image */}
            <div className="relative h-[600px]">
              <div className="relative h-full overflow-hidden shadow-lg">
                <Image
                  src="/images/hero.jpeg"
                  alt="Geoffrey Paul - GP Media Productions"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-light tracking-tight mb-6">
                  Meet Geoffrey Paul
                </h2>
                <div className="w-16 h-[1px] bg-black/20 mb-8" />
              </div>

              <div className="space-y-6 text-lg text-black/70 leading-relaxed">
                <p>
                  I'm Geoffrey Paul, the creative force behind GP Media Productions. As a digital photographer, videographer, graphic designer, editor, and journalist, I bring a multifaceted approach to visual storytelling.
                </p>
                <p>
                  With {yearsOfExperience}+ years of dedicated experience, I've honed my craft across multiple disciplines, allowing me to offer comprehensive media services that capture your vision from every angle. My background in journalism ensures that every project is approached with attention to detail, authenticity, and narrative depth.
                </p>
                <p>
                  What sets me apart is my passion. I don't just take photos or create videos—I craft visual stories that resonate, connect, and endure. Every project is an opportunity to push creative boundaries while delivering results that exceed expectations.
                </p>
                <p>
                  Whether you need commercial photography, event coverage, brand content, or editorial work, I'm the person you can trust to bring your vision to life with professionalism and creativity.
                </p>
              </div>

              <div className="pt-6">
                <Link
                  href="/contact"
                  className="inline-block px-10 py-5 bg-black text-white text-sm tracking-wider uppercase hover:bg-black/90 transition-all duration-300"
                >
                  Let's Work Together
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <h2 className="text-5xl lg:text-6xl font-light tracking-tight mb-4">
              Expertise
            </h2>
            <div className="w-16 h-[1px] bg-black/20" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {expertise.map((item, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-2xl font-light">{item.title}</h3>
                <div className="w-8 h-[1px] bg-black/20" />
                <p className="text-black/60 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <h2 className="text-5xl lg:text-6xl font-light tracking-tight mb-4">
              Why Choose GP Media
            </h2>
            <div className="w-16 h-[1px] bg-black/20" />
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            {values.map((value, index) => (
              <div key={index} className="space-y-4">
                <div className="text-6xl font-light text-black/10">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-3xl font-light">{value.title}</h3>
                <p className="text-lg text-black/60 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Stats */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-light text-black mb-4">{yearsOfExperience}+</div>
              <div className="text-sm tracking-wider uppercase text-black/50">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-light text-black mb-4">50+</div>
              <div className="text-sm tracking-wider uppercase text-black/50">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-light text-black mb-4">50+</div>
              <div className="text-sm tracking-wider uppercase text-black/50">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-light text-black mb-4">5</div>
              <div className="text-sm tracking-wider uppercase text-black/50">Service Areas</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-5xl lg:text-6xl font-light tracking-tight">
              Ready to Create Something Amazing?
            </h2>
            <div className="w-16 h-[1px] bg-black/20 mx-auto" />
            <p className="text-xl text-black/60 font-light leading-relaxed">
              Let's discuss your project and bring your vision to life. Contact me today for professional media services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link
                href="/contact"
                className="px-10 py-5 bg-black text-white text-sm tracking-wider uppercase hover:bg-black/90 transition-all duration-300"
              >
                Get in Touch
              </Link>
              <a
                href="tel:0717901502"
                className="px-10 py-5 border border-black/20 text-black text-sm tracking-wider uppercase hover:border-black transition-all duration-300"
              >
                Call: 0717901502
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
