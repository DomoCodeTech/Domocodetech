import { title } from "process";

/**
 * English translations for the DomoCodeTech website
 * This file contains all text content in English for the entire application
 */
export const enTranslations = {
  /**
   * Company Information
   * Basic details about the company used across the site
   */
  company: {
    slogan: "DomoCodeTech",
    address: "Autopista Nte. #108-27, Bogotá, Colombia",
    workingHours: "7:00 a.m. - 5:00 p.m.",
  },

  /**
   * Navigation Menu
   * Main navigation links used in the header/navbar
   */
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    blog: "Blog",
    contact: "Contact",
  },

  /**
   * Theme Switcher
   * Text for the light/dark mode toggle button
   */
  theme: {
    switchToLight: "Switch to light mode",
    switchToDark: "Switch to dark mode",
  },

  /**
   * Hero Section
   * Main banner section on the homepage
   */
  hero: {
    slogan: "Home Automation, Software, and Technology",
    subtitle: "We provide innovative solutions for your technological needs",
    getQuote: "Get Free Quote",
    imageAlt: "Team working on technology",
  },

  /**
   * Services Section
   * Detailed information about our main service offerings
   */
  services: {
    title: "Our Services",
    subtitle: "Professional technology solutions for your business",
    introduction:
      "We specialize in delivering cutting-edge technological solutions that help businesses thrive in the digital age. Our comprehensive range of services is designed to meet all your tech needs under one roof.",
    highlight1: {
      title: "Expert Team",
      description:
        "Our certified professionals bring years of experience and expertise to every project.",
    },
    highlight2: {
      title: "Custom Solutions",
      description:
        "Tailored solutions designed specifically for your business needs and goals.",
    },
    highlight3: {
      title: "24/7 Support",
      description:
        "Round-the-clock technical support to ensure your systems run smoothly.",
    },
    viewMore: "View More",
    servicesList: "Services List",

    software: {
      title: "Software Development",
      description:
        "We create innovative and customized digital solutions that transform your vision into reality. From web and mobile applications to complete enterprise systems, our expert team uses the latest technologies to develop robust, scalable, and user-friendly software.",
      features: [
        "Web applications",
        "Mobile apps",
        "Business software",
        "APIs and microservices",
        "Databases",
      ],
      serviceList: {
        webApps: "Custom web application development",
        mobileApps: "Native and cross-platform mobile apps",
        apiDevelopment: "API and microservices development",
        databaseDesign: "Database design and optimization",
        systemIntegration: "System and application integration",
        cloudMigration: "Cloud migration and services",
      },
    },

    microcontrollers: {
      title: "Microcontroller Programming",
      description:
        "Specialized in developing high-precision embedded systems and IoT solutions. We program microcontrollers to automate processes, control devices, and create smart products that seamlessly integrate with your existing infrastructure.",
      features: [
        "IoT solutions",
        "Device automation",
        "Electronic control",
        "Custom firmware",
        "Embedded systems",
      ],
      serviceList: {
        firmwareDevelopment: "Custom firmware development",
        prototypeDevelopment: "Electronic prototype development",
        sensorIntegration: "Sensor and actuator integration",
        embeddedSystems: "Custom embedded systems",
        iotDevices: "Connected IoT devices",
      },
    },

    domotics: {
      title: "Home Automation",
      description:
        "We transform conventional spaces into smart, automated environments. We implement advanced home automation systems that allow you to efficiently control and monitor your home or office, improving your quality of life and reducing energy consumption.",
      features: [
        "Voice and mobile app control",
        "Smart lighting",
        "Climate automation",
        "Security and video surveillance",
        "Efficient energy management",
      ],
      serviceList: {
        smartHomeSetup: "Smart home system installation",
        automationConfig: "Automation configuration",
        securityIntegration: "Security system integration",
        energyOptimization: "Energy consumption optimization",
        deviceIntegration: "Smart device integration",
      },
    },

    electronics: {
      title: "Digital Electronics and Robotics",
      description:
        "We design and develop custom electronic systems and advanced robotic solutions. From PCB design to complete system implementation, we create innovative electronic solutions that drive efficiency and automation in your business.",
      features: [
        "PCB design",
        "Rapid prototyping",
        "Embedded systems",
        "IoT and connectivity",
        "Sensors and actuators",
      ],
      serviceList: {
        pcbDesign: "Printed Circuit Board (PCB) design",
        circuitPrototyping: "Electronic circuit prototyping",
        componentSelection: "Electronic component selection",
        hardwareTesting: "Hardware testing and validation",
        productDevelopment: "Electronic product development",
      },
    },

    networks: {
      title: "Networks and Systems",
      description:
        "We design, implement, and maintain robust and secure network infrastructures. Our network solutions ensure reliable connectivity, high speed, and maximum security, allowing your organization to operate efficiently and securely.",
      features: [
        "Network setup",
        "System configuration",
        "Security implementation",
        "Performance optimization",
        "Maintenance services",
      ],
      serviceList: {
        networkSetup: "Enterprise network setup",
        securityConfig: "Network security configuration",
        performanceOptimization: "Performance optimization",
        maintenance: "Preventive network maintenance",
        monitoring: "Network monitoring and diagnostics",
      },
    },

    support: {
      title: "Technical Support",
      description:
        "We provide comprehensive and professional technical support to keep your systems running optimally. Our expert team is available to solve problems, optimize performance, and ensure the continuity of your technological operations.",
      features: [
        "Hardware repair",
        "Software troubleshooting",
        "System optimization",
        "Data recovery",
        "Preventive maintenance",
      ],
      serviceList: {
        techSupport: "Specialized technical support",
        systemMaintenance: "System maintenance",
        dataRecovery: "Data recovery",
        optimization: "Performance optimization",
        training: "Training and education",
      },
    },
    pricingPlans: {
      software: [
        {
          name: 'Landing Page',
          price: 'From $800',
          description: 'Ideal for basic web presence',
          features: [
            'Responsive Design',
            'Basic SEO',
            'Up to 5 sections',
            'Contact form',
            'Hosting included (1 year)'
          ]
        },
        {
          name: 'Web Application',
          price: 'From $2,500',
          recommended: true,
          features: [
            'Admin Panel',
            'Database',
            'RESTful APIs',
            'User authentication',
            'Technical support (6 months)'
          ]
        },
        {
          name: 'Mobile App',
          price: 'From $5,000',
          features: [
            'Android/iOS Development',
            'Backend included',
            'Custom APIs',
            'Admin panel',
            'Store publication'
          ]
        }
      ],
      domotics: [
        {
          name: 'Basic',
          price: 'From $500',
          features: [
            'Lighting control',
            '2 motion sensors',
            'App control',
            'Installation included',
            'Basic support'
          ]
        },
        {
          name: 'Smart Home',
          price: 'From $1,500',
          recommended: true,
          features: [
            'Complete home control',
            'Smart security',
            'Smart thermostat',
            'Voice control',
            '24/7 Support'
          ]
        },
        {
          name: 'Enterprise',
          price: 'From $3,000',
          features: [
            'Complete automation',
            'Security system',
            'Access control',
            'Energy monitoring',
            'Monthly maintenance'
          ]
        }
      ],
      microcontrollers: [
        {
          name: 'Basic Firmware',
          price: 'From $200',
          description: 'For simple devices',
          features: [
            'Basic programming',
            'Single microcontroller',
            'Basic functions',
            'Unit testing',
            'Basic documentation'
          ]
        },
        {
          name: 'IoT Advanced',
          price: 'From $800',
          recommended: true,
          features: [
            'WiFi/BT connectivity',
            'Web dashboard',
            'REST APIs',
            'OTA updates',
            'Remote monitoring'
          ]
        },
        {
          name: 'Industrial System',
          price: 'From $2,000',
          features: [
            'Industrial protocol',
            'Redundant system',
            'SCADA interface',
            'High availability',
            '24/7 Support'
          ]
        }
      ],
      electronics: [
        {
          name: 'PCB Design',
          price: 'From $300',
          description: 'Perfect for small projects',
          features: [
            'Schematic design',
            'Basic PCB layout',
            'Bill of materials',
            'Manufacturing files',
            'Design review'
          ]
        },
        {
          name: 'Prototyping',
          price: 'From $1,000',
          recommended: true,
          features: [
            'Complete PCB design',
            'Functional prototype',
            'Testing & validation',
            'Technical documentation',
            'Development support'
          ]
        },
        {
          name: 'Production',
          price: 'From $2,500',
          features: [
            'Manufacturing optimization',
            'Quality control',
            'Certifications',
            'Production support',
            'Complete documentation'
          ]
        }
      ],
      networks: [
        {
          name: 'Basic Network',
          price: 'From $400',
          description: 'For small offices',
          features: [
            'Router setup',
            'Business WiFi',
            'Basic firewall',
            'Remote support',
            'Basic monitoring'
          ]
        },
        {
          name: 'Enterprise Network',
          price: 'From $1,200',
          recommended: true,
          features: [
            'Advanced security',
            'VLANs & QoS',
            'Corporate VPN',
            '24/7 monitoring',
            'Priority support'
          ]
        },
        {
          name: 'Infrastructure',
          price: 'From $3,500',
          features: [
            'Network design',
            'High availability',
            'Redundant system',
            'Centralized management',
            'Guaranteed SLA'
          ]
        }
      ],
      support: [
        {
          name: 'Basic',
          price: '$50/hour',
          description: 'On-demand support',
          features: [
            'Remote support',
            'Business hours',
            'Basic diagnostics',
            'Preventive maintenance',
            '24h response time'
          ]
        },
        {
          name: 'Business',
          price: '$500/month',
          recommended: true,
          features: [
            'On-site support',
            '4h response time',
            'Preventive maintenance',
            'Scheduled backups',
            'Extended hours'
          ]
        },
        {
          name: 'Premium',
          price: '$1,200/month',
          features: [
            '24/7 support',
            'Immediate response',
            'Dedicated technician',
            'Complete maintenance',
            'Full warranty'
          ]
        }
      ]
    }
  },

  /**
   * Projects Section
   * Information about our project offerings
   */
  projects: {
    title: "Our Projects",
    subtitle: "Explore our portfolio showcasing robust project solutions.",
    features: {
      'responsive': 'Responsive design',
      'cross-browser': 'Cross-browser compatibility',
      'modern-ui': 'Modern UI/UX design',
      'user-friendly': 'User-friendly interface',
      'performance': 'High performance',
      'api-integration': 'Seamless API integration',
      'custom-design': 'Custom design',
      'architecture': 'Robust architecture',
      'cross-platform': 'Cross-platform functionality',
      'smart-devices': 'Smart device integration',
      'real-time': 'Real-time monitoring',
      'cloud-integration': 'Cloud connectivity',
      'payment-gateway': 'Secure payment gateway',
      'inventory': 'Inventory management',
      'analytics': 'Analytics dashboard',
      'security': 'Advanced security',
      'scalability': 'Scalability',
      'automation': 'Automation',
      'monitoring': 'Continuous monitoring',
      'optimization': 'Resource optimization',
      'innovation': 'Innovation',
      'consulting': 'Software Consulting',
      'analysis': 'Analysis',
      'solution': 'Solution',
    },
    consulting: {
      title: "Software Consulting",
      description: "Strategic advice and customized technology solutions.",
      overview: "Our consulting service helps businesses navigate the complex digital landscape and make informed decisions about their technology investments.",
      techStack: "Areas of Expertise",
      process: "Consulting Process"
    },
    web: {
      title: "Web Application",
      description: "A modern web platform with responsive design for seamless user experience.",
      features: [
        "Responsive design",
        "Cross-browser compatibility",
        "Modern UI/UX design"
      ],
      overview: "Our web development service focuses on creating modern, scalable, and efficient solutions that help businesses thrive in the digital age.",
      techStack: "Technology Stack",
      process: "Development Process"
    },
    mobile: {
      title: "Mobile Application",
      description: "Optimized mobile solutions for iOS and Android platforms.",
      features: [
        "User-friendly interface",
        "High performance",
        "Seamless API integration"
      ],
      overview: "Our mobile development service delivers high-quality native applications for both iOS and Android platforms.",
      techStack: "Technology Stack",
      process: "Development Process"
    },
    software: {
      title: "Software Development",
      description: "Custom software solutions built with cutting-edge technology.",
      features: [
        "Custom software design",
        "Robust architecture",
        "Cross-platform functionality"
      ],
      overview: "We create custom software solutions that perfectly fit your specific business needs.",
      techStack: "Technology Stack",
      process: "Development Process"
    },
    iot: {
      title: "IoT Solutions",
      description: "Smart devices and systems for automated monitoring and control.",
      features: [
        "Smart device integration",
        "Real-time monitoring",
        "Cloud connectivity"
      ],
      overview: "We develop innovative IoT solutions that connect and automate devices to create intelligent systems.",
      techStack: "Technology Stack",
      process: "Development Process"
    },
    ecommerce: {
      title: "E-commerce Platform",
      description: "Complete online store solution with advanced features.",
      features: [
        "Secure payment gateway",
        "Inventory management",
        "Analytics dashboard"
      ],
      overview: "We implement complete and customized e-commerce platforms to drive your online business.",
      techStack: "Technology Stack",
      process: "Development Process"
    },
    featuresTitle: "Features",
    startProject: "Start Project",
    scheduleConsultation: "Schedule Consultation",
    projectOverview: "Project Overview",
    keyFeatures: "Key Features",
    developmentProcess: "Development Process"
  },

  /**
   * Team Section
   * Information about key team members
   */
  team: {
    title: "Meet Our Expert Team",
    subtitle: "Technology experts ready to innovate",
    // Individual team member details
    "member1": {
      "position": "CEO & Founder",
      "description": "Expert in home automation, web, and mobile development."
    },
    "member2": {
      "position": "Senior Android Developer",
      "description": "Native Android developer with over 10 years of experience."
    },
    "member3": {
      "position": "3D Designer & Android Developer",
      "description": "Specialist in 3D design and Android development."
    },
    "member4": {
      "position": "Systems engineer & Support Expert",
      "description": "Systems engineer specialized in technical support and IT solutions."
    }
  },

  /**
   * About Section
   * Company information, mission, vision, and values
   */
  about: {
    title: "About Us",
    subtitle: "Building the future with technology",
    introduction:
      "Since our founding, we have been at the forefront of technological innovation, helping businesses and individuals harness the power of cutting-edge solutions. Our journey is marked by continuous growth, learning, and adaptation to emerging technologies.",
    highlight1: {
      title: "Innovation First",
      description:
        "We stay ahead of technological trends to bring you the latest solutions.",
    },
    highlight2: {
      title: "Client Success",
      description:
        "Your success is our priority, with a focus on delivering measurable results.",
    },
    highlight3: {
      title: "Global Reach",
      description:
        "Serving clients worldwide with localized solutions and support.",
    },
    // Key statistics
    stats: [
      { number: "10+", label: "Years Experience" },
      { number: "50+", label: "Projects Completed" },
      { number: "100+", label: "Happy Clients" },
      { number: "3+", label: "Team Members" },
    ],
    // Mission statement
    mission: {
      title: "Our Mission",
      description:
        "To provide innovative and sustainable technological solutions that transform lives and businesses.",
      image:
        "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
    },
    // Vision statement
    vision: {
      title: "Our Vision",
      description:
        "To be the leading technology partner in creating a smarter, more connected world.",
      image:
        "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg",
    },
    // Company values
    values: {
      title: "Our Values",
      items: [
        {
          icon: "innovation",
          title: "Innovation",
          description:
            "Constantly pushing boundaries and exploring new possibilities",
        },
        {
          icon: "quality",
          title: "Quality",
          description: "Delivering excellence in every project and service",
        },
        {
          icon: "integrity",
          title: "Integrity",
          description: "Operating with transparency and ethical standards",
        },
      ],
    },
  },

  /**
   * Blog Section
   * News, articles, and insights
   */
  blog: {
    title: "Latest News and Insights",
    subtitle: "Stay updated with our latest technological developments",
    readMore: "Read More",
    sortBy: "Sort by",
    newest: "Newest",
    oldest: "Oldest",
    aboutAuthor: "About the Author",
    authorRole: "Technology Specialist",
    authorBio:
      "Professional with extensive experience in the technology sector, dedicated to sharing knowledge and best practices to help companies achieve their digital goals.",
    noResults: "No results found",
    categories: {
      all: "All",
      technology: "Technology",
      innovation: "Innovation",
      automation: "Automation",
      ai: "Artificial Intelligence",
      security: "Security",
      iot: "IoT",
    },
    featuredPosts: [
      {
        id: 1,
        title: "The Future of AI in Business",
        excerpt:
          "Exploring how artificial intelligence is transforming modern business operations...",
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
        title: "Cloud Computing Trends 2024",
        excerpt:
          "Latest trends and innovations in cloud computing that are shaping the industry...",
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
        title: "Cybersecurity Best Practices",
        excerpt:
          "Essential cybersecurity measures that every business should implement...",
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
        title: "IoT Revolution in Industry 4.0",
        excerpt:
          "How the Internet of Things is transforming manufacturing and industrial production...",
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
        title: "Robotic Process Automation",
        excerpt:
          "Implementing RPA to optimize business operations and reduce costs...",
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
        title: "Web Development Innovations",
        excerpt:
          "The latest technologies and frameworks revolutionizing web development...",
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

  /**
   * Contact Section
   * Contact form and company contact information
   */
  contact: {
    title: "Get in Touch",
    subtitle:
      "On our page, we greatly value your opinion and want to stay close to you. Whether you have questions, feedback, suggestions, or just want to share your experience, we are here to listen. Your voice is important to us, and every message is an opportunity to improve and provide you with better service. Feel free to reach out to us through the available channels; we would love to know more about you and how we can assist you.",
    // Contact form labels
    form: {
      name: "Your Name",
      email: "Your Email",
      phone: "Phone Number",
      subject: "Subject",
      message: "Your Message",
      submit: "Send Message",
    },
    // Contact information
    info: {
      title: "Contact Information",
      address: "Address",
      phone: "Phone",
      email: "Email",
      hours: "Business Hours",
      location: "Autopista Nte. #108-27, Bogotá, Colombia",
      phoneNumber: "+1 (555) 123-4567",
      emailAddress: "domocodetech@gmail.com",
      businessHours: "Monday - Friday: 9:00 AM - 6:00 PM",
    },
  },

  /**
   * Testimonials Section
   * Client reviews and feedback
   */
  testimonials: {
    title: "What Our Clients Say",
    subtitle: "Real feedback from satisfied customers",
    client1: {
      name: "Flor Lilia",
      position: "Innovation Director",
      quote:
        "DomoCodeTech completely transformed our technological infrastructure. Their expert team delivered innovative solutions that exceeded our expectations.",
    },
    client2: {
      name: "Juan Carlos",
      position: "Startup CEO",
      quote:
        "The implementation of robotic automation improved our efficiency by 200%. The ROI exceeded our initial projections.",
    },
    client3: {
      name: "Miguel Toro",
      position: "Smart Home Owner",
      quote:
        "The home automation solution installed by DomoCodeTech has revolutionized the way we interact with our home. Technology of the future, today.",
    },
    client4: {
      name: "David Torres",
      position: "AI Research Director",
      quote:
        "Their expertise in artificial intelligence implementation has given us a competitive edge in the market. Truly outstanding work!",
    },
    client5: {
      name: "Felipe Quintero",
      position: "Cloud Solutions Architect",
      quote:
        "The cloud migration project was seamless. Their team's technical knowledge and professional approach made all the difference.",
    },
    client6: {
      name: "Edward Pacheco",
      position: "Security Systems Manager",
      quote:
        "DomoCodeTech's cybersecurity solutions have significantly enhanced our system's protection. Their proactive approach is commendable.",
    },
  },

  /**
   * Call to Action Section
   * Prompts for user engagement
   */
  cta: {
    title: "Ready to Get Started?",
    subtitle: "Contact us today for a free consultation and quote.",
    button: "Contact Us Now",
  },

  /**
   * Common Text
   * Reusable text strings used throughout the application
   */
  common: {
    readMore: "Read More",
    showLess: "Show Less",
    contactUs: "Contact Us",
    loading: "Loading...",
    error: "Something went wrong",
    success: "Success!",
    required: "Required field",
    invalid: "Invalid input",
  },

  /**
   * Footer Section
   * Website footer content and links
   */
  footer: {
    description: "Innovative solutions for a smarter future",
    // Footer sections with links
    sections: {
      company: {
        title: "Company",
        about: "About Us",
        services: "Services",
        blog: "Blog",
        contact: "Contact",
      },
      services: {
        title: "Services",
        automation: "Home Automation",
        electronics: "Electronics",
        robotics: "Robotics",
        software: "Software",
      },
      support: {
        title: "Support",
        help: "Help Center",
        docs: "Documentation",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
      },
    },
    // Social media section
    social: {
      title: "Follow Us",
    },
    // Copyright notice with dynamic year and company name
    copyright: "© {{year}} {{company}}. All rights reserved.",
  },

  // Pricing Section
  pricing: {
    title: "Our Pricing",
    subtitle: "Choose the perfect plan for your needs",
    getStarted: "Get Started",
    plans: {
      starter: {
        title: "Starter",
        period: "basic project",
        description: "For small projects",
        features: [
          "Initial consultation",
          "Basic design",
          "Implementation",
          "3 months support",
          "Documentation",
        ],
      },
      professional: {
        title: "Professional",
        period: "complete project",
        description: "For medium projects",
        features: [
          "Advanced consulting",
          "Custom design",
          "Complete implementation",
          "6 months support",
          "Training included",
        ],
      },
      enterprise: {
        title: "Enterprise",
        price: "Custom",
        period: "project",
        description: "For large projects",
        features: [
          "Complete solution",
          "Custom design",
          "Full implementation",
          "24/7 support",
          "Continuous maintenance",
        ],
      },
    },
  },
  partners: {
    title: "Technology Partners",
    subtitle: "We work with the best technologies and brands in the market",
    description: "Our strategic partnerships allow us to deliver cutting-edge solutions and ensure maximum quality in every project."
  },
};
