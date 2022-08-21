const orderId = getOrderId()
displayOrderId(orderId)
clearAllCache()

    //Récupérer le numéro de commande
function getOrderId() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const orderId = urlSearchParams.get("id");
    return orderId
}
    //Afficher le numéro de commande
function displayOrderId(orderId) {
    const orderIdElement = document.getElementById("orderId")
    orderIdElement.textContent = orderId
}
    //localStorage clear
function clearAllCache() {
    const cache = window.localStorage
    cache.clear()
}