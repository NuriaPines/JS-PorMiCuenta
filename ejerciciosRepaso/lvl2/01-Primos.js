/*
Ejercicio 2: Verificador de números primos.
El Reto

Tienes que crear una función esPrimo(numero) que:
    Reciba un número entero.
    Devuelva true si es primo.
    Devuelva false si no lo es.
*/


function esPrimo(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }

    return true
    
}

console.log(esPrimo(8))