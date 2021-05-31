
/* const tarea = 'Holiboli'
export default tarea; */
export const nombreTarea = 'Pasear al perro';

//podemos poner export default name_variable  y cuando importemos no es necesario poner {}
//podemos exportar no solo variables sino funciones ,clases.

//Exportando una funcion
export const addTarea = (tarea,urgencia) => {
    return `La tarea ${tarea}, tiene una urgencia de ${urgencia}`
}

export const complete = () => {
    console.log('Tarea completada exitosamente');
}
