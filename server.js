const express = require("express")
const path = require('path')
const {fs} = require('fs')
const router = express.Router()

const app = express()
const port = 8000 

// app.get('/',(res,req)=>{
//     fs.readFile('./html/index.html', null, function(error, data){
//         if(error){
//             res.writeHead(404);
//             res.writeHead('file not found')
//         }else{
//             res.write(data)
//         }
//         res.end()
//     })

// })

app.use(express.static('./html'))
app.use(express.static('./css'))
app.use(express.static('./scripts'))
app.use('/css',express.static(__dirname + './css'))
app.use('/scripts',express.static(__dirname + './scripts'))
app.use('/images',express.static(__dirname + './images'))

app.set('views','./html')
app.set('views','./css')
app.set('view engine','ejs')

// app.get("",(res)=>{
//     res.sendFile(__dirname + './html/index.html')
// })

app.get("/html/index.html",(req,res)=>{

    res.render('index')
})





app.listen(port,()=>{
    console.log(`server is listening o port ${port}`)
})