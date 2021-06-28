const carrito = [
    {nombre:'Monitor 27 Pulgadas', precio:400},
    {nombre:'PC Gamer', precio:304},
    {nombre:'Tablet' , precio:123},
    {nombre:'Celular', precio:999},
    {nombre:'Tablet' , precio:400},
    {nombre:'Teclado',precio:421}
]

//todos los elementos se debe de cumplir con la condicion con every , pero con la condicion some al menos uno es como un AND o OR

//todos los productos son menores que 500? false  hay uno que tiene el precio de 999 , every me bota falsa
const resultado = carrito.every( p => p.precio < 500);
console.log(resultado);


//con some alguno uno tiene que cumplirse
const resultado2 = carrito.some(p => p.precio < 500);
console.log(resultado2);
