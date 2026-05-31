/**
 * 1. FUNCIÓN PARA TEXTOS
 * Convierte a mayúsculas y elimina las tildes respetando las posiciones.
 */
function procesarTexto(texto) {
    // .toUpperCase() lo pasa todo a mayúsculas.
    // .normalize("NFD") es la magia: separa las letras de sus tildes (la 'Á' pasa a ser 'A' + '´').
    // .replace(/[\u0300-\u036f]/g, "") usa una expresión regular para buscar esas tildes sueltas y borrarlas.
    return texto.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

/**
 * 2. FUNCIÓN PARA NÚMEROS
 * Cambia la coma decimal por un punto. Si ya tiene punto, lo deja igual.
 */
function formatearNumero(numeroStr) {
    // Usamos .replace() para cambiar la coma por el punto.
    return numeroStr.replace(',', '.');
}

/**
 * 3. FUNCIÓN PRINCIPAL (El "Director de Orquesta")
 * Recibe el dato, controla los errores, detecta qué tipo es y llama a la función adecuada.
 */
function analizarEntrada(entrada) {
    console.log(`--- PROCESANDO ENTRADA ---`);

    // A. Control de fallos (null, undefined o vacío)
    // Esto simula que el usuario ha dado a "Cancelar" en el prompt o lo ha dejado en blanco.
    if (entrada === null || entrada === undefined || String(entrada).trim() === "") {
        console.log("Error: Ejecución cancelada o texto vacío.");
        console.log("--------------------------\n");
        return; // Salimos y no hacemos nada más
    }

    // B. Convertimos la entrada a cadena de texto por seguridad 
    // (ya que un prompt siempre nos devolvería texto).
    const textoEntrada = String(entrada);

    // C. Detección: ¿Es número o texto?
    // Truco: Para saber si es un número, primero simulamos cambiarle la coma por un punto.
    const posibleNumero = textoEntrada.replace(',', '.');

    // Usamos isNaN (Is Not a Number) combinado con un '!' (NOT) al principio.
    // Se lee como: "Si NO es 'No-Número'..." -> Es decir, si ES un número válido.
    if (!isNaN(posibleNumero)) {
        
        console.log("Tipo detectado: NÚMERO");
        const resultadoNumerico = formatearNumero(textoEntrada);
        console.log(`Valor original: ${textoEntrada}`);
        console.log(`Resultado:      ${resultadoNumerico}`);

    } else {
        
        console.log("Tipo detectado: TEXTO");
        const resultadoTexto = procesarTexto(textoEntrada);
        console.log(`Valor original: "${textoEntrada}"`);
        console.log(`Resultado:      "${resultadoTexto}"`);
        
    }
    
    console.log("--------------------------\n");
}

// ==========================================
// PRUEBAS DEL CÓDIGO (Simulando lo que metería el usuario)
// ==========================================

// 1. Probamos con la frase del ejemplo (Texto con tildes)
analizarEntrada("Esta página es para la formación.");

// 2. Probamos con un número usando coma
analizarEntrada("3,25");

// 3. Probamos con un número usando punto (no debería cambiar)
analizarEntrada("78.156");

// 4. Probamos con un texto vacío
analizarEntrada("   ");

// 5. Probamos simulando que el usuario le da a "Cancelar" en el prompt
analizarEntrada(null);