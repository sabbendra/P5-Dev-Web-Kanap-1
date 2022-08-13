//*************************** Formulaire *******************************************
const btnSubmitForm = document.getElementById("cart__order__form__submit");

btnSubmitForm.addEventListener("click",(e) => {
  e.preventDefault();

  //Création d'une classe pour créer l'objet dans lequel iront les valeurs du formulaire
class Form {
  constructor (input){
    this.firstName = document.getElementById("firstName").value;
    this.lastname = document.getElementById("lastname").value;
    this.address = document.getElementById("address").value;
    this.city = document.getElementById("city").value;
    this.email = document.getElementById("email").value;
  }
  };
  
//On créée une key formulaire, et on la met dans une vauriabe
const formLocalStorage = localStorage.getItem("keyFormValue");

//Convertir la chaine de caractère en objet JavaScript
const formLocalStorageObject = JSON.parse(formLocalStorage);

//Je créée une fonction pour l'utiliser dans le prénom, le nom et la ville pour ne pas mettre de chiffres et de symboles
const regExFirstNameCountry = (value)=> {
  return /^$[A-Za-z]/.test(value)
}
 //Je créée une fonction pour mettre un message d'alerte pour ne pas mettre de chiffres et de symboles
 const textAlert = (value)=> {
  return value + " : les chiffres et les symboles ne sont pas autorisés";
}

//Je créée une fonction pour l'utiliser dans l'email
const regExEmail = (value)=> {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);        
}

//Je créée une fonction pour l'utiliser dans la fonction adresse
const regExAddress = (value)=> {
  return /^[A-Za-z0-9\s]{5,50}$/.test(value);        
}          
function firstNameControl (){
  //Contrôle de la validité du prénom
const firstName = formLocalStorage.firstName;
if(regExFirstNameCountry(firstName)){
  return true;
}else{
  alert(textAlert("Prénom"))
  return false;
}
};

function NameControl (){
//Contrôle de la validité du prénom
const LastName = formLocalStorage.LastName;
if(regExFirstNameCountry(LastName)){
return true;
}else{
alert(textAlert("Nom"))
return false;
}
};

function emailControl (value){
//Contrôle de la validité de l'email
const theEmail = formLocalStorage.email;
if(regExEmail(theEmail)){
  return true;
}else{
  alert("L'email n'est pas valide");
  return false;
}
};

function addressControl (value){
  //Contrôle de la validité de l'adresse
  const theAddress = formLocalStorage.address;
  if(regExAddress(theAddress)){
    return true;
  }else{
    alert("L'adresse doit contenir que des lettres et des chiffres");
    return false;
  }
  };



//Controle validité formulaire avant envoi dans le localStorage
if(firstNameControl() && NameControl() && emailControl() && addressControl()) {
//Mettre l'objet "formLocalStorage" dans le localStorage
localStorage.setItem("formLocalStorage", JSON.stringify(formLocalStorage));
}else {
alert("Veuillez remplir tous les champs du formulaire");
};
//*************************** Fin du Formulaire *******************************************
if(firstNameControl()){
  //Mettre l'objet "formLocalStorage" dans le localStorage
  localStorage.setItem("formLocalStorage", JSON.stringify(formLocalStorage));
}else {
  alert("Veuillez remplir tous les champs du formulaire");
};

});
