const meses = ['Enero','Febrero','Marzo','Abril']
const carrito = [
  {nombre:'Monitor 27 Pulgadas', precio:400},
  {nombre:'PC Gamer', precio:304},
  {nombre:'Celular', precio:999},
  {nombre:'Tablet' , precio:400},
  {nombre:'Teclado',precio:421}
]

//Con foreach
meses.forEach((m,i) => {
  if(m === 'Abril'){
    console.log(`El mes de ${m} esta con el indice ${i}`);
  }
})


//Encontrar el indice de Abril
const indice = meses.findIndex( mes => mes === 'Abril')
console.log(indice);


//Encontrar un indice de un arreglo de objetos
//Siempre el primer valor que encuentre lo manda asi se haya muchos el primer elemento es lo que cuenta
const indice2 = carrito.findIndex( p => p.precio === 400)
console.log(indice2);
