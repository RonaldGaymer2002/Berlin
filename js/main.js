/**
 * ============================================================================
 * PROYECTO BERLÍN - HARDEMAN (SANTA CRUZ, BOLIVIA)
 * CONTROLADOR PRINCIPAL: SWIPER HERO & ACORDEÓN COMERCIAL (ESTILO TECHO)
 * ============================================================================
 */

// 0. Forzar scroll al inicio (top: 0) al cargar o recargar la página
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

if (window.location.hash) {
  window.scrollTo(0, 0);
  try {
    history.replaceState(null, null, window.location.pathname + window.location.search);
  } catch (e) { }
}

document.addEventListener('DOMContentLoaded', () => {
  // Limpiar cualquier hash residual y asegurar vista superior en el carrusel
  if (window.location.hash) {
    window.scrollTo(0, 0);
    try {
      history.replaceState(null, null, window.location.pathname + window.location.search);
    } catch (e) { }
  }

  // 1. Menú Móvil Responsive (Toggle)
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Cerrar menú al hacer clic en cualquier enlace
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // 2. Inicialización de Swiper Hero Carousel (Visual sin Textos - 2s)
  if (typeof Swiper !== 'undefined' && document.querySelector('.heroSwiper')) {
    new Swiper('.heroSwiper', {
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      speed: 600,
    });
  }

  // 3. Acordeón Interactivo Exclusivo (Estilo TECHO)
  const accordionItems = document.querySelectorAll('.techo-accordion-item');
  if (accordionItems.length > 0) {
    accordionItems.forEach(item => {
      const header = item.querySelector('.techo-accordion-header');
      if (!header) return;

      header.addEventListener('click', () => {
        const isCurrentlyActive = item.classList.contains('active');

        // Cerrar todos los ítems (comportamiento exclusivo)
        accordionItems.forEach(otherItem => {
          otherItem.classList.remove('active');
          const otherSymbol = otherItem.querySelector('.toggle-symbol');
          if (otherSymbol) otherSymbol.textContent = '+';
        });

        // Si no estaba activo, abrir este ítem
        if (!isCurrentlyActive) {
          item.classList.add('active');
          const symbol = item.querySelector('.toggle-symbol');
          if (symbol) symbol.textContent = '✕';
        }
      });
    });
  }
});
