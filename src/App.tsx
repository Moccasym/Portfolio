import { useEffect, useState } from 'react';
import profileImage from './assets/profile.jpg';
import climberImage from './assets/climber.png';
import azoriImage from './assets/azori.png';
import fitelImage from './assets/fitel.png';
import cryptoClashImage from './assets/crypto-clash.png';
import faceDetectImage from './assets/facedetect.png';
import thesisImage from './assets/project.jpg';
import bluetoothImage from './assets/project1.jpg';
import labChipImage from './assets/project2.jpg';

type Language = 'en' | 'de' | 'es';

type Project = {
  title: string;
  eyebrow: string;
  built: string;
  learned: string;
  stack: string[];
  image: string;
  links: { label: string; href: string; external?: boolean }[];
};

type Content = {
  nav: { work: string; services: string; about: string; contact: string };
  hero: {
    eyebrow: string;
    title: string;
    role: string;
    text: string;
    primaryCta: string;
    secondaryCta: string;
    stack: string[];
    summaryLabel: string;
    summary: { label: string; value: string }[];
  };
  work: {
    eyebrow: string;
    title: string;
    intro: string;
    projects: Project[];
  };
  archiveSection: {
    eyebrow: string;
    title: string;
    intro: string;
    projects: Project[];
  };
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { title: string; text: string }[];
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    processLabel: string;
    process: string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    cardText: string;
    emailButton: string;
    githubButton: string;
    detailsLabel: string;
    emailLabel: string;
    locationLabel: string;
    locationValue: string;
    linkedinLabel: string;
  };
  projectLearnedLabel: string;
};

const languageOptions: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
  { code: 'es', label: 'ES' },
];

