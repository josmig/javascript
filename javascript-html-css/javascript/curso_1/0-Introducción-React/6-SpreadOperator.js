let lenguajes = ['Javascript','PHP','Python']
let frameworks = ['Angular','Laravel','Django']


//unir los arreglos en uno solo
let combinacion = [...lenguajes,...frameworks]
//crear un nuevo array heredando de otro
let nuevo = [...frameworks]
console.log(combinacion);
console.log(nuevo);