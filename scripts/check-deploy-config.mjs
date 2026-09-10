import { readFile } from 'node:fs/promises'

const config = await readFile('render.yaml', 'utf8')

function requireText(text) {
  if (!config.includes(text)) throw new Error(`Missing deployment configuration:\n${text}`)
}

requireText('buildCommand: npm ci && npm run check:release')
requireText('value: 22.12.0')

const headers = [
  ['Strict-Transport-Security', 'max-age=31536000'],
  ['X-Content-Type-Options', 'nosniff'],
  ['X-Frame-Options', 'DENY'],
  ['Referrer-Policy', 'strict-origin-when-cross-origin'],
  ['Permissions-Policy', '"camera=(), geolocation=(), microphone=(), payment=(), usb=()"'],
]

for (const [name, value] of headers) {
  requireText(`- path: /*\n        name: ${name}\n        value: ${value}`)
}

const redirects = [
  ['/services-2', '/services/'],
  ['/services-2/', '/services/'],
  ['/blood-pressure-management-and-checkup-in-oklahoma-city', '/services/blood-pressure-management/'],
  ['/blood-pressure-management-and-checkup-in-oklahoma-city/', '/services/blood-pressure-management/'],
  ['/telemedicine-in-okc-oklahoma', '/telemedicine/'],
  ['/telemedicine-in-okc-oklahoma/', '/telemedicine/'],
  ['/immigration-medical-exam-in-oklahoma', '/services/immigration-medical-exam/'],
  ['/immigration-medical-exam-in-oklahoma/', '/services/immigration-medical-exam/'],
  ['/diabetes-management-and-checkup-in-oklahoma-city-okc', '/services/diabetes-management/'],
  ['/diabetes-management-and-checkup-in-oklahoma-city-okc/', '/services/diabetes-management/'],
  ['/mental-health-screening-in-oklahoma-okc-mental-health-clinic', '/services/mental-health-screening/'],
  ['/mental-health-screening-in-oklahoma-okc-mental-health-clinic/', '/services/mental-health-screening/'],
  ['/child-health-exams-immunizations-in-okc', '/services/child-health-exams-immunizations/'],
  ['/child-health-exams-immunizations-in-okc/', '/services/child-health-exams-immunizations/'],
  ['/womens-primary-health-care', '/services/womens-primary-health/'],
  ['/womens-primary-health-care/', '/services/womens-primary-health/'],
  ['/weight-loss-clinics-in-oklahoma-city', '/services/weight-loss-metabolic-services/'],
  ['/weight-loss-clinics-in-oklahoma-city/', '/services/weight-loss-metabolic-services/'],
  ['/flu-shots', '/services/vaccines-immunizations/'],
  ['/flu-shots/', '/services/vaccines-immunizations/'],
  ['/family-practice-clinic-comprehensive-health-care-for-your-family', '/'],
  ['/family-practice-clinic-comprehensive-health-care-for-your-family/', '/'],
]

for (const [source, destination] of redirects) {
  requireText(`- type: redirect\n        source: ${source}\n        destination: ${destination}`)
}

console.log(`Deployment configuration checks passed for ${headers.length} headers and ${redirects.length} legacy routes.`)
