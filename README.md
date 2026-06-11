# Factos - Motor de Creencias Sociales (Edición Supabase)

**Factos** es una plataforma social de debate y curación de conocimientos diseñada para validar y discutir declaraciones colectivas. A diferencia de las redes sociales tradicionales, que optimizan su contenido basándose en el sensacionalismo y el conflicto, **Factos** reorienta la interacción social hacia la precisión de la información, el consenso de la comunidad y la credibilidad de las fuentes.

Este prototipo (MVP) está integrado con **Supabase** en la nube para permitir que múltiples usuarios inicien sesión, publiquen hechos y interactúen colaborativamente en tiempo real desde cualquier dispositivo.

---

## 🚀 Características Principales

### 1. Consenso Democrático de Creencias
En lugar de un simple botón de "Me gusta", cada publicación invita a los usuarios a posicionarse mediante un voto binario:
* **De Acuerdo (Agree):** Para respaldar la veracidad de la declaración.
* **En Desacuerdo (Disagree):** Para refutarla.
La aplicación muestra en tiempo real una **barra de ratio de consenso**, revelando el porcentaje exacto de aceptación de la comunidad.

### 2. Reputación Dinámica y Puntos de Confianza (Trust Score)
Cada miembro cuenta con una puntuación de reputación pública (de 0 a 100 puntos):
* Publicar hechos que logran un alto índice de acuerdo verdadero premia al autor subiendo su reputación.
* Compartir hechos que son ampliamente rechazados o reportados por falsedad reduce su puntuación.
* Comentar e interactuar de forma constructiva otorga pequeñas bonificaciones de participación.

### 3. Debate Contextualizado y Hilos de Opinión
La sección de comentarios está expandida por defecto para incentivar el debate inmediato:
* **Avatares Personalizados:** Identificación visual rápida de los participantes.
* **Insignia de Hecho Destacado:** Al lado del nombre de cada usuario en los comentarios, se muestra de forma automática su hecho publicado más exitoso (*ej. Hecho popular: "Los plátanos son bayas..." (15 👍)*), lo que añade contexto y autoridad a sus opiniones.
* **Límite de Visualización:** Muestra de forma limpia los últimos 5 comentarios, ofreciendo un botón para expandir el historial completo sin sobrecargar la pantalla.

### 4. Perfil Editable y Personalización Completa
Los usuarios pueden gestionar su identidad desde el panel lateral:
* Modificación de Nombre para Mostrar y Biografía.
* Carga de imágenes de perfil directamente desde el ordenador (almacenadas en la tabla `profiles` como imágenes en base64 de alto rendimiento).

### 5. Interfaz Multilingüe y Estética Premium
* Soporte nativo en **Español** como idioma principal, con un conmutador rápido a **Inglés** en la cabecera.
* Diseño visual avanzado con **glassmorphism** (efecto de cristal esmerilado), modo oscuro inmersivo, y micro-animaciones fluidas para una experiencia de usuario sumamente agradable.

---

## 🛠️ Estructura y Configuración de Supabase

La aplicación almacena los datos de forma remota en la base de datos de **Supabase** utilizando las siguientes tablas y triggers:

### 1. Tablas de Base de Datos (PostgreSQL)
* **`profiles`**: Almacena el perfil público de los usuarios registrados (Nombre de visualización, nombre de usuario, biografía, reputación e imagen de perfil). Está vinculado al sistema de autenticación seguro de Supabase.
* **`facts`**: Almacena los hechos publicados, las categorías y el acumulado de votos de acuerdo/desacuerdo.
* **`votes`**: Tabla relacional con clave primaria compuesta `(user_id, fact_id)` para asegurar que cada usuario vote una sola vez por declaración.
* **`comments`**: Hilos de debate de cada hecho.

### 2. Sincronización Automática de Perfiles
Se ha establecido un disparador (trigger) en la base de datos de PostgreSQL para crear automáticamente un perfil público en la tabla `profiles` en cuanto un usuario nuevo se registra a través de Supabase Auth:
```sql
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

---

## 💻 Guía de Configuración e Inicio

### Paso 1: Configurar Base de Datos en Supabase
1. Ve a tu proyecto de **[Supabase](https://supabase.com)**.
2. Abre la pestaña **SQL Editor** $\rightarrow$ **New Query**.
3. Pega el script de base de datos provisto en el [Plan de Implementación](file:///C:/Users/adrian.parram/.gemini/antigravity/brain/1bad9268-74e9-40e4-91c9-e0346f70d7bd/implementation_plan.md#L17-L73) y haz clic en **Run** (Ejecutar). Esto creará las tablas de datos y los triggers necesarios.

### Paso 2: Ejecutar la Aplicación
1. Abre **`index.html`** haciendo doble clic sobre él en tu explorador de archivos.
2. La aplicación detectará que no se ha configurado la conexión y te presentará una **pantalla de configuración de Supabase**.
3. Introduce los siguientes datos (los puedes encontrar en tu panel de control de Supabase en la sección *Project Settings* $\rightarrow$ *API*):
   * **Supabase Project URL** (ej. `https://xxxxxx.supabase.co`)
   * **Supabase Anon Key** (tu clave de API pública anon)
4. Haz clic en **Conectar Proyecto**. La aplicación se conectará a tu base de datos remota en la nube y te llevará a la pantalla de inicio de sesión de forma persistente.
5. **Autenticación:** ¡Crea cuentas de prueba en la pestaña "Registrarse"! El correo no requiere confirmación real (puedes usar correos inventados como `test@factos.io` para realizar pruebas de acceso inmediatas).
