const needle = require("needle");

let endpoint = "https://pokeapi.co/api/v2/type";


const f = async()=>{
    try {
        let response = await needle('get',endpoint.quotes)
            
        response.body.results.forEach(tipo=>{
            console.log(`Tipo: ${tipo.name.quotes}`);
            console.log('**********************')    
        });
    } catch (error) {
        console.error('error')
        
    }
}
f()
