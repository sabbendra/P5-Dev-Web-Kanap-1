/*let productInLocalStorage = JSON.parse(localStorage.getItem("keyproduct"));
console.log(productInLocalStorage);*/

//on va enregistrer les clés et les valeurs (variable) dans le localStorage
/*function saveCart(cart){
    //JSON permet de transformer un tableau ou une chose complexe en chaine de caractère
    localStorage.setItem("keyproduct", JSON.stringify(cart));
}*/

//on va récupérer la donnée dans le localStorage qui porte la clé "keyproduct"
let cart = getCart();
function getCart() { 
    let cart = localStorage.getItem("keyproduct"); 
    if(cart == null){
            return[];
    } else {
      return JSON.parse(cart);
    }
}
console.log(getCart);

//Pour accéder aux éléments 
const cartItems = document.getElementById("cart__items");
const cartTitle = document.querySelector("h1");
const cartPrice = document.querySelector(".cart__price p");
const cartOrder = document.querySelector(".cart__order");
let totalQuantity = document.getElementById("totalQuantity");
let totalPrice = document.getElementById("totalPrice");
let totalCartPrice = 0;



    for (let product of cart) {
        let kanapId = product.id;
        let kanapColor = product.colors;
        let kanapQuantity = product.quantity;
        let kanapName = product.name;
        fetch("http://localhost:3000/api/products/" + kanapId)
        .then((response) => response.json()
            .then((kanap) => {
              let productArticle = document.createElement("article");
              productArticle.classList.add("cart__item");
              productArticle.setAttribute("data-id", kanapId);
              productArticle.setAttribute("data-color", kanapColor);
              cartItems.appendChild(productArticle);
      
              //Créer l'élément "productImgContainer", ajouter "cart__item__img class" et définir "productImgContainer" comme l'enfant de "productArticle"
              let productImgContainer = document.createElement("div");
              productImgContainer.classList.add("cart__item__img");
              productArticle.appendChild(productImgContainer);
      
              //Créer l'élément "productImg", ajouter les attributs et définir "productImg" comme l'enfant de "productImgContainer"
              let productImg = document.createElement("img");
              productImg.setAttribute("src", kanap.imageUrl);
              productImg.setAttribute("alt", kanap.altTxt);
              productImgContainer.appendChild(productImg);
      
              //Créer l'élément "productContent", ajouter "cart__item__content class" et définir "productContent" comme l'enfant de "productArticle"
              let productContent = document.createElement("div");
              productContent.classList.add("cart__item__content");
              productArticle.appendChild(productContent);
      
              //Créer l'élément "productContentDescription", ajouter "cart__item__content__description class" et définir "productContentDescription" comme l'enfant de "productContent"
              let productContentDescription = document.createElement("div");
              productContentDescription.classList.add("cart__item__content__description");
              productContent.appendChild(productContentDescription);
      
              let kanapName = document.createElement("h2");
              kanapName.textContent = kanap.name;
              productContentDescription.appendChild(kanapName);
      
              //Créer l'élément "productColorPicked", en insérant la couleur choisie par l'utilisateur à l'étape précédente et en la définissant comme enfant de l'élément productContentDescription 
              let productColorPicked = document.createElement("p");
              productColorPicked.textContent = kanapColor;
              productContentDescription.appendChild(productColorPicked);
      
              //Créer l'élément "price", insertion de la valeur renvoyée par l'API, et définir "price" comme l'enfant de "productContentDescription" 
              let price = document.createElement("p");
              price.textContent = + kanap.price + " €";
              productContentDescription.appendChild(price);
      
              //Créer l'élément "productContentSettings", ajouter "cart__item__content__settings" et définir "productContentSettings" comme l'enfant de "productContent" 
              let productContentSettings = document.createElement("div");
              productContentSettings.classList.add("cart__item__content__settings");
              productContent.appendChild(productContentSettings);
      
              //Créer l'élément "productQuantitySettings", ajouter "cart__item__content__settings__quantity" et définir "productContentSettings" comme l'enfant de "productContentSettings" 
              let productQuantitySettings = document.createElement("div");
              productQuantitySettings.classList.add("cart__item__content__settings__quantity");
              productContentSettings.appendChild(productQuantitySettings);
      
              //Créer l'élément "productQuantityPickedLabel", ajouter ""Quantité : "" et définir "productQuantityPickedLabel" comme l'enfant de "productQuantitySettings" 
              let productQuantityPickedLabel = document.createElement("p");
              productQuantityPickedLabel.textContent = "Quantité : ";
              productQuantitySettings.appendChild(productQuantityPickedLabel);
      
              //Créer l'élément "productQuantityPicked", ajouter les attributs, insérer la quantité sélectionnée par l'utilisateur à l'étape précédente et définir comme enfant de l'élément productQuantitySettings
              let productQuantityPicked = document.createElement("input");
              productQuantityPicked.setAttribute("type", "number");
              productQuantityPicked.setAttribute("name", "itemQuantity");
              productQuantityPicked.setAttribute("min", 1);
              productQuantityPicked.setAttribute("max", 100);
              productQuantityPicked.setAttribute("value", kanapQuantity);
              productQuantityPicked.classList.add("itemQuantity");
              productQuantitySettings.appendChild(productQuantityPicked);
      
              //Créer l'élément "productDelete", ajouter "cart__item__content__settings__delete" class et définir comme enfant de l'élément productContentSettings 
              let productDelete = document.createElement("div");
              productDelete.classList.add("cart__item__content__settings__delete");
              productContentSettings.appendChild(productDelete);
      
              // Créer l'élément "productDeleteButton", ajouter "deleteItem" class, inserer text content et définir comme enfant de l'élément productDelete 
              let productDeleteButton = document.createElement("p");
              productDeleteButton.classList.add("deleteItem");
              productDeleteButton.textContent = "Supprimer";
              productDelete.appendChild(productDeleteButton);
      
              //Utiliser "the event listener" pour exécuter "removeFromCart" lorsque l'on clique sur le bouton de suppression
              productDeleteButton.addEventListener("click", function () {
                //Supprimer un produit du panier
                removeFromCart(product);
                alert("L'article a bien été retiré de votre panier.");
                /* chargement de la page */
                document.location.reload();
              });
              //On récupère la quantité à partir du panier
                /*function getNumberProduct(){
                let cart = getCart();//on récupère le panier
                let number = 0;
                for(let product of cart) {
                number += product.quantity;
                }
                return number; 
                }*/
              console.log(getNumberProduct);
              totalQuantity.textContent = getNumberProduct();

              //On récupère le prix à partir du panier
               /* function getTotalPrice(){
                let cart = getCart();
                let total = 0;
                for(let product of cart) {
                total += product.quantity * product.price;
                }
                return total;
                }   */
                console.log(getTotalPrice);
              totalPrice.textContent = getTotalPrice(kanap, kanapQuantity);
              let oldQuantity = Number(productQuantityPicked.value);
                
              //Pour changer la quantité
              /*function changeQuantity(product,quantity){
              let cart = getCart();
              let foundProduct = cart.find(productFind => productFind.id == product.id);
              //si le produit est trouvé on change sa quantité
              if (foundProduct != undefined){
              foundProduct.quantity += quantity;
              if (foundProduct.quantity <= 0) {
                  removeFromCart(foundProduct);
              } else {
                  saveCart(cart);
              }
              }};*/

              productQuantityPicked.addEventListener("change", () => {
                /* On définis la nouvelle quantité de produit à l'aide de la fonction changeQuantity, on enregistre dans le panier avec la fonction modifyQuantity */
                kanapQuantity = changeQuantity(product, Number(productQuantityPicked.value));
                /* On utilise la fonction "changeTotalPrice" pour calculer le nouveau prix de chaque article avec le nombre de quantité */
                totalPrice.textContent = changeTotalPrice(kanap, oldQuantity, Number(productQuantityPicked.value));
                /* On définis la nouvelle quantité pour l'utiliser lors d'une modification */
                oldQuantity = Number(productQuantityPicked.value);
                /* On récupère la quantité totale dans le panier à l'aide de la fonction getNumberProduct */
                totalQuantity.textContent = getNumberProduct();
                });
            
              })

            /* Si la requête de l'API a échoué, créer un message pour informer l'utilisateur que quelque chose s'est mal passé' */
           .catch((error) => {
              console.log("Erreur chargement cart" + error);
              let cartErrorMessage = document.createElement("h2");
              cartErrorMessage.textContent = "Le canapé ne peut être ajouté pour le moment.";
              cartItems.appendChild(cartErrorMessage);
              total.textContent = "page en erreur";
            })
        );
            if (cart.length === 0) {
              cartTitle.textContent = "Votre panier est vide";
              /*total.innerHTML =
                '<a href="./index.html">Retourner à la page produits.</a>';
              total.style.textAlign = "center";
              total.style.fontSize = "35px";*/
            } 

          };