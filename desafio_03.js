// ========================================
// Ejercicio 1: Contador ascendente (1 a 10)
// ========================================

let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

// ========================================
// Ejercicio 2: Contador descendente (10 a 0)
// ========================================

let contadorDos = 10;
while (contadorDos >= 0) {
    console.log(contadorDos);
    contadorDos--;
}

// ========================================
// Ejercicio 3: Cuenta regresiva
// ========================================

let numero = parseInt(prompt("Ingresa un número para la cuenta regresiva:"), 10);
let regresiva = 0;

while (regresiva <= numero) {
    console.log(regresiva);
    regresiva--;
}

// ========================================
// Ejercicio 4: Cuenta progresiva
// ========================================

let numeroProgresivo = parseInt(prompt("Ingresa un número para la cuenta progresiva:"), 10);
let progresion = 0;

while( progresion <= numeroProgresivo) {
    console.log(progresion);
    progresion++;
}