let menuDelDia = [
    {
        nombre: 'Milanesa',
        precio: 200
    },
    {
        nombre: 'Carne asada',
        precio: 300
    },
    {
        nombre: 'Pollo con papas',
        precio: 500
    },
    {
        nombre: 'Estofado',
        precio: 250
    },
    {
        nombre: 'Lomito',
        precio: 300
    }
]

let postres = ["Volcan de chocolate", "Helado de chocolate", "Brownie de chocolate"];


console.log('Platos del dia...');

for(let plato of menuDelDia) {
    console.log(`${plato.nombre} $${plato.precio}`);
}


console.log('********* POSTRES ***********');

for (let postre of postres) {
    console.log(`Postre: ${postre}`);
}
postres.splice(1,1,"Helado de vainilla"); 


console.log('********* NUEVO POSTRE ***********');

for (let postre of postres) {
    console.log(`Postre: ${postre}`);
}