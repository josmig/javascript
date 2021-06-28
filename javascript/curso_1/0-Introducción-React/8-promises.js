const aplicarDescuento = new Promise((resolve,reject) => {
    setTimeout( () => {
        let descuento = true;
        if(descuento){
            resolve('Descuendo Aplicado')
        }else{
            reject('No se pudo aplicar descuento')
        }
    }, 3000)
})
aplicarDescuento.then(resultado => {
    console.log(aplicarDescuento);
})

//Promesas con AJAX
const descargarUsuarios = cantidad => new Promise((resolve , reject) => {
    //Pasar cantidad a la API
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`

    //llamdo ajax
    const xhr= new XMLHttpRequest();
    //abrir la conexion
    xhr.open('GET',api,true)
    //on load
    xhr.onload = () => {
        if(xhr.status === 200){
            resolve( JSON.parse(xhr.responseText))
        }else{
            reject(Error (xhr.statusText))
        }
    }

    //Opcional (error)
    xhr.onerror = (error) => reject(error)
    //send
    xhr.send()
});
descargarUsuarios(10)
        .then(
                miembros => console.log(miembros),
                error => console.error(new Error('Hubo un error' + error)
                )
            )