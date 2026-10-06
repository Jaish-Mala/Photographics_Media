import { Heart, Film, UserRound, Aperture, type LucideIcon } from 'lucide-react';
import { WHY_CHOOSE_US } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

const ICON_MAP: Record<string, LucideIcon> = {
  Heart,
  Film,
  UserRound,
  Aperture,
};

export default function WhyChooseUs() {
  const { ref: headingRef } = useReveal<HTMLHeadingElement>();

  return (
    <section className="bg-charcoal-950 px-6 py-28 lg:py-40">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-16 text-center lg:mb-24">
          <p className="mb-4 text-xs font-light uppercase tracking-ultra-wide text-gold/70">
            Why Choose Us
          </p>
          <h2
            ref={headingRef}
            className="reveal font-heading text-4xl font-light text-ivory sm:text-5xl lg:text-6xl"
          >
            More Than Just Photographs.
          </h2>
        </div>

        {/* Points */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {WHY_CHOOSE_US.map((point, i) => (
            <PointCard key={point.title} point={point} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PointCard({
  point,
  index,
}: {
  point: (typeof WHY_CHOOSE_US)[number];
  index: number;
}) {
  const { ref } = useReveal<HTMLDivElement>();
  const Icon = ICON_MAP[point.icon];

  return (
    <div
      ref={ref}
      className="reveal text-center"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {Icon && (
        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/20 transition-colors duration-300 group-hover:border-gold/50">
            <Icon className="h-7 w-7 text-gold" strokeWidth={1.25} />
          </div>
        </div>
      )}
      <h3 className="font-heading text-xl font-light text-ivory lg:text-2xl">
        {point.title}
      </h3>
      <p className="mt-3 text-sm font-light leading-relaxed text-ivory/50">
        {point.description}
      </p>
    </div>
  );
}
