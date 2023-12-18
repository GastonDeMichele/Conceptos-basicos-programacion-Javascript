/*
Expresiones regulares
   Son una secuencia de caracteres que forma un patron de busqueda.
    principalmente utilizada para busqueda de patrones de cadenas de caracteres.
*/

//forma de uso

let cadena = "lorem este es 259871un texto inventado para que la expresion regular busque lo que tenga que buscar para encontrar las palabras regulares expresando lorem lo que me preacere ene ete momento al lorem "
let expReg = new RegExp("lorem","ig")//primero el patro, segundo las banderas, es decir le podemos ingresar un valor por ej G y este busca todas las coincidencias, si dejamos vacio se detiene en la primera.
console.log(expReg.test(cadena))
console.log(expReg.exec(cadena))


let expReg2 = /lorem/
/*en cada caso podemos usar signos que otorguen metodos o funciones ej*/
console.log(expReg2.test(cadena))
console.log(expReg2.exec(cadena))



let expReg3 = /lorem/ig//la i ignora mayusculas y minusculas y la g busca todas las coincidencias
console.log(expReg3.test(cadena))
console.log(expReg3.exec(cadena))


let expReg4 = /[0-9]/ig//valida a true si hay numeros en la cadena

console.log(expReg2.test(cadena))
console.log(expReg2.exec(cadena))
