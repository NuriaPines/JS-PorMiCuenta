//ES6+ características avanzadas
//desestructuración: crear vaariables a partir de propiedades de objetos o elementos de arrays y asignarles valores
let persona2 = {
    nombre: "Miguel",
    edad: 35,
    ciudad: "Valencia"
};

let { nombre, edad, ciudad } = persona2;  //llaves
console.log(`Nombre: ${nombre}, Edad: ${edad}, Ciudad: ${ciudad}`);

//si quiero usar otros nombres para las variables
let { nombre: nombrePersona, edad: edadPersona, ciudad: ciudadPersona } = persona2;  //llaves
console.log(`Nombre: ${nombrePersona}, Edad: ${edadPersona}, Ciudad: ${ciudadPersona}`);


let colores2 = ["amarillo", "morado", "naranja"]; 
let [color1, color2, color3] = colores2; //corchetes
console.log(`Colores: ${color1}, ${color2}, ${color3}`);
