//arrays - pueden contener cualquier tipo de dato y mezclarse
let frutas = ["manzana", "plátano", "naranja"];
console.log(frutas);
console.log("Primera fruta: " + frutas[0]);
console.log("Número de frutas: " + frutas.length);


frutas.push("uva"); //añade al final
console.log("Frutas después de añadir uva: " + frutas);


frutas.pop(); //devuelve y elimina el último elemento
console.log("Frutas después de eliminar la última fruta: " + frutas);


frutas.push(2);
frutas.push(true);


frutas.forEach((fruta, index) => {
    console.log(`Fruta ${index + 1}: ${fruta}`);
});


console.log(frutas.shift()); //elimina y devuelve el primer elemento
console.log("Frutas después de eliminar la primera fruta: " + frutas);


frutas.unshift("fresa", "limon");  //añade al inicio
console.log("Frutas después de añadir fresa y limón al inicio: " + frutas);


let pedazo = frutas.slice(1, 3); //copia parte del array (no incluye el índice final)
console.log("Pedazo de frutas (índices 1 a 2): " + pedazo);


frutas.splice(1,3); //elimina desde el índice 1, 3 elementos
console.log("Frutas después de splice(1,3): " + frutas);
frutas.splice(1,2,"kiwi","mango"); //desde el índice 1, elimina 0 elementos y añade kiwi y mango
console.log("Frutas después de splice(1,2,'kiwi','mango'): " + frutas);
