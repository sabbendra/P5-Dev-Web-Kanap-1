// Valeur enregistrée quand on clique sur le bouton

//on va enregistrer les clés et les valeurs (variable) dans le localStorage
function saveCart(optionsProduct){
    //JSON permet de transformer un tableau ou une chose complexe en chaine de caractère
    localStorage.setItem("id", JSON.stringify(optionsProduct));
}

//on va récupérer la donnée dans le localStorage qui porte la clé "cart"
function getCart(){
    let optionsProduct = localStorage.getItem("id"); 
    if(optionsProduct == null){
            return[];
    }else {
        return JSON.parse(optionsProduct);
    }
}

//dans le localStorage on ne peut pas utiliser de tableau on va utiliser json pour lire le tableau en chaine de caractère
function addCart(product){
    let optionsProduct = getCart();
    //find permet de chercher dans un tableau si l'élément existe déjà
    //on cherche dans le panier si il y a un id qui est égal à l'id du produit que je veux ajouter
    let foundProduct = optionsProduct.find(productFind => productFind.id == product.id);
    if(foundProduct != undefined) {
        foundProduct.quantity++;//j'ajoute 1 à laquantité
    } else {
        product.quantity =1;
        //on ajoute le produit dans le tableau avec push
        optionsProduct.push(product);
    }
    saveCart(optionsProduct);
}

//Supprimer un produit du panier
function removeFromCart(product){
    let optionsProduct = getCart();
    optionsProduct = optionsProduct.filter(productFind => productFind.id != product.id);
    saveCart(optionsProduct);
}

//Pour changer la quantité
function changeQuantity(product,quantity){
    let optionsProduct = getCart();
    let foundProduct = optionsProduct.find(productFind => productFind.id == product.id);
    //si le produit est trouvé on change sa quantité
    if (foundProduct != undefined){
        foundProduct.quantity += quantity;
        if (foundProduct.quantity <= 0) {
            removeFromCart(foundProduct);
        } else {
            saveCart(optionsProduct);
        }
    }

    //On récupère la quantité à partir du panier
    function getNumberProduct(){
        let optionsProduct = getCart();
        let number = 0;
        for(let product of optionsProduct) {
            number += product.quantity;
        }
        return number;
        
    }

    //On récupère le prix à partir du panier
    function getTotalPrice(){
        let optionsProduct = getCart();
        let total = 0;
        for(let product of optionsProduct) {
            total += product.quantity * product.price;
        }
        return total;
    }   
}

//on fait un exemple d'ajouter ces informations au panier
addCart({id:"4","name":"produit","price":15})

changeQuantity({id:"54"},5)
changeQuantity({id:"54"},-5)
addCart({id:"54","name":"produit","price":8})

console.log(getTotalPrice)