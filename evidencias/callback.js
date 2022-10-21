//callback
//npm i axios

const request = require('request')

let endpoint = 'https://fakestoreapi.com/products'

const r=request(endpoint, {json: true}, function(err,response,data){
    
    response.body.forEach(element => {
        console.log(`Precio:${element.price}`)
        console.log('+++++++++++++++++')
    });

})