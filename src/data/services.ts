export interface ServiceFAQ {
  q: string
  a: string
}

export interface Service {
  slug: string
  /** Spanish URL segment under /es/servicios/ — keyword-bearing, not a translation of `slug` */
  slugEs: string
  title: string
  titleEs: string
  shortDescription: string
  shortDescriptionEs: string
  description: string
  descriptionEs: string
  metaDescription: string
  metaDescriptionEs: string
  heroKeyword: string
  heroKeywordEs: string
  icon: string
  highlights: string[]
  highlightsEs: string[]
  faqs: ServiceFAQ[]
  faqsEs: ServiceFAQ[]
  relatedSlugs: string[]
  /**
   * Per-language absolute URL to canonicalise to instead of this service's own
   * page, used where a standalone landing page covers the same ground (see
   * /telemedicine and /es/telemedicina). Must name a URL in the SAME language —
   * a cross-language canonical de-indexes the translation.
   */
  canonicalOverride?: Partial<Record<'en' | 'es', string>>
  /** Suppress this page's FAQPage JSON-LD when another page already publishes it */
  suppressFaqSchema?: boolean
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
    slugEs: 'manejo-presion-arterial',
    title: 'Blood Pressure Management',
    titleEs: 'Manejo de la Presión Arterial',
    shortDescription:
      'Monitor and control hypertension with personalized treatment plans. Free blood pressure checks always available.',
    shortDescriptionEs:
      'Monitoreo y control de la hipertensión con planes personalizados. Revisión de presión arterial siempre disponible.',
    description: `High blood pressure — also called hypertension — is one of the leading risk factors for heart disease, stroke, and kidney damage. Often called the "silent killer," it rarely causes symptoms until serious damage has already occurred. At Health Watch Medical Clinic, we provide comprehensive blood pressure management for patients of all ages in Oklahoma City.

Our approach begins with a thorough evaluation to identify the root causes of your high blood pressure, including lifestyle factors, diet, stress, and underlying conditions. We offer free blood pressure checks to all patients without requiring an appointment — just walk in.

If medication is needed, our providers work with you to find the right prescription and monitor your response over time. We also offer guidance on lifestyle modifications, including dietary changes and physical activity, that can significantly lower your blood pressure naturally.`,
    descriptionEs: `La presión arterial alta —también llamada hipertensión— es uno de los principales factores de riesgo de enfermedades del corazón, derrame cerebral y daño renal. Se le conoce como el "asesino silencioso" porque rara vez causa síntomas hasta que el daño ya está hecho. En Health Watch Medical Clinic atendemos a pacientes de todas las edades en Oklahoma City para controlar la presión arterial.

Comenzamos con una evaluación completa para identificar la causa de su presión alta: alimentación, estrés, peso, actividad física y otras condiciones de salud. Ofrecemos **revisiones de presión arterial sin costo** a todos nuestros pacientes, y no necesita cita — puede llegar directamente durante nuestro horario de atención.

Si necesita medicamento, su proveedor trabajará con usted para encontrar el tratamiento adecuado y dar seguimiento a su respuesta con el tiempo. También le orientamos sobre cambios en la dieta y la actividad física que pueden bajar su presión de forma natural.

Aceptamos SoonerCare, Medicaid, Medicare, seguros privados y pacientes que pagan en efectivo. Todo nuestro personal es bilingüe.`,
    metaDescription:
      'Blood pressure & hypertension care in Oklahoma City, OK. Free BP checks, walk-ins welcome. SoonerCare & Medicaid accepted. Call (405) 949-1552.',
    metaDescriptionEs:
      'Control de presión arterial e hipertensión en Oklahoma City, OK. Revisión de presión sin costo. Sin cita previa. Aceptamos SoonerCare. Llame (405) 949-1552.',
    heroKeyword: 'blood pressure management Oklahoma City',
    heroKeywordEs: 'control de presión arterial Oklahoma City',
    icon: ICONS.heart,
    highlights: ['Free blood pressure checks — no appointment needed', 'Personalized treatment & medication management', 'Lifestyle and diet guidance'],
    highlightsEs: ['Revisión de presión arterial sin costo y sin cita', 'Tratamiento y manejo de medicamentos personalizado', 'Orientación sobre alimentación y estilo de vida'],
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
    faqsEs: [
      {
        q: '¿Ofrecen revisión de presión arterial sin costo?',
        a: '¡Sí! Ofrecemos revisión de presión arterial gratuita a todos los pacientes que llegan sin cita. No necesita hacer cita — solo venga durante nuestro horario de atención.',
      },
      {
        q: '¿Qué se considera presión arterial alta?',
        a: 'La presión arterial se considera alta (hipertensión) cuando marca constantemente 130/80 mmHg o más. La presión normal está por debajo de 120/80 mmHg.',
      },
      {
        q: '¿Necesito seguro médico para que me atiendan?',
        a: 'No. Aceptamos SoonerCare, Medicaid, Medicare, seguros privados y pacientes que pagan en efectivo. Trabajamos para que la atención sea accesible para todos.',
      },
      {
        q: '¿Con qué frecuencia debo revisar mi presión arterial?',
        a: 'Si le diagnosticaron hipertensión, generalmente recomendamos revisarla al menos una vez al mes y en cada visita a la clínica. Su proveedor le indicará según su caso.',
      },
      {
        q: '¿Atienden en español?',
        a: 'Sí. Todo nuestro personal es bilingüe. Puede recibir su consulta completamente en español, sin necesidad de traer un intérprete.',
      },
    ],
    relatedSlugs: ['diabetes-management', 'annual-sports-physicals', 'weight-loss-metabolic-services'],
  },
  {
    slug: 'diabetes-management',
    slugEs: 'manejo-diabetes',
    title: 'Diabetes Management',
    titleEs: 'Manejo de la Diabetes',
    shortDescription:
      'Ongoing care for Type 1 and Type 2 diabetes including A1C testing, glucose monitoring, and medication management.',
    shortDescriptionEs:
      'Atención continua para diabetes Tipo 1 y Tipo 2: pruebas de A1C, monitoreo de glucosa y manejo de medicamentos.',
    description: `Diabetes is one of the most prevalent chronic conditions in Oklahoma, affecting nearly 12% of adults in the state. Left unmanaged, it can lead to serious complications including heart disease, vision loss, kidney disease, and nerve damage. At Health Watch Medical Clinic, we provide comprehensive diabetes management for both Type 1 and Type 2 diabetes.

Our diabetes care includes regular monitoring of blood glucose and A1C levels, medication management or adjustment, and guidance on nutrition and lifestyle changes. We use a patient-centered approach, working closely with you to set achievable goals and build habits that support long-term blood sugar control.

We also offer referrals to endocrinologists, dietitians, and diabetes educators when specialized support is needed.`,
    descriptionEs: `La diabetes es una de las condiciones crónicas más comunes en Oklahoma y afecta a casi el 12% de los adultos del estado. Sin control, puede causar complicaciones graves como enfermedades del corazón, pérdida de la vista, daño renal y daño en los nervios. En Health Watch Medical Clinic ofrecemos atención integral para la diabetes Tipo 1 y Tipo 2.

Nuestro cuidado incluye monitoreo regular de la glucosa y del nivel de **A1C**, manejo y ajuste de medicamentos, y orientación sobre alimentación y cambios de hábitos. Trabajamos con usted para fijar metas realistas y construir rutinas que mantengan su azúcar bajo control a largo plazo.

Cuando se necesita apoyo especializado, lo referimos con endocrinólogos, nutricionistas y educadores en diabetes.

La diabetes afecta de manera desproporcionada a la comunidad hispana. Si tiene antecedentes familiares, sobrepeso o síntomas como sed constante, orinar con frecuencia o cansancio, venga a hacerse una prueba — no necesita cita.`,
    metaDescription:
      'Diabetes clinic in Oklahoma City, OK. A1C testing, glucose monitoring and Type 1 & 2 care. Medicaid & SoonerCare accepted. Call (405) 949-1552.',
    metaDescriptionEs:
      'Clínica de diabetes en Oklahoma City, OK. Prueba de A1C, control de glucosa y atención Tipo 1 y 2. Aceptamos Medicaid y SoonerCare. Llame (405) 949-1552.',
    heroKeyword: 'diabetes management clinic Oklahoma City',
    heroKeywordEs: 'clínica de diabetes Oklahoma City',
    icon: ICONS.chartBar,
    highlights: ['A1C testing & glucose monitoring', 'Type 1 & Type 2 diabetes care', 'Medication & lifestyle support'],
    highlightsEs: ['Prueba de A1C y monitoreo de glucosa', 'Atención para diabetes Tipo 1 y Tipo 2', 'Apoyo con medicamentos y estilo de vida'],
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
    faqsEs: [
      {
        q: '¿Qué es la prueba de A1C?',
        a: 'La prueba de A1C mide su nivel promedio de azúcar en la sangre durante los últimos 2 a 3 meses. Es la referencia principal para vigilar el control de la diabetes. Para la mayoría de los pacientes la meta es mantenerla por debajo del 7%.',
      },
      {
        q: '¿Atienden diabetes Tipo 1 y Tipo 2?',
        a: 'Sí. Damos atención continua a pacientes con diabetes Tipo 1 y Tipo 2, incluyendo manejo de insulina, ajuste de medicamentos orales y orientación sobre alimentación y actividad física.',
      },
      {
        q: '¿Cada cuánto debo ver al médico si tengo diabetes?',
        a: 'La mayoría de los pacientes con diabetes bien controlada deben consultar cada 3 a 6 meses. Si su diagnóstico es reciente o su azúcar no está controlada, es posible que necesite visitas más seguidas.',
      },
      {
        q: '¿Aceptan Medicaid para la atención de diabetes?',
        a: 'Sí. Aceptamos Medicaid, SoonerCare, Medicare y seguros privados, así como pacientes que pagan en efectivo.',
      },
      {
        q: '¿Cuáles son los síntomas de la diabetes?',
        a: 'Los síntomas más comunes son sed constante, orinar con frecuencia, cansancio, visión borrosa, heridas que tardan en sanar y pérdida de peso sin explicación. Si tiene alguno de estos síntomas, venga a hacerse una prueba.',
      },
    ],
    relatedSlugs: ['blood-pressure-management', 'weight-loss-metabolic-services', 'annual-sports-physicals'],
  },
  {
    slug: 'womens-primary-health',
    slugEs: 'salud-primaria-mujer',
    title: "Women's Primary Health Care",
    titleEs: 'Salud Primaria de la Mujer',
    shortDescription:
      "Comprehensive women's healthcare including well-woman exams, family planning, contraceptive management, and preventive screenings.",
    shortDescriptionEs:
      'Atención integral para la mujer: exámenes anuales, planificación familiar, anticonceptivos y exámenes preventivos.',
    description: `Health Watch Medical Clinic offers comprehensive primary healthcare services tailored specifically to the needs of women in Oklahoma City. Our experienced providers are committed to helping women of all ages maintain optimal health through preventive care, early detection, and compassionate treatment.

Our women's health services include annual well-woman exams, cervical cancer screenings (Pap smears), family planning consultations, and contraceptive management. We offer prescriptions and monitoring for birth control pills, patches, rings, injections, and IUDs.

We also screen for common women's health concerns such as osteoporosis, thyroid disorders, anemia, and hormonal imbalances. Bilingual staff (English/Spanish) ensures that every patient feels comfortable and understood.`,
    descriptionEs: `En Health Watch Medical Clinic ofrecemos atención primaria integral pensada específicamente para las necesidades de la mujer en Oklahoma City. Nuestras proveedoras acompañan a mujeres de todas las edades con cuidado preventivo, detección temprana y trato respetuoso.

Nuestros servicios incluyen el **examen anual de la mujer**, detección de cáncer cervical (prueba de Papanicolaou), consultas de planificación familiar y manejo de anticonceptivos. Recetamos y damos seguimiento a pastillas anticonceptivas, parches, anillos, inyecciones y referencias para la colocación del DIU.

También hacemos pruebas para detectar condiciones frecuentes como osteoporosis, problemas de tiroides, anemia y desequilibrios hormonales.

Todo nuestro personal es bilingüe. Sabemos que hablar de salud íntima es más fácil en su propio idioma, y queremos que se sienta cómoda y bien informada en cada visita.`,
    metaDescription:
      "Women's health clinic in Oklahoma City, OK. Well-woman exams, Pap smears, family planning & contraceptive management. SoonerCare accepted. (405) 949-1552.",
    metaDescriptionEs:
      'Clínica de salud para la mujer en Oklahoma City, OK. Examen anual, Papanicolaou, planificación familiar y anticonceptivos. Se habla español. (405) 949-1552.',
    heroKeyword: "women's health clinic Oklahoma City",
    heroKeywordEs: 'clínica de salud para la mujer Oklahoma City',
    icon: ICONS.user,
    highlights: ['Well-woman exams & Pap smears', 'Contraceptive management', 'Preventive health screenings'],
    highlightsEs: ['Examen anual de la mujer y Papanicolaou', 'Manejo de métodos anticonceptivos', 'Exámenes preventivos de salud'],
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
    faqsEs: [
      {
        q: '¿Qué incluye el examen anual de la mujer?',
        a: 'Incluye examen físico, revisión de presión arterial, examen de senos, examen pélvico, Papanicolaou (si le toca) y una revisión de sus preocupaciones de salud y medicamentos. Según su edad y factores de riesgo, podemos recomendar pruebas adicionales.',
      },
      {
        q: '¿Recetan métodos anticonceptivos?',
        a: 'Sí. Recetamos y damos seguimiento a varias opciones: pastillas, parches, anillos, inyecciones y referencias para la colocación del DIU.',
      },
      {
        q: '¿Cada cuánto debo hacerme el Papanicolaou?',
        a: 'Las guías actuales recomiendan el Papanicolaou cada 3 años para mujeres de 21 a 65 años, o cada 5 años si se combina con la prueba del VPH. Su proveedora le indicará según su historial.',
      },
      {
        q: '¿Puedo recibir la consulta en español?',
        a: 'Sí. Nuestra clínica es completamente bilingüe. Contamos con personal que habla español para que se sienta cómoda y entienda toda la información de su visita.',
      },
      {
        q: '¿Necesito seguro médico para el examen anual?',
        a: 'No. Aceptamos SoonerCare, Medicaid, Medicare y seguros privados, y también atendemos a pacientes que pagan en efectivo.',
      },
    ],
    relatedSlugs: ['mental-health-screening', 'annual-sports-physicals', 'vaccines-immunizations'],
  },
  {
    slug: 'immigration-medical-exam',
    slugEs: 'examen-medico-inmigracion',
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
    descriptionEs: `Health Watch Medical Clinic es una clínica con **cirujano civil designado por USCIS** en Oklahoma City, autorizada para realizar el examen médico de inmigración requerido para la residencia permanente (Green Card) y la ciudadanía estadounidense.

El Formulario I-693 (Informe de Examen Médico de Inmigración y Registro de Vacunación) es requerido por USCIS para la mayoría de las solicitudes de ajuste de estatus que se presentan con el Formulario I-485. El examen debe ser realizado por un cirujano civil designado por USCIS — no cualquier médico puede completarlo.

**Qué incluye el examen:** examen físico completo de cabeza a pies, revisión de su historial de vacunación, las vacunas requeridas según su edad e historial, prueba de tuberculosis (TB), evaluación de salud mental, detección de las condiciones designadas por los CDC, y el llenado y sellado del Formulario I-693.

**Cambio importante de USCIS (2024):** ahora se requiere que el I-693 completado se presente **junto con el Formulario I-485**, en un sobre sellado. No abra el sobre después de que su cirujano civil lo selle, y no lo lleve por separado a su entrevista.

**Qué debe traer:** identificación oficial con foto (pasaporte o identificación del gobierno), su tarjeta o historial de vacunas, cualquier registro médico relevante y su forma de pago.

Nuestro equipo bilingüe lo guiará paso a paso por todo el proceso. **No necesita saber inglés** para completar su examen de inmigración con nosotros.`,
    metaDescription:
      'USCIS civil surgeon immigration medical exam (I-693) in Oklahoma City, OK. Green Card physicals done fast. Se habla Español. Call (405) 949-1552.',
    metaDescriptionEs:
      'Examen médico de inmigración I-693 en Oklahoma City, OK. Cirujano civil designado por USCIS para Green Card. Se habla español. Llame (405) 949-1552.',
    heroKeyword: 'USCIS I-693 civil surgeon Oklahoma City',
    heroKeywordEs: 'examen médico de inmigración Oklahoma City',
    icon: ICONS.documentText,
    highlights: ['Complete physical exam', 'Required immunizations', 'Form I-693 completed quickly and accurately'],
    highlightsEs: ['Examen físico completo', 'Vacunas requeridas por USCIS', 'Formulario I-693 completado y sellado con precisión'],
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
    faqsEs: [
      {
        q: '¿Qué es el Formulario I-693?',
        a: 'El Formulario I-693 es el Informe de Examen Médico de Inmigración y Registro de Vacunación que USCIS requiere para la mayoría de los solicitantes de la Green Card (residencia permanente). Debe ser completado por un cirujano civil designado por USCIS, como Health Watch Medical Clinic.',
      },
      {
        q: '¿Cuánto tiempo dura el examen médico de inmigración?',
        a: 'El examen normalmente dura entre 45 y 90 minutos, según las vacunas que necesite y si se requieren pruebas adicionales. Trabajamos con eficiencia para reducir su tiempo de espera.',
      },
      {
        q: '¿Qué vacunas se requieren para el examen de inmigración?',
        a: 'Las vacunas requeridas varían según su edad y su historial, pero generalmente incluyen MMR (sarampión, paperas y rubéola), varicela, hepatitis A y B, Tdap, influenza y otras según los CDC. Traiga su tarjeta de vacunas para evitar repetir vacunas innecesariamente.',
      },
      {
        q: '¿Necesito hablar inglés para hacer mi examen?',
        a: 'No. Nuestra clínica es completamente bilingüe y nuestro personal tiene experiencia guiando a solicitantes de inmigración paso a paso por todo el proceso del I-693 en español.',
      },
      {
        q: '¿Cuándo debo entregar el I-693 a USCIS?',
        a: 'Desde 2024, USCIS requiere que entregue el I-693 completado en un sobre sellado junto con su Formulario I-485 de ajuste de estatus — no en la entrevista. Su cirujano civil sellará el sobre al terminar el examen. No lo abra.',
      },
      {
        q: '¿El examen de inmigración lo cubre el seguro médico?',
        a: 'Generalmente los seguros no cubren el examen de inmigración porque USCIS lo requiere como parte de un trámite migratorio, no como atención médica. Llámenos al (405) 949-1552 para conocer el costo y las formas de pago.',
      },
    ],
    relatedSlugs: ['vaccines-immunizations', 'annual-sports-physicals', 'mental-health-screening'],
  },
  {
    slug: 'mental-health-screening',
    slugEs: 'evaluacion-salud-mental',
    title: 'Mental Health Screening',
    titleEs: 'Evaluación de Salud Mental',
    shortDescription:
      'Evaluation and treatment for depression, anxiety, and other mental health concerns. Referrals to specialists when needed.',
    shortDescriptionEs:
      'Evaluación y tratamiento de depresión, ansiedad y otros problemas de salud mental. Referidos a especialistas.',
    description: `Mental health is just as important as physical health, yet it is often under-addressed in primary care settings. At Health Watch Medical Clinic in Oklahoma City, we integrate mental health screening and basic treatment into our family medicine practice so that patients don't fall through the gaps.

Our providers screen for depression, anxiety, and other common mental health conditions using validated tools such as the PHQ-9 and GAD-7. If screening reveals a concern, we work with you to develop a care plan that may include counseling referrals, medication management, lifestyle modifications, and follow-up visits.

We understand that seeking mental health care can feel difficult. Our compassionate, bilingual team creates a safe and non-judgmental environment where patients feel comfortable discussing their emotional wellbeing.`,
    descriptionEs: `La salud mental es tan importante como la salud física, pero muchas veces no se atiende en la consulta médica general. En Health Watch Medical Clinic integramos la evaluación y el tratamiento inicial de salud mental dentro de nuestra práctica de medicina familiar en Oklahoma City, para que ningún paciente quede sin apoyo.

Nuestros proveedores evalúan depresión, ansiedad y otras condiciones comunes usando herramientas validadas como el PHQ-9 y el GAD-7. Si la evaluación muestra un problema, creamos junto con usted un plan de atención que puede incluir referencias a consejería, manejo de medicamentos, cambios de hábitos y visitas de seguimiento.

Entendemos que pedir ayuda para la salud mental puede ser difícil, y que en muchas familias todavía es un tema del que no se habla. Nuestro equipo bilingüe ofrece un espacio seguro, confidencial y sin juicios donde usted puede hablar de cómo se siente en su propio idioma.

**Si está en crisis,** llame al **988** (Línea de Prevención del Suicidio y Crisis, disponible en español) o acuda a la sala de emergencias más cercana. Nuestra clínica atiende situaciones que no son de emergencia.`,
    metaDescription:
      'Mental health screening in Oklahoma City, OK. Depression & anxiety evaluation, treatment & referrals. Medicaid accepted. Bilingual staff. (405) 949-1552.',
    metaDescriptionEs:
      'Evaluación de salud mental en Oklahoma City, OK. Depresión y ansiedad: diagnóstico, tratamiento y referidos. Personal bilingüe. Llame (405) 949-1552.',
    heroKeyword: 'mental health screening Oklahoma City',
    heroKeywordEs: 'salud mental en español Oklahoma City',
    icon: ICONS.brain,
    highlights: ['Confidential depression & anxiety screening', 'Medication management when appropriate', 'Referrals to specialists when needed'],
    highlightsEs: ['Evaluación confidencial de depresión y ansiedad', 'Manejo de medicamentos cuando es apropiado', 'Referidos a especialistas cuando se necesita'],
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
    faqsEs: [
      {
        q: '¿Tratan la depresión y la ansiedad?',
        a: 'Ofrecemos evaluación y tratamiento inicial para depresión y ansiedad leve a moderada, incluyendo manejo de medicamentos y referidos a consejeros y psiquiatras con licencia cuando se necesita atención especializada.',
      },
      {
        q: '¿SoonerCare cubre la evaluación de salud mental?',
        a: 'Sí. Las evaluaciones de salud mental y los servicios relacionados generalmente están cubiertos por SoonerCare (Medicaid de Oklahoma), Medicare y la mayoría de los seguros privados.',
      },
      {
        q: '¿Necesito un referido para ver a un especialista?',
        a: 'Depende de su plan de seguro. Algunos requieren un referido de su médico de cabecera para ver a un psiquiatra o consejero con licencia. Nosotros podemos darle ese referido.',
      },
      {
        q: '¿Qué hago si estoy en crisis?',
        a: 'Si está en una crisis de salud mental, llame al 988 (Línea de Prevención del Suicidio y Crisis), que atiende en español, o vaya a la sala de emergencias más cercana. Nuestra clínica atiende situaciones que no son de emergencia.',
      },
      {
        q: '¿Es confidencial mi consulta de salud mental?',
        a: 'Sí. Su información médica es confidencial y está protegida por la ley federal (HIPAA). Lo que hable con su proveedor no se comparte con su familia, su empleador ni con ninguna autoridad migratoria.',
      },
    ],
    relatedSlugs: ['womens-primary-health', 'blood-pressure-management', 'annual-sports-physicals'],
  },
  {
    slug: 'child-health-exams-immunizations',
    slugEs: 'examenes-infantiles-inmunizaciones',
    title: 'Child Health Exams & Immunizations',
    titleEs: 'Exámenes Infantiles e Inmunizaciones',
    shortDescription:
      'Well-child checkups, developmental screenings, and vaccinations for infants, children, and teenagers.',
    shortDescriptionEs:
      'Revisiones pediátricas, evaluaciones del desarrollo e inmunizaciones para bebés, niños y adolescentes.',
    description: `Keeping your child healthy starts with regular well-child visits. At Health Watch Medical Clinic, we provide comprehensive pediatric care for infants, children, and teenagers in Oklahoma City, including well-child exams, developmental milestone screenings, and immunizations on the CDC recommended schedule.

Our well-child visits include a head-to-toe physical exam, height and weight tracking, blood pressure screening, vision and hearing checks, and age-appropriate developmental screenings. We also discuss nutrition, safety, behavioral concerns, and answer your questions as a parent.

Vaccines are one of the most effective ways to protect your child's health. We administer all recommended childhood immunizations and can also review your child's vaccination history to ensure they are up to date.`,
    descriptionEs: `La salud de su hijo empieza con las revisiones periódicas. En Health Watch Medical Clinic ofrecemos atención pediátrica completa para bebés, niños y adolescentes en Oklahoma City: exámenes de niño sano, evaluaciones del desarrollo e inmunizaciones según el calendario recomendado por los CDC.

Cada visita de niño sano incluye examen físico de cabeza a pies, control de estatura y peso, revisión de presión arterial, pruebas de visión y audición, y evaluaciones del desarrollo según la edad. También hablamos de alimentación, seguridad y comportamiento, y respondemos sus preguntas como padre o madre.

Las vacunas son una de las formas más efectivas de proteger la salud de su hijo. Aplicamos todas las inmunizaciones infantiles recomendadas y revisamos su historial de vacunación para asegurar que esté al día.

**Vacunas requeridas para la escuela en Oklahoma:** DTaP, polio, MMR, varicela, hepatitis B y, para entrar a 7.º grado, la vacuna meningocócica. Si su hijo necesita el registro de vacunas para inscribirse en la escuela, podemos revisarlo y aplicar las que falten. Aceptamos SoonerCare.`,
    metaDescription:
      'Child health exams & immunizations in Oklahoma City, OK. Well-child checkups and vaccines for kids of all ages. SoonerCare accepted. (405) 949-1552.',
    metaDescriptionEs:
      'Exámenes de niño sano y vacunas en Oklahoma City, OK. Revisiones pediátricas e inmunizaciones para la escuela. Aceptamos SoonerCare. (405) 949-1552.',
    heroKeyword: 'child health exam immunizations Oklahoma City',
    heroKeywordEs: 'pediatra y vacunas para niños Oklahoma City',
    icon: ICONS.child,
    highlights: ['Well-child visits & developmental screenings', 'School & sports physicals', 'On-schedule immunizations'],
    highlightsEs: ['Visitas de niño sano y evaluación del desarrollo', 'Exámenes físicos para la escuela y el deporte', 'Vacunas al día según el calendario'],
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
    faqsEs: [
      {
        q: '¿Cada cuánto necesita mi hijo una visita de niño sano?',
        a: 'La Academia Americana de Pediatría recomienda visitas al nacer, a los 2–4 días, y al 1, 2, 4, 6, 9, 12, 15, 18, 24 y 30 meses; después, una vez al año desde los 3 hasta los 21 años.',
      },
      {
        q: '¿Aceptan SoonerCare para las visitas de niños?',
        a: 'Sí. SoonerCare (Medicaid de Oklahoma) cubre los exámenes de niño sano y las vacunas para los niños que califican. Aceptamos SoonerCare y la mayoría de los seguros.',
      },
      {
        q: '¿Hacen exámenes físicos para deportes escolares?',
        a: 'Sí. Realizamos los exámenes físicos previos a la participación que exigen los programas deportivos escolares. Con frecuencia hay citas disponibles el mismo día.',
      },
      {
        q: '¿Qué vacunas necesita mi hijo para la escuela?',
        a: 'Oklahoma exige DTaP, polio, MMR, varicela y hepatitis B para inscribirse en la escuela, además de la vacuna meningocócica para entrar a 7.º grado. Podemos revisar el registro de su hijo y aplicar las que falten.',
      },
      {
        q: '¿Necesito seguro o número de seguro social para llevar a mi hijo?',
        a: 'No. Atendemos a todos los niños sin importar su estatus migratorio, y aceptamos pacientes que pagan en efectivo además de SoonerCare y seguros privados.',
      },
    ],
    relatedSlugs: ['vaccines-immunizations', 'annual-sports-physicals', 'mental-health-screening'],
  },
  {
    slug: 'weight-loss-metabolic-services',
    slugEs: 'perdida-de-peso',
    title: 'Weight Loss & Metabolic Services',
    titleEs: 'Pérdida de Peso y Servicios Metabólicos',
    shortDescription:
      'Medical weight loss programs with provider-guided nutrition counseling, metabolic testing, and treatment plans.',
    shortDescriptionEs:
      'Programas médicos de pérdida de peso con asesoramiento nutricional, pruebas metabólicas y planes de tratamiento.',
    description: `Achieving and maintaining a healthy weight is one of the most impactful things you can do for your overall health. Excess weight is a major risk factor for type 2 diabetes, hypertension, heart disease, sleep apnea, joint pain, and many cancers. At Health Watch Medical Clinic, we offer medically supervised weight loss and metabolic services that go beyond generic dieting advice.

Our approach begins with a comprehensive metabolic evaluation, including bloodwork to assess thyroid function, blood sugar, cholesterol, and other markers that influence weight. Based on your results, we create a personalized plan that may include dietary modifications, physical activity guidance, behavioral strategies, and, when appropriate, prescription weight loss medications.

We treat weight as a medical issue, not a willpower issue — with the same evidence-based care and compassion we bring to all conditions.`,
    descriptionEs: `Alcanzar y mantener un peso saludable es una de las decisiones que más impacto tiene en su salud. El sobrepeso es un factor de riesgo importante para la diabetes tipo 2, la presión alta, las enfermedades del corazón, la apnea del sueño, el dolor en las articulaciones y varios tipos de cáncer. En Health Watch Medical Clinic ofrecemos un programa de pérdida de peso supervisado por un proveedor médico, no una dieta genérica.

Comenzamos con una **evaluación metabólica completa**, que incluye análisis de sangre para revisar la función de la tiroides, el azúcar, el colesterol y otros marcadores que influyen en el peso. Con esos resultados creamos un plan personalizado que puede incluir cambios en la alimentación, orientación sobre actividad física, estrategias de hábitos y, cuando es apropiado, medicamentos recetados para bajar de peso.

Tratamos el peso como una condición médica, no como una falta de voluntad. Muchas personas suben de peso por razones hormonales o metabólicas que solo se detectan con análisis de laboratorio.

Le atendemos con el mismo cuidado, respeto y evidencia médica que aplicamos a cualquier otra condición.`,
    metaDescription:
      'Medical weight loss clinic in Oklahoma City, OK. Metabolic testing, provider-guided programs & prescription options. Medicaid accepted. (405) 949-1552.',
    metaDescriptionEs:
      'Clínica médica para bajar de peso en Oklahoma City, OK. Pruebas metabólicas, plan personalizado y opciones con receta. Se habla español. (405) 949-1552.',
    heroKeyword: 'weight loss clinic Oklahoma City',
    heroKeywordEs: 'clínica para bajar de peso Oklahoma City',
    icon: ICONS.scale,
    highlights: ['Comprehensive metabolic evaluation', 'Medically guided treatment plans', 'Ongoing progress check-ins'],
    highlightsEs: ['Evaluación metabólica completa con análisis de sangre', 'Plan de tratamiento guiado por un proveedor médico', 'Seguimiento continuo de su progreso'],
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
    faqsEs: [
      {
        q: '¿El seguro cubre el programa médico de pérdida de peso?',
        a: 'La cobertura varía según el plan. Medicaid, SoonerCare y muchos seguros privados cubren la evaluación y el tratamiento relacionados con la obesidad. Podemos verificar sus beneficios antes de su visita.',
      },
      {
        q: '¿Recetan medicamentos para bajar de peso?',
        a: 'Cuando es apropiado, nuestros proveedores pueden recetar medicamentos aprobados por la FDA como parte de un plan integral. Se usan junto con cambios en la alimentación y el estilo de vida, no como solución única.',
      },
      {
        q: '¿En qué se diferencia de una dieta comercial?',
        a: 'El programa está supervisado por un proveedor con licencia que puede identificar factores metabólicos u hormonales que afectan su peso, ordenar e interpretar análisis de laboratorio, ajustar su plan con datos médicos y recetar medicamentos cuando se necesitan.',
      },
      {
        q: '¿Qué es una evaluación metabólica?',
        a: 'Es un análisis de sangre que mide las hormonas de la tiroides, la glucosa en ayunas, la insulina, el colesterol y otros marcadores. Ayuda a identificar condiciones médicas que estén contribuyendo al aumento de peso.',
      },
    ],
    relatedSlugs: ['diabetes-management', 'blood-pressure-management', 'annual-sports-physicals'],
  },
  {
    slug: 'annual-sports-physicals',
    slugEs: 'examenes-fisicos-deportivos',
    title: 'Annual & Sports Physicals',
    titleEs: 'Exámenes Físicos Anuales y Deportivos',
    shortDescription:
      'Annual wellness exams and pre-participation sports physicals for school, work, and insurance requirements.',
    shortDescriptionEs:
      'Exámenes anuales de bienestar y físicos pre-deportivos para escuela, trabajo y requisitos de seguros.',
    description: `An annual physical is the foundation of preventive healthcare. Regular wellness exams allow your provider to track changes in your health over time, catch conditions early when they are most treatable, and maintain an up-to-date health record.

At Health Watch Medical Clinic in Oklahoma City, we provide comprehensive annual physicals for adults and school-age children, including full physical exams, vital signs, blood pressure screening, laboratory work, and personalized health counseling.

We also perform pre-participation sports physicals (PPE) required for school athletic programs and recreational sports leagues. These exams evaluate cardiovascular fitness, musculoskeletal health, and any conditions that may affect safe participation in sports.

Same-day and walk-in appointments are frequently available, making it easy to fit your physical into your schedule.`,
    descriptionEs: `El examen físico anual es la base del cuidado preventivo. Las revisiones periódicas permiten a su proveedor seguir los cambios en su salud con el tiempo, detectar condiciones a tiempo —cuando son más fáciles de tratar— y mantener su expediente médico al día.

En Health Watch Medical Clinic realizamos exámenes físicos anuales completos para adultos y niños en edad escolar en Oklahoma City: examen físico integral, signos vitales, revisión de presión arterial, análisis de laboratorio y orientación de salud personalizada.

También hacemos los **exámenes físicos previos a la participación deportiva** que exigen los programas escolares y las ligas recreativas. Estos exámenes evalúan la condición cardiovascular, la salud musculoesquelética y cualquier condición que pueda afectar la participación segura en el deporte.

Con frecuencia tenemos disponibilidad el mismo día y atendemos sin cita previa, para que sea fácil hacerse su examen sin faltar al trabajo.`,
    metaDescription:
      'Annual & sports physicals in Oklahoma City, OK. School, work and wellness exams. Walk-ins welcome, SoonerCare accepted. Call (405) 949-1552.',
    metaDescriptionEs:
      'Exámenes físicos anuales y deportivos en Oklahoma City, OK. Físicos para la escuela y el trabajo, sin cita previa. Aceptamos SoonerCare. (405) 949-1552.',
    heroKeyword: 'sports physical Oklahoma City same-day',
    heroKeywordEs: 'examen físico deportivo Oklahoma City sin cita',
    icon: ICONS.clipboard,
    highlights: ['Full annual wellness exams', 'Pre-participation sports physicals', 'Same-day & walk-in availability'],
    highlightsEs: ['Examen anual de bienestar completo', 'Examen físico previo a la participación deportiva', 'Disponibilidad el mismo día y sin cita'],
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
    faqsEs: [
      {
        q: '¿Hacen exámenes deportivos el mismo día?',
        a: 'Sí. Con frecuencia tenemos disponibilidad el mismo día para exámenes físicos deportivos. Atendemos sin cita, y también puede llamarnos antes para confirmar disponibilidad.',
      },
      {
        q: '¿Qué incluye un examen físico anual?',
        a: 'Incluye un examen físico de cabeza a pies, signos vitales, presión arterial, estatura y peso, una revisión de sus medicamentos y preocupaciones de salud, y análisis de laboratorio si están indicados.',
      },
      {
        q: '¿Se requiere el examen físico para los deportes escolares en Oklahoma?',
        a: 'Sí. Las asociaciones atléticas de secundaria y preparatoria de Oklahoma exigen un examen físico previo a la participación antes de que el estudiante pueda entrar a un deporte organizado.',
      },
      {
        q: '¿Hacen exámenes físicos DOT/CDL para licencia comercial?',
        a: 'Llámenos al (405) 949-1552 para preguntar por los exámenes DOT/CDL y otros exámenes ocupacionales especializados.',
      },
    ],
    relatedSlugs: ['blood-pressure-management', 'child-health-exams-immunizations', 'vaccines-immunizations'],
  },
  {
    slug: 'vaccines-immunizations',
    slugEs: 'vacunas-inmunizaciones',
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
    descriptionEs: `Las vacunas son una de las herramientas más efectivas de la medicina preventiva. En Health Watch Medical Clinic aplicamos vacunas para niños y adultos siguiendo las recomendaciones más recientes de los CDC y el ACIP.

Ya sea que necesite su vacuna anual contra la influenza, ponerse al día con una vacuna que le faltó, vacunas para viajar o las inmunizaciones que pide la escuela, nuestro equipo puede revisar su historial y asegurarse de que esté al día.

**Vacunas para adultos:** influenza, COVID-19, neumococo, culebrilla (herpes zóster), Tdap/Td, hepatitis A y B, MMR, varicela y VPH. Para quienes viajan, le orientamos sobre las vacunas según su destino.

**Vacunas para niños:** seguimos el calendario de inmunización recomendado por los CDC, desde el nacimiento hasta la adolescencia.

La mayoría de las vacunas no tienen costo para pacientes con seguro. SoonerCare, Medicaid y Medicare también cubren las vacunas recomendadas.`,
    metaDescription:
      'Vaccines & immunizations in Oklahoma City, OK. Flu shots, COVID-19, shingles, travel vaccines & school immunizations. Walk-ins welcome. (405) 949-1552.',
    metaDescriptionEs:
      'Vacunas e inmunizaciones en Oklahoma City, OK. Influenza, COVID-19, culebrilla, viajes y vacunas escolares. Sin cita previa. Llame (405) 949-1552.',
    heroKeyword: 'immunizations Oklahoma City adults children',
    heroKeywordEs: 'vacunas Oklahoma City adultos y niños',
    icon: ICONS.beaker,
    highlights: ['Adult & childhood vaccines', 'Flu shots & travel immunizations', 'School-required immunization records'],
    highlightsEs: ['Vacunas para adultos y niños', 'Vacuna contra la influenza y vacunas para viajar', 'Registro de vacunas requerido por la escuela'],
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
    faqsEs: [
      {
        q: '¿Aplican la vacuna contra la influenza?',
        a: 'Sí. Aplicamos la vacuna anual contra la influenza para adultos y para niños desde los 6 meses de edad. No necesita cita — puede llegar directamente durante la temporada de influenza.',
      },
      {
        q: '¿Mi seguro cubre las vacunas?',
        a: 'La mayoría de las vacunas se cubren sin costo bajo la Ley de Cuidado de Salud Asequible para pacientes con seguro. Medicaid, SoonerCare y Medicare también cubren las vacunas recomendadas. Podemos verificar su cobertura antes de aplicarlas.',
      },
      {
        q: '¿Qué vacunas necesitan los adultos?',
        a: 'Los adultos deben ponerse la vacuna anual contra la influenza, mantener al día la Tdap (cada 10 años), considerar las vacunas contra COVID-19 y neumococo según su edad y riesgo, y preguntar por las de hepatitis, culebrilla y MMR según su historial.',
      },
      {
        q: '¿Qué vacunas exigen las escuelas de Oklahoma?',
        a: 'Oklahoma exige DTaP/DTP, polio, MMR, hepatitis B y varicela para los niños en edad escolar. La vacuna meningocócica se requiere para entrar a 7.º grado.',
      },
      {
        q: '¿Necesito traer mi tarjeta de vacunas?',
        a: 'Sí, tráigala si la tiene. Nos ayuda a revisar qué vacunas ya recibió y evitar aplicar dosis innecesarias. Si no la tiene, podemos ayudarle a reconstruir su historial.',
      },
    ],
    relatedSlugs: ['child-health-exams-immunizations', 'annual-sports-physicals', 'immigration-medical-exam'],
  },
  {
    slug: 'telemedicine',
    slugEs: 'telemedicina',
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
    descriptionEs: `Health Watch Medical Clinic ofrece consultas de telemedicina seguras y protegidas bajo HIPAA, para que pueda ver a un proveedor desde la comodidad de su casa o su trabajo. Nuestro servicio está disponible para pacientes en Oklahoma City y en todo el estado de Oklahoma.

La telemedicina es ideal para citas de seguimiento, renovación de recetas, control de condiciones crónicas como la diabetes y la presión alta, evaluación de enfermedades leves (resfriados, infecciones, salpullido), consultas de salud mental y revisión de resultados de laboratorio.

Las consultas por video se hacen a través de una plataforma segura en línea. Recibirá un enlace antes de su cita. Solo necesita un teléfono, una tableta o una computadora con cámara y micrófono.

Para agendar una consulta de telemedicina, llámenos al **(405) 949-1552** o use el portal del paciente. Con frecuencia hay consultas por video disponibles el mismo día. También puede recibir su consulta en español.`,
    metaDescription:
      'Telemedicine doctor in Oklahoma City, OK. Video visits for follow-ups, prescriptions & chronic care. SoonerCare & Medicaid accepted. (405) 949-1552.',
    metaDescriptionEs:
      'Telemedicina en Oklahoma City, OK. Consultas por video para seguimientos, recetas y control de enfermedades crónicas. En español. (405) 949-1552.',
    heroKeyword: 'telemedicine doctor Oklahoma City',
    heroKeywordEs: 'consulta médica por video en español Oklahoma City',
    icon: ICONS.video,
    highlights: ['Secure HIPAA-compliant video visits', 'Prescription refills & follow-ups', 'Often same-day availability'],
    highlightsEs: ['Consultas por video seguras y protegidas bajo HIPAA', 'Renovación de recetas y citas de seguimiento', 'Con frecuencia disponible el mismo día'],
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
    faqsEs: [
      {
        q: '¿Qué condiciones se pueden atender por telemedicina?',
        a: 'La telemedicina sirve para muchas condiciones: control de enfermedades crónicas (diabetes, presión alta), renovación de recetas, enfermedades leves (resfriado, gripe, infección urinaria, salpullido), consultas de salud mental y revisión de resultados de laboratorio. Las condiciones que requieren examen físico o procedimientos necesitan una visita en persona.',
      },
      {
        q: '¿El seguro cubre la telemedicina?',
        a: 'Sí. La mayoría de los seguros, incluyendo SoonerCare (Medicaid de Oklahoma) y Medicare, cubren las consultas de telemedicina al mismo costo que las visitas en persona. Consulte con su aseguradora los detalles de su cobertura.',
      },
      {
        q: '¿Qué necesito para mi cita de telemedicina?',
        a: 'Necesita un teléfono, tableta o computadora con cámara y micrófono que funcionen, una conexión de internet estable y un lugar privado y tranquilo. Le enviaremos un enlace seguro antes de su cita.',
      },
      {
        q: '¿Cómo agendo una consulta por video?',
        a: 'Llámenos al (405) 949-1552 para agendar su consulta de telemedicina. También puede solicitarla por el portal del paciente. Con frecuencia hay disponibilidad el mismo día.',
      },
      {
        q: '¿Puedo tener la consulta en español?',
        a: 'Sí. Nuestro equipo es bilingüe y puede atenderle completamente en español durante su consulta por video.',
      },
    ],
    // Each language has a standalone landing page for this keyword. Pointing the
    // service page at its same-language landing page keeps the two from competing
    // as duplicate content without orphaning the Spanish version.
    canonicalOverride: {
      en: 'https://healthwatchclinic.com/telemedicine/',
      es: 'https://healthwatchclinic.com/es/telemedicina/',
    },
    suppressFaqSchema: true,
    relatedSlugs: ['blood-pressure-management', 'diabetes-management', 'mental-health-screening'],
  },
]

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug)
}

export function getServiceByEsSlug(slugEs: string): Service | undefined {
  return SERVICES.find((s) => s.slugEs === slugEs)
}

export function getRelatedServices(slugs: string[]): Service[] {
  return slugs.map((slug) => SERVICES.find((s) => s.slug === slug)).filter(Boolean) as Service[]
}

/** Locale-aware accessors so components don't repeat `lang === 'es' ? … : …` */
export function serviceTitle(s: Service, lang: 'en' | 'es') {
  return lang === 'es' ? s.titleEs : s.title
}
export function serviceSummary(s: Service, lang: 'en' | 'es') {
  return lang === 'es' ? s.shortDescriptionEs : s.shortDescription
}
export function serviceHref(s: Service, lang: 'en' | 'es') {
  return lang === 'es' ? `/es/servicios/${s.slugEs}/` : `/services/${s.slug}/`
}
