
class GerenciadorContatos {
    constructor() {
        this.contatos = [];
    }

    adicionarContato(contatoAdapter) {
        contatoAdapter.adicionar(this);
    }

    removerContato(contatoAdapter) {
        contatoAdapter.remover(this);
    }

    listarContatos() {
        console.log("Lista de contatos:");
        if (this.contatos) {
            this.contatos.forEach(contato => {
                console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
            });
        } else {
            console.log("Nenhum contato encontrado.");
        }
    }

    buscarContatos(strategy, nome) {
        if (!nome || !this.contatos) {
            return [];
        }
        return strategy.buscar(this.contatos, nome);
    }
}

module.exports = GerenciadorContatos;
