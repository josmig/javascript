const boolean1 = true
const boolean2 = false

console.log(boolean1 == boolean2);


// 

const autenticado = true

if(autenticado){ // no es necesario poner la variable booleana === true / false ya que jhaciendolo de
    //esta manera es lo mismo 
    console.log('Puedes acceder a Netflix');
}else{
    console.log('No puedes acceder a Netflix');
}

//Operador Ternario

console.log(autenticado ? 'Estas autenticado' : 'No estas autenticado');