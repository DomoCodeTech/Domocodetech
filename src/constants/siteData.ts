export const SITE_DATA = {
  company: {
    name: 'ElectroTech',
    slogan: 'Illuminating Your World with Excellence',
    phone: '+1 (555) 123-4567',
    email: 'info@electrotech.com',
    address: '123 Electric Avenue, City, Country',
    workingHours: 'Mon - Fri: 8:00 AM - 6:00 PM',
  },
  social: {
    facebook: 'https://facebook.com/electrotech',
    twitter: 'https://twitter.com/electrotech',
    instagram: 'https://instagram.com/electrotech',
    linkedin: 'https://linkedin.com/company/electrotech',
  },
  images: {
    logo: '/images/logo.svg',
    hero: {
      main: '/images/hero/hero-main.jpg',
      secondary: '/images/hero/hero-secondary.jpg',
    },
    services: {
      residential: '/images/services/residential.jpg',
      commercial: '/images/services/commercial.jpg',
      emergency: '/images/services/emergency.jpg',
      maintenance: '/images/services/maintenance.jpg',
      installation: '/images/services/installation.jpg',
      safety: '/images/services/safety.jpg',
    },
    team: {
      member1: '/images/team/member1.jpg',
      member2: '/images/team/member2.jpg',
      member3: '/images/team/member3.jpg',
    },
  },
  services: [
    {
      id: 'residential',
      title: 'Residential Services',
      shortDescription: 'Complete electrical solutions for your home',
      fullDescription: 'We provide comprehensive electrical services for homeowners, from basic repairs to complete home electrical system installations.',
      icon: 'HomeRepairService',
      features: [
        'Electrical repairs and maintenance',
        'Lighting installation and upgrades',
        'Circuit breaker installation',
        'Home safety inspections',
        'Outlet installation and repair'
      ]
    },
    {
      id: 'commercial',
      title: 'Commercial Services',
      shortDescription: 'Professional solutions for businesses',
      fullDescription: 'Our commercial electrical services are designed to keep your business running smoothly with reliable electrical systems.',
      icon: 'Business',
      features: [
        'Commercial electrical installations',
        'Energy efficiency solutions',
        'Emergency lighting systems',
        'Data and network cabling',
        'Regular maintenance contracts'
      ]
    },
    {
      id: 'emergency',
      title: 'Emergency Services',
      shortDescription: '24/7 emergency electrical support',
      fullDescription: 'We offer round-the-clock emergency electrical services to handle any urgent electrical issues that may arise.',
      icon: 'ElectricBolt',
      features: [
        'Available 24/7',
        'Rapid response time',
        'Emergency repairs',
        'Power outage solutions',
        'Safety inspections'
      ]
    }
  ],
  pricing: [
    {
      id: 'basic',
      title: 'Basic',
      price: 150,
      period: 'per service',
      description: 'For small electrical tasks',
      features: [
        'Basic electrical repairs',
        'Single room installation',
        'Safety inspection',
        'Phone support',
        '30-day warranty'
      ]
    },
    {
      id: 'premium',
      title: 'Premium',
      price: 300,
      period: 'per service',
      description: 'For comprehensive electrical work',
      features: [
        'Full house electrical service',
        'Multiple room installations',
        'Circuit upgrades',
        'Priority support',
        '90-day warranty'
      ]
    },
    {
      id: 'business',
      title: 'Business',
      price: 500,
      period: 'per month',
      description: 'For commercial properties',
      features: [
        'Commercial installations',
        'Regular maintenance',
        'Emergency support',
        '24/7 support',
        '1-year warranty'
      ]
    }
  ],
  testimonials: [
    {
      id: 1,
      name: 'John Smith',
      position: 'Homeowner',
      image: '/images/testimonials/john.jpg',
      quote: 'The team at ElectroTech did an amazing job with our home electrical renovation. Professional and efficient!',
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Business Owner',
      image: '/images/testimonials/sarah.jpg',
      quote: 'We rely on ElectroTech for all our commercial electrical needs. They are always responsive and reliable.',
      rating: 5
    },
    {
      id: 3,
      name: 'Mike Brown',
      position: 'Property Manager',
      image: '/images/testimonials/mike.jpg',
      quote: 'Their emergency service is outstanding. They responded quickly when we needed them most.',
      rating: 5
    }
  ]
}; 