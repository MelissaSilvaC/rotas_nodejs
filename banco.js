const Sequelize = require("sequelize")
//Sequelize(nomeDoBanco, usuarioDobanco, senha, host)
const sequelize = new Sequelize("banco", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

//validando a conexão
sequelize.authenticate().then(
    function(){
        console.log("Conexão realizada com sucesso!")
    }
).catch(function(erro){
    console.log("falha na conexão: " + erro)
})

//Criando uma tabela para o banco, como não colocamos tamanho, o tamnho máximo é definido (255)
//sequelize.define(nomeDaTabela, {campos})
const agendamentos = sequelize.define("agendamentos", {
    nome:{
        type: Sequelize.STRING
    },
    endereco:{
        type: Sequelize.STRING
    },
    bairro:{
        type: Sequelize.STRING
    },
    cep:{
        type: Sequelize.STRING
    },
    cidade:{
        type: Sequelize.STRING
    },
    estado:{
        type: Sequelize.STRING
    },
    obs:{
        type: Sequelize.STRING
    }

})

//forçando o Node a escrever essa tabela no banco
//force: true -> Mesmo que a tabela exista, o método vai sobrescrever a tabela e apagar os dados
//agendamentos.sync({force: true})

//gravando dados no banco de forma estática
//campo não passados serão gravados como nulo (se possivel)

// agendamentos.create({
//     nome: "nome",
//     endereco: "endereco",
//     bairro: "bairro",
//     cep: "cep",
//     cidade: "cidade",
//     estado: "estado",
//     obs: "obs"
// })

module.exports = agendamentos