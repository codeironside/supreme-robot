const express = require('express')
const path = require('path')
const app = express()
const port = 8000

app.use(express.static(path.join(__dirname,'./css/loginsytle.css')))
app.use(express.static(path.join(__dirname,'./scripts/loginscript.js')))
app.use('',(req,res,next)=>{
res.sendFile(path.join(__dirname,'./html','index.html'));
});
app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
});