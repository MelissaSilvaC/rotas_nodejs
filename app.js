const express = require("express")
const app = express()

app.get("/", function(req, res){
    res.end("Index")
})

app.get("/cadastrar/:produto", function(req,res){
    res.end("Produto: " + req.params.produto)
})

app.get("/cadastrar/:produto/:modelo", function(req,res){
    res.end("Produto: " + req.params.produto + "\nModelo: " + req.params.modelo)
})

app.get("/contato/sac/:produto", function(req,res){
    var product = req.params.produto
    res.end("Entrando em contato com o SAC acerca do produto: " + product)
})

app.listen(8081, function(){
    console.log("Servidor carregado")
})