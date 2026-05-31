function generarDescuento(min, max) {
    const numero = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return numero;
}

function tirarDado() {
    let min = 1
    let max = 12
    const numero = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return numero;
}


// Pruebas
console.log("Tirada del dado:", tirarDado()); // Debería salir un número entre 1 y 6
console.log("Tirada del dado:", tirarDado()); // Tíralo otra vez para ver que cambia

console.log("Descuento sorpresa (entre 10 y 50):", generarDescuento(10, 50)); 
console.log("Descuento sorpresa (entre 5 y 15):", generarDescuento(5, 15));