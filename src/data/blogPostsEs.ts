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
    sourceSlug: "what-is-an-ai-marketing-agency",
    slug: "que-es-una-agencia-de-marketing-con-ia",
    title: "¿Qué es una agencia de marketing con IA? Lo que realmente gestiona",
    seoTitle: "¿Qué es una agencia de marketing con IA? Guía para compradores | Markethink",
    description:
      "Descubre qué hace una agencia de marketing con IA, qué deben seguir dirigiendo los expertos y cómo se conectan el sitio web, el contenido, las campañas, los prospectos, el CRM y el seguimiento.",
    excerpt:
      "Una guía práctica para entender qué debe gestionar una agencia de marketing con IA, dónde hace falta el criterio experto y cómo debe conectarse el trabajo con tu pipeline.",
    label: "GUÍA PARA COMPRADORES",
    ...editorialImage("/blog/what-is-an-ai-marketing-agency/"),
    imageAlt:
      "Escena editorial conceptual de un equipo de contenido documentando infraestructura tecnológica.",
    publishedDate: "2026-08-30",
    updatedDate: "2026-08-30",
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
    relatedSlugs: [],
    sections: [
      {
        heading: "Una agencia de marketing con IA debe gestionar una operación, no solo generar piezas",
        body: [
          "Muchas empresas conocen por primera vez el marketing con IA a través de una tarea puntual: redactar una publicación, crear una imagen, resumir una investigación o producir varias versiones de un anuncio. Estos usos pueden ahorrar tiempo, pero no crean automáticamente un mejor marketing.",
          "El marketing se vuelve útil cuando el trabajo está ligado a un objetivo de negocio, llega a la audiencia correcta, ofrece al comprador un siguiente paso claro y genera información que el equipo puede aprovechar después. Eso exige coordinar más de una pieza.",
          "Por eso, una agencia de marketing con IA competente debe gestionar el recorrido desde la prioridad hasta el resultado. El trabajo comienza con el objetivo del negocio y continúa con el brief, la producción, la revisión experta, la aprobación, el lanzamiento, la gestión de prospectos, la medición y la siguiente decisión. La IA aporta ritmo y continuidad. Los expertos en marketing asumen el criterio y la responsabilidad.",
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
        heading: "El trabajo comienza con contexto de negocio y un brief de campaña claro",
        body: [
          "Antes de producir contenido, la agencia debe conocer el negocio lo suficiente como para tomar decisiones útiles. Esto incluye la oferta, la audiencia, el posicionamiento, la voz de marca, la evidencia aprobada, las prioridades actuales, el proceso comercial y la acción que debería realizar el comprador a continuación.",
          "La IA puede organizar este contexto y facilitar su reutilización. Un experto en marketing todavía debe decidir qué problema del cliente importa, qué promesa se puede respaldar, qué canal merece atención y qué no debe decirse. La empresa sigue siendo responsable de los precios, los riesgos, los compromisos con clientes y la aprobación final.",
          "Un buen brief de campaña hace visibles esas responsabilidades. Define el objetivo, la audiencia, la oferta, el mensaje, la evidencia, las piezas, los canales, el llamado a la acción, la persona responsable de aprobar, el destino de los prospectos y la señal de éxito. Sin ese brief, una producción más rápida suele generar más trabajo de revisión en lugar de más progreso.",
        ],
      },
      {
        heading: "El sitio web, el contenido, las redes sociales, las campañas y la publicidad deben trabajar juntos",
        body: [
          "Una agencia de marketing con IA debe poder convertir una prioridad aprobada en la combinación adecuada de trabajo web y de canales. Una campaña puede necesitar una actualización de la landing page, un artículo útil, contenido para redes sociales, apoyo por correo electrónico, creatividad para medios pagados y un destino de conversión claro. No siempre necesita todos los canales al mismo tiempo.",
          "La diferencia importante es la coordinación. El sitio web debe explicar la misma oferta que promueve la campaña. El artículo debe responder las preguntas que frenan una decisión. El contenido social debe dar una razón para visitar. La publicidad debe usar afirmaciones aprobadas y dirigir a una página relevante. Cada pieza debe cumplir una función dentro del mismo recorrido del comprador.",
          "La IA ayuda a crear y adaptar el trabajo con eficiencia. Los expertos en marketing eligen el enfoque, revisan las afirmaciones, protegen el estándar creativo y deciden si la pieza está lista. El resultado debe sentirse como una sola campaña, no como varias entregas sin relación producidas por sistemas diferentes.",
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
          "Una agencia de marketing con IA creíble debe explicar con precisión qué hace la IA y qué sigue siendo responsabilidad de las personas. La IA es buena para organizar información, producir primeros borradores, adaptar material aprobado, mantener la continuidad y completar trabajo repetitivo. Puede detectar patrones y preparar opciones. No elimina la necesidad de criterio.",
          "Los expertos en marketing deben dirigir el posicionamiento, la estrategia de campaña, las prioridades de canal, la dirección creativa, la revisión de afirmaciones, las recomendaciones importantes de presupuesto y el control de calidad. Deben poder explicar por qué existe el trabajo, cómo apoya al negocio y qué debe cambiar cuando el resultado es débil.",
          "La empresa debe conservar la autoridad final sobre la oferta, la postura de precios, el riesgo legal o reputacional, las decisiones importantes de relación y la aprobación de publicaciones. La profundidad de la revisión puede variar según la pieza, pero la responsabilidad nunca debe volverse ambigua solo porque la IA ayudó a producir el trabajo.",
        ],
      },
      {
        heading: "Las aprobaciones y los resultados deben mejorar la siguiente ronda de trabajo",
        body: [
          "La mayoría de los equipos de marketing pierde contexto útil entre campañas. Se rechaza un titular, se aprueba una dirección visual, aparece repetidamente una objeción del comprador o un mensaje de seguimiento obtiene mejores respuestas, pero el aprendizaje queda en una conversación o en la memoria de alguien.",
          "Una operación de marketing con IA gestionada debe registrar la parte útil de esas decisiones. El siguiente brief puede comenzar con referencias aprobadas, correcciones conocidas, historial de desempeño y la prioridad actual del negocio. Esto no significa repetir ciegamente el trabajo anterior. Significa comenzar con mejor contexto y tomar una siguiente decisión más informada.",
          "El ciclo de aprendizaje es directo: la agencia prepara el trabajo, los expertos lo revisan, la empresa lo aprueba, la campaña se publica, se recopilan respuestas reales y se ajusta la siguiente prioridad. Con el tiempo, esto reduce las explicaciones repetidas y hace que la operación sea más consistente sin quitar el control humano.",
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
          "Puede gestionar el contexto del negocio y de la marca, los briefs de campaña, las actualizaciones del sitio web, el contenido, las redes sociales, la coordinación publicitaria, la captación de prospectos, la organización del CRM, el apoyo al seguimiento, las aprobaciones, los informes y la siguiente decisión de campaña. El alcance exacto debe quedar claro antes de comenzar el servicio.",
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
