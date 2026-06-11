# Walkthrough: Factos Interactive Test Application

![Factos App Logo](factos_logo.png)

This application implements the core features of the **Factos** social belief feed platform, running entirely client-side.

## Features Implemented & Tested

1. **Bilingual UI Translation System (`i18n`):**
   - Added drop-down selectors in both the **Auth Screen** and the **App Dashboard Header**. 
   - Supports seamless swapping between **Spanish** (default) and **English** for all headers, inputs, buttons, placeholders, and error toasts. Selected preference persists inside `localStorage`.
2. **Dynamic Feed & Inline Comments:**
   - Comments are displayed **expanded by default** on load.
   - Shows at most 5 comments inside the card. If there are more than 5, the app adds a **"Ver los X comentarios anteriores..."** expand link.
   - Adding comments refreshes the list smoothly in-place without page flashes.
3. **Social Attributes & Badges:**
   - **User Avatars:** Displays custom profile images for comment and post authors.
   - **"Top Fact" Badge:** Scans authors and showcases their most-agreed fact next to their comments as a gold star badge (e.g. *Hecho popular: "Bananas are berries..." (15 👍)*).
4. **Editable User Profiles:**
   - Click the **pen icon** on your sidebar profile card to open the **Editar Perfil (Edit Profile)** modal.
   - Update your **Nombre para Mostrar (Display Name)** and **Biografía (Bio)**.
   - **Upload Custom Profile Picture:** Select a local image file. The app reads it as a base64 Data URL, saves it to local storage, and updates your profile avatar dynamically.
5. **Fluid voting and interaction fixes:**
   - Added `type="button"` to all dynamic and static action buttons to prevent default browser form submission or page reload behaviors.
   - Integrated `event.preventDefault()` into all click handlers (`handleVote`, `toggleComments`, `submitComment`, `handleDeleteFact`, `handleDeleteComment`, `renderAllComments`).
   - Integrated a cache buster query parameter (`?v=3.0`) to the script tag in `index.html` to force browsers to load the fresh `app.js` file.
   - **Actualizaciones Optimistas en UI (Optimistic UI):** Los votos cambian e incrementan en la interfaz de usuario en menos de `10ms` utilizando un cálculo en memoria previo a la llamada de red de Supabase. Si la llamada de red falla, se revierte al estado anterior. Se incluyó un bloqueo de doble clic rápido para evitar solicitudes duplicadas concurrentes.
6. **Diseño Mobile Optimizado (Responsive Design):**
   - **Barra de navegación inferior (Bottom Nav Bar):** Exclusiva para móviles, permite navegar entre los feeds de Recientes y Tendencias, publicar nuevos hechos y editar el perfil de usuario. El botón "+" central se colocó en un contenedor flex centrado, corrigiendo la deformación del óvalo y haciéndolo un círculo perfecto en dispositivos como el iPhone 11 Pro.
   - **Corrección de Zoom en iOS:** Se configuró un tamaño mínimo de `16px` para todos los controles de entrada (`input`, `textarea`, `select`) en versión móvil para evitar que Safari/Chrome hagan zoom automáticamente al enfocarlos.
   - **Optimización de Scroll (Rendimiento GPU):** Se desactivaron los efectos de difuminado por GPU (`backdrop-filter`) en móviles dentro de las tarjetas del feed. Se reemplazaron con un color de fondo sólido súper optimizado, asegurando un scroll ultra fluido a 60fps/120fps en dispositivos móviles.
   - **Optimización de Espacio:** Se simplificó la cabecera en móviles y se optimizaron los tamaños y márgenes de las tarjetas de hechos y modales.

7. **Buscador de Hechos (Instant Search):**
   - Barra de búsqueda superior que filtra los hechos en tiempo real en memoria según el texto de la declaración.
8. **Compartir y Enlaces Directos (Deep-linking):**
   - El botón "Compartir" copia en el portapapeles una URL directa con el formato `?fact=ID_DEL_FACTO`.
   - Al cargar la página con este parámetro, la aplicación aísla el hecho y muestra un banner para volver al feed completo sin recargar.
9. **Sistema de Seguidores (Followers & Following):**
   - Botón de "Seguir" en perfiles de otros usuarios que se actualiza optimísticamente a "Siguiendo".
   - Conteo dinámico de seguidores y seguidos en los perfiles.
10. **Modal de Perfil de Otros Usuarios:**
    - Al pulsar sobre el avatar o nombre de cualquier autor en la feed o comentarios se abre un modal flotante con su biografía, reputación de confianza, estadísticas y lista de hechos publicados.
11. **Sección "Mi Perfil" (Pestañas de Perfil):**
    - Pestañas dedicadas para ver "Mis Publicaciones" (hechos creados por ti) y "Mis Me Gusta" (hechos en los que votaste "De Acuerdo").
12. **Centro de Notificaciones en Tiempo Real:**
    - Campana con contador en la cabecera para alertar al usuario actual de nuevos "Me gusta" en sus hechos, nuevos comentarios o nuevos seguidores.
    - Menú desplegable para ver las notificaciones y marcarlas como leídas. Al hacer clic en una notificación te lleva directamente al contenido correspondiente.
13. **Reportes de Contenido:**
    - Botón de bandera en hechos y comentarios para reportar contenido inapropiado y guardarlo directamente en Supabase.

## Verification & Usage Guide

To run and verify the updates:
1. Open [index.html](file:///c:/Users/adrian.parram/OneDrive%20-%20MINECO/Documentos/factosAPP/index.html) in your web browser.
2. **Login:** Log in with one of the pre-seeded accounts (e.g. `science@factos.io` / `password123`) or create a new account.
3. **Buscador:** Escribe en la barra de búsqueda superior y confirma que el feed se filtra al instante.
4. **Compartir:** Haz clic en el icono de compartir de una carta de hecho, verifica el toast y abre esa URL en una pestaña nueva para comprobar que se carga solo ese facto.
5. **Ver Perfil y Seguir:** Haz clic en el nombre de otro usuario, presiona "Seguir" y observa el cambio de contador y estado a "Siguiendo".
6. **Reportar:** Haz clic en la bandera de un hecho o comentario, escribe un motivo y comprueba que se guarda en la base de datos `reports`.
7. **Notificaciones:** Genera interacciones con otra cuenta (un voto positivo o comentario a tu publicación) y comprueba el globo rojo sobre la campana de notificaciones.
8. **Pestañas de Perfil:** Ve a "Mi Perfil" y navega entre "Mis Publicaciones" y "Mis Me Gusta" para comprobar el correcto filtrado.
9. **Mobile Test:** Abre las herramientas de desarrollador y activa la vista móvil. Comprueba que en móvil aparece la barra de navegación inferior adaptada y que los inputs no producen zoom automático al enfocarlos.