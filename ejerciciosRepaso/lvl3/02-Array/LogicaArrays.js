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