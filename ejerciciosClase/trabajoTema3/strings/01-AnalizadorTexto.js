/**
 * ANALIZADOR DE TEXTOS
 * --------------------------------------------------------------------------
 * Función que recibe un texto y devuelve estadísticas sobre sus palabras.
 */
function analizarTexto(texto) {
    
    // 1. VALIDACIÓN BÁSICA
    if (typeof texto !== 'string' || texto.trim() === '') {
        console.log("❌ Error: Debes introducir un texto válido.");
        return;
    }

    // 2. LIMPIEZA Y PREPARACIÓN (Tokenización)
    // - .toLowerCase(): Todo a minúsculas
    // - .replace(): Usamos una expresión regular para borrar signos de puntuación
    // - .split(/\s+/): Cortamos el texto por los espacios en blanco
    // - .filter(): Por si se nos ha colado algún elemento vacío
    const textoLimpio = texto.toLowerCase().replace(/[.,;:"'¿?¡!()[\]{}]/g, '');
    const palabras = textoLimpio.split(/\s+/).filter(palabra => palabra.length > 0);

    // Si después de limpiar nos quedamos sin palabras (ej: si el texto era solo "..."), salimos
    if (palabras.length === 0) {
        console.log("⚠️ El texto no contiene palabras válidas.");
        return;
    }

    // --- MÉTRICA 1: Número total de palabras ---
    const totalPalabras = palabras.length;

    // --- MÉTRICA 2: Promedio de longitud ---
    // Sumamos la longitud de todas las palabras con reduce y dividimos entre el total
    const sumaCaracteres = palabras.reduce((acumulador, palabra) => acumulador + palabra.length, 0);
    // Usamos .toFixed(2) para dejar un máximo de 2 decimales
    const promedioLongitud = (sumaCaracteres / totalPalabras).toFixed(2);

    // --- MÉTRICA 3: Palabra más común (Mapa de Frecuencias) ---
    // Creamos un objeto vacío donde las "claves" serán las palabras y los "valores" las veces que salen
    const mapaFrecuencias = {};
    let palabraGanadora = "";
    let maxRepeticiones = 0;

    // Recorremos todas las palabras
    for (let palabra of palabras) {
        
        // Si la palabra ya existe en el mapa, le sumamos 1. Si no existe, la inicializamos a 1.
        if (mapaFrecuencias[palabra]) {
            mapaFrecuencias[palabra]++;
        } else {
            mapaFrecuencias[palabra] = 1;
        }

        // Comprobamos si esta palabra acaba de superar el récord de repeticiones
        if (mapaFrecuencias[palabra] > maxRepeticiones) {
            maxRepeticiones = mapaFrecuencias[palabra];
            palabraGanadora = palabra;
        }
    }

    // 3. MOSTRAR RESULTADOS
    console.log(`\n📊 --- REPORTE DE ANÁLISIS DE TEXTO --- 📊`);
    console.log(`Texto original: "${texto}"\n`);
    console.log(`Total de palabras:     ${totalPalabras}`);
    console.log(`Longitud media:        ${promedioLongitud} letras/palabra`);
    console.log(`Palabra más frecuente: "${palabraGanadora}" (aparece ${maxRepeticiones} veces)`);
    console.log(`------------------------------------------\n`);
    
    // Retornamos un objeto con los datos por si quisiéramos usarlos en otro lado
    return {
        total: totalPalabras,
        promedio: Number(promedioLongitud),
        masComun: palabraGanadora,
        repeticiones: maxRepeticiones
    };
}


// ==========================================
// PRUEBAS DEL CÓDIGO
// ==========================================

// Prueba 1: Un texto descriptivo normal
const descripcionCoche = "El coche está en perfecto estado. El motor es nuevo y el interior del coche está limpio. ¡Perfecto para la ciudad!";
analizarTexto(descripcionCoche);

// Prueba 2: Un trabalenguas para forzar la palabra más común
const trabalenguas = "Tres tristes tigres tragaban trigo en un trigal. En un trigal tragaban trigo tres tristes tigres.";
analizarTexto(trabalenguas);