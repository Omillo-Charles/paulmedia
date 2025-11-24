import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | GP Media Productions',
  description: 'Privacy policy for GP Media Productions - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  const sections = [
    {
      title: 'Information We Collect',
      content: [
        'When you contact us through our website, we collect personal information such as your name, email address, phone number, and any details you provide about your project or inquiry.',
        'We may also collect technical information such as your IP address, browser type, and device information when you visit our website.',
      ],
    },
    {
      title: 'How We Use Your Information',
      content: [
        'To respond to your inquiries and provide the services you request',
        'To communicate with you about your projects and bookings',
        'To improve our website and services',
        'To send you updates about our work (only with your consent)',
        'To comply with legal obligations',
      ],
    },
    {
      title: 'Information Sharing',
      content: [
        'We do not sell, trade, or rent your personal information to third parties.',
        'We may share your information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.',
        'We may disclose your information when required by law or to protect our rights.',
      ],
    },
    {
      title: 'Data Security',
      content: [
        'We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.',
        'However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.',
      ],
    },
    {
      title: 'Cookies',
      content: [
        'Our website may use cookies to enhance your browsing experience. Cookies are small files stored on your device that help us understand how you use our site.',
        'You can choose to disable cookies through your browser settings, though this may affect some functionality of our website.',
      ],
    },
    {
      title: 'Your Rights',
      content: [
        'You have the right to access the personal information we hold about you',
        'You can request correction of any inaccurate information',
        'You can request deletion of your personal information',
        'You can opt-out of marketing communications at any time',
        'You can object to processing of your personal information',
      ],
    },
    {
      title: 'Third-Party Links',
      content: [
        'Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.',
        'We encourage you to review the privacy policies of any third-party sites you visit.',
      ],
    },
    {
      title: 'Children\'s Privacy',
      content: [
        'Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.',
        'If you believe we have collected information from a child, please contact us immediately.',
      ],
    },
    {
      title: 'Changes to This Policy',
      content: [
        'We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.',
        'We encourage you to review this policy periodically to stay informed about how we protect your information.',
      ],
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
              Privacy Policy
            </h1>
            <div className="w-20 h-[1px] bg-black/20 mb-8" />
            
            <p className="text-xl text-black/70 font-light leading-relaxed">
              Last updated: November 24, 2025
            </p>
            <p className="text-lg text-black/60 font-light leading-relaxed mt-4">
              At GP Media Productions, we respect your privacy and are committed to protecting your personal information. This privacy policy explains how we collect, use, and safeguard your data.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl space-y-16">
            {sections.map((section, index) => (
              <div key={index} className="space-y-6">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-light tracking-tight mb-4">
                    {section.title}
                  </h2>
                  <div className="w-12 h-[1px] bg-black/20" />
                </div>
                
                <div className="space-y-4">
                  {section.content.map((paragraph, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      {section.content.length > 1 && (
                        <div className="w-1.5 h-1.5 bg-black/40 rounded-full mt-2 flex-shrink-0" />
                      )}
                      <p className="text-lg text-black/70 leading-relaxed">
                        {paragraph}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight">
              Questions About Privacy?
            </h2>
            <div className="w-16 h-[1px] bg-black/20 mx-auto" />
            <p className="text-lg text-black/60 font-light leading-relaxed">
              If you have any questions about this privacy policy or how we handle your personal information, please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link
                href="/contact"
                className="px-10 py-5 bg-black text-white text-sm tracking-wider uppercase hover:bg-black/90 transition-all duration-300"
              >
                Contact Us
              </Link>
              <a
                href="mailto:geoffreypaul096@gmail.com"
                className="px-10 py-5 border border-black/20 text-black text-sm tracking-wider uppercase hover:border-black transition-all duration-300"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
