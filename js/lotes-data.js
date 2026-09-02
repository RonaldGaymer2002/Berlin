/**
 * ============================================================================
 * PROYECTO BERLÍN - HARDEMAN (SANTA CRUZ, BOLIVIA)
 * DATASET OFICIAL DEFINITIVO DE LOTES E INFRAESTRUCTURA
 * ============================================================================
 */

// Constantes Generales de Ubicación y Precios (Hardeman, Santa Cruz)
const BASE_LAT = -16.672908;
const BASE_LNG = -63.611963;
const PRECIO_M2 = 7; // Precio Oficial: $7 USD / m²
const TC_BOLIVIANO = 6.96; // Tipo de cambio oficial referencial (USD a Bs)
const PHONE_NUMBER = "59170832781"; // Teléfono oficial de contacto y WhatsApp
const MAPS_LOCATION_URL = "https://maps.app.goo.gl/duiobcqmixL66bNM6"; // Enlace oficial Google Maps

/**
 * Dataset Oficial de Lotes por Manzanas (M-1, M-2, M-3)
 * M-1: Lotes 1 al 8 (Ocupados/Vendidos), Lote 9 (Disponible - 437.77 m² - $3,064.39 USD)
 * M-2: Lotes 1, 2, 3, 5, 6, 7, 8 (Ocupados/Vendidos)
 *      Disponibles: LT 4 (504.49 m²), LT 9 (961.57 m²), LT 10 (290.71 m²),
 *                   LT 11 (324.72 m²), LT 12 (319.61 m²), LT 13 (314.50 m²)
 * M-3: Lote 1 (Ocupado/Vendido)
 *      Disponibles: LT 2, 3, 4 (362.64 m² c/u - $2,538.48 USD), LT 5 (365.31 m² - $2,557.17 USD)
 */
