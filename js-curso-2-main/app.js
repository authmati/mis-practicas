let titulo = document.querySelector("#principal");

titulo.innerHTML = "Hora del Desafío";

function alertaConsola() {
    console.log("El botón fue clicado");
}

function preguntaCiudad() {
    let ciudad = prompt("Dime una ciudad de Brasil:");

    if (ciudad) {
        alert(`Estuve en ${ciudad} y me acorde de ti.`);
    } else {
        alert("No has ingresado una ciudad.");
    }
}

function botoncitoAlerta() {
    alert("Yo amo JS!");
}
