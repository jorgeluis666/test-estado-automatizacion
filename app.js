const areas = {
  ventas: {
    title: "Ventas",
    icon: "$",
    description: "Ideas de automatización para ordenar y acelerar el seguimiento comercial.",
    ideas: [
      {
        id: "lead-crm",
        name: "Captura automática de leads",
        detail: "Enviar formularios, WhatsApp o anuncios directamente a un CRM o base centralizada.",
        maturity: 2,
        type: "CRM",
        outcome: "Menos pérdida de oportunidades",
      },
      {
        id: "follow-up",
        name: "Secuencia de seguimiento comercial",
        detail: "Recordatorios y mensajes automáticos para leads que todavía no compran.",
        maturity: 3,
        type: "Ventas",
        outcome: "Más cierres sin depender de memoria",
      },
      {
        id: "quote-status",
        name: "Alertas por estado de cotización",
        detail: "Avisar cuando una cotización queda sin respuesta o necesita una acción.",
        maturity: 2,
        type: "Pipeline",
        outcome: "Mejor control de oportunidades",
      },
      {
        id: "lead-score",
        name: "Lead scoring básico",
        detail: "Clasificar prospectos por interés, perfil y probabilidad de compra.",
        maturity: 4,
        type: "Priorización",
        outcome: "Foco en mejores prospectos",
      },
    ],
  },
  marketing: {
    title: "Marketing",
    icon: "#",
    description: "Ideas para activar contenidos, campañas y nutrición de audiencias.",
    ideas: [
      {
        id: "content-calendar",
        name: "Programación de contenidos",
        detail: "Planificar y publicar contenido en canales sociales desde un calendario.",
        maturity: 2,
        type: "Contenido",
        outcome: "Comunicación más constante",
      },
      {
        id: "lead-nurture",
        name: "Nutrición automática de leads",
        detail: "Enviar correos o mensajes según descarga, interés o etapa del cliente.",
        maturity: 3,
        type: "Email",
        outcome: "Mejor conversión de interesados",
      },
      {
        id: "campaign-report",
        name: "Reporte automático de campañas",
        detail: "Consolidar métricas de campañas en un dashboard actualizado.",
        maturity: 3,
        type: "Analytics",
        outcome: "Decisiones más rápidas",
      },
      {
        id: "audience-segments",
        name: "Segmentos dinámicos de audiencia",
        detail: "Agrupar contactos según comportamiento, compra o interés.",
        maturity: 4,
        type: "Segmentación",
        outcome: "Mensajes más relevantes",
      },
    ],
  },
  ecommerce: {
    title: "Ecommerce",
    icon: "%",
    description: "Ideas para pedidos, stock, recuperación de ventas y experiencia de compra.",
    ideas: [
      {
        id: "order-alerts",
        name: "Alertas por estado de pedido",
        detail: "Notificar pedidos fallidos, pendientes de pago o listos para despacho.",
        maturity: 2,
        type: "Operación",
        outcome: "Menos pedidos olvidados",
      },
      {
        id: "cart-recovery",
        name: "Recuperación de carritos abandonados",
        detail: "Enviar mensajes automáticos a usuarios que abandonan una compra.",
        maturity: 3,
        type: "Conversión",
        outcome: "Más ventas recuperadas",
      },
      {
        id: "stock-sync",
        name: "Sincronización de inventario",
        detail: "Conectar tienda, almacén y otros canales para evitar quiebres de stock.",
        maturity: 4,
        type: "Inventario",
        outcome: "Mayor control operativo",
      },
      {
        id: "post-purchase",
        name: "Flujo post compra",
        detail: "Enviar recomendaciones, instrucciones, reseñas o recompra después del pedido.",
        maturity: 3,
        type: "Retención",
        outcome: "Más recompra y fidelización",
      },
    ],
  },
  atencion: {
    title: "Atención",
    icon: "?",
    description: "Ideas para responder más rápido y ordenar solicitudes de clientes.",
    ideas: [
      {
        id: "faq-responses",
        name: "Respuestas automáticas frecuentes",
        detail: "Resolver consultas comunes sobre horarios, precios, envíos o servicios.",
        maturity: 2,
        type: "Soporte",
        outcome: "Menos carga repetitiva",
      },
      {
        id: "ticket-routing",
        name: "Derivación automática de casos",
        detail: "Asignar solicitudes por urgencia, tema o responsable.",
        maturity: 3,
        type: "Helpdesk",
        outcome: "Mejor tiempo de respuesta",
      },
      {
        id: "satisfaction-survey",
        name: "Encuesta post atención",
        detail: "Medir satisfacción cuando se cierra un caso o termina una compra.",
        maturity: 2,
        type: "Experiencia",
        outcome: "Feedback constante",
      },
      {
        id: "client-history",
        name: "Historial unificado del cliente",
        detail: "Ver conversaciones, compras y solicitudes en un solo lugar.",
        maturity: 4,
        type: "Datos",
        outcome: "Atención más personalizada",
      },
    ],
  },
  admin: {
    title: "Administración",
    icon: "+",
    description: "Ideas para reducir trabajo manual en reportes, datos y coordinación.",
    ideas: [
      {
        id: "weekly-report",
        name: "Reportes operativos automáticos",
        detail: "Generar reportes semanales sin copiar datos entre hojas.",
        maturity: 3,
        type: "Reportes",
        outcome: "Menos tiempo administrativo",
      },
      {
        id: "data-entry",
        name: "Conexión entre sistemas",
        detail: "Evitar ingresar la misma información en varias plataformas.",
        maturity: 4,
        type: "Integración",
        outcome: "Menos errores de carga",
      },
      {
        id: "document-flow",
        name: "Solicitud automática de documentos",
        detail: "Pedir, recibir y ordenar documentos pendientes con recordatorios.",
        maturity: 2,
        type: "Documentos",
        outcome: "Procesos más ordenados",
      },
      {
        id: "approval-flow",
        name: "Flujo de aprobaciones",
        detail: "Aprobar solicitudes, compras o cambios sin cadenas largas de mensajes.",
        maturity: 3,
        type: "Workflow",
        outcome: "Menos cuellos de botella",
      },
    ],
  },
  finanzas: {
    title: "Finanzas",
    icon: "*",
    description: "Ideas para cobranzas, comprobantes, pagos y control financiero.",
    ideas: [
      {
        id: "payment-reminders",
        name: "Recordatorios de pago",
        detail: "Enviar avisos automáticos antes y después del vencimiento.",
        maturity: 2,
        type: "Cobranza",
        outcome: "Menos pagos atrasados",
      },
      {
        id: "receipt-flow",
        name: "Envío automático de comprobantes",
        detail: "Mandar facturas, boletas o recibos sin intervención manual.",
        maturity: 3,
        type: "Facturación",
        outcome: "Menos tareas repetitivas",
      },
      {
        id: "cashflow-report",
        name: "Flujo de caja actualizado",
        detail: "Consolidar ingresos, egresos y pagos futuros en un tablero.",
        maturity: 4,
        type: "Control",
        outcome: "Mayor visibilidad financiera",
      },
      {
        id: "expense-categorization",
        name: "Clasificación de gastos",
        detail: "Categorizar gastos recurrentes y detectar variaciones inusuales.",
        maturity: 4,
        type: "Análisis",
        outcome: "Mejor control de costos",
      },
    ],
  },
  operaciones: {
    title: "Operaciones",
    icon: "→",
    description: "Ideas para coordinar tareas, entregas, responsables y procesos internos.",
    ideas: [
      {
        id: "task-assignment",
        name: "Asignación automática de tareas",
        detail: "Crear tareas para el equipo cuando entra un pedido, proyecto o solicitud.",
        maturity: 2,
        type: "Workflow",
        outcome: "Menos coordinación manual",
      },
      {
        id: "delivery-tracking",
        name: "Seguimiento de entregas",
        detail: "Actualizar estados y avisar retrasos sin revisar cada caso manualmente.",
        maturity: 3,
        type: "Seguimiento",
        outcome: "Mejor control operativo",
      },
      {
        id: "sla-alerts",
        name: "Alertas por tiempos límite",
        detail: "Notificar cuando una tarea, caso o entrega está cerca de vencer.",
        maturity: 3,
        type: "SLA",
        outcome: "Menos atrasos",
      },
      {
        id: "process-dashboard",
        name: "Dashboard operativo",
        detail: "Ver carga de trabajo, pendientes y cuellos de botella en tiempo real.",
        maturity: 4,
        type: "Dashboard",
        outcome: "Decisiones más rápidas",
      },
    ],
  },
  rrhh: {
    title: "RRHH",
    icon: "•",
    description: "Ideas para onboarding, solicitudes internas y gestión del equipo.",
    ideas: [
      {
        id: "employee-onboarding",
        name: "Onboarding automático",
        detail: "Enviar accesos, documentos y pasos iniciales cuando entra una persona nueva.",
        maturity: 3,
        type: "Onboarding",
        outcome: "Ingreso más ordenado",
      },
      {
        id: "vacation-requests",
        name: "Solicitudes de vacaciones",
        detail: "Centralizar aprobaciones, saldos y notificaciones de descanso.",
        maturity: 2,
        type: "Solicitudes",
        outcome: "Menos mensajes sueltos",
      },
      {
        id: "internal-pulse",
        name: "Encuestas internas rápidas",
        detail: "Medir clima, satisfacción o bloqueos del equipo de forma recurrente.",
        maturity: 3,
        type: "Cultura",
        outcome: "Feedback continuo",
      },
      {
        id: "training-reminders",
        name: "Recordatorios de capacitación",
        detail: "Avisar cursos pendientes, vencimientos o materiales por revisar.",
        maturity: 2,
        type: "Capacitación",
        outcome: "Mejor adopción",
      },
    ],
  },
  datos: {
    title: "Datos",
    icon: "=",
    description: "Ideas para ordenar información, tableros, integraciones y calidad de datos.",
    ideas: [
      {
        id: "kpi-dashboard",
        name: "Dashboard de KPIs",
        detail: "Unificar ventas, marketing, atención y operaciones en una vista ejecutiva.",
        maturity: 4,
        type: "BI",
        outcome: "Una sola fuente de verdad",
      },
      {
        id: "data-cleaning",
        name: "Limpieza automática de datos",
        detail: "Detectar duplicados, campos vacíos y formatos incorrectos en bases clave.",
        maturity: 3,
        type: "Calidad",
        outcome: "Datos más confiables",
      },
      {
        id: "weekly-insights",
        name: "Insights semanales automáticos",
        detail: "Recibir un resumen de cambios importantes y métricas fuera de rango.",
        maturity: 4,
        type: "Insights",
        outcome: "Mejor lectura del negocio",
      },
      {
        id: "source-sync",
        name: "Sincronización de fuentes",
        detail: "Conectar hojas, CRM, ecommerce y campañas para evitar carga manual.",
        maturity: 4,
        type: "Integración",
        outcome: "Menos trabajo repetido",
      },
    ],
  },
  estrategia: {
    title: "Estrategia",
    icon: "!",
    description: "Ideas para seguimiento de objetivos, prioridades y decisiones de gestión.",
    ideas: [
      {
        id: "okr-tracking",
        name: "Seguimiento de objetivos",
        detail: "Actualizar avances de metas comerciales, operativas o de marketing.",
        maturity: 3,
        type: "OKR",
        outcome: "Mejor foco semanal",
      },
      {
        id: "priority-score",
        name: "Priorizador de iniciativas",
        detail: "Ordenar ideas por impacto, esfuerzo, urgencia y valor para el negocio.",
        maturity: 3,
        type: "Priorización",
        outcome: "Mejores decisiones",
      },
      {
        id: "meeting-summary",
        name: "Resumen automático de reuniones",
        detail: "Convertir reuniones en acuerdos, responsables y próximos pasos.",
        maturity: 4,
        type: "Gestión",
        outcome: "Menos seguimiento manual",
      },
      {
        id: "risk-alerts",
        name: "Alertas de riesgo",
        detail: "Detectar caídas, atrasos o desviaciones relevantes antes de que escalen.",
        maturity: 4,
        type: "Riesgo",
        outcome: "Más control directivo",
      },
    ],
  },
};

