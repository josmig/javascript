inciarApp()

function inciarApp(){
    console.log('Iniciando app....');
    segundaFunction()
}

function segundaFunction(){
    console.log('Desde la segunda funcion...');
    authentication("Miguel")
}

function authentication(usuario){
    console.log('Autenticando Usuario');
    console.log(`Usuario autenticado exitosamente: ${usuario}`);
}