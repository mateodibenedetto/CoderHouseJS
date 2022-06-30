/// *** OBJETOS LITERALES *** ///

let usuario_uno = {
    nombre: "Pepe",
    apellido: "Lopez",
    edad: 23
};

console.log("El nombre del usuario es:", usuario_uno.nombre);

let perro1 = {
    raza: "Mestizo",
    nombre: "Coraje",
    color: "Rosa",
    dueño: "Muriel",

    ladrar: function() {
        console.log("Coraje: guau guau");
    }
};

let perro2 = {
    raza: "Gran Danes",
    nombre: "Scooby",
    color: "Marron",
    dueño: "Shaggy",

    ladrar: function() {
        console.log("Scooby: guau guau");
    }
};

perro1.ladrar();
perro2.ladrar();
