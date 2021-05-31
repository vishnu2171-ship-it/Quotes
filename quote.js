const http = require('http')
const url = require('url')
const fs = require('fs')

const PORT = process.env.PORT||5000



const server = http.createServer((req,res)=>{

    let q = url.parse(req.url,true)
    let filename = "."+q.pathname
    console.log(filename)
    if(filename === './')
    {
        filename = "Quote"
    }
    filename += ".html"
    fs.readFile(filename,(err,data)=>{
        if(err)
        {
            res.writeHead(404,{'Content-type':'text/html'})
            res.end('ERROR 404 could not load the page')
        }
        else
        {
            res.writeHead(200,{'Content-type':'text/html'})
            res.write(data)
            res.end()
        }
    })
   

})

server.listen(PORT)