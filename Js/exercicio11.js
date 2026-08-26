const nome = prompt ("Digite o seu nome");
let numero1 = Number(prompt("Digite um numero de 0 a 10"));
let numero2 = Number(prompt("Digite outro um numero de 0 a 10"));
let nota1 = Number(prompt("Digite a nota da P1"));
let nota2 = Number(prompt("Digite a nota da P2"));



function somar (numero1, numero2) {
    
    return numero1 + numero2;

}

function calcularMedia (nota1, nota2) {
    
    return (nota1 + nota2) /2;

}

function classificarMedia (media){

    if (media >= 7) {
       return ("Aluno está aprovado")
    }else if (media >=5){
        return ("Aluno está de recuperação")
    }else {
        return ("Aluno está de reprovado")
    }
}

function criarSaudacao (nome){
    
 return `Olá ${nome}!`;

}

// Armazenando os resultados em variáveis
const resultadoSoma = somar (numero1, numero2);
const media = calcularMedia (nota1, nota2);
const classificacao = classificarMedia (media);
const saudacao = criarSaudacao (nome);


console.log(saudacao);
console.log(`A soma dos números foi: ${resultadoSoma}`);
console.log(`A média foi: ${media}`);
console.log(`Situação: ${classificacao}`);
