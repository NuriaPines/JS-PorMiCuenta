console.log(isFinite(34.5345));

let infinito = Infinity;

console.log(isFinite(infinito));


console.log(isNaN(34));
console.log(isNaN(true));       //TOMA A LOS BOOLEANOS COMO NUMÉRICOS
console.log(isNaN("Hola"));

let noNumero = NaN;


console.log(Number(true));
console.log(Number(false));



let sinAsignar;
let undef = undefined;

console.log(sinAsignar + "  :  " + undef);



console.log(parseFloat("23.235423"));

console.log(parseInt("43.234"));

console.log(String(2323.123123));





let url = "https://example.com/consulta?nombre=Juan Pérez&edad=30";
let urlCodificada = encodeURI(url);

console.log(urlCodificada);




let nombre = "Juan Pérez & Compañía";
let edad = 30;

let nombreCodificado = encodeURIComponent(nombre);
let edadCodificado = encodeURIComponent(edad);

url = `https://example.com/consulta?nombre=${nombreCodificado}&edad=${edadCodificado}`;
console.log(url);





urlCodificada = "https://example.com/consulta?nombre=Juan%20P%C3%A9rez&edad=30";
let urlDecodificada = decodeURI(urlCodificada);

console.log(urlDecodificada);




nombreCodificado = "Juan%20P%C3%A9rez%20%26%20Compa%C3%B1%C3%ADa";
let nombreDecodificado = decodeURIComponent(nombreCodificado);

console.log(nombreDecodificado);



const suma = "2 + 3 * 4";
console.log(eval(suma)); // 14

const variable = "let x = 10; x * 2;";
console.log(eval(variable)); // 20



