/**
 * Main application script.
 * Handles DOM interactions, smooth scrolling, scroll reveals, and i18n logic.
 */

// I18N DICTIONARY
const dictionary = {
  pt: {
    // Navbar
    'nav-solucoes': 'Soluções',
    'nav-hub': 'Knowledge Center',
    'nav-sobre': 'Liderança',
    'nav-cta': 'Agendar Reunião Estratégica',
    
    // Hero Section
    'hero-location': 'Sede: Florida, USA | Conectando Inovação Global ao Mercado Brasileiro',
    'hero-headline': 'Integridade Regulatória Global para a Inovação em Terapias Avançadas.',
    'hero-subhead': 'Harmonizando rigor científico e diretrizes globais para assegurar a viabilidade de produtos, a segurança de investimentos e a maturidade de marcos regulatórios em Terapias Avançadas.',
    'hero-pill-1': 'Indústria e Pesquisa',
    'hero-pill-1-sub': 'Viabilização e Entrada',
    'hero-pill-2': 'Investidores e VCs',
    'hero-pill-2-sub': 'Gestão de Risco FMEA',
    'hero-pill-3': 'Governos e Nações',
    'hero-pill-3-sub': 'Marcos Regulatórios',
    
    // Pillars
    'pillars-label': 'Serviços Centrais',
    'pillars-title': 'Os Três Pilares de Soluções',
    'profiles-title': 'Qual é o seu perfil?',
    
    // Audience Card labels
    'card-applies': 'Este perfil se aplica a você?',
    'card1-for': 'Para quem é: Desenvolvedores de terapias avançadas, patrocinadores de ensaios clínicos e institutos de pesquisa que buscam entrada no mercado brasileiro.',
    'card1-pain': 'Dor principal: Incerteza sobre se o desenvolvimento técnico e clínico atual suporta a execução regulatória no Brasil.',
    'card1-li1': 'Avaliação de adequação de ensaios clínicos para o mercado brasileiro',
    'card1-li2': 'Implementação de GMP/cGMP/GCP como alicerce transversal',
    'card1-li3': 'Revisão crítica do desenho de estudos para conformidade por fase',
    'card1-li4': 'Documentação robusta que elimina exigências regulatórias redundantes',
    'card1-result': 'Resultado esperado: Entrada de mercado mais rápida e com menor risco de rejeição regulatória.',
    'card2-for': 'Para quem é: Fundos de venture capital e investidores privados avaliando aportes em biotechs norte-americanas com operações ou ambições no Brasil.',
    'card2-pain': 'Dor principal: Dificuldade em avaliar a sustentabilidade regulatória de ativos de alta complexidade antes de investir.',
    'card2-li1': 'Auditoria Técnica Regulatória orientada a segurança de investimento',
    'card2-li2': 'Análise FMEA aplicada aos métodos biotecnológicos do ativo',
    'card2-li3': 'Avaliação de viabilidade e escalabilidade em mercados globais',
    'card2-li4': 'Probabilidade de sucesso regulatório como métrica de due diligence',
    'card2-result': 'Resultado esperado: Decisões de investimento mais seguras, com risco regulatório mapeado e mitigado.',
    'card3-for': 'Para quem é: Autoridades sanitárias, agências reguladoras e governos que precisam estruturar ou atualizar marcos normativos para ATMPs.',
    'card3-pain': 'Dor principal: Ausência de marcos regulatórios maduros que equilibrem inovação e segurança sanitária.',
    'card3-li1': 'Mapeamento do arcabouço normativo regional existente',
    'card3-li2': 'Diagnóstico de lacunas regulatórias para ATMPs',
    'card3-li3': 'Proposta de novos marcos usando Análise de Impacto Regulatório (AIR)',
    'card3-li4': 'Harmonização com melhores práticas internacionais (ICH, PIC/S, OMS)',
    'card3-result': 'Resultado esperado: Marcos normativos cientificamente embasados, prontos para atrair inovação com segurança sanitária garantida.',
    
    'pillar-1-title': 'I. Desenvolvedores e Patrocinadores',
    'pillar-1-challenge': 'O Desafio: Garantir que o desenvolvimento técnico e clínico suporte a execução no Brasil.',
    'pillar-1-solution': 'Nossa Solução: Implementamos as Boas Práticas (GMP/cGMP/GCP) como o alicerce transversal. Oferecemos suporte especializado na avaliação da adequação de ensaios clínicos para o mercado brasileiro, analisando criticamente o desenho do estudo para assegurar conformidade com a fase de desenvolvimento.',
    'pillar-1-value': 'Diretriz de Valor: Otimização do tempo através da construção de documentação robusta que elimina exigências regulatórias.',
    
    'pillar-2-title': 'II. Investidores e Venture Capital',
    'pillar-2-challenge': 'O Desafio: Validar a segurança de aportes em biotechs norte-americanas onde a inovação exige sustentabilidade regulatória.',
    'pillar-2-solution': 'Nossa Solução: Auditoria Técnica Regulatória focada em segurança de investimento e probabilidade de crescimento. Avaliamos a integridade dos métodos biotecnológicos para garantir viabilidade e escalabilidade em mercados globais de alta complexidade.',
    
    'pillar-3-title': 'III. Autoridades e Governos',
    'pillar-3-challenge': 'O Desafio: Desenvolver marcos regulatórios que equilibrem inovação e segurança sanitária.',
    'pillar-3-solution': 'Nossa Solução: Realizamos a avaliação do cenário regulatório regional, mapeando o arcabouço normativo existente e seus objetivos. Com base neste diagnóstico, propomos novos marcos para ATMPs usando a lógica de Análise de Impacto Regulatório (AIR).',
    'pillar-3-value': 'Resultado: Marcos normativos maduros, cientificamente embasados e harmonizados com as melhores práticas internacionais.',

    // Knowledge Center
    'hub-label': 'Hub de Autoridade Técnica',
    'hub-title': 'Knowledge Center',
    'hub-desc': 'Atua como motor de geração de insights qualificados, análises de convergência regulatória e deep dives.',
    'hub-list-1': 'Artigos Técnicos e Métodos de Processamento',
    'hub-list-2': 'Análises de Convergência Regulatória',
    'hub-list-3': 'Deep Dives em Testes Biotecnológicos',
    'hub-box-title': 'Motor de Insights Qualificados',
    'hub-box-desc': 'Acesse panoramas guiados pela ciência rigorosa no desenvolvimento de Terapias Avançadas.',

    // Leadership
    'about-label': 'Autoridade Global',
    'about-title': 'Liderança e Equipe',
    'about-desc': 'Apoiado por uma abordagem científica orientada a marcos normativos e rigorosos métodos de testes biotecnológicos.',
    'about-founder-title': 'Founder & Strategic Head',
    'about-founder-sub': 'Ph.D. em Métodos Biotecnológicos',
    'about-founder-1': 'ICH Working Groups: Atuação direta no desenvolvimento de guias globais de harmonização.',
    'about-founder-2': 'PIC/S Member: Experiência na inspeção e padronização internacional das BPFs.',
    'about-founder-3': 'WHO Consultant: Consultoria técnica para a Organização Mundial da Saúde (OMS).',
    'about-partner-1': 'Parceiro de Assuntos Regulatórios (Brasil)',
    'about-partner-1-sub': 'Acesso Regional e Estratégia',
    'about-partner-2': 'Parceiro de Consultoria Financeira (EUA)',
    'about-partner-2-sub': 'Risco e Estratégia de Investimentos',

    // Footer / CTA
    'cta-title': 'Fale com nosso time executivo.',
    'cta-desc': 'Atuamos apenas com mandatos altamente selecionados. Preencha o formulário para um first-assessment.',
    'cta-form-btn': 'Enviar Contato',
    'footer-rights': 'Todos os Direitos Reservados. Consultoria estritamente confidencial e seletiva.'
  },
  en: {
    // Navbar
    'nav-solucoes': 'Solutions',
    'nav-hub': 'Knowledge Center',
    'nav-sobre': 'Leadership',
    'nav-cta': 'Schedule a Strategic Assessment',
    
    // Hero Section
    'hero-location': 'HQ: Florida, USA | Bridging Global Innovation to the Brazilian Market',
    'hero-headline': 'Global Regulatory Integrity for Advanced Therapy Innovation.',
    'hero-subhead': 'Harmonizing scientific rigor and global guidelines to ensure product viability, investment safety, and regulatory maturity in Advanced Therapies.',
    'hero-pill-1': 'Industry & Research',
    'hero-pill-1-sub': 'Market Access & Compliance',
    'hero-pill-2': 'Investors & VCs',
    'hero-pill-2-sub': 'FMEA Risk Management',
    'hero-pill-3': 'Governments (LMICs)',
    'hero-pill-3-sub': 'Framework Architecture',
    
    // Pillars
    'pillars-label': 'Core Capabilities',
    'pillars-title': 'The Three Pillars of Solutions',
    'profiles-title': 'What is your profile?',
    
    // Audience Card labels
    'card-applies': 'Does this profile apply to you?',
    'card1-for': 'For whom: ATMP developers, clinical trial sponsors, and research institutes seeking entry into the Brazilian market.',
    'card1-pain': 'Core challenge: Uncertainty about whether current technical and clinical development can support regulatory execution in Brazil.',
    'card1-li1': 'Eligibility assessment of clinical trials for the Brazilian market',
    'card1-li2': 'GMP/cGMP/GCP implementation as the transversal foundation',
    'card1-li3': 'Critical review of study designs for phase-specific compliance',
    'card1-li4': 'Robust documentation that eliminates redundant regulatory requirements',
    'card1-result': 'Expected result: Faster market entry with significantly reduced regulatory rejection risk.',
    'card2-for': 'For whom: Venture capital funds and private investors evaluating investment in US-based biotechs with operations or ambitions in Brazil.',
    'card2-pain': 'Core challenge: Difficulty assessing the regulatory sustainability of high-complexity assets before committing capital.',
    'card2-li1': 'Technical Regulatory Audit focused on investment security',
    'card2-li2': 'FMEA analysis applied to the asset’s biotechnological processing methods',
    'card2-li3': 'Viability and scalability assessment in global markets',
    'card2-li4': 'Regulatory success probability as a due diligence metric',
    'card2-result': 'Expected result: Safer investment decisions with mapped and mitigated regulatory risk.',
    'card3-for': 'For whom: Health authorities, regulatory agencies and governments needing to structure or update normative frameworks for ATMPs.',
    'card3-pain': 'Core challenge: Absence of mature regulatory frameworks that balance innovation with health security.',
    'card3-li1': 'Mapping of the existing regional normative framework',
    'card3-li2': 'Diagnostic of regulatory gaps for ATMPs',
    'card3-li3': 'Proposal of new frameworks using Regulatory Impact Analysis (RIA)',
    'card3-li4': 'Harmonization with international best practices (ICH, PIC/S, WHO)',
    'card3-result': 'Expected result: Scientifically grounded normative frameworks, ready to attract innovation with guaranteed health security.',
    
    'pillar-1-title': 'I. Developers & Sponsors',
    'pillar-1-challenge': 'The Challenge: Ensuring technical and clinical development supports execution in Brazil.',
    'pillar-1-solution': 'Our Solution: We implement Good Practices (GMP/cGMP/GCP) as the transversal foundation. We offer expert support evaluating clinical trial eligibility for Brazil, critically analyzing study designs (endpoints, methods, targets) to ensure compliance with the development phase.',
    'pillar-1-value': 'Value Directive: Optimal time-management through robust documentation that natively eliminates regulatory barriers.',
    
    'pillar-2-title': 'II. Investors & VC (US-Focused)',
    'pillar-2-challenge': 'The Challenge: Validating investment security in US biotechs where innovation demands regulatory sustainability.',
    'pillar-2-solution': 'Our Solution: Technical Regulatory Due Diligence focused on investment safety and growth probability. We evaluate the integrity of biotechnological processing methods and assays to guarantee the pipeline possesses real viability and scalability in high-complexity global markets.',
    
    'pillar-3-title': 'III. Authorities & Governments',
    'pillar-3-challenge': 'The Challenge: Developing regulatory frameworks that balance innovation with health security.',
    'pillar-3-solution': 'Our Solution: We assess the regional regulatory scenario, mapping existing normative frameworks and strategic objectives. Based on this diagnosis, we propose new ATMP frameworks modeled on Regulatory Impact Analysis (RIA) logic and Global Convergence.',
    'pillar-3-value': 'Result: Mature, scientifically sound frameworks harmonized with best practices.',

    // Knowledge Center
    'hub-label': 'Technical Authority Hub',
    'hub-title': 'Knowledge Center',
    'hub-desc': 'An engine for qualified insights, convergence analysis, and biotech deep dives.',
    'hub-list-1': 'Technical Articles & Processing Methods',
    'hub-list-2': 'Regulatory Convergence Analyses',
    'hub-list-3': 'Biotechnological Test Deep Dives',
    'hub-box-title': 'Qualified Insights Engine',
    'hub-box-desc': 'Access rigorous, science-driven overviews of the ever-evolving ATMP landscape. Inspired by premier technical methodologies.',

    // Leadership
    'about-label': 'Global Authority',
    'about-title': 'Leadership & Team',
    'about-desc': 'Driven by a scientific approach to normative frameworks and rigorous biotechnological testing.',
    'about-founder-title': 'Founder & Strategic Head',
    'about-founder-sub': 'Ph.D. in Biotechnological Methods',
    'about-founder-1': 'ICH Working Groups: Direct involvement in developing technical harmonization guidelines.',
    'about-founder-2': 'PIC/S Member: Experience in international inspection and Good Manufacturing Practices standardization.',
    'about-founder-3': 'WHO Consultant: Technical advisor to the World Health Organization on regulatory frameworks.',
    'about-partner-1': 'Brazilian Regulatory Partner',
    'about-partner-1-sub': 'Regional Access & Strategy',
    'about-partner-2': 'US Financial Consultant',
    'about-partner-2-sub': 'Risk & Investment Strategy',

    // Footer / CTA
    'cta-title': 'Engage our Executive Team.',
    'cta-desc': 'We take highly selected mandates. Submit an inquiry for preliminary assessment.',
    'cta-form-btn': 'Submit Inquiry',
    'footer-rights': 'All Rights Reserved. Highly selective and confidential consultancy.'
  },
  es: {
    // Navbar
    'nav-solucoes': 'Soluciones',
    'nav-hub': 'Centro de Conocimiento',
    'nav-sobre': 'Liderazgo',
    'nav-cta': 'Programar Evaluación Estratégica',
    
    // Hero Section
    'hero-location': 'Sede: Florida, USA | Conectando la Innovación Global al Mercado Brasileño',
    'hero-headline': 'Integridad Regulatoria Global para la Innovación en Terapias Avanzadas.',
    'hero-subhead': 'Armonizando el rigor científico y las directrices globales para asegurar la viabilidad de productos, la seguridad de inversiones y la madurez de los marcos regulatorios en Terapias Avanzadas.',
    'hero-pill-1': 'Industria e Investigación',
    'hero-pill-1-sub': 'Viabilidad y Acceso',
    'hero-pill-2': 'Inversores y VCs',
    'hero-pill-2-sub': 'Gestión de Riesgo FMEA',
    'hero-pill-3': 'Gobiernos y Naciones',
    'hero-pill-3-sub': 'Marcos Regulatorios',
    
    // Pillars
    'pillars-label': 'Capacidades Centrales',
    'pillars-title': 'Los Tres Pilares de Soluciones',
    'profiles-title': '¿Cuál es su perfil?',
    
    // Audience Card labels
    'card-applies': '¿Este perfil se aplica a usted?',
    'card1-for': 'Para quién: Desarrolladores de terapias avanzadas, patrocinadores de ensayos clínicos e institutos de investigación que buscan entrada al mercado brasileño.',
    'card1-pain': 'Desafío principal: Incertidumbre sobre si el desarrollo técnico y clínico actual soporta la ejecución regulatoria en Brasil.',
    'card1-li1': 'Evaluación de adecuación de ensayos clínicos al mercado brasileño',
    'card1-li2': 'Implementación de GMP/cGMP/GCP como base transversal',
    'card1-li3': 'Revisión crítica del diseño de estudios para conformidad por fase',
    'card1-li4': 'Documentación robusta que elimina requisitos regulatorios redundantes',
    'card1-result': 'Resultado esperado: Entrada al mercado más rápida con menor riesgo de rechazo regulatorio.',
    'card2-for': 'Para quién: Fondos de capital de riesgo e inversores privados evaluando inversiones en biotecnológicas de USA con operaciones en Brasil.',
    'card2-pain': 'Desafío principal: Dificultad para evaluar la sostenibilidad regulatoria de activos de alta complejidad antes de invertir.',
    'card2-li1': 'Auditoría Técnica Regulatoria orientada a la seguridad de inversión',
    'card2-li2': 'Análisis FMEA aplicado a los métodos biotecnológicos del activo',
    'card2-li3': 'Evaluación de viabilidad y escalabilidad en mercados globales',
    'card2-li4': 'Probabilidad de éxito regulatorio como métrica de debida diligencia',
    'card2-result': 'Resultado esperado: Decisiones de inversión más seguras con riesgo regulatorio mapeado y mitigado.',
    'card3-for': 'Para quién: Autoridades sanitarias, agencias reguladoras y gobiernos que necesitan estructurar marcos normativos para ATMPs.',
    'card3-pain': 'Desafío principal: Ausencia de marcos regulatorios maduros que equilibren innovación y seguridad sanitaria.',
    'card3-li1': 'Mapeo del marco normativo regional existente',
    'card3-li2': 'Diagnóstico de brechas regulatorias para ATMPs',
    'card3-li3': 'Propuesta de nuevos marcos usando Análisis de Impacto Regulatorio (AIR)',
    'card3-li4': 'Armonización con mejores prácticas internacionales (ICH, PIC/S, OMS)',
    'card3-result': 'Resultado esperado: Marcos normativos con base científica, listos para atraer innovación con seguridad sanitaria garantizada.',
    
    'pillar-1-title': 'I. Desarrolladores y Patrocinadores',
    'pillar-1-challenge': 'El Desafío: Asegurar que el desarrollo técnico y clínico respalde la ejecución en Brasil.',
    'pillar-1-solution': 'Nuestra Solución: Implementamos Buenas Prácticas (GMP/cGMP/GCP) como base transversal. Ofrecemos apoyo experto evaluando la elegibilidad de ensayos clínicos para el mercado brasileño, analizando críticamente el diseño del estudio para garantizar la conformidad con la fase de desarrollo.',
    'pillar-1-value': 'Directriz de Valor: Optimización del tiempo mediante documentación robusta que elimina barreras regulatorias nativamente.',
    
    'pillar-2-title': 'II. Inversores y Venture Capital (Enfoque USA)',
    'pillar-2-challenge': 'El Desafío: Validar la seguridad de inversiones en biotecnológicas estadounidenses donde la innovación exige sostenibilidad regulatoria.',
    'pillar-2-solution': 'Nuestra Solución: Due Diligence Técnico-Regulatoria centrada en la seguridad de inversión y probabilidad de crecimiento. Evaluamos la integridad de los métodos de procesamiento biotecnológico para garantizar viabilidad real y escalabilidad en mercados de alta complejidad.',
    
    'pillar-3-title': 'III. Autoridades y Gobiernos',
    'pillar-3-challenge': 'El Desafío: Desarrollar marcos regulatorios que equilibren la innovación con la seguridad sanitaria.',
    'pillar-3-solution': 'Nuestra Solución: Evaluamos el escenario regulatorio regional, mapeando marcos normativos existentes. Con base en este diagnóstico, proponemos nuevos marcos para ATMPs moldeados bajo la lógica del Análisis de Impacto Regulatorio (AIR).',
    'pillar-3-value': 'Resultado: Marcos normativos maduros, con base científica y armonizados con las mejores prácticas internacionales.',

    // Knowledge Center
    'hub-label': 'Hub de Autoridad Técnica',
    'hub-title': 'Centro de Conocimiento',
    'hub-desc': 'Un motor para insights cualificados, análisis de convergencia y revisiones biotecnológicas profundas.',
    'hub-list-1': 'Artículos Técnicos y Métodos de Procesamiento',
    'hub-list-2': 'Análisis de Convergencia Regulatoria',
    'hub-list-3': 'Análisis Profundos de Pruebas Biotecnológicas',
    'hub-box-title': 'Motor de Insights Cualificados',
    'hub-box-desc': 'Acceda a panoramas rigurosos, impulsados por la ciencia, del paisaje en constante evolución de las ATMP.',

    // Leadership
    'about-label': 'Autoridad Global',
    'about-title': 'Liderazgo y Equipo',
    'about-desc': 'Impulsados por un enfoque científico hacia marcos normativos y pruebas biotecnológicas rigurosas.',
    'about-founder-title': 'Fundador y Director Estratégico',
    'about-founder-sub': 'Ph.D. en Métodos Biotecnológicos',
    'about-founder-1': 'Grupos de Trabajo de ICH: Participación directa en el desarrollo de directrices globales de armonización técnica.',
    'about-founder-2': 'Miembro de PIC/S: Experiencia en inspección internacional y estandarización de Buenas Prácticas de Manufactura.',
    'about-founder-3': 'Consultor de la OMS: Asesor técnico de la Organización Mundial de la Salud en marcos regulatorios.',
    'about-partner-1': 'Socio de Asuntos Regulatorios (Brasil)',
    'about-partner-1-sub': 'Estrategia y Acceso Regional',
    'about-partner-2': 'Socio de Consultoría Financiera (USA)',
    'about-partner-2-sub': 'Estrategia de Inversión y Riesgo',

    // Footer / CTA
    'cta-title': 'Hable con nuestro equipo ejecutivo.',
    'cta-desc': 'Aceptamos mandatos altamente seleccionados. Envíe una consulta para evaluación preliminar.',
    'cta-form-btn': 'Enviar Consulta',
    'footer-rights': 'Todos los Derechos Reservados. Consultoría estrictamente confidencial y selectiva.'
  }
};


