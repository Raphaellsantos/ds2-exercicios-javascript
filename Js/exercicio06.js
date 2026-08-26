const nome = prompt ("Qual o nome do aluno");
let nota1 = prompt ("Qual foi a nota da P1 ?");
let nota2 = prompt ("Qual foi a nota da P2 ?");

const apenasDigitos = /^\d+$/; //variavel para acertar somente numeros


nota1 = Number (nota1); //convertendo a variavel string em numero
nota2 = Number (nota2); 
calculaMedia = (nota1 + nota2) /2; //declarando uma regra para calcular a média


//regras para aprovação do aluno e entrada dos valores 
if (!apenasDigitos.test(nota1,nota2) || nota1, nota2 > 10 && nota1, nota2 <0) {
    alert ("Caracteres não permitidos")
}
else if (!apenasDigitos.test(nota1,nota2) || calculaMedia >=7){
    console.log (`Olá ${nome}, sua média foi ${calculaMedia}, parabens você foi aprovado !!`)
}else if (calculaMedia >=5 && calculaMedia <7) {
    console.log (`Olá ${nome}, sua média foi ${calculaMedia}, você esta de recuperação !!`)
}else {
    console.log (`Olá ${nome}, sua média foi ${calculaMedia}, infelizmente você foi reprovado !!`)
}
