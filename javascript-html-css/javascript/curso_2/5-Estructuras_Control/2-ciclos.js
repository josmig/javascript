/**
 *  Do while
 *  While
 * 
 */

let contador = 0 ;

//Mientras la condicion no se cumpla , el bucle seguira corriendo formando un loop infinito
while(contador <= 10){    
    console.log("While :" + contador);
    contador++;
}
//Con Do While (al menos se tiene que ejecutar una vez el codigo,luego vera si la condición se cumple)
do{
    console.log("do while :" + contador);
    contador++
}while(contador< 10)

/*En la actualida estos dos ciclos se estan dejanod de usar */

//Ciclo for
/**Estructura de un for
 * for(incilizacion de variable; condición ; decremento o incremento){*      
 *      Sentencia que ejecuta el for
 *      Sentencia que ejecuta el for
 *      Sentencia que ejecuta el for
 * }
 */
for(let i=0; i< 10 ; i++){
    /* console.log("for : " + i); */
}

let numeros = [0,20,41,10,23,09,100,4321];
//Con esto tenemos la inicializacion , condición y incremento/decre en una sola linea cosa que los while no
for(let i=0; i <numeros.length; i++){ 
    console.log("For : " + numeros[i]);
}

//Utilizamos otra variante del for pero mas corta , for in
const persona= {
    nombre:'Jose',
    apellido:'Pantigoso',
    edad:23
};

//For in (nos permite recorrer / iterar las propiedades y atributos que tenga un objeto primitivo)
for(const propiedad in persona){ //Sirve mas para objetos primitivos de JS
    console.log(`Key : ${propiedad}, Value : ${persona[propiedad]}`);
}

//For of(nos permite recorrer todos los elementos de cualquier objeto  de JS que sea iterable sea Objetos,Arrays )
for (const elemento of numeros) {//Sirve mas para arrays
    console.log(elemento);
}

let cadena ="Hola mundo";
for(const caracter of cadena){
    console.log(caracter);
}

