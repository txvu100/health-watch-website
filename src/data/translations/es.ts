import type { Translations } from './en'

export const es: Translations = {
  nav: {
    home: 'Inicio',
    about: 'Nosotros',
    services: 'Servicios',
    insurance: 'Seguros',
    telemedicine: 'Telemedicina',
    contact: 'Contacto',
    patientPortal: 'Portal del Paciente',
    bookAppointment: 'Agendar una cita',
    toggleMenu: 'Abrir menú de navegación',
    closeMenu: 'Cerrar menú',
    callUs: 'Llámenos',
  },
  utility: {
    otherLanguage: 'We speak English',
    patientPortal: 'Portal del Paciente',
  },
  footer: {
    description: 'Clínica médica familiar independiente y de propiedad local en Oklahoma City.',
    explore: 'Explorar',
    services: 'Servicios',
    visitUs: 'Visítenos',
    hours: 'Horario',
    privacy: 'Política de Privacidad',
    rights: 'Todos los derechos reservados.',
  },
  breadcrumb: {
    home: 'Inicio',
    services: 'Servicios',
    label: 'Ruta de navegación',
  },
  services: {
    learnMore: 'Más información',
    learnMoreAbout: (title: string) => `Más información sobre ${title}`,
    related: 'Servicios Relacionados',
    allServices: 'Servicios Médicos',
  },
  faq: {
    heading: 'Preguntas Frecuentes',
  },
  why: {
    heading: '¿Por Qué Elegir Health Watch?',
    points: [
      'Atendemos sin cita previa — la mayoría de las visitas no requieren cita',
      'Con frecuencia hay citas disponibles el mismo día',
      'Personal bilingüe — se habla español',
      'Aceptamos SoonerCare, Medicaid, Medicare y seguros privados',
      'Clínica independiente de propiedad local en Oklahoma City',
    ],
  },
  hoursTable: {
    caption: 'Horario de atención de la clínica',
    closed: 'Cerrado',
    byAppointment: 'Solo con Cita Previa',
  },
}
