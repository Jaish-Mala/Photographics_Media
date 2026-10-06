import { Instagram } from 'lucide-react';
import { INSTAGRAM_TILES } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

// Placeholder link — replace with actual Instagram profile URL when available
const INSTAGRAM_URL = '#';

export default function SocialSection() {
  const { ref: headingRef } = useReveal<HTMLHeadingElement>();

  return (
    <section className="bg-charcoal-900 px-6 py-28 lg:py-40">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs font-light uppercase tracking-ultra-wide text-gold/70">
            Instagram
          </p>
          <h2
            ref={headingRef}
            className="reveal font-heading text-4xl font-light text-ivory sm:text-5xl lg:text-6xl"
          >
            Follow The Stories
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base font-light leading-relaxed text-ivory/50">
            More moments. More stories. More memories.
          </p>
        </div>

        {/* Tiles */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:gap-4">
          {INSTAGRAM_TILES.map((tile, i) => (
            <Tile key={i} src={tile} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-gold/50 px-8 py-3.5 text-xs font-light uppercase tracking-wider text-gold transition-all duration-300 hover:bg-gold hover:text-charcoal-900"
          >
            <Instagram className="h-4 w-4" strokeWidth={1.5} />
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

function Tile({ src, index }: { src: string; index: number }) {
  const { ref, revealed } = useReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`image-reveal ${revealed ? 'revealed' : ''} group relative aspect-square overflow-hidden`}
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
    >
      <img
        src={src}
        alt="Wedding photography sample"
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-charcoal-950/0 opacity-0 transition-all duration-400 group-hover:bg-charcoal-950/40 group-hover:opacity-100">
        <Instagram className="h-7 w-7 text-ivory" strokeWidth={1.25} />
      </div>
    </div>
  );
}
