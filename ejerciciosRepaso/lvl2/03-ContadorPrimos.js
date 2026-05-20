/*
3. Contador de números primos.
El Reto
Crea una función contarPrimos(n) que:
    Reciba un número entero n.
    Calcule cuántos números primos hay desde el 2 hasta ese número n (incluyéndolo).
    Muestre por pantalla esos números primos.
    Devuelva la cantidad total de números primos encontrados.
*/

// 1. Reutilizamos tu función esPrimo (esta ya funciona genial)
function esPrimo(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// 2. La función que cuenta
function contarPrimos(num) {
    let numerosPrimos = [];
    
    for (let i = 2; i <= num; i++) {
        // Llamamos a la otra función para preguntar por i
        if (esPrimo(i)) {
            numerosPrimos.push(i);
        }
    }

    console.log('Array: ', numerosPrimos);
    console.log('Total Encontrados: ', numerosPrimos.length);
}

contarPrimos(20);