# PoGo Trade Hub Pro 2.0 🚀

[![Estado](https://img.shields.io/badge/Estado-Activo-success.svg)](#)

Una herramienta web moderna y ligera diseñada para los jugadores de Pokémon GO. Permite crear, organizar y exportar fácilmente listas de intercambio (Trade Lists) de manera visual y atractiva.

## ✨ Características

*   **Buscador Inteligente:** Sistema de autocompletado en tiempo real consumiendo la PokéAPI para encontrar rápidamente a cualquier Pokémon.
*   **Gestión de Listas:** Dos columnas interactivas: "Lo que ofrezco" y "Lo que busco".
*   **Control Total por Pokémon:** 
    *   Cambia entre versión Normal y **Shiny**.
    *   Gestión de atributos especiales: Purificado, Movimiento Legacy, Fondo Especial (Spec BG), tamaño XXL y estado **Gigamax**.
    *   Campos dedicados para el Nivel y Año de captura.
*   **Modo Foto (Exportación):** Genera una imagen limpia y formateada de tu lista de intercambios, ideal para compartir en comunidades, Discord o WhatsApp, usando un solo botón.
*   **100% Client-Side:** No requiere backend. Todo funciona localmente y a través de llamadas API eficientes en el navegador.

## 🛠️ Tecnologías Usadas

*   **HTML5 & CSS3:** Interfaz moderna, usando variables CSS y un diseño "Glassmorphism" para un aspecto premium.
*   **Vanilla JavaScript:** Toda la lógica de la aplicación sin frameworks pesados.
*   **[PokéAPI](https://pokeapi.co/):** Fuente principal de datos y sprites de los Pokémon.
*   **[html2canvas](https://html2canvas.hertzen.com/):** Librería crucial para la función de Modo Foto, renderizando el DOM a un Canvas exportable.

## 🚀 Uso Local

Como es una página web estática, no necesitas instalar dependencias complicadas:

1.  Clona o descarga este repositorio.
2.  Abre el archivo `index.html` en cualquier navegador moderno (Chrome, Firefox, Edge, Safari).
3.  ¡Empieza a crear tu Trade List!

## 📸 Demostración / Capturas

La interfaz cuenta con opciones para aplicar rápidamente versiones "Shiny" (agrega estrellas) y añadir auras visuales (como el matiz rojo del Gigamax), mostrando automáticamente el Nivel y Año al pasar al Modo Foto, eliminando los botones interactivos para un pantallazo mucho más limpio.

## 📝 Notas sobre la Exportación de la Imagen

Para garantizar que el botón de "Descargar Imagen del Trade" funcione incluso si se abre el sistema localmente (`file:///`), las imágenes personalizadas o decorativas de atributos (ej. brillos Gigamax / Shiny) han sido inyectadas directamente en el código base a través de URIs en formato *Base64*. Esto evita bloqueos de seguridad del navegador (Tainted Canvas / CORS).

## 📄 Licencia

Este proyecto se realiza con fines didácticos y para el disfrute de la comunidad. Las imágenes y nombres de los Pokémon son propiedad de The Pokémon Company/Nintendo/Niantic.
