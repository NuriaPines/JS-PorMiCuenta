"use strict"
/*A veces recibes un número pero JavaScript cree que es un texto 
(como cuando lees un input de un formulario). Si intentas sumar "5" + "5" te dará "55". 
Para evitarlo, usamos los conversores. 

Herramientas clave para tus apuntes:

    parseInt(variable): Intenta convertir un texto a un número entero.

    parseFloat(variable): Lo mismo, pero mantiene los decimales.

    Number(variable): Una forma genérica de convertir a número (si no puede, te dará NaN, que significa Not a Number).

    variable.toString(): Convierte cualquier cosa a una cadena de texto.
*/

//NUMERO ALEATORIO
// 1. Math.random() * 6 -> Nos da un decimal entre 0 y 5.999...
// 2. Math.floor() -> Redondea hacia abajo quitando los decimales (nos deja entre 0 y 5)
// 3. + 1 -> Desplaza todo un número hacia arriba (nos deja entre 1 y 6)

let numAleatorio = Math.floor(Math.random() * 6) + 1;

console.log(numAleatorio);