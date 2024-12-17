// Apartat professor
document.addEventListener("DOMContentLoaded", () => {
    // Capturar eventos de los botones
    const editarBotones = document.querySelectorAll(".btn-editar");
    const eliminarBotones = document.querySelectorAll(".btn-eliminar");

    editarBotones.forEach(boton => {
        boton.addEventListener("click", () => {
            alert("Editar l'usuari.")
        });
    });

    eliminarBotones.forEach(boton => {
        boton.addEventListener("click", () => {
            alert("Eliminar usuari.");
        });
    });
});

//Botó que obrirà index.html
const btnInici = document.getElementById("retorna-inici")

//Assigno el click
btnInici.addEventListener("click", tornarIniciarSessio)

//funció que ens redirigirà a la web
function tornarIniciarSessio(){
    win = window.open("../index.html")
}

// Apartat alumne
document.addEventListener("DOMContentLoaded", () => {
    // Acciones para botones de módulos
    const modulos = document.querySelectorAll(".modul button");

    modulos.forEach(boton => {
        boton.addEventListener("click", (e) => {
            const moduloId = e.target.parentElement.id;
            alert(`Has seleccionat el ${moduloId.toUpperCase()}!`);
            // Aquí puedes agregar más lógica para cada módulo.
        });
    });

    // Capturar eventos de botones del profesor
    const editarBotones = document.querySelectorAll(".btn-editar");
    const eliminarBotones = document.querySelectorAll(".btn-eliminar");

    editarBotones.forEach(boton => {
        boton.addEventListener("click", () => {
            alert("Funcionalitat per editar l'usuari encara no implementada.");
        });
    });

    eliminarBotones.forEach(boton => {
        boton.addEventListener("click", () => {
            alert("Funcionalitat per eliminar l'usuari encara no implementada.");
        });
    });
});
