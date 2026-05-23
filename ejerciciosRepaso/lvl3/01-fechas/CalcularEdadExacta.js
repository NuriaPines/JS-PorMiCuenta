/*
Crear una función calcularEdadExacta(fechaNacimiento) que reciba un String (ej: "2000-11-02"), 
cree un objeto Date con esa fecha, otro con la fecha de hoy, y calcule cuántos años, meses y 
días de vida tiene esa persona a día de hoy.
*/


function calcularEdadExacta(fechaNacimiento) {
    let cumple = new Date(fechaNacimiento)
    let hoy = new Date()

    let diaCumple = cumple.getDate()
    let mesCumple = cumple.getMonth()
    let añoCumple = cumple.getFullYear()

    let diaHoy = hoy.getDate()
    let mesHoy = hoy.getMonth()
    let añoHoy = hoy.getFullYear()

    console.log(`Cumple ${diaCumple}/${mesCumple}/${añoCumple}`)
    console.log(`Hoy ${diaHoy}/${mesHoy + 1}/${añoHoy}`)

    //CALCULAMOS EDAD
    let annios = añoHoy - añoCumple
    let meses = mesHoy - mesCumple
    let dias = diaHoy - diaCumple

    //SOLUCION NUMEROS NEGATIVOS
    if (dias < 0){
        meses--
        dias += new Date(añoHoy, mesHoy, 0).getDate()
    }

    if (meses < 0){
        annios--
        meses += 12
    }

    //RESULTADO
    console.log(`Tienes ${annios} años, ${meses} meses y ${dias} días`)
}

calcularEdadExacta("2006-07-20")