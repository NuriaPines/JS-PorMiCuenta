/*
Los más importantes según tus apuntes:

    .length: Te dice cuántas letras tiene (es una propiedad, no lleva paréntesis).

    .trim(): Limpia los espacios vacíos al principio y al final.

    .toUpperCase() / .toLowerCase(): Pasa todo a mayúsculas o minúsculas.

    .includes("texto"): Te dice true o false si una palabra está dentro de otra.

    .split(""): Rompe el texto y lo convierte en un Array (muy útil para usar luego filter o map).

    .replace("viejo", "nuevo"): Cambia una parte del texto por otra.
*/


//Mini ejercicio: Escribe el código para que esa 
// variable termine siendo "NURIA", sin espacios y todo 
// en mayúsculas. Luego, comprueba si el resultado tiene 
// una longitud de 5 letras y muestra un mensaje por consola.
let entradaExamen = "    nuRia      ";

// 1. Normalización
entradaExamen = entradaExamen.trim().toUpperCase();

// 2. Validación de longitud
if (entradaExamen.length === 5) {
    console.log(`El nombre ${entradaExamen} es válido y tiene 5 letras.`);
} else {
    console.log("Longitud incorrecta.");
}
