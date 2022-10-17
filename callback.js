function llamarAlumno(alumno,callback){
  let llamadaAlumno=`llamado al alumno: ${alumno}`

  //ejecutar la funcion callback
  callback(llamadaAlumno)
}

//definir funcion calback
const imprimir=(texto)=>{
    console.log(texto)
}

//invocar la funcion principal de llamarAlumno
llamarAlumno("maria hernandez", imprimir)