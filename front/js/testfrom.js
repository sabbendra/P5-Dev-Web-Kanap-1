//*************************** Formulaire *******************************************
const btnSubmitForm = document.getElementById("cart__order__form");

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


const form = document.querySelector(".cart__order__form");
          const orderButton = document.querySelector("#order");

          function submitForm(e){
            
            orderButton.addEventListener("click", (e) => submitForm(e))
            e.preventDefault()// va servir à ne pas raffraichir la page
            if(cart.length === 0){
              alert(" merci de valider votre achat")
              return
            }
             if(isFormInValid()) return
             if(isEmailInValid()) return
            
            const body = makeRequestBody ()
            localStorage.setItem("contact", JSON.stringify(contact));
            localStorage.setItem("products", JSON.stringify(products));
            //on utilise fetch avec post pour poster des données contrairement a get ou on recupère des données
            fetch("http://localhost:3000/api/products/order", {
              method: "post",
              body: JSON.stringify({contact, products}),
              headers: { "Content-Type": "application/json"},
            })
            .then((res) => res.json())
            .then((data) => {
              const orderId = data.orderId
              window.location.href = "./confirmation.html" + "?orderId=" + orderId
              return console.log(data)
            })
            .catch((err)=> console.log(err))
          }

          function isEmailInValid(){
            const email = document.querySelector("#email").value
            const regexEmail = /^[A-Za-z0-9+_,-]+@(.+)$/
              if (regexEmail.test(email) === false) {
                alert("Merci de renseigner un email valide")
                return true
              }  
                return false
           } 
        
          function isFormInValid () {
            const form = document.querySelector(".cart__order__form")
            const inputs = form.querySelector("input")
            inputs.forEach((input) => {
              //si l'input est vide
              if (input.value === "") {
                alert("please fill all the fields")
                return true
              }
              return false
            } )
          }

          function makeRequestBody() {
            const form = document.querySelector(".cart__order__form")
            const firstName = form.elements.firstName.value
            const lastName = form.elements.lastName.value
            const address = form.elements.address.value
            const city = form.elements.city.value
            const email = form.elements.email.value
            const body = {
              contact: {
                firstName: firstName,
                lastName: lastName,
                address: address,
                city: city,
                email: email,
              },
              products: getIdsFromCache()
            }
            return body
          }
        
          function getIdsFromCache() {
            const numberOfProducts = localStorage.length
            const ids = []
            for (let i = 0; i < numberOfProducts; i++) {
              const key = localStorage.key(i)
              console.log(key)
              const id = key.split ("-")[0]//pour prendre la première valeur du tableau
              ids.push(id)
            }
            return ids
          };