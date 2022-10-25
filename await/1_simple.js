let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let endpoint = "https://pokeapi.co/api/v2/type";

function exito(response) {
    console.log(JSON.parse(response))
}


function fallo(status) {
  console.log(status);
}

function get_data(endpoint, exito, fallo) {
  //CREAMOS EL OBJETO DE CONEXION A LA API
  let http = new XMLHttpRequest();
  //abrir una conexion
  http.open("get", endpoint);
  //enviar la solicitud(request) a la api
  http.send();
  //hacer el tratamiento de la response
  http.onload = function () {
    if (http.status === 200) {
      exito(http.responseText);
    } else {
      fallo(http.status);
    }
  };
}

//invocar funcion get_date
get_data(endpoint, exito, fallo);

async function f(url, exito, fallo) {
  try {
    //await:esperar
    let response = await get_data(url);
    exito(response);
  } catch (error) {
    fallo(error);
  }
}
//f(endpoint, exito, fallo);
