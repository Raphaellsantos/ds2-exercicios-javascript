//captando dados

const nome = prompt ("Digite o nome do aluno");
let curso = prompt ("Qual curso está matriculado ?");
let nota1 = Number (prompt ("Por favor, digite a nota P1"));
let nota2 = Number (prompt ("Por favor, digite a nota P2"));





// função para validar nota

function capturarNotaValida(mensagem) {
    let nota = parseFloat(prompt(mensagem));

    while (isNaN(nota) || nota < 0 || nota > 10) {
        nota = parseFloat(prompt(`Valor inválido! ${mensagem} (deve ser entre 0 e 10)`));
    }

    return nota;
}


// Função para calcular a média de duas notas

function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

// Função para classificar a situação do aluno 

function classificarSituacao(media) {
    if (media >= 7) {
        return "Aprovado";
    } else if (media >= 5) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}


// Variáveis de controle

let continuar = "s";
let totalAlunos = 0;

//laço do sistema


do {

    let nome = prompt("Digite o nome do aluno:");
    let curso = prompt("Qual curso está matriculado ?");

    let nota1 = capturarNotaValida("Digite a primeira nota:");
    let nota2 = capturarNotaValida("Digite a segunda nota:");

    let media = calcularMedia(nota1, nota2);
    let situacao = classificarSituacao(media);

    totalAlunos++;

    console.log("===== FICHA DO ALUNO =====");
    console.log(`Nome: ${nome}`);
    console.log(`Curso: ${curso}`);
    console.log(`Nota 1: ${nota1}`);
    console.log(`Nota 2: ${nota2}`);
    console.log(`Média: ${media.toFixed(2)}`);
    console.log(`Situação: ${situacao}`);
    console.log("===========================");

    continuar = prompt("Deseja cadastrar outro aluno ? (S / N)");

} while (continuar === "s");

console.log(`Total de alunos cadastrados: ${totalAlunos}`);
