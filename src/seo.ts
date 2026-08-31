import { content } from './content';
import { OG_IMAGE, SITE_NAME, SITE_URL } from './site';

const EMAIL = 'contact@noematic.eu';
const PERSON_ID = `${SITE_URL}/#person`;
const ORG_ID = `${SITE_URL}/#org`;

const address = {
  '@type': 'PostalAddress',
  streetAddress: '28 avenue du Maréchal Lyautey',
  postalCode: '49240',
  addressLocality: 'Avrillé',
  addressRegion: 'Pays de la Loire',
  addressCountry: 'FR',
};

export function homeJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': PERSON_ID,
        name: 'Baptiste Boussemart',
        jobTitle: content.hero.title,
        email: EMAIL,
        url: SITE_URL,
        address,
        knowsAbout: ['Go', 'Kubernetes', 'observability', 'PostgreSQL'],
        worksFor: { '@id': ORG_ID },
      },
      {
        '@type': 'ProfessionalService',
        '@id': ORG_ID,
        name: SITE_NAME,
        url: SITE_URL,
        email: EMAIL,
        image: new URL(OG_IMAGE, SITE_URL).href,
        founder: { '@id': PERSON_ID },
        address,
        areaServed: [
          { '@type': 'City', name: 'Angers' },
          { '@type': 'Country', name: 'France' },
        ],
        availableLanguage: ['fr', 'en'],
        description: content.meta.description,
        knowsAbout: ['Go', 'Kubernetes', 'OpenTelemetry'],
        sameAs: content.socialLinks.map((s) => s.url),
      },
    ],
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}
