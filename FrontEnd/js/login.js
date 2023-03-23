const loginForm = document.querySelector("form");
const emailField = document.querySelector("#email");
const passwordField = document.querySelector("#password");
const loginButton = document.querySelector(".login");

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
      if (response.status === 200) {
        return response.json();
      } else {
        console.log("Erreur identifiant ou mot de passe incorrect");
      }
    })
    .then((data) => {
      localStorage.setItem("token", data.token);
      localStorage.setItem("connected", true);
      window.location.href = "./index.html";
    })
    .catch((error) => {
      console.log(error);
    });
});
