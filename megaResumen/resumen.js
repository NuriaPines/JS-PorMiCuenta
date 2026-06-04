/* ==========================================================================
   📚 LA BIBLIA DE JAVASCRIPT: GUÍA DE REFERENCIA DEFINITIVA
   ========================================================================== 
   ÍNDICE:
   1. VARIABLES Y TIPOS BÁSICOS
   2. FUNCIONES (Clásicas y Flecha)
   3. STRINGS (Manipulación de Textos)
   4. NÚMEROS Y MATH (Matemáticas y Azar)
   5. FECHAS (Date)
   6. OBJETOS (Crear, leer, modificar)
   7. ARRAYS BÁSICOS Y BUCLES (for, for...of, for...in, forEach)
   8. ARRAYS AVANZADOS (map, filter, reduce, find, sort)
   9. COMBINACIONES NINJA (Encadenar métodos)
   10. CLASES Y MAPAS
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. VARIABLES Y TIPOS BÁSICOS
   -------------------------------------------------------------------------- */
let fruta = "Manzana";   // Variable que puede cambiar de valor
const GRAVEDAD = 9.8;    // Constante, NUNCA cambia
let estaLloviendo = true; // Booleano (true o false)

// Operador Ternario (El if/else de una sola línea)
// Condición ? Qué pasa si es true : Qué pasa si es false
let clima = estaLloviendo ? "Lleva paraguas" : "Ponte gafas de sol";


/* --------------------------------------------------------------------------
   2. FUNCIONES (Clásicas y Flecha)
   -------------------------------------------------------------------------- */
// Función Clásica
function saludar(nombre) {
    return "Hola, " + nombre;
}

// Arrow Function (Función Flecha) -> Más moderna y corta
const despedir = (nombre) => {
    return "Adiós, " + nombre;
};

// Arrow Function en una sola línea (El "return" va implícito)
const multiplicar = (a, b) => a * b;


/* --------------------------------------------------------------------------
   3. STRINGS (Manipulación de Textos)
   -------------------------------------------------------------------------- */
let frase = "  Aprender a programar es genial!  ";

// Limpieza y Transformación
frase.trim();             // "Aprender a programar es genial!" (Quita espacios de los bordes)
frase.toLowerCase();      // Todo a minúsculas
frase.toUpperCase();      // Todo a mayúsculas

// Búsqueda y Extracción
frase.includes("genial"); // true (¿Contiene esta palabra?)
frase.startsWith("  A");  // true (¿Empieza por esto?)
frase.endsWith("!");      // true (¿Termina con esto?)
frase.charAt(2);          // "A" (La letra en la posición 2)
frase.indexOf("programar"); // 13 (En qué posición empieza esa palabra)

// Recortes y Reemplazos
frase.slice(2, 10);       // "Aprender" (Corta desde la pos 2 hasta la 10)
frase.replace("genial", "duro"); // Cambia la primera vez que aparece
frase.replaceAll("a", "x");      // Cambia TODAS las 'a' por 'x'
frase.repeat(3);          // Repite el texto 3 veces

// Conversión String <-> Array
let palabras = frase.trim().split(" "); // ["Aprender", "a", "programar", "es", "genial!"]
let vueltoUnir = palabras.join("-");    // "Aprender-a-programar-es-genial!"


/* --------------------------------------------------------------------------
   4. NÚMEROS Y MATH (Matemáticas y Azar)
   -------------------------------------------------------------------------- */
let numeroDecimal = 15.75;

Math.floor(numeroDecimal); // 15 (Redondea hacia ABAJO)
Math.ceil(numeroDecimal);  // 16 (Redondea hacia ARRIBA)
Math.round(numeroDecimal); // 16 (Redondea al más cercano)

Math.max(10, 50, 5);       // 50 (Saca el más alto)
Math.min(10, 50, 5);       // 5 (Saca el más bajo)

