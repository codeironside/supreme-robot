const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 8000

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'html')); //use html directory as default view folder

app.use('/scripts', express.static(path.join(__dirname, 'scripts')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/css', express.static(path.join(__dirname, 'css')));

app.get('/', (req, res) => {
    res.render('index'); 
})
app.use(express.json)
app.use(express.urlencoded())
app.post("/formpost",(req,res)=>{
    console.log(req.body)
})

app.get('/about', (req, res) => {
    res.render('About'); 
    //Replace all ../ referencing files or images with a single / or none at all since static file paths have been set
    //It's not necessary, but to be on the safe side.
})


app.listen(port, ()=>{
    console.log(`server started at local hostt  http://localhost:${port}`)
});