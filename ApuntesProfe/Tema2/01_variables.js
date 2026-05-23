//variables
let edadAlumno = 25;
const pi = 3.14;
var nombreUsuario = "Ana"; //Se recomienda no usar var

//symbol
let simbolo = Symbol("mi_simbolo"); //valor único e inmutable


let num1 = 5;
console.log( num1 == 5 );
console.log( num1 == "5");   //compara solo valor
console.log( num1 === "5");  //compara valor y tipo de dato

console.log( typeof(num1) );  //muestra el tipo de dato

//ambito de las variables
if (true) 
{
    let edad = 30; //variable local al bloque
    console.log(edad); //30
    var edadGlobal = 40;
}

console.log(edad); //error, no existe la variable
console.log(edadGlobal); //var no tiene ambito de bloque

//variables globales
let ciudad = "Madrid"; //variable global

function mostrarCiudad() 
{
    console.log(ciudad); //accede a la variable global
}
mostrarCiudad(); //Madrid

