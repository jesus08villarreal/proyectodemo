var nombre = document.getElementById("firstName");
var apellido = document.getElementById("lastName");
var button = document.getElementById("send");
button.addEventListener("click", saludar);
function saludar(){
alert("Hola! "+nombre.value +" "+ apellido.value+" En unos momentos seras redireccionado a la pagina de compras!");
}
