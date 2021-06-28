//ForEach para iterar un array

const productos = [
    {nombre:'Celular', color:'negro',precio:123},
    {nombre:'Celular XS', color:'rojo',precio:123},
    {nombre:'Celular Iphone', color:'amarillo',precio:123},
    {nombre:'Celular HUAWEI', color:'plateado',precio:123},
    {nombre:'Celular XIOAMI', color:'negro',precio:123},
    {nombre:'Celular Samsumg', color:'negro',precio:123},
]

for(let i=0; i<productos.length;i++){    
    /* console.log(`${productos[i].nombre} ${productos[i].color} ${productos[i].precio}`); */
}

//Con el metodo forEach
const  nuevoArreglo = productos.forEach(function(p){
    console.log(`${p.nombre} ${p.color} ${p.precio}`);
})


//Usando MAP para interar un array 

//forEach y map son practicamente igual en sintaxis pero .map te crea un arreglo nuevo , llena una variable 
//con un arreglo nuevo.

const nuevoArreglo2 = productos.map(function(asd){
  console.log(`${asd.nombre} ${asd.color} ${asd.precio}`);  
})

console.log(nuevoArreglo);
console.log(nuevoArreglo2);




