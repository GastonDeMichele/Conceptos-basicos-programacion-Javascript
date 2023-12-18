class Animal {
    constructor(nombre,genero){
        this.nombre = nombre
        this.genero = genero
    }
sonar(){
    console.log("Sonar(Metodo uno)")
}
saludar(){
    console.log("Saludar(metodo dos)")
}
}

/*Herencia para hacer un nuevo animal con mismas caracteristicas y agregarles mas. */
class perro extends Animal{
    constructor(nombre,genero,tamanio){
    super(nombre,genero);
    this.tamanio = tamanio
    }
    sonar(){
        console.log("modificando sonar(metodo uno modificado)")
    }
    ladrar(){
        console.log("metodo creado para este animal")
    }
}


const mimi = new Animal("Mimi", "Hembra")
const Scooby = new perro("Scooby","Macho")


console.log(mimi)
mimi.saludar()
mimi.sonar()
//scooby quedo modificado
console.log(Scooby)
Scooby.saludar()
Scooby.sonar()