let texto = "Hola que tal estas"

function textoASCII(texto) {
    let letras = texto.trim().split("")
    let letrasASCII = []
    letras.forEach((letra, indice) => {
        letrasASCII.push(texto.charCodeAt(indice))
    });
    return letrasASCII
}
function cifrar(clave, texto) {
    if (!validar(clave, texto)) {
        return console.log("ERROR CLAVE MENOR QUE 0 O MAYOR QUE 1000, O TEXTO MENOR DE 8 O MAYOR DE 32")
    }
    let letrasASCII = textoASCII(texto)
    console.log(letrasASCII)

    let letrascifradas = letrasASCII.map(letraASCII => letraASCII + clave)
    console.log(letrascifradas)

    let letras256 = letrascifradas.map(letraCifrada => letraCifrada % 256)
    console.log(letras256)

    let textoCifrado = ""
    letras256.forEach((letra, indice) => {
        textoCifrado += String.fromCharCode(letra)
    });
    console.log(`Texto Cifrado: ${textoCifrado}`)
    return textoCifrado
    
}
function descifrar(clave, textoCifrado) {
    if (!validar(clave, textoCifrado)) {
        return console.log("ERROR CLAVE MENOR QUE 0 O MAYOR QUE 1000, O TEXTO MENOR DE 8 O MAYOR DE 32")
    }
    let letrasASCII = textoASCII(textoCifrado)

    let letrasSinModulo256 = letrasASCII.map(letra => letra + 256)

    let letrasDescifradas = letrasSinModulo256.map(letraASCII => letraASCII - clave)

    let letrasSinNegativo = []
    for (let i = 0; i < letrasDescifradas.length; i++) {
        if (letrasDescifradas[i] < 0){
            letrasSinNegativo.push(letrasDescifradas[i] + 256)
        } else {
            letrasSinNegativo.push(letrasDescifradas[i])
        }
        
    }
    console.log(letrasSinNegativo)


    let textoDescifrado = ""
    letrasSinNegativo.forEach((letra, indice) => {
        textoDescifrado += String.fromCharCode(letra)
    });
    console.log(textoDescifrado)
    return textoDescifrado

}

function validar(clave, texto) {
    if (clave < 0 || clave > 1000) {
        return false
    } else if (texto.length < 8 || texto.length > 32) {
        return false
    }

    return true
}

console.log(`Texto original: ${texto}`)
let textoCifrado = cifrar(400, texto)
let textoDescifrado = descifrar(400, textoCifrado)