export const CLINIC = {
  name: 'Health Watch Medical Clinic',
  shortName: 'Health Watch',
  tagline: 'Your Health, Our Priority',
  taglineEs: 'Tu Salud, Nuestra Prioridad',

  phone: '(405) 949-1552',
  phoneE164: '+14059491552',
  phoneDisplay: '405-949-1552',
  email: 'clinic1924@healthwatchclinic.com',

  address: {
    street: '1924 N Portland Ave',
    city: 'Oklahoma City',
    state: 'OK',
    zip: '73107',
    country: 'US',
    full: '1924 N Portland Ave, Oklahoma City, OK 73107',
  },

  geo: {
    lat: 35.4823,
    lng: -97.5797,
  },

  // Google Maps embed URL for the clinic location
  mapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3256.5!2d-97.5797!3d35.4823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s1924+N+Portland+Ave%2C+Oklahoma+City%2C+OK+73107!5e0!3m2!1sen!2sus!4v1',
  mapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=1924+N+Portland+Ave,+Oklahoma+City,+OK+73107',

  hours: [
    { day: 'Monday', open: '9:00 AM', close: '5:00 PM', note: '' },
    { day: 'Tuesday', open: '9:00 AM', close: '5:00 PM', note: '' },
    { day: 'Wednesday', open: '9:00 AM', close: '5:00 PM', note: '' },
    { day: 'Thursday', open: '9:00 AM', close: '5:00 PM', note: '' },
    { day: 'Friday', open: '9:00 AM', close: '5:00 PM', note: '' },
    { day: 'Saturday', open: '', close: '', note: 'By Appointment Only' },
    { day: 'Sunday', open: '', close: '', note: 'Closed' },
  ],

  hoursSchema: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],

  social: {
    facebook: 'https://www.facebook.com/share/15vMoYSaSB/',
    instagram: 'https://www.instagram.com/healthwatchmedicalclinic_okc',
    pinterest: 'https://www.pinterest.com/healthwatchclinic/',
  },

  insurance: [
    'SoonerCare',
    'Medicaid',
    'Medicare',
    'Blue Cross Blue Shield',
    'United Healthcare',
    'Aetna',
    'Cigna',
    'Self-Pay / Cash',
  ],

  languages: ['English', 'Spanish'],

  patientPortalUrl: 'https://healow.com',

  siteUrl: 'https://healthwatchclinic.com',
} as const
