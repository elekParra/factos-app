// Localization System Dictionary
const translations = {
  es: {
    brand_subtitle: "Verifica las creencias que dan forma al mundo",
    login_tab: "Iniciar Sesión",
    signup_tab: "Registrarse",
    reg_name_label: "Nombre para Mostrar",
    reg_name_placeholder: "Juan Pérez",
    reg_username_label: "Nombre de Usuario",
    reg_username_placeholder: "juanperez",
    email_label: "Correo Electrónico",
    email_placeholder: "nombre@dominio.com",
    password_label: "Contraseña",
    password_placeholder: "••••••••",
    btn_login: "Iniciar Sesión",
    btn_signup: "Crear Cuenta",
    footer_text: "Protegido por pautas de verificación descentralizadas.",
    logout_title: "Cerrar Sesión",
    trust_label: "Reputación de Confianza",
    nav_recent: "Recientes",
    nav_trending: "Tendencias",
    feed_title_recent: "Factos Recientes",
    feed_title_trending: "Tendencias Populares",
    btn_post_trigger: "Publicar Facto",
    modal_title: "Publicar un Nuevo Facto",
    label_statement: "Declaración",
    placeholder_statement: "Escribe una declaración clara que represente algo que mucha gente cree que es verdad...",
    label_citation: "URL de la Fuente de Citación",
    placeholder_citation: "https://ejemplo.com/fuente-creible",
    label_category: "Categoría",
    btn_cancel: "Cancelar",
    btn_publish: "Publicar",
    
    // Toasts
    toast_welcome: "¡Bienvenido de nuevo, {name}!",
    toast_created: "¡Cuenta creada con éxito!",
    toast_logout: "Sesión cerrada con éxito.",
    toast_fact_published: "¡Facto publicado con éxito!",
    toast_vote_updated: "¡Voto registrado!",
    toast_comment_posted: "¡Comentario publicado!",
    toast_comments: "Comentario publicado",
    toast_err_url: "Por favor, proporciona una URL de citación HTTP/HTTPS válida.",
    toast_err_statement: "La declaración es demasiado corta. Sé más descriptivo.",
    toast_err_fields: "Por favor, completa todos los campos requeridos.",
    toast_err_auth: "Email o contraseña incorrectos.",
    
    // Feed UI Elements
    evidence_citation: "Evidencia de Citación",
    agree: "De Acuerdo",
    disagree: "En Desacuerdo",
    comments_toggle_label: "{count} Comentarios",
    comment_placeholder: "Escribe un argumento o pregunta...",
    comment_btn: "Publicar",
    no_comments: "No hay comentarios aún. Escribe un argumento constructivo.",
    empty_feed: "No se han subido factos todavía. ¡Sé el primero en publicar una declaración verificada!",
    
    // Categories
    cat_general: "General",
    cat_science: "Ciencia y Tecnología",
    cat_history: "Historia",
    cat_geopolitics: "Geopolítica",
    cat_health: "Salud y Medicina",
    edit_profile_title: "Editar Perfil",
    edit_profile_modal_title: "Editar Perfil",
    upload_avatar_btn: "Subir Imagen",
    bio_label: "Biografía",
    btn_save: "Guardar",
    toast_profile_updated: "¡Perfil actualizado con éxito!",

    // New features translation keys
    search_placeholder: "Buscar factos...",
    notifications_title: "Notificaciones",
    mark_all_read: "Marcar leídas",
    no_notifications: "No tienes notificaciones",
    user_facts_title: "Publicaciones",
    profile_tab_title: "Mi Perfil",
    my_posts_tab: "Mis Publicaciones",
    my_likes_tab: "Mis Me Gusta",
    shared_fact_notice: "Viendo un facto compartido directo",
    btn_view_all: "Ver todo el feed",
    follow: "Seguir",
    following: "Siguiendo",
    btn_google: "Iniciar con Google",
    guest_cta_title: "¿Eres nuevo en Factos?",
    guest_cta_desc: "Únete para poder verificar declaraciones, votar consensus, seguir a otros y reportar contenido.",
    guest_banner_title: "¿Quieres participar en Factos?",
    guest_banner_desc: "Crea una cuenta o inicia sesión con Google para votar, comentar y publicar declaraciones.",
    username_setup_title: "Configura tu Nombre de Usuario",
    username_setup_desc: "Para completar tu registro, por favor elige un nombre de usuario único para tu cuenta de Factos.",
    btn_save_continue: "Guardar y Continuar",
    toast_username_taken: "Este nombre de usuario ya está en uso. Elige otro.",
    toast_username_invalid: "El nombre de usuario contiene caracteres no válidos.",
    change_theme_title: "Cambiar Tema",
    guest_bottom_banner_text: "¿Quieres participar? Inicia sesión o regístrate para votar y comentar."
  },
  en: {
    brand_subtitle: "Verify the beliefs that shape the world",
    login_tab: "Login",
    signup_tab: "Sign Up",
    reg_name_label: "Display Name",
    reg_name_placeholder: "John Doe",
    reg_username_label: "Username",
    reg_username_placeholder: "johndoe",
    email_label: "Email Address",
    email_placeholder: "name@domain.com",
    password_label: "Password",
    password_placeholder: "••••••••",
    btn_login: "Sign In",
    btn_signup: "Create Account",
    footer_text: "Protected by decentralized verification guidelines.",
    logout_title: "Logout",
    trust_label: "Trust Reputation",
    nav_recent: "Recent Feed",
    nav_trending: "Trending Hot",
    feed_title_recent: "Recent Facts",
    feed_title_trending: "Trending Hot",
    btn_post_trigger: "Post Fact",
    modal_title: "Publish a New Fact",
    label_statement: "Statement",
    placeholder_statement: "Write a clear statement representing something many people believe to be true...",
    label_citation: "Source Citation URL",
    placeholder_citation: "https://example.com/credible-source",
    label_category: "Category",
    btn_cancel: "Cancel",
    btn_publish: "Publish",
    
    // Toasts
    toast_welcome: "Welcome back, {name}!",
    toast_created: "Account created successfully!",
    toast_logout: "Logged out successfully.",
    toast_fact_published: "Fact published successfully!",
    toast_vote_updated: "Vote recorded!",
    toast_comment_posted: "Comment posted!",
    toast_comments: "Comment posted",
    toast_err_url: "Please supply a valid HTTP/HTTPS citation URL.",
    toast_err_statement: "Statement is too short. Be more descriptive.",
    toast_err_fields: "Please fill in all required fields.",
    toast_err_auth: "Invalid email or password.",
    
    // Feed UI Elements
    evidence_citation: "Evidence Citation",
    agree: "Agree",
    disagree: "Disagree",
    comments_toggle_label: "{count} Comments",
    comment_placeholder: "Type an argument or query...",
    comment_btn: "Post",
    no_comments: "No comments yet. Write a constructive argument.",
    empty_feed: "No facts uploaded yet. Be the first to publish a verified statement!",
    
    // Categories
    cat_general: "General",
    cat_science: "Science & Tech",
    cat_history: "History",
    cat_geopolitics: "Geopolitics",
    cat_health: "Health & Medicine",
    edit_profile_title: "Edit Profile",
    edit_profile_modal_title: "Edit Profile",
    upload_avatar_btn: "Upload Image",
    bio_label: "Biography",
    btn_save: "Save",
    toast_profile_updated: "Profile updated successfully!",
 
    // New features translation keys
    search_placeholder: "Search facts...",
    notifications_title: "Notifications",
    mark_all_read: "Mark all read",
    no_notifications: "No notifications",
    user_facts_title: "Posts",
    profile_tab_title: "My Profile",
    my_posts_tab: "My Posts",
    my_likes_tab: "My Likes",
    shared_fact_notice: "Viewing a shared direct fact",
    btn_view_all: "View all feed",
    follow: "Follow",
    following: "Following",
    btn_google: "Sign in with Google",
    guest_cta_title: "New to Factos?",
    guest_cta_desc: "Join to verify statements, vote consensus, follow creators, and report content.",
    guest_banner_title: "Want to participate in Factos?",
    guest_banner_desc: "Create an account or sign in with Google to vote, comment, and post statements.",
    username_setup_title: "Set Your Username",
    username_setup_desc: "To complete your registration, please choose a unique username for your Factos account.",
    btn_save_continue: "Save & Continue",
    toast_username_taken: "This username is already taken. Please choose another.",
    toast_username_invalid: "Username contains invalid characters.",
    change_theme_title: "Change Theme",
    guest_bottom_banner_text: "Want to participate? Sign in or sign up to vote and comment."
  }
};

// Global application state
let currentLang = localStorage.getItem('factos_lang') || 'es';
let currentTheme = localStorage.getItem('factos_theme') || 'space-cyber';
document.documentElement.className = `theme-${currentTheme}`;

let currentFeedTab = 'recent'; // 'recent' or 'trending'
let currentAuthMode = 'login'; // 'login' or 'signup'
let searchQuery = '';
let currentSharedFactId = null;
let currentProfileSubTab = 'posts';
let selectedProfileId = null;
let feedRenderGeneration = 0;
let profileRenderGeneration = 0;

// Supabase configuration parameters (puedes dejarlos en blanco aquí; la App te los pedirá en pantalla si faltan)
let SUPABASE_URL = "https://sjavtotrtmuwltlhship.supabase.co";
let SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqYXZ0b3RydG11d2x0bGhzaGlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA4NzM2NTYsImV4cCI6MjA5NjQ0OTY1Nn0.wbIlQ9pbjDdZMB4ho4FDwRLzKbe0GMYsD_3IQExsIwk";
let supabaseClient = null;

// Initialize Supabase Client
function initSupabase() {
  const url = SUPABASE_URL || localStorage.getItem('factos_supabase_url');
  const key = SUPABASE_ANON_KEY || localStorage.getItem('factos_supabase_key');
  if (url && key) {
    supabaseClient = supabase.createClient(url, key);
    return true;
  }
  return false;
}

// App bootstrapping on DOM Load
document.addEventListener('DOMContentLoaded', async () => {
  // Sync theme toggle buttons
  changeTheme(currentTheme);

  const isConnected = initSupabase();
  if (!isConnected) {
    switchToConfigView();
    applyTranslations();
  } else {
    // Parse deep link shared fact
    const urlParams = new URLSearchParams(window.location.search);
    const factParam = urlParams.get('fact');
    if (factParam) {
      currentSharedFactId = factParam;
      const banner = document.getElementById('shared-fact-banner');
      if (banner) banner.classList.remove('hidden');
    }
    
    // Check for active session
    try {
      const { data: { session } } = await supabaseClient.auth.getSession();
      if (session) {
        // Fetch public profile details
        const { data: profile } = await supabaseClient.from('profiles').select('*').eq('id', session.user.id).single();
        if (profile) {
          window.currentUser = profile;
          sessionStorage.setItem('factos_session', JSON.stringify(profile));
          
          // Check if username setup is needed (e.g. OAuth signup without username chosen)
          if (!session.user.user_metadata || !session.user.user_metadata.username_setup_completed) {
            setTimeout(() => {
              openUsernameSetupModal();
            }, 100);
          }
        } else {
          window.currentUser = null;
        }
      } else {
        window.currentUser = null;
      }
    } catch(e) {
      window.currentUser = null;
    }
    
    // Always switch to app view (guests can browse now!)
    switchToAppView();
  }
});

