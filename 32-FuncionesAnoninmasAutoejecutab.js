/*Una Función Anónima Autoejecutable es una función que se define y se invoca inmediatamente después de su creación, 
permitiendo encapsular código y crear un nuevo ámbito local.

Ejemplo en código:*/
(function() {
    // Código dentro de la función anónima autoejecutable
    var mensaje = "Hola desde la función autoejecutable.";
    console.log(mensaje);
})(); // Los paréntesis al final invocan la función inmediatamente
/*
En este ejemplo, la función anónima se declara y ejecuta de inmediato, 
lo que permite mantener la variable mensaje dentro de su propio ámbito.
 Esto evita que mensaje se agregue al ámbito global y ayuda a prevenir
  colisiones de nombres de variables con otros scripts.
*/