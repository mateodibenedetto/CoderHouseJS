/// *** FUNCION CONSTRUCTORA *** ///

function Usuario( nombre, apellido, edad) {
    this.nombre = nombre;   
    this.apellido = apellido;
    this.edad = edad;
}

let usuario1 = new Usuario("Pepe", "Argento", 53);
let usuario2 = new Usuario("Coqui", "Argento", 23);


console.log(usuario1.nombre);
console.log(usuario2.nombre);


/// *** CLASES *** ///

class Animal {
    constructor(nombre, especie, color) {
        this.nombre = nombre;
        this.especie = especie;
        this.color = color;
    }

    saludar() {
        console.log("Nombre:", this.nombre, " Especie:", this.especie, "Color:", this.color);
    }

    get_info() {
        console.log("Nombre: ", this.nombre);
        console.log("Especie: ", this.especie);
        console.log("Color: ", this.color);
    }

    set_nombre(nombre) {
        this.nombre = nombre;
    }

    get_nombre() {
        console.log("Nombre: ", this.nombre);
    }

}

class Perro extends Animal {
    constructor(nombre, especie, color, patas) {      
        super(nombre, especie, color)
        this.patas = patas;
    }

    saludar() {
        console.log("patas:", this.patas);
    }

}


let animal = new Animal("Jorge", "Mono","marron");
animal.saludar();

let perro = new Perro("Shaggy", "perro", "marron", 4);
perro.saludar();


////////////////////////////////////////////////////////////////////


class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
}

class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
}
  
mycar = new Model("Ford", "Mustang");