// View states switches
function switchToConfigView() {
  document.getElementById('config-screen').classList.remove('hidden');
  document.getElementById('auth-screen').classList.add('hidden');
  document.getElementById('app-screen').classList.add('hidden');
}

function switchToAuthView() {
  document.getElementById('config-screen').classList.add('hidden');
  document.getElementById('auth-screen').classList.remove('hidden');
  document.getElementById('app-screen').classList.add('hidden');
  switchAuthTab('login');
}

function switchToAppView() {
  document.getElementById('config-screen').classList.add('hidden');
  document.getElementById('auth-screen').classList.add('hidden');
  document.getElementById('app-screen').classList.remove('hidden');
  
  updateUserProfileUI();
  applyTranslations(); // renders feed with appropriate localization keys
  
  // Initial notifications fetch
  if (window.currentUser) {
    loadNotifications();
  }
}

// Handles saving Supabase configuration from screen
function handleSaveConfig(event) {
  event.preventDefault();
  const url = document.getElementById('config-url').value.trim();
  const key = document.getElementById('config-key').value.trim();
  
  try {
    new URL(url);
    localStorage.setItem('factos_supabase_url', url);
    localStorage.setItem('factos_supabase_key', key);
    
    if (initSupabase()) {
      showToast("Conexión con Supabase establecida!");
      switchToAuthView();
    } else {
      showToast("Error al inicializar cliente. Revisa tus claves.", true);
    }
  } catch(e) {
    showToast("Por favor, introduce una URL de proyecto válida.", true);
  }
}

// Language trigger switch
function changeLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('factos_lang', lang);
  applyTranslations();
}

// Theme trigger switch
function changeTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('factos_theme', theme);
  document.documentElement.className = `theme-${theme}`;
  
  // Sync all theme toggle buttons
  const themeIcons = {
    'space-cyber': '🌌',
    'deep-oceanic': '🌊',
    'nordic-forest': '🌲'
  };
  const themeNames = {
    'space-cyber': { es: 'Space Cyber', en: 'Space Cyber' },
    'deep-oceanic': { es: 'Deep Oceanic', en: 'Deep Oceanic' },
    'nordic-forest': { es: 'Nordic Forest', en: 'Nordic Forest' }
  };
  
  const icon = themeIcons[theme] || '🌌';
  const name = themeNames[theme] ? themeNames[theme][currentLang] : 'Space Cyber';
  
  document.querySelectorAll('.theme-toggle-icon').forEach(el => {
    el.textContent = icon;
  });
  document.querySelectorAll('.theme-toggle-text').forEach(el => {
    el.textContent = name;
  });
}

function toggleThemeNext() {
  const themesList = ['space-cyber', 'deep-oceanic', 'nordic-forest'];
  let nextIndex = (themesList.indexOf(currentTheme) + 1) % themesList.length;
  if (nextIndex === -1) nextIndex = 0;
  changeTheme(themesList[nextIndex]);
}

function applyTranslations() {
  const dict = translations[currentLang];
  
  // 1. Text tags
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      const icon = el.querySelector('i');
      if (icon) {
        el.innerHTML = '';
        el.appendChild(icon);
        el.appendChild(document.createTextNode(' ' + dict[key]));
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // 2. Input placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // 3. Title attributes
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (dict[key]) {
      el.title = dict[key];
    }
  });

  // 4. Auth triggers
  const authBtn = document.getElementById('auth-btn');
  if (authBtn) {
    authBtn.textContent = currentAuthMode === 'login' ? dict.btn_login : dict.btn_signup;
  }
  const toggleBtn = document.getElementById('auth-toggle-btn');
  if (toggleBtn) {
    toggleBtn.textContent = currentAuthMode === 'login' ? dict.signup_tab : dict.login_tab;
  }
  const dividerText = document.getElementById('auth-divider-text');
  if (dividerText) {
    if (currentAuthMode === 'login') {
      dividerText.textContent = currentLang === 'es' ? 'o inicia sesión' : 'or sign in';
    } else {
      dividerText.textContent = currentLang === 'es' ? 'o crea tu cuenta' : 'or create account';
    }
  }
  
  // Modal auth triggers
  const modalAuthBtn = document.getElementById('modal-auth-btn');
  if (modalAuthBtn) {
    modalAuthBtn.textContent = currentModalAuthMode === 'login' ? dict.btn_login : dict.btn_signup;
  }
  const modalToggleBtn = document.getElementById('modal-auth-toggle-btn');
  if (modalToggleBtn) {
    modalToggleBtn.textContent = currentModalAuthMode === 'login' ? dict.signup_tab : dict.login_tab;
  }
  const modalDividerText = document.getElementById('modal-auth-divider-text');
  if (modalDividerText) {
    if (currentModalAuthMode === 'login') {
      modalDividerText.textContent = currentLang === 'es' ? 'o inicia sesión' : 'or sign in';
    } else {
      modalDividerText.textContent = currentLang === 'es' ? 'o crea tu cuenta' : 'or create account';
    }
  }

  // 5. Feed header title
  const feedTitle = document.getElementById('feed-header-title');
  if (feedTitle) {
    feedTitle.textContent = currentFeedTab === 'recent' ? dict.feed_title_recent : dict.feed_title_trending;
  }

  // Sync lang selects
  document.querySelectorAll('.lang-select').forEach(select => {
    select.value = currentLang;
  });
  
  // Update theme toggle buttons with translated names
  const themeNames = {
    'space-cyber': { es: 'Space Cyber', en: 'Space Cyber' },
    'deep-oceanic': { es: 'Deep Oceanic', en: 'Deep Oceanic' },
    'nordic-forest': { es: 'Nordic Forest', en: 'Nordic Forest' }
  };
  const name = themeNames[currentTheme] ? themeNames[currentTheme][currentLang] : 'Space Cyber';
  document.querySelectorAll('.theme-toggle-text').forEach(el => {
    el.textContent = name;
  });
  
  // Re-render feed
  renderFeed();
}

// Helper to escape values and shield from XSS
function escapeHTML(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}

// Avatar drawing component with initials fallback
function getAvatarHTML(user, size = 32) {
  if (!user) return '';
  const name = user.display_name || user.username || '?';
  const initials = escapeHTML(name.charAt(0).toUpperCase());
  if (user.avatar_url) {
    return `<img src="${escapeHTML(user.avatar_url)}" alt="${escapeHTML(name)}" style="width: ${size}px; height: ${size}px; border-radius: 50%; object-fit: cover; border: 1px solid var(--border-color); display: block; flex-shrink: 0;" />`;
  }
  return `<div class="fact-author-avatar" style="width: ${size}px; height: ${size}px; font-size: ${size * 0.4}px; display: flex; align-items: center; justify-content: center; font-weight: 700; color: white; background: linear-gradient(135deg, var(--primary), var(--secondary)); border-radius: 50%; flex-shrink: 0;">${initials}</div>`;
}

// Toast alerts
function showToast(messageKey, isError = false, replaceParam = null) {
  const toast = document.getElementById('toast-msg');
  const icon = document.getElementById('toast-icon');
  const text = document.getElementById('toast-text');
  
  let rawText = translations[currentLang][messageKey] || messageKey;
  if (replaceParam) {
    rawText = rawText.replace('{name}', replaceParam);
  }
  
  text.textContent = rawText;
  toast.className = `toast-msg show ${isError ? 'error' : 'success'}`;
  icon.className = `fa-solid ${isError ? 'fa-circle-exclamation' : 'fa-circle-check'}`;
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Auth screen toggling
function switchAuthTab(mode) {
  currentAuthMode = mode;
  const signupFields = document.getElementById('signup-fields');
  const authBtn = document.getElementById('auth-btn');
  const toggleBtn = document.getElementById('auth-toggle-btn');
  const dividerText = document.getElementById('auth-divider-text');
  const dict = translations[currentLang];
  
  document.getElementById('auth-form').reset();
  
  if (mode === 'login') {
    if (signupFields) signupFields.classList.add('hidden');
    if (authBtn) authBtn.textContent = dict.btn_login;
    if (toggleBtn) toggleBtn.textContent = dict.signup_tab;
    if (dividerText) dividerText.textContent = currentLang === 'es' ? 'o inicia sesión' : 'or sign in';
  } else {
    if (signupFields) signupFields.classList.remove('hidden');
    if (authBtn) authBtn.textContent = dict.btn_signup;
    if (toggleBtn) toggleBtn.textContent = dict.login_tab;
    if (dividerText) dividerText.textContent = currentLang === 'es' ? 'o crea tu cuenta' : 'or create account';
  }
}

function toggleAuthMode() {
  const nextMode = currentAuthMode === 'login' ? 'signup' : 'login';
  switchAuthTab(nextMode);
}

// Handle Form Submission for Remote Sign In / Sign Up
async function handleAuthSubmit(event) {
  event.preventDefault();
  
  const email = document.getElementById('auth-email').value.trim();
  const password = document.getElementById('auth-password').value;
  
  try {
    if (currentAuthMode === 'signup') {
      const displayName = document.getElementById('reg-name').value.trim();
      const username = document.getElementById('reg-username').value.trim().toLowerCase().replace(/[^a-zA-Z0-9_]/g, '');
      
      if (!displayName || !username) {
        throw new Error(currentLang === 'es' ? "Por favor completa todos los campos" : "Please fill in all fields");
      }
      
      const { data, error } = await supabaseClient.auth.signUp({
        email,
        password,
        options: {
          data: {
            username: username,
            display_name: displayName,
            username_setup_completed: true
          }
        }
      });
      if (error) throw error;
      
      showToast(currentLang === 'es' ? "¡Registro completado! Por favor, inicia sesión." : "Sign up successful! Please log in.");
      switchAuthTab('login');
    } else {
      // Iniciar sesión
      const { data, error } = await supabaseClient.auth.signInWithPassword({
        email,
        password
      });
      if (error) throw error;
      
      // Fetch public profile record
      const { data: profile, error: pe } = await supabaseClient.from('profiles').select('*').eq('id', data.user.id).single();
      if (pe || !profile) {
        throw new Error(currentLang === 'es' ? "Perfil público no encontrado en base de datos." : "Public profile not found in DB.");
      }
      
      window.currentUser = profile;
      sessionStorage.setItem('factos_session', JSON.stringify(profile));
      showToast("toast_welcome", false, profile.display_name);
      switchToAppView();
    }
  } catch (err) {
    showToast(err.message, true);
  }
}

async function handleGoogleSignIn(event) {
  if (event) event.preventDefault();
  if (!supabaseClient) {
    showToast("Supabase no está inicializado", true);
    return;
  }
  try {
    const { error } = await supabaseClient.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin + window.location.pathname
      }
    });
    if (error) throw error;
  } catch (err) {
    showToast(err.message, true);
  }
}

async function logout() {
  try {
    await supabaseClient.auth.signOut();
  } catch(e) {}
  sessionStorage.removeItem('factos_session');
  window.currentUser = null;
  switchToAuthView();
  showToast("toast_logout");
}

