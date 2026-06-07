let exp1 = "(3+4)*5" // TRUE
let exp2 = "12/(4-2)" // TRUE
let exp3 = "7.5 * (3+2.5)" //TRUE
let exp4 = "3++4" // FALSE
let exp5 = "(3+)" //FALSE
let exp6 = "()*4" //FALSE


function validarMates(exp) {
    let caracteresExp = exp.split("")
    let numOperadorMas = 0
    let numOperadorPor = 0
    let numOperadorMenos = 0
    let numOperadorDividir = 0



    //PARENTESIS COMPENSADOS EQUILIBRADOS
    let numParentesisAbiertos = 0
    let numParentesisCerrados = 0
    caracteresExp.forEach(caracter => {
        if (caracter === "(") {
            numParentesisAbiertos++
        } else if (caracter === ")"){
            numParentesisCerrados++
        }
    });

    if (numParentesisAbiertos !== numParentesisCerrados) return false

    //PARENTESIS SIN DOS NUMEROS DENTRO
    let numDentroParentesis = 0
    for (let i = exp.indexOf("(")+1; i < exp.indexOf(")")-1; i++) {
        let num = parseInt(caracteresExp[i])
        if (typeof(num) === "number") {
            numDentroParentesis++
        }
    }

    if (numDentroParentesis <= 1) return false

    //PARENTESIS VACIOS
    if (caracteresExp[exp.indexOf("(")+1] === ")") return false 

    // OPERADOR INICIO O FINAL
    if (caracteresExp[0] === "+" || caracteresExp[0] === "-" || caracteresExp[0] === "*" || caracteresExp[0] === "/") return false
    if (caracteresExp[caracteresExp.length] === "+" || caracteresExp[caracteresExp.length] === "-" || caracteresExp[caracteresExp.length] === "*" || caracteresExp[caracteresExp.length] === "/") return false
    // DOS OPERADORES REPETIDOS
    caracteresExp.forEach(caracter => {
        if (caracter === "+"){
            numOperadorMas++
        } else if (caracter === "-"){
            numOperadorMenos++
        } else if (caracter === "*"){
            numOperadorPor++
        } else if (caracter === "/"){
            numOperadorDividir++
        }
    });
    if (numOperadorMas > 1) return false
    if (numOperadorMenos > 1) return false
    if (numOperadorPor > 1) return false
    if (numOperadorDividir > 1) return false


    return true
}

console.log(validarMates(exp1))
console.log(validarMates(exp2))
console.log(validarMates(exp3))
console.log(validarMates(exp4))
console.log(validarMates(exp5))
console.log(validarMates(exp6))