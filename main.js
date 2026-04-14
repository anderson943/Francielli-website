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
    'nav-about': 'Sobre Nós',
    'nav-blog': 'Blog',
    'nav-engagements': 'Modelos de Engajamento',
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
    'contact-email-label': 'Email Direto',
    'contact-schedule-label': 'Agendamento Executivo',
    'contact-offices-label': 'Escritórios',
    'footer-rights': 'Todos os Direitos Reservados. Consultoria estritamente confidencial e seletiva.',

    // About page
    'about-label-firm': 'Nossa Firma',
    'about-page-title': 'Sobre a Axion Regulatory',
    'about-page-desc': 'Uma consultoria regulatória de terapias avançadas altamente seletiva, com sede na Flórida, EUA — conectando a inovação global ao mercado brasileiro com rigor científico e precisão estratégica.',
    'about-mission-label': 'Missão',
    'about-mission-title': 'Integridade Regulatória para a Inovação Global',
    'about-mission-p1': 'A Axion Regulatory existe para garantir que os Medicamentos de Terapia Avançada (ATMPs) — incluindo terapias celulares, gênicas e produtos de engenharia tecidual — cheguem ao mercado com a robustez regulatória que merecem.',
    'about-mission-p2': 'Atuamos na interseção entre o desenvolvimento científico e a execução regulatória, garantindo que cada decisão clínica, de fabricação e de documentação esteja alinhada com as exigências da ANVISA desde o início.',
    'about-mission-p3': 'Nosso trabalho é caracterizado por profundidade estratégica, precisão institucional e compromisso inabalável com o sucesso regulatório de nossos clientes.',
    'about-hq-label': 'Sede',
    'about-market-label': 'Mercado Principal',
    'about-spec-label': 'Especialização',
    'about-model-label': 'Modelo',
    'about-model-value': 'Seletivo · Liderado por Sêniors · Confidencial',
    'about-principles-label': 'Princípios',
    'about-principles-title': 'Como Trabalhamos',
    'about-value1-title': 'Rigor Científico',
    'about-value1-desc': 'Cada recomendação é baseada em evidências, diretrizes internacionais (ICH, PIC/S, OMS) e profunda especialização em terapias avançadas.',
    'about-value2-title': 'Precisão Estratégica',
    'about-value2-desc': 'Construímos estratégias regulatórias que eliminam exigências redundantes, reduzem prazos e posicionam nossos clientes para uma entrada de mercado duradoura.',
    'about-value3-title': 'Discrição Institucional',
    'about-value3-desc': 'A confidencialidade é nosso padrão estrutural. Protegemos propriedade intelectual, intenção estratégica e informações clínicas sensíveis em todos os momentos.',
    'about-cta-desc': 'Pronto para discutir como a Axion Regulatory pode apoiar seu programa?',
    'about-cta-inquiry': 'Enviar Consulta Confidencial',

    // Engagements page
    'eng-label': 'Estrutura de Assessoria',
    'eng-title': 'Modelos de Engajamento',
    'eng-desc': 'A Axion Regulatory atua por meio de engajamentos estruturados com base na complexidade regulatória, requisitos de execução clínica e exposição ao risco. Priorizamos escopo personalizado, estrita confidencialidade e envolvimento sênior em um número limitado de mandatos ativos.',
    'eng-scope-label': 'Definição de Escopo',
    'eng-m1-format': 'Engajamento de Escopo Fixo',
    'eng-m1-title': 'Avaliação Estratégica',
    'eng-m1-purpose': 'Objetivo: Avaliação em fase inicial e suporte à decisão',
    'eng-m1-desc': 'Avaliação objetiva da viabilidade regulatória e do risco operacional para evitar desalinhamentos estratégicos custosos. Construímos modelos precisos que garantem alinhamento nativo com a ANVISA antes do comprometimento de capital de execução.',
    'eng-m1-li1': 'Avaliação do percurso regulatório',
    'eng-m1-li2': 'Visão geral da viabilidade clínica',
    'eng-m1-li3': 'Mapeamento de identificação de riscos',
    'eng-m1-li4': 'Recomendações estratégicas executivas',
    'eng-m2-format': 'Baseado em Projeto',
    'eng-m2-title': 'Estruturação de Entrada no Mercado',
    'eng-m2-purpose': 'Objetivo: Preparar a entrada completa no Brasil',
    'eng-m2-desc': 'A fase crítica de pré-execução que garante alinhamento regulatório, clínico e operacional rigoroso. Esta estruturação assegura a prontidão de infraestrutura e a velocidade de submissão.',
    'eng-m2-li1': 'Estratégia de submissão e planejamento de dossiê',
    'eng-m2-li2': 'Identificação e estruturação de centros clínicos',
    'eng-m2-li3': 'Planejamento do percurso ético (CEP/CONEP)',
    'eng-m2-li4': 'Framework de logística e importação',
    'eng-m2-li5': 'Mapeamento de risco baseado em FMEA',
    'eng-m3-format': 'Retainer',
    'eng-m3-title': 'Assessoria de Execução',
    'eng-m3-purpose': 'Objetivo: Suporte contínuo durante programas ativos',
    'eng-m3-desc': 'Mandato ativo que garante que o atrito regulatório seja minimizado e o risco operacional seja controlado durante a execução. Proporciona interação e orientação estratégica em tempo real.',
    'eng-m3-li1': 'Interação e suporte regulatório contínuos',
    'eng-m3-li2': 'Monitoramento contínuo de riscos',
    'eng-m3-li3': 'Orientação operacional e governança',
    'eng-m3-li4': 'Ajustes estratégicos em tempo real',
    'eng-m4-format': 'Baseado em Deal',
    'eng-m4-title': 'Due Diligence Técnica',
    'eng-m4-purpose': 'Objetivo: Avaliação e validação de investimento',
    'eng-m4-desc': 'Projetado para investidores que precisam de clareza técnica absoluta sobre ativos ATMP. Aplicamos a Análise de Modos e Efeitos de Falha (FMEA) para identificar riscos sistêmicos, clínicos e regulatórios ocultos antes da transação.',
    'eng-m4-li1': 'Modelagem de risco rigorosa (FMEA)',
    'eng-m4-li2': 'Validação regulatória (FDA / EMA / ANVISA)',
    'eng-m4-li3': 'Viabilidade de execução clínica',
    'eng-m4-li4': 'Matriz de identificação de red flags',
    'eng-m4-li5': 'Relatório executivo de grau de investimento',
    'eng-principles-title': 'Princípios de Engajamento',
    'eng-p1': '<strong class="text-primary-dark">Mandatos Limitados:</strong> Restringimos nossa base de clientes simultâneos para garantir precisão.',
    'eng-p2': '<strong class="text-primary-dark">Envolvimento Sênior:</strong> Toda execução estratégica é dirigida exclusivamente por assessores sêniors.',
    'eng-p3': '<strong class="text-primary-dark">Profundidade sobre Volume:</strong> Otimizamos para resolução de problemas de alta complexidade em vez de processamento genérico em escala.',
    'eng-p4': '<strong class="text-primary-dark">Orientação para Decisão:</strong> Os entregáveis são construídos para apoiar caminhos executivos imediatos e de alto impacto.',
    'eng-conf-title': 'Confidencialidade Estrita',
    'eng-conf-desc': 'Dada a natureza das terapias avançadas e dos investimentos transnacionais, aplicamos discrição de nível institucional. A confidencialidade é nosso padrão estrutural, protegendo propriedade intelectual e intenção estratégica.',
    'eng-cta-desc': 'Os engajamentos começam com uma discussão estruturada para avaliar adequação e escopo.',
    'eng-cta-note': 'Os engajamentos são iniciados de forma seletiva. Chamadas estratégicas estão disponíveis para avaliação exploratória.',

    // Inquiry page
    'inq-intake-label': 'Protocolo de Intake',
    'inq-page-title': 'Consulta Confidencial',
    'inq-page-desc': 'Esta consulta é destinada a organizações e investidores que avaliam a entrada regulatória, clínica ou estratégica no Brasil.',
    'inq-page-note': 'As submissões são analisadas com base no escopo, complexidade e alinhamento com mandatos ativos.',
    'inq-page-conf': 'Todas as submissões são tratadas como confidenciais. Informações técnicas sensíveis devem ser compartilhadas apenas após engajamento formal.',
    'inq-section1': '01. Informações de Contato',
    'inq-full-name': 'Nome Completo',
    'inq-email': 'E-mail Corporativo',
    'inq-company': 'Empresa / Organização',
    'inq-role': 'Cargo / Título',
    'inq-section2': '02. Contexto de Engajamento',
    'inq-section3': '03. Contexto Estratégico',
    'inq-desc-label': 'Breve Descrição do Programa ou Mandato',
    'inq-section5': '05. Informações Adicionais',
    'inq-submit': 'Enviar Consulta',
    'inq-confirm-title': 'Consulta Recebida',
    'inq-confirm-desc': 'Sua consulta foi recebida e será analisada com confidencialidade. Se houver alinhamento, responderemos com os próximos passos.',
    'inq-confirm-cta': 'Voltar ao Início',

    // Inquiry form – Section 02 fields
    'inq-type-label': 'Tipo de Consulta',
    'inq-type-ph': 'Selecione o Tipo',
    'inq-type-dev': 'Desenvolvedor / Patrocinador',
    'inq-type-inv': 'Investidor / Venture Capital',
    'inq-type-gov': 'Governo / Autoridade Regulatória',
    'inq-type-other': 'Outro',
    'inq-obj-label': 'Objetivo Principal',
    'inq-obj-ph': 'Selecione o Objetivo',
    'inq-obj-1': 'Entrada de ensaio clínico no Brasil',
    'inq-obj-2': 'Avaliação do percurso regulatório',
    'inq-obj-3': 'Estruturação de rede clínica',
    'inq-obj-4': 'Estratégia de logística e importação',
    'inq-obj-5': 'Due diligence técnica / revisão de investimento',
    'inq-obj-other': 'Outro',
    'inq-modality-label': 'Modalidade ATMP',
    'inq-modality-ph': 'Selecione a Modalidade',
    'inq-modality-1': 'Terapia Gênica',
    'inq-modality-2': 'Terapia Celular',
    'inq-modality-3': 'Produto de Engenharia Tecidual',
    'inq-modality-4': 'Outro / Não Divulgado',
    'inq-stage-label': 'Fase do Programa',
    'inq-stage-ph': 'Selecione a Fase',
    'inq-stage-1': 'Pré-clínico',
    'inq-stage-2': 'Preparação IND / IMPD',
    'inq-stage-3': 'Preparando Entrada Clínica',
    'inq-stage-4': 'Desenvolvimento Clínico Ativo',
    'inq-stage-5': 'Avaliação de Investimento',
    'inq-stage-other': 'Outro',
    'inq-timeline-label': 'Prazo para Entrada no Brasil',
    'inq-timeline-ph': 'Selecione o Prazo',
    'inq-timeline-1': 'Imediato',
    'inq-timeline-2': 'Em até 3 meses',
    'inq-timeline-3': 'Em até 6 meses',
    'inq-timeline-4': 'Mais de 6 meses',
    'inq-timeline-5': 'Exploratório',

    // Inquiry form – Section 03 fields
    'inq-key-label': 'Questão-chave ou Área de Decisão',
    'inq-risk-label': 'Principal Risco ou Restrição em Avaliação',

    // Inquiry form – Section 04
    'inq-section4': '04. Escopo de Engajamento',
    'inq-section4-optional': '(Opcional)',
    'inq-scope-label': 'Escopo Esperado de Engajamento',
    'inq-scope-ph': 'Selecione o Escopo',
    'inq-scope-1': 'Avaliação Estratégica',
    'inq-scope-2': 'Estruturação de Entrada no Mercado',
    'inq-scope-3': 'Assessoria de Execução',
    'inq-scope-4': 'Due Diligence Técnica',
    'inq-scope-5': 'Ainda Não Definido',
    'inq-budget-label': 'Faixa de Orçamento Estimada',
    'inq-budget-ph': 'Selecione a Faixa',
    'inq-budget-1': 'Abaixo de $15.000',
    'inq-budget-2': '$15.000 – $50.000',
    'inq-budget-3': 'Acima de $50.000',
    'inq-budget-4': 'Prefiro não informar',

    // Inquiry form – Section 05 fields
    'inq-notes-label': 'Notas Confidenciais ou Contexto Adicional',

    // Engagement price suffix
    'eng-per-month': '/ mês',

    // Blog page
    'blog-label': 'Inteligência Regulatória',
    'blog-title': 'Blog Axion',
    'blog-desc': 'Insights estratégicos sobre regulação de ATMPs, entrada no mercado brasileiro pela ANVISA, excelência clínica e risco de investimento em terapias avançadas.',
    'blog-nl-label': 'Mantenha-se Informado',
    'blog-nl-title': 'Briefings de Inteligência Regulatória',
    'blog-nl-desc': 'Briefings periódicos sobre desenvolvimentos regulatórios da ANVISA, mudanças de política de ATMPs e inteligência de mercado estratégica — entregues a executivos sêniors e investidores.',
    'blog-nl-cta': 'Solicitar Acesso',
    'blog-coming': 'Em breve'

  },
  en: {
    // Navbar
    'nav-solucoes': 'Solutions',
    'nav-hub': 'Knowledge Center',
    'nav-sobre': 'Leadership',
    'nav-about': 'About Us',
    'nav-blog': 'Blog',
    'nav-engagements': 'Engagement Models',
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
    'contact-email-label': 'Direct Email',
    'contact-schedule-label': 'Executive Scheduling',
    'contact-offices-label': 'Offices',
    'footer-rights': 'All Rights Reserved. Highly selective and confidential consultancy.',

    // About page
    'about-label-firm': 'Our Firm',
    'about-page-title': 'About Axion Regulatory',
    'about-page-desc': 'A highly selective advanced therapy regulatory consultancy headquartered in Florida, USA — connecting global innovation to the Brazilian market with scientific rigor and strategic precision.',
    'about-mission-label': 'Mission',
    'about-mission-title': 'Regulatory Integrity for Global Innovation',
    'about-mission-p1': 'Axion Regulatory exists to ensure that Advanced Therapy Medicinal Products (ATMPs) — including cell therapies, gene therapies, and tissue engineering products — reach markets with the regulatory robustness they deserve.',
    'about-mission-p2': 'We operate at the intersection of scientific development and regulatory execution, ensuring that every clinical, manufacturing, and documentation decision is aligned with ANVISA\'s requirements from day one.',
    'about-mission-p3': 'Our work is characterized by strategic depth, institutional precision, and an unwavering commitment to our clients\' regulatory success.',
    'about-hq-label': 'Headquarters',
    'about-market-label': 'Primary Market',
    'about-spec-label': 'Specialization',
    'about-model-label': 'Model',
    'about-model-value': 'Selective · Senior-Led · Confidential',
    'about-principles-label': 'Principles',
    'about-principles-title': 'How We Work',
    'about-value1-title': 'Scientific Rigor',
    'about-value1-desc': 'Every recommendation is grounded in evidence, international guidelines (ICH, PIC/S, WHO), and deep domain expertise in advanced therapies.',
    'about-value2-title': 'Strategic Precision',
    'about-value2-desc': 'We build regulatory strategies that eliminate redundant requirements, reduce timelines, and position our clients for durable market entry.',
    'about-value3-title': 'Institutional Discretion',
    'about-value3-desc': 'Confidentiality is our structural default. We protect intellectual property, strategic intent, and sensitive clinical information at all times.',
    'about-cta-desc': 'Ready to discuss how Axion Regulatory can support your program?',
    'about-cta-inquiry': 'Submit Confidential Inquiry',

    // Engagements page
    'eng-label': 'Advisory Structure',
    'eng-title': 'Engagement Models',
    'eng-desc': 'Axion Regulatory operates through structured engagements based on regulatory complexity, clinical execution requirements, and risk exposure. We prioritize tailored scope, strict confidentiality, and senior-level involvement across a limited number of active mandates.',
    'eng-scope-label': 'Scope Definition',
    'eng-m1-format': 'Fixed-Scope Engagement',
    'eng-m1-title': 'Strategic Assessment',
    'eng-m1-purpose': 'Purpose: Early-stage evaluation and decision support',
    'eng-m1-desc': 'Objective evaluation of regulatory feasibility and operational risk to prevent costly strategic misalignments. We construct precise models that ensure native ANVISA alignment before execution capital is committed.',
    'eng-m1-li1': 'Regulatory pathway assessment',
    'eng-m1-li2': 'Clinical feasibility overview',
    'eng-m1-li3': 'Risk identification mapping',
    'eng-m1-li4': 'Strategic executive recommendations',
    'eng-m2-format': 'Project-Based',
    'eng-m2-title': 'Market Entry Structuring',
    'eng-m2-purpose': 'Purpose: Preparing full entry into Brazil',
    'eng-m2-desc': 'The critical pre-execution phase enforcing strict regulatory, clinical, and operational alignment. This structuring ensures infrastructure readiness and submission velocity.',
    'eng-m2-li1': 'Submission strategy & dossier planning',
    'eng-m2-li2': 'Clinical site identification & structuring',
    'eng-m2-li3': 'Ethics pathway planning (CEP/CONEP)',
    'eng-m2-li4': 'Logistics and import framework',
    'eng-m2-li5': 'FMEA-based risk mapping',
    'eng-m3-format': 'Retainer',
    'eng-m3-title': 'Execution Advisory',
    'eng-m3-purpose': 'Purpose: Ongoing support during active programs',
    'eng-m3-desc': 'Active mandate ensuring regulatory friction is minimized and operational risk is controlled during execution. This provides real-time strategic interaction and guidance.',
    'eng-m3-li1': 'Ongoing regulatory interaction & support',
    'eng-m3-li2': 'Continuous risk monitoring',
    'eng-m3-li3': 'Operational guidance & governance',
    'eng-m3-li4': 'Real-time strategic adjustments',
    'eng-m4-format': 'Deal-Based',
    'eng-m4-title': 'Technical Due Diligence',
    'eng-m4-purpose': 'Purpose: Investment evaluation & validation',
    'eng-m4-desc': 'Engineered for investors requiring absolute technical clarity on ATMP assets. We apply proprietary Failure Mode and Effects Analysis (FMEA) to identify hidden systemic, clinical, and regulatory risks prior to transaction.',
    'eng-m4-li1': 'Rigorous risk modeling (FMEA)',
    'eng-m4-li2': 'Regulatory validation (FDA / EMA / ANVISA)',
    'eng-m4-li3': 'Clinical execution feasibility',
    'eng-m4-li4': 'Red flag identification matrix',
    'eng-m4-li5': 'Executive investment-grade report',
    'eng-principles-title': 'Engagement Principles',
    'eng-p1': '<strong class="text-primary-dark">Limited Mandates:</strong> We restrict our concurrent client base to ensure precision.',
    'eng-p2': '<strong class="text-primary-dark">Senior Involvement:</strong> All strategic execution is directed exclusively by senior advisors.',
    'eng-p3': '<strong class="text-primary-dark">Depth Over Volume:</strong> We optimize for high-complexity problem solving over scaled generic processing.',
    'eng-p4': '<strong class="text-primary-dark">Decision Orientation:</strong> Deliverables are built to support immediate, high-stakes executive pathways.',
    'eng-conf-title': 'Strict Confidentiality',
    'eng-conf-desc': 'Given the nature of advanced therapies and cross-border investment, we enforce institutional-grade discretion. Confidentiality is our structural default, protecting intellectual property and strategic intent.',
    'eng-cta-desc': 'Engagements begin with a structured discussion to evaluate fit and scope.',
    'eng-cta-note': 'Engagements are initiated selectively. Strategic calls are available for exploratory evaluation.',

    // Inquiry page
    'inq-intake-label': 'Intake Protocol',
    'inq-page-title': 'Confidential Inquiry',
    'inq-page-desc': 'This inquiry is intended for organizations and investors evaluating regulatory, clinical, or strategic entry into Brazil.',
    'inq-page-note': 'Submissions are reviewed based on scope, complexity, and alignment with active mandates.',
    'inq-page-conf': 'All submissions are treated as confidential. Sensitive technical information should only be shared after formal engagement.',
    'inq-section1': '01. Contact Information',
    'inq-full-name': 'Full Name',
    'inq-email': 'Work Email',
    'inq-company': 'Company / Organization',
    'inq-role': 'Role / Title',
    'inq-section2': '02. Engagement Context',
    'inq-section3': '03. Strategic Context',
    'inq-desc-label': 'Brief Description of the Program or Mandate',
    'inq-section5': '05. Additional Clarification',
    'inq-submit': 'Submit Inquiry',
    'inq-confirm-title': 'Inquiry Received',
    'inq-confirm-desc': 'Your inquiry has been received and will be reviewed confidentially. If aligned, we will respond with next steps.',
    'inq-confirm-cta': 'Return to Overview',

    // Inquiry form – Section 02 fields
    'inq-type-label': 'Inquiry Type',
    'inq-type-ph': 'Select Inquiry Type',
    'inq-type-dev': 'Developer / Sponsor',
    'inq-type-inv': 'Investor / Venture Capital',
    'inq-type-gov': 'Government / Regulatory Authority',
    'inq-type-other': 'Other',
    'inq-obj-label': 'Primary Objective',
    'inq-obj-ph': 'Select Primary Objective',
    'inq-obj-1': 'Clinical trial entry into Brazil',
    'inq-obj-2': 'Regulatory pathway assessment',
    'inq-obj-3': 'Clinical network structuring',
    'inq-obj-4': 'Logistics and importation strategy',
    'inq-obj-5': 'Technical due diligence / investment review',
    'inq-obj-other': 'Other',
    'inq-modality-label': 'ATMP Modality',
    'inq-modality-ph': 'Select Modality',
    'inq-modality-1': 'Gene Therapy',
    'inq-modality-2': 'Cell Therapy',
    'inq-modality-3': 'Tissue-Engineered Product',
    'inq-modality-4': 'Other / Undisclosed',
    'inq-stage-label': 'Program Stage',
    'inq-stage-ph': 'Select Stage',
    'inq-stage-1': 'Preclinical',
    'inq-stage-2': 'IND / IMPD Preparation',
    'inq-stage-3': 'Preparing Clinical Entry',
    'inq-stage-4': 'Active Clinical Development',
    'inq-stage-5': 'Investment Evaluation',
    'inq-stage-other': 'Other',
    'inq-timeline-label': 'Timeline for Brazil Entry',
    'inq-timeline-ph': 'Select Timeline',
    'inq-timeline-1': 'Immediate',
    'inq-timeline-2': 'Within 3 months',
    'inq-timeline-3': 'Within 6 months',
    'inq-timeline-4': '6+ months',
    'inq-timeline-5': 'Exploratory',

    // Inquiry form – Section 03 fields
    'inq-key-label': 'Key Question or Decision Area',
    'inq-risk-label': 'Primary Risk or Constraint Being Evaluated',

    // Inquiry form – Section 04
    'inq-section4': '04. Engagement Scope',
    'inq-section4-optional': '(Optional)',
    'inq-scope-label': 'Expected Scope of Engagement',
    'inq-scope-ph': 'Select Scope',
    'inq-scope-1': 'Strategic Assessment',
    'inq-scope-2': 'Market Entry Structuring',
    'inq-scope-3': 'Execution Advisory',
    'inq-scope-4': 'Technical Due Diligence',
    'inq-scope-5': 'Not Yet Defined',
    'inq-budget-label': 'Estimated Budget Range',
    'inq-budget-ph': 'Select Range',
    'inq-budget-1': 'Under $15,000',
    'inq-budget-2': '$15,000 – $50,000',
    'inq-budget-3': '$50,000+',
    'inq-budget-4': 'Prefer not to disclose',

    // Inquiry form – Section 05 fields
    'inq-notes-label': 'Confidential Notes or Additional Context',

    // Engagement price suffix
    'eng-per-month': '/ month',

    // Blog page
    'blog-label': 'Regulatory Intelligence',
    'blog-title': 'Axion Blog',
    'blog-desc': 'Strategic insights on ATMP regulation, ANVISA market entry, clinical excellence, and investment risk in advanced therapies.',
    'blog-nl-label': 'Stay Informed',
    'blog-nl-title': 'Regulatory Intelligence Briefings',
    'blog-nl-desc': 'Periodic briefings on ANVISA regulatory developments, ATMP policy changes, and strategic market intelligence — delivered to senior executives and investors.',
    'blog-nl-cta': 'Request Access',
    'blog-coming': 'Coming Soon'

  },
  es: {
    // Navbar
    'nav-solucoes': 'Soluciones',
    'nav-hub': 'Centro de Conocimiento',
    'nav-sobre': 'Liderazgo',
    'nav-about': 'Sobre Nosotros',
    'nav-blog': 'Blog',
    'nav-engagements': 'Modelos de Compromiso',
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
    'contact-email-label': 'Correo Directo',
    'contact-schedule-label': 'Programación Ejecutiva',
    'contact-offices-label': 'Oficinas',
    'footer-rights': 'Todos los Derechos Reservados. Consultoría estrictamente confidencial y selectiva.',

    // About page
    'about-label-firm': 'Nuestra Firma',
    'about-page-title': 'Sobre Axion Regulatory',
    'about-page-desc': 'Una consultoría regulatoria de terapias avanzadas altamente selectiva, con sede en Florida, EE.UU., conectando la innovación global con el mercado brasileño con rigor científico y precisión estratégica.',
    'about-mission-label': 'Misión',
    'about-mission-title': 'Integridad Regulatoria para la Innovación Global',
    'about-mission-p1': 'Axion Regulatory existe para garantizar que los Medicamentos de Terapia Avanzada (ATMPs) — incluyendo terapias celulares, génicas y productos de ingeniería tisular — lleguen al mercado con la robustez regulatoria que merecen.',
    'about-mission-p2': 'Operamos en la intersección del desarrollo científico y la ejecución regulatoria, garantizando que cada decisión clínica, de fabricación y de documentación esté alineada con los requisitos de ANVISA desde el primer día.',
    'about-mission-p3': 'Nuestro trabajo se caracteriza por la profundidad estratégica, la precisión institucional y el compromiso inquebrantable con el éxito regulatorio de nuestros clientes.',
    'about-hq-label': 'Sede',
    'about-market-label': 'Mercado Principal',
    'about-spec-label': 'Especialización',
    'about-model-label': 'Modelo',
    'about-model-value': 'Selectivo · Liderado por Seniors · Confidencial',
    'about-principles-label': 'Principios',
    'about-principles-title': 'Cómo Trabajamos',
    'about-value1-title': 'Rigor Científico',
    'about-value1-desc': 'Cada recomendación está fundamentada en evidencias, directrices internacionales (ICH, PIC/S, OMS) y profunda especialización en terapias avanzadas.',
    'about-value2-title': 'Precisión Estratégica',
    'about-value2-desc': 'Construimos estrategias regulatorias que eliminan requisitos redundantes, reducen plazos y posicionan a nuestros clientes para una entrada duradera en el mercado.',
    'about-value3-title': 'Discreción Institucional',
    'about-value3-desc': 'La confidencialidad es nuestro estándar estructural. Protegemos la propiedad intelectual, la intención estratégica y la información clínica sensible en todo momento.',
    'about-cta-desc': '¿Listo para discutir cómo Axion Regulatory puede apoyar su programa?',
    'about-cta-inquiry': 'Enviar Consulta Confidencial',

    // Engagements page
    'eng-label': 'Estructura de Asesoría',
    'eng-title': 'Modelos de Compromiso',
    'eng-desc': 'Axion Regulatory opera mediante compromisos estructurados basados en la complejidad regulatoria, los requisitos de ejecución clínica y la exposición al riesgo. Priorizamos el alcance personalizado, la estricta confidencialidad y la participación de nivel senior en un número limitado de mandatos activos.',
    'eng-scope-label': 'Definición de Alcance',
    'eng-m1-format': 'Compromiso de Alcance Fijo',
    'eng-m1-title': 'Evaluación Estratégica',
    'eng-m1-purpose': 'Objetivo: Evaluación en fase inicial y soporte a la decisión',
    'eng-m1-desc': 'Evaluación objetiva de la viabilidad regulatoria y el riesgo operativo para prevenir desalineaciones estratégicas costosas. Construimos modelos precisos que garantizan la alineación nativa con ANVISA antes de comprometer capital de ejecución.',
    'eng-m1-li1': 'Evaluación de la ruta regulatoria',
    'eng-m1-li2': 'Visión general de la viabilidad clínica',
    'eng-m1-li3': 'Mapeo de identificación de riesgos',
    'eng-m1-li4': 'Recomendaciones estratégicas ejecutivas',
    'eng-m2-format': 'Basado en Proyecto',
    'eng-m2-title': 'Estructuración de Entrada al Mercado',
    'eng-m2-purpose': 'Objetivo: Preparar la entrada completa a Brasil',
    'eng-m2-desc': 'La fase crítica de pre-ejecución que garantiza la alineación regulatoria, clínica y operativa estricta. Esta estructuración asegura la preparación de la infraestructura y la velocidad de presentación.',
    'eng-m2-li1': 'Estrategia de presentación y planificación del dossier',
    'eng-m2-li2': 'Identificación y estructuración de sitios clínicos',
    'eng-m2-li3': 'Planificación de la vía ética (CEP/CONEP)',
    'eng-m2-li4': 'Marco de logística e importación',
    'eng-m2-li5': 'Mapeo de riesgo basado en FMEA',
    'eng-m3-format': 'Retainer',
    'eng-m3-title': 'Asesoría de Ejecución',
    'eng-m3-purpose': 'Objetivo: Soporte continuo durante programas activos',
    'eng-m3-desc': 'Mandato activo que garantiza que la fricción regulatoria se minimice y el riesgo operativo se controle durante la ejecución. Proporciona interacción y orientación estratégica en tiempo real.',
    'eng-m3-li1': 'Interacción y soporte regulatorio continuos',
    'eng-m3-li2': 'Monitoreo continuo de riesgos',
    'eng-m3-li3': 'Orientación operativa y gobernanza',
    'eng-m3-li4': 'Ajustes estratégicos en tiempo real',
    'eng-m4-format': 'Basado en Deal',
    'eng-m4-title': 'Due Diligence Técnica',
    'eng-m4-purpose': 'Objetivo: Evaluación y validación de inversión',
    'eng-m4-desc': 'Diseñado para inversores que requieren claridad técnica absoluta sobre activos ATMP. Aplicamos el Análisis de Modos y Efectos de Falla (FMEA) para identificar riesgos sistémicos, clínicos y regulatorios ocultos antes de la transacción.',
    'eng-m4-li1': 'Modelado riguroso de riesgos (FMEA)',
    'eng-m4-li2': 'Validación regulatoria (FDA / EMA / ANVISA)',
    'eng-m4-li3': 'Viabilidad de ejecución clínica',
    'eng-m4-li4': 'Matriz de identificación de señales de alerta',
    'eng-m4-li5': 'Informe ejecutivo de grado de inversión',
    'eng-principles-title': 'Principios de Compromiso',
    'eng-p1': '<strong class="text-primary-dark">Mandatos Limitados:</strong> Restringimos nuestra base de clientes simultáneos para garantizar precisión.',
    'eng-p2': '<strong class="text-primary-dark">Participación Senior:</strong> Toda ejecución estratégica es dirigida exclusivamente por asesores senior.',
    'eng-p3': '<strong class="text-primary-dark">Profundidad sobre Volumen:</strong> Optimizamos para la resolución de problemas de alta complejidad en lugar del procesamiento genérico a escala.',
    'eng-p4': '<strong class="text-primary-dark">Orientación a la Decisión:</strong> Los entregables están diseñados para apoyar rutas ejecutivas inmediatas y de alto impacto.',
    'eng-conf-title': 'Confidencialidad Estricta',
    'eng-conf-desc': 'Dada la naturaleza de las terapias avanzadas y la inversión transfronteriza, aplicamos discreción de nivel institucional. La confidencialidad es nuestro estándar estructural, protegiendo la propiedad intelectual y la intención estratégica.',
    'eng-cta-desc': 'Los compromisos comienzan con una discusión estructurada para evaluar la adecuación y el alcance.',
    'eng-cta-note': 'Los compromisos se inician de forma selectiva. Las llamadas estratégicas están disponibles para evaluación exploratoria.',

    // Inquiry page
    'inq-intake-label': 'Protocolo de Intake',
    'inq-page-title': 'Consulta Confidencial',
    'inq-page-desc': 'Esta consulta está dirigida a organizaciones e inversores que evalúan la entrada regulatoria, clínica o estratégica en Brasil.',
    'inq-page-note': 'Las solicitudes se revisan según el alcance, la complejidad y el alineamiento con mandatos activos.',
    'inq-page-conf': 'Todas las solicitudes se tratan como confidenciales. La información técnica sensible solo debe compartirse después del compromiso formal.',
    'inq-section1': '01. Información de Contacto',
    'inq-full-name': 'Nombre Completo',
    'inq-email': 'Correo Corporativo',
    'inq-company': 'Empresa / Organización',
    'inq-role': 'Cargo / Título',
    'inq-section2': '02. Contexto de Compromiso',
    'inq-section3': '03. Contexto Estratégico',
    'inq-desc-label': 'Breve Descripción del Programa o Mandato',
    'inq-section5': '05. Aclaraciones Adicionales',
    'inq-submit': 'Enviar Consulta',
    'inq-confirm-title': 'Consulta Recibida',
    'inq-confirm-desc': 'Su consulta ha sido recibida y será revisada de forma confidencial. Si existe alineamiento, responderemos con los próximos pasos.',
    'inq-confirm-cta': 'Volver al Inicio',

    // Inquiry form – Section 02 fields
    'inq-type-label': 'Tipo de Consulta',
    'inq-type-ph': 'Seleccione el Tipo',
    'inq-type-dev': 'Desarrollador / Patrocinador',
    'inq-type-inv': 'Inversor / Venture Capital',
    'inq-type-gov': 'Gobierno / Autoridad Regulatoria',
    'inq-type-other': 'Otro',
    'inq-obj-label': 'Objetivo Principal',
    'inq-obj-ph': 'Seleccione el Objetivo',
    'inq-obj-1': 'Entrada de ensayo clínico en Brasil',
    'inq-obj-2': 'Evaluación de la ruta regulatoria',
    'inq-obj-3': 'Estructuración de red clínica',
    'inq-obj-4': 'Estrategia de logística e importación',
    'inq-obj-5': 'Due diligence técnica / revisión de inversión',
    'inq-obj-other': 'Otro',
    'inq-modality-label': 'Modalidad ATMP',
    'inq-modality-ph': 'Seleccione la Modalidad',
    'inq-modality-1': 'Terapia Génica',
    'inq-modality-2': 'Terapia Celular',
    'inq-modality-3': 'Producto de Ingeniería Tisular',
    'inq-modality-4': 'Otro / No Divulgado',
    'inq-stage-label': 'Fase del Programa',
    'inq-stage-ph': 'Seleccione la Fase',
    'inq-stage-1': 'Preclínico',
    'inq-stage-2': 'Preparación IND / IMPD',
    'inq-stage-3': 'Preparando Entrada Clínica',
    'inq-stage-4': 'Desarrollo Clínico Activo',
    'inq-stage-5': 'Evaluación de Inversión',
    'inq-stage-other': 'Otro',
    'inq-timeline-label': 'Plazo para Entrada en Brasil',
    'inq-timeline-ph': 'Seleccione el Plazo',
    'inq-timeline-1': 'Inmediato',
    'inq-timeline-2': 'En 3 meses',
    'inq-timeline-3': 'En 6 meses',
    'inq-timeline-4': 'Más de 6 meses',
    'inq-timeline-5': 'Exploratorio',

    // Inquiry form – Section 03 fields
    'inq-key-label': 'Pregunta Clave o Área de Decisión',
    'inq-risk-label': 'Principal Riesgo o Restricción en Evaluación',

    // Inquiry form – Section 04
    'inq-section4': '04. Alcance de Compromiso',
    'inq-section4-optional': '(Opcional)',
    'inq-scope-label': 'Alcance Esperado del Compromiso',
    'inq-scope-ph': 'Seleccione el Alcance',
    'inq-scope-1': 'Evaluación Estratégica',
    'inq-scope-2': 'Estructuración de Entrada al Mercado',
    'inq-scope-3': 'Asesoría de Ejecución',
    'inq-scope-4': 'Due Diligence Técnica',
    'inq-scope-5': 'Aún No Definido',
    'inq-budget-label': 'Rango de Presupuesto Estimado',
    'inq-budget-ph': 'Seleccione el Rango',
    'inq-budget-1': 'Menos de $15.000',
    'inq-budget-2': '$15.000 – $50.000',
    'inq-budget-3': 'Más de $50.000',
    'inq-budget-4': 'Prefiero no indicar',

    // Inquiry form – Section 05 fields
    'inq-notes-label': 'Notas Confidenciales o Contexto Adicional',

    // Engagement price suffix
    'eng-per-month': '/ mes',

    // Blog page
    'blog-label': 'Inteligencia Regulatoria',
    'blog-title': 'Blog Axion',
    'blog-desc': 'Insights estratégicos sobre regulación de ATMPs, entrada al mercado brasileño por ANVISA, excelencia clínica y riesgo de inversión en terapias avanzadas.',
    'blog-nl-label': 'Manténgase Informado',
    'blog-nl-title': 'Briefings de Inteligencia Regulatoria',
    'blog-nl-desc': 'Briefings periódicos sobre desarrollos regulatorios de ANVISA, cambios de política en ATMPs e inteligencia de mercado estratégica — entregados a ejecutivos senior e inversores.',
    'blog-nl-cta': 'Solicitar Acceso',
    'blog-coming': 'Próximamente'

  }
};

