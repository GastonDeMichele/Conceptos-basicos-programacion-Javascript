//arreglo con datos de una fancy para practicar 
const datosFancy = [
    1,
    "fancy",
  informacion = {
     nombre: "fancy" ,
   genetica: "watermelon zkittlezz x tropicana cookies",
   fenotipo: "50% indica 50% sativa"
  },
  exterior = {
   fecha: "mediados de octubre",
   producción: "1000 gr/planta"
  },
  interior = {
    producción: "550 gr/m2"
  }
    ]
    console.log(datosFancy)//imprime el arreglo completo con los objetos, funciones, cadenas de textos y números.
   
    console.log(datosFancy[0],datosFancy[2].nombre)// con corchetes acceso a arrglos con el punto el acceso la propiedad 
    
    
    
    
    //algunos metodos en arreglos
    console.log(datosFancy.length)//devuelve la cantidad de elementos padres en el arreglo
  
    
   datosFancy.push("pegadoraaaa")
   console.log(datosFancy)//este metodo agrega un elemento al final del arreglo.
   datosFancy.pop()
   console.log(datosFancy)//pop quita el último arreglo agregado.
   
   
   const a = Array.of("Hola",1,["a","b"])
   console.log(a)//crear un arreglo mediante un metodo.
   
   const nuevoArreglo = Array(50).fill(false)
  console.log(nuevoArreglo)//crea un arreglo con 50'' posiciones falsas.
  
  datosFancy.forEach(function(el, i){
  console.log("la posicion",+i+ "tiene como valor " +el)
  })//esto devuelve la posición y que contiene el arreglo en consola.
  
    
    
    
    
    //información 
    /* Tipo:	Tipo	Feminizadas
  Banco:	Banco	R-Kiem Seeds
  Genética:	Genética	Watermelon Zkittlez x Tropicana Cookies
  Fenotipo:	Fenotipo	50% Índica - 50% Sativa
  Cosecha exterior H.N:	Cosecha exterior H.N	Mediados de octubre
  Cosecha exterior H.S:	Cosecha exterior H.S	Mediados de abril
  Producción interior:	Producción interior	550 gr/m²
  Producción exterior:	Producción exterior	1000 gr/planta
  Periodo de floración interior:	Periodo de floración interior	60 días
  Caracteristica:	Caracteristica	Colorida
  Muy resinosa
  Semillas indicas
  Efecto:	Efecto	Estimulante
  THC:	THC	26%
  CBD:	CBD	< 1%
  Sabor y aroma:	Sabor y aroma	Afrutado
  Citrico
  Limón
  Síntomas:	Síntomas	Apatía*/





















