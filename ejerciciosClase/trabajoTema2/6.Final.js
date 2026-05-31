// ==========================================================================
// TEMA: FUNDAMENTOS DE JAVASCRIPT (VERSIÓN CONSOLA)
// ==========================================================================

/* * 1. FORMAS DE INTEGRAR JS Y SALIDA DE INFORMACIÓN
 * --------------------------------------------------------------------------
 * Sin HTML, la integración se hace ejecutando este archivo directamente 
 * en un entorno como Node.js o pegándolo en la consola del navegador.
 * En un navegador real tendríamos: alert() (emergente) y manipulacion del DOM.
 * Aquí usaremos exclusivamente la consola.
 */
console.log("--- 1. SALIDA DE INFORMACIÓN ---");
console.log("Salida estándar por consola.");
console.warn("Esto es una advertencia.");
console.error("Esto simula un error del sistema.");


/* * 2. CREACIÓN DE VARIABLES, CONSTANTES Y HOISTING
 * --------------------------------------------------------------------------
 * El Hoisting es el comportamiento de JS de "subir" las declaraciones 
 * al principio del código antes de ejecutarlo.
 */
console.log("\n--- 2. VARIABLES Y HOISTING ---");

// HOISTING: Con 'var', la variable existe antes de declararse (vale 'undefined').
// Con 'let' o 'const' esto daría un error fatal (Temporal Dead Zone).
console.log("Valor de variable var antes de declararla:", variableAntigua); 
var variableAntigua = "Ahora tengo valor";

// CREACIÓN MODERNA (Recomendada)
let vehiculosDisponibles = 15; // 'let' permite reasignar el valor
const NOMBRE_PROYECTO = "NujamaMotors"; // 'const' no permite cambios una vez asignado

console.log(`Proyecto: ${NOMBRE_PROYECTO} | Vehículos: ${vehiculosDisponibles}`);


/* * 3. ÁMBITO DE VARIABLES (SCOPE) Y ELIMINACIÓN
 * --------------------------------------------------------------------------
 */
console.log("\n--- 3. ÁMBITO Y ELIMINACIÓN ---");

function probarAmbito() {
    var ambitoFuncion = "Solo existo dentro de esta función";
    
    if (true) {
        let ambitoBloque = "Solo existo dentro de este 'if'";
        var seCuela = "Soy un var, me cuelo fuera del bloque 'if'";
    }
    
    // console.log(ambitoBloque); // Esto daría ERROR porque 'let' respeta el bloque.
    console.log("Var no respeta el bloque:", seCuela); 
}
probarAmbito();

// ELIMINACIÓN: En JS moderno no se pueden borrar variables creadas con let/const/var.
// 'delete' solo sirve para borrar propiedades dentro de un objeto.
const coche = { marca: "Ford", modelo: "Mustang" };
delete coche.modelo; // Borra la propiedad 'modelo'
console.log("Objeto tras usar 'delete':", coche);


/* * 4. OPERADORES
 * --------------------------------------------------------------------------
 */
console.log("\n--- 4. OPERADORES ---");

// Aritméticos y Asignación
let precio = 1000;
precio += 200; // Asignación con suma (precio = precio + 200)
let iva = precio * 0.21; // Multiplicación
let resto = 10 % 3; // Módulo (resto de la división)

// Comparación y Lógicos (&& AND, || OR, ! NOT)
let esCaro = (precio > 1000) && (precio <= 5000); 
let comparacionEstricta = (5 === "5"); // false (compara valor y tipo)
let comparacionDebil = (5 == "5"); // true (solo compara valor)

// Ternario: Condición ? Valor_Si_True : Valor_Si_False
let estadoAlquiler = (vehiculosDisponibles > 0) ? "Disponible para alquilar" : "Sin stock";
console.log("Ternario:", estadoAlquiler);

// Operadores de Tipos
console.log("typeof precio:", typeof precio); // Devuelve "number"
console.log("instanceof Date:", new Date() instanceof Date); // Devuelve true


/* * 5. TRUTHY Y FALSY
 * --------------------------------------------------------------------------
 * Valores que JS interpreta como falsos: 0, "", null, undefined, NaN, false.
 * Todo lo demás es truthy (incluyendo "0", [], {}).
 */
