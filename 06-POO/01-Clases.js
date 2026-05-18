"use strict"
// CLASES: El molde para fabricar objetos

class Jugador {
    //1. EL CONSTRUCTOR: Lo que necesita el objeto al nacer
    constructor(nombreInicial) {
        // La palabra "this" significa "de este objeto en concreto"
        // Le estamos diciendo: "La propiedad nombre de ESTE jugador será el nombreInicial que me pasen"
        this.nombre = nombreInicial
        this.puntos = 0 //Por defecto, todo el mundo empieza con 0 puntos
    }

    // 2. MÉTODOS: Las "habilidades" del objeto
    sumarPuntos(cantidad){
        this.puntos += cantidad //Sumamos la cantidad a los puntos actuales
    }

    mostrarInformacion(){
        console.log(`Jugador: ${this.nombre} | Puntuación: ${this.puntos}`)
    }
}

let jugador1 = new Jugador("Nuria")
let jugador2 = new Jugador("Carlos")

jugador1.sumarPuntos(10)
jugador2.sumarPuntos(5)

jugador1.mostrarInformacion()
jugador2.mostrarInformacion()