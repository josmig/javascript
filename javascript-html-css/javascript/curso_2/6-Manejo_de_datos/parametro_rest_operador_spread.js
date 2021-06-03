//Los parametros rest es una forma de agregar mas valores y que esos valores sumen a los anteriores

function sumar(a,b,...c){
    
    let resultado = a+b;
    c.forEach(numero=>{
        resultado += numero;
    });
    
    return resultado;
}

console.log(sumar(1,2));
console.log(sumar(1,2,3)); //A partir del 3 parametro los valores se suman a  los dos primeros
console.log(sumar(1,2,3,4));
console.log(sumar(1,2,3,4,5));
console.log(sumar(1,2,3,4,5,6));

/**Operador spread 
 * En lugar de estar haciendo push o concatenaciones de un arreglo a otro podemos usar el operador
 * spread donde es una forma mas comoda de realizar una copia.
*/

const arreglo1 = [1,2,3,4],
    arreglo2 = [5,6,7,8,9,0];

const arreglo3 = [...arreglo1,...arreglo2,10,11,12];
console.log(arreglo3);