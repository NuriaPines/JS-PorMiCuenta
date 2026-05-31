/**
 * 1. FUNCIÓN AUXILIAR (La que hicimos en el ejercicio 2)
 * Se encarga ÚNICAMENTE de decirnos si un número concreto es primo (true) o no (false).
 * Le he añadido el truquito de la raíz cuadrada (Math.sqrt) para que sea súper rápida.
 */
function esPrimo(numero) {
    if (numero <= 1) return false;
    
    // Solo necesitamos comprobar divisores hasta la raíz cuadrada del número
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

/**
 * 2. FUNCIÓN PRINCIPAL: Contador de números primos
 * Recibe el número límite hasta el cual queremos buscar.
 */
function contadorDePrimos(limite) {
    
    // Preparamos un array vacío para guardar los números primos que vayamos encontrando.
    const primosEncontrados = [];

    // Comprobamos que el usuario no haya introducido un número menor que 2
    if (limite < 2) {
        console.log(`No hay números primos menores o iguales a ${limite}.`);
        return; // Salimos de la función temprano
    }

    // Iniciamos un bucle que empieza en 2 y termina cuando llegue al número 'limite'.
    for (let i = 2; i <= limite; i++) {
        
        // Aquí ocurre la magia: llamamos a nuestra función auxiliar para evaluar 'i'.
        // Si 'esPrimo(i)' devuelve true, entramos en el 'if'.
        if (esPrimo(i)) {
            
            // Como es primo, lo metemos en nuestra lista (array).
            primosEncontrados.push(i);
        }
    }

    // Una vez terminado el bucle, mostramos los resultados por pantalla.
    // La propiedad '.length' de un array nos dice exactamente cuántos elementos tiene dentro.
    console.log(`--- RESULTADOS HASTA EL NÚMERO ${limite} ---`);
    console.log(`Total de números primos encontrados: ${primosEncontrados.length}`);
    console.log(`Lista de números primos:`, primosEncontrados);
}

// ==========================================
// PRUEBAS DEL CÓDIGO
// ==========================================

// Vamos a buscar todos los primos desde el 2 hasta el 20
contadorDePrimos(20);

// Vamos a buscar los primos hasta el 50 para ver cómo crece
contadorDePrimos(50);