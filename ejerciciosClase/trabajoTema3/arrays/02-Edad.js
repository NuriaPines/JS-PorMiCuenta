/**
 * Función que calcula la edad exacta en años, meses y días.
 * Devuelve un objeto estructurado.
 */
function edad(fechaNacimiento) {
    
    const nac = new Date(fechaNacimiento);
    const hoy = new Date(); // Fecha actual

    // Validación de seguridad por si nos pasan un texto que no es una fecha
    if (isNaN(nac.getTime())) {
        console.log("❌ Error: Formato de fecha de nacimiento inválido.");
        return null;
    }

    // 1. Cálculo inicial (Resta bruta)
    let years = hoy.getFullYear() - nac.getFullYear();
    let months = hoy.getMonth() - nac.getMonth();
    let days = hoy.getDate() - nac.getDate();

    // 2. Ajuste de Días
    // Si la resta de días es negativa, significa que aún no hemos superado 
    // el día exacto de nacimiento dentro de este mes.
    if (days < 0) {
        // Pedimos prestado un mes
        months--;
        
        // Magia de Date: Si pides el día "0" de un mes, JS te devuelve el ÚLTIMO día del mes anterior.
        // Esto tiene en cuenta automáticamente los años bisiestos y si el mes es de 30 o 31.
        const diasDelMesAnterior = new Date(hoy.getFullYear(), hoy.getMonth(), 0).getDate();
        
        // Sumamos esos días a nuestro saldo negativo
        days += diasDelMesAnterior;
    }

    // 3. Ajuste de Meses
    // Si la resta de meses es negativa, significa que aún no hemos llegado 
    // al mes de su cumpleaños en este año.
    if (months < 0) {
        // Pedimos prestado un año
        years--;
        // Le sumamos los 12 meses de ese año a nuestro saldo
        months += 12;
    }

    // 4. Devolvemos el objeto exacto que pide el enunciado
    return {
        years: years,
        months: months,
        days: days
    };
}

// ==========================================
// PRUEBAS DEL CÓDIGO
// ==========================================

console.log("--- CALCULADORA EXACTA DE EDAD ---");

// Prueba 1: Alguien nacido justo hace 30 años (ejemplo genérico)
// (Cambia el año en tu prueba para que coincida exactamente con el día de hoy menos 30 años)
const fechaPrueba = new Date();
fechaPrueba.setFullYear(fechaPrueba.getFullYear() - 30);
const edad1 = edad(fechaPrueba);
console.log(`Prueba exacta 30 años:`, edad1); 

// Prueba 2: Una fecha aleatoria de los 90s
const edad2 = edad("1995-10-15");
console.log(`Alguien nacido el 15/10/1995 hoy tiene:`);
console.log(`Años: ${edad2.years}, Meses: ${edad2.months}, Días: ${edad2.days}`);

// Prueba 3: Un bebé nacido hace muy poco (para comprobar meses y días)
const bebe = new Date();
bebe.setMonth(bebe.getMonth() - 2); // Le quitamos 2 meses a la fecha de hoy
bebe.setDate(bebe.getDate() - 5);   // Y le quitamos 5 días
const edad3 = edad(bebe);
console.log(`\nUn bebé nacido hace poco tiene:`, edad3);