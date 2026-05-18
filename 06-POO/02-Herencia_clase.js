// HERENCIA DE CLASES: Reutilizando moldes
// 1. Nos traemos la clase original (en un entorno real la exportaríamos, aquí la pongo para el ejemplo)
class Jugador {
    constructor(nombreInicial) {
        this.nombre = nombreInicial
        this.puntos = 0
    }

    sumarPuntos(cantidad){
        this.puntos += cantidad
    }

    mostrarInformacion(){
        console.log(`Jugador: ${this.nombre} | Puntuación: ${this.puntos}`)
    }
}

// 2. Creamos la clase hija usando "extends"
class JugadorVIP extends Jugador{
    constructor(nombreInicial, nivelVIP) {
        // super() llama al constructor de "Jugador". ¡Siempre debe ir en la primera línea!
        // Le pasamos el nombre para que el padre lo configure.
        super(nombreInicial)

        //Ahora configuramos lo que es exclusivo del VIP
        this.nivel = nivelVIP
    }

    // 3. Método exclusivo del VIP
    saludoVIP(){
        console.log(`¡Abran paso! Llega ${this.nombre}, VIP de nivel ${this.nivel}.`)
    }

    // 4. SOBREESCRIBIR MÉTODOS (Opcional): Si quieres que el VIP muestre la info de otra forma
    mostrarInformacion(){
        console.log(`⭐ VIP: ${this.nombre} | Nivel: ${this.nivel} | Puntos: ${this.puntos}`);
    }
}

let jugadorEstrella = new JugadorVIP("Nuria", 5)

jugadorEstrella.saludoVIP()
jugadorEstrella.sumarPuntos(50)
jugadorEstrella.mostrarInformacion()