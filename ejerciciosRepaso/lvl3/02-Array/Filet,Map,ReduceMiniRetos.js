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

// Reto 3: Portero de discoteca
//Crear una función verificarNombre(nombre, lista) 
// que reciba un nombre (texto) y un array de nombres.
//Si el nombre ya está en la lista: La función debe devolver -1.  
//Si el nombre no está: Lo añade a la lista, ordena toda la lista alfabéticamente y devuelve el array actualizado.

let invitados = ["Elena", "Pedro", "Ana", "Miguel"];

function verificarNombre(nombre, lista) {
    /*
    for (const nombreLista of lista) {
        if (nombreLista === nombre) {
            return -1
        }
    }
    */
    if (lista.includes(nombre)) {
        return -1;
    }

    lista.push(nombre)
    lista.sort()

    return lista
}

console.log(verificarNombre("Pedro", invitados)); // Debería dar -1
console.log(verificarNombre("Zoe", invitados)); // Debería añadir a Zoe, ordenar y devolver la lista
