//Manejo de errores
try
{
    let resultado = 10 / 0;     //Provoca un error
    if (!isFinite(resultado))   //isNaN() isInteger() isString() isNumber()
    {
        throw new Error("División por cero no permitida");
    }
    console.log("Resultado: " + resultado);
}
catch (error)   //se captura el error y se trata, lo que hace que el programa no se detenga
{
    console.error("Se produjo un error: " + error.message);
}
finally     //se ejecuta siempre, haya o no error
{
    console.log("Bloque finally ejecutado");
}

//Podemos lanzar errores personalizados
throw new Error("Este es un error personalizado");