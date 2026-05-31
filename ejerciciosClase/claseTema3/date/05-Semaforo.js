/**
 * EJERCICIO 5: SIMULADOR DE SEMÁFORO
 * --------------------------------------------------------------------------
 * Función que simula el ciclo de un semáforo (Verde -> Ámbar -> Rojo)
 * con duraciones de tiempo variables para cada luz.
 */
function simularSemaforo() {
    
    // 1. Configuramos nuestra "Máquina de Estados"
    // Un array de objetos es la forma perfecta de guardar las reglas del semáforo.
    // Cada objeto tiene el nombre, el icono y cuántos milisegundos debe durar.
    const fases = [
        { nombre: "VERDE", icono: "🟢", duracion: 4000 }, // 4 segundos
        { nombre: "ÁMBAR", icono: "🟡", duracion: 1500 }, // 1.5 segundos
        { nombre: "ROJO",  icono: "🔴", duracion: 4000 }  // 4 segundos
    ];

    // 2. Variables de control
    let indiceFaseActual = 0; // Para saber en qué posición del array estamos (0 = Verde)
    let ciclosCompletados = 0; // Para contar las vueltas que da
    const maxCiclos = 2; // Límite de seguridad para que no se quede infinito en consola

    console.log("Iniciando el sistema de control de tráfico...");

    // 3. Creamos la función principal que hará la magia (Función Recursiva)
    function cambiarLuz() {
        
        // Obtenemos todos los datos de la luz que toca encender ahora
        const faseActual = fases[indiceFaseActual];

        // Limpiamos la consola para dar el efecto de que la luz cambia en el sitio
        console.clear();
        
        // Dibujamos el semáforo
        console.log(`=== SEMÁFORO DE TRÁFICO ===`);
        console.log(`Estado: ${faseActual.icono} ${faseActual.nombre}`);
        console.log(`===========================`);
        console.log(`(Ciclo actual: ${ciclosCompletados + 1} de ${maxCiclos})`);

        // 4. Preparamos la siguiente fase
        // Sumamos 1 al índice para que en la próxima vuelta toque la siguiente luz
        indiceFaseActual++;

        // Si el índice llega a 3 (fuera del array), significa que hemos terminado el rojo.
        // Toca resetear el índice a 0 (Verde) y sumar un ciclo completado.
        if (indiceFaseActual >= fases.length) {
            indiceFaseActual = 0;
            ciclosCompletados++;
        }

        // 5. Condición de apagado del sistema
        // Comprobamos si ya hemos hecho las vueltas que queríamos
        if (ciclosCompletados >= maxCiclos) {
            console.log("\nApagando semáforo por mantenimiento.");
            return; // Al hacer return, la función termina y no se vuelve a llamar a sí misma
        }

        // 6. LA MAGIA: Recursividad controlada por tiempo
        // setTimeout ejecuta la función que le digas, una sola vez, cuando pase el tiempo indicado.
        // Al decirle que llame a 'cambiarLuz', estamos creando un bucle infinito dinámico.
        setTimeout(cambiarLuz, faseActual.duracion);
    }

    // 7. Arrancamos el semáforo haciendo la primera llamada manual
    cambiarLuz();
}

// ==========================================
// EJECUTAR EL PROGRAMA
// ==========================================

simularSemaforo();