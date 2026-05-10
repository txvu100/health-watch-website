export interface ServiceFAQ {
  q: string
  a: string
}

export interface Service {
  slug: string
  title: string
  titleEs: string
  shortDescription: string
  shortDescriptionEs: string
  description: string
  metaDescription: string
  heroKeyword: string
  icon: string
  faqs: ServiceFAQ[]
  relatedSlugs: string[]
}

// SVG paths (Heroicons outline style, 24×24 viewBox)
const ICONS = {
  heart: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  chartBar:
    'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  user: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
  documentText:
    'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  brain:
    'M9.75 3A6.25 6.25 0 003.5 9.25c0 1.657.643 3.16 1.688 4.275A3.001 3.001 0 007 20.5h10a3 3 0 001.813-5.374A6.25 6.25 0 0014.25 3H9.75z',
  child:
    'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
  scale:
    'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
  clipboard:
    'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
  beaker:
    'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
  video:
    'M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
}

export const SERVICES: Service[] = [
  {
    slug: 'blood-pressure-management',
    title: 'Blood Pressure Management',
    titleEs: 'Manejo de la Presión Arterial',
    shortDescription:
      'Monitor and control hypertension with personalized treatment plans. Free blood pressure checks always available.',
    shortDescriptionEs:
      'Monitoreo y control de la hipertensión con planes personalizados. Revisión de presión arterial siempre disponible.',
    description: `High blood pressure — also called hypertension — is one of the leading risk factors for heart disease, stroke, and kidney damage. Often called the "silent killer," it rarely causes symptoms until serious damage has already occurred. At Health Watch Medical Clinic, we provide comprehensive blood pressure management for patients of all ages in Oklahoma City.

Our approach begins with a thorough evaluation to identify the root causes of your high blood pressure, including lifestyle factors, diet, stress, and underlying conditions. We offer free blood pressure checks to all patients without requiring an appointment — just walk in.

If medication is needed, our providers work with you to find the right prescription and monitor your response over time. We also offer guidance on lifestyle modifications, including dietary changes and physical activity, that can significantly lower your blood pressure naturally.`,
    metaDescription:
      'Blood pressure management & hypertension treatment in Oklahoma City, OK. Free BP checks. Walk-ins welcome. SoonerCare & Medicaid accepted. Call (405) 949-1552.',
    heroKeyword: 'blood pressure management Oklahoma City',
    icon: ICONS.heart,
    faqs: [
      {
        q: 'Do you offer free blood pressure checks?',
        a: 'Yes! We offer complimentary blood pressure checks to all walk-in patients. No appointment needed — just come in during business hours.',
      },
      {
        q: 'What is considered high blood pressure?',
        a: 'Blood pressure is considered high (hypertension) when it consistently reads 130/80 mmHg or higher. Normal blood pressure is below 120/80 mmHg.',
      },
      {
        q: 'Do I need insurance to be seen for blood pressure management?',
        a: 'No. We accept SoonerCare, Medicaid, Medicare, private insurance, and self-pay patients. We work hard to make care affordable for everyone.',
      },
      {
        q: 'How often should I check my blood pressure?',
        a: 'If you have been diagnosed with hypertension, we typically recommend monitoring at least monthly and during every clinic visit. Your provider will advise based on your specific situation.',
      },
    ],
    relatedSlugs: ['diabetes-management', 'annual-sports-physicals', 'weight-loss-metabolic-services'],
  },
  {
    slug: 'diabetes-management',
    title: 'Diabetes Management',
    titleEs: 'Manejo de la Diabetes',
    shortDescription:
      'Ongoing care for Type 1 and Type 2 diabetes including A1C testing, glucose monitoring, and medication management.',
    shortDescriptionEs:
      'Atención continua para diabetes Tipo 1 y Tipo 2: pruebas de A1C, monitoreo de glucosa y manejo de medicamentos.',
    description: `Diabetes is one of the most prevalent chronic conditions in Oklahoma, affecting nearly 12% of adults in the state. Left unmanaged, it can lead to serious complications including heart disease, vision loss, kidney disease, and nerve damage. At Health Watch Medical Clinic, we provide comprehensive diabetes management for both Type 1 and Type 2 diabetes.

Our diabetes care includes regular monitoring of blood glucose and A1C levels, medication management or adjustment, and guidance on nutrition and lifestyle changes. We use a patient-centered approach, working closely with you to set achievable goals and build habits that support long-term blood sugar control.

We also offer referrals to endocrinologists, dietitians, and diabetes educators when specialized support is needed.`,
    metaDescription:
      'Diabetes management clinic in Oklahoma City, OK. A1C testing, glucose monitoring & Type 1/2 care. Medicaid & SoonerCare accepted. Walk-ins welcome. (405) 949-1552.',
    heroKeyword: 'diabetes management clinic Oklahoma City',
    icon: ICONS.chartBar,
    faqs: [
      {
        q: 'What is an A1C test?',
        a: 'An A1C test measures your average blood sugar level over the past 2–3 months. It is the gold standard for monitoring diabetes management. An A1C below 7% is generally the target for most diabetic patients.',
      },
      {
        q: 'Do you help with both Type 1 and Type 2 diabetes?',
        a: 'Yes. We provide ongoing care for patients with Type 1 and Type 2 diabetes, including insulin management, oral medication adjustments, and lifestyle counseling.',
      },
      {
        q: 'How often should I see a doctor if I have diabetes?',
        a: 'Most patients with well-controlled diabetes should see their provider at least every 3–6 months. If your diabetes is newly diagnosed or poorly controlled, more frequent visits may be needed.',
      },
      {
        q: 'Do you accept Medicaid for diabetes care?',
        a: 'Yes. We accept Medicaid, SoonerCare, Medicare, and private insurance, as well as self-pay patients.',
      },
    ],
    relatedSlugs: ['blood-pressure-management', 'weight-loss-metabolic-services', 'annual-sports-physicals'],
  },
  {
    slug: 'womens-primary-health',
    title: "Women's Primary Health Care",
    titleEs: 'Salud Primaria de la Mujer',
    shortDescription:
      "Comprehensive women's healthcare including well-woman exams, family planning, contraceptive management, and preventive screenings.",
    shortDescriptionEs:
      'Atención integral para la mujer: exámenes anuales, planificación familiar, anticonceptivos y exámenes preventivos.',
    description: `Health Watch Medical Clinic offers comprehensive primary healthcare services tailored specifically to the needs of women in Oklahoma City. Our experienced providers are committed to helping women of all ages maintain optimal health through preventive care, early detection, and compassionate treatment.

Our women's health services include annual well-woman exams, cervical cancer screenings (Pap smears), family planning consultations, and contraceptive management. We offer prescriptions and monitoring for birth control pills, patches, rings, injections, and IUDs.

We also screen for common women's health concerns such as osteoporosis, thyroid disorders, anemia, and hormonal imbalances. Bilingual staff (English/Spanish) ensures that every patient feels comfortable and understood.`,
    metaDescription:
      "Women's health clinic in Oklahoma City, OK. Well-woman exams, Pap smears, family planning & contraceptive management. SoonerCare accepted. (405) 949-1552.",
    heroKeyword: "women's health clinic Oklahoma City",
    icon: ICONS.user,
    faqs: [
      {
        q: 'What is included in a well-woman exam?',
        a: 'A well-woman exam includes a physical exam, blood pressure check, breast exam, pelvic exam, Pap smear (if due), and a review of any health concerns or medications. Depending on your age and risk factors, additional screenings may be recommended.',
      },
      {
        q: 'Do you prescribe birth control?',
        a: 'Yes. We prescribe and manage a range of contraceptive options including birth control pills, patches, rings, injections, and IUD insertion referrals.',
      },
      {
        q: 'How often should I have a Pap smear?',
        a: "Current guidelines recommend a Pap smear every 3 years for women aged 21–65, or every 5 years if combined with an HPV test. Your provider will advise based on your individual history.",
      },
      {
        q: "Do you have Spanish-speaking staff for women's health visits?",
        a: 'Yes. Our clinic is fully bilingual — we have Spanish-speaking staff available to ensure you feel comfortable and fully informed during your visit.',
      },
    ],
    relatedSlugs: ['mental-health-screening', 'annual-sports-physicals', 'vaccines-immunizations'],
  },
  {
    slug: 'immigration-medical-exam',
    title: 'Immigration Medical Exam (I-693)',
    titleEs: 'Examen Médico para Inmigración (I-693)',
    shortDescription:
      'USCIS-certified civil surgeon exams for Green Card and permanent residency applicants. Form I-693 completed quickly and accurately.',
    shortDescriptionEs:
      'Exámenes médicos certificados por USCIS para solicitantes de Green Card. Formulario I-693 completado con precisión.',
    description: `Health Watch Medical Clinic is a USCIS-designated civil surgeon clinic in Oklahoma City, authorized to perform the required immigration medical examination for U.S. permanent residency (Green Card) and citizenship applicants.

The immigration medical exam uses Form I-693 (Report of Immigration Medical Examination and Vaccination Record), which is required for most adjustment of status applications filed with Form I-485. As of 2024, USCIS requires that the completed I-693 be submitted together with the I-485 in a sealed envelope rather than brought to the interview.

Our exam includes a complete physical examination, review of vaccination records, required immunizations, tuberculosis (TB) screening, and mental health screening. We screen for all conditions designated by the CDC, and complete the paperwork accurately and promptly. We have bilingual (English/Spanish) staff to guide you through every step.

**What to bring:** Government-issued photo ID, vaccination records, any prior medical records relevant to your health history, and payment.`,
    metaDescription:
      'USCIS civil surgeon immigration medical exam (I-693) in Oklahoma City, OK. Green Card physicals done fast. Se habla Español. Call (405) 949-1552.',
    heroKeyword: 'USCIS I-693 civil surgeon Oklahoma City',
    icon: ICONS.documentText,
    faqs: [
      {
        q: 'What is Form I-693?',
        a: 'Form I-693 is the Report of Immigration Medical Examination and Vaccination Record required by USCIS for most Green Card (permanent residency) applicants. It must be completed by a USCIS-designated civil surgeon like Health Watch Medical Clinic.',
      },
      {
        q: 'How long does the immigration medical exam take?',
        a: 'The exam typically takes 45–90 minutes depending on required vaccinations and any follow-up tests needed. We work efficiently to minimize your wait time.',
      },
      {
        q: 'What vaccinations are required for the immigration medical exam?',
        a: 'Required vaccinations vary by age and vaccination history, but generally include MMR, Varicella, Hepatitis A and B, Tdap, flu, and others per CDC requirements. Bring your existing vaccination records to help avoid unnecessary re-vaccination.',
      },
      {
        q: 'Do you have Spanish-speaking staff for immigration exams?',
        a: 'Yes. We are a fully bilingual clinic (English/Spanish) and our staff is experienced in guiding immigration applicants through the I-693 process step by step.',
      },
      {
        q: 'When do I submit the I-693 to USCIS?',
        a: "As of 2024, USCIS requires applicants to submit the completed I-693 in a sealed envelope together with their Form I-485 adjustment of status application — not at the interview. Your civil surgeon will seal the envelope after completing the exam. Don't open it.",
      },
    ],
    relatedSlugs: ['vaccines-immunizations', 'annual-sports-physicals', 'mental-health-screening'],
  },
  {
    slug: 'mental-health-screening',
    title: 'Mental Health Screening',
    titleEs: 'Evaluación de Salud Mental',
    shortDescription:
      'Evaluation and treatment for depression, anxiety, and other mental health concerns. Referrals to specialists when needed.',
    shortDescriptionEs:
      'Evaluación y tratamiento de depresión, ansiedad y otros problemas de salud mental. Referidos a especialistas.',
    description: `Mental health is just as important as physical health, yet it is often under-addressed in primary care settings. At Health Watch Medical Clinic in Oklahoma City, we integrate mental health screening and basic treatment into our family medicine practice so that patients don't fall through the gaps.

Our providers screen for depression, anxiety, and other common mental health conditions using validated tools such as the PHQ-9 and GAD-7. If screening reveals a concern, we work with you to develop a care plan that may include counseling referrals, medication management, lifestyle modifications, and follow-up visits.

We understand that seeking mental health care can feel difficult. Our compassionate, bilingual team creates a safe and non-judgmental environment where patients feel comfortable discussing their emotional wellbeing.`,
    metaDescription:
      'Mental health screening in Oklahoma City, OK. Depression & anxiety evaluation, treatment & referrals. Medicaid accepted. Bilingual staff. (405) 949-1552.',
    heroKeyword: 'mental health screening Oklahoma City',
    icon: ICONS.brain,
    faqs: [
      {
        q: 'Do you treat depression and anxiety?',
        a: 'We provide initial evaluation and treatment for mild to moderate depression and anxiety, including medication management and referrals to licensed counselors and psychiatrists when specialized care is needed.',
      },
      {
        q: 'Is mental health screening covered by SoonerCare?',
        a: 'Yes. Mental health screenings and related services are generally covered by SoonerCare (Oklahoma Medicaid), Medicare, and most private insurance plans.',
      },
      {
        q: 'Do I need a referral to see a mental health specialist?',
        a: 'Depending on your insurance plan, a referral from a primary care provider may be required to see a psychiatrist or licensed counselor. We can provide those referrals.',
      },
      {
        q: 'What if I am in crisis?',
        a: 'If you are in a mental health crisis, please call 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room. Our clinic handles non-emergency mental health concerns.',
      },
    ],
    relatedSlugs: ['womens-primary-health', 'blood-pressure-management', 'annual-sports-physicals'],
  },
  {
    slug: 'child-health-exams-immunizations',
    title: 'Child Health Exams & Immunizations',
    titleEs: 'Exámenes Infantiles e Inmunizaciones',
    shortDescription:
      'Well-child checkups, developmental screenings, and vaccinations for infants, children, and teenagers.',
    shortDescriptionEs:
      'Revisiones pediátricas, evaluaciones del desarrollo e inmunizaciones para bebés, niños y adolescentes.',
    description: `Keeping your child healthy starts with regular well-child visits. At Health Watch Medical Clinic, we provide comprehensive pediatric care for infants, children, and teenagers in Oklahoma City, including well-child exams, developmental milestone screenings, and immunizations on the CDC recommended schedule.

Our well-child visits include a head-to-toe physical exam, height and weight tracking, blood pressure screening, vision and hearing checks, and age-appropriate developmental screenings. We also discuss nutrition, safety, behavioral concerns, and answer your questions as a parent.

Vaccines are one of the most effective ways to protect your child's health. We administer all recommended childhood immunizations and can also review your child's vaccination history to ensure they are up to date.`,
    metaDescription:
      'Child health exams & immunizations in Oklahoma City, OK. Well-child checkups and vaccines for kids of all ages. SoonerCare accepted. (405) 949-1552.',
    heroKeyword: 'child health exam immunizations Oklahoma City',
    icon: ICONS.child,
    faqs: [
      {
        q: 'How often does my child need a well-child visit?',
        a: 'The AAP recommends well-child visits at birth, 2–4 days, 1 month, 2 months, 4 months, 6 months, 9 months, 12 months, 15 months, 18 months, 24 months, 30 months, then yearly from ages 3 through 21.',
      },
      {
        q: 'Do you accept SoonerCare for children\'s visits?',
        a: 'Yes. SoonerCare (Oklahoma Medicaid) covers well-child exams and immunizations for eligible children. We accept SoonerCare and most other insurance plans.',
      },
      {
        q: 'Do you offer sports physicals for school athletics?',
        a: 'Yes. We provide pre-participation sports physicals required for school athletic programs. Same-day appointments are often available.',
      },
      {
        q: 'What vaccines does my child need for school?',
        a: 'Oklahoma requires certain vaccinations for school enrollment including DTaP, polio, MMR, varicella, hepatitis B, and meningococcal vaccines. We can review your child\'s records and administer any missing vaccines.',
      },
    ],
    relatedSlugs: ['vaccines-immunizations', 'annual-sports-physicals', 'mental-health-screening'],
  },
  {
    slug: 'weight-loss-metabolic-services',
    title: 'Weight Loss & Metabolic Services',
    titleEs: 'Servicios de Pérdida de Peso y Metabólicos',
    shortDescription:
      'Medical weight loss programs with provider-guided nutrition counseling, metabolic testing, and treatment plans.',
    shortDescriptionEs:
      'Programas médicos de pérdida de peso con asesoramiento nutricional, pruebas metabólicas y planes de tratamiento.',
    description: `Achieving and maintaining a healthy weight is one of the most impactful things you can do for your overall health. Excess weight is a major risk factor for type 2 diabetes, hypertension, heart disease, sleep apnea, joint pain, and many cancers. At Health Watch Medical Clinic, we offer medically supervised weight loss and metabolic services that go beyond generic dieting advice.

Our approach begins with a comprehensive metabolic evaluation, including bloodwork to assess thyroid function, blood sugar, cholesterol, and other markers that influence weight. Based on your results, we create a personalized plan that may include dietary modifications, physical activity guidance, behavioral strategies, and, when appropriate, prescription weight loss medications.

We treat weight as a medical issue, not a willpower issue — with the same evidence-based care and compassion we bring to all conditions.`,
    metaDescription:
      'Medical weight loss clinic in Oklahoma City, OK. Metabolic testing, provider-guided programs & prescription options. Medicaid accepted. (405) 949-1552.',
    heroKeyword: 'weight loss clinic Oklahoma City',
    icon: ICONS.scale,
    faqs: [
      {
        q: 'Is medical weight loss covered by insurance?',
        a: 'Coverage varies by plan. Medicaid, SoonerCare, and many private insurers cover obesity-related evaluations and treatment. We can help verify your benefits before your visit.',
      },
      {
        q: 'Do you prescribe weight loss medications?',
        a: 'When appropriate, our providers may prescribe FDA-approved weight loss medications as part of a comprehensive treatment plan. These are used alongside dietary and lifestyle changes, not as a standalone solution.',
      },
      {
        q: 'How is medical weight loss different from a diet program?',
        a: 'Medical weight loss is supervised by a licensed provider who can identify metabolic or hormonal factors affecting your weight, order and interpret lab work, adjust your plan based on medical data, and prescribe medications when needed.',
      },
      {
        q: 'What is a metabolic evaluation?',
        a: 'A metabolic evaluation includes bloodwork to measure thyroid hormones, fasting glucose, insulin, cholesterol, and other markers. This helps identify any underlying medical conditions contributing to weight gain.',
      },
    ],
    relatedSlugs: ['diabetes-management', 'blood-pressure-management', 'annual-sports-physicals'],
  },
  {
    slug: 'annual-sports-physicals',
    title: 'Annual & Sports Physicals',
    titleEs: 'Exámenes Anuales y Físicos Deportivos',
    shortDescription:
      'Annual wellness exams and pre-participation sports physicals for school, work, and insurance requirements.',
    shortDescriptionEs:
      'Exámenes anuales de bienestar y físicos pre-deportivos para escuela, trabajo y requisitos de seguros.',
    description: `An annual physical is the foundation of preventive healthcare. Regular wellness exams allow your provider to track changes in your health over time, catch conditions early when they are most treatable, and maintain an up-to-date health record.

At Health Watch Medical Clinic in Oklahoma City, we provide comprehensive annual physicals for adults and school-age children, including full physical exams, vital signs, blood pressure screening, laboratory work, and personalized health counseling.

We also perform pre-participation sports physicals (PPE) required for school athletic programs and recreational sports leagues. These exams evaluate cardiovascular fitness, musculoskeletal health, and any conditions that may affect safe participation in sports.

Same-day and walk-in appointments are frequently available, making it easy to fit your physical into your schedule.`,
    metaDescription:
      'Annual & sports physicals in Oklahoma City, OK. School sports physicals, wellness exams & work physicals. Walk-ins welcome. SoonerCare accepted. (405) 949-1552.',
    heroKeyword: 'sports physical Oklahoma City same-day',
    icon: ICONS.clipboard,
    faqs: [
      {
        q: 'Do you offer same-day sports physicals?',
        a: 'Yes. We frequently have same-day availability for sports physicals. Walk-ins are welcome, and you can also call ahead to check availability.',
      },
      {
        q: 'What does an annual physical include?',
        a: 'A comprehensive annual physical includes a head-to-toe physical exam, vital signs, blood pressure, height and weight, discussion of current medications and health concerns, and ordering lab work if indicated.',
      },
      {
        q: 'Are sports physicals required for Oklahoma school sports?',
        a: 'Yes. Oklahoma high school and middle school athletic associations require a pre-participation physical evaluation (PPE) before students may participate in organized sports.',
      },
      {
        q: 'Do you perform DOT/CDL physicals?',
        a: 'Please call our office at (405) 949-1552 to inquire about DOT/CDL physicals and other specialized occupational physicals.',
      },
    ],
    relatedSlugs: ['blood-pressure-management', 'child-health-exams-immunizations', 'vaccines-immunizations'],
  },
  {
    slug: 'vaccines-immunizations',
    title: 'Vaccines & Immunizations',
    titleEs: 'Vacunas e Inmunizaciones',
    shortDescription:
      'Adult and childhood vaccines including flu shots, travel vaccines, COVID-19, shingles, and school-required immunizations.',
    shortDescriptionEs:
      'Vacunas para adultos y niños: influenza, viajes, COVID-19, culebrilla e inmunizaciones requeridas por la escuela.',
    description: `Vaccines are one of the most effective tools in preventive medicine. At Health Watch Medical Clinic, we administer vaccines for both children and adults according to the latest CDC and ACIP recommendations.

Whether you need your annual flu shot, a catch-up vaccine you missed, travel immunizations, or school-required vaccines, our team can review your records and ensure you are up to date.

Our adult vaccine offerings include influenza (flu), COVID-19, pneumococcal, shingles (Zoster), Tdap/Td, hepatitis A and B, MMR, varicella, and HPV. For travelers, we can advise on destination-specific vaccines.

Children's vaccines follow the CDC recommended immunization schedule, from birth through the teen years.`,
    metaDescription:
      'Vaccines & immunizations in Oklahoma City, OK. Flu shots, COVID-19, shingles, travel vaccines & school immunizations. Walk-ins welcome. (405) 949-1552.',
    heroKeyword: 'immunizations Oklahoma City adults children',
    icon: ICONS.beaker,
    faqs: [
      {
        q: 'Do you offer flu shots?',
        a: 'Yes. We offer annual flu shots for adults and children starting at 6 months of age. No appointment needed — walk-ins are welcome during flu season.',
      },
      {
        q: 'Are vaccines covered by my insurance?',
        a: 'Most vaccines are covered at no cost under the Affordable Care Act for patients with insurance. Medicaid, SoonerCare, and Medicare also cover recommended vaccines. We can verify your coverage before administering.',
      },
      {
        q: 'What vaccines do adults need?',
        a: 'Adults should receive an annual flu shot, stay current on Tdap (every 10 years), consider COVID-19 and pneumococcal vaccines based on age/risk, and ask about hepatitis, shingles, and MMR vaccines based on their history.',
      },
      {
        q: 'What vaccines are required for Oklahoma schools?',
        a: 'Oklahoma requires DTaP/DTP, polio, MMR, Hepatitis B, and varicella vaccines for school-aged children. Meningococcal vaccine is required for 7th grade entry.',
      },
    ],
    relatedSlugs: ['child-health-exams-immunizations', 'annual-sports-physicals', 'immigration-medical-exam'],
  },
  {
    slug: 'telemedicine',
    title: 'Telemedicine in Oklahoma City',
    titleEs: 'Telemedicina en Oklahoma City',
    shortDescription:
      'Convenient video visits with our providers from home. Available for follow-ups, prescription refills, and many common conditions.',
    shortDescriptionEs:
      'Consultas por video desde casa. Disponibles para seguimientos, renovación de recetas y condiciones comunes.',
    description: `Health Watch Medical Clinic offers secure, HIPAA-compliant telemedicine visits so you can see a provider from the comfort of your home or office. Our telemedicine service is available to patients in Oklahoma City and throughout Oklahoma.

Telemedicine is ideal for follow-up appointments, prescription refills, management of chronic conditions like diabetes and hypertension, minor illness evaluation (colds, infections, rashes), mental health check-ins, and lab result reviews.

Video visits are conducted through a secure online platform. You will receive a link before your appointment. All you need is a smartphone, tablet, or computer with a camera and microphone.

To schedule a telemedicine appointment, call us at (405) 949-1552 or use the patient portal. Same-day video visits may be available for many conditions.`,
    metaDescription:
      'Telemedicine doctor in Oklahoma City, OK. Video visits for follow-ups, prescriptions & chronic care. SoonerCare & Medicaid accepted. (405) 949-1552.',
    heroKeyword: 'telemedicine doctor Oklahoma City',
    icon: ICONS.video,
    faqs: [
      {
        q: 'What conditions can be treated via telemedicine?',
        a: 'Telemedicine is appropriate for many conditions including chronic disease management (diabetes, hypertension), prescription refills, minor illnesses (cold, flu, UTI, rash), mental health check-ins, and lab result reviews. Conditions requiring a physical exam or in-person procedures require an in-office visit.',
      },
      {
        q: 'Does insurance cover telemedicine?',
        a: 'Yes. Most insurance plans, including SoonerCare (Oklahoma Medicaid) and Medicare, cover telemedicine visits at the same rate as in-person visits. Check with your insurance company for specific coverage details.',
      },
      {
        q: 'What do I need for a telemedicine appointment?',
        a: 'You need a smartphone, tablet, or computer with a working camera and microphone, a stable internet connection, and a quiet private space. We will send you a secure link before your appointment.',
      },
      {
        q: 'How do I schedule a telemedicine visit?',
        a: 'Call us at (405) 949-1552 to schedule a telemedicine appointment. You can also request one through the patient portal. Same-day availability may be possible.',
      },
    ],
    relatedSlugs: ['blood-pressure-management', 'diabetes-management', 'mental-health-screening'],
  },
]

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug)
}

export function getRelatedServices(slugs: string[]): Service[] {
  return slugs.map((slug) => SERVICES.find((s) => s.slug === slug)).filter(Boolean) as Service[]
}