const contentByLanguage: Record<Language, Content> = {
  en: {
    nav: { work: 'Work', services: 'Expertise', about: 'About', contact: 'Contact' },
    hero: {
      eyebrow: 'Portfolio',
      title: 'Felix Steinchen',
      role: 'Product developer',
      text: 'Web, mobile, and practical AI-enabled software.',
      primaryCta: 'View projects',
      secondaryCta: 'Work with me',
      stack: ['React Native', 'Next.js', 'Node.js', 'TypeScript', 'AI workflows'],
      summaryLabel: 'At a glance',
      summary: [
        { label: 'Focus', value: 'Mobile, web, AI workflows' },
        { label: 'Based in', value: 'Germany, remote across Europe' },
        { label: 'Working style', value: 'Solo build, direct communication' },
      ],
    },
    work: {
      eyebrow: 'Selected work',
      title: 'Recent projects and product builds.',
      intro:
        'A mix of client-oriented product work, internal-tool style systems, and app concepts built to a usable level rather than left as static mockups.',
      projects: [
        {
          title: 'Climber',
          eyebrow: 'Mobile social product',
          built:
            'Built a climbing-focused social app with profiles, photo posts, partner matching, group scheduling, direct chat, group chat, stories, achievements, and activity tracking on top of a React Native app and Node + Mongo backend.',
          learned:
            'This project pushed me to balance product breadth with usability, and to get comfortable polishing the last 20 percent of mobile work: native builds, API reliability, dark UI consistency, and feature coherence across many screens.',
          stack: ['React Native', 'TypeScript', 'Node.js', 'MongoDB'],
          image: climberImage,
          links: [{ label: 'Ask for a demo', href: '#contact' }],
        },
        {
          title: 'Azori',
          eyebrow: 'AI services website',
          built:
            'Built and iterated a multilingual marketing and lead-generation site for private AI and on-prem LLM integration services, including a cleaner homepage structure, assistant flow, and production deployment path.',
          learned:
            'The main lesson here was how much strong positioning matters. Technical credibility only works if the site explains the offer clearly enough for non-technical buyers to understand it fast.',
          stack: ['Next.js', 'TypeScript', 'Tailwind', 'MongoDB'],
          image: azoriImage,
          links: [{ label: 'Visit azori.ai', href: 'https://azori.ai', external: true }],
        },
        {
          title: 'Crypto Clash',
          eyebrow: 'Web3 game platform',
          built:
            'Worked across the Crypto Clash ecosystem: a Next.js game site, wallet-connected flows, contract configuration, NFT-related systems, asset tooling, and the surrounding card / media pipeline living alongside dedicated smart-contract and card repos.',
          learned:
            'Crypto Clash taught me how to keep a larger product coherent across frontend, blockchain integration, asset systems, and game-facing UX, while also thinking about mobile behavior, packaging, and long-lived content pipelines.',
          stack: ['Next.js', 'TypeScript', 'wagmi / viem', 'Smart contracts', 'Asset pipeline'],
          image: cryptoClashImage,
          links: [{ label: 'Ask about Crypto Clash', href: '#contact' }],
        },
        {
          title: 'Fitel Mobile App',
          eyebrow: 'Carrier account experience',
          built:
            'Built an iOS-first mobile app and deployable backend for SIM usage, plans, top-up, roaming controls, account activity, and carrier-shaped authentication flows.',
          learned:
            'This project reinforced how important clean API contracts are for mobile apps. When backend shape and fallback behavior are right, the frontend gets much easier to evolve and test.',
          stack: ['Expo', 'iOS native', 'Node backend', 'Auth flows'],
          image: fitelImage,
          links: [{ label: 'Project details', href: '#contact' }],
        },
      ],
    },
    archiveSection: {
      eyebrow: 'Earlier work',
      title: 'Older projects that still matter.',
      intro:
        'Some of the earlier work is more technical or experimental, but it still shaped how I build and think now.',
      projects: [
        {
          title: 'Face Detection Brain',
          eyebrow: 'Web app',
          built:
            'Built a React and Node application using Clarifai facial-recognition APIs to detect faces in uploaded images, including authentication and a simple account flow.',
          learned:
            'This project was important for learning how frontend state, API calls, and auth fit together in a real product instead of only in isolated exercises.',
          stack: ['React', 'Node.js', 'Clarifai API', 'Authentication'],
          image: faceDetectImage,
          links: [
            { label: 'Live', href: 'https://face-detection-brain.onrender.com/', external: true },
            {
              label: 'Source code',
              href: 'https://github.com/Moccasym/face-recognition-brain',
              external: true,
            },
          ],
        },
        {
          title: 'Master Thesis',
          eyebrow: 'Research and hardware',
          built:
            'Worked on modular microfluidic structures in PDMS for highly integrated Lab-on-a-Chip applications, combining experimentation, hardware work, and technical documentation.',
          learned:
            'It trained me to work through long technical problems methodically and communicate complex systems clearly, which still helps in software architecture and product work.',
          stack: ['Microsystems', 'Lab-on-a-Chip', 'Research', 'Documentation'],
          image: thesisImage,
          links: [{ label: 'See thesis', href: 'assets/Felix_MA_Final.pdf', external: true }],
        },
        {
          title: 'Bluetooth Mesh',
          eyebrow: 'Embedded / R&D',
          built:
            'Worked on Bluetooth mesh functionality, hardware programming, and system prototyping in a research-oriented environment after finishing my degree.',
          learned:
            'This strengthened my ability to think beyond UI and consider systems, constraints, and reliability at a lower level.',
          stack: ['Connectivity', 'Embedded systems', 'Hardware programming'],
          image: bluetoothImage,
          links: [],
        },
        {
          title: 'Lab-on-a-Chip Spectral Analysis',
          eyebrow: 'Prototype system',
          built:
            'Created a portable spectral analysis concept for fluid samples using Lab-on-a-Chip ideas, 3D printing, and hardware-focused prototyping.',
          learned:
            'This project reinforced the value of turning abstract technical ideas into testable prototypes quickly, which is still how I approach product work.',
          stack: ['3D printing', 'Prototyping', 'Hardware concepts'],
          image: labChipImage,
          links: [],
        },
      ],
    },
    services: {
      eyebrow: 'Expertise',
      title: 'What I usually help with.',
      intro:
        'The strongest fit is focused product work where one person owning the build is faster and cleaner than splitting it across multiple roles too early.',
      items: [
        {
          title: 'MVPs and product prototypes',
          text: 'When you need something real, testable, and fast instead of another long planning phase.',
        },
        {
          title: 'Mobile apps with backend support',
          text: 'iOS-first or cross-platform apps with authentication, APIs, data models, and the boring infrastructure done properly.',
        },
        {
          title: 'Internal tools and ops software',
          text: 'Software that replaces repetitive manual work, messy workflows, or spreadsheet-driven processes.',
        },
        {
          title: 'Useful AI features',
          text: 'AI where it actually helps: extraction, review, search, assistance, and workflow automation.',
        },
      ],
    },
    about: {
      eyebrow: 'About',
      title: 'Technical depth, but product-minded.',
      paragraphs: [
        'My background is a mix of software, product building, and earlier technical work in engineering and hardware-adjacent systems. That combination tends to be useful when a project needs both speed and actual technical judgment.',
        'I use AI heavily in delivery, but the point is not to generate more code. The point is to move faster while keeping the product coherent, the tradeoffs sensible, and the outcome genuinely usable.',
      ],
      processLabel: 'How I like to work',
      process: [
        'Clarify the real scope and cut the fluff.',
        'Ship a usable first version fast.',
        'Iterate on the parts that actually matter after real feedback.',
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Open to focused freelance product work.',
      intro:
        'If you already know the rough problem, that is enough to start a conversation. I can help shape scope, first phase, and the fastest route to something real.',
      cardText:
        'If you need an MVP, a mobile app, an internal tool, or a cleaner product website, send me the rough version. I can help shape the fastest path to a usable first version.',
      emailButton: 'Email Felix',
      githubButton: 'GitHub',
      detailsLabel: 'Details',
      emailLabel: 'Email',
      locationLabel: 'Location',
      locationValue: 'Germany, remote across Europe',
      linkedinLabel: 'LinkedIn',
    },
    projectLearnedLabel: 'What I learned:',
  },
  de: {
    nav: { work: 'Projekte', services: 'Expertise', about: 'Über mich', contact: 'Kontakt' },
    hero: {
      eyebrow: 'Portfolio',
      title: 'Felix Steinchen',
      role: 'Product Developer',
      text: 'Web, Mobile und praxisnahe Software mit KI-Unterstützung.',
      primaryCta: 'Projekte ansehen',
      secondaryCta: 'Zusammenarbeiten',
      stack: ['React Native', 'Next.js', 'Node.js', 'TypeScript', 'KI-Workflows'],
      summaryLabel: 'Kurzüberblick',
      summary: [
        { label: 'Fokus', value: 'Mobile, Web, KI-Workflows' },
        { label: 'Standort', value: 'Deutschland, remote in Europa' },
        { label: 'Arbeitsweise', value: 'Solo Build, direkte Kommunikation' },
      ],
    },
    work: {
      eyebrow: 'Ausgewählte Arbeiten',
      title: 'Aktuelle Projekte und Produktarbeit.',
      intro:
        'Eine Mischung aus produktnaher Kundenarbeit, internen Tools und App-Konzepten, die wirklich benutzbar gebaut wurden statt als Mockups zu enden.',
      projects: [
        {
          title: 'Climber',
          eyebrow: 'Social App für Mobile',
          built:
            'Entwickelt habe ich eine Social-App für Kletterer mit Profilen, Foto-Posts, Partner-Matching, Gruppenplanung, Direktnachrichten, Gruppenchat, Stories, Achievements und Activity-Tracking auf Basis einer React-Native-App mit Node- und Mongo-Backend.',
          learned:
            'Das Projekt hat mich stark darin trainiert, Produktbreite mit guter Nutzbarkeit auszubalancieren und die letzten 20 Prozent sauber auszuarbeiten: Native Builds, API-Zuverlässigkeit, konsistentes Dark UI und stimmige Features über viele Screens hinweg.',
          stack: ['React Native', 'TypeScript', 'Node.js', 'MongoDB'],
          image: climberImage,
          links: [{ label: 'Demo anfragen', href: '#contact' }],
        },
        {
          title: 'Azori',
          eyebrow: 'Website für KI-Services',
          built:
            'Ich habe eine mehrsprachige Marketing- und Lead-Generierungsseite für private KI- und On-Prem-LLM-Integrationen gebaut und weiterentwickelt, inklusive klarerer Homepage-Struktur, Assistant-Flow und sauberem Produktions-Setup.',
          learned:
            'Die wichtigste Erkenntnis war hier, wie stark Positionierung zählt. Technische Glaubwürdigkeit hilft nur, wenn das Angebot für nicht-technische Entscheider schnell verständlich wird.',
          stack: ['Next.js', 'TypeScript', 'Tailwind', 'MongoDB'],
          image: azoriImage,
          links: [{ label: 'azori.ai besuchen', href: 'https://azori.ai', external: true }],
        },
        {
          title: 'Crypto Clash',
          eyebrow: 'Web3-Spielplattform',
          built:
            'Ich habe an verschiedenen Teilen des Crypto-Clash-Ökosystems gearbeitet: Next.js-Frontend, Wallet-Flows, Contract-Konfiguration, NFT-nahe Systeme, Asset-Tooling und die dazugehörige Karten- und Medienpipeline mit separaten Contract- und Card-Repositories.',
          learned:
            'Crypto Clash hat mir gezeigt, wie man ein größeres Produkt über Frontend, Blockchain-Integration, Asset-Systeme und spielnahe UX hinweg konsistent hält und dabei auch Mobile-Verhalten, Packaging und langlebige Content-Pipelines mitdenkt.',
          stack: ['Next.js', 'TypeScript', 'wagmi / viem', 'Smart Contracts', 'Asset pipeline'],
          image: cryptoClashImage,
          links: [{ label: 'Über Crypto Clash sprechen', href: '#contact' }],
        },
        {
          title: 'Fitel Mobile App',
          eyebrow: 'Carrier-App',
          built:
            'Gebaut habe ich eine iOS-orientierte Mobile App mit deploybarem Backend für SIM-Nutzung, Tarife, Aufladung, Roaming-Steuerung, Account-Aktivität und carrier-spezifische Auth-Flows.',
          learned:
            'Das Projekt hat erneut bestätigt, wie wichtig saubere API-Verträge für Mobile Apps sind. Wenn Backend-Struktur und Fallback-Verhalten stimmen, lässt sich das Frontend viel leichter weiterentwickeln und testen.',
          stack: ['Expo', 'iOS native', 'Node backend', 'Auth flows'],
          image: fitelImage,
          links: [{ label: 'Projekt anfragen', href: '#contact' }],
        },
      ],
    },
    archiveSection: {
      eyebrow: 'Frühere Arbeiten',
      title: 'Ältere Projekte, die weiterhin wichtig sind.',
      intro:
        'Einige der älteren Arbeiten sind technischer oder experimenteller, prägen aber bis heute, wie ich baue und denke.',
      projects: [
        {
          title: 'Face Detection Brain',
          eyebrow: 'Web-App',
          built:
            'Gebaut habe ich eine React- und Node-Anwendung mit Clarifai-Face-Recognition, um Gesichter in hochgeladenen Bildern zu erkennen, inklusive Authentifizierung und einfachem Account-Flow.',
          learned:
            'Das Projekt war wichtig, um zu verstehen, wie Frontend-State, API-Calls und Auth in einem echten Produkt zusammenspielen statt nur in isolierten Übungen.',
          stack: ['React', 'Node.js', 'Clarifai API', 'Authentifizierung'],
          image: faceDetectImage,
          links: [
            { label: 'Live', href: 'https://face-detection-brain.onrender.com/', external: true },
            {
              label: 'Quellcode',
              href: 'https://github.com/Moccasym/face-recognition-brain',
              external: true,
            },
          ],
        },
        {
          title: 'Master Thesis',
          eyebrow: 'Forschung und Hardware',
          built:
            'Im Rahmen meiner Masterarbeit habe ich an modularen mikrofluidischen PDMS-Strukturen für hochintegrierte Lab-on-a-Chip-Anwendungen gearbeitet, inklusive Experimenten, Hardware-Arbeit und technischer Dokumentation.',
          learned:
            'Dabei habe ich gelernt, langfristige technische Probleme methodisch zu bearbeiten und komplexe Systeme klar zu kommunizieren, was mir heute noch in Architektur und Produktarbeit hilft.',
          stack: ['Mikrosysteme', 'Lab-on-a-Chip', 'Forschung', 'Dokumentation'],
          image: thesisImage,
          links: [{ label: 'Arbeit ansehen', href: 'assets/Felix_MA_Final.pdf', external: true }],
        },
        {
          title: 'Bluetooth Mesh',
          eyebrow: 'Embedded / Forschung',
          built:
            'Nach dem Studium habe ich an Bluetooth-Mesh-Funktionalität, Hardware-Programmierung und Systemprototypen in einem forschungsnahen Umfeld gearbeitet.',
          learned:
            'Das hat meine Fähigkeit gestärkt, über UI hinauszudenken und Systeme, Einschränkungen und Zuverlässigkeit auf niedrigerer Ebene mitzudenken.',
          stack: ['Konnektivität', 'Embedded Systems', 'Hardware-Programmierung'],
          image: bluetoothImage,
          links: [],
        },
        {
          title: 'Lab-on-a-Chip Spectral Analysis',
          eyebrow: 'Prototyp-System',
          built:
            'Entwickelt habe ich ein tragbares Konzept zur spektralen Analyse von Flüssigkeitsproben auf Basis von Lab-on-a-Chip-Ideen, 3D-Druck und hardwareorientiertem Prototyping.',
          learned:
            'Das Projekt hat den Wert bestätigt, abstrakte technische Ideen schnell in testbare Prototypen zu überführen. Genau so gehe ich auch heute an Produktarbeit heran.',
          stack: ['3D-Druck', 'Prototyping', 'Hardware-Konzepte'],
          image: labChipImage,
          links: [],
        },
      ],
    },
    services: {
      eyebrow: 'Expertise',
      title: 'Wobei ich typischerweise helfe.',
      intro:
        'Am besten passe ich zu fokussierter Produktarbeit, bei der eine Person den Build verantwortet und damit schneller und sauberer ist, als früh viele Rollen aufzuteilen.',
      items: [
        {
          title: 'MVPs und Produkt-Prototypen',
          text: 'Wenn etwas Reales, Testbares und Schnelles gebraucht wird statt einer weiteren langen Planungsphase.',
        },
        {
          title: 'Mobile Apps mit Backend',
          text: 'iOS-first oder cross-platform Apps mit Auth, APIs, Datenmodellen und der notwendigen Infrastruktur sauber umgesetzt.',
        },
        {
          title: 'Interne Tools und operative Software',
          text: 'Software, die repetitive manuelle Arbeit, unklare Workflows oder Spreadsheet-Prozesse ersetzt.',
        },
        {
          title: 'Sinnvolle KI-Features',
          text: 'KI dort, wo sie wirklich hilft: Extraktion, Review, Suche, Assistenz und Workflow-Automatisierung.',
        },
      ],
    },
    about: {
      eyebrow: 'Über mich',
      title: 'Technisch tief, aber produktorientiert.',
      paragraphs: [
        'Mein Hintergrund ist eine Mischung aus Software, Produktentwicklung und früherer technischer Arbeit in Engineering- und hardware-nahen Systemen. Diese Kombination ist hilfreich, wenn ein Projekt sowohl Tempo als auch echtes technisches Urteilsvermögen braucht.',
        'Ich nutze KI stark in der Umsetzung, aber nicht mit dem Ziel, einfach mehr Code zu erzeugen. Der Punkt ist, schneller zu werden und dabei Produkt, Trade-offs und Ergebnis sinnvoll und benutzbar zu halten.',
      ],
      processLabel: 'So arbeite ich gern',
      process: [
        'Den echten Scope klären und unnötigen Ballast streichen.',
        'Schnell eine erste brauchbare Version liefern.',
        'Danach die Teile verbessern, die nach echtem Feedback wirklich zählen.',
      ],
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Offen für fokussierte Freelance-Produktarbeit.',
      intro:
        'Wenn das grobe Problem schon klar ist, reicht das für ein erstes Gespräch. Ich helfe dabei, Scope, erste Phase und den schnellsten Weg zu etwas Reellem zu definieren.',
      cardText:
        'Wenn du ein MVP, eine Mobile App, ein internes Tool oder eine klarere Produktseite brauchst, schick mir einfach die grobe Version. Ich helfe dabei, den schnellsten Weg zu einer brauchbaren ersten Version zu finden.',
      emailButton: 'Felix mailen',
      githubButton: 'GitHub',
      detailsLabel: 'Details',
      emailLabel: 'E-Mail',
      locationLabel: 'Standort',
      locationValue: 'Deutschland, remote in Europa',
      linkedinLabel: 'LinkedIn',
    },
    projectLearnedLabel: 'Was ich gelernt habe:',
  },
  es: {
    nav: { work: 'Proyectos', services: 'Experiencia', about: 'Sobre mí', contact: 'Contacto' },
    hero: {
      eyebrow: 'Portfolio',
      title: 'Felix Steinchen',
      role: 'Product developer',
      text: 'Web, móvil y software práctico con apoyo de IA.',
      primaryCta: 'Ver proyectos',
      secondaryCta: 'Trabajar conmigo',
      stack: ['React Native', 'Next.js', 'Node.js', 'TypeScript', 'Workflows con IA'],
      summaryLabel: 'Resumen',
      summary: [
        { label: 'Enfoque', value: 'Móvil, web, workflows con IA' },
        { label: 'Ubicación', value: 'Alemania, remoto en Europa' },
        { label: 'Forma de trabajo', value: 'Desarrollo en solitario, comunicación directa' },
      ],
    },
    work: {
      eyebrow: 'Trabajo seleccionado',
      title: 'Proyectos recientes y producto digital.',
      intro:
        'Una mezcla de trabajo orientado a cliente, herramientas internas y conceptos de app llevados a un nivel realmente utilizable en lugar de quedarse en maquetas.',
      projects: [
        {
          title: 'Climber',
          eyebrow: 'Producto social móvil',
          built:
            'Construí una app social para escaladores con perfiles, publicaciones con fotos, matching de compañeros, planificación de grupos, chat directo, chat grupal, stories, logros y seguimiento de actividad sobre una app en React Native con backend en Node y Mongo.',
          learned:
            'Este proyecto me obligó a equilibrar amplitud de producto con usabilidad y a pulir el último 20 por ciento del trabajo móvil: builds nativos, fiabilidad de API, consistencia visual en modo oscuro y coherencia entre muchas pantallas.',
          stack: ['React Native', 'TypeScript', 'Node.js', 'MongoDB'],
          image: climberImage,
          links: [{ label: 'Pedir demo', href: '#contact' }],
        },
        {
          title: 'Azori',
          eyebrow: 'Web de servicios de IA',
          built:
            'Construí e iteré un sitio multilingüe de marketing y captación de leads para servicios de IA privada e integración de LLM on-prem, incluyendo mejor estructura de homepage, flujo del asistente y ruta clara de despliegue.',
          learned:
            'La lección principal fue cuánto importa el posicionamiento. La credibilidad técnica solo sirve si el sitio explica la oferta con suficiente claridad para que un comprador no técnico la entienda rápido.',
          stack: ['Next.js', 'TypeScript', 'Tailwind', 'MongoDB'],
          image: azoriImage,
          links: [{ label: 'Visitar azori.ai', href: 'https://azori.ai', external: true }],
        },
        {
          title: 'Crypto Clash',
          eyebrow: 'Plataforma de juego Web3',
          built:
            'Trabajé en distintas partes del ecosistema de Crypto Clash: sitio en Next.js, flujos con wallet, configuración de contratos, sistemas relacionados con NFT, tooling de assets y el pipeline de cartas y medios junto a repos dedicados de contratos y cartas.',
          learned:
            'Crypto Clash me enseñó a mantener coherente un producto más grande entre frontend, integración blockchain, sistemas de assets y UX orientada al juego, pensando también en comportamiento móvil, packaging y pipelines de contenido duraderos.',
          stack: ['Next.js', 'TypeScript', 'wagmi / viem', 'Smart contracts', 'Asset pipeline'],
          image: cryptoClashImage,
          links: [{ label: 'Hablar sobre Crypto Clash', href: '#contact' }],
        },
        {
          title: 'Fitel Mobile App',
          eyebrow: 'Experiencia para operador móvil',
          built:
            'Construí una app móvil orientada a iOS con backend desplegable para uso de SIM, planes, recargas, controles de roaming, actividad de cuenta y flujos de autenticación propios del operador.',
          learned:
            'Este proyecto reforzó lo importante que son contratos API limpios para apps móviles. Cuando la forma del backend y los fallbacks están bien, el frontend es mucho más fácil de evolucionar y probar.',
          stack: ['Expo', 'iOS nativo', 'Backend Node', 'Auth flows'],
          image: fitelImage,
          links: [{ label: 'Detalles del proyecto', href: '#contact' }],
        },
      ],
    },
    archiveSection: {
      eyebrow: 'Trabajo anterior',
      title: 'Proyectos anteriores que siguen siendo relevantes.',
      intro:
        'Parte del trabajo anterior es más técnico o experimental, pero sigue influyendo en cómo construyo y pienso hoy.',
      projects: [
        {
          title: 'Face Detection Brain',
          eyebrow: 'Aplicación web',
          built:
            'Construí una aplicación en React y Node usando las APIs de reconocimiento facial de Clarifai para detectar caras en imágenes subidas, incluyendo autenticación y un flujo simple de cuenta.',
          learned:
            'Fue un proyecto importante para entender cómo se unen estado frontend, llamadas API y auth dentro de un producto real en lugar de ejercicios aislados.',
          stack: ['React', 'Node.js', 'Clarifai API', 'Autenticación'],
          image: faceDetectImage,
          links: [
            { label: 'Live', href: 'https://face-detection-brain.onrender.com/', external: true },
            {
              label: 'Código fuente',
              href: 'https://github.com/Moccasym/face-recognition-brain',
              external: true,
            },
          ],
        },
        {
          title: 'Master Thesis',
          eyebrow: 'Investigación y hardware',
          built:
            'Trabajé en estructuras microfluídicas modulares en PDMS para aplicaciones altamente integradas de Lab-on-a-Chip, combinando experimentación, trabajo de hardware y documentación técnica.',
          learned:
            'Me entrenó para avanzar de forma metódica en problemas técnicos largos y comunicar sistemas complejos con claridad, algo que sigue ayudándome hoy en arquitectura de software y producto.',
          stack: ['Microsistemas', 'Lab-on-a-Chip', 'Investigación', 'Documentación'],
          image: thesisImage,
          links: [{ label: 'Ver tesis', href: 'assets/Felix_MA_Final.pdf', external: true }],
        },
        {
          title: 'Bluetooth Mesh',
          eyebrow: 'Embedded / I+D',
          built:
            'Trabajé en funcionalidad Bluetooth mesh, programación de hardware y prototipos de sistema en un entorno orientado a investigación después de terminar mis estudios.',
          learned:
            'Eso reforzó mi capacidad para pensar más allá de la interfaz y tener en cuenta sistemas, restricciones y fiabilidad a un nivel más bajo.',
          stack: ['Conectividad', 'Sistemas embebidos', 'Programación de hardware'],
          image: bluetoothImage,
          links: [],
        },
        {
          title: 'Lab-on-a-Chip Spectral Analysis',
          eyebrow: 'Sistema prototipo',
          built:
            'Creé un concepto portátil de análisis espectral para muestras fluidas usando ideas de Lab-on-a-Chip, impresión 3D y prototipado orientado a hardware.',
          learned:
            'Este proyecto reforzó el valor de convertir ideas técnicas abstractas en prototipos comprobables con rapidez. Sigo abordando el trabajo de producto de esa manera.',
          stack: ['Impresión 3D', 'Prototipado', 'Conceptos de hardware'],
          image: labChipImage,
          links: [],
        },
      ],
    },
    services: {
      eyebrow: 'Experiencia',
      title: 'En qué suelo ayudar.',
      intro:
        'Encajo mejor en trabajo de producto enfocado donde una sola persona llevando la construcción resulta más rápida y limpia que repartir demasiados roles demasiado pronto.',
      items: [
        {
          title: 'MVPs y prototipos de producto',
          text: 'Cuando hace falta algo real, comprobable y rápido en lugar de otra fase larga de planificación.',
        },
        {
          title: 'Apps móviles con backend',
          text: 'Apps iOS-first o multiplataforma con autenticación, APIs, modelos de datos y la infraestructura necesaria bien resuelta.',
        },
        {
          title: 'Herramientas internas y software operativo',
          text: 'Software que reemplaza trabajo manual repetitivo, flujos confusos o procesos llevados en hojas de cálculo.',
        },
        {
          title: 'Funciones de IA útiles',
          text: 'IA donde realmente aporta valor: extracción, revisión, búsqueda, asistencia y automatización de workflows.',
        },
      ],
    },
    about: {
      eyebrow: 'Sobre mí',
      title: 'Profundidad técnica, con mentalidad de producto.',
      paragraphs: [
        'Mi trayectoria mezcla software, construcción de producto y trabajo técnico anterior en ingeniería y sistemas cercanos al hardware. Esa combinación es útil cuando un proyecto necesita velocidad y también criterio técnico real.',
        'Uso IA de forma intensiva en la ejecución, pero el objetivo no es generar más código por generar. El objetivo es avanzar más rápido manteniendo el producto coherente, con decisiones sensatas y un resultado realmente usable.',
      ],
      processLabel: 'Cómo me gusta trabajar',
      process: [
        'Aclarar el alcance real y cortar lo innecesario.',
        'Entregar rápido una primera versión útil.',
        'Iterar después sobre lo que de verdad importa tras feedback real.',
      ],
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Disponible para trabajo freelance de producto bien enfocado.',
      intro:
        'Si ya conoces el problema en términos generales, eso basta para iniciar la conversación. Puedo ayudar a definir alcance, primera fase y la ruta más rápida hacia algo real.',
      cardText:
        'Si necesitas un MVP, una app móvil, una herramienta interna o una web de producto más clara, envíame la versión aproximada. Puedo ayudar a encontrar la ruta más rápida hacia una primera versión útil.',
      emailButton: 'Enviar email a Felix',
      githubButton: 'GitHub',
      detailsLabel: 'Detalles',
      emailLabel: 'Email',
      locationLabel: 'Ubicación',
      locationValue: 'Alemania, remoto en Europa',
      linkedinLabel: 'LinkedIn',
    },
    projectLearnedLabel: 'Lo que aprendí:',
  },
};

function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = window.localStorage.getItem('portfolio-language');
    if (saved === 'de' || saved === 'es' || saved === 'en') {
      return saved;
    }

    const browserLanguage = navigator.language.toLowerCase();
    if (browserLanguage.startsWith('de')) {
      return 'de';
    }
    if (browserLanguage.startsWith('es')) {
      return 'es';
    }
    return 'en';
  });

  useEffect(() => {
    window.localStorage.setItem('portfolio-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const content = contentByLanguage[language];

  return (
    <div className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header">
        <a href="#top" className="brand">
          Felix Steinchen
        </a>
        <div className="site-header-right">
          <nav className="site-nav">
            <a href="#work">{content.nav.work}</a>
            <a href="#services">{content.nav.services}</a>
            <a href="#about">{content.nav.about}</a>
            <a href="#contact">{content.nav.contact}</a>
          </nav>
          <div className="language-switcher" aria-label="Language switcher">
            {languageOptions.map((option) => (
              <button
                key={option.code}
                type="button"
                className={`language-option${language === option.code ? ' is-active' : ''}`}
                onClick={() => setLanguage(option.code)}
                aria-pressed={language === option.code}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">{content.hero.eyebrow}</p>
            <h1>{content.hero.title}</h1>
            <p className="hero-role">{content.hero.role}</p>
            <p className="hero-text">{content.hero.text}</p>
            <div className="hero-photo-mobile">
              <div className="hero-photo-shell">
                <img src={profileImage} alt="Felix Steinchen" className="hero-photo" />
              </div>
            </div>
            <div className="hero-actions">
              <a href="#work" className="button button-primary">
                {content.hero.primaryCta}
              </a>
              <a href="#contact" className="button button-secondary">
                {content.hero.secondaryCta}
              </a>
            </div>
            <div className="hero-summary-strip">
              <p className="panel-label">{content.hero.summaryLabel}</p>
              <div className="hero-summary-grid hero-summary-grid-inline">
                {content.hero.summary.map((item) => (
                  <div key={item.label} className="hero-summary-item">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>
            </div>
            <ul className="hero-stack">
              {content.hero.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <aside className="hero-panel">
            <div className="hero-photo-shell">
              <img src={profileImage} alt="Felix Steinchen" className="hero-photo" />
            </div>
          </aside>
        </section>

        <section id="work" className="section">
          <div className="section-heading">
            <p className="eyebrow">{content.work.eyebrow}</p>
            <h2>{content.work.title}</h2>
            <p className="section-intro">{content.work.intro}</p>
          </div>

          <div className="projects-grid">
            {content.work.projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-image-shell">
                  <img src={project.image} alt={project.title} className="project-image" />
                </div>
                <div className="project-body">
                  <p className="project-eyebrow">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.built}</p>
                  <p className="project-learning">
                    <span>{content.projectLearnedLabel}</span> {project.learned}
                  </p>
                  <ul className="tag-list">
                    {project.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noreferrer' : undefined}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-alt">
          <div className="section-heading">
            <p className="eyebrow">{content.archiveSection.eyebrow}</p>
            <h2>{content.archiveSection.title}</h2>
            <p className="section-intro">{content.archiveSection.intro}</p>
          </div>

          <div className="projects-grid projects-grid-archive">
            {content.archiveSection.projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-image-shell">
                  <img src={project.image} alt={project.title} className="project-image" />
                </div>
                <div className="project-body">
                  <p className="project-eyebrow">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.built}</p>
                  <p className="project-learning">
                    <span>{content.projectLearnedLabel}</span> {project.learned}
                  </p>
                  <ul className="tag-list">
                    {project.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {project.links.length > 0 ? (
                    <div className="project-links">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target={link.external ? '_blank' : undefined}
                          rel={link.external ? 'noreferrer' : undefined}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="section section-alt">
          <div className="section-heading">
            <p className="eyebrow">{content.services.eyebrow}</p>
            <h2>{content.services.title}</h2>
            <p className="section-intro">{content.services.intro}</p>
          </div>
          <div className="services-grid">
            {content.services.items.map((service) => (
              <article className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="about-copy">
            <p className="eyebrow">{content.about.eyebrow}</p>
            <h2>{content.about.title}</h2>
            {content.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="process-card">
              <p className="panel-label">{content.about.processLabel}</p>
              <ol>
                {content.about.process.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>

          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="section-heading">
            <p className="eyebrow">{content.contact.eyebrow}</p>
            <h2>{content.contact.title}</h2>
            <p className="section-intro">{content.contact.intro}</p>
          </div>

          <div className="contact-grid">
            <div className="contact-card primary-contact-card">
              <p>{content.contact.cardText}</p>
              <div className="contact-actions">
                <a
                  className="button button-primary"
                  href="mailto:felixsteinchen@web.de?subject=Project%20Inquiry"
                >
                  {content.contact.emailButton}
                </a>
                <a
                  className="button button-secondary"
                  href="https://github.com/Moccasym"
                  target="_blank"
                  rel="noreferrer"
                >
                  {content.contact.githubButton}
                </a>
              </div>
            </div>

            <div className="contact-card">
              <p className="panel-label">{content.contact.detailsLabel}</p>
              <ul className="contact-list">
                <li>
                  <span>{content.contact.emailLabel}</span>
                  <a href="mailto:felixsteinchen@web.de">felixsteinchen@web.de</a>
                </li>
                <li>
                  <span>{content.contact.locationLabel}</span>
                  <strong>{content.contact.locationValue}</strong>
                </li>
                <li>
                  <span>{content.contact.linkedinLabel}</span>
                  <a
                    href="https://www.linkedin.com/in/felix-steinchen-20487b266/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Felix Steinchen
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
