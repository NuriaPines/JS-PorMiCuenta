/**
 * Función que recibe una fecha de nacimiento (en formato texto 'AAAA-MM-DD')
 * y calcula la edad exacta en años, meses y días respecto a la fecha actual.
 */
function calcularEdadExacta(fechaNacimientoStr) {
    
    // 1. Convertimos el texto que nos pasan en objetos de tipo 'Date' (Fecha).
    // Esto le permite a JavaScript entender que no es un texto cualquiera, sino una fecha.
    const fechaNacimiento = new Date(fechaNacimientoStr);
    
    // Si creamos un nuevo 'Date' vacío, JavaScript coge automáticamente la fecha y hora de HOY.
    const fechaActual = new Date(); 

    // 2. Hacemos las restas iniciales directas (Año con Año, Mes con Mes, Día con Día).
    // .getFullYear() saca el año de cuatro cifras (ej: 2026).
    let anios = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    
    // .getMonth() saca el mes. OJO: en JavaScript los meses van del 0 (Enero) al 11 (Diciembre).
    let meses = fechaActual.getMonth() - fechaNacimiento.getMonth();
    
    // .getDate() saca el día del mes (del 1 al 31).
    let dias = fechaActual.getDate() - fechaNacimiento.getDate();

    // 3. Empezamos con las correcciones si algo ha dado negativo.
    // Corrección de DÍAS: Si los días son negativos, significa que aún no ha llegado 
    // el día exacto de nuestro cumpleaños este mes.
    if (dias < 0) {
        // Le restamos 1 a los meses (porque no hemos completado el mes actual).
        meses--;
        
        // Calculamos cuántos días tenía el mes pasado para poder sumárselos y compensar.
        // El truco de poner un '0' como día en new Date() nos da el último día del mes anterior.
        const diasDelMesAnterior = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 0).getDate();
        
        // Sumamos esos días a nuestro número negativo para obtener los días reales restantes.
        dias += diasDelMesAnterior;
    }

    // 4. Corrección de MESES: Si los meses son negativos, significa que aún no ha llegado 
    // nuestro mes de cumpleaños este año.
    if (meses < 0) {
        // Le restamos 1 a los años (porque aún no hemos cumplido años este año).
        anios--;
        
        // Como le hemos quitado un año, le sumamos 12 meses a nuestro contador de meses.
        meses += 12;
    }

    // 5. Mostramos el resultado por pantalla.
    console.log(`--- CÁLCULO DE EDAD ---`);
    console.log(`Nacimiento: ${fechaNacimientoStr}`);
    console.log(`Edad exacta: ${anios} años, ${meses} meses y ${dias} días.`);
    console.log(`-----------------------\n`);

    // Devolvemos los datos en un objeto por si los necesitamos
    return { anios, meses, dias };
}

// ==========================================
// PRUEBAS DEL CÓDIGO
// ==========================================

// Prueba 1: Alguien que nació hace bastante tiempo, en una fecha anterior al día/mes actual
calcularEdadExacta('1990-02-15');

// Prueba 2: Alguien que nació a finales de año (comprueba si la resta de años se corrige bien)
calcularEdadExacta('2005-11-20');

// Prueba 3: Un bebé que nació hace muy poco (puede dar 0 años)
calcularEdadExacta('2025-12-25');