/// *** VARIABLES **+ ///
let nombre = "El Pepe";
let edad = 18;

console.log(nombre, edad);

console.log(`${nombre} tiene ${edad} años.`);

console.log("Esto es un console log")
console.info("Es la misma wea que el log")
console.warn("Advertencia")
console.error("Error")


// Esto es un comentario de una linea
/* 
    Esto es un comentario de bloque
    alert("Bienvenido")
    confirm("Estas seguro de esto??")
    prompt("Deja tu comentario")
*/


/// *** OPERACIONES **+ ///
let n1 = 30,
    n2 = 20,
    suma = n1 + n2;

let resta = n1 - n2
let producto = n1 * n2
let division = n1 / n2
let resto = n1 % n1;

console.log(suma, resta, producto, division)


/// *** ENTRADAS **+ ///
let nombre_usuario = prompt("Ingrese su nombre");
let x = prompt("Ingrese un numero");
let y = prompt("Ingrese otro numero");

let suma_nums = parseInt(x) + parseInt(y);
console.log("La suma es: ", suma_nums);

console.log(nombre_usuario);