/**
 * Función que recibe un número mínimo y un número máximo 
 * y devuelve un número entero aleatorio que esté entre ellos (ambos incluidos).
 */
function generarNumeroAleatorio(min, max) {
    
    // 1. Calculamos cuántos números posibles hay en nuestro rango.
    // Le sumamos 1 para asegurarnos de que el número 'max' también pueda salir.
    // Ejemplo: Si min es 5 y max es 10 -> (10 - 5 + 1) = 6 opciones posibles (5,6,7,8,9,10).
    const opcionesPosibles = max - min + 1;

    // 2. Generamos el número decimal aleatorio básico (entre 0 y 0.999...).
    const decimalAleatorio = Math.random();

    // 3. Multiplicamos el decimal por nuestras opciones.
    // Esto nos dará un número decimal que va desde el 0 hasta casi el número de opciones.
    const numeroExpandido = decimalAleatorio * opcionesPosibles;

    // 4. Usamos Math.floor para quitarle los decimales y redondear hacia abajo.
    // Ahora tenemos un número entero que va desde el 0 hasta (opciones - 1).
    const numeroSinDecimales = Math.floor(numeroExpandido);

    // 5. Finalmente, le sumamos nuestro número 'min'. 
    // Así desplazamos el resultado para que no empiece en 0, sino donde nosotros queremos.
    const resultadoFinal = numeroSinDecimales + min;

    // Mostramos por consola el resultado para comprobarlo.
    console.log(`Generando número aleatorio entre ${min} y ${max}... ¡Ha salido el ${resultadoFinal}!`);
    
    // Devolvemos el valor por si queremos usarlo en otra parte del programa.
    return resultadoFinal;
}

// ==========================================
// PRUEBAS DEL CÓDIGO
// ==========================================

// Tiramos un dado clásico (del 1 al 6)
generarNumeroAleatorio(1, 6);

// Generamos un porcentaje al azar (del 0 al 100)
generarNumeroAleatorio(0, 100);

// Un número aleatorio negativo y positivo (del -10 al 10)
generarNumeroAleatorio(-10, 10);