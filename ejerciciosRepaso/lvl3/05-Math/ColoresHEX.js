function colorAleatorio() {
    // Genera un número gigante aleatorio, lo pasa a Hexadecimal y corta 6 caracteres
    return "#" + Math.random().toString(16).slice(2, 8).toUpperCase();
}