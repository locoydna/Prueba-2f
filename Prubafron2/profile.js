// Cargo usuario en sesión
const usuario = JSON.parse(localStorage.getItem("loggedUser"));

// Si no hay sesión activa, vuelvo al login
if (!usuario) {
  window.location.href = "index.html";
} else {
  // Relleno título y campos con su info
  document.getElementById(
    "tituloJugador"
  ).textContent = `${usuario.characterName} – ${usuario.realm}`;

  document.getElementById("charName").textContent  = usuario.characterName;
  document.getElementById("realm").textContent     = usuario.realm;
  document.getElementById("race").textContent      = usuario.race;
  document.getElementById("charClass").textContent = usuario.charClass;
}

// Función para mostrar/ocultar estadísticas avanzadas
function toggleStats() {
  const stats = document.getElementById("statsExtras");
  stats.style.display = stats.style.display === "none" ? "block" : "none";
}

// Logout: limpio sesión y redirijo
function cerrarSesion() {
  localStorage.removeItem("loggedUser");
  window.location.href = "index.html";
}

/* ——— Slider de ilustraciones ——— */
const slides = [
  'imagenes/Animated_GIF_of_an_o.png',
  'imagenes/cazador_bestia.png',
  'imagenes/cazador_bestia_2.png',
  'imagenes/colina2.0.png',
  'imagenes/enano_caballero.png'
];
let idx = 0;

const slideImg = document.getElementById("slide");
const prevBtn  = document.getElementById("prev");
const nextBtn  = document.getElementById("next");

function showSlide(i) {
  idx = (i + slides.length) % slides.length;
  slideImg.src = encodeURI(slides[idx]);
}

prevBtn.addEventListener("click", () => showSlide(idx - 1));
nextBtn.addEventListener("click", () => showSlide(idx + 1));

// Muestra la primera imagen al cargar
showSlide(0);