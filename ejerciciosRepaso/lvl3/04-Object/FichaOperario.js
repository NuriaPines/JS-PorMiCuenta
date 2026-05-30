/*
1. Validador de DNI: validarDNI(dni)
Recibe un string como "12345678Z". Tiene que separar los números de la letra, calcular si la letra es correcta y devolver true o false.

    Pista Ninja: El algoritmo clásico del DNI es dividir el número entre 23 y coger el resto (numero % 23). Ese resto es la posición de la letra correcta en este string: "TRWAGMYFPDXBNJZSQVHLCKE".

2. Validador de Edad: esMayorDeEdad(fechaNacimiento)
Recibe un string de fecha (ej: "2005-10-25") y debe devolver true si esa persona tiene 18 años o más a día de hoy, y false si es menor.

    Pista Ninja: ¡Recicla la lógica de tu función calcularEdadExacta que hicimos en el bloque de fechas!
*/

// Letras oficiales del DNI por orden de resto (0 a 22)
const LETRAS_DNI = "TRWAGMYFPDXBNJZSQVHLCKE";

function validarDNI(dni) {
    // 1. Nos aseguramos de que el DNI esté en mayúsculas para que no falle al comparar
    let dniMayusculas = dni.toUpperCase();

    // 2. Extraemos la parte de los números (desde la posición 0 hasta la 8)
    let numeros = dniMayusculas.substring(0, 8); 
    
    // 3. Extraemos la letra que nos ha dado el usuario (la última posición)
    let letraUsuario = dniMayusculas.charAt(8); 

    // 4. Calculamos el resto de dividir los números entre 23
    // Usamos parseInt() para asegurarnos de que JS trata ese trozo como un número
    let resto = parseInt(numeros) % 23;

    // 5. Buscamos qué letra debería ser según nuestra cadena mágica
    let letraCalculada = LETRAS_DNI.charAt(resto);

    // 6. Comparamos. Si son iguales, devolverá true. Si no, false.
    if (letraCalculada === letraUsuario) {
        return true;
    } else {
        return false;
    }
}

function esMayorDeEdad(fechaNacimiento) {
    let cumple = new Date(fechaNacimiento);
    let hoy = new Date();
    
    let annios = hoy.getFullYear() - cumple.getFullYear();
    let meses = hoy.getMonth() - cumple.getMonth();
    let dias = hoy.getDate() - cumple.getDate();

    // Si el mes de hoy es anterior al de su cumple, o es el mismo mes pero el día no ha llegado, le restamos un año
    if (meses < 0 || (meses === 0 && dias < 0)) {
        annios--;
    }

    return annios >= 18; // Devuelve true si es 18 o más
}

let plantilla = [];

function registrarOperario(nombre, apellido, idOp, dni, cargoOp, fechaNacimiento, fechaContrato) {
    // 1. Validar DNI
    if (!validarDNI(dni)) return false
    // 2. Validar Edad
    if (!esMayorDeEdad(fechaNacimiento)) return false
    // 3. Recortar textos excedentes
    if (nombre.length > 15) {
        nombre = nombre.slice(0,15)
    } 
    if (apellido.length > 30) {
        apellido = apellido.slice(0,30)
    }
    if (cargoOp.length > 10) {
        cargoOp = cargoOp.slice(0,10)
    }
    // 4. Crear objeto y hacer push a plantilla
    let operario = {nombre, apellido, idOp, dni, cargoOp, fechaNacimiento, fechaContrato}    
    plantilla.push(operario)
}

// Pruebas
registrarOperario("Juan", "Perez", "12345", "12345678A", "Mecanico", "2000-05-10", "2024-01-01"); // DNI Falso -> Aborta
registrarOperario("Niño", "Gomez", "54321", "50349325W", "Mecanico", "2015-05-10", "2024-01-01"); // Menor -> Aborta
registrarOperario("EstefaniaMariaDeLasMercedes", "Fernandez De La Cruz Y De Todos Los Santos", "99999", "50349325W", "SuperMecanicoJefe", "1990-01-01", "2024-01-01"); 
// Pasa las validaciones, pero se recorta y se guarda en la plantilla.

console.log(plantilla);