import { access, readdir, readFile } from 'node:fs/promises'
import path from 'node:path'

const outputDir = path.resolve('dist')

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  return (await Promise.all(entries.map(async (entry) => {
    const fullPath = path.join(directory, entry.name)
    if (entry.isDirectory()) return htmlFiles(fullPath)
    return entry.isFile() && entry.name.endsWith('.html') ? [fullPath] : []
  }))).flat()
}

function requireText(html, expected, file) {
  if (!html.includes(expected)) throw new Error(`Expected ${JSON.stringify(expected)} in ${path.relative(outputDir, file)}`)
}

function rejectText(html, unexpected, file) {
  if (typeof unexpected === 'string' ? html.includes(unexpected) : unexpected.test(html)) {
    throw new Error(`Found prohibited text ${unexpected} in ${path.relative(outputDir, file)}`)
  }
}

function textContent(markup) {
  return markup.replace(/<[^>]+>/g, ' ').replace(/&(?:amp|nbsp|#39);/g, ' ').replace(/\s+/g, ' ').trim()
}

function requireLinkDestination(html, label, expectedHref, file) {
  const links = [...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)]
    .map((match) => ({ attrs: match[1], text: textContent(match[2]) }))
    .filter((link) => link.text === label)
  if (links.length === 0) throw new Error(`Missing ${JSON.stringify(label)} link in ${path.relative(outputDir, file)}`)
  if (links.some((link) => !link.attrs.includes(`href="${expectedHref}"`))) {
    throw new Error(`${JSON.stringify(label)} has the wrong destination in ${path.relative(outputDir, file)}`)
  }
}

async function requireInternalLinks(html, file) {
  const hrefs = [...html.matchAll(/\shref="([^"]+)"/g)].map((match) => match[1])
  for (const href of hrefs) {
    if (href.startsWith('tel:') && href !== 'tel:+14059491552') {
      throw new Error(`Unexpected telephone link ${JSON.stringify(href)} in ${path.relative(outputDir, file)}`)
    }
    if (!href.startsWith('/') || href.startsWith('//') || href.startsWith('/_astro/') || href.includes('#')) continue
    const clean = href.split('?')[0]
    const target = clean === '/404/'
      ? path.join(outputDir, '404.html')
      : clean.endsWith('/') ? path.join(outputDir, clean, 'index.html') : path.join(outputDir, clean)
    try {
      await access(target)
    } catch {
      throw new Error(`Broken internal link ${JSON.stringify(href)} in ${path.relative(outputDir, file)}`)
    }
  }
}

function requireAccessibleIconsAndRequestCtas(html, file) {
  const relative = path.relative(outputDir, file)
  for (const svg of html.match(/<svg\b[\s\S]*?<\/svg>/g) || []) {
    const openingTag = svg.match(/^<svg\b[^>]*>/)?.[0] || ''
    if (/aria-hidden="true"/.test(openingTag) && !/focusable="false"/.test(openingTag)) {
      throw new Error(`Decorative SVG lacks focusable=\"false\" in ${relative}`)
    }
  }

  for (const link of html.match(/<a\b[^>]*>[\s\S]*?<\/a>/g) || []) {
    if (!/<svg\b/.test(link)) continue
    const openingTag = link.match(/^<a\b[^>]*>/)?.[0] || ''
    if (!/aria-label="[^"]+"/.test(openingTag) && !textContent(link)) {
      throw new Error(`Icon-only link lacks an accessible name in ${relative}`)
    }
  }

  const requestLinks = [...html.match(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)]
    .map((match) => ({ attrs: match[1], text: textContent(match[2]) }))
    .filter((link) => /^(Request an Appointment|Solicitar una cita)$/i.test(link.text))
  const expectedHref = relative.startsWith('es/') ? '/es/contacto/' : '/contact/'
  const notice = relative.startsWith('es/')
    ? 'Enviar una solicitud no confirma su cita.'
    : 'Submitting this request does not confirm your appointment.'
  for (const link of requestLinks) {
    if (!link.attrs.includes(`href="${expectedHref}"`)) {
      throw new Error(`Request CTA has the wrong destination in ${relative}`)
    }
    requireText(html, notice, file)
  }
}

