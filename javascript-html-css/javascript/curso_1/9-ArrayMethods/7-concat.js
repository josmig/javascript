const meses = ['Enero','Febrero','Marzo','Abril'];
const meses1 = ['Mayo','Julio','Junio','Agosto'];
const meses2 = ['Setiembre','Octubre','Noviembre','Diciembre']
//Array method .concat esto nos permite a unir dos arreglos

const meses3 = meses.concat(meses1,meses2)
console.log(meses3);


//Aca es con el spreed operator
const resultado = [...meses,...meses1,...meses2,'HOLA'];
console.log(resultado);


