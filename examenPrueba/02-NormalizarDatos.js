"use strict"

let datos = [
    {id: 1, categorias:["A","B"]},
    {id: 2, categorias: ["A"]},
    {id: 3, categorias: ["C", "A"]}
]

function normalizarDatos(datos) {
    
    let normalizados = datos.reduce((acc, dato) => {
        for (const categoria of dato.categorias) {
            if (acc[categoria]) {
                acc[categoria].push(dato.id)
            } else {
                acc[categoria] = [dato.id]
            }
        }

        return acc
    },{})

    console.log(normalizados)
}

normalizarDatos(datos)