//funciones
const sumar = (a, b) => //no puede ser llamada antes de ser declarada
    {                   //puede usar la notación =>
        return a + b;
    }

console.log("La suma de 5 + 3 es: " + sumar(5, 3));

console.log("La resta de 5 + 3 es: " + restar(5, 3));



function restar (a, b)  //puede ser llamada antes de ser declarada
{                       //no puede usar la notación =>
        return a - b;
}


const miFuncion = (nombre) =>
{
    console.log(`Hola, ${nombre} !`);  //con comillas invertidas reconoce variables
}



//funciones avanzadas
//función flecha    
const multiplicar = (a, b) => a * b;
console.log("Multiplicación de 4 * 3: " + multiplicar(4, 3));



//función con valor por defecto
const potencia = (base, exponente = 2) => Math.pow(base, exponente);
console.log("5 al cuadrado: " + potencia(5));
console.log("2 al cubo: " + potencia(2, 3));