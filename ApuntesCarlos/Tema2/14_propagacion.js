//ES6+ características avanzadas
//spread operator (Propagación)
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let arrayCombinado = [...array1, ...array2];
console.log("Array combinado: " + arrayCombinado);


let objeto1 = { a: 1, b: 2 };
let objeto2 = { c: 3, d: 4 };
let objetoCombinado = { ...objeto1, ...objeto2 };
console.log("Objeto combinado:", objetoCombinado);