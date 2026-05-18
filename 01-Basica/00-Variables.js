"use strict"
// Comentario una linea
/*
Comentario
varias
lineas
 */


//Variables
let valor = 1
valor = "hola"
console.log(valor)
let contador = 0
console.log(contador)
let array = ["elemento1", 2, "elemento3"]

//Validaciones
if (contador == 0){
    console.log('El contador es 0')
} else if (contador >= 1){
    console.log("El contador es mayor o igual que uno")
} else {
    console.log("El contador es un número negativo")
}

//Sentencias
//IF
function saludar(nombre){
    console.log("Hola " + nombre)
}
saludar('Nuria')
//Bucles
//FOR
for (let i = 0; i <= 3; i++) {
    console.log('Cuenta ' + i)
}
//WHILE
contador = 10
console.log('\nIniciamos cuenta atras')
while (contador > 0) {
    console.log(contador)
    contador--
}
console.log("¡¡BOOOMM!!\n")

//FOR IN/OF
for (let elemento of array){
    console.log(elemento)
}

//Objetos
let objeto = {
    nombre: 'Nuria',
    edad: '19',
    sexo: 'mujer'
}

for (let clave in objeto){
    console.log(clave + " = " + objeto[clave])
}
//DESESTRUCTURACION OBJETOS, LOS CONVERTIMOS EN UN ARRAY DE ARRAYS
// Usamos Object.entries() y un bucle for...of
for (let [clave, valor] of Object.entries(objeto)) {
    console.log(`${clave}: ${valor}`);
}

let nombre = objeto.nombre
let edad = objeto.edad
let sexo = (objeto.sexo.toLowerCase() == "mujer") ? `una ${objeto.sexo}` : `un ${objeto.sexo}`
console.log(`Hola mi nombre es ${nombre} tengo ${edad} años y soy ${sexo}`)

