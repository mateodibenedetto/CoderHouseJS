//// ***** DOM (DOCUMENT OBJECT MODEL) ***** /////
 
const d = document;

// getElementsByID
let titulo = d.getElementById("titulo");
console.log(titulo);

// getElementsByClassName
let parrafos = d.getElementsByClassName("p");
console.log(parrafos);
console.log(parrafos[0]);
console.log(parrafos.length);

// getElementsByTagName
let li = d.getElementsByTagName("li");
console.log(li);

for (let el of li) {
    console.log(el);
}

// innerText
titulo.innerText = "innerText";

// innerHTML
let container = d.querySelector('.contenedor');
container.innerHTML = `
    <h1>innerHTML</h1>
    <p>Esto es un parrafo</p>
`; 

// createElement
let button = d.createElement('button');
button.innerText = 'boton';
button.classList.add('btn');

container.append(button);

// remove
parrafos.remove();