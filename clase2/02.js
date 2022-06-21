/// *** TIPOS DE DATOS *** ///
let nombre_usuario = "Jose";
let edad_usuario = 20;
let saldo_banco = 220.5;
let token = false;
let clave = "20"


/// *** OPERADORES RAELACIONALES *** ///

// Igualdad
console.log(edad_usuario == clave) // T
console.log(edad_usuario === clave) // F

// Mayor y Mayor Igual
console.log(10 > 5) // T
console.log(100 > 200) // F
console.log(50 > 50) // F
console.log(50 >= 50) // T

// Desigualdad
console.log(10 != 10) // F
console.log(20 != 10) // T


/// *** CONDICIONALES *** ///
let a  = prompt("Ingrese un numero");
let b  = prompt("Ingrese otro numero");
let operacion = prompt("Ingrese para la Suma: + Resta: -")
let suma;

if(operacion == "+") {
    suma = parseInt(a) + parseInt(b);
    console.log(`El resultado es: ${suma}`);
} else if(operacion == "-") {
    suma = parseInt(a) - parseInt(b);
    console.log(`El resultado es: ${suma}`);
} else {
    console.log("No ingresó una operación valida");
}


