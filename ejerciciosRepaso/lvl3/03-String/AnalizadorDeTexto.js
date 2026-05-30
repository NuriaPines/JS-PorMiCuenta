/*
Crea una función analizarTexto(texto) que reciba una frase y devuelva un objeto con dos datos:

    Total de palabras: Cuántas palabras tiene la frase. (Pista: Convierte el texto en un array 
    de palabras separando por los espacios en blanco texto.split(" ") y luego mira su .length).

    Promedio de longitud: La media de letras que tienen las palabras de esa frase. (Pista: 
    Puedes usar un .reduce() sobre el array de palabras para sumar el .length de cada una, y 
    luego dividir esa suma entre el total de palabras).
*/
// Reto: Analizador de Textos
let frasePrueba = "El veloz murcielago hindu comia feliz cardillo y kiwi";

function analizarTexto(texto) {
    let palabras = texto.split(' ')
    let totalPalabras = palabras.length

    let promedioLongitud = palabras.reduce((acc,palabra) => {
        acc += palabra.length
        return acc
    }, 0)

    promedioLongitud = promedioLongitud/totalPalabras;

    return {"Total Palabras": totalPalabras, "Promedio de longitud": promedioLongitud}
}

console.log(analizarTexto(frasePrueba));