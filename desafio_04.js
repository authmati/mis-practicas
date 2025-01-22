// ========================================
// Ejercicio 1: Mensaje de bienvenida
// ========================================

console.log("¡Bienvenido a mi programa!");

// ========================================
// Ejercicio 2: Saludo con console.log
// ========================================

let nombre = "Mati";
console.log(`Buenas ${nombre}`);

// ========================================
// Ejercicio 3: Saludo con alert
// ========================================

let nombreDos = "Mati";
alert(`Buenas ${nombreDos}`)

// ========================================
// Ejercicio 4: Pregunta sobre lenguaje favorito
// ========================================

let lenguaje = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
   console.log(`El lenguaje que más me gusta es: ${lenguaje}`);

// ========================================
// Ejercicio 5: Suma de dos valores
// ========================================

valor1 = 20;
valor2 = 5;
let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}.`);

// ========================================
// Ejercicio 6: Resta de dos valores
// ========================================

valor1 = 20;
valor2 = 5;
let resultadoDos = valor1 - valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultadoDos}.`);

// ========================================
// Ejercicio 7: Verificación de edad
// ========================================

let edad = prompt("¿Cuántos años tienes?");
if (edad >= 18) {
   console.log("Eres mayor de edad.");
} else {
   console.log("Eres menor de edad");
}

// ========================================
// Ejercicio 8: Verificación de número
// ========================================

let numero = parseFloat(prompt("Ingresa un número:"));
if (numero > 0) {
   console.log("El número es positivo.");
} else if (numero < 0) {
   console.log("El número es negativo.");
} else {
   console.log("El número es cero.");
}

// ========================================
// Ejercicio 9: Contador con bucle while
// ========================================

let contador = 1;
while (contador <= 10) {
   console.log(contador);
   contador++;
}

// ========================================
// Ejercicio 10: Calificación de aprobación
// ========================================

let nota = 4;
if (nota >= 7) {
   console.log("Aprobado!");
} else {
   console.log("Reprobado!");
}

// ========================================
// Ejercicio 11: Número aleatorio
// ========================================

let aleatorio = Math.random();
console.log(aleatorio)

// ========================================
// Ejercicio 12: Número aleatorio entre 1 y 10
// ========================================

let aleatoriodos = Math.floor(Math.random() * 10) + 1;
console.log(aleatoriodos);

// ========================================
// Ejercicio 13: Número aleatorio entre 1 y 1000
// ========================================

let aleatoriotres = Math.floor(Math.random() * 1000) + 1;
console.log(aleatoriotres)
