/**
 *  Tipos de operadores :
 *  
 * Uso del =
 * = 1 igual es asignacion de variable
 * == 2 iguales es comparacion de valores
 * === 3 iguales es comparacion de tipo de dato y valor
 *
 */

console.log(7==7); //True
console.log("7" == 7); // True (compara los valores )
console.log(0 == false); // True

console.log(7 === 7); // True
console.log("7" === 7); //False (compara tipo de datos y valores)

console.log(0 === false); // como sabemos compara valor como tipo de dato

//Incremento - decremento
let i = 1;
//i = i+2;
//i +=3;
i*=3;
console.log(i)
//Operador unario
/*
* i++
* i--
* ++i
* --i
* */
let a = 7;
++a;
console.log(a)

/*Operadores logicos*/
/**
  || or -> Se ejecuta siempre y cuando una de las "condiciones" se cumpla
  && And -> Se ejecuta siempre y cuando "todas las condiciones" se cumplan
 */

