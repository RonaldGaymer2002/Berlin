/**
 * ============================================================================
 * PROYECTO BERLÍN - HARDEMAN (SANTA CRUZ, BOLIVIA)
 * MÓDULO WEBGIS Y GESTIÓN DEL MAPA INTERACTIVO (LEAFLET)
 * ============================================================================
 */

let map;
let vectorLayerGroup;
let labelsLayerGroup;
let selectedLot = null;
let currentFilter = "all";
let isSatellite = false;
let activePolygon = null;

// Capas de Mapa (Vectorial y Satelital)
const cartoLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; OpenStreetMap &copy; CARTO',
  maxZoom: 20,
  subdomains: 'abcd'
});

const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: '&copy; Esri World Imagery',
  maxZoom: 19
});

/**
 * Inicializa el mapa Leaflet, capas e infraestructura
 */
function initMap() {
  map = L.map('map', {
    center: [BASE_LAT + 0.0005, BASE_LNG - 0.0004],
    zoom: 17,
    minZoom: 15,
    maxZoom: 19,
    zoomControl: false,
    tap: true
  });

  L.control.zoom({ position: 'topleft' }).addTo(map);

  // Cargar capa base inicial
  cartoLayer.addTo(map);

  vectorLayerGroup = L.layerGroup().addTo(map);
  labelsLayerGroup = L.layerGroup().addTo(map);

  // Renderizar componentes
  renderUrbanInfrastructure();
  renderManzanas();
  renderLotes(LOTES_DATA);

  // Poblar controles UI
  populateLotSelector(LOTES_DATA);
  updateLotCounters();
}

/**
 * Renderiza la Avenida de Tierra, Calles, Áreas Verdes e Indicador de Carretera
 */
function renderUrbanInfrastructure() {
  const config = INFRASTRUCTURE_CONFIG;

  // 1. Avenida de Tierra Central
  L.rectangle(config.avenidaCentral.bounds, {
    fillColor: '#78350f',
    fillOpacity: 0.35,
    color: '#d97706',
    weight: 1.5,
    dashArray: '5, 5'
  }).addTo(map);

  const avenidaLabel = L.divIcon({
    className: 'street-label',
    html: config.avenidaCentral.labelText,
    iconSize: [180, 20],
    iconAnchor: [90, 10]
  });
  L.marker(config.avenidaCentral.labelPos, { icon: avenidaLabel, interactive: false }).addTo(map);

  // 2. Calle de Acceso Interno
  L.rectangle(config.calleInterna.bounds, {
    fillColor: '#64748b',
    fillOpacity: 0.25,
    color: '#94a3b8',
    weight: 1,
    dashArray: '4, 4'
  }).addTo(map);

  const calleLabel = L.divIcon({
    className: 'street-label',
    html: config.calleInterna.labelText,
    iconSize: [160, 18],
    iconAnchor: [80, 9]
  });
  L.marker(config.calleInterna.labelPos, { icon: calleLabel, interactive: false }).addTo(map);

  // 3. Área Verde Oficial
  L.rectangle(config.areaVerde.bounds, {
    fillColor: '#059669',
    fillOpacity: 0.55,
    color: '#10b981',
    weight: 2
  }).addTo(map);

  const areaVerdeLabel = L.divIcon({
    className: 'green-area-label',
    html: config.areaVerde.labelText,
    iconSize: [95, 20],
    iconAnchor: [47, 10]
  });
  L.marker(config.areaVerde.labelPos, { icon: areaVerdeLabel, interactive: false }).addTo(map);

  // 4. Indicador de Acceso a Carretera Hardeman - Piraí (a 400m)
  const carreteraIndicator = L.divIcon({
    className: 'street-label',
    html: config.carreteraIndicador.text,
    iconSize: [280, 22],
    iconAnchor: [140, 11]
  });
  L.marker(config.carreteraIndicador.pos, { icon: carreteraIndicator, interactive: false }).addTo(map);
}

/**
 * Dibuja los badges identificadores de Manzanas M-1, M-2, M-3
 */
function renderManzanas() {
  INFRASTRUCTURE_CONFIG.manzanas.forEach(mz => {
    const icon = L.divIcon({
      className: 'manzana-label',
      html: mz.nombre,
      iconSize: [120, 22],
      iconAnchor: [60, 11]
    });
    L.marker([mz.lat, mz.lng], { icon: icon, interactive: false }).addTo(map);
  });
}

/**
 * Retorna el estilo visual de los lotes según su estado
 */
