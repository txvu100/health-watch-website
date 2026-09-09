export interface FAQ {
  q: string
  a: string
  source?: {
    label: string
    href: string
  }
}

export const HOMEPAGE_FAQS: FAQ[] = [
  {
    q: 'Does Health Watch Medical Clinic accept walk-in patients?',
    a: 'Walk-ins are welcome during regular business hours. Availability and wait times vary based on patient volume and medical needs. Saturday visits require an appointment.',
  },
  {
    q: 'Do you accept SoonerCare, Medicaid, and Medicare?',
    a: 'We participate with SoonerCare and Medicare and accept many commercial insurance plans. Participation may vary by product or network, so please call the clinic or contact your insurer to confirm coverage.',
  },
  {
    q: 'Do you offer telemedicine appointments?',
    a: 'Telemedicine availability depends on the patient’s location, medical condition, and whether an in-person examination is clinically necessary.',
  },
  {
    q: 'Do you have Spanish-speaking staff?',
    a: 'Yes — se habla español. Spanish-speaking staff are available to help patients communicate during their visit.',
  },
  {
    q: 'Do you perform immigration medical exams (Form I-693)?',
    a: 'Yes. Immigration medical examinations are performed by a USCIS-designated civil surgeon for adjustment-of-status applicants, including required evaluation and completion of Form I-693.',
  },
  {
    q: 'Are same-day appointments available?',
    a: 'Same-day appointments may be available for minor illnesses, follow-up care, physicals, immunizations, and other appropriate services. Please call to confirm availability.',
  },
]
