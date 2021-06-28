const persona = [
    {nombre : 'Rick', edad:22, aprendiendo:'Javascript'},
    {nombre : 'Alejandra', edad:22, aprendiendo:'Java'},
    {nombre : 'Karen', edad:30, aprendiendo:'Golang'},
    {nombre : 'Miguel', edad:25, aprendiendo:'AdobeXD'},
    {nombre : 'Pepe', edad:34, aprendiendo:'Angular'},
    {nombre : 'Koki', edad:32, aprendiendo:'React'},
    {nombre : 'Ana', edad:21, aprendiendo:'Typescript'},
]

console.log(persona);

//Mayores de 28 años
const mayores = persona.filter(p => {
    return p.edad > 28
})
console.log(mayores);

//Que aprende Alejandra
const learn = persona.find(p =>{
    return p.nombre === "Alejandra"
})
console.log(`${learn.nombre} , esta aprendiendo ${learn.aprendiendo}`);

//Reduce para calcular las edades de todos , se puede hacer mas cosas pero nos vasamos en esto solamente
const edades = persona.reduce( (edadT,p) => {
    return edadT + p.edad;
},0)
console.log(`El total de las edades es de ${edades}`);
console.log(`El promedio de edad es de ${edades / persona.length}`);