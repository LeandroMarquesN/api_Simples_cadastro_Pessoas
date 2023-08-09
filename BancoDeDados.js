const sequenc = {
    _id: 1,
    get id() { return this._id++ }
}

const Pessoas = {}

function cadastrarPessoa(pessoa) {
    if (!pessoa.id) pessoa.id = sequenc.id
    Pessoas[pessoa.id] = pessoa
    return pessoa
}

function escolherPessoa(id) {
    return Pessoas[id] || "Cadastro não Encontrado! tente um id valido!!"
}

function Pessoascadastradas() {
    return Object.values(Pessoas)
}


function ExcluirPessoaCadastrada(id) {
    const pessoa = Pessoas[id]
    delete Pessoas[id]
    return pessoa
}
module.exports = { cadastrarPessoa, escolherPessoa, Pessoascadastradas, ExcluirPessoaCadastrada }