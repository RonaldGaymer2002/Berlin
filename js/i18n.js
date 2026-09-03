/**
 * ============================================================================
 * PROYECTO BERLÍN - MOTOR MULTILINGÜE (i18n) Y GESTOR DE TEMA (DARK / LIGHT)
 * Idiomas: Español (es), English (en), Quechua (qu), Guaraní (gn), Aymara (ay)
 * ============================================================================
 */

(function () {
  'use strict';

  // 1. DICCIONARIO DE TRADUCCIONES OFICIAL
  const TRANSLATIONS = {
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
      "footer.derechos": "Diseñado para Proyecto Berlín | © Todos los derechos reservados.",
      
      // Página de Contacto
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

    en: {
      // Navigation
      "nav.inicio": "Home",
      "nav.quienes_somos": "About Us",
      "nav.proyectos": "Projects",
      "nav.planes": "Plans",
      "nav.contacto": "Contact",
      "nav.volver": "Back to Projects",
      "nav.whatsapp": "WhatsApp (+591 70832781)",

      // CTAs
      "cta.whatsapp_directo": "Contact via WhatsApp",
      "cta.ver_plano": "View Interactive Map",
      "cta.cotizar_lote": "Quote this Lot on WhatsApp",
      "cta.simular": "Simulate Payment Plan",
      "cta.consultar": "Check Availability",

      // Lots & Badges
      "lot.disponible": "AVAILABLE",
      "lot.ocupado": "SOLD / OCCUPIED",
      "lot.precio_m2": "$7 USD / sqm",
      "lot.cota_alta": "100% High Ground Flood-Free",
      "lot.a_400m": "Hardeman • 400m from Highway",
      "lot.financiamiento": "Direct In-House Financing",
      "lot.superficie": "Lot Area",
      "lot.precio_oficial": "Official Price ($7/sqm)",
      "lot.cuota_mensual": "Monthly Installment (120m)",

      // Sections
      "banner.badge": "INVESTMENT OPPORTUNITY • HARDEMAN",
      "banner.titulo": "Your Own Land in Hardeman at Only $7 USD/sqm",
      "banner.subtitulo": "Direct in-house financing with no bank paperwork • 100% High Ground Flood-Free 400m from Highway",
      "about.titulo": "About Us",
      "about.subtitulo": "Secure Land & High Capital Gain in Hardeman",
      "footer.oficina": "HEAD OFFICE",
      "footer.oficina_desc": "400m from Hardeman - Piraí Highway • Santa Cruz, Bolivia",
      "footer.telefono": "PHONE",
      "footer.email": "EMAIL",
      "footer.derechos": "Designed for Proyecto Berlín | © All rights reserved.",

      // Contact Page
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

      // Controls
      "theme.light": "Light Mode",
      "theme.dark": "Dark Mode",
      "lang.select": "Language"
    },

    qu: {
      // Quechua (Qhichwa simi)
      "nav.inicio": "Qallariy",
      "nav.quienes_somos": "Pikunam kayku",
      "nav.proyectos": "Ruwakuykuna",
      "nav.planes": "Wakiypakuna",
      "nav.contacto": "Tinkiy",
      "nav.volver": "Kutimuy Ruwakuykunaman",
      "nav.whatsapp": "WhatsApp (+591 70832781)",

      // CTAs
      "cta.whatsapp_directo": "WhatsAppwan rimay",
      "cta.ver_plano": "Plano Rikuy",
      "cta.cotizar_lote": "Chani Tapuy WhatsApppi",
      "cta.simular": "Chani Yupanapaq",
      "cta.consultar": "Lote Kashanchus Tapuy",

      // Lots
      "lot.disponible": "KASHAN (DISPONIBLE)",
      "lot.ocupado": "RANTISQA (OCUPADO)",
      "lot.precio_m2": "$7 USD / m²",
      "lot.cota_alta": "Pata Hallp'a Manan Yaku Hunt'anchu",
      "lot.a_400m": "Hardeman • 400m Ñanmanta",
      "lot.financiamiento": "Kikinmanta Qullqichana Mana Bancowan",
      "lot.superficie": "Hallp'a Tupuy",
      "lot.precio_oficial": "Kikin Chani ($7/m²)",
      "lot.cuota_mensual": "Killapi Qullqi (120 killa)",

      // Sections
      "banner.badge": "SUMAQ RUWAY • HARDEMAN",
      "banner.titulo": "Kikin Hallp'ayki Hardemanpi $7 USD/m²-llanpi",
      "banner.subtitulo": "Mana bancowan kikinmanta qullqichana • 100% Pata Hallp'a mana yaku hunt'anchu",
      "about.titulo": "Ñuqaykumanta",
      "about.subtitulo": "Allin Hallp'akuna Hardemanpi",
      "footer.oficina": "UMALLIQ WASI",
      "footer.oficina_desc": "400m Hardeman - Piraí Ñanmanta • Santa Cruz, Bolivia",
      "footer.telefono": "QAYYANA",
      "footer.email": "CHASKI",
      "footer.derechos": "Proyecto Berlín-paq rurasqa | © Tukuy hayñikuna waqaychasqa.",

      // Contact Page
      "contact.subtitulo": "RUNA TINKIY",
      "contact.titulo": "Tinkiykuwayku",
      "contact.badge": "QATU WASI / ATENCIÓN",
      "contact.oficina_titulo": "Proyecto Berlín - Santa Cruz",
      "contact.parrafo": "WhatsApppi qillqaykuwayku utaq wasiykuman hamuy allin yachayta chaskinaykipaq.",
      "contact.whatsapp_label": "KIKIN WHATSAPP",
      "contact.ubicacion_label": "MAYPI KASHAN",
      "contact.ubicacion_val": "Calle Paititi #104, Santa Cruz de la Sierra, Bolivia",
      "contact.horario_label": "LLANK'AY PACHA",
      "contact.horario_val": "Lunesmanta Sabadokama: 08:30 - 18:30",
      "contact.btn_whatsapp": "WHATSAPP-WAN RIMAY",
      "contact.btn_maps": "GOOGLE MAPSPI RIKUY",

      // Controls
      "theme.light": "K'anchay Tema",
      "theme.dark": "Laqha Tema",
      "lang.select": "Simi"
    },

    gn: {
      // Guaraní (Avañe'ẽ)
      "nav.inicio": "Ñepyrũ",
      "nav.quienes_somos": "Máva pa ore",
      "nav.proyectos": "Mba'apo",
      "nav.planes": "Tape Kuéra",
      "nav.contacto": "Ñe'ẽ Guasu",
      "nav.volver": "Jey Mba'apópe",
      "nav.whatsapp": "WhatsApp (+591 70832781)",

      // CTAs
      "cta.whatsapp_directo": "Eñe'ẽ WhatsApp rupi",
      "cta.ver_plano": "Ehecha Plano",
      "cta.cotizar_lote": "Eporandu Kóva Lote WhatsApp-pe",
      "cta.simular": "Eipapa Cuota",
      "cta.consultar": "Eporandu Oĩpa",

      // Lots
      "lot.disponible": "OĨVA (DISPONIBLE)",
      "lot.ocupado": "OÑEVENDEMA (OCUPADO)",
      "lot.precio_m2": "$7 USD / m²",
      "lot.cota_alta": "Yvy Yvate Ndoikéi Y",
      "lot.a_400m": "Hardeman • 400m Tapégui",
      "lot.financiamiento": "Viru Me'ẽ Banco'ỹre",
      "lot.superficie": "Yvy Tuichakue",
      "lot.precio_oficial": "Tepy Teete ($7/m²)",
      "lot.cuota_mensual": "Jasypavẽ Viru (120 jasy)",

      // Sections
      "banner.badge": "MBA'E GUASU • HARDEMAN",
      "banner.titulo": "Nde Yvy Teete Hardeman-pe $7 USD/m²-nte",
      "banner.subtitulo": "Viru me'ẽ banco'ỹre • 100% Yvy Yvate ndoikéi y 400m tapégui",
      "about.titulo": "Ore rehegua",
      "about.subtitulo": "Yvy Porã ha Teko Piro'y Hardeman-pe",
      "footer.oficina": "TENDEKUAA GUASU",
      "footer.oficina_desc": "400m Tape Hardeman - Piraígui • Santa Cruz, Bolivia",
      "footer.telefono": "PUMBYRY",
      "footer.email": "ÑE'ẼVEVE",
      "footer.derechos": "Proyecto Berlín mba'erã | © Mayma derécho oñeñongatu.",

      // Contact Page
      "contact.subtitulo": "TEKO ÑANGAREKO",
      "contact.titulo": "Eñe'ẽ Orendive",
      "contact.badge": "MBA'APOHÁPE / ATENCIÓN",
      "contact.oficina_titulo": "Proyecto Berlín - Santa Cruz",
      "contact.parrafo": "Ehai oréve WhatsApp rupi térã eju ore rendápe rehecha hag̃ua yvy porãite.",
      "contact.whatsapp_label": "WHATSAPP TEETE",
      "contact.ubicacion_label": "MOO GUASUPA",
      "contact.ubicacion_val": "Calle Paititi #104, Santa Cruz de la Sierra, Bolivia",
      "contact.horario_label": "ARA JEIKE",
      "contact.horario_val": "Lunes guive Sábado peve: 08:30 - 18:30",
      "contact.btn_whatsapp": "EHAI WHATSAPP RUPI",
      "contact.btn_maps": "EHECHA GOOGLE MAPS-PE",

      // Controls
      "theme.light": "Tesape Tema",
      "theme.dark": "Pytũ Tema",
      "lang.select": "Ñe'ẽ"
    },

    ay: {
      // Aymara (Aymar aru)
      "nav.inicio": "Qalltaña",
      "nav.quienes_somos": "Khitinakas tantachata",
      "nav.proyectos": "Lurawinaka",
      "nav.planes": "Wakichitanaka",
      "nav.contacto": "Jikisisiña",
      "nav.volver": "Kutt'aña Lurawinakaru",
      "nav.whatsapp": "WhatsApp (+591 70832781)",

      // CTAs
      "cta.whatsapp_directo": "WhatsApp tuqi parlt'aña",
      "cta.ver_plano": "Plano Uñjaña",
      "cta.cotizar_lote": "Chani Jiskt'aña WhatsAppna",
      "cta.simular": "Chani Jakisiña",
      "cta.consultar": "Lote Utjiti Jiskt'aña",

      // Lots
      "lot.disponible": "UTJIRI (DISPONIBLE)",
      "lot.ocupado": "ALJATA (OCUPADO)",
      "lot.precio_m2": "$7 USD / m²",
      "lot.cota_alta": "Alaxpacha Uraqi Jani Umampi Phukht'iri",
      "lot.a_400m": "Hardeman • 400m Thakhita",
      "lot.financiamiento": "Ch'axwa Qullqichawi Jani Bancowan",
      "lot.superficie": "Uraqi Kamachi",
      "lot.precio_oficial": "Chani Teete ($7/m²)",
      "lot.cuota_mensual": "Phaxsi Qullqi (120 phaxsi)",

      // Sections
      "banner.badge": "SUMA LURAWI • HARDEMAN",
      "banner.titulo": "Juma Uraqi Hardeman markana $7 USD/m²-ki",
      "banner.subtitulo": "Qullqichawi jani bancowan • 100% Alaxpacha Uraqi jani umampi phukht'iri",
      "about.titulo": "Nanaktaki",
      "about.subtitulo": "Suma Uraqinaka Hardeman markana",
      "footer.oficina": "JACH'A UTASA",
      "footer.oficina_desc": "400m Thakhi Hardeman - Piraíta • Santa Cruz, Bolivia",
      "footer.telefono": "JAWSAÑA",
      "footer.email": "CHASKI",
      "footer.derechos": "Proyecto Berlín lurata | © Taqi derechunaka imatawa.",

      // Contact Page
      "contact.subtitulo": "JAWSAWI UTJIRI",
      "contact.titulo": "Nanakar Jikisisiñataki",
      "contact.badge": "ALJAWI WASI / ATENCIÓN",
      "contact.oficina_titulo": "Proyecto Berlín - Santa Cruz",
      "contact.parrafo": "WhatsApp tuqi qillqt'apxita jani ukax utasar jutapxam suma uraqinaka uñjañataki.",
      "contact.whatsapp_label": "KIKIN WHATSAPP",
      "contact.ubicacion_label": "KAWKHANKISA",
      "contact.ubicacion_val": "Calle Paititi #104, Santa Cruz de la Sierra, Bolivia",
      "contact.horario_label": "LURAWI PACHA",
      "contact.horario_val": "Lunesita Sabadokama: 08:30 - 18:30",
      "contact.btn_whatsapp": "WHATSAPP-RU QILLQAÑA",
      "contact.btn_maps": "GOOGLE MAPS-NA UÑJAÑA",

      // Controls
      "theme.light": "Qhana Tema",
      "theme.dark": "Ch'amaka Tema",
      "lang.select": "Aru"
    }
  };

  // 2. FUNCIÓN DE IDIOMAS (i18n)
  function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) lang = 'es';
    try {
      localStorage.setItem('lang', lang);
    } catch (e) {}

    const dict = TRANSLATIONS[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        if (el.tagName === 'INPUT' && el.getAttribute('placeholder')) {
          el.setAttribute('placeholder', dict[key]);
        } else {
          el.textContent = dict[key];
        }
      }
    });

    document.querySelectorAll('.lang-select-input').forEach(sel => {
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

  // 4. INICIALIZACIÓN INMEDIATA (Previene FOUC - flash of unstyled content)
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
      try { return localStorage.getItem('lang') || 'es'; } catch(e) { return 'es'; }
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
    document.querySelectorAll('.lang-select-input').forEach(sel => {
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
