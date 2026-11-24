import type { SiteConfig } from '../types/siteConfig'

const instagramUrl = 'https://www.instagram.com/caballos.santamonica/'
const linktreeUrl = 'https://linktr.ee/caballos.santamonica'

/**
 * ARCHIVO ÚNICO DE CONTENIDO — PREDIO DE CABALLOS SANTA MÓNICA
 * Editá los textos de cada sección, preguntas frecuentes, enlaces y fotos desde acá.
 * Consultá docs/CONTENT_GUIDE.md para una guía rápida.
 */
export const siteConfig: SiteConfig = {
  site: {
    name: 'Predio de Caballos Santa Mónica',
    location: 'Mar del Plata, Buenos Aires, Argentina',
    motto: 'Amor, libertad y bienestar animal',
  },
  seo: {
    title: 'Predio de Caballos Santa Mónica | Amor, libertad y bienestar animal',
    description:
      'Rescatamos, rehabilitamos y cuidamos caballos en Mar del Plata. Conocé nuestro trabajo, el voluntariado y las jornadas especiales en el predio.',
    ogTitle: 'Predio de Caballos Santa Mónica',
    ogDescription:
      'Un lugar para caballos rescatados en Mar del Plata. Amor, libertad y bienestar animal.',
    ogImage: '/images/1%20(1).png',
    themeColor: '#121E15',
    locale: 'es_AR',
  },
  navbar: {
    brandName: 'SANTA MÓNICA',
    brandAriaLabel: 'Predio de Caballos Santa Mónica',
    links: [
      { label: 'Nosotras', href: '#01' },
      { label: 'Cómo ayudar', href: '#ayudar' },
      { label: 'Preguntas', href: '#preguntas' },
    ],
    action: { label: 'Contacto', href: '#contacto', icon: 'message-circle' },
    menuOpenLabel: 'Abrir menú de navegación',
    menuCloseLabel: 'Cerrar menú de navegación',
  },
  hero: {
    id: 'inicio',
    eyebrow: 'Rescate equino · Mar del Plata',
    titleLines: ['Amor, libertad', 'y bienestar animal'],
    scrollCueLabel: 'deslizá ↓',
    scrollTargetId: '01',
    actions: [
      { label: 'Voluntariado', href: '#02' },
      { label: 'Donaciones', href: linktreeUrl },
      { label: 'Apadrina', href: linktreeUrl },
    ],
    image: {
      src: '/images/1%20(1).png',
      alt: 'Voluntaria junto a un caballo rescatado pastando en libertad en el predio Santa Mónica',
      priority: true,
    },
    socialRail: {
      label: 'Seguinos',
      links: [{ label: 'Instagram de Santa Mónica', href: instagramUrl, icon: 'instagram' }],
    },
    progressRail: {
      label: 'Progreso de lectura',
      stops: [
        { label: 'Inicio', targetId: 'inicio' },
        { label: '01', targetId: '01' },
        { label: '02', targetId: '02' },
        { label: '03', targetId: '03' },
      ],
    },
  },
  // EDITÁ ESTAS 3 SECCIONES A MANO CON EL COPY DEFINITIVO DEL PREDIO
  editorialSections: [
    {
      id: '01',
      number: '01',
      eyebrow: 'A qué nos dedicamos',
      titleLines: ['Rescate y cuidado', 'de caballos en libertad'],
      body: 'En el Predio Santa Mónica rescatamos, rehabilitamos y cuidamos caballos que atravesaron situaciones de maltrato o abandono en Mar del Plata. Les brindamos atención veterinaria, alimentación adecuada y el tiempo que cada uno necesita para recuperarse y vivir tranquilo en manada.',
      cta: { label: 'conocer más', href: '#01' },
      image: {
        src: '/images/1%20(2).png',
        alt: 'Caballo alazán rescatado caminando tranquilo por el campo del predio Santa Mónica',
        caption: 'Predio Santa Mónica · Mar del Plata',
      },
      imageOnLeft: false,
      drawer: {
        title: 'Cómo trabajamos en el predio',
        intro:
          'Cada rescate es un proceso que requiere compromiso, seguimiento veterinario y paciencia para que el caballo vuelva a confiar.',
        closeLabel: 'Cerrar panel de detalles',
        kind: 'steps',
        steps: [
          {
            label: 'Rescate y llegada',
            description:
              'Actuamos ante casos de maltrato o abandono en la zona y coordinamos el traslado seguro al predio.',
          },
          {
            label: 'Atención veterinaria',
            description:
              'Revisación clínica, hidratación, desparasitación, curaciones y un plan nutricional adaptado a cada caballo.',
          },
          {
            label: 'Rehabilitación y manada',
            description:
              'Con herrado, cuidados cotidianos y respeto por sus tiempos, se integran a vivir libres junto a sus compañeros.',
          },
        ],
      },
    },
    {
      id: '02',
      number: '02',
      eyebrow: 'Voluntariado',
      titleLines: ['Manos que cuidan', 'todos los días'],
      body: 'El voluntariado es el corazón del predio. Somos personas comunes que nos organizamos para limpiar, acercar agua y comida, cepillar, arreglar cercos y acompañar a los caballos con respeto. No hace falta tener experiencia previa: solo compromiso y ganas de estar.',
      cta: { label: 'conocer más', href: '#02' },
      image: {
        src: '/images/1%20(3).png',
        alt: 'Equipo de voluntarios celebrando dentro del refugio de madera y chapas del predio',
        caption: 'Equipo de voluntariado en el refugio',
      },
      imageOnLeft: true,
      drawer: {
        title: 'Qué hacemos como voluntarios',
        intro:
          'Cada semana nos turnamos para sostener las tareas diarias del campo y compartir tiempo real con los animales.',
        closeLabel: 'Cerrar detalles de voluntariado',
        kind: 'steps',
        steps: [
          {
            label: 'Cuidado cotidiano',
            description:
              'Control de agua limpia, distribución de fardos y alimento, limpieza de sectores y observación de cada caballo.',
          },
          {
            label: 'Mantenimiento del predio',
            description:
              'Arreglo de alambrados, mejoras en los refugios, limpieza de potreros y orden general de herramientas.',
          },
          {
            label: 'Acompañamiento respetuoso',
            description:
              'Cepillado, caminatas tranquilas y presencia paciente para ayudar a quienes todavía están recuperando confianza.',
          },
        ],
      },
    },
    {
      id: '03',
      number: '03',
      eyebrow: 'Jornadas especiales',
      titleLines: ['Encuentros abiertos', 'y trabajo compartido'],
      body: 'A lo largo del año organizamos jornadas especiales en el predio: encuentros de trabajo comunitario para construir refugios, jornadas solidarias de recaudación y espacios de encuentro para acercar a más personas al cuidado responsable de los caballos.',
      cta: { label: 'conocer más', href: '#03' },
      image: {
        src: '/images/1%20(4).png',
        alt: 'Persona arrodillada acariciando con suavidad a un caballo pinto durante una jornada en el predio',
        caption: 'Encuentro y vínculo en una jornada del predio',
      },
      imageOnLeft: false,
      drawer: {
        title: 'Próximas jornadas y cómo enterarte',
        intro:
          'Anunciamos todas nuestras fechas, convocatorias abiertas y campañas puntuales a través de nuestras redes oficiales.',
        closeLabel: 'Cerrar detalles de jornadas',
        kind: 'actions',
        actions: [
          { label: 'Ver convocatorias en Instagram', href: instagramUrl },
          { label: 'Acceder a todos los links y donaciones', href: linktreeUrl },
          { label: 'Ver preguntas frecuentes', href: '#preguntas' },
        ],
      },
    },
  ],
  // TABLERO DE RECAUDACIÓN Y LINK DE MERCADO PAGO — EDITÁ ESTOS VALORES A MANO
  donationBoard: {
    id: 'donar',
    eyebrow: 'Donaciones económicas',
    titleLines: ['Cada aporte acerca', 'el próximo objetivo'],
    body: 'Si podés colaborar económicamente, tu donación va directo a alimentación, atención veterinaria y mejoras concretas para la manada.',
    ctaLabel: 'Donar por Mercado Pago',
    // Reemplazá este enlace por tu link directo de Mercado Pago (ej: 'https://link.mercadopago.com.ar/tu-link')
    ctaHref: linktreeUrl,
    ctaNote: 'Te redirige de forma segura al enlace oficial de Mercado Pago del predio.',
    boardEyebrow: 'Tablero de campaña',
    updatedLabel: 'Actualizado esta semana',
    raisedLabel: 'Recaudado hasta hoy',
    raisedAmount: 320000,
    goalLabel: 'Objetivo actual',
    goalAmount: 500000,
    remainingPrefix: 'Faltan',
    completedMessage: '¡Objetivo alcanzado! Gracias por hacerlo posible.',
    nextGoalEyebrow: 'Próximo objetivo a cumplir',
    nextGoalTitle: 'Chapas y maderas para ampliar el refugio',
    nextGoalDescription:
      'Queremos techar un nuevo sector de resguardo para que todos los caballos tengan sombra en verano y abrigo en los días de lluvia y frío.',
  },
  otherWays: {
    id: 'ayudar',
    eyebrow: 'Otras formas de sumarte',
    title: 'No hace falta dinero para ser parte',
    body: 'El bienestar de los caballos también se sostiene con manos voluntarias, insumos concretos y personas que difunden nuestro trabajo en Mar del Plata.',
    cards: [
      {
        id: 'voluntariado',
        eyebrow: 'Presencial',
        title: 'Sumate al voluntariado',
        description:
          'Participá de las jornadas de cuidado, alimentación, mantenimiento de cercos y acompañamiento en el predio.',
        ctaLabel: 'Consultar por Instagram',
        href: instagramUrl,
        icon: 'users',
      },
      {
        id: 'insumos',
        eyebrow: 'Campañas de insumos',
        title: 'Alimento, botiquín y refugio',
        description:
          'Recibimos fardos de pasto, avena, insumos veterinarios, maderas, postes y chapas para mejorar el abrigo de la manada.',
        ctaLabel: 'Coordinar una entrega',
        href: instagramUrl,
        icon: 'package',
      },
      {
        id: 'difusion',
        eyebrow: 'Comunidad',
        title: 'Difusión y donaciones',
        description:
          'Compartir nuestras publicaciones, campañas urgentes y nuestro Linktree multiplica la ayuda que llega al predio.',
        ctaLabel: 'Ir a nuestros links',
        href: linktreeUrl,
        icon: 'megaphone',
      },
    ],
  },
  // EDITÁ LAS PREGUNTAS Y RESPUESTAS A MANO CUANDO QUIERAS
  faq: {
    id: 'preguntas',
    eyebrow: 'Preguntas frecuentes',
    titleLines: ['Dudas comunes', 'antes de sumarte'],
    body: 'Reunimos las consultas que más nos llegan por redes. Si tenés otra pregunta o querés coordinar cómo ayudar, escribinos directo.',
    contactNote: 'Respondemos todos los mensajes en cuanto salimos del campo.',
    contactCtaLabel: 'Escribinos por Instagram',
    contactCtaHref: instagramUrl,
    items: [
      {
        id: 'destino-donaciones',
        question: '¿A dónde va exactamente cada donación?',
        answer:
          'El 100% de lo recaudado se destina a las necesidades de los caballos: fardos de pasto, alimento, visitas veterinarias, medicación, herrado y materiales para mantener y mejorar los refugios del predio.',
      },
      {
        id: 'visitas',
        question: '¿Se puede visitar el predio Santa Mónica?',
        answer:
          'El predio es el hogar tranquilo de caballos rescatados, por eso no funciona como paseo abierto al público. Las visitas se coordinan previamente en jornadas especiales o encuentros de voluntariado.',
      },
      {
        id: 'voluntariado-requisitos',
        question: '¿Necesito experiencia previa con caballos para ser voluntario?',
        answer:
          'No hace falta tener experiencia previa. Siempre arrancás acompañado por el equipo del predio aprendiendo el trato respetuoso y las tareas cotidianas paso a paso.',
      },
      {
        id: 'insumos',
        question: '¿Qué insumos necesitan con mayor urgencia?',
        answer:
          'Siempre suman fardos de pasto, avena, elementos de botiquín (gasas, desinfectantes, alcohol, algodón), cabestros, sogas y materiales como chapas o maderas para los refugios.',
      },
      {
        id: 'denuncias',
        question: '¿Cómo denunciar un caso de maltrato equino en Mar del Plata?',
        answer:
          'Ante una emergencia en vía pública, llamá de inmediato al 911 pidiendo intervención bajo la Ley Nacional 14.346 de Protección Animal, registrá ubicación exacta y fotos si es seguro hacerlo, y escribinos por Instagram para orientarte.',
      },
    ],
  },
  footer: {
    id: 'contacto',
    brandName: 'SANTA MÓNICA',
    purpose:
      'Rescate, rehabilitación y cuidado permanente de caballos en Mar del Plata. Amor, libertad y bienestar animal.',
    locationLine: 'Mar del Plata, Buenos Aires, Argentina',
    aboutTitle: 'El Predio',
    aboutLinks: [
      { label: 'A qué nos dedicamos', href: '#01' },
      { label: 'Voluntariado', href: '#02' },
      { label: 'Jornadas especiales', href: '#03' },
      { label: 'Preguntas frecuentes', href: '#preguntas' },
    ],
    helpTitle: 'Contacto y Ayuda',
    helpLinks: [
      { label: 'Donaciones y apadrinamiento', href: linktreeUrl },
      { label: 'Instagram (@caballos.santamonica)', href: instagramUrl },
      { label: 'Otras formas de ayudar', href: '#ayudar' },
    ],
    copyrightText:
      'Predio de Caballos Santa Mónica · Hecho con amor por los caballos y quienes los cuidan.',
  },
}
