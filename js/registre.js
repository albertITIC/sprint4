// OBJ
const contraCompteObj = document.getElementById("contrasenyaOblidada"); 
const crearCompteObj = document.getElementById("crearCompte");
const retornarIniciarSessioObj = document.getElementById("tornarIniciarSessio")

//VARIABLES
let win

// EVENTS 
// Obrir l'html obrir contrasenya
contraCompteObj.addEventListener("click", obrirContrasenya); 

// Obrir l'html obrir compte nou (registre)
crearCompteObj.addEventListener("click", obrirCompteNou); 

//obrir l'html de retornar al inici sessió
retornarIniciarSessioObj.addEventListener("click", retornarIniciarSessió)

// FUNCIONS 
function obrirContrasenya() {
    win = window.open("./html/contrasenya.html"); // ruta
}

function obrirCompteNou() {
    win = window.open("./html/crearCompte.html"); // ruta
}

function retornarIniciarSessió(){
    win = window.open("./index.html")
}

function crearRegistre(){
    // Camps obligatoris del registre
    let nom = document.getElementById("nom").value.trim(); // indiquem quen ono hi hagin espai en blanc
    let cognom = document.getElementById("cognom").value.trim();
    let gmail = document.getElementById("email").value.trim();
    let contrasenya = document.getElementById("contrasenya").value.trim();

    // He d'obligar a que els camps siguin obligatoris i que cooncordin més endavant amb la taula d'usuari.
    // 1. Verifico que l'usuari hagi introduït un nom vàlid (no número)
    if (!nom || !isNaN(nom)) {
        alert(!nom ? "Introdueix un nom vàlid" : "El nom no pot ser un o més números");
    } else {
        console.log("Nom introduït s'ha registrat correctament.");
    }

    // 2. Verifico el cognom
    if (!cognom|| !isNaN(cognom)){
        alert(!cognom ? "Introdueix un cognom vàlid" : "El cognom no pot ser un o més números");
    } else{
        console.log("Cognom s'ha registrat correctament.")
    }

    // 3. Verifico la gmail
    if (!gmail || !gmail.includes("@")) {
        alert(!gmail ? "Introdueix un correu vàlid" : "El correu no és vàlid");
    }
    
    // 3. Verifico la contrasenya
    if (!contrasenya) {
        alert("La contrasenya no pot estar vuida");
    }

}