const requiredPages = [
  'terms/index.html', 'accessibility/index.html', 'nondiscrimination/index.html',
  'notice-of-privacy-practices/index.html', 'es/terminos/index.html',
  'es/accesibilidad/index.html', 'es/no-discriminacion/index.html',
  'es/aviso-de-practicas-de-privacidad/index.html',
]
const staleClaims = [
  /Book an appointment/i, /Book online in minutes/i, /USCIS-certified/i,
  /Form I-693 completed quickly/i, /Walk-ins Always Welcome/i,
  /minimal wait times/i, /Blue Cross Blue Shield/i, /United Healthcare/i, /Aetna/i, /Cigna/i,
]

const allFiles = await htmlFiles(outputDir)
if (allFiles.length !== 44) throw new Error(`Expected 44 rendered pages, found ${allFiles.length}`)
const relativeFiles = new Set(allFiles.map((file) => path.relative(outputDir, file)))
for (const page of requiredPages) if (!relativeFiles.has(page)) throw new Error(`Missing expected page: ${page}`)

for (const file of allFiles) {
  const html = await readFile(file, 'utf8')
  const visibleMarkup = html.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, '')
  if (/>\s*svg\s*</i.test(visibleMarkup)) throw new Error(`Found visible literal "svg" text in ${path.relative(outputDir, file)}`)
  if (/<text\b/i.test(visibleMarkup)) throw new Error(`Found SVG text in rendered HTML for ${path.relative(outputDir, file)}`)
  for (const claim of staleClaims) if (claim.test(visibleMarkup)) throw new Error(`Found stale claim ${claim} in ${path.relative(outputDir, file)}`)
  if (!html.includes("svg[aria-hidden=\"true\"]")) throw new Error(`Missing decorative SVG focus normalization in ${path.relative(outputDir, file)}`)
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    let schema
    try {
      schema = JSON.parse(match[1])
    } catch {
      throw new Error(`Invalid JSON-LD in ${path.relative(outputDir, file)}`)
    }
    if (!schema['@context'] || !schema['@type']) {
      throw new Error(`Incomplete JSON-LD in ${path.relative(outputDir, file)}`)
    }
  }
  await requireInternalLinks(html, file)
  requireAccessibleIconsAndRequestCtas(html, file)
}

const sitemap = await readFile(path.join(outputDir, 'sitemap-0.xml'), 'utf8')
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1])
if (sitemapUrls.length !== 40) throw new Error(`Expected 40 sitemap URLs, found ${sitemapUrls.length}`)
for (const url of sitemapUrls) {
  const pathname = new URL(url).pathname
  const target = pathname === '/'
    ? path.join(outputDir, 'index.html')
    : path.join(outputDir, pathname, 'index.html')
  try {
    await access(target)
  } catch {
    throw new Error(`Sitemap URL has no rendered page: ${url}`)
  }
}

const home = await readFile(path.join(outputDir, 'index.html'), 'utf8')
const spanishHome = await readFile(path.join(outputDir, 'es/index.html'), 'utf8')
for (const page of ['services/telemedicine/index.html', 'es/servicios/telemedicina/index.html']) {
  const file = path.join(outputDir, page)
  const html = await readFile(file, 'utf8')
  rejectText(html, /(?:Telemedicine in Oklahoma City in Oklahoma City|Telemedicina en Oklahoma City en Oklahoma City)/i, file)
}
requireLinkDestination(home, 'Patient Portal – Sign In', 'https://mycw28.eclinicalweb.com/portal2846/jsp/100mp/login_otp.jsp', path.join(outputDir, 'index.html'))
requireLinkDestination(spanishHome, 'Portal del Paciente – Iniciar sesión', 'https://mycw28.eclinicalweb.com/portal2846/jsp/100mp/login_otp.jsp', path.join(outputDir, 'es/index.html'))
for (const [html, expected] of [
  [home, ['Request an Appointment', 'href="/contact/"', 'Submitting this request does not confirm your appointment.']],
  [spanishHome, ['Solicitar una cita', 'href="/es/contacto/"', 'Enviar una solicitud no confirma su cita.']],
]) for (const text of expected) requireText(html, text, html === home ? path.join(outputDir, 'index.html') : path.join(outputDir, 'es/index.html'))

for (const page of ['insurance/index.html', 'es/seguros/index.html']) {
  const html = await readFile(path.join(outputDir, page), 'utf8')
  requireText(html, 'tel:+14059491552', path.join(outputDir, page))
  requireText(html, page.startsWith('es/') ? 'La cobertura y la responsabilidad del paciente varían según el plan.' : 'Coverage and patient responsibility vary by plan.', path.join(outputDir, page))
}

