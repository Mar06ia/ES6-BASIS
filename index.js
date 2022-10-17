import {materias} from "./materias.js";
import pkg from 'colors'
import {eliminar} from "./eliminar.js";
import {actualizar} from "./actualizar.js";

//console.log(materias);

//metodos de los objetos Arreglo
//foreach:recorre un arreglo
/*
materias.forEach((materia)=>{
   if(materia.tipo==='transversal'){
        console.log(`materias:${materia.nombre}`.yellow)
        console.log(`materias:${materia.instructor}`.blue)
    }
   
})

//map: construye un arreglo con base en otro
const profesores = materias.map((materia)=>{
    return materia.instructor
})

//find: encontrar la primera ocurrencia(elemento)
//que cumpla con el criterio dado

const PHP = materias.filter((materia)=>{
    return materia.instructor==="yaneth castillo"
})
*/

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

