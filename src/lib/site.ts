// Zentrale Site-Konfiguration: Navigation, Helfer für base-aware Links.

const BASE = import.meta.env.BASE_URL; // z.B. "/Landesblasorchester-GlowUp/"

/** Erzeugt einen base-bewussten internen Link. */
export function url(path = '/'): string {
  const base = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
  if (!path.startsWith('/')) path = '/' + path;
  return (base + path).replace(/\/+$/, '') || '/';
}

/** Ist der gegebene Pfad aktuell aktiv? */
export function isActive(current: string, path: string): boolean {
  const target = url(path);
  if (target === url('/')) return current === url('/') || current === url('/') + '/';
  return current === target || current === target + '/' || current.startsWith(target + '/');
}

export const site = {
  name: 'Landesblasorchester Baden-Württemberg',
  short: 'LBO',
  tagline: 'Aus Liebe zur Musik',
  claim: 'Sinfonische Blasmusik der Spitzenklasse',
  email: 'walter.melcher@landesblasorchester.de',
};

export type NavChild = { label: string; href: string; external?: boolean };
export type NavItem = { label: string; href?: string; children?: NavChild[] };

export const nav: NavItem[] = [
  {
    label: 'Konzerte',
    href: '/konzerttermine',
    children: [
      { label: 'Konzerttermine', href: '/konzerttermine' },
      { label: 'Programm', href: '/programm' },
    ],
  },
  {
    label: 'Medien',
    children: [
      { label: 'CDs & DVDs', href: '/cds' },
      { label: 'Wildflowers', href: '/wildflowers' },
      { label: 'Presse', href: '/presse' },
      { label: 'Newsletter', href: '/newsletter' },
      { label: 'YouTube', href: 'https://www.youtube.com/user/landesblasorchester', external: true },
      { label: 'Facebook', href: 'https://www.facebook.com/Landesblasorchester/', external: true },
      { label: 'Instagram', href: 'https://www.instagram.com/landesblasorchester/', external: true },
      { label: 'Fanshop', href: 'https://landesblasorchester.myspreadshop.de/', external: true },
    ],
  },
  {
    label: 'Orchester',
    href: '/ueber-uns',
    children: [
      { label: 'Über uns', href: '/ueber-uns' },
      { label: 'Künstlerische Leitung', href: '/kuenstlerische-leitung' },
      { label: 'Vorstand', href: '/vorstand' },
      { label: 'Mitglied werden', href: '/mitglied-werden' },
      { label: 'LBO-hautnah', href: '/lbo-hautnah' },
      { label: 'Lehrkonzert', href: '/lehrkonzert' },
    ],
  },
  { label: 'Förderverein', href: '/foerderverein' },
  { label: 'Kontakt', href: '/kontakt' },
];

export const socials = [
  { label: 'YouTube', href: 'https://www.youtube.com/user/landesblasorchester' },
  { label: 'Facebook', href: 'https://www.facebook.com/Landesblasorchester/' },
  { label: 'Instagram', href: 'https://www.instagram.com/landesblasorchester/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/landesblasorchester' },
];
