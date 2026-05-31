/**
 * Función que recibe un texto, lo limpia y devuelve 
 * la palabra con mayor número de caracteres.
 */
function encontrarPalabraMasLarga(texto) {
    
    // 1. Validaciones básicas
    if (typeof texto !== 'string' || texto.trim() === "") {
        console.log("Error: Debes introducir un texto válido.");
        return;
    }

    // 2. Limpieza y preparación
    // Usamos una expresión regular para borrar los signos de puntuación típicos.
    const textoLimpio = texto.replace(/[.,;:!?()]/g, '');
    
    // Convertimos el texto limpio en un Array de palabras.
    // Usamos /\s+/ para cortar por cualquier espacio en blanco (incluso si hay varios seguidos).
    const palabras = textoLimpio.split(/\s+/);

    // 3. Variables para llevar el control del récord
    let palabraGanadora = "";

    // 4. Recorremos la lista de palabras
    for (let palabra of palabras) {
        
        // Comparamos la longitud de la palabra actual con la longitud de nuestro récord.
        // Si es mayor, tenemos un nuevo récord.
        if (palabra.length > palabraGanadora.length) {
            palabraGanadora = palabra;
        }
    }

    // 5. Mostramos los resultados
    console.log(`--- BUSCADOR DE PALABRA MÁS LARGA ---`);
    console.log(`Texto: "${texto}"`);
    console.log(`Palabra más larga: "${palabraGanadora}" (${palabraGanadora.length} caracteres)`);
    console.log(`-------------------------------------\n`);

    return palabraGanadora;
}

// ==========================================
// PRUEBAS DEL CÓDIGO
// ==========================================

// Prueba 1: Frase normal con signos de puntuación
encontrarPalabraMasLarga("El desarrollo de aplicaciones web es fascinante.");

// Prueba 2: Frase donde la palabra más larga está al final pegada a un punto
encontrarPalabraMasLarga("Me gusta la programación.");

// Prueba 3: Palabras de la misma longitud (se quedará con la primera que encuentre)
encontrarPalabraMasLarga("Sol mar rio ola");