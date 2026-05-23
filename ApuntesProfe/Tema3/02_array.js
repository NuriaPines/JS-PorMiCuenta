let array = [12, true, "Hola"];

console.log(array);
console.table(array);

//TAMAÑO DE LA TABLA
let tamano = array.length;
console.log(`Tamaño de la array ${tamano}`);


//AÑADIR ELEMENTOS A LA TABLA
array.push("nuevo elemento");
array.push(123);
console.log(array);


//QUITAR ELEMENTOS DE LA TABLA
array.pop();            //QUITA EL ÚLTIMO ELEMENTO DE LA TABLA
console.log(array);

array.pop();
console.log(array);


//QUITAR Y DEVOLVER EL PRIMER ELEMENTO DE LA TABLA
let primerElemento = array.shift();
console.log("\nEl primer elemento: " + primerElemento + "\n");
console.table(array);


//AGREGAR 1 O MÁS ELEMENTOS AL PRINCIPIO DE LA TABLA
array.unshift("rojo", 143, false);
console.table(array);


//COMBINAR DOS O MÁS TABLAS
let tabla2 = [12, "texto"];
let tabla3 = ["adios", false, 432];

let combinacion = array.concat(tabla2, tabla3);     //array NO ES MODIFICADA

console.log("\n\n");
console.table(combinacion);


//CAMBIAR CONTENIDO DE UNA TABLA
combinacion.splice(7,3);        //ELIMINA 3 ELEMENTOS A PARTIR DE INDICE 7
console.log("\n\n");
console.table(combinacion);

combinacion.splice(5,2, "color", 43);   //ELIMINA 2 PERO AÑADE OTROS 2
console.log("\n\n");
console.table(combinacion);


//OBTENER UNA COPIA DE UNA PORCIÓN DE LA TABLA
let porcion = combinacion.slice(2,5);
console.table(porcion);


//OBTENER INDICE DE UN ELEMENTO (PRIMERA APARICIÓN)
let indice = combinacion.indexOf("Hola");
console.log("El indice de [Hola] es: " + indice);

let indice2 = combinacion.indexOf("Hola", 5);
console.log("A partir de indice 5 ya no hay [Hola] : " + indice2);


//OBTENER INDICE DE UN ELEMENTO (ÚLTIMA APARICIÓN)
combinacion.push("Hola");
indice = combinacion.lastIndexOf("Hola");
console.log("\nEl indice de [Hola] es: " + indice);

console.table(combinacion);


//CAMBIAR EL FORMATO DE LA TABLA A TEXTO
let formato = combinacion.join(",");
console.log("\n\n" + formato);



//DEVUELVE UN ARRAY CON LOS ELEMENTOS QUE CUMPLEN UNA CONDICIÓN
let son_numeros = combinacion.filter(function(elemento){
    return typeof elemento === "number";
});

console.table(son_numeros);


//RECORRER UNA TABLA
for(let i=0; i < combinacion.length; i++)
{
    console.log("Indice " + i + " : " + combinacion[i]);
}

console.log("\n");

let index = 0;
for( elemento of combinacion)
{
    console.log("Indice " + (index++) + " : " + elemento);
}

console.log("\n");

combinacion.forEach(function(elemento,indice){
    console.log("Indice " + indice + " : " + elemento);
});

console.log("\n");


//MAP
let numeros = [1,2,3,4,5];
let numeroX2 = numeros.map(function(elemento){  //DEVUELVE ARRAY
    return elemento * 2;    //APLICA ESTA OPERACIÓN A CADA ELEMENTO
});

console.table(numeroX2);


numeros.map((valor,indice)=>{console.log("Indice " + indice + " : " + valor);});

console.log("\n");


//REDUCE
let suma = numeros.reduce(function(acumulador, elemento){
    return acumulador + elemento;
}, 0);

console.log("Sumatorio total = " + suma);


//EJEMPLO
let estudiantes = [
    {
        nombre: "Ana",
        calificaciones: [85, 90, 92, 88, 78],
    },
    {
        nombre: "Juan",
        calificaciones: [70,82,95,88,76],
    },
    {
        nombre: "Mara",
        calificaciones: [88, 92, 78, 90, 85],
    },
];

console.log(estudiantes);

console.log("\n");

let promediosIndividuales = estudiantes.map((estudiante) =>{
    let suma = estudiante.calificaciones.reduce((acum,nota)=> acum + nota, 0);
    return {
        nombre: estudiante.nombre,
        promedio: suma / estudiante.calificaciones.length,
    };
});

console.log(promediosIndividuales);


console.log("\n");


let sumaPromedios = promediosIndividuales.reduce((acum, estudiante)=> acum + estudiante.promedio, 0);

let promedioGeneral = sumaPromedios / promediosIndividuales.length;

console.log("Promedio general del grupo: " + promedioGeneral);

