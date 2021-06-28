
const producto = "Monitor 20"
const precio = '30 USD'

//Formas de concatenar
console.log(producto.concat(precio));
console.log(producto + "Con un precio de : " +precio);

//Usando los template Strings
console.log(`El precio del producto ${producto} es ${precio} dolares americanos`);

//Cortar(eliminar) espacios en blanco de un String
const cadena ="   Jose Miguel Pantigoso Puraca   s"
console.log(cadena);
console.log(cadena.trim()); //Metodo antiguo
//Nuevos metodos para cortar espacios
console.log(cadena.trimStart()); //elimina los espacios del inicio
console.log(cadena.trimEnd()); //elimina los espacios del final


