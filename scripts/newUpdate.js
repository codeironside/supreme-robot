// import aircarftDetails from './tci.mjs';
// console.log(Cache)
// document.getElementById("airName").textContent= aircarftDetails

const axios = require("axios")

axios.get("https://www.google.com")
    .then((response)=>{
        console.log(response)
    })
    .catch((err)=>{
        console.log(err)
    })
    .then(()=>{
        console.log('all done!')
    })