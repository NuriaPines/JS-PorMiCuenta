// SIMULACIÓN DE CLASE ABSTRACTA
class EmpleadoAbstracto {
    constructor(nombre) {
        // Bloqueo de seguridad: Si intentan hacer 'new EmpleadoAbstracto()', explota.
        if (new.target === EmpleadoAbstracto) {
            throw new Error("❌ No puedes instanciar una clase abstracta directamente. Debes heredar de ella.");
        }
        
        this.nombre = nombre;
    }

    // SIMULACIÓN DE MÉTODO ABSTRACTO
    // Un método que obligamos a las hijas a que lo programen ellas mismas
    calcularSueldo() {
        throw new Error("❌ Tienes que sobrescribir el método calcularSueldo() en la clase hija.");
    }
}

// CLASE HIJA REAL
class Programador extends EmpleadoAbstracto {
    constructor(nombre, lenguaje) {
        super(nombre);
        this.lenguaje = lenguaje;
    }

    // Cumplimos el contrato y programamos el método
    calcularSueldo() {
        return 2000;
    }
}

// --- PRUEBAS ---

// 1. Esto dará ERROR (Funciona como clase abstracta)
// let alguien = new EmpleadoAbstracto("Paco"); 

// 2. Esto funciona perfectamente
let dev = new Programador("Ana", "JavaScript");
console.log(dev.nombre); // "Ana"
console.log(dev.calcularSueldo()); // 2000