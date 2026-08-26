let numero = Number(prompt ("Digite alguns numeros ou '0' para sair "));  //entrada já convertendo string em Number
let quantidade = 0;
let mediaNumero;
let somaNumeros = 0;
let maior = null;
let menor = null;


while (numero !==0 ) {
somaNumeros = somaNumeros + numero;  //acumulando a soma 
quantidade = quantidade + 1;  //fazendo a contagem de mais um numero;

mediaNumero = (somaNumeros / quantidade); //fazendo a media de contagem de numero 


//regra de verificação do numero
if (maior === null || numero > maior ){
    maior = numero;
}

if (menor === null || numero < menor ){
    menor = numero;

}

numero = Number(prompt ("Digite alguns numeros ou '0' para sair "));  //proximo numero

}


//encerrando o loop
if ( quantidade === 0) {
    console.log ("Nenhumm numero foi digitado anteriormente ");

}else {

    console.log (`Quantidade de numeros digitados : ${quantidade}`);
    console.log (`Soma dos numeros : ${somaNumeros}`);
    console.log (`media dos valores informados : ${mediaNumero}`);
    console.log (`Maior valor digitado : ${maior}`);
    console.log (`Menor valor digitado : ${menor}`);
    
}


