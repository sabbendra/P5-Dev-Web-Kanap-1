// Valeur enregistrée quand on clique sur le bouton

//on va enregistrer les clés et les valeurs (variable) dans le locaStorage
function saveCart(cart){
    localStorage.setItem ("cart", cart);
}

//on va récupérer l'item qui porte la clé "cart"
function getCart(cart){
    localStorage.getItem ("cart");
}