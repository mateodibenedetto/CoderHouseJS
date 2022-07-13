const productos = [
    {
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


const obtenerPesas = () => {
    const pesas = productos.filter(producto => producto.category === "pesas");
    console.log('Pesas');
    pesas.forEach(producto => console.log(`- ${producto.title}`))
}

let res = prompt("Que tipo de producto desea llevar?");

if(res.toLocaleLowerCase().includes("pesas")) {
    obtenerPesas();
} else {
    alert('No se encontro ningun producto');
}


const filtradoPrecios = () => {
    const precios = productos.filter(el => el.price < precio);
    console.log('Precios disponibles')
    precios.forEach(el => console.log(`${el.title} ${el.price}`)); 
}

let precio = parseInt(prompt("Cual es el monto maximo que está dispuesto a pagar?"));

if (precio <= 0) {
    alert('El numero no puede ser menor de cero o igual')
} else if (precio >= 1) {
    filtradoPrecios();
} else {
    alert('No se encontro ningun precio');
}