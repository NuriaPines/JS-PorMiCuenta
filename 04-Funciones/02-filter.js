// El portero de discoteca
/*
Es un método que aplicas a un array. 
Lo que hace es recorrer el array elemento por elemento 
y le hace una "prueba" (una condición que tú le pones). 
Si el elemento pasa la prueba (true), entra en el nuevo array. 
Si no la pasa (false), se queda fuera.

IMPORTANTE: Nunca modifica el array original, siempre te devuelve uno nuevo
*/

let numeros = [1, 5, 10, 15, 20]

//Vamos a filtrar solo los mayores de 10
let mayoresDeDiez = numeros.filter(numero => numero > 10)

//console.log(mayoresDeDiez)

let numeros2 = [10, 2, 5, 8, 15];

// Queremos filtrar solo los números pares
let pares = numeros2.filter(num => num % 2 === 0); 
// (num % 2 === 0) devuelve true si es par y false si no

//console.log(pares); // [10, 2, 8]

//EJERCICIO: Imagina que después de una ronda, tienes este array con los resultados de todos los jugadores:
// let resultadosRonda = [5, 7, 10, 2, 11, 12, 6, 3, 7];
// Escribir el código usando filter para crear un nuevo array llamado tiradasEspeciales.
// este array debe contener solo los números de resultadosRonda que sean exactamente el 7, el 2, el 3 o el 12

let resultadosRonda = [5, 7, 10, 2, 11, 12, 6, 3, 7];
let tiradasEspeciales = resultadosRonda.filter(num => num === 7 || num === 2 || num === 3 || num === 12)
console.log(tiradasEspeciales)

//EJERCICIO: Imagina que tienes una lista de años y quieres filtrar solo los que 
// sean posteriores al año 2000 Y que además sean pares.
// Usa .filter() para crear un array con los años que cumplan esas dos condiciones a la vez.

let años = [1995, 2005, 2010, 1998, 2024, 2001];

let añosValidos = años.filter(anio => anio > 2000 && anio % 2 === 0)
console.log(añosValidos)