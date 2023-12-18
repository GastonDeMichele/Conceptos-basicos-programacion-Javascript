const numeros = [1,2,3,4]

//sin destructuracion 
const uno = numeros[0],
dos = numeros [1],
tres = numeros[2],
cuatro = numeros[3];

console.log(uno,dos,tres,cuatro)


//con destructuracion
const[posicionuno,posiciondos,posiciontres] = numeros

console.log(posicionuno,posiciondos,posiciontres)


//con objetos


let objetoUno = {
  nombre: "Gaston",
  apellido: "De michele",
  edad: 22
}

const {nombre,apellido,edad} = objetoUno

console.log(nombre,apellido,edad)

//ejercicio de práctica usando funciones

let lei = {
  nombre: 'leila',
  edad:8,
  nacimiento: 2015,
  fechahoy:2023,
}

let juana = {
  nombre: 'juana',
  edad:8,
  nacimiento: 2012,
  fechahoy: 2023
}

const edadPerras = ({nacimiento,fechahoy})=>fechahoy - nacimiento

console.log(edadPerras(juana))
console.log(edadPerras(lei))