// Valeur enregistrée quand on clique sur le bouton

//on va enregistrer les clés et les valeurs (variable) dans le localStorage
function saveCart(productInLocalStorage) {
  //JSON permet de transformer un tableau ou une chose complexe en chaine de caractère
  localStorage.setItem("keyproduct", JSON.stringify(productInLocalStorage));
}

//on va récupérer la donnée dans le localStorage qui porte la clé "keyproduct"
function getCart() {
  let cart = localStorage.getItem("keyproduct");
  if (cart == null) {
      return [];
  } else {
      return JSON.parse(cart);
  }
}

//dans le localStorage on ne peut pas utiliser de tableau on va utiliser json pour lire le tableau en chaine de caractère
function addCart(product) {
  let cart = getCart();
  //find permet de chercher dans un tableau si l'élément existe déjà
  //on cherche dans le panier si il y a un id qui est égal à l'id du produit que je veux ajouter
  let foundProduct = cart.find(productFind => productFind.id === product.id && productFind.colors === product.colors);
  //ajouter le check avec la couleur
  console.log(foundProduct)
  if (foundProduct != undefined) {
      foundProduct.quantity += product.quantity; //j'ajoute 1 à laquantité / il faut récupérer la nouvelle quantité et l'additionner 
  } else {
      //on ajoute le produit dans le tableau avec push
      cart.push(product);
  }
  saveCart(cart);

  if (window.confirm(`
Votre sélection à bien été ajoutée au panier
Consultez le panier OK ou revenir à l'accueil ANNULER`)) {
      window.location.href = "cart.html";
  } else {
      window.location.href = "index.html";
  }
}

//Supprimer un produit du panier
function removeFromCart(product) {
  let cart = getCart();
  cart = cart.filter(productFind => productFind.id != product.id || productFind.colors != product.colors);
  saveCart(cart);
}

//Pour changer la quantité
function changeQuantity(product, quantity) {
  let cart = getCart();
  let foundProduct = cart.find((productFind) => productFind.id == product.id && productFind.colors == product.colors);
  //si le produit est trouvé on change sa quantité
  if (foundProduct != undefined) {
      foundProduct.quantity = quantity;
      if (foundProduct.quantity <= 0) {
          removeFromCart(foundProduct);
      } else {
          saveCart(cart);
      }
  }
};

//Pour obtenir le prix total
function changeTotalPrice(product, oldQuantity, newQuantity) {
  if (newQuantity > oldQuantity) {
      totalCartPrice += product.price * (newQuantity - oldQuantity);
      return totalCartPrice;
  } else if (newQuantity < oldQuantity) {
      totalCartPrice -= product.price * (oldQuantity - newQuantity);
      return totalCartPrice;
  }
}

//On récupère le prix à partir du panier
function getTotalPrice(product, quantity) {
  totalCartPrice += quantity * product.price;
  return totalCartPrice;
}

//On récupère la quantité à partir du panier
function getNumberProduct() {
  let cart = getCart(); //on récupère le panier
  let number = 0;
  for (let product of cart) {
      number += product.quantity;
  }
  return number;
}


//**********************************FORMULAIRES FONCTIONS

function getIdsFromCache() {
  var products = [];
  for (let product of cart) {
      products.push(product.id);
  }
  return products;
}
//Fonction pour valider les valeurs du prénom
function firstNameRegex(input) {
  let firstNameRegExp = /^[a-zA-Zàâéèëêïîôùüç -]{2,30}$/gi;
  let test = firstNameRegExp.test(input.value);
  if (test == true) {
      input.nextElementSibling.textContent = "valide";
  } else {
      input.nextElementSibling.textContent =
          "Merci de renseigner votre prénom.";
  }
}

//Fonction pour valider les valeurs du nom
function lastNameRegex(input) {
  let lastNameRegExp = /^[a-zA-Zàâéèëêïîôùüç -]{2,30}$/gi;
  let test = lastNameRegExp.test(input.value);
  if (test == true) {
      input.nextElementSibling.textContent = "valide";
  } else {
      input.nextElementSibling.textContent =
          "Merci de renseigner votre nom.";
  }
}

//Fonction pour valider les valeurs de la ville
function cityRegex(input) {
  let cityRegExp = /^[a-zA-Zàâéèëêïîôùüç - ()]{2,60}$/gi;
  let test = cityRegExp.test(input.value);
  if (test == true) {
      input.nextElementSibling.textContent = "valide";
  } else {
      input.nextElementSibling.textContent =
          "Merci de renseigner votre ville.";
  }
}

//Fonction pour valider les valeurs de l'adresse
function addressRegex(input) {
  let addressRegExp = /^[0-9]{0,4}[a-zA-Zàâéèëêïîôùüç - ]{2,100}$/gi;
  let test = addressRegExp.test(input.value);
  if (test == true) {
      input.nextElementSibling.textContent = "valide";
  } else {
      input.nextElementSibling.textContent =
          "Merci de renseigner une adresse valide.";
  }
}

//Fonction pour valider les valeurs de l'email
function emailRegex(input) {
  let emailRegExp = /^[a-z0-9.-_]+[@]{1}[a-z0-9.-_]+[.]{1}[a-z]{2,10}$/gi;
  test = emailRegExp.test(input.value);
  if (test === true) {
      input.nextElementSibling.textContent = "valide";
  } else {
      input.nextElementSibling.textContent =
          "Merci de saisir une adresse email valide";
  }
}


   




