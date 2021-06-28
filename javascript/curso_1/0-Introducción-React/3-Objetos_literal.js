
//Objeto literal enhacement
const banda = 'Metallica'
const album = 'Master of puppets'
const canciones = ['One','Enter sadmana','The unforgiven']

// Objeto conocido - tipico
const grupo = {
    nombre: 'Metallica',
    album: 'Master of ppuppets',
    canciones: ['One','Enter Sadman']
}
console.log(grupo);

//Forma nueva
const metallica = {banda,album,canciones}
console.log(metallica);


//Objetos con funciones
const persona = {
    nombre:'Miguel',
    profesion:'Developer & Designer',
    edad:22,
    genero:'Rock and Roll & Metal',
    mostrarInformacion(){
        console.log(`${this.nombre} es de profesion ${this.profesion}
            tiene  ${this.edad} , le gusta el genero de ${this.genero}`);
    }
}
persona.mostrarInformacion()