const state = {
  phase: "select",
  currentIndex: 0,
  showResult: false,
  selectedAreas: [],
  selections: {},
};

const maturityLabels = {
  0: "Manual",
  1: "Básico",
  2: "Estandarizado",
  3: "Automatizado",
  4: "Inteligente",
};

const maturityNames = {
  1: "Nivel 1 - Manual / Básico",
  2: "Nivel 2 - Procesos Estandarizados",
  3: "Nivel 3 - Automatizado",
  4: "Nivel 4 - Inteligente / Orquestado",
};

const answerOptions = [
  {
    key: "none",
    level: 1,
    label: "No existe",
    detail: "Hoy se gestiona de forma manual.",
  },
  {
    key: "partial",
    level: 2,
    label: "Existe parcialmente",
    detail: "Funciona solo en una parte del negocio.",
  },
  {
    key: "consistent",
    level: 3,
    label: "Implementado",
    detail: "Se usa de forma consistente.",
  },
  {
    key: "integrated",
    level: 4,
    label: "Integrado y optimizado",
    detail: "Conectado con sistemas y mejoras periódicas.",
  },
];

const questionCard = document.querySelector("#questionCard");
const questionCounter = document.querySelector("#questionCounter");
const questionProgress = document.querySelector("#questionProgress");
const areaTitle = document.querySelector("#areaTitle");
const areaDescription = document.querySelector("#areaDescription");
const areaIcon = document.querySelector("#areaIcon");
const heroProgress = document.querySelector("#heroProgress");
const heroProgressLabel = document.querySelector("#heroProgressLabel");
const areaRoadmap = document.querySelector("#areaRoadmap");
const whatsappUrl =
  "https://wa.me/51937409733?text=" +
  encodeURIComponent(
    "Quisiera agendar una reunión para conversar sobre el desarrollo de automatizaciones personalizadas para mi empresa.",
  );

