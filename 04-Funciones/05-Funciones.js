// FUNCIONES Y RETURN
// 1. Función Tradicional
// Se declara con la palabra "function". Es la de toda la vida.
function saludar(nombre) {
    return `Hola ${nombre}`; // El return saca el valor hacia fuera
}


// 2. Función Flecha (Arrow Function)
// Es más moderna y corta. Se guarda en una variable.
const despedir = (nombre) => {
    return `Adiós ${nombre}`;
};

// 3. Función Flecha de una sola línea (Retorno Implícito)
// ¡MAGIA! Si tu función solo tiene una línea, puedes quitar las llaves {} 
// y la palabra "return". Lo hace automáticamente.
const multiplicar = (a, b) => a * b;

// ⚠️ EL PODER DEL RETURN
// El "return" hace dos cosas:
// 1. Devuelve el resultado.
// 2. DESTRUYE la función. Cualquier código que pongas por debajo de un return NUNCA se ejecutará.

function comprobarEdad(edad) {
    if (edad >= 18) {
        return "Eres mayor de edad"; 
        // Si entra aquí, la función se acaba en esta línea.
    }
    return "Eres menor"; // Funciona como un "else" automático
}