const producto={
    nombre:'Monitor 20 Pulgadas',
    precio:300,
    disponible:true,
}
const medida={
    peso:'1kg',
    medido:'1m'
}


//Uniendo dos objetos en uno
const resultado = Object.assign(producto,medida)
//console.log(resultado);

//Operador Spread Operator o Rest Operator
const result1 = {...producto, ...medida}
console.log(result1);