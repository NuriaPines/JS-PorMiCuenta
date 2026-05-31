/**
 * SISTEMA DE GESTIÓN DE INVENTARIO
 * --------------------------------------------------------------------------
 */

// Nuestra "Base de Datos" principal (Array de objetos)
let inventario = [];


// ==========================================
// 1. AÑADIR PRODUCTO
// ==========================================
function anadirProducto(id, nombre, precio, stock) {
    // La disponibilidad es un booleano que se calcula automáticamente
    const estaDisponible = stock > 0;

    const nuevoProducto = {
        id: id,
        nombre: nombre,
        precio: precio,
        stock: stock,
        disponibilidad: estaDisponible
    };

    inventario.push(nuevoProducto);
    console.log(`✅ Producto añadido: [${id}] ${nombre}`);
}


// ==========================================
// 2. ELIMINAR PRODUCTO
// ==========================================
function eliminarProducto(id) {
    // Usamos .filter() para quedarnos con todos los productos MENOS el que queremos borrar.
    // Al reasignar el array original (inventario = ...), lo eliminamos efectivamente.
    const tamanoAntes = inventario.length;
    inventario = inventario.filter(producto => producto.id !== id);
    
    if (inventario.length < tamanoAntes) {
        console.log(`🗑️ Producto con ID ${id} eliminado del sistema.`);
    } else {
        console.log(`⚠️ No se encontró ningún producto con ID ${id} para eliminar.`);
    }
}


// ==========================================
// 3. HACER PEDIDO (Actualizar Stock)
// ==========================================
function hacerPedido(id, cantidadComprada) {
    // Buscamos el producto exacto con .find()
    const producto = inventario.find(p => p.id === id);

    if (!producto) {
        return console.log(`❌ Error: Producto con ID ${id} no encontrado.`);
    }

    if (producto.stock >= cantidadComprada) {
        // Restamos el stock
        producto.stock -= cantidadComprada;
        // Re-evaluamos la disponibilidad de forma dinámica
        producto.disponibilidad = producto.stock > 0;
        
        console.log(`📦 Pedido realizado: ${cantidadComprada}x ${producto.nombre}. Stock restante: ${producto.stock}`);
    } else {
        console.log(`❌ Error: Stock insuficiente para ${producto.nombre}. Solicitado: ${cantidadComprada}, Disponible: ${producto.stock}`);
    }
}


// ==========================================
// 4. FILTRAR PRODUCTOS (> 100€ Y DISPONIBLES)
// ==========================================
function filtrarProductosPremiumDisponibles() {
    // Usamos .filter() con una condición doble (&&)
    const filtrados = inventario.filter(producto => 
        producto.precio > 100 && producto.disponibilidad === true
    );
    
    console.log(`\n🔍 Productos Premium (>100€) en stock:`, filtrados);
    return filtrados;
}


// ==========================================
// 5. CALCULAR PRECIO TOTAL (Stock valorado)
// ==========================================
function calcularValor(id = null) {
    // Si nos pasan un ID, calculamos el valor de ese producto en concreto
    if (id) {
        const producto = inventario.find(p => p.id === id);
        if (producto) {
            const valorProducto = producto.precio * producto.stock;
            console.log(`💰 Valor en almacén de '${producto.nombre}': ${valorProducto}€`);
            return valorProducto;
        }
        return 0;
    } 
    // Si no nos pasan ID (null), usamos REDUCE para sumar el valor de TODO el almacén
    else {
        const valorTotal = inventario.reduce((acumulador, producto) => {
            return acumulador + (producto.precio * producto.stock);
        }, 0); // <-- Empezamos a contar desde 0€
        
        console.log(`💰 Valor TOTAL del inventario: ${valorTotal}€`);
        return valorTotal;
    }
}


// ==========================================
// 6. MOSTRAR NOMBRES EN MAYÚSCULAS POR PRECIO
// ==========================================
function nombresMayusculasPorPrecio(precioMinimo) {
    // Aquí encadenamos FILTER (para discriminar por precio) y MAP (para transformar a texto)
    const nombresExtraidos = inventario
        .filter(producto => producto.precio > precioMinimo)
        .map(producto => producto.nombre.toUpperCase());
        
    console.log(`\n🏷️ Nombres de productos que superan los ${precioMinimo}€:`, nombresExtraidos);
    return nombresExtraidos;
}


// ==========================================
// PRUEBAS DEL SISTEMA COMPLETO
// ==========================================

console.log("--- INICIANDO SISTEMA DE TIENDA ONLINE ---");

// 1. Añadimos productos
anadirProducto(101, "Monitor 4K", 250, 10);
anadirProducto(102, "Teclado Mecánico", 85, 15);
anadirProducto(103, "Ratón Inalámbrico", 45, 0); // Sin stock
anadirProducto(104, "Silla Ergonómica", 180, 5);
anadirProducto(105, "Auriculares Bluetooth", 120, 8);

// 2. Eliminamos un producto
console.log("\n--- ELIMINANDO PRODUCTO ---");
eliminarProducto(102);

// 3. Hacemos pedidos (Modificando el stock y la disponibilidad)
console.log("\n--- GESTIONANDO PEDIDOS ---");
hacerPedido(101, 2); // Debería bajar a 8
hacerPedido(104, 5); // Agota el stock (baja a 0 y disponibilidad pasa a false)
hacerPedido(104, 1); // Debería dar error de stock

// 4. Filtramos productos Premium disponibles
filtrarProductosPremiumDisponibles();

// 5. Calculamos el valor del inventario
console.log("\n--- CÁLCULO DE VALORACIÓN ---");
calcularValor(101); // Valor solo del monitor
calcularValor();    // Valor de toda la tienda

// 6. Nombres en mayúsculas
nombresMayusculasPorPrecio(100);