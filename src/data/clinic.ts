export interface ClinicHours {
  day: string
  dayEs: string
  /** Schema.org day name; used to derive openingHoursSpecification */
  schemaDay: string
  open: string
  close: string
  /** 24h values driving JSON-LD. Empty when the clinic is not openly staffed. */
  opens24: string
  closes24: string
  note: string
  noteEs: string
}

const HOURS: ClinicHours[] = [
  { day: 'Monday', dayEs: 'Lunes', schemaDay: 'Monday', open: '9:00 AM', close: '5:00 PM', opens24: '09:00', closes24: '17:00', note: '', noteEs: '' },
  { day: 'Tuesday', dayEs: 'Martes', schemaDay: 'Tuesday', open: '9:00 AM', close: '5:00 PM', opens24: '09:00', closes24: '17:00', note: '', noteEs: '' },
  { day: 'Wednesday', dayEs: 'Miércoles', schemaDay: 'Wednesday', open: '9:00 AM', close: '5:00 PM', opens24: '09:00', closes24: '17:00', note: '', noteEs: '' },
  { day: 'Thursday', dayEs: 'Jueves', schemaDay: 'Thursday', open: '9:00 AM', close: '5:00 PM', opens24: '09:00', closes24: '17:00', note: '', noteEs: '' },
  { day: 'Friday', dayEs: 'Viernes', schemaDay: 'Friday', open: '9:00 AM', close: '5:00 PM', opens24: '09:00', closes24: '17:00', note: '', noteEs: '' },
  { day: 'Saturday', dayEs: 'Sábado', schemaDay: 'Saturday', open: '', close: '', opens24: '', closes24: '', note: 'By Appointment Only', noteEs: 'Solo con Cita Previa' },
  { day: 'Sunday', dayEs: 'Domingo', schemaDay: 'Sunday', open: '', close: '', opens24: '', closes24: '', note: 'Closed', noteEs: 'Cerrado' },
]

// Derived from HOURS so the JSON-LD can never drift from the visible hours table.
// Days without a staffed window (Saturday by-appointment, Sunday closed) are omitted:
// schema.org has no way to express "by appointment", and publishing a window the
// clinic isn't reliably open for invites "customer says closed" corrections in Maps.
const HOURS_SCHEMA = HOURS.filter((h) => h.opens24 && h.closes24).map((h) => ({
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: `https://schema.org/${h.schemaDay}`,
  opens: h.opens24,
  closes: h.closes24,
}))

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

  // Single source for both map embeds. Coordinates must stay in sync with `geo`
  // above, which is what feeds GeoCoordinates JSON-LD and the geo.position meta.
  mapsEmbedUrl:
    'https://www.google.com/maps?q=1924+N+Portland+Ave,+Oklahoma+City,+OK+73107&output=embed',
  mapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=1924+N+Portland+Ave,+Oklahoma+City,+OK+73107',

  hours: HOURS,
  hoursSchema: HOURS_SCHEMA,

  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61589071013542',
    // Canonicalised: the supplied URL carried fbclid/app_id tracking params
    // from a share action, not a stable link — those expire and add nothing.
    instagram: 'https://www.instagram.com/healthwatchclinic/',
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

  patientPortalUrl: 'https://mycw28.eclinicalweb.com/portal2846/jsp/100mp/login_otp.jsp',

  siteUrl: 'https://healthwatchclinic.com',
}

export type Clinic = typeof CLINIC
