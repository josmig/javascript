const meses = ['Enero','Febrero','Marzo','Abril']
const carrito = [
  {nombre:'Monitor 27 Pulgadas', precio:400},
  {nombre:'PC Gamer', precio:304},
  {nombre:'Celular', precio:999},
  {nombre:'Tablet' , precio:340},
  {nombre:'Teclado',precio:421}
]

//Comprobar si un valor existe  en un arreglo

meses.forEach( mes =>{
  if(mes === 'Enero'){
    console.log('Enero si existe');
  }
})

//Se usa esto mayormente si queremos comprabrar que un valor existe dentro de un array tradicional
const resultado = meses.includes('Abril');
console.log(resultado);

//En arreglos de objetos se utiliza el metodo .some()
const existe = carrito.some( producto => producto.nombre === 'Tablet');
console.log(existe);


//En un arreglo tradicional tambien se puede utilizar el metodo .some()
const existe2= meses.some(p => p === 'Marzo');
console.log(existe2);