const LOTES_DATA = [
  // ==========================================================================
  // MANZANA M-1
  // ==========================================================================
  {
    id: "M1-LT01",
    manzana: "M-1",
    lote: "LT 01",
    numero: "01",
    superficie: 350.00,
    precioTotal: 2450.00,
    estado: "ocupado",
    descripcion: "Lote ocupado / vendido en Manzana M-1.",
    bounds: [[BASE_LAT + 0.0018, BASE_LNG - 0.0032], [BASE_LAT + 0.0024, BASE_LNG - 0.0026]]
  },
  {
    id: "M1-LT02",
    manzana: "M-1",
    lote: "LT 02",
    numero: "02",
    superficie: 350.00,
    precioTotal: 2450.00,
    estado: "ocupado",
    descripcion: "Lote ocupado / vendido en Manzana M-1.",
    bounds: [[BASE_LAT + 0.0018, BASE_LNG - 0.0026], [BASE_LAT + 0.0024, BASE_LNG - 0.0020]]
  },
  {
    id: "M1-LT03",
    manzana: "M-1",
    lote: "LT 03",
    numero: "03",
    superficie: 350.00,
    precioTotal: 2450.00,
    estado: "ocupado",
    descripcion: "Lote ocupado / vendido en Manzana M-1.",
    bounds: [[BASE_LAT + 0.0018, BASE_LNG - 0.0020], [BASE_LAT + 0.0024, BASE_LNG - 0.0014]]
  },
  {
    id: "M1-LT04",
    manzana: "M-1",
    lote: "LT 04",
    numero: "04",
    superficie: 350.00,
    precioTotal: 2450.00,
    estado: "ocupado",
    descripcion: "Lote ocupado / vendido en Manzana M-1.",
    bounds: [[BASE_LAT + 0.0018, BASE_LNG - 0.0014], [BASE_LAT + 0.0024, BASE_LNG - 0.0008]]
  },
  {
    id: "M1-LT05",
    manzana: "M-1",
    lote: "LT 05",
    numero: "05",
    superficie: 350.00,
    precioTotal: 2450.00,
    estado: "ocupado",
    descripcion: "Lote ocupado / vendido en Manzana M-1.",
    bounds: [[BASE_LAT + 0.0018, BASE_LNG - 0.0008], [BASE_LAT + 0.0024, BASE_LNG - 0.0002]]
  },
  {
    id: "M1-LT06",
    manzana: "M-1",
    lote: "LT 06",
    numero: "06",
    superficie: 350.00,
    precioTotal: 2450.00,
    estado: "ocupado",
    descripcion: "Lote ocupado / vendido en Manzana M-1.",
    bounds: [[BASE_LAT + 0.0018, BASE_LNG - 0.0002], [BASE_LAT + 0.0024, BASE_LNG + 0.0004]]
  },
  {
    id: "M1-LT07",
    manzana: "M-1",
    lote: "LT 07",
    numero: "07",
    superficie: 350.00,
    precioTotal: 2450.00,
    estado: "ocupado",
    descripcion: "Lote ocupado / vendido en Manzana M-1.",
    bounds: [[BASE_LAT + 0.0018, BASE_LNG + 0.0004], [BASE_LAT + 0.0024, BASE_LNG + 0.0010]]
  },
  {
    id: "M1-LT08",
    manzana: "M-1",
    lote: "LT 08",
    numero: "08",
    superficie: 350.00,
    precioTotal: 2450.00,
    estado: "ocupado",
    descripcion: "Lote ocupado / vendido en Manzana M-1.",
    bounds: [[BASE_LAT + 0.0018, BASE_LNG + 0.0010], [BASE_LAT + 0.0024, BASE_LNG + 0.0016]]
  },
  {
    id: "M1-LT09",
    manzana: "M-1",
    lote: "LT 09",
    numero: "09",
    superficie: 437.77,
    precioTotal: 3064.39,
    estado: "disponible",
    descripcion: "Lote disponible en Manzana M-1. 437.77 m² en cota alta con frente amplio.",
    bounds: [[BASE_LAT + 0.0018, BASE_LNG + 0.0016], [BASE_LAT + 0.0024, BASE_LNG + 0.0024]]
  },

  // ==========================================================================
  // MANZANA M-2
  // ==========================================================================
  {
    id: "M2-LT01",
    manzana: "M-2",
    lote: "LT 01",
    numero: "01",
    superficie: 320.00,
    precioTotal: 2240.00,
    estado: "ocupado",
    descripcion: "Lote ocupado / vendido en Manzana M-2.",
    bounds: [[BASE_LAT + 0.0008, BASE_LNG - 0.0032], [BASE_LAT + 0.0014, BASE_LNG - 0.0025]]
  },
  {
    id: "M2-LT02",
    manzana: "M-2",
    lote: "LT 02",
    numero: "02",
    superficie: 320.00,
    precioTotal: 2240.00,
    estado: "ocupado",
    descripcion: "Lote ocupado / vendido en Manzana M-2.",
    bounds: [[BASE_LAT + 0.0008, BASE_LNG - 0.0025], [BASE_LAT + 0.0014, BASE_LNG - 0.0018]]
  },
  {
    id: "M2-LT03",
    manzana: "M-2",
    lote: "LT 03",
    numero: "03",
    superficie: 320.00,
    precioTotal: 2240.00,
    estado: "ocupado",
    descripcion: "Lote ocupado / vendido en Manzana M-2.",
    bounds: [[BASE_LAT + 0.0008, BASE_LNG - 0.0018], [BASE_LAT + 0.0014, BASE_LNG - 0.0011]]
  },
  {
    id: "M2-LT04",
    manzana: "M-2",
    lote: "LT 04",
    numero: "04",
    superficie: 504.49,
    precioTotal: 3531.43,
    estado: "disponible",
    descripcion: "Lote disponible amplio de 504.49 m² sobre avenida central de tierra en Manzana M-2.",
    bounds: [[BASE_LAT + 0.0008, BASE_LNG - 0.0011], [BASE_LAT + 0.0014, BASE_LNG - 0.0002]]
  },
  {
    id: "M2-LT05",
    manzana: "M-2",
    lote: "LT 05",
    numero: "05",
    superficie: 330.00,
    precioTotal: 2310.00,
    estado: "ocupado",
    descripcion: "Lote ocupado / vendido en Manzana M-2.",
    bounds: [[BASE_LAT + 0.0008, BASE_LNG - 0.0002], [BASE_LAT + 0.0014, BASE_LNG + 0.0005]]
  },
  {
    id: "M2-LT06",
    manzana: "M-2",
    lote: "LT 06",
    numero: "06",
    superficie: 330.00,
    precioTotal: 2310.00,
    estado: "ocupado",
    descripcion: "Lote ocupado / vendido en Manzana M-2.",
    bounds: [[BASE_LAT + 0.0008, BASE_LNG + 0.0005], [BASE_LAT + 0.0014, BASE_LNG + 0.0012]]
  },
  {
    id: "M2-LT07",
    manzana: "M-2",
    lote: "LT 07",
    numero: "07",
    superficie: 330.00,
    precioTotal: 2310.00,
    estado: "ocupado",
    descripcion: "Lote ocupado / vendido en Manzana M-2.",
    bounds: [[BASE_LAT + 0.0008, BASE_LNG + 0.0012], [BASE_LAT + 0.0014, BASE_LNG + 0.0018]]
  },
  {
    id: "M2-LT08",
    manzana: "M-2",
    lote: "LT 08",
    numero: "08",
    superficie: 350.00,
    precioTotal: 2450.00,
    estado: "ocupado",
    descripcion: "Lote ocupado / vendido en Manzana M-2.",
    bounds: [[BASE_LAT + 0.0008, BASE_LNG + 0.0018], [BASE_LAT + 0.0014, BASE_LNG + 0.0024]]
  },
  {
    id: "M2-LT09",
    manzana: "M-2",
    lote: "LT 09",
    numero: "09",
    superficie: 961.57,
    precioTotal: 6730.99,
    estado: "disponible",
    descripcion: "Macro Lote disponible de 961.57 m² en Manzana M-2. Ideal para quinta, galpón comercial o negocio.",
    bounds: [[BASE_LAT + 0.0001, BASE_LNG + 0.0010], [BASE_LAT + 0.0007, BASE_LNG + 0.0024]]
  },
  {
    id: "M2-LT10",
    manzana: "M-2",
    lote: "LT 10",
    numero: "10",
    superficie: 290.71,
    precioTotal: 2034.97,
    estado: "disponible",
    descripcion: "Lote disponible de 290.71 m² en Manzana M-2. Excelente precio de lanzamiento a $2,034.97 USD.",
    bounds: [[BASE_LAT + 0.0001, BASE_LNG + 0.0004], [BASE_LAT + 0.0007, BASE_LNG + 0.0010]]
  },
  {
    id: "M2-LT11",
    manzana: "M-2",
    lote: "LT 11",
    numero: "11",
    superficie: 324.72,
    precioTotal: 2273.04,
    estado: "disponible",
    descripcion: "Lote disponible de 324.72 m² en Manzana M-2 sobre calle interna con cota alta.",
    bounds: [[BASE_LAT + 0.0001, BASE_LNG - 0.0003], [BASE_LAT + 0.0007, BASE_LNG + 0.0004]]
  },
  {
    id: "M2-LT12",
    manzana: "M-2",
    lote: "LT 12",
    numero: "12",
    superficie: 319.61,
    precioTotal: 2237.27,
    estado: "disponible",
    descripcion: "Lote disponible de 319.61 m² en Manzana M-2. Cero riesgo de anegamiento.",
    bounds: [[BASE_LAT + 0.0001, BASE_LNG - 0.0010], [BASE_LAT + 0.0007, BASE_LNG - 0.0003]]
  },
  {
    id: "M2-LT13",
    manzana: "M-2",
    lote: "LT 13",
    numero: "13",
    superficie: 314.50,
    precioTotal: 2201.50,
    estado: "disponible",
    descripcion: "Lote disponible de 314.50 m² en Manzana M-2. Listo para cerramiento y posesión inmediata.",
    bounds: [[BASE_LAT + 0.0001, BASE_LNG - 0.0017], [BASE_LAT + 0.0007, BASE_LNG - 0.0010]]
  },

  // ==========================================================================
  // MANZANA M-3
  // ==========================================================================
  {
    id: "M3-LT01",
    manzana: "M-3",
    lote: "LT 01",
    numero: "01",
    superficie: 360.00,
    precioTotal: 2520.00,
    estado: "ocupado",
    descripcion: "Lote ocupado / vendido en Manzana M-3.",
    bounds: [[BASE_LAT - 0.0011, BASE_LNG - 0.0032], [BASE_LAT - 0.0004, BASE_LNG - 0.0022]]
  },
  {
    id: "M3-LT02",
    manzana: "M-3",
    lote: "LT 02",
    numero: "02",
    superficie: 362.64,
    precioTotal: 2538.48,
    estado: "disponible",
    descripcion: "Lote disponible de 362.64 m² en Manzana M-3. Excelente topografía nivelada.",
    bounds: [[BASE_LAT - 0.0011, BASE_LNG - 0.0022], [BASE_LAT - 0.0004, BASE_LNG - 0.0012]]
  },
  {
    id: "M3-LT03",
    manzana: "M-3",
    lote: "LT 03",
    numero: "03",
    superficie: 362.64,
    precioTotal: 2538.48,
    estado: "disponible",
    descripcion: "Lote disponible de 362.64 m² en Manzana M-3. Zona tranquila para vivienda familiar.",
    bounds: [[BASE_LAT - 0.0011, BASE_LNG - 0.0012], [BASE_LAT - 0.0004, BASE_LNG - 0.0002]]
  },
  {
    id: "M3-LT04",
    manzana: "M-3",
    lote: "LT 04",
    numero: "04",
    superficie: 362.64,
    precioTotal: 2538.48,
    estado: "disponible",
    descripcion: "Lote disponible de 362.64 m² en Manzana M-3. Suelo fértil y cota alta garantizada.",
    bounds: [[BASE_LAT - 0.0011, BASE_LNG - 0.0002], [BASE_LAT - 0.0004, BASE_LNG + 0.0008]]
  },
  {
    id: "M3-LT05",
    manzana: "M-3",
    lote: "LT 05",
    numero: "05",
    superficie: 365.31,
    precioTotal: 2557.17,
    estado: "disponible",
    descripcion: "Lote disponible de 365.31 m² en esquina de Manzana M-3 colindante a áreas verdes.",
    bounds: [[BASE_LAT - 0.0011, BASE_LNG + 0.0008], [BASE_LAT - 0.0004, BASE_LNG + 0.0018]]
  }
];

