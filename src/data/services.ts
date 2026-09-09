export interface ServiceFAQ {
  q: string
  a: string
  source?: {
    label: string
    href: string
  }
}

export interface ServiceAppointmentCta {
  label: string
  labelEs: string
  helper: string
  helperEs: string
  confirmationNotice: string
  confirmationNoticeEs: string
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
  /** Optional page-title override for a service with a distinct search intent. */
  seoTitle?: string
  seoTitleEs?: string
  heroKeyword: string
  heroKeywordEs: string
  icon: string
  highlights: string[]
  highlightsEs: string[]
  /** Optional checklist displayed after the service overview. */
  serviceItems?: string[]
  serviceItemsEs?: string[]
  /** Optional localized heading displayed before the service checklist. */
  serviceItemsHeading?: string
  serviceItemsHeadingEs?: string
  /** Optional service-specific replacement for the shared clinic benefits. */
  whyPoints?: string[]
  whyPointsEs?: string[]
  faqs: ServiceFAQ[]
  faqsEs: ServiceFAQ[]
  relatedSlugs: string[]
  /** Optional service-specific booking copy. The shared layout owns the secure destination. */
  appointmentCta?: ServiceAppointmentCta
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
      'Hypertension evaluation, monitoring, medication management, and lifestyle guidance. Call to confirm availability and visit requirements for free blood-pressure checks.',
    shortDescriptionEs:
      'Evaluación, monitoreo y manejo de la hipertensión con orientación personalizada. Llame para confirmar la disponibilidad y los requisitos de las revisiones de presión arterial sin costo.',
    description: `High blood pressure — also called hypertension — is one of the leading risk factors for heart disease, stroke, and kidney damage. Often called the "silent killer," it rarely causes symptoms until serious damage has already occurred. At Health Watch Medical Clinic, we provide blood pressure evaluation and management for adults and age-appropriate evaluation for children and adolescents in Oklahoma City.

Our approach begins with a thorough evaluation of factors that may contribute to high blood pressure, including medical history, medications, diet, physical activity, stress, and underlying health conditions. Call to confirm availability and visit requirements for free blood-pressure checks.

If medication is needed, our providers work with you to find the right prescription and monitor your response over time. We also provide guidance on nutrition, physical activity, weight management, sodium reduction, and other lifestyle changes that can help lower blood pressure and support your treatment plan.`,
    descriptionEs: `La presión arterial alta —también llamada hipertensión— es uno de los principales factores de riesgo de enfermedades del corazón, derrame cerebral y daño renal. Se le conoce como el "asesino silencioso" porque rara vez causa síntomas hasta que el daño ya está hecho. En Health Watch Medical Clinic ofrecemos evaluación y manejo de la presión arterial para adultos y una evaluación apropiada para la edad de niños y adolescentes en Oklahoma City.

Nuestro enfoque comienza con una evaluación completa de los factores que pueden contribuir a la presión arterial alta, incluidos los antecedentes médicos, los medicamentos, la alimentación, la actividad física, el estrés y las condiciones de salud subyacentes. Llame para confirmar la disponibilidad y los requisitos de la visita para las revisiones de presión arterial sin costo.

Si necesita medicamento, su proveedor trabajará con usted para encontrar el tratamiento adecuado y dar seguimiento a su respuesta con el tiempo. También ofrecemos orientación sobre nutrición, actividad física, control de peso, reducción de sodio y otros cambios de estilo de vida que pueden ayudar a bajar la presión arterial y apoyar su plan de tratamiento.

Participamos con SoonerCare y Medicare, aceptamos muchos planes comerciales y atendemos a pacientes de pago propio. Hay personal que habla español disponible.`,
    metaDescription:
      'Blood pressure and hypertension care in Oklahoma City, OK. Call to ask about free blood-pressure checks and coverage. (405) 949-1552.',
    metaDescriptionEs:
      'Control de presión arterial e hipertensión en Oklahoma City, OK. Llame para preguntar sobre revisiones de presión arterial y cobertura. (405) 949-1552.',
    heroKeyword: 'blood pressure management Oklahoma City',
    heroKeywordEs: 'control de presión arterial Oklahoma City',
    icon: ICONS.heart,
    highlights: ['Call to confirm free blood-pressure check availability and visit requirements', 'Personalized treatment & medication management', 'Lifestyle and diet guidance'],
    highlightsEs: ['Llame para confirmar la disponibilidad y los requisitos de las revisiones de presión sin costo', 'Tratamiento y manejo de medicamentos personalizado', 'Orientación sobre alimentación y estilo de vida'],
    faqs: [
      {
        q: 'Do you offer free blood pressure checks?',
        a: 'Call to confirm availability of free blood-pressure checks and whether an appointment, registration, insurance, or established-patient status is required before you visit.',
      },
      {
        q: 'What is considered high blood pressure?',
        a: 'For adults, normal blood pressure is below 120/80 mmHg. Blood pressure consistently measuring 130/80 mmHg or higher may indicate hypertension. Diagnosis is based on multiple properly obtained readings and may include home blood pressure monitoring.',
      },
      {
        q: 'Do I need insurance to be seen for blood pressure management?',
        a: 'Self-pay patients are welcome. We participate with SoonerCare and Medicare and accept many commercial plans; call to confirm whether we participate with your specific plan.',
      },
      {
        q: 'How often should I check my blood pressure?',
        a: 'Monitoring frequency depends on your blood pressure readings and treatment plan. Your provider may recommend checking at home more frequently when hypertension is newly diagnosed or medications are being adjusted. Bring a record of your readings to each appointment.',
      },
      {
        q: 'When is high blood pressure an emergency?',
        a: 'If your blood pressure is higher than 180/120 mmHg, wait at least one minute and check it again. If it remains very high, contact a healthcare professional immediately. Call 911 if it is accompanied by chest pain, shortness of breath, weakness, numbness, vision changes, difficulty speaking, or other concerning symptoms.',
      },
    ],
    faqsEs: [
      {
        q: '¿Ofrecen revisión de presión arterial sin costo?',
        a: 'Llame para confirmar la disponibilidad de revisiones de presión arterial sin costo y si se requiere cita, registro, seguro médico o ser paciente establecido antes de su visita.',
      },
      {
        q: '¿Qué se considera presión arterial alta?',
        a: 'Para los adultos, la presión arterial normal está por debajo de 120/80 mmHg. Una presión arterial que se mantiene en 130/80 mmHg o más puede indicar hipertensión. El diagnóstico se basa en múltiples mediciones obtenidas correctamente y puede incluir el monitoreo de la presión arterial en casa.',
      },
      {
        q: '¿Necesito seguro médico para que me atiendan?',
        a: 'Atendemos a pacientes de pago propio. Participamos con SoonerCare y Medicare y aceptamos muchos planes comerciales; llame para confirmar si participamos con su plan específico.',
      },
      {
        q: '¿Con qué frecuencia debo revisar mi presión arterial?',
        a: 'La frecuencia de monitoreo depende de sus lecturas de presión arterial y de su plan de tratamiento. Su proveedor puede recomendar que se la revise en casa con mayor frecuencia cuando la hipertensión se diagnostica recientemente o se están ajustando medicamentos. Lleve un registro de sus lecturas a cada cita.',
      },
      {
        q: '¿Cuándo es una emergencia la presión arterial alta?',
        a: 'Si su presión arterial es superior a 180/120 mmHg, espere al menos un minuto y vuelva a medirla. Si sigue muy alta, comuníquese de inmediato con un profesional de la salud. Llame al 911 si tiene dolor en el pecho, falta de aire, debilidad, entumecimiento, cambios en la visión, dificultad para hablar u otros síntomas preocupantes.',
      },
      {
        q: '¿Atienden en español?',
        a: 'Sí. Hay personal que habla español disponible para ayudarle a comunicarse durante su visita.',
      },
    ],
    appointmentCta: {
      label: 'Schedule a Blood Pressure Visit',
      labelEs: 'Programe una visita para la presión arterial',
      helper: 'Tell our staff you are requesting a blood pressure visit.',
      helperEs: 'Dígale a nuestro personal que desea solicitar una visita para la presión arterial.',
      confirmationNotice: 'Submitting this request does not confirm your appointment. Our staff will contact you to finalize scheduling.',
      confirmationNoticeEs: 'Enviar una solicitud no confirma su cita. Nuestro personal se comunicará con usted para finalizar la programación.',
    },
    relatedSlugs: ['diabetes-management', 'annual-sports-physicals', 'weight-loss-metabolic-services'],
  },
  {
    slug: 'diabetes-management',
    slugEs: 'manejo-diabetes',
    title: 'Diabetes Management',
    titleEs: 'Manejo de la Diabetes',
    shortDescription:
      'Personalized diabetes care with A1C testing, blood sugar monitoring, medication management, and practical lifestyle support.',
    shortDescriptionEs:
      'Atención personalizada para adultos con diabetes tipo 2, con pruebas de A1C, monitoreo de azúcar en la sangre, manejo de medicamentos y apoyo práctico para el estilo de vida.',
    description: `Diabetes is a chronic condition that can affect many parts of the body. Without appropriate treatment and monitoring, it can increase the risk of heart disease, kidney disease, vision problems, nerve damage, and other serious complications.

At Health Watch Medical Clinic, we provide personalized diabetes care for adults with Type 2 diabetes. We work with each patient to develop realistic treatment goals based on their health, medications, lifestyle, and risk of complications.

Our diabetes services may include:`,
    descriptionEs: `La diabetes es una condición crónica que puede afectar muchas partes del cuerpo. Sin el tratamiento y monitoreo adecuados, puede aumentar el riesgo de enfermedad cardíaca, enfermedad renal, problemas de visión, daño a los nervios y otras complicaciones graves.

En Health Watch Medical Clinic brindamos atención personalizada para adultos con diabetes tipo 2. Trabajamos con cada paciente para establecer metas realistas de tratamiento según su salud, medicamentos, estilo de vida y riesgo de complicaciones.

Nuestros servicios para la diabetes pueden incluir:`,
    metaDescription:
      'Type 2 diabetes care in Oklahoma City with A1C testing, blood sugar monitoring, medication management, and lifestyle support. Call (405) 949-1552.',
    metaDescriptionEs:
      'Atención para diabetes tipo 2 en Oklahoma City: prueba de A1C, monitoreo de glucosa, manejo de medicamentos y apoyo para el estilo de vida. Llame al (405) 949-1552.',
    heroKeyword: 'diabetes management clinic Oklahoma City',
    heroKeywordEs: 'clínica de diabetes Oklahoma City',
    icon: ICONS.chartBar,
    highlights: ['A1C testing and blood sugar monitoring', 'Type 2 diabetes management', 'Medication and lifestyle support'],
    highlightsEs: ['Prueba de A1C y monitoreo de azúcar en la sangre', 'Manejo de la diabetes tipo 2', 'Apoyo con medicamentos y estilo de vida'],
    serviceItems: [
      'A1C and blood glucose monitoring',
      'Review and adjustment of diabetes medications',
      'Nutrition, physical activity, and weight-management counseling',
      'Blood pressure and cholesterol management',
      'Kidney-function and urine protein testing',
      'Diabetic foot examinations',
      'Referrals for diabetic eye examinations',
      'Referrals to endocrinologists, dietitians, and diabetes educators when needed',
    ],
    serviceItemsEs: [
      'Monitoreo de A1C y glucosa en la sangre',
      'Revisión y ajuste de medicamentos para la diabetes',
      'Orientación sobre nutrición, actividad física y control de peso',
      'Manejo de la presión arterial y el colesterol',
      'Pruebas de función renal y proteína en la orina',
      'Exámenes de los pies relacionados con la diabetes',
      'Referencias para exámenes de la vista relacionados con la diabetes',
      'Referencias a endocrinólogos, nutricionistas y educadores en diabetes cuando se necesiten',
    ],
    whyPoints: [
      'Same-day appointments may be available',
      'Walk-ins welcome for many services',
      'Bilingual staff — se habla español',
      'SoonerCare, Medicare, Medicaid, and many private insurance plans accepted',
      'Self-pay options available',
      'Locally owned and independently operated in Oklahoma City',
    ],
    whyPointsEs: [
      'Es posible que haya citas disponibles el mismo día',
      'Se aceptan visitas sin cita para muchos servicios',
      'Personal bilingüe — se habla español',
      'Aceptamos SoonerCare, Medicare, Medicaid y muchos planes de seguro privados',
      'Opciones de pago propio disponibles',
      'Propiedad local y operación independiente en Oklahoma City',
    ],
    faqs: [
      {
        q: 'What is an A1C test?',
        a: 'An A1C test estimates your average blood sugar level over the previous two to three months. It helps your healthcare provider determine how well your diabetes treatment plan is working.',
        source: {
          label: 'American Diabetes Association',
          href: 'https://diabetes.org/about-diabetes/a1c',
        },
      },
      {
        q: 'What should my A1C level be?',
        a: 'For many adults with diabetes, an A1C goal of approximately 7% or lower may be recommended. However, the appropriate goal depends on your age, overall health, medications, risk of low blood sugar, and other individual factors. Your provider will help establish a goal that is appropriate for you.',
      },
      {
        q: 'How often should I have a diabetes follow-up visit?',
        a: 'Many patients with stable diabetes are seen every three to six months. More frequent visits may be recommended if you are newly diagnosed, your blood sugar is not controlled, your medication has changed, or you are experiencing symptoms.',
      },
      {
        q: 'Do you prescribe diabetes medications?',
        a: 'Yes. After evaluating your health history, examination findings, and laboratory results, your provider can prescribe or adjust appropriate diabetes medications. Treatment recommendations are individualized for each patient.',
      },
      {
        q: 'Do you accept insurance for diabetes care?',
        a: 'We accept SoonerCare, Medicare, Medicaid, and many private insurance plans. Self-pay appointments are also available. Please contact the clinic to confirm coverage under your specific plan.',
      },
    ],
    faqsEs: [
      {
        q: '¿Qué es la prueba de A1C?',
        a: 'La prueba de A1C estima su nivel promedio de azúcar en la sangre durante los últimos dos a tres meses. Ayuda a su proveedor de atención médica a determinar qué tan bien está funcionando su plan de tratamiento de la diabetes.',
        source: {
          label: 'American Diabetes Association',
          href: 'https://diabetes.org/about-diabetes/a1c',
        },
      },
      {
        q: '¿Cuál debe ser mi nivel de A1C?',
        a: 'Para muchos adultos con diabetes, se puede recomendar una meta de A1C de aproximadamente 7% o menos. Sin embargo, la meta adecuada depende de su edad, salud general, medicamentos, riesgo de azúcar baja y otros factores individuales. Su proveedor le ayudará a establecer una meta adecuada para usted.',
      },
      {
        q: '¿Con qué frecuencia debo tener una cita de seguimiento para la diabetes?',
        a: 'Muchos pacientes con diabetes estable reciben atención cada tres a seis meses. Es posible que se recomienden visitas más frecuentes si su diagnóstico es reciente, su azúcar no está controlada, su medicamento ha cambiado o está presentando síntomas.',
      },
      {
        q: '¿Recetan medicamentos para la diabetes?',
        a: 'Sí. Después de evaluar sus antecedentes de salud, los resultados del examen y los resultados de laboratorio, su proveedor puede recetar o ajustar los medicamentos apropiados para la diabetes. Las recomendaciones de tratamiento se individualizan para cada paciente.',
      },
      {
        q: '¿Aceptan seguro para la atención de diabetes?',
        a: 'Aceptamos SoonerCare, Medicare, Medicaid y muchos planes de seguro privados. También hay citas de pago propio disponibles. Comuníquese con la clínica para confirmar la cobertura de su plan específico.',
      },
    ],
    appointmentCta: {
      label: 'Book this service',
      labelEs: 'Programe este servicio',
      helper: 'Diabetes follow-up visits are typically scheduled and may include laboratory work. Same-day appointments may be available; call to confirm availability and visit requirements.',
      helperEs: 'Las citas de seguimiento para la diabetes generalmente se programan y pueden incluir análisis de laboratorio. Es posible que haya citas disponibles el mismo día; llame para confirmar la disponibilidad y los requisitos de la visita.',
      confirmationNotice: 'Submitting this request does not confirm your appointment. Our staff will contact you to finalize scheduling.',
      confirmationNoticeEs: 'Enviar una solicitud no confirma su cita. Nuestro personal se comunicará con usted para finalizar la programación.',
    },
    relatedSlugs: ['blood-pressure-management', 'weight-loss-metabolic-services', 'annual-sports-physicals'],
  },
  {
    slug: 'womens-primary-health',
    slugEs: 'salud-primaria-mujer',
    title: "Women's Health & Primary Care",
    titleEs: 'Salud de la Mujer y Atención Primaria',
    shortDescription:
      "Preventive and primary care services for women, including wellness examinations, contraceptive counseling, and age-appropriate screenings.",
    shortDescriptionEs:
      'Servicios preventivos y de atención primaria para la mujer, incluidos exámenes de bienestar, orientación anticonceptiva y pruebas de detección apropiadas para la edad.',
    description: `Health Watch Medical Clinic offers comprehensive primary healthcare services tailored specifically to the needs of women in Oklahoma City. Our experienced providers are committed to helping women of all ages maintain optimal health through preventive care, early detection, and compassionate treatment.

Our women's health services include annual wellness exams, cervical cancer screenings when due, contraceptive counseling, and age-appropriate preventive screenings.

We also screen for common women's health concerns such as osteoporosis, thyroid disorders, anemia, and hormonal imbalances. Spanish-speaking staff are available to help patients communicate during their visit.`,
    descriptionEs: `En Health Watch Medical Clinic ofrecemos atención primaria integral pensada específicamente para las necesidades de la mujer en Oklahoma City. Nuestras proveedoras acompañan a mujeres de todas las edades con cuidado preventivo, detección temprana y trato respetuoso.

Nuestros servicios incluyen el **examen anual de la mujer**, detección de cáncer cervical cuando corresponde, orientación anticonceptiva y pruebas preventivas apropiadas para la edad.

También hacemos pruebas para detectar condiciones frecuentes como osteoporosis, problemas de tiroides, anemia y desequilibrios hormonales.

Hay personal que habla español disponible para ayudarle a comunicarse durante su visita.`,
    metaDescription:
      "Women's health and primary care in Oklahoma City, OK. Wellness examinations, contraceptive counseling, and preventive screenings. (405) 949-1552.",
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
        a: 'Spanish-speaking staff are available to help patients communicate during their visit.',
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
        a: 'Hay personal que habla español disponible para ayudarle a comunicarse durante su visita.',
      },
      {
        q: '¿Necesito seguro médico para el examen anual?',
        a: 'Atendemos a pacientes de pago propio. Participamos con SoonerCare y Medicare y aceptamos muchos planes comerciales; llame para confirmar si participamos con su plan específico.',
      },
    ],
    relatedSlugs: ['mental-health-screening', 'annual-sports-physicals', 'vaccines-immunizations'],
  },
  {
    slug: 'immigration-medical-exam',
    slugEs: 'examen-medico-inmigracion',
    title: 'Immigration Medical Exam (Form I-693)',
    titleEs: 'Examen Médico de Inmigración (Formulario I-693)',
    shortDescription:
      'Immigration medical examinations performed by a USCIS-designated civil surgeon for applicants seeking adjustment of status to lawful permanent residence.',
    shortDescriptionEs:
      'Exámenes médicos de inmigración realizados por un cirujano civil designado por USCIS para solicitantes de ajuste de estatus a residencia permanente legal.',
    description: `Health Watch Medical Clinic provides USCIS immigration medical examinations in Oklahoma City. Our USCIS-designated civil surgeon completes Form I-693 for applicants who are required to undergo a medical examination as part of the adjustment-of-status process.

The examination includes a review of your medical and vaccination history, a physical examination, tuberculosis (TB) screening, required laboratory testing, and the required evaluation of your physical and mental health history and medical conditions identified in the CDC Technical Instructions for Civil Surgeons.

Vaccination requirements depend on your age, documented vaccination history, evidence of immunity, medical contraindications, and the time of year. You may not need every vaccine listed by the CDC. Please bring all available written vaccination records so we can determine which vaccinations, if any, are still required. The CDC requires at least one dose of each applicable age-appropriate vaccine when an applicant is not already up to date, unless an appropriate waiver reason applies.

Once the examination and all required follow-up items are complete, the civil surgeon will provide your completed Form I-693 in a sealed envelope for submission to USCIS. Do not open the sealed envelope. You will also receive a copy for your records.

Insurance coverage varies. Immigration medical examinations are generally self-pay. Laboratory testing, vaccinations, and imaging may involve additional charges.

Contact the clinic before your visit if your vaccination records are in a language other than English, as a reliable English translation may be required.`,
    descriptionEs: `Health Watch Medical Clinic realiza exámenes médicos de inmigración de USCIS en Oklahoma City. Nuestro cirujano civil designado por USCIS completa el Formulario I-693 para los solicitantes que deben someterse a un examen médico como parte del proceso de ajuste de estatus.

El examen incluye la revisión de sus antecedentes médicos y de vacunación, un examen físico, pruebas de tuberculosis (TB), análisis de laboratorio requeridos y la evaluación requerida de sus antecedentes de salud física y mental, así como de las condiciones médicas identificadas en las Instrucciones Técnicas de los CDC para Cirujanos Civiles.

Los requisitos de vacunación dependen de su edad, historial de vacunación documentado, evidencia de inmunidad, contraindicaciones médicas y la época del año. Es posible que no necesite todas las vacunas enumeradas por los CDC. Traiga todos los registros escritos de vacunación que tenga para que podamos determinar qué vacunas, si alguna, aún se requieren. Los CDC requieren al menos una dosis de cada vacuna aplicable y apropiada para la edad cuando el solicitante no está al día, a menos que se aplique una razón de exención adecuada.

Una vez que se completen el examen y todos los elementos de seguimiento requeridos, el cirujano civil le entregará el Formulario I-693 completo en un sobre sellado para presentarlo a USCIS. No abra el sobre sellado. También recibirá una copia para sus registros.

La cobertura de seguro varía. Los exámenes médicos de inmigración generalmente son de pago propio. Los análisis de laboratorio, las vacunas y las imágenes pueden implicar cargos adicionales.

Comuníquese con la clínica antes de su visita si sus registros de vacunación están en un idioma distinto del inglés, ya que puede requerirse una traducción confiable al inglés.`,
    metaDescription:
      'Immigration medical exams and Form I-693 completion in Oklahoma City by a USCIS-designated civil surgeon. Spanish-speaking staff. Call (405) 949-1552.',
    metaDescriptionEs:
      'Exámenes médicos de inmigración y Formulario I-693 en Oklahoma City con un cirujano civil designado por USCIS. Se habla español. Llame (405) 949-1552.',
    heroKeyword: 'USCIS I-693 civil surgeon Oklahoma City',
    heroKeywordEs: 'examen médico de inmigración Oklahoma City',
    icon: ICONS.documentText,
    highlights: [
      'Complete immigration medical examination',
      'Required laboratory testing and TB screening',
      'Review of age-appropriate vaccination requirements',
      'Accurate completion of Form I-693',
    ],
    highlightsEs: [
      'Examen médico de inmigración completo',
      'Análisis de laboratorio requeridos y pruebas de TB',
      'Revisión de requisitos de vacunación apropiados para la edad',
      'Llenado preciso del Formulario I-693',
    ],
    serviceItemsHeading: 'What to bring',
    serviceItemsHeadingEs: 'Qué debe traer',
    serviceItems: [
      'Government-issued photo identification',
      'All available vaccination records',
      'Relevant medical records, including records of previous tuberculosis testing or treatment',
      'A list of current medications',
      'Any immigration documents requested by the clinic',
      'Payment for the examination and any additional services',
    ],
    serviceItemsEs: [
      'Identificación oficial con foto',
      'Todos los registros de vacunación disponibles',
      'Registros médicos relevantes, incluidos los registros de pruebas o tratamiento previos de tuberculosis',
      'Una lista de los medicamentos actuales',
      'Cualquier documento de inmigración solicitado por la clínica',
      'Pago por el examen y cualquier servicio adicional',
    ],
    whyPoints: [
      'USCIS-designated civil surgeon',
      'Same-day appointments frequently available',
      'Experienced assistance with the I-693 process',
      'English- and Spanish-speaking staff',
      'Convenient Oklahoma City location',
      'Vaccinations available when medically appropriate',
    ],
    whyPointsEs: [
      'Cirujano civil designado por USCIS',
      'Con frecuencia hay citas disponibles el mismo día',
      'Asistencia con experiencia en el proceso del I-693',
      'Personal que habla inglés y español',
      'Ubicación conveniente en Oklahoma City',
      'Vacunas disponibles cuando sean médicamente apropiadas',
    ],
    faqs: [
      {
        q: 'What is Form I-693?',
        a: 'Form I-693 is the Report of Immigration Medical Examination and Vaccination Record. It is used to document the required medical examination for certain applicants seeking adjustment of status to lawful permanent residence. It must be completed and signed by a USCIS-designated civil surgeon.',
      },
      {
        q: 'Is Form I-693 required for a citizenship application?',
        a: 'Form I-693 is generally associated with adjustment of status to lawful permanent residence and is not routinely required for naturalization or citizenship applications.',
      },
      {
        q: 'How long does the immigration medical exam take?',
        a: 'The initial appointment usually takes approximately 45–90 minutes. However, the form may not be completed during the first visit because the clinic must receive required laboratory results. Additional time may also be needed if you require vaccinations, a chest X-ray, medical records, treatment, or another evaluation.',
      },
      {
        q: 'What vaccinations are required for the immigration medical exam?',
        a: 'Requirements depend on your age, vaccination history, documented immunity, medical circumstances, and the season. Vaccines may include Tdap or Td, polio, MMR, hepatitis B, varicella, influenza, and other age-appropriate vaccines listed in the CDC Technical Instructions. Hepatitis A, for example, is generally an immigration requirement only through age 18—not for every adult applicant.',
        source: {
          label: 'CDC civil-surgeon vaccination guidance',
          href: 'https://www.cdc.gov/immigrant-refugee-health/hcp/civil-surgeons/vaccination.html',
        },
      },
      {
        q: 'Do I need to complete an entire vaccine series before my I-693 can be signed?',
        a: 'Usually not. If a required vaccine series cannot be completed during the examination period, the civil surgeon may administer the dose currently due and document the appropriate reason why the remaining doses were not given.',
      },
      {
        q: 'What if my tuberculosis blood test is positive?',
        a: 'A positive TB blood test does not automatically mean you have active tuberculosis. A chest X-ray and, in some cases, additional testing will be required before the examination can be completed.',
        source: {
          label: 'CDC TB instructions for civil surgeons',
          href: 'https://www.cdc.gov/immigrant-refugee-health/hcp/civil-surgeons/tuberculosis.html',
        },
      },
      {
        q: 'Do you have Spanish-speaking staff for immigration exams?',
        a: 'Yes. Spanish-speaking staff are available to help applicants understand the clinic’s examination process and required follow-up steps.',
      },
      {
        q: 'When do I submit the I-693 to USCIS?',
        a: 'USCIS requires certain applicants filing Form I-485 to include Form I-693 with their application; otherwise, the Form I-485 may be rejected. Filing requirements can depend on the applicant’s circumstances, so applicants should follow the current USCIS form instructions or advice from their authorized immigration representative.',
        source: {
          label: 'Current USCIS Form I-485 instructions',
          href: 'https://www.uscis.gov/i-485',
        },
      },
    ],
    faqsEs: [
      {
        q: '¿Qué es el Formulario I-693?',
        a: 'El Formulario I-693 es el Informe de Examen Médico de Inmigración y Registro de Vacunación. Se usa para documentar el examen médico requerido para ciertos solicitantes que buscan ajuste de estatus a residencia permanente legal. Debe ser completado y firmado por un cirujano civil designado por USCIS.',
      },
      {
        q: '¿Se requiere el Formulario I-693 para una solicitud de ciudadanía?',
        a: 'El Formulario I-693 generalmente se relaciona con el ajuste de estatus a residencia permanente legal y no se requiere habitualmente para solicitudes de naturalización o ciudadanía.',
      },
      {
        q: '¿Cuánto tiempo dura el examen médico de inmigración?',
        a: 'La cita inicial generalmente toma aproximadamente 45–90 minutos. Sin embargo, es posible que el formulario no se complete durante la primera visita porque la clínica debe recibir los resultados de laboratorio requeridos. También puede necesitarse más tiempo si requiere vacunas, una radiografía de tórax, registros médicos, tratamiento u otra evaluación.',
      },
      {
        q: '¿Qué vacunas se requieren para el examen de inmigración?',
        a: 'Los requisitos dependen de su edad, historial de vacunación, inmunidad documentada, circunstancias médicas y la temporada. Las vacunas pueden incluir Tdap o Td, polio, MMR, hepatitis B, varicela, influenza y otras vacunas apropiadas para la edad incluidas en las Instrucciones Técnicas de los CDC. La hepatitis A, por ejemplo, generalmente es un requisito de inmigración solo hasta los 18 años, no para todos los solicitantes adultos.',
        source: {
          label: 'Guía de vacunación de los CDC para cirujanos civiles',
          href: 'https://www.cdc.gov/immigrant-refugee-health/hcp/civil-surgeons/vaccination.html',
        },
      },
      {
        q: '¿Debo completar una serie completa de vacunas antes de que puedan firmar mi I-693?',
        a: 'Por lo general, no. Si una serie de vacunas requerida no puede completarse durante el período del examen, el cirujano civil puede administrar la dosis que corresponde en ese momento y documentar la razón apropiada por la que no se administraron las dosis restantes.',
      },
      {
        q: '¿Qué sucede si mi análisis de sangre para tuberculosis da positivo?',
        a: 'Un análisis de sangre positivo para TB no significa automáticamente que tenga tuberculosis activa. Se requerirá una radiografía de tórax y, en algunos casos, pruebas adicionales antes de que pueda completarse el examen.',
        source: {
          label: 'Instrucciones de los CDC sobre TB para cirujanos civiles',
          href: 'https://www.cdc.gov/immigrant-refugee-health/hcp/civil-surgeons/tuberculosis.html',
        },
      },
      {
        q: '¿Necesito hablar inglés para hacer mi examen?',
        a: 'No. Hay personal que habla español disponible para ayudar a los solicitantes a entender el proceso de examen de la clínica y los pasos de seguimiento requeridos.',
      },
      {
        q: '¿Cuándo debo entregar el I-693 a USCIS?',
        a: 'USCIS requiere que ciertos solicitantes que presentan el Formulario I-485 incluyan el Formulario I-693 con su solicitud; de lo contrario, el Formulario I-485 puede ser rechazado. Los requisitos de presentación pueden depender de las circunstancias del solicitante, por lo que debe seguir las instrucciones vigentes de los formularios de USCIS o el consejo de su representante de inmigración autorizado.',
        source: {
          label: 'Instrucciones vigentes de USCIS para el Formulario I-485',
          href: 'https://www.uscis.gov/i-485',
        },
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
      'Screening for depression, anxiety, and other behavioral health concerns, with referrals when additional evaluation or treatment is needed.',
    shortDescriptionEs:
      'Detección de depresión, ansiedad y otros problemas de salud conductual, con referencias cuando se necesite evaluación o tratamiento adicional.',
    description: `Mental health is an important part of overall health. At Health Watch Medical Clinic in Oklahoma City, we screen for depression, anxiety, and other behavioral health concerns and provide referrals when additional evaluation or treatment is needed.

Our providers use screening tools such as the PHQ-9 and GAD-7. If screening identifies a concern, we can help connect you with appropriate additional evaluation or treatment.

We understand that seeking mental health care can feel difficult. Spanish-speaking staff are available to help patients communicate during their visit.`,
    descriptionEs: `La salud mental es una parte importante de la salud general. En Health Watch Medical Clinic detectamos depresión, ansiedad y otros problemas de salud conductual, y ofrecemos referencias cuando se necesite evaluación o tratamiento adicional.

Nuestros proveedores usan herramientas de detección como el PHQ-9 y el GAD-7. Si la detección identifica una preocupación, podemos ayudarle a conectarse con evaluación o tratamiento adicional apropiado.

Entendemos que pedir ayuda para la salud mental puede ser difícil. Hay personal que habla español disponible para ayudarle a comunicarse durante su visita.

**Si está en crisis,** llame al **988** (Línea de Prevención del Suicidio y Crisis, disponible en español) o acuda a la sala de emergencias más cercana. Nuestra clínica atiende situaciones que no son de emergencia.`,
    metaDescription:
      'Mental health screening in Oklahoma City, OK. Screening for depression and anxiety with referrals when needed. (405) 949-1552.',
    metaDescriptionEs:
      'Detección de salud mental en Oklahoma City, OK. Detección de depresión y ansiedad con referencias cuando se necesiten. Llame al (405) 949-1552.',
    heroKeyword: 'mental health screening Oklahoma City',
    heroKeywordEs: 'salud mental en español Oklahoma City',
    icon: ICONS.brain,
    highlights: ['Depression & anxiety screening', 'Behavioral-health concern screening', 'Referrals when additional care is needed'],
    highlightsEs: ['Detección de depresión y ansiedad', 'Detección de problemas de salud conductual', 'Referencias cuando se necesita atención adicional'],
    faqs: [
      {
        q: 'Do you provide mental health treatment?',
        a: 'We screen for depression, anxiety, and other behavioral health concerns and provide referrals when additional evaluation or treatment is needed.',
      },
      {
        q: 'Is mental health screening covered by SoonerCare?',
        a: 'Coverage varies by plan. Call to confirm whether the clinic participates with your specific plan and contact your insurer to confirm coverage.',
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
        q: '¿Ofrecen tratamiento de salud mental?',
        a: 'Detectamos depresión, ansiedad y otros problemas de salud conductual, y ofrecemos referencias cuando se necesite evaluación o tratamiento adicional.',
      },
      {
        q: '¿SoonerCare cubre la evaluación de salud mental?',
        a: 'La cobertura varía según el plan. Llame para confirmar si la clínica participa con su plan específico y contacte a su aseguradora para confirmar la cobertura.',
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
      'Well-child checkups, developmental screenings, and age-appropriate immunizations, subject to availability.',
    shortDescriptionEs:
      'Revisiones pediátricas, evaluaciones del desarrollo e inmunizaciones apropiadas para la edad, sujetas a disponibilidad.',
    description: `Keeping your child healthy starts with regular well-child visits. At Health Watch Medical Clinic, we provide pediatric care for infants, children, and teenagers in Oklahoma City, including well-child exams, developmental milestone screenings, and review of the CDC recommended immunization schedule.

Our well-child visits include a head-to-toe physical exam, height and weight tracking, blood pressure screening, vision and hearing checks, and age-appropriate developmental screenings. We also discuss nutrition, safety, behavioral concerns, and answer your questions as a parent.

Vaccines are one way to protect your child's health. Age-appropriate immunizations are subject to availability, and we can review your child's vaccination history.`,
    descriptionEs: `La salud de su hijo empieza con las revisiones periódicas. En Health Watch Medical Clinic ofrecemos atención pediátrica completa para bebés, niños y adolescentes en Oklahoma City: exámenes de niño sano, evaluaciones del desarrollo e inmunizaciones según el calendario recomendado por los CDC.

Cada visita de niño sano incluye examen físico de cabeza a pies, control de estatura y peso, revisión de presión arterial, pruebas de visión y audición, y evaluaciones del desarrollo según la edad. También hablamos de alimentación, seguridad y comportamiento, y respondemos sus preguntas como padre o madre.

Las vacunas son una forma de proteger la salud de su hijo. Las inmunizaciones apropiadas para la edad están sujetas a disponibilidad, y podemos revisar su historial de vacunación.

Los requisitos de vacunación de la escuela pueden cambiar. Podemos revisar el registro de su hijo y hablar sobre las vacunas que pueden estar disponibles. La cobertura y la responsabilidad del paciente varían según el plan.`,
    metaDescription:
      'Child health exams & immunizations in Oklahoma City, OK. Well-child checkups and vaccines for kids of all ages. SoonerCare accepted. (405) 949-1552.',
    metaDescriptionEs:
      'Exámenes de niño sano y vacunas en Oklahoma City, OK. Revisiones pediátricas e inmunizaciones para la escuela. Aceptamos SoonerCare. (405) 949-1552.',
    heroKeyword: 'child health exam immunizations Oklahoma City',
    heroKeywordEs: 'pediatra y vacunas para niños Oklahoma City',
    icon: ICONS.child,
    highlights: ['Well-child visits & developmental screenings', 'School & sports physicals', 'Immunizations subject to availability'],
    highlightsEs: ['Visitas de niño sano y evaluación del desarrollo', 'Exámenes físicos para la escuela y el deporte', 'Inmunizaciones sujetas a disponibilidad'],
    faqs: [
      {
        q: 'How often does my child need a well-child visit?',
        a: 'The AAP recommends well-child visits at birth, 2–4 days, 1 month, 2 months, 4 months, 6 months, 9 months, 12 months, 15 months, 18 months, 24 months, 30 months, then yearly from ages 3 through 21.',
      },
      {
        q: 'Do you accept SoonerCare for children\'s visits?',
        a: 'SoonerCare coverage for eligible children depends on the service and plan. Call to confirm participation and contact your insurer to confirm coverage.',
      },
      {
        q: 'Do you offer sports physicals for school athletics?',
        a: 'We provide pre-participation sports physicals for school athletic programs. Same-day appointments may be available; call to confirm.',
      },
      {
        q: 'What vaccines does my child need for school?',
        a: 'School vaccination requirements can change. Confirm current requirements with your school or the appropriate state resource; we can review your child\'s records and discuss vaccines that may be available.',
      },
    ],
    faqsEs: [
      {
        q: '¿Cada cuánto necesita mi hijo una visita de niño sano?',
        a: 'La Academia Americana de Pediatría recomienda visitas al nacer, a los 2–4 días, y al 1, 2, 4, 6, 9, 12, 15, 18, 24 y 30 meses; después, una vez al año desde los 3 hasta los 21 años.',
      },
      {
        q: '¿Aceptan SoonerCare para las visitas de niños?',
        a: 'La cobertura de SoonerCare para niños elegibles depende del servicio y del plan. Llame para confirmar participación y contacte a su aseguradora para confirmar cobertura.',
      },
      {
        q: '¿Hacen exámenes físicos para deportes escolares?',
        a: 'Realizamos exámenes físicos previos a la participación para programas deportivos escolares. Es posible que haya citas el mismo día; llame para confirmar.',
      },
      {
        q: '¿Qué vacunas necesita mi hijo para la escuela?',
        a: 'Los requisitos de vacunación escolar pueden cambiar. Confirme los requisitos vigentes con la escuela o el recurso estatal correspondiente; podemos revisar el registro de su hijo y hablar sobre las vacunas que pueden estar disponibles.',
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
      'Provider-guided weight-management services that may include nutrition and physical-activity counseling, medical evaluation, laboratory testing, and individualized treatment when appropriate.',
    shortDescriptionEs:
      'Servicios de control de peso guiados por proveedores que pueden incluir asesoramiento sobre nutrición y actividad física, evaluación médica, pruebas de laboratorio y tratamiento individualizado cuando sea apropiado.',
    description: `Excess weight may increase the risk of conditions such as type 2 diabetes, high blood pressure, heart disease, sleep apnea, joint problems, and certain cancers.

A metabolic evaluation may include a review of your medical history, medications, weight-related risk factors, and laboratory testing such as blood glucose, A1C, cholesterol, thyroid testing, or other studies when medically indicated.

When clinically appropriate, a provider may discuss FDA-approved weight-management medications as one part of a comprehensive treatment plan. Prescribing decisions are based on the patient's medical history, examination, treatment goals, contraindications, and applicable clinical criteria. Medication availability and insurance coverage are not guaranteed.

Individual results vary. Weight-management treatment recommendations and eligibility for prescription medication are determined after a clinical evaluation.`,
    descriptionEs: `El exceso de peso puede aumentar el riesgo de condiciones como diabetes tipo 2, presión arterial alta, enfermedades del corazón, apnea del sueño, problemas en las articulaciones y ciertos tipos de cáncer.

Una evaluación metabólica puede incluir la revisión de su historial médico, medicamentos, factores de riesgo relacionados con el peso y pruebas de laboratorio como glucosa en sangre, A1C, colesterol, pruebas de tiroides u otros estudios cuando sean médicamente indicados.

Cuando sea clínicamente apropiado, un proveedor puede hablar sobre medicamentos para el control de peso aprobados por la FDA como una parte de un plan integral de tratamiento. Las decisiones de prescripción se basan en el historial médico, la evaluación, los objetivos de tratamiento, las contraindicaciones y los criterios clínicos aplicables. La disponibilidad de medicamentos y la cobertura del seguro no están garantizadas.

Los resultados individuales varían. Las recomendaciones de tratamiento para el control de peso y la elegibilidad para medicamentos recetados se determinan después de una evaluación clínica.`,
    metaDescription:
      'Medical weight management in Oklahoma City. Provider-guided evaluation, laboratory testing, and individualized treatment when appropriate. Call (405) 949-1552.',
    metaDescriptionEs:
      'Control médico de peso en Oklahoma City. Evaluación guiada por proveedores, pruebas de laboratorio y tratamiento individualizado cuando sea apropiado. Llame al (405) 949-1552.',
    seoTitle: 'Medical Weight Management in Oklahoma City | Health Watch Medical Clinic',
    seoTitleEs: 'Control Médico de Peso en Oklahoma City | Health Watch Medical Clinic',
    heroKeyword: 'weight loss clinic Oklahoma City',
    heroKeywordEs: 'clínica para bajar de peso Oklahoma City',
    icon: ICONS.scale,
    highlights: ['Medical evaluation and testing when indicated', 'Individualized treatment when appropriate', 'Ongoing progress support'],
    highlightsEs: ['Evaluación médica y pruebas cuando se indiquen', 'Tratamiento individualizado cuando sea apropiado', 'Apoyo continuo para el progreso'],
    faqs: [
      {
        q: 'Is medical weight loss covered by insurance?',
        a: 'Coverage for weight-management services, laboratory testing, and medications varies by insurance plan. Please contact your insurance company to confirm your benefits. Our staff can also assist with benefit verification when available.',
      },
      {
        q: 'Do you prescribe weight loss medications?',
        a: 'When clinically appropriate, a provider may discuss FDA-approved weight-management medications as one part of a comprehensive treatment plan. Prescribing decisions are based on the patient\'s medical history, examination, treatment goals, contraindications, and applicable clinical criteria. Insurance coverage and availability of weight-loss medications vary. Prior authorization may be required, and coverage is not guaranteed.',
      },
      {
        q: 'How is medical weight loss different from a diet program?',
        a: 'Weight-management services may include a medical evaluation, counseling about nutrition and physical activity, laboratory testing when indicated, and individualized treatment recommendations. Medication is considered only when clinically appropriate.',
      },
      {
        q: 'What is a metabolic evaluation?',
        a: 'A metabolic evaluation may include a review of your medical history, medications, weight-related risk factors, and laboratory testing such as blood glucose, A1C, cholesterol, thyroid testing, or other studies when medically indicated.',
      },
    ],
    faqsEs: [
      {
        q: '¿El seguro cubre el programa médico de pérdida de peso?',
        a: 'La cobertura de los servicios de control de peso, las pruebas de laboratorio y los medicamentos varía según el plan de seguro. Comuníquese con su compañía de seguros para confirmar sus beneficios. Nuestro personal también puede ayudar con la verificación de beneficios cuando esté disponible.',
      },
      {
        q: '¿Recetan medicamentos para bajar de peso?',
        a: 'Cuando sea clínicamente apropiado, un proveedor puede hablar sobre medicamentos para el control de peso aprobados por la FDA como parte de un plan integral de tratamiento. Las decisiones de prescripción se basan en el historial médico, la evaluación, los objetivos de tratamiento, las contraindicaciones y los criterios clínicos aplicables. La cobertura y disponibilidad de los medicamentos para bajar de peso varían. Es posible que se requiera autorización previa y la cobertura no está garantizada.',
      },
      {
        q: '¿En qué se diferencia de una dieta comercial?',
        a: 'Los servicios de control de peso pueden incluir una evaluación médica, orientación sobre nutrición y actividad física, pruebas de laboratorio cuando se indiquen y recomendaciones de tratamiento individualizadas. Los medicamentos se consideran solo cuando son clínicamente apropiados.',
      },
      {
        q: '¿Qué es una evaluación metabólica?',
        a: 'Una evaluación metabólica puede incluir la revisión de su historial médico, medicamentos, factores de riesgo relacionados con el peso y pruebas de laboratorio como glucosa en sangre, A1C, colesterol, pruebas de tiroides u otros estudios cuando sean médicamente indicados.',
      },
    ],
    relatedSlugs: ['diabetes-management', 'blood-pressure-management', 'annual-sports-physicals'],
    appointmentCta: {
      label: 'Request an Appointment',
      labelEs: 'Solicitar una cita',
      helper: 'Tell our staff you are requesting a Weight Loss & Metabolic Services visit.',
      helperEs: 'Dígale a nuestro personal que está solicitando una visita de Pérdida de Peso y Servicios Metabólicos.',
      confirmationNotice: 'Submitting this request does not confirm your appointment. Our staff will contact you to finalize scheduling.',
      confirmationNoticeEs: 'Enviar una solicitud no confirma su cita. Nuestro personal se comunicará con usted para finalizar la programación.',
    },
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

Same-day appointments may be available for appropriate physicals. Walk-ins are welcome during regular business hours; call to confirm availability.`,
    descriptionEs: `El examen físico anual es la base del cuidado preventivo. Las revisiones periódicas permiten a su proveedor seguir los cambios en su salud con el tiempo, detectar condiciones a tiempo —cuando son más fáciles de tratar— y mantener su expediente médico al día.

En Health Watch Medical Clinic realizamos exámenes físicos anuales completos para adultos y niños en edad escolar en Oklahoma City: examen físico integral, signos vitales, revisión de presión arterial, análisis de laboratorio y orientación de salud personalizada.

También hacemos los **exámenes físicos previos a la participación deportiva** que exigen los programas escolares y las ligas recreativas. Estos exámenes evalúan la condición cardiovascular, la salud musculoesquelética y cualquier condición que pueda afectar la participación segura en el deporte.

Es posible que haya citas el mismo día para exámenes apropiados. Los pacientes sin cita son bienvenidos durante el horario regular; llame para confirmar disponibilidad.`,
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
        a: 'Same-day appointments may be available for sports physicals. Walk-ins are welcome during regular business hours; call to confirm availability.',
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
        a: 'Es posible que haya citas el mismo día para exámenes físicos deportivos. Los pacientes sin cita son bienvenidos durante el horario regular; llame para confirmar disponibilidad.',
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
      'Adult and childhood immunization services; vaccine type and availability should be confirmed before your visit.',
    shortDescriptionEs:
      'Servicios de inmunización para adultos y niños; confirme el tipo de vacuna y la disponibilidad antes de su visita.',
    description: `Vaccines are an important part of preventive care. Health Watch Medical Clinic can review immunization records and discuss vaccines that may be appropriate for children and adults.

Vaccine type, supply, age eligibility, and clinical appropriateness vary. Call before your visit to confirm availability, including for seasonal, travel, or school-related needs.

The clinic can review the CDC-recommended schedule with you. School and travel requirements can change, so confirm current requirements with the school, destination authority, or appropriate public-health resource.

Coverage and patient responsibility vary by plan. Contact your insurer to confirm coverage.`,
    descriptionEs: `Las vacunas son una parte importante del cuidado preventivo. Health Watch Medical Clinic puede revisar los registros de inmunización y hablar sobre las vacunas que pueden ser apropiadas para niños y adultos.

El tipo de vacuna, el suministro, la elegibilidad por edad y la conveniencia clínica varían. Llame antes de su visita para confirmar la disponibilidad, incluso para necesidades estacionales, de viaje o escolares.

La clínica puede revisar con usted el calendario recomendado por los CDC. Los requisitos escolares y de viaje pueden cambiar; confirme los requisitos vigentes con la escuela, la autoridad del destino o el recurso de salud pública correspondiente.

La cobertura y la responsabilidad del paciente varían según el plan. Contacte a su aseguradora para confirmar la cobertura.`,
    metaDescription:
      'Adult and child immunization services in Oklahoma City. Call to confirm vaccine type, availability, and coverage. (405) 949-1552.',
    metaDescriptionEs:
      'Servicios de inmunización para adultos y niños en Oklahoma City. Llame para confirmar el tipo de vacuna, disponibilidad y cobertura. (405) 949-1552.',
    heroKeyword: 'immunizations Oklahoma City adults children',
    heroKeywordEs: 'vacunas Oklahoma City adultos y niños',
    icon: ICONS.beaker,
    highlights: ['Adult & childhood immunization services', 'Record review and vaccine discussion', 'Availability confirmed before your visit'],
    highlightsEs: ['Servicios de inmunización para adultos y niños', 'Revisión de registros y conversación sobre vacunas', 'Disponibilidad confirmada antes de su visita'],
    faqs: [
      {
        q: 'Do you offer flu shots?',
        a: 'Call to confirm the current availability and age eligibility of seasonal flu vaccines before your visit.',
      },
      {
        q: 'Are vaccines covered by my insurance?',
        a: 'Coverage and patient responsibility vary by plan. Contact your insurer to confirm coverage and call to confirm vaccine availability.',
      },
      {
        q: 'What vaccines do adults need?',
        a: 'The vaccines appropriate for an adult depend on age, health history, travel plans, and current public-health guidance. A provider can review your records and discuss appropriate options.',
      },
      {
        q: 'What vaccines are required for Oklahoma schools?',
        a: 'School immunization requirements can change. Confirm current requirements with your school or the appropriate state resource before your visit.',
      },
    ],
    faqsEs: [
      {
        q: '¿Aplican la vacuna contra la influenza?',
        a: 'Llame para confirmar la disponibilidad actual y la elegibilidad por edad de las vacunas estacionales contra la influenza antes de su visita.',
      },
      {
        q: '¿Mi seguro cubre las vacunas?',
        a: 'La cobertura y la responsabilidad del paciente varían según el plan. Contacte a su aseguradora para confirmar cobertura y llame para confirmar la disponibilidad de vacunas.',
      },
      {
        q: '¿Qué vacunas necesitan los adultos?',
        a: 'Las vacunas apropiadas para un adulto dependen de su edad, historial de salud, planes de viaje y la guía de salud pública vigente. Un proveedor puede revisar sus registros y hablar sobre opciones apropiadas.',
      },
      {
        q: '¿Qué vacunas exigen las escuelas de Oklahoma?',
        a: 'Los requisitos de inmunización escolar pueden cambiar. Confirme los requisitos vigentes con la escuela o el recurso estatal correspondiente antes de su visita.',
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
      'Video visits may be available for follow-ups and other appropriate care when an in-person examination is not clinically necessary.',
    shortDescriptionEs:
      'Las consultas por video pueden estar disponibles para seguimientos y otra atención apropiada cuando no sea clínicamente necesario un examen en persona.',
    description: `Video visits may be available for established and other appropriate care when clinically appropriate.

Telemedicine availability depends on the patient’s location, medical condition, and whether an in-person examination is clinically necessary. A provider will determine whether a video visit is appropriate.

If a video visit is appropriate and confirmed by the clinic, you will receive instructions before the visit. A smartphone, tablet, or computer with a camera and microphone may be needed.

To request a telemedicine appointment, call us at (405) 949-1552.`,
    descriptionEs: `Las consultas por video pueden estar disponibles para atención establecida y otra atención apropiada cuando sean clínicamente adecuadas.

La disponibilidad de telemedicina depende de la ubicación del paciente, su condición médica y de si es clínicamente necesario un examen en persona. Un proveedor determinará si una consulta por video es apropiada.

Si una consulta por video es apropiada y la clínica la confirma, recibirá instrucciones antes de la visita. Es posible que necesite un teléfono, una tableta o una computadora con cámara y micrófono.

Para solicitar una consulta de telemedicina, llámenos al **(405) 949-1552**. La disponibilidad depende de su ubicación, condición médica y de si es clínicamente necesario un examen en persona. Hay personal que habla español disponible para ayudarle a comunicarse durante su consulta.`,
    metaDescription:
      'Telemedicine availability in Oklahoma City, OK. Video visits may be available when clinically appropriate. Call (405) 949-1552.',
    metaDescriptionEs:
      'Disponibilidad de telemedicina en Oklahoma City, OK. Las consultas por video pueden estar disponibles cuando sean clínicamente apropiadas. Llame al (405) 949-1552.',
    heroKeyword: 'telemedicine doctor Oklahoma City',
    heroKeywordEs: 'consulta médica por video en español Oklahoma City',
    icon: ICONS.video,
    highlights: ['Secure video visits when appropriate', 'Follow-up care when clinically appropriate', 'Availability depends on your location and condition'],
    highlightsEs: ['Consultas por video seguras cuando sean apropiadas', 'Atención de seguimiento cuando sea clínicamente apropiada', 'La disponibilidad depende de su ubicación y condición'],
    faqs: [
      {
        q: 'What conditions can be treated via telemedicine?',
        a: 'Telemedicine availability depends on your location, medical condition, and whether an in-person examination is clinically necessary. A provider will determine whether a video visit is appropriate.',
      },
      {
        q: 'Does insurance cover telemedicine?',
        a: 'Coverage varies by plan. Contact your insurer to confirm telemedicine coverage and call to confirm whether the clinic participates with your specific plan.',
      },
      {
        q: 'What do I need for a telemedicine appointment?',
        a: 'You need a smartphone, tablet, or computer with a working camera and microphone, a stable internet connection, and a quiet private space. We will send you a secure link before your appointment.',
      },
      {
        q: 'How do I schedule a telemedicine visit?',
        a: 'Call us at (405) 949-1552 to request a telemedicine appointment. A provider will determine whether a video visit is appropriate.',
      },
    ],
    faqsEs: [
      {
        q: '¿Qué condiciones se pueden atender por telemedicina?',
        a: 'La disponibilidad de telemedicina depende de su ubicación, condición médica y de si es clínicamente necesario un examen en persona. Un proveedor determinará si una consulta por video es apropiada.',
      },
      {
        q: '¿El seguro cubre la telemedicina?',
        a: 'La cobertura varía según el plan. Contacte a su aseguradora para confirmar la cobertura de telemedicina y llame para confirmar si la clínica participa con su plan específico.',
      },
      {
        q: '¿Qué necesito para mi cita de telemedicina?',
        a: 'Necesita un teléfono, tableta o computadora con cámara y micrófono que funcionen, una conexión de internet estable y un lugar privado y tranquilo. Le enviaremos un enlace seguro antes de su cita.',
      },
      {
        q: '¿Cómo agendo una consulta por video?',
        a: 'Llámenos al (405) 949-1552 para solicitar una consulta de telemedicina. Un proveedor determinará si una consulta por video es apropiada.',
      },
      {
        q: '¿Puedo tener la consulta en español?',
        a: 'Hay personal que habla español disponible para ayudarle a comunicarse durante su consulta.',
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
