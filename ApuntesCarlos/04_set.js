//ESTRUCTURA SET
let miSetInicial = new Set(["manzana", 23, true, {nombre: "Luis", edad: 28}]);
console.log(miSetInicial);


let miSet = new Set();

miSet.add(1);
miSet.add(5);
miSet.add("Hola");
miSet.add({nombre: "Ana", edad: 25});
miSet.add(1); //no se añade, ya existe (gran diferencia con array)

console.log(miSet);
console.log("Tamaño del set: " + miSet.size);
console.log("¿Contiene 'Hola'? " + miSet.has("Hola"));


miSet.delete(5);    //hay que pasarle el valor a eliminar y devuelve true o false
console.log(miSet);


let miSetArray = Array.from(miSet); //convierte a array
console.log(miSetArray);


//recorrer set
console.log("Recorriendo el set:");
miSet.forEach(valor => {
    console.log(valor);
});


miSet.clear(); //elimina todo

miSet = new Set(miSetArray); //vuelve a crear el set con los valores del array
console.log(miSet);