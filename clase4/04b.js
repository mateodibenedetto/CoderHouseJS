//////////////////// EJERCICIOS ///////////////////////
function mayor_edad(num) {
    if (num >= 18) {
        return true
    } else {
        return false
    }
}

let edad = parseInt(prompt("Ingrese su edad"));

if(mayor_edad(edad)) {
    console.log("Usted es mayor de edad");
} else {
    console.log("Usted es menor de edad");
}




function calcular_iva(precio) {
    let iva = precio * 0.21;
    return iva;
}

function devolver_iva() {
    let producto = prompt("Ingrese el nombre del producto");
    let precio = prompt("Ingrese un precio");
    let num = parseInt(precio);

    if(typeof precio !== 'number') {
        console.log("El precio que ingreso no es un numero");
        return
    } 

    console.log("Nombre: ",producto);
    console.log("Precio: $",precio);
    console.log("El precio mas iva es: $", calcular_iva(precio))
}

devolver_iva()



