let hola = "HOLA";

console.log( hola + ", tipo: " + typeof(hola) );


let cambio = parseInt(hola); //intenta convertir a número entero

console.log( cambio + ", tipo: " + typeof(cambio) );


parseFloat(hola); //intenta convertir a número decimal

console.log( cambio + ", tipo: " + typeof(cambio) );


parseNumber(hola); //intenta convertir a número (entero o decimal)

console.log( cambio + ", tipo: " + typeof(cambio) );


let cadenaDeNuevo = cambio.toString(); //convierte a cadena

console.log( cadenaDeNuevo + ", tipo: " + typeof(cadenaDeNuevo) );  


let fecha = new Date();
console.log( fecha + ", tipo: " + typeof(fecha) );

console.log(fecha.toUTCString()); //convierte a cadena en formato UTC
console.log(fecha.toDateString()); //convierte a cadena en formato fecha
console.log(fecha.toISOString()); //convierte a cadena en formato ISO
console.log(fecha.toLocaleDateString()); //convierte a cadena en formato local  
