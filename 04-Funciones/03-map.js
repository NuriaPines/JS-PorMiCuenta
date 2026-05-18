// La fábrica de transformación
// Al igual que filter, recorre todo el array y te devuelve uno nuevo. 
// La diferencia es que map no elimina elementos, sino que los transforma.
// Si le pasas un array de 5 elementos, te devolverá otro array de 5 elementos, 
// pero a cada uno de ellos le habrá aplicado la operación que tú le digas.

let preciosSinIva = [10, 20, 30];

//Vamos a aplicar el iva a cada precio
let preciosConIva = preciosSinIva.map(precio => precio * 1.21)

//console.log(preciosConIva)


// EJERCICIO: Usa el método .map() para crear un nuevo array llamado 
// nombresJugadores que solo contenga los nombres 
// (es decir, que el resultado sea ["Nuria", "Carlos", "Ana"]).
let jugadores = [
    { nombre: "Nuria", puntos: 15 },
    { nombre: "Carlos", puntos: 20 },
    { nombre: "Ana", puntos: 10 }
];

let nombresJugadores = jugadores.map(jugador => jugador.nombre)
console.log(nombresJugadores)