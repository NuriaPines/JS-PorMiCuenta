// Reto 6: Unificar Tablas
// Crear un array nuevo donde, por cada cliente, se calcule la suma total de dinero que se ha gastado juntando todos sus pedidos.
let tablaClientes = [
    { idCliente: 1, nombre: "Ana", poblacion: "Madrid" },
    { idCliente: 2, nombre: "Pedro", poblacion: "Barcelona" },
    { idCliente: 3, nombre: "Zoe", poblacion: "Valencia" }
];

let tablaCompras = [
    { idCompra: 101, idClienteCompra: 1, precioTotal: 50 },
    { idCompra: 102, idClienteCompra: 1, precioTotal: 120 }, // Ana compra otra vez
    { idCompra: 103, idClienteCompra: 2, precioTotal: 80 },
    { idCompra: 104, idClienteCompra: 3, precioTotal: 200 },
    { idCompra: 105, idClienteCompra: 3, precioTotal: 15 }   // Zoe compra otra vez
];

function unificarTablas(clientes, compras) {
    // Paso 1: Agrupar (Tu idea original, perfecta)
    let total = clientes.map(cliente => {
        return compras.filter(compra => cliente.idCliente === compra.idClienteCompra)
    })

    // Paso 2: Sumar 
    let tablaUnificada = total.reduce((acumulador, compraPorCliente) => {
        for (const compra of compraPorCliente) {
            // Buscamos si el acumulador ya tiene un objeto con este idCliente
            let clienteGuardado = acumulador.find(item => item.idCliente === compra.idClienteCompra);

            if (clienteGuardado) {
                // Si ya lo tiene, le sumamos el precio extra al objeto de dentro del acumulador
                clienteGuardado.totalGastado += compra.precioTotal;
            } else {
                // Si no lo tiene, creamos el objeto nuevo dentro del acumulador
                acumulador.push({idCliente: compra.idClienteCompra, totalGastado: compra.precioTotal});
            }
        }
        return acumulador;
    }, [])

    return tablaUnificada;
}

console.log(unificarTablas(tablaClientes, tablaCompras));
/* El resultado esperado debería ser un array así:
[
  { idCliente: 1, totalGastado: 170 },
  { idCliente: 2, totalGastado: 80 },
  { idCliente: 3, totalGastado: 215 }
]
*/