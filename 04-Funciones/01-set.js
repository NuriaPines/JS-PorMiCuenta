//Guardian anti-duplicados
// Un Set es exactamente igual que un Array, pero con una regla de oro: no admite valores repetidos.
/*
Si tienes una lista con datos duplicados y la metes en un Set, 
los duplicados desaparecen mágicamente. Si intentas añadir con
.add() un valor que ya existe en el Set, simplemente no se añade. 
Esto es la gran diferencia con respecto a un array normal.
*/

//INTRODUCCIÓN
let miArrayConDuplicados = [1, "1", 2, 2, 3, "hola", "hola"] //Duplicados del mismo tipo
let miSet = new Set(miArrayConDuplicados)
//console.log(miSet)

//HERRAMIENTAS
/*
miSet.add(valor): Sirve para añadir un elemento. Si el valor ya existe, lo ignora y no da error.
miSet.has(valor): Te dice si un elemento existe dentro del Set. Devuelve un booleano (true o false).
miSet.delete(valor): Elimina un elemento concreto que le pases entre los paréntesis.
miSet.size: Te da el número total de elementos que hay dentro. (Ojo: se escribe sin paréntesis al final porque es una propiedad, no una función).
miSet.clear(): Vacía el Set por completo, eliminando todo de golpe.
*/
// Ejercicio: Escribir el codigo necesario para convertir este array en uno nuevo que solo tenga las categorias unicas
// es decir que el resultado final sea ["A", "B", "C","D"]
let categoriasExtraidas = ["A", "B", "A", "C", "B", "A", "C", "D"]

let set = new Set(categoriasExtraidas)
let arrayNuevo = Array.from(set)
//console.log(arrayNuevo)

//Ejercicio: Sistema que registra los jugadores al empezar la partida.
/*
1. Crea un Set completamente vacío llamado salaDeEspera.
2. Usa el método correspondiente para añadir a los jugadores: "Nuria", "Carlos" y "Ana".
3. Intenta añadir a "Nuria" otra vez (para comprobar que el Set hace su magia y la bloquea).
4. Imprime por consola cuántos jugadores hay registrados actualmente usando la propiedad de tamaño.
5. Imprime por consola si es true o false que "Carlos" está en la sala.
6. "Ana" se cansa de esperar y decide irse. Usa el método para eliminarla de la sala.
7. Haz un console.log(salaDeEspera) final para ver quién se ha quedado.
8. Usa el método .forEach() sobre tu salaDeEspera para imprimir un mensaje por cada jugador que diga: "¡Hola [nombre del jugador]! Prepárate para los dados.".
9. Una vez saludados, usa el método para vaciar el Set por completo.
10. Haz un último console.log del tamaño (.size) para confirmar que ahora es 0.
*/

let salaDeEspera = new Set()
salaDeEspera.add("Nuria")
salaDeEspera.add("Carlos")
salaDeEspera.add("Ana")
salaDeEspera.add("Nuria") //No lo mete ya existe
console.log(salaDeEspera)
console.log('Jugadores esperando en la sala de espera: ' + salaDeEspera.size)
console.log(`¿Está Carlos en la sala de espera?: ${salaDeEspera.has("Carlos")}`)
salaDeEspera.delete("Ana")
console.log("Ana salío de la sala de espera")
console.log("Jugadores en la sala da espera: ")
console.log(salaDeEspera)
salaDeEspera.forEach(jugador => console.log(`¡Hola ${jugador}! Prepárate para los dados.`))
salaDeEspera.clear()
console.log(`Quedan ${salaDeEspera.size} en la sala de espera`)
