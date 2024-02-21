// console.log("hello");
// const http = require('http')//import


// http.createServer(function(req,res){
//     res.send("hello from my server")
// }).listen(7000)

// console.log("start server")

// const express= require('express')

// var app= express();

// var json= require('json')

// app.get('/',function(req,res)
// {
//     res.send("start server")
// })

// app.get('/user',function(req,res)
// {
//     res.send("ward")
// })

// app.get('/fact/:num', function(req,res)
// {
//     //req.body -> payload for the request
//     //req.params -> part from url 
//     // console.log(req.params.num)
//     // var myFact =fact(req.params.num)
//     res.json("square is" + req.params.num*req.params.num)
// })

// var server= app.listen(7000, function()
// {
//     var host = server.address().address // local one  
//     var port = server.address().port 
// })


const express= require('express')

var app= express();

//var json= require('json')

app.get('/',function(req,res)
{
    res.send("start server")
})

app.get('/form', function(req,res)
{
    res.sendFile(__dirname+'/form.html')
})

var bodyParser= require('body-parser')

var urlEncoded= bodyParser.urlencoded({extended:false})

app.post('/submitform',urlEncoded,function(req,res){
    res.send("data submitted"+req.body.email+req.body.password)
})

var server= app.listen(7000, function()
{
    var host = server.address().address // local one  
    var port = server.address().port 
})