function allIdeas() {
  return Object.entries(areas).flatMap(([areaKey, area]) =>
    area.ideas.map((idea) => ({ ...idea, areaKey, areaTitle: area.title })),
  );
}

function selectedAreaKeys() {
  return state.selectedAreas.length ? state.selectedAreas : Object.keys(areas);
}

function activeIdeas() {
  const selected = new Set(selectedAreaKeys());
  return allIdeas().filter((idea) => selected.has(idea.areaKey));
}

function getIdeaState(idea) {
  if (!state.selections[idea.id]) {
    state.selections[idea.id] = {
      answered: false,
      answer: "",
      level: 0,
      done: false,
      wanted: false,
      status: "no-iniciada",
    };
  }

  return state.selections[idea.id];
}

function maturityFromPoints(points, maxPoints) {
  if (!maxPoints) return 0;
  const percent = points / maxPoints;
  if (percent >= 0.82) return 4;
  if (percent >= 0.58) return 3;
  if (percent >= 0.34) return 2;
  if (percent >= 0.12) return 1;
  return 0;
}

function getScores(ideas = allIdeas()) {
  const max = ideas.length * 4;
  const current = ideas.reduce((sum, idea) => {
    const values = getIdeaState(idea);
    return sum + (values.answered ? values.level : 0);
  }, 0);
  const potential = ideas.reduce((sum, idea) => {
    const values = getIdeaState(idea);
    return sum + (values.answered ? Math.max(values.level, idea.maturity) : idea.maturity);
  }, 0);

  return {
    max,
    current,
    potential,
    currentPercent: max ? Math.round((current / max) * 100) : 0,
    potentialPercent: max ? Math.round((potential / max) * 100) : 0,
    currentLevel: maturityFromPoints(current, max),
    potentialLevel: maturityFromPoints(potential, max),
  };
}

