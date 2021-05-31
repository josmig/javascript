const carrito = [
    {nombre:'Monitor 27 Pulgadas', precio:400},
    {nombre:'PC Gamer', precio:304},
    {nombre:'Celular', precio:999},
    {nombre:'Tablet' , precio:400},
    {nombre:'Teclado',precio:421}
]

//Filter crea un nuevo arreglo , nos puede filtrar mas de un elemento cosa que no puede hacer el findIndex() que solo encuentra 1

let resultado;
resultado = carrito.filter( p => p.precio > 400);
resultado1 = carrito.filter(p => p.precio < 600);
resultado2 = carrito.filter(p => p.nombre !== 'Tablet')
resultado3 = carrito.filter(p => p.nombre === 'Tablet')

console.log(resultado);
console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
