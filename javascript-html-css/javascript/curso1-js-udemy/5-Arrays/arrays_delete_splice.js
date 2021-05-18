const numeros = [1,2,3,4,5,6]
const nums = ['uno','dos']

let union = [...numeros,nums]
/* console.table(union)
 */

//Eliminando elementos de un array
numeros.pop() //elimina el ultimo elemento del array
console.table(numeros)

numeros.shift() //elimina el primer elemento del array
console.table(numeros)

numeros.splice(1,2) //elimina por las posiciones y luego cuantos elminar luego de esa posicion
// (0-1)=2  +2Posiciones mas (3-4) =5 | Botaria 2,5
console.table(numeros)
