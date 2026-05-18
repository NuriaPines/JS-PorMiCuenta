// El acumulador
// Mientras que map o filter te devuelven un nuevo array, reduce sirve para "reducir" 
// todo el array a un único valor final.
// Ese valor puede ser un simple número (ej. la suma de todos los elementos), 
// pero también puede ser un único objeto o un único array 
// completamente nuevo (por eso sirve para "Normalizar Datos" como en tu examen).
// El truco de reduce es que usa un acumulador, que es como una mochila que va 
// pasando de elemento en elemento guardando el resultado parcial.

let facturas = [10, 20, 30]

// Vamos a "reducir" todas las facturas a un solo total
// "acumulador" empieza en 0 (el segundo parámetro que le pasamos al final)
let total = facturas.reduce((acumulador, factura) => {
    return acumulador + factura
}, 0)
//console.log(total)

let jugadoresEjemplo = [
    { nombre: "Nuria", puntos: 15 },
    { nombre: "Carlos", puntos: 20 }
];

let mapaPuntos = jugadoresEjemplo.reduce((mochila, jugador) => {
    // Añadimos al objeto una nueva clave con el nombre del jugador
    mochila[jugador.nombre] = jugador.puntos;
    
    // ¡SIEMPRE hay que devolver la mochila para la siguiente vuelta!
    return mochila;
}, {}); // <--- La mochila empieza siendo un objeto vacío

//console.log(mapaPuntos); 
// Resultado: { Nuria: 15, Carlos: 20 }

// EJERCICIO: Usa .reduce() para calcular la suma de todos los puntos de los jugadores. 
// El resultado final debería ser 45.
let jugadores = [
    { nombre: "Nuria", puntos: 15 },
    { nombre: "Carlos", puntos: 20 },
    { nombre: "Ana", puntos: 10 }
];

let totalPuntos = jugadores.reduce((acumulador, jugador) => {
    return acumulador + jugador.puntos
},0)

//console.log(totalPuntos)

//EJERCICIO: Usa .reduce() para crear un objeto que cuente cuántas 
// tareas hay de cada prioridad. El resultado debería ser: { alta: 2, baja: 1 }.
let tareas = [
    { id: 1, prioridad: "alta" },
    { id: 2, prioridad: "baja" },
    { id: 3, prioridad: "alta" }
];

let tareasPrioridad = tareas.reduce((acumulador, tarea) => {
    if (acumulador[tarea.prioridad]){
        acumulador[tarea.prioridad] += 1
    } else {
        acumulador[tarea.prioridad] = 1
    }

    return acumulador
},{})
//console.log(tareasPrioridad)

//EJERCICIO: Normalizar datos
let entrada = [
    { id: 1, categorias: ["A", "B"] },
    { id: 2, categorias: ["A"] },
    { id: 3, categorias: ["C", "A"] }
];

let salida = entrada.reduce((acumulador, elemento) => {
    elemento.categorias.forEach(categoria => {
        console.log(categoria)
        if (acumulador[categoria]){
            acumulador[categoria].push(elemento.id)
        } else{
            acumulador[categoria] = [elemento.id]
        }
    })

    return acumulador
}, {})
console.log(salida)