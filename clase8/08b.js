let user = "Pepe",
    password = "1234";


function validar() {
    let nombre = document.getElementById('nombre');
    let pass = document.getElementById('pass');
    let mensaje = document.getElementById('mensaje'); 

    if (nombre.value === user && pass.value === password) {
        let parrafo = document.createElement('p');
        mensaje.innerHTML = `Bienvenido al sistema ${nombre}`; 
    } else {
        mensaje.innerHTML = `<h3>Usuario o Contraseña Incorrecto</h3>`;
    }
}
