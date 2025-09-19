// ---- GOOGLE LOGIN ----
function handleGoogleCredentialResponse(response) {
  // Decodificar JWT (exemplo básico)
  const data = JSON.parse(atob(response.credential.split('.')[1]));
  alert(`Olá, ${data.name}!\nEmail: ${data.email}`);
  console.log("Dados do Google:", data);
}

// ---- APPLE LOGIN ----
AppleID.auth.init({
  clientId: "com.seuapp.web",
  scope: "name email",
  redirectURI: "https://seusite.com/callback",
  usePopup: true
});

document.getElementById("appleid-signin").addEventListener("click", () => {
  AppleID.auth.signIn().then(res => {
    console.log("Dados da Apple:", res);
    alert(`Olá, ${res.user?.name?.firstName || "Usuário Apple"}!`);
  }).catch(err => {
    console.error("Erro no login Apple:", err);
  });
});
