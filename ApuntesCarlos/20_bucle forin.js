//for...in (objetos)
let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020
};
for (let clave in coche) 
{
    console.log(`${clave}: ${coche[clave]}`);
}