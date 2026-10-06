import { PROCESS_STEPS } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export default function Process() {
  const { ref: headingRef } = useReveal<HTMLHeadingElement>();

  return (
    <section className="bg-charcoal-900 px-6 py-28 lg:py-40">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-20 text-center lg:mb-28">
          <p className="mb-4 text-xs font-light uppercase tracking-ultra-wide text-gold/70">
            How It Works
          </p>
          <h2
            ref={headingRef}
            className="reveal font-heading text-4xl font-light text-ivory sm:text-5xl lg:text-6xl"
          >
            Our Process
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Horizontal line on desktop */}
          <div className="absolute left-0 right-0 top-[2.75rem] hidden h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent lg:block" />

          {PROCESS_STEPS.map((step, i) => (
            <ProcessStep key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStep({
  step,
  index,
}: {
  step: (typeof PROCESS_STEPS)[number];
  index: number;
}) {
  const { ref } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="reveal relative text-center"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Number circle */}
      <div className="relative z-10 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-gold/30 bg-charcoal-900">
        <span className="font-heading text-2xl font-light text-gold">
          {step.number}
        </span>
      </div>
      <h3 className="font-heading text-xl font-light text-ivory lg:text-2xl">
        {step.title}
      </h3>
      <p className="mt-3 text-sm font-light leading-relaxed text-ivory/50">
        {step.description}
      </p>
    </div>
  );
}
