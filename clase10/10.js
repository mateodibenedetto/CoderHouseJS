//// LOCAL SOTRAGE /////
const ls = localStorage;

ls.setItem('Cliente_Uno', 'Pepe');
ls.setItem('Edad', 30);
ls.setItem('Hobbies', ['Futbol', 'Ajedres', 'Golf']);


let user = ls.getItem('Cliente_Uno')
let user_age = ls.getItem('Edad')
let hobbies = ls.getItem('Hobbies')

console.log("El nombre del usuario del LocalStorage es:", user);
console.log("La edad del usuario del LocalStorage es:", user_age);
console.log("Los hobbies del usuario son:", hobbies);


for (let i = 0; i < ls.length; i++) {
    let clave = ls.key(i);
    console.log('La clave es:', clave);
    console.log('El valor es:', ls.getItem(clave));
}

function guardar_session() {
    sessionStorage.setItem("Cliente_uno", "Juan");
    sessionStorage.setItem("Edad", 25);
    sessionStorage.setItem('Hobbies', ['Futbol', 'Ajedres', 'Golf']);
}

let boton = document.getElementById('btn');
boton.addEventListener('click', guardar_session);