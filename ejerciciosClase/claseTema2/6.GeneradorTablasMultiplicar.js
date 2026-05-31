/**
 * Función que recibe un número y muestra por consola 
 * su tabla de multiplicar del 1 al 10.
 */
function generarTablaMultiplicar(numero) {
    
    // 1. Mostramos una cabecera para que el resultado quede bonito en la consola.
    console.log(`--- TABLA DE MULTIPLICAR DEL ${numero} ---`);

    // 2. Iniciamos el bucle 'for'.
    // let i = 1; -> Empezamos a multiplicar por 1.
    // i <= 10;   -> Repetimos el bucle mientras 'i' sea menor o igual a 10.
    // i++        -> En cada vuelta, sumamos 1 a 'i'.
    for (let i = 1; i <= 10; i++) {
        
        // 3. Calculamos el resultado de la multiplicación actual.
        // Multiplicamos el número base que nos han pasado por el número de la vuelta actual (i).
        const resultado = numero * i;

        // 4. Mostramos el resultado por pantalla con formato.
        // Usamos las comillas invertidas (backticks ``) para poder insertar 
        // nuestras variables directamente dentro del texto usando ${}.
        console.log(`${numero} x ${i} = ${resultado}`);
    }
    
    // Añadimos un salto de línea extra al final por si imprimimos varias tablas seguidas
    console.log(`\n`); 
}

// ==========================================
// PRUEBAS DEL CÓDIGO
// ==========================================

// Vamos a generar la clásica tabla del 5
generarTablaMultiplicar(5);

// Y probamos con la del 9
generarTablaMultiplicar(9);