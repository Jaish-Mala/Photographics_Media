import { useState, type FormEvent } from 'react';
import { MessageCircle, Phone, Mail, Send, Check } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

// Placeholder contact links — replace with actual numbers/emails when confirmed
const WHATSAPP_URL = '#';
const CALL_URL = '#';
const EMAIL_URL = '#';

export default function Contact() {
  const { ref: headingRef } = useReveal<HTMLHeadingElement>();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-charcoal-950 px-6 py-28 lg:py-40">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-light uppercase tracking-ultra-wide text-gold/70">
            Get in Touch
          </p>
          <h2
            ref={headingRef}
            className="reveal font-heading text-4xl font-light text-ivory sm:text-5xl lg:text-6xl"
          >
            Let's Tell Your Story
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-ivory/50">
            Planning a wedding, pre-wedding shoot or special celebration? Let's
            talk about your vision.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          {/* Contact methods */}
          <div className="flex flex-col gap-4">
            <ContactLink
              icon={MessageCircle}
              label="WhatsApp"
              href={WHATSAPP_URL}
            />
            <ContactLink
              icon={Phone}
              label="Call"
              href={CALL_URL}
            />
            <ContactLink
              icon={Mail}
              label="Email"
              href={EMAIL_URL}
            />
          </div>

          {/* Enquiry form */}
          <div className="rounded-sm border border-ivory/10 bg-charcoal-900/50 p-6 lg:p-10">
            {submitted ? (
              <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold/30">
                  <Check className="h-8 w-8 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-2xl font-light text-ivory">
                  Thank You
                </h3>
                <p className="mt-3 max-w-xs text-sm font-light leading-relaxed text-ivory/50">
                  Your enquiry has been received. We'll be in touch with you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-xs font-light uppercase tracking-wider text-gold transition-colors hover:text-gold-light"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" name="name" type="text" placeholder="Your full name" required />
                  <Field label="Phone Number" name="phone" type="tel" placeholder="Your phone number" required />
                </div>
                <Field label="Email" name="email" type="email" placeholder="Your email address" required />

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="eventType" className="mb-2 block text-xs font-light uppercase tracking-wider text-ivory/50">
                      Event Type
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      className="w-full border-b border-ivory/20 bg-transparent py-3 text-sm font-light text-ivory outline-none transition-colors focus:border-gold [&>option]:bg-charcoal-900"
                    >
                      <option value="">Select type</option>
                      <option value="wedding">Wedding</option>
                      <option value="pre-wedding">Pre-Wedding</option>
                      <option value="events">Events</option>
                      <option value="candid">Candid</option>
                      <option value="films">Wedding Films</option>
                    </select>
                  </div>
                  <Field label="Event Date" name="eventDate" type="date" />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-xs font-light uppercase tracking-wider text-ivory/50">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your celebration..."
                    className="w-full resize-none border-b border-ivory/20 bg-transparent py-3 text-sm font-light text-ivory outline-none transition-colors focus:border-gold placeholder:text-ivory/25"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 border border-gold/50 px-8 py-3.5 text-xs font-light uppercase tracking-wider text-gold transition-all duration-300 hover:bg-gold hover:text-charcoal-900"
                >
                  Send Enquiry
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  icon: Icon,
  label,
  href,
}: {
  icon: typeof MessageCircle;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 border border-ivory/10 bg-charcoal-900/50 p-5 transition-all duration-300 hover:border-gold/30"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/20 transition-colors group-hover:border-gold/50">
        <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
      </div>
      <span className="text-sm font-light uppercase tracking-wider text-ivory/70 transition-colors group-hover:text-ivory">
        {label}
      </span>
    </a>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-xs font-light uppercase tracking-wider text-ivory/50">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full border-b border-ivory/20 bg-transparent py-3 text-sm font-light text-ivory outline-none transition-colors focus:border-gold placeholder:text-ivory/25"
      />
    </div>
  );
}
