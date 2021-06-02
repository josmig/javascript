/**
 * 
 * 
 */

try{
    console.log('En el try se agrega el codigo a evaluar');
/*     noExiste(); */
    console.log('Segundo mensaje en el Try');
}catch(error){
    console.log('Catch captura cualquier error surgido o lanzado en el try');
    console.log(error);
}finally{ //Exista error o no siempre se ejcutara el Finally
    console.log('El bloque finally se ejecutara siempre al final de un try catch');
}

console.log("**** Errores personalizados ****");
try{
    let numero = "1y0";
    if(isNaN(numero)){ //con isNaN (podemos ver si una vriable es un numero o no)

        //Trabajando con nuestros propieos "errores" personalizados
        throw new Error("El carácter introducido no figura como un número");

    }
    console.log(numero * numero);
}catch(error){
    console.log("Se produjo el siguiente " + error);
}
