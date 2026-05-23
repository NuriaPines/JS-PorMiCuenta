let texto = "Este es un texto de prueba.";

console.log("Longuitud del texto : " + texto.length);

console.log("Carácter en la posicion 5 : " + texto.charAt(5));

console.log("Carácter (UNICODE) en la posicion 5 : " + texto.charCodeAt(5));


let otro_texto = " Vamos a concatenar este texto a nuestras palabras.";

let frase = texto.concat(otro_texto);

console.log(frase);


console.log("Indice de primera ocurrencia : " + frase.indexOf("texto"));

//BUSCA A PARTIR DE INDICE = 16
console.log("Indice de primera ocurrencia : " + frase.indexOf("texto", 16)); 



console.log("Indice de última ocurrencia : " + frase.lastIndexOf("texto"));

//BUSCA A PARTIR DE INDICE = 10 PERO HACIA INDICE 0
console.log("Indice de última ocurrencia : " + frase.lastIndexOf("texto", 10)); 


console.log("Texto de 5 a 17 : " + frase.substring(5,17));

console.log("Texto de 5 a 17 : " + frase.slice(5,17));      //slice puede usar indices negativos


console.log(frase.toUpperCase());

console.log(frase.toLowerCase());


let nueva_frase = frase.replace("texto", "cesto");

console.log(nueva_frase);

nueva_frase = nueva_frase.toLowerCase().replaceAll("este", "aquel");

console.log(nueva_frase);


let palabras = frase.split(" ");    

console.log(palabras);


palabras = frase.split(" ", 5);    //parámetro opcional que marca la longuitud

console.log(palabras);



console.log("-".repeat(20));
console.log(frase.repeat(3));


//BUSCA LA PRIMERA COINCIDENCIA Y TE DA EL INDICE
console.log(frase.search(/\b\w{7,}\b/));     //PERMITE EL USO DE EXPRESIONES REGULARES

    //  \b          límite de palabra
    //  \w{7,}      7 caracteres o más



//BUSCA TODAS LAS COINCIDENCIAS Y TE DA LAS PALABRAS
console.log(frase.match(/\b\w{7,}\b/g));        //g para obtener todas las coincidencias

