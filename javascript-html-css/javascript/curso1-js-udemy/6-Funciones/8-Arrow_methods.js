const productos = [
    {nombre:'Celular', color:'negro',precio:123},
    {nombre:'Celular XS', color:'rojo',precio:123},
    {nombre:'Celular Iphone', color:'amarillo',precio:123},
    {nombre:'Celular HUAWEI', color:'plateado',precio:123},
    {nombre:'Celular XIOAMI', color:'negro',precio:123},
    {nombre:'Celular Samsumg', color:'negro',precio:123},
]
//Con el metodo forEach
const nuevoArreglo2 = productos.map( asd => `${asd.nombre} ${asd.color} ${asd.precio}`)
productos.forEach( p => console.log(`${p.nombre} ${p.color} ${p.precio}`))
console.log(nuevoArreglo2);