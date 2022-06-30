// Crear una clase Producto: nombre, precio, stock
// Metodos:
// get_datos(): trae todos los datos del producto 
// get_stock(): devuelve el stock del producto, si es menor a 3 nos avisa
// set_stock(): setea el stock del producto(ventas,compras)

class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    get_datos() {
        console.log(this.nombre);
        console.log(this.precio);
        console.log(this.stock);
    }

    get_stock() {
        if(this.stock < 3) {
            console.log("Hay menos de 3 en stock");
        } else {
            console.log("Stock disponible: ", this.stock);
        }
    }

    set_stock(stock) {
        this.stock = stock;
    }
}

let lampara = new Producto("Lampara", 1000, 2);
let alfombra = new Producto("Alfombra", 500, 4);

lampara.get_datos();
alfombra.get_datos();

lampara.get_stock();
alfombra.get_stock();