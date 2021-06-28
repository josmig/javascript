const meses = ['Enero','Febrero','Marzo','Abril']
const carrito = [
  {nombre:'Monitor 27 Pulgadas', precio:400},
  {nombre:'PC Gamer', precio:304},
  {nombre:'Celular', precio:999},
  {nombre:'Tablet' , precio:340},
  {nombre:'Teclado',precio:421}
]

//con esto no modifica al array "padre" si no que crea otro
const meses1 = [...meses, 'Mayo','Junio','Julio','Agosto']
console.log(meses1);

meses.push('Mayo') //Esto si modifica al array principal
console.log(meses);

//Con un array de objetos
const product ={nombre : 'Mouse Gamer',precio : 50}
const carro1 = [...carrito , product]
console.log(carro1);
