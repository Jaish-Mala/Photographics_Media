export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES = [
  {
    id: 'wedding',
    title: 'Wedding Photography',
    description:
      'Capture emotions, rituals, people and unforgettable moments throughout the wedding.',
    image:
      'https://images.pexels.com/photos/38147801/pexels-photo-38147801.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'pre-wedding',
    title: 'Pre-Wedding Photography',
    description:
      "Romantic and cinematic couple portraits designed around the couple's personality.",
    image:
      'https://images.pexels.com/photos/37298843/pexels-photo-37298843.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'films',
    title: 'Wedding Films',
    description:
      'Cinematic video storytelling that brings the atmosphere and emotions back to life.',
    image:
      'https://images.pexels.com/photos/17312688/pexels-photo-17312688.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'events',
    title: 'Event Photography',
    description:
      'Professional coverage for engagements, receptions, birthdays and special celebrations.',
    image:
      'https://images.pexels.com/photos/17262009/pexels-photo-17262009.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'candid',
    title: 'Candid Photography',
    description:
      'Natural moments captured without forcing poses.',
    image:
      'https://images.pexels.com/photos/16632447/pexels-photo-16632447.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export type PortfolioItem = {
  id: number;
  category: 'Weddings' | 'Pre-Weddings' | 'Events';
  image: string;
  alt: string;
  span: 'tall' | 'wide' | 'normal';
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    category: 'Weddings',
    image:
      'https://images.pexels.com/photos/38147801/pexels-photo-38147801.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Indian couple in traditional wedding attire during an outdoor ceremony',
    span: 'wide',
  },
  {
    id: 2,
    category: 'Pre-Weddings',
    image:
      'https://images.pexels.com/photos/37380257/pexels-photo-37380257.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Tender moment between a couple during a pre-wedding shoot',
    span: 'tall',
  },
  {
    id: 3,
    category: 'Weddings',
    image:
      'https://images.pexels.com/photos/39341211/pexels-photo-39341211.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Bride and groom exchanging rings during a traditional Indian wedding',
    span: 'normal',
  },
  {
    id: 4,
    category: 'Events',
    image:
      'https://images.pexels.com/photos/17262009/pexels-photo-17262009.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Vibrant outdoor Indian wedding with dancing and colorful attire',
    span: 'wide',
  },
  {
    id: 5,
    category: 'Pre-Weddings',
    image:
      'https://images.pexels.com/photos/37439318/pexels-photo-37439318.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Couple enjoying a romantic pre-wedding moment in a park',
    span: 'tall',
  },
  {
    id: 6,
    category: 'Weddings',
    image:
      'https://images.pexels.com/photos/18897125/pexels-photo-18897125.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Hands in a traditional Indian wedding ritual with henna and bangles',
    span: 'normal',
  },
  {
    id: 7,
    category: 'Events',
    image:
      'https://images.pexels.com/photos/5759331/pexels-photo-5759331.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Groom and friends celebrating a joyful traditional Indian wedding',
    span: 'wide',
  },
  {
    id: 8,
    category: 'Weddings',
    image:
      'https://images.pexels.com/photos/35327940/pexels-photo-35327940.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Happy bride at a colorful Indian haldi ceremony with flower jewelry',
    span: 'normal',
  },
  {
    id: 9,
    category: 'Pre-Weddings',
    image:
      'https://images.pexels.com/photos/30161925/pexels-photo-30161925.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Tender pre-wedding moment between a couple captured outdoors',
    span: 'tall',
  },
  {
    id: 10,
    category: 'Events',
    image:
      'https://images.pexels.com/photos/16583021/pexels-photo-16583021.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Women dancing joyfully at an Indian wedding party',
    span: 'normal',
  },
  {
    id: 11,
    category: 'Weddings',
    image:
      'https://images.pexels.com/photos/27876529/pexels-photo-27876529.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Bride and groom in traditional attire exchanging jewelry',
    span: 'normal',
  },
  {
    id: 12,
    category: 'Pre-Weddings',
    image:
      'https://images.pexels.com/photos/21319667/pexels-photo-21319667.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Loving couple in elegant attire on a mountain enveloped by nature',
    span: 'tall',
  },
];

export const PORTFOLIO_FILTERS = ['All', 'Weddings', 'Pre-Weddings', 'Events'] as const;

export const WHY_CHOOSE_US = [
  {
    title: 'Emotion First',
    description: 'We focus on genuine moments and real emotions.',
    icon: 'Heart',
  },
  {
    title: 'Cinematic Storytelling',
    description:
      'Images and films are presented as part of a complete visual story.',
    icon: 'Film',
  },
  {
    title: 'Personal Approach',
    description:
      'Every celebration has its own personality and deserves a personal approach.',
    icon: 'UserRound',
  },
  {
    title: 'Attention to Detail',
    description: 'From small details to big moments, every frame matters.',
    icon: 'Aperture',
  },
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Tell Us Your Story',
    description: 'Share your vision, your celebration, and the moments that matter most to you.',
  },
  {
    number: '02',
    title: 'Plan Your Shoot',
    description:
      'We work together to plan the coverage, locations, and creative direction.',
  },
  {
    number: '03',
    title: 'Capture The Moments',
    description:
      'On the day, we document every emotion, ritual, and detail as it unfolds.',
  },
  {
    number: '04',
    title: 'Relive The Memories',
    description:
      'Receive beautifully edited photographs and films that tell your story.',
  },
];

// Demo testimonials — these are NOT real customer reviews.
// Replace with authentic testimonials once available.
export const TESTIMONIALS = [
  {
    quote: 'Your wedding memories deserve a story of their own.',
    author: 'Demo Content',
  },
  {
    quote: 'Beautiful moments, thoughtfully captured.',
    author: 'Demo Content',
  },
  {
    quote: 'Every frame should feel like a memory.',
    author: 'Demo Content',
  },
];

export const INSTAGRAM_TILES = [
  'https://images.pexels.com/photos/38147801/pexels-photo-38147801.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/37380257/pexels-photo-37380257.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/17262009/pexels-photo-17262009.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/16632447/pexels-photo-16632447.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/35327940/pexels-photo-35327940.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/39341211/pexels-photo-39341211.jpeg?auto=compress&cs=tinysrgb&w=600',
];

export const HERO_IMAGE =
  'https://images.pexels.com/photos/38147801/pexels-photo-38147801.jpeg?auto=compress&cs=tinysrgb&w=1920';

export const FEATURED_STORY_IMAGE =
  'https://images.pexels.com/photos/39137524/pexels-photo-39137524.jpeg?auto=compress&cs=tinysrgb&w=1920';

export const ABOUT_IMAGE =
  'https://images.pexels.com/photos/31296631/pexels-photo-31296631.jpeg?auto=compress&cs=tinysrgb&w=1200';

export const CONTACT_IMAGE =
  'https://images.pexels.com/photos/30559103/pexels-photo-30559103.jpeg?auto=compress&cs=tinysrgb&w=1200';
