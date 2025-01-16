// ========================================
// Ejercicio 1: Cambiar contenido de h1 con querySelector
// ========================================

let titulo = document.querySelector("#principal");

titulo.innerHTML = "Hora del Desafío";

// ========================================
// Ejercicio 2: Función para mostrar mensaje en consola al hacer clic
// ========================================

function alertaConsola() {
    console.log("El botón fue clicado");
}

// ========================================
// Ejercicio 3: Función para mostrar alerta con el nombre de una ciudad
// ========================================

function preguntaCiudad() {
    let ciudad = prompt("Dime una ciudad de Brasil:");

    if (ciudad) {
        alert(`Estuve en ${ciudad} y me acorde de ti.`);
    } else {
        alert("No has ingresado una ciudad.");
    }
}

// ========================================
// Ejercicio 4: Función para mostrar alerta con mensaje "Yo amo JS"
// ========================================

function botoncitoAlerta() {
    alert("Yo amo JS!");
}

// ========================================
// Ejercicio 5: Función para sumar dos números y mostrar resultado en alerta
// ========================================

function sumando() {
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));

    if (!isNaN(num1) && !isNaN(num2)) {

        let resultado = num1 + num2;
        alert(`El resultado de la suma es: ${resultado}`);

    } else {
        alert("Por favor, ingresa números válidos.");
    }
}