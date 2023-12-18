
/*practica:
const Animal = function (Genero,raza){
    this.genero = Genero;
    this.raza = raza;
 this.queEres = function(){
    console.log(`soy un ${this.raza} ${this.genero}`)
 }   
}

const leiLa = new Animal("hembra","caniche")
leiLa.queEres()*/




/*un metodo estatico se puede ejecutar sin necesidad de instanciar la clase, es decir sin hacer la const donde igualo al new  */
/**/
class Animal {
    constructor(genero,raza){
        this.genero = genero;
        this.raza = raza;
    }

    static queEres(){
        console.log(`soy un caniche`)
    }

}

const leiLa = new Animal("hembra", "caniche")
Animal.queEres() 

//aca vamos a agregar el tamanio y heredamos los otros valores de atributos de la clase Animal.
class Perro extends Animal{
constructor(genero,raza,tamanio){
super(genero,raza)
this.tamanio = tamanio;
//creo un nuevo atributo y lo agrego con los metodos getter y setter
this.color = null;
}
get getColor(){
return this.color;
}

set setColor(color){
this.color = color;
}

}
const golden = new Perro("macho", "golden retriever", "grande");
console.log(golden)
//para agregarle el valor a raza desde aca, se llama a la propiedad y se la iguala
golden.setColor = "Color dorado"
//para invocarlo se llama como si fuera un atributo de una propiedad mediante el gett
console.log(golden.getColor)