/**
 * Función que recibe una frase y una palabra, y verifica 
 * si la palabra existe dentro de la frase.
 */
function verificarPalabra(frase, palabra) {
    
    // 1. Validaciones de seguridad
    // Comprobamos que nos hayan pasado texto de verdad
    if (!frase || !palabra) {
        console.log("Error: Debes introducir una frase y una palabra válidas.");
        return;
    }

    // 2. Normalización del texto
    // Pasamos tanto la frase como la palabra a minúsculas (.toLowerCase())
    // Así evitamos que falle si buscamos "Hola" en la frase "hola mundo".
    const fraseNormalizada = frase.toLowerCase();
    const palabraNormalizada = palabra.toLowerCase();

    // 3. Verificación principal
    // El método .includes() busca la palabra dentro de la frase.
    // Devuelve automáticamente true o false.
    const contienePalabra = fraseNormalizada.includes(palabraNormalizada);

    // 4. Mostramos los resultados por consola
    console.log(`--- BUSCADOR DE PALABRAS ---`);
    console.log(`Frase original: "${frase}"`);
    console.log(`Palabra a buscar: "${palabra}"`);
    
    // Usamos la variable booleana para mostrar un mensaje u otro
    if (contienePalabra) {
        console.log(`Resultado: SÍ, se ha encontrado la palabra.`);
    } else {
        console.log(`Resultado: NO, la palabra no existe en la frase.`);
    }
    
    console.log("----------------------------\n");

    // Devolvemos el booleano por si lo necesitamos para otra cosa
    return contienePalabra;
}

// ==========================================
// PRUEBAS DEL CÓDIGO
// ==========================================

const miFrase = "El desarrollo web frontend es muy divertido.";

// Prueba 1: Buscar una palabra que sí está (con distinta capitalización)
verificarPalabra(miFrase, "Frontend"); 

// Prueba 2: Buscar una palabra que no está
verificarPalabra(miFrase, "backend");

// Prueba 3: Buscar una parte de una palabra (también funciona)
verificarPalabra(miFrase, "diverti");

// Prueba 4: Fallo provocado (campos vacíos)
verificarPalabra(miFrase, "");