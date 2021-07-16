var superHeroe = {
    nombre: 'Spiderman',
    edad: 33,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'New York'
    },
    mostrarDireccion: function () {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
};
var direccion = superHeroe.mostrarDireccion();
console.log(direccion);
