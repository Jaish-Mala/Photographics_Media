import { useEffect, useState } from 'react';
import { Menu, X, Camera } from 'lucide-react';
import { NAV_LINKS } from '@/data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-charcoal-900/95 backdrop-blur-md py-3 shadow-lg shadow-black/30'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="mx-auto flex max-w-8xl items-center justify-between px-6 lg:px-12">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-2.5"
            aria-label="Photographics Media home"
          >
            <Camera
              className={`h-5 w-5 transition-colors duration-500 ${
                scrolled ? 'text-gold' : 'text-ivory'
              }`}
              strokeWidth={1.5}
            />
            <span
              className={`font-heading text-lg font-medium tracking-wider-2 transition-colors duration-500 ${
                scrolled ? 'text-ivory' : 'text-ivory'
              }`}
            >
              PHOTOGRAPHICS<span className="text-gold"> MEDIA</span>
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-10 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="group relative text-sm font-light tracking-wider text-ivory/80 transition-colors hover:text-ivory"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="hidden border border-gold/50 px-6 py-2.5 text-xs font-light uppercase tracking-wider text-gold transition-all duration-300 hover:bg-gold hover:text-charcoal-900 lg:inline-block"
          >
            Let's Talk
          </a>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6 text-ivory" strokeWidth={1.5} />
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${
          menuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-charcoal-950 transition-opacity duration-400 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMenuOpen(false)}
        />
        {/* Panel */}
        <div
          className={`absolute right-0 top-0 flex h-full w-80 max-w-[85vw] flex-col bg-charcoal-900 px-8 py-6 transition-transform duration-400 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-heading text-base tracking-wider-2 text-ivory">
              PHOTOGRAPHICS<span className="text-gold"> MEDIA</span>
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="text-ivory/70 transition-colors hover:text-ivory"
            >
              <X className="h-6 w-6" strokeWidth={1.5} />
            </button>
          </div>

          <ul className="mt-16 flex flex-col gap-7">
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.href}
                className={`transition-all duration-500 ${
                  menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: menuOpen ? `${i * 80 + 100}ms` : '0ms' }}
              >
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="font-heading text-2xl font-light text-ivory/90 transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="mt-auto mb-6 border border-gold/50 px-6 py-3 text-center text-xs font-light uppercase tracking-wider text-gold transition-all hover:bg-gold hover:text-charcoal-900"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </>
  );
}
