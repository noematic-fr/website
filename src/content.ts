export type ProductStatus = 'pilot' | 'live' | 'studio' | 'beta';

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

export interface Fact {
  title: string;
  body: string;
  href?: string;
  cta?: string;
}

export interface ProofItem {
  name: string;
  role: string;
  body: string;
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

export interface Cta {
  label: string;
  href: string;
}

export interface MediaCatalogerPage {
  meta: { title: string; description: string };
  nav: {
    studio: string;
    product: string;
    langLabel: string;
    langCode: string;
    langHref: string;
  };
  hero: {
    kicker: string;
    title: string;
    lead: string;
    status: string;
    version: string;
    imageAlt: string;
    primaryCta: Cta;
    secondaryCta: Cta;
  };
  problem: {
    title: string;
    items: { title: string; body: string }[];
  };
  steps: {
    title: string;
    subtitle: string;
    items: { n: string; title: string; body: string }[];
  };
  features: {
    title: string;
    subtitle: string;
    items: { title: string; body: string }[];
  };
  audience: { title: string; items: string[] };
  pricing: {
    title: string;
    subtitle: string;
    note: string;
    plans: {
      name: string;
      price: string;
      period: string;
      blurb: string;
      featured?: boolean;
      cta: Cta;
      includes: string[];
    }[];
  };
  honesty: { title: string; items: string[] };
  faq: { title: string; items: { q: string; a: string }[] };
  close: { title: string; body: string; cta: Cta };
}

export const content = {
  meta: {
    title: 'Noematic — Missions backend Go, temps partagé',
    description:
      'Ingénieur indépendant à Avrillé : backend Go, Kubernetes, observabilité. 3–4 j/sem., Angers ou remote France, déplacement ponctuel.',
  },
  hero: {
    title: 'Ingénieur indépendant',
    subtitle: 'Backend Go & platform · 3–4 j/sem. · Angers ou remote',
    description:
      'Missions temps partagé : services Go en production, Kubernetes, observabilité. Le reste du calendrier, j’enseigne et je construis mes outils — ils sont sur Qi.',
  },
  availability: {
    title: 'Comment je travaille',
    subtitle: 'Temps partagé assumé — pas un CDI déguisé.',
    items: [
      {
        title: '3–4 jours / semaine',
        body: 'Intervenant ESPL / My Digital School (SysML, embarqué, logiciel) : d’où le rythme. Le reste du temps = mes projets.',
      },
      {
        title: 'Angers ou remote',
        body: 'Avrillé (49) · full remote France / EU · déplacement ponctuel Grand Ouest. Pas de présentiel exclusif hors zone.',
      },
      {
        title: 'Écrivez',
        body: 'Un mail avec le besoin. On voit si ça matche.',
        href: 'mailto:contact@noematic.eu?subject=Mission',
        cta: 'contact@noematic.eu',
      },
    ] satisfies Fact[],
  },
  services: {
    title: 'Ce que je peux prendre',
    subtitle:
      'Des systèmes qui tournent, pas un deck. Missions backend / platform, pas un build produit de A à Z.',
    items: [
      {
        icon: '⌘',
        title: 'Backend Go',
        description:
          'APIs, microservices, durcissement prod : perf, fiabilité, dette, tests. Go au quotidien, Linux, Postgres.',
        tags: ['Go', 'PostgreSQL', 'HTTP', 'gRPC'],
      },
      {
        icon: '☁',
        title: 'Kubernetes & cloud',
        description:
          'EKS / GKE, CI/CD, Helm, Terraform, maîtrise des coûts. Ce que j’ai fait sur de l’infra nœuds et de l’IoT à volume.',
        tags: ['Kubernetes', 'AWS', 'GCP', 'Terraform'],
      },
      {
        icon: '◉',
        title: 'Observabilité',
        description:
          'Traces, metrics, logs — OpenTelemetry, Datadog, Prometheus/Grafana. Migration d’APM, pas un dashboard cosmétique.',
        tags: ['OpenTelemetry', 'Datadog', 'Prometheus'],
      },
      {
        icon: '◈',
        title: 'Self-hosted & RAG',
        description:
          'Si le besoin est là : retrieval privé, stockage embarqué, pas d’envoi du corpus chez un LLM US. Optionnel, pas le pitch par défaut.',
        tags: ['RAG', 'RGPD', 'Rust/Go'],
      },
    ] satisfies Service[],
  },
  proof: {
    title: 'Déjà en prod',
    subtitle: 'Missions, pas des slides.',
    items: [
      {
        name: 'ConsenSys Infura',
        role: 'Infrastructure nœuds Ethereum',
        body: 'AWS EKS, Karpenter, ArgoCD, Helm, Terraform — fiabilité, perf, réduction de facture cloud.',
        tags: ['Go', 'EKS', 'Terraform'],
      },
      {
        name: 'Objenious',
        role: 'Bouygues Telecom · IoT LoRaWAN',
        body: 'Microservices Go sur GCP GKE, haut volume : Cassandra, Pub/Sub, Kafka.',
        tags: ['Go', 'GKE', 'Kafka'],
      },
      {
        name: 'LivingPackets',
        role: 'Freelance backend · 2025',
        body: 'Stabilisation services Go, migration tracing Instana → OpenTelemetry / Datadog.',
        tags: ['Go', 'OTel', 'Datadog'],
      },
      {
        name: 'Alluvial Finance',
        role: 'Freelance backend · 2025',
        body: 'Staking / cache RPC Ethereum — chemin chaud, pas un POC.',
        tags: ['Go', 'RPC', 'cache'],
      },
    ] satisfies ProofItem[],
  },
  newsletter: {
    title: 'Newsletter',
    subtitle:
      'Notes d’ingénierie et disponibilités — une fois par mois, sans spam.',
  },
  lab: {
    title: 'Apps, jeux et outils',
    subtitle:
      'Les produits indie — catalogue de disques, jeux, RAG, PugDB — vivent sur Qi. Ici, c’est les missions.',
    url: 'https://qi.noematic.fr',
    cta: 'Voir Qi',
  },
  products: {
    title: 'Outils & produits',
    subtitle: '',
    statusLabels: {
      pilot: 'pilote',
      live: 'live',
      studio: 'studio',
      beta: 'beta',
    } satisfies Record<ProductStatus, string>,
    items: [] satisfies Product[],
  },
  contact: {
    title: 'Contact',
    emailLabel: 'Email',
    email: 'contact@noematic.eu',
    addressLabel: 'Adresse',
    address: '28 avenue du Maréchal Lyautey 49240 Avrillé, France',
    note: 'Un mail avec le besoin suffit.',
  },
  footer: {
    rights: 'Tous droits réservés.',
  },
  notFound: {
    title: 'Page introuvable — Noematic',
    heading: 'Page introuvable',
    body: 'Cette adresse n’existe pas sur noematic.fr.',
    cta: 'Retour à l’accueil',
  },
  socialLinks: [
    { icon: 'qi', url: 'https://qi.noematic.fr/', label: 'Qi' },
    { icon: 'linkedin', url: 'https://www.linkedin.com/company/noematic/', label: 'LinkedIn' },
    { icon: 'github', url: 'https://github.com/noematic-eu', label: 'GitHub' },
    { icon: 'xcom', url: 'https://x.com/Noematic_eu', label: 'X' },
  ] satisfies SocialLink[],
  mediaCataloger: {
    meta: {
      title: 'Media Cataloger — indexer disques et bibliothèques | Noematic',
      description:
        'Catalogue local de disques et bibliothèques, y compris hors ligne. Retrouvez fichiers et doublons, voyez quoi protéger, restez sur votre machine. Beta payante 0.2 pour macOS, Windows et Linux.',
    },
    nav: {
      studio: 'Noematic',
      product: 'Media Cataloger',
      langLabel: 'EN',
      langCode: 'en',
      langHref: 'https://noematic.eu/media-cataloger',
    },
    hero: {
      kicker: 'Catalogue desktop · beta 0.2',
      title: 'Sachez où vivent vos fichiers — même quand le disque est débranché.',
      lead: 'Media Cataloger indexe disques et bibliothèques sur votre machine, y compris les volumes hors ligne. Cherchez dedans, trouvez les doublons sans parier, et voyez quoi brancher, copier ou vérifier. Ce n’est pas un logiciel de sauvegarde.',
      status: 'beta',
      version: '0.2 · macOS · Windows · Linux · FR/EN',
      imageAlt:
        'Disque dur, SSD, carte SD, SSD portable et disque optique sur un bureau sombre',
      primaryCta: { label: 'Voir les tarifs', href: '#pricing' },
      secondaryCta: { label: 'Comment ça marche', href: '#how' },
    },
    problem: {
      title: 'Le fichier n’est jamais sur le disque qui est branché.',
      items: [
        {
          title: 'Les volumes hors ligne sont invisibles',
          body: 'USB, archives et vieux portables restent dans un tiroir. Le Finder ne voit que ce qui est monté aujourd’hui.',
        },
        {
          title: 'Les copies se multiplient sans registre',
          body: 'Le même projet vit sur un SSD de travail, un HDD de backup et un NAS. Impossible de dire quelle copie est encore la seule.',
        },
        {
          title: 'Les outils de ménage sont imprudents',
          body: 'Un « doublon » dans une liste ne prouve pas qu’une autre copie lisible existe encore. Effacer depuis un index périmé détruit l’original.',
        },
      ],
    },
    steps: {
      title: 'Un catalogue, puis des conseils — rien de lourd par défaut.',
      subtitle:
        'Les enrichissements (aperçus, index ZIP, recherche de contenu, tags IA) sont opt-in. D’abord le walk ; l’intelligence ensuite, si vous en avez besoin.',
      items: [
        {
          n: '1',
          title: 'Ajouter un média',
          body: 'Un dossier, un disque externe, ou un hôte distant en SSH. Donnez-lui un rôle : travail, backup, archive ou transit.',
        },
        {
          n: '2',
          title: 'Walk',
          body: 'Inventaire des fichiers et dossiers dans un catalogue local. L’arbre reste consultable quand le volume est débranché.',
        },
        {
          n: '3',
          title: 'Chercher et parcourir',
          body: 'Recherche par nom, extension ou tag sur tous les volumes catalogués — connectés ou non.',
        },
        {
          n: '4',
          title: 'Agir avec un filet',
          body: 'L’accueil signale ce qui est périmé, plein ou non couvert. Le nettoyage des doublons est verrouillé tant que vous ne le déverrouillez pas, et préfère la quarantaine.',
        },
      ],
    },
    features: {
      title: 'Ce que fait vraiment la 0.2',
      subtitle:
        'Le positionnement, c’est disques et données — pas « chercheur de doublons plus IA ». L’IA optionnelle est derrière un interrupteur.',
      items: [
        {
          title: 'Catalogue hors ligne',
          body: 'Parcourez la structure d’un disque non connecté : dates, tailles, chemins. Re-scannez quand vous le rebranchez.',
        },
        {
          title: 'Recherche multi-volumes',
          body: 'Recherche par nom et extension sur tout le catalogue. Recherche par tag quand vous avez organisé des dossiers ainsi.',
        },
        {
          title: 'Doublons prudents',
          body: 'Copies sur un disque ou entre disques. La suppression est désactivée par défaut. Un prévol vérifie une seconde copie en ligne ; la quarantaine plutôt que l’effacement.',
        },
        {
          title: 'Conseiller de disques',
          body: 'Rôle et type sur chaque volume, puis des insights explicables : jamais scanné, presque plein, travail sur disque lent, pas de volume backup.',
        },
        {
          title: 'Couverture de backup, pas la backup',
          body: 'Déclarez qu’un dossier de travail doit exister sur un volume backup. L’app surveille le catalogue après votre copie ; elle ne copie pas à votre place.',
        },
        {
          title: 'Distant, RAG, vision — opt-in',
          body: 'Walk SSH avec nmci, extraction de contenu + agent RAG local, tags d’images via Ollama ou xAI. Offre Studio. Rien de tout cela ne tourne tant que vous ne le demandez pas.',
        },
      ],
    },
    audience: {
      title: 'Pour ceux qui ont plus de disques que le Finder n’en tient en tête.',
      items: [
        'Photographes et vidéastes qui font tourner des disques externes',
        'Homelabs et archives perso (NAS + USB + vieux portables)',
        'Petits studios qui mélangent SSD de travail, HDD de backup et un partage',
        'Quiconque a perdu un fichier « sur un disque quelque part »',
      ],
    },
    pricing: {
      title: 'Licences, envoyées par email',
      subtitle:
        'Plus de téléchargement public des vieux builds Qi 0.0.1. La 0.2 est en beta : Hobby est gratuit (1 volume) ; Personal et Studio sont payants. Nous envoyons un build macOS, Windows ou Linux — et une clé pour les formules payantes.',
      note: 'Paiement sur facture (SEPA ou carte, convenu par email). Une licence Personal est pour vous, sur vos machines. Studio couvre un opérateur plus distant / RAG / vision. Prix en euros, HT le cas échéant.',
      plans: [
        {
          name: 'Hobby',
          price: '0 €',
          period: 'à vie',
          blurb: 'Prouvez le catalogue sur un volume avant de payer.',
          cta: {
            label: 'Demander Hobby',
            href: 'mailto:contact@noematic.eu?subject=Media%20Cataloger%20%E2%80%94%20Hobby',
          },
          includes: [
            '1 volume local',
            'Walk, parcours, recherche par nom',
            'Arbre hors ligne de ce volume',
            'Mode simple, FR/EN',
          ],
        },
        {
          name: 'Personal',
          price: '39 €',
          period: 'une fois',
          blurb: 'Disques locaux illimités — la formule que la plupart des gens devraient acheter.',
          featured: true,
          cta: {
            label: 'Demander Personal',
            href: 'mailto:contact@noematic.eu?subject=Media%20Cataloger%20%E2%80%94%20Licence%20Personal',
          },
          includes: [
            'Volumes locaux illimités',
            'Doublons + quarantaine',
            'Rôles, tags, insights Accueil',
            'Aperçus images et index ZIP',
            'Surveillance des règles de backup',
            '1 an de builds 0.2.x',
          ],
        },
        {
          name: 'Studio',
          price: '89 €',
          period: '/ an',
          blurb: 'Hôtes distants, recherche dans le contenu, tags d’images pour une archive de travail.',
          cta: {
            label: 'Demander Studio',
            href: 'mailto:contact@noematic.eu?subject=Media%20Cataloger%20%E2%80%94%20Licence%20Studio',
          },
          includes: [
            'Tout Personal',
            'Walk distant en SSH',
            'Extraction de contenu + recherche RAG',
            'Tags d’images IA (Ollama ou xAI)',
            'Support email',
            'Renouvellement avec les builds Studio courants',
          ],
        },
      ],
    },
    honesty: {
      title: 'Dit sans fard',
      items: [
        'Le catalogue reste sur votre ordinateur. Rien n’est envoyé ailleurs sauf vision cloud ou agent RAG que vous lancez vous-même.',
        'Ce n’est pas Time Machine, rsync, ni une appliance de sauvegarde. Les insights de couverture supposent que vous copiez, puis que vous re-scannez.',
        'La 0.2 est une beta : UX simple, conseiller, RAG, distant et nettoyage prudent sont dans le produit. La fusion sur la branche publique et les builds magasin avancent encore — la livraison se fait par email, pas par un store.',
        'iOS et Android ne font pas partie de cette offre. macOS est une app desktop (Fyne, plus un shell Swift natif). Windows et Linux sont Fyne.',
        'Une clé de licence existe dans l’app (À propos → Saisir la licence). Le verrouillage Hobby / Personal / Studio se durcit ; nous honorons la formule achetée.',
      ],
    },
    faq: {
      title: 'Questions',
      items: [
        {
          q: 'Est-ce open source ?',
          a: 'Non. Media Cataloger est une app desktop propriétaire de Noematic. Des outils connexes du studio, comme l’agent RAG, ont leurs propres sites et licences.',
        },
        {
          q: 'Faut-il internet ?',
          a: 'Non pour le catalogue, la recherche, les doublons et les insights. Internet est optionnel pour les tags d’images xAI ou un agent RAG distant. Ollama reste local.',
        },
        {
          q: 'Va-t-il supprimer des fichiers tout seul ?',
          a: 'Non. Le nettoyage est verrouillé tant que vous n’acceptez pas un avertissement dans Réglages. Préférez la quarantaine. Le prévol veut une seconde copie en ligne avec le même hash.',
        },
        {
          q: 'Comment obtenir l’app ?',
          a: 'Écrivez à contact@noematic.eu avec la formule (Hobby, Personal, Studio), votre nom et votre OS. Nous envoyons un build et, pour les formules payantes, une clé. Les zips 0.0.1 sur Qi sont retirés.',
        },
        {
          q: 'C’est un NeoFinder ?',
          a: 'Le cœur, c’est le catalogue hors ligne : vous parcourez un volume non monté. L’écart, c’est le conseiller (rôles, couverture, insights) et le contenu/RAG optionnel — pas un DAM ni un éditeur photo.',
        },
      ],
    },
    close: {
      title: 'Commencez avec un disque. Payez quand le catalogue le mérite.',
      body: 'Hobby suffit pour scanner un volume et le chercher hors ligne. Personal est le produit. Studio est pour les hôtes distants et le contenu que vous interrogez vraiment.',
      cta: {
        label: 'Écrire à Noematic',
        href: 'mailto:contact@noematic.eu?subject=Media%20Cataloger%20licence',
      },
    },
  } satisfies MediaCatalogerPage,
};