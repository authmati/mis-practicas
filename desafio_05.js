// ========================================
// Ejercicio 1: Función que muestra "¡Hola, mundo!" en la consola
// ========================================

function saludo() {
    console.log("¡Hola, mundo!");
}

saludo();

// ========================================
// Ejercicio 2: Función que muestra "¡Hola, [nombre]!" en la consola
// ========================================

function mostrarNombre(nombre) {
    console.log(`¡Hola,! ${nombre}`);
}

mostrarNombre("Mati");

// ========================================
// Ejercicio 3: Función que devuelve el doble de un número
// ========================================

function dobleNumero(numero) {
    return numero * 2;
}

let resultaDoble = dobleNumero(5);
console.log(resultaDoble) 

// ========================================
// Ejercicio 4: Función que calcula el promedio de tres números
// ========================================

function promedioNumero(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

let promedio = promedioNumero(30, 40, 70);
console.log(promedio);

// ========================================
// Ejercicio 5: Función que devuelve el mayor de dos números
// ========================================

function mayorDeDos(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

let mayor = mayorDeDos(80, 50);
console.log(mayor)

// ========================================
// Ejercicio 6: Función que calcula el cuadrado de un número
// ========================================

function CuadradoDeNumero(numero) {
    return numero * numero;
}

let cuadrado = CuadradoDeNumero(5);
console.log(cuadrado);
