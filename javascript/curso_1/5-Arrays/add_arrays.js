//Agregando arrays

const array = ['Enero','Febrero','Marzo']

console.log(array.push('Abril'));

console.log(array);


//Agregando al principio y al final
console.log('***ADD CARRITO***');
const carrito= []
const producto= {
    nombre: "Monitor 32 Pulgadas",
    color:"negro"
}
const producto1={
    nombre:"Celular IPhone",
    color:'Morado'
}

carrito.push(producto)
carrito.push(producto1)

const producto2 = {
    nombre: "Licuadora",
    color: 'Verde'
}
//Para agragar producto 2 al principio usamos el metodo unshit
carrito.unshift(producto2)

console.log(carrito);

//Con el operador Spred Operator podemos crear / unir dos arrays en uno solo
let resultado
resultado = [...carrito ,producto]
console.table(resultado);