// ── i18n Engine (global scope) ─────────────────────────────────
function updateLanguage(langKey) {
  if (!dictionary[langKey]) return;
  const texts = dictionary[langKey];

  // Plain text updates
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (texts[key] !== undefined) el.textContent = texts[key];
  });
  // Rich HTML updates (for elements with <strong>, etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (texts[key] !== undefined) el.innerHTML = texts[key];
  });
}

// ── Apply saved language IMMEDIATELY (script is at bottom of <body>) ──
(function applyStoredLang() {
  const savedLang = localStorage.getItem('axion-lang') || 'en';
  const selector = document.getElementById('langToggle');
  if (selector) selector.value = savedLang;
  updateLanguage(savedLang);
})();


document.addEventListener('DOMContentLoaded', () => {

  // 1. Language Toggle Logic
  const langSelector = document.getElementById('langToggle');

  if (langSelector) {
    langSelector.addEventListener('change', (e) => {
      const selectedLang = e.target.value;
      updateLanguage(selectedLang);
      localStorage.setItem('axion-lang', selectedLang);
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
  // Mark body so CSS applies the animation (progressive enhancement)
  document.body.classList.add('js-reveal-ready');

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
    // Trigger reveals already in viewport on load
    document.querySelectorAll('.reveal').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.classList.add('active');
      }
    });
  }, 100);

  // Fallback: force all reveals active after 2s (in case observer never fires in production)
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.active)').forEach(el => el.classList.add('active'));
  }, 2000);

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

// Expose functions globally so inline onclick handlers work in ES module context
window.openCard = openCard;
window.closeCard = closeCard;

// Escape key closes any open panel
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.pcard__panel.is-open').forEach(p => p.classList.remove('is-open'));
    document.body.style.overflow = '';
    window.scrollTo({ top: _savedScrollY, behavior: 'instant' });
  }
});
