let connected = localStorage.getItem("connected");
let btnLogout = document.querySelector("#logout");


if (connected) {
  btnLogout.addEventListener("click", () => {
    localStorage.removeItem("connected");
    localStorage.removeItem("token");
  });
}



// Faire la barre d'édition comme sur la maquette ( HTML  / CSS ) la laisser visible tous le temps
// Créer un fichier javascript qui permet de créer une modale  
// document.createElement('p').addClasst('modal') ==  <p class="modal"></p>

