/**
 * 
 * @form  1-Captura el elemento (formulario)por JS
 *        2-Se le asigna un evento(submit)
 * @task  1-Captura el elemento (input) por JS
 * @textoTask 1- Captura el valor del elemento Task(input) se lo que hayamos escrito y reemplazamos su valor a vacio luego de que se termine el evento submit
 * 
 */
const todos = [];
const form = document.getElementById('form');
form.onsubmit = (e) => {
    e.preventDefault(); // con esto no se actualiza la pagina al momento de enviar la tarea actual del input
    const task = document.getElementById('task');
    const textoTask = task.value;
    task.value ='';
    todos.push(textoTask);
    /* console.log(textoTask); */

    const lista = document.getElementById('lista');
    /* lista.innerHTML = '';
    for(let i=0; i < todos.length; i++){
        lista.innerHTML += '<li>'+ todos[i] + '</li>';
    } */

    //Usando MAP para recorrer el arreglo(formas mas simpllificada)
    const listaTemplate = todos.map(t => '<li>'+ t +'</li>'); 
    //nuestra listaTemplato ahora es un arreglo por eso no se puede pasar a innerHTML por eso ponemos el metodo join que sirve para unir y concatenar. 
    lista.innerHTML = listaTemplate.join('');
    console.log(listaTemplate);

}
