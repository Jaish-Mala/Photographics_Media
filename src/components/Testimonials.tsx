import { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const { ref: headingRef } = useReveal<HTMLHeadingElement>();

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-charcoal-950 px-6 py-28 lg:py-40">
      <div className="mx-auto max-w-3xl text-center">
        {/* Heading */}
        <p className="mb-4 text-xs font-light uppercase tracking-ultra-wide text-gold/70">
          Testimonials
        </p>
        <h2
          ref={headingRef}
          className="reveal font-heading text-4xl font-light text-ivory sm:text-5xl lg:text-6xl"
        >
          Kind Words
        </h2>

        {/* Demo note */}
        <p className="mt-4 text-xs font-light italic text-ivory/30">
          Demo content — replace with authentic testimonials
        </p>

        {/* Quote display */}
        <div className="relative mt-16 min-h-[200px]">
          <Quote className="mx-auto mb-8 h-10 w-10 text-gold/30" strokeWidth={1} />

          {TESTIMONIALS.map((testimonial, i) => (
            <blockquote
              key={i}
              className={`absolute inset-0 transition-all duration-700 ${
                i === active
                  ? 'translate-y-0 opacity-100'
                  : 'pointer-events-none translate-y-4 opacity-0'
              }`}
            >
              <p className="font-heading text-2xl font-light leading-relaxed text-ivory/90 sm:text-3xl lg:text-4xl text-balance">
                "{testimonial.quote}"
              </p>
              <p className="mt-8 text-xs font-light uppercase tracking-wider text-ivory/40">
                {testimonial.author}
              </p>
            </blockquote>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-3">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? 'w-8 bg-gold' : 'w-2 bg-ivory/20 hover:bg-ivory/40'
              }`}
              aria-label={`View testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
