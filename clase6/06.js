/// *** ARREGLOS *** ///
let users = ["Jose","Juan", "Jon","Juan", "Marta"];

console.log(users);

users.forEach(name => {
    console.log(`Hola ${name}`)
});


let detodo = [20, 10.3, ["raton", "perro", "gato"], true, "jose", 30, ["Rojo", "Verde"]]

console.log(`El ${detodo[2][2]} tiene ${detodo[0]} años`)


/// **** METODOS **** ///
console.log("***********METODOS***********")
console.log(users)
// PUSH
users.push("Juanito");
console.log("Push:", users);
// UNSHIFT
users.unshift("Jose");
console.log("Unshift:", users);
//  POP
users.pop();
console.log("Pop:", users);
// SHIFT
users.shift();
console.log("Shift:", users);
// SPLICE
users.splice(1,1) // splice(desde que indice va a borrar, cuantos elementos va a borrar)
console.log("Splice:", users);
users.splice(1,1,"Jonny"); // splice(desde que indice va a borrar, cuantos elementos va a borrar, inserta nuevo valor)
console.log("Splice:", users);
// JOIN
let newArr = users.join('-');
console.log("Join:", newArr);
// CONCAT
let edades = [19, 25, 30];
let nombres = ["Juan", "Jorge", "Jaime"];
let concatenado = nombres.concat(edades);
console.log("Concat:" ,concatenado);
// SLICE
let corte = users.slice(0, 1);
console.log("Original:", users, "Slice:", corte);
// INDEXOF
console.log("El indice de Jose es: ", users.indexOf('Jose'), "El indice de Juan es: ", users.indexOf('Juan'))
let nombre_a_elimiar = users.indexOf('Jose');
let nueva_lista = users.splice(nombre_a_elimiar, 1);
console.log("indexOf + splice:", nueva_lista); 


/// **** METODOS AVANZADOS **** /////
console.log("***********METODOS AVANZADOS***********")
// Transforma cada numero multiplicado por dos

let multiplicar = (n) => {
    return n * 2
}
const multiplicar2 = n => n * 2;

function doble(num) {
    return num * 2
}

let nums = [1,2,3]

let number = nums.map(num => num * 2);


console.log("Numeros:", number);
// Filtra la comida que no sea carnivora
let fruits = ["Naranja", "Kiwi", "Carne", "Banana"].filter(n => n !== "Carne");
console.log("Frutas:", fruits);
// Encuentra y devuelve la gallina
let animals = ['Dinosaurio', 'Jirafa', 'Gallina'].find(n => n === "Gallina");
console.log("Animales:", animals);
// Rellena el array de dinero
let money = ['','',''].fill('Money');
console.log("Dinero:", money);
// Todo ok?
let booleans = ['true', 'false', 'true', 'true'].every(n => n === 'true');
console.log("Todo ok?:", booleans);
// Algun error?
let booleans2 = ['true', 'false', 'true', 'true'].some(n => n === 'false');
console.log("Algun error:", booleans2);
