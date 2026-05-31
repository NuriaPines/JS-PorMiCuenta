/**
 * EJERCICIO 2: USO DE MAP
 * --------------------------------------------------------------------------
 */

// --- 1. CONVERTIR A MAYÚSCULAS ---
console.log("--- 1. CONVERTIR A MAYÚSCULAS ---");
const palabras = ["javascript", "html", "css"];

// Transformamos cada 'palabra' usando su método .toUpperCase()
const palabrasMayusculas = palabras.map(palabra => palabra.toUpperCase());

console.log("Original:", palabras);
console.log("Transformado:", palabrasMayusculas);
console.log("\n");


// --- 2. REVISAR MAYORES DE EDAD (TRUE/FALSE) ---
console.log("--- 2. MAYORES DE EDAD (TRUE/FALSE) ---");
const edades = [15, 22, 17, 30, 18];

// La condición (edad >= 18) ya evalúa automáticamente a 'true' o 'false'.
// Map cogerá ese 'true' o 'false' y lo meterá en el nuevo array.
const sonMayores = edades.map(edad => edad >= 18);

console.log("Original (Edades):", edades);
console.log("Transformado (Booleanos):", sonMayores);
console.log("\n");


// --- 3. NORMALIZAR NOMBRES (juan perez -> Juan Perez) ---
console.log("--- 3. NORMALIZAR NOMBRES ---");
const nombresScios = ["juan perez", "ana maría gómez", "luis"];

// Este es más avanzado. Usamos un método encadenado.
const nombresNormalizados = nombresScios.map(nombreCompleto => {
    // 1. Partimos el nombre en palabras separadas por espacios
    let palabrasDelNombre = nombreCompleto.split(' ');
    
    // 2. Usamos OTRO map interno para transformar cada palabra suelta
    let palabrasCapitalizadas = palabrasDelNombre.map(palabra => {
        // Cogemos la primera letra (charAt(0)), la pasamos a mayúscula, 
        // y le pegamos (slice(1)) el resto de la palabra en minúscula.
        return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    
    // 3. Volvemos a juntar las palabras con espacios (.join(' '))
    return palabrasCapitalizadas.join(' ');
});

console.log("Original:", nombresScios);
console.log("Transformado:", nombresNormalizados);
console.log("\n");


// --- 4. REVISAR APROBADOS (SI / NO) ---
console.log("--- 4. REVISAR APROBADOS (SI/NO) ---");
const notas = [4.5, 8, 3, 5, 9.2];

// Aquí el operador ternario (condición ? si_es_true : si_es_false) brilla con luz propia.
const aprobadosTexto = notas.map(nota => nota >= 5 ? "SI" : "NO");

console.log("Original (Notas):", notas);
console.log("Transformado (Textos):", aprobadosTexto);
console.log("\n");


// --- 5. TRANSFORMAR OBJETOS ---
console.log("--- 5. TRANSFORMAR OBJETOS ---");

// Un array de objetos típico que recibirías de una base de datos
const productos = [
    { id: 1, nombre: "Teclado", precio: 50 },
    { id: 2, nombre: "Ratón", precio: 20 }
];

// Vamos a transformar estos objetos para crear unos nuevos que incluyan el precio con IVA.
// OJO a la sintaxis: para devolver un objeto {} en una función flecha de una línea,
// hay que envolver el objeto entre paréntesis ({}) para que JS no lo confunda con el bloque de la función.
const productosConIva = productos.map(producto => ({
    ...producto, // El operador spread (...) copia todas las propiedades que ya tenía el objeto original
    precioFinal: producto.precio * 1.21, // Y aquí añadimos nuestra propiedad nueva
    etiqueta: `${producto.nombre} - ${producto.precio}€` // Y otra más de regalo
}));

console.log("Original (Objetos):", productos);
console.log("Transformado (Objetos ampliados):", productosConIva);