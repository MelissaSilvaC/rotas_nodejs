/**
 * pcaotes a serem instalados:
 * 
 * npm install express --save
 * npm install sequelize --save
 * npm install mysql2 --save
 * 
 * --------------------
 * 
 */

const express = require("express")
const app = express()
const agendamentos = require("./banco")

app.listen(8081, function(){
    console.log("Servidor Ativo!")
})

app.get("/", function(req, res){
    res.send("Página principal")
})

app.get("/cadastrar/:nome/:endereco", function(req, res){
    //quando a rota for ativada, será feito o cadastro automaticamente
    agendamentos.create({
        nome: req.params.nome,
        endereco: req.params.endereco
    })
    res.send("Dados cadastrados com sucesso!")
})