function currentIdea() {
  return activeIdeas()[state.currentIndex];
}

function answeredStats(ideas = activeIdeas()) {
  const answered = ideas.filter((idea) => getIdeaState(idea).answered).length;
  return {
    answered,
    total: ideas.length,
    percent: ideas.length ? Math.round((answered / ideas.length) * 100) : 0,
  };
}

function dimensionForIdea(idea) {
  const tag = `${idea.type} ${idea.areaKey}`.toLowerCase();
  if (/integraci|crm|inventario|datos|bi|control|dashboard|analytics|fuentes/.test(tag)) {
    return "Integración de Sistemas";
  }
  if (/score|segment|insight|análisis|priorizaci|riesgo|ia/.test(tag)) {
    return "Inteligencia / IA aplicada";
  }
  if (/cultura|capacitaci|experiencia|soporte|helpdesk|rrhh/.test(tag)) {
    return "Gestión del Cambio";
  }
  return "Eficiencia Operativa";
}

function getDimensionScores(ideas = activeIdeas()) {
  const dimensions = [
    "Eficiencia Operativa",
    "Integración de Sistemas",
    "Inteligencia / IA aplicada",
    "Gestión del Cambio",
  ];

  return dimensions
    .map((dimension) => {
      const scoped = ideas.filter((idea) => dimensionForIdea(idea) === dimension);
      const total = scoped.length * 4;
      const current = scoped.reduce((sum, idea) => sum + getIdeaState(idea).level, 0);
      return {
        dimension,
        count: scoped.length,
        percent: total ? Math.round((current / total) * 100) : 0,
      };
    })
    .filter((d) => d.count > 0);
}

function topWantedIdeas() {
  return activeIdeas()
    .filter((idea) => {
      const values = getIdeaState(idea);
      return values.answered && values.level < idea.maturity;
    })
    .sort((a, b) => b.maturity - a.maturity)
    .slice(0, 4);
}