// Infraestructura y Manzanas
const INFRASTRUCTURE_CONFIG = {
  avenidaCentral: {
    bounds: [[BASE_LAT + 0.0014, BASE_LNG - 0.0034], [BASE_LAT + 0.0018, BASE_LNG + 0.0026]],
    labelPos: [BASE_LAT + 0.0016, BASE_LNG - 0.0004],
    labelText: "🛣️ Avenida Central de Tierra"
  },
  calleInterna: {
    bounds: [[BASE_LAT - 0.0004, BASE_LNG - 0.0034], [BASE_LAT + 0.0001, BASE_LNG + 0.0026]],
    labelPos: [BASE_LAT - 0.00015, BASE_LNG - 0.0004],
    labelText: "📍 Calle de Acceso Interno"
  },
  areaVerde: {
    bounds: [[BASE_LAT - 0.0011, BASE_LNG + 0.0018], [BASE_LAT - 0.0004, BASE_LNG + 0.0026]],
    labelPos: [BASE_LAT - 0.00075, BASE_LNG + 0.0022],
    labelText: "🌳 Área Verde"
  },
  carreteraIndicador: {
    pos: [BASE_LAT + 0.0028, BASE_LNG - 0.0004],
    text: "🚗 A sólo 400m de Carretera Hardeman - Piraí ➔"
  },
  manzanas: [
    { nombre: "MANZANA M-1", lat: BASE_LAT + 0.0026, lng: BASE_LNG - 0.0004 },
    { nombre: "MANZANA M-2", lat: BASE_LAT + 0.00155, lng: BASE_LNG - 0.0024 },
    { nombre: "MANZANA M-3", lat: BASE_LAT - 0.0013, lng: BASE_LNG - 0.0004 }
  ]
};
