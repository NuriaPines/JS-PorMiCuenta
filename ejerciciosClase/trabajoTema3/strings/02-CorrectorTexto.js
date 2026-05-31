/**
 * CORRECTOR DE TEXTOS
 * --------------------------------------------------------------------------
 * Función que limpia caracteres extraños, arregla los espacios, 
 * capitaliza las oraciones y asegura el punto final.
 */
function corregirTexto(textoOriginal) {
    
    // 1. Validación de seguridad
    if (typeof textoOriginal !== 'string' || textoOriginal.trim() === '') {
        console.log("❌ Error: Introduce un texto válido.");
        return "";
    }

    // 2. FILTRO DE CARACTERES PERMITIDOS
    // Usamos RegEx para buscar todo lo que NO (^) sea:
    // Letras (a-z, A-Z, con tildes y ñ), números (0-9), espacios (\s), 
    // y los caracteres especiales permitidos: ( ) ? ¿ ! ¡ - . , ;
    // IMPORTANTE: El guion (-) se escapa con \- para que no se confunda con un rango.
    // Reemplazamos todo lo que no esté en esa lista por un texto vacío ("").
    let textoCorregido = textoOriginal.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜ0-9\s()¿?!¡.,;\-]/g, "");

    // 3. ELIMINAR ESPACIOS DUPLICADOS
    // Buscamos 2 o más espacios seguidos (\s+) y los cambiamos por un solo espacio.
    // Usamos .trim() para quitar los espacios que se hayan quedado al principio o al final.
    textoCorregido = textoCorregido.replace(/\s+/g, " ").trim();

    // 4. MAYÚSCULA AL INICIO DE CADA ORACIÓN
    // Buscamos tres posibles inicios de oración:
    // a) El principio absoluto del texto (^)
    // b) Un punto, exclamación o interrogación de cierre seguido de un espacio ([.!?]\s+)
    // c) Un signo de apertura como ¡ o ¿ seguido opcionalmente de un espacio ([¿¡]\s*)
    // Todo eso seguido de una letra minúscula ([a-zñáéíóúü]).
    textoCorregido = textoCorregido.replace(/(^|[.!?]\s+|[¿¡]\s*)([a-zñáéíóúü])/gi, (coincidencia) => {
        // Transformamos la coincidencia entera a mayúscula. 
        // (Los signos de puntuación no cambian, pero la letra sí).
        return coincidencia.toUpperCase();
    });

    // 5. AGREGAR PUNTO FINAL SI FALTA
    // Comprobamos el último carácter usando .slice(-1)
    if (textoCorregido.length > 0) {
        const ultimoCaracter = textoCorregido.slice(-1);
        
        // Si el último carácter no es un cierre de oración (punto o exclamaciones/interrogaciones)
        if (!['.', '!', '?'].includes(ultimoCaracter)) {
            textoCorregido += "."; // Le concatenamos el punto final
        }
    }

    // MOSTRAR RESULTADOS
    console.log(`--- CORRECTOR AUTOMÁTICO ---`);
    console.log(`❌ Original:  "${textoOriginal}"`);
    console.log(`✅ Corregido: "${textoCorregido}"`);
    console.log(`----------------------------\n`);

    return textoCorregido;
}


// ==========================================
// PRUEBAS DEL CÓDIGO
// ==========================================

// Prueba 1: Espacios duplicados y sin punto final ni mayúscula
corregirTexto("  hola   este    texto tiene    muchos espacios  ");

// Prueba 2: Caracteres prohibidos (como @, #, $, %) y oraciones múltiples
corregirTexto("hola @mundo. ¿cómo estás? #yo muy %bien, ¡gracias!");

// Prueba 3: Un texto que ya está perfecto (no debería romperlo)
corregirTexto("Este texto es correcto.");

// Prueba 4: Frase que termina en exclamación (no debe añadir un punto extra)
corregirTexto("¡qué maravilla de código!");