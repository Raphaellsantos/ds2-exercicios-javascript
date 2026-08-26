  //captando os dados do usuario
  let usuario = "";
  let senha = "";
  let contagem = 0;
  let acessoLiberado = false;

    // laço de repetição até que o acesso seja liberado
     while (contagem < 3 && !acessoLiberado){ //enquanto a contagem for < 3 e não estiver liberado o acesso, digite novamente
        usuario = prompt ("Digite o usuario");
        senha = prompt ("Digite a sua senha");
            
        if (usuario === "admin" && senha === "123"){  //regra para liberar o sistema
        acessoLiberado = true;

            alert ("acesso liberado");

            console.log (`Olá ${usuario},  seja bem vindo ao sistema`) // mensagem de boas vindas ao "admin"

        }else {

         contagem++;
         if (contagem < 3){
        alert (`Erro na identificação, tentativa ${contagem} de 3`)
        }

        }

        }
        
        if (!acessoLiberado){

            alert("Acesso bloqueado")

        }
