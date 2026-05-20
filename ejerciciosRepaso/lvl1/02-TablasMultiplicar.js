/*
Ejercicio 2: Generador de tablas de multiplicar

El reto es:
    Crear una función generarTabla(numero) que reciba un número.
    Debe imprimir por consola la tabla de multiplicar de ese número (del 1 al 10).

Un ejemplo de cómo debería verse la salida si llamas a generarTabla(5):
5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50
*/

function generarTabla(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`)
    }
}

generarTabla(5)