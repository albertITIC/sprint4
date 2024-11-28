// OBJ
const contraCompteObj = document.getElementById("contrasenyaOblidada"); 
const crearCompteObj = document.getElementById("crearCompte");

//VARIABLES
let win

// EVENTS 
contraCompteObj.addEventListener("click", obrirContrasenya); 
crearCompteObj.addEventListener("click", obrirCompteNou); 

// FUNCIONS 
function obrirContrasenya() {
    win = window.open("./html/contrasenya.html"); 
}

function obrirCompteNou() {
    win = window.open("./html/crearCompte.html");
}

