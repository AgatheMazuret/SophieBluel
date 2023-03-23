// déclaration de l'url pour récupérer les données
const url = "http://localhost:5678/api/categories";
const works = "http://localhost:5678/api/works";

const filter = document.getElementById("filter");
const gallery = document.querySelector(".gallery");
const showAll = document.querySelector("#filter");

const allCategorie = document.querySelector(".all");
const objects = document.querySelector(".objects");
const appartements = document.querySelector(".appartements");
const hotels = document.querySelector(".hotels")
/*

// Création d'une fonction pour récupérer les données
const getCategories = async (url) => {
    // fetch (sans METHODE) donc = GET (récupération)
    await fetch(url)
    .then(function (response) {
        // Si l'api retourne un résultat on retourne le résultat en format JSON
        return response.json()
    })
    .then(function (data) {
        // Si le premier then est ok : on créer une fonction displayCategories qui récupère les données du premier then
        displayCategories(data)
    })

    // Dans le cas où l'api retourne un résultat on retourne ou ne fonctionne pas
    .catch(function (error) {
        console.log(error)
    })
}

// On appel la fonction
getCategories(url)


// Création d'une fonction pour traiter les catégories dans le DOM
function displayCategories(data) {
    for (let i = 0; i < data.length; i++) {
        let button = document.createElement('button')
        button.classList.add('btn')
        button.textContent = data[i].name
      
        button.addEventListener('click', () => {
            displayRealisation(works, data[i].id)
            })
        
        filter.appendChild(button)     
    }
}



// Affichage des réalisations
function displayRealisation(works, id) {
    fetch(works)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(id)

     for(let work of data){         
        if(work.categoryId === id){

            let figure = document.createElement('figure')
            let img = document.createElement('img')
            let figcaption = document.createElement('figcaption')
               
            img.src = work.imageUrl
            img.alt = work.title         
            figcaption.textContent = work.title

            figure.appendChild(img)
            figure.appendChild(figcaption)            
            gallery[0].appendChild(figure)     

          
        }
     }

    })
    .catch(function (error) {
        console.log(error)
    })

}


*/

fetch("http://localhost:5678/api/works")
  .then((res) => res.json())
  .then((data) => {
    for (let work of data) {
      let figure = document.createElement("figure");
      figure.setAttribute("id", work.id);

      let img = document.createElement("img");
      let figcaption = document.createElement("figcaption");

      img.src = work.imageUrl;
      img.alt = work.title;
      figcaption.textContent = work.title;

      figure.appendChild(img);
      figure.appendChild(figcaption);
      gallery.appendChild(figure);
    }
  })
  .catch((err) => console.log(err));

allCategorie.addEventListener("click", () => {
  fetch("http://localhost:5678/api/works")
    .then((res) => res.json())
    .then((data) => {
      allCategorie.classList.add("active");

      if (allCategorie.classList.contains("active")) {
        gallery.innerHTML = "";
      }

      for (let work of data) {
        let figure = document.createElement("figure");
        figure.setAttribute("id", work.id);

        let img = document.createElement("img");
        let figcaption = document.createElement("figcaption");

        img.src = work.imageUrl;
        img.alt = work.title;
        figcaption.textContent = work.title;

        figure.appendChild(img);
        figure.appendChild(figcaption);
        gallery.appendChild(figure);
      }
    });
});

objects.addEventListener("click", () => {
  fetch("http://localhost:5678/api/works")
    .then((res) => res.json())
    .then((data) => {
      allCategorie.classList.add("active");

      if (allCategorie.classList.contains("active")) {
        gallery.innerHTML = "";
      }

      for (let work of data.filter((work) => work.categoryId === 1)) {
        displayRealisation(work);
        /*
     
                let figure = document.createElement('figure')
                figure.setAttribute('id', work.id)
                        
                let img = document.createElement('img')
                let figcaption = document.createElement('figcaption')
                
                img.src = work.imageUrl
                img.alt = work.title         
                figcaption.textContent = work.title
        
                figure.appendChild(img)
                figure.appendChild(figcaption)            
                gallery.appendChild(figure) 

                PAR     displayRealisation(work) 
            */
      }
    });
});

// FUNCTION LE_NOM_QUE_TU_SOUHAITE (PARAMS)
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

appartements.addEventListener("click", () => {
  fetch("http://localhost:5678/api/works")
    .then((res) => res.json())
    .then((data) => {
      gallery.innerHTML = "";
      for (let work of data.filter((work) => work.categoryId === 2)) {
        displayRealisation(work)
      }
    });
});

hotels.addEventListener("click",() => {
   fetch("http://localhost:5678/api/works")
   .then((res) => res.json())
   .then((data) => {
    gallery.innerHTML = "";
    for (let work of data.filter((work) => work.categoryId === 3)) {
        displayRealisation(work)
    }
   });
});
