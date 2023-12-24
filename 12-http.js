const http = require('http');

const server=http.createServer((req,res)=>{
    console.log(req);
    if(req.url==='/'){
        res.end('Welcome to homa page');
        return ;
    }
    if(req.url==='/about'){
        res.write('welcome to about page');
     return ;
    }
    res.end(`<h1>Oops!</h1>
    <p>We cannot seem to find the page </p>
    <a href="/">back</a>
    `);
})

server.listen(5000);