
/**
 * Una funcion es un bloque de codigo , autocontenido, que se puede definir una vez
 * y ejecutar en cualquier momento .Opcionalmente, una funcion puede aceptar parametros
 * y devolver un valor
 * 
 * Las funciones en Javascript son objetos , un tipo especial de objetos :
 * 
 * Se dice que las funciones son ciudadanos de primera clase porque pueden asignarse a un valor
 * , y pueden pasarse como argumentos y usarse como un valor de retorno.
 */


/**Funcion declarada */
function estoEsUnaFuncion(){
    console.log('Uno'); 
    return 19; /**Si hay un return en mitad de una operacion, ignora todo lo que hay debajo */
    console.log('Dos');
    console.log('Tres');
    /*No retorna nada porque no tiene un console.log() */
    return "La funcion ha retornado una cadena de texto";
}

/**Innovacion de funcion  -> En cualquier momento se puede ejecutar y podemos ejecutarlo mas de una vez*/
estoEsUnaFuncion();

let nuevaFucion = estoEsUnaFuncion();
console.log(nuevaFucion);


/**Funcion con parametros */
function conParametros(a,b){
    console.log(a+b);
   /*  return a+b; */
    console.log('jejeje');
}
/* let a = conParametros(12,3); */
/* console.log(a); */
conParametros(123,483821);

function dameTuNombre(nombre,apellido,edad){
    console.log(`Hola, mi nombre es ${nombre} ${apellido} tengo ${edad}`);
}
dameTuNombre('Jose','Pantigoso',23);
dameTuNombre(); /**Cuando no le asignamos valores , nos bota indefinido */

//Funcion declarada VS Funcion Expresadas
funcionDeclarada(); /**No importa si la invocacion de la funcion esta encima JS reconoce y ejecuta la funcion
 * El lenguaje lo hace por atras.
*/
function funcionDeclarada(){
    console.log('Esto es una funcion declarada puede declararse en cualquier parte de nuestro codigo incluso antes de que la funcion sea declarada');
}
funcionDeclarada();

/**Expresada(la funcino se le asigna a una variable) y anonima (no tiene nombre)*/
/* funcionExpresada();  nos bota error porque no se puede acceder a la funcion antes de inicializar*/
const funcionExpresada = function(){
    console.log('Esto es una funcion expresada es decir una funcion que se le asigno como valor a un variable, si invocamos esta funcion antes de su definicion Javascript nos dira');    
}
funcionExpresada();