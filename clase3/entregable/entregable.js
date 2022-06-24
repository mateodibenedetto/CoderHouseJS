//////////////////////////////////////////////////////////////////
for(let i = 0; i < 10; i++) {
    let num1 = prompt("Ingrese un numero...");
    let num2 = prompt("Ingrese otro numero...");
    console.log("Total: ",  parseInt(num1) + parseInt(num2));
}


//////////////////////////////////////////////////////////////////
let text = prompt('Ingrese cualquier texto para terminar la ejecución ingrese la palabra "ESC"');
let i = 0;
while(text.toLowerCase() !== "esc") {
    text = prompt("Ingrese un texto");
    i++;
    console.log(text, i);
}
alert("Fin del bucle");


//////////////////////////////////////////////////////////////////
let num = prompt("Ingrese un numero");
for (let i = 0; i < parseInt(num); i++) {
    console.log("hola");   
}