//ESTRUCTURA MAP (DICCIONARIO)
let miMapaInicial = new Map([["nombre", "Pedro"], ["edad", 29], [true, "verdadero"]]);
console.log(miMapaInicial);


let miMapa = new Map();
miMapa.set("nombre", "Laura");
miMapa.set("edad", 32);
miMapa.set(1, "uno");
miMapa.set(true, "verdadero");

console.log(miMapa);


console.log("Tamaño del mapa: " + miMapa.size);
console.log("Valor de 'nombre': " + miMapa.get("nombre"));
console.log("¿Contiene la clave 1? " + miMapa.has(1));


miMapa.delete(1); //hay que pasarle la clave a eliminar y devuelve true o false
console.log(miMapa);


console.log(miMapa.keys()); //claves
console.log(miMapa.values()); //valores
console.log(miMapa.entries()); //pares [clave, valor]


//recorrer map
console.log("Recorriendo el mapa:");
miMapa.forEach((valor, clave) => {
    console.log(`Clave: ${clave}, Valor: ${valor}`);
});


miMapa.clear(); //elimina todo
console.log(miMapa);