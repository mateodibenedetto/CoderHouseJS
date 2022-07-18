const productos = [{
        id: 1,
        title: "Barras paralelas",
        category: "articulos",
        price: 120,
        img: "",
        desc: "Barrras de paralelas para hacer calistenia"
    },
    {
        id: 2,
        title: "Maquina de Piernas",
        category: "maquinas",
        price: 320,
        img: "",
        desc: "Maquina para levantamiento de piernas"
    },
    {
        id: 3,
        title: "Mancuerna Rusa",
        category: "pesas",
        price: 80,
        img: "",
        desc: "Marcuerna Rusa"
    },
    {
        id: 4,
        title: "Barra de Dominadas",
        category: "articulos",
        price: 320,
        img: "",
        desc: "Barra de Dominadas"
    },
    {
        id: 5,
        title: "Cuerda para saltar",
        category: "articulos",
        price: 20,
        img: "",
        desc: "Cuerda para saltar como rocky"
    },
    {
        id: 6,
        title: "Colchoneta",
        category: "articulos",
        price: 50,
        img: "",
        desc: "Colchoneta para hacer cardio"
    },
    {
        id: 7,
        title: "Mancuernas",
        category: "pesas",
        price: 60,
        img: "",
        desc: "Mancuernas de hierro"
    }
]


const d = document;

let container = d.querySelector('.productos');

function mostrarProductos() {
    productos.forEach(producto => {
        let cards = d.createElement('div');
        cards.className = 'producto';
        cards.innerHTML = ` 
            <img src="./assets/imgs/header-img.jpg" alt="">
            <h5 class="nombre">${producto.title}</h5>
            <p class="dercripcion"></p>
        `
        container.appendChild(cards);
    })
}

const catalogo = d.getElementById('catalogo'),
    inicio = d.getElementById('inicio');


catalogo.addEventListener('click', e => {
    e.preventDefault();

    mostrarProductos();
});

inicio.addEventListener('click', e => {
    // e.preventDefault();

    container.innerHTML = null;
});