// EL OBJETO CONSOLE: Más allá del simple console.log

// 1. console.table(): Ideal para ver arrays de objetos (Perfecto para tu Ejercicio 1 y 2)
let jugadores = [
    { nombre: "Nuria", puntos: 15 },
    { nombre: "Carlos", puntos: 20 },
    { nombre: "Ana", puntos: 10 }
];
console.log("--- console.table ---");
console.table(jugadores); // Pruébalo, te dibujará una tabla perfecta en la terminal

// 2. console.group(): Para organizar los mensajes en "carpetas"
console.group("Resultados de la Ronda 1");
console.log("Nuria saca un 7");
console.log("Carlos saca un 12");
console.groupEnd(); // Cierra el grupo

// 3. console.time(): Para medir cuánto tarda un código en ejecutarse
console.time("TiempoDelBucle");
for(let i = 0; i < 100000; i++) {
    // Simulamos un proceso largo
}
console.timeEnd("TiempoDelBucle"); // Te dirá los milisegundos exactos que ha tardado

// 4. console.assert(): Solo salta el error si la condición es FALSA
let edadJugador = 16;
// Como 16 no es mayor o igual a 18, saltará el mensaje de error rojo en consola
console.assert(edadJugador >= 18, "Cuidado: El jugador es menor de edad");