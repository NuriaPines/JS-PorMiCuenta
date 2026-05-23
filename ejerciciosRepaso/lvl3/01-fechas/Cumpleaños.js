/*
El Reto: ¿Cuántos días quedan para tu cumpleaños?

Tienes que crear una función diasParaCumple(mes, dia) que:
    Reciba el mes y el día de tu cumpleaños.
    Calcule exactamente cuántos días faltan desde HOY hasta esa fecha.
*/
"use strict"

function diasParaCumple(mes, dia) {
    let hoy = new Date()
    let mesVariable = mes
    if (typeof(mes) == 'string'){
        let nombreMeses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
        mesVariable = nombreMeses.indexOf(mes.toLowerCase())
    } else {
        mesVariable -= 1
    }
    
    let cumple = new Date(hoy.getFullYear(),mesVariable,dia)

    if (cumple.getDate() === hoy.getDate() && cumple.getMonth() === hoy.getMonth() && cumple.getFullYear() === hoy.getFullYear()){
        console.log('FELICIDADES, ES HOY TU CUMPLEAÑOS')
        return
    }

    if (cumple < hoy){
        cumple.setFullYear(hoy.getFullYear() + 1)
    }

    let dias = cumple - hoy
    dias = dias / 1000
    dias = dias / 60
    dias = dias / 60
    dias = dias / 24
    dias = Math.ceil(dias)
    console.log(`Quedan ${dias} días para tu cumpleaños.`);

}

diasParaCumple(7,20)
diasParaCumple('Julio',20)