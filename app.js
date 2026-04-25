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
  2: "Ordenado",
  3: "Automatizado",
  4: "Escalable",
};

const taskList = document.querySelector("#taskList");
const questionCard = document.querySelector("#questionCard");
const questionCounter = document.querySelector("#questionCounter");
const questionProgress = document.querySelector("#questionProgress");
const areaTitle = document.querySelector("#areaTitle");
const areaDescription = document.querySelector("#areaDescription");
const areaIcon = document.querySelector("#areaIcon");
const currentLevel = document.querySelector("#currentLevel");
const potentialLevel = document.querySelector("#potentialLevel");
const currentProgress = document.querySelector("#currentProgress");
const potentialProgress = document.querySelector("#potentialProgress");
const currentCopy = document.querySelector("#currentCopy");
const potentialCopy = document.querySelector("#potentialCopy");
const doneCount = document.querySelector("#doneCount");
const wantedCount = document.querySelector("#wantedCount");
const gapValue = document.querySelector("#gapValue");
const gapTitle = document.querySelector("#gapTitle");
const gapCopy = document.querySelector("#gapCopy");
const areaStatusList = document.querySelector("#areaStatusList");
const wishlist = document.querySelector("#wishlist");
const toast = document.querySelector("#toast");
const heroProgress = document.querySelector("#heroProgress");
const heroProgressLabel = document.querySelector("#heroProgressLabel");
const areaRoadmap = document.querySelector("#areaRoadmap");

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
  const max = ideas.reduce((sum, idea) => sum + idea.maturity, 0);
  const current = ideas.reduce((sum, idea) => {
    const values = getIdeaState(idea);
    return sum + (values.done ? idea.maturity : 0);
  }, 0);
  const potential = ideas.reduce((sum, idea) => {
    const values = getIdeaState(idea);
    return sum + (values.done || values.wanted ? idea.maturity : 0);
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

function topWantedIdeas() {
  return activeIdeas()
    .filter((idea) => getIdeaState(idea).wanted && !getIdeaState(idea).done)
    .sort((a, b) => b.maturity - a.maturity)
    .slice(0, 4);
}

function renderResult() {
  const ideas = activeIdeas();
  const scores = getScores(ideas);
  const done = ideas.filter((idea) => getIdeaState(idea).done);
  const wanted = ideas.filter((idea) => getIdeaState(idea).wanted && !getIdeaState(idea).done);
  const nextIdeas = topWantedIdeas();

  areaTitle.textContent = "Resultado";
  areaDescription.textContent = "Resumen del estado de automatización de tu empresa.";
  areaIcon.textContent = "✓";
  questionCounter.textContent = "Diagnóstico completado";
  questionProgress.style.width = "100%";

  questionCard.innerHTML = `
    <div class="result-hero">
      <span>Estado potencial</span>
      <strong>${maturityLabels[scores.potentialLevel]}</strong>
      <p>Tu empresa está hoy en nivel ${maturityLabels[scores.currentLevel]} y podría llegar a ${maturityLabels[scores.potentialLevel]} si desarrolla las automatizaciones deseadas.</p>
    </div>
    <div class="result-metrics">
      <div><span>Actual</span><strong>${scores.currentPercent}%</strong></div>
      <div><span>Potencial</span><strong>${scores.potentialPercent}%</strong></div>
      <div><span>Ya tienes</span><strong>${done.length}</strong></div>
      <div><span>Quieres</span><strong>${wanted.length}</strong></div>
    </div>
    <div class="result-next">
      <span>Próximas automatizaciones sugeridas</span>
      <ul>
        ${
          nextIdeas.length
            ? nextIdeas.map((idea) => `<li>${idea.name}</li>`).join("")
            : "<li>Marca algunas ideas como deseadas para generar recomendaciones.</li>"
        }
      </ul>
    </div>
  `;

  document.querySelector("#prevQuestion").disabled = false;
  document.querySelector("#prevQuestion").textContent = "Editar respuestas";
  document.querySelector("#skipQuestion").textContent = "Reiniciar";
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
  const progress = Math.round(((state.currentIndex + 1) / ideas.length) * 100);

  areaTitle.textContent = area.title;
  areaDescription.textContent = area.description;
  areaIcon.textContent = area.icon;
  questionCounter.textContent = `Pregunta ${state.currentIndex + 1} de ${ideas.length}`;
  questionProgress.style.width = `${progress}%`;

  questionCard.innerHTML = `
    <div class="question-topline">
      <span>${area.title}</span>
      <span>Pregunta ${state.currentIndex + 1}</span>
    </div>
    <h3>${idea.name}</h3>
    <p>${idea.detail}</p>
    <div class="answer-grid">
      <button class="answer-button ${values.done ? "is-selected" : ""}" type="button" data-answer="done">
        <span class="fake-checkbox" aria-hidden="true"></span>
        <span>Lo tengo</span>
        <small>Ya funciona en mi empresa</small>
      </button>
      <button class="answer-button ${values.wanted ? "is-selected" : ""}" type="button" data-answer="wanted">
        <span class="fake-checkbox" aria-hidden="true"></span>
        <span>Lo quiero</span>
        <small>Me gustaría implementarlo</small>
      </button>
      <button class="answer-button ${!values.done && !values.wanted ? "is-muted" : ""}" type="button" data-answer="none">
        <span class="fake-checkbox" aria-hidden="true"></span>
        <span>No por ahora</span>
        <small>No aplica o no es prioridad</small>
      </button>
    </div>
  `;

  document.querySelector("#prevQuestion").disabled = state.currentIndex === 0;
  document.querySelector("#prevQuestion").textContent = "Anterior";
  document.querySelector("#skipQuestion").textContent =
    state.currentIndex === ideas.length - 1 ? "Ver resultado" : "Omitir";
}

function renderSummary() {
  const ideas = activeIdeas();
  const selectedDone = ideas.filter((idea) => getIdeaState(idea).done);
  const selectedWanted = ideas.filter((idea) => getIdeaState(idea).wanted && !getIdeaState(idea).done);
  const scores = getScores(ideas);
  const gap = Math.max(0, scores.potentialPercent - scores.currentPercent);

  doneCount.textContent = selectedDone.length;
  wantedCount.textContent = selectedWanted.length;
  currentLevel.textContent = maturityLabels[scores.currentLevel];
  potentialLevel.textContent = maturityLabels[scores.potentialLevel];
  currentProgress.style.width = `${scores.currentPercent}%`;
  potentialProgress.style.width = `${scores.potentialPercent}%`;

  currentCopy.textContent = `${scores.currentPercent}% de madurez según las automatizaciones que ya tienes.`;
  potentialCopy.textContent = `${scores.potentialPercent}% si desarrollas las ideas que marcaste como deseadas.`;
  heroProgress.style.width = `${scores.potentialPercent}%`;
  heroProgressLabel.textContent = `${scores.potentialPercent}% completado`;
  gapValue.textContent = gap;

  if (gap >= 35) {
    gapTitle.textContent = "Gran salto posible";
    gapCopy.textContent = "Las automatizaciones deseadas podrían mover a la empresa a un nivel claramente superior.";
  } else if (gap >= 15) {
    gapTitle.textContent = "Mejora relevante";
    gapCopy.textContent = "Hay una brecha concreta entre lo que ya existe y lo que convendría desarrollar.";
  } else if (gap > 0) {
    gapTitle.textContent = "Avance incremental";
    gapCopy.textContent = "Las ideas marcadas ayudan a pulir el sistema actual sin cambiarlo por completo.";
  } else {
    gapTitle.textContent = "Sin brecha detectada";
    gapCopy.textContent = "Marca lo que tienes y lo que quisieras tener para ver cuánto podría avanzar la empresa.";
  }

  renderAreaStatus();
  renderWishlist(selectedWanted);
  renderAreaRoadmap();
}

function renderAreaRoadmap() {
  const selected = new Set(selectedAreaKeys());
  const activeArea = state.phase === "select" || state.showResult ? "" : currentIdea().areaKey;

  areaRoadmap.innerHTML = Object.entries(areas)
    .filter(([key]) => state.phase === "select" || selected.has(key))
    .map(([key, area]) => {
      const scopedIdeas = area.ideas.map((idea) => ({ ...idea, areaKey: key, areaTitle: area.title }));
      const answered = scopedIdeas.filter((idea) => {
        const values = getIdeaState(idea);
        return values.done || values.wanted || values.status !== "no-iniciada";
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
    <p>Elige solo las áreas que existen o son relevantes para tu empresa. El test se ajustará automáticamente.</p>
    <div class="area-picker">
      ${Object.entries(areas)
        .map(
          ([key, area]) => `
            <button class="area-option ${selected.has(key) ? "is-selected" : ""}" type="button" data-area-choice="${key}">
              <span class="fake-checkbox" aria-hidden="true"></span>
              <span>${area.title}</span>
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

function renderAreaStatus() {
  areaStatusList.innerHTML = Object.entries(areas)
    .map(([key, area]) => {
      const scopedIdeas = area.ideas.map((idea) => ({ ...idea, areaKey: key, areaTitle: area.title }));
      const scores = getScores(scopedIdeas);
      return `
        <div class="area-status-row">
          <div class="area-status-top">
            <strong>${area.title}</strong>
            <span>${scores.currentPercent}% → ${scores.potentialPercent}%</span>
          </div>
          <div class="dual-bar">
            <span class="now"><i style="width: ${scores.currentPercent}%"></i></span>
            <span class="future"><i style="width: ${scores.potentialPercent}%"></i></span>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderWishlist(selectedWanted) {
  const ordered = selectedWanted
    .sort((a, b) => b.maturity - a.maturity)
    .slice(0, 8);

  wishlist.innerHTML = ordered.length
    ? ordered
        .map(
          (idea) =>
            `<li><strong>${idea.name}</strong><br>${idea.areaTitle} · ${idea.type} · ${idea.outcome}</li>`,
        )
        .join("")
    : "<li>Selecciona “Lo quiero” en las ideas que te interesan.</li>";
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

  const idea = currentIdea();
  const values = getIdeaState(idea);
  const answer = button.dataset.answer;

  values.done = answer === "done";
  values.wanted = answer === "wanted";
  if (answer === "done") values.status = "activa";
  if (answer === "wanted" && values.status === "activa") values.status = "en-idea";
  if (answer === "none") values.status = "no-iniciada";

  if (state.currentIndex < activeIdeas().length - 1) {
    state.currentIndex += 1;
  } else {
    state.showResult = true;
  }
  render();
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
    state.selections = {};
    state.currentIndex = 0;
    state.showResult = false;
    state.selectedAreas = [];
    state.phase = "select";
    render();
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

document.querySelector("#exportButton").addEventListener("click", async () => {
  const ideas = activeIdeas();
  const scores = getScores(ideas);
  const done = ideas.filter((idea) => getIdeaState(idea).done);
  const wanted = ideas.filter((idea) => getIdeaState(idea).wanted && !getIdeaState(idea).done);
  const lines = wanted.map((idea) => {
    const values = getIdeaState(idea);
    return `- ${idea.name} (${idea.areaTitle}): ${idea.outcome}. Estado: ${values.status}`;
  });
  const summary = `Checklist de Automatizacion\n\nEstado actual: ${maturityLabels[scores.currentLevel]} (${scores.currentPercent}%)\nEstado potencial: ${maturityLabels[scores.potentialLevel]} (${scores.potentialPercent}%)\nYa tiene: ${done.length}\nQuiere desarrollar: ${wanted.length}\n\nIdeas deseadas:\n${lines.join("\n") || "- Ninguna seleccionada"}`;

  try {
    await navigator.clipboard.writeText(summary);
    toast.classList.add("is-visible");
    setTimeout(() => toast.classList.remove("is-visible"), 1800);
  } catch {
    alert(summary);
  }
});

render();
