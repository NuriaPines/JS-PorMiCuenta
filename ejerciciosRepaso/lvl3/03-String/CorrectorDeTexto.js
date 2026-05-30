/*
Crea una función corregirTexto(texto) que reciba un texto sucio y mal formateado, y lo deje perfecto.

Las 4 Reglas de Limpieza:

    Fuera espacios en los bordes: Quita todos los espacios en blanco que haya al principio y al final 
    de la frase. (Pista: El método .trim() hace magia aquí).

    Fuera espacios duplicados: Si alguien escribe "hola     mundo", debe quedarse en "hola mundo".

        💡 Truco ninja usando Arrays: Si haces un .split(" ") de un texto con muchos espacios, se te 
        crearán "palabras vacías" (strings vacíos ""). Pásale un .filter(p => p !== "") para borrar 
        esos huecos, y luego vuelve a pegar el array convirtiéndolo en un string con .join(" ").

    La primera en Mayúscula: Convierte la primera letra de la primera palabra a mayúsculas. (Pista: 
    Puedes aislar la primera letra con texto.charAt(0).toUpperCase(), y sumarle el resto de la frase 
    cortándola con texto.slice(1)).

    El Punto Final: Si la frase NO termina en un punto ., se lo añades. (Pista: Puedes comprobarlo 
    usando texto.endsWith(".")).
*/
// Reto: Corrector de Textos
let textoSucio = "    hola    esto es   una frase   muy   desordenada ";

function corregirTexto(texto) {
    let textoSucio = texto.trim()
    let palabras = textoSucio.split(" ")
    palabras = palabras.filter(palabra => palabra !== "") //Quitamos espacios
    let textoLimpio = palabras.join(" ")
   
    textoLimpio = textoLimpio.charAt(0).toUpperCase() + textoLimpio.slice(1) // PRimera mayus

    if (!textoLimpio.endsWith(".")){
        textoLimpio = textoLimpio + "."
    }
    return textoLimpio
}

console.log(corregirTexto(textoSucio)); 
// El resultado brillante debería ser: "Hola esto es una frase muy desordenada."