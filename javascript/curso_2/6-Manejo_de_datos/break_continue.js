/**
 * Loo que hace la sentencia break es salir de la estructura en la que esta 
 * Vimos el caso en Switch
 * 
 */

let numeros = [1,2,3,4,5,6,7,8,9,0];
for(let i=0; i<numeros.length; i ++){
    if(i === 5 ){
        break; //Rompe el flujo     con esta condición imprimira solamente hasta el valor 5 , como pide la condición
    }
    /* console.log(numeros[i]); */
}

for(let i=0; i<numeros.length;i++){
    if(i=== 5){
        continue; //Omite un numero para seguir con la ejecución normal del ciclo
    }
    console.log(numeros[i]);
}