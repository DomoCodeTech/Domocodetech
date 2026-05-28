/**
 * Spanish translations for the DomoCodeTech website
 * Este archivo contiene todo el contenido de texto en español para la aplicación
 */
export const esTranslations = {
  /**
   * Información de la Empresa
   * Detalles básicos sobre la empresa utilizados en todo el sitio
   */
  company: {
    slogan: "DomoCodeTech",
    address: "14-16 Ramsgate St, Botany NSW 2019",  
    workingHours: "7:00 a.m. - 5:00 p.m.",
  },
  // Navigation
  nav: {
    home: "Inicio",
    about: "Nosotros",
    services: "Servicios",
    blog: "Blog",
    contact: "Contacto",
  },
  // Theme
  theme: {
    switchToLight: "Cambiar a modo claro",
    switchToDark: "Cambiar a modo oscuro",
  },
  // Hero Section
  hero: {
    slogan: "Domótica, Software & Tecnología",
    subtitle:
      "Proveemos soluciones innovadoras para tus necesidades tecnológicas",
    getQuote: "Cotización Gratis",
    imageAlt: "Equipo trabajando en tecnología",
  },
  // Services Section
  services: {
    title: "Nuestros Servicios",
    subtitle: "Soluciones tecnológicas profesionales para tu negocio",
    mainDescription:
      "Ofrecemos una gama completa de servicios tecnológicos que abarcan desde el desarrollo de software y domótica hasta electrónica y redes. Nuestro equipo experto está comprometido con la excelencia y la innovación en cada proyecto.",
    introduction:
      "Nos especializamos en ofrecer soluciones tecnológicas de vanguardia que ayudan a las empresas a prosperar en la era digital. Nuestra amplia gama de servicios está diseñada para satisfacer todas tus necesidades tecnológicas en un solo lugar.",
    highlight1: {
      title: "Equipo Experto",
      description:
        "Nuestros profesionales certificados aportan años de experiencia y conocimientos a cada proyecto.",
    },
    highlight2: {
      title: "Soluciones a Medida",
      description:
        "Soluciones personalizadas diseñadas específicamente para las necesidades y objetivos de tu negocio.",
    },
    highlight3: {
      title: "Soporte 24/7",
      description:
        "Soporte técnico las 24 horas para garantizar el funcionamiento óptimo de tus sistemas.",
    },
    viewMore: "Ver Más",
    servicesList: "Lista de Servicios",
    selector: {
      title: "Selecciona la categoría del servicio que deseas explorar",
    },
    domotics: {
      title: "Domótica",
      description:
        "Transformamos espacios convencionales en ambientes inteligentes y automatizados. Implementamos sistemas domóticos avanzados que te permiten controlar y monitorear tu hogar u oficina de forma eficiente, segura y cómoda, mejorando tu calidad de vida y reduciendo el consumo energético.",
      features: [
        "Control por voz y app móvil",
        "Iluminación inteligente",
        "Automatización de clima",
        "Seguridad y videovigilancia",
        "Gestión eficiente de energía",
      ],
      serviceList: {
        smartHomeSetup: "Instalación de sistemas domóticos",
        automationConfig: "Configuración de automatizaciones",
        securityIntegration: "Integración de sistemas de seguridad",
        energyOptimization: "Optimización del consumo energético",
        deviceIntegration: "Integración de dispositivos inteligentes",
      },
      serviceDescriptions: {
        smartHomeSetup:
          "Instalamos sistemas domóticos completos que transforman tu hogar en un espacio inteligente. Utilizamos tecnologías líderes en el mercado y aseguramos una integración perfecta.",
        automationConfig:
          "Configuramos automatizaciones personalizadas que se adaptan a tu estilo de vida. Creamos escenas y rutinas que maximizan la comodidad y eficiencia.",
        securityIntegration:
          "Implementamos sistemas de seguridad inteligentes con cámaras, sensores y control de acceso. Proporcionamos monitoreo en tiempo real y notificaciones instantáneas.",
        energyOptimization:
          "Optimizamos el consumo de energía mediante sistemas inteligentes de control y monitoreo. Implementamos soluciones que reducen costos y mejoran la sostenibilidad.",
        deviceIntegration:
          "Integramos dispositivos inteligentes de diferentes fabricantes en un sistema unificado. Aseguramos la compatibilidad y el funcionamiento armónico de todos los componentes.",
      },
    },
    electronics: {
      title: "Electrónica Digital y Robótica",
      description:
        "Diseñamos y desarrollamos sistemas electrónicos personalizados y soluciones robóticas avanzadas. Desde el diseño de PCB hasta la implementación de sistemas completos, creamos soluciones electrónicas innovadoras que impulsan la eficiencia y automatización de tu negocio.",
      features: [
        "Diseño de PCB",
        "Prototipado rápido",
        "Sistemas embebidos",
        "IoT y conectividad",
        "Sensores y actuadores",
      ],
      serviceList: {
        pcbDesign: "Diseño de placas de circuito impreso (PCB)",
        circuitPrototyping: "Prototipado de circuitos electrónicos",
        componentSelection: "Selección de componentes electrónicos",
        hardwareTesting: "Pruebas y validación de hardware",
        productDevelopment: "Desarrollo de productos electrónicos",
      },
      serviceDescriptions: {
        pcbDesign:
          "Diseñamos PCBs profesionales optimizados para producción y rendimiento. Utilizamos software CAD avanzado y seguimos las mejores prácticas de diseño electrónico.",
        circuitPrototyping:
          "Desarrollamos prototipos de circuitos electrónicos para validar diseños y conceptos. Realizamos pruebas exhaustivas y refinamos los diseños según los resultados.",
        componentSelection:
          "Seleccionamos componentes electrónicos óptimos considerando rendimiento, costo y disponibilidad. Trabajamos con proveedores confiables y componentes de calidad.",
        hardwareTesting:
          "Realizamos pruebas rigurosas de hardware para garantizar fiabilidad y rendimiento. Utilizamos equipos de prueba profesionales y metodologías estandarizadas.",
        productDevelopment:
          "Desarrollamos productos electrónicos desde el concepto hasta la producción. Gestionamos todo el ciclo de desarrollo, incluyendo certificaciones y documentación.",
      },
    },
    networks: {
      title: "Redes y Sistemas",
      description:
        "Diseñamos, implementamos y mantenemos infraestructuras de red robustas y seguras. Nuestras soluciones de red garantizan una conectividad confiable, alta velocidad y máxima seguridad, permitiendo que tu organización opere de manera eficiente y protegida.",
      features: [
        "Configuración de redes",
        "Configuración de sistemas",
        "Implementación de seguridad",
        "Optimización de rendimiento",
        "Servicios de mantenimiento",
      ],
      serviceList: {
        networkSetup: "Configuración de redes empresariales",
        securityConfig: "Configuración de seguridad de red",
        performanceOptimization: "Optimización del rendimiento",
        maintenance: "Mantenimiento preventivo de redes",
        monitoring: "Monitoreo y diagnóstico de red",
      },
      serviceDescriptions: {
        networkSetup:
          "Implementamos redes empresariales robustas y escalables. Diseñamos arquitecturas de red que optimizan el rendimiento y la seguridad.",
        securityConfig:
          "Configuramos sistemas de seguridad avanzados para proteger tu red. Implementamos firewalls, VPNs y políticas de seguridad personalizadas.",
        performanceOptimization:
          "Optimizamos el rendimiento de la red mediante análisis y ajustes precisos. Implementamos QoS y balanceo de carga para máxima eficiencia.",
        maintenance:
          "Realizamos mantenimiento preventivo regular para asegurar el funcionamiento óptimo. Identificamos y resolvemos problemas antes de que afecten las operaciones.",
        monitoring:
          "Proporcionamos monitoreo continuo de la red y diagnóstico en tiempo real. Utilizamos herramientas avanzadas para detectar y resolver problemas rápidamente.",
      },
    },
    support: {
      title: "Soporte Técnico",
      description:
        "Brindamos soporte técnico integral y profesional para mantener tus sistemas funcionando de manera óptima. Nuestro equipo experto está disponible para resolver problemas, optimizar rendimiento y garantizar la continuidad de tus operaciones tecnológicas.",
      features: [
        "Reparación de hardware",
        "Solución de problemas de software",
        "Optimización de sistemas",
        "Recuperación de datos",
        "Mantenimiento preventivo",
      ],
      serviceList: {
        techSupport: "Soporte técnico especializado",
        systemMaintenance: "Mantenimiento de sistemas",
        dataRecovery: "Recuperación de datos",
        optimization: "Optimización de rendimiento",
        training: "Capacitación y entrenamiento",
      },
      serviceDescriptions: {
        techSupport:
          "Proporcionamos soporte técnico especializado para resolver problemas de hardware y software. Ofrecemos asistencia remota y presencial según las necesidades.",
        systemMaintenance:
          "Realizamos mantenimiento regular de sistemas para prevenir problemas y optimizar el rendimiento. Implementamos actualizaciones y parches de seguridad.",
        dataRecovery:
          "Recuperamos datos perdidos o dañados utilizando herramientas y técnicas especializadas. Implementamos soluciones de respaldo para prevenir pérdidas futuras.",
        optimization:
          "Optimizamos el rendimiento de sistemas y equipos mediante ajustes y configuraciones avanzadas. Mejoramos la velocidad y eficiencia de los sistemas.",
        training:
          "Ofrecemos capacitación personalizada para usuarios y administradores de sistemas. Desarrollamos programas de entrenamiento adaptados a diferentes niveles de experiencia.",
      },
    },
    software: {
      title: "Desarrollo de Software",
      description:
        "Creamos soluciones digitales innovadoras y personalizadas que transforman tu visión en realidad. Desde aplicaciones web y móviles hasta sistemas empresariales completos, nuestro equipo experto utiliza las últimas tecnologías para desarrollar software robusto, escalable y fácil de usar.",
      features: [
        "Aplicaciones web",
        "Apps móviles",
        "Software empresarial",
        "APIs y microservicios",
        "Bases de datos",
      ],
      serviceList: {
        webApps: "Desarrollo de aplicaciones web personalizadas",
        mobileApps: "Aplicaciones móviles nativas y multiplataforma",
        apiDevelopment: "Desarrollo de APIs y microservicios",
        databaseDesign: "Diseño y optimización de bases de datos",
        systemIntegration: "Integración de sistemas y aplicaciones",
        cloudMigration: "Migración y servicios en la nube",
      },
      serviceDescriptions: {
        webApps:
          "Desarrollamos aplicaciones web modernas y responsivas utilizando las últimas tecnologías y frameworks. Nuestras soluciones son escalables, seguras y optimizadas para un rendimiento excepcional.",
        mobileApps:
          "Creamos aplicaciones móviles nativas y multiplataforma que ofrecen una experiencia de usuario excepcional. Utilizamos tecnologías como React Native y Flutter para garantizar la mejor calidad.",
        apiDevelopment:
          "Diseñamos y desarrollamos APIs RESTful y microservicios que permiten una integración perfecta entre sistemas. Implementamos las mejores prácticas de seguridad y documentación.",
        databaseDesign:
          "Optimizamos el diseño de bases de datos para garantizar un rendimiento óptimo y una gestión eficiente de los datos. Trabajamos con bases de datos SQL y NoSQL.",
        systemIntegration:
          "Facilitamos la integración perfecta entre diferentes sistemas y aplicaciones, asegurando una comunicación fluida y eficiente entre todas las partes.",
        cloudMigration:
          "Ayudamos en la migración de sistemas a la nube, optimizando costos y mejorando la escalabilidad. Trabajamos con los principales proveedores de servicios cloud.",
      },
    },
    microcontrollers: {
      title: "Programación de Micros",
      description:
        "Especializados en el desarrollo de sistemas embebidos y soluciones IoT de alta precisión. Programamos microcontroladores para automatizar procesos, controlar dispositivos y crear productos inteligentes que se integran perfectamente con tu infraestructura existente.",
      features: [
        "Soluciones IoT",
        "Automatización de dispositivos",
        "Control electrónico",
        "Firmware personalizado",
        "Sistemas embebidos",
      ],
      serviceList: {
        firmwareDevelopment: "Desarrollo de firmware personalizado",
        prototypeDevelopment: "Desarrollo de prototipos electrónicos",
        sensorIntegration: "Integración de sensores y actuadores",
        embeddedSystems: "Sistemas embebidos a medida",
        iotDevices: "Dispositivos IoT conectados",
      },
      serviceDescriptions: {
        firmwareDevelopment:
          "Desarrollamos firmware personalizado para microcontroladores, optimizado para un rendimiento eficiente y bajo consumo de energía. Implementamos protocolos de comunicación seguros y confiables.",
        prototypeDevelopment:
          "Creamos prototipos electrónicos funcionales que permiten validar conceptos y refinar diseños antes de la producción. Utilizamos técnicas de prototipado rápido y componentes de calidad.",
        sensorIntegration:
          "Integramos sensores y actuadores en sistemas embebidos, permitiendo la recolección de datos y control preciso de dispositivos. Trabajamos con una amplia gama de sensores industriales y comerciales.",
        embeddedSystems:
          "Diseñamos sistemas embebidos a medida que cumplen con requisitos específicos de rendimiento, tamaño y consumo de energía. Implementamos soluciones robustas y confiables.",
        iotDevices:
          "Desarrollamos dispositivos IoT que se conectan de forma segura a la nube, permitiendo monitoreo y control remoto. Implementamos protocolos estándar de IoT y medidas de seguridad avanzadas.",
      },
    },
    pricingPlans: {
      software: [
        {
          name: "Landing Page",
          price: "Desde A$800 AUD",
          description: "Ideal para presencia web básica",
          features: [
            "Diseño Responsive",
            "SEO Básico",
            "Hasta 5 secciones",
            "Formulario de contacto",
            "Hosting incluido (1 año)",
          ],
        },
        {
          name: "Aplicación Web",
          price: "Desde A$2,500 AUD",
          recommended: true,
          features: [
            "Panel Administrativo",
            "Base de datos",
            "APIs RESTful",
            "Autenticación de usuarios",
            "Soporte técnico (6 meses)",
          ],
        },
        {
          name: "App Móvil",
          price: "Desde A$5,000 AUD",
          features: [
            "Desarrollo Android/iOS",
            "Backend incluido",
            "APIs personalizadas",
            "Panel de administración",
            "Publicación en stores",
          ],
        },
      ],
      domotics: [
        {
          name: "Básico",
          price: "Desde A$500 AUD",
          features: [
            "Control de iluminación",
            "2 sensores de movimiento",
            "Control por app",
            "Instalación incluida",
            "Soporte básico",
          ],
        },
        {
          name: "Hogar Inteligente",
          price: "Desde A$1,500 AUD",
          recommended: true,
          features: [
            "Control completo de hogar",
            "Seguridad inteligente",
            "Termostato inteligente",
            "Control por voz",
            "Soporte 24/7",
          ],
        },
        {
          name: "Empresarial",
          price: "Desde A$3,000 AUD",
          features: [
            "Automatización completa",
            "Sistema de seguridad",
            "Control de acceso",
            "Monitoreo energético",
            "Mantenimiento mensual",
          ],
        },
      ],
      electronics: [
        {
          name: "Diseño PCB",
          price: "Desde A$300 AUD",
          description: "Perfecto para proyectos pequeños",
          features: [
            "Diseño esquemático",
            "Layout de PCB básico",
            "Lista de materiales",
            "Archivos de fabricación",
            "Revisión de diseño",
          ],
        },
        {
          name: "Prototipado",
          price: "Desde A$1,000 AUD",
          recommended: true,
          features: [
            "Diseño PCB completo",
            "Prototipo funcional",
            "Pruebas y validación",
            "Documentación técnica",
            "Soporte de desarrollo",
          ],
        },
        {
          name: "Producción",
          price: "Desde A$2,500 AUD",
          features: [
            "Optimización para manufactura",
            "Control de calidad",
            "Certificaciones",
            "Soporte de producción",
            "Documentación completa",
          ],
        },
      ],
      networks: [
        {
          name: "Red Básica",
          price: "Desde A$400 AUD",
          description: "Para pequeñas oficinas",
          features: [
            "Configuración router",
            "WiFi empresarial",
            "Firewall básico",
            "Soporte remoto",
            "Monitoreo básico",
          ],
        },
        {
          name: "Red Empresarial",
          price: "Desde A$1,200 AUD",
          recommended: true,
          features: [
            "Seguridad avanzada",
            "VLANs y QoS",
            "VPN corporativa",
            "Monitoreo 24/7",
            "Soporte prioritario",
          ],
        },
        {
          name: "Infraestructura",
          price: "Desde A$3,500 AUD",
          features: [
            "Diseño de red",
            "Alta disponibilidad",
            "Sistema redundante",
            "Gestión centralizada",
            "SLA garantizado",
          ],
        },
      ],
      microcontrollers: [
        {
          name: "Firmware Básico",
          price: "Desde A$200 AUD",
          description: "Para dispositivos simples",
          features: [
            "Programación básica",
            "Un microcontrolador",
            "Funciones básicas",
            "Pruebas unitarias",
            "Documentación básica",
          ],
        },
        {
          name: "IoT Avanzado",
          price: "Desde A$800 AUD",
          recommended: true,
          features: [
            "Conectividad WiFi/BT",
            "Dashboard web",
            "APIs REST",
            "Actualización OTA",
            "Monitoreo remoto",
          ],
        },
        {
          name: "Sistema Industrial",
          price: "Desde A$2,000 AUD",
          features: [
            "Protocolo industrial",
            "Sistema redundante",
            "Interfaz SCADA",
            "Alta disponibilidad",
            "Soporte 24/7",
          ],
        },
      ],
      support: [
        {
          name: "Básico",
          price: "A$50 AUD/hora",
          description: "Soporte bajo demanda",
          features: [
            "Soporte remoto",
            "Horario laboral",
            "Diagnóstico básico",
            "Mantenimiento preventivo",
            "Respuesta en 24h",
          ],
        },
        {
          name: "Empresarial",
          price: "A$500 AUD/mes",
          recommended: true,
          features: [
            "Soporte presencial",
            "Respuesta en 4h",
            "Mantenimiento preventivo",
            "Backups programados",
            "Horario extendido",
          ],
        },
        {
          name: "Premium",
          price: "A$1,200 AUD/mes",
          features: [
            "Soporte 24/7",
            "Respuesta inmediata",
            "Técnico dedicado",
            "Mantenimiento completo",
            "Garantía total",
          ],
        },
      ],
    },
  },
  // Team Section
  team: {
    title: "Conoce a Nuestro Equipo Experto",
    subtitle: "Expertos en tecnología listos para innovar",
    member1: {
      position: "CEO & Fundador",
      description: "Experto en domótica, desarrollo web y móvil.",
    },
    member2: {
      position: "Gerente Comercial",
      description:
        "Experto en ventas y desarrollo de negocios tecnológicos, con amplia experiencia en el sector.",
    },
    member3: {
      position: "Diseñador 3D & Desarrollador Android",
      description: "Especialista en diseño 3D y desarrollo Android.",
    },
    member4: {
      position: "Experto en Soporte y Soluciones IT",
      description:
        "Ingeniero de sistemas especializado en soporte técnico y soluciones IT.",
    },
  },
  // About Section
  about: {
    title: "Sobre Nosotros",
    subtitle: "Transformando espacios y negocios con tecnología inteligente",
    introduction: `Desde 2022, hemos estado a la vanguardia de la innovación tecnológica, 
    iniciando como expertos en domótica y expandiéndonos hacia soluciones integrales que incluyen 
    desarrollo de software, electrónica, redes y soporte técnico. Nuestra trayectoria comenzó con la 
    visión de democratizar el acceso a la tecnología inteligente, y hoy continuamos expandiendo esa 
    misión a través de múltiples disciplinas tecnológicas.`,

    mission: {
      title: "Nuestra Misión",
      description: `Promover la integración de tecnologías avanzadas en hogares y empresas, 
      desde sistemas domóticos hasta soluciones de software y redes. Nos esforzamos por transformar 
      espacios convencionales en entornos inteligentes, desarrollar software innovador, implementar 
      redes robustas y brindar soporte técnico excepcional.`,
    },

    vision: {
      title: "Nuestra Visión",
      description: `Posicionarnos como referentes globales en tecnología integral, definiendo 
      estándares de excelencia en domótica, desarrollo de software, electrónica y redes. Buscamos 
      democratizar el acceso a sistemas inteligentes y soluciones tecnológicas avanzadas, 
      manteniendo un equilibrio entre innovación, calidad y accesibilidad.`,
    },

    stats: [
      { number: "10+", label: "Años de Experiencia" },
      { number: "50+", label: "Proyectos Exitosos" },
      { number: "100+", label: "Clientes Satisfechos" },
      { number: "5+", label: "Áreas de Especialización" },
    ],

    highlights: {
      innovation: {
        title: "Innovación Continua",
        description:
          "Inversión del 10% en I+D para nuevas tecnologías y soluciones.",
      },
      expertise: {
        title: "Experiencia Multidisciplinaria",
        description:
          "Especialistas en domótica, software, redes, electrónica y soporte técnico.",
      },
      quality: {
        title: "Calidad Garantizada",
        description: "90% de satisfacción del cliente y soporte 24/7.",
      },
    },

    values: {
      title: "Nuestros Valores",
      items: [
        {
          icon: "innovation",
          title: "Innovación",
          description:
            "Desarrollo continuo de soluciones tecnológicas avanzadas",
        },
        {
          icon: "quality",
          title: "Excelencia",
          description: "Compromiso con la calidad en cada proyecto y servicio",
        },
        {
          icon: "integrity",
          title: "Accesibilidad",
          description:
            "Democratización de la tecnología para todos los sectores",
        },
        {
          icon: "excellence",
          title: "Sostenibilidad",
          description:
            "Enfoque en soluciones tecnológicas sostenibles y eficientes",
        },
      ],
    },

    objectives: {
      title: "Objetivos Estratégicos",
      items: [
        "Expansión de mercado en nuevas regiones",
        "Desarrollo de soluciones innovadoras",
        "Establecimiento de alianzas estratégicas",
        "Educación y concientización tecnológica",
        "Compromiso con la sustentabilidad",
      ],
    },
  },
  // Blog Section
  blog: {
    title: "Últimas Noticias y Perspectivas",
    subtitle:
      "Mantente actualizado con nuestros últimos desarrollos tecnológicos",
    readMore: "Leer Más",
    sortBy: "Ordenar por",
    newest: "Más recientes",
    oldest: "Más antiguos",
    aboutAuthor: "Sobre el Autor",
    authorRole: "Especialista en Tecnología",
    authorBio:
      "Profesional con amplia experiencia en el sector tecnológico, dedicado a compartir conocimientos y mejores prácticas para ayudar a las empresas a alcanzar sus objetivos digitales.",
    categories: {
      all: "Todo",
      technology: "Tecnología",
      innovation: "Innovación",
      automation: "Automatización",
      ai: "Inteligencia Artificial",
      security: "Seguridad",
      iot: "IoT",
    },
    featuredPosts: [
      {
        id: 1,
        title: "El Futuro de la IA en los Negocios",
        excerpt:
          "Explorando cómo la inteligencia artificial está transformando las operaciones empresariales modernas...",
        image:
          "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
        category: "ai",
        date: "2024-03-15",
        author: "Carlos Rodríguez",
        readTime: "5 min",
        slug: "futuro-ia-negocios",
      },
      {
        id: 2,
        title: "Tendencias en Cloud Computing 2024",
        excerpt:
          "Últimas tendencias e innovaciones en computación en la nube que están dando forma a la industria...",
        image:
          "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg",
        category: "technology",
        date: "2024-03-10",
        author: "Ana Martínez",
        readTime: "4 min",
        slug: "tendencias-cloud-computing-2024",
      },
      {
        id: 3,
        title: "Mejores Prácticas de Ciberseguridad",
        excerpt:
          "Medidas esenciales de ciberseguridad que toda empresa debe implementar...",
        image:
          "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",
        category: "security",
        date: "2024-03-05",
        author: "Miguel Sánchez",
        readTime: "6 min",
        slug: "mejores-practicas-ciberseguridad",
      },
      {
        id: 4,
        title: "Revolución IoT en la Industria 4.0",
        excerpt:
          "Cómo el Internet de las Cosas está transformando la manufactura y la producción industrial...",
        image:
          "https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg",
        category: "iot",
        date: "2024-03-01",
        author: "Laura Gómez",
        readTime: "7 min",
        slug: "revolucion-iot-industria",
      },
      {
        id: 5,
        title: "Automatización Robótica de Procesos",
        excerpt:
          "Implementación de RPA para optimizar operaciones empresariales y reducir costos...",
        image:
          "https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg",
        category: "automation",
        date: "2024-02-25",
        author: "David Kim",
        readTime: "5 min",
        slug: "automatizacion-robotica-procesos",
      },
      {
        id: 6,
        title: "Innovaciones en Desarrollo Web",
        excerpt:
          "Las últimas tecnologías y frameworks que están revolucionando el desarrollo web...",
        image:
          "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
        category: "technology",
        date: "2024-02-20",
        author: "Sofia Torres",
        readTime: "4 min",
        slug: "innovaciones-desarrollo-web",
      },
    ],
  },
  // Contact Section
  contact: {
    title: "Contáctanos",
    subtitle:
      "En nuestra página, valoramos enormemente tu opinión y queremos estar más cerca de ti. Ya sea que tengas dudas, comentarios, sugerencias o simplemente quieras compartir tu experiencia, estamos aquí para escucharte. Tu voz es importante para nosotros, y cada mensaje es una oportunidad para mejorar y ofrecerte un mejor servicio. No dudes en ponerte en contacto con nosotros a través de los medios disponibles; nos encantaría saber más sobre ti y cómo podemos ayudarte.",
    form: {
      name: "Tu Nombre",
      email: "Tu Email",
      phone: "Número de Teléfono",
      subject: "Asunto",
      message: "Tu Mensaje",
      submit: "Enviar Mensaje",
    },
    info: {
      title: "Información de Contacto",
      address: "Dirección",
      phone: "Teléfono",
      email: "Correo",
      hours: "Horario de Atención",
      location: "14-16 Ramsgate St, Botany NSW 2019",
      phoneNumber: "+61410747452",
      emailAddress: "info@DomoCodeTech.com",
      businessHours: "Lunes - Viernes: 9:00 AM - 6:00 PM",
    },
    whatsapp: "Contáctanos por WhatsApp",
  },
  // Testimonials Section
  testimonials: {
    title: "Lo que Dicen Nuestros Clientes",
    subtitle: "Opiniones reales de clientes satisfechos",
    client1: {
      name: "Flor Lilia",
      position: "Contadora Pública",
      quote:
        "DomoCodeTech transformó completamente nuestra infraestructura tecnológica. Su equipo experto entregó soluciones innovadoras que superaron nuestras expectativas.",
    },
    client2: {
      name: "Juan Carlos",
      position: "Ingeniero Civil",
      quote:
        "La implementación de automatización robótica mejoró nuestra eficiencia en un 200%. El ROI superó nuestras proyecciones iniciales.",
    },
    client3: {
      name: "Miguel Toro",
      position: "Propietario de Casa Inteligente",
      quote:
        "La solución de domótica instalada por DomoCodeTech ha revolucionado la forma en que interactuamos con nuestro hogar. Tecnología del futuro, hoy.",
    },
    client4: {
      name: "David Torres",
      position: "Director de Investigación en IA",
      quote:
        "Su experiencia en la implementación de inteligencia artificial nos ha dado una ventaja competitiva en el mercado. ¡Un trabajo verdaderamente sobresaliente!",
    },
    client5: {
      name: "Felipe Quintero",
      position: "Arquitecta de Soluciones Cloud",
      quote:
        "El proyecto de migración a la nube fue perfecto. El conocimiento técnico y el enfoque profesional de su equipo marcaron la diferencia.",
    },
    client6: {
      name: "Edward Pacheco",
      position: "Gerente de Sistemas de Seguridad",
      quote:
        "Las soluciones de ciberseguridad de DomoCodeTech han mejorado significativamente la protección de nuestro sistema. Su enfoque proactivo es admirable.",
    },
  },
  // Call to Action
  cta: {
    title: "¿Listo para Empezar?",
    subtitle: "Contáctanos hoy para una consulta y presupuesto gratis.",
    button: "Contáctanos",
  },
  // Common
  common: {
    readMore: "Leer Más",
    showLess: "Mostrar Menos",
    contactUs: "Contáctanos",
    loading: "Cargando...",
    error: "Algo salió mal",
    success: "¡Éxito!",
    required: "Campo requerido",
    invalid: "Entrada inválida",
  },
  // Footer Section
  footer: {
    description: "Soluciones innovadoras para un futuro más inteligente",
    sections: {
      company: {
        title: "Empresa",
        about: "Nosotros",
        services: "Servicios",
        blog: "Blog",
        contact: "Contacto",
      },
      services: {
        title: "Servicios",
        automation: "Domótica",
        electronics: "Electrónica",
        robotics: "Robótica",
        software: "Software",
      },
      support: {
        title: "Soporte",
        help: "Centro de Ayuda",
        docs: "Documentación",
        privacy: "Política de Privacidad",
        terms: "Términos de Servicio",
      },
    },
    social: {
      title: "Síguenos",
    },
    copyright: "© {{year}} {{company}}. Todos los derechos reservados.",
  },
  // Pricing Section
  pricing: {
    title: "Nuestros Precios",
    subtitle: "Elige el plan perfecto para tus necesidades",
    getStarted: "Comenzar",
    plans: {
      starter: {
        title: "Inicial",
        period: "proyecto básico",
        description: "Para proyectos pequeños",
        features: [
          "Consultoría inicial",
          "Diseño básico",
          "Implementación",
          "Soporte por 3 meses",
          "Documentación",
        ],
      },
      professional: {
        title: "Profesional",
        period: "proyecto completo",
        description: "Para proyectos medianos",
        features: [
          "Consultoría avanzada",
          "Diseño personalizado",
          "Implementación completa",
          "Soporte por 6 meses",
          "Capacitación incluida",
        ],
      },
      enterprise: {
        title: "Empresarial",
        price: "Personalizado",
        period: "proyecto",
        description: "Para grandes proyectos",
        features: [
          "Solución completa",
          "Diseño a medida",
          "Implementación integral",
          "Soporte 24/7",
          "Mantenimiento continuo",
        ],
      },
    },
  },
  // Projects Section
  projects: {
    title: "Nuestros Proyectos",
    subtitle:
      "Descubre nuestras áreas de especialización y proyectos destacados",
    features: {
      responsive: "Diseño responsivo",
      "cross-browser": "Compatibilidad multiplataforma",
      "modern-ui": "Diseño UI/UX moderno",
      "user-friendly": "Interfaz amigable",
      performance: "Alto rendimiento",
      "api-integration": "Integración con APIs",
      "custom-design": "Diseño personalizado",
      architecture: "Arquitectura robusta",
      "cross-platform": "Funcionalidad multiplataforma",
      "smart-devices": "Integración de dispositivos inteligentes",
      "real-time": "Monitoreo en tiempo real",
      "cloud-integration": "Conectividad en la nube",
      "payment-gateway": "Pasarela de pago segura",
      inventory: "Gestión de inventario",
      analytics: "Panel de análisis",
      security: "Seguridad avanzada",
      scalability: "Escalabilidad",
      automation: "Automatización",
      monitoring: "Monitoreo continuo",
      optimization: "Optimización de recursos",
      innovation: "Innovación",
      consulting: "Consultoría de Software",
      analysis: "Análisis",
      solution: "Solución",
      "mobile-first": "Diseño Mobile First",
      "offline-mode": "Modo sin conexión",
      "push-notifications": "Notificaciones push",
      "data-sync": "Sincronización de datos",
      "voice-control": "Control por voz",
      "energy-efficient": "Eficiencia energética",
      "remote-access": "Acceso remoto",
      "data-security": "Seguridad de datos",
      "ai-integration": "Integración con IA",
      blockchain: "Tecnología blockchain",
      "cloud-backup": "Respaldo en la nube",
      "multi-protocol": "Múltiples protocolos",
      "hardware-integration": "Integración de hardware",
      "custom-firmware": "Firmware personalizado",
      "quality-control": "Control de calidad",
    },
    web: {
      title: "Desarrollo Web",
      description:
        "Portafolio de sitios y aplicaciones web innovadoras, desde landing pages hasta plataformas empresariales complejas.",
      features: [
        "responsive",
        "cross-browser",
        "modern-ui",
        "performance",
        "security",
      ],
    },
    mobile: {
      title: "Desarrollo Móvil",
      description:
        "Colección de aplicaciones móviles nativas y multiplataforma para diversos sectores empresariales.",
      features: [
        "mobile-first",
        "offline-mode",
        "push-notifications",
        "performance",
        "data-sync",
      ],
    },
    homeAutomation: {
      title: "Domótica",
      description:
        "Proyectos de automatización inteligente para hogares y edificios, integrando las últimas tecnologías en control y monitoreo.",
      features: [
        "voice-control",
        "energy-efficient",
        "remote-access",
        "smart-devices",
        "automation",
      ],
    },
    iot: {
      title: "Internet de las Cosas",
      description:
        "Soluciones IoT innovadoras que conectan dispositivos y sistemas para crear entornos inteligentes y eficientes.",
      features: [
        "real-time",
        "cloud-integration",
        "ai-integration",
        "blockchain",
        "cloud-backup",
      ],
    },
    networking: {
      title: "Redes y Sistemas",
      description:
        "Implementaciones de infraestructura de red y sistemas empresariales con énfasis en seguridad y rendimiento.",
      features: [
        "security",
        "performance",
        "scalability",
        "monitoring",
        "optimization",
      ],
    },
    electronics: {
      title: "Electrónica y Hardware",
      description:
        "Desarrollo de soluciones electrónicas personalizadas, desde prototipos hasta productos listos para producción.",
      features: [
        "hardware-integration",
        "custom-firmware",
        "quality-control",
        "custom-design",
        "analysis",
      ],
    },

    featuresTitle: "Características",
    startProject: "Iniciar Proyecto",
    scheduleConsultation: "Agendar Consulta",
    projectOverview: "Descripción del Proyecto",
    keyFeatures: "Características Principales",
    developmentProcess: "Proceso de Desarrollo",
  },
  partners: {
    title: "Aliados Tecnológicos",
    subtitle: "Trabajamos con las mejores tecnologías y marcas del mercado",
    description:
      "Nuestras alianzas estratégicas nos permiten ofrecer soluciones de vanguardia y garantizar la máxima calidad en cada proyecto.",
  },
  /**
   * Process Flow Section
   * Muestra el flujo de trabajo y proceso de la empresa
   */
  processFlow: {
    title: "Nuestro Proceso de Trabajo",
    description:
      "Un enfoque metódico y transparente para garantizar el éxito de tu proyecto",
    steps: {
      consultation: {
        title: "Consulta",
        description: "Evaluamos tus necesidades",
      },
      planning: {
        title: "Planificación",
        description: "Diseñamos la solución",
      },
      development: {
        title: "Desarrollo",
        description: "Implementamos el proyecto",
      },
      delivery: {
        title: "Entrega",
        description: "Desplegamos y optimizamos",
      },
    },
  },
  timeline: {
    milestones: [
      {
        year: "2018",
        title: "Primeros Pasos",
        description:
          "Inicio de proyectos independientes en domótica y automatización",
        icon: "🌱",
      },
      {
        year: "2019",
        title: "Especialización Técnica",
        description: "Certificaciones en tecnologías IoT y sistemas embebidos",
        icon: "📚",
      },
      {
        year: "2020",
        title: "Proyectos Remotos",
        description: "Adaptación a servicios digitales y soporte remoto",
        icon: "🌐",
      },
      {
        year: "2021",
        title: "Expansión Digital",
        description:
          "Desarrollo de primeras aplicaciones móviles y plataformas web",
        icon: "📱",
      },
      {
        year: "2022",
        title: "Fundación Oficial",
        description: "Establecimiento formal de DomoCodeTech como empresa",
        icon: "🚀",
      },
      {
        year: "2023",
        title: "Crecimiento Integral",
        description:
          "Incorporación de servicios de redes y desarrollo de software",
        icon: "💻",
      },
      {
        year: "2024",
        title: "Innovación Tecnológica",
        description:
          "Implementación de soluciones avanzadas en IoT y automatización",
        icon: "⚡",
      },
      {
        year: "2025",
        title: "Centro de Innovación",
        description: "Inauguración del centro de investigación y desarrollo",
        icon: "🔬",
      },
    ],
  },
  terms: {
    title: "Términos y Condiciones",
    acceptance: "Aceptación de los Términos",
    acceptanceContent:
      "Al acceder y utilizar este sitio web, aceptas estar sujeto a estos términos y condiciones de uso. Si no estás de acuerdo con alguno de estos términos, te recomendamos no utilizar nuestros servicios.",
    services: "Servicios",
    servicesContent:
      "Nos comprometemos a proporcionar servicios de alta calidad en las áreas de domótica, desarrollo de software, electrónica y soporte técnico. Nos reservamos el derecho de modificar o descontinuar cualquier aspecto de nuestros servicios en cualquier momento.",
    intellectual: "Propiedad Intelectual",
    intellectualContent:
      "Todo el contenido presente en este sitio web, incluyendo pero no limitado a textos, gráficos, logotipos, imágenes y software, está protegido por derechos de autor y otras leyes de propiedad intelectual.",
    liability: "Limitación de Responsabilidad",
    liabilityContent:
      "No seremos responsables por daños indirectos, especiales o consecuentes que surjan del uso o la imposibilidad de usar nuestros servicios.",
  },

  privacy: {
    title: "Política de Privacidad",
    dataCollection: "Recolección de Datos",
    dataCollectionContent:
      "Recopilamos información personal cuando te registras en nuestro sitio, realizas una compra o te suscribes a nuestro boletín. Esta información puede incluir tu nombre, dirección de correo electrónico y detalles de contacto.",
    dataSecurity: "Seguridad de Datos",
    dataSecurityContent:
      "Implementamos medidas de seguridad técnicas y organizativas para proteger tu información personal contra acceso no autorizado, alteración o destrucción.",
    cookies: "Uso de Cookies",
    cookiesContent:
      "Utilizamos cookies para mejorar tu experiencia de navegación y analizar cómo se utiliza nuestro sitio web. Puedes configurar tu navegador para rechazar todas las cookies.",
    rights: "Tus Derechos",
    rightsContent:
      "Tienes derecho a acceder, corregir o eliminar tu información personal. También puedes oponerte al procesamiento de tus datos o solicitar su portabilidad.",
  },

  help: {
    title: "Centro de Ayuda",
    faq: {
      general: "Preguntas Generales",
      generalContent:
        "Encuentra respuestas a las preguntas más comunes sobre nuestros servicios y cómo podemos ayudarte.",
      services: "Servicios Técnicos",
      servicesContent:
        "Información detallada sobre nuestros servicios técnicos, incluyendo domótica, desarrollo de software y soporte.",
      support: "Soporte Técnico",
      supportContent:
        "Accede a nuestro soporte técnico especializado para resolver cualquier problema o duda que tengas.",
    },
  },

  documentation: {
    title: "Documentación",
    apiSection: "Documentación de API",
    apiDescription:
      "Guías completas y documentación técnica para integrar nuestras APIs y servicios en tu aplicación.",
    servicesSection: "Servicios y Productos",
    servicesDescription:
      "Información detallada sobre nuestros servicios, especificaciones técnicas y guías de implementación.",
    integrationsSection: "Integraciones",
    integrationsDescription:
      "Documentación sobre cómo integrar nuestras soluciones con diferentes plataformas y servicios.",
  },
};
