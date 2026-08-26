# Exercício 1 — Página estática e fluxo de uma requisição


Em qual momento uma página dinâmica é processada e por que um banco de dados pode ser necessário?

R: A página dinâmica é processada pelo servidor quando é solicitada pelo usuario, o banco de dados pode ser necessário para arquivar noticias, imagens que vão ser exibida para o usuario, sendo assim o processo mais comum.



# Exercício 2 — Client-side e Server-side

|                                   | Client-side                                                                         | Server-side                                                                            |
|:---------------------------------:|:-----------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------:|
| **Local de execução**             | No navegador do usuário                                                             | No servidor (computador remoto)                                                        |
| **Tecnologias de exemplo**        | HTML, CSS, JavaScript (DOM, fetch)                                                  | Node.js, PHP, Python, Java, VBScript ou ColdFusion                                     |
| **Responsabilidades**             | Interface visual, interatividade, validações simples                                | Regras de negócio, acesso a banco de dados, autenticação, segurança                    |
| **Vantagens**                     | Resposta rápida (sem precisar do servidor a cada ação), reduz carga no servidor     | Mais seguro (dados sensíveis não ficam expostos), processamento mais pesado é possível |
| **Limitações**                    | Código visível/manipulável pelo usuário, poder de processamento limitado            | Depende de conexão com a internet, mais lento (precisa ir e voltar do servidor)        |
| **Exemplos de tarefas adequadas** | Validar se um campo de formulário está vazio, animações, mostrar/esconder elementos | Verificar login e senha, salvar dados no banco, processar pagamentos                   |

# #Classificando as operações

1. validar se um campo obrigatório foi preenchido; (Client-side) 
Essa validação é feita no navegador, antes mesmo de enviar os dados ao servidor.

2. consultar dados sigilosos de um cliente; (Server-side)
Dados sigilosos (CPF, senha, saldo bancário, endereço, etc.) precisam ser acessados e processados no servidor, que tem controle de autenticação, autorização e conexão segura com o banco de dados.

3. alterar a cor de um botão após um clique; (Client-side)
É uma alteração puramente visual/de interface (DOM), sem necessidade de processamento no servidor.

4. verificar login e senha em um banco de dados; (Server-side)
A verificação de credenciais envolve acesso ao banco de dados e comparação de senhas (geralmente com hash/criptografia), isso procesa ocorrer no servidor

5. calcular o total de uma compra;  (Server-side)
Um cálculo simples pode ser feito no client-side para exibição rápida, mas o cálculo oficial/definitivo do total deve ser feito no servidor.

6. controlar uma sessão de usuário. (Serve-side)
O controle de sessão (login ativo, tokens, tempo de expiração, permissões) precisa ser gerenciado no servidor, que mantém o estado de forma confiável e segura