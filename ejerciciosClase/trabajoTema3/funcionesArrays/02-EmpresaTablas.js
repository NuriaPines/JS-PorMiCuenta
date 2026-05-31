/**
 * EJERCICIO DE UNIFICACIÓN DE TABLAS (JOIN RELACIONAL)
 * --------------------------------------------------------------------------
 */

// 1. SIMULACIÓN DE LA BASE DE DATOS (Las dos tablas)

const tablaClientes = [
    { idCliente: 1, nombre: "Nuria Pinés", poblacion: "Rivas-Vaciamadrid" },
    { idCliente: 2, nombre: "Javier Pinel", poblacion: "Madrid" },
    { idCliente: 3, nombre: "Marco Martínez", poblacion: "Alcalá de Henares" }
];

const tablaCompras = [
    // Nuria ha hecho dos compras (ej: un coche y un alquiler)
    { idCompra: 101, idClienteCompra: 1, precioTotal: 15000 },
    { idCompra: 102, idClienteCompra: 1, precioTotal: 250 },
    
    // Javier ha hecho una compra
    { idCompra: 103, idClienteCompra: 2, precioTotal: 30000 },
    
    // Marco ha hecho dos compras (ej: accesorios o mantenimientos)
    { idCompra: 104, idClienteCompra: 3, precioTotal: 1200 },
    { idCompra: 105, idClienteCompra: 3, precioTotal: 50 }
];


// 2. FUNCIÓN DE UNIFICACIÓN
function unificarDatos(clientes, compras) {
    
    // Usamos .map() para recorrer cada cliente y transformarlo en un nuevo objeto
    // que contendrá su información original + la suma de sus compras.
    const clientesUnificados = clientes.map(cliente => {
        
        // A. FILTRAR LAS COMPRAS DE ESTE CLIENTE CONCRETO
        // Buscamos en la tabla de compras todas las que coincidan con su ID
        const susCompras = compras.filter(compra => compra.idClienteCompra === cliente.idCliente);
        
        // B. SUMAR EL PRECIO DE ESAS COMPRAS
        // Usamos .reduce() empezando en 0€ para acumular el precioTotal
        const totalGastado = susCompras.reduce((acumulador, compraActual) => {
            return acumulador + compraActual.precioTotal;
        }, 0);

        // C. DEVOLVER EL REGISTRO UNIFICADO
        // Creamos el nuevo objeto juntando la info del cliente (...cliente) 
        // y añadiendo la nueva propiedad calculada.
        return {
            ...cliente, // Esto copia idCliente, nombre y poblacion
            totalCompras: totalGastado
        };
    });

    return clientesUnificados;
}


// ==========================================
// PRUEBAS DEL SISTEMA
// ==========================================

console.log("--- CRUZANDO TABLAS DE LA BASE DE DATOS ---");

const resultadoFinal = unificarDatos(tablaClientes, tablaCompras);

// console.table() es un método brutal de la consola que coge un array de objetos 
// y te lo dibuja como una tabla perfecta de Excel. ¡Ideal para este ejercicio!
console.table(resultadoFinal);