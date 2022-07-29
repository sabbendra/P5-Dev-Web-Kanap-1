//Récupération de la l'ID dans l'url
const theid = window.location.href;
console.log(theid);
console.log(window.location);

//Récupération de la l'ID dans l'url
const product = window.location.search.split("?").join("");
console.log(product);

let produitData = [];

const fetchProduit = async () => {
    
    await fetch("http://localhost:3000/api/products/" + product)
    .then((res) => res.json())
    .then((product) => {
        console.log(product);
    });
};

fetchProduit();/*


//Récupération de la l'ID dans l'url avec URLSearchParams
//méthode 2 pour extraire l'ID/*/
const urlSearchParams = new URLSearchParams(window.location.search);

if(urlSearchParams.has("id")){
    let idKanap = urlSearchParams.get("id");
    let imageAlt = document.querySelector("article div.item__img");
    let titre = document.querySelector("#title");
    let prix = document.querySelector("#price");
    let description = document.querySelector("#description");
    let couleurOption = document.querySelector("#colors");
    for (let i = 0; i < idKanap.length; i++){
        const productArticle = document.createElement("article");
        const productName = document.createElement("h3");

    }
} else {
    window.location.pathname = "http://127.0.0.1:5500/front/html/index.html";
} false;

/*const id = urlSearchParams.get("id")
console.log(urlSearchParams);*/

//Récupération des informations concernant l'ID sélectionné
// Card, image, nom image, prix, Description
