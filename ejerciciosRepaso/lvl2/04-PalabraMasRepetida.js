"use strict"
/*
El Reto

Tienes que crear una función llamada palabraMasRepetida(texto) que:
    Reciba una cadena de texto (una frase larga con palabras repetidas).
    Devuelva cuál es la palabra que más veces aparece y cuántas veces se repite.
*/

let texto = "Hola que tal estás, me llamo Nuria.                                                              ¿Tú que tal estás?. Te escribo para decirte que me gusta como trabajas, Tenemos una reunión para que vendamos algo."

function palabraMasRepetida(texto) {
    let textoLimpio = texto.toLocaleLowerCase().replaceAll('á', 'a').replaceAll('é','e').replaceAll('í','i').replaceAll('ó','o').replaceAll('ú','u')
    textoLimpio = textoLimpio.replaceAll('?','').replaceAll('¿','').replaceAll('.','').replaceAll(':','').replaceAll(';','').replaceAll(',','').replaceAll('¡','').replaceAll('!','').replaceAll('(','').replaceAll(')','').replaceAll('"','').replaceAll("'",'')
    let repetidas = new Map()
    let palabras = textoLimpio.split(" ");
    

    palabras.forEach(palabra => {
        if (palabra.trim() === "") return; // Si la palabra está vacía (un espacio suelto), nos la saltamos
        if (repetidas.has(palabra)) {
            repetidas.set(palabra, repetidas.get(palabra) + 1)
        } else {
            repetidas.set(palabra, 1)
        }
    });

    let max = 0
    let min = 0
    let palabraMax = ''
    let vecesMax = 0


    repetidas.forEach((veces, palabra) => {
        if (veces > max) {
            max = veces
            palabraMax = palabra
            vecesMax = veces
        }
    });

    console.log(`Palabra que más aparece: ${palabraMax} | Se repite: ${vecesMax}`)
}

palabraMasRepetida(texto)