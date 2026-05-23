console.log("Hola mundo")
console.log("5")
console.log(5)

let Tabla = [["Carlos", 20], ["Ana", 22], ["Luis", 19]];
console.table(Tabla);   //muestra en formato tabla

let Tabla2 = [{nombre: "Carlos", edad: 20}, {nombre: "Ana", edad: 22}, {nombre: "Luis", edad: 19}];
console.table(Tabla2);   //muestra en formato tabla con nombres de propiedades

console.group("Grupo de mensajes"); //agrupa mensajes en consola
console.log("Mensaje 1");
console.log("Mensaje 2");
console.log("Mensaje 3");
console.groupEnd();

console.log("\n");

console.group("Usuarios y edades");
console.log(Tabla[0]);
console.log(Tabla[1]);
console.log(Tabla[2]);
console.groupEnd();

//medir tiempo de ejecución
console.time("Tiempo de ejecución");

for (let i = 0; i < 1000000; i++)
{
    //bucle para medir tiempo de ejecución
}

console.timeEnd("Tiempo de ejecución"); //muestra el tiempo que ha tardado en ejecutarse el bucle

//el texto crea como un identificador para medir el tiempo
//puede usarse varias veces con diferentes textos
//haciendo mediciones en paralelo en el mismo script


//assert (comprobar que una condición es verdadera)
let menorEdad = 17;
console.assert(menorEdad >= 18, "El usuario es menor de edad"); //muestra el mensaje si la condición es falsa


//para contabilizar
console.count("Contador");
console.count("Contador");
console.count("Contador");

console.countReset("Contador"); //resetea el contador
console.count("Contador");


console.clear(); //limpia la consola