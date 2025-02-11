export const SITE_DATA = {
  company: {
    name: 'TechnoCore',
    slogan: 'Innovación Tecnológica para el Futuro',
    phone: '+34 900 123 456',
    email: 'info@technocore.com',
    address: 'Calle Tecnología 123, Madrid, España',
    workingHours: 'Lun - Vie: 9:00 - 18:00',
  },
  social: {
    facebook: 'https://facebook.com/technocore',
    twitter: 'https://twitter.com/technocore',
    instagram: 'https://instagram.com/technocore',
    linkedin: 'https://linkedin.com/company/technocore',
    github: 'https://github.com/technocore',
  },
  images: {
    logo: '/images/logo.svg',
    hero: {
      main: '/images/hero/tech-hero.jpg',
      secondary: '/images/hero/tech-hero-2.jpg',
    },
    services: {
      domotics: '/images/services/smart-home.jpg',
      electronics: '/images/services/electronics-lab.jpg',
      robotics: '/images/services/robotics.jpg',
      software: '/images/services/software-dev.jpg',
      support: '/images/services/tech-support.jpg',
      automation: '/images/services/automation.jpg',
    },
    team: {
      member1: '/images/team/tech-expert-1.jpg',
      member2: '/images/team/tech-expert-2.jpg',
      member3: '/images/team/tech-expert-3.jpg',
    },
  },
  services: [
    {
      id: 'domotics',
      title: 'Domótica Inteligente',
      shortDescription: 'Automatización y control inteligente para tu hogar',
      fullDescription: 'Transformamos espacios convencionales en hogares inteligentes con tecnología de última generación. Control por voz, automatización y eficiencia energética.',
      icon: 'Smart',
      features: [
        'Control por voz y aplicación móvil',
        'Iluminación inteligente',
        'Climatización automatizada',
        'Seguridad y videovigilancia',
        'Gestión energética eficiente'
      ]
    },
    {
      id: 'electronics',
      title: 'Electrónica Avanzada',
      shortDescription: 'Soluciones electrónicas personalizadas',
      fullDescription: 'Diseño y desarrollo de sistemas electrónicos a medida para proyectos industriales y personales.',
      icon: 'Circuit',
      features: [
        'Diseño de PCB',
        'Prototipado rápido',
        'Sistemas embebidos',
        'IoT y conectividad',
        'Sensores y actuadores'
      ]
    },
    {
      id: 'robotics',
      title: 'Robótica e IA',
      shortDescription: 'Automatización inteligente y robótica avanzada',
      fullDescription: 'Desarrollo de soluciones robóticas con inteligencia artificial para automatización y optimización de procesos.',
      icon: 'Robot',
      features: [
        'Robots industriales',
        'Cobots colaborativos',
        'Sistemas de visión artificial',
        'Machine Learning',
        'Automatización de procesos'
      ]
    },
    {
      id: 'software',
      title: 'Desarrollo de Software',
      shortDescription: 'Software personalizado y aplicaciones web',
      fullDescription: 'Creación de aplicaciones web modernas, software empresarial y soluciones móviles adaptadas a tus necesidades.',
      icon: 'Code',
      features: [
        'Aplicaciones web',
        'Apps móviles',
        'Software empresarial',
        'APIs y microservicios',
        'Bases de datos'
      ]
    }
  ],
  pricing: [
    {
      id: 'starter',
      title: 'Starter',
      price: 1500,
      period: 'proyecto básico',
      description: 'Para proyectos pequeños',
      features: [
        'Consultoría inicial',
        'Diseño básico',
        'Implementación',
        'Soporte por 3 meses',
        'Documentación'
      ]
    },
    {
      id: 'professional',
      title: 'Professional',
      price: 3500,
      period: 'proyecto completo',
      description: 'Para proyectos medianos',
      features: [
        'Consultoría avanzada',
        'Diseño personalizado',
        'Implementación completa',
        'Soporte por 6 meses',
        'Capacitación incluida'
      ]
    },
    {
      id: 'enterprise',
      title: 'Enterprise',
      price: 'Personalizado',
      period: 'proyecto',
      description: 'Para grandes proyectos',
      features: [
        'Solución completa',
        'Diseño a medida',
        'Implementación integral',
        'Soporte 24/7',
        'Mantenimiento continuo'
      ]
    }
  ],
  testimonials: [
    {
      id: 1,
      name: 'Carlos Rodríguez',
      position: 'Director de Innovación',
      image: '/images/testimonials/tech-testimonial-1.jpg',
      quote: 'TechnoCore transformó completamente nuestra infraestructura tecnológica. Su equipo de expertos entregó soluciones innovadoras que superaron nuestras expectativas.',
      rating: 5
    },
    {
      id: 2,
      name: 'Ana Martínez',
      position: 'CEO Startup',
      image: '/images/testimonials/tech-testimonial-2.jpg',
      quote: 'La implementación de automatización robótica mejoró nuestra eficiencia en un 200%. El ROI superó nuestras proyecciones iniciales.',
      rating: 5
    },
    {
      id: 3,
      name: 'Miguel Sánchez',
      position: 'Propietario Smart Home',
      image: '/images/testimonials/tech-testimonial-3.jpg',
      quote: 'La solución domótica instalada por TechnoCore ha revolucionado la forma en que interactuamos con nuestro hogar. Tecnología del futuro, hoy.',
      rating: 5
    }
  ]
}; 