console.log("\n--- 5. TRUTHY Y FALSY ---");
if ("") console.log("Esto no se imprime, un texto vacío es Falsy.");
if ("0") console.log("Esto SÍ se imprime, un texto con un cero es Truthy.");


/* * 6. FUNCIONES
 * --------------------------------------------------------------------------
 */
console.log("\n--- 6. TIPOS DE FUNCIONES ---");

// Función clásica sin parámetros
function saludar() {
    console.log("Iniciando sistema...");
}
saludar();

// Función clásica con parámetros
function calcularTotal(precioBase, impuestos) {
    return precioBase + impuestos;
}

// Función Anónima (Guardada en una variable)
const aplicarDescuento = function(total) {
    return total * 0.90;
};

// Función Flecha (Arrow Function) - Sintaxis moderna y concisa
const formatoMoneda = (cantidad) => `${cantidad} €`;

console.log("Total formateado:", formatoMoneda(aplicarDescuento(calcularTotal(100, 21))));


/* * 7. CONTROL CONDICIONAL
 * --------------------------------------------------------------------------
 */
console.log("\n--- 7. CONTROL CONDICIONAL ---");

let rolUsuario = "admin";

// If / Else If encadenado
if (rolUsuario === "cliente") {
    console.log("Acceso a compras.");
} else if (rolUsuario === "admin") {
    console.log("Acceso total al panel.");
} else {
    console.log("Acceso denegado.");
}

// Switch (Ideal para múltiples casos sobre una misma variable)
let accion = "rent";
switch (accion) {
    case "sale":
        console.log("Procesando venta...");
        break;
    case "rent":
        console.log("Procesando alquiler...");
        break;
    default:
        console.log("Acción no reconocida.");
}


/* * 8. BUCLES E ITERACIONES
 * --------------------------------------------------------------------------
 */
console.log("\n--- 8. BUCLES ---");

const marcas = ["Audi", "BMW", "Mercedes"];
const configuracion = { idioma: "es", tema: "oscuro" };

// For clásico
for (let i = 0; i < 2; i++) {
    console.log("For clásico índice:", i);
}

// For...in (Sirve para recorrer las CLAVES/propiedades de un OBJETO)
for (let propiedad in configuracion) {
    console.log(`For...in: La propiedad ${propiedad} vale ${configuracion[propiedad]}`);
}

// For...of (Sirve para recorrer los VALORES de algo iterable como un ARRAY)
for (let marca of marcas) {
    console.log("For...of valor:", marca);
}

// .forEach() (Método funcional específico para Arrays)
marcas.forEach((marca, indice) => {
    console.log(`forEach: En la posición ${indice} está ${marca}`);
});

// While y Do...while
let contador = 0;
while (contador < 1) {
    console.log("While: me ejecuto si la condición es cierta desde el principio.");
    contador++;
}

let contadorDo = 5;
do {
    // El Do...While garantiza que el código se ejecuta AL MENOS UNA VEZ
    // aunque la condición sea falsa.
    console.log("Do...while: me ejecuto una vez y luego pregunto.");
} while (contadorDo < 1);


/* * 9. SALTOS Y SALIDAS DE BLOQUE
 * --------------------------------------------------------------------------
 */
console.log("\n--- 9. BREAK, CONTINUE Y ETIQUETAS ---");

// Break normal: Rompe el bucle en el que está
for (let i = 0; i < 5; i++) {
    if (i === 2) break;
    console.log("Bucle con break, iteración:", i); // Solo imprime 0 y 1
}

// Break con Etiqueta (Label): Permite romper un bucle exterior desde uno interior
bucleExterior: for (let fila = 1; fila <= 3; fila++) {
    for (let col = 1; col <= 3; col++) {
        if (fila === 2 && col === 2) {
            console.log("¡Rompiendo todo desde dentro con la etiqueta!");
            break bucleExterior; 
        }
        console.log(`Fila ${fila}, Columna ${col}`);
    }
}

// Return: Sale inmediatamente de una función devolviendo un valor
function buscarVehiculo() {
    return "Vehículo encontrado"; 
    console.log("Esto nunca se ejecutará porque está debajo del return.");
}
console.log(buscarVehiculo());