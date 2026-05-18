// MANEJO DE ERRORES (try...catch)
// "Intenta hacer esto. Si explota, captura el error y haz esto otro en lugar de parar el programa."

try {
    // Código que CREEMOS que puede fallar
    console.log("Intentando ejecutar un código peligroso...");
    
    // Me invento una variable que no existe para forzar un error
    let resultado = variableQueNoExiste * 2; 
    
    console.log("Esto nunca se imprimirá porque arriba hay un error");

} catch (error) {
    // Si algo falla en el "try", el programa salta automáticamente aquí
    // "error" es un objeto que contiene los detalles de lo que salió mal
    console.log("¡Ups! Algo ha fallado, pero el programa sigue vivo.");
    console.log("El error exacto es:", error.message);
}

console.log("El programa continúa por aquí con total normalidad...");