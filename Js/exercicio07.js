const nome = prompt ("Por favor, digite o nome do usuario")

let senha = prompt ("Por favor, digite a sua senha")
        

//declarando a regra para login
if (nome === "admin" && senha === "1234" ) {
        
alert ("Acesso Permitido")  // aparece na pagina

 } else {
alert ("Acesso negado")  // aparece na pagina

}

/*quando a gente faz a comparação com "=" ele fica responsável por pegar apenas o resultado e verifica para liberação,
mas quando fazemos a comparação com "===" ele vai verificar o tipo da variavel e o resultado para fazer a liberação*/