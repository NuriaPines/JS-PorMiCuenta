/**
 * EJERCICIO 3: USO DE REDUCE
 * --------------------------------------------------------------------------
 */

// --- 1. CONTAR REPETICIONES DE UN ELEMENTO ---
console.log("--- 1. CONTAR REPETICIONES ---");
const inventario = ["rueda", "espejo", "rueda", "volante", "rueda", "espejo"];

// El valor inicial es un objeto vacío {}.
// El acumulador (acc) será ese objeto que iremos llenando.
const conteoPiezas = inventario.reduce((acc, pieza) => {
    
    // Si la pieza ya existe en nuestro objeto acumulador, le sumamos 1.
    if (acc[pieza]) {
        acc[pieza]++;
    } else {
        // Si no existe, la creamos y le ponemos el valor 1.
        acc[pieza] = 1;
    }
    
    // IMPORTANTE: En reduce siempre hay que devolver el acumulador 
    // para que esté disponible en la siguiente vuelta.
    return acc;
}, {}); // <-- Este {} es el valor inicial del acumulador

console.log("Inventario original:", inventario);
console.log("Conteo final:", conteoPiezas);
console.log("\n");


// --- 2. ENCONTRAR EL VALOR MÁXIMO ---
console.log("--- 2. ENCONTRAR EL VALOR MÁXIMO ---");
const precios = [1200, 5400, 800, 7200, 3100];

// No le ponemos valor inicial al final (después de la llave). 
// Si no se lo pones, JS coge automáticamente el primer elemento (1200) como acumulador.
const precioMaximo = precios.reduce((maximoHastaAhora, precioActual) => {
    
    // Comparamos: Si el precio de esta vuelta es mayor que el récord que teníamos guardado...
    if (precioActual > maximoHastaAhora) {
        return precioActual; // El nuevo precio se convierte en el nuevo récord
    } else {
        return maximoHastaAhora; // Mantenemos el récord anterior
    }
    
    // (Pista pro: esto se suele hacer en una línea con ternarios: 
    // return precioActual > maximoHastaAhora ? precioActual : maximoHastaAhora;)
});

console.log("Precios:", precios);
console.log("El precio máximo es:", precioMaximo);
console.log("\n");


// --- 3. PROMEDIO DE NOTAS ---
console.log("--- 3. PROMEDIO DE NOTAS ---");
const calificaciones = [5, 8.5, 9, 4, 7.5];

// Primero usamos reduce simplemente para sumar todas las notas.
// Valor inicial: 0.
const sumaTotal = calificaciones.reduce((sumaAcumulada, notaActual) => {
    return sumaAcumulada + notaActual;
}, 0); 

// Una vez tenemos la suma de todo, calculamos el promedio dividiendo por la cantidad.
const promedioFinal = sumaTotal / calificaciones.length;

console.log("Notas:", calificaciones);
console.log("Suma total:", sumaTotal);
console.log("Promedio:", promedioFinal);
console.log("\n");


// --- 4. CLASIFICAR MAYORES Y MENORES ---
console.log("--- 4. CLASIFICAR MAYORES Y MENORES ---");
const edadesClientes = [15, 22, 17, 30, 18, 12, 45];

// El valor inicial va a ser un objeto con dos arrays vacíos.
// Así podemos ir empujando (.push) cada edad a su cajón correspondiente.
const clasificacionEdades = edadesClientes.reduce((acc, edad) => {
    
    if (edad >= 18) {
        acc.mayores.push(edad); // Lo metemos en el array de mayores
    } else {
        acc.menores.push(edad); // Lo metemos en el array de menores
    }
    
    return acc; // Devolvemos el objeto actualizado para la siguiente vuelta
    
}, { mayores: [], menores: [] }); // <-- Valor inicial complejo

console.log("Edades mezcladas:", edadesClientes);
console.log("Clasificación final:", clasificacionEdades);