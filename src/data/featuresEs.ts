import type { ToolId, ToolReference } from './tools';

export const featureGroupsEs = [
  {
    id: 'create', label: 'Crear y publicar', headline: 'De la primera idea al trabajo publicado.',
    description: 'Un brief compartido, una marca consistente y revisión experta en los canales que importan para tu negocio.',
    features: [
      { title: 'Sitios web y páginas de destino', icon: 'web', description: 'Crea páginas de destino para campañas, mejora tu sitio web y revisa los cambios antes de que avancen por el flujo de publicación.', detail: 'Creación de páginas · Actualizaciones del sitio · Vistas previas' },
      { title: 'Diseño y creatividad', icon: 'design', description: 'Gráficos de marca, carruseles, piezas de campaña y textos creados para tu audiencia. Afina la dirección con tu equipo de marketing.', detail: 'Imágenes personalizadas · Diseño para redes · Redacción' },
      { title: 'Contenido y calendario de redes', icon: 'calendar', description: 'Planifica el contenido, revisa publicaciones y carruseles, aprueba textos y mantén organizado el calendario de publicación.', detail: 'Planificación de contenido · Vistas previas · Aprobaciones' },
      { title: 'Publicación en redes', icon: 'publish', description: 'Programa o publica contenido aprobado en tus cuentas conectadas. Revisa el estado de cada publicación y ajusta el plan cuando sea necesario.', detail: 'Programación · Publicación · Estado de entrega' },
      { title: 'Campañas de correo', icon: 'email', description: 'Prepara diseños de correo con tu marca, textos para boletines, segmentos de audiencia y borradores de campaña listos para revisar y enviar.', detail: 'Diseño de correos · Planificación de audiencia · Borradores' },
      { title: 'Gestión de campañas', icon: 'campaign', description: 'Mantén conectados el objetivo, el trabajo web, el contenido, la actividad de prospectos y los entregables de cada campaña.', detail: 'Briefs de campaña · Entregables · Progreso' },
    ],
  },
  {
    id: 'grow', label: 'Encontrar y crecer', headline: 'Conecta el marketing con la próxima oportunidad.',
    description: 'Investiga las empresas correctas, prepara una mejor prospección y dale un siguiente paso claro a cada conversación prometedora.',
    features: [
      { title: 'Investigación de prospectos', icon: 'search', description: 'Encuentra prospectos según tu perfil de cliente ideal, incluido el cargo, nivel de responsabilidad, empresa, mercado y ubicación.', detail: 'Descubrimiento de prospectos · Listas de investigación · Exportaciones CSV' },
      { title: 'Enriquecimiento de contactos', icon: 'contacts', description: 'Convierte la investigación en registros útiles con información de la empresa y datos de contacto disponibles para tu proceso comercial.', detail: 'Contexto de empresa · Datos de contacto · Verificación' },
      { title: 'Señales de compra', icon: 'signal', description: 'Investiga señales públicas de cambio: contrataciones, expansión, financiamiento, nuevos directivos y otros motivos oportunos para iniciar una conversación.', detail: 'Señales de negocio · Enlaces a fuentes · Contexto de investigación' },
      { title: 'Prospectos y CRM', icon: 'pipeline', description: 'Sigue los contactos desde una consulta nueva hasta la reunión, propuesta y resultado. Mantén visibles responsables, notas, fechas y próximas acciones.', detail: 'Etapas del pipeline · Responsables · Seguimiento' },
      { title: 'Prospección y seguimiento', icon: 'email', description: 'Prepara secuencias relevantes de prospección y seguimiento, lanza campañas aprobadas y organiza las respuestas desde cuentas de envío conectadas.', detail: 'Secuencias · Gestión de respuestas · Controles de envío' },
      { title: 'Gestión de Google Ads', icon: 'campaign', description: 'Prepara y gestiona campañas de búsqueda, anuncios, palabras clave, pujas y presupuestos con la dirección de tu equipo y las reglas de aprobación acordadas.', detail: 'Campañas · Palabras clave · Controles de presupuesto' },
    ],
  },
  {
    id: 'coordinate', label: 'Trabajar en equipo', headline: 'Mantén juntas las conversaciones, decisiones y próximas acciones.',
    description: 'Tu agente y tu equipo de marketing trabajan con el mismo contexto del negocio, mientras tú controlas las decisiones importantes.',
    features: [
      { title: 'Chat con el equipo y el agente', icon: 'chat', description: 'Comparte prioridades, consulta a tu agente de IA dedicado y revisa el trabajo con tu equipo de marketing en una conversación continua.', detail: 'Briefs · Comentarios · Conversación compartida' },
      { title: 'Grabación y notas de reuniones', icon: 'meeting', description: 'Solicita un asistente de notas para una llamada específica. Captura la transcripción, resume decisiones y convierte la conversación en seguimiento útil.', detail: 'Grabación · Transcripciones · Próximas acciones' },
      { title: 'Aprobaciones y prioridades diarias', icon: 'check', description: 'Revisa qué necesita tu aprobación, qué está pendiente y qué ya se publicó. Aprueba el trabajo o solicita cambios con el contexto necesario.', detail: 'Cola de revisión · Tareas · Actividad reciente' },
      { title: 'Espacio de trabajo conectado', icon: 'workspace', description: 'Integra el correo, calendario, documentos, hojas de cálculo y trabajo de proyectos autorizados en un mismo ritmo operativo.', detail: 'Correo · Calendarios · Documentos · Tareas' },
      { title: 'Conversaciones con clientes', icon: 'chat', description: 'En cuentas de WhatsApp habilitadas, gestiona conversaciones activas con respuestas, reglas aprobadas y transferencia al equipo.', detail: 'Bandeja de WhatsApp · Respuestas · Transferencia al equipo' },
      { title: 'Flujos de reservas y facturación', icon: 'calendar', description: 'Cuando esté configurado, conecta reservas, preparación de facturas, enlaces de pago y facturación recurrente aprobada con la siguiente acción del negocio.', detail: 'Configuración definida · Reservas · Facturas y suscripciones' },
    ],
  },
  {
    id: 'learn', label: 'Entender y mejorar', headline: 'Toma la siguiente decisión con más contexto.',
    description: 'Lleva la memoria del negocio, la investigación y los informes conectados al siguiente brief.',
    features: [
      { title: 'Memoria del negocio', icon: 'memory', description: 'Los datos, la voz, las decisiones creativas, los patrones aprobados y los comentarios de tu negocio quedan disponibles para el siguiente trabajo.', detail: 'Contexto de marca · Decisiones · Comentarios aprobados' },
      { title: 'Centro de marca y referencias', icon: 'design', description: 'Mantén juntos logotipos, guías, fotografías, ejemplos aprobados y referencias creativas para que cada trabajo comience con la base correcta.', detail: 'Recursos de marca · Guías · Biblioteca de referencias' },
      { title: 'SEO e investigación competitiva', icon: 'search', description: 'Investiga palabras clave y competidores, revisa posiciones y enlaces entrantes, e identifica oportunidades de contenido y mejoras técnicas.', detail: 'Palabras clave · Posiciones · Competidores · Revisión de páginas' },
      { title: 'Visibilidad en búsquedas con IA', icon: 'signal', description: 'Investiga cómo aparece tu marca en respuestas de IA y resúmenes de búsqueda compatibles, e identifica formas más claras de explicar tu negocio en línea.', detail: 'Respuestas de IA · Presencia de marca · Oportunidades de contenido' },
      { title: 'Informes de publicidad', icon: 'chart', description: 'Consulta inversión, clics, conversiones, costos de adquisición y retorno publicitario de Google Ads conectado, con desglose de campañas y tendencias diarias.', detail: 'Resultados de campaña · Inversión · Conversiones · Tendencias' },
      { title: 'Analítica del sitio web', icon: 'chart', description: 'Solicita informes sobre tráfico, actividad y embudos de conversión del sitio conectado. Dale un punto de partida más claro a la siguiente campaña.', detail: 'Tráfico · Embudos · Informes conectados' },
    ],
  },
] as const;

