/**
 * SISTEMA DE GESTIÓN DE OPERARIOS
 * --------------------------------------------------------------------------
 */

// 1. EL "ALMACÉN" (Base de datos en memoria)
// Creamos un array vacío donde iremos guardando los objetos de cada operario.
const plantillaOperarios = [];

// ==========================================
// FUNCIONES AUXILIARES DE VALIDACIÓN
// ==========================================

// A. Validador de DNI Español (Matemática real)
function esDniValido(dni) {
    const regex = /^\d{8}[a-zA-Z]$/;
    // Verificamos que tenga 8 números y 1 letra
    if (!regex.test(dni)) return false;

    // Extraemos el número y la letra
    const numero = parseInt(dni.slice(0, 8));
    const letraIntroducida = dni.slice(-1).toUpperCase();
    
    // Cadena oficial del Ministerio del Interior
    const letrasOficiales = "TRWAGMYFPDXBNJZSQVHLCKE";
    const letraCorrecta = letrasOficiales.charAt(numero % 23);

    return letraIntroducida === letraCorrecta;
}

// B. Validador de Fechas y Edad (> 18 años)
function verificarFechas(fechaNacStr, fechaContratoStr) {
    const nacimiento = new Date(fechaNacStr);
    const contrato = new Date(fechaContratoStr);
    const hoy = new Date();

    // Comprobamos si las fechas tienen formato válido
    if (isNaN(nacimiento.getTime()) || isNaN(contrato.getTime())) return false;

    // 1. Calcular edad en el momento actual
    let edadActual = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edadActual--;
    }

    if (edadActual < 18) {
        console.log("❌ Error: El operario es menor de edad.");
        return false;
    }

    // 2. Verificar que la fecha de contrato sea lógica
    // No puede estar contratado en el futuro
    if (contrato.getTime() > hoy.getTime()) {
        console.log("❌ Error: La fecha de contrato no puede estar en el futuro.");
        return false;
    }

    // No pudo ser contratado antes de cumplir los 18 años
    const fechaMayoriaEdad = new Date(nacimiento);
    fechaMayoriaEdad.setFullYear(nacimiento.getFullYear() + 18);
    
    if (contrato.getTime() < fechaMayoriaEdad.getTime()) {
        console.log("❌ Error: La fecha de contrato es anterior a su mayoría de edad.");
        return false;
    }

    return true;
}


// ==========================================
// FUNCIÓN PRINCIPAL: ALTA DE OPERARIOS
// ==========================================

function darDeAltaOperario(nombre, apellido, idOp, dni, cargoOp, fechaNac, fechaContrato) {
    console.log(`\n▶ Intentando registrar al operario: ${nombre} ${apellido}...`);

    // 1. VALIDACIONES DE LONGITUD Y FORMATO
    // (Aprovechamos para limpiar espacios extra con .trim())
    const nomLimpio = String(nombre).trim();
    if (nomLimpio.length === 0 || nomLimpio.length > 15) return console.log("❌ Error: Nombre (Máx 15 chars).");

    const apeLimpio = String(apellido).trim();
    if (apeLimpio.length === 0 || apeLimpio.length > 30) return console.log("❌ Error: Apellido (Máx 30 chars).");

    // Convertimos idOp a texto por si acaso, y verificamos que sean exactamente 5 números
    const idLimpio = String(idOp).trim();
    if (!/^\d{5}$/.test(idLimpio)) return console.log("❌ Error: El ID debe tener exactamente 5 números.");

    const cargoLimpio = String(cargoOp).trim();
    if (cargoLimpio.length === 0 || cargoLimpio.length > 10) return console.log("❌ Error: Cargo (Máx 10 chars).");

    // 2. VALIDACIONES DE DNI Y FECHAS
    if (!esDniValido(dni)) return console.log("❌ Error: El DNI introducido no es válido.");
    if (!verificarFechas(fechaNac, fechaContrato)) return; // El error ya se imprime dentro de la función

    // 3. CREACIÓN DEL OBJETO
    // Como las variables se llaman igual que las propiedades que queremos, 
    // podemos usar la sintaxis abreviada de ES6 (poner solo 'nombre' en vez de 'nombre: nombre').
    const nuevoOperario = {
        nombre: nomLimpio,
        apellido: apeLimpio,
        idOp: idLimpio,
        dni: dni.toUpperCase(),
        cargoOp: cargoLimpio,
        fechaNacimiento: fechaNac,
        fechaContrato: fechaContrato
    };

    // 4. AÑADIMOS EL OBJETO AL ARRAY
    plantillaOperarios.push(nuevoOperario);
    console.log(`✅ ¡Éxito! Operario [${idLimpio}] registrado correctamente.`);
}


// ==========================================
// FUNCIÓN DE BÚSQUEDA Y VERIFICACIÓN
// ==========================================

// Recibe el ID a buscar y el array donde tiene que buscarlo
function buscarOperario(idBuscado, arrayOperarios) {
    console.log(`\n🔍 Buscando operario con ID: ${idBuscado}...`);

    // El método .find() recorre el array y devuelve el PRIMER objeto 
    // que cumpla la condición. Si no encuentra nada, devuelve 'undefined'.
    const operarioEncontrado = arrayOperarios.find(operario => operario.idOp === String(idBuscado));

    if (operarioEncontrado) {
        console.log(`--- FICHA DEL OPERARIO ---`);
        console.log(`Nombre:    ${operarioEncontrado.nombre} ${operarioEncontrado.apellido}`);
        console.log(`DNI:       ${operarioEncontrado.dni}`);
        console.log(`Cargo:     ${operarioEncontrado.cargoOp}`);
        console.log(`Nacimiento:${operarioEncontrado.fechaNacimiento}`);
        console.log(`Contratado:${operarioEncontrado.fechaContrato}`);
        console.log(`--------------------------`);
        return operarioEncontrado;
    } else {
        console.log(`⚠️ No se ha encontrado ningún operario con el ID: ${idBuscado}`);
        return null;
    }
}


// ==========================================
// PRUEBAS DEL SISTEMA
// ==========================================

console.log("--- INICIANDO SISTEMA DE RRHH ---");

// Prueba 1: Operario PERFECTO
// Nota: "71477436T" es un DNI aleatorio válido para pruebas
darDeAltaOperario("Javier", "Pinel", "00123", "71477436T", "Mecánico", "1995-05-15", "2023-10-01");

// Prueba 2: Fallo por DNI inválido (Letra incorrecta)
darDeAltaOperario("Marco", "Martínez", "00124", "71477436A", "Técnico", "1998-02-20", "2024-01-15");

// Prueba 3: Fallo por ser menor de edad (Nacido en 2015)
darDeAltaOperario("Hugo", "López", "00125", "55555555K", "Becario", "2015-08-10", "2026-01-01");

// Prueba 4: Fallo por fecha de contrato imposible (Contratado antes de los 18)
darDeAltaOperario("Laura", "Gómez", "00126", "22222222J", "Gerente", "2000-01-01", "2010-05-05");

// Prueba 5: Fallo por longitud de cargo (Más de 10 caracteres)
darDeAltaOperario("Carlos", "Ruiz", "00127", "12345678Z", "Especialista Jefe", "1990-10-10", "2020-01-01");

// --- Pruebas de Búsqueda ---
// Buscamos a Javier (que sí se guardó)
buscarOperario("00123", plantillaOperarios);

// Buscamos a Marco (que no se guardó por el error de DNI)
buscarOperario("00124", plantillaOperarios);