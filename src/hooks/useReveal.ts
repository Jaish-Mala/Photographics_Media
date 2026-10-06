import { useEffect, useRef, useState } from 'react';

/**
 * Adds a `revealed` class to an element when it scrolls into view.
 * Returns a ref to attach and a boolean indicating whether it's been revealed.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options?: { threshold?: number; once?: boolean }
) {
  const ref = useRef<T>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          el.classList.add('revealed');
          if (options?.once !== false) {
            observer.unobserve(el);
          }
        } else if (options?.once === false) {
          setRevealed(false);
          el.classList.remove('revealed');
        }
      },
      { threshold: options?.threshold ?? 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options?.threshold, options?.once]);

  return { ref, revealed };
}
