# 🌲 Proyecto Berlín - Hardeman (Santa Cruz, Bolivia)

> **Plataforma Web Mobile-First & WebGIS Interactiva** para la comercialización de lotes y terrenos en cota alta no inundable en Hardeman (Santa Cruz, Bolivia).

---

## 🌟 Características Principales

- **📍 Ubicación Estratégica**: A sólo 400 metros de la Carretera Hardeman - Piraí (a 180 km de Santa Cruz de la Sierra).
- **🛡️ 100% Zona Alta Garantizada**: Terrenos elevados libres de anegamientos y temporadas de lluvia en el Norte Integrado.
- **🏷️ Precio Oficial**: **$7 USD / m²**.
- **🗺️ Visor WebGIS Interactivo (Leaflet)**:
  - Mapeo de las Manzanas **M-1**, **M-2** y **M-3** con el inventario oficial de 27 lotes.
  - Representación de la **Avenida Central de Tierra** y **Áreas Verdes**.
  - Capas alternables: Mapa Vectorial y Satelital de Alta Resolución (*Esri World Imagery*).
  - *Bottom Sheet* táctil con ficha técnica, metraje exacto y estado de disponibilidad.
- **🧮 Simulador de Financiamiento**:
  - Modalidad al Contado o en Cuotas Fijas (de 12 a 120 meses).
  - Cálculo dinámico en USD ($) y Bolivianos (~Bs. con tipo de cambio 6.96).
  - Cotización con exportación prellenada directa a WhatsApp (**+591 70832781**).

---

## 📁 Estructura del Proyecto

```
├── index.html            # Estructura semántica HTML5 limpia
├── .gitignore            # Archivos ignorados por Git
├── README.md             # Documentación del proyecto
├── css/
│   └── styles.css        # Overrides de Leaflet, animaciones y glassmorphism
└── js/
    ├── lotes-data.js     # Dataset oficial de lotes, coordenadas y configuración urbana
    ├── mapa.js           # Lógica del mapa WebGIS (Leaflet) y Bottom Sheet
    ├── simulador.js      # Calculadora de cuotas y generador de mensajes WhatsApp
    └── main.js           # Inicialización y gestión de eventos de la aplicación
```

---

## 🚀 Despliegue y Uso Local

No requiere instalación de dependencias ni configuraciones complejas.

1. Clona el repositorio:
   ```bash
   git clone https://github.com/RonaldGaymer2002/Berlin.git
   ```
2. Abre `index.html` en cualquier navegador web o inicia un servidor local:
   ```bash
   python -m http.server 3000
   ```
3. Visita `http://localhost:3000`.

---

## 📞 Contacto Directo con los Propietarios

- **Teléfono / WhatsApp**: [+591 70832781](https://api.whatsapp.com/send?phone=59170832781)
- **Ubicación**: Hardeman, Municipio de San Pedro, Santa Cruz - Bolivia.
