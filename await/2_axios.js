//npm i axios
//node await/2_axios.js

const axios = require('axios');
const needle = require('needle');


let config = {
    method: 'get',
    url: "https://pokeapi.co/api/v2/type"
}


const f = async()=>{
    try {
        let response = await axios(config)
        response.data.results.forEach(element=>{
            console.log(`Tipo: ${element.name}`)
            console.log('**********************')    
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

