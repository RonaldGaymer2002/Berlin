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

      // Encabezados Home y Características Clave
      "home.casa_propia": "Terrenos Para Sacar Tu Casa Propia",
      "home.ubicacion_estrategica": "Ubicación Estratégica",
      "home.plazo_contado": "Terrenos A Plazo y Al Contado",
      "home.cota_alta": "Cota Alta Garantizada",

      // Etiquetas y Lotes
      "lot.disponible": "DISPONIBLE",
      "lot.ocupado": "VENDIDO / OCUPADO",
      "lot.precio_m2": "$7 USD / m²",
      "lot.cota_alta": "100% Cota Alta No Inundable",
      "lot.a_400m": "Hardeman • A 400m Carretera",
      "lot.financiamiento": "Financiamiento Directo sin Bancos",
      "lot.superficie": "Superficie",
      "lot.precio_oficial": "Precio Oficial ($7/m²)",
      "lot.cuota_mensual": "Cuota Directa (120m)",

      // Secciones Principales
      "banner.badge": "OPORTUNIDAD DE INVERSIÓN • HARDEMAN",
      "banner.titulo": "Tu Terreno Propio en Hardeman a Sólo $7 USD/m²",
      "banner.subtitulo": "Financiamiento directo sin trámites bancarios • 100% Cota Alta No Inundable a 400m de la Carretera",
      "about.titulo": "Sobre Nosotros",
      "about.subtitulo": "Lotes Seguros y Alta Plusvalía en Hardeman",
      "footer.oficina": "OFICINA CENTRAL",
      "footer.oficina_desc": "A 400m de la Carretera Hardeman - Piraí • Santa Cruz, Bolivia",
      "footer.telefono": "TELÉFONO",
      "footer.email": "EMAIL",
      "footer.derechos": "Diseñado y desarrollado por Ronald Augusto Rodriguez Serrano | Proyecto Berlín © 2026 • Todos los derechos reservados.",
      
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

      "home.casa_propia": "Plots to Build Your Own Home",
      "home.ubicacion_estrategica": "Strategic Location",
      "home.plazo_contado": "Plots on Credit & Cash Payment",
      "home.cota_alta": "Guaranteed High Ground",

      "lot.disponible": "AVAILABLE",
      "lot.ocupado": "SOLD / OCCUPIED",
      "lot.precio_m2": "$7 USD / sqm",
      "lot.cota_alta": "100% High Ground Flood-Free",
      "lot.a_400m": "Hardeman • 400m from Highway",
      "lot.financiamiento": "Direct In-House Financing",
      "lot.superficie": "Lot Area",
      "lot.precio_oficial": "Official Price ($7/sqm)",
      "lot.cuota_mensual": "Monthly Installment (120m)",

      "banner.badge": "INVESTMENT OPPORTUNITY • HARDEMAN",
      "banner.titulo": "Your Own Land in Hardeman at Only $7 USD/sqm",
      "banner.subtitulo": "Direct in-house financing with no bank paperwork • 100% High Ground Flood-Free 400m from Highway",
      "about.titulo": "About Us",
      "about.subtitulo": "Secure Land & High Capital Gain in Hardeman",
      "footer.oficina": "HEAD OFFICE",
      "footer.oficina_desc": "400m from Hardeman - Piraí Highway • Santa Cruz, Bolivia",
      "footer.telefono": "PHONE",
      "footer.email": "EMAIL",
      "footer.derechos": "Designed and developed by Ronald Augusto Rodriguez Serrano | Proyecto Berlín © 2026 • All rights reserved.",

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

      "home.casa_propia": "Terrenos Para Construir Sua Casa Própria",
      "home.ubicacion_estrategica": "Localização Estratégica",
      "home.plazo_contado": "Terrenos a Prazo e à Vista",
      "home.cota_alta": "Cota Alta Garantida",

      "lot.disponible": "DISPONÍVEL",
      "lot.ocupado": "VENDIDO / OCUPADO",
      "lot.precio_m2": "$7 USD / m²",
      "lot.cota_alta": "100% Cota Alta Não Inundável",
      "lot.a_400m": "Hardeman • A 400m da Rodovia",
      "lot.financiamiento": "Financiamento Direto sem Bancos",
      "lot.superficie": "Área do Lote",
      "lot.precio_oficial": "Preço Oficial ($7/m²)",
      "lot.cuota_mensual": "Parcela Mensal (120m)",

      "banner.badge": "OPORTUNIDADE DE INVESTIMENTO • HARDEMAN",
      "banner.titulo": "Seu Próprio Terreno em Hardeman a Apenas $7 USD/m²",
      "banner.subtitulo": "Financiamento direto sem burocracia bancária • 100% Cota Alta Não Inundável a 400m da Rodovia",
      "about.titulo": "Sobre Nós",
      "about.subtitulo": "Lotes Seguros e Alta Valorização em Hardeman",
      "footer.oficina": "ESCRITÓRIO CENTRAL",
      "footer.oficina_desc": "A 400m da Rodovia Hardeman - Piraí • Santa Cruz, Bolívia",
      "footer.telefono": "TELEFONE",
      "footer.email": "E-MAIL",
      "footer.derechos": "Projetado e desenvolvido por Ronald Augusto Rodriguez Serrano | Projeto Berlim © 2026 • Todos os direitos reservados.",

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

      "home.casa_propia": "Grundstücke für Ihr Eigenheim",
      "home.ubicacion_estrategica": "Strategische Lage",
      "home.plazo_contado": "Grundstücke auf Raten & Barzahlung",
      "home.cota_alta": "Garantiert Hochwasserfrei",

      "lot.disponible": "VERFÜGBAR",
      "lot.ocupado": "VERKAUFT / BELEGT",
      "lot.precio_m2": "7 USD / m²",
      "lot.cota_alta": "100% Hochwasserfreies Hochland",
      "lot.a_400m": "Hardeman • 400m zur Hauptstraße",
      "lot.financiamiento": "Direkte Finanzierung ohne Bank",
      "lot.superficie": "Grundstücksfläche",
      "lot.precio_oficial": "Offizieller Preis (7 USD/m²)",
      "lot.cuota_mensual": "Monatsrate (120 Monate)",

      "banner.badge": "INVESTITIONSMÖGLICHKEIT • HARDEMAN",
      "banner.titulo": "Ihr Eigenes Grundstück in Hardeman für nur 7 USD/m²",
      "banner.subtitulo": "Direktfinanzierung ohne Bankbürokratie • 100% Hochwasserfrei, 400m von der Autobahn",
      "about.titulo": "Über Uns",
      "about.subtitulo": "Sichere Grundstücke & Hohe Wertsteigerung in Hardeman",
      "footer.oficina": "HAUPTBÜRO",
      "footer.oficina_desc": "400m von der Autobahn Hardeman - Piraí • Santa Cruz, Bolivien",
      "footer.telefono": "TELEFON",
      "footer.email": "E-MAIL",
      "footer.derechos": "Entworfen und entwickelt von Ronald Augusto Rodriguez Serrano | Projekt Berlin © 2026 • Alle Rechte vorbehalten.",

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

      "home.casa_propia": "Terreni per Costruire la Tua Casa",
      "home.ubicacion_estrategica": "Posizione Strategica",
      "home.plazo_contado": "Terreni a Rate e in Contanti",
      "home.cota_alta": "Quota Alta Garantita",

      "lot.disponible": "DISPONIBILE",
      "lot.ocupado": "VENDUTO / OCCUPATO",
      "lot.precio_m2": "$7 USD / m²",
      "lot.cota_alta": "100% Terreno Alto Non Allagabile",
      "lot.a_400m": "Hardeman • A 400m dall'Autostrada",
      "lot.financiamiento": "Finanziamento Diretto Senza Banche",
      "lot.superficie": "Superficie",
      "lot.precio_oficial": "Prezzo Ufficiale ($7/m²)",
      "lot.cuota_mensual": "Rata Mensile (120m)",

      "banner.badge": "OPPORTUNITÀ DI INVESTIMENTO • HARDEMAN",
      "banner.titulo": "Il Tuo Terreno a Hardeman a Solo $7 USD/m²",
      "banner.subtitulo": "Finanziamento diretto senza burocrazia bancaria • 100% Non Allagabile a 400m dalla Strada",
      "about.titulo": "Chi Siamo",
      "about.subtitulo": "Terreni Sicuri e Alta Rivalutazione a Hardeman",
      "footer.oficina": "SEDE CENTRALE",
      "footer.oficina_desc": "A 400m dalla Strada Hardeman - Piraí • Santa Cruz, Bolivia",
      "footer.telefono": "TELEFONO",
      "footer.email": "E-MAIL",
      "footer.derechos": "Progettato e sviluppato da Ronald Augusto Rodriguez Serrano | Progetto Berlino © 2026 • Tutti i diritti riservati.",

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

      "home.casa_propia": "建造自住房的专属地块",
      "home.ubicacion_estrategica": "黄金地理位置",
      "home.plazo_contado": "支持分期与全款购买",
      "home.cota_alta": "高地势防汛保障",

      "lot.disponible": "可购买",
      "lot.ocupado": "已售出 / 已占用",
      "lot.precio_m2": "7 美元 / 平方米",
      "lot.cota_alta": "100% 高地势永不积水",
      "lot.a_400m": "哈德曼 • 距公路 400 米",
      "lot.financiamiento": "直属免银行分期贷款",
      "lot.superficie": "地块面积",
      "lot.precio_oficial": "官方价格 (7 美元/m²)",
      "lot.cuota_mensual": "每月分期 (120 期)",

      "banner.badge": "投资机会 • 哈德曼 (HARDEMAN)",
      "banner.titulo": "哈德曼优质土地，仅需 7 美元/平方米",
      "banner.subtitulo": "免银行手续直接分期 • 100% 安全高地，距公路仅 400 米",
      "about.titulo": "关于我们",
      "about.subtitulo": "哈德曼安全土地与高增值潜力",
      "footer.oficina": "总部办公室",
      "footer.oficina_desc": "距 Hardeman - Piraí 公路 400 米 • 玻利维亚圣克鲁斯",
      "footer.telefono": "电话",
      "footer.email": "电子邮件",
      "footer.derechos": "由 Ronald Augusto Rodriguez Serrano 设计与开发 | 柏林项目 (Proyecto Berlín) © 2026 • 版权所有。",

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

      "home.casa_propia": "マイホーム建築のための優良区画",
      "home.ubicacion_estrategica": "戦略的な立地条件",
      "home.plazo_contado": "分割払い・一括払い対応",
      "home.cota_alta": "浸水のない高台保証",

      "lot.disponible": "購入可能",
      "lot.ocupado": "成約済み / 使用中",
      "lot.precio_m2": "$7 USD / m²",
      "lot.cota_alta": "100% 浸水なしの高台立地",
      "lot.a_400m": "ハルデマン • 幹線道路から400m",
      "lot.financiamiento": "銀行不要の直接自社ローン",
      "lot.superficie": "敷地面積",
      "lot.precio_oficial": "公式価格 ($7/m²)",
      "lot.cuota_mensual": "月々の支払額 (120回)",

      "banner.badge": "投資チャンス • ハルデマン (HARDEMAN)",
      "banner.titulo": "ハルデマンの土地がわずか $7 USD/m² であなたのものに",
      "banner.subtitulo": "銀行審査なしの直接分割払い • 幹線道路から400m、100%高台の安心地勢",
      "about.titulo": "私たちについて",
      "about.subtitulo": "ハルデマンの安全な土地と高い資産価値",
      "footer.oficina": "本社オフィス",
      "footer.oficina_desc": "Hardeman - Piraí 幹線道路から400m • ボリビア、サンタクルス",
      "footer.telefono": "電話番号",
      "footer.email": "メールアドレス",
      "footer.derechos": "Ronald Augusto Rodriguez Serrano によるデザイン・開発 | プロジェクト・ベルリン © 2026 • All rights reserved.",

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

      "home.casa_propia": "Участки для строительства вашего дома",
      "home.ubicacion_estrategica": "Стратегическое расположение",
      "home.plazo_contado": "В рассрочку и за наличные",
      "home.cota_alta": "Гарантия возвышенности",

      "lot.disponible": "ДОСТУПЕН",
      "lot.ocupado": "ПРОДАН / ЗАНЯТ",
      "lot.precio_m2": "$7 USD / м²",
      "lot.cota_alta": "100% Возвышенность без затоплений",
      "lot.a_400m": "Хардеман • 400м от трассы",
      "lot.financiamiento": "Прямая рассрочка без банков",
      "lot.superficie": "Площадь участка",
      "lot.precio_oficial": "Официальная цена ($7/м²)",
      "lot.cuota_mensual": "Ежемесячный платеж (120 мес.)",

      "banner.badge": "ИНВЕСТИЦИОННАЯ ВОЗМОЖНОСТЬ • ХАРДЕМАН",
      "banner.titulo": "Собственный участок в Хардемане всего за $7 USD/м²",
      "banner.subtitulo": "Прямая рассрочка без банковской волокиты • 100% Не затапливается, 400м от трассы",
      "about.titulo": "О нас",
      "about.subtitulo": "Надежная земля и высокий рост стоимости в Хардемане",
      "footer.oficina": "ГЛАВНЫЙ ОФИС",
      "footer.oficina_desc": "400м от трассы Хардеман - Пираи • Санта-Крус, Боливия",
      "footer.telefono": "ТЕЛЕФОН",
      "footer.email": "ЭЛ. ПОЧТА",
      "footer.derechos": "Дизайн и разработка: Ronald Augusto Rodriguez Serrano | Проект Берлин © 2026 • Все права защищены.",

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

      "home.casa_propia": "Wasikita Ruwanapaq Allpakuna",
      "home.ubicacion_estrategica": "Kusa Kiti",
      "home.plazo_contado": "Mit'awan Chanta Jinallapi",
      "home.cota_alta": "Mana Yaku Yaykuna Allpa",

      "lot.disponible": "KASHANMI",
      "lot.ocupado": "RANQHAYASQA",
      "lot.precio_m2": "$7 USD / m²",
      "lot.cota_alta": "100% Pata Allpa Mana Yakuyuq",
      "lot.a_400m": "Hardeman • 400m Ñanmanta",
      "lot.financiamiento": "Kikinmanta Qullqi Mañakuy",
      "lot.superficie": "Allpap Kurpun",
      "lot.precio_oficial": "Tukri Chani ($7/m²)",
      "lot.cuota_mensual": "Killapi Qullqi (120 killa)",

      "banner.badge": "QULLQI CHURAY ALLPA • HARDEMAN",
      "banner.titulo": "Qam kikiypa Allpayki Hardemanpi $7 USD/m²-llaman",
      "banner.subtitulo": "Kikinmanta manuy mana bankuwan • 100% Pata Allpa mana yakuyuq 400m Hatun Ñanmanta",
      "about.titulo": "Ñuqaykumanta",
      "about.subtitulo": "Waqaychasqa Allpakuna Hatun Chaniyuq Hardemanpi",
      "footer.oficina": "HATUN WASI",
      "footer.oficina_desc": "400m Hardeman - Piraí Hatun Ñanmanta • Santa Cruz, Bolivia",
      "footer.telefono": "QAYYANA",
      "footer.email": "CHASKI",
      "footer.derechos": "Ronald Augusto Rodriguez Serrano ruwasqa | Proyecto Berlín © 2026 • Tukuy hayñikuna waqaychasqa.",

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

      "home.casa_propia": "Yvy Nde Rogarã",
      "home.ubicacion_estrategica": "Tenda Porã",
      "home.plazo_contado": "Plazo ha Contado rupi",
      "home.cota_alta": "Yvy Yvate Añetete",

      "lot.disponible": "OI ME",
      "lot.ocupado": "ÑEMU PYRE",
      "lot.precio_m2": "$7 USD / m²",
      "lot.cota_alta": "100% Yvy Yvate Y ndoikéiva",
      "lot.a_400m": "Hardeman • 400m Tape Guasúgui",
      "lot.financiamiento": "Viru Ñeme'ẽ Banco'ỹre",
      "lot.superficie": "Yvy Tuichakue",
      "lot.precio_oficial": "Repy Teete ($7/m²)",
      "lot.cuota_mensual": "Ñehepyme'ẽ Jasýpe (120 jasy)",

      "banner.badge": "MBA'E PORÃ VIRU REHEGUA • HARDEMAN",
      "banner.titulo": "Nde Yvy Teete Hardemanpe $7 USD/m² añónte",
      "banner.subtitulo": "Financiamiento directo banco'ỹre • 100% Yvy Yvate 400m Tape Guasúgui",
      "about.titulo": "Oremba'e",
      "about.subtitulo": "Yvy Tekoporã ha Hechapyrã Hardemanpe",
      "footer.oficina": "OGAPUSU GUASU",
      "footer.oficina_desc": "400m Tape Hardeman - Piraígui • Santa Cruz, Bolivia",
      "footer.telefono": "PUMBYRY",
      "footer.email": "ÑANDUTIVEVE",
      "footer.derechos": "Ronald Augusto Rodriguez Serrano ojapo | Proyecto Berlín © 2026 • Mayma teko oñeñangareko.",

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

      "home.casa_propia": "Uraqi Utama Lurasiñataki",
      "home.ubicacion_estrategica": "Wali Askhi Kawkha",
      "home.plazo_contado": "Plazuta Ukhamaraki Contaduta",
      "home.cota_alta": "Uraqi Apatata Qillqata",

      "lot.disponible": "UTJXTUWA",
      "lot.ocupado": "ALJATATAWA",
      "lot.precio_m2": "$7 USD / m²",
      "lot.cota_alta": "100% Pata Uraqi Jan Uma Mantani",
      "lot.a_400m": "Hardeman • 400m Jach'a Thakhita",
      "lot.financiamiento": "Kikipata Qullqi Mayt'asiña",
      "lot.superficie": "Uraqin Jach'akanka",
      "lot.precio_oficial": "Kikipa Chani ($7/m²)",
      "lot.cuota_mensual": "Phaxsi Qullqi (120 phaxsi)",

      "banner.badge": "WALI ASKI QULLQI CHURAÑA • HARDEMAN",
      "banner.titulo": "Juma Kikipa Uraqima Hardeman markana $7 USD/m²-kama",
      "banner.subtitulo": "Directo qullqi mayt'awi jan bancuwan • 100% Pata Uraqi jan uma mantani 400m Jach'a Thakhita",
      "about.titulo": "Nanaktataki",
      "about.subtitulo": "Imata Uraqinaka Jach'a Chanini Hardemanpi",
      "footer.oficina": "JACH'A UTA",
      "footer.oficina_desc": "400m Hardeman - Piraí Jach'a Thakhita • Santa Cruz, Bolivia",
      "footer.telefono": "JAWQ'IÑA",
      "footer.email": "CHASKI",
      "footer.derechos": "Ronald Augusto Rodriguez Serrano lurt'ata | Proyecto Berlín © 2026 • Taqi derechunaka imatawa.",

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
