let texto = "aaabccdddde"

function comprimir(texto) {
    let letras = texto.split("")
    let contadorLetra = 0
    let comprimido = ""
    let primeraLetra = letras[0]
    for (let letra = 0; letra <= letras.length; letra++) {
        if (primeraLetra === letras[letra]) {
            contadorLetra++
        } else if (primeraLetra !== letra) {
            comprimido+= primeraLetra + contadorLetra
            contadorLetra = 1
            primeraLetra = letras[letra]
        }
    }

    return comprimido
}

function descomprimir(texto) {
    let letraNum = texto.split("")
    let descomprimir = ""
    for (let i = 0; i < letraNum.length; i++) {
        descomprimir += letraNum[i].repeat(letraNum[i + 1])
    }

    return descomprimir
}

function comprimirOptimo(texto) {
    let letras = texto.split("")
    let comprimido = letras.reduce((acc,letra) =>{
        if (acc[letra]) {
            acc[letra] = acc[letra] + 1     
        } else {
            acc[letra] = 1
        }

        return acc
    },[])

    let comprimidoTexto = ""
    for (const letra in comprimido) {
        comprimidoTexto += letra + comprimido[letra]

    }


    return comprimidoTexto
}

//console.log(comprimir(texto))
console.log(descomprimir("a3b1c2d4e1"))
//console.log(comprimirOptimo(texto))