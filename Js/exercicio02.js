const nome = prompt ("Por favor, digite o nome do usuario");
let idade = prompt ("Digite sua idade");
const cidade = prompt ("Digite sua cidade natal");
let estaMatriculado = true;
const NotaAvaliacao = 9;


console.log ("Nome : ", nome, "- ", "Tipo Variavel : ", typeof nome);
console.log ("Idade : ", idade,"- ","Tipo Variavel : ", typeof idade);
console.log ("Cidade : ",cidade,"- ","Tipo Variavel : ",typeof cidade);
console.log ("Está Matriculado ? ", estaMatriculado,"- ","Tipo Variavel : ", typeof estaMatriculado);
console.log ("Nota para avaliação 01 :  ", NotaAvaliacao,"- ","Tipo Variavel : ", typeof NotaAvaliacao);


/*Variaveis declaradas como "const" significa que o valor não vai sofrer alterações durante o processo de execução,
já as variaveis declaradas como "let" significa que elas podem sofrer alterações durante o processo de execução*/
