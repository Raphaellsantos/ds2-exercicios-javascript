 //declarando as variaveis
 
let numero = prompt ("Digite o numero desejada para gerar tabuada");


// Convertendo o texto digitado para número
numero = Number(numero);


// Verifica se é numérico e se é um número inteiro
while (isNaN(numero) || !Number.isInteger(numero)) {
    numero = Number(prompt("Valor inválido! Digite um número inteiro:"));
}


 
//condicional para a tabuada
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}
 

