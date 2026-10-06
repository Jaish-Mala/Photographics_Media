import { FEATURED_STORY_IMAGE } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export default function FeaturedStory() {
  const { ref, revealed } = useReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={FEATURED_STORY_IMAGE}
          alt="Couple in traditional attire at an outdoor Indian wedding"
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 to-transparent" />
      </div>

      {/* Content */}
      <div
        ref={ref}
        className={`relative z-10 flex h-full items-center transition-all duration-1000 ${
          revealed ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="mx-auto w-full max-w-8xl px-6 lg:px-12">
          <div className="max-w-xl">
            <p className="mb-5 text-xs font-light uppercase tracking-ultra-wide text-gold/90">
              A Moment to Remember
            </p>
            <h2 className="font-heading text-3xl font-light leading-[1.2] text-ivory sm:text-4xl lg:text-5xl xl:text-6xl text-balance">
              From the first look
              <br />
              <span className="italic text-gold/95">to the final goodbye.</span>
            </h2>
            <p className="mt-6 max-w-md text-base font-light leading-relaxed text-ivory/70">
              A wedding day is a journey — from quiet, nervous mornings to joyous
              celebrations that last through the night. We document every step of
              that emotional journey, so the full story of your day lives on.
            </p>
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-8 inline-flex items-center justify-center border border-gold/50 px-8 py-3.5 text-xs font-light uppercase tracking-wider text-gold transition-all duration-300 hover:bg-gold hover:text-charcoal-900"
            >
              View Wedding Stories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
