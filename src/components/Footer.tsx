import { Camera, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { NAV_LINKS } from '@/data/content';

// Placeholder social links — replace with verified accounts when available
const SOCIAL_LINKS = {
  instagram: '#',
  facebook: '#',
  whatsapp: '#',
};

export default function Footer() {
  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-ivory/10 bg-charcoal-950 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Logo + tagline */}
          <div>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="flex items-center gap-2.5"
              aria-label="Photographics Media home"
            >
              <Camera className="h-5 w-5 text-gold" strokeWidth={1.5} />
              <span className="font-heading text-lg font-medium tracking-wider-2 text-ivory">
                PHOTOGRAPHICS<span className="text-gold"> MEDIA</span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm font-light leading-relaxed text-ivory/40">
              Turning moments into stories.
            </p>
          </div>

          {/* Links */}
          <div className="md:justify-self-center">
            <h3 className="mb-5 text-xs font-light uppercase tracking-wider text-gold/70">
              Navigate
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-sm font-light text-ivory/50 transition-colors hover:text-ivory"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:justify-self-end">
            <h3 className="mb-5 text-xs font-light uppercase tracking-wider text-gold/70">
              Connect
            </h3>
            <div className="flex gap-4">
              <SocialIcon href={SOCIAL_LINKS.instagram} label="Instagram">
                <Instagram className="h-5 w-5" strokeWidth={1.5} />
              </SocialIcon>
              <SocialIcon href={SOCIAL_LINKS.facebook} label="Facebook">
                <Facebook className="h-5 w-5" strokeWidth={1.5} />
              </SocialIcon>
              <SocialIcon href={SOCIAL_LINKS.whatsapp} label="WhatsApp">
                <MessageCircle className="h-5 w-5" strokeWidth={1.5} />
              </SocialIcon>
            </div>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-14 border-t border-ivory/10 pt-8 text-center">
          <p className="text-xs font-light text-ivory/30">
            © 2026 Photographics Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/10 text-ivory/50 transition-all duration-300 hover:border-gold/40 hover:text-gold"
    >
      {children}
    </a>
  );
}
