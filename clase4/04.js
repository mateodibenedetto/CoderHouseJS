/// *** FUNCIONES *** ///
// function saludar_usuario() {
//     let nombre =  prompt("Ingrese su nombre");
//     console.log("Hola ", nombre);
// }

// saludar_usuario();



/// *** PARAMETROS *** ///
function suma(n1, n2) {

    if(typeof n1 !== 'number')  {
        console.log("El primer parametro que ingreso no es un numero");
        return
    }
    if(typeof n2 !== 'number') {
        console.log("El segundo parametro que ingreso no es un numero");
        return
    } 

    let suma = n1 + n2;
    console.log("La suma es: ", suma);
}
function resta(n1, n2) {

    if(typeof n1 !== 'number')  {
        console.log("El primer parametro que ingreso no es un numero");
        return
    }
    if(typeof n2 !== 'number') {
        console.log("El segundo parametro que ingreso no es un numero");
        return
    } 

    let resta = n1 - n2;
    console.log("La resta es: ", resta);
}
function division(n1, n2) {

    if(typeof n1 !== 'number')  {
        console.log("El primer parametro que ingreso no es un numero");
        return
    }
    if(typeof n2 !== 'number') {
        console.log("El segundo parametro que ingreso no es un numero");
        return
    } 
    if(n1 < 0 || n2 < 0) {
        console.log("La division no puede ser de 0")
    }

    let division = n1 / n2;
    console.log("La division es: ", division);
}
function multiplicacion(n1, n2) {

    if(typeof n1 !== 'number')  {
        console.log("El primer parametro que ingreso no es un numero");
        return
    }
    if(typeof n2 !== 'number') {
        console.log("El segundo parametro que ingreso no es un numero");
        return
    } 

    let multiplicacion = n1 / n2;
    console.log("La multiplicacion es: ", multiplicacion);
}


function calculadora( num1, num2 ) {
    let operacion = prompt('Coloque el tipo de operacion que desee realizar "+ - * /"')

    if(operacion === "+") {
        suma(num1, num2);
    } else if(operacion === "-") {
        resta(num1, num2);
    } else if(operacion === "/") {
        division(num1, num2);
    } else if(operacion === "*") {
        multiplicacion(num1, num2);
    } else {
        console.error("No ingreso una operacion valido");
    }
}

calculadora(15, 2)









