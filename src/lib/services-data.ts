export type ServiceSolution = {
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  number: string;
  name: string;
  shortName: string;
  subtitle: string;
  tagline: string;
  question: string;
  solutionsIntro?: string;
  solutions: ServiceSolution[];
  impactItems?: string[];
  image: string;
  keywords: string[];
};

export const services: Service[] = [
  {
    slug: "estrategia-de-negocios",
    number: "01",
    name: "Estrategia de Negocios",
    shortName: "Estrategia de Negocios",
    subtitle: "Modelos · Competitividad · Expansión",
    tagline:
      "El modelo de negocio que te trajo hasta aquí no es el que te llevará al siguiente nivel. Nosotros construimos el que sí puede hacerlo.",
    question:
      "¿Tu empresa crece en facturación pero los márgenes no mejoran, y no hay claridad de por qué? ¿La estrategia comercial opera desconectada del modelo de negocio, como si fueran dos mundos distintos? ¿Tu organización está evaluando expansión a nuevos mercados sin una arquitectura estratégica que sostenga esa decisión?",
    solutionsIntro:
      "El problema no es falta de ambición: es falta de sistema. La mayoría de las empresas crecen sin rediseñar el modelo que las sostiene, convirtiendo el crecimiento en fricción acumulada. En Bosón construimos el sistema estratégico completo: modelo de negocio, estrategia competitiva, arquitectura comercial y estrategia de crecimiento, diseñados para funcionar de forma integrada, no como piezas sueltas.",
    solutions: [
      {
        title: "Diseño de modelos de negocio y estrategia competitiva",
        description:
          "Construcción del modelo que define cómo la organización crea, entrega y captura valor en su mercado. Arquitectura competitiva con lógica sistémica.",
      },
      {
        title: "Estrategia comercial y de marketing integrada al modelo",
        description:
          "La estrategia comercial no es un departamento aparte: es parte integral del modelo de negocio. La diseñamos integrada al sistema operativo del negocio.",
      },
      {
        title: "Expansión de mercados y posicionamiento estratégico",
        description:
          "Diseño de la estrategia de entrada a nuevos mercados con rigor técnico: análisis competitivo, segmentación, modelo go-to-market y plan de ejecución.",
      },
      {
        title: "Portafolio de productos y estrategia de crecimiento",
        description:
          "Evaluación y rediseño del portafolio de productos o servicios con visión estratégica de rentabilidad, posicionamiento y escalabilidad.",
      },
      {
        title: "Estrategia de entrada a mercados del Caribe y Centroamérica",
        description:
          "Adaptación de estrategias y metodologías globales a las particularidades del contexto regional. Para organizaciones que proyectan expansión en la región.",
      },
    ],
    impactItems: [
      "Un modelo de negocio documentado que el equipo comprende y opera con consistencia, sin depender de que Bosón regrese a explicarlo.",
      "Estrategia comercial y modelo alineados en un solo sistema, sin silos entre ventas, marketing y entrega de valor.",
      "Decisiones de expansión sustentadas en una arquitectura estratégica definida, no en intuición.",
    ],
    image: "/fotos-servicios/Servicio-1.jpg",
    keywords: [
      "estrategia de negocios",
      "modelo de negocio",
      "estrategia competitiva",
      "expansión de mercados",
      "consultoría estratégica República Dominicana",
    ],
  },
  {
    slug: "investigacion-aplicada",
    number: "02",
    name: "Investigación Aplicada",
    shortName: "Investigación Aplicada",
    subtitle: "Inteligencia · Mercado · Análisis",
    tagline:
      "Una decisión estratégica sin inteligencia de mercado es una apuesta. Nosotros construimos la inteligencia que reduce esa incertidumbre.",
    question:
      "¿Tu empresa toma decisiones de crecimiento, expansión o inversión basadas principalmente en experiencia, no en datos del mercado real? ¿Los estudios que has contratado terminaron en informes que nadie usó para tomar decisiones concretas? ¿Tienes la sensación de que tus competidores leen el entorno mejor que tú, y no sabes exactamente por qué?",
    solutionsIntro:
      "La inteligencia de mercado solo tiene valor cuando se convierte en decisiones. En Bosón no entregamos reportes de investigación: construimos análisis diseñados para resolver una pregunta estratégica específica. ¿Vale la pena entrar a este mercado? ¿Esta inversión tiene demanda suficiente? ¿Qué está haciendo el competidor que nosotros no vemos? Cada hallazgo se traduce en acción, no en páginas de contexto.",
    solutions: [
      {
        title: "Inteligencia de mercado y análisis del entorno macro y micro",
        description:
          "Análisis estructurado del entorno competitivo, tendencias sectoriales y señales del mercado que afectan las decisiones estratégicas de la organización.",
      },
      {
        title: "Investigación competitiva y señales del contexto empresarial",
        description:
          "Mapeo de la competencia, benchmarking estratégico y lectura de señales del entorno empresarial para fundamentar decisiones con precisión.",
      },
      {
        title: "Estudios de factibilidad y predicción de demanda",
        description:
          "Análisis cuantitativo y cualitativo para evaluar la viabilidad de proyectos, nuevos mercados o líneas de negocio antes de comprometer recursos.",
      },
      {
        title: "Análisis accionable como base de decisiones estratégicas",
        description:
          "No entregamos reportes de datos. Entregamos inteligencia accionable: análisis que clarifica opciones, reduce incertidumbre y mejora la precisión de cada decisión.",
      },
      {
        title: "Datos que reducen la incertidumbre en cada decisión",
        description:
          "Integración de la investigación al proceso de toma de decisiones de la organización. El objetivo no es tener más datos: es tomar mejores decisiones con los datos correctos.",
      },
    ],
    impactItems: [
      "Decisiones estratégicas respaldadas por inteligencia del mercado real, no por supuestos internos.",
      "Estudios de factibilidad que reducen el riesgo de inversión antes de comprometer capital.",
      "Un equipo directivo que opera con mayor precisión porque entiende el entorno, no solo el interior de su organización.",
    ],
    image: "/fotos-servicios/Servicio-2.jpg",
    keywords: [
      "investigación de mercado",
      "inteligencia de mercado",
      "análisis competitivo",
      "estudios de factibilidad",
      "inteligencia empresarial República Dominicana",
    ],
  },
  {
    slug: "excelencia-operacional",
    number: "03",
    name: "Excelencia Operacional",
    shortName: "Excelencia Operacional",
    subtitle: "Procesos · Eficiencia · Escalabilidad",
    tagline:
      "Las empresas no se estancan por falta de talento. Se estancan porque su sistema operativo no fue diseñado para el tamaño que quieren alcanzar.",
    question:
      "¿El crecimiento de tu empresa depende de personas clave que hacen heroísmos, en lugar de procesos que funcionan solos? ¿Los mismos errores operacionales se repiten una y otra vez porque no hay sistemas estandarizados que los prevengan? ¿Cada vez que la empresa crece, la operación se vuelve más compleja y más difícil de gestionar, en lugar de más simple?",
    solutionsIntro:
      "Lo que muchas empresas llaman 'problemas de personas' son en realidad problemas de sistema. En Bosón diagnosticamos los vacíos estructurales que generan ineficiencia: procesos sin estandarizar, cadenas de valor con cuellos de botella y métricas que no reflejan la realidad operacional. Construimos la arquitectura de procesos que permite escalar sin heroísmos. El resultado no es eficiencia por eficiencia: es un sistema operativo diseñado para el tamaño que la organización proyecta alcanzar.",
    solutions: [
      {
        title: "Arquitectura de procesos y modelos operativos escalables",
        description:
          "Diseño del modelo operativo que hace posible la ejecución consistente: procesos, roles, gobernanza y flujos construidos para el tamaño que se quiere alcanzar.",
      },
      {
        title: "Diagnóstico y rediseño de la cadena de valor",
        description:
          "Identificación de cuellos de botella, redundancias y vacíos en la cadena de valor. Rediseño con foco en eficiencia, velocidad y escalabilidad.",
      },
      {
        title: "Indicadores de negocio y sistemas de medición del desempeño",
        description:
          "Construcción de los KPIs y cuadros de mando que hacen visibles los resultados operativos y permiten tomar decisiones basadas en datos, no en intuición.",
      },
      {
        title: "Productividad y eficiencia operacional con enfoque estratégico",
        description:
          "Mejora de la productividad con criterio estratégico: no se optimiza todo, sino lo que genera mayor impacto en los resultados que la organización necesita producir.",
      },
      {
        title: "Modelos operativos diseñados para el tamaño que se quiere alcanzar",
        description:
          "La operación de hoy no puede ser la misma de mañana. Diseñamos el modelo operativo para el negocio que la empresa quiere ser, no para el que es hoy.",
      },
    ],
    impactItems: [
      "Procesos documentados y estandarizados que funcionan independientemente de quién los opere.",
      "Indicadores que miden lo que realmente importa para la estrategia y la operación.",
      "Una organización que puede crecer sin que cada nuevo nivel de escala genere más caos.",
    ],
    image: "/fotos-servicios/Servicio-3.jpg",
    keywords: [
      "excelencia operacional",
      "optimización de procesos",
      "modelo operativo",
      "eficiencia empresarial",
      "escalabilidad organizacional",
    ],
  },
  {
    slug: "finanzas-corporativas",
    number: "04",
    name: "Finanzas Corporativas",
    shortName: "Finanzas Corporativas",
    subtitle: "Capital · Inversión · Sostenibilidad",
    tagline:
      "La sostenibilidad financiera no es consecuencia del crecimiento: es la condición que lo hace posible.",
    question:
      "Las organizaciones que crecen sin una arquitectura financiera sólida acumulan complejidad que no pueden gestionar. La estructura de capital, la valoración del negocio y la estrategia financiera deben estar diseñadas para el tamaño que se quiere alcanzar.",
    solutions: [
      {
        title: "Estructuras de capital y evaluación de inversión",
        description:
          "Diseño de la estructura financiera óptima para cada etapa de crecimiento. Análisis y evaluación de inversiones con criterios de rentabilidad, riesgo y sostenibilidad.",
      },
      {
        title: "Sostenibilidad financiera y modelos de valoración de negocio",
        description:
          "Construcción de modelos financieros que soportan la toma de decisiones estratégicas. Valoración de empresas para M&A, financiamiento o planificación de largo plazo.",
      },
      {
        title: "Finanzas para grupos empresariales y holdings",
        description:
          "Visión integrada de la estrategia financiera a nivel corporativo. Estructuración, consolidación y gobernanza financiera para grupos con múltiples unidades de negocio.",
      },
      {
        title: "Estrategia financiera en procesos de institucionalización",
        description:
          "Diseño del sistema financiero que acompaña la transición de modelo informal a gobierno corporativo con estructura, control y visión de largo plazo.",
      },
      {
        title: "Acompañamiento en transición generacional con visión financiera",
        description:
          "Estructuración financiera para empresas familiares en proceso de cambio generacional. Valoración, planificación patrimonial y diseño del modelo financiero para la siguiente etapa.",
      },
    ],
    image: "/fotos-servicios/Servicio-4.jpg",
    keywords: [
      "finanzas corporativas",
      "valoración de empresas",
      "estructuras de capital",
      "fusiones y adquisiciones",
      "finanzas empresariales República Dominicana",
    ],
  },
  {
    slug: "cultura-organizacional",
    number: "05",
    name: "Cultura Organizacional",
    shortName: "Cultura Organizacional",
    subtitle: "Arquitectura · Estrategia · Desempeño",
    tagline:
      "La cultura no es un valor en una pared. Es la arquitectura que determina cómo opera la organización cuando nadie está mirando.",
    question:
      "La diferencia entre una empresa que escala y una que se estanca casi siempre se encuentra en lo que no se ve. La cultura, cuando está diseñada como variable estratégica, es el sistema que sostiene la ejecución con consistencia.",
    solutions: [
      {
        title: "Cultura como variable estratégica del modelo de negocio",
        description:
          "¿La cultura actual de esta empresa soporta el modelo de negocio que quieren tener? Diseñamos la arquitectura cultural como palanca de crecimiento, no como iniciativa de RRHH.",
      },
      {
        title: "Diseño de arquitectura cultural de alto desempeño",
        description:
          "Construcción del sistema cultural que hace posible la ejecución estratégica: comportamientos, normas, gobernanza y mecanismos de refuerzo alineados al modelo.",
      },
      {
        title: "Alineación entre cultura y modelo de negocio actual y proyectado",
        description:
          "Diagnóstico de la brecha entre la cultura que existe y la cultura que el modelo de negocio requiere. Diseño del plan de transformación con criterio sistémico.",
      },
      {
        title: "Cultura institucional en procesos de transición generacional",
        description:
          "Redefinición de la arquitectura cultural como parte del proceso de cambio generacional. Preservación de la identidad con adaptación al nuevo modelo de dirección.",
      },
      {
        title: "Diagnóstico y rediseño cultural como palanca de crecimiento",
        description:
          "Evaluación rigurosa del estado cultural actual y su impacto en la capacidad de ejecución. Diseño del plan de transformación con métricas y mecanismos de seguimiento.",
      },
    ],
    image: "/fotos-servicios/Servicio-5.jpg",
    keywords: [
      "cultura organizacional",
      "transformación cultural",
      "cultura corporativa",
      "arquitectura cultural",
      "diseño organizacional",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
