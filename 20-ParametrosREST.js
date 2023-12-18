//vamos a practicar de paso funcionws anonimas y expresadas o arrowfunction 
function sumar(a,b,...c){
    let resultado = a+b;
  
  
  c.forEach(function(n){
    resultado += n
  })
  
  return resultado
  }
  console.log(sumar(1,2,3,4,5,15))
  
  //con arrowfunction
  const sumarDos = (a,b,...c) =>{
    let resultado = a+b;
    
    c.forEach((n)=>{
      resultado += n
    })
    return resultado;
  }
  
  console.log(sumarDos(5,8,9))
  
  
  //arrowfunction restar
  const restar = (a,b,...c) =>{
    let resultadoDos = a-b
    
    c.forEach((n)=>{
       resultadoDos-= n
    })
    return resultadoDos;
  }
  console.log(restar(53,10,15,56,45,87))
  
  //arrowfunction multiplicar 
  const multiplicar = (a,b,...c) =>{
    let resultadoTres = a*b;
    
    c.forEach((n)=>{
      resultadoTres *= n
    })
    return resultadoTres
  }
  
  console.log(multiplicar(2,5,20,25,30))
  
  
  // Operador spread
  //para utilizar dos arreglos distintos y convertirlos en uno solo usamos una variable const donde la igualamos a un nuevo arreglo y dentro los puntos van a hacer el spread ej "const arrN = [...arr1 ,...arr2]" 
  
  const arr1 = [1,2,3,4,5]
  arr2 = [6,7,8,9,0]
  
  const arrN = [...arr1,...arr2]
  
  console.log(arrN);