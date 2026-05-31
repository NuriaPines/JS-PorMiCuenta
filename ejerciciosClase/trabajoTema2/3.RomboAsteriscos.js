/**
 * Función que dibuja un rombo de asteriscos por consola.
 */
function dibujarRombo() {
    
    // Definimos el tamaño máximo de la mitad del rombo.
    // Con tamaño 4, la fila más grande tendrá 7 asteriscos.
    const tamano = 4;

    console.log("--- DIBUJANDO EL ROMBO ---");

    // 1. PRIMERA PARTE: Creciente (De arriba hasta el centro)
    // El bucle va desde 1 hasta 4 (las primeras 4 líneas)
    for (let i = 1; i <= tamano; i++) {
        
        // Calculamos los espacios necesarios para que quede centrado.
        // Si el tamaño es 4 y estamos en la fila 1, necesitamos 3 espacios (4-1).
        // El método .repeat() coge un texto y lo repite 'x' veces. ¡Súper útil!
        let espacios = " ".repeat(tamano - i);
        
        // Calculamos cuántos asteriscos tocan. 
        // La fórmula (i * 2) - 1 nos da siempre números impares (1, 3, 5, 7).
        let asteriscos = "*".repeat((i * 2) - 1);
        
        // Juntamos los espacios y los asteriscos y lo imprimimos
        console.log(espacios + asteriscos);
    }

    // 2. SEGUNDA PARTE: Decreciente (Desde debajo del centro hasta el final)
    // Este bucle es al revés. Empezamos en 'tamano - 1' (3) y bajamos hasta 1.
    for (let i = tamano - 1; i >= 1; i--) {
        
        // La lógica matemática es exactamente la misma que arriba.
        // Al ir el bucle marcha atrás (3, 2, 1), los espacios crecen y los asteriscos bajan.
        let espacios = " ".repeat(tamano - i);
        let asteriscos = "*".repeat((i * 2) - 1);
        
        console.log(espacios + asteriscos);
    }
}

// ==========================================
// EJECUTAR EL PROGRAMA
// ==========================================

dibujarRombo();