// Dynamic Profile View Sync
function updateUserProfileUI() {
  // Reset scroll-reactive bottom nav layouts
  const bottomNav = document.querySelector('.bottom-nav');
  const guestBottomBanner = document.getElementById('guest-bottom-banner');
  if (bottomNav) bottomNav.classList.remove('slide-down');
  if (guestBottomBanner) guestBottomBanner.classList.remove('slide-up');

  const profileCard = document.getElementById('sidebar-profile-card');
  const guestCard = document.getElementById('sidebar-guest-card');
  const userActions = document.getElementById('header-user-actions');
  const guestActions = document.getElementById('header-guest-actions');
  const profileNav = document.getElementById('nav-profile');
  const bottomProfileNav = document.getElementById('bottom-nav-profile');
  const bellContainer = document.querySelector('.notification-bell-container');
  const guestBanner = document.getElementById('guest-feed-banner');
  
  const notificationsNav = document.getElementById('nav-notifications');
  const bottomNotificationsNav = document.getElementById('bottom-nav-notifications');
  
  if (!window.currentUser) {
    // Guest mode layout configuration
    if (profileCard) profileCard.classList.add('hidden');
    if (guestCard) guestCard.classList.remove('hidden');
    if (userActions) userActions.classList.add('hidden');
    if (guestActions) guestActions.classList.remove('hidden');
    if (profileNav) profileNav.classList.add('hidden');
    if (bottomProfileNav) bottomProfileNav.classList.add('hidden');
    if (notificationsNav) notificationsNav.classList.add('hidden');
    if (bottomNotificationsNav) bottomNotificationsNav.classList.add('hidden');
    if (bellContainer) bellContainer.classList.add('hidden');
    
    if (guestBanner && !sessionStorage.getItem('factos_guest_banner_dismissed')) {
      guestBanner.classList.remove('hidden');
    }
    return;
  }
  
  // Logged in user configuration
  if (profileCard) profileCard.classList.remove('hidden');
  if (guestCard) guestCard.classList.add('hidden');
  if (userActions) userActions.classList.remove('hidden');
  if (guestActions) guestActions.classList.add('hidden');
  if (profileNav) profileNav.classList.remove('hidden');
  if (bottomProfileNav) bottomProfileNav.classList.remove('hidden');
  if (notificationsNav) notificationsNav.classList.remove('hidden');
  if (bottomNotificationsNav) bottomNotificationsNav.classList.remove('hidden');
  if (bellContainer) bellContainer.classList.remove('hidden');
  if (guestBanner) guestBanner.classList.add('hidden');
  
  const nameElements = [
    document.getElementById('user-display-name'),
    document.getElementById('profile-display-name')
  ];
  nameElements.forEach(el => {
    if (el) el.textContent = window.currentUser.display_name;
  });
  
  const profileHandle = document.getElementById('profile-handle');
  if (profileHandle) profileHandle.textContent = `@${window.currentUser.username}`;
  
  const profileBio = document.getElementById('profile-bio');
  if (profileBio) profileBio.textContent = window.currentUser.bio || '';
  
  const formattedScore = parseFloat(window.currentUser.trust_score || 50).toFixed(2);
  const userTrustMini = document.getElementById('user-trust-mini');
  if (userTrustMini) userTrustMini.textContent = formattedScore;
  
  const profileTrust = document.getElementById('profile-trust');
  if (profileTrust) profileTrust.textContent = formattedScore;
  
  const avatarContainer = document.getElementById('profile-avatar-container');
  if (avatarContainer) avatarContainer.innerHTML = getAvatarHTML(window.currentUser, 70);
  
  const miniAvatarContainer = document.getElementById('user-avatar-mini-container');
  if (miniAvatarContainer) miniAvatarContainer.innerHTML = getAvatarHTML(window.currentUser, 28);
  
  const trustBar = document.getElementById('profile-trust-bar');
  if (trustBar) trustBar.style.width = `${window.currentUser.trust_score || 50}%`;
}

// Switch Feed categories
function switchFeedTab(tab) {
  currentFeedTab = tab;
  
  const recentNav = document.getElementById('nav-recent');
  const trendingNav = document.getElementById('nav-trending');
  const notificationsNav = document.getElementById('nav-notifications');
  const profileNav = document.getElementById('nav-profile');
  
  const bottomRecent = document.getElementById('bottom-nav-recent');
  const bottomTrending = document.getElementById('bottom-nav-trending');
  const bottomNotifications = document.getElementById('bottom-nav-notifications');
  const bottomProfile = document.getElementById('bottom-nav-profile');
  
  const feedTitle = document.getElementById('feed-header-title');
  const dict = translations[currentLang];
  
  // Update active class on nav elements
  [recentNav, trendingNav, notificationsNav, profileNav].forEach(el => el && el.classList.remove('active'));
  [bottomRecent, bottomTrending, bottomNotifications, bottomProfile].forEach(el => el && el.classList.remove('active'));
  
  const feedHeader = document.getElementById('feed-header-wrapper');
  const searchBar = document.getElementById('search-bar-container');
  const factsFeed = document.getElementById('facts-feed');
  const userProfileView = document.getElementById('user-profile-view');
  const notificationsView = document.getElementById('notifications-view');
  
  if (tab === 'recent') {
    if (recentNav) recentNav.classList.add('active');
    if (bottomRecent) bottomRecent.classList.add('active');
    if (feedTitle) feedTitle.textContent = dict.feed_title_recent;
    
    if (feedHeader) feedHeader.classList.remove('hidden');
    if (searchBar) searchBar.classList.remove('hidden');
    if (factsFeed) factsFeed.classList.remove('hidden');
    if (userProfileView) userProfileView.classList.add('hidden');
    if (notificationsView) notificationsView.classList.add('hidden');
    
    renderFeed();
  } else if (tab === 'trending') {
    if (trendingNav) trendingNav.classList.add('active');
    if (bottomTrending) bottomTrending.classList.add('active');
    if (feedTitle) feedTitle.textContent = dict.feed_title_trending;
    
    if (feedHeader) feedHeader.classList.remove('hidden');
    if (searchBar) searchBar.classList.remove('hidden');
    if (factsFeed) factsFeed.classList.remove('hidden');
    if (userProfileView) userProfileView.classList.add('hidden');
    if (notificationsView) notificationsView.classList.add('hidden');
    
    renderFeed();
  } else if (tab === 'profile') {
    if (profileNav) profileNav.classList.add('active');
    if (bottomProfile) bottomProfile.classList.add('active');
    
    if (feedHeader) feedHeader.classList.add('hidden');
    if (searchBar) searchBar.classList.add('hidden');
    if (factsFeed) factsFeed.classList.add('hidden');
    if (userProfileView) userProfileView.classList.remove('hidden');
    if (notificationsView) notificationsView.classList.add('hidden');
    
    renderMyProfileView();
  } else if (tab === 'notifications') {
    if (notificationsNav) notificationsNav.classList.add('active');
    if (bottomNotifications) bottomNotifications.classList.add('active');
    
    if (feedHeader) feedHeader.classList.add('hidden');
    if (searchBar) searchBar.classList.add('hidden');
    if (factsFeed) factsFeed.classList.add('hidden');
    if (userProfileView) userProfileView.classList.add('hidden');
    if (notificationsView) notificationsView.classList.remove('hidden');
    
    loadNotifications();
  }
}

// Relative times formatters
function formatRelativeTime(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now - date;
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHr = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHr / 24);

  const isEs = currentLang === 'es';

  if (diffSec < 60) return isEs ? "Hace un momento" : "Just now";
  if (diffMin < 60) return isEs ? `Hace ${diffMin}m` : `${diffMin}m ago`;
  if (diffHr < 24) return isEs ? `Hace ${diffHr}h` : `${diffHr}h ago`;
  return isEs ? `Hace ${diffDay}d` : `${diffDay}d ago`;
}

// Fetch and render facts dynamically from Supabase
async function renderFeed() {
  feedRenderGeneration++;
  const localGeneration = feedRenderGeneration;

  const feedContainer = document.getElementById('facts-feed');
  feedContainer.innerHTML = `
    <div style="text-align: center; padding: 40px; color: var(--text-muted);">
      <i class="fa-solid fa-spinner fa-spin" style="font-size: 2rem; color: var(--primary); margin-bottom: 15px;"></i>
      <p>${currentLang === 'es' ? 'Descargando declaraciones...' : 'Fetching statements...'}</p>
    </div>
  `;
  
  if (!supabaseClient) return;
  
  try {
    // 1. Fetch recent facts with profiles join, ordered and limited to 50 for max speed
    const { data: facts, error } = await supabaseClient
      .from('facts')
      .select('*, profiles!user_id(*)')
      .order('created_at', { ascending: false })
      .limit(50);
    
    if (localGeneration !== feedRenderGeneration) return;
    if (error) throw error;
    
    // 2. Fetch current user's votes
    let userVotes = [];
    if (window.currentUser) {
      const { data } = await supabaseClient
        .from('votes')
        .select('*')
        .eq('user_id', window.currentUser.id);
      
      if (localGeneration !== feedRenderGeneration) return;
      userVotes = data || [];
    }
    
    const dict = translations[currentLang];
    
    // Filter by search query
    let filteredFacts = facts || [];
    if (searchQuery) {
      filteredFacts = filteredFacts.filter(fact => 
        fact.statement.toLowerCase().includes(searchQuery)
      );
    }
    
    // Filter by shared fact ID
    if (currentSharedFactId) {
      filteredFacts = filteredFacts.filter(fact => fact.id === currentSharedFactId);
    }
    
    if (currentFeedTab === 'recent') {
      filteredFacts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    } else {
      // Trending Sort Formula (sorted ascendingly "de menor a mayor")
      filteredFacts.sort((a, b) => {
        const getScore = (f) => {
          const totalActivity = f.agree_count + f.disagree_count + (f.comment_count * 1.5);
          const ageHours = (new Date() - new Date(f.created_at)) / (1000 * 60 * 60);
          return totalActivity / Math.pow(ageHours + 2, 1.2);
        };
        return getScore(a) - getScore(b);
      });
    }

    // 3. Batch fetch all comments for these facts in a single request to resolve N+1 comments query problems
    const factIds = filteredFacts.map(f => f.id);
    let commentsData = [];
    if (factIds.length > 0) {
      const { data: comments, error: ce } = await supabaseClient
        .from('comments')
        .select('*, profiles!user_id(*)')
        .in('fact_id', factIds)
        .order('created_at', { ascending: true });
        
      if (localGeneration !== feedRenderGeneration) return;
      if (!ce) {
        commentsData = comments || [];
      }
    }
    
    // Group preloaded comments by fact_id
    const commentsByFact = {};
    commentsData.forEach(c => {
      if (!commentsByFact[c.fact_id]) {
        commentsByFact[c.fact_id] = [];
      }
      commentsByFact[c.fact_id].push(c);
    });

    feedContainer.innerHTML = '';
    
    if (filteredFacts.length === 0) {
      feedContainer.innerHTML = `
        <div class="glass-panel" style="padding: 40px; text-align: center; color: var(--text-muted);">
          <i class="fa-solid fa-folder-open" style="font-size: 2.5rem; margin-bottom: 15px; color: var(--primary);"></i>
          <p>${dict.empty_feed}</p>
        </div>
      `;
      return;
    }

    // Resolve card rendering HTML promises in parallel with preloaded comments
    const cardPromises = filteredFacts.map(async (fact) => {
      const userVote = userVotes ? userVotes.find(v => v.fact_id === fact.id) : null;
      const preloadedComments = commentsByFact[fact.id] || [];
      const cardHTML = await buildFactCardHTML(fact, userVote, dict, preloadedComments);
      return { fact, cardHTML };
    });
    
    const renderedCards = await Promise.all(cardPromises);
    if (localGeneration !== feedRenderGeneration) return;
    
    feedContainer.innerHTML = '';
    for (const { fact, cardHTML } of renderedCards) {
      const card = document.createElement('article');
      card.className = 'glass-panel fact-card';
      card.innerHTML = cardHTML;
      feedContainer.appendChild(card);
    }
  } catch(err) {
    if (localGeneration === feedRenderGeneration) {
      showToast(err.message, true);
    }
  }
}

