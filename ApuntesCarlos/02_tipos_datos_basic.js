//tipos de datos primitivos

let numeroReal = 42; //number
let numeroDecimal = 3.14; //number

let texto = "Hola, mundo"; //string

let booleano = true; //boolean

let nulo = null; //null

let indefinido; //undefined
let noDefinido = undefined; //undefined

let bigInt = 9007199254740991n; //bigint
let numeroGrandeINT = BigInt(9007199254741991); //bigint

console.log("Número grande 1: " + numeroGrandeINT);
console.log("Número grande 2: " + bigInt);
console.log("Suma de números grandes: " + (numeroGrandeINT + bigInt));
console.log("Tipo de dato de numeroGrande: " + typeof numeroGrandeINT);


//strings
let miNombre = "Carlos";

let saludo = " Hola, " + miNombre + "! ";
console.log(saludo);

console.log(saludo.length); //longitud
console.log(saludo.trim()); //elimina espacios
console.log(saludo.toUpperCase()); //mayúsculas
console.log(saludo.toLowerCase()); //minúsculas
console.log(saludo.includes("Carlos")); //true
console.log(saludo.replace("Carlos", "Ana")); //reemplaza
console.log(saludo.split(" ")); //divide en array
console.log(saludo.concat(" ¿Cómo estás?")); //concatena
console.log(saludo.startsWith(" Hola")); //true si empieza con
console.log(saludo.endsWith("! ")); //true si termina con
console.log(saludo.search("Carlos")); //posición de la primera aparición
console.log(saludo.indexOf("Carlos")); //posición de la primera aparición

//Y MUCHAS MÁS...

console.log(saludo[5]); //carácter en posición 5

console.log( `Hey!!${saludo} puedes comprobar el nombre del equipo: ${miNombre}`); //template strings





