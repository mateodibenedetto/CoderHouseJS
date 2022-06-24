/// *** BUCLES *** ///
for (let i = 0; i < 5; i++) {
    let nombre_usuario = prompt("Ingrese su nombre");
    console.log("Bienvenido/a:", nombre_usuario);
    console.log("El contadore está en:", i);
}

let  i = 0;

while(i < 100) {  
    let numero = prompt("Ingrese un nunmero");
    i += parseInt(numero);
    console.log(`Falta ${100 - i} para llegar a 100`);
}

// Ejercicios
// Pedir un número del 1 al 10 por teclado y mostrar la tabla del mismo
let num = prompt("Ingrese un numero para mostrar su tabla de multiplicar");

for (let i = 0; i < 10; i++) {
    console.log(`${num} x ${i} = ${parseInt(num) * i}`);
}

// Se van a ingresar 10 numeros, informo si el numero es negativo o positivo
for (let i = 0; i < 10; i++) {
    let num = prompt("Ingrese un numero: ");

    let numP = parseInt(num);
    
    if (numP < 0) {
        console.log(`${numP} es negativo`);
    } else if (numP >= 0)  {
        console.log(`${numP} es positivo`);
    } else {
        console.log(`${numP} no es un numero`);
    }
}

