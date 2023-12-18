//cuando una funcion es expresada dentro de un objeto,es decir, una arrowfunction, esta al ser llamada tiene un ambito global, en cambio la funcion declarada, tiene un ambito de ojeto, por eso es mejor dentro de los objetos declarar las funciones, y en caso de metodos usar la expresion literal, esta es sin la flecha solo el nombre y el parentesis seguido de los corchetes y el contenido.


//ejemplo de funcion expresada dentro de un objeto.

const objeto = {
    nombre: "Gaston",
    apellido: "De Michele",
    saludar: ()=>{
      console.log(this)
    }
  }
  objeto.saludar()
  
  
  
  
  
  
  //ejemplo de funcion declarada dentro de un objeto
  const objetoDos = {
    nombre: "ivan",
    apellido: "beltran",
    saludar: function(){
      console.log("Holaa"),
      console.log(this)
      
    }
  }
  objetoDos.saludar()
  
  //ejemplo de metodo literal en un objeto.
  const  nombreC= "gaston ivan"
  
  const objetoLiteral = {
    nombreC,
   saludar(){
     console.log("Hola literal")
     console.log(this)
   }
  }
  objetoLiteral.saludar()