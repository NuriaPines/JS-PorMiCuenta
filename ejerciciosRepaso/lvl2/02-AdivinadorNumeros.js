/*
Ejercicio 5: Adivinador de números.
El Reto
Tienes que crear una función jugarAdivinador(numeroSecreto) que:
    Reciba un número (el número que hay que adivinar, entre 1 y 100).
    Genere números aleatorios (usando tu función generarAleatorio anterior) hasta que acierte el número secreto.
    Devuelva (o muestre por consola) cuántos intentos le ha costado acertarlo.
*/

function generarAleatorio(min, max) {
    let numAleatorio = Math.floor(Math.random() * (max - min + 1)) + min
    return numAleatorio
}

function jugarAdivinador(numeroSecreto) {
    let numeroMaquina = -1
    let contadorIntentos = 0
    while (numeroMaquina !== numeroSecreto) {
        numeroMaquina = generarAleatorio(1,10);
        console.log(numeroMaquina)
        contadorIntentos++
    }

    console.log('Intentos:' , contadorIntentos)
}

jugarAdivinador(3)