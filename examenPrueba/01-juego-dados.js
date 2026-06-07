"use strict"

class Jugador{
    constructor(nombre) {
        this.nombre = nombre
        this.puntos = 0
    }

    sumarPuntos(puntos){
        this.puntos += puntos
    }

    mostrarInformacion(){
        console.log(`Jugador ${this.nombre} | Puntos: ${this.puntos}`)
    }
}

class Partida{
    constructor(rondas) {
        this.rondas = rondas
        this.puntosTotales = 0

    }

    tirarDado(jugadorActual){
        let dado1 = Math.floor(Math.random() * 6) + 1
        let dado2 = Math.floor(Math.random() * 6) + 1
        let puntos = dado1 + dado2
        return puntos
    }

    analizarTirada(num, indexActual, jugadores){
        let jugadorActual = jugadores[indexActual]
        if (num == 7){
            this.pierdePuntos(5, jugadorActual) //EL jugador actual pierde 5 puntos (NO SUMA 7)
        } else if (num == 2){
            jugadorActual.sumarPuntos(2) //Suma los dos puntos
            let tiradaExtra = this.tirarDado() //Tirada extra
            this.analizarTirada(tiradaExtra, indexActual,jugadores) // Volvemos a analizar
        } else if (num == 3){
            let indexAnterior
            if (indexActual === 0) {
                //Si es el primero, el "anterior" es el último
                indexAnterior = jugadores.length - 1
            } else {
                indexAnterior = indexActual - 1
            }
            this.pierdePuntos(2, jugadores[indexAnterior])
        } else if (num == 12) {
            let indexSiguiente;
            if (indexActual === jugadores.length - 1) {
                //Si es el último, el "siguiente" es el primero
                indexSiguiente = 0;
            }else{
                indexSiguiente = indexActual + 1
            }
           this.pierdePuntos(2, jugadores[indexSiguiente])
        } else {
            jugadorActual.sumarPuntos(num)
        }
    }

    empezarPartida(jugadores, num_rondas){
        for (let i = 1; i <= num_rondas; i++) {
            console.log(`Ronda ${i}`)
            for (let j = 0; j < jugadores.length; j++){
                let jugadorActual = jugadores[j]
                let puntosTirada = this.tirarDado()
                this.analizarTirada(puntosTirada, j, jugadores)
                this.mostrarInformacion(jugadorActual.nombre, jugadorActual.puntos)
                
            }
            console.log()
        }
        this.mostrarInformacionFinal(jugadores)
    }

    mostrarInformacion(jugador, puntos){
        console.log(`Jugador ${jugador} | Puntos: ${puntos}`)
    }

    mostrarInformacionFinal(jugadores){
        console.log("--- RESULTADOS FINALES ---");
        
        // 1. Mostrar puntos de cada jugador y calcular el total real
        this.puntosTotales = 0; // Lo reiniciamos por si acaso
        for (let i = 0; i < jugadores.length; i++) {
            let jugador = jugadores[i];
            // En vez de "Jugador 0", usamos jugador.nombre
            console.log(`${jugador.nombre}: ${jugador.puntos} puntos`); 
            this.puntosTotales += jugador.puntos; // Sumamos al total final
        }

        console.log("");
        // 2. Mostrar puntos totales
        console.log(`Puntos totales: ${this.puntosTotales}`);
        console.log("");

        // 3. Calcular y mostrar porcentajes
        for (let i = 0; i < jugadores.length; i++) {
            let jugador = jugadores[i];
            let porcentaje = 0;
            
            // Evitamos dividir por cero si nadie ha puntuado
            if (this.puntosTotales > 0) {
                porcentaje = (jugador.puntos * 100) / this.puntosTotales;
            }
            
            console.log(`${jugador.nombre}: ${porcentaje.toFixed(2)}%`);
        }
    }

    pierdePuntos(numPerder, jugadorActual){
        jugadorActual.puntos -= numPerder
        if (jugadorActual.puntos < 0) {
            jugadorActual.puntos = 0
        }
    }
}

let jugador1 = new Jugador("Nuria")
let jugador2 = new Jugador("Carlos")

let arrayDeJugadores = [jugador1, jugador2];

let partida1 = new Partida(3)
partida1.empezarPartida(arrayDeJugadores, 3)