document.addEventListener('DOMContentLoaded', () => {

  // 1. Language Toggle Logic
  const langSelector = document.getElementById('langToggle');
  
  if (langSelector) {
    langSelector.addEventListener('change', (e) => {
      const selectedLang = e.target.value;
      updateLanguage(selectedLang);
      localStorage.setItem('axion-lang', selectedLang);
    });
    
    // Restore preferred Language
    const savedLang = localStorage.getItem('axion-lang') || 'pt';
    langSelector.value = savedLang;
    updateLanguage(savedLang);
  }

  function updateLanguage(langKey) {
    if (!dictionary[langKey]) return;
    const texts = dictionary[langKey];
    
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (texts[key]) {
        el.textContent = texts[key];
      }
    });
  }


  // 2. Navbar Scroll Effect
  const navbar = document.getElementById('navbar');
  const heroSection = document.getElementById('home');
  
  if (navbar && heroSection) {
    const toggleNavbarScrolled = () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    
    window.addEventListener('scroll', toggleNavbarScrolled);
    toggleNavbarScrolled(); // Init
  }


  // 3. Scroll Reveal Animations
  const revealElements = document.querySelectorAll('.reveal');
  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  };
  
  const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };
  
  const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
  
  setTimeout(() => {
    revealElements.forEach(el => revealObserver.observe(el));
    // Trigger reveals that are immediately in viewport
    document.querySelectorAll('.reveal').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.classList.add('active');
      }
    });
  }, 100);

});

// ── Profile Card Expand / Close ──────────────────────────────
let _savedScrollY = 0; // remembers scroll position before a card opens

function openCard(id) {
  // Close any already-open panel
  document.querySelectorAll('.pcard__panel.is-open').forEach(p => p.classList.remove('is-open'));

  // Save current scroll position before moving to top
  _savedScrollY = window.scrollY;

  // Open the portalled panel for this card
  const panel = document.getElementById('panel-' + id);
  if (!panel) return;
  panel.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function closeCard(e, id) {
  if (e) e.stopPropagation();
  const panel = document.getElementById('panel-' + id);
  if (!panel) return;
  panel.classList.remove('is-open');
  document.body.style.overflow = '';

  // Return user to where they were before opening
  window.scrollTo({ top: _savedScrollY, behavior: 'instant' });
}

// Escape key closes any open panel
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.pcard__panel.is-open').forEach(p => p.classList.remove('is-open'));
    document.body.style.overflow = '';
    window.scrollTo({ top: _savedScrollY, behavior: 'instant' });
  }
});
