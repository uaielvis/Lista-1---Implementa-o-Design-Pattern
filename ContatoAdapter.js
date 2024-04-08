
const Contato = require('./Contato');

class ContatoAdapter {
    constructor(nome, telefone, email) {
        this.contato = new Contato(nome, telefone, email);
    }

    adicionar(gerenciadorContatos) {
        gerenciadorContatos.contatos.push(this.contato);
        console.log(`Contato ${this.contato.nome} adicionado com sucesso.`);
    }

    remover(gerenciadorContatos) {
        const index = gerenciadorContatos.contatos.findIndex(contato => contato === this.contato);
        if (index !== -1) {
            gerenciadorContatos.contatos.splice(index, 1);
            console.log(`Contato ${this.contato.nome} removido com sucesso.`);
        } else {
            console.log(`Contato ${this.contato.nome} não encontrado.`);
        }
    }
}

module.exports = ContatoAdapter;
