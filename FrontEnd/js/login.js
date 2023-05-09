// On sélectionne les éléments du DOM avec lesquels on va travailler
const loginForm = document.querySelector("form");
const emailField = document.querySelector("#email");
const passwordField = document.querySelector("#password");
const loginButton = document.querySelector(".login");
const editBanner = document.querySelector(".edit");
const connexion = document.querySelector("#connexion");

// On écoute l'événement click sur le bouton de connexion
loginButton.addEventListener("click", function () {
  // On récupère les informations du formulaire
  const infos = {
    email: emailField.value,
    password: passwordField.value,
  };

  // On envoie les informations au serveur via une requête POST
  fetch("http://localhost:5678/api/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(infos),
  })
    .then((response) => {
      // Si la réponse n'est pas un code 200, on lève une erreur
      if (response.status != 200) {
        throw new Error();
      } else {
        // Sinon, on récupère le corps de la réponse (le token JWT)
        return response.json();
      }
    })
    .then((data) => {
      // On stocke le token JWT dans le localStorage
      localStorage.setItem("token", data.token);
      // On indique que l'utilisateur est connecté
      localStorage.setItem("connected", true);
      // On redirige l'utilisateur vers la page d'accueil
      window.location.href = "./index.html";
    })
    .catch(() => {
      // Si une erreur est levée (mauvaises informations de connexion), on affiche un message d'erreur
      const error = document.createElement("div");
      error.classList.add("credentials-error");
      error.innerHTML = "<span>Identifiant ou mot de passe incorrect</span>";
      connexion.appendChild(error);
    });
});

