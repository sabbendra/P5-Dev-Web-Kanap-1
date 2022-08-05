// Valeur enregistrée quand on clique sur le bouton

//on va enregistrer les clés et les valeurs (variable) dans le localStorage
function saveCart(cart){
    localStorage.setItem ("cart", JSON.stringify(cart));
}

//on va récupérer la donnée dans le localStorage qui porte la clé "cart"
function getCart(){
    let cart = localStorage.getItem("cart");
    if (cart == null) {
        return [];
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
        foundProduct.quantity++;
    } else {
        product.quantity =1;
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
function changeQuantity(product,quantity) {
    let cart = getCart();
    let foundProduct = cart.find(productFind => productFind.id == product.id);
    //si le produit est trouvé on change sa quantité
    if (foundProduct != undefined){
        foundProduct.quantity += quantity;
        if(foundProduct.quantity <= 0) {
            removeFromCart(product);
        } else {
            saveCart(cart);
        }
    }

    //Onrécupère la quantité à partir du panier
    function getNumberProduct() {
        let cart = getCart();
        let number = 0;
        for(let product of cart) {
            number += product.quantity;
        }
        return number;
    }
    //Onrécupère le prix à partir du panier
   
    function getTotalPrice() {
        let cart = getCart();
        let total = 0;
        for(let product of cart) {
            total += product.quantity * product.price;
        }
        return total;
    }
    
}
/*
//on fait un exemple d'ajouter ces informations au panier
addCart({id:"4","name":"produit","price":15})

changeQuantity({id:"54"},5)
changeQuantity({id:"54"},-5)
addCart({id:"54","name":"produit","price":8})

console.log(getTotalPrice)*/

