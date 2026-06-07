// --- 1. FUNCIONES AYUDANTES ---

// Corrección de la fórmula del año bisiesto
function esBisiesto(anio) {
    return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
}

// Validador estricto de fecha en formato DD/MM/AAAA
function parsearYValidarFecha(fechaStr) {
    // Rompemos el string por las barras
    let partes = fechaStr.split('/');
    
    // Si no hay exactamente 3 partes, está mal el formato
    if (partes.length !== 3) return null;

    let dia = parseInt(partes[0]);
    let mes = parseInt(partes[1]);
    let anio = parseInt(partes[2]);

    // Validamos que sean números reales
    if (isNaN(dia) || isNaN(mes) || isNaN(anio)) return null;
    
    // Validamos el mes (del 1 al 12)
    if (mes < 1 || mes > 12) return null;

    // Array con los días máximos de cada mes
    let diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    // Si es bisiesto, le damos 29 días a febrero (el índice 1)
    if (esBisiesto(anio)) {
        diasPorMes[1] = 29;
    }

    // Validamos que el día introducido no supere el máximo de ese mes
    if (dia < 1 || dia > diasPorMes[mes - 1]) return null;

    // Si todo está perfecto, devolvemos el objeto Date.
    // ¡Ojo! En JS los meses empiezan en 0, así que le restamos 1 al mes.
    return new Date(anio, mes - 1, dia);
}

// Convertir el número del día a texto
function obtenerDiaSemana(fecha) {
    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    // .getDay() devuelve un número del 0 (Domingo) al 6 (Sábado)
    return diasSemana[fecha.getDay()];
}

// --- 2. FUNCIÓN PRINCIPAL DEL EJERCICIO ---

function programaFechas(strFecha1, strFecha2) {
    console.log(`--- Analizando Fechas: ${strFecha1} y ${strFecha2} ---`);

    // 1 y 2: Validamos la primera fecha
    let fecha1 = parsearYValidarFecha(strFecha1);
    if (!fecha1) {
        return console.log("❌ ERROR: La primera fecha es inválida o el formato no es DD/MM/AAAA.");
    }

    // 3. Día de la semana de la primera fecha
    console.log(`✅ La primera fecha es correcta y cae en: ${obtenerDiaSemana(fecha1)}`);

    // 4: Validamos la segunda fecha
    let fecha2 = parsearYValidarFecha(strFecha2);
    if (!fecha2) {
        return console.log("❌ ERROR: La segunda fecha es inválida o el formato no es DD/MM/AAAA.");
    }

    // 5. Comprobar que la segunda es posterior a la primera
    if (fecha2 <= fecha1) {
        return console.log("❌ ERROR: La segunda fecha debe ser estrictamente posterior a la primera.");
    }

    // 6. Día de la semana de la segunda fecha
    console.log(`✅ La segunda fecha es correcta/posterior y cae en: ${obtenerDiaSemana(fecha2)}`);

    // 7. Determinar número de días entre ambas
    // Al restar fechas en JS nos da milisegundos. Lo dividimos para pasarlo a días.
    let diferenciaMilisegundos = fecha2 - fecha1;
    let diasDiferencia = diferenciaMilisegundos / (1000 * 60 * 60 * 24);

    console.log(`📅 Hay exactamente ${diasDiferencia} días de diferencia entre ambas fechas.\n`);
}

// --- 3. ZONA DE PRUEBAS ---

// Prueba 1: Todo correcto y con bisiesto
programaFechas("29/02/2024", "05/03/2024");

// Prueba 2: Falla porque febrero no tiene 29 en 2023 (no es bisiesto)
programaFechas("29/02/2023", "05/03/2023");

// Prueba 3: Falla porque la segunda fecha es anterior a la primera
programaFechas("15/08/2025", "10/08/2025");