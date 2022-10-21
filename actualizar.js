import {materias} from "./materias.js";

export const actualizar=
materias.splice(2,3, {
    id: 4,
    nombre: "Calidad",
    instructor: "adriana duarte",
    tipo: "transversal",
    notas: [
        3.5,
        4.5,
        4.0
    ]
})


