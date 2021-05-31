// for(let i= 0; i <= 10 ; i++){
//   console.log(`Numero $`)
// }

//Par y no par
// for(let i=1; i <=20 ; i++){
//   if(i % 2 ==0){
//     console.log(`El numero ${i} es par`);
//   }else{
//     console.log(`El numero ${i} no es par`);
//   }
// }

//Con un objeto
const carrito = [
  {nombre : 'Mouse',precio:23},
  {nombre: 'Monitor', precio: 300},
  {nombre : 'Case', precio: 200},
  {nombre : 'Teclado' , precio: 150}
]

for(let i= 0 ; i < carrito.length ; i++){
  console.log(carrito[i]);
}
