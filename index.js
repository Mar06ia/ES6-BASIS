import {materias} from "./materias.js";
import pkg from 'colors'
//import {eliminar} from "./eliminar.js";
//import {actualizar} from "./actualizar.js";


//push: agrega un elemento a un arreglo:
materias.push({
    id:5,
    nombre:"diseño",
    instructor:"carolina forero",
    tipo: "tecnica",
    notas: [
     4.5,
     4.4,
     3.2
    ]
 })
console.log(materias)
 //splice: delete
 
 /*materias.splice(0,1)
 console.log(materias)
 //actualizar:findindex

console.log(materia.actualizar)*/

