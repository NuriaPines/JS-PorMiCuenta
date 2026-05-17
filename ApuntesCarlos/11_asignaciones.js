let edad = 25;

console.log( "Edad: " + edad );

edad = 30; //reasignación de variable
console.log( "Edad después de reasignar: " + edad );

let contador = 1;

contador += 2; //incremento en 2
console.log( "Contador después de +=2: " + contador );

contador ++; //incremento en 1
console.log( "Contador después de ++: " + contador );


function saludar(nombre = "Usuario") //valor por defecto
{
    console.log( `Hola, ${nombre}` );
}

saludar("Ana");
saludar(); //usa el valor por defecto

