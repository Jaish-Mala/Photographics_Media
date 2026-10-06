import { ArrowRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function About() {
  const { ref: headingRef } = useReveal<HTMLHeadingElement>();
  const { ref: paraRef } = useReveal<HTMLParagraphElement>();
  const { ref: linkRef } = useReveal<HTMLAnchorElement>();

  return (
    <section id="about" className="bg-charcoal-900 px-6 py-28 lg:py-40">
      <div className="mx-auto max-w-4xl text-center">
        <h2
          ref={headingRef}
          className="reveal font-heading text-3xl font-light leading-[1.3] text-ivory sm:text-4xl md:text-5xl lg:text-6xl text-balance"
        >
          Every celebration has a story.
          <br />
          <span className="italic text-gold/90">We make sure yours is beautifully remembered.</span>
        </h2>

        <p
          ref={paraRef}
          className="reveal reveal-delay-1 mx-auto mt-10 max-w-2xl text-base font-light leading-relaxed text-ivory/60 sm:text-lg"
        >
          Photographics Media focuses on capturing genuine emotions, celebrations,
          and the details that make each moment unique. We believe photography is
          more than taking pictures — it's about preserving the feeling of a moment
          so it can be relived for years to come.
        </p>

        <a
          ref={linkRef}
          href="#services"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="reveal reveal-delay-2 mt-10 inline-flex items-center gap-2 text-sm font-light uppercase tracking-wider text-gold transition-colors hover:text-gold-light"
        >
          Discover Our Story
          <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
        </a>
      </div>
    </section>
  );
}
