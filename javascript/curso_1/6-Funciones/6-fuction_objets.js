
//Pasando un Objeto confunctions normales a Arrow function 
const reproductor ={
    cancion:'',
    reproducir: id => console.log(`Reproduciendo la canción con el id:${id}`),
    pausar: ()=> console.log('pausando...'),
    borrar: id => `Borrando cancion ${id}`,
    crearPlaylist :(nombre,id) => console.log(`Creando la playlist ${nombre} con el id:${id}`),
    reproducirPlaylist: (id) => console.log(`Creando la playlist ${id}`),
    set nuevaCancion(cancion){
        this.cancion = cancion
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }
    
}

reproductor.reproducir(30)
reproductor.reproducir(20)
reproductor.pausar()
reproductor.borrar(30)
reproductor.crearPlaylist('Rock de los 80',2)
reproductor.reproducirPlaylist(2)
reproductor.nuevaCancion ='Demon Fire'
reproductor.obtenerCancion