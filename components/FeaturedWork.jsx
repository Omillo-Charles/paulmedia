"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    image: "/featured/featured1.png",
  },
  {
    id: 2,
    image: "/featured/featured2.jpeg",
  },
  {
    id: 3,
    image: "/featured/featured3.jpeg",
  },
  {
    id: 4,
    image: "/featured/featured4.jpeg",
  },
  {
    id: 5,
    image: "/featured/featured5.jpeg",
  },
  {
    id: 6,
    image: "/featured/featuerd6.jpeg",
  },
];

const FeaturedWork = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-secondary font-medium tracking-wider uppercase mb-3">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-primary tracking-tight mb-4">
              Selected Works
            </h3>
            <p className="text-lg text-neutral-500 max-w-xl">
              A collection of our favorite moments captured through the lens.
              Each image tells a unique story of love, life, and beauty.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="group flex items-center gap-2 text-lg font-bold text-primary hover:text-secondary transition-colors"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Desktop: Natural Gallery */}
        <div className="hidden md:flex flex-wrap gap-6 justify-center">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer flex-shrink-0"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <Image
                  src={project.image}
                  alt={`Gallery image ${project.id}`}
                  width={350}
                  height={500}
                  className="h-auto transition-transform duration-700 group-hover:scale-105"
                  sizes="350px"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div className="md:hidden relative overflow-hidden">
          <div className="flex gap-4 animate-scroll">
            {/* First set of images */}
            {projects.map((project) => (
              <div
                key={`carousel-1-${project.id}`}
                className="flex-shrink-0 w-[80vw] h-[60vh] group cursor-pointer"
              >
                <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={project.image}
                    alt={`Gallery image ${project.id}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="80vw"
                  />
                </div>
              </div>
            ))}
            {/* Duplicate set for infinite scroll */}
            {projects.map((project) => (
              <div
                key={`carousel-2-${project.id}`}
                className="flex-shrink-0 w-[80vw] h-[60vh] group cursor-pointer"
              >
                <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={project.image}
                    alt={`Gallery image ${project.id}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="80vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
