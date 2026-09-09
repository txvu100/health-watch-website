export const en = {
  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    insurance: 'Insurance',
    telemedicine: 'Telemedicine',
    contact: 'Contact',
    patientPortal: 'Patient Portal',
    bookAppointment: 'Request an Appointment',
    toggleMenu: 'Toggle navigation menu',
    closeMenu: 'Close menu',
    callUs: 'Call us',
  },
  utility: {
    otherLanguage: 'Se habla español',
    patientPortal: 'Patient Portal',
  },
  footer: {
    description: 'A locally owned, independent family medical clinic in Oklahoma City.',
    explore: 'Explore',
    services: 'Services',
    visitUs: 'Visit us',
    hours: 'Hours',
    privacy: 'Privacy Policy',
    noticeOfPrivacyPractices: 'Notice of Privacy Practices',
    terms: 'Website Terms',
    accessibility: 'Accessibility',
    nondiscrimination: 'Nondiscrimination',
    rights: 'All rights reserved.',
  },
  breadcrumb: {
    home: 'Home',
    services: 'Services',
    label: 'Breadcrumb',
  },
  services: {
    learnMore: 'Learn more',
    learnMoreAbout: (title: string) => `Learn more about ${title}`,
    related: 'Related Services',
    allServices: 'Medical Services',
  },
  faq: {
    heading: 'Frequently Asked Questions',
  },
  why: {
    heading: 'Why Choose Health Watch Medical Clinic?',
    points: [
      'Walk-ins welcome during regular business hours',
      'Same-day appointments may be available',
      'Spanish-speaking staff are available',
      'SoonerCare, Medicare, many commercial plans & self-pay',
      'Locally owned and independently operated in Oklahoma City',
    ],
  },
  hoursTable: {
    caption: 'Clinic hours of operation',
    closed: 'Closed',
    byAppointment: 'By Appointment Only',
  },
}

export type Translations = typeof en
