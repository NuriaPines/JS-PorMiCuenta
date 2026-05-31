/**
 * Función que recibe una lista (array) de números y 
 * clasifica y cuenta los pares e impares.
 */
function clasificarParesEImpares(listaNumeros) {
    
    // 1. Preparamos donde vamos a guardar los resultados.
    // Inicializamos dos arrays vacíos para separar los números.
    const pares = [];
    const impares = [];

    // Inicializamos dos contadores en 0.
    let contadorPares = 0;
    let contadorImpares = 0;

    // 2. Recorremos la lista de números.
    // Usamos un bucle 'for...of' que coge cada elemento de la lista uno a uno.
    for (let numero of listaNumeros) {
        
        // 3. Evaluamos si el número es par o impar.
        // El operador '%' nos da el resto de una división. 
        // Si al dividir entre 2 el resto es exactamente (===) 0, es par.
        if (numero % 2 === 0) {
            
            // Lo metemos en nuestra caja (array) de números pares.
            pares.push(numero);
            
            // Sumamos 1 al contador de pares.
            contadorPares++;
            
        } else {
            
            // Si el resto no es 0, significa que el número es impar.
            // Lo metemos en nuestra caja (array) de números impares.
            impares.push(numero);
            
            // Sumamos 1 al contador de impares.
            contadorImpares++;
        }
    }

    // 4. Mostramos los resultados por pantalla (en la consola).
    // Usamos console.log y las comillas invertidas (backticks ``) para poder 
    // meter variables directamente en el texto usando ${variable}.
    console.log(`--- RESULTADOS ---`);
    console.log(`Total de números PARES encontrados: ${contadorPares}`);
    console.log(`Lista de pares:`, pares);
    
    console.log(`Total de números IMPARES encontrados: ${contadorImpares}`);
    console.log(`Lista de impares:`, impares);
}

// ==========================================
// PRUEBA DEL CÓDIGO
// ==========================================

// Creamos una lista de números de prueba mezclados
const misNumeros = [12, 5, 8, 13, 21, 44, 100, 3, 7];

// Llamamos a la función y le pasamos nuestra lista
clasificarParesEImpares(misNumeros);