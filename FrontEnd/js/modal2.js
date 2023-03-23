document.addEventListener('click', (event) => {

 
    // Appuyer sur mode édition
    if (event.target.classList.contains('edition')) {

        // Créer le background si il n'existe pas
        if (!document.querySelector('.background'))
        {
            // Créer le background
            const background = document.createElement('div');
            background.classList.add('background');
            document.querySelector('main').appendChild(background)
        }

        // Ouvrir modaleGalery si elle n'existe pas
        if (!document.querySelector('.modaleGalery'))
        {
            // Créer modaleGalery
            createModaleGalery();
        }
        else 
        {
            document.querySelector('.modaleGalery').style.display = "flex";
        }
    }
});

function createModaleGalery()
{

    // Créer la modaleGalery
    const modaleGalery = document.createElement('section');
    modaleGalery.classList.add('modaleGalery');

    // Créer un button closeModaleGalery
    const closeModaleGalery = document.createElement('button');
    closeModaleGalery.classList.add('closeModaleGalery');
    closeModaleGalery.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    // L'ajouter closeModaleGalery au modaleGalery
    modaleGalery.appendChild(closeModaleGalery);

    // Créer h2
    const h2 = document.createElement('h2');
    h2.innerText = "Galerie Photo";

    // L'ajouter h2 au modaleGalery
    modaleGalery.appendChild(h2);

    // Créer la div projects
    const projects = document.createElement('div');
    projects.classList.add('projects');

    // L'ajouter projects au modaleGalery
    modaleGalery.appendChild(projects);
    
    // Récupérer toutes les images des projects actuels du code
    const getImagesProjectsOfCode = document.querySelectorAll('.gallery figure img');
    for (let getImageProject of getImagesProjectsOfCode)
    {
        // Créer la div project
        const project = document.createElement('div');
        project.classList.add('project');

        // Ajouter project dans projects
        projects.appendChild(project);

        // Créer l'image
        const img = document.createElement('img');
        img.src = getImageProject.src;

        // Créer p
        const p = document.createElement('p');
        p.innerText = "éditer";

        // Créer le button poubelle
        const trash = document.createElement('button');
        trash.classList.add("trash")
        trash.innerHTML = '<i class="fa-regular fa-trash-can"></i>'

        // Ajouter l'image, p, et le button dans project
        project.appendChild(img);
        project.appendChild(p);
        project.appendChild(trash);
    }

    // Créer hr
    const hr = document.createElement('hr');

    // L'ajouter hr au modaleGalery
    modaleGalery.appendChild(hr);

    // Créer le button addPhoto et deletePhoto
    const addPhoto = document.createElement('button');
    addPhoto.classList.add('addPhoto');
    addPhoto.innerText = "Ajouter une photo";
    const deletePhoto = document.createElement('button');
    deletePhoto.classList.add('deletePhoto');
    deletePhoto.innerText = "Supprimer la galerie";

    // AJouter addPhoto, deletePhoto au modaleGalery
    modaleGalery.appendChild(addPhoto);
    modaleGalery.appendChild(deletePhoto);

    // Ajouter au main
    document.querySelector('main').appendChild(modaleGalery);
}