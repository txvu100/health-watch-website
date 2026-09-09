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
  /** Optional localized replacement for the shared clinic-benefits heading. */
  whyHeading?: string
  whyHeadingEs?: string
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
    title: 'Women’s Primary Care',
    titleEs: 'Atención Primaria para la Mujer',
    shortDescription:
      'Personalized primary and preventive healthcare for women, including well-woman visits, cervical cancer screening, family planning, and contraceptive management.',
    shortDescriptionEs:
      'Atención primaria y preventiva personalizada para la mujer, incluidas las visitas de bienestar, la detección del cáncer cervical, la planificación familiar y el manejo de anticonceptivos.',
    description: `Health Watch Medical Clinic provides compassionate primary and preventive healthcare for women in Oklahoma City. Our providers address each patient’s individual health needs through preventive care, appropriate screenings, medication management, and treatment of common health concerns.

Our women’s health services include well-woman visits, cervical cancer screening when due, family-planning counseling, and contraceptive management. Depending on your medical history and preferences, we may prescribe birth control pills, patches, vaginal rings, or injections. Referrals are available for contraceptive methods or procedures not performed at our clinic, including IUD insertion or removal.

We also evaluate and manage common concerns such as menstrual changes, anemia, thyroid disorders, menopause-related symptoms, osteoporosis risk, high blood pressure, diabetes, and other chronic health conditions. Recommended testing and screening are based on your age, symptoms, medical history, and individual risk factors.

Our bilingual English- and Spanish-speaking team is committed to helping every patient feel respected, comfortable, and fully informed.`,
    descriptionEs: `Health Watch Medical Clinic ofrece atención primaria y preventiva compasiva para la mujer en Oklahoma City. Nuestras proveedoras abordan las necesidades de salud individuales de cada paciente mediante atención preventiva, pruebas de detección adecuadas, manejo de medicamentos y tratamiento de problemas de salud comunes.

Nuestros servicios de salud para la mujer incluyen visitas de bienestar, detección de cáncer cervical cuando corresponde, orientación sobre planificación familiar y manejo de anticonceptivos. Según sus antecedentes médicos y preferencias, podemos recetar pastillas anticonceptivas, parches, anillos vaginales o inyecciones. Hay referencias disponibles para métodos anticonceptivos o procedimientos que no se realizan en nuestra clínica, incluida la colocación o extracción del DIU.

También evaluamos y manejamos problemas comunes como cambios menstruales, anemia, trastornos de la tiroides, síntomas relacionados con la menopausia, riesgo de osteoporosis, presión arterial alta, diabetes y otras condiciones de salud crónicas. Las pruebas y detecciones recomendadas se basan en su edad, síntomas, antecedentes médicos y factores de riesgo individuales.

Nuestro equipo bilingüe que habla inglés y español se compromete a ayudar a cada paciente a sentirse respetada, cómoda y plenamente informada.`,
    metaDescription:
      "Women's health and primary care in Oklahoma City, OK. Wellness examinations, contraceptive counseling, and preventive screenings. (405) 949-1552.",
    metaDescriptionEs:
      'Clínica de salud para la mujer en Oklahoma City, OK. Examen anual, Papanicolaou, planificación familiar y anticonceptivos. Se habla español. (405) 949-1552.',
    heroKeyword: "women's health clinic Oklahoma City",
    heroKeywordEs: 'clínica de salud para la mujer Oklahoma City',
    icon: ICONS.user,
    highlights: ['Well-woman visits and cervical cancer screening', 'Birth control counseling and management', 'Preventive screenings based on age and individual risk'],
    highlightsEs: ['Visitas de bienestar y detección del cáncer cervical', 'Orientación y manejo de métodos anticonceptivos', 'Pruebas preventivas según la edad y el riesgo individual'],
    faqs: [
      {
        q: 'What is included in a well-woman visit?',
        a: 'A well-woman visit generally includes a review of your medical history, medications, menstrual and reproductive health, blood pressure, and recommended preventive screenings. A breast examination, pelvic examination, Pap test, laboratory testing, or other services may be performed when appropriate based on your age, symptoms, medical history, and current guidelines.',
      },
      {
        q: 'Do you prescribe birth control?',
        a: 'Yes. We provide contraceptive counseling and prescribe several birth control options, including pills, patches, vaginal rings, and injections when medically appropriate. If you are interested in IUD insertion or removal, or another procedure that we do not perform, we can provide a referral.',
      },
      {
        q: 'How often do I need cervical cancer screening?',
        a: 'The recommended screening schedule depends on your age, previous results, medical history, and the type of test used. For many patients, Pap testing is performed every three years. Beginning at age 30, HPV testing alone or combined Pap and HPV testing may allow screening every five years. Some patients need a different schedule, including those with previous abnormal results, certain immune conditions, or a history of cervical precancer or cancer. Your provider will determine the appropriate schedule for you.',
      },
      {
        q: "Do you have Spanish-speaking staff for women's health visits?",
        a: 'Yes. Spanish-speaking staff are available to help patients understand their care and communicate comfortably during their visits.',
      },
    ],
    faqsEs: [
      {
        q: '¿Qué incluye una visita de bienestar para la mujer?',
        a: 'Una visita de bienestar para la mujer generalmente incluye la revisión de sus antecedentes médicos, medicamentos, salud menstrual y reproductiva, presión arterial y pruebas preventivas recomendadas. Se pueden realizar un examen de los senos, examen pélvico, prueba de Papanicolaou, análisis de laboratorio u otros servicios cuando sea apropiado según su edad, síntomas, antecedentes médicos y las guías actuales.',
      },
      {
        q: '¿Recetan métodos anticonceptivos?',
        a: 'Sí. Ofrecemos orientación anticonceptiva y recetamos varias opciones, incluidas pastillas, parches, anillos vaginales e inyecciones cuando son médicamente apropiadas. Si le interesa la colocación o extracción de un DIU, u otro procedimiento que no realizamos, podemos proporcionarle una referencia.',
      },
      {
        q: '¿Con qué frecuencia necesito la detección del cáncer cervical?',
        a: 'El calendario de detección recomendado depende de su edad, resultados previos, antecedentes médicos y el tipo de prueba utilizada. Para muchas pacientes, la prueba de Papanicolaou se realiza cada tres años. A partir de los 30 años, la prueba del VPH por sí sola o la prueba combinada de Papanicolaou y VPH puede permitir la detección cada cinco años. Algunas pacientes necesitan un calendario diferente, incluidas aquellas con resultados anormales previos, ciertas afecciones inmunitarias o antecedentes de precáncer o cáncer cervical. Su proveedor determinará el calendario adecuado para usted.',
      },
      {
        q: '¿Puedo recibir la consulta en español?',
        a: 'Sí. Hay personal que habla español disponible para ayudarle a entender su atención y comunicarse cómodamente durante sus visitas.',
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
      'Screening and initial treatment for depression, anxiety, and other common mental health concerns, with referrals to specialists when appropriate.',
    shortDescriptionEs:
      'Detección y tratamiento inicial de la depresión, la ansiedad y otros problemas comunes de salud mental, con referencias a especialistas cuando sea apropiado.',
    description: `Mental well-being is an important part of overall health. At Health Watch Medical Clinic in Oklahoma City, we incorporate mental health screening and initial treatment into primary care, helping patients receive support as early as possible.

Our providers evaluate patients for depression, anxiety, and other common mental health concerns. We may use screening questionnaires such as the PHQ-9 as part of the evaluation. Because a screening result alone does not establish a diagnosis, positive results are reviewed through further clinical assessment.

When treatment is appropriate in the primary care setting, we work with each patient to develop an individualized care plan. Depending on the patient's needs, this may include education, lifestyle recommendations, medication management, close follow-up, or referral to a licensed counselor, psychologist, psychiatrist, or another qualified mental health professional.

We understand that discussing emotional health can be difficult. Our compassionate, bilingual team provides respectful, nonjudgmental care and encourages patients to speak openly about changes in mood, anxiety, sleep, stress, or daily functioning.`,
    descriptionEs: `El bienestar mental es una parte importante de la salud general. En Health Watch Medical Clinic de Oklahoma City incorporamos la detección y el tratamiento inicial de salud mental a la atención primaria para ayudar a los pacientes a recibir apoyo lo antes posible.

Nuestros proveedores evalúan a los pacientes por depresión, ansiedad y otros problemas comunes de salud mental. Podemos usar cuestionarios de detección como el PHQ-9 como parte de la evaluación. Debido a que un resultado de detección por sí solo no establece un diagnóstico, los resultados positivos se revisan mediante una evaluación clínica adicional.

Cuando el tratamiento es apropiado en el entorno de atención primaria, trabajamos con cada paciente para desarrollar un plan de atención individualizado. Según las necesidades del paciente, este puede incluir educación, recomendaciones de estilo de vida, manejo de medicamentos, seguimiento cercano o referencia a un consejero con licencia, psicólogo, psiquiatra u otro profesional de salud mental calificado.

Entendemos que hablar sobre la salud emocional puede ser difícil. Nuestro equipo compasivo y bilingüe ofrece una atención respetuosa y sin prejuicios, y anima a los pacientes a hablar abiertamente sobre cambios en el estado de ánimo, la ansiedad, el sueño, el estrés o el funcionamiento diario.`,
    metaDescription:
      'Mental health screening in Oklahoma City, OK. Screening for depression and anxiety with referrals when needed. (405) 949-1552.',
    metaDescriptionEs:
      'Detección de salud mental en Oklahoma City, OK. Detección de depresión y ansiedad con referencias cuando se necesiten. Llame al (405) 949-1552.',
    heroKeyword: 'mental health screening Oklahoma City',
    heroKeywordEs: 'salud mental en español Oklahoma City',
    icon: ICONS.brain,
    highlights: [
      'Depression and anxiety screening',
      'Individualized treatment and follow-up',
      'Medication management when clinically appropriate',
      'Referrals for counseling or psychiatric care when needed',
    ],
    highlightsEs: [
      'Detección de depresión y ansiedad',
      'Tratamiento y seguimiento individualizados',
      'Manejo de medicamentos cuando sea clínicamente apropiado',
      'Referencias para consejería o atención psiquiátrica cuando sea necesario',
    ],
    faqs: [
      {
        q: 'Do you evaluate and treat depression and anxiety?',
        a: 'Yes. We provide screening, clinical evaluation, and initial treatment for common mental health concerns such as depression and anxiety. Patients who need psychotherapy, psychiatric evaluation, complex medication management, or a higher level of care may be referred to an appropriate mental health specialist.',
      },
      {
        q: 'Are mental health services covered by insurance?',
        a: 'Mental health screening and related services may be covered by SoonerCare, Medicare, and private insurance plans. Coverage, copayments, referral requirements, and other benefits vary by plan. Please contact your insurance company or our clinic to verify your coverage before your visit.',
      },
      {
        q: 'Do I need a referral to see a mental health specialist?',
        a: 'Referral requirements depend on the specialist and your insurance plan. If a referral is required or clinically appropriate, our healthcare team can help coordinate it.',
      },
      {
        q: 'What should I do if I am in crisis?',
        a: 'If you are experiencing emotional distress or a mental health crisis, call or text 988 to reach the Suicide & Crisis Lifeline. Spanish support is available by calling 988 and pressing 2 or texting AYUDA to 988. If there is immediate danger, a suicide attempt, a serious threat of harm, or an urgent medical emergency, call 911 or go to the nearest emergency department. Our clinic does not provide emergency or crisis services.',
        source: {
          label: '988 Lifeline guidance',
          href: 'https://988lifeline.org/get-help/',
        },
      },
    ],
    faqsEs: [
      {
        q: '¿Evalúan y tratan la depresión y la ansiedad?',
        a: 'Sí. Ofrecemos detección, evaluación clínica y tratamiento inicial para problemas comunes de salud mental, como la depresión y la ansiedad. Los pacientes que necesiten psicoterapia, evaluación psiquiátrica, manejo complejo de medicamentos o un nivel de atención más alto pueden ser referidos a un especialista adecuado en salud mental.',
      },
      {
        q: '¿Los servicios de salud mental están cubiertos por el seguro?',
        a: 'La detección de salud mental y los servicios relacionados pueden estar cubiertos por SoonerCare, Medicare y planes de seguro privado. La cobertura, los copagos, los requisitos de referencia y otros beneficios varían según el plan. Comuníquese con su compañía de seguros o con nuestra clínica para verificar su cobertura antes de su visita.',
      },
      {
        q: '¿Necesito una referencia para ver a un especialista en salud mental?',
        a: 'Los requisitos de referencia dependen del especialista y de su plan de seguro. Si se requiere una referencia o si es clínicamente apropiada, nuestro equipo de atención médica puede ayudar a coordinarla.',
      },
      {
        q: '¿Qué debo hacer si estoy en crisis?',
        a: 'Si está experimentando angustia emocional o una crisis de salud mental, llame o envíe un mensaje de texto al 988 para comunicarse con la Línea de Prevención del Suicidio y Crisis. El apoyo en español está disponible al llamar al 988 y presionar 2 o al enviar AYUDA al 988. Si hay peligro inmediato, un intento de suicidio, una amenaza seria de daño o una emergencia médica urgente, llame al 911 o vaya a la sala de emergencias más cercana. Nuestra clínica no brinda servicios de emergencia ni de crisis.',
        source: {
          label: 'Guía de 988 Lifeline',
          href: 'https://988lifeline.org/get-help/',
        },
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
      'Preventive checkups, developmental screenings, school and sports physicals, and age-appropriate immunizations for infants, children, and teenagers.',
    shortDescriptionEs:
      'Revisiones preventivas, evaluaciones del desarrollo, exámenes físicos escolares y deportivos e inmunizaciones apropiadas para la edad para bebés, niños y adolescentes.',
    description: `Keeping your child healthy begins with regular preventive care. At Health Watch Medical Clinic, we care for infants, children, and teenagers in Oklahoma City. Our services include well-child examinations, growth and developmental monitoring, school and sports physicals, and age-appropriate immunizations.

During a well-child visit, our healthcare providers evaluate your child’s growth, development, physical health, and emotional well-being. Depending on your child’s age and individual needs, the visit may include vision, hearing, blood pressure, developmental, behavioral, or other recommended screenings.

We also discuss nutrition, sleep, physical activity, school performance, safety, and any concerns you or your child may have.

Vaccination helps protect children from serious and preventable illnesses. We can review your child’s immunization record, identify vaccines that may be due, and develop a routine or catch-up vaccination plan based on current recommendations and your child’s individual needs.

**Please call before your visit to confirm vaccine availability and any records you should bring.**`,
    descriptionEs: `Mantener saludable a su hijo comienza con la atención preventiva regular. En Health Watch Medical Clinic atendemos a bebés, niños y adolescentes en Oklahoma City. Nuestros servicios incluyen exámenes de niño sano, seguimiento del crecimiento y desarrollo, exámenes físicos escolares y deportivos, e inmunizaciones apropiadas para la edad.

Durante una visita de niño sano, nuestros proveedores de atención médica evalúan el crecimiento, desarrollo, salud física y bienestar emocional de su hijo. Según la edad y las necesidades individuales de su hijo, la visita puede incluir pruebas de visión, audición, presión arterial, desarrollo, comportamiento u otras pruebas recomendadas.

También hablamos sobre nutrición, sueño, actividad física, desempeño escolar, seguridad y cualquier inquietud que usted o su hijo puedan tener.

La vacunación ayuda a proteger a los niños de enfermedades graves y prevenibles. Podemos revisar el registro de inmunización de su hijo, identificar las vacunas que pueden corresponder y desarrollar un plan de vacunación rutinario o de recuperación basado en las recomendaciones actuales y las necesidades individuales de su hijo.

**Llame antes de su visita para confirmar la disponibilidad de vacunas y los registros que debe traer.**`,
    metaDescription:
      'Child health exams & immunizations in Oklahoma City, OK. Well-child checkups and vaccines for kids of all ages. SoonerCare accepted. (405) 949-1552.',
    metaDescriptionEs:
      'Exámenes de niño sano y vacunas en Oklahoma City, OK. Revisiones pediátricas e inmunizaciones para la escuela. Aceptamos SoonerCare. (405) 949-1552.',
    heroKeyword: 'child health exam immunizations Oklahoma City',
    heroKeywordEs: 'pediatra y vacunas para niños Oklahoma City',
    icon: ICONS.child,
    highlights: ['Well-child visits and developmental screenings', 'School and sports physicals', 'Routine and catch-up immunizations'],
    highlightsEs: ['Visitas de niño sano y evaluaciones del desarrollo', 'Exámenes físicos escolares y deportivos', 'Inmunizaciones rutinarias y de recuperación'],
    whyHeading: 'Why Choose Health Watch?',
    whyHeadingEs: '¿Por Qué Elegir Health Watch?',
    whyPoints: [
      'Same-day appointments may be available',
      'Walk-in availability for selected services',
      'Bilingual staff — se habla español',
      'SoonerCare and many private insurance plans accepted',
      'Locally owned and independently operated in Oklahoma City',
    ],
    whyPointsEs: [
      'Es posible que haya citas disponibles el mismo día',
      'Disponibilidad sin cita para servicios seleccionados',
      'Personal bilingüe — se habla español',
      'Aceptamos SoonerCare y muchos planes de seguro privados',
      'Propiedad local y operación independiente en Oklahoma City',
    ],
    faqs: [
      {
        q: 'How often does my child need a well-child visit?',
        a: 'Well-child visits are frequent during infancy and early childhood and are generally recommended annually beginning at age 3. Your healthcare provider may recommend additional visits based on your child’s medical or developmental needs. The schedule follows the American Academy of Pediatrics’ preventive-care recommendations.',
        source: {
          label: 'AAP Preventive Care Schedule',
          href: 'https://www.aap.org/periodicityschedule',
        },
      },
      {
        q: 'Do you accept SoonerCare for children\'s visits?',
        a: 'Yes. We accept SoonerCare for covered services provided to eligible children. Coverage and benefits can vary, so please contact our office or your health plan before the visit if you have questions.',
      },
      {
        q: 'Do you provide school and sports physicals?',
        a: 'Yes. We provide school and pre-participation sports physicals. Please bring any required forms, your child’s medication list, immunization record, and relevant medical history. Same-day appointments may be available.',
      },
      {
        q: 'What vaccines does my child need for school?',
        a: 'Oklahoma’s immunization requirements depend on the child’s age and grade. Required vaccines may include DTaP or Tdap, polio, MMR, hepatitis A, hepatitis B, and varicella. We can review your child’s record and help determine which required or recommended vaccines may be due. Vaccine availability should be confirmed before the appointment.',
        source: {
          label: 'Oklahoma State Department of Health',
          href: 'https://oklahoma.gov/health/immunizations.html',
        },
      },
    ],
    faqsEs: [
      {
        q: '¿Cada cuánto necesita mi hijo una visita de niño sano?',
        a: 'Las visitas de niño sano son frecuentes durante la infancia y generalmente se recomiendan anualmente a partir de los 3 años. Su proveedor de atención médica puede recomendar visitas adicionales según las necesidades médicas o del desarrollo de su hijo. El calendario sigue las recomendaciones de atención preventiva de la Academia Americana de Pediatría.',
        source: {
          label: 'Calendario de atención preventiva de la AAP',
          href: 'https://www.aap.org/periodicityschedule',
        },
      },
      {
        q: '¿Aceptan SoonerCare para las visitas de niños?',
        a: 'Sí. Aceptamos SoonerCare para los servicios cubiertos proporcionados a niños elegibles. La cobertura y los beneficios pueden variar, así que comuníquese con nuestra oficina o su plan de salud antes de la visita si tiene preguntas.',
      },
      {
        q: '¿Hacen exámenes físicos para deportes escolares?',
        a: 'Sí. Realizamos exámenes físicos escolares y previos a la participación deportiva. Traiga los formularios requeridos, la lista de medicamentos de su hijo, el registro de inmunización y los antecedentes médicos relevantes. Es posible que haya citas el mismo día.',
      },
      {
        q: '¿Qué vacunas necesita mi hijo para la escuela?',
        a: 'Los requisitos de inmunización de Oklahoma dependen de la edad y el grado del niño. Las vacunas requeridas pueden incluir DTaP o Tdap, polio, MMR, hepatitis A, hepatitis B y varicela. Podemos revisar el registro de su hijo y ayudar a determinar qué vacunas requeridas o recomendadas pueden corresponder. Debe confirmar la disponibilidad de vacunas antes de la cita.',
        source: {
          label: 'Departamento de Salud del Estado de Oklahoma',
          href: 'https://oklahoma.gov/health/immunizations.html',
        },
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
      'Preventive health exams and pre-participation sports physicals for adults, children, and student-athletes.',
    shortDescriptionEs:
      'Exámenes preventivos de salud y exámenes físicos deportivos previos a la participación para adultos, niños y estudiantes-atletas.',
    description: `An annual preventive visit is an important part of maintaining your health. Regular checkups allow your healthcare provider to review changes in your health, identify potential concerns early, and recommend appropriate screenings and preventive care.

At Health Watch Medical Clinic in Oklahoma City, we provide preventive physical exams for adults and school-age children. Depending on the patient’s age, health history, and individual needs, the visit may include a review of medical and family history, medications, vital signs, a physical examination, preventive screenings, and personalized health counseling. Laboratory testing may be ordered when clinically appropriate.

We also provide pre-participation sports physicals for student-athletes and others who need medical clearance for athletic activities. These evaluations include a review of the patient’s medical and family history and an examination focused on identifying conditions that could affect safe sports participation.

Please bring all required school or athletic forms, a current medication list, and relevant medical records to your appointment. Same-day and walk-in visits are frequently available.`,
    descriptionEs: `Una visita preventiva anual es una parte importante de mantener su salud. Las revisiones periódicas permiten a su proveedor de atención médica revisar cambios en su salud, identificar posibles preocupaciones a tiempo y recomendar pruebas de detección y atención preventiva apropiadas.

En Health Watch Medical Clinic de Oklahoma City, brindamos exámenes físicos preventivos a adultos y niños en edad escolar. Según la edad, historial de salud y necesidades individuales del paciente, la visita puede incluir una revisión de antecedentes médicos y familiares, medicamentos, signos vitales, un examen físico, pruebas preventivas y orientación de salud personalizada. Se pueden solicitar análisis de laboratorio cuando sean clínicamente apropiados.

También ofrecemos exámenes físicos previos a la participación deportiva para estudiantes-atletas y otras personas que necesitan autorización médica para actividades deportivas. Estas evaluaciones incluyen una revisión de los antecedentes médicos y familiares del paciente y un examen enfocado en identificar condiciones que podrían afectar la participación segura en los deportes.

Traiga todos los formularios escolares o deportivos requeridos, una lista actual de medicamentos y los registros médicos relevantes a su cita. Las citas el mismo día y las visitas sin cita están disponibles con frecuencia.`,
    metaDescription:
      'Preventive health exams and sports physicals in Oklahoma City for adults, children, and student-athletes. Same-day and walk-in availability. Call (405) 949-1552.',
    metaDescriptionEs:
      'Exámenes preventivos y físicos deportivos en Oklahoma City para adultos, niños y estudiantes-atletas. Disponibilidad el mismo día y sin cita. Llame al (405) 949-1552.',
    heroKeyword: 'annual and sports physicals Oklahoma City',
    heroKeywordEs: 'exámenes físicos anuales y deportivos Oklahoma City',
    icon: ICONS.clipboard,
    highlights: ['Comprehensive preventive health exams', 'Pre-participation sports physicals', 'Same-day and walk-in availability'],
    highlightsEs: ['Exámenes preventivos de salud integrales', 'Exámenes físicos deportivos previos a la participación', 'Disponibilidad el mismo día y sin cita'],
    faqs: [
      {
        q: 'Do you offer same-day sports physicals?',
        a: 'Yes. Same-day appointments are frequently available, and walk-ins are welcome. Calling ahead is recommended to confirm availability.',
      },
      {
        q: 'What does an annual preventive exam include?',
        a: 'The visit generally includes a review of your medical history, family history, medications, current health concerns, vital signs, and an age-appropriate physical examination. Your provider may also recommend preventive screenings, vaccinations, counseling, or laboratory testing based on your individual needs.',
      },
      {
        q: 'Is an annual physical the same as a Medicare Annual Wellness Visit?',
        a: 'No. A Medicare Annual Wellness Visit focuses on health-risk assessment, preventive planning, and recommended screenings. It is not the same as a routine comprehensive physical exam. Please contact our office or your insurance plan to confirm coverage and possible out-of-pocket costs.',
      },
      {
        q: 'Are sports physicals required for Oklahoma school athletics?',
        a: 'Students participating in OSSAA-governed school athletics generally need a current pre-participation physical evaluation before participation. Requirements and accepted forms may vary by school or athletic program, so families should confirm the requirements with the student’s school or athletic department.',
        source: {
          label: 'OSSAA Pre-Participation Physical Evaluation Form',
          href: 'https://ossaaillustrated.com/2026/04/13/pre-participation-physical-evaluation-form-and-parental-consent/',
        },
      },
      {
        q: 'What should I bring to a sports physical?',
        a: 'Bring the required school or athletic form, completed health-history information, a list of medications, and any relevant medical or specialist records. A parent or legal guardian may need to accompany a minor or complete required consent forms.',
      },
    ],
    faqsEs: [
      {
        q: '¿Hacen exámenes deportivos el mismo día?',
        a: 'Sí. Con frecuencia hay citas el mismo día y se aceptan visitas sin cita. Se recomienda llamar antes para confirmar la disponibilidad.',
      },
      {
        q: '¿Qué incluye un examen preventivo anual?',
        a: 'La visita generalmente incluye una revisión de sus antecedentes médicos y familiares, medicamentos, preocupaciones de salud actuales, signos vitales y un examen físico apropiado para su edad. Su proveedor también puede recomendar pruebas preventivas, vacunas, orientación o análisis de laboratorio según sus necesidades individuales.',
      },
      {
        q: '¿Es un examen físico anual lo mismo que una Visita Anual de Bienestar de Medicare?',
        a: 'No. Una Visita Anual de Bienestar de Medicare se enfoca en la evaluación de riesgos para la salud, la planificación preventiva y las pruebas recomendadas. No es lo mismo que un examen físico integral de rutina. Comuníquese con nuestra oficina o su plan de seguro para confirmar la cobertura y los posibles costos de su bolsillo.',
      },
      {
        q: '¿Se requieren exámenes físicos para los deportes escolares de Oklahoma?',
        a: 'Los estudiantes que participan en deportes escolares regidos por OSSAA generalmente necesitan una evaluación física previa a la participación vigente antes de participar. Los requisitos y formularios aceptados pueden variar según la escuela o el programa deportivo, por lo que las familias deben confirmar los requisitos con la escuela o el departamento deportivo del estudiante.',
        source: {
          label: 'Formulario de evaluación física previa a la participación de OSSAA',
          href: 'https://ossaaillustrated.com/2026/04/13/pre-participation-physical-evaluation-form-and-parental-consent/',
        },
      },
      {
        q: '¿Qué debo llevar a un examen físico deportivo?',
        a: 'Traiga el formulario escolar o deportivo requerido, la información del historial de salud completada, una lista de medicamentos y cualquier registro médico o de especialistas relevante. Es posible que un padre, madre o tutor legal deba acompañar a un menor o completar los formularios de consentimiento requeridos.',
      },
    ],
    relatedSlugs: ['blood-pressure-management', 'child-health-exams-immunizations', 'vaccines-immunizations'],
  },
  {
    slug: 'vaccines-immunizations',
    slugEs: 'vacunas-inmunizaciones',
    title: 'Adult Vaccines & Immunizations',
    titleEs: 'Vacunas e Inmunizaciones para Adultos',
    shortDescription:
      'Stay protected with routine, seasonal, and age-appropriate adult immunizations personalized to your health needs.',
    shortDescriptionEs:
      'Manténgase protegido con inmunizaciones para adultos rutinarias, estacionales y apropiadas para la edad, personalizadas según sus necesidades de salud.',
    description: `Vaccination remains an important part of preventive healthcare throughout adulthood. At Health Watch Medical Clinic, we review your medical history, age, previous vaccinations, and individual risk factors to determine which immunizations may be appropriate for you.

Your vaccine needs may change based on your health conditions, pregnancy status, occupation, travel plans, and previous vaccination history. Our providers can identify missing or overdue vaccines and develop a personalized immunization plan based on current recommendations.

Whether you need a seasonal flu shot, a routine booster, or an age- or risk-based vaccine, our team is here to help you stay up to date.

**Vaccine availability and insurance coverage vary. Please call before visiting to confirm availability and coverage.**`,
    descriptionEs: `La vacunación sigue siendo una parte importante de la atención preventiva durante toda la edad adulta. En Health Watch Medical Clinic revisamos sus antecedentes médicos, edad, vacunas anteriores y factores de riesgo individuales para determinar qué inmunizaciones pueden ser apropiadas para usted.

Sus necesidades de vacunación pueden cambiar según sus condiciones de salud, estado de embarazo, ocupación, planes de viaje e historial de vacunación anterior. Nuestros proveedores pueden identificar vacunas faltantes o atrasadas y desarrollar un plan de inmunización personalizado basado en las recomendaciones actuales.

Ya sea que necesite una vacuna estacional contra la influenza, un refuerzo de rutina o una vacuna según su edad o factores de riesgo, nuestro equipo está aquí para ayudarle a mantenerse al día.

**La disponibilidad de vacunas y la cobertura de seguro varían. Llame antes de su visita para confirmar la disponibilidad y la cobertura.**`,
    metaDescription:
      'Adult vaccines and immunizations in Oklahoma City. Routine, seasonal, and catch-up vaccinations with personalized record review. Call (405) 949-1552.',
    metaDescriptionEs:
      'Vacunas e inmunizaciones para adultos en Oklahoma City. Vacunas rutinarias, estacionales y de recuperación con revisión personalizada de registros. Llame al (405) 949-1552.',
    heroKeyword: 'adult immunizations Oklahoma City',
    heroKeywordEs: 'vacunas para adultos Oklahoma City',
    icon: ICONS.beaker,
    highlights: ['Routine and seasonal vaccinations', 'Catch-up immunizations', 'Personalized vaccine-record review'],
    highlightsEs: ['Vacunas rutinarias y estacionales', 'Inmunizaciones de recuperación', 'Revisión personalizada del registro de vacunación'],
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
        q: 'Can you review my vaccine record?',
        a: 'Yes. We can review your available immunization record, identify vaccines that may be missing or overdue, and discuss appropriate options based on your age, health history, and individual risk factors. Please bring any vaccination records you have.',
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
        q: '¿Pueden revisar mi registro de vacunación?',
        a: 'Sí. Podemos revisar el registro de inmunización que tenga disponible, identificar las vacunas que pueden faltar o estar atrasadas y hablar sobre opciones apropiadas según su edad, historial de salud y factores de riesgo individuales. Traiga los registros de vacunación que tenga.',
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
