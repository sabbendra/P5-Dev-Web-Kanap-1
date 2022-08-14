const orderId = getOrderId()
displayOrderId(orderId)

function getOrderId (){
    const urlSearchParams = new URLSearchParams(window.location.search);
    console.log(window.location);
    //Afficher le numéro de commande
    const orderId = urlSearchParams.get("id");
    return orderId
}

function displayOrderId(orderId){
    const orderIdElement = document.getElementById("orderId")
    orderIdElement.textContent = orderId
}

console.log(orderId)