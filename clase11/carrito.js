let btn_compra = document.querySelectorAll('.botonCompra');

for (let boton of btn_compra) {
    boton.addEventListener('click', agregar_carrito);
}

let carrito = []

function agregar_carrito(e) {
    // console.log('working', e.target);

    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;

    let nombre_producto = padre.querySelector('h5').textContent;
    let precio = padre.querySelector('span').textContent;
    let img = abuelo.querySelector('img').src;


    let producto = {
        nombre: nombre_producto,
        img: img,
        precio: precio,
        cantidad: 1
    }

    carrito.push(producto);

    let arr_json = JSON.stringify(carrito);
    localStorage.setItem("carrito", arr_json);
    // console.log(carrito);

    mostrar_carrito(producto)
}

function mostrar_carrito(producto) {
    let fila = document.createElement("tr");

    fila.innerHTML = `<td><img src="${producto.img}"></td>
                      <td>${producto.nombre}</td>
                      <td>${producto.cantidad}</td>
                      <td>${producto.precio}</td>
                      <td><button class="btn-danger borrar">Borrar</button></td>                              
    `
    let tabla = document.getElementById("tbody");
    tabla.append(fila);

    let botones_borrar = document.querySelectorAll('.borrar');

    for (const boton of botones_borrar) {
        boton.addEventListener('click', borrar_producto);
    }
}

function borrar_producto(e) {
    let abuelo = e.target.parentNode.parentNode;
    abuelo.remove()

}