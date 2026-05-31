/**
 * Función básica para evaluar la nota de un alumno.
 */
function evaluarAlumno(nombre, notaIntroducida) {

    // 1. Validamos que el nombre exista y no esté vacío
    if (!nombre || nombre === "") {
        console.log("Error: Nombre no válido.");
        return; 
    }

    // 2. Validamos que se haya introducido algo en la nota
    if (notaIntroducida === null || notaIntroducida === undefined || notaIntroducida === "") {
        console.log("Error: Nota no introducida.");
        return;
    }

    // 3. Cambiamos la coma por un punto (si la hay) para que JS lo entienda
    const notaFormateada = String(notaIntroducida).replace(',', '.');

    // 4. Convertimos ese texto en un número con decimales
    const notaNumerica = parseFloat(notaFormateada);

    // 5. Validamos que realmente sea un número y esté entre 0 y 10
    if (isNaN(notaNumerica) || notaNumerica < 0 || notaNumerica > 10) {
        console.log("Error: La nota introducida no es válida.");
        return;
    }

    // 6. Clasificamos la nota
    let calificacion = "";

    if (notaNumerica < 5) {
        calificacion = "Necesita mejorar";
    } else if (notaNumerica < 6) {
        calificacion = "Aprobado";
    } else if (notaNumerica < 7) {
        calificacion = "Bien";
    } else if (notaNumerica < 9) {
        calificacion = "Notable";
    } else {
        calificacion = "Sobresaliente";
    }

    // 7. Mostramos el resultado de la forma más básica
    console.log("Alumno: " + nombre);
    console.log("Nota: " + notaNumerica);
    console.log("Resultado: " + calificacion);
    console.log("-------------------------");
}

// ==========================================
// PRUEBAS BÁSICAS
// ==========================================

evaluarAlumno("Juan", "4,5");  // Prueba con coma (Necesita mejorar)
evaluarAlumno("Ana", 6.8);     // Prueba con punto (Bien)
evaluarAlumno("Luis", 9);      // Prueba número entero (Sobresaliente)
evaluarAlumno("Marta", "diez"); // Prueba de error