const diabetesPages = [
  {
    page: 'services/diabetes-management/index.html',
    required: [
      'Type 2 diabetes management',
      'Kidney-function and urine protein testing',
      'Diabetic foot examinations',
      'Referrals for diabetic eye examinations',
      'Diabetes follow-up visits are typically scheduled and may include laboratory work.',
      'A1C goal of approximately 7% or lower may be recommended.',
      'healthcare provider',
      'href="https://diabetes.org/about-diabetes/a1c"',
      'Submitting this request does not confirm your appointment.',
    ],
    prohibited: [
      /Type 1/i,
      /gold standard/i,
      /An A1C below 7% is generally the target/i,
      /How often should I see a doctor if I have diabetes\?/i,
      /Walk-ins are welcome during regular business hours/i,
      /nearly 12%/i,
    ],
  },
  {
    page: 'es/servicios/manejo-diabetes/index.html',
    required: [
      'Manejo de la diabetes tipo 2',
      'Pruebas de función renal y proteína en la orina',
      'Exámenes de los pies relacionados con la diabetes',
      'Referencias para exámenes de la vista relacionados con la diabetes',
      'Las citas de seguimiento para la diabetes generalmente se programan y pueden incluir análisis de laboratorio.',
      'meta de A1C de aproximadamente 7% o menos',
      'proveedor de atención médica',
      'href="https://diabetes.org/about-diabetes/a1c"',
      'Enviar una solicitud no confirma su cita.',
    ],
    prohibited: [
      /tipo 1/i,
      /referencia principal/i,
      /la meta es mantenerla por debajo del 7%/i,
      /¿Cada cuánto debo ver al médico si tengo diabetes\?/i,
      /no necesita cita/i,
      /casi el 12%/i,
    ],
  },
]

for (const { page, required, prohibited } of diabetesPages) {
  const file = path.join(outputDir, page)
  const html = await readFile(file, 'utf8')
  for (const expected of required) requireText(html, expected, file)
  for (const unexpected of prohibited) rejectText(html, unexpected, file)

  const faqSchema = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .map((match) => JSON.parse(match[1]))
    .find((schema) => schema['@type'] === 'FAQPage')
  if (!faqSchema) throw new Error(`Missing FAQPage JSON-LD in ${page}`)
  const faqJson = JSON.stringify(faqSchema)
  for (const unexpected of prohibited) rejectText(faqJson, unexpected, file)

  if (page.startsWith('es/')) {
    requireLinkDestination(html, 'Programe este servicio', '/es/contacto/', file)
  } else {
    requireLinkDestination(html, 'Book this service', '/contact/', file)
  }
}

const childHealthPages = [
  {
    page: 'services/child-health-exams-immunizations/index.html',
    required: [
      'Preventive checkups, developmental screenings, school and sports physicals, and age-appropriate immunizations',
      'Depending on your child’s age and individual needs',
      'Please call before your visit to confirm vaccine availability and any records you should bring.',
      'Why Choose Health Watch?',
      'Walk-in availability for selected services',
      'Bilingual staff — se habla español',
      'Do you provide school and sports physicals?',
      'Oklahoma’s immunization requirements depend on the child’s age and grade.',
      'DTaP or Tdap, polio, MMR, hepatitis A, hepatitis B, and varicella.',
    ],
    prohibited: [
      /meningococ/i,
      /head-to-toe physical exam/i,
      /blood pressure screening, vision and hearing checks/i,
      /Walk-ins welcome during regular business hours/i,
      /all recommended childhood immunizations/i,
    ],
    sources: [
      ['AAP Preventive Care Schedule', 'https://www.aap.org/periodicityschedule'],
      ['Oklahoma State Department of Health', 'https://oklahoma.gov/health/immunizations.html'],
    ],
  },
  {
    page: 'es/servicios/examenes-infantiles-inmunizaciones/index.html',
    required: [
      'Revisiones preventivas, evaluaciones del desarrollo, exámenes físicos escolares y deportivos e inmunizaciones apropiadas para la edad',
      'Según la edad y las necesidades individuales de su hijo',
      'Llame antes de su visita para confirmar la disponibilidad de vacunas y los registros que debe traer.',
      '¿Por Qué Elegir Health Watch?',
      'Disponibilidad sin cita para servicios seleccionados',
      'Personal bilingüe — se habla español',
      '¿Hacen exámenes físicos para deportes escolares?',
      'Los requisitos de inmunización de Oklahoma dependen de la edad y el grado del niño.',
      'DTaP o Tdap, polio, MMR, hepatitis A, hepatitis B y varicela.',
    ],
    prohibited: [
      /meningococ/i,
      /examen físico de cabeza a pies/i,
      /revisión de presión arterial, pruebas de visión y audición/i,
      /se aceptan visitas sin cita para muchos servicios/i,
      /todas las inmunizaciones infantiles recomendadas/i,
    ],
    sources: [
      ['Calendario de atención preventiva de la AAP', 'https://www.aap.org/periodicityschedule'],
      ['Departamento de Salud del Estado de Oklahoma', 'https://oklahoma.gov/health/immunizations.html'],
    ],
  },
]

