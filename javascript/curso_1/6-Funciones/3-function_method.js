//Diferencia entre funcion y metodo

const numero1 = 20
const numero2 ="20"

console.log(parseInt(numero2)); //funcion

console.log(numero2.toString()); //metodo


//Parametros y Argumentos
function sumar(a,b){
    console.log(a + b);
}
sumar(2,3)
sumar(124,321)

//Ejercicio

/* let nombre_app = prompt('Nombre y Apellidos') */
//valores por default
function dameNombre(nombre ='Desconocido',apellido = ' '){ //si  no esta presente el valor ,agrega el otro
    console.log(`Hola ${nombre} ${apellido} , me da mucho gusto volverte a ver!`);
}

dameNombre("Jose" , "Pantigoso")
dameNombre('Maria')