const mostLikedFactsCache = {};
// Fetch the user's highest rated fact
async function getMostLikedFact(userId) {
  if (!supabaseClient) return null;
  if (mostLikedFactsCache[userId] !== undefined) {
    return mostLikedFactsCache[userId];
  }
  try {
    const { data } = await supabaseClient
      .from('facts')
      .select('*')
      .eq('user_id', userId)
      .order('agree_count', { ascending: false })
      .limit(1);
    
    const result = data && data.length > 0 ? data[0] : null;
    mostLikedFactsCache[userId] = result;
    return result;
  } catch(e) {
    return null;
  }
}

// Compile comments asynchronously
async function buildCommentsHTML(factId, showAll = false, preloadedComments = null) {
  if (!supabaseClient) return '';
  
  const dict = translations[currentLang];
  
  try {
    let allComments = preloadedComments;
    if (!allComments) {
      const { data, error } = await supabaseClient
        .from('comments')
        .select('*, profiles!user_id(*)')
        .eq('fact_id', factId)
        .order('created_at', { ascending: true });
      if (error) throw error;
      allComments = data || [];
    }
    
    if (!allComments || allComments.length === 0) {
      return `<p style="font-size: 0.8rem; color: var(--text-muted); text-align: center; padding: 10px;">${dict.no_comments}</p>`;
    }

    let commentsToShow = allComments;
    let showMoreBtnHTML = '';
    
    if (!showAll && allComments.length > 5) {
      commentsToShow = allComments.slice(-5);
      const hiddenCount = allComments.length - 5;
      showMoreBtnHTML = `
        <button class="view-all-comments-btn" type="button" onclick="renderAllComments(event, '${factId}')" style="background: none; border: none; color: var(--primary-hover); font-size: 0.8rem; cursor: pointer; padding: 4px 0 10px 0; font-weight: 600; display: block; text-align: left; width: 100%;">
          <i class="fa-solid fa-comments"></i> ${currentLang === 'es' ? `Ver los ${hiddenCount} comentarios anteriores...` : `View ${hiddenCount} previous comments...`}
        </button>
      `;
    }

    const commentPromises = commentsToShow.map(async (comment) => {
      const author = comment.profiles || { display_name: 'System', username: 'system', trust_score: 50 };
      const topFact = await getMostLikedFact(comment.user_id);
      let topFactHTML = '';
      if (topFact) {
        const topFactText = topFact.statement;
        const truncatedText = topFactText.length > 45 ? topFactText.substring(0, 45) + '...' : topFactText;
        topFactHTML = `
          <div class="top-fact-badge" style="font-size: 0.72rem; color: #f59e0b; display: flex; align-items: center; gap: 4px; margin-top: 1px;" title="${escapeHTML(topFactText)}">
            <i class="fa-solid fa-star" style="font-size: 0.6rem;"></i>
            <span style="font-style: italic; opacity: 0.95;">
              ${currentLang === 'es' ? 'Hecho popular' : 'Top Fact'}: "${escapeHTML(truncatedText)}" (${topFact.agree_count} 👍)
            </span>
          </div>
        `;
      }

      const canDeleteComment = window.currentUser && (comment.user_id === window.currentUser.id || window.currentUser.is_admin);
      const deleteCommentBtnHTML = canDeleteComment ? `
        <button type="button" onclick="handleDeleteComment(event, '${comment.id}', '${factId}')" style="background: none; border: none; color: var(--text-muted); cursor: pointer; padding: 2px; transition: color var(--transition-fast); margin-left: 6px;" onmouseover="this.style.color='var(--disagree-color)'" onmouseout="this.style.color='var(--text-muted)'" title="${currentLang === 'es' ? 'Eliminar Comentario' : 'Delete Comment'}">
          <i class="fa-regular fa-trash-can" style="font-size: 0.75rem;"></i>
        </button>
      ` : '';

      const isMyComment = window.currentUser && comment.user_id === window.currentUser.id;
      const reportCommentBtnHTML = !isMyComment ? `
        <button type="button" onclick="reportContent(event, null, '${comment.id}')" style="background: none; border: none; color: var(--text-muted); cursor: pointer; padding: 2px; transition: color var(--transition-fast); margin-left: 6px;" onmouseover="this.style.color='var(--disagree-color)'" onmouseout="this.style.color='var(--text-muted)'" title="${currentLang === 'es' ? 'Reportar Comentario' : 'Report Comment'}">
          <i class="fa-regular fa-flag" style="font-size: 0.75rem;"></i>
        </button>
      ` : '';

      return `
        <div class="comment-item" style="display: flex; gap: 12px; align-items: flex-start; margin-bottom: 12px; padding: 10px; border-radius: var(--radius-sm); border: 1px solid var(--border-color); background: var(--bg-surface);">
          <div style="cursor: pointer; flex-shrink: 0;" onclick="openUserProfile(event, '${author.id}')">
            ${getAvatarHTML(author, 32)}
          </div>
          <div style="flex: 1; min-width: 0;">
            <div class="comment-author-meta" style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px;">
              <span class="comment-author-name" style="cursor: pointer; font-weight: 600; color: var(--text-secondary); font-size: 0.8rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 70%;" onclick="openUserProfile(event, '${author.id}')">
                ${escapeHTML(author.display_name)} (@${escapeHTML(author.username)})
              </span>
              <div style="display: flex; align-items: center; gap: 6px;">
                <span style="font-size: 0.72rem; color: var(--text-muted);">${formatRelativeTime(comment.created_at)}</span>
                ${reportCommentBtnHTML}
                ${deleteCommentBtnHTML}
              </div>
            </div>
            ${topFactHTML}
            <div class="comment-content" style="font-size: 0.85rem; color: var(--text-primary); line-height: 1.4; margin-top: 5px; word-break: break-word;">
              ${escapeHTML(comment.content)}
            </div>
          </div>
        </div>
      `;
    });

    const commentHTMLs = await Promise.all(commentPromises);
    return showMoreBtnHTML + commentHTMLs.join('');
  } catch(e) {
    return `<p style="font-size: 0.8rem; color: var(--text-muted); text-align: center; padding: 10px;">${dict.no_comments}</p>`;
  }
}

async function renderAllComments(event, factId) {
  if (event) event.preventDefault();
  const list = document.getElementById(`comment-list-${factId}`);
  if (list) {
    list.innerHTML = await buildCommentsHTML(factId, true);
  }
}

async function renderComments(factId) {
  const list = document.getElementById(`comment-list-${factId}`);
  if (list) {
    list.innerHTML = await buildCommentsHTML(factId, false);
    list.scrollTop = list.scrollHeight;
  }
}

function openPostModal() {
  if (!window.currentUser) {
    openAuthModal();
    return;
  }
  document.getElementById('post-modal').classList.add('open');
}

function closePostModal() {
  document.getElementById('post-modal').classList.remove('open');
  document.getElementById('post-form').reset();
}

function closePostModalOnOverlay(event) {
  if (event.target.id === 'post-modal') {
    closePostModal();
  }
}

// Publish Fact Handler (Supabase)
async function handlePostFact(event) {
  event.preventDefault();
  
  const submitBtn = event.target.querySelector('button[type="submit"]');
  if (submitBtn && submitBtn.disabled) return;
  
  const statement = document.getElementById('fact-statement').value.trim();
  const category = document.getElementById('fact-category').value;
  
  if (statement.length < 10) {
    showToast("toast_err_statement", true);
    return;
  }
  
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.5';
  }
  
  try {
    const { error } = await supabaseClient.from('facts').insert({
      user_id: window.currentUser.id,
      statement,
      category
    });
    if (error) throw error;
    
    // Reward points for publishing
    await adjustTrustScore(window.currentUser.id, 2.0);
    closePostModal();
    showToast("toast_fact_published");
    
    // Refresh UI
    await refreshCurrentUserState();
    updateUserProfileUI();
    renderFeed();
  } catch (err) {
    showToast(err.message, true);
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.style.opacity = '1';
    }
  }
}

const voteLocks = {};