function getLotStyle(lote) {
  if (lote.estado === 'ocupado') {
    return {
      fillColor: '#d97706', // Naranja/Ámbar Ocupado
      fillOpacity: 0.70,
      color: '#92400e',
      weight: 1.5
    };
  }

  // Disponible ($7 USD/m²)
  return {
    fillColor: '#10b981', // Verde Esmeralda
    fillOpacity: 0.85,
    color: '#064e3b',
    weight: 2.5
  };
}

/**
 * Renderiza los lotes geométricos en el mapa con interactividad
 */
function renderLotes(lotes) {
  vectorLayerGroup.clearLayers();
  labelsLayerGroup.clearLayers();

  lotes.forEach(lote => {
    // Aplicar filtros activos
    if (currentFilter !== 'all') {
      if (currentFilter === 'disponible' && lote.estado !== 'disponible') return;
      if (currentFilter === 'M-1' && lote.manzana !== 'M-1') return;
      if (currentFilter === 'M-2' && lote.manzana !== 'M-2') return;
      if (currentFilter === 'M-3' && lote.manzana !== 'M-3') return;
    }

    const polygon = L.rectangle(lote.bounds, getLotStyle(lote));
    polygon.loteData = lote;

    // Hover effect
    polygon.on('mouseover', function () {
      if (activePolygon !== this) {
        this.setStyle({
          weight: 3.5,
          color: '#ffffff',
          fillOpacity: 0.95
        });
      }
    });

    polygon.on('mouseout', function () {
      if (activePolygon !== this) {
        this.setStyle(getLotStyle(lote));
      }
    });

    // Evento Click / Tap en lote
    polygon.on('click', function () {
      selectLot(lote, this);
    });

    vectorLayerGroup.addLayer(polygon);

    // Etiqueta del número de lote
    const center = polygon.getBounds().getCenter();
    const labelClass = lote.estado === 'disponible' ? 'custom-lot-label disponible' : 'custom-lot-label';
    const labelIcon = L.divIcon({
      className: labelClass,
      html: `${lote.numero}`,
      iconSize: [22, 16],
      iconAnchor: [11, 8]
    });

    const labelMarker = L.marker(center, { icon: labelIcon, interactive: false });
    labelsLayerGroup.addLayer(labelMarker);
  });
}

/**
 * Selecciona un lote, enfoca el mapa y despliega el Bottom Sheet
 */
function selectLot(lote, polygonLayer) {
  selectedLot = lote;

  // Restaurar estilo del polígono previamente activo
  if (activePolygon && map.hasLayer(activePolygon)) {
    activePolygon.setStyle(getLotStyle(activePolygon.loteData));
  }

  // Resaltar el lote seleccionado
  if (polygonLayer) {
    activePolygon = polygonLayer;
    polygonLayer.setStyle({
      weight: 4,
      color: '#fbbf24',
      fillColor: '#f59e0b',
      fillOpacity: 0.95
    });
  }

  // Centrar suavemente en el lote
  const bounds = L.latLngBounds(lote.bounds);
  map.flyToBounds(bounds, {
    paddingBottomRight: [0, 220],
    maxZoom: 18,
    duration: 0.6
  });

  // Actualizar y desplegar Bottom Sheet
  updateBottomSheet(lote);
  const sheet = document.getElementById('bottom-sheet');
  if (sheet) {
    sheet.classList.remove('translate-y-full');
  }
}

/**
 * Actualiza los datos del lote en el Bottom Sheet
 */
