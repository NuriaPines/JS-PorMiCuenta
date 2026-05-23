//import Animal from './08_clase.js';

class Animal
{
    #chip; //propiedad privada, previamente definida en la clase con #

    constructor(nombre, especie, chip = false)    //se especifican las propiedades de la clase
    {
        this.nombre = nombre;
        this.especie = especie;
        this.#chip = chip; //propiedad privada
    }

    //métodos de la clase
    hacerSonido()
    {
        console.log(`${this.nombre} hace un sonido.`);
    }   

    describir()
    {
        console.log(`Este es ${this.nombre}, un ${this.especie}.`);
    }   

    //si queremos trabajar con propiedades privadas, usamos getters y setters
    get tieneChip()
    {
        return this.#chip;
    }
}

//herencia
class Perro extends Animal
{
    constructor(nombre, raza)   
    {
        super(nombre, "perro"); //llama al constructor de la clase base
        this.raza = raza;
    }

    hacerSonido()   //por defecto sobrescribe el método de la clase base
    {
        super.hacerSonido(); //llama al método de la clase base

        console.log(`${this.nombre} ladra.`);
    }

    describir()
    {
        console.log(`Este es ${this.nombre}, un perro de raza ${this.raza}.`);
    }

    oler()
    {
        console.log(`${this.nombre} está oliendo alrededor.`);
    }
}

const miPerro = new Perro("Max", "Labrador");
miPerro.hacerSonido();
miPerro.describir();
miPerro.oler(); //esta función solo la tiene la clase Perro















