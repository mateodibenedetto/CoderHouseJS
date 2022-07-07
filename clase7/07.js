//// ***** FUNCIONES DE ALTO ORDEN: son las que retornan una funcion o reciven una funcion ****** /////
function saludar() {
    console.log('hola');
}

// FUNCION ANONIMA
const saludo = function() {
    console.log('Holasa');
}

// RETORNAR FUNCION
function crear_multiplicardor( multiplicador ) {
    return function(num) {
        return num * multiplicador;
    }
}

const doble_num = crear_multiplicardor(2);
console.log(doble_num(15));

const triple_num = crear_multiplicardor(3);
console.log(triple_num(10));


// RECIBIR FUNCION POR PARAMETRO
function saludar_todos( arr, saludar_usuario) {
    for (let usuario of arr) {
        saludar_usuario(usuario);
    }
}

function saludar_usuario(nombre) {
    console.log("Hola: ", nombre);
}


let lista = ["Pepe", "Laura", "Marcos", "Pedro", "Marta"];

saludar_todos(lista, saludar_usuario);


/// **** METODOS *** ///
let numeros = [1, 2, 3, 4, 5, 6, 7]; 
let usuarios = [
    {nombre:"Pepe", apellido:"Rojos", edad:30},
    {nombre:"Laura", apellido:"Lopez", edad:32},
    {nombre:"Pepe", apellido:"Gimenez", edad:25},
    {nombre:"Juan", apellido:"Marmol", edad:17}
];
let productos = [
    {nombre:"Cocina" , precio: 150000},
    {nombre:"Silla" , precio: 10000},
    {nombre:"Carretilla" , precio: 5000},
    {nombre:"Escritorio" , precio: 250000},
];
let ciudades = ["Tokio", "Buenos Aires", "Los Angeles", "San Francisco", "Barcelona"];


// FOREACH 
numeros.forEach(function(n) { 
    console.log("El numero es: " , n); 
    console.log("Y el dobles es: " , n * 2); 
}); 

// FIND
const find = usuarios.find(usuario => usuario.nombre === "Pepe");
console.log("Se encontro a:", find);

// FILTER
const filter = usuarios.filter(usuario => usuario.edad >= 18);
console.log("Mayores de edad:", filter);

// MAP 
const map = usuarios.map(usuario => usuario.nombre);
console.log(map)

const result =  productos.map(producto => `nombre: ${producto.nombre}, precio: ${producto.precio + (producto.precio * 0.21)}`);
console.log(result);


// REDUCE
const res = numeros.reduce((acc, item) => {
    return acc = acc + item;
}, 10); // valor inicial, si no se le da el acc empieza por el primer valor del arr
console.log(res)

const res2 = lista.reduce((acc, item) => acc += ' ' + item, "hola");
console.log(res2)

// SORT
console.log(ciudades);
console.log(ciudades.sort());
console.log(ciudades.reverse());

console.log(numeros.sort((a, b) => a - b));
console.log(numeros.sort((a, b) => b - a));