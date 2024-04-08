
class BuscaPorNomeStrategy {
    buscar(contatos, nome) {
        if (!nome || !contatos) {
            return [];
        }
        return contatos.filter(contato => contato.nome.toLowerCase().includes(nome.toLowerCase()));
    }
}

module.exports = BuscaPorNomeStrategy;
