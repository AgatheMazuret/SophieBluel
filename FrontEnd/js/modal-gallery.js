let token = localStorage.getItem("token");
let user = localStorage.getItem("connected");

// Si l'utilisateur n'est pas connecté
if (user == null) {
  // le bouton logout n'apparaît pas
  const logout = document.querySelector("#logout");
  logout.style.display = "none";
  // le bouton pour changer la présentation n'apparaît pas
 const modifyPicture = document.querySelector(".modifyPicture");
  modifyPicture.style.display = "none";
  // le bouton pour changer les projets projets n'apparaît pas
  const modifyProject = document.querySelector(".modifyProject");
  modifyProject.style.display = "none";
  // Le bandeau mode édition est caché
  const element = document.querySelector(".edit");
  element.style.display = "none";
}

// Si l'utilisateur est connecté
if (user != null) {
  // Le bandeau mode édition apparaît
  const element = document.querySelector(".edit");
  element.style.display = "flex";
  element.style.backgroundColor = "black";
  // le bouton login n'apparaît pas
  const logNav = document.querySelector("#logNav");
  logNav.style.display = "none";

  document.addEventListener("click", (event) => {
    // Appuyer sur mode édition
    if (event.target.classList.contains("edition")) {
      // Créer le background si il n'existe pas
      if (!document.querySelector(".background")) {
        // Créer le background
        const background = document.createElement("div");
        background.classList.add("background");
        document.querySelector("main").appendChild(background);
      }

      // Ouvrir modaleGalery si elle n'existe pas
      if (!document.querySelector(".modaleGalery")) {
        // Créer modaleGalery
        createModaleGalery();
      } else {
        document.querySelector(".modaleGalery").style.display = "flex";
      }
    }
  });

  function createModaleGalery() {
    // Créer la modaleGalery
    const modaleGalery = document.createElement("section");
    modaleGalery.classList.add("modaleGalery");

    // Créer un button closeModaleGalery
    const closeModaleGalery = document.createElement("button");
    closeModaleGalery.classList.add("closeModaleGalery");
    closeModaleGalery.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    // L'ajouter closeModaleGalery au modaleGalery
    modaleGalery.appendChild(closeModaleGalery);

    // Créer h2
    const h2 = document.createElement("h2");
    h2.innerText = "Galerie Photo";

    // L'ajouter h2 au modaleGalery
    modaleGalery.appendChild(h2);

    // Créer la div projects
    const projects = document.createElement("div");
    projects.classList.add("projects");

    // L'ajouter projects au modaleGalery
    modaleGalery.appendChild(projects);

    // Récupérer toutes les images des projects actuels du code
    const getImagesProjectsOfCode = document.querySelectorAll(
      ".gallery figure img"
    );

  

    for( i = 0; i < getImagesProjectsOfCode.length; i++){
      // Créer la div project
      const project = document.createElement("div");
      project.classList.add("project");

      // Ajouter project dans projects
      projects.appendChild(project);

      // Créer l'image
      const img = document.createElement("img");
      img.src = getImagesProjectsOfCode[i].src;

      // Créer p
      const p = document.createElement("p");
      p.innerText = "éditer";

      // Créer le button poubelle
      const trash = document.createElement("button");
      trash.classList.add("trash");
      trash.innerHTML = '<i class="fa-regular fa-trash-can"></i>';

      // Créer button déplacer
      if(i === 0) {
        const move = document.createElement("button");
        move.classList.add("move");
        move.innerHTML = '<i class="fa-solid fa-arrows-up-down-left-right"></i>';
        project.appendChild(move);
      }

      // Ajouter l'image, p, et le button dans project
      project.appendChild(img);
      project.appendChild(p);
      project.appendChild(trash);
   
      
    }

    /*
    for (let getImageProject of getImagesProjectsOfCode) {

      
      // Créer la div project
      const project = document.createElement("div");
      project.classList.add("project");

      // Ajouter project dans projects
      projects.appendChild(project);

      // Créer l'image
      const img = document.createElement("img");
      img.src = getImageProject.src;

      // Créer p
      const p = document.createElement("p");
      p.innerText = "éditer";

      // Créer le button poubelle
      const trash = document.createElement("button");
      trash.classList.add("trash");
      trash.innerHTML = '<i class="fa-regular fa-trash-can"></i>';

      // Créer button déplacer
      const move = document.createElement("button");
      move.classList.add("move");
      move.innerHTML = '<i class="fa-solid fa-arrows-up-down-left-right"></i>';

      // Ajouter l'image, p, et le button dans project
      project.appendChild(img);
      project.appendChild(p);
      project.appendChild(trash);
      project.appendChild(move);

    }
    */

    // Créer hr
    const hr = document.createElement("hr");

    // L'ajouter hr au modaleGalery
    modaleGalery.appendChild(hr);

    // Créer le button addPhoto et deletePhoto
    const addPhoto = document.createElement("button");
    addPhoto.classList.add("addPhoto");
    addPhoto.innerText = "Ajouter une photo";
    const deletePhoto = document.createElement("button");
    deletePhoto.classList.add("deletePhoto");
    deletePhoto.innerText = "Supprimer la galerie";

    // AJouter addPhoto, deletePhoto au modaleGalery
    modaleGalery.appendChild(addPhoto);
    modaleGalery.appendChild(deletePhoto);

    // Ajouter au main
    document.querySelector("main").appendChild(modaleGalery);
  }

  //Close modale

  document.addEventListener("click", (event) => {
    // Appuyer sur fermer
    if (event.target.classList.contains("fa-xmark")) {
      closeModales();
    }
  });

  function closeModales() {
    // Supprimer le background
    document.querySelector(".background").remove();

    // Close modaleGalery
    document.querySelector(".modaleGalery").remove();

    // Close modaleAddPhoto si elle existe
    if (document.querySelector(".modaleAddPhoto")) {
      document.querySelector(".modaleAddPhoto").remove();
    }
  }

  // Projets supprimés
  let projectsTrash = [];

  document.addEventListener("click", (event) => {
    // S'il appuie sur le trash
    if (event.target.classList.contains("fa-trash-can")) {
      // Récupérer l'image qui veut être supprimé
      const img =
        event.target.parentNode.parentNode.querySelectorAll("*")[0].src;

      // Récupérer et supprimer tous les éléments ayant cette image
      const imagesTrash = document.querySelectorAll("img[src='" + img + "']");
      for (let imageTrash of imagesTrash) {
        // Récupérer l'id et l'ajouter dans le tableau
        if (imageTrash.parentNode["id"]) {
          projectsTrash.push(imageTrash.parentNode["id"]);
        }

        // Delete
        imageTrash.parentNode.remove();
      }
    }

    if (event.target.classList.contains("save")) {
      console.log(sessionStorage.getItem("token"));
      // Supprimer l'id du projet actuel
      for (let idProject of projectsTrash) {
        fetch("http://localhost:5678/api/works/" + parseInt(idProject), {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }).catch((error) => console.error(error));
      }
    }
  });
}

// Cas 1 : Utilisateur non connecté

/* 
  Afficher le bouton connexion 
  Cacher le boutton logout  (display none)
*/

// Cas 2 : Utilisateur connecté

/*
  Cacher le bouton connexion 
  Afficher le bouton logout

  Afficher la barre d'édition 
  Afficher les boutons modifier sur la page


  //  Afficher la barre d'édition  

  // CONDITION : ETRE CONNECTE

  if (user != null) ... {
      createNavAdmin();
      createModalGalery()
      document.addEventListener('click', (event) => { 
        
      }
  }

  function createNavAdmin()
  {
    <div> BTN EDITION / BTN PUBLIER LES CHANGEMENTS </div>
  }

  function createModaleGalery()...



  // ICI 




*/
