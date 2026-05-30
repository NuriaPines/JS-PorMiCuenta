/*
Tu Misión:
Crear un objeto literal llamado calculadora que tenga por dentro 3 funciones para calcular áreas:

    cuadrado(lado): Devuelve el área de un cuadrado (lado * lado).

    triangulo(base, altura): Devuelve el área de un triángulo ((base * altura) / 2).

    circulo(radio): Devuelve el área de un círculo.
        Pista: Aquí vas a usar el objeto global Math por primera vez. Para el número Pi, usa 
        Math.PI, y para elevar al cuadrado, usa Math.pow(radio, 2) o simplemente radio * radio.
 */

// Reto: Calculadora de Áreas

const calculadora = {
    // 1. Método cuadrado: Lado por lado
    cuadrado: function(lado) {
        return lado * lado;
    },

    // 2. Método triangulo: Base por altura dividido entre 2
    triangulo: function(base, altura) {
        return (base * altura) / 2;
    },

    // 3. Método circulo: Pi por el radio al cuadrado
    circulo: function(radio) {
        // Usamos Math.PI para el valor exacto de Pi
        // Usamos Math.pow(radio, 2) para elevar el radio al cuadrado
        return Math.PI * Math.pow(radio, 2);
    }
};

// Pruebas para comprobar que funciona como un reloj
console.log("Área del cuadrado (lado 5):", calculadora.cuadrado(5)); 
// Resultado: 25

console.log("Área del triángulo (b:10, a:5):", calculadora.triangulo(10, 5)); 
// Resultado: 25

console.log("Área del círculo (radio 3):", calculadora.circulo(3).toFixed(2)); 
// Resultado: 28.27 (He añadido .toFixed(2) para que no salgan infinitos decimales)