/**
 * 1. FUNCIÓN DE VALIDACIÓN DE CONTRASEÑA
 * Comprueba si una contraseña cumple todos los criterios de seguridad.
 */
function validatePassword(password) {
    
    // Regla 1: Mínimo 12 caracteres
    if (password.length < 12) {
        return false;
    }

    // Variables para llevar el control de lo que vamos encontrando
    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    let hasSymbol = false;
    
    // Array clásico de símbolos permitidos
    const symbols = ['!', '@', '#', '$', '%', '&', '*', '-', '_', '+', '=', '?', '.', ','];

    // Bucle para analizar carácter a carácter
    for (let i = 0; i < password.length; i++) {
        let char = password[i];

        // --- A. DETECCIÓN DE TIPOS DE CARÁCTER ---
        if (char >= 'A' && char <= 'Z') {
            hasUpper = true;
        } else if (char >= 'a' && char <= 'z') {
            hasLower = true;
        } else if (char >= '0' && char <= '9') {
            hasNumber = true;
        } else {
            // Si no es letra ni número, comprobamos si está en nuestro array de símbolos
            for (let s = 0; s < symbols.length; s++) {
                if (char === symbols[s]) {
                    hasSymbol = true;
                    break;
                }
            }
        }

        // --- B. DETECCIÓN DE CONSECUTIVOS ---
        // Solo podemos comparar si estamos del segundo carácter en adelante
        if (i > 0) {
            let prevChar = password[i - 1];

            // Determinamos qué tipo de caracteres estamos comparando
            let isCurrentNum = (char >= '0' && char <= '9');
            let isPrevNum = (prevChar >= '0' && prevChar <= '9');

            let isCurrentLetter = (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z');
            let isPrevLetter = (prevChar >= 'A' && prevChar <= 'Z') || (prevChar >= 'a' && prevChar <= 'z');

            // Si ambos son números
            if (isCurrentNum && isPrevNum) {
                // Sacamos su valor numérico real y los restamos
                let diff = Math.abs(Number(char) - Number(prevChar));
                
                // Si la diferencia es 1 (ej: 4 y 5) o es 0 (ej: 4 y 4), son consecutivos/iguales.
                if (diff <= 1) return false; 
            }

            // Si ambos son letras
            if (isCurrentLetter && isPrevLetter) {
                // Pasamos ambas a minúsculas para que 'A' y 'b' se detecten como consecutivas
                let currentCode = char.toLowerCase().charCodeAt(0);
                let prevCode = prevChar.toLowerCase().charCodeAt(0);
                
                // Restamos su posición en el código ASCII
                let diff = Math.abs(currentCode - prevCode);
                
                // Si la diferencia es 1 ('a' y 'b') o 0 ('a' y 'a'), la contraseña es inválida
                if (diff <= 1) return false;
            }
        }
    }

    // Regla Final: Solo devolvemos true si se han cumplido TODOS los requisitos
    return hasUpper && hasLower && hasNumber && hasSymbol;
}

/**
 * 2. FUNCIÓN GENERADORA DE CONTRASEÑA
 * Crea una contraseña que garantiza pasar el validador anterior.
 */
function generatePassword() {
    
    // Preparamos nuestras "bolsas" de caracteres en Arrays
    const mayus = ['A','C','E','G','I','K','M','O','Q','S','U','W','Y']; // Saltamos letras para más seguridad
    const minus = ['a','c','e','g','i','k','m','o','q','s','u','w','y'];
    const nums = ['0','2','4','6','8','1','3','5','7','9'];
    const syms = ['!','@','#','$','%','&','*','-','_','?'];

    let password = "";

    // ESTRATEGIA INTELIGENTE: 
    // Para evitar que dos letras o dos números queden juntos y fallen la validación,
    // vamos a intercalar los tipos de caracteres: Mayúscula -> Símbolo -> Minúscula -> Número.
    // Si repetimos este patrón 3 veces, logramos 12 caracteres perfectos.

    for (let i = 0; i < 3; i++) {
        // 1. Cogemos una mayúscula aleatoria
        password += mayus[Math.floor(Math.random() * mayus.length)];
        
        // 2. Cogemos un símbolo aleatorio
        password += syms[Math.floor(Math.random() * syms.length)];
        
        // 3. Cogemos una minúscula aleatoria
        password += minus[Math.floor(Math.random() * minus.length)];
        
        // 4. Cogemos un número aleatorio
        password += nums[Math.floor(Math.random() * nums.length)];
    }

    return password;
}

// ==========================================
// CÓDIGO DE PRUEBAS (Consola)
// ==========================================

console.log("--- PROBANDO EL VALIDADOR ---");

// Pruebas que deberían FALLAR (false)
console.log("Prueba 1 (Corta):", validatePassword("Aa1!")); // false
console.log("Prueba 2 (Falta símbolo):", validatePassword("Aprobado2026XX")); // false
console.log("Prueba 3 (Números consecutivos 12):", validatePassword("PassWord!123")); // false
console.log("Prueba 4 (Letras consecutivas ab):", validatePassword("PabWord!4865")); // false
console.log("Prueba 5 (Letras repetidas ss):", validatePassword("Password!486")); // false

// Prueba que debería PASAR (true)
console.log("Prueba 6 (Correcta):", validatePassword("M!a8X-p4V#r9")); // true

console.log("\n--- PROBANDO EL GENERADOR ---");

// Generamos 3 contraseñas y verificamos si nuestro propio validador las acepta
for(let i = 1; i <= 3; i++) {
    let nuevaPass = generatePassword();
    let esValida = validatePassword(nuevaPass);
    console.log(`Contraseña generada ${i}: ${nuevaPass} | ¿Es segura?: ${esValida}`);
}