let menu = [
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
    },
]

console.log('Platos del dia...');

for(let plato of menu) {
    console.log(`${plato.nombre} $${plato.precio}`);
}