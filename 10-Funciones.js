// cuando hablamos de una funcion declarada estamos hablando de una funcion simple, cuando hablamos de una expresada es cuando la igualamos a una varible, esta misma debe ser llamada luego de haberse ejecutado, de lo contrario nos dara error. ejemplos:

function declarada(){
    const indica = "planta enana"
    console.log(indica)
  }
  declarada()
  
  
  
  
  const anonimaOexpresada = function(){
    const sativa = "planta alta"
    console.log(sativa)
  }
  anonimaOexpresada()
  
  //si yo la declaro antes no funciona. ej:
  anonimaOexpresadaAntes()
  const anonimaOexpresadaAntes = function(){
    const error = "error"
    console.log(error)
  }