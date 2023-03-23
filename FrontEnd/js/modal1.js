// Partie HTML modale ajouter des photos

// document.body.onload = addElement;

function addElement () {

    var modal = document.createElement('p').addClasst('modal') ==  <p class="modal"></p>;

    var close = document.createElement('div').addClasst('close') == <div class="close"></div>;
    var closeIcon = document.createElement('i').addClasst('fa-solid fa-xmark') == <i class="fa-solid fa-xmark"></i>;
    close.appendChild(closeIcon);

    var modalWrapper = document.createElement('div').addClasst('modalWrapper') == <div class="modalWrapper"></div>;
    var h2 = document.createElement('h2') == <h2>Galerie photo</h2>;
    var modalContainer = document.createElement('div').addClasst('modalContainer') == <div class="modalContainer"></div>;
    var addPicture = document.createElement('button').addClasst('addPicture') == <button class="addPicture">Ajouter une photo</button>;
    var deleteGal = document.createElement('p').addClasst('delete') == <p>Supprimer la galerie</p>;
    modalWrapper.appendChild(h2, modalContainer, addPicture, deleteGal)

// ajouter le nouvel élément créé et son contenu dans le DOM
  //var blabla = document.getElementById('');
  //document.body.insertBefore(truc, tructruc);

}

addElement();



//Les constantes 
const editBtn = document.querySelector('#edit')

//Ouvrir la modale sur la page

editBtn.addEventListener('click', openModal)




// 1 : Je clique sur le bouton "Modifier" -- > Affichage d'un console.log pour afficher le click 
// 2 : Créer une fonction pour créer une modale 
// 2 a : Affichage de la modale avec le CSS 
// 3 : Dans la modale je dispose d'un bouton qui permet de charger une nouvelle fonction
// 4 : Quand je clique sur le bouton afficher un console.log("tu ma clické")
// 5 : Modifier le contenu de la modale par le formulaire 
// 5 a : Afficher une modale vide avec un toto 
// 6 : Créer une modale qui prend un titre, un input, catégorie + CSS
// 7 : 5a -- > Afficher la nouvelle modale. 
// 8 : Envoyer les informations à l'API
// 8a : Image, le tire et la catégorie 
// 9 : Récupérer le retour de l'API success ou error 
// 10 : Récupérer le retour de l'api portfolio, et retraiter le DOM 

