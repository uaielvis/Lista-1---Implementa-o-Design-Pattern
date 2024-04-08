# Lista-1-Implementacao-Design-Pattern
Objetivo: Deve-se aplicar padrões de projeto em JavaScript, tanto estruturais quanto comportamentais em um contexto prático.

Execute o arquivo index.js usando o Node.js com o comando:

node index.js

Isso executará o arquivo index.js e você deverá ver a saída no terminal.

----------------------------------------------------------------------------

Documentação do Projeto

Padrões de Projeto Utilizados:

Adapter (Adaptador):

Justificativa: O padrão Adapter foi escolhido para permitir a integração da classe Contato com o GerenciadorContatos, adaptando a interface da classe Contato para que ela possa ser utilizada pelo GerenciadorContatos. Isso facilita a adição e remoção de contatos sem modificar o código existente em GerenciadorContatos. Assim, se houver mudanças futuras na implementação da classe Contato, somente o adaptador precisa ser ajustado, mantendo o código do GerenciadorContatos inalterado.
Strategy (Estratégia):

Justificativa: O padrão Strategy foi escolhido para implementar a funcionalidade de busca de contatos de forma flexível e extensível. Ele permite encapsular algoritmos de busca em classes separadas (estratégias), o que possibilita que diferentes algoritmos de busca possam ser selecionados em tempo de execução. Dessa forma, se houver a necessidade de modificar ou adicionar novos algoritmos de busca, isso pode ser feito sem afetar o código existente no GerenciadorContatos. Isso também promove o princípio de abertura/fechamento (Open/Closed Principle), permitindo que o comportamento do sistema possa ser estendido sem modificar o código existente