let works = [];
let file;
let titlePhoto;

document.addEventListener('click', (event) => {

    // Cliquer sur le bouton pour ajotuet et choisir l'image
    if (event.target.classList.contains('buttonFilePicture')) {
        // Choisir l'image
        chooseImage();
    }

    // Cliquer sur le button submitAddPhoto pour l'afficher
    if (event.target.classList.contains('submitAddPhoto')) {
        
        // Récupérer le titre
        titlePhoto = document.querySelector('.inputTitlePhoto').value;

        // Récupérer la catégorie
        categoryPhoto = document.querySelector('.optionsPhoto').value;

        if (titlePhoto.trim().length > 0 && categoryPhoto != 0)
        {
            // Créer la data pour le POST
            works.push({
                "image": file,
                "title": titlePhoto,
                "category": parseInt(categoryPhoto)
            })

            // Afficher l'image dans les figures
            displayImageFigure();

            // Fermer la modale
            closeModales();
        }
        else 
        {
            if (titlePhoto.trim().length === 0)
            {
                if (!document.querySelector('.errorTitle'))
                {
                    let errorTitle = document.createElement('p');
                    errorTitle.classList.add('errorTitle');
                    errorTitle.innerText = "Veuillez choisir un titre";
                    errorTitle.style.textAlign = "center";
                    errorTitle.style.marginTop = "10px";
                    document.querySelector('.addPhotoForm').appendChild(errorTitle)
                }
            }

            if (categoryPhoto == 0)
            {
                if (!document.querySelector('.errorCategory'))
                {
                    let errorCategory = document.createElement('p');
                    errorCategory.classList.add('errorCategory');
                    errorCategory.innerText = "Veuillez choisir une catégorie";
                    errorCategory.style.textAlign = "center";
                    errorCategory.style.marginTop = "10px";
                    document.querySelector('.addPhotoForm').appendChild(errorCategory)
                }
            }
        }
    }

    // Publier
    if (event.target.classList.contains('save')) {        
        save();
    }
});

function chooseImage() {
    // créer un input de type "file"
    const input = document.createElement("input");
    input.type = "file";

    // Ouvrir le gestionnaire afin de choisir l'image
    input.click();

    // Écouter les changements
    input.addEventListener("change", (event) => {
        // récupérer le fichier sélectionné
        file = event.target.files[0];

        // l'afficher
        displayImagePicture();
    });
}

function displayImagePicture() {
    // Créer l'image
    const img = document.createElement("img");
    img.classList.add('thePhoto');

    // Changer la source de l'image
    img.src = URL.createObjectURL(file);

    // Enlever la picture, buttonFilePicture, p
    document.querySelector('.picture').remove();
    document.querySelector('.buttonFilePicture').remove();
    document.querySelector('.formAddPhoto p').remove();

    // L'ajouter à l'endroit voulu
    document.querySelector('.formAddPhoto').appendChild(img);
}

function displayImageFigure()
{
    // Créer une figure
    const figure = document.createElement('figure');

    // Créer l'image du projet
    const image = document.createElement('img');
    image.src = document.querySelector('.thePhoto').src;
    image.alt = titlePhoto;

    // Créer le figcaption pour le titre
    const figcaption = document.createElement('figcaption');
    figcaption.innerText = titlePhoto;

    // Les ajouter à la figure
    figure.appendChild(image);
    figure.appendChild(figcaption);

    // L'jouter à la gallery
    document.querySelector('.gallery').appendChild(figure);
}

function closeModales()
{    
    // Supprimer le background
    document.querySelector('.background').remove()

    // Close modaleGalery
    document.querySelector('.modaleGalery').remove()
    
    // Close modaleAddPhoto si elle existe
    if (document.querySelector('.modaleAddPhoto'))
    {
        document.querySelector('.modaleAddPhoto').remove();
    }
}

function save() { 
    
    for (let work of works)
    {   
        let formdata = new FormData();
        formdata.append("image", work.image, work.image.name);
        formdata.append("title", work.title);
        formdata.append("category", work.category);
         
        fetch("http://localhost:5678/api/works", {
            method: "POST",
            headers: {
                "accept": "application/json",
                "Authorization": `Bearer ${sessionStorage.getItem('token')}`
            },
            body: formdata
        })
        .catch(error => console.log(error));
    }
}