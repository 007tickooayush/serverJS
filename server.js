// var http = require('http');

// http.createServer((request,response)  => {
//     response.writeHead(200,{'Content-Type':'text/plain'});
//     response.write('REPONSE: Server Created');
//     response.end();
// }).listen(5000);

const express = require('express');
const app = express();
const port = 3000;

// REST API
app.get('/',(req,res) => {res.send('EXPRESS APP')});
app.get('/test',(req,res) => {res.send('TEST URL [EXPRESS APP]')});

app.listen(port,()=> console.log(`LISTENING on PORT:${port} URL: http://localhost:${port}`));
