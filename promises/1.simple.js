const { resolve } = require('path')
const { exitCode } = require('process')
const { threadId } = require('worker_threads')
const XMLResquest = require('xmlhttprequest')

const url="https://pokeapi.co/api/v2/type"
/*
//funcion conectar una api 
//en modo asincrono
const get_data =(endpoint)=>{
    //definir una promesa para la conexion API
    let promise = new Promise((resolve,reject) => {
    //1.crear el objeto xmlhttp:
    const h = new XMLHttpRequest();
    //2.Establecer  una conexion a la API
    h.open('GET', endpoint)
    //3.Enviar la request a server (API)
    h.send()
    //4.Tratar los datos de la response
    h.onload = ()=>{
        if(h.status ===200){
            resolve(h.responseText)
        }else{
            reject(h.status)
        }
    }
    console.log(promise);
}
*/
/*+
//invocar la funcion
get_data(url)
    .then((response)=> {
        exito(response)
})
.catch((status)=>){
    fallo(status)
}*/