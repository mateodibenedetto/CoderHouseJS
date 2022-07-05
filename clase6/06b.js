class Alumno {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

const alumnos = [];

for (let i = 0; i < 3; i++) {
    let nombre = prompt("Ingrese su nombre:");
    let edad = prompt("Ingrese su edad:");
    
    let nuevo_alumno = new Alumno(nombre, edad);

    alumnos.push(nuevo_alumno);
}


//// **** FOROF **** /////
for(let alumno of alumnos) {
    console.log("Mi nombre es:", alumno.nombre);
    console.log("Tengo:", alumno.edad, "años");
}