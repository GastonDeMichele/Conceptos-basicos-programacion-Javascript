/*const Rap = function(artista, genero){
    this.artista = artista;
    this.genero = genero


    this.saludar = function(){
        console.log(`Hola!`)
    }

    this.presentarse = function(){
        console.log(`mi nombre es ${this.artista} y me dedico a hacer ${this.genero} `)
    }
} 

const raperoHomer = new Rap(`homer el mero mero` , `rap`)
console.log(raperoHomer)
raperoHomer.saludar();
raperoHomer.presentarse();*/





//ahora vamos a sacar los metodos aparte para que no se dupliquen en el prototipe//
const Genero = function(artista, genero){
    this.artista = artista;
    this.genero = genero
} 
Genero.prototype.saludar = function(){
    console.log(`Hola!`)
}

Genero.prototype.presentarse = function(){
    console.log(`mi nombre es ${this.artista} y me dedico a hacer ${this.genero} `)
}
Genero.prototype.saludoSinmodificar = function(){
    console.log("Saludo sin modificar")
}




/*si quisiera heredar y agregar un elemento en el hijo lo hago de esta manera*/
function NuevoArtista(artista,genero,nacionalidad){
this.super = Genero;
this.super(artista,genero);
this.nacionalidad = nacionalidad
}
/*aca creo el prototipo dentro de la funcion y heredo*/
NuevoArtista.prototype = new Genero();


/*aca va el constructor de la nueva funcion*/
NuevoArtista.prototype.constructor = NuevoArtista;

/*rescritura del metodo padre en el hijo */
NuevoArtista.prototype.saludar = function(){
    console.log("Saludo nuevo modificado")
}
const yandelVeguilla = new NuevoArtista("Yandel Veguilla", "Regueton","Puerto Rico")
const homer = new Genero(`homer el mero mero` , `rap`)


console.log(yandelVeguilla)
console.log(homer)

homer.saludar()
homer.presentarse()
homer.saludoSinmodificar()
yandelVeguilla.saludar()
yandelVeguilla.presentarse()
yandelVeguilla.saludoSinmodificar()




