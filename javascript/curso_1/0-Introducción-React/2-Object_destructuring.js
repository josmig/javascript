const aprendiendoJS = {
    version:{
        nueva:'ES6+',
        anterior:'ES5'
    },
    frameworks : ['React','Angular','Vue'],
    dificultad: 'Intermedio'
}

console.log(aprendiendoJS);

//destructuring es extraer valores de un objeto
const {version:{nueva}, dificultad, frameworks} = aprendiendoJS
console.log(nueva);
console.log(dificultad);
console.log(frameworks);