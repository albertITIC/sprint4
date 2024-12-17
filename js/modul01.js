const btnRetornar = document.getElementById("tornar")
const btnInicarSessio = document.getElementById("tancar-sessio")

// Event per tornar a la pàgina dels mòduls
btnRetornar.addEventListener("click", retornarPag)

function retornarPag() {
    window.location.href = "../html/pag_inici_alumne.html"
}

// Event per tornar a la pàgina d'inici de sessió
btnInicarSessio.addEventListener("click", tornarIniciarSessio)

function tornarIniciarSessio() {
    window.location.href = "../index.html"
}
