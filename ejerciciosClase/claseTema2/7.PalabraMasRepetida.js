/**
 * Función que recibe un texto y devuelve la palabra más repetida
 * junto con el número de veces que aparece.
 */
function encontrarPalabraMasRepetida(texto) {
    
    // 1. Condición de seguridad (Guard clause)
    // Si nos pasan un texto vacío o que solo tiene espacios, avisamos y salimos.
    if (!texto || texto.trim() === "") {
        console.log("Por favor, introduce un texto válido.");
        return;
    }

    // 2. Limpieza y preparación del texto.
    // .toLowerCase() -> Convierte todo a minúsculas.
    // .replace(/[.,;:!?()]/g, '') -> Expresión regular que busca signos de puntuación y los borra.
    const textoLimpio = texto.toLowerCase().replace(/[.,;:!?()]/g, '');

    // 3. Convertimos el texto en una lista (array) de palabras.
    // .split(/\s+/) -> Corta el texto cada vez que encuentra uno o más espacios en blanco.
    const palabras = textoLimpio.split(/\s+/);

    // 4. Preparamos nuestro "diccionario" contador y las variables de los ganadores.
    const contadorPalabras = {}; // Objeto vacío donde guardaremos: { palabra: cantidad }
    let palabraGanadora = "";
    let maximasRepeticiones = 0;

    // 5. Recorremos nuestra lista de palabras limpias.
    for (let palabra of palabras) {
        
        // Si por algún motivo nos colamos con un espacio vacío, lo saltamos (continue pasa a la siguiente vuelta)
        if (palabra === "") continue;

        // 6. Contamos la palabra.
        // Si la palabra ya existe en nuestro objeto, le sumamos 1.
        // Si no existe, inicializamos su valor en 1.
        if (contadorPalabras[palabra]) {
            contadorPalabras[palabra]++;
        } else {
            contadorPalabras[palabra] = 1;
        }

        // 7. Comprobamos si esta palabra acaba de superar el récord actual.
        // Si las repeticiones de la palabra actual son mayores que el récord que teníamos guardado...
        if (contadorPalabras[palabra] > maximasRepeticiones) {
            
            // ... actualizamos el récord y coronamos a la nueva palabra ganadora.
            maximasRepeticiones = contadorPalabras[palabra];
            palabraGanadora = palabra;
        }
    }

    // 8. Mostramos el resultado.
    console.log(`--- ANÁLISIS DE TEXTO ---`);
    console.log(`La palabra más repetida es: "${palabraGanadora}"`);
    console.log(`Aparece un total de: ${maximasRepeticiones} veces.`);
    
    // Devolvemos un objeto con los datos por si necesitamos usar la información en otra parte.
    return {
        palabra: palabraGanadora,
        repeticiones: maximasRepeticiones
    };
}

// ==========================================
// PRUEBAS DEL CÓDIGO
// ==========================================

// Texto de prueba con mayúsculas, minúsculas, comas y puntos.
const miTexto = "El perro de San Roque no tiene rabo, porque Ramón Ramírez se lo ha cortado. El perro corre feliz.";

encontrarPalabraMasRepetida(miTexto);

// Prueba con un texto vacío para ver si nuestra protección funciona
encontrarPalabraMasRepetida("    ");