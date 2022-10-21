//await
const needle = require("needle");

let endpoint = "https://lucifer-quotes.vercel.app/api/quotes/5";


const f = async()=>{
    try {
        let response = await needle('get',endpoint.quotes)
            
        response.body.results.forEach(tipo=>{
            console.log(`Frase: ${tipo.name.quotes}`);
            console.log('**********************')    
        });
    } catch (error) {
        console.error('error')
        
    }
}
f()