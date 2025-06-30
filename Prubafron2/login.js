// Referencias DOM
const loginForm       = document.getElementById("loginForm");
const registerForm    = document.getElementById("registerForm");
const message         = document.getElementById("message");

// Campos extra de registro
const registerCharName= document.getElementById("registerCharName");
const registerRealm   = document.getElementById("registerRealm");
const registerRace    = document.getElementById("registerRace");
const registerClass   = document.getElementById("registerClass");

// Cargo o inicializo la lista de usuarios
let users = JSON.parse(localStorage.getItem("users")) || [];

// ——— Registro de usuario ———
registerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const username       = document.getElementById("registerUser").value.trim();
  const password       = document.getElementById("registerPass").value.trim();
  const characterName  = registerCharName.value.trim();
  const realm          = registerRealm.value;
  const race           = registerRace.value;
  const charClass      = registerClass.value;

  // Verifico que no exista el usuario
  if (users.some(u => u.username === username)) {
    message.style.color = "#f66";
    message.textContent = "⚠️ El usuario ya existe.";
    return;
  }

  // Agrego el usuario con su info extra
  users.push({ username, password, characterName, realm, race, charClass });
  localStorage.setItem("users", JSON.stringify(users));

  message.style.color = "#8f8";
  message.textContent = "✅ Registro exitoso. Ahora inicia sesión.";
  registerForm.reset();
});

// ——— Inicio de sesión ———
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("loginUser").value.trim();
  const password = document.getElementById("loginPass").value.trim();

  // Busco credenciales
  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (user) {
    // Guardo usuario logueado y redirijo
    localStorage.setItem("loggedUser", JSON.stringify(user));
    window.location.href = "profile.html";
  } else {
    message.style.color = "#f66";
    message.textContent = "❌ Usuario o contraseña incorrectos.";
  }
});