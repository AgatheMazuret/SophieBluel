// On récupère la valeur stockée dans le local storage
let connected = localStorage.getItem("connected");

// On sélectionne le bouton de déconnexion dans le DOM
let btnLogout = document.querySelector("#logout");

// Si l'utilisateur est connecté
if (connected) {
  // On ajoute un écouteur d'événement sur le clic du bouton de déconnexion
  btnLogout.addEventListener("click", () => {
    // On supprime les valeurs stockées dans le local storage
    localStorage.removeItem("connected");
    localStorage.removeItem("token");
    // On redirige l'utilisateur vers la page d'accueil
    window.location.href = "./index.html";
  });
}