async function handleVote(event, factId, type) {
  if (event) event.preventDefault();
  if (!supabaseClient) return;
  if (!window.currentUser) {
    openAuthModal();
    return;
  }
  
  if (voteLocks[factId]) return; // ignore quick double taps
  
  const agreeBtn = document.getElementById(`btn-agree-${factId}`);
  const disagreeBtn = document.getElementById(`btn-disagree-${factId}`);
  const wrapper = document.getElementById(`consensus-wrapper-${factId}`);
  
  if (!agreeBtn || !disagreeBtn || !wrapper) return;
  
  // Save previous UI state in case we need to rollback
  const prevAgree = parseInt(wrapper.getAttribute('data-agree')) || 0;
  const prevDisagree = parseInt(wrapper.getAttribute('data-disagree')) || 0;
  const prevHasAgreed = agreeBtn.classList.contains('voted');
  const prevHasDisagreed = disagreeBtn.classList.contains('voted');
  
  // Calculate new state locally (Optimistic values)
  let newAgree = prevAgree;
  let newDisagree = prevDisagree;
  let newVoteType = null;
  
  if (type === 'agree') {
    if (prevHasAgreed) {
      newAgree = Math.max(0, prevAgree - 1);
      newVoteType = null;
    } else {
      newAgree = prevAgree + 1;
      if (prevHasDisagreed) {
        newDisagree = Math.max(0, prevDisagree - 1);
      }
      newVoteType = 'agree';
    }
  } else {
    if (prevHasDisagreed) {
      newDisagree = Math.max(0, prevDisagree - 1);
      newVoteType = null;
    } else {
      newDisagree = prevDisagree + 1;
      if (prevHasAgreed) {
        newAgree = Math.max(0, prevAgree - 1);
      }
      newVoteType = 'disagree';
    }
  }
  
  // Function to apply DOM changes instantly
  function updateDOM(agreeCount, disagreeCount, voteType) {
    const totalVotes = agreeCount + disagreeCount;
    const agreePercent = totalVotes > 0 ? Math.round((agreeCount / totalVotes) * 100) : 50;
    const disagreePercent = totalVotes > 0 ? (100 - agreePercent) : 50;
    
    const agreeLabel = document.getElementById(`agree-label-${factId}`);
    const disagreeLabel = document.getElementById(`disagree-label-${factId}`);
    const fillBar = document.getElementById(`consensus-fill-${factId}`);
    const dict = translations[currentLang];
    
    if (agreeLabel) agreeLabel.textContent = `${agreePercent}% ${dict.agree} (${agreeCount})`;
    if (disagreeLabel) disagreeLabel.textContent = `${disagreePercent}% ${dict.disagree} (${disagreeCount})`;
    if (fillBar) fillBar.style.width = `${agreePercent}%`;
    
    wrapper.setAttribute('data-agree', agreeCount);
    wrapper.setAttribute('data-disagree', disagreeCount);
    
    if (voteType === 'agree') {
      agreeBtn.classList.add('voted');
      disagreeBtn.classList.remove('voted');
    } else if (voteType === 'disagree') {
      agreeBtn.classList.remove('voted');
      disagreeBtn.classList.add('voted');
    } else {
      agreeBtn.classList.remove('voted');
      disagreeBtn.classList.remove('voted');
    }
  }
  
  // Apply optimistic UI changes immediately!
  updateDOM(newAgree, newDisagree, newVoteType);
  voteLocks[factId] = true;
  
  try {
    const userId = window.currentUser.id;
    
    // 1. Get current vote from Supabase
    const { data: existing, error: fe } = await supabaseClient
      .from('votes')
      .select('*')
      .eq('user_id', userId)
      .eq('fact_id', factId)
      .maybeSingle();
    
    if (fe) throw fe;
    
    // 2. Get latest counts from Supabase
    const { data: fact, error: fte } = await supabaseClient
      .from('facts')
      .select('agree_count, disagree_count, user_id')
      .eq('id', factId)
      .single();
    
    if (fte) throw fte;
    
    let dbAgree = fact.agree_count || 0;
    let dbDisagree = fact.disagree_count || 0;
    let reputationChange = 0;
    
    if (existing) {
      if (existing.vote === type) {
        // Delete vote
        const { error: de } = await supabaseClient.from('votes').delete().eq('user_id', userId).eq('fact_id', factId);
        if (de) throw de;
        
        if (type === 'agree') dbAgree = Math.max(0, dbAgree - 1);
        else dbDisagree = Math.max(0, dbDisagree - 1);
        reputationChange = -0.5;
      } else {
        // Swap vote
        const { error: ue } = await supabaseClient.from('votes').update({ vote: type }).eq('user_id', userId).eq('fact_id', factId);
        if (ue) throw ue;
        
        if (type === 'agree') {
          dbAgree++;
          dbDisagree = Math.max(0, dbDisagree - 1);
        } else {
          dbDisagree++;
          dbAgree = Math.max(0, dbAgree - 1);
        }
      }
    } else {
      // Insert new vote
      const { error: ie } = await supabaseClient.from('votes').insert({ user_id: userId, fact_id: factId, vote: type });
      if (ie) throw ie;
      
      if (type === 'agree') dbAgree++;
      else dbDisagree++;
      reputationChange = 0.5;
    }
    
    // Notify fact owner of agree vote (like)
    if (type === 'agree' && (!existing || existing.vote !== 'agree')) {
      await sendNotification(fact.user_id, 'like', factId);
    }
    
    // Notify fact owner of disagree vote (dislike)
    if (type === 'disagree' && (!existing || existing.vote !== 'disagree')) {
      await sendNotification(fact.user_id, 'dislike', factId);
    }
    
    // 3. Save updated counts
    const { error: ufe } = await supabaseClient
      .from('facts')
      .update({ agree_count: dbAgree, disagree_count: dbDisagree })
      .eq('id', factId);
    
    if (ufe) throw ufe;
    
    // 4. Adjust scores
    if (reputationChange !== 0) {
      await adjustTrustScore(userId, reputationChange);
    }
    await updatePosterReputation(fact.user_id, factId, dbAgree, dbDisagree);
    
    // Sync UI with final db stats
    updateDOM(dbAgree, dbDisagree, newVoteType);
    
    // Refresh user trust UI sidebar
    await refreshCurrentUserState();
    updateUserProfileUI();
    showToast("toast_vote_updated");
  } catch (err) {
    // Rollback on error
    updateDOM(prevAgree, prevDisagree, prevHasAgreed ? 'agree' : (prevHasDisagreed ? 'disagree' : null));
    showToast(err.message, true);
  } finally {
    voteLocks[factId] = false;
  }
}

// Collapsible comments section toggler
function toggleComments(event, factId) {
  if (event) event.preventDefault();
  const section = document.getElementById(`comments-section-${factId}`);
  section.classList.toggle('open');
  
  if (section.classList.contains('open')) {
    renderComments(factId);
  }
}

// Add Comments (Supabase)
async function submitComment(event, factId) {
  if (event) event.preventDefault();
  if (!window.currentUser) {
    openAuthModal();
    return;
  }
  const input = document.getElementById(`comment-input-${factId}`);
  const content = input.value.trim();
  
  if (!content) return;
  
  // Find submit button in the comment wrapper
  const btn = input.nextElementSibling;
  if (btn && btn.disabled) return;
  
  if (btn) {
    btn.disabled = true;
    btn.style.opacity = '0.5';
  }
  
  try {
    const { error: ce } = await supabaseClient.from('comments').insert({
      fact_id: factId,
      user_id: window.currentUser.id,
      content: content
    });
    if (ce) throw ce;
    
    // Fetch and increment fact comment count
    const { data: fact } = await supabaseClient.from('facts').select('comment_count, user_id').eq('id', factId).single();
    const newCount = (fact.comment_count || 0) + 1;
    await supabaseClient.from('facts').update({ comment_count: newCount }).eq('id', factId);
    
    // Send comment notification
    await sendNotification(fact.user_id, 'comment', factId);
    
    input.value = '';
    await adjustTrustScore(window.currentUser.id, 0.2);
    
    // Refresh comments smoothly
    await renderComments(factId);
    
    // Update badge counter directly
    const toggleBtn = document.getElementById(`comments-toggle-${factId}`);
    if (toggleBtn) {
      const dict = translations[currentLang];
      toggleBtn.innerHTML = `<i class="fa-regular fa-comment"></i> ${dict.comments_toggle_label.replace('{count}', newCount)}`;
    }
    
    await refreshCurrentUserState();
    updateUserProfileUI();
    showToast("toast_comment_posted");
  } catch(err) {
    showToast(err.message, true);
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.style.opacity = '1';
    }
  }
}

// Admin/Author deletion handlers
async function handleDeleteFact(event, factId) {
  if (event) event.preventDefault();
  const confirmMsg = currentLang === 'es' 
    ? "¿Estás seguro de que deseas eliminar este facto? Esto eliminará todos sus votos y comentarios asociados permanentemente."
    : "Are you sure you want to delete this fact? This will permanently remove all associated votes and comments.";
    
  if (!confirm(confirmMsg)) return;
  
  try {
    const { error } = await supabaseClient.from('facts').delete().eq('id', factId);
    if (error) throw error;
    
    showToast(currentLang === 'es' ? "¡Facto eliminado con éxito!" : "Fact deleted successfully!");
    if (currentFeedTab === 'profile') {
      renderMyProfileView();
    } else {
      renderFeed();
    }
  } catch(err) {
    showToast(err.message, true);
  }
}

async function handleDeleteComment(event, commentId, factId) {
  if (event) event.preventDefault();
  const confirmMsg = currentLang === 'es'
    ? "¿Estás seguro de que deseas eliminar este comentario?"
    : "Are you sure you want to delete this comment?";
    
  if (!confirm(confirmMsg)) return;
  
  try {
    // 1. Delete comment
    const { error } = await supabaseClient.from('comments').delete().eq('id', commentId);
    if (error) throw error;
    
    // 2. Fetch and decrement fact comment count
    const { data: fact } = await supabaseClient.from('facts').select('comment_count').eq('id', factId).single();
    const newCount = Math.max(0, (fact.comment_count || 1) - 1);
    await supabaseClient.from('facts').update({ comment_count: newCount }).eq('id', factId);
    
    showToast(currentLang === 'es' ? "¡Comentario eliminado!" : "Comment deleted!");
    
    // Refresh comments UI smoothly
    await renderComments(factId);
    
    // Update badge counter directly
    const toggleBtn = document.getElementById(`comments-toggle-${factId}`);
    if (toggleBtn) {
      const dict = translations[currentLang];
      toggleBtn.innerHTML = `<i class="fa-regular fa-comment"></i> ${dict.comments_toggle_label.replace('{count}', newCount)}`;
    }
  } catch (err) {
    showToast(err.message, true);
  }
}

// reputation score adjusters
async function adjustTrustScore(userId, amount) {
  try {
    const { data: u } = await supabaseClient.from('profiles').select('trust_score').eq('id', userId).single();
    if (u) {
      const newScore = parseFloat(Math.min(100, Math.max(0, (u.trust_score || 50) + amount)).toFixed(2));
      await supabaseClient.from('profiles').update({ trust_score: newScore }).eq('id', userId);
    }
  } catch(e) {}
}

async function updatePosterReputation(posterId, factId, agreeCount, disagreeCount) {
  const totalVotes = agreeCount + disagreeCount;
  if (totalVotes >= 3) {
    const agreeRatio = agreeCount / totalVotes;
    if (agreeRatio >= 0.7) {
      await adjustTrustScore(posterId, 1.5);
    } else if (agreeRatio <= 0.3) {
      await adjustTrustScore(posterId, -2.0);
    }
  }
}

async function refreshCurrentUserState() {
  if (!window.currentUser || !supabaseClient) return;
  try {
    const { data: profile } = await supabaseClient.from('profiles').select('*').eq('id', window.currentUser.id).single();
    if (profile) {
      window.currentUser = profile;
      sessionStorage.setItem('factos_session', JSON.stringify(profile));
    }
  } catch(e) {}
}

// Profile Editing Modal triggers
let tempAvatarUrl = null;

function openEditProfileModal() {
  tempAvatarUrl = window.currentUser.avatar_url || null;
  document.getElementById('edit-display-name').value = window.currentUser.display_name;
  document.getElementById('edit-bio').value = window.currentUser.bio || '';
  document.getElementById('avatar-edit-preview-container').innerHTML = getAvatarHTML(window.currentUser, 80);
  
  document.getElementById('edit-profile-modal').classList.add('open');
  applyTranslations();
}

function closeEditProfileModal() {
  document.getElementById('edit-profile-modal').classList.remove('open');
  document.getElementById('edit-profile-form').reset();
  tempAvatarUrl = null;
}

function closeEditProfileModalOnOverlay(event) {
  if (event.target.id === 'edit-profile-modal') {
    closeEditProfileModal();
  }
}

function handleAvatarFileChange(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = function(e) {
    tempAvatarUrl = e.target.result;
    const previewContainer = document.getElementById('avatar-edit-preview-container');
    previewContainer.innerHTML = `<img src="${escapeHTML(tempAvatarUrl)}" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover; border: 2px solid var(--primary); display: block;" />`;
  };
  reader.readAsDataURL(file);
}

// Save profile update (Supabase)
async function handleSaveProfile(event) {
  event.preventDefault();
  
  const displayName = document.getElementById('edit-display-name').value.trim();
  const bio = document.getElementById('edit-bio').value.trim();
  
  if (!displayName) {
    showToast("toast_err_fields", true);
    return;
  }
  
  try {
    const { error } = await supabaseClient.from('profiles').update({
      display_name: displayName,
      bio: bio,
      avatar_url: tempAvatarUrl
    }).eq('id', window.currentUser.id);
    
    if (error) throw error;
    
    closeEditProfileModal();
    showToast("toast_profile_updated");
    
    await refreshCurrentUserState();
    updateUserProfileUI();
    if (currentFeedTab === 'profile') {
      renderMyProfileView();
    } else {
      renderFeed();
    }
  } catch (err) {
    showToast(err.message, true);
  }
}

// ==========================================
// NEW FEATURE IMPLEMENTATIONS (ADVANCED)
// ==========================================

