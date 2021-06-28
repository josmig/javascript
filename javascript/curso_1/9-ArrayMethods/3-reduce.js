const carrito = [
    {nombre:'Monitor 27 Pulgadas', precio:400},
    {nombre:'PC Gamer', precio:304},
    {nombre:'Celular', precio:999},
    {nombre:'Tablet' , precio:400},
    {nombre:'Teclado',precio:421}
]

//como decir al un usuario el total de pagar
//con un foreach
let total = 0;
carrito.forEach(producto => total += producto.precio)
console.log(total);

//Con un reduce , primero se bota el total o valor luego ponemos el producto , lo inicializamos en 0 para quehaga una suma honesta.
  let resultado = carrito.reduce((total,product) => total + product.precio , 0)
  console.log(resultado);
