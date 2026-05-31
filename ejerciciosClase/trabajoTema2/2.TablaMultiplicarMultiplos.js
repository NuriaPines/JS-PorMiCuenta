/**
 * Función que imprime las tablas del 1 al 12 en formato cuadrícula.
 * Resalta los múltiplos de 2, 3, 5 y 7 envolviéndolos en asteriscos (*).
 */
function mostrarTablasCuadricula() {
    
    // 1. Bucle exterior: Controla los bloques de tablas (las filas principales)
    // Queremos 3 bloques, y en cada bloque imprimiremos 4 tablas.
    for (let bloque = 0; bloque < 3; bloque++) {
        
        // Calculamos qué tabla empieza y cuál termina en este bloque
        // Bloque 0: Tablas del 1 al 4
        // Bloque 1: Tablas del 5 al 8
        // Bloque 2: Tablas del 9 al 12
        let tablaInicio = (bloque * 4) + 1;
        let tablaFin = tablaInicio + 3;

        // 2. Imprimimos una cabecera para este bloque de tablas
        let cabecera = "";
        for (let t = tablaInicio; t <= tablaFin; t++) {
            // Añadimos el título y le damos un ancho fijo de 20 caracteres con espacios al final
            cabecera += `Tabla del ${t}`.padEnd(20, " ");
        }
        console.log(cabecera);
        console.log("-------------------------------------------------------------------------");

        // 3. Bucle interior: Imprime las líneas de las multiplicaciones (del 1 al 10)
        for (let i = 1; i <= 10; i++) {
            
            // Variable temporal para guardar toda la línea de texto antes de imprimirla
            let lineaConsola = "";

            // Recorremos las 4 tablas de este bloque para construir la línea actual
            for (let t = tablaInicio; t <= tablaFin; t++) {
                
                // Calculamos el resultado de la multiplicación
                let resultado = t * i;
                
                // Convertimos el resultado a texto por defecto
                let textoResultado = resultado.toString();

                // 4. Lógica de resaltado (Múltiplos de 2, 3, 5 o 7)
                // Usamos el operador módulo (%) para saber si el resultado es divisible exactamente.
                if (resultado % 2 === 0 || resultado % 3 === 0 || resultado % 5 === 0 || resultado % 7 === 0) {
                    // Si es múltiplo, lo envolvemos en asteriscos
                    textoResultado = `*${resultado}*`;
                }

                // Construimos la ecuación completa (ej: "2 x 3 = *6*")
                let ecuacion = `${t} x ${i} = ${textoResultado}`;
                
                // Añadimos la ecuación a nuestra línea y rellenamos con espacios hasta 20 caracteres
                // para que la siguiente ecuación empiece bien alineada
                lineaConsola += ecuacion.padEnd(20, " ");
            }

            // Una vez construida la línea con las 4 ecuaciones, la imprimimos por pantalla
            console.log(lineaConsola);
        }
        
        // Imprimimos un salto de línea extra al final de cada bloque para separarlos visualmente
        console.log("\n");
    }
}

// ==========================================
// EJECUTAR EL PROGRAMA
// ==========================================

mostrarTablasCuadricula();