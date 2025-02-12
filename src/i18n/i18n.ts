import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          // Navigation
          nav: {
            home: 'Home',
            about: 'About',
            services: 'Services',
            blog: 'Blog',
            contact: 'Contact'
          },
          // Theme
          theme: {
            switchToLight: 'Switch to light mode',
            switchToDark: 'Switch to dark mode'
          },
          // Hero Section
          hero: {
            slogan: 'Your Trusted Electrical Partner',
            subtitle: 'Your trusted partner for all electrical needs. Available 24/7.',
            getQuote: 'Get Free Quote',
            imageAlt: 'Electrician at work'
          },
          // Services Section
          services: {
            title: 'Our Services',
            subtitle: 'Professional solutions for all your electrical needs',
            residential: {
              title: 'Residential Services',
              description: 'Complete electrical solutions for your home'
            },
            commercial: {
              title: 'Commercial Services',
              description: 'Professional electrical services for businesses'
            },
            emergency: {
              title: 'Emergency Services',
              description: '24/7 emergency electrical support'
            }
          },
          // Team Section
          team: {
            title: 'Meet Our Expert Team',
            subtitle: 'Technology experts ready to innovate',
            member1: {
              position: 'Software Architect',
              description: '15+ years of experience in software development and system architecture.'
            },
            member2: {
              position: 'Robotics Engineer',
              description: 'Specialized in AI and robotics automation systems.'
            },
            member3: {
              position: 'IoT Specialist',
              description: 'Expert in IoT solutions and smart home automation.'
            }
          },
          // Call to Action
          cta: {
            title: 'Ready to Get Started?',
            subtitle: 'Contact us today for a free consultation and quote.',
            button: 'Contact Us Now'
          },
          // Common
          common: {
            readMore: 'Read More',
            contactUs: 'Contact Us'
          }
        }
      },
      es: {
        translation: {
          // Navigation
          nav: {
            home: 'Inicio',
            about: 'Nosotros',
            services: 'Servicios',
            blog: 'Blog',
            contact: 'Contacto'
          },
          // Theme
          theme: {
            switchToLight: 'Cambiar a modo claro',
            switchToDark: 'Cambiar a modo oscuro'
          },
          // Hero Section
          hero: {
            slogan: 'Tu Socio Eléctrico de Confianza',
            subtitle: 'Tu socio de confianza para todas las necesidades eléctricas. Disponible 24/7.',
            getQuote: 'Obtener Presupuesto Gratis',
            imageAlt: 'Electricista trabajando'
          },
          // Services Section
          services: {
            title: 'Nuestros Servicios',
            subtitle: 'Soluciones profesionales para todas tus necesidades eléctricas',
            residential: {
              title: 'Servicios Residenciales',
              description: 'Soluciones eléctricas completas para tu hogar'
            },
            commercial: {
              title: 'Servicios Comerciales',
              description: 'Servicios eléctricos profesionales para empresas'
            },
            emergency: {
              title: 'Servicios de Emergencia',
              description: 'Soporte eléctrico de emergencia 24/7'
            }
          },
          // Team Section
          team: {
            title: 'Conoce a Nuestro Equipo',
            subtitle: 'Expertos en tecnología listos para innovar',
            member1: {
              position: 'Arquitecto de Software',
              description: '15+ años de experiencia en desarrollo de software y arquitectura de sistemas.'
            },
            member2: {
              position: 'Ingeniera en Robótica',
              description: 'Especializada en IA y sistemas de automatización robótica.'
            },
            member3: {
              position: 'Especialista en IoT',
              description: 'Experto en soluciones IoT y automatización de hogares inteligentes.'
            }
          },
          // Call to Action
          cta: {
            title: '¿Listo para Empezar?',
            subtitle: 'Contáctanos hoy para una consulta y presupuesto gratis.',
            button: 'Contáctanos Ahora'
          },
          // Common
          common: {
            readMore: 'Leer Más',
            contactUs: 'Contáctanos'
          }
        }
      }
    }
  });

export default i18n; 