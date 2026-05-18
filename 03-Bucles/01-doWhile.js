// Siempre se ejecuta la primera vez, pregunte lo que pregunte la condición.
// BUCLE DO...WHILE: Dispara primero, pregunta después
// El código dentro del "do" se ejecutará al menos una vez, aunque la condición del "while" sea falsa.

let tiradas = 0;
let seguirJugando = false; 

console.log("--- Inicio del juego ---");

do {
    tiradas++;
    console.log(`Has tirado los dados. Tirada número: ${tiradas}`);
    
    // Aunque seguirJugando es false, esta línea se imprime porque entra directo al "do"
} while (seguirJugando === true);

console.log(`Total de tiradas realizadas: ${tiradas}`); 
// Resultado: Habrá tirado 1 vez. Si fuera un "while" normal, habría tirado 0 veces.