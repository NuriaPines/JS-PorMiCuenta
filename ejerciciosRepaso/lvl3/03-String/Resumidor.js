let texto = "Hola que tal estás, me llamo Nuria.                                                              ¿Tú que tal estás?. Te escribo para decirte que me gusta como trabajas, Tenemos una reunión para que vendamos algo."

function palabraMasRepetida(texto) {
    let textoLimpio = texto.toLocaleLowerCase().replaceAll('á', 'a').replaceAll('é','e').replaceAll('í','i').replaceAll('ó','o').replaceAll('ú','u')
    textoLimpio = textoLimpio.replaceAll('?','').replaceAll('¿','').replaceAll('.','').replaceAll(':','').replaceAll(';','').replaceAll(',','').replaceAll('¡','').replaceAll('!','').replaceAll('(','').replaceAll(')','').replaceAll('"','').replaceAll("'",'')
    let repetidas = new Map()
    let palabras = textoLimpio.split(" ");
    

    palabras.forEach(palabra => {
        if (palabra.trim() === "") return; // Si la palabra está vacía (un espacio suelto), nos la saltamos
        
        if (repetidas.has(palabra)) {
            repetidas.set(palabra, repetidas.get(palabra) + 1)
        } else {
            repetidas.set(palabra, 1)
        }
    });

    console.log(repetidas)
    let array = Array.from(repetidas)
    array.sort((a,b) => b[1] - a[1])
    array = array.slice(0,10)

    console.log(array)

}

palabraMasRepetida(texto)