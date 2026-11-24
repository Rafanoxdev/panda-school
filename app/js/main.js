import { APP_NAME, APP_TAGLINE } from "./config.js";

document.title = APP_NAME;
document.getElementById("app-name").textContent = APP_NAME;
document.getElementById("app-tagline").textContent = APP_TAGLINE;

// Registra o service worker (offline + instalável)
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch((err) =>
    console.error("Falha ao registrar o service worker:", err)
  );
}

// Botão de instalar
let deferredPrompt = null;
const installBtn = document.getElementById("install-btn");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredPrompt = event;
  installBtn.hidden = false;
});

installBtn.addEventListener("click", async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  installBtn.hidden = true;
});
