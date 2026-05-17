//objetos
const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};

console.log(persona);


console.log("Nombre: " + persona.nombre);   //acceder a propiedades
console.log("Edad: " + persona["edad"]);    //otra forma de acceder a propiedades
console.log("Ciudad: " + persona.ciudad);


console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}, Ciudad: ${persona.ciudad}`);


//acceder a propiedades mediante variables
const campo = "ciudad";
console.log(persona[campo]);


//quitar propiedad
delete persona.ciudad;
console.log("Después de eliminar ciudad:", persona);


//añadir propiedad
persona.profesion = "Desarrollador";
console.log("Después de añadir profesión:", persona);

persona["pais"] = "España";
console.log("Después de añadir país:", persona);