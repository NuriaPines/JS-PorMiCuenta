//Operadores aritméticos
let suma = 5 + 3; //8

let resta = 10 - 4; //6

let multiplicacion = 6 * 7; //42

let division = 20 / 5; //4

let modulo = 10 % 3; //1 (resto de la división)

let exponente = 2 ** 3; //8 (2 elevado a la 3)



//Operadores de comparación
let igualdad = 5;

console.log( igualdad == "5" );  //true, compara solo valor

console.log( igualdad === "5");  //false, compara valor y tipo de dato

console.log( igualdad != 3 );    //true, compara solo valor

console.log( igualdad !== "5");  //true, compara valor y tipo de dato

console.log( igualdad > 3 );     //true

console.log( igualdad < 10 );    //true

console.log( igualdad >= 5 );    //true

console.log( igualdad <= 4 );    //false



//Operadores lógicos
let a = true;
let b = false;

console.log( a && b ); //false, AND

console.log( a || b ); //true, OR

console.log( !a );     //false, NOT

 
console.log( (5 > 3) && (2 < 4) ); //true

console.log( (5 > 3) || (2 > 4) ); //true

console.log( !(5 > 3) ); //false




//Operadores de asignación
let x = 10;

x += 5; //x = x + 5, ahora x es 15

x -= 3; //x = x - 3, ahora x es 12

x *= 2; //x = x * 2, ahora x es 24

x /= 4; //x = x / 4, ahora x es 6

x %= 4; //x = x % 4, ahora x es 2

x **= 3; //x = x ** 3, ahora x es 8


//Operadores de incremento y decremento
let contador = 1;

contador++; //incremento en 1, ahora contador es 2

contador--; //decremento en 1, ahora contador es 1



//Operador de cadenación
let saludo = "Hola, " + "mundo!"; //concatena cadenas

console.log(saludo); //Hola, mundo!


let nombre = "Ana";

let saludoNombre = saludo + " Soy " + nombre + ".";

console.log(saludoNombre); //Hola, mundo! Soy Ana.



//operador ternario (condicional)
let edad = 20;

let esMayor = (edad >= 18) ? "Es mayor de edad" : "Es menor de edad";

console.log(esMayor); //Es mayor de edad



//Operador typeof
console.log( typeof 42 );           //number

console.log( typeof "Hola" );       //string



//instanceof (comprobar si un objeto es instancia de una clase)
class Persona {}
let persona = new Persona();

console.log( persona instanceof Persona ); //true

console.log( persona instanceof Object );  //true, todas las clases heredan de Object



