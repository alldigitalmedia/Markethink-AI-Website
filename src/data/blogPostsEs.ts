import { getB2BEditorialImage } from "./b2bEditorialImages";
import type { BlogPost } from "./blogPosts";

export type SpanishBlogPost = BlogPost & {
  sourceSlug: string;
};

const editorialImage = (route: string) => {
  const image = getB2BEditorialImage(route);
  return {
    image: image.desktop,
    imageMobile: image.mobile,
    imageThumbnail: image.thumbnail,
    imageSharing: image.sharing,
    imageAlt: image.alt,
  };
};

export const spanishInsightPosts: SpanishBlogPost[] = [
  {
    sourceSlug: "how-to-use-ai-to-create-an-impactful-logo-and-brand-identity-for-your-business",
    slug: "como-crear-un-logo-con-ia-y-construir-una-identidad-de-marca-util",
    title: "Cómo crear un logo con IA y construir una identidad de marca útil",
    seoTitle: "Cómo crear un logo con IA: guía práctica completa | Markethink",
    description:
      "Aprende a crear un logo con IA, redactar mejores prompts, evaluar conceptos, probar usos reales, revisar derechos y preparar archivos de marca listos para producción.",
    excerpt:
      "Una guía práctica para definir el brief, redactar prompts, evaluar, refinar, probar, revisar y organizar un sistema de logo e identidad asistido por IA.",
    label: "GUÍA PRÁCTICA",
    ...editorialImage("/blog/how-to-use-ai-to-create-an-impactful-logo-and-brand-identity-for-your-business/"),
    imageAlt:
      "Escena editorial conceptual de un equipo que revisa una maqueta arquitectónica y materiales de identidad.",
    publishedDate: "2026-09-07",
    updatedDate: "2026-09-08",
    readingTime: "20 min de lectura",
    category: "Estrategia de marca",
    keywords: [
      "cómo crear un logo con IA",
      "diseño de logos con IA",
      "identidad de marca con IA",
      "crear una identidad de marca con IA",
      "prompt para logo con IA",
      "proceso de diseño de logo",
      "sistema de identidad de marca",
    ],
    author: {
      name: "Equipo editorial de Markethink",
      title: "Sistemas de marketing con IA gestionados por expertos en marketing",
    },
    intro: [
      "Para crear un logo con IA, comienza con un brief de negocio que permita tomar decisiones, genera un número reducido de territorios visuales distintos, evalúa cada dirección con los mismos criterios y luego reconstruye y prueba el concepto más sólido como un sistema de identidad completo.",
      "El error habitual es aprobar la primera imagen atractiva. Un logo generado todavía puede ser genérico, ilegible en tamaños pequeños, difícil de reproducir, estar construido con una tipografía débil o parecerse demasiado a una marca existente. Esos problemas se vuelven más costosos después de imprimir letreros, crear plantillas y comenzar a usar la identidad.",
      "Esta guía cubre el proceso completo: qué puede y qué no puede hacer la IA, el brief de negocio, la elección de herramientas, la estrategia de prompts, cinco ejemplos hipotéticos, los territorios visuales, una matriz de evaluación completa, un sistema de identidad desarrollado, la limpieza de vectores y tipografía, las pruebas de uso real, la revisión de derechos, los archivos de producción y las correcciones habituales.",
      "Todos los negocios de esta guía son hipotéticos y sus nombres no han pasado por una revisión de marcas. La orientación sobre derechos es información educativa general, no asesoría legal.",
    ],
    seoHubLink: {
      copy: "Para conocer la operación de marketing más amplia que mantiene el contexto de marca conectado con las campañas y las aprobaciones, consulta",
      anchor: "marketing con IA para pequeñas empresas",
      href: "/ai-marketing-for-small-business/",
    },
    recommendedGuide: {
      copy: "Para pasar de la identidad a la ejecución, consulta",
      anchor: "Cómo usar la IA para marketing: una guía práctica para pequeñas empresas",
      href: "/blog/how-to-use-ai-for-marketing-small-business/",
    },
    relatedSlugs: [],
    sections: [
      { heading: "Entiende qué puede y qué no puede hacer la IA", body: [] },
      { heading: "Redacta el brief de negocio", body: [] },
      { heading: "Elige las herramientas según el trabajo", body: [] },
      { heading: "Usa una estrategia de prompts controlada", body: [] },
      { heading: "Estudia cinco prompts hipotéticos", body: [] },
      { heading: "Genera territorios conceptuales", body: [] },
      { heading: "Evalúa los conceptos antes de aprobarlos", body: [] },
      { heading: "Construye el sistema de identidad", body: [] },
      { heading: "Limpia los vectores y la tipografía", body: [] },
      { heading: "Prueba la identidad en usos reales", body: [] },
      { heading: "Revisa los derechos y la disponibilidad", body: [] },
      { heading: "Organiza los archivos de producción", body: [] },
      { heading: "Corrige los fallos más comunes", body: [] },
    ],
    faq: [
      {
        question: "¿La IA puede crear un logo profesional para una empresa?",
        answer:
          "La IA puede generar conceptos útiles y acelerar la exploración visual. Un resultado profesional todavía requiere un brief de negocio claro, una evaluación consistente, el refinamiento de la tipografía y la geometría, pruebas en usos reales, la preparación completa de archivos y una revisión experta responsable.",
      },
      {
        question: "¿Qué debo incluir en un prompt para crear un logo con IA?",
        answer:
          "Incluye la categoría del negocio, la audiencia específica, el diferenciador real, los rasgos deseados y no deseados, las aplicaciones prácticas, los requisitos de formato y dos o tres territorios visuales distintos. Pide también la justificación y la posible debilidad de cada dirección, no solo una imagen.",
      },
      {
        question: "¿Cuántos conceptos de logo con IA debo generar?",
        answer:
          "Genera los suficientes para comparar unas pocas direcciones visuales realmente distintas y luego reduce las opciones. Un conjunto enfocado es más útil que decenas de variaciones menores porque permite ver con claridad los criterios y las decisiones.",
      },
      {
        question: "¿Cómo elijo el mejor logo generado con IA?",
        answer:
          "Evalúa los finalistas por relevancia para el negocio, diferenciación, simplicidad, escalabilidad, flexibilidad y facilidad de uso. Después prueba los candidatos más sólidos en tamaños pequeños, en un solo color, sobre fondos claros y oscuros y en puntos de contacto reales.",
      },
      {
        question: "¿Un logo es lo mismo que una identidad de marca?",
        answer:
          "No. Un logo identifica a la empresa. Una identidad de marca también define el color, la tipografía, las imágenes, el diseño, la voz, los patrones de aplicación y la gobernanza para que la empresa se presente de forma consistente en todos sus canales.",
      },
      {
        question: "¿Qué archivos debe incluir un paquete final de logo?",
        answer:
          "Un paquete práctico incluye un archivo vectorial maestro editable, un archivo con texto editable y datos de las fuentes, una copia de producción con el texto convertido a contornos, SVG, EPS, PDF listo para impresión, PNG transparentes, tamaños de favicon, especificaciones de color para pantalla e impresión, versiones claras, oscuras y de un color, composiciones horizontales y compactas, instrucciones de uso y un registro de aprobación.",
      },
      {
        question: "¿Cómo convierto un logo generado con IA en un vector?",
        answer:
          "Usa el trazado automático solo como punto de partida. Abre el resultado en un editor vectorial, confirma que contiene trazados editables y no un mapa de bits incrustado, elimina anclas y máscaras innecesarias, redibuja curvas y esquinas débiles, vuelve a componer el nombre y prueba el archivo limpio en tamaños muy pequeños y muy grandes.",
      },
      {
        question: "¿Puedo usar comercialmente un logo generado con IA?",
        answer:
          "Es posible, pero la respuesta depende de los términos del proveedor, la cuenta y el plan, las entradas, el contenido de terceros, el uso previsto y la legislación aplicable. El permiso contractual no demuestra exclusividad, protección por derechos de autor, disponibilidad de marca ni ausencia de infracción. Revisa los términos vigentes y consulta a un profesional calificado para decisiones críticas del negocio.",
      },
      {
        question: "¿Un logo generado con IA puede tener protección de derechos de autor?",
        answer:
          "En Estados Unidos, la Oficina de Derechos de Autor indica que el material generado íntegramente por IA no es protegible, mientras que la expresión creada por personas, la selección o disposición creativa y las modificaciones creativas pueden estar protegidas según los hechos. Conserva registros del redibujo humano, la tipografía, el espaciado, la composición y el diseño del sistema. Esta es información general, no asesoría legal.",
      },
      {
        question: "¿Se puede registrar como marca un logo generado con IA?",
        answer:
          "La generación con IA no determina la disponibilidad de una marca. Busca nombres y diseños similares, considera el sonido, la apariencia, el significado, la impresión comercial general y los productos o servicios relacionados. Solicita una revisión profesional cuando el riesgo de registro, fabricación o cambio de marca sea importante.",
      },
      {
        question: "¿Los logos deben cumplir las reglas de contraste de WCAG?",
        answer:
          "WCAG 2.2 exime al texto que forma parte de un logo o nombre de marca del criterio mínimo de contraste para texto, pero esa exención no cubre el sitio web, la navegación, los botones, el texto del cuerpo, los estados de formularios ni los gráficos significativos. Prueba cada aplicación aprobada y prepara una versión del logo con mayor contraste cuando sea práctico.",
      },
    ],
  },
  {
    sourceSlug: "what-is-an-ai-marketing-agency",
    slug: "que-es-una-agencia-de-marketing-con-ia",
    title: "¿Qué es una agencia de marketing con IA? Lo que realmente gestiona",
    seoTitle: "¿Qué es una agencia de marketing con IA? Guía para compradores | Markethink",
    description:
      "Descubre qué hace una agencia de marketing con IA, qué deben seguir dirigiendo los expertos y cómo se conectan el sitio web, el contenido, las campañas, los prospectos, el CRM y el seguimiento.",
    excerpt:
      "Una guía práctica para entender qué debe gestionar una agencia de marketing con IA, dónde hace falta el criterio experto y cómo debe conectarse el trabajo con tu proceso comercial.",
    label: "GUÍA PARA COMPRADORES",
    ...editorialImage("/blog/what-is-an-ai-marketing-agency/"),
    imageAlt:
      "Escena editorial conceptual de un equipo de contenido documentando infraestructura tecnológica.",
    publishedDate: "2026-08-30",
    updatedDate: "2026-09-19",
    readingTime: "12 min de lectura",
    category: "Marketing con IA",
    keywords: [
      "qué es una agencia de marketing con IA",
      "qué hace una agencia de marketing con IA",
      "servicios de una agencia de marketing con IA",
      "responsabilidades de una agencia de marketing con IA",
      "agencia de marketing con IA frente a agencia tradicional",
      "marketing con IA gestionado",
    ],
    author: {
      name: "Markethink Editorial Team",
      title: "AI marketing systems managed by expert marketers",
    },
    intro: [
      "Una agencia de marketing con IA usa inteligencia artificial para acelerar la investigación, la producción, la organización y la ejecución repetitiva. Pero la velocidad solo es útil cuando alguien sigue dirigiendo la estrategia, revisa el trabajo, protege la marca y responde por lo que llega al mercado.",
      "El mejor modelo no es una colección de generadores que trabajan de forma aislada. Es una operación de marketing gestionada. Las actualizaciones del sitio web, el contenido para redes sociales, las campañas, la publicidad, la captación de prospectos, el contexto del CRM, el seguimiento y los resultados deben avanzar con un mismo ritmo conectado, en lugar de reiniciarse en herramientas y conversaciones separadas.",
      "Esta diferencia importa porque cada campaña lanzada sin contexto compartido crea más trabajo de revisión y otro rastro desconectado de decisiones que la siguiente campaña tendrá que reconstruir.",
      "Esta guía explica qué debe gestionar realmente una agencia de marketing con IA, qué decisiones corresponden a los expertos en marketing y a la empresa, y qué conviene preguntar antes de elegir un proveedor.",
    ],
    methodNote:
      "Esta guía refleja la perspectiva operativa de Markethink para evaluar una agencia de marketing con IA gestionada. Organiza criterios de alcance, revisión, aprobación y seguimiento; no presenta investigación, pruebas ni resultados de clientes.",
    relatedSlugs: [],
    sections: [
      {
        heading: "Una agencia de marketing con IA debe gestionar una operación, no solo generar piezas",
        body: [
          "Muchas empresas conocen por primera vez el marketing con IA a través de una tarea puntual: redactar una publicación, crear una imagen, resumir una investigación o producir varias versiones de un anuncio. Estos usos pueden ahorrar tiempo, pero no crean automáticamente un mejor marketing.",
          "El marketing se vuelve útil cuando el trabajo está ligado a un objetivo de negocio, llega a la audiencia correcta, ofrece al comprador un siguiente paso claro y genera información que el equipo puede aprovechar después. Eso exige coordinar más de una pieza.",
          "Por eso, una agencia de marketing con IA competente debe gestionar el recorrido desde la prioridad hasta el resultado. El trabajo comienza con el objetivo del negocio y continúa con el resumen de campaña, la producción, la revisión experta, la aprobación, el lanzamiento, la gestión de prospectos, la medición y la siguiente decisión. La IA aporta ritmo y continuidad. Los expertos en marketing asumen el criterio y la responsabilidad.",
        ],
        bullets: [
          "Un objetivo de negocio y una acción del comprador para cada campaña",
          "Un plan de piezas conectadas en lugar de borradores sin relación",
          "Revisión experta antes de publicar trabajo importante",
          "Un proceso de aprobación definido para la empresa",
          "Captación de prospectos, seguimiento y aprendizaje después del lanzamiento",
        ],
      },
      {
        heading: "El trabajo comienza con contexto de negocio y un resumen de campaña claro",
        body: [
          "Antes de producir contenido, la agencia debe conocer el negocio lo suficiente como para tomar decisiones útiles. Esto incluye la oferta, la audiencia, el posicionamiento, la voz de marca, la evidencia aprobada, las prioridades actuales, el proceso comercial y la acción que debería realizar el comprador a continuación.",
          "La IA puede organizar este contexto y facilitar su reutilización. Un experto en marketing todavía debe decidir qué problema del cliente importa, qué promesa se puede respaldar, qué canal merece atención y qué no debe decirse. La empresa sigue siendo responsable de los precios, los riesgos, los compromisos con clientes y la aprobación final.",
          "Un buen resumen de campaña hace visibles esas responsabilidades. Define el objetivo, la audiencia, la oferta, el mensaje, la evidencia, las piezas, los canales, el llamado a la acción, la persona responsable de aprobar, el destino de los prospectos y la señal de éxito. Sin ese resumen de campaña, una producción más rápida puede generar más trabajo de revisión en lugar de más progreso.",
        ],
      },
      {
        heading: "Ejemplo hipotético",
        body: [
          "Una empresa de servicios B2B quiere generar solicitudes de diagnóstico para una oferta aprobada. Este flujo muestra cómo una agencia gestionada puede convertir esa prioridad en decisiones conectadas sin presentar el escenario como un caso real ni atribuirle resultados.",
        ],
        bullets: [
          "Objetivo de negocio: generar solicitudes de diagnóstico de compradores con un problema que la oferta puede resolver.",
          "Audiencia y resumen: definir el perfil comprador, la oferta, el mensaje permitido, la evidencia disponible, el llamado a la acción y las señales a observar.",
          "Piezas y canales: preparar una página de destino, contenido social, correo electrónico y anuncios solo donde cada pieza tenga una función clara.",
          "Decisión de revisión experta: retirar una afirmación que no tiene respaldo suficiente y ajustar el recorrido para que el siguiente paso sea claro.",
          "Aprobación de la empresa: confirmar la oferta, las afirmaciones, el presupuesto, las piezas y la publicación.",
          "Prospecto, CRM y seguimiento: registrar el origen y el interés, asignar responsable y preparar el siguiente contacto para revisión cuando corresponda.",
          "Siguiente decisión: revisar preguntas, objeciones y avance comercial para decidir qué mensaje, pieza o canal conviene ajustar después.",
        ],
      },
      {
        heading: "El sitio web, el contenido, las redes sociales, las campañas y la publicidad deben trabajar juntos",
        body: [
          "Una agencia de marketing con IA debe poder convertir una prioridad aprobada en la combinación adecuada de sitio web, contenido, redes sociales, campañas y publicidad. Una campaña puede necesitar una actualización de la página de destino, un artículo útil, contenido para redes sociales, apoyo por correo electrónico, creatividad para medios pagados y un destino de conversión claro. No siempre necesita todos los canales al mismo tiempo.",
          "La diferencia importante es la coordinación. El sitio web debe explicar la misma oferta que promueve la campaña. El artículo debe responder las preguntas que frenan una decisión. El contenido social debe dar una razón para visitar. La publicidad debe usar afirmaciones aprobadas y dirigir a una página relevante. Cada pieza debe cumplir una función dentro del mismo recorrido del comprador.",
          "La IA ayuda a crear y adaptar el trabajo con eficiencia. Los expertos en marketing eligen el enfoque, revisan las afirmaciones, protegen el estándar creativo y deciden si la pieza está lista. El resultado debe sentirse como una sola campaña, no como varias entregas sin relación producidas por sistemas diferentes.",
        ],
        links: [
          {
            paragraphIndex: 0,
            anchor: "sitio web, contenido, redes sociales, campañas y publicidad",
            href: "/es/funciones/",
          },
        ],
        image: "/images/ai-marketing-agency-guide/ai-marketing-agency-connected-work.svg",
        imageAlt:
          "Mapa de trabajo de marketing conectado que muestra cómo el sitio web, el contenido, las redes sociales, las campañas y la publicidad conducen a prospectos, CRM y seguimiento.",
      },
      {
        heading: "El marketing debe conectarse con los prospectos, el CRM y el seguimiento",
        body: [
          "Publicar no es el final del trabajo de marketing. Cuando una persona envía un formulario, responde a una campaña, reserva una llamada o muestra interés, el siguiente paso debe estar claro. La consulta necesita contexto de origen, una persona responsable, un estado y una acción de seguimiento.",
          "Una operación apoyada por IA puede organizar los datos del prospecto, resumir el contexto de la campaña, preparar borradores de respuesta, señalar información faltante y recordar al equipo el siguiente paso. No debe fingir que controla decisiones delicadas de relación ni enviar mensajes de alto riesgo sin aprobación.",
          "Esta conexión importa porque la calidad del marketing no puede juzgarse solo por la cantidad de publicaciones o borradores. La empresa necesita saber si el trabajo genera visitas calificadas, conversaciones útiles, próximos pasos completados y mejor información para la siguiente campaña. Mantener conectados el CRM y el seguimiento permite ese aprendizaje.",
        ],
        bullets: [
          "Registrar la fuente, la campaña, la oferta y el siguiente paso solicitado",
          "Mantener al día la persona responsable, el estado y la fecha de seguimiento de cada oportunidad",
          "Preparar respuestas con el contexto relevante del negocio y de la campaña",
          "Devolver las objeciones y preguntas recurrentes al plan de contenidos",
        ],
      },
      {
        heading: "Los expertos en marketing deben dirigir la estrategia, la revisión y la responsabilidad",
        body: [
          "Una agencia de marketing con IA creíble debe explicar con precisión qué hace la IA y qué sigue siendo responsabilidad de las personas. Según el sistema, el contexto disponible y las reglas configuradas, la IA puede ayudar a organizar información, producir primeros borradores, adaptar material aprobado, mantener la continuidad y completar trabajo repetitivo. También puede señalar patrones y preparar opciones para revisión; no elimina la necesidad de criterio.",
          "Los expertos en marketing deben dirigir el posicionamiento, la estrategia de campaña, las prioridades de canal, la dirección creativa, la revisión de afirmaciones, las recomendaciones importantes de presupuesto y el control de calidad. Deben poder explicar por qué existe el trabajo, cómo apoya al negocio y qué debe cambiar cuando el resultado es débil.",
          "La empresa debe conservar la autoridad final sobre la oferta, la postura de precios, el riesgo legal o reputacional, las decisiones importantes de relación y la aprobación de publicaciones. La profundidad de la revisión puede variar según la pieza, pero la responsabilidad nunca debe volverse ambigua solo porque la IA ayudó a producir el trabajo.",
          "Mapa breve de responsabilidades y alcance. Las condiciones exactas dependen del acuerdo de servicio:",
        ],
        bullets: [
          "Posicionamiento: IA organiza contexto y opciones; expertos en marketing dirigen el enfoque; la empresa valida la oferta, la evidencia y los límites; la investigación o arquitectura adicional requiere alcance personalizado.",
          "Revisión de afirmaciones: IA puede señalar vacíos; expertos revisan respaldo y riesgo; la empresa confirma hechos internos; la revisión legal o regulatoria especializada requiere alcance personalizado.",
          "Producción: IA apoya borradores y adaptaciones; expertos dan dirección y control de calidad; la empresa aporta insumos y aprueba; formatos o producción especializada requieren alcance personalizado.",
          "Publicación: IA puede preparar trabajo dentro de controles aprobados; expertos verifican que esté listo; la empresa autoriza según el proceso acordado; sistemas o flujos no estándar requieren alcance personalizado.",
          "Decisiones de presupuesto: IA puede organizar escenarios; expertos formulan recomendaciones; la empresa toma la decisión final; compras o aprobaciones financieras especiales quedan en alcance personalizado.",
          "Seguimiento de prospectos: IA puede organizar contexto, borradores y recordatorios; expertos definen la lógica y las escalaciones; la empresa conserva las relaciones y mensajes delicados; automatizaciones complejas requieren alcance personalizado.",
          "Integraciones complejas: IA no sustituye la implementación; expertos definen requisitos; la empresa aprueba accesos y riesgos; cada integración compleja requiere evaluación y alcance personalizado.",
        ],
      },
      {
        heading: "Las aprobaciones y los resultados deben mejorar la siguiente ronda de trabajo",
        body: [
          "En muchos equipos, el contexto útil puede perderse entre campañas. Se rechaza un titular, se aprueba una dirección visual, aparece repetidamente una objeción del comprador o un mensaje de seguimiento obtiene mejores respuestas, pero el aprendizaje puede quedar en una conversación o en la memoria de alguien.",
          "Una operación de marketing con IA gestionada debe registrar la parte útil de esas decisiones. El siguiente resumen de campaña puede comenzar con referencias aprobadas, correcciones conocidas, historial de desempeño y la prioridad actual del negocio. Esto no significa repetir ciegamente el trabajo anterior. Significa comenzar con mejor contexto y tomar una siguiente decisión más informada.",
          "El ciclo de aprendizaje es directo: la agencia prepara el trabajo, los expertos lo revisan, la empresa lo aprueba, la campaña se publica, se recopilan respuestas reales y se ajusta la siguiente prioridad. Con el tiempo, este proceso puede reducir las explicaciones repetidas y puede hacer que la operación sea más consistente sin quitar el control humano. Revisar el trabajo publicado y su verificación ayuda a distinguir lo que se lanzó de lo que aún está pendiente.",
        ],
        links: [
          {
            paragraphIndex: 2,
            anchor: "trabajo publicado y su verificación",
            href: "/es/trabajo-real/",
          },
        ],
        image: "/images/ai-marketing-agency-guide/ai-marketing-agency-approval-results-loop.svg",
        imageAlt:
          "Ciclo continuo de marketing que conecta la revisión experta, la aprobación de la empresa, el trabajo publicado, los resultados reales y la siguiente decisión.",
      },
      {
        heading: "Lo que una agencia de marketing con IA no debe prometer",
        body: [
          "La presencia de IA no garantiza posiciones en buscadores, prospectos, ingresos, mejoras de conversión ni alcance viral. Los resultados dependen de la oferta, el mercado, la audiencia, la evidencia, el presupuesto, la ejecución, el proceso comercial y muchas condiciones fuera del control de un proveedor de marketing.",
          "Un proveedor responsable también debe evitar insinuar que todas las integraciones, aplicaciones internas o flujos de datos inusuales están incluidos en un servicio estándar. Las integraciones personalizadas complejas, el movimiento de datos y el trabajo de implementación especializado deben evaluarse y cotizarse por separado.",
          "La señal más segura es la claridad operativa. Debes saber qué se gestiona, quién lo revisa, qué requiere aprobación, a dónde llegan los prospectos, cómo se interpretan los resultados y qué ocurre cuando el trabajo no cumple su objetivo.",
        ],
      },
      {
        heading: "Preguntas que conviene hacer antes de elegir una agencia de marketing con IA",
        body: [
          "Las preguntas correctas revelan si estás comprando una gestión de marketing conectada o solo una producción de piezas más rápida. Pide al proveedor que explique una campaña completa, desde el objetivo del negocio hasta el seguimiento, y que muestre dónde toman las personas las decisiones importantes.",
        ],
        bullets: [
          "¿Cómo conocerán nuestra oferta, audiencia, voz, evidencia y reglas de aprobación?",
          "¿Quién dirige la estrategia, la dirección creativa, la revisión de afirmaciones y la calidad final?",
          "¿Cómo se mantienen conectados el sitio web, el contenido, las redes sociales, la publicidad y las campañas?",
          "¿Qué ocurre después de que llega un prospecto o una consulta?",
          "¿Cómo se usan las correcciones y preferencias aprobadas en el trabajo futuro?",
          "¿Qué acciones de publicación, presupuesto y comunicación con clientes requieren nuestra aprobación?",
          "¿Qué trabajo está incluido y qué implementación personalizada se cotiza por separado?",
          "¿Cómo revisaremos los resultados y elegiremos la siguiente prioridad?",
        ],
      },
      {
        heading: "Elige el modelo operativo que corresponda al problema",
        body: [
          "Una herramienta de IA de autoservicio puede ser suficiente cuando tu equipo ya dirige la estrategia, la producción, la revisión, la publicación, la gestión de prospectos y la medición. Una agencia tradicional puede ser una buena opción cuando necesitas pensamiento especializado o ejecución externalizada. Una agencia de marketing con IA resulta más útil cuando buscas la velocidad y la continuidad de la IA, combinadas con dirección experta y una operación diaria conectada.",
          "La clave no es la etiqueta. Es si el proveedor puede mantener el trabajo en movimiento desde la prioridad hasta la campaña, desde la campaña hasta la consulta y desde los resultados reales hasta la siguiente decisión aprobada. Ese es el estándar que los compradores deberían usar para evaluar la categoría.",
        ],
      },
    ],
    faq: [
      {
        question: "¿Qué es una agencia de marketing con IA?",
        answer:
          "Una agencia de marketing con IA usa inteligencia artificial para apoyar la investigación, la producción, la organización, la adaptación y la ejecución repetitiva, mientras expertos en marketing dirigen la estrategia, revisan el trabajo, aplican su criterio y mantienen la responsabilidad. Una agencia sólida conecta las campañas con el sitio web, el contenido, la publicidad, los prospectos, el CRM, el seguimiento y la medición.",
      },
      {
        question: "¿Qué hace una agencia de marketing con IA?",
        answer:
          "Puede gestionar el contexto del negocio y de la marca, los resúmenes de campaña, las actualizaciones del sitio web, el contenido, las redes sociales, la coordinación publicitaria, la captación de prospectos, la organización del CRM, el apoyo al seguimiento, las aprobaciones, los informes y la siguiente decisión de campaña. El alcance exacto debe quedar claro antes de comenzar el servicio.",
      },
      {
        question: "¿Una agencia de marketing con IA es lo mismo que una herramienta de marketing con IA?",
        answer:
          "No. Una herramienta ayuda con una tarea específica y normalmente depende de tu equipo para aportar estrategia, contexto, revisión, publicación y seguimiento. Una agencia de marketing con IA debe gestionar un recorrido operativo más amplio y aportar dirección experta y responsabilidad al trabajo apoyado por IA.",
      },
      {
        question: "¿Una agencia de marketing con IA elimina la necesidad de profesionales de marketing?",
        answer:
          "No. El modelo más sólido apoya al negocio o al equipo de marketing existente con una producción más rápida, mejor organización y mayor continuidad, mientras las personas siguen siendo responsables de la estrategia, el criterio, la aprobación y las relaciones importantes con clientes.",
      },
      {
        question: "¿Cómo evalúo una agencia de marketing con IA?",
        answer:
          "Pregunta cómo conocerá la agencia tu negocio, quién dirige la estrategia y la calidad, cómo conecta las campañas entre canales, qué requiere aprobación, dónde se gestionan los prospectos y el seguimiento, cómo los resultados influyen en la siguiente decisión y qué trabajo personalizado se cotiza por separado.",
      },
    ],
  },
];