function updateBottomSheet(lote) {
  const bsManzana = document.getElementById('bs-manzana');
  const bsTitulo = document.getElementById('bs-titulo');
  const bsSuperficie = document.getElementById('bs-superficie');
  const bsPrecioContado = document.getElementById('bs-precio-contado');
  const bsDescripcion = document.getElementById('bs-descripcion');
  const estadoBadge = document.getElementById('bs-estado-badge');
  const actionButtons = document.getElementById('bs-action-buttons');
  const bsCuotaInicial = document.getElementById('bs-cuota-inicial');
  const bsCuotaMensual = document.getElementById('bs-cuota-mensual');
  const waBtn = document.getElementById('btn-bs-whatsapp');

  if (bsManzana) bsManzana.textContent = `Manzana ${lote.manzana}`;
  if (bsTitulo) bsTitulo.textContent = `Lote ${lote.lote}`;
  if (bsSuperficie) bsSuperficie.textContent = `${lote.superficie.toFixed(2)} m²`;
  if (bsPrecioContado) {
    bsPrecioContado.textContent = `$${lote.precioTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD`;
  }
  if (bsDescripcion) bsDescripcion.textContent = lote.descripcion;

  if (lote.estado === 'disponible') {
    if (estadoBadge) {
      estadoBadge.className = 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold text-xs px-2.5 py-0.5 rounded-lg flex items-center gap-1';
      estadoBadge.innerHTML = '<span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Disponible';
    }
    if (actionButtons) actionButtons.classList.remove('hidden');

    const cuotaAprox = ((lote.precioTotal - 100) / 60).toFixed(2);
    if (bsCuotaInicial) bsCuotaInicial.textContent = `Inicial sugerida: $100 USD`;
    if (bsCuotaMensual) bsCuotaMensual.textContent = `~$${cuotaAprox} USD/mes (60m)`;
  } else {
    if (estadoBadge) {
      estadoBadge.className = 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold text-xs px-2.5 py-0.5 rounded-lg flex items-center gap-1';
      estadoBadge.innerHTML = '<span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Ocupado / Vendido';
    }
    if (bsCuotaInicial) bsCuotaInicial.textContent = `Lote no disponible`;
    if (bsCuotaMensual) bsCuotaMensual.textContent = `Consultar otros lotes`;
  }

  // Generar enlace prellenado a WhatsApp
  if (waBtn) {
    const waMsg = `Hola, me interesa el lote en *Proyecto Berlín (Hardeman)*.%0A📍 Manzana: ${lote.manzana}, Lote: ${lote.lote}%0A📐 Superficie: ${lote.superficie.toFixed(2)} m²%0A💵 Precio Total ($7/m²): $${lote.precioTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD%0AConsulto por disponibilidad y plan de financiamiento.`;
    waBtn.href = `https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${waMsg}`;
  }
}

/**
 * Cierra el Bottom Sheet y remueve el resaltado del polígono
 */
function closeBottomSheet() {
  const sheet = document.getElementById('bottom-sheet');
  if (sheet) {
    sheet.classList.add('translate-y-full');
  }
  if (activePolygon && map.hasLayer(activePolygon)) {
    activePolygon.setStyle(getLotStyle(activePolygon.loteData));
    activePolygon = null;
  }
}

/**
 * Pobla el selector desplegable de lotes rápidos
 */
function populateLotSelector(lotes) {
  const select = document.getElementById('select-lote-quick');
  if (!select) return;
  select.innerHTML = '<option value="">Seleccionar lote...</option>';
  lotes.forEach(l => {
    const opt = document.createElement('option');
    opt.value = l.id;
    const estadoTag = l.estado === 'disponible' ? '✨ DISPONIBLE' : 'OCUPADO';
    opt.textContent = `${l.manzana} ${l.lote} (${l.superficie.toFixed(2)}m²) - [${estadoTag}]`;
    select.appendChild(opt);
  });
}

/**
 * Actualiza los contadores de lotes en los botones de filtro
 */
function updateLotCounters() {
  const countAll = document.getElementById('count-all');
  const countDisp = document.getElementById('count-disponible');
  const countM1 = document.getElementById('count-m1');
  const countM2 = document.getElementById('count-m2');
  const countM3 = document.getElementById('count-m3');

  if (countAll) countAll.textContent = LOTES_DATA.length;
  if (countDisp) countDisp.textContent = LOTES_DATA.filter(l => l.estado === 'disponible').length;
  if (countM1) countM1.textContent = LOTES_DATA.filter(l => l.manzana === 'M-1').length;
  if (countM2) countM2.textContent = LOTES_DATA.filter(l => l.manzana === 'M-2').length;
  if (countM3) countM3.textContent = LOTES_DATA.filter(l => l.manzana === 'M-3').length;
}

/**
 * Alterna entre capa vectorial y satelital
 */
function toggleSatelliteLayer() {
  const satelliteLabel = document.getElementById('satellite-label');
  const toggleBtn = document.getElementById('btn-toggle-satellite');

  if (!isSatellite) {
    map.removeLayer(cartoLayer);
    satelliteLayer.addTo(map);
    if (satelliteLabel) satelliteLabel.textContent = 'Ver Croquis';
    if (toggleBtn) toggleBtn.classList.add('bg-amber-600', 'text-white');
    isSatellite = true;
  } else {
    map.removeLayer(satelliteLayer);
    cartoLayer.addTo(map);
    if (satelliteLabel) satelliteLabel.textContent = 'Ver Satelital';
    if (toggleBtn) toggleBtn.classList.remove('bg-amber-600', 'text-white');
    isSatellite = false;
  }
}

/**
 * Centra el mapa a la vista general del proyecto
 */
function resetMapView() {
  if (map) {
    map.flyTo([BASE_LAT + 0.0005, BASE_LNG - 0.0004], 17, { duration: 0.6 });
  }
}
