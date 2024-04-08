
const ContatoAdapter = require('./ContatoAdapter');
const GerenciadorContatos = require('./GerenciadorContatos');
const BuscaPorNomeStrategy = require('./BuscaPorNomeStrategy');

// Criando instância do gerenciador de contatos
const gerenciadorContatos = new GerenciadorContatos();

// Adicionando alguns contatos
const contato1 = new ContatoAdapter("Fulano", "123456789", "fulano@example.com");
gerenciadorContatos.adicionarContato(contato1);

const contato2 = new ContatoAdapter("Ciclano", "987654321", "ciclano@example.com");
gerenciadorContatos.adicionarContato(contato2);

// Listando contatos
console.log("Listagem de Contatos:");
gerenciadorContatos.listarContatos();

// Buscando contatos por nome
const buscaStrategy = new BuscaPorNomeStrategy();
const resultadosBusca = gerenciadorContatos.buscarContatos(buscaStrategy, "Fulano"); // Aqui passamos o nome para a busca
console.log("\nResultados da Busca:");
resultadosBusca.forEach(contato => {
    console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
});
