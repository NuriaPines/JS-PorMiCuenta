// ESTRUCTURA DE DATOS: Map (El Diccionario Estricto)
// ¡OJO! No confundir con el método array.map(). 
// Esto es una estructura para guardar datos en pares de CLAVE => VALOR.

// 1. Crear un Map vacío
let puntuaciones = new Map();

// 2. .set(clave, valor) -> Añade o actualiza un elemento
puntuaciones.set("Nuria", 150);
puntuaciones.set("Carlos", 120);
puntuaciones.set(1, "Jugador Invitado"); // ¡Mira! Usamos un número (1) como clave, en un objeto normal esto sería el texto "1".

console.log(puntuaciones);

// 3. .get(clave) -> Recupera el valor asociado a esa clave
console.log("Puntos de Nuria:", puntuaciones.get("Nuria")); // Devuelve 150

// 4. .has(clave) -> Comprueba si una clave existe (devuelve true o false)
console.log("¿Está Carlos en el ranking?", puntuaciones.has("Carlos")); // Devuelve true

// 5. .size -> Te dice cuántos pares de datos hay guardados
console.log("Total de jugadores en el ranking:", puntuaciones.size); // Devuelve 3

// 6. .delete(clave) -> Borra un elemento concreto
puntuaciones.delete(1); // Borramos al Jugador Invitado

// 7. .clear() -> Vacía el Map por completo (igual que en los Sets)
puntuaciones.clear();
console.log("Ranking después de limpiar:", puntuaciones.size); // Devuelve 0