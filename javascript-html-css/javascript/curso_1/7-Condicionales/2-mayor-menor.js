
//Else if  & Switch

const dinero = 300
const deuda = 300
let tarjeta = false

if(dinero >= deuda){
	console.log('Si podemos pagar');

}else if(tarjeta){ //usamos el else if siempre y cuando haya mas de una condicional
	console.log('Si tengo tarjega');
}else{
	console.log('No es posible pagar');
}


//Switch case
const metodoPago = 'Tarjeta'

switch(metodoPago) {
	case 'efectivo':
		console.log(`Pagaste con ${metodoPago}`);		
		break;
	case 'cheque':
		console.log(`Pagaste con ${metodoPago}`);		
		break;
	case 'Tarjeta':
		console.log(`Pagaste con ${metodoPago}`);
		pagar();		
		break;
	default:
		console.log('Aun no seleccionaste un metodo de pago o metodo de pago no soportado');
		break;
}

function pagar(){
	console.log('Pagando...');
}