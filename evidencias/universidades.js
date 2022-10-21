//npm i axios
//node evidencias/universidades.js
import axios from 'axios';

//const axios = require('axios');
const needle = require('needle');


let config = {
    method: 'get',
    //Agregar la base de datos creada en el Postman 
    url: "https://restcountries.com/v3.1/all:"
}


const f = async()=>{
    try {
        let response = await axios(config)
        response.data.forEach(pais=>{
            console.log(`Tipo: ${pais.name.common}`)
            console.log('&&&&&&&&&&&&&&&&&&&&&')    
        });
    } catch (error) {
        console.log('error')
        
    }
}
f()


axios(config)

.then((response)=>{
   // response.data.results.forEach(element => {
       // console.log(`Tipo: ${element.name}`)
      //  console.log('++++++++++++++++++++')
   // });
   return response.data.results
})
.then((data)=>{
    data.forEach(element => {
        console.log(`Tipo: ${element.name}`)
        console.log('++++++++++++++++++++')
    });

})
.catch((error)=>{
    console.error(error)
})

f()

