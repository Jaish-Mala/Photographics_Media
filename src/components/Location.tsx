import { MapPin } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

// Placeholder — replace with actual Google Maps URL when confirmed
const MAPS_URL = '#';

export default function Location() {
  const { ref } = useReveal<HTMLDivElement>();

  return (
    <section className="bg-charcoal-900 px-6 py-24 lg:py-32">
      <div ref={ref} className="reveal mx-auto max-w-3xl text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/20">
            <MapPin className="h-6 w-6 text-gold" strokeWidth={1.5} />
          </div>
        </div>
        <h2 className="font-heading text-3xl font-light text-ivory sm:text-4xl">
          Badlapur, Maharashtra
        </h2>
        <p className="mt-4 max-w-md mx-auto text-sm font-light leading-relaxed text-ivory/50">
          Based in Badlapur, we photograph weddings and celebrations across
          Maharashtra and beyond.
        </p>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-xs font-light uppercase tracking-wider text-gold transition-colors hover:text-gold-light"
        >
          View on Google Maps
          <MapPin className="h-4 w-4" strokeWidth={1.5} />
        </a>
      </div>
    </section>
  );
}
