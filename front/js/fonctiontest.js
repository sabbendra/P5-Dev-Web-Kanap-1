// Valeur enregistrée quand on clique sur le bouton

//on va enregistrer les clés et les valeurs (variable) dans le localStorage
function saveCart(productInLocalStorage){
    //JSON permet de transformer un tableau ou une chose complexe en chaine de caractère
    localStorage.setItem("keyproduct", JSON.stringify(productInLocalStorage));
}

//on va récupérer la donnée dans le localStorage qui porte la clé "keyproduct"
function getCart() {
    let cart = localStorage.getItem("keyproduct"); 
    if(cart == null){
            return[];
    } else {
      return JSON.parse(cart);
    }
}

//dans le localStorage on ne peut pas utiliser de tableau on va utiliser json pour lire le tableau en chaine de caractère
function addCart(product){
    let cart = getCart();
    //find permet de chercher dans un tableau si l'élément existe déjà
    //on cherche dans le panier si il y a un id qui est égal à l'id du produit que je veux ajouter
    let foundProduct = cart.find(productFind => productFind.id == product.id);
    if(foundProduct != undefined) {
        foundProduct.quantity++;//j'ajoute 1 à laquantité
    } else {
        product.quantity =1;
        //on ajoute le produit dans le tableau avec push
        cart.push(product);
    }
    saveCart(cart);
}

//Supprimer un produit du panier
function removeFromCart(product){
    let cart = getCart();
    cart = cart.filter(productFind => productFind.id != product.id);
    saveCart(cart);
}

//Pour changer la quantité
function changeQuantity(product,quantity){
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
    }

    //On récupère la quantité à partir du panier
    function getNumberProduct(){
        let cart = getCart();//on récupère le panier
        let number = 0;
        for(let product of cart) {
            number += product.quantity;
        }
        return number; 
    }
    console.log(getNumberProduct)

    //On récupère le prix à partir du panier
    function getTotalPrice(){
        let cart = getCart();
        let total = 0;
        for(let product of cart) {
            total += product.quantity * product.price;
        }
        return total;
    }   
    console.log(getTotalPrice)
}

