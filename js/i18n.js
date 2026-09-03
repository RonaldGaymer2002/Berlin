/**
 * ============================================================================
 * PROYECTO BERLÍN - MOTOR MULTILINGÜE GLOBAL (i18n) Y GESTOR DE TEMA
 * 11 Idiomas Oficiales: ES, EN, PT, DE, IT, ZH, JA, RU, QU, GN, AY
 * ============================================================================
 */

(function () {
  'use strict';

  // 1. DICCIONARIO DE TRADUCCIONES GLOBAL OFICIAL
  const TRANSLATIONS = {
    // 🇪🇸 ESPAÑOL
    es: {
      // Navegación
      "nav.inicio": "Inicio",
      "nav.quienes_somos": "Quiénes Somos",
      "nav.proyectos": "Proyectos",
      "nav.planes": "Planes",
      "nav.contacto": "Contacto",
      "nav.volver": "Volver a Proyectos",
      "nav.whatsapp": "WhatsApp (+591 70832781)",

      // Llamadas a la Acción (CTA)
      "cta.whatsapp_directo": "Contactar por WhatsApp",
      "cta.ver_plano": "Ver Plano Interactivo",
      "cta.cotizar_lote": "Cotizar este Lote por WhatsApp",
      "cta.simular": "Simular Plan de Cuotas",
      "cta.consultar": "Consultar Disponibilidad",

      // Hero / Presentación Home
      "hero.title": "Terrenos Para Sacar Tu Casa Propia",
      "hero.desc1": "En Proyecto Berlín ponemos a tu alcance una oportunidad real de inversión y seguridad familiar en Hardeman, a sólo 400 metros de la Carretera Principal Hardeman - Piraí.",
      "hero.desc2": "Desarrollamos terrenos 100% sobre cota alta no inundable, garantizando la tranquilidad de tu patrimonio con posesión física inmediata, acceso vial expedito y trato directo y transparente con los titulares del predio.",

      // Acordeón de Características
      "features.more_info": "Más Información",
      "features.item1_title": "Ubicación Estratégica",
      "features.item1_desc": "Ubicación privilegiada en Hardeman (Municipio de San Pedro), a sólo 400 metros de la carretera asfaltada principal. Conexión rápida y expedita por la Avenida Central de Tierra hacia San Pedro, Mineros, Montero y Santa Cruz de la Sierra.",
      "features.item2_title": "Terrenos A Plazo y Al Contado",
      "features.item2_desc": "Planes de financiamiento directo y accesible sin intermediación bancaria, además de descuentos preferenciales por compras al contado con posesión física inmediata.",
      "features.item3_title": "Cota Alta Garantizada",
      "features.item3_desc": "Topografía privilegiada con suelo firme y elevado, 100% libre de inundaciones para proteger tu patrimonio y construcción familiar en cualquier época del año.",

      // Lotes y Badges
      "lot.disponible": "DISPONIBLE",
      "lot.ocupado": "VENDIDO / OCUPADO",
      "lot.precio_m2": "$8 USD / m²",
      "lot.cota_alta": "100% Cota Alta No Inundable",
      "lot.a_400m": "Hardeman • A 400m Carretera",
      "lot.financiamiento": "Financiamiento Directo sin Bancos",
      "lot.superficie": "Superficie",
      "lot.precio_oficial": "Precio Oficial ($8/m²)",
      "lot.cuota_mensual": "Cuota Directa (120m)",

      // Secciones y Footer
      "banner.badge": "OPORTUNIDAD DE INVERSIÓN • HARDEMAN",
      "banner.titulo": "Tu Terreno Propio en Hardeman a Sólo $8 USD/m²",
      "banner.subtitulo": "Financiamiento directo sin trámites bancarios • 100% Cota Alta No Inundable a 400m de la Carretera",
      "about.titulo": "Sobre Nosotros",
      "about.subtitulo": "Lotes Seguros y Alta Plusvalía en Hardeman",
      "footer.col_office": "OFICINA CENTRAL",
      "footer.col_phone": "TELÉFONO",
      "footer.col_email": "EMAIL",
      "footer.oficina": "OFICINA CENTRAL",
      "footer.oficina_desc": "A 400m de la Carretera Hardeman - Piraí • Santa Cruz, Bolivia",
      "footer.telefono": "TELÉFONO",
      "footer.email": "EMAIL",
      "footer.rights": "Diseñado y desarrollado por <strong>Ronald Augusto Rodriguez Serrano</strong> | Proyecto Berlín © 2026 • Todos los derechos reservados.",
      "footer.derechos": "Diseñado y desarrollado por <strong>Ronald Augusto Rodriguez Serrano</strong> | Proyecto Berlín © 2026 • Todos los derechos reservados.",
      
      // Contacto
      "contact.subtitulo": "ATENCIÓN AL CLIENTE",
      "contact.titulo": "Contáctanos",
      "contact.badge": "OFICINA COMERCIAL / ATENCIÓN",
      "contact.oficina_titulo": "Proyecto Berlín - Santa Cruz",
      "contact.parrafo": "Escríbenos directamente o visítanos en nuestro punto de atención para recibir el mejor asesoramiento inmobiliario en terrenos sobre cota alta.",
      "contact.whatsapp_label": "WHATSAPP OFICIAL",
      "contact.ubicacion_label": "UBICACIÓN",
      "contact.ubicacion_val": "Calle Paititi #104, Santa Cruz de la Sierra, Bolivia",
      "contact.horario_label": "HORARIO DE ATENCIÓN",
      "contact.horario_val": "Lunes a Sábado: 08:30 - 18:30",
      "contact.btn_whatsapp": "ESCRÍBENOS POR WHATSAPP",
      "contact.btn_maps": "VER EN GOOGLE MAPS",

      // Controles
      "theme.light": "Modo Claro",
      "theme.dark": "Modo Oscuro",
      "lang.select": "Idioma"
    },

    // 🇬🇧 ENGLISH (UK)
    en: {
      "nav.inicio": "Home",
      "nav.quienes_somos": "About Us",
      "nav.proyectos": "Projects",
      "nav.planes": "Plans",
      "nav.contacto": "Contact",
      "nav.volver": "Back to Projects",
      "nav.whatsapp": "WhatsApp (+591 70832781)",

      "cta.whatsapp_directo": "Contact via WhatsApp",
      "cta.ver_plano": "View Interactive Map",
      "cta.cotizar_lote": "Quote this Lot on WhatsApp",
      "cta.simular": "Simulate Payment Plan",
      "cta.consultar": "Check Availability",

      "hero.title": "Plots to Build Your Own Home",
      "hero.desc1": "At Proyecto Berlín, we offer a genuine investment opportunity and family security in Hardeman, just 400 metres from the Main Hardeman - Piraí Highway.",
      "hero.desc2": "We develop plots 100% on flood-free high ground, guaranteeing your heritage with immediate physical possession, convenient road access, and direct, transparent dealings with the landowners.",

      "features.more_info": "More Information",
      "features.item1_title": "Strategic Location",
      "features.item1_desc": "Prime location in Hardeman (San Pedro Municipality), only 400 metres from the main paved highway. Fast and smooth connection via Central Avenue to San Pedro, Mineros, Montero, and Santa Cruz de la Sierra.",
      "features.item2_title": "Plots on Credit & Cash Payment",
      "features.item2_desc": "Direct, accessible financing plans without banking intermediaries, plus preferential discounts for upfront cash purchases with immediate physical handover.",
      "features.item3_title": "Guaranteed High Ground",
      "features.item3_desc": "Prime topography with elevated, solid ground, 100% flood-free to protect your investment and family build all year round.",

      "lot.disponible": "AVAILABLE",
      "lot.ocupado": "SOLD / OCCUPIED",
      "lot.precio_m2": "$8 USD / sqm",
      "lot.cota_alta": "100% High Ground Flood-Free",
      "lot.a_400m": "Hardeman • 400m from Highway",
      "lot.financiamiento": "Direct In-House Financing",
      "lot.superficie": "Lot Area",
      "lot.precio_oficial": "Official Price ($8/sqm)",
      "lot.cuota_mensual": "Monthly Installment (120m)",

      "banner.badge": "INVESTMENT OPPORTUNITY • HARDEMAN",
      "banner.titulo": "Your Own Land in Hardeman at Only $8 USD/sqm",
      "banner.subtitulo": "Direct in-house financing with no bank paperwork • 100% High Ground Flood-Free 400m from Highway",
      "about.titulo": "About Us",
      "about.subtitulo": "Secure Land & High Capital Gain in Hardeman",
      "footer.col_office": "HEAD OFFICE",
      "footer.col_phone": "PHONE",
      "footer.col_email": "EMAIL",
      "footer.oficina": "HEAD OFFICE",
      "footer.oficina_desc": "400m from Hardeman - Piraí Highway • Santa Cruz, Bolivia",
      "footer.telefono": "PHONE",
      "footer.email": "EMAIL",
      "footer.rights": "Designed and developed by <strong>Ronald Augusto Rodriguez Serrano</strong> | Proyecto Berlín © 2026 • All rights reserved.",
      "footer.derechos": "Designed and developed by <strong>Ronald Augusto Rodriguez Serrano</strong> | Proyecto Berlín © 2026 • All rights reserved.",

      "contact.subtitulo": "CUSTOMER SERVICE",
      "contact.titulo": "Contact Us",
      "contact.badge": "COMMERCIAL OFFICE / SUPPORT",
      "contact.oficina_titulo": "Proyecto Berlín - Santa Cruz",
      "contact.parrafo": "Message us directly or visit our office to receive the best real estate guidance on high-ground flood-free land.",
      "contact.whatsapp_label": "OFFICIAL WHATSAPP",
      "contact.ubicacion_label": "LOCATION",
      "contact.ubicacion_val": "Calle Paititi #104, Santa Cruz de la Sierra, Bolivia",
      "contact.horario_label": "BUSINESS HOURS",
      "contact.horario_val": "Monday to Saturday: 08:30 - 18:30",
      "contact.btn_whatsapp": "MESSAGE US ON WHATSAPP",
      "contact.btn_maps": "VIEW ON GOOGLE MAPS",

      "theme.light": "Light Mode",
      "theme.dark": "Dark Mode",
      "lang.select": "Language"
    },

    // 🇧🇷 PORTUGUÊS
    pt: {
      "nav.inicio": "Início",
      "nav.quienes_somos": "Quem Somos",
      "nav.proyectos": "Projetos",
      "nav.planes": "Planos",
      "nav.contacto": "Contato",
      "nav.volver": "Voltar aos Projetos",
      "nav.whatsapp": "WhatsApp (+591 70832781)",

      "cta.whatsapp_directo": "Falar pelo WhatsApp",
      "cta.ver_plano": "Ver Mapa Interativo",
      "cta.cotizar_lote": "Cotar este Lote no WhatsApp",
      "cta.simular": "Simular Financiamento",
      "cta.consultar": "Consultar Disponibilidade",

      "hero.title": "Terrenos Para Construir Sua Casa Própria",
      "hero.desc1": "No Projeto Berlim, colocamos ao seu alcance uma oportunidade real de investimento e segurança familiar em Hardeman, a apenas 400 metros da Rodovia Principal Hardeman - Piraí.",
      "hero.desc2": "Desenvolvemos terrenos 100% em cota alta não inundável, garantindo a tranquilidade do seu patrimônio com posse física imediata, acesso viário rápido e negociação direta com os proprietários.",

      "features.more_info": "Mais Informações",
      "features.item1_title": "Localização Estratégica",
      "features.item1_desc": "Localização privilegiada em Hardeman (Município de San Pedro), a apenas 400 metros da rodovia asfaltada principal. Conexão rápida pela Avenida Central até San Pedro, Mineros, Montero e Santa Cruz de la Sierra.",
      "features.item2_title": "Terrenos a Prazo e à Vista",
      "features.item2_desc": "Planos de financiamento direto e acessível sem intermediação bancária, além de descontos preferenciais para pagamentos à vista com posse física imediata.",
      "features.item3_title": "Cota Alta Garantida",
      "features.item3_desc": "Topografia privilegiada com solo firme e elevado, 100% livre de inundações para proteger seu patrimônio e construção familiar em qualquer época do ano.",

      "lot.disponible": "DISPONÍVEL",
      "lot.ocupado": "VENDIDO / OCUPADO",
      "lot.precio_m2": "$8 USD / m²",
      "lot.cota_alta": "100% Cota Alta Não Inundável",
      "lot.a_400m": "Hardeman • A 400m da Rodovia",
      "lot.financiamiento": "Financiamento Direto sem Bancos",
      "lot.superficie": "Área do Lote",
      "lot.precio_oficial": "Preço Oficial ($8/m²)",
      "lot.cuota_mensual": "Parcela Mensal (120m)",

      "banner.badge": "OPORTUNIDADE DE INVESTIMENTO • HARDEMAN",
      "banner.titulo": "Seu Próprio Terreno em Hardeman a Apenas $8 USD/m²",
      "banner.subtitulo": "Financiamento direto sem burocracia bancária • 100% Cota Alta Não Inundável a 400m da Rodovia",
      "about.titulo": "Sobre Nós",
      "about.subtitulo": "Lotes Seguros e Alta Valorização em Hardeman",
      "footer.col_office": "ESCRITÓRIO CENTRAL",
      "footer.col_phone": "TELEFONE",
      "footer.col_email": "E-MAIL",
      "footer.oficina": "ESCRITÓRIO CENTRAL",
      "footer.oficina_desc": "A 400m da Rodovia Hardeman - Piraí • Santa Cruz, Bolívia",
      "footer.telefono": "TELEFONE",
      "footer.email": "E-MAIL",
      "footer.rights": "Projetado e desenvolvido por <strong>Ronald Augusto Rodriguez Serrano</strong> | Projeto Berlim © 2026 • Todos os direitos reservados.",
      "footer.derechos": "Projetado e desenvolvido por <strong>Ronald Augusto Rodriguez Serrano</strong> | Projeto Berlim © 2026 • Todos os direitos reservados.",

      "contact.subtitulo": "ATENDIMENTO AO CLIENTE",
      "contact.titulo": "Fale Conosco",
      "contact.badge": "ESCRITÓRIO COMERCIAL / ATENDIMENTO",
      "contact.oficina_titulo": "Projeto Berlim - Santa Cruz",
      "contact.parrafo": "Envie uma mensagem direta ou visite nosso escritório para receber a melhor assessoria imobiliária em terrenos em cota alta.",
      "contact.whatsapp_label": "WHATSAPP OFICIAL",
      "contact.ubicacion_label": "LOCALIZAÇÃO",
      "contact.ubicacion_val": "Calle Paititi #104, Santa Cruz de la Sierra, Bolívia",
      "contact.horario_label": "HORÁRIO DE ATENDIMENTO",
      "contact.horario_val": "Segunda a Sábado: 08:30 - 18:30",
      "contact.btn_whatsapp": "ESCREVA-NOS PELO WHATSAPP",
      "contact.btn_maps": "VER NO GOOGLE MAPS",

      "theme.light": "Modo Claro",
      "theme.dark": "Modo Escuro",
      "lang.select": "Idioma"
    },

    // 🇩🇪 DEUTSCH
    de: {
      "nav.inicio": "Startseite",
      "nav.quienes_somos": "Über Uns",
      "nav.proyectos": "Projekte",
      "nav.planes": "Finanzierungspläne",
      "nav.contacto": "Kontakt",
      "nav.volver": "Zurück zu Projekten",
      "nav.whatsapp": "WhatsApp (+591 70832781)",

      "cta.whatsapp_directo": "Kontakt per WhatsApp",
      "cta.ver_plano": "Interaktiven Plan Ansehen",
      "cta.cotizar_lote": "Dieses Grundstück per WhatsApp Anfragen",
      "cta.simular": "Ratenplan Berechnen",
      "cta.consultar": "Verfügbarkeit Prüfen",

      "hero.title": "Grundstücke für Ihr Eigenheim",
      "hero.desc1": "Bei Projekt Berlin bieten wir Ihnen eine echte Investitionschance und Familiensicherheit in Hardeman, nur 400 Meter von der Hauptstraße Hardeman - Piraí entfernt.",
      "hero.desc2": "Wir erschließen Grundstücke zu 100% auf hochwasserfreiem Hochland und garantieren Ihr Vermögen durch sofortigen Besitz, schnellen Straßenzugang und direkten, transparenten Kontakt mit den Eigentümern.",

      "features.more_info": "Mehr Informationen",
      "features.item1_title": "Strategische Lage",
      "features.item1_desc": "Bevorzugte Lage in Hardeman (Gemeinde San Pedro), nur 400 Meter von der asphaltierten Hauptstraße entfernt. Schnelle Anbindung über die Hauptstraße nach San Pedro, Mineros, Montero und Santa Cruz de la Sierra.",
      "features.item2_title": "Grundstücke auf Raten & Barzahlung",
      "features.item2_desc": "Direkte und unkomplizierte Finanzierungspläne ohne Bankzwischenschaltung sowie Sonderkonditionen für Barkäufe mit sofortiger Übergabe.",
      "features.item3_title": "Garantiert Hochwasserfrei",
      "features.item3_desc": "Hervorragende Topografie mit festem und erhöhtem Boden, 100% hochwasserfrei zum Schutz Ihres Vermögens und Eigenheims zu jeder Jahreszeit.",

      "lot.disponible": "VERFÜGBAR",
      "lot.ocupado": "VERKAUFT / BELEGT",
      "lot.precio_m2": "8 USD / m²",
      "lot.cota_alta": "100% Hochwasserfreies Hochland",
      "lot.a_400m": "Hardeman • 400m zur Hauptstraße",
      "lot.financiamiento": "Direkte Finanzierung ohne Bank",
      "lot.superficie": "Grundstücksfläche",
      "lot.precio_oficial": "Offizieller Preis (8 USD/m²)",
      "lot.cuota_mensual": "Monatsrate (120 Monate)",

      "banner.badge": "INVESTITIONSMÖGLICHKEIT • HARDEMAN",
      "banner.titulo": "Ihr Eigenes Grundstück in Hardeman für nur 8 USD/m²",
      "banner.subtitulo": "Direktfinanzierung ohne Bankbürokratie • 100% Hochwasserfrei, 400m von der Autobahn",
      "about.titulo": "Über Uns",
      "about.subtitulo": "Sichere Grundstücke & Hohe Wertsteigerung in Hardeman",
      "footer.col_office": "HAUPTBÜRO",
      "footer.col_phone": "TELEFON",
      "footer.col_email": "E-MAIL",
      "footer.oficina": "HAUPTBÜRO",
      "footer.oficina_desc": "400m von der Autobahn Hardeman - Piraí • Santa Cruz, Bolivien",
      "footer.telefono": "TELEFON",
      "footer.email": "E-MAIL",
      "footer.rights": "Entworfen und entwickelt von <strong>Ronald Augusto Rodriguez Serrano</strong> | Projekt Berlin © 2026 • Alle Rechte vorbehalten.",
      "footer.derechos": "Entworfen und entwickelt von <strong>Ronald Augusto Rodriguez Serrano</strong> | Projekt Berlin © 2026 • Alle Rechte vorbehalten.",

      "contact.subtitulo": "KUNDENSERVICE",
      "contact.titulo": "Kontaktieren Sie Uns",
      "contact.badge": "VERTRIEBSBÜRO / BERATUNG",
      "contact.oficina_titulo": "Projekt Berlin - Santa Cruz",
      "contact.parrafo": "Schreiben Sie uns direkt oder besuchen Sie unser Verkaufsbüro für erstklassige Immobilienberatung auf hochwasserfreiem Bauland.",
      "contact.whatsapp_label": "OFFIZIELLES WHATSAPP",
      "contact.ubicacion_label": "STANDORT",
      "contact.ubicacion_val": "Calle Paititi #104, Santa Cruz de la Sierra, Bolivien",
      "contact.horario_label": "ÖFFNUNGSZEITEN",
      "contact.horario_val": "Montag bis Samstag: 08:30 - 18:30",
      "contact.btn_whatsapp": "PER WHATSAPP NACHRICHT SENDEN",
      "contact.btn_maps": "AUF GOOGLE MAPS ANZEIGEN",

      "theme.light": "Heller Modus",
      "theme.dark": "Dunkler Modus",
      "lang.select": "Sprache"
    },

    // 🇮🇹 ITALIANO
    it: {
      "nav.inicio": "Home",
      "nav.quienes_somos": "Chi Siamo",
      "nav.proyectos": "Progetti",
      "nav.planes": "Piani",
      "nav.contacto": "Contatti",
      "nav.volver": "Torna ai Progetti",
      "nav.whatsapp": "WhatsApp (+591 70832781)",

      "cta.whatsapp_directo": "Contatta su WhatsApp",
      "cta.ver_plano": "Mappa Interattiva",
      "cta.cotizar_lote": "Richiedi questo Lotto su WhatsApp",
      "cta.simular": "Simula Piano Rateale",
      "cta.consultar": "Verifica Disponibilità",

      "hero.title": "Terreni per Costruire la Tua Casa",
      "hero.desc1": "In Progetto Berlino offriamo una reale opportunità di investimento e sicurezza per la tua famiglia a Hardeman, a soli 400 metri dalla Strada Principale Hardeman - Piraí.",
      "hero.desc2": "Sviluppiamo terreni al 100% in quota alta non allagabile, garantendo la tranquillità del tuo patrimonio con possesso immediato, comodo accesso stradale e rapporto diretto con i proprietari.",

      "features.more_info": "Maggiori Informazioni",
      "features.item1_title": "Posizione Strategica",
      "features.item1_desc": "Posizione privilegiata a Hardeman (Comune di San Pedro), a soli 400 metri dalla strada asfaltata principale. Collegamento rapido tramite l'Avenida Central verso San Pedro, Mineros, Montero e Santa Cruz de la Sierra.",
      "features.item2_title": "Terreni a Rate e in Contanti",
      "features.item2_desc": "Piani di finanziamento diretto senza banche, oltre a sconti vantaggiosi per acquisti in contanti con possesso fisico immediato.",
      "features.item3_title": "Quota Alta Garantita",
      "features.item3_desc": "Topografia eccellente con terreno elevato e solido, 100% privo di allagamenti per proteggere la tua costruzione familiare in ogni stagione dell'anno.",

      "lot.disponible": "DISPONIBILE",
      "lot.ocupado": "VENDUTO / OCCUPATO",
      "lot.precio_m2": "$8 USD / m²",
      "lot.cota_alta": "100% Terreno Alto Non Allagabile",
      "lot.a_400m": "Hardeman • A 400m dall'Autostrada",
      "lot.financiamiento": "Finanziamento Diretto Senza Banche",
      "lot.superficie": "Superficie",
      "lot.precio_oficial": "Prezzo Ufficiale ($8/m²)",
      "lot.cuota_mensual": "Rata Mensile (120m)",

      "banner.badge": "OPPORTUNITÀ DI INVESTIMENTO • HARDEMAN",
      "banner.titulo": "Il Tuo Terreno a Hardeman a Solo $8 USD/m²",
      "banner.subtitulo": "Finanziamento diretto senza burocrazia bancaria • 100% Non Allagabile a 400m dalla Strada",
      "about.titulo": "Chi Siamo",
      "about.subtitulo": "Terreni Sicuri e Alta Rivalutazione a Hardeman",
      "footer.col_office": "SEDE CENTRALE",
      "footer.col_phone": "TELEFONO",
      "footer.col_email": "E-MAIL",
      "footer.oficina": "SEDE CENTRALE",
      "footer.oficina_desc": "A 400m dalla Strada Hardeman - Piraí • Santa Cruz, Bolivia",
      "footer.telefono": "TELEFONO",
      "footer.email": "E-MAIL",
      "footer.rights": "Progettato e sviluppato da <strong>Ronald Augusto Rodriguez Serrano</strong> | Progetto Berlino © 2026 • Tutti i diritti riservati.",
      "footer.derechos": "Progettato e sviluppato da <strong>Ronald Augusto Rodriguez Serrano</strong> | Progetto Berlino © 2026 • Tutti i diritti riservati.",

      "contact.subtitulo": "SERVIZIO CLIENTI",
      "contact.titulo": "Contattaci",
      "contact.badge": "UFFICIO COMMERCIALE / ASSISTENZA",
      "contact.oficina_titulo": "Progetto Berlino - Santa Cruz",
      "contact.parrafo": "Scrivici direttamente o visita il nostro ufficio per ricevere la migliore consulenza immobiliare su terreni in quota alta.",
      "contact.whatsapp_label": "WHATSAPP UFFICIALE",
      "contact.ubicacion_label": "POSIZIONE",
      "contact.ubicacion_val": "Calle Paititi #104, Santa Cruz de la Sierra, Bolivia",
      "contact.horario_label": "ORARIO DI APERTURA",
      "contact.horario_val": "Lunedì a Sabato: 08:30 - 18:30",
      "contact.btn_whatsapp": "SCRIVICI SU WHATSAPP",
      "contact.btn_maps": "VEDI SU GOOGLE MAPS",

      "theme.light": "Modalità Chiara",
      "theme.dark": "Modalità Scura",
      "lang.select": "Lingua"
    },

    // 🇨🇳 ZH (CHINO SIMPLIFICADO)
    zh: {
      "nav.inicio": "首页",
      "nav.quienes_somos": "关于我们",
      "nav.proyectos": "项目",
      "nav.planes": "分期方案",
      "nav.contacto": "联系我们",
      "nav.volver": "返回项目",
      "nav.whatsapp": "WhatsApp (+591 70832781)",

      "cta.whatsapp_directo": "通过 WhatsApp 联系",
      "cta.ver_plano": "查看互动平面图",
      "cta.cotizar_lote": "在 WhatsApp 咨询此地块",
      "cta.simular": "计算分期付款",
      "cta.consultar": "查询可用性",

      "hero.title": "建造自住房的专属地块",
      "hero.desc1": "在柏林项目（Proyecto Berlín），我们为您在哈德曼（Hardeman）提供真实的置业投资与家庭资产保障机会，距哈德曼-皮拉伊主公路仅 400 米。",
      "hero.desc2": "我们开发 100% 高地势防汛土地，支持即时实体交付、通达便捷的道路交通，以及与土地所有权人的直接透明对接，保障您的资产安全。",

      "features.more_info": "查看详情",
      "features.item1_title": "黄金地理位置",
      "features.item1_desc": "地处哈德曼（圣佩德罗市）优越区位，距主柏油公路仅 400 米。通过中央大道可快速直达圣佩德罗、米内罗斯、蒙特罗及圣克鲁斯市中心。",
      "features.item2_title": "支持分期与全款购买",
      "features.item2_desc": "无需银行手续的直接便捷分期方案，全款购买更享专属特惠折扣并可即时交付使用。",
      "features.item3_title": "高地势防汛保障",
      "features.item3_desc": "地势优越、土质坚固，全年 100% 免受水淹风险，全天候保护您的置业建设与家庭资产。",

      "lot.disponible": "可购买",
      "lot.ocupado": "已售出 / 已占用",
      "lot.precio_m2": "8 美元 / 平方米",
      "lot.cota_alta": "100% 高地势永不积水",
      "lot.a_400m": "哈德曼 • 距公路 400 米",
      "lot.financiamiento": "直属免银行分期贷款",
      "lot.superficie": "地块面积",
      "lot.precio_oficial": "官方价格 (8 美元/m²)",
      "lot.cuota_mensual": "每月分期 (120 期)",

      "banner.badge": "投资机会 • 哈德曼 (HARDEMAN)",
      "banner.titulo": "哈德曼优质土地，仅需 8 美元/平方米",
      "banner.subtitulo": "免银行手续直接分期 • 100% 安全高地，距公路仅 400 米",
      "about.titulo": "关于我们",
      "about.subtitulo": "哈德曼安全土地与高增值潜力",
      "footer.col_office": "总部办公室",
      "footer.col_phone": "电话",
      "footer.col_email": "电子邮件",
      "footer.oficina": "总部办公室",
      "footer.oficina_desc": "距 Hardeman - Piraí 公路 400 米 • 玻利维亚圣克鲁斯",
      "footer.telefono": "电话",
      "footer.email": "电子邮件",
      "footer.rights": "由 <strong>Ronald Augusto Rodriguez Serrano</strong> 设计与开发 | 柏林项目 (Proyecto Berlín) © 2026 • 版权所有。",
      "footer.derechos": "由 <strong>Ronald Augusto Rodriguez Serrano</strong> 设计与开发 | 柏林项目 (Proyecto Berlín) © 2026 • 版权所有。",

      "contact.subtitulo": "客户服务",
      "contact.titulo": "联系我们",
      "contact.badge": "商务办公室 / 咨询中心",
      "contact.oficina_titulo": "柏林项目 (Proyecto Berlín) - 圣克鲁斯",
      "contact.parrafo": "欢迎直接联系我们或前往接待处，获取关于高地势安全土地的最佳置业咨询服务。",
      "contact.whatsapp_label": "官方 WHATSAPP",
      "contact.ubicacion_label": "地址",
      "contact.ubicacion_val": "Calle Paititi #104, Santa Cruz de la Sierra, Bolivia",
      "contact.horario_label": "营业时间",
      "contact.horario_val": "周一至周六：08:30 - 18:30",
      "contact.btn_whatsapp": "通过 WHATSAPP 联系我们",
      "contact.btn_maps": "在谷歌地图查看",

      "theme.light": "浅色模式",
      "theme.dark": "深色模式",
      "lang.select": "语言"
    },

    // 🇯🇵 JA (JAPONÉS)
    ja: {
      "nav.inicio": "ホーム",
      "nav.quienes_somos": "会社概要",
      "nav.proyectos": "プロジェクト",
      "nav.planes": "購入プラン",
      "nav.contacto": "お問い合わせ",
      "nav.volver": "プロジェクト一覧に戻る",
      "nav.whatsapp": "WhatsApp (+591 70832781)",

      "cta.whatsapp_directo": "WhatsAppでお問い合わせ",
      "cta.ver_plano": "インタラクティブ図面を見る",
      "cta.cotizar_lote": "この区画の見積もりを依頼",
      "cta.simular": "分割払いシミュレーション",
      "cta.consultar": "空き状況を確認",

      "hero.title": "マイホーム建築のための優良区画",
      "hero.desc1": "プロジェクト・ベルリンでは、ハルデマン - ピライ幹線道路からわずか400mの好立地で、確かな不動産投資とご家族の安心をご提供いたします。",
      "hero.desc2": "100%水害のない高台の土地を造成・分譲。即時引き渡し、整備されたアクセス道路、土地所有者との直接透明な取引で、大切な資産をお守りします。",

      "features.more_info": "詳細を見る",
      "features.item1_title": "戦略的な立地条件",
      "features.item1_desc": "ハルデマン（サン・ペドロ市）の好立地、主要舗装道路からわずか400m。中央大通りを経由してサン・ペドロ、ミネロス、モンテロ、サンタ・クルス市街へスムーズに接続。",
      "features.item2_title": "分割払い・一括払い対応",
      "features.item2_desc": "銀行審査不要の直接自社ローンをご用意。即時引き渡し可能な一括購入向け特別割引もございます。",
      "features.item3_title": "浸水のない高台保証",
      "features.item3_desc": "強固で標高の高い理想的な地形。雨季でも100%浸水がなく、一年を通じて大切な住宅と資産を守ります。",

      "lot.disponible": "購入可能",
      "lot.ocupado": "成約済み / 使用中",
      "lot.precio_m2": "$8 USD / m²",
      "lot.cota_alta": "100% 浸水なしの高台立地",
      "lot.a_400m": "ハルデマン • 幹線道路から400m",
      "lot.financiamiento": "銀行不要の直接自社ローン",
      "lot.superficie": "敷地面積",
      "lot.precio_oficial": "公式価格 ($8/m²)",
      "lot.cuota_mensual": "月々の支払額 (120回)",

      "banner.badge": "投資チャンス • ハルデマン (HARDEMAN)",
      "banner.titulo": "ハルデマンの土地がわずか $8 USD/m² であなたのものに",
      "banner.subtitulo": "銀行審査なしの直接分割払い • 幹線道路から400m、100%高台の安心地勢",
      "about.titulo": "私たちについて",
      "about.subtitulo": "ハルデマンの安全な土地と高い資産価値",
      "footer.col_office": "本社オフィス",
      "footer.col_phone": "電話番号",
      "footer.col_email": "メールアドレス",
      "footer.oficina": "本社オフィス",
      "footer.oficina_desc": "Hardeman - Piraí 幹線道路から400m • ボリビア、サンタクルス",
      "footer.telefono": "電話番号",
      "footer.email": "メールアドレス",
      "footer.rights": "<strong>Ronald Augusto Rodriguez Serrano</strong> によるデザイン・開発 | プロジェクト・ベルリン © 2026 • All rights reserved.",
      "footer.derechos": "<strong>Ronald Augusto Rodriguez Serrano</strong> によるデザイン・開発 | プロジェクト・ベルリン © 2026 • All rights reserved.",

      "contact.subtitulo": "カスタマーサポート",
      "contact.titulo": "お問い合わせ",
      "contact.badge": "営業所 / ご相談窓口",
      "contact.oficina_titulo": "プロジェクト・ベルリン - サンタクルス",
      "contact.parrafo": "高台の安全な土地に関する最高のアドバイスをご案内いたします。お気軽にメッセージまたはオフィスへお越しください。",
      "contact.whatsapp_label": "公式 WHATSAPP",
      "contact.ubicacion_label": "所在地",
      "contact.ubicacion_val": "Calle Paititi #104, Santa Cruz de la Sierra, Bolivia",
      "contact.horario_label": "営業時間",
      "contact.horario_val": "月曜日〜土曜日: 08:30 - 18:30",
      "contact.btn_whatsapp": "WHATSAPPで連絡する",
      "contact.btn_maps": "GOOGLE マップで見る",

      "theme.light": "ライトモード",
      "theme.dark": "ダークモード",
      "lang.select": "言語"
    },

    // 🇷🇺 RU (RUSO)
    ru: {
      "nav.inicio": "Главная",
      "nav.quienes_somos": "О нас",
      "nav.proyectos": "Проекты",
      "nav.planes": "Тарифы",
      "nav.contacto": "Контакты",
      "nav.volver": "Назад к проектам",
      "nav.whatsapp": "WhatsApp (+591 70832781)",

      "cta.whatsapp_directo": "Связаться в WhatsApp",
      "cta.ver_plano": "Интерактивный план",
      "cta.cotizar_lote": "Запросить цену участка в WhatsApp",
      "cta.simular": "Калькулятор рассрочки",
      "cta.consultar": "Проверить наличие",

      "hero.title": "Участки для строительства вашего дома",
      "hero.desc1": "В Проекте Берлин мы открываем перед вами реальную возможность инвестиций и безопасности для всей семьи в Хардемане, всего в 400 метрах от главной трассы Хардеман - Пираи.",
      "hero.desc2": "Мы обустраиваем участки на 100% возвышенной незатопляемой местности, гарантируя сохранность вашего имущества, немедленную передачу в собственность, удобный подъезд и прямое оформление без посредников.",

      "features.more_info": "Подробнее",
      "features.item1_title": "Стратегическое расположение",
      "features.item1_desc": "Выгодное расположение в Хардемане (муниципалитет Сан-Педро), всего в 400 метрах от асфальтированной трассы. Быстрое сообщение по центральному проспекту до Сан-Педро, Минероса, Монтеро и Санта-Крус.",
      "features.item2_title": "В рассрочку и за наличные",
      "features.item2_desc": "Доступные программы прямой рассрочки без участия банков, а также специальные скидки при единоразовой оплате с мгновенным получением участка.",
      "features.item3_title": "Гарантия возвышенности",
      "features.item3_desc": "Отличный рельеф с твердой и высокой почвой, на 100% защищенной от паводков в любое время года.",

      "lot.disponible": "ДОСТУПЕН",
      "lot.ocupado": "ПРОДАН / ЗАНЯТ",
      "lot.precio_m2": "$8 USD / м²",
      "lot.cota_alta": "100% Возвышенность без затоплений",
      "lot.a_400m": "Хардеман • 400м от трассы",
      "lot.financiamiento": "Прямая рассрочка без банков",
      "lot.superficie": "Площадь участка",
      "lot.precio_oficial": "Официальная цена ($8/м²)",
      "lot.cuota_mensual": "Ежемесячный платеж (120 мес.)",

      "banner.badge": "ИНВЕСТИЦИОННАЯ ВОЗМОЖНОСТЬ • ХАРДЕМАН",
      "banner.titulo": "Собственный участок в Хардемане всего за $8 USD/м²",
      "banner.subtitulo": "Прямая рассрочка без банковской волокиты • 100% Не затапливается, 400м от трассы",
      "about.titulo": "О нас",
      "about.subtitulo": "Надежная земля и высокий рост стоимости в Хардемане",
      "footer.col_office": "ГЛАВНЫЙ ОФИС",
      "footer.col_phone": "ТЕЛЕФОН",
      "footer.col_email": "ЭЛ. ПОЧТА",
      "footer.oficina": "ГЛАВНЫЙ ОФИС",
      "footer.oficina_desc": "400м от трассы Хардеман - Пираи • Санта-Крус, Боливия",
      "footer.telefono": "ТЕЛЕФОН",
      "footer.email": "ЭЛ. ПОЧТА",
      "footer.rights": "Дизайн и разработка: <strong>Ronald Augusto Rodriguez Serrano</strong> | Проект Берлин © 2026 • Все права защищены.",
      "footer.derechos": "Дизайн и разработка: <strong>Ronald Augusto Rodriguez Serrano</strong> | Проект Берлин © 2026 • Все права защищены.",

      "contact.subtitulo": "СЛУЖБА ПОДДЕРЖКИ",
      "contact.titulo": "Свяжитесь с нами",
      "contact.badge": "ОТДЕЛ ПРОДАЖ / КОНСУЛЬТАЦИИ",
      "contact.oficina_titulo": "Проект Берлин - Санта-Крус",
      "contact.parrafo": "Напишите нам напрямую или посетите наш офис продаж, чтобы получить профессиональную консультацию по покупке земельных участков.",
      "contact.whatsapp_label": "ОФИЦИАЛЬНЫЙ WHATSAPP",
      "contact.ubicacion_label": "АДРЕС",
      "contact.ubicacion_val": "Calle Paititi #104, Santa Cruz de la Sierra, Bolivia",
      "contact.horario_label": "ЧАСЫ РАБОТЫ",
      "contact.horario_val": "Понедельник - Суббота: 08:30 - 18:30",
      "contact.btn_whatsapp": "НАПИСАТЬ В WHATSAPP",
      "contact.btn_maps": "СМОТРЕТЬ НА GOOGLE MAPS",

      "theme.light": "Светлая тема",
      "theme.dark": "Темная тема",
      "lang.select": "Язык"
    },

    // 🇧🇴 QUECHUA (Qhichwa simi)
    qu: {
      "nav.inicio": "Qallariy",
      "nav.quienes_somos": "Pikunam kayku",
      "nav.proyectos": "Ruwakuykuna",
      "nav.planes": "Wakiypakuna",
      "nav.contacto": "Tinkiy",
      "nav.volver": "Kutimuy Ruwakuykunaman",
      "nav.whatsapp": "WhatsApp (+591 70832781)",

      "cta.whatsapp_directo": "WhatsAppwan rimay",
      "cta.ver_plano": "Plano Rikuy",
      "cta.cotizar_lote": "Chani Tapuy WhatsApppi",
      "cta.simular": "Chani Yupanapaq",
      "cta.consultar": "Lote Kashanchus Tapuy",

      "hero.title": "Wasikita Ruwanapaq Allpakuna",
      "hero.desc1": "Proyecto Berlín nisqapi qullqi churayta qhawachiyku aylluykipaq Hardemanpi, 400 mitrullaman Hatun Ñan Hardeman - Piraímanta.",
      "hero.desc2": "100% pata allpakunapi ruwayku mana yaku yaykunanpaq, kapuyniykita waqaychaspa, kikin pachapi hap'inapaq, allin ñankunayuq chaymanta dueñokunawan chiqan parlaspa.",

      "features.more_info": "Astawan Yachay",
      "features.item1_title": "Kusa Kiti",
      "features.item1_desc": "Sumaj kiti Hardemanpi (San Pedro Munisipyupi), 400 mitrullapi hatun asfawtu ñanmanta. Usqhay tinkiy Hatun Avenida chawpinta San Pedroman, Minerosman, Monteroman chaymanta Santa Cruz de la Sierraman.",
      "features.item2_title": "Mit'awan Chanta Jinallapi",
      "features.item2_desc": "Kikinmanta manuy mana bankukunawan, chantapis allin pisichasqa chanikuna jinallapi rantispa kikin pachapi hap'inapaq.",
      "features.item3_title": "Mana Yaku Yaykuna Allpa",
      "features.item3_desc": "Kusa pata allpa sinchi sayasqa, 100% mana yaku yaykunanpaq tukuy watantinpi wasiykita kapuyniykitawan waqaychanapaq.",

      "lot.disponible": "KASHANMI",
      "lot.ocupado": "RANQHAYASQA",
      "lot.precio_m2": "$8 USD / m²",
      "lot.cota_alta": "100% Pata Allpa Mana Yakuyuq",
      "lot.a_400m": "Hardeman • 400m Ñanmanta",
      "lot.financiamiento": "Kikinmanta Qullqi Mañakuy",
      "lot.superficie": "Allpap Kurpun",
      "lot.precio_oficial": "Tukri Chani ($8/m²)",
      "lot.cuota_mensual": "Killapi Qullqi (120 killa)",

      "banner.badge": "QULLQI CHURAY ALLPA • HARDEMAN",
      "banner.titulo": "Qam kikiypa Allpayki Hardemanpi $8 USD/m²-llaman",
      "banner.subtitulo": "Kikinmanta manuy mana bankuwan • 100% Pata Allpa mana yakuyuq 400m Hatun Ñanmanta",
      "about.titulo": "Ñuqaykumanta",
      "about.subtitulo": "Waqaychasqa Allpakuna Hatun Chaniyuq Hardemanpi",
      "footer.col_office": "HATUN WASI",
      "footer.col_phone": "QAYYANA",
      "footer.col_email": "CHASKI",
      "footer.oficina": "HATUN WASI",
      "footer.oficina_desc": "400m Hardeman - Piraí Hatun Ñanmanta • Santa Cruz, Bolivia",
      "footer.telefono": "QAYYANA",
      "footer.email": "CHASKI",
      "footer.rights": "<strong>Ronald Augusto Rodriguez Serrano</strong> ruwasqa | Proyecto Berlín © 2026 • Tukuy hayñikuna waqaychasqa.",
      "footer.derechos": "<strong>Ronald Augusto Rodriguez Serrano</strong> ruwasqa | Proyecto Berlín © 2026 • Tukuy hayñikuna waqaychasqa.",

      "contact.subtitulo": "RUNA YANAPAY",
      "contact.titulo": "Tinkinakusun",
      "contact.badge": "QHATUY WASI / YANAPAKUY",
      "contact.oficina_titulo": "Proyecto Berlín - Santa Cruz",
      "contact.parrafo": "Qillqamuwayku chiqallanpi chayri jamuy wasiykuman astawan yachanaykipaq pata allpakunamanta.",
      "contact.whatsapp_label": "TUKRI WHATSAPP",
      "contact.ubicacion_label": "KITI",
      "contact.ubicacion_val": "Calle Paititi #104, Santa Cruz de la Sierra, Bolivia",
      "contact.horario_label": "RUWAY PACHA",
      "contact.horario_val": "Lunesmanta Sabadokama: 08:30 - 18:30",
      "contact.btn_whatsapp": "WHATSAPPPI QILLQAMUWAYKU",
      "contact.btn_maps": "GOOGLE MAPSPI RIKUY",

      "theme.light": "K'anchay Tema",
      "theme.dark": "Laqha Tema",
      "lang.select": "Simi"
    },

    // 🇧🇴 GUARANÍ (Avañe'ẽ)
    gn: {
      "nav.inicio": "Ñepyrũ",
      "nav.quienes_somos": "Máva Pa Ore",
      "nav.proyectos": "Mba'apo",
      "nav.planes": "Mba'eporã",
      "nav.contacto": "Jehero",
      "nav.volver": "Jey Mba'apope",
      "nav.whatsapp": "WhatsApp (+591 70832781)",

      "cta.whatsapp_directo": "Ñomongeta WhatsApp rupi",
      "cta.ver_plano": "Hecha Plano",
      "cta.cotizar_lote": "Porandu Repy WhatsApppe",
      "cta.simular": "Papapy Mba'eporã",
      "cta.consultar": "Porandu Oĩpa",

      "hero.title": "Yvy Nde Rogarã",
      "hero.desc1": "Proyecto Berlínpe remomba'apota viru tekoporãme ne ñemoñarépe g̃uarã Hardemanpe, 400 metro añónte Tape Guasu Hardeman - Piraígui.",
      "hero.desc2": "Yvy yvate añetete ndoikéiva y, rohechaukáva nde yvy reiporuhag̃uáicha vorevove, tape porã reheve ha ñemongeta teete ijapoharekuéra ndive.",

      "features.more_info": "Marandu Porãve",
      "features.item1_title": "Tenda Porã",
      "features.item1_desc": "Tenda iporãva Hardemanpe (San Pedro Munisípiope), 400 metro añónte tape guasu asfawtagui. Ñesẽ pya'e Avenida Chawpi rupi San Pedro, Mineros, Montero ha Santa Cruz de la Sierra gotyo.",
      "features.item2_title": "Plazo ha Contado rupi",
      "features.item2_desc": "Financiamiento directo banco'ỹre, ha repy porãve contado reheve reiko pya'e hag̃ua nde yvype.",
      "features.item3_title": "Yvy Yvate Añetete",
      "features.item3_desc": "Yvy yvate imbaretéva, 100% y ndoikéiva opaite árape oñangareko hag̃ua nde rogakuéra rehe.",

      "lot.disponible": "OI ME",
      "lot.ocupado": "ÑEMU PYRE",
      "lot.precio_m2": "$8 USD / m²",
      "lot.cota_alta": "100% Yvy Yvate Y ndoikéiva",
      "lot.a_400m": "Hardeman • 400m Tape Guasúgui",
      "lot.financiamiento": "Viru Ñeme'ẽ Banco'ỹre",
      "lot.superficie": "Yvy Tuichakue",
      "lot.precio_oficial": "Repy Teete ($8/m²)",
      "lot.cuota_mensual": "Ñehepyme'ẽ Jasýpe (120 jasy)",

      "banner.badge": "MBA'E PORÃ VIRU REHEGUA • HARDEMAN",
      "banner.titulo": "Nde Yvy Teete Hardemanpe $8 USD/m² añónte",
      "banner.subtitulo": "Financiamiento directo banco'ỹre • 100% Yvy Yvate 400m Tape Guasúgui",
      "about.titulo": "Oremba'e",
      "about.subtitulo": "Yvy Tekoporã ha Hechapyrã Hardemanpe",
      "footer.col_office": "OGAPUSU GUASU",
      "footer.col_phone": "PUMBYRY",
      "footer.col_email": "ÑANDUTIVEVE",
      "footer.oficina": "OGAPUSU GUASU",
      "footer.oficina_desc": "400m Tape Hardeman - Piraígui • Santa Cruz, Bolivia",
      "footer.telefono": "PUMBYRY",
      "footer.email": "ÑANDUTIVEVE",
      "footer.rights": "<strong>Ronald Augusto Rodriguez Serrano</strong> ojapo | Proyecto Berlín © 2026 • Mayma teko oñeñangareko.",
      "footer.derechos": "<strong>Ronald Augusto Rodriguez Serrano</strong> ojapo | Proyecto Berlín © 2026 • Mayma teko oñeñangareko.",

      "contact.subtitulo": "TAPICHA ÑEPYTYVÕ",
      "contact.titulo": "Eñemboja Orendive",
      "contact.badge": "ÑEMU RENDA / PYTYVÕ",
      "contact.oficina_titulo": "Proyecto Berlín - Santa Cruz",
      "contact.parrafo": "Ehai oréve WhatsApp rupi térã eju ore rendápe reikuaa porãve hag̃ua yvy yvate rehegua.",
      "contact.whatsapp_label": "WHATSAPP TEETE",
      "contact.ubicacion_label": "TENDA",
      "contact.ubicacion_val": "Calle Paititi #104, Santa Cruz de la Sierra, Bolivia",
      "contact.horario_label": "ARAVO MBA'APOHAG̃UA",
      "contact.horario_val": "Arakõi - Arapoteĩ: 08:30 - 18:30",
      "contact.btn_whatsapp": "EHAI OREVE WHATSAPP RUPI",
      "contact.btn_maps": "HECHA GOOGLE MAPSPE",

      "theme.light": "Tesape Tema",
      "theme.dark": "Pytũ Tema",
      "lang.select": "Ñe'ẽ"
    },

    // 🇧🇴 AYMARA (Aymar aru)
    ay: {
      "nav.inicio": "Qallta",
      "nav.quienes_somos": "Khitinakasitana",
      "nav.proyectos": "Lurawinaka",
      "nav.planes": "Wakichawinaka",
      "nav.contacto": "Jikisisiña",
      "nav.volver": "Kutt'aña Lurawinakar",
      "nav.whatsapp": "WhatsApp (+591 70832781)",

      "cta.whatsapp_directo": "WhatsApp tuqi parlasiña",
      "cta.ver_plano": "Plano Uñjaña",
      "cta.cotizar_lote": "Chanita Jiskt'aña WhatsApp-na",
      "cta.simular": "Chani Jakhuña",
      "cta.consultar": "Lote Utjiti Jiskt'aña",

      "hero.title": "Uraqi Utama Lurasiñataki",
      "hero.desc1": "Proyecto Berlín markana wali aski qullqi churañaruw jawst'apxsma Hardeman markana, 400 mitru jach'a thakhi Hardeman - Piraíta.",
      "hero.desc2": "100% pata uraqinakawa jan uma mantaniri, utjirinakama sum imañataki, jank'aki katuqaña, sum thakhinaka ukhamaraki uraqin duñunakapampi chiqpacha parlt'asa.",

      "features.more_info": "Juk'amp Yatiña",
      "features.item1_title": "Wali Askhi Kawkha",
      "features.item1_desc": "Wali aski kiti Hardeman markana (San Pedro Munisipyuna), 400 mitru jach'a asfalto thakhita. Jank'aki sarantaña Avenida Central tuqi San Pedro, Mineros, Montero ukhamaraki Santa Cruz de la Sierra markaru.",
      "features.item2_title": "Plazuta Ukhamaraki Contaduta",
      "features.item2_desc": "Chiqpacha qullqi mayt'awinaka jan bancuwan, ukhamaraki contaduta alasiñatakixa chaninakapa jisk'aptatawa jank'aki utjasiñataki.",
      "features.item3_title": "Uraqi Apatata Qillqata",
      "features.item3_desc": "Pata uraqi qala thuru, 100% jan uma mantani taqpacha marana utama suma sayt'ayañataki.",

      "lot.disponible": "UTJXTUWA",
      "lot.ocupado": "ALJATATAWA",
      "lot.precio_m2": "$8 USD / m²",
      "lot.cota_alta": "100% Pata Uraqi Jan Uma Mantani",
      "lot.a_400m": "Hardeman • 400m Jach'a Thakhita",
      "lot.financiamiento": "Kikipata Qullqi Mayt'asiña",
      "lot.superficie": "Uraqin Jach'akanka",
      "lot.precio_oficial": "Kikipa Chani ($8/m²)",
      "lot.cuota_mensual": "Phaxsi Qullqi (120 phaxsi)",

      "banner.badge": "WALI ASKI QULLQI CHURAÑA • HARDEMAN",
      "banner.titulo": "Juma Kikipa Uraqima Hardeman markana $8 USD/m²-kama",
      "banner.subtitulo": "Directo qullqi mayt'awi jan bancuwan • 100% Pata Uraqi jan uma mantani 400m Jach'a Thakhita",
      "about.titulo": "Nanaktataki",
      "about.subtitulo": "Imata Uraqinaka Jach'a Chanini Hardemanpi",
      "footer.col_office": "JACH'A UTA",
      "footer.col_phone": "JAWQ'IÑA",
      "footer.col_email": "CHASKI",
      "footer.oficina": "JACH'A UTA",
      "footer.oficina_desc": "400m Hardeman - Piraí Jach'a Thakhita • Santa Cruz, Bolivia",
      "footer.telefono": "JAWQ'IÑA",
      "footer.email": "CHASKI",
      "footer.rights": "<strong>Ronald Augusto Rodriguez Serrano</strong> lurt'ata | Proyecto Berlín © 2026 • Taqi derechunaka imatawa.",
      "footer.derechos": "<strong>Ronald Augusto Rodriguez Serrano</strong> lurt'ata | Proyecto Berlín © 2026 • Taqi derechunaka imatawa.",

      "contact.subtitulo": "JISKT'IRINAKATAKI",
      "contact.titulo": "Jikisiñani",
      "contact.badge": "ALJAÑA UTA / YANAPAWI",
      "contact.oficina_titulo": "Proyecto Berlín - Santa Cruz",
      "contact.parrafo": "Qillqt'apxita chiqpacha WhatsApp-ru jan ukax jutapxam utajaru pata uraqinakatsa sum yatxatañataki.",
      "contact.whatsapp_label": "TUKRI WHATSAPP",
      "contact.ubicacion_label": "KAWKHANKISA",
      "contact.ubicacion_val": "Calle Paititi #104, Santa Cruz de la Sierra, Bolivia",
      "contact.horario_label": "LURAWI PACHA",
      "contact.horario_val": "Lunesita Sabadokama: 08:30 - 18:30",
      "contact.btn_whatsapp": "WHATSAPP-RU QILLQAÑA",
      "contact.btn_maps": "GOOGLE MAPS-NA UÑJAÑA",

      "theme.light": "Qhana Tema",
      "theme.dark": "Ch'amaka Tema",
      "lang.select": "Aru"
    }
  };

  // 2. FUNCIÓN DE IDIOMAS (i18n)
  function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) lang = 'es';
    try {
      localStorage.setItem('user_lang', lang);
      localStorage.setItem('lang', lang);
    } catch (e) {}

    const dict = TRANSLATIONS[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict && dict[key]) {
        if (el.tagName === 'INPUT' && el.getAttribute('placeholder')) {
          el.setAttribute('placeholder', dict[key]);
        } else if (dict[key].includes('<') || el.children.length > 0) {
          el.innerHTML = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    document.querySelectorAll('.lang-select-input, #map-lang-select, .lang-select-compact').forEach(sel => {
      sel.value = lang;
    });

    document.documentElement.lang = lang;
  }

  // 3. FUNCIÓN DE TEMA (DARK / LIGHT)
  function setTheme(isDark) {
    if (isDark) {
      document.documentElement.classList.add('dark-theme');
      if (document.body) document.body.classList.add('dark-theme');
      try { localStorage.setItem('theme', 'dark'); } catch (e) {}
    } else {
      document.documentElement.classList.remove('dark-theme');
      if (document.body) document.body.classList.remove('dark-theme');
      try { localStorage.setItem('theme', 'light'); } catch (e) {}
    }

    // Actualizar icono en todos los botones de tema
    const icon = isDark ? '☀️' : '🌙';
    const title = isDark ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro';
    document.querySelectorAll('#theme-toggle, .theme-toggle-btn').forEach(btn => {
      btn.innerHTML = icon;
      btn.setAttribute('title', title);
      btn.setAttribute('aria-label', title);
    });
  }

  function toggleTheme() {
    const isDark = document.documentElement.classList.contains('dark-theme') || 
                   (document.body && document.body.classList.contains('dark-theme'));
    setTheme(!isDark);
  }

  // 4. INICIALIZACIÓN INMEDIATA (Previene FOUC)
  const savedTheme = (function() {
    try { return localStorage.getItem('theme'); } catch(e) { return null; }
  })();
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark-theme');
  }

  // 5. INICIALIZACIÓN COMPLETA AL CARGAR EL DOM
  function init() {
    // Aplicar Tema
    const themeToApply = savedTheme || 'light';
    setTheme(themeToApply === 'dark');

    // Aplicar Idioma
    const savedLang = (function() {
      try { 
        return localStorage.getItem('user_lang') || localStorage.getItem('lang') || 'es'; 
      } catch(e) { 
        return 'es'; 
      }
    })();
    setLanguage(savedLang);

    // Listener para el Botón de Tema (ID y Clase)
    document.querySelectorAll('#theme-toggle, .theme-toggle-btn').forEach(btn => {
      btn.onclick = function(e) {
        e.preventDefault();
        toggleTheme();
      };
    });

    // Listener para Selects de Idioma
    document.querySelectorAll('.lang-select-input, #map-lang-select, .lang-select-compact').forEach(sel => {
      sel.onchange = function(e) {
        setLanguage(e.target.value);
      };
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Exponer API en window para compatibilidad global
  window.TRANSLATIONS = TRANSLATIONS;
  window.setLanguage = setLanguage;
  window.setTheme = setTheme;
  window.toggleTheme = toggleTheme;

})();
