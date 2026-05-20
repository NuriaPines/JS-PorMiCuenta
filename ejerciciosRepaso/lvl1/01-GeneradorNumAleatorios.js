//Tienes que crear una función llamada generarAleatorio(min, max) que reciba 
// dos números y devuelva un número aleatorio entero entre ellos (incluyéndolos).

let max = 10
let min = 1

function generarAleatorio(min, max) {
    let numAleatorio = Math.floor(Math.random() * (max - min + 1)) + min
    return numAleatorio
}

console.log(generarAleatorio(min, max))