// uso de los break y continue

// for( let i=0; i <= 10 ;i++){
//   if(i === 5){
//     console.log('CINCO');
//     break;
//   }
//   console.log(`Numero : ${i}`);
// }
//
// for( let i=0; i <= 5 ;i++){
//   if(i === 3){
//     console.log('TRES');
//     continue;
//   }
//   console.log(`Numero : ${i}`);
// }

const carrito = [
  {nombre : 'Mouse',precio:23},
  {nombre: 'Monitor', precio: 300, descuento: true},
  {nombre : 'Case', precio: 200},
  {nombre : 'Teclado' , precio: 150}
]

for(let i = 0; i < carrito.length ; i++){
  if(carrito[i].descuento){
    console.log(`EL producto  ${carrito[i].nombre} tiene descuento`);
    continue; //con esto una vez mostrado lo necesario , continua con el arreglo 
  }
  console.log(carrito[i]);
}