async function buildFactCardHTML(fact, userVote, dict, preloadedComments = null) {
  const author = fact.profiles || { display_name: 'System', username: 'system', trust_score: 50 };
  const totalVotes = fact.agree_count + fact.disagree_count;
  const agreePercent = totalVotes > 0 ? Math.round((fact.agree_count / totalVotes) * 100) : 50;
  const disagreePercent = totalVotes > 0 ? (100 - agreePercent) : 50;
  
  const statementText = fact.statement;
  const categoryKey = `cat_${fact.category.toLowerCase()}`;
  const categoryName = dict[categoryKey] || fact.category;
  
  const commentsHTML = await buildCommentsHTML(fact.id, false, preloadedComments);

  const deleteFactBtnHTML = window.currentUser && (window.currentUser.is_admin || fact.user_id === window.currentUser.id) ? `
    <button type="button" onclick="handleDeleteFact(event, '${fact.id}')" style="background: none; border: none; color: var(--text-muted); cursor: pointer; padding: 4px; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: all var(--transition-fast); margin-left: 6px;" onmouseover="this.style.color='var(--disagree-color)'; this.style.background='rgba(239, 68, 68, 0.1)';" onmouseout="this.style.color='var(--text-muted)'; this.style.background='none';" title="${currentLang === 'es' ? 'Eliminar Facto' : 'Delete Fact'}">
      <i class="fa-regular fa-trash-can" style="font-size: 0.9rem;"></i>
    </button>
  ` : '';

  return `
    <div class="fact-meta">
      <div class="fact-author-info" style="cursor: pointer;" onclick="openUserProfile(event, '${author.id}')">
        ${getAvatarHTML(author, 28)}
        <span class="fact-author-name" style="margin-left: 8px;">${escapeHTML(author.display_name)}</span>
        <span class="trust-badge-mini">${parseFloat(author.trust_score || 50).toFixed(0)} pts</span>
      </div>
      <div style="display: flex; align-items: center; gap: 8px;">
        <span class="fact-category-tag">${escapeHTML(categoryName)}</span>
        <span>${formatRelativeTime(fact.created_at)}</span>
        ${deleteFactBtnHTML}
      </div>
    </div>
    
    <p class="fact-text">"${escapeHTML(statementText)}"</p>
    
    <div class="consensus-wrapper" id="consensus-wrapper-${fact.id}" data-agree="${fact.agree_count}" data-disagree="${fact.disagree_count}">
      <div class="consensus-stats">
        <span id="agree-label-${fact.id}" class="consensus-agree-label">${agreePercent}% ${dict.agree} (${fact.agree_count})</span>
        <span class="consensus-percentage">${currentLang === 'es' ? 'Consenso' : 'Consensus'}</span>
        <span id="disagree-label-${fact.id}" class="consensus-disagree-label">${disagreePercent}% ${dict.disagree} (${fact.disagree_count})</span>
      </div>
      <div class="consensus-track">
        <div id="consensus-fill-${fact.id}" class="consensus-agree-fill" style="width: ${agreePercent}%"></div>
      </div>
      
      <div class="consensus-actions">
        <button id="btn-agree-${fact.id}" type="button" class="btn-vote btn-agree ${userVote && userVote.vote === 'agree' ? 'voted' : ''}" onclick="handleVote(event, '${fact.id}', 'agree')">
          <i class="fa-regular fa-thumbs-up"></i> ${dict.agree}
        </button>
        <button id="btn-disagree-${fact.id}" type="button" class="btn-vote btn-disagree ${userVote && userVote.vote === 'disagree' ? 'voted' : ''}" onclick="handleVote(event, '${fact.id}', 'disagree')">
          <i class="fa-regular fa-thumbs-down"></i> ${dict.disagree}
        </button>
      </div>
    </div>
    
    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 15px;">
      <button id="comments-toggle-${fact.id}" type="button" class="comments-toggle" onclick="toggleComments(event, '${fact.id}')">
        <i class="fa-regular fa-comment"></i> ${dict.comments_toggle_label.replace('{count}', fact.comment_count)}
      </button>
      <div style="display: flex; gap: 8px;">
        <button type="button" class="btn-card-action" onclick="shareFact(event, '${fact.id}')" title="${currentLang === 'es' ? 'Compartir' : 'Share'}">
          <i class="fa-regular fa-share-from-square"></i>
        </button>
        <button type="button" class="btn-card-action" onclick="reportContent(event, '${fact.id}', null)" title="${currentLang === 'es' ? 'Reportar Facto' : 'Report Fact'}">
          <i class="fa-regular fa-flag"></i>
        </button>
      </div>
    </div>
    
    <div id="comments-section-${fact.id}" class="comments-section open">
      <div class="comment-input-wrapper">
        <input type="text" id="comment-input-${fact.id}" class="comment-input" placeholder="${dict.comment_placeholder}">
        <button class="btn-comment-submit" type="button" onclick="submitComment(event, '${fact.id}')">${dict.comment_btn}</button>
      </div>
      <div class="comment-list" id="comment-list-${fact.id}">
        ${commentsHTML}
      </div>
    </div>
  `;
}

async function renderMyProfileView() {
  if (!window.currentUser || !supabaseClient) return;
  
  // Populate details
  document.getElementById('my-profile-avatar').innerHTML = getAvatarHTML(window.currentUser, 70);
  document.getElementById('my-profile-display-name').textContent = window.currentUser.display_name;
  document.getElementById('my-profile-handle').textContent = `@${window.currentUser.username}`;
  document.getElementById('my-profile-bio').textContent = window.currentUser.bio || '';
  
  const formattedScore = parseFloat(window.currentUser.trust_score || 50).toFixed(2);
  document.getElementById('my-profile-trust').textContent = formattedScore;
  document.getElementById('my-profile-trust-bar').style.width = `${window.currentUser.trust_score || 50}%`;
  
  // Get follow stats
  try {
    const { count: followersCount } = await supabaseClient
      .from('follows')
      .select('*', { count: 'exact', head: true })
      .eq('following_id', window.currentUser.id);
      
    const { count: followingCount } = await supabaseClient
      .from('follows')
      .select('*', { count: 'exact', head: true })
      .eq('follower_id', window.currentUser.id);
      
    document.getElementById('my-profile-followers-count').textContent = currentLang === 'es'
      ? `${followersCount || 0} seguidores`
      : `${followersCount || 0} followers`;
      
    document.getElementById('my-profile-following-count').textContent = currentLang === 'es'
      ? `${followingCount || 0} siguiendo`
      : `${followingCount || 0} following`;
  } catch (e) {
    console.error("Error fetching follow counts:", e);
  }
  
  // Render subtab (default: 'posts')
  renderMyProfileSubTabFeed();
}

function switchProfileSubTab(subTab) {
  currentProfileSubTab = subTab;
  
  const postsTab = document.getElementById('tab-my-posts');
  const likesTab = document.getElementById('tab-my-likes');
  
  if (subTab === 'posts') {
    postsTab.classList.add('active');
    likesTab.classList.remove('active');
  } else {
    postsTab.classList.remove('active');
    likesTab.classList.add('active');
  }
  
  renderMyProfileSubTabFeed();
}

async function renderMyProfileSubTabFeed() {
  profileRenderGeneration++;
  const localGeneration = profileRenderGeneration;

  const container = document.getElementById('profile-facts-feed');
  if (!container || !supabaseClient || !window.currentUser) return;
  
  container.innerHTML = `
    <div style="text-align: center; padding: 30px; color: var(--text-muted);">
      <i class="fa-solid fa-spinner fa-spin" style="font-size: 1.5rem; color: var(--primary); margin-bottom: 10px;"></i>
      <p>${currentLang === 'es' ? 'Cargando publicaciones...' : 'Loading publications...'}</p>
    </div>
  `;
  
  try {
    let facts = [];
    
    if (currentProfileSubTab === 'posts') {
      const { data, error } = await supabaseClient
        .from('facts')
        .select('*, profiles!user_id(*)')
        .eq('user_id', window.currentUser.id)
        .order('created_at', { ascending: false });
        
      if (localGeneration !== profileRenderGeneration) return;
      if (error) throw error;
      facts = data || [];
    } else {
      // likes / agreed facts
      const { data, error } = await supabaseClient
        .from('votes')
        .select('fact_id, facts(*, profiles!user_id(*))')
        .eq('user_id', window.currentUser.id)
        .eq('vote', 'agree');
        
      if (localGeneration !== profileRenderGeneration) return;
      if (error) throw error;
      facts = (data || []).map(v => v.facts).filter(Boolean);
      // Sort likes by created_at descending
      facts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    }
    
    const { data: userVotes } = await supabaseClient
      .from('votes')
      .select('*')
      .eq('user_id', window.currentUser.id);
      
    if (localGeneration !== profileRenderGeneration) return;
      
    container.innerHTML = '';
    const dict = translations[currentLang];
    
    // 3. Batch fetch all comments for these facts in a single request to resolve N+1 comments query problems
    const factIds = facts.map(f => f.id);
    let commentsData = [];
    if (factIds.length > 0) {
      const { data: comments, error: ce } = await supabaseClient
        .from('comments')
        .select('*, profiles!user_id(*)')
        .in('fact_id', factIds)
        .order('created_at', { ascending: true });
        
      if (localGeneration !== profileRenderGeneration) return;
      if (!ce) {
        commentsData = comments || [];
      }
    }
    
    // Group preloaded comments by fact_id
    const commentsByFact = {};
    commentsData.forEach(c => {
      if (!commentsByFact[c.fact_id]) {
        commentsByFact[c.fact_id] = [];
      }
      commentsByFact[c.fact_id].push(c);
    });

    if (facts.length === 0) {
      container.innerHTML = `
        <div style="padding: 30px; text-align: center; color: var(--text-muted);">
          <p>${currentLang === 'es' ? 'No hay factos para mostrar.' : 'No facts to display.'}</p>
        </div>
      `;
      return;
    }
    
    const cardPromises = facts.map(async (fact) => {
      const userVote = userVotes ? userVotes.find(v => v.fact_id === fact.id) : null;
      const preloadedComments = commentsByFact[fact.id] || [];
      const cardHTML = await buildFactCardHTML(fact, userVote, dict, preloadedComments);
      return { fact, cardHTML };
    });
    
    const renderedCards = await Promise.all(cardPromises);
    if (localGeneration !== profileRenderGeneration) return;
    
    container.innerHTML = '';
    for (const { fact, cardHTML } of renderedCards) {
      const card = document.createElement('article');
      card.className = 'glass-panel fact-card';
      card.innerHTML = cardHTML;
      container.appendChild(card);
    }
  } catch (err) {
    if (localGeneration === profileRenderGeneration) {
      container.innerHTML = `<p style="color: var(--disagree-color); text-align: center; padding: 20px;">${err.message}</p>`;
    }
  }
}

