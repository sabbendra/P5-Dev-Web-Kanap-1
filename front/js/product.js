//Récupération de la l'ID dans l'url avec URLSearchParams
//méthode 2 pour extraire l'ID 
const urlSearchParams = new URLSearchParams(window.location.search);
console.log(window.location);

//Afficher l'id avec la variable kanapId
let kanapId = urlSearchParams.get("id");
console.log(kanapId);

//Pour aller chercher des données, Envoi de la requête HTTP pour récupérer les donnés de l'API avec la méthode fetch
fetch("http://localhost:3000/api/products/" + kanapId)
//On demande d'afficher la réponse de fetch avec json (permet de transformer la réponse en js)
    .then((response) => response.json())
//On veut afficher la réponse de fetch avec json lisible, il faut donc faire 2 then
    /*.then((responseKanap) => console.table(responseKanap))*/


    .then((responseKanap) => {
        //Affichage de l'image
        const kanapImg = document.createElement("img");
        kanapImg.setAttribute("src",responseKanap.imageUrl);
        kanapImg.setAttribute("alt",responseKanap.altTxt);
        const kanapImgContainer = document.querySelector(".item__img");
        kanapImgContainer.appendChild(kanapImg);
        console.log(kanapImg);

        //Affichage du nom
        const kanapName = responseKanap.name;
        const productName = document.getElementById("title");
        productName.textContent = kanapName;
        console.log(productName);

        //Affichage du prix
        const kanapprice = responseKanap.price;
        const productprice = document.getElementById("price");
        productprice.textContent = kanapprice;
        console.log(productprice);

        //Affichage de la description
        const kanapdescription = responseKanap.description;
        const productdescription = document.getElementById("description");
        productdescription.textContent = kanapdescription;
        console.log(productdescription);

        //Affichage de la couleur
        let select = document.getElementById("colors");
        console.log(select);

        console.log(responseKanap.colors);

        responseKanap.colors.forEach((colorElement) => {
            console.log(document.createElement("option"));
            let tagOption = document.createElement("option");

            tagOption.innerHTML = `${colorElement} `;
            tagOption.value = `${colorElement} `;

            select.appendChild(tagOption);
            console.log(tagOption);
        });
        
    });

    //ajouter un évènement au panier
    //On a besoin d'abodrd de récupérer les données sélectionnées

    //sélection de l'id du formulaire concernant le produit
    
    /*let colors = document.getElementById("colors");
    let quantity = document.getElementById("quantity");
    let kanapName = document.getElementById("title");
    let price = document.getElementById("price");*/

    

    //sélection du bouton panier
    const btnCart = document.getElementById("addToCart");
    console.log(btnCart);

    //écouter le bouton et envoyer le panier dans le localStorage
    btnCart.addEventListener("click",(event)=>{
        event.preventDefault();

    let colors = document.getElementById("colors")
    let quantity = document.getElementById("quantity");
    let kanapName = document.getElementById("title").textContent;

        //On a besoin de récupérer les données sélectionnées
    let optionsProduct = {
        Id : kanapId,
        name : kanapName,
        colors : colors.value,
        quantity : quantity.value,
    };
    console.log(optionsProduct)

    //Affichage de la quantité
    let Quantityselect = document.getElementById("quantity");
    if (quantity.value >= 1 && quantity.value <= 100) {
        alert ("la quantité est ajoutée à votre panier")
    } else {
        alert ("Merci d'ajouter une quantité supérieur à zéro et infèrieur à 100")
    }
    console.log(Quantityselect);
    
    })


