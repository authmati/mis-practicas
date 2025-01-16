// ========================================
// Ejercicio 1: ¿Qué día de la semana es?
// ========================================

let diaDeLaSemana = prompt("¿Qué día de la semana es hoy?").toLowerCase();

if (diaDeLaSemana === "sábado" || diaDeLaSemana === "domingo") {
    alert("¡Buen fin de semana!");
} else {
    alert("¡Buena semana!");
}

// ========================================
// Ejercicio 2: Verifica si un número es positivo o negativo
// ========================================

let numero = parseInt(prompt("Ingreso un número para verificar si es positivo o negativo:"), 10);

if (numero > 0) {
    alert("El número es positivo.");
} else if (numero < 0) {
    alert("El número es negativo.");
} else {
    alert("El número es cero.");
}

// ========================================
// Ejercicio 3: Sistema de puntuación de un juego
// ========================================

let puntuacion = parseInt(prompt("Ingresa tu puntuación en el juego:"), 10);

if (puntuacion >= 100) {
    alert("¡Felicidades, has ganado!");
} else {
    alert("Intentalo nuevamente para ganar.");
}

// ========================================
// Ejercicio 4: Saldo de cuenta
// ========================================

let saldo = parseFloat(prompt("¿Cuál es el saldo de tu cuenta?"));

alert(`Tu saldo actual es $${saldo}`)

// ========================================
// Ejercicio 5: Bienvenida con nombre de usuario
// ========================================

let nombre = prompt("¿Cómo te llamas?");

alert(`¡Bienvenido(a) ${nombre}!`)