for (const { page, required, prohibited, sources } of childHealthPages) {
  const file = path.join(outputDir, page)
  const html = await readFile(file, 'utf8')
  for (const expected of required) requireText(html, expected, file)
  for (const unexpected of prohibited) rejectText(html, unexpected, file)
  for (const [label, href] of sources) requireLinkDestination(html, label, href, file)
}

const adultVaccinePages = [
  {
    page: 'services/vaccines-immunizations/index.html',
    required: [
      'Adult Vaccines & Immunizations',
      'Stay protected with routine, seasonal, and age-appropriate adult immunizations personalized to your health needs.',
      'Routine and seasonal vaccinations',
      'Catch-up immunizations',
      'Personalized vaccine-record review',
      'Vaccine availability and insurance coverage vary. Please call before visiting to confirm availability and coverage.',
      'Can you review my vaccine record?',
    ],
    prohibited: [
      /Adult and childhood immunization services/i,
      /seasonal, travel, or school-related needs/i,
      /What vaccines are required for Oklahoma schools\?/i,
    ],
  },
  {
    page: 'es/servicios/vacunas-inmunizaciones/index.html',
    required: [
      'Vacunas e Inmunizaciones para Adultos',
      'Manténgase protegido con inmunizaciones para adultos rutinarias, estacionales y apropiadas para la edad, personalizadas según sus necesidades de salud.',
      'Vacunas rutinarias y estacionales',
      'Inmunizaciones de recuperación',
      'Revisión personalizada del registro de vacunación',
      'La disponibilidad de vacunas y la cobertura de seguro varían. Llame antes de su visita para confirmar la disponibilidad y la cobertura.',
      '¿Pueden revisar mi registro de vacunación?',
    ],
    prohibited: [
      /Servicios de inmunización para adultos y niños/i,
      /necesidades estacionales, de viaje o escolares/i,
      /¿Qué vacunas exigen las escuelas de Oklahoma\?/i,
    ],
  },
]

for (const { page, required, prohibited } of adultVaccinePages) {
  const file = path.join(outputDir, page)
  const html = await readFile(file, 'utf8')
  for (const expected of required) requireText(html, expected, file)
  for (const unexpected of prohibited) rejectText(html, unexpected, file)
}

const annualPhysicalPages = [
  {
    page: 'services/annual-sports-physicals/index.html',
    required: [
      'Preventive health exams and pre-participation sports physicals for adults, children, and student-athletes.',
      'Comprehensive preventive health exams',
      'Pre-participation sports physicals',
      'Same-day and walk-in availability',
      'Same-day and walk-in visits are frequently available.',
      'What does an annual preventive exam include?',
      'Is an annual physical the same as a Medicare Annual Wellness Visit?',
      'What should I bring to a sports physical?',
    ],
    prohibited: [
      /An annual physical is the foundation of preventive healthcare/i,
      /cardiovascular fitness, musculoskeletal health/i,
      /Do you perform DOT\/CDL physicals\?/i,
    ],
    source: ['OSSAA Pre-Participation Physical Evaluation Form', 'https://ossaaillustrated.com/2026/04/13/pre-participation-physical-evaluation-form-and-parental-consent/'],
  },
  {
    page: 'es/servicios/examenes-fisicos-deportivos/index.html',
    required: [
      'Exámenes preventivos de salud y exámenes físicos deportivos previos a la participación para adultos, niños y estudiantes-atletas.',
      'Exámenes preventivos de salud integrales',
      'Exámenes físicos deportivos previos a la participación',
      'Disponibilidad el mismo día y sin cita',
      'Las citas el mismo día y las visitas sin cita están disponibles con frecuencia.',
      '¿Qué incluye un examen preventivo anual?',
      '¿Es un examen físico anual lo mismo que una Visita Anual de Bienestar de Medicare?',
      '¿Qué debo llevar a un examen físico deportivo?',
    ],
    prohibited: [
      /El examen físico anual es la base del cuidado preventivo/i,
      /la condición cardiovascular, la salud musculoesquelética/i,
      /¿Hacen exámenes físicos DOT\/CDL para licencia comercial\?/i,
    ],
    source: ['Formulario de evaluación física previa a la participación de OSSAA', 'https://ossaaillustrated.com/2026/04/13/pre-participation-physical-evaluation-form-and-parental-consent/'],
  },
]

