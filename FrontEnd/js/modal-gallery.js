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
	// le bouton pour changer les projets n'apparaît pas
	const modifyProject = document.querySelector(".modifyProject");
	modifyProject.style.display = "none";
	// le bouton pour changer la description n'apparaît pas
	const modifyDescription = document.querySelector(".modifyDescription");
	modifyDescription.style.display = "none";
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
	// Les catégories n'apparaissent plus
	const category = document.querySelector(".categories");
	category.style.display = "none";
	//Créer un margin en dessous de Projets
	const mesProjects = document.querySelector("#projects");
	mesProjects.style.marginBottom = "80px";

	document.addEventListener("click", (event) => {
		// Appuyer sur mode édition
		if (
			event.target.classList.contains("modifyProject") ||
			event.target.classList.contains("edition")
		) {
			// Créer le background si il n'existe pas
			if (!document.querySelector(".background")) {
				// Créer le background
				const background = document.createElement("div");
				background.classList.add("background");
				document.querySelector("main").appendChild(background);
			}

			// Ouvrir modaleGallery si elle n'existe pas
			if (!document.querySelector(".modaleGallery")) {
				// Créer modaleGallery
				createModaleGallery();
			} else {
				document.querySelector(".modaleGallery").style.display = "flex";
			}
		}
	});

	// Créer la modaleGallery
	function createModaleGallery() {
		const modaleGallery = document.createElement("section");
		modaleGallery.classList.add("modaleGallery");

		// Créer un button closeModaleGallery
		const closeModaleGallery = document.createElement("button");
		closeModaleGallery.classList.add("closeModaleGallery");
		closeModaleGallery.innerHTML = '<i class="fa-solid fa-xmark"></i>';

		// L'ajouter closeModaleGallery au modaleGallery
		modaleGallery.appendChild(closeModaleGallery);

		// Créer h2
		const h2 = document.createElement("h2");
		h2.innerText = "Galerie Photo";

		// L'ajouter h2 au modaleGallery
		modaleGallery.appendChild(h2);

		// Créer la div projects
		const projects = document.createElement("div");
		projects.classList.add("projects");

		// L'ajouter projects au modaleGallery
		modaleGallery.appendChild(projects);

		// Récupérer toutes les images des projects actuels du code
		const getImagesProjectsOfCode = document.querySelectorAll(
			".gallery figure img"
		);

		for (let i = 0; i < getImagesProjectsOfCode.length; i++) {
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
			if (i === 0) {
				const move = document.createElement("button");
				move.classList.add("move");
				move.innerHTML =
					'<i class="fa-solid fa-arrows-up-down-left-right"></i>';
				project.appendChild(move);
			}

			// Ajouter l'image, p, et le button dans project
			project.appendChild(img);
			project.appendChild(p);
			project.appendChild(trash);
		}

		// Créer hr
		const hr = document.createElement("hr");

		// L'ajouter hr au modaleGallery
		modaleGallery.appendChild(hr);

		// Créer le button addPhoto et deletePhoto
		const addPhoto = document.createElement("button");
		addPhoto.classList.add("addPhoto");
		addPhoto.innerText = "Ajouter une photo";
		const deletePhoto = document.createElement("button");
		deletePhoto.classList.add("deletePhoto");
		deletePhoto.innerText = "Supprimer la galerie";

		// AJouter addPhoto, deletePhoto au modaleGallery
		modaleGallery.appendChild(addPhoto);
		modaleGallery.appendChild(deletePhoto);

		// Ajouter au main
		document.querySelector("main").appendChild(modaleGallery);
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

		// Close modaleGallery
		document.querySelector(".modaleGallery").remove();

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
				event.target.parentNode.parentNode.querySelectorAll("img")[0].src;

			// Récupérer et supprimer tous les éléments ayant cette image
			const imagesTrash = document.querySelectorAll("img[src='" + img + "']");
			for (let imageTrash of imagesTrash) {
				// Récupérer l'id et l'ajouter dans le tableau
				if (imageTrash.parentNode.id) {
					projectsTrash.push(imageTrash.parentNode.id);
				}

				// Supprimer l'id du projet actuel
				
				for (let idProject of projectsTrash) {
					fetch("http://localhost:5678/api/works/" + parseInt(idProject), {
						method: "DELETE",
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${localStorage.getItem("token")}`,
						},
					})
						.catch(error => {
							return console.log(error);
						});
				}
				

				// Delete
				imageTrash.parentNode.remove();
			}
		}

	});


}
