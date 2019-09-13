
const enventEmitteur = require('events')

let monEcouteur = new enventEmitteur()

monEcouteur.on("saute", function(a,b){

    console.log("J'ai saute", a, b)
})

monEcouteur.emit("saute", 10,20)

/*
let http = require('http')
let fs = require('fs')
let server = http.createServer();
let url = require("url")
server.on('request',(request, response)=>{
    
    fs.readFile('index.html','utf8',(err, data)=>{

        let query = url.parse(request.url,true).query
        let name = query.name === undefined ? 'annonyme': query.name
        if(err){
            response.writeHead(404)
            response.end('ce fichier nexiste pas')
        }else{
            response.writeHead(200,{
                'content-type': 'text/html; charset=utf-8'
            }) 
           // 
           data = data.replace('{{name}}', name)
           response.end(data)
        }
    })

    

   /* 

    if(query.name===undefined){
        response.write("bonjour annonyme ")
    }else{
        response.write("bonjour " + query.name)
    }

    response.end("termine")
    
   
})
server.listen(8080)
*/