/**
 * RESUMIDOR DE TEXTO (TOP 10 PALABRAS)
 * --------------------------------------------------------------------------
 * Función que extrae, cuenta y ordena las 10 palabras con más 
 * significado y frecuencia de un texto.
 */
function extraerTop10Palabras(texto) {
    
    if (typeof texto !== 'string' || texto.trim() === '') {
        console.log("❌ Error: Introduce un texto válido.");
        return [];
    }

    // 1. DICCIONARIO DE "STOP WORDS" (Palabras vacías a ignorar)
    // En un sistema real, esta lista tendría cientos de palabras.
    const palabrasIgnoradas = [
        "el", "la", "los", "las", "un", "una", "unos", "unas",
        "de", "del", "a", "al", "en", "con", "por", "para", "sin", "sobre",
        "y", "o", "pero", "porque", "que", "se", "su", "sus", "es", "son"
    ];

    // 2. LIMPIEZA Y TOKENIZACIÓN
    const textoLimpio = texto.toLowerCase().replace(/[^a-záéíóúñü0-9\s]/g, '');
    const arrayPalabras = textoLimpio.split(/\s+/).filter(palabra => palabra.length > 0);

    // 3. MAPA DE FRECUENCIAS (Ignorando las Stop Words)
    const mapaFrecuencias = {};
    
    for (let palabra of arrayPalabras) {
        // Solo la contamos si NO está en la lista de palabras ignoradas
        if (!palabrasIgnoradas.includes(palabra)) {
            mapaFrecuencias[palabra] = (mapaFrecuencias[palabra] || 0) + 1;
        }
    }

    // 4. TRANSFORMACIÓN DE OBJETO A ARRAY
    // Object.entries transforma { motor: 3, rueda: 1 } en [ ["motor", 3], ["rueda", 1] ]
    const arrayFrecuencias = Object.entries(mapaFrecuencias);

    // 5. ORDENACIÓN Y RECORTE
    const top10 = arrayFrecuencias
        // Ordenamos descendentemente comparando el valor numérico (índice 1 de cada sub-array)
        .sort((a, b) => b[1] - a[1])
        // Nos quedamos solo con los 10 primeros
        .slice(0, 10);

    // 6. MOSTRAR RESULTADOS
    console.log(`\n🏆 --- TOP 10 PALABRAS MÁS USADAS --- 🏆`);
    
    if (top10.length === 0) {
        console.log("No se encontraron palabras relevantes.");
    } else {
        // Usamos .forEach para imprimir la lista de forma bonita
        top10.forEach((item, index) => {
            const palabra = item[0];
            const repeticiones = item[1];
            console.log(`${index + 1}. "${palabra}" (${repeticiones} veces)`);
        });
    }
    console.log(`---------------------------------------\n`);

    return top10;
}


// ==========================================
// PRUEBAS DEL CÓDIGO
// ==========================================

// Vamos a probarlo con un texto promocional típico
const textoPromocional = `
    En NujamaMotors, ofrecemos la mejor selección de vehículos de ocasión. 
    Nuestro equipo en NujamaMotors revisa cada coche meticulosamente, asegurando que 
    cada coche cumpla con los máximos estándares de calidad. Ya sea que busques un 
    coche compacto para la ciudad, un vehículo familiar espacioso o un vehículo 
    comercial, en NujamaMotors lo encontrarás al mejor precio. ¡Visita NujamaMotors hoy!
`;

extraerTop10Palabras(textoPromocional);