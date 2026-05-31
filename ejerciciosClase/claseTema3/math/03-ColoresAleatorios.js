/**
 * EJERCICIO CURIOSO: GENERADOR DE COLORES HEXADECIMALES
 * --------------------------------------------------------------------------
 */

// ==========================================
// MÉTODO 1: EL LÓGICO (Fácil de entender)
// ==========================================
function generarHexLogico() {
    // 1. Definimos todos los caracteres válidos en el sistema hexadecimal
    const letrasHex = '0123456789ABCDEF';
    
    // 2. Empezamos nuestra cadena con la almohadilla obligatoria
    let color = '#';

    // 3. Un color HEX siempre tiene 6 caracteres después de la almohadilla.
    // Hacemos un bucle que dé exactamente 6 vueltas.
    for (let i = 0; i < 6; i++) {
        
        // En cada vuelta, cogemos un carácter aleatorio de nuestra lista (del 0 al 15)
        const indiceAleatorio = Math.floor(Math.random() * 16);
        
        // Lo añadimos a nuestro color
        color += letrasHex[indiceAleatorio];
    }

    return color;
}

// ==========================================
// MÉTODO 2: EL TRUCO MATEMÁTICO (El difícil/Pro)
// ==========================================
function generarHexMagico() {
    
    // 1. ¿De dónde sale el 16777215? 
    // Es el equivalente en sistema decimal del número hexadecimal FFFFFF.
    // FFFFFF es el color blanco (el valor máximo posible).
    
    // 2. Generamos un número aleatorio entre 0 y 16777215 y le quitamos los decimales.
    const numeroDecimal = Math.floor(Math.random() * 16777215);
    
    // 3. LA MAGIA: .toString(16)
    // El método toString() normalmente convierte un número a texto. 
    // PERO si le pasas un número por parámetro (la base), hace una conversión matemática.
    // .toString(16) coge nuestro número decimal gigante y lo transforma a código hexadecimal.
    const textoHex = numeroDecimal.toString(16);
    
    // 4. EL PARCHE: .padStart(6, '0')
    // A veces, el número aleatorio generado es muy pequeño (ej: el número 255).
    // Su conversión a hex sería "ff", que no es un color CSS válido (necesita 6 dígitos).
    // Usamos padStart para rellenarlo con ceros por la izquierda hasta que mida 6 (ej: "0000ff").
    const colorFinal = '#' + textoHex.padStart(6, '0');

    return colorFinal;
}

// ==========================================
// PRUEBAS DEL CÓDIGO CON ESTILOS EN CONSOLA
// ==========================================
console.log("--- GENERANDO COLORES ALEATORIOS ---");

// Generamos colores con ambos métodos
const color1 = generarHexLogico();
const color2 = generarHexMagico();
const color3 = generarHexMagico();

// Imprimimos el resultado aplicando el propio color generado a la fuente de la consola
console.log(`%c■ Color lógico generado: ${color1}`, `color: ${color1}; font-size: 16px; font-weight: bold; background: #222; padding: 2px 10px;`);
console.log(`%c■ Color mágico generado: ${color2}`, `color: ${color2}; font-size: 16px; font-weight: bold; background: #222; padding: 2px 10px;`);
console.log(`%c■ Color mágico generado: ${color3}`, `color: ${color3}; font-size: 16px; font-weight: bold; background: #222; padding: 2px 10px;`);