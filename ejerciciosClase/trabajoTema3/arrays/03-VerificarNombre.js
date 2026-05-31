/**
 * Función que verifica si un nombre está en la lista.
 * Si no está, lo añade, ordena la lista y la devuelve.
 * Si ya está, devuelve -1.
 */
function verificarNombre(nombre, lista) {
    
    // 1. Validaciones de seguridad
    if (typeof nombre !== 'string' || !Array.isArray(lista)) {
        console.log("❌ Error: Debes introducir un nombre (texto) y una lista (Array).");
        return -1;
    }

    // 2. Comprobamos si el nombre YA EXISTE en la lista
    // .includes() devuelve true si lo encuentra, false si no.
    if (lista.includes(nombre)) {
        console.log(`⚠️ El nombre "${nombre}" ya existe en la base de datos.`);
        return -1;
    }

    // 3. Si llegamos aquí, el nombre NO existe. Lo añadimos al final del array.
    lista.push(nombre);

    // 4. Ordenamos el array alfabéticamente
    // Usamos localeCompare para que ordene correctamente las palabras con tildes.
    lista.sort((a, b) => a.localeCompare(b));

    // 5. Devolvemos la lista actualizada y ordenada
    console.log(`✅ ¡Éxito! "${nombre}" se ha añadido correctamente.`);
    return lista;
}

// ==========================================
// PRUEBAS DEL CÓDIGO
// ==========================================

console.log("--- SISTEMA DE REGISTRO DE NOMBRES ---");

// Preparamos una lista inicial de ejemplo
let listaNombres = ["Carlos", "Ana", "Zacarías", "Beatriz"];
console.log("Lista inicial:", listaNombres);
console.log("\n");

// Prueba 1: Intentamos añadir un nombre NUEVO ("Álvaro")
const resultado1 = verificarNombre("Álvaro", listaNombres);
console.log("Resultado de añadir Álvaro:", resultado1); 
// Fíjate como Álvaro se colocará correctamente después de Ana y antes de Beatriz

console.log("\n");

// Prueba 2: Intentamos añadir un nombre que YA EXISTE ("Carlos")
const resultado2 = verificarNombre("Carlos", listaNombres);
console.log("Resultado de añadir Carlos repetido:", resultado2); 
// Debería devolver -1