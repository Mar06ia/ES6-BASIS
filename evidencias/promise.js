//npm i needle
const needle = require('needle')

const url = "https://fakestoreapi.com/products"


needle('get',url)
    .then((response)=>{
        console.log(response.body)
    })
    .catch((error)=>{
    console.error(error)
    })