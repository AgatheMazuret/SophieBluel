document.addEventListener('click', (event) => {
    // Appuyer sur ajouter une photo
    if (event.target.classList.contains('addPhoto')) 
    {
        // Ouvrir modaleGalery si elle n'existe pas
        if (!document.querySelector('.modaleAddPhoto'))
        {
            // Cacher modaleGalery
            document.querySelector('.modaleGalery').style.display = "none";
            
            // Créer modaleAddPhoto
            createModaleAddPhoto();
        }
    }
});

function createModaleAddPhoto()
{
    // Créer la modaleGalery
    const modaleAddPhoto = document.createElement('section');
    modaleAddPhoto.classList.add('modaleAddPhoto');

    // Créer la div iconesCloseReturn
    const iconesCloseReturn = document.createElement('div');
    iconesCloseReturn.classList.add('iconesCloseReturn');

    // Ajouter iconesCloseReturn à modaleAddPhoto
    modaleAddPhoto.appendChild(iconesCloseReturn);

    // Créer les deux boutons pour iconesCloseReturn
    const buttonReturn = document.createElement('button');
    buttonReturn.classList.add('return');
    buttonReturn.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';
    const buttonClose = document.createElement('button');
    buttonClose.classList.add('closeModaleAddPhoto');
    buttonClose.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    // Ajouter return et closeModaleAddPhoto à iconesCloseReturn
    iconesCloseReturn.appendChild(buttonReturn);
    iconesCloseReturn.appendChild(buttonClose);

    // Créer le h2
    const h2 = document.createElement('h2');
    h2.innerText = "Ajout photo";
    
    // AJouter le h2 à modaleAddPhoto
    modaleAddPhoto.appendChild(h2);

    // Créer le form
    const form = document.createElement('form');
    form.classList.add('addPhotoForm')
    // Ajouter le form au modaleAddPhoto
    modaleAddPhoto.appendChild(form);

    // Créer la div formAddPhoto
    const formAddPhoto = document.createElement('div');
    formAddPhoto.classList.add('formAddPhoto');

    // L'ajouter à form
    form.appendChild(formAddPhoto);

    // Créer l'image, le button, et p pour formAddPhoto
    const picture = document.createElement('img');
    picture.classList.add('picture');
    picture.src = "assets/images/picture.jpg";
    const buttonAjouterPhoto = document.createElement('button');
    buttonAjouterPhoto.setAttribute('type', 'button');
    buttonAjouterPhoto.classList.add('buttonFilePicture');
    buttonAjouterPhoto.innerHTML = '<i class="fa-solid fa-plus"></i> Ajouter photo';
    const p = document.createElement('p');
    p.innerText = "jpg, png : 4mo max";

    // L'ajouter à formAddPhoto
    formAddPhoto.appendChild(picture);
    formAddPhoto.appendChild(buttonAjouterPhoto);
    formAddPhoto.appendChild(p);

    // Créer un label et input
    const titlePhoto = document.createElement('label');
    titlePhoto.setAttribute('for', 'titlePhoto');
    titlePhoto.setAttribute('id', 'titlePhoto');
    titlePhoto.innerText = "Titre";
    
    const inputTitlePhoto = document.createElement('input');
    inputTitlePhoto.setAttribute("type", "text");
    inputTitlePhoto.setAttribute("name", "titlePhoto");
    inputTitlePhoto.classList.add('inputTitlePhoto');

    // Les ajouter au form
    form.appendChild(titlePhoto);
    form.appendChild(inputTitlePhoto);

    // label et select
    const categoryPhoto = document.createElement('label');
    categoryPhoto.setAttribute('for', 'categoryPhoto');
    categoryPhoto.setAttribute('id', 'categoryPhoto');
    categoryPhoto.innerText = "Catégorie";

    const select = document.createElement("select");
    select.setAttribute("name", "categoryPhoto");
    select.setAttribute("class", "optionsPhoto");
    
    const option0 = document.createElement("option");
    option0.setAttribute("value", "0");
    
    const option1 = document.createElement("option");
    option1.setAttribute("value", "1");
    option1.appendChild(document.createTextNode("Objets"));
    
    const option2 = document.createElement("option");
    option2.setAttribute("value", "2");
    option2.appendChild(document.createTextNode("Appartements"));

    const option3 = document.createElement("option");
    option3.setAttribute("value", "3");
    option3.appendChild(document.createTextNode("Hôtels & restaurants"));

    // Les ajouter au form
    form.appendChild(categoryPhoto);
    select.appendChild(option0);
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    form.appendChild(select);

    // HR
    const hr = document.createElement('hr');

    // L'ajouter
    form.appendChild(hr)

    // Créer un button submitAddPhoto
    const submitAddPhoto = document.createElement('button');
    submitAddPhoto.setAttribute('type', 'button');
    submitAddPhoto.classList.add('submitAddPhoto');
    submitAddPhoto.innerText = 'Valider';

    // L'ajouter
    form.appendChild(submitAddPhoto);

    // Ajouter au main
    document.querySelector('main').appendChild(modaleAddPhoto)
}
