import Link from 'next/link';
import Image from 'next/image';

export default function FeaturedWork() {
  const projects = [
    { title: 'Editorial', category: 'Fashion', image: '/featured/featured1.png', width: 800, height: 600 },
    { title: 'Moments', category: 'Wedding', image: '/featured/featured2.jpeg', width: 600, height: 800 },
    { title: 'Identity', category: 'Portrait', image: '/featured/featured3.jpeg', width: 600, height: 900 },
    { title: 'Spaces', category: 'Architecture', image: '/featured/featured4.jpeg', width: 900, height: 600 },
    { title: 'Elegance', category: 'Lifestyle', image: '/featured/featured5.jpeg', width: 700, height: 800 },
    { title: 'Vision', category: 'Creative', image: '/featured/featuerd6.jpeg', width: 800, height: 700 },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-end mb-20">
          <div>
            <h2 className="text-5xl lg:text-6xl font-light tracking-tight mb-4">
              Featured Work
            </h2>
            <div className="w-16 h-[1px] bg-black/20" />
          </div>
          <Link
            href="/portfolio"
            className="text-sm tracking-wider uppercase text-black/60 hover:text-black transition-colors"
          >
            View All →
          </Link>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects.map((project, index) => (
            <Link
              key={index}
              href="/portfolio"
              className="group relative block break-inside-avoid mb-6"
            >
              <div className="relative overflow-hidden rounded-sm shadow-md hover:shadow-2xl transition-shadow duration-500">
                <Image
                  src={project.image}
                  alt={`${project.title} - ${project.category}`}
                  width={project.width}
                  height={project.height}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
