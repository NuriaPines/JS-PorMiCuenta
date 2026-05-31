/**
 * 1. FUNCIÓN AUXILIAR MATEMÁTICA
 * Determina si un número concreto es primo.
 * (Un número es primo si solo es divisible por 1 y por sí mismo).
 */
function esPrimo(numero) {
    // Los números negativos, el 0 y el 1 NO son primos por definición matemática.
    if (numero <= 1) return false;
    
    // El 2 es el único número par que es primo, lo sacamos por vía rápida.
    if (numero === 2) return true;
    
    // Optimizamos: Si es par y no es el 2, no es primo (ahorramos cálculos).
    if (numero % 2 === 0) return false;

    // Bucle para buscar posibles divisores.
    // TRUCO PRO: No hace falta buscar hasta el propio número. 
    // Matemáticamente, basta con buscar hasta la raíz cuadrada del número.
    // Además, como ya hemos descartado los pares, avanzamos de 2 en 2 (solo impares).
    for (let i = 3; i <= Math.sqrt(numero); i += 2) {
        // Si el resto de la división es 0, significa que tiene un divisor extra -> No es primo.
        if (numero % i === 0) return false;
    }

    // Si ha sobrevivido a todas las pruebas, ¡es un número primo!
    return true;
}


/**
 * 2. FUNCIÓN PRINCIPAL
 * Recibe un array de números, filtra los primos y los devuelve ordenados.
 */
function localizarPrimos(lista) {
    
    // Validación de seguridad: Asegurarnos de que nos pasan un Array
    if (!Array.isArray(lista)) {
        console.log("❌ Error: El parámetro introducido no es un Array válido.");
        return [];
    }

    // Usamos encadenamiento de métodos para hacer todo en un solo bloque fluido
    const primosOrdenados = lista
        // Paso A: Filtramos usando nuestra función ayudante
        .filter(numero => esPrimo(numero))
        // Paso B: Ordenamos los resultados de forma ascendente (de menor a mayor)
        .sort((a, b) => a - b);

    return primosOrdenados;
}


// ==========================================
// PRUEBAS DEL CÓDIGO
// ==========================================

console.log("--- BUSCADOR DE NÚMEROS PRIMOS ---");

// Prueba 1: Una lista desordenada con números mezclados
const listaMezclada = [15, 2, 8, 11, 23, 4, 9, 13, 1, 100, 7];
const resultado1 = localizarPrimos(listaMezclada);

console.log(`Lista original:`, listaMezclada);
console.log(`Primos ordenados:`, resultado1); 
// Debería salir: [2, 7, 11, 13, 23]

console.log("\n");

// Prueba 2: Lista que no tiene ningún número primo
const listaSinPrimos = [4, 6, 8, 9, 10, 12];
const resultado2 = localizarPrimos(listaSinPrimos);

console.log(`Lista original (sin primos):`, listaSinPrimos);
console.log(`Primos ordenados:`, resultado2); 
// Debería salir: []