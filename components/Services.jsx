"use client";

import { Camera, Users, Heart, Sparkles } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Weddings",
    description: "Capturing the magic of your special day with cinematic storytelling and candid emotion.",
    color: "bg-rose-50",
    iconColor: "text-rose-500",
  },
  {
    icon: Users,
    title: "Portraits",
    description: "Professional headshots, family sessions, and creative portraits that reveal your true self.",
    color: "bg-amber-50",
    iconColor: "text-amber-500",
  },
  {
    icon: Sparkles,
    title: "Events",
    description: "From corporate galas to intimate parties, we document every detail and key moment.",
    color: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    icon: Camera,
    title: "Commercial",
    description: "High-impact imagery for brands, products, and campaigns that drives engagement.",
    color: "bg-emerald-50",
    iconColor: "text-emerald-500",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-secondary font-medium tracking-wider uppercase mb-3">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Services Tailored to You
          </h3>
          <p className="text-lg text-neutral-600">
            We offer a wide range of photography services, each customized to meet your unique needs and vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-white border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>
              <h4 className="text-xl font-bold text-primary mb-3">{service.title}</h4>
              <p className="text-neutral-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
