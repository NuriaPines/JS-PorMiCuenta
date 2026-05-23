"use strict"
// OBJETO DATE: La máquina del tiempo de JavaScript 
// MUY IMPORTANTE: En JavaScript los meses empiezan en 0 (Enero es 0, Diciembre es 11).
// Sin embargo, los días sí empiezan en 1.

// 1. CREAR FECHAS
let hoy = new Date(); // Coge la fecha y hora exacta de este mismo segundo
let miCumple = new Date("2006-07-20"); // Coge una fecha concreta (Formato: AAAA-MM-DD)

console.log("Fecha actual:", hoy);

// 2. EXTRAER PARTES DE UNA FECHA (Getters)
console.log("Día del mes (1-31):", hoy.getDate());
console.log("Mes (0-11):", hoy.getMonth()); // ¡Ojo al 0! Suma +1 si quieres mostrarlo al usuario
console.log("Año (4 dígitos):", hoy.getFullYear());
console.log("Día de la semana (0-6):", hoy.getDay()); // 0 es Domingo, 1 es Lunes...

// 3. MODIFICAR PARTES DE UNA FECHA (Setters)
let fechaInventada = new Date();
fechaInventada.setFullYear(2050);
fechaInventada.setMonth(11); // Diciembre
fechaInventada.setDate(25); // 25 de Diciembre
console.log("Fecha modificada:", fechaInventada.toLocaleDateString()); // Muestra formato bonito: 25/12/2050

// 4. EL TRUCO MAGISTRAL (Para el examen)
// ¿Qué pasa si a una fecha le pido el día "0" de un mes? 
// ¡JavaScript retrocede automáticamente al ÚLTIMO día del mes anterior!
let ultimoDiaEnero = new Date(2024, 1, 0); // Año 2024, Mes 1 (Febrero), Día 0.
console.log("Último día de enero:", ultimoDiaEnero.getDate()); // Devuelve 31. ¡Súper útil para saber cuántos días tiene un mes!