export const connectionGroupsEs: ReadonlyArray<{ title: string; description: string; apps: readonly ToolReference[]; note: string }> = [
  { title: 'Redes y comunidad', description: 'Publica contenido aprobado mediante las cuentas sociales que utiliza tu negocio.',
    apps: ['instagram', 'facebook', 'linkedin', 'tiktok', 'youtube', 'x', 'threads', 'pinterest', 'reddit', 'bluesky', 'google-business-profile', 'telegram', 'snapchat', 'discord'],
    note: 'Los formatos y acciones disponibles dependen de la cuenta conectada.' },
  { title: 'Correo y espacio de trabajo', description: 'Trabaja con calendarios, documentos, campañas y tareas de proyecto conectados.',
    apps: ['mailchimp', 'gmail', 'google-calendar', 'google-drive', 'google-docs', 'google-sheets', 'google-contacts', 'outlook', 'microsoft-teams', 'monday'],
    note: 'El acceso al correo, documentos y tareas respeta los permisos que apruebas.' },
  { title: 'Reuniones y conversaciones', description: 'Lleva las decisiones de una llamada al trabajo que sigue.',
    apps: [{ id: 'zoom', context: 'Grabación de reuniones' }, { id: 'google-meet', context: 'Grabación de reuniones' }, { id: 'microsoft-teams', context: 'Grabación de reuniones' }, { id: 'whatsapp', context: 'Bandeja de clientes' }],
    note: 'La grabación se solicita por reunión. Los flujos de bandeja para clientes requieren activación de la cuenta.' },
  { title: 'Búsqueda y rendimiento', description: 'Conecta la gestión y los informes de campañas con tus propias cuentas.',
    apps: [{ id: 'google-ads', context: 'Gestión de campañas' }, { id: 'google-analytics', context: 'Informes del sitio web' }],
    note: 'La investigación de palabras clave, competidores y respuestas de IA orienta la dirección del marketing.' },
  { title: 'Sitios web y contenido', description: 'Prepara, revisa y publica cambios mediante la configuración actual de tu sitio web.',
    apps: ['wordpress', 'shopify', 'woocommerce', 'webflow', 'wix', 'squarespace', 'contentful', 'sanity', 'agility-cms', 'github', 'gitlab', 'vercel', 'cloudflare', 'supabase', 'firebase', 'html5', 'css3', 'javascript', 'react', 'nextjs', 'php'],
    note: 'Repositorios conectados, sitios alojados y flujos compatibles de publicación basados en archivos.' },
  { title: 'CRM y operaciones del negocio', description: 'Conecta el contexto comercial, las próximas acciones y los flujos de facturación aprobados.',
    apps: [{ id: 'kommo', context: 'Contactos, prospectos y tareas' }, { id: 'hubspot', context: 'Contactos, negocios y campañas' }, { id: 'salesforce', context: 'Prospectos, oportunidades y actividades' }, { id: 'pipedrive', context: 'Negocios, contactos y seguimiento' }, { id: 'zoho', context: 'Prospectos, contactos y pipelines' }, { id: 'dynamics365', context: 'Ventas, servicio y operaciones' }, { id: 'active-campaign', context: 'Contactos, automatización y pipelines' }, { id: 'close', context: 'Prospectos, llamadas y seguimiento' }, { id: 'attio', context: 'Contactos, empresas y negocios' }, { id: 'highlevel', context: 'Prospectos, embudos y automatización' }, { id: 'apollo', context: 'Prospectos, contactos y secuencias' }, { id: 'stripe', context: 'Facturas y pagos' }],
    note: 'Las acciones disponibles respetan los permisos y el método de conexión aprobados para cada cuenta.' },
];

export const featureToolsEs: Record<string, ToolId> = {
  'Gestión de Google Ads': 'google-ads',
  'Conversaciones con clientes': 'whatsapp',
  'Informes de publicidad': 'google-ads',
  'Analítica del sitio web': 'google-analytics',
};
