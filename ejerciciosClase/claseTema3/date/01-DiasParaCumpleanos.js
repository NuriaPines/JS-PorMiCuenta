/**
 * EJERCICIO 1: DÍAS HASTA TU CUMPLEAÑOS
 * --------------------------------------------------------------------------
 * Función que recibe el mes y el día de nacimiento y calcula cuántos 
 * días faltan hasta la próxima vez que se celebre.
 */
function calcularDiasParaCumpleanos(mes, dia) {
    
    // 1. Obtenemos la fecha exacta del momento actual
    const hoy = new Date();
    
    // Por si acaso ejecutamos el código a mitad del día, "reseteamos" la hora de hoy 
    // a las 00:00:00 para que el cálculo de días sea perfecto y no haya decimales raros.
    hoy.setHours(0, 0, 0, 0);

    // 2. Construimos la fecha del cumpleaños para ESTE AÑO.
    // Usamos hoy.getFullYear() para coger el año en el que estamos.
    // IMPORTANTE: Le restamos 1 al mes porque en JavaScript los meses van del 0 al 11.
    let proximoCumple = new Date(hoy.getFullYear(), mes - 1, dia);

    // 3. Comparamos los tiempos (en milisegundos)
    // .getTime() convierte la fecha a un número gigante de milisegundos.
    // Si la fecha de hoy es MAYOR que la del cumpleaños, significa que ya ha pasado este año.
    if (hoy.getTime() > proximoCumple.getTime()) {
        
        // Como ya ha pasado, reprogramamos el cumpleaños para el año que viene
        proximoCumple.setFullYear(hoy.getFullYear() + 1);
    } 
    // Un pequeño toque por si ejecutamos el código justo el día del cumpleaños
    else if (hoy.getTime() === proximoCumple.getTime()) {
        console.log(`¡Feliz cumpleaños! Hoy es tu día. Faltan 0 días.`);
        return 0;
    }

    // 4. Calculamos la diferencia en milisegundos
    const diferenciaMilisegundos = proximoCumple.getTime() - hoy.getTime();

    // 5. Conversión a días
    // 1 segundo = 1000 ms
    // 1 minuto = 60 seg
    // 1 hora = 60 min
    // 1 día = 24 horas
    // Por tanto, 1 día = 1000 * 60 * 60 * 24 = 86.400.000 milisegundos
    const milisegundosPorDia = 1000 * 60 * 60 * 24;
    
    // Dividimos la diferencia entre lo que ocupa un día.
    // Usamos Math.ceil() (redondear hacia arriba) para asegurar que un día a medias cuente como 1.
    const diasRestantes = Math.ceil(diferenciaMilisegundos / milisegundosPorDia);

    // 6. Mostramos el resultado
    console.log(`--- CUENTA ATRÁS ---`);
    console.log(`Próximo cumpleaños: ${proximoCumple.toLocaleDateString()}`);
    console.log(`Faltan exactamente: ${diasRestantes} días.`);
    console.log(`--------------------\n`);

    return diasRestantes;
}

// ==========================================
// PRUEBAS DEL CÓDIGO
// ==========================================

// Prueba 1: Un cumpleaños en pleno verano (20 de julio)
calcularDiasParaCumpleanos(7, 20);

// Prueba 2: Un cumpleaños a principios de año (15 de enero)
// (Esto forzará al código a saltar al año que viene, ya que enero ya pasó)
calcularDiasParaCumpleanos(1, 15);

// Prueba 3: Un cumpleaños a finales de año (31 de diciembre)
calcularDiasParaCumpleanos(12, 31);