for (const { page, required, prohibited, source } of annualPhysicalPages) {
  const file = path.join(outputDir, page)
  const html = await readFile(file, 'utf8')
  for (const expected of required) requireText(html, expected, file)
  for (const unexpected of prohibited) rejectText(html, unexpected, file)
  requireLinkDestination(html, source[0], source[1], file)
}

const immigrationPages = [
  {
    page: 'services/immigration-medical-exam/index.html',
    required: [
      'Immigration Medical Exam (Form I-693)',
      'USCIS-designated civil surgeon',
      'required evaluation of your physical and mental health history',
      'at least one dose of each applicable age-appropriate vaccine',
      'in a sealed envelope for submission to USCIS',
      'Do not open the sealed envelope.',
      'Immigration medical examinations are generally self-pay.',
      'What to bring',
      'Government-issued photo identification',
      '45–90 minutes',
      'not routinely required for naturalization or citizenship applications',
      'Hepatitis A, for example, is generally an immigration requirement only through age 18—not for every adult applicant.',
      'https://www.cdc.gov/immigrant-refugee-health/hcp/civil-surgeons/vaccination.html',
      'https://www.cdc.gov/immigrant-refugee-health/hcp/civil-surgeons/tuberculosis.html',
      'https://www.uscis.gov/i-485',
    ],
    prohibited: [
      /USCIS-certified/i,
      /citizenship applicants/i,
      /every applicant must submit (?:the )?I-693 with (?:Form )?I-485/i,
      /Hepatitis A.*all adult applicants/i,
    ],
    faqRequired: [
      '45–90 minutes',
      'not routinely required for naturalization or citizenship applications',
      'Hepatitis A, for example, is generally an immigration requirement only through age 18—not for every adult applicant.',
    ],
  },
  {
    page: 'es/servicios/examen-medico-inmigracion/index.html',
    required: [
      'Examen Médico de Inmigración (Formulario I-693)',
      'cirujano civil designado por USCIS',
      'evaluación requerida de sus antecedentes de salud física y mental',
      'al menos una dosis de cada vacuna aplicable y apropiada para la edad',
      'en un sobre sellado para presentarlo a USCIS',
      'No abra el sobre sellado.',
      'Los exámenes médicos de inmigración generalmente son de pago propio.',
      'Qué debe traer',
      'Identificación oficial con foto',
      '45–90 minutos',
      'no se requiere habitualmente para solicitudes de naturalización o ciudadanía',
      'La hepatitis A, por ejemplo, generalmente es un requisito de inmigración solo hasta los 18 años, no para todos los solicitantes adultos.',
      'https://www.cdc.gov/immigrant-refugee-health/hcp/civil-surgeons/vaccination.html',
      'https://www.cdc.gov/immigrant-refugee-health/hcp/civil-surgeons/tuberculosis.html',
      'https://www.uscis.gov/i-485',
    ],
    prohibited: [
      /certificado por USCIS/i,
      /todos los solicitantes deben presentar.*I-693.*I-485/i,
    ],
    faqRequired: [
      '45–90 minutos',
      'no se requiere habitualmente para solicitudes de naturalización o ciudadanía',
      'La hepatitis A, por ejemplo, generalmente es un requisito de inmigración solo hasta los 18 años, no para todos los solicitantes adultos.',
    ],
  },
]

for (const { page, required, prohibited, faqRequired } of immigrationPages) {
  const file = path.join(outputDir, page)
  const html = await readFile(file, 'utf8')
  for (const expected of required) requireText(html, expected, file)
  for (const unexpected of prohibited) rejectText(html, unexpected, file)

  const faqSchema = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .map((match) => JSON.parse(match[1]))
    .find((schema) => schema['@type'] === 'FAQPage')
  if (!faqSchema) throw new Error(`Missing FAQPage JSON-LD in ${page}`)

  const faqJson = JSON.stringify(faqSchema)
  for (const expected of faqRequired) requireText(faqJson, expected, file)
  for (const unexpected of prohibited) rejectText(faqJson, unexpected, file)
}

console.log(`Rendered HTML checks passed for ${allFiles.length} pages.`)
