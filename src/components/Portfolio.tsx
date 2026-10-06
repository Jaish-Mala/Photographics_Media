import { useCallback, useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowRight, ZoomIn } from 'lucide-react';
import {
  PORTFOLIO_ITEMS,
  PORTFOLIO_FILTERS,
  type PortfolioItem,
} from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export default function Portfolio() {
  const [filter, setFilter] = useState<(typeof PORTFOLIO_FILTERS)[number]>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { ref: headingRef } = useReveal<HTMLHeadingElement>();

  const filteredItems =
    filter === 'All'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === filter);

  const openLightbox = (item: PortfolioItem) => {
    const idx = filteredItems.findIndex((i) => i.id === item.id);
    setLightboxIndex(idx);
  };

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? prev : (prev + 1) % filteredItems.length
    );
  }, [filteredItems.length]);

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? prev : prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  }, [filteredItems.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  // Reset lightbox when filter changes
  useEffect(() => {
    setLightboxIndex(null);
  }, [filter]);

  return (
    <section id="portfolio" className="bg-charcoal-900 px-6 py-28 lg:py-40">
      <div className="mx-auto max-w-8xl">
        {/* Heading */}
        <div className="mb-12 text-center lg:mb-16">
          <p className="mb-4 text-xs font-light uppercase tracking-ultra-wide text-gold/70">
            Portfolio
          </p>
          <h2
            ref={headingRef}
            className="reveal font-heading text-4xl font-light text-ivory sm:text-5xl lg:text-6xl"
          >
            Stories We've Captured
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-sm font-light leading-relaxed text-ivory/50">
            A selection of moments from weddings, pre-wedding shoots, and celebrations.
            Sample imagery for demonstration.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="mb-12 flex justify-center lg:mb-16">
          <div className="no-scrollbar flex gap-1 overflow-x-auto">
            {PORTFOLIO_FILTERS.map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`whitespace-nowrap px-6 py-2.5 text-xs font-light uppercase tracking-wider transition-all duration-300 ${
                  filter === tab
                    ? 'bg-gold text-charcoal-900'
                    : 'text-ivory/60 hover:text-ivory'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry gallery */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 lg:gap-6 [&>*]:mb-4 lg:[&>*]:mb-6">
          {filteredItems.map((item, i) => (
            <GalleryItem
              key={`${item.id}-${filter}`}
              item={item}
              index={i}
              onClick={() => openLightbox(item)}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-sm font-light uppercase tracking-wider text-gold transition-all hover:gap-3 hover:text-gold-light"
          >
            View Full Portfolio
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <Lightbox
          item={filteredItems[lightboxIndex]}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </section>
  );
}

function GalleryItem({
  item,
  index,
  onClick,
}: {
  item: PortfolioItem;
  index: number;
  onClick: () => void;
}) {
  const { ref, revealed } = useReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`image-reveal ${revealed ? 'revealed' : ''} group relative cursor-pointer overflow-hidden break-inside-avoid`}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View image: ${item.alt}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <img
        src={item.image}
        alt={item.alt}
        loading="lazy"
        className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-charcoal-950/0 opacity-0 transition-all duration-400 group-hover:bg-charcoal-950/40 group-hover:opacity-100">
        <ZoomIn className="h-8 w-8 text-ivory" strokeWidth={1} />
      </div>
      {/* Category label */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal-950/80 to-transparent p-4 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
        <p className="text-xs font-light uppercase tracking-wider text-gold/90">
          {item.category}
        </p>
      </div>
    </div>
  );
}

function Lightbox({
  item,
  onClose,
  onNext,
  onPrev,
}: {
  item: PortfolioItem;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-charcoal-950/95 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute right-6 top-6 z-10 text-ivory/70 transition-colors hover:text-ivory"
        aria-label="Close"
      >
        <X className="h-8 w-8" strokeWidth={1.5} />
      </button>

      {/* Prev button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-6 z-10 text-ivory/70 transition-colors hover:text-ivory"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-10 w-10" strokeWidth={1} />
      </button>

      {/* Image */}
      <figure
        className="mx-20 max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.image}
          alt={item.alt}
          className="max-h-[85vh] w-auto object-contain"
        />
        <figcaption className="mt-4 text-center text-xs font-light uppercase tracking-wider text-ivory/50">
          {item.alt}
        </figcaption>
      </figure>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-6 z-10 text-ivory/70 transition-colors hover:text-ivory"
        aria-label="Next image"
      >
        <ChevronRight className="h-10 w-10" strokeWidth={1} />
      </button>
    </div>
  );
}
