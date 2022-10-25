let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let endpoint = 'https://pokeapi.co/api/v2/type'

const exito = (response)=>{
/*    const tipos = JSON.parse(response).results
    tipos.forEach((tipo)=>{
        console.log(`Tipo:${tipo.name}`)
        console.log(`-----------------`)
    })
*/
console.log(JSON.parse(response))
}

const fallo =(status)=>{
    console.log(status)}

const get_data=(endpoint, exito, fallo)=>{
    //CREAMOS EL OBJETO DE CONEXION A LA API
let http=new XMLHttpRequest()
//abrir una conexion
http.open('get',endpoint)
//enviar la solicitud(request) a la api
http.send()
//hacer el tratamiento de la response
http.onload = ()=>{
    if(http.status===200){
        exito(http.responseText)
    }else{
        fallo(http.status)
    }

}
}

//invocar funcion get_date
get_data(endpoint,exito,fallo)