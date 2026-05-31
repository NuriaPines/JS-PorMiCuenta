/**
 * Función que recibe una cadena de texto y devuelve 
 * la misma cadena pero leída al revés.
 */
function invertirTexto(texto) {
    
    // 1. Validación de seguridad
    if (typeof texto !== 'string') {
        console.log("Error: El dato introducido no es un texto válido.");
        return;
    }

    // 2. La magia en una sola línea mediante encadenamiento de métodos:
    // - .split('')  -> Corta el texto letra por letra y crea un Array. Ej: "hola" -> ['h','o','l','a']
    // - .reverse()  -> Le da la vuelta al Array. Ej: ['h','o','l','a'] -> ['a','l','o','h']
    // - .join('')   -> Une los elementos del Array en un solo texto. Ej: ['a','l','o','h'] -> "aloh"
    const textoInvertido = texto.split('').reverse().join('');

    // 3. Mostramos los resultados
    console.log(`--- INVERSOR DE TEXTO ---`);
    console.log(`Original:  "${texto}"`);
    console.log(`Invertido: "${textoInvertido}"`);
    console.log(`-------------------------\n`);

    // Devolvemos el texto invertido
    return textoInvertido;
}

// ==========================================
// PRUEBAS DEL CÓDIGO
// ==========================================

// Prueba 1: Una palabra sencilla
invertirTexto("JavaScript");

// Prueba 2: Una frase completa (también invierte los espacios y puntuación)
invertirTexto("Hola Mundo");

// Prueba 3: Un palíndromo (se lee igual del derecho que del revés)
invertirTexto("reconocer");

// Prueba 4: Manejo de errores (pasando un número en lugar de texto)
invertirTexto(12345);