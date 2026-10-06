import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export default function Services() {
  const { ref: headingRef } = useReveal<HTMLHeadingElement>();

  return (
    <section id="services" className="bg-charcoal-950 px-6 py-28 lg:py-40">
      <div className="mx-auto max-w-8xl">
        {/* Heading */}
        <div className="mb-16 text-center lg:mb-24">
          <p className="mb-4 text-xs font-light uppercase tracking-ultra-wide text-gold/70">
            What We Do
          </p>
          <h2
            ref={headingRef}
            className="reveal font-heading text-4xl font-light text-ivory sm:text-5xl lg:text-6xl"
          >
            What We Capture
          </h2>
        </div>

        {/* Service cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  const { ref } = useReveal<HTMLDivElement>();

  // Make first card full width on desktop for visual variety
  const isFirst = index === 0;

  return (
    <div
      ref={ref}
      className={`reveal group relative overflow-hidden ${
        isFirst ? 'lg:col-span-2' : ''
      }`}
      style={{ transitionDelay: `${(index % 2) * 100}ms` }}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${isFirst ? 'aspect-[16/9] lg:aspect-[21/9]' : 'aspect-[4/3]'}`}>
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
        <h3 className="font-heading text-2xl font-light text-ivory lg:text-3xl">
          {service.title}
        </h3>
        <p className="mt-2 max-w-md text-sm font-light leading-relaxed text-ivory/60">
          {service.description}
        </p>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="mt-4 inline-flex items-center gap-2 text-xs font-light uppercase tracking-wider text-gold transition-all hover:gap-3 hover:text-gold-light"
        >
          View Service
          <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
        </a>
      </div>
    </div>
  );
}
