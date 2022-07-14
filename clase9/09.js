//// ***** EVENTOS ****** /////
let btn_click = document.getElementById('btn_click');


// EVENT LISTENER
btn_click.addEventListener('click', () => {
    console.log('Click...');
});


// // EVENT HANDLER
// btn_click.onclick = () => {
//     console.log('saludar click');
// }

// MOUSE EVENTS
let btn_mouseover = document.getElementById('btn_mouseover');
btn_mouseover.addEventListener('mouseover', () => console.log('Pasando...'));

let btn_mouseenter = document.getElementById('btn_mouseenter');
btn_mouseenter.addEventListener('mouseenter', () => console.log('Entrando...'));

let btn_mouseleave = document.getElementById('btn_mouseleave');
btn_mouseleave.addEventListener('mouseleave', () => console.log('Saliendo...'));

let btn_dbclick = document.getElementById('btn_dbclick');
btn_dbclick.addEventListener('dblclick', () => console.log('Doble Click...'));


// let btn_borrar = document.getElementById('btn_borrar');
// let img = document.getElementById('imagen');

// btn_borrar.addEventListener('click', () => {
//     img.remove();
// });

// img.addEventListener('mouseover', () => {
//     img.src = 'img/img2.jpg';
// });
// img.addEventListener('mouseout', () => {
//     img.src = 'img/img1.jpg';
// });


// EVENTOS DE TECLADO
window.addEventListener('keydown', (e) => {
    // console.log('Apretaste la tecla:', e.key);

    if(e.key === "ArrowLeft") {
        document.body.style.background = "lightblue";
    } else if(e.key === "ArrowRight") {
        document.body.style.background = "white";
    }
});


// EVENTOS CHANGE

// INPUT
let nombre_usuario = document.querySelector("#nombre");

nombre_usuario.addEventListener('input', (e) =>  {
    // console.log(e.data)
    // console.log(e.target)
    // console.log(e.target.value)
});

// CHANGE
nombre_usuario.addEventListener('change', (e) => {
    console.log(e.target.value)
    let container = document.getElementById('container'); 

    if ( e.target.value.toLowerCase() !== 'pepe') {
        container.innerHTML = `
            <p style="background-color: red; color: white; text-align: center;">Error no es Pepe</p>
        `;
    } else {
        container.innerHTML = `
            <p style="background-color: green; color: white; text-align: center;" >Bienvenido Pepe</p>
        `;
    }
});


// SUBMIT
let form = document.getElementById('form');

form.addEventListener('submit',e => {
    e.preventDefault();

    let nombre = document.getElementById('name');

    console.log("El Nombre del ususario es:", nombre.value);
});