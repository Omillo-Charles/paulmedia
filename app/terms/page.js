import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions | GP Media Productions',
  description: 'Terms and conditions for GP Media Productions services - Read our terms of service and usage policies.',
};

export default function TermsPage() {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using the GP Media Productions website and services, you accept and agree to be bound by these terms and conditions.',
        'If you do not agree to these terms, please do not use our website or services.',
      ],
    },
    {
      title: 'Services',
      content: [
        'GP Media Productions provides professional photography, videography, graphic design, editing, and related media services.',
        'All services are subject to availability and will be provided in accordance with the specific agreement made between GP Media Productions and the client.',
        'Service details, pricing, and deliverables will be outlined in individual project agreements or contracts.',
      ],
    },
    {
      title: 'Booking and Payment',
      content: [
        'A deposit may be required to secure your booking date and is non-refundable unless GP Media Productions cancels the service.',
        'Full payment terms will be specified in your service agreement.',
        'Failure to make payment as agreed may result in the withholding of final deliverables.',
        'All prices are in Kenyan Shillings (KES) unless otherwise stated.',
      ],
    },
    {
      title: 'Cancellation and Rescheduling',
      content: [
        'Cancellations must be made in writing and are subject to the terms outlined in your service agreement.',
        'Deposits are generally non-refundable but may be applied to a rescheduled date within a specified timeframe.',
        'GP Media Productions reserves the right to cancel or reschedule services due to unforeseen circumstances, in which case a full refund will be provided.',
      ],
    },
    {
      title: 'Copyright and Usage Rights',
      content: [
        'GP Media Productions retains copyright of all images, videos, and creative work produced unless otherwise agreed in writing.',
        'Clients receive a license to use the delivered work for personal or agreed commercial purposes as specified in the service agreement.',
        'GP Media Productions reserves the right to use work created for portfolio, marketing, and promotional purposes unless explicitly restricted by the client.',
        'Clients may not sell, transfer, or claim ownership of the original work without written permission.',
      ],
    },
    {
      title: 'Client Responsibilities',
      content: [
        'Clients must provide accurate information and timely communication regarding project requirements.',
        'Clients are responsible for obtaining necessary permissions for locations, participants, and any third-party materials.',
        'Clients must ensure that all participants are aware of and consent to being photographed or filmed.',
        'Any delays caused by the client may result in additional charges or rescheduling fees.',
      ],
    },
    {
      title: 'Delivery and Timeline',
      content: [
        'Delivery timelines will be specified in your service agreement and may vary depending on the scope of work.',
        'GP Media Productions will make reasonable efforts to meet agreed deadlines but is not liable for delays caused by circumstances beyond our control.',
        'Final deliverables will be provided in the format specified in your agreement.',
      ],
    },
    {
      title: 'Limitation of Liability',
      content: [
        'GP Media Productions will exercise reasonable care in providing services but cannot guarantee specific results.',
        'We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.',
        'Our total liability shall not exceed the amount paid for the specific service in question.',
        'We are not responsible for loss or damage to client property unless caused by our negligence.',
      ],
    },
    {
      title: 'Force Majeure',
      content: [
        'GP Media Productions is not liable for failure to perform services due to circumstances beyond our reasonable control, including but not limited to natural disasters, illness, equipment failure, or government restrictions.',
        'In such cases, we will work with clients to reschedule or provide alternative solutions.',
      ],
    },
    {
      title: 'Confidentiality',
      content: [
        'GP Media Productions respects client confidentiality and will not disclose sensitive project information without permission.',
        'Clients agree to keep any proprietary business information shared by GP Media Productions confidential.',
      ],
    },
    {
      title: 'Intellectual Property',
      content: [
        'All content on the GP Media Productions website, including text, graphics, logos, and images, is the property of GP Media Productions and protected by copyright laws.',
        'You may not reproduce, distribute, or use any content from our website without written permission.',
      ],
    },
    {
      title: 'Dispute Resolution',
      content: [
        'Any disputes arising from these terms or our services will be resolved through good faith negotiation.',
        'If negotiation fails, disputes will be subject to the laws of Kenya and the jurisdiction of Kenyan courts.',
      ],
    },
    {
      title: 'Changes to Terms',
      content: [
        'GP Media Productions reserves the right to modify these terms at any time.',
        'Changes will be posted on this page with an updated revision date.',
        'Continued use of our services after changes constitutes acceptance of the modified terms.',
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
              Terms & Conditions
            </h1>
            <div className="w-20 h-[1px] bg-black/20 mb-8" />
            
            <p className="text-xl text-black/70 font-light leading-relaxed">
              Last updated: November 24, 2025
            </p>
            <p className="text-lg text-black/60 font-light leading-relaxed mt-4">
              Please read these terms and conditions carefully before using our services. These terms govern your use of GP Media Productions services and website.
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
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-black/30 font-light">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-light tracking-tight">
                      {section.title}
                    </h2>
                  </div>
                  <div className="w-12 h-[1px] bg-black/20 ml-12" />
                </div>
                
                <div className="space-y-4 ml-12">
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
              Questions About Our Terms?
            </h2>
            <div className="w-16 h-[1px] bg-black/20 mx-auto" />
            <p className="text-lg text-black/60 font-light leading-relaxed">
              If you have any questions about these terms and conditions or need clarification on any point, please feel free to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link
                href="/contact"
                className="px-10 py-5 bg-black text-white text-sm tracking-wider uppercase hover:bg-black/90 transition-all duration-300"
              >
                Contact Us
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
