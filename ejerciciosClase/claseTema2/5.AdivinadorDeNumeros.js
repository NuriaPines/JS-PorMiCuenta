/**
 * Función que recibe un número objetivo (del 1 al 100) 
 * y cuenta cuántos intentos aleatorios cuesta adivinarlo.
 */
function adivinarNumero(numeroObjetivo) {
    
    // 1. Validamos que el número introducido cumple las reglas del juego.
    // Si es menor que 1 o mayor que 100, mostramos un error y salimos de la función.
    if (numeroObjetivo < 1 || numeroObjetivo > 100) {
        console.log(`Error: El número ${numeroObjetivo} no es válido. Debe estar entre 1 y 100.`);
        return; 
    }

    // 2. Preparamos nuestras variables iniciales.
    // 'intentos' llevará la cuenta de las veces que la máquina ha probado un número.
    let intentos = 0;
    
    // 'numeroGenerado' guardará el intento actual. Lo empezamos en 0 porque 
    // sabemos que nuestro rango es del 1 al 100, así evitamos ganar sin jugar.
    let numeroGenerado = 0;

    console.log(`--- EMPIEZA EL JUEGO ---`);
    console.log(`El número a adivinar es: ${numeroObjetivo}`);

    // 3. Iniciamos el bucle 'while'.
    // Se lee así: "Mientras el numeroGenerado NO sea igual (!==) al numeroObjetivo..."
    while (numeroGenerado !== numeroObjetivo) {
        
        // Sumamos 1 al contador porque estamos haciendo un nuevo intento.
        intentos++;

        // Usamos la fórmula del ejercicio 4 para generar un número del 1 al 100.
        // Math.floor(Math.random() * (max - min + 1)) + min;
        numeroGenerado = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
        
        // El bucle volverá a subir a la línea del 'while' para comprobar 
        // si este nuevo 'numeroGenerado' ha acertado o no.
    }

    // 4. Si el código llega hasta aquí, significa que el bucle 'while' ha terminado.
    // Y la única forma de que termine es que numeroGenerado y numeroObjetivo sean iguales.
    console.log(`¡Bingo! La máquina ha adivinado el número ${numeroObjetivo}.`);
    console.log(`Ha necesitado un total de **${intentos}** intentos.`);
}

// ==========================================
// PRUEBAS DEL CÓDIGO
// ==========================================

// Probamos con un número dentro del rango
adivinarNumero(42);

// Volvemos a probar con otro para ver cómo varían los intentos
adivinarNumero(7);

// Probamos con un número fuera de rango para comprobar que la validación funciona
adivinarNumero(150);