async function openUserProfile(event, userId) {
  if (event) event.preventDefault();
  if (!supabaseClient) return;
  if (!window.currentUser) {
    openAuthModal();
    return;
  }
  
  // If clicking on their own name, switch to my profile tab instead!
  if (userId === window.currentUser.id) {
    switchFeedTab('profile');
    closeUserProfileModal();
    return;
  }
  
  selectedProfileId = userId;
  
  const modal = document.getElementById('user-profile-modal');
  if (modal) modal.classList.add('open');
  
  // Fetch user profile info, their facts and follows status
  try {
    const { data: profile, error } = await supabaseClient
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();
      
    if (selectedProfileId !== userId) return;
    if (error || !profile) throw new Error("User profile not found");
    
    document.getElementById('modal-user-avatar').innerHTML = getAvatarHTML(profile, 70);
    document.getElementById('modal-user-display-name').textContent = profile.display_name;
    document.getElementById('modal-user-handle').textContent = `@${profile.username}`;
    document.getElementById('modal-user-bio').textContent = profile.bio || '';
    
    const formattedScore = parseFloat(profile.trust_score || 50).toFixed(2);
    document.getElementById('modal-user-trust').textContent = formattedScore;
    document.getElementById('modal-user-trust-bar').style.width = `${profile.trust_score || 50}%`;
    
    // Check if current user is following this user
    const { data: isFollowing } = await supabaseClient
      .from('follows')
      .select('*')
      .eq('follower_id', window.currentUser.id)
      .eq('following_id', userId)
      .maybeSingle();
      
    if (selectedProfileId !== userId) return;
       
    const followBtn = document.getElementById('btn-follow-user');
    const dict = translations[currentLang];
    if (isFollowing) {
      followBtn.textContent = dict.following;
      followBtn.className = "btn-secondary";
    } else {
      followBtn.textContent = dict.follow;
      followBtn.className = "btn-primary";
    }
    
    // Get followers count
    const { count: followersCount } = await supabaseClient
      .from('follows')
      .select('*', { count: 'exact', head: true })
      .eq('following_id', userId);
      
    if (selectedProfileId !== userId) return;
       
    document.getElementById('modal-user-followers-count').textContent = currentLang === 'es'
      ? `${followersCount || 0} seguidores`
      : `${followersCount || 0} followers`;
      
    // Render their facts list in modal
    const { data: facts } = await supabaseClient
      .from('facts')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
      
    if (selectedProfileId !== userId) return;
       
    const factsContainer = document.getElementById('modal-user-facts');
    factsContainer.innerHTML = '';
    
    if (!facts || facts.length === 0) {
      factsContainer.innerHTML = `<p style="text-align: center; color: var(--text-muted); font-size: 0.85rem; padding: 15px;">${currentLang === 'es' ? 'No hay publicaciones.' : 'No posts yet.'}</p>`;
    } else {
      facts.forEach(fact => {
        const item = document.createElement('div');
        item.style.padding = '10px';
        item.style.border = '1px solid var(--border-color)';
        item.style.borderRadius = 'var(--radius-sm)';
        item.style.background = 'var(--bg-surface)';
        item.style.cursor = 'pointer';
        item.onclick = () => {
          closeUserProfileModal();
          currentSharedFactId = fact.id;
          const banner = document.getElementById('shared-fact-banner');
          if (banner) banner.classList.remove('hidden');
          switchFeedTab('recent');
        };
        
        item.innerHTML = `
          <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--text-muted); margin-bottom: 5px;">
            <span>${fact.category}</span>
            <span>${formatRelativeTime(fact.created_at)}</span>
          </div>
          <p style="font-size: 0.85rem; font-weight: 500; line-height: 1.3;">"${escapeHTML(fact.statement)}"</p>
          <div style="display: flex; gap: 10px; font-size: 0.75rem; color: var(--text-muted); margin-top: 5px;">
            <span>👍 ${fact.agree_count}</span>
            <span>👎 ${fact.disagree_count}</span>
          </div>
        `;
        factsContainer.appendChild(item);
      });
    }
    
  } catch (err) {
    if (selectedProfileId === userId) {
      showToast(err.message, true);
    }
  }
}

function closeUserProfileModal() {
  const modal = document.getElementById('user-profile-modal');
  if (modal) modal.classList.remove('open');
  selectedProfileId = null;
}

function closeUserProfileModalOnOverlay(event) {
  if (event.target.id === 'user-profile-modal') {
    closeUserProfileModal();
  }
}

async function toggleFollowUser() {
  if (!supabaseClient || !selectedProfileId) return;
  if (!window.currentUser) {
    openAuthModal();
    return;
  }
  
  const followBtn = document.getElementById('btn-follow-user');
  const dict = translations[currentLang];
  const isFollowing = followBtn.classList.contains('btn-secondary') || followBtn.textContent === dict.following;
  
  // Optimistic UI updates
  if (isFollowing) {
    followBtn.textContent = dict.follow;
    followBtn.className = "btn-primary";
  } else {
    followBtn.textContent = dict.following;
    followBtn.className = "btn-secondary";
  }
  
  try {
    if (isFollowing) {
      // Unfollow
      const { error } = await supabaseClient
        .from('follows')
        .delete()
        .eq('follower_id', window.currentUser.id)
        .eq('following_id', selectedProfileId);
        
      if (error) throw error;
      
      const countEl = document.getElementById('modal-user-followers-count');
      const curCount = parseInt(countEl.textContent) || 0;
      countEl.textContent = currentLang === 'es'
        ? `${Math.max(0, curCount - 1)} seguidores`
        : `${Math.max(0, curCount - 1)} followers`;
    } else {
      // Follow
      const { error } = await supabaseClient
        .from('follows')
        .insert({
          follower_id: window.currentUser.id,
          following_id: selectedProfileId
        });
        
      if (error) throw error;
      
      await sendNotification(selectedProfileId, 'follow', null);
      
      const countEl = document.getElementById('modal-user-followers-count');
      const curCount = parseInt(countEl.textContent) || 0;
      countEl.textContent = currentLang === 'es'
        ? `${curCount + 1} seguidores`
        : `${curCount + 1} followers`;
    }
  } catch (err) {
    // Rollback
    if (isFollowing) {
      followBtn.textContent = dict.following;
      followBtn.className = "btn-secondary";
    } else {
      followBtn.textContent = dict.follow;
      followBtn.className = "btn-primary";
    }
    showToast(err.message, true);
  }
}

async function sendNotification(receiverId, type, factId) {
  if (!supabaseClient || !window.currentUser || receiverId === window.currentUser.id) return;
  try {
    const { error } = await supabaseClient.from('notifications').insert({
      receiver_id: receiverId,
      sender_id: window.currentUser.id,
      type,
      fact_id: factId
    });
    if (error) {
      console.error("Failed to send notification:", error);
      showToast(error.message, true);
    }
  } catch (e) {
    console.error("Failed to send notification:", e);
    showToast(e.message, true);
  }
}

async function loadNotifications() {
  if (!supabaseClient || !window.currentUser) return;
  try {
    const { data: list, error } = await supabaseClient
      .from('notifications')
      .select('*, sender:profiles!sender_id(*), fact:facts!fact_id(*)')
      .eq('receiver_id', window.currentUser.id)
      .order('created_at', { ascending: false })
      .limit(20);
      
    if (error) throw error;
    
    const unreadCount = list.filter(n => !n.read).length;
    updateUnreadNotificationsBadge(unreadCount);
    
    const container = document.getElementById('notifications-list');
    const containerFeed = document.getElementById('notifications-list-feed');
    
    const renderList = (c) => {
      if (!c) return;
      c.innerHTML = '';
      
      if (!list || list.length === 0) {
        c.innerHTML = `
          <p style="text-align: center; color: var(--text-muted); font-size: 0.8rem; padding: 15px;" data-i18n="no_notifications">
            ${translations[currentLang].no_notifications}
          </p>
        `;
        return;
      }
      
      list.forEach(n => {
        const senderDisplayName = n.sender ? escapeHTML(n.sender.display_name) : "Alguien";
        const senderUsername = n.sender ? escapeHTML(n.sender.username) : "usuario";
        const factText = n.fact ? escapeHTML(n.fact.statement) : "";
        const truncatedFact = factText.length > 40 ? factText.substring(0, 40) + '...' : factText;
        
        let text = "";
        let iconHTML = "";
        
        if (n.type === 'like') {
          text = currentLang === 'es'
            ? `le dio me gusta a tu facto: <span style="font-style: italic; color: var(--text-secondary);">"${truncatedFact}"</span>`
            : `liked your fact: <span style="font-style: italic; color: var(--text-secondary);">"${truncatedFact}"</span>`;
          iconHTML = `<i class="fa-solid fa-thumbs-up" style="color: var(--agree-color); font-size: 0.65rem;"></i>`;
        } else if (n.type === 'dislike') {
          text = currentLang === 'es'
            ? `no le gustó tu facto: <span style="font-style: italic; color: var(--text-secondary);">"${truncatedFact}"</span>`
            : `disliked your fact: <span style="font-style: italic; color: var(--text-secondary);">"${truncatedFact}"</span>`;
          iconHTML = `<i class="fa-solid fa-thumbs-down" style="color: var(--disagree-color); font-size: 0.65rem;"></i>`;
        } else if (n.type === 'comment') {
          text = currentLang === 'es'
            ? `comentó en tu facto: <span style="font-style: italic; color: var(--text-secondary);">"${truncatedFact}"</span>`
            : `commented on your fact: <span style="font-style: italic; color: var(--text-secondary);">"${truncatedFact}"</span>`;
          iconHTML = `<i class="fa-solid fa-comment" style="color: var(--primary); font-size: 0.65rem;"></i>`;
        } else if (n.type === 'follow') {
          text = currentLang === 'es'
            ? `comenzó a seguirte`
            : `started following you`;
          iconHTML = `<i class="fa-solid fa-user-plus" style="color: var(--secondary); font-size: 0.65rem;"></i>`;
        }
        
        const avatarHTML = getAvatarHTML(n.sender, 36);
        
        const item = document.createElement('div');
        item.className = `notification-item ${n.read ? '' : 'unread'}`;
        item.style.display = 'flex';
        item.style.gap = '12px';
        item.style.alignItems = 'flex-start';
        item.style.padding = '12px';
        item.onclick = (e) => handleNotificationClick(e, n);
        
        item.innerHTML = `
          <div style="flex-shrink: 0; position: relative;">
            ${avatarHTML}
            <div style="position: absolute; bottom: -4px; right: -4px; width: 18px; height: 18px; border-radius: 50%; background: var(--bg-surface-solid); border: 1px solid var(--border-color); display: flex; align-items: center; justify-content: center;">
              ${iconHTML}
            </div>
          </div>
          <div class="notification-item-text" style="flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 4px;">
            <p style="margin: 0; font-size: 0.85rem; line-height: 1.4; word-break: break-word; color: var(--text-primary);">
              <strong>${senderDisplayName}</strong> <span style="color: var(--text-muted); font-size: 0.78rem;">@${senderUsername}</span> ${text}
            </p>
            <div class="notification-item-time" style="font-size: 0.72rem; color: var(--text-muted);">${formatRelativeTime(n.created_at)}</div>
          </div>
        `;
        c.appendChild(item);
      });
    };
    
    renderList(container);
    renderList(containerFeed);
  } catch (e) {
    console.error("Error loading notifications:", e);
    showToast(e.message, true);
  }
}

function updateUnreadNotificationsBadge(count) {
  const badge = document.getElementById('notification-badge');
  const badgeMobile = document.getElementById('notification-badge-mobile');
  
  [badge, badgeMobile].forEach(el => {
    if (!el) return;
    if (count > 0) {
      el.textContent = count;
      el.classList.remove('hidden');
    } else {
      el.classList.add('hidden');
    }
  });
}

