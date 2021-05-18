const saldo = 200
const credito = 1000
const disponible  = saldo + credito 
const deuda = 1199

if(saldo > deuda || credito > deuda || disponible > deuda){
	console.log('Saldo suficiente para pagar la deuda');	
}else {
	console.log('Saldo insuficiente');
}