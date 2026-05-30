/*
Tus Misiones (Crea una función para cada una):

    hacerPedido(id, cantidad): Busca el producto por su id usando .find(). 
    Si hay suficiente stock, réstale la cantidad pedida y muestra un mensaje 
    de éxito. Si no hay stock o piden más de lo que hay, avisa con un console.log.

    filtrarPremium(): Usa .filter() para devolver un array solo con los 
    productos que cuesten más de 100€ y que además tengan stock disponible (> 0).

    valorTotalAlmacen(): Usa .reduce() para calcular cuánto dinero tiene 
    la tienda invertido en total (multiplicando el precio por el stock de cada producto, y sumándolo todo).
*/
let almacen = [
    { id: 1, nombre: "Bujía", precio: 15, stock: 50 },
    { id: 2, nombre: "Neumático", precio: 120, stock: 20 },
    { id: 3, nombre: "Aceite Motor", precio: 45, stock: 0 },
    { id: 4, nombre: "Batería", precio: 150, stock: 10 }
];

function hacerPedido(id, cantidad) {
    let producto = almacen.find(p => p.id === id)
    if (!producto) return console.log("Producto no encontrado")
    if (producto.stock >= cantidad) {
        producto.stock -= cantidad
        console.log("Has comprado el producto con éxito.")
    } else {
        console.log("No hay stock")
    }
}
function filtrarPremium() {
    let productosPremium = almacen.filter(p => p.precio > 100 && p.stock > 0)

    if (productosPremium.length <= 0) {
        return console.log("No hay productos premium.")
    } 
    return productosPremium
}
function valorTotalAlmacen() {
    let valorTotal = almacen.reduce((acc, producto) => {
        acc += producto.precio * producto.stock
        return acc
    }, 0)

    return valorTotal
}

hacerPedido(10, 2)
console.log(filtrarPremium())
console.log("Valor total en el almacen: ", valorTotalAlmacen(), "€")