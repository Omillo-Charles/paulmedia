export default function Services() {
  const services = [
    {
      number: '01',
      title: 'Commercial',
      description: 'Brand storytelling through compelling visual narratives for businesses and products.',
    },
    {
      number: '02',
      title: 'Editorial',
      description: 'Fashion and lifestyle photography for magazines, campaigns, and creative projects.',
    },
    {
      number: '03',
      title: 'Events',
      description: 'Capturing authentic moments from weddings, corporate events, and celebrations.',
    },
    {
      number: '04',
      title: 'Portraits',
      description: 'Personal and professional portraiture that reveals character and personality.',
    },
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <h2 className="text-5xl lg:text-6xl font-light tracking-tight mb-4">
            Services
          </h2>
          <div className="w-16 h-[1px] bg-black/20" />
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-20">
          {services.map((service) => (
            <div key={service.number} className="group">
              <div className="flex items-start gap-6">
                <span className="text-sm text-black/30 font-light mt-1">
                  {service.number}
                </span>
                <div className="flex-1">
                  <h3 className="text-3xl font-light mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    {service.title}
                  </h3>
                  <p className="text-black/60 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
