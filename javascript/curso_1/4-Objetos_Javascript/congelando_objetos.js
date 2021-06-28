"use strict";

const product = {
    name:'PC Gamer',
    desc:'PC de ultima potencia y generacion',
    tecnicos: {
        generacion: 10,
        color: 'negro',
        procesador:'Intel Corei 9',
        t_grafico:'NVDIA',
        año:2019
    },
    proveedor:'Oeschele',
    direccion:'Jr Tumbes ',
    numero:989723892
}
product.imagen = 'pc_wallpapers.png'

Object.freeze( product ) //con esto congelamos el objeto no podemos añadir ni eliminar nada ni editar
//Object.seal(product) //Con esto lo congelamos pero podemos editarlo 


product.name='IPhone'
delete product.imagen
console.log(product);



