/**
 * ============================================================================
 * PROYECTO BERLÍN - HARDEMAN (SANTA CRUZ, BOLIVIA)
 * DATASET OFICIAL DEFINITIVO Y CALIBRADO (27 LOTES + 3 ÁREAS VERDES)
 * ============================================================================
 */

// Constantes Generales de Precios y Divisas
export const PRECIO_M2 = 7.0;
export const TIPO_CAMBIO = 6.96;
export const TC_BOLIVIANO = 6.96; // Alias para compatibilidad
export const PHONE_NUMBER = "59170832781";
export const MAPS_LOCATION_URL = "https://maps.app.goo.gl/KaPB19dWuAUJXgaH8";

// Límites Geográficos Calibrados del Plano Oficial
export const PLANO_BOUNDS = [
  [-16.671690, -63.612959], // NW
  [-16.673889, -63.610748]  // SE
];

export const PLANO_CENTER = [-16.672790, -63.611854];

/**
 * Dataset Oficial Calibrado de los 27 Lotes (M-1: 9, M-2: 13, M-3: 5)
 */
export const LOTES_CALIBRADOS = [
  // ==========================================================================
  // MANZANA M-1 (9 Lotes)
  // ==========================================================================
  { id: "M1-L1", mz: "M-1", lote: 1, lat: -16.673704, lng: -63.611577, estado: "ocupado",    sup: 338.01 },
  { id: "M1-L2", mz: "M-1", lote: 2, lat: -16.673630, lng: -63.611502, estado: "ocupado",    sup: 307.94 },
  { id: "M1-L3", mz: "M-1", lote: 3, lat: -16.673564, lng: -63.611422, estado: "ocupado",    sup: 348.79 },
  { id: "M1-L4", mz: "M-1", lote: 4, lat: -16.673379, lng: -63.611628, estado: "ocupado",    sup: 460.89 },
  { id: "M1-L5", mz: "M-1", lote: 5, lat: -16.673265, lng: -63.611717, estado: "ocupado",    sup: 437.86 },
  { id: "M1-L6", mz: "M-1", lote: 6, lat: -16.673155, lng: -63.611797, estado: "ocupado",    sup: 414.83 },
  { id: "M1-L7", mz: "M-1", lote: 7, lat: -16.673052, lng: -63.611875, estado: "ocupado",    sup: 263.76 },
  { id: "M1-L8", mz: "M-1", lote: 8, lat: -16.672988, lng: -63.611937, estado: "ocupado",    sup: 350.00 },
  { id: "M1-L9", mz: "M-1", lote: 9, lat: -16.672905, lng: -63.611999, estado: "disponible", sup: 437.77 },

  // ==========================================================================
  // MANZANA M-2 (13 Lotes)
  // ==========================================================================
  { id: "M2-L1", mz: "M-2", lote: 1,  lat: -16.673376, lng: -63.611269, estado: "ocupado",    sup: 382.98 },
  { id: "M2-L2", mz: "M-2", lote: 2,  lat: -16.673309, lng: -63.611191, estado: "ocupado",    sup: 293.55 },
  { id: "M2-L3", mz: "M-2", lote: 3,  lat: -16.673247, lng: -63.611113, estado: "ocupado",    sup: 284.21 },
  { id: "M2-L4", mz: "M-2", lote: 4,  lat: -16.673065, lng: -63.611317, estado: "disponible", sup: 504.49 },
  { id: "M2-L5", mz: "M-2", lote: 5,  lat: -16.672959, lng: -63.611400, estado: "ocupado",    sup: 510.44 },
  { id: "M2-L6", mz: "M-2", lote: 6,  lat: -16.672859, lng: -63.611502, estado: "ocupado",    sup: 516.38 },
  { id: "M2-L7", mz: "M-2", lote: 7,  lat: -16.672738, lng: -63.611588, estado: "ocupado",    sup: 522.33 },
  { id: "M2-L8", mz: "M-2", lote: 8,  lat: -16.672646, lng: -63.611671, estado: "ocupado",    sup: 422.83 },
  { id: "M2-L9", mz: "M-2", lote: 9,  lat: -16.672473, lng: -63.611661, estado: "disponible", sup: 961.57 },
  { id: "M2-L10", mz: "M-2", lote: 10, lat: -16.672306, lng: -63.611685, estado: "disponible", sup: 290.71 },
  { id: "M2-L11", mz: "M-2", lote: 11, lat: -16.672221, lng: -63.611752, estado: "disponible", sup: 324.72 },
  { id: "M2-L12", mz: "M-2", lote: 12, lat: -16.672147, lng: -63.611824, estado: "disponible", sup: 319.61 },
  { id: "M2-L13", mz: "M-2", lote: 13, lat: -16.672064, lng: -63.611905, estado: "disponible", sup: 314.50 },

  // ==========================================================================
  // MANZANA M-3 (5 Lotes)
  // ==========================================================================
  { id: "M3-L1", mz: "M-3", lote: 1, lat: -16.672514, lng: -63.612538, estado: "ocupado",    sup: 350.00 },
  { id: "M3-L2", mz: "M-3", lote: 2, lat: -16.672427, lng: -63.612455, estado: "disponible", sup: 362.64 },
  { id: "M3-L3", mz: "M-3", lote: 3, lat: -16.672344, lng: -63.612377, estado: "disponible", sup: 374.28 },
  { id: "M3-L4", mz: "M-3", lote: 4, lat: -16.672262, lng: -63.612302, estado: "disponible", sup: 362.64 },
  { id: "M3-L5", mz: "M-3", lote: 5, lat: -16.672187, lng: -63.612235, estado: "disponible", sup: 365.31 }
];

/**
 * Dataset Oficial de las 3 Áreas Verdes Calibradas
 */
export const AREAS_VERDES = [
  { id: "AV-1", nombre: "Área Verde 1", lat: -16.672815, lng: -63.612231 },
  { id: "AV-2", nombre: "Área Verde 2", lat: -16.672425, lng: -63.612052 },
  { id: "AV-3", nombre: "Parque / Área Verde Central", lat: -16.671897, lng: -63.612087 }
];

// Compatibilidad con scripts no modulares en Window
if (typeof window !== 'undefined') {
  window.PRECIO_M2 = PRECIO_M2;
  window.TIPO_CAMBIO = TIPO_CAMBIO;
  window.TC_BOLIVIANO = TC_BOLIVIANO;
  window.LOTES_DATA = LOTES_CALIBRADOS;
  window.LOTES_CALIBRADOS = LOTES_CALIBRADOS;
  window.AREAS_VERDES = AREAS_VERDES;
}
