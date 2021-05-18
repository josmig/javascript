const carrito = [
    {nombre:'Monitor 27 Pulgadas', precio:400},
    {nombre:'PC Gamer', precio:304},
    {nombre:'Tablet' , precio:123},
    {nombre:'Celular', precio:999},
    {nombre:'Tablet' , precio:400},
    {nombre:'Teclado',precio:421}
]

//con un foreach
let resultado= '';
carrito.forEach((p,i)=> {
  if(p.nombre === 'Tablet'){
    resultado = carrito[i];
  }
});
console.log(resultado);

//con un .find

//.find nos dara como resultado al primero que cumpla con la condicion
const resultado2 = carrito.find( p => p.nombre === 'Tablet')
console.log(resultado2);
