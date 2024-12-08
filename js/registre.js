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

}
