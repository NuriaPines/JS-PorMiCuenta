// Reto 1: Filtro
// Crea una variable llamada palabrasLargas y usa el método .filter() 
// para extraer y guardar solo las palabras que tengan estrictamente más de 6 letras.

let palabras = ["coche", "murcielago", "sol", "ordenador", "luz"];
let palabrasLargas = palabras.filter(palabra => palabra.length > 6 )
console.log(palabrasLargas)

// Reto 2: El transformador
//Crea una variable llamada mayoresDeEdad y usa el método .map() 
// para transformar esa lista de números en una lista de booleanos (true o false).
let edades = [15, 22, 17, 30, 12];
let mayoresDeEdad = edades.map(edad => edad >= 18)
console.log(mayoresDeEdad)
