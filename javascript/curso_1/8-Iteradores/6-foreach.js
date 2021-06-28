const pendientes = ['Tarea','Comoer','Tesis','Trabajar en mi proyecto']

//pendientes.forEach( (pendi,index) => console.log(`${index + 1} : ${pendi}`))


// Map y foreach
//Map te crea otro arreglo dentro
//Foreach recorre el arreglo

const carrito = [
  {nombre:'Laptop',precio:340},
  {nombre:'Pc' , precio:300},
  {nombre: 'IPhone', precio:400},
  {nombre:'Audifonos', precio:304}
]
const arreglo1 = carrito.forEach( (p,index) => {
    return `${index}: ${p.nombre}`;
})
const arreglo2 = carrito.map(p => p.nombre)

console.log(arreglo1);
console.log(arreglo2);
