//Usamos el return cuando el resultado de la funcion lo usaremos en otro lugar
//Ejmp

let total =0

function carritoCompras (precio){
    return total += precio
}

function impuesto(total){
    return total * 1.18
}

total = carritoCompras(300)
total = carritoCompras(1200)
total = carritoCompras(400)
total = carritoCompras(500)

const totalPagar = impuesto(total)
console.log(`El total del pedido es de ${totalPagar}`);
console.log(total);
