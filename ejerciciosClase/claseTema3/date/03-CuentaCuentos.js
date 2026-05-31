/**
 * EJERCICIO 3: CUENTACUENTOS DE FECHAS
 * --------------------------------------------------------------------------
 * Función que recibe una fecha y construye una historia narrativa 
 * traduciendo los números de la fecha a palabras humanas.
 */
function contarHistoria(fechaStr, protagonista, hito) {
    
    // 1. Convertimos el texto inicial a un objeto Date real
    const fecha = new Date(fechaStr);

    // 2. Validamos que la fecha sea correcta (si la fecha es inválida, su tiempo es NaN)
    if (isNaN(fecha.getTime())) {
        console.log("Error: La fecha introducida para el cuento no es válida.");
        return;
    }

    // 3. Creamos nuestros diccionarios de traducción.
    // OJO: getDay() devuelve 0 para el Domingo, 1 para el Lunes... 
    // Por eso el Domingo tiene que ir el primero en nuestra lista.
    const diasSemana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    
    // getMonth() devuelve 0 para Enero, 1 para Febrero...
    const meses = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio", 
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];

    // 4. Extraemos los datos numéricos y los traducimos pasando el número 
    // como índice a nuestros Arrays.
    const nombreDiaSemana = diasSemana[fecha.getDay()];
    const nombreMes = meses[fecha.getMonth()];
    
    const diaNumero = fecha.getDate();
    const anio = fecha.getFullYear();
    const hora = fecha.getHours();

    // 5. Lógica extra: Determinar si era de día o de noche según la hora
    let momentoDia = "madrugada";
    if (hora >= 6 && hora < 13) momentoDia = "mañana";
    else if (hora >= 13 && hora < 20) momentoDia = "tarde";
    else if (hora >= 20 || hora < 6) momentoDia = "noche";

    // 6. Construcción del cuento usando las variables (Template Literals)
    console.log(`--- EL CUENTO DE ${protagonista.toUpperCase()} ---`);
    console.log(`Érase una vez, un ${nombreDiaSemana} ${diaNumero} de ${nombreMes} del año ${anio}.`);
    console.log(`Era una tranquila ${momentoDia} cuando nuestro protagonista, ${protagonista},`);
    console.log(`decidió que era el momento perfecto para ${hito}.`);
    console.log(`Y desde aquel ${nombreDiaSemana}, la historia cambió para siempre.`);
    console.log(`FIN.\n`);
}

// ==========================================
// PRUEBAS DEL CÓDIGO
// ==========================================

// Usamos el formato ISO ("YYYY-MM-DDTHH:mm:ss") para poder incluir la hora exacta
contarHistoria("2026-05-31T17:30:00", "Nuria", "desplegar la versión final de la base de datos de NujamaMotors");

contarHistoria("1995-12-04T09:00:00", "Brendan Eich", "inventar el lenguaje JavaScript");

contarHistoria("2001-01-01T23:59:00", "El mundo", "celebrar el comienzo del nuevo milenio");