function toggleNotificationsDropdown(event) {
  if (event) event.stopPropagation();
  if (!window.currentUser) {
    openAuthModal();
    return;
  }
  const dropdown = document.getElementById('notifications-dropdown');
  if (!dropdown) return;
  
  dropdown.classList.toggle('hidden');
  
  if (!dropdown.classList.contains('hidden')) {
    loadNotifications();
    document.addEventListener('click', closeNotificationsDropdownOnOutsideClick);
  } else {
    document.removeEventListener('click', closeNotificationsDropdownOnOutsideClick);
  }
}

function closeNotificationsDropdownOnOutsideClick(event) {
  const dropdown = document.getElementById('notifications-dropdown');
  const bellBtn = document.querySelector('.btn-icon-bell');
  if (dropdown && !dropdown.contains(event.target) && !bellBtn.contains(event.target)) {
    dropdown.classList.add('hidden');
    document.removeEventListener('click', closeNotificationsDropdownOnOutsideClick);
  }
}

async function markAllNotificationsAsRead(event) {
  if (event) event.stopPropagation();
  if (!supabaseClient || !window.currentUser) return;
  try {
    const { error } = await supabaseClient
      .from('notifications')
      .update({ read: true })
      .eq('receiver_id', window.currentUser.id)
      .eq('read', false);
      
    if (error) throw error;
    loadNotifications();
  } catch (e) {
    console.error(e);
  }
}

async function handleNotificationClick(event, n) {
  if (event) event.stopPropagation();
  if (!supabaseClient) return;
  
  try {
    if (!n.read) {
      await supabaseClient
        .from('notifications')
        .update({ read: true })
        .eq('id', n.id);
    }
  } catch (e) {
    console.error(e);
  }
  
  const dropdown = document.getElementById('notifications-dropdown');
  if (dropdown) dropdown.classList.add('hidden');
  document.removeEventListener('click', closeNotificationsDropdownOnOutsideClick);
  
  if (n.type === 'follow') {
    openUserProfile(null, n.sender_id);
  } else if (n.fact_id) {
    currentSharedFactId = n.fact_id;
    const banner = document.getElementById('shared-fact-banner');
    if (banner) banner.classList.remove('hidden');
    switchFeedTab('recent');
  }
}

function shareFact(event, factId) {
  if (event) event.preventDefault();
  const shareUrl = `${window.location.origin}${window.location.pathname}?fact=${factId}`;
  
  navigator.clipboard.writeText(shareUrl).then(() => {
    showToast(currentLang === 'es' ? "¡Enlace copiado al portapapeles!" : "Link copied to clipboard!");
  }).catch(err => {
    showToast(currentLang === 'es' ? "Error al copiar enlace" : "Failed to copy link", true);
  });
}

async function reportContent(event, factId, commentId) {
  if (event) event.preventDefault();
  if (!supabaseClient) return;
  if (!window.currentUser) {
    openAuthModal();
    return;
  }
  
  const defaultReason = currentLang === 'es' ? "Contenido inapropiado" : "Inappropriate content";
  const promptMsg = currentLang === 'es' 
    ? "¿Por qué deseas reportar este contenido?" 
    : "Why do you want to report this content?";
    
  const reason = prompt(promptMsg, defaultReason);
  if (reason === null) return;
  
  try {
    const reportData = {
      reporter_id: window.currentUser.id,
      reason: reason || defaultReason
    };
    
    if (factId) reportData.fact_id = factId;
    if (commentId) reportData.comment_id = commentId;
    
    const { error } = await supabaseClient.from('reports').insert(reportData);
    if (error) throw error;
    
    showToast(currentLang === 'es' ? "¡Reporte enviado!" : "Report submitted successfully!");
  } catch (err) {
    showToast(err.message, true);
  }
}

function clearSharedFactFilter() {
  currentSharedFactId = null;
  const banner = document.getElementById('shared-fact-banner');
  if (banner) banner.classList.add('hidden');
  const url = new URL(window.location);
  url.searchParams.delete('fact');
  window.history.pushState({}, '', url);
  renderFeed();
}

function handleSearch(value) {
  searchQuery = value.trim().toLowerCase();
  renderFeed();
}

// ==========================================
// GUEST AUTH MODAL HANDLERS
// ==========================================

let currentModalAuthMode = 'login';

function switchModalAuth(mode) {
  currentModalAuthMode = mode;
  const signupFields = document.getElementById('modal-signup-fields');
  const authBtn = document.getElementById('modal-auth-btn');
  const toggleBtn = document.getElementById('modal-auth-toggle-btn');
  const dividerText = document.getElementById('modal-auth-divider-text');
  const dict = translations[currentLang];
  
  document.getElementById('modal-auth-form').reset();
  
  if (mode === 'login') {
    if (signupFields) signupFields.classList.add('hidden');
    if (authBtn) authBtn.textContent = dict.btn_login;
    if (toggleBtn) toggleBtn.textContent = dict.signup_tab;
    if (dividerText) dividerText.textContent = currentLang === 'es' ? 'o inicia sesión' : 'or sign in';
  } else {
    if (signupFields) signupFields.classList.remove('hidden');
    if (authBtn) authBtn.textContent = dict.btn_signup;
    if (toggleBtn) toggleBtn.textContent = dict.login_tab;
    if (dividerText) dividerText.textContent = currentLang === 'es' ? 'o crea tu cuenta' : 'or create account';
  }
}

function toggleModalAuthMode() {
  const nextMode = currentModalAuthMode === 'login' ? 'signup' : 'login';
  switchModalAuth(nextMode);
}

function openAuthModal() {
  const modal = document.getElementById('auth-modal');
  if (modal) modal.classList.add('open');
  switchModalAuth('login');
}

function closeAuthModal() {
  const modal = document.getElementById('auth-modal');
  if (modal) modal.classList.remove('open');
}

function closeAuthModalOnOverlay(event) {
  if (event.target.id === 'auth-modal') {
    closeAuthModal();
  }
}

async function handleModalAuthSubmit(event) {
  event.preventDefault();
  
  const email = document.getElementById('modal-auth-email').value.trim();
  const password = document.getElementById('modal-auth-password').value;
  
  try {
    if (currentModalAuthMode === 'signup') {
      const displayName = document.getElementById('modal-reg-name').value.trim();
      const username = document.getElementById('modal-reg-username').value.trim().toLowerCase().replace(/[^a-zA-Z0-9_]/g, '');
      
      if (!displayName || !username) {
        throw new Error(currentLang === 'es' ? "Por favor completa todos los campos" : "Please fill in all fields");
      }
      
      const { data, error } = await supabaseClient.auth.signUp({
        email,
        password,
        options: {
          data: {
            username: username,
            display_name: displayName,
            username_setup_completed: true
          }
        }
      });
      if (error) throw error;
      
      showToast(currentLang === 'es' ? "¡Registro completado! Por favor, inicia sesión." : "Sign up successful! Please log in.");
      switchModalAuth('login');
    } else {
      // Sign In
      const { data, error } = await supabaseClient.auth.signInWithPassword({
        email,
        password
      });
      if (error) throw error;
      
      // Fetch public profile record
      const { data: profile, error: pe } = await supabaseClient.from('profiles').select('*').eq('id', data.user.id).single();
      if (pe || !profile) {
        throw new Error(currentLang === 'es' ? "Perfil público no encontrado en base de datos." : "Public profile not found in DB.");
      }
      
      window.currentUser = profile;
      sessionStorage.setItem('factos_session', JSON.stringify(profile));
      showToast("toast_welcome", false, profile.display_name);
      
      closeAuthModal();
      switchToAppView();
    }
  } catch (err) {
    showToast(err.message, true);
  }
}

function hideGuestFeedBanner() {
  const banner = document.getElementById('guest-feed-banner');
  if (banner) banner.classList.add('hidden');
  sessionStorage.setItem('factos_guest_banner_dismissed', 'true');
}

// ==========================================
// OAUTH USERNAME SETUP MODAL HANDLERS
// ==========================================

function openUsernameSetupModal() {
  const modal = document.getElementById('username-setup-modal');
  if (modal) modal.classList.add('open');
  applyTranslations();
}

function closeUsernameSetupModal() {
  const modal = document.getElementById('username-setup-modal');
  if (modal) modal.classList.remove('open');
}

async function handleUsernameSetupSubmit(event) {
  event.preventDefault();
  if (!supabaseClient || !window.currentUser) return;
  
  const submitBtn = event.target.querySelector('button[type="submit"]');
  if (submitBtn && submitBtn.disabled) return;
  
  const rawUsername = document.getElementById('setup-username').value.trim();
  const username = rawUsername.toLowerCase().replace(/[^a-zA-Z0-9_]/g, '');
  
  if (username.length < 3) {
    showToast(currentLang === 'es' ? "El nombre de usuario es muy corto." : "Username is too short.", true);
    return;
  }
  
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.5';
  }
  
  try {
    // 1. Verify username is unique
    const { data: existing, error: fe } = await supabaseClient
      .from('profiles')
      .select('id')
      .eq('username', username)
      .maybeSingle();
      
    if (fe) throw fe;
    if (existing) {
      showToast("toast_username_taken", true);
      return;
    }
    
    // 2. Update profiles table
    const { error: pe } = await supabaseClient
      .from('profiles')
      .update({ username: username })
      .eq('id', window.currentUser.id);
      
    if (pe) throw pe;
    
    // 3. Update auth user metadata
    const { error: ae } = await supabaseClient.auth.updateUser({
      data: { username_setup_completed: true }
    });
    if (ae) throw ae;
    
    closeUsernameSetupModal();
    
    // 4. Refresh local user state and UI
    await refreshCurrentUserState();
    updateUserProfileUI();
    renderFeed();
    
    showToast(currentLang === 'es' ? "¡Nombre de usuario configurado con éxito!" : "Username configured successfully!");
  } catch (err) {
    showToast(err.message, true);
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.style.opacity = '1';
    }
  }
}

// Scroll-reactive bottom navigation bar handler for mobile guests
let lastScrollY = window.scrollY;
const scrollThreshold = 10; // Avoid jitter

window.addEventListener('scroll', () => {
  // If user is logged in or viewport is desktop, do not hide bottom nav
  if (window.currentUser || window.innerWidth > 900) {
    const bottomNav = document.querySelector('.bottom-nav');
    const guestBottomBanner = document.getElementById('guest-bottom-banner');
    if (bottomNav) bottomNav.classList.remove('slide-down');
    if (guestBottomBanner) guestBottomBanner.classList.remove('slide-up');
    return;
  }

  const currentScrollY = window.scrollY;
  const diff = currentScrollY - lastScrollY;

  if (Math.abs(diff) < scrollThreshold) {
    return;
  }

  const bottomNav = document.querySelector('.bottom-nav');
  const guestBottomBanner = document.getElementById('guest-bottom-banner');

  if (diff > 0 && currentScrollY > 50) {
    // Scrolling down: hide menu bar, show guest banner
    if (bottomNav) bottomNav.classList.add('slide-down');
    if (guestBottomBanner) guestBottomBanner.classList.add('slide-up');
  } else {
    // Scrolling up: show menu bar, hide guest banner
    if (bottomNav) bottomNav.classList.remove('slide-down');
    if (guestBottomBanner) guestBottomBanner.classList.remove('slide-up');
  }

  lastScrollY = currentScrollY;
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 900 || window.currentUser) {
    const bottomNav = document.querySelector('.bottom-nav');
    const guestBottomBanner = document.getElementById('guest-bottom-banner');
    if (bottomNav) bottomNav.classList.remove('slide-down');
    if (guestBottomBanner) guestBottomBanner.classList.remove('slide-up');
  }
});
