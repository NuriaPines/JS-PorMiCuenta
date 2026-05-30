//Verificar palabra: Una función que reciba una frase y una palabra, y devuelva true o false si 
// la contiene.
let texto = "Hola que tal estas me llamo Nuria"
function verificarPalabra(texto, palabra) {
    return texto.includes(palabra)
}
console.log(verificarPalabra(texto, "Nuria"))


//Invertir texto: Una función que reciba "Nuria" y devuelva "airuN".
function invertirTexto(texto) {
    let letras = texto.split("").reverse()
    let textoFinal = letras.join("")
    return textoFinal
    
}
console.log(invertirTexto("Nuria"))

//Palabra más larga: Una función que reciba una frase y devuelva cuál es la palabra con más letras.
function palabraMasLarga(texto) {
    let palabras = texto.split(" ")
    let palabraMasLarga = palabras.reduce((acc, palabra) =>{
        if (palabra.length > acc.length) {
            acc = palabra
        }
        return acc
    },"")
    return palabraMasLarga
}
console.log(palabraMasLarga(texto))

//Máscara de texto: Una función que reciba una tarjeta de crédito (ej: "1234567890123456") 
// y devuelva todo oculto con asteriscos menos los últimos 4 números (ej: "************3456").
let tarjetaCredito = "1234567890123456"
function mascaraTexto(tarjeta) {
    let ultimosDigitos = tarjeta.slice(-4)
    let tarjetaCredito = "*".repeat(tarjeta.length - 4) + ultimosDigitos
    return tarjetaCredito
}
console.log(mascaraTexto(tarjetaCredito))