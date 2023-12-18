//cuando quiero que el valor de una propiedad sea el valor ya asignado de una variable simplemente se utiliza el nombre y la coma. en el caso de un metodo basta con ser nombrado con sus paréntesis seguido de sus llaves con lo que contengan.

//ej manera comun
const nombre = 'gaston',
apellido = 'de Michele'

const objetoComun = {
  nombre:nombre,
  apellido:apellido,
  saludar:function(){
    console.log("Hola papa!")
  }
}
    
console.log(objetoComun)
console.log(objetoComun.nombre,objetoComun.apellido)
objetoComun.saludar()

//ej manera literal.

const objetoLiteral = {
  nombre,
  apellido,
  saludar(){
    console.log("Hola literal")
  }
}
console.log(objetoLiteral)
objetoLiteral.saludar()