/**
 * Función que calcula el área de diversas figuras geométricas.
 * * ESTRUCTURA ESPERADA DEL OBJETO 'datos' SEGÚN LA FIGURA:
 * * - circulo:    { tipo: "circulo", radio: 5 }
 * - elipse:     { tipo: "elipse", semiejeA: 4, semiejeB: 2 }
 * - cuadrado:   { tipo: "cuadrado", lado: 4 }
 * - rectangulo: { tipo: "rectangulo", base: 10, altura: 5 }
 * - triangulo:  { tipo: "triangulo", base: 10, altura: 5 }
 * - poligono:   { tipo: "poligono", numLados: 5, longitudLado: 6, apotema: 4.1 }
 */
function areas(datos) {
    
    // 1. Validación inicial
    if (!datos || typeof datos.tipo !== 'string') {
        console.log("❌ Error: Se requiere un objeto con la propiedad 'tipo'.");
        return -1;
    }

    let area = 0;
    
    // Normalizamos el tipo a minúsculas para que no falle si pasan "Cuadrado" o "CUADRADO"
    const figura = datos.tipo.toLowerCase();

    // 2. El Router Geométrico (Switch)
    switch (figura) {
        
        case "circulo":
            // Fórmula: A = π * r²
            area = Math.PI * Math.pow(datos.radio, 2);
            break;
            
        case "elipse":
            // Fórmula: A = π * a * b
            area = Math.PI * datos.semiejeA * datos.semiejeB;
            break;
            
        case "cuadrado":
            // Fórmula: A = l²
            area = Math.pow(datos.lado, 2);
            break;
            
        case "rectangulo":
            // Fórmula: A = b * h
            area = datos.base * datos.altura;
            break;
            
        case "triangulo":
            // Fórmula: A = (b * h) / 2
            area = (datos.base * datos.altura) / 2;
            break;
            
        case "poligono":
            // Fórmula Polígono Regular: A = (Perímetro * apotema) / 2
            const perimetro = datos.numLados * datos.longitudLado;
            area = (perimetro * datos.apotema) / 2;
            break;
            
        default:
            console.log(`⚠️ Figura no reconocida: ${figura}`);
            return -1;
    }

    // 3. Formateo de Cifras Significativas
    // .toPrecision(6) devuelve un texto (ej: "78.5398" o "16.0000").
    // Al envolverlo en Number(), lo volvemos a pasar a número y JS elimina
    // automáticamente los ceros a la derecha innecesarios si la cifra era exacta.
    const areaFinal = Number(area.toPrecision(6));
    
    console.log(`✅ Área del ${figura}: ${areaFinal}`);
    return areaFinal;
}

// ==========================================
// PRUEBAS DEL CÓDIGO
// ==========================================

console.log("--- CALCULADORA GEOMÉTRICA ---");

// Prueba 1: Círculo (Dará muchos decimales por Pi, el toPrecision lo cortará a 6 cifras)
areas({ tipo: "circulo", radio: 5 });

// Prueba 2: Cuadrado (Resultado exacto 16, el Number() borrará los ceros extra)
areas({ tipo: "cuadrado", lado: 4 });

// Prueba 3: Triángulo
areas({ tipo: "triangulo", base: 10, altura: 5 });

// Prueba 4: Polígono regular (ej: un pentágono)
areas({ tipo: "poligono", numLados: 5, longitudLado: 6, apotema: 4.13 });

// Prueba 5: Elipse
areas({ tipo: "elipse", semiejeA: 4, semiejeB: 2 });