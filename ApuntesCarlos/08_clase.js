//clases
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

const perro = new Animal("Rex", "perro");
perro.hacerSonido();
perro.describir();

const gato = new Animal("Miau", "gato");
gato.hacerSonido();
gato.describir();