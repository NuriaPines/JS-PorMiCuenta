// BREAK Y CONTINUE: Controlando el tráfico dentro de los bucles
// break: Destruye el bucle y sale de él.
// continue: Salta la vuelta actual y pasa a la siguiente.

console.log("--- Búsqueda de jugador ---");

// Vamos a contar del 1 al 10, pero con reglas especiales:
for (let i = 1; i <= 10; i++) {
    
    // REGLA 1: Si es el 5, lo saltamos.
    if (i === 5) {
        console.log("El jugador 5 está sancionado, lo saltamos.");
        continue; // Corta esta vuelta aquí mismo, NO llega al console.log de abajo
    }

    // REGLA 2: Si es el 8, paramos el bucle por completo.
    if (i === 8) {
        console.log("¡Jugador 8 encontrado! Paramos la búsqueda.");
        break; // Destruye el bucle por completo. El 9 y el 10 nunca existirán
    }

    // Si no es ni el 5 ni el 8, el código llega hasta aquí con normalidad
    console.log("Revisando jugador número: " + i);
}

console.log("Fin del bucle.");