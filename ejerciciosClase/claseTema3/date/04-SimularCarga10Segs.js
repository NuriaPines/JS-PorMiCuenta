/**
 * EJERCICIO 4: SIMULADOR DE CARGA DE 10 SEGUNDOS
 * --------------------------------------------------------------------------
 * Función que simula una espera de 10 segundos mostrando 
 * una barra de progreso que se actualiza en tiempo real.
 */
function simularCargaDiezSegundos() {
    
    console.log("Iniciando la conexión con el servidor...");

    // 1. Preparamos las variables de control
    let segundosTranscurridos = 0;
    const totalSegundos = 10;

    // 2. Iniciamos el bucle temporal (setInterval)
    // IMPORTANTE: Guardamos la ejecución en una constante llamada 'temporizador'.
    // Necesitamos este "mando a distancia" guardado para poder apagarlo después.
    const temporizador = setInterval(() => {
        
        // Sumamos un segundo al contador en cada vuelta
        segundosTranscurridos++;

        // 3. Calculamos cómo dibujar la barra de progreso
        // Usamos el símbolo '█' para lo que ya ha cargado y '-' para lo que falta.
        const barraLlena = "█".repeat(segundosTranscurridos);
        const barraVacia = "-".repeat(totalSegundos - segundosTranscurridos);
        
        // Calculamos el porcentaje simplemente multiplicando por 10
        const porcentaje = segundosTranscurridos * 10;

        // 4. Limpiamos y redibujamos la consola
        console.clear();
        console.log(`--- DESCARGANDO DATOS ---`);
        
        // Juntamos las dos partes de la barra dentro de unos corchetes
        console.log(`Progreso: [${barraLlena}${barraVacia}] ${porcentaje}%`);

        // 5. Condición de salida
        // Comprobamos si ya hemos llegado a nuestra meta de 10 segundos.
        if (segundosTranscurridos === totalSegundos) {
            
            // ¡MAGIA! Usamos clearInterval() pasándole nuestro "mando a distancia".
            // Esto destruye el bucle y evita que siga contando hacia el 11, 12, 13...
            clearInterval(temporizador);
            
            // Imprimimos el mensaje final de éxito
            console.log(`\n¡Carga completada con éxito!`);
            console.log(`El sistema está listo para usarse.`);
        }

    }, 1000); // 1000 milisegundos = 1 segundo por vuelta
}

// ==========================================
// EJECUTAR EL PROGRAMA
// ==========================================

simularCargaDiezSegundos();