/**
 * English translations for the TechnoCore website
 * This file contains all text content in English for the entire application
 */
export const enTranslations = {
  /**
   * Company Information
   * Basic details about the company used across the site
   */
  company: {
    slogan: 'Technological Innovation for the Future',
    address: '123 Technology Street, Madrid, Spain',
    workingHours: 'Mon - Fri: 9:00 AM - 6:00 PM',
  },

  /**
   * Navigation Menu
   * Main navigation links used in the header/navbar
   */
  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    blog: 'Blog',
    contact: 'Contact'
  },

  /**
   * Theme Switcher
   * Text for the light/dark mode toggle button
   */
  theme: {
    switchToLight: 'Switch to light mode',
    switchToDark: 'Switch to dark mode'
  },

  /**
   * Hero Section
   * Main banner section on the homepage
   */
  hero: {
    slogan: 'Your Trusted Technology Partner',
    subtitle: 'Innovative solutions for the digital age',
    getQuote: 'Get Free Quote',
    imageAlt: 'Team working on technology'
  },

  /**
   * Services Section
   * Detailed information about our main service offerings
   */
  services: {
    title: 'Our Services',
    subtitle: 'Professional technology solutions for your business',
    
    // Home Automation Service
    domotics: {
      title: 'Smart Home Automation',
      shortDescription: 'Smart automation and control for your home',
      fullDescription: 'We transform conventional spaces into smart homes with cutting-edge technology. Voice control, automation, and energy efficiency.',
      features: [
        'Voice and mobile app control',
        'Smart lighting',
        'Climate automation',
        'Security and video surveillance',
        'Efficient energy management'
      ]
    },

    // Electronics Service
    electronics: {
      title: 'Advanced Electronics',
      shortDescription: 'Custom electronic solutions',
      fullDescription: 'Design and development of custom electronic systems for industrial and personal projects.',
      features: [
        'PCB design',
        'Rapid prototyping',
        'Embedded systems',
        'IoT and connectivity',
        'Sensors and actuators'
      ]
    },

    // Robotics Service
    robotics: {
      title: 'Robotics & AI',
      shortDescription: 'Intelligent automation and advanced robotics',
      fullDescription: 'Development of robotic solutions with artificial intelligence for process automation and optimization.',
      features: [
        'Industrial robots',
        'Collaborative cobots',
        'Computer vision systems',
        'Machine Learning',
        'Process automation'
      ]
    },

    // Software Development Service
    software: {
      title: 'Software Development',
      shortDescription: 'Custom software and web applications',
      fullDescription: 'Creation of modern web applications, business software, and mobile solutions tailored to your needs.',
      features: [
        'Web applications',
        'Mobile apps',
        'Business software',
        'APIs and microservices',
        'Databases'
      ]
    }
  },

  /**
   * Projects Section
   * Information about our project offerings
   */
  projects: {
    title: 'Our Projects',
    subtitle: 'Explore our portfolio showcasing robust project solutions.',
    web: {
      title: 'Web Application',
      description: 'A modern web platform with a responsive design for seamless user experience.',
      features: [
        'Responsive design',
        'Cross-browser compatibility',
        'Modern UI/UX design'
      ]
    },
    mobile: {
      title: 'Mobile Application',
      description: 'Optimized mobile solutions for iOS and Android platforms.',
      features: [
        'User-friendly interface',
        'High performance',
        'Seamless integration with APIs'
      ]
    },
    software: {
      title: 'Software Development',
      description: 'Custom software solutions built with cutting-edge technology.',
      features: [
        'Custom software design',
        'Robust architecture',
        'Cross-platform functionality'
      ]
    },
    featuresTitle: 'Features'
  },

  /**
   * Team Section
   * Information about key team members
   */
  team: {
    title: 'Meet Our Expert Team',
    subtitle: 'Technology experts ready to innovate',
    // Individual team member details
    member1: {
      name: 'Charles Rodriguez',
      position: 'Software Architect',
      description: '15+ years of experience in software development and system architecture.'
    },
    member2: {
      name: 'Anna Martinez',
      position: 'Robotics Engineer',
      description: 'Specialized in AI and robotics automation systems.'
    },
    member3: {
      name: 'David Kim',
      position: 'IoT Specialist',
      description: 'Expert in IoT solutions and smart home automation.'
    }
  },

  /**
   * About Section
   * Company information, mission, vision, and values
   */
  about: {
    title: 'About Us',
    subtitle: 'Building the future with technology',
    // Key statistics
    stats: [
      { number: '10+', label: 'Years Experience' },
      { number: '500+', label: 'Projects Completed' },
      { number: '100+', label: 'Happy Clients' },
      { number: '50+', label: 'Team Members' }
    ],
    // Mission statement
    mission: {
      title: 'Our Mission',
      description: 'To provide innovative and sustainable technological solutions that transform lives and businesses.',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg'
    },
    // Vision statement
    vision: {
      title: 'Our Vision',
      description: 'To be the leading technology partner in creating a smarter, more connected world.',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg'
    },
    // Company values
    values: {
      title: 'Our Values',
      items: [
        {
          icon: 'innovation',
          title: 'Innovation',
          description: 'Constantly pushing boundaries and exploring new possibilities'
        },
        {
          icon: 'quality',
          title: 'Quality',
          description: 'Delivering excellence in every project and service'
        },
        {
          icon: 'integrity',
          title: 'Integrity',
          description: 'Operating with transparency and ethical standards'
        }
      ]
    }
  },

  /**
   * Blog Section
   * News, articles, and insights
   */
  blog: {
    title: 'Latest News & Insights',
    subtitle: 'Stay updated with our latest technological developments',
    readMore: 'Read More',
    // Blog categories
    categories: {
      all: 'All',
      technology: 'Technology',
      innovation: 'Innovation',
      automation: 'Automation',
      ai: 'Artificial Intelligence'
    },
    // Featured blog posts
    featuredPosts: [
      {
        id: 1,
        title: 'The Future of AI in Business',
        excerpt: 'Exploring how artificial intelligence is transforming modern business operations...',
        image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
        category: 'AI',
        date: '2024-03-15'
      },
      {
        id: 2,
        title: 'Cloud Computing Trends 2024',
        excerpt: 'Latest trends and innovations in cloud computing that are shaping the industry...',
        image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg',
        category: 'Technology',
        date: '2024-03-10'
      },
      {
        id: 3,
        title: 'Cybersecurity Best Practices',
        excerpt: 'Essential cybersecurity measures every business should implement...',
        image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg',
        category: 'Security',
        date: '2024-03-05'
      }
    ]
  },

  /**
   * Contact Section
   * Contact form and company contact information
   */
  contact: {
    title: 'Get in Touch',
    subtitle: 'We\'d love to hear from you',
    // Contact form labels
    form: {
      name: 'Your Name',
      email: 'Your Email',
      phone: 'Phone Number',
      subject: 'Subject',
      message: 'Your Message',
      submit: 'Send Message'
    },
    // Contact information
    info: {
      title: 'Contact Information',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      hours: 'Business Hours',
      location: '123 Tech Street, Silicon Valley, CA',
      phoneNumber: '+1 (555) 123-4567',
      emailAddress: 'info@technocore.com',
      businessHours: 'Monday - Friday: 9:00 AM - 6:00 PM'
    }
  },

  /**
   * Testimonials Section
   * Client reviews and feedback
   */
  testimonials: {
    title: 'What Our Clients Say',
    subtitle: 'Real feedback from satisfied customers',
    // Individual client testimonials
    client1: {
      name: 'Charles Rodriguez',
      position: 'Innovation Director',
      quote: 'TechnoCore completely transformed our technological infrastructure. Their expert team delivered innovative solutions that exceeded our expectations.'
    },
    client2: {
      name: 'Anna Martinez',
      position: 'Startup CEO',
      quote: 'The implementation of robotic automation improved our efficiency by 200%. The ROI exceeded our initial projections.'
    },
    client3: {
      name: 'Michael Sanchez',
      position: 'Smart Home Owner',
      quote: 'The home automation solution installed by TechnoCore has revolutionized the way we interact with our home. Technology of the future, today.'
    }
  },

  /**
   * Call to Action Section
   * Prompts for user engagement
   */
  cta: {
    title: 'Ready to Get Started?',
    subtitle: 'Contact us today for a free consultation and quote.',
    button: 'Contact Us Now'
  },

  /**
   * Common Text
   * Reusable text strings used throughout the application
   */
  common: {
    readMore: 'Read More',
    contactUs: 'Contact Us',
    loading: 'Loading...',
    error: 'Something went wrong',
    success: 'Success!',
    required: 'Required field',
    invalid: 'Invalid input'
  },

  /**
   * Footer Section
   * Website footer content and links
   */
  footer: {
    description: 'Innovative solutions for a smarter future',
    // Footer sections with links
    sections: {
      company: {
        title: 'Company',
        about: 'About Us',
        services: 'Services',
        blog: 'Blog',
        contact: 'Contact'
      },
      services: {
        title: 'Services',
        automation: 'Home Automation',
        electronics: 'Electronics',
        robotics: 'Robotics',
        software: 'Software'
      },
      support: {
        title: 'Support',
        help: 'Help Center',
        docs: 'Documentation',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service'
      }
    },
    // Social media section
    social: {
      title: 'Follow Us'
    },
    // Copyright notice with dynamic year and company name
    copyright: '© {{year}} {{company}}. All rights reserved.'
  },

  // Pricing Section
  pricing: {
    title: 'Our Pricing',
    subtitle: 'Choose the perfect plan for your needs',
    getStarted: 'Get Started',
    plans: {
      starter: {
        title: 'Starter',
        period: 'basic project',
        description: 'For small projects',
        features: [
          'Initial consultation',
          'Basic design',
          'Implementation',
          '3 months support',
          'Documentation'
        ]
      },
      professional: {
        title: 'Professional',
        period: 'complete project',
        description: 'For medium projects',
        features: [
          'Advanced consulting',
          'Custom design',
          'Complete implementation',
          '6 months support',
          'Training included'
        ]
      },
      enterprise: {
        title: 'Enterprise',
        price: 'Custom',
        period: 'project',
        description: 'For large projects',
        features: [
          'Complete solution',
          'Custom design',
          'Full implementation',
          '24/7 support',
          'Continuous maintenance'
        ]
      }
    }
  }
}; 