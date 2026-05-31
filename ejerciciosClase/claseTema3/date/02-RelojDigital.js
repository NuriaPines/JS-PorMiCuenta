/**
 * EJERCICIO 2: RELOJ DIGITAL POR CONSOLA
 * --------------------------------------------------------------------------
 * Función que inicia un reloj continuo que se actualiza cada segundo.
 */
function iniciarRelojDigital() {
    
    console.log("Iniciando reloj digital... (Presiona Ctrl+C para detenerlo si estás en Node)");

    // 1. setInterval() es una función nativa que ejecuta un bloque de código 
    // repetidamente cada "X" milisegundos.
    setInterval(() => {
        
        // 2. Obtenemos la fecha y hora exactas en este milisegundo concreto.
        const ahora = new Date();

        // 3. Extraemos las horas, minutos y segundos por separado.
        // Como nos lo devuelven como números (ej: 9), los convertimos a texto con String().
        // Luego usamos .padStart(2, '0') para decir: "Si esto no ocupa 2 caracteres, 
        // rellénalo con un '0' por la izquierda".
        const horas = String(ahora.getHours()).padStart(2, '0');
        const minutos = String(ahora.getMinutes()).padStart(2, '0');
        const segundos = String(ahora.getSeconds()).padStart(2, '0');

        // 4. Limpiamos la consola para dar la ilusión de que el texto se actualiza en el sitio
        // (Nota: Dependiendo del entorno donde lo ejecutes, esto puede parpadear un poco).
        console.clear();

        // 5. Dibujamos el "display" de nuestro reloj digital
        console.log(`=========================`);
        console.log(`      RELOJ DIGITAL      `);
        console.log(`        ${horas}:${minutos}:${segundos}        `);
        console.log(`=========================`);

    }, 1000); // <-- 1000 milisegundos = 1 segundo. Esta es la velocidad de actualización.
}

// ==========================================
// EJECUTAR EL PROGRAMA
// ==========================================

// Para ver la magia, solo tienes que llamar a la función.
// El programa se quedará en un bucle infinito actualizando la hora.
iniciarRelojDigital();