function renderResult() {
  const ideas = activeIdeas();
  const scores = getScores(ideas);
  const nextIdeas = topWantedIdeas();
  const dimensions = getDimensionScores(ideas);
  const currentLabel = maturityNames[scores.currentLevel] || maturityLabels[scores.currentLevel];
  const potentialLabel = maturityNames[scores.potentialLevel] || maturityLabels[scores.potentialLevel];

  areaTitle.textContent = "Resultado";
  areaDescription.textContent = "Resumen del estado de automatización de tu empresa.";
  areaIcon.textContent = "✓";
  questionCounter.textContent = "Diagnóstico completado";
  questionProgress.style.width = "100%";

  questionCard.innerHTML = `
    <div class="result-hero">
      <span>Estado potencial</span>
      <strong>${maturityLabels[scores.potentialLevel]}</strong>
      <p>Tu empresa esta hoy en ${currentLabel} y podria llegar a ${potentialLabel} si desarrolla las automatizaciones sugeridas.</p>
    </div>
    <div class="result-dimensions">
      ${dimensions
        .map(
          (item) => `
            <div>
              <span>${item.dimension}</span>
              <i><b style="width: ${item.percent}%"></b></i>
            </div>
          `,
        )
        .join("")}
    </div>
    <div class="result-next">
      <span>Próximas automatizaciones sugeridas</span>
      <ul>
        ${
          nextIdeas.length
            ? nextIdeas.map((idea) => `<li>${idea.name}</li>`).join("")
            : "<li>Responde el diagn?stico para generar recomendaciones.</li>"
        }
      </ul>
    </div>
  `;

  document.querySelector("#prevQuestion").disabled = false;
  document.querySelector("#prevQuestion").textContent = "Editar respuestas";
  document.querySelector("#skipQuestion").innerHTML =
    '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg><span>Agenda tu reunión</span>';
}

function renderQuestion() {
  document.querySelector(".wizard-card").classList.toggle("result-mode", state.showResult);
  questionCard.classList.toggle("result-card", state.showResult);
  areaRoadmap.classList.toggle("is-hidden", state.phase === "select");

  if (state.phase === "select") {
    renderAreaSelection();
    return;
  }

  if (state.showResult) {
    renderResult();
    return;
  }

  const idea = currentIdea();
  const area = areas[idea.areaKey];
  const values = getIdeaState(idea);
  const ideas = activeIdeas();
  const stats = answeredStats(ideas);

  areaTitle.textContent = area.title;
  areaDescription.textContent = area.description;
  areaIcon.textContent = area.icon;
  questionCounter.textContent = `Pregunta ${state.currentIndex + 1} de ${ideas.length}`;
  questionProgress.style.width = `${stats.percent}%`;

  questionCard.innerHTML = `
    <div class="question-topline">
      <span>${area.title}</span>
      <span>Pregunta ${state.currentIndex + 1}</span>
    </div>
    <h3>${idea.name}</h3>
    <p>${idea.detail}</p>
    <div class="answer-grid">
      ${answerOptions
        .map(
          (option) => `
            <button class="answer-button ${values.answer === option.key ? "is-selected" : ""}" type="button" data-answer="${option.key}">
              <span class="fake-checkbox" aria-hidden="true"></span>
              <span>${option.label}</span>
              <small>${option.detail}</small>
            </button>
          `,
        )
        .join("")}
    </div>
  `;

  document.querySelector("#prevQuestion").disabled = state.currentIndex === 0;
  document.querySelector("#prevQuestion").textContent = "Anterior";
  document.querySelector("#skipQuestion").textContent =
    state.currentIndex === ideas.length - 1 ? "Ver resultado" : "Omitir";
}

function renderSummary() {
  const heroPercent = state.showResult ? 100 : answeredStats().percent;
  heroProgress.style.width = `${heroPercent}%`;
  heroProgressLabel.textContent = `${heroPercent}% completado`;
  renderAreaRoadmap();
}

function renderAreaRoadmap() {
  const selected = new Set(selectedAreaKeys());
  const activeArea = state.phase === "select" || state.showResult ? "" : currentIdea().areaKey;

  areaRoadmap.innerHTML = Object.entries(areas)
    .filter(([key]) => state.phase === "select" || selected.has(key))
    .map(([key, area]) => {
      const scopedIdeas = area.ideas.map((idea) => ({ ...idea, areaKey: key, areaTitle: area.title }));
      const answered = state.showResult
        ? scopedIdeas.length
        : scopedIdeas.filter((idea) => {
            const values = getIdeaState(idea);
            return values.answered;
          }).length;
      return `
        <div class="area-step ${key === activeArea ? "is-current" : ""}">
          <span>${area.title}</span>
          <strong>${answered}/${scopedIdeas.length}</strong>
        </div>
      `;
    })
    .join("");
}

