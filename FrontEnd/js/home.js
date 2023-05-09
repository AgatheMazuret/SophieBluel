// Déclaration de l'URL pour récupérer les données
const apiUrl = "http://localhost:5678/api";

// On déclare les constantes
const filter = document.getElementById("filter");
const gallery = document.querySelector(".gallery");
const showAll = document.querySelector("#filter");

const allCategory = document.querySelector(".all");
const objectsCategory = document.querySelector(".objects");
const appartementsCategory = document.querySelector(".appartements");
const hotelsCategory = document.querySelector(".hotels");

// Fonction pour afficher une réalisation
function displayRealisation(work) {
  let figure = document.createElement("figure");
  figure.setAttribute("id", work.id);

  let img = document.createElement("img");
  let figcaption = document.createElement("figcaption");
  let h2 = document.createElement("h2");

  h2.textContent = work.title;

  img.src = work.imageUrl;
  img.alt = work.title;
  figcaption.textContent = work.title;

  figure.appendChild(img);
  figure.appendChild(figcaption);
  gallery.appendChild(figure);
}

// Fonction pour récupérer les réalisations en fonction de la catégorie
function getRealisationsByCategory(categoryId) {
  fetch(`${apiUrl}/works`)
    .then((res) => res.json())
    .then((data) => {
      gallery.innerHTML = "";
      for (let work of data.filter((work) => work.categoryId === categoryId)) {
        displayRealisation(work);
      }
    })
    .catch((err) => console.log(err));
}

// Fonction pour afficher toutes les réalisations
function showAllRealisations() {
  fetch(`${apiUrl}/works`)
    .then((res) => res.json())
    .then((data) => {
      gallery.innerHTML = "";
      for (let work of data) {
        displayRealisation(work);
      }
    })
    .catch((err) => console.log(err));
}

// On récupère toutes les réalisations au chargement de la page
window.addEventListener("load", showAllRealisations);

// Événements pour les catégories
allCategory.addEventListener("click", showAllRealisations);
objectsCategory.addEventListener("click", () => getRealisationsByCategory(1));
appartementsCategory.addEventListener("click", () => getRealisationsByCategory(2));
hotelsCategory.addEventListener("click", () => getRealisationsByCategory(3));
