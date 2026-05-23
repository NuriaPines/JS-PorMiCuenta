//DOS FORMAS DE DEFINIR UN OBJETO

let coche = {
    modelo:"Mercedes C320",
    color:"azul",
    kms:15000,
    combustible:"diésel"
};


let coche2 = new Object();
coche2.modelo = "Opel Astra GTC";
coche2.color = "blanco";
coche2.kms = 190000;
coche2.combustible = "gasolina";
coche2.extra = "otra cosa";

console.log(coche);
console.log(coche2);


//AÑADIR CAMPO UNA VEZ CREADO
coche.matricula = "1243-TYH"


//RECORRER UN OBJETO
for (campo in coche)
{
    console.log("Propiedad: " + campo);
    console.log("Valor: " + coche[campo] + "\n");
}


//FUNCIONES PROPIAS DE OBJECT

let array = Object.keys(coche);     //OBTENER CLAVES
console.table(array);


array = Object.values(coche);       //OBTENER VALORES
console.table(array);


let arrays_de_arrays = Object.entries(coche);   //OBTENER ENTRADAS
console.table(arrays_de_arrays);


//MANTIENE SUS PROPIEDADES EXCLUSIVAS
//SOBREESCRIBE LAS PROPIEDADES COMUNES
//AÑADE LAS PROPIEDADES NUEVAS
Object.assign(coche2,coche);        //ASIGNAR UN OBJETO A OTRO
console.log(coche2);


delete coche2.extra;                //BORRAR UNA PROPIEDAD
console.log(coche2);


Object.freeze(coche2);              //HACER INMUTABLE UN OBJETO

coche2.no_se_puede = "false";       //NO SE PUEDE AÑADIR
delete coche2.matricula;            //NO SE PUEDE BORRAR
coche2.modelo = "nuevo modelo";     //NO SE PUEDE MODIFICAR

console.log(coche2);


Object.seal(coche);

coche.no_se_puede = "false";        //NO SE PUEDE AÑADIR
delete coche.matricula;             //NO SE PUEDE BORRAR
coche.modelo = "Audi RS4";          //SI SE PUEDE MODIFICAR

console.log(coche);











//CONSTRUCTORES
/*
function coche(modelo, color, kms, combustible)
{
    this.modelo = modelo;
    this.color = color;
    this.kms = kms;
    this.combustible = combustible;
}

let coche3 = new coche("BMV 318", "rojo", 210000, "gasolina");

console.log(coche3);
*/