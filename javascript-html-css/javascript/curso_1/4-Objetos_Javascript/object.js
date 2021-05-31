const producto = {
    nombre:'Monitor LG',
    descripcion:'LED 48"',
    precio:4000.00,
    moneda: 'PEN',
    estado: true
}
console.log(producto);

//Agregando nuevos elementos a nuestro objeto
producto.imagen = "aVATAR.jpg"
//Eliminando valores
delete producto.descripcion
console.log(producto);

//Destruction (Sirve para extraer datos funciona igual que un const nombre = producto.nombre) apartir
// de las ultimas versiones soporta el destruction que nos permite extraer el valor y crear la variable
const  {nombre,precio} = producto
console.log(nombre);

console.log("Objetos dentro de otro objeto");
//Objetos dentro de otro objeto
const carro = {
    nombre:'Nizan',    
    descripcion: {
        año:2020,
        color:'rojo',
        peso:1000,
        tipo: 'KG',
        fabricaciones:{
            pais:'China',
            empresa:'Japonesa'
        }
    }
}
console.log(carro);

//Cuando queremos acceder a un objeto determinado dentro de otro
const { nombre: namee , descripcion: { fabricaciones , fabricaciones: { pais } } } = carro
console.log(namee);
console.log(fabricaciones);
console.log(pais);