function renderAreaSelection() {
  document.querySelector(".wizard-card").classList.remove("result-mode");
  questionCard.classList.remove("result-card");
  areaTitle.textContent = "Inicio";
  areaDescription.textContent = "Selecciona las áreas de tu empresa que quieres automatizar.";
  areaIcon.textContent = "+";
  questionCounter.textContent = "Paso 1 de 2";
  questionProgress.style.width = "0%";

  const selected = new Set(state.selectedAreas);
  questionCard.innerHTML = `
    <div class="question-topline">
      <span>Configura tu diagnóstico</span>
      <span>${selected.size || Object.keys(areas).length} áreas</span>
    </div>
    <h3>Elige tus áreas</h3>
    <p>Diagnóstico de madurez en 4 niveles. Toma 5 minutos y se ajusta a las áreas seleccionadas.</p>
    <div class="area-picker">
      ${Object.entries(areas)
        .map(
          ([key, area]) => `
            <button class="area-option ${selected.has(key) ? "is-selected" : ""}" type="button" data-area-choice="${key}">
              <span class="fake-checkbox" aria-hidden="true"></span>
              <span><strong>${area.title}</strong><em>${area.description}</em></span>
              <small>${area.ideas.length} ideas</small>
            </button>
          `,
        )
        .join("")}
    </div>
  `;

  document.querySelector("#prevQuestion").disabled = true;
  document.querySelector("#prevQuestion").textContent = "Anterior";
  document.querySelector("#skipQuestion").textContent = selected.size ? "Empezar test" : "Selecciona un área";
  document.querySelector("#skipQuestion").disabled = selected.size === 0;
}

function render() {
  renderQuestion();
  renderSummary();
}

questionCard.addEventListener("click", (event) => {
  const areaChoice = event.target.closest("[data-area-choice]");
  if (areaChoice) {
    const key = areaChoice.dataset.areaChoice;
    const exists = state.selectedAreas.includes(key);
    state.selectedAreas = exists
      ? state.selectedAreas.filter((item) => item !== key)
      : [...state.selectedAreas, key];
    render();
    return;
  }

  const button = event.target.closest("[data-answer]");
  if (!button) return;

  if (state.isAdvancing) return;
  state.isAdvancing = true;

  const idea = currentIdea();
  const values = getIdeaState(idea);
  const answer = button.dataset.answer;
  const option = answerOptions.find((item) => item.key === answer);

  values.answer = answer;
  values.level = option ? option.level : 1;
  values.done = values.level >= 3;
  values.wanted = values.level < idea.maturity;
  values.answered = true;
  if (values.level >= 3) values.status = "activa";
  if (values.level === 2) values.status = "en-proceso";
  if (values.level === 1) values.status = "no-iniciada";

  questionCard.querySelectorAll(".answer-button").forEach((item) => {
    item.classList.remove("is-selected", "is-confirming");
    item.disabled = true;
  });
  button.classList.add("is-selected", "is-confirming");

  setTimeout(() => {
    if (state.currentIndex < activeIdeas().length - 1) {
      state.currentIndex += 1;
    } else {
      state.showResult = true;
    }
    state.isAdvancing = false;
    render();
  }, 420);
});

document.querySelector("#prevQuestion").addEventListener("click", () => {
  if (state.phase === "select") return;
  if (state.showResult) {
    state.showResult = false;
    render();
    return;
  }
  state.currentIndex = Math.max(0, state.currentIndex - 1);
  render();
});

document.querySelector("#skipQuestion").addEventListener("click", () => {
  if (state.phase === "select") {
    if (!state.selectedAreas.length) return;
    state.phase = "test";
    state.currentIndex = 0;
    state.showResult = false;
    render();
    return;
  }

  if (state.showResult) {
    window.open(whatsappUrl, "_blank", "noopener");
    return;
  }

  if (state.currentIndex === activeIdeas().length - 1) {
    state.showResult = true;
  } else {
    state.currentIndex += 1;
  }
  render();
});

document.querySelector("#resetButton").addEventListener("click", () => {
  state.selections = {};
  state.currentIndex = 0;
  state.showResult = false;
  state.selectedAreas = [];
  state.phase = "select";
  render();
});

render();
