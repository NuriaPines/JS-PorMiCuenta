/**
 * Función que añade un nuevo registro a la base de datos controlando 
 * longitudes máximas, duplicados e IDs autoincrementables.
 */
function addDatos(nombreCompleto, lista) {
    
    // 1. Validaciones de seguridad básicas
    if (!nombreCompleto || !Array.isArray(lista)) {
        console.log("❌ Error: Parámetros inválidos.");
        return -1;
    }

    // 2. Extracción y recorte de datos (Truncamiento)
    // El método .slice(0, 15) coge desde la posición 0 hasta la 14. 
    // Si el texto es más corto, no pasa nada, se queda igual.
    // También usamos .trim() para evitar guardar espacios en blanco inútiles.
    const nombreLimpio = String(nombreCompleto.nombre).trim().slice(0, 15);
    const apellidosLimpios = String(nombreCompleto.apellidos).trim().slice(0, 25);

    // 3. Comprobar si YA EXISTE en la base de datos
    // Usamos .some(), que recorre el array y devuelve 'true' si AL MENOS UN 
    // elemento cumple la condición. Convertimos a minúsculas para que la búsqueda sea perfecta.
    const existeDuplicado = lista.some(persona => 
        persona.nombre.toLowerCase() === nombreLimpio.toLowerCase() && 
        persona.apellidos.toLowerCase() === apellidosLimpios.toLowerCase()
    );

    if (existeDuplicado) {
        console.log(`⚠️ El registro "${nombreLimpio} ${apellidosLimpios}" ya existe.`);
        return -1;
    }

    // 4. Calcular el nuevo ID (Autoincremental)
    let nuevoId = 1; // Por defecto, si la lista está vacía, será el ID 1
    
    if (lista.length > 0) {
        // Extraemos solo los números de ID a un nuevo array usando .map()
        const arrayDeIds = lista.map(persona => persona.id);
        
        // Encontramos el número más alto y le sumamos 1
        nuevoId = Math.max(...arrayDeIds) + 1;
    }

    // 5. Crear el nuevo objeto y añadirlo a la lista
    const nuevaPersona = {
        id: nuevoId,
        nombre: nombreLimpio,
        apellidos: apellidosLimpios
    };

    lista.push(nuevaPersona);

    // 6. Asegurar que la lista quede ordenada por ID de forma ascendente
    lista.sort((a, b) => a.id - b.id);

    // 7. Retornar la lista actualizada
    console.log(`✅ ¡Éxito! "${nombreLimpio} ${apellidosLimpios}" registrado con el ID: ${nuevoId}.`);
    return lista;
}

// ==========================================
// PRUEBAS DEL CÓDIGO
// ==========================================

console.log("--- GESTOR DE REGISTROS ---");

// Creamos nuestra base de datos inicial de prueba
const baseDeDatos = [
    { id: 1, nombre: "Ana", apellidos: "García" },
    { id: 3, nombre: "Luis", apellidos: "Martínez" } // Fíjate que falta el ID 2
];

console.log("Lista original:", baseDeDatos);
console.log("\n");

// Prueba 1: Añadir una persona con textos DEMASIADO LARGOS
// "Francisco Javier" (16 chars) -> Debería cortarse a 15 ("Francisco Javie")
// "De Los Santos de la Trinidad" (28 chars) -> Debería cortarse a 25 ("De Los Santos de la Trini")
const objLargo = { nombre: "Francisco Javier", apellidos: "De Los Santos de la Trinidad" };
const resultado1 = addDatos(objLargo, baseDeDatos);
console.log("Resultado Prueba 1:", resultado1);

console.log("\n");

// Prueba 2: Intentar añadir un duplicado (Ana García)
const objDuplicado = { nombre: "Ana", apellidos: "García" };
const resultado2 = addDatos(objDuplicado, baseDeDatos);
console.log("Resultado Prueba 2:", resultado2); // Debería dar -1