const loginForm = document.querySelector("form");
const emailField = document.querySelector("#email");
const passwordField = document.querySelector("#password");
const loginButton = document.querySelector(".login");
const editBanner = document.querySelector(".edit");

const connexion = document.querySelector("#connexion");

loginButton.addEventListener("click", function () {
  const infos = {
    email: emailField.value,
    password: passwordField.value,
  };

  fetch("http://localhost:5678/api/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(infos),
  })
    .then((response) => {
      if (response.status != 200) {
        throw new Error();
      } else {
        return response.json();
      }
    })
    .then((data) => {
      localStorage.setItem("token", data.token);
      localStorage.setItem("connected", true);
      window.location.href = "./index.html";
    })
    .catch(() => {
      const error = document.createElement("div");
      error.classList.add("credentials-error");
      error.innerHTML = '<span>Identifiant ou mot de passe incorrect</span>';
      connexion.appendChild(error);
    });
});
