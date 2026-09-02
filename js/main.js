/**
 * ============================================================================
 * PROYECTO BERLÍN - HARDEMAN (SANTA CRUZ, BOLIVIA)
 * CONTROLADOR PRINCIPAL Y GESTIÓN DE EVENTOS (MAIN.JS)
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inicializar Mapa Leaflet
  initMap();

  // 2. Controladores del Bottom Sheet (Ficha de Lote)
  const btnCloseSheet = document.getElementById('btn-close-sheet');
  const sheetHandle = document.getElementById('bottom-sheet-handle');
  const btnBsSimular = document.getElementById('btn-bs-simular');

  if (btnCloseSheet) btnCloseSheet.addEventListener('click', closeBottomSheet);
  if (sheetHandle) sheetHandle.addEventListener('click', closeBottomSheet);
  
  if (btnBsSimular) {
    btnBsSimular.addEventListener('click', () => {
      closeBottomSheet();
      openSimulador(selectedLot);
    });
  }

  // 3. Controladores del Modal Simulador
  const btnCloseSimulador = document.getElementById('btn-close-simulador');
  const simuladorModal = document.getElementById('simulador-modal');

  if (btnCloseSimulador) btnCloseSimulador.addEventListener('click', closeSimulador);
  if (simuladorModal) {
    simuladorModal.addEventListener('click', (e) => {
      if (e.target.id === 'simulador-modal') closeSimulador();
    });
  }

  // 4. Tabs de Modalidad de Pago (Cuotas vs Contado)
  const tabCuotas = document.getElementById('tab-cuotas');
  const tabContado = document.getElementById('tab-contado');
  const cuotasControls = document.getElementById('sim-cuotas-controls');
  const contadoControls = document.getElementById('sim-contado-controls');

  if (tabCuotas && tabContado) {
    tabCuotas.addEventListener('click', () => {
      simMode = 'cuotas';
      tabCuotas.className = 'py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all bg-emerald-600 text-white shadow';
      tabContado.className = 'py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all text-slate-400 hover:text-white';
      if (cuotasControls) cuotasControls.classList.remove('hidden');
      if (contadoControls) contadoControls.classList.add('hidden');
      calculateSimulation();
    });

    tabContado.addEventListener('click', () => {
      simMode = 'contado';
      tabContado.className = 'py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all bg-amber-500 text-brand-950 shadow';
      tabCuotas.className = 'py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all text-slate-400 hover:text-white';
      if (cuotasControls) cuotasControls.classList.add('hidden');
      if (contadoControls) contadoControls.classList.remove('hidden');
      calculateSimulation();
    });
  }

  // 5. Slider de Cuota Inicial
  const sliderInicial = document.getElementById('slider-inicial');
  if (sliderInicial) {
    sliderInicial.addEventListener('input', calculateSimulation);
  }

  // 6. Botones de Plazo (12, 24, 36, 48, 60, 72, 84, 96, 120 meses)
  const plazoButtons = document.querySelectorAll('.btn-plazo');
  plazoButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      plazoButtons.forEach(b => {
        b.className = 'btn-plazo px-2 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700';
      });
      this.className = 'btn-plazo active px-2 py-2 rounded-xl text-xs font-bold bg-emerald-600 text-white border border-emerald-400 shadow';
      simMeses = parseInt(this.getAttribute('data-meses'));
      calculateSimulation();
    });
  });

  // 7. Filtros de Manzanas y Disponibilidad
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      filterButtons.forEach(b => {
        b.className = 'filter-btn px-3 py-1.5 rounded-xl text-xs font-bold transition-all bg-slate-700 hover:bg-slate-600 text-slate-200';
      });
      this.className = 'filter-btn active px-3 py-1.5 rounded-xl text-xs font-bold transition-all bg-emerald-600 text-white shadow-sm';
      currentFilter = this.getAttribute('data-filter');
      renderLotes(LOTES_DATA);
    });
  });

  // 8. Selector Rápido de Lotes
  const selectLoteQuick = document.getElementById('select-lote-quick');
  if (selectLoteQuick) {
    selectLoteQuick.addEventListener('change', function () {
      const lotId = this.value;
      if (!lotId) return;
      const lote = LOTES_DATA.find(l => l.id === lotId);
      if (lote) {
        let targetPolygon = null;
        vectorLayerGroup.eachLayer(layer => {
          if (layer.loteData && layer.loteData.id === lotId) {
            targetPolygon = layer;
          }
        });
        selectLot(lote, targetPolygon);
      }
    });
  }

  // 9. Alternador de Capa Satelital / Vectorial
  const btnToggleSatellite = document.getElementById('btn-toggle-satellite');
  if (btnToggleSatellite) {
    btnToggleSatellite.addEventListener('click', toggleSatelliteLayer);
  }

  // 10. Botón Centrar Plano
  const btnResetMap = document.getElementById('btn-reset-map');
  if (btnResetMap) {
    btnResetMap.addEventListener('click', resetMapView);
  }

  // 11. Leyenda Colapsable en Móvil
  const toggleLegendBtn = document.getElementById('toggle-legend-btn');
  if (toggleLegendBtn) {
    toggleLegendBtn.addEventListener('click', () => {
      const content = document.getElementById('legend-content');
      if (content) content.classList.toggle('hidden');
    });
  }
});
