const usuario = false
const puedePagar =false

if(usuario && puedePagar){
	console.log('Si puedes pagar');
}else if(!puedePagar && !usuario){
	console.log('No puedes pagar');
}else if(!usuario){
	console.log('Debes identifacarte para comprar');	
}else if(!puedePagar){
	console.log('Fondos insuficientes');
}

