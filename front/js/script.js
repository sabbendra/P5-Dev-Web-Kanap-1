//Création de la constante pour récupérer tous les éléments de l'API
const productslist = document.getElementById("items");

//Récupération des produits l'API par une requête avec la méthode fetch
fetch("http://localhost:3000/api/products")
//pour traiter la réponse en json
.then((Response) => Response.json())

// products est la réponse renvoyée par l'API
.then((products) => { //on utilise la propriété length pour déterminer la longueur du tableau
    for(let i = 0; i < products.length; i++) {
        // C'est pour récupérer le lien du produit, document.createElement permet d'attribuer un élément html à la const
        const productlink = document.createElement("a");
        productlink.setAttribute("href", `product.html?id=${products[i]._id}`);
        //link est l'enfant de list on lui attribue
        productslist.appendChild(productlink);

        const productArticle = document.createElement("article");
        productlink.appendChild(productArticle);

        // C'est pour récupérer l'image du produit
        const productImage = document.createElement("img");
        productImage.setAttribute("src", products[i].imageUrl);
        productImage.setAttribute("alt", products[i].altTxt);
        productArticle.appendChild(productImage);

        // C'est pour récupérer le nom du produit en titre h3
        const productName = document.createElement("h3");
        productName.classList.add("productName");
        productName.textContent = products[i].name;
        productArticle.appendChild(productName);
        
        // C'est pour récupérer le descriptif du produit en paragraphe
        const productDescription = document.createElement("p");
        productDescription.classList.add("productDescription");
        productDescription.textContent = products[i].description;
        productArticle.appendChild(productDescription);
}
})

