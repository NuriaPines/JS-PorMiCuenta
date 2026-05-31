/**
 * EJERCICIO 1: USO DE FILTER
 * --------------------------------------------------------------------------
 */
console.log("--- 1. FILTRAR NÚMEROS PARES ---");

// 1. Preparamos nuestro array original de números mezclados
const numerosMezclados = [12, 5, 8, 13, 21, 44, 100, 3, 7];

// 2. Aplicamos el método .filter()
// Se lee así: "Filtra 'numerosMezclados'. Por cada 'numero' que encuentres, 
// comprueba si el resto de dividirlo entre 2 es exactamente 0. 
// Si es true, guárdalo en el nuevo array".
const numerosPares = numerosMezclados.filter(numero => numero % 2 === 0);

// Mostramos los resultados
console.log("Array original:", numerosMezclados);
console.log("Array filtrado (solo pares):", numerosPares);
console.log("\n");


console.log("--- 2. FILTRAR PALABRAS (> 6 CARACTERES) ---");

// 1. Preparamos nuestro array original de palabras
const listaPalabras = ["javascript", "web", "programacion", "api", "backend", "css", "desarrollo"];

// 2. Aplicamos el método .filter()
// Se lee así: "Filtra 'listaPalabras'. Por cada 'palabra', comprueba si 
// su longitud (.length) es estrictamente mayor que 6.
// Si es true, guárdala en el nuevo array".
const palabrasLargas = listaPalabras.filter(palabra => palabra.length > 6);

// Mostramos los resultados
console.log("Array original:", listaPalabras);
console.log("Array filtrado (más de 6 letras):", palabrasLargas);