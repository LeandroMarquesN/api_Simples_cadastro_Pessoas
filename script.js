const porta = 9004
// importando modulos


const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancDados = require('./BancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))


// Requisição  methodo get
app.get('/pessoas', (req, resp, next) => {
    resp.send(bancDados.Pessoascadastradas())

})

// requisição Methodo Get
app.get('/pessoas/:id', (req, resp, next) => {
    resp.send(bancDados.escolherPessoa(req.params.id))
})
// ===========================================================
// ==== Methodo para salvar um usuario
app.post('/pessoas', (req, resp, next) => {
    const pessoa = bancDados.cadastrarPessoa(
        {
            //A forma de pegar os dados e atraves do requisição.body. o que vc quiser
            id: req.params.id,
            nome: req.body.nome,
            idade: req.body.idade,
            sexo: req.body.sexo,
            endereco: req.body.endereco

        }
    )
    resp.send(pessoa) //converte para jason grqças ao method send
})
// ==================================================
// ============= Methodo para alterar =============
app.put('/pessoas/:id', (req, resp, next) => {
    const pessoa = bancDados.cadastrarPessoa(
        {
            //A forma de pegar os dados e atraves do requisição.body. o que vc quiser
            id: req.params.id,
            nome: req.body.nome,
            idade: req.body.idade,
            sexo: req.body.sexo,
            endereco: req.body.endereco

        }
    )
    resp.send(pessoa) //converte para jason grqças ao method send
})
// =====================================================
// ============= Excluir Produto =======================
app.delete('/pessoas/:id', (req, resp, next) => {
    const pessoa = bancDados.ExcluirPessoaCadastrada(req.params.id)
    resp.send(pessoa) //converte para jason grqças ao method send
})


// Executando o sevidor na porta
app.listen(porta, () => {
    console.log(`Sevidor sendo Executado  na porta  ${porta} `)

})
// Local que esta sendo executado o nosso servidor
// http://localhost:9004/pessoas
