// OPERADOR DE PROPAGACIÓN (...) 
// Sirve para expandir elementos de un array u objeto.

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

// 1. Unir arrays fácilmente (sin usar métodos raros)
let arrayUnido = [...array1, ...array2]; 
console.log(arrayUnido); // [1, 2, 3, 4, 5, 6]

// 2. Clonar objetos (Vital para no modificar el original por error)
let jugadorOriginal = { nombre: "Nuria", puntos: 10 };

// Si hacemos let jugador2 = jugadorOriginal; ¡están conectados! Si cambias uno, cambia el otro.
// La forma correcta de hacer un clon independiente es con propagación:
let jugadorClonado = { ...jugadorOriginal, puntos: 20 }; // Copia todo y sobrescribe los puntos

console.log(jugadorOriginal); // { nombre: 'Nuria', puntos: 10 }
console.log(jugadorClonado);  // { nombre: 'Nuria', puntos: 20 }