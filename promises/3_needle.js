
//npm i needle
const needle = require('needle')

const url = "https://pokeapi.co/api/v2/type"


needle('get',url)
    .then((response)=>{
        console.log(response.body)
    })
    .catch((error)=>{
    console.error(error)
    })

    