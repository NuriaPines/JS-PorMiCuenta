/**
 * Función que recibe un dato (texto o número) y oculta todos 
 * sus caracteres con asteriscos, excepto los últimos 4.
 */
function enmascararDatos(dato) {
    
    // 1. Validaciones y preparación
    // Si nos pasan un nulo o vacío, avisamos.
    if (dato === null || dato === undefined || dato === "") {
        console.log("Error: No hay datos para enmascarar.");
        return;
    }

    // Convertimos la entrada a cadena de texto (String) por si nos pasan 
    // un número de tarjeta como valor numérico puro.
    const texto = String(dato);

    // 2. Condición de seguridad
    // Si el texto tiene 4 caracteres o menos, no tiene sentido ocultar nada.
    if (texto.length <= 4) {
        console.log(`Dato demasiado corto para enmascarar: ${texto}`);
        return texto;
    }

    // 3. Extraer la parte visible
    // El método .slice() corta un trozo del texto. 
    // Si le pasamos un número negativo (-4), empieza a contar desde el final hacia atrás.
    const ultimosCuatro = texto.slice(-4);

    // 4. Calcular la máscara
    // Averiguamos cuántos caracteres tenemos que ocultar restándole 4 a la longitud total.
    const cantidadOcultar = texto.length - 4;
    
    // Generamos una cadena de asteriscos de ese tamaño exacto usando .repeat()
    const mascara = "*".repeat(cantidadOcultar);

    // 5. Juntar las piezas
    const resultadoFinal = mascara + ultimosCuatro;

    // 6. Mostrar por consola
    console.log(`--- SISTEMA DE SEGURIDAD ---`);
    console.log(`Dato original: ${texto}`);
    console.log(`Dato oculto:   ${resultadoFinal}`);
    console.log(`----------------------------\n`);

    return resultadoFinal;
}

// ==========================================
// PRUEBAS DEL CÓDIGO
// ==========================================

// Prueba 1: Una tarjeta de crédito estándar de 16 dígitos (ideal para pasarelas de alquiler)
enmascararDatos("4532112233449876");

// Prueba 2: Un IBAN de cuenta bancaria (mezcla letras y números)
enmascararDatos("ES9121000418401234567890");

// Prueba 3: Un número de bastidor (VIN) de un coche
enmascararDatos("VF15R5485451234");

// Prueba 4: Un dato demasiado corto (un PIN de 4 dígitos)
enmascararDatos("1234");