let idade = prompt("Qual a sua idade ?");

//convertendo string para numero para realizar a regra 
 let idadeDigitada = Number (idade);
 const apenasDigitos = /^\d+$/;  //variavel para aceitar somente numeros



//declarando a regra para voto
if ( !apenasDigitos.test(idade) || idadeDigitada ==="" || idadeDigitada ==="null" || idadeDigitada <= 0 || isNaN (idade)){
    alert ("Idade invalida !!")

}else if (idade < 16){
    console.log (`Pela sua idade que é de: ${idade} anos, não é permitido votar`) 

}else if (idade >= 16 && idade <=17) {
    console.log (`Pela sua idade que é de:  ${idade} anos, seu voto é opcional`)

}else {
    console.log(`Pela sua idade que é de:  ${idade} anos, seu voto é obrigatório`);

}

