let colors = require('colors');



const g1=["laura",
         "carlos", 
           "ana"
         ]

const g2=[
            "enrique",
            "jairo",
            "valeria"
         ]

const g3= [
    ...g1,
    "danna",
    ...g2,
    "esteban"
]     

//desestructurar objeto
const estudiante = {
    id:1,
    nombre:'maria',
    apellido:'hernandez',
    identificacion: 1110451262,
    amigos: g3
    }


//desestructurar el estudiante
/*let{ nombre,identificacion }=estudiante


console.log(identificacion)
console.log(nombre.red)

//desestructurar arreglo el estudiante
let [ , c, ,j]=estudiantes

console.log(c,j)*/

//desestructurar arreglo el estudiante
console.log(estudiante);

