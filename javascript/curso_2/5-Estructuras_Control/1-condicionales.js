/**
 * Una estructura de control es el mecanismo que permite controlar el flujo de programación* 
 * Su función es ayudar a evaluar condiciones.
 * IF / ELSE
*/
let edad=19;
/**Dentor de las condicionales podemos usar valors de mayor o menor < = > o los operadores logicos */
if(edad <= 17 ){
    console.log('Eres menor de edad');
}else{
    console.log('Eres mayor de edad');
}

/**Condicionales anidadas
 * Ejercicios
 * Poner buenos dias, buenas tades y buenas noches segun a la zona horario de tu pais
 */

let dia = 20;
if( dia >= 0 && dia <=5){
    console.log('Dejame dormir ZzZzZ');
}else if(dia >= 6 && dia <= 11){
    console.log('Buenos dias!!');
}else if(dia >= 12 && dia <= 18){
    console.log('Buenas tardes!!');
}else if(dia >=19 && dia <=23){
    console.log('Buenas noches');
}else{
    console.log('Zona horaria incorrecta');
}

/**Operador ternario */
console.log('Operador ternario');
let e=18;
let age = (e >= 18) ? 'Eres mayor de edad' : 'Eres menor de edad';
console.log(age);

/**Switch case */
console.log("**** Uso de Switch ****");
day = 10;
switch(day){
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miercoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sabado');
        break;
    default: //Cualquier valor que no este comteplando cae en esta condción
        console.log('Agrega un valor valido');
        break;
}