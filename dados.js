class Jugador{
    constructor(nombre) {
        this.nombre = nombre
        this.puntos = 0
    }

    sumarPuntos(puntos){
        this.puntos += puntos
    }

    restarPuntos(puntos){
        this.puntos -= puntos
        if (this.puntos < 0) {
            this.puntos = 0
        }
    }

    mostrarInformacion(){
        console.log(`Nombre jugador: ${this.nombre} | Puntos: ${this.puntos}`)
    }
}

class Partida{
    constructor(rondas) {
        this.rondas = rondas
        this.puntosTotales = 0
    }

    tirarDado(){
        let min = 1
        let max = 6
        let dado1 =  Math.floor(Math.random() * (max - min + 1)) + min;
        let dado2 =  Math.floor(Math.random() * (max - min + 1)) + min;

        return dado1 + dado2
    }

    analizarTirada(num, jugador_actual, indexActual, jugadores){
        let puntos = num
        if (num === 7) {
            jugador_actual.restarPuntos(5)
        } else if (num === 2) {
            // Suma 2
            jugador_actual.sumarPuntos(2)
            // Tirada extra: Lanzamos, guardamos y la volvemos a pasar por el analizador
            let puntosExtra = this.tirarDado();
            console.log(`¡Tirada extra para ${jugador_actual.nombre}! Saca un ${puntosExtra}`);
            
            this.analizarTirada(puntosExtra, jugador_actual, indexActual, jugadores);
        } else if (num === 3) {
            // Restamos 2 puntos jugador anterior (si es el primero, pierde el ultimo)
            let indexAnterior
            if (indexActual === 0) {
                //Pierde el ultimo
                indexAnterior = jugadores.length - 1
            } else{
                // Pierde el anterior al actual
                indexAnterior = indexActual - 1
            }

            jugadores[indexAnterior].restarPuntos(2)
        } else if (num === 12){
            // Restamos 2 puntos al siguiente jugador (Si es el ultimo, restamos al primero)
            let indexSiguiente
            if (indexActual === jugadores.length - 1) {
                //Pierde el primero
                indexSiguiente = 0
            } else{
                // Pierde el siguiente al actual
                indexSiguiente = indexActual + 1
            }
            jugadores[indexSiguiente].restarPuntos(2)
        } else {
            jugador_actual.sumarPuntos(puntos)
        }

        this.puntosTotales += puntos
        return puntos
    }

    empezarPartida(jugadores, num_rondas){
        let numJugadores = jugadores.length
        for (let i = 0; i < num_rondas; i++) { // Rondas
            console.log("===== EMPIEZA RONDA ", i + 1, " ====")
            for (let j = 0; j < numJugadores; j++) { // Turnos jugador
                
                let jugador_actual = jugadores[j]

                console.log("===== EMPIEZA TIRADA DE", jugador_actual.nombre, " ====")
                let puntosConseguidos = this.analizarTirada(this.tirarDado(), jugador_actual, j, jugadores)
                this.mostrarInformacionTirada(jugador_actual.nombre, puntosConseguidos)
            }
            // Final de ronda
            this.mostrarInformacionRonda(i + 1, jugadores)
            
        }

        //Final de la partida
        this.mostrarInformacionFinalPartida(jugadores)
    }

    mostrarInformacionTirada(jugador_actual, puntosConseguidos){
        console.log(`Jugador actual: ${jugador_actual} | Puntos conseguidos en esta tirada: ${puntosConseguidos})`)
    }

    mostrarInformacionRonda(num_ronda, jugadores){
        console.log("\n\n===== FINAL DE LA RONDA ", num_ronda, " ====")
        jugadores.forEach(jugador => {
            jugador.mostrarInformacion()
        });
    }

    mostrarInformacionFinalPartida(jugadores){
        console.log("\n\n===== FINAL DE LA PARTIDA ====")
        
        jugadores.forEach(jugador => {
            console.log(`${jugador.nombre}: ${jugador.puntos}`)
        });
        console.log(`Puntos totales: ${this.puntosTotales}`)

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
}

let jugador1 = new Jugador("Nuria")
let jugador2 = new Jugador("Adrian")

let jugadores = [jugador1, jugador2]

let partida1 = new Partida(2)
partida1.empezarPartida(jugadores, 2)