let fecha = new Date("2006-08-12");
console.log(fecha);

fecha = new Date();
console.log(fecha);

console.log(fecha.getDate());
console.log(fecha.getMonth());
console.log(fecha.getFullYear());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());

console.log(fecha.getDay());

fecha.setDate(1);
fecha.setMonth(0);
fecha.setFullYear(2999);
fecha.setHours(1);
fecha.setMinutes(1);
fecha.setSeconds(1);
fecha.setMilliseconds(1);

console.log(fecha);


fecha.setTime(0);

console.log(fecha);     //PORQUE ESTA FECHA ?


fecha = new Date();

fecha.toString();
console.log(fecha + " hola");

let fecha2 = fecha.toDateString();
console.log(fecha2);

fecha2 = fecha.toTimeString();
console.log(fecha2);

fecha2 = fecha.toLocaleDateString();
console.log(fecha2);

fecha2 = fecha.toLocaleTimeString();
console.log(fecha2);



// SET TIME OUT   Y  SET INTERVAL
console.log("Inicio del programa...");

setTimeout(() => {
  console.log("Han pasado 3 segundos");
}, 3000);

console.log("Fin del programa.");

/////////////

console.log("Inicio del programa...");

let temporizador = setTimeout(() => {
  console.log("Han pasado 3 segundos");
}, 3000);

clearTimeout(temporizador);     //DETIENE EL TEMPORIZADOR

console.log("Fin del programa.");



console.log("Iniciando cuenta regresiva...");

setTimeout(() => console.log("3..."), 1000);
setTimeout(() => console.log("2..."), 2000);
setTimeout(() => console.log("1..."), 3000);
setTimeout(() => console.log("🚀 ¡Despegue!"), 4000);


//CNT + C   EN CONSOLA PARA PARAR EL PROGRAMA
setInterval(() => 
{
    console.log("Hola cada 2 segundos 👋");
}, 2000);


let contador = 5;

let intervalo = setInterval(() => {
  console.log(`⏳ Tiempo restante: ${contador}...`);
  contador--;

  if (contador < 0) 
  {
      clearInterval(intervalo);       //DETIENE EL INTERVALO
      console.log("🚀 ¡Despegue!");
  }
}, 1000);



let reloj = setInterval(() => 
{
  let ahora = new Date();
  console.log(`${ahora.getHours()}:${ahora.getMinutes()}:${ahora.getSeconds()}`);
}, 1000);
