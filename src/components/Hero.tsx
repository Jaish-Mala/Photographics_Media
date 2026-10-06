import { ChevronDown } from 'lucide-react';
import { HERO_IMAGE } from '@/data/content';

export default function Hero() {
  const scrollToNext = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Indian wedding couple in traditional attire during an outdoor ceremony"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/70 via-charcoal-950/40 to-charcoal-950/80" />
        <div className="absolute inset-0 bg-charcoal-950/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Eyebrow */}
        <p className="mb-6 text-xs font-light uppercase tracking-ultra-wide text-gold/90 reveal revealed">
          Wedding <span className="text-gold/40">•</span> Pre-Wedding <span className="text-gold/40">•</span> Events
        </p>

        {/* Main heading */}
        <h1 className="font-heading text-4xl font-light leading-[1.15] text-ivory sm:text-5xl md:text-6xl lg:text-7xl text-balance">
          We Capture Moments
          <br />
          <span className="italic text-gold/95">That Become Memories.</span>
        </h1>

        {/* Supporting text */}
        <p className="mx-auto mt-8 max-w-xl text-base font-light leading-relaxed text-ivory/70 sm:text-lg">
          Cinematic wedding photography and storytelling for the moments you'll
          want to remember forever.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#portfolio"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group inline-flex items-center justify-center border border-gold/60 px-8 py-3.5 text-xs font-light uppercase tracking-wider text-gold transition-all duration-300 hover:bg-gold hover:text-charcoal-900"
          >
            Explore Our Work
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-light uppercase tracking-wider text-ivory/80 underline-offset-8 transition-all duration-300 hover:text-ivory hover:underline"
          >
            Book a Consultation
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/50 transition-colors hover:text-ivory"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" strokeWidth={1.5} />
      </button>
    </section>
  );
}