// Para sacar el máximo de un array de números, usa los 3 puntitos (Spread operator)
let notas = [5, 8, 2, 9];
Math.max(...notas);        // 9

// LA FÓRMULA DE NÚMEROS ALEATORIOS (Entre un min y un max incluidos)
function numeroAzar(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/* --------------------------------------------------------------------------
   5. FECHAS (Date) -> ¡Recuerda, los meses empiezan en 0!
   -------------------------------------------------------------------------- */
let hoy = new Date(); // Fecha y hora actuales exactas
let fechaInventada = new Date(2025, 11, 25); // 25 de Diciembre (Mes 11) de 2025

// Extraer piezas de una fecha
hoy.getFullYear(); // Año (ej: 2026)
hoy.getMonth();    // Mes (0 al 11) -> ¡Súmale 1 si vas a mostrarlo al usuario!
hoy.getDate();     // Día del mes (1 al 31)
hoy.getDay();      // Día de la semana (0 es Domingo, 1 es Lunes... 6 es Sábado)

// Diferencia entre dos fechas
let inicio = new Date(2024, 0, 1);
let fin = new Date(2024, 0, 10);
let diferenciaDias = (fin - inicio) / (1000 * 60 * 60 * 24); // Da 9 días


/* --------------------------------------------------------------------------
   6. OBJETOS (Crear, leer, modificar)
   -------------------------------------------------------------------------- */
// Crear un objeto (Diccionario de clave: valor)
let mascota = {
    nombre: "Kira",
    tipo: "Perro",
    edad: 3
};

// 1. Leer propiedades
mascota.nombre;    // "Kira"
mascota["tipo"];   // "Perro" (Útil si la clave viene en una variable)

// 2. Agregar o Modificar propiedades
mascota.color = "Negro"; // Como 'color' no existía, lo crea
mascota.edad = 4;        // Como 'edad' sí existía, lo actualiza (modifica)

// 3. Eliminar propiedades
delete mascota.tipo; // Borra la propiedad 'tipo' entera

// 4. Extraer claves o valores a Arrays
Object.keys(mascota);   // ["nombre", "edad", "color"]
Object.values(mascota); // ["Kira", 4, "Negro"]


/* --------------------------------------------------------------------------
   7. ARRAYS BÁSICOS Y BUCLES
   -------------------------------------------------------------------------- */
let colores = ["Rojo", "Verde", "Azul"];

// Métodos básicos
colores.push("Amarillo");  // Añade al final -> ["Rojo", "Verde", "Azul", "Amarillo"]
colores.pop();             // Elimina el último ("Amarillo")
colores.unshift("Blanco"); // Añade al principio -> ["Blanco", "Rojo", "Verde", "Azul"]
colores.shift();           // Elimina el primero ("Blanco")
colores.reverse();         // Le da la vuelta al array

// BUCLE FOR CLÁSICO (Útil si necesitas saber el índice / posición exacta)
for (let i = 0; i < colores.length; i++) {
    console.log(i, colores[i]);
}

// BUCLE FOR...OF (Para recorrer ARRAYS de forma limpia)
for (let color of colores) {
    console.log(color);
}

// BUCLE FOR...IN (Para recorrer las CLAVES de un OBJETO)
let libro = { titulo: "Dune", autor: "Frank Herbert" };
for (let propiedad in libro) {
    console.log(propiedad + ": " + libro[propiedad]); 
    // Imprime: "titulo: Dune" y luego "autor: Frank Herbert"
}

// FOREACH (Método de array para ejecutar algo por cada elemento)
colores.forEach((color, indice) => {
    console.log(`El color ${color} está en la posición ${indice}`);
});


/* --------------------------------------------------------------------------
   8. ARRAYS AVANZADOS (Programación Funcional)
   -------------------------------------------------------------------------- */
let personas = [
    { nombre: "Ana", edad: 25, ciudad: "Madrid" },
    { nombre: "Luis", edad: 15, ciudad: "Sevilla" },
    { nombre: "Paco", edad: 30, ciudad: "Madrid" }
];

// FIND: Busca EL PRIMERO que cumpla la condición (Devuelve el objeto)
let primerMadrileño = personas.find(p => p.ciudad === "Madrid");
// { nombre: "Ana", edad: 25, ciudad: "Madrid" }

// FILTER: Busca TODOS los que cumplan la condición (Devuelve un array nuevo)
let mayoresEdad = personas.filter(p => p.edad >= 18);
// [{nombre: "Ana"...}, {nombre: "Paco"...}]

// MAP: Transforma cada elemento en otra cosa (Devuelve un array nuevo)
let soloNombres = personas.map(p => p.nombre);
// ["Ana", "Luis", "Paco"]

// SORT: Ordena el array
// (a, b) => a - b (Ordena números de menor a mayor)
// (a, b) => b - a (Ordena números de mayor a menor)
let personasPorEdad = [...personas].sort((a, b) => a.edad - b.edad); 
// Ordenados: Luis(15) -> Ana(25) -> Paco(30)

// REDUCE: Acumula el array entero en un solo resultado (Ej: un número total o un objeto agrupado)
let sumaEdades = personas.reduce((acumulador, persona) => {
    return acumulador + persona.edad;
}, 0); // 0 es el valor inicial del acumulador. Resultado = 70.

// REDUCE AVANZADO: Agrupar datos (De un Array a un Objeto)
let agrupadosPorCiudad = personas.reduce((mochila, persona) => {
    if (mochila[persona.ciudad]) {
        // Si la ciudad ya existe en la mochila, le añado la persona
        mochila[persona.ciudad].push(persona.nombre);
    } else {
        // Si no existe, creo la ciudad (la clave) y abro un array con esa persona
        mochila[persona.ciudad] = [persona.nombre];
    }
    return mochila; // Siempre devolver la mochila en el reduce
}, {}); 
// Resultado: { Madrid: ["Ana", "Paco"], Sevilla: ["Luis"] }


/* --------------------------------------------------------------------------
   9. COMBINACIONES NINJA (Encadenar métodos)
   -------------------------------------------------------------------------- */
// ¿Queremos los nombres, en mayúsculas, SOLO de los que son de Madrid?
let nombresMadrilenosMayus = personas
    .filter(p => p.ciudad === "Madrid")        // 1. Filtramos
    .map(p => p.nombre.toUpperCase())          // 2. Extraemos y transformamos
    .sort();                                   // 3. Ordenamos alfabéticamente

// Resultado: ["ANA", "PACO"]


/* --------------------------------------------------------------------------
   10. CLASES Y MAPAS
   -------------------------------------------------------------------------- */
// CLASES (Orientación a Objetos)
class Animal {
    constructor(especie, sonido) {
        this.especie = especie;
        this.sonido = sonido;
    }

    hacerRuido() {
        return `El ${this.especie} hace ${this.sonido}`;
    }
}
let gato = new Animal("Gato", "Miau");
gato.hacerRuido(); // "El Gato hace Miau"

// MAPAS (Map) -> Como un objeto, pero mejor para contar frecuencias o claves raras
let mapaFrecuencias = new Map();
mapaFrecuencias.set("Manzana", 5);  // Guardar clave-valor
mapaFrecuencias.set("Pera", 2);

mapaFrecuencias.has("Manzana"); // true (¿Existe la clave?)
mapaFrecuencias.get("Manzana"); // 5 (Obtiene el valor)

// Para ordenar un Map, primero hay que pasarlo a Array
let arrayDesdeMapa = Array.from(mapaFrecuencias); 
// [ ["Manzana", 5], ["Pera", 2] ]
// Ahora ya podrías hacerle un .sort()
arrayDesdeMapa.sort((a, b) => b[1] - a[1]); // Ordena por la cantidad (mayor a menor)