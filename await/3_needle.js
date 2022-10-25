const needle = require("needle");

let endpoint = "https://lucifer-quotes.vercel.app/api/quotes/5";



const f = async(endpoint)=>{
    try {
        let response = await needle('get',endpoint)
            
        response.body.forEach(tipo=>{
            console.log(`Tipo: ${tipo.author}`);
            console.log('**********************')    
        });
    } catch (error) {
        console.error('error')
        
    }
}
f(endpoint)
