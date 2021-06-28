const producto = {
    nombre : 'Televisor',
    precio:300,
    disponible:true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de : ${this.precio}`);
        //this busca las propiedades dentro del mismo objeto
    }
}

producto.mostrarInfo();
console.log(Object.keys(producto)); //retorna las propiedades del objeto
console.log(Object.values(producto)); //retorna los valores del objeto
console.log(Object.entries(producto)); //retorna todo el objeto


//Objeto literal
/* const product = {
    nombre: 'IPhone',
    precio:3000,
    estado:true,    
} */

//Object constructor no necesita de un objeto literal
function Producto (nombre,precio){
    this.nombre= nombre;
    this.precio=precio
    this.disponible=false
}

const producto1 = new Producto('iPhone',5000)
console.log(producto1);