const http = require('http')

const port = 3000
const server = http.createServer()


server.on('request',(req, res) => {
    if (req.url === "/friends"){
        // res.writeHead(200,{
        //     'content-type':'application/json'
        // })
        res.statusCode=200
        res.setHeader('content-Type',"application/json")
        res.end(JSON.stringify({
            id:1,
            name:'sir isaac newton'
        }))
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