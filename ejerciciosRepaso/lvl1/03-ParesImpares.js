/*
El Reto

Tienes que crear una función clasificarNumeros(lista) que reciba un array de números (por ejemplo: [1, 2, 3, 4, 5]) y muestre por consola:
    Cuántos son pares.
    Cuántos son impares.
*/

function clasificarNumeros(array) {
    let pares = 0
    let impares = 0
    array.forEach(num => {
        if (num % 2 === 0) {
            pares++
        } else {
            impares++
        }
    });

    console.log(`Pares: ${pares} | Impares: ${impares}`)
}


clasificarNumeros([1,4,3,8,4,2,4,7])