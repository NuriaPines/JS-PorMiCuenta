// Reto 3: Portero de discoteca
//Crear una función verificarNombre(nombre, lista) 
// que reciba un nombre (texto) y un array de nombres.
//Si el nombre ya está en la lista: La función debe devolver -1.  
//Si el nombre no está: Lo añade a la lista, ordena toda la lista alfabéticamente y devuelve el array actualizado.

let invitados = ["Elena", "Pedro", "Ana", "Miguel"];

function verificarNombre(nombre, lista) {
    /*
    for (const nombreLista of lista) {
        if (nombreLista === nombre) {
            return -1
        }
    }
    */
    if (lista.includes(nombre)) {
        return -1;
    }

    lista.push(nombre)
    lista.sort()

    return lista
}

console.log(verificarNombre("Pedro", invitados)); // Debería dar -1
console.log(verificarNombre("Zoe", invitados)); // Debería añadir a Zoe, ordenar y devolver la lista

// El Buscador de Primos.
// Tienes que crear la función localizarPrimos(lista). 
// Va a recibir un array de números mezclados y tiene 
// que devolver un array nuevo solo con los números primos 
// y ordenados de menor a mayor.
function esPrimo(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }

    return true
    
}

let numerosMezclados = [15, 2, 8, 11, 7, 24, 13, 3, 10];
/*
function localizarPrimos(lista) {
    let primosOrdenados = lista.reduce((acumulador, num) =>{
        if (esPrimo(num)){
            acumulador.push(num)
        }
        return acumulador
    }, [])

    primosOrdenados.sort((a,b) => a-b)

    return primosOrdenados
}
*/
function localizarPrimos(lista) {
    return lista.filter(esPrimo).sort((a, b) => a - b);
}

console.log(localizarPrimos(numerosMezclados)); 
// El console.log debería mostrar: [2, 3, 7, 11, 13]


// El Gestor de Registros con Límite
/*
Imagina que estás desarrollando el panel de control de NujamaMotors 
y necesitas añadir nuevos clientes a una base de datos, pero el sistema 
antiguo tiene restricciones de espacio y no admite nombres demasiado largos.

Tu misión: Crear la función addDatos(nombre, lista).
Las Reglas:
    Si el nombre ya existe en la lista, muestra un console.log avisando de 
    que ya está registrado y devuelve la lista tal cual. (¡Recicla el .includes() 
    que usaste en el reto del portero de discoteca!).
    
    Si el nombre NO existe, debes medirlo. Si tiene más de 15 caracteres, 
    tienes que "amputarle" lo que sobre para que se quede exactamente en 15 letras.
        Pista de oro: Rescata tus apuntes de Strings. Puedes usar nombre.substring(0, 15) o nombre.slice(0, 15) para cortar el texto.
    
    Añade el nombre (ya sea el original o el recortado) a la lista con 
    un .push() y devuelve el array actualizado.
*/

// Reto 5: Gestor de Registros
let clientes = ["Ana", "Pedro", "Nuria"];

function addDatos(nombre, lista) {
    // Nombre ya existe?
    if (lista.includes(nombre)){
        console.log("Usuario ya registrado")
        return lista
    } 
    /*
    //El nombre no está en la lista
    if (nombre.length > 15) {
        lista.push(nombre.slice(0,15))
    } else {
        lista.push(nombre)
    }
    */
    let nombreFinal = nombre.length > 15 ? nombre.slice(0,15) : nombre;
    lista.push(nombreFinal);

    return lista
}

console.log(addDatos("Pedro", clientes)); 
// Debería avisar y devolver: ["Ana", "Pedro", "Nuria"]

console.log(addDatos("Juan", clientes)); 
// Debería añadir y devolver: ["Ana", "Pedro", "Nuria", "Juan"]

console.log(addDatos("EstefaniaFernandezDeLaCruz", clientes)); 
// Debería recortar y devolver: ["Ana", "Pedro", "Nuria", "Juan", "EstefaniaFernan"]