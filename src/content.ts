export type ProductStatus = 'beta' | 'live' | 'studio';

export interface SocialLink {
  icon: 'qi' | 'linkedin' | 'github' | 'xcom';
  url: string;
  label: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

export interface Product {
  name: string;
  tagline: string;
  url: string;
  status: ProductStatus;
  tags: string[];
  cta: string;
}

export const content = {
  meta: {
    title: 'Noematic — Ingénierie logicielle & IA appliquée',
    description:
      'Systèmes distribués, pipelines RAG et produits SaaS — développés en Go depuis Avrillé, France.',
  },
  hero: {
    title: 'Studio d’ingénierie',
    subtitle: 'Plus de 15 ans à construire des systèmes distribués et data-intensive',
    description:
      'Nous concevons et déployons des plateformes backend, de l’IA appliquée et des SaaS indie — de l’architecture à la production.',
  },
  services: {
    title: 'Ce que nous faisons',
    subtitle:
      'Ingénierie senior pour les équipes qui ont besoin de systèmes production-ready, pas de slides.',
    items: [
      {
        icon: '☁',
        title: 'Systèmes distribués & cloud',
        description:
          'Backends Go, Kubernetes, AWS/GCP — APIs haute concurrence, observabilité et infrastructure maîtrisée en coûts.',
        tags: ['Go', 'Kubernetes', 'AWS', 'OpenTelemetry'],
      },
      {
        icon: '◈',
        title: 'IA appliquée & RAG',
        description:
          'Pipelines de retrieval, agents et recherche hybride — self-hosted, évaluable, compatible RGPD.',
        tags: ['RAG', 'Embeddings', 'Ollama', 'Vector search'],
      },
      {
        icon: '⬡',
        title: 'Ingénierie produit SaaS',
        description:
          'Du prototype à la beta payante — auth, billing, landing pages et déploiements prêts à dogfooder.',
        tags: ['SaaS', 'Fiber', 'PostgreSQL', 'Docker'],
      },
      {
        icon: '◎',
        title: 'Outils desktop & data',
        description:
          'Apps cross-platform avec GUI native, stockage embarqué et workflows offline-first.',
        tags: ['Fyne', 'Badger', 'Rust', 'CLI'],
      },
    ] satisfies Service[],
  },
  products: {
    title: 'Produits publiés',
    subtitle:
      'Projets live du portfolio Noematic — testez-les, cassez-les, dites-nous ce que vous en pensez.',
    items: [
      {
        name: 'Living Memoirs',
        tagline:
          'Guidez les entretiens familiaux, structurez le récit, puis dialoguez avec la biographie — ancrée dans les propres mots de l’auteur.',
        url: 'https://living-memoirs.noematic.eu',
        status: 'beta',
        tags: ['SaaS', 'IA', 'RGPD'],
        cta: 'Essayer la démo',
      },
      {
        name: 'WatchNo.co',
        tagline:
          'RUM léger pour les builders no-code — erreurs JS, fetches échoués et Core Web Vitals sans la complexité Datadog.',
        url: 'https://watchnocode.noematic.eu',
        status: 'beta',
        tags: ['SaaS', 'Observabilité', 'Webflow'],
        cta: 'Voir les tarifs',
      },
      {
        name: 'AI RAG Agent',
        tagline:
          'Service RAG self-hosted en Go — recherche hybride BM25 + vectorielle, chunks persistés, gates d’éval production.',
        url: 'https://rag.noematic.eu',
        status: 'live',
        tags: ['Go', 'RAG', 'Open source'],
        cta: 'Explorer',
      },
      {
        name: 'Media Cataloger',
        tagline:
          'Indexation rapide de bibliothèques média sur SSD/NVMe — walk, dédup, birdview et sync RAG pour votre archive.',
        url: 'https://qi.noematic.eu/apps/media-cataloger',
        status: 'live',
        tags: ['Desktop', 'Go', 'macOS · Win · Linux'],
        cta: 'Télécharger',
      },
      {
        name: 'Qi',
        tagline:
          'Apps & jeux indie qualitatifs — notre studio consumer pour des expériences desktop et mobile soignées.',
        url: 'https://qi.noematic.fr',
        status: 'studio',
        tags: ['Apps', 'Jeux', 'Indie'],
        cta: 'Parcourir les apps',
      },
    ] satisfies Product[],
  },
  contact: {
    title: 'Contact',
    emailLabel: 'Email',
    email: 'contact@noematic.eu',
    addressLabel: 'Adresse',
    address: '28 avenue du Maréchal Lyautey 49240 Avrillé, France',
  },
  footer: {
    copyright: '2026 © Noematic. Tous droits réservés.',
  },
  socialLinks: [
    { icon: 'qi', url: 'https://qi.noematic.fr/', label: 'Qi' },
    { icon: 'linkedin', url: 'https://www.linkedin.com/company/noematic/', label: 'LinkedIn' },
    { icon: 'github', url: 'https://github.com/noematic-eu', label: 'GitHub' },
    { icon: 'xcom', url: 'https://x.com/Noematic_eu', label: 'X' },
  ] satisfies SocialLink[],
};