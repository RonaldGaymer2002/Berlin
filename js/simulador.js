/**
 * ============================================================================
 * PROYECTO BERLÍN - HARDEMAN (SANTA CRUZ, BOLIVIA)
 * SIMULADOR DE FINANCIAMIENTO Y MENSAJES DE WHATSAPP ($7 USD/m²)
 * ============================================================================
 */

let simMode = 'cuotas'; // 'cuotas' | 'contado'
let simMeses = 60; // Plazo predeterminado: 60 meses (5 años)

/**
 * Abre el modal del simulador para un lote específico o por defecto (M-2 LT 11)
 */
function openSimulador(lote) {
  const lot = (lote && lote.estado === 'disponible') 
    ? lote 
    : (selectedLot && selectedLot.estado === 'disponible' 
        ? selectedLot 
        : LOTES_DATA.find(l => l.id === 'M2-LT11'));

  selectedLot = lot;

  const simLoteInfo = document.getElementById('sim-lote-info');
  if (simLoteInfo) {
    simLoteInfo.textContent = `Manzana ${lot.manzana} - ${lot.lote} (${lot.superficie.toFixed(2)} m²)`;
  }

  // Configurar slider de cuota inicial
  const slider = document.getElementById('slider-inicial');
  if (slider) {
    slider.min = 50;
    slider.max = Math.min(Math.round(lot.precioTotal - 300), 2000);
    slider.value = 100;
  }

  // Ejecutar cálculo inicial
  calculateSimulation();

  // Desplegar modal
  const modal = document.getElementById('simulador-modal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }
}

/**
 * Cierra el modal del simulador
 */
function closeSimulador() {
  const modal = document.getElementById('simulador-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
}

/**
 * Calcula cuotas en tiempo real sobre el precio oficial ($7 USD/m²)
 */
function calculateSimulation() {
  if (!selectedLot) return;

  const precioTotal = selectedLot.precioTotal;
  const slider = document.getElementById('slider-inicial');
  const inicial = slider ? (parseFloat(slider.value) || 100) : 100;

  const inicialDisplay = document.getElementById('inicial-display');
  const resPrecioTotal = document.getElementById('res-precio-total');
  const simPrecioFinalContado = document.getElementById('sim-precio-final-contado');
  const resSaldo = document.getElementById('res-saldo');
  const resCuotaUsd = document.getElementById('res-cuota-usd');
  const resCuotaBs = document.getElementById('res-cuota-bs');
  const resRowSaldo = document.getElementById('res-row-saldo');
  const resBoxCuota = document.getElementById('res-box-cuota');
  const btnSimWhatsapp = document.getElementById('btn-sim-whatsapp');

  if (inicialDisplay) inicialDisplay.textContent = `$${inicial.toLocaleString('en-US')} USD`;
  if (resPrecioTotal) {
    resPrecioTotal.textContent = `$${precioTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD`;
  }
  if (simPrecioFinalContado) {
    simPrecioFinalContado.textContent = `$${precioTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD`;
  }

  let msgWhatsApp = '';

  if (simMode === 'cuotas') {
    const saldo = Math.max(0, precioTotal - inicial);
    const cuotaUSD = (saldo / simMeses).toFixed(2);
    const cuotaBS = (parseFloat(cuotaUSD) * TC_BOLIVIANO).toFixed(2);

    if (resSaldo) {
      resSaldo.textContent = `$${saldo.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD`;
    }
    if (resCuotaUsd) resCuotaUsd.textContent = `$${cuotaUSD}`;
    if (resCuotaBs) resCuotaBs.textContent = `~${cuotaBS} Bs / mes`;

    if (resRowSaldo) resRowSaldo.classList.remove('hidden');
    if (resBoxCuota) resBoxCuota.classList.remove('hidden');

    msgWhatsApp = `Hola, me interesa el lote en *Proyecto Berlín (Hardeman)*.%0A📍 Manzana: ${selectedLot.manzana}, Lote: ${selectedLot.lote}%0A📐 Superficie: ${selectedLot.superficie.toFixed(2)} m²%0A💵 Precio Total ($7/m²): $${precioTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD%0A💰 Cuota Inicial: $${inicial} USD%0A⏳ Plazo: ${simMeses} meses%0A💳 Cuota mensual estimada: $${cuotaUSD} USD/mes (~${cuotaBS} Bs/mes)%0AConsulto por disponibilidad y plan de financiamiento.`;
  } else {
    // Modo Al Contado
    if (resRowSaldo) resRowSaldo.classList.add('hidden');
    if (resBoxCuota) resBoxCuota.classList.add('hidden');

    msgWhatsApp = `Hola, me interesa el lote en *Proyecto Berlín (Hardeman)*.%0A📍 Manzana: ${selectedLot.manzana}, Lote: ${selectedLot.lote}%0A📐 Superficie: ${selectedLot.superficie.toFixed(2)} m²%0A💵 Precio Total ($7/m²): $${precioTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD%0AModalidad: Pago al Contado.%0AConsulto por disponibilidad y plan de financiamiento.`;
  }

  // Actualizar enlace de WhatsApp
  if (btnSimWhatsapp) {
    btnSimWhatsapp.href = `https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${msgWhatsApp}`;
  }
}
