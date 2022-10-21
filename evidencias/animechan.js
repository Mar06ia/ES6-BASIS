import axios from 'axios';

let config = {
    "method":"get",
    "url":"https://animechan.vercel.app/api/random"
};

const animes = async(config) =>{
    try {
        let response = await axios(config);
        console.log(`${response.data.anime}`);
    } catch (error) {
        console.log(error);
    }
}

// animes(config)
axios(config)
.then((response)=>{
    console.log(response.data.anime);
})
.catch((error)=>{
    console.log(error)
})