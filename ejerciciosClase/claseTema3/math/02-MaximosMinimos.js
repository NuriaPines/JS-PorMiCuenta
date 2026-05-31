/**
 * EJERCICIOS MATH: MÁXIMOS Y MÍNIMOS
 * --------------------------------------------------------------------------
 */

// ==========================================
// 1. VALORES EN UN ARRAY
// ==========================================
console.log("--- 1. MAX/MIN EN UN ARRAY ---");

// Un Array es una simple lista ordenada de elementos.
const miArray = [45, 12, 89, 5, 23];

// Usamos los tres puntos (...) para "desparramar" los números del array.
// Internamente, JS lo lee como: Math.max(45, 12, 89, 5, 23)
const maxArray = Math.max(...miArray);
const minArray = Math.min(...miArray);

console.log(`Array original:`, miArray);
console.log(`Máximo: ${maxArray} | Mínimo: ${minArray}`);
console.log("\n");


// ==========================================
// 2. VALORES EN UN SET
// ==========================================
console.log("--- 2. MAX/MIN EN UN SET ---");

// Un Set es una colección de valores ÚNICOS (no admite duplicados).
// Fíjate que le paso varios números repetidos, pero el Set los eliminará.
const miSet = new Set([10, 50, 10, 2, 50, 99]);

// El operador spread (...) funciona exactamente igual de bien con los Sets
// porque son objetos "iterables" (que se pueden recorrer).
const maxSet = Math.max(...miSet);
const minSet = Math.min(...miSet);

console.log(`Set original (sin repetidos):`, miSet);
console.log(`Máximo: ${maxSet} | Mínimo: ${minSet}`);
console.log("\n");


// ==========================================
// 3. VALORES EN UN MAP
// ==========================================
console.log("--- 3. MAX/MIN EN UN MAP ---");

// Un Map es una colección de pares [Clave, Valor] (como un diccionario avanzado).
const puntuacionesMap = new Map([
    ["Juan", 85],
    ["Ana", 92],
    ["Luis", 40]
]);

// Si hacemos Math.max(...puntuacionesMap), daría error porque JS no sabe 
// si queremos buscar el máximo en los nombres (claves) o en los números (valores).
// Por eso, usamos el método .values() para extraer SOLO los números y luego los desparramamos.
const maxMap = Math.max(...puntuacionesMap.values());
const minMap = Math.min(...puntuacionesMap.values());

console.log(`Map original:`, puntuacionesMap);
console.log(`Puntuación Máxima: ${maxMap} | Puntuación Mínima: ${minMap}`);