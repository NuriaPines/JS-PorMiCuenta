/**
 * Función que verifica si un número es primo.
 * Devuelve true si es primo, y false si no lo es.
 */
function esPrimo(numero) {
    
    // 1. Descartamos los números que por definición matemática no son primos.
    // Cualquier número menor o igual a 1 (0, 1 o negativos) no es primo.
    if (numero <= 1) {
        return false;
    }

    // 2. Buscamos si el número tiene algún divisor.
    // Empezamos a comprobar desde el 2 (porque todos son divisibles por 1).
    // El bucle se repetirá mientras 'i' sea menor que nuestro 'numero'.
    for (let i = 2; i < numero; i++) {
        
        // 3. Comprobamos la división usando el operador módulo (%).
        // Si el resto de dividir 'numero' entre 'i' es exactamente 0,
        // significa que 'i' es un divisor.
        if (numero % i === 0) {
            
            // Como hemos encontrado un divisor distinto de 1 y de sí mismo,
            // ya sabemos con certeza que NO es primo. 
            // Hacemos 'return false' para salir de la función inmediatamente.
            return false;
        }
    }

    // 4. Si el bucle termina de dar vueltas y nunca ha entrado en el 'if'...
    // Significa que no ha encontrado ningún divisor.
    // Por lo tanto, el número es primo.
    return true;
}

// ==========================================
// PRUEBAS DEL CÓDIGO
// ==========================================

// Usamos console.log para ver los resultados por pantalla.
// Debería imprimir 'true' para los primos y 'false' para el resto.

console.log(`¿Es 7 primo?:`, esPrimo(7));   // Devuelve: true (solo divisible por 1 y 7)
console.log(`¿Es 10 primo?:`, esPrimo(10)); // Devuelve: false (divisible por 2 y por 5)
console.log(`¿Es 1 primo?:`, esPrimo(1));   // Devuelve: false (los menores o iguales a 1 no son primos)
console.log(`¿Es 13 primo?:`, esPrimo(13)); // Devuelve: true
console.log(`¿Es 9 primo?:`, esPrimo(9));   // Devuelve: false (divisible por 3)