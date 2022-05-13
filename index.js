const http = require('http')

const port = 3000
const server = http.createServer()
const friends =[
    {
        id:0,
        name:"Nikola tesla"
    },
    {
        id:1,
        name:"Sir Isaac Newton"
    },
    {
        id:2,
        name:"Albert Einstein"
    }
]  
 
server.on('request',(req, res) => {
    const items = req.url.split('/')
    if(req.method==='POST' && items[1]==='friends'){
        req.on('data', (data)=>{
            const friend = data.toString()
            console.log('request: ', friend)
            friends.push(JSON.parse(friend))
            
        })
        req.pipe(res)
    }else if(req.method==='GET' && items[1]==='friends'){
        res.statusCode=200
        res.setHeader('content-Type',"application/json")
        if (items.length === 3){
            const friendIndex = Number(items[2])
            res.end(JSON.stringify((friends[friendIndex])))
        }else{
            res.end(JSON.stringify((friends)))
        }
            
    }else if(req.method==='GET' && items[1]==="messages"){

    }else if(req.url==='/messages'){
        res.setHeader('content-Type',"text/html")
         res.write('<html>')
         res.write('<body>')
         res.write('<ul>')
         res.write('<li>hello isaac!</li>')
         res.write('<li> what are your thoughts on astronomy')
         res.write('</body>')
         res.write('</html>')
         res.end()
    }else{
        res.statusCode=404
        res.end()
    }
    
})
server.listen(port, ()=>{
    console.log(`listening on port ${port}...`)
})