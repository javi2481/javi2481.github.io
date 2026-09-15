const COPY = {
  es: {
    skip: "Saltar al trabajo",
    running: "expediente · applied AI",
    kicker: "Applied AI Engineer",
    place: "Santa Fe, Argentina · UTC−3",
    themeDark: "Tinta",
    themeLight: "Papel",
    aboutLabel: "Perfil",
    lede: "Construyo sistemas de IA aplicada a documentos, visión y flujos operativos: OCR espacial, extracción estructurada, computer vision y workflows con LLM. Vengo de pharma y retail — dato operativo (SKU, lotes, facturas, canal farmacias).",
    principle: "Principio: el LLM orquesta; el código determinístico decide.",
    focus: "Applied AI · LLM systems · Document AI · Computer Vision",
    target: "Santa Fe, Argentina · abierto a remoto / híbrido",
    workLabel: "Trabajo destacado",
    pSupply:
      "Reabastecimiento conversacional sobre un catálogo estructurado. El LLM interpreta; Python es dueño de la cantidad. Goldens en CI.",
    pTimonel:
      "Detectores PaddleX (objetos, caras, pose, vehículos) sobre una sola foto. Encendés capas y ves qué aporta cada una.",
    pLex: "SPA de OCR académico con PP-OCRv6: cajas espaciales, edición, export JSON, Markdown, CSV o PNG anotado.",
    pClaim:
      "Kernel de claims intelligence. Instancia publicada: balances BYMA. Las claims tipadas son la fuente de verdad; el chat RAG es opcional.",
    pAmanuense:
      "Demo local: PDF o imagen a Markdown con VLMs vía Hugging Face Inference Providers, más comparación A/B.",
    bgLabel: "Recorrido",
    bg1: "Droguería farmacéutica, canal farmacias: dato operativo (SKU, lotes, stock, facturas). Análisis y proyectos de ML sobre ese dominio — no sobre datasets genéricos.",
    bg2: "Independent AI Engineer — proyectos y prototipos: SupplyMate, claimprint, Timonel, LexOCR y Amanuense.",
    bg3: "Egreso previsto de la Tecnicatura Superior en Ciencia de Datos e Inteligencia Artificial, ISTEA (título oficial, Argentina).",
    skillsLabel: "En los proyectos",
    colophon: "Sitio en GitHub Pages · fuente en",
  },
  en: {
    skip: "Skip to work",
    running: "case file · applied AI",
    kicker: "Applied AI Engineer",
    place: "Santa Fe, Argentina · UTC−3",
    themeDark: "Ink",
    themeLight: "Paper",
    aboutLabel: "Profile",
    lede: "I build applied AI systems for documents, vision, and operational workflows: spatial OCR, structured extraction, computer vision, and LLM-based workflows. Background in pharma and retail — operational data (SKU, lots, invoices, pharmacy supply chain).",
    principle: "Principle: the LLM orchestrates; deterministic code decides.",
    focus: "Applied AI · LLM systems · Document AI · Computer Vision",
    target: "Santa Fe, Argentina · open to remote / hybrid",
    workLabel: "Featured work",
    pSupply:
      "Conversational replenishment over a structured catalog. The LLM interprets; Python owns the order quantity. Goldens in CI.",
    pTimonel:
      "PaddleX detectors (objects, faces, pose, vehicles) over a single photo. Toggle layers and see what each adds.",
    pLex: "Academic OCR SPA with PP-OCRv6: spatial boxes, edit, export JSON, Markdown, CSV, or annotated PNG.",
    pClaim:
      "Claims intelligence kernel. Shipped instance: BYMA financial statements. Typed claims are the source of truth; RAG chat is optional.",
    pAmanuense:
      "Local demo: PDF or image to Markdown with VLMs via Hugging Face Inference Providers, plus A/B comparison.",
    bgLabel: "Background",
    bg1: "Pharmaceutical wholesaler, pharmacy channel: operational data (SKU, lots, stock, invoices). Analysis and ML projects on that domain — not generic datasets.",
    bg2: "Independent AI Engineer — projects and prototypes: SupplyMate, claimprint, Timonel, LexOCR, and Amanuense.",
    bg3: "Expected graduation from the Tecnicatura Superior in Data Science and Artificial Intelligence at ISTEA (official degree, Argentina).",
    skillsLabel: "Demonstrated in projects",
    colophon: "GitHub Pages site · source at",
  },
};

const META = {
  es: "Applied AI para documentos, visión y operaciones. OCR, computer vision y LLM workflows. Pharma/retail. Santa Fe, Argentina.",
  en: "Applied AI for documents, vision, and operations. OCR, computer vision, and LLM workflows. Pharma/retail. Santa Fe, Argentina.",
};

const OG = {
  es: "IA aplicada a documentos, visión y operaciones. El LLM orquesta; el código decide.",
  en: "Applied AI for documents, vision, and operations. The LLM orchestrates; the code decides.",
};

function applyLang(lang) {
  const pack = COPY[lang] || COPY.en;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (pack[key]) el.textContent = pack[key];
  });
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", META[lang] || META.en);
  const og = document.querySelector('meta[property="og:description"]');
  if (og) og.setAttribute("content", OG[lang] || OG.en);
  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lang") === lang));
  });
  localStorage.setItem("site-lang-v2", lang);
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const color = theme === "light" ? "#efe6d4" : "#14110e";
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", color);
  document.querySelectorAll("[data-set-theme]").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.getAttribute("data-set-theme") === theme));
  });
  localStorage.setItem("site-theme", theme);
}

const savedLang = localStorage.getItem("site-lang-v2") || "en";
const savedTheme = localStorage.getItem("site-theme") || "dark";
applyLang(savedLang);
applyTheme(savedTheme);

document.querySelectorAll("[data-lang]").forEach((btn) => {
  btn.addEventListener("click", () => applyLang(btn.getAttribute("data-lang")));
});

document.querySelectorAll("[data-set-theme]").forEach((btn) => {
  btn.addEventListener("click", () => applyTheme(btn.getAttribute("data-set-theme")));
});
