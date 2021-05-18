const producto = {
    nombre : 'Celular',
    marca: 'IPhone',
    color:'Negro'
}


//Destructuring normal
//Es necesario que sea el mismo nombre que el atr
const {nombre} = producto
console.log(nombre);


//Destructuring con arreglos
//En el caso de los arreglos nosotros decidimos el nombre pero lo primero que pongamos contara como
//el primer valor
const numeros = [1,2,3,4,5]

const[p,second] = numeros
const[ , , ...tres] = numeros //jalando solo un valor pero con los ... podemos jalar desde ahi adelante
/* console.log(p,second); */
console.log(tres);


