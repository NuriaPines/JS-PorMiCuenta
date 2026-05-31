/**
 * EJERCICIOS MATH: RANGO DE ALEATORIOS
 * --------------------------------------------------------------------------
 * Función universal para generar un número entero aleatorio 
 * dentro de un rango específico (ambos números incluidos).
 */
function generarAleatorio(min, max) {
    
    // 1. Math.random() genera un decimal entre 0 y 0.999...
    // 2. Multiplicamos por (max - min + 1) para expandir ese decimal al tamaño de nuestro rango.
    // 3. Math.floor() le corta los decimales para dejarlo en un número entero.
    // 4. Sumamos 'min' para desplazar el resultado y que no empiece desde el cero.
    
    const numero = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return numero;
}

// ==========================================
// PRUEBAS DE LOS RANGOS SOLICITADOS
// ==========================================

console.log("--- GENERADOR DE NÚMEROS ALEATORIOS ---");

// RANGO 1: Del 1 al 10
const rango1 = generarAleatorio(1, 10);
console.log(`Rango [1 - 10]:  Ha salido el ${rango1}`);

// RANGO 2: Del 2 al 8
const rango2 = generarAleatorio(2, 8);
console.log(`Rango [2 - 8]:   Ha salido el ${rango2}`);

// RANGO 3: Del 6 al 36
const rango3 = generarAleatorio(6, 36);
console.log(`Rango [6 - 36]:  Ha salido el ${rango3}`);

// RANGO 4: Del 24 al 75
const rango4 = generarAleatorio(24, 75);
console.log(`Rango [24 - 75]: Ha salido el ${rango4}`);

